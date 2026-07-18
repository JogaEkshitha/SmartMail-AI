import React, { useRef, useState, useEffect } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  UserCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useSearch } from "../../context/SearchContext";
import useNotifications from "../../hooks/useNotifications";
import useProfile from "../../hooks/useProfile";

import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import LogoutModal from "./LogoutModal";

const TopNavbar = () => {
  const navigate = useNavigate();

  const { searchQuery, setSearchQuery } = useSearch();
  const { profile } = useProfile();

  const {
    notifications,
    unread,
    refreshNotifications,
  } = useNotifications();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 h-20 border-b border-white/10 bg-white/5 backdrop-blur-3xl">

      <div className="flex h-full items-center justify-between px-6 lg:px-8">

        {/* Left */}

        <div className="flex items-center gap-8">

          <h1 className="text-2xl font-bold tracking-tight text-white">
            Dashboard
          </h1>

          {/* Search */}

          <div className="hidden md:block">

            <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-3xl transition-all duration-300 focus-within:border-cyan-400/30 focus-within:bg-white/10">

              <Search className="h-5 w-5 text-slate-400" />

              <input
                type="text"
                placeholder="Search emails..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Notifications */}

          <div
            className="relative"
            ref={notificationRef}
          >

            <button
              type="button"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:to-blue-500/15"
            >

              <Bell className="h-5 w-5 text-slate-300" />

              {unread > 0 && (
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {unread}
                </span>
              )}

            </button>

            {showNotifications && (
              <NotificationDropdown
                notifications={notifications}
                unread={unread}
                refreshNotifications={refreshNotifications}
                onClose={() =>
                  setShowNotifications(false)
                }
              />
            )}

          </div>

                    {/* Profile */}

                    <div
            className="relative"
            ref={profileRef}
          >

            <button
              type="button"
              onClick={() =>
                setShowProfileMenu(!showProfileMenu)
              }
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-3xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/10"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20">

                <UserCircle2 className="h-7 w-7 text-cyan-400" />

              </div>

              <div className="hidden text-left sm:block">

                <p className="text-sm font-semibold text-white">
                  {profile?.username || "User"}
                </p>

                <p className="text-xs text-slate-400">
                  SmartMail AI User
                </p>

              </div>

              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                  showProfileMenu ? "rotate-180" : ""
                }`}
              />

            </button>

            {showProfileMenu && (
              <ProfileDropdown
                profile={profile}
                onClose={() => setShowProfileMenu(false)}
                onLogout={() => setShowLogoutModal(true)}
              />
            )}

          </div>

        </div>

      </div>

      {/* Logout Modal */}

      <LogoutModal
        show={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

    </header>
  );
};

export default TopNavbar;