import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import useProfile from "../../hooks/useProfile";
import api from "../../services/api";

import {
  Settings as SettingsIcon,
} from "lucide-react";

import ProfileCard from "../../components/settings/ProfileCard";
import AppearanceCard from "../../components/settings/AppearanceCard";
import PreferencesCard from "../../components/settings/PreferencesCard";
import EditProfileModal from "../../components/settings/EditProfileModal";
import Toast from "../../components/settings/Toast";

function Settings() {
  const { profile } = useProfile();

  const [showModal, setShowModal] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const [timezone, setTimezone] = useState(
    localStorage.getItem("timezone") || "Asia/Kolkata"
  );

  const [dateFormat, setDateFormat] = useState(
    localStorage.getItem("dateFormat") || "DD/MM/YYYY"
  );

  useEffect(() => {
    if (profile) {
      setUsername(profile.username || "");
      setEmail(profile.email || "");
    }
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    localStorage.setItem("timezone", timezone);
    localStorage.setItem("dateFormat", dateFormat);
  }, [theme, language, timezone, dateFormat]);

  const handleUpdateProfile = async () => {
    try {
      await api.put("accounts/profile/update/", {
        username,
        email,
      });

      setShowModal(false);

      setSuccessMessage("Profile updated successfully.");

      setTimeout(() => {
        setSuccessMessage("");
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error(error);

      setErrorMessage("Failed to update profile.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <DashboardLayout>

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <SettingsIcon className="h-8 w-8 text-cyan-400" />

          <h1 className="text-3xl font-bold text-white">
            Settings
          </h1>

        </div>

        <p className="mt-2 text-slate-400">
          Manage your SmartMail AI account and preferences.
        </p>

      </div>

      {/* Profile */}

      <ProfileCard
        profile={profile}
        onEdit={() => setShowModal(true)}
      />

      {/* Cards */}

      <div className="mt-8 grid gap-8 xl:grid-cols-2">

        <AppearanceCard
          theme={theme}
          setTheme={setTheme}
        />

        <PreferencesCard
          language={language}
          setLanguage={setLanguage}
          timezone={timezone}
          setTimezone={setTimezone}
          dateFormat={dateFormat}
          setDateFormat={setDateFormat}
        />

      </div>

      {/* Toasts */}

      <Toast
        message={successMessage}
        type="success"
      />

      <Toast
        message={errorMessage}
        type="error"
      />

      {/* Modal */}

      <EditProfileModal
        showModal={showModal}
        setShowModal={setShowModal}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        handleUpdateProfile={handleUpdateProfile}
      />

    </DashboardLayout>
  );
}

export default Settings;