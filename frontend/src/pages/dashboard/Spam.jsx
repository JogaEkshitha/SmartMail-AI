import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import SpamCard from "../../components/dashboard/SpamCard";
import api from "../../services/api";

function Spam() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpamEmails();
  }, []);

  const fetchSpamEmails = async () => {
    try {
      const response = await api.get("emails/spam/");
      setEmails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-slate-400">
          Loading spam emails...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Spam Detection
        </h1>

        <p className="mt-2 text-slate-400">
          AI detected spam emails.
        </p>
      </div>

      <div className="space-y-6">

        {emails.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-slate-400">
            No spam emails found.
          </div>
        ) : (
          emails.map((email) => (
            <SpamCard
              key={email.id}
              email={email}
            />
          ))
        )}

      </div>

    </DashboardLayout>
  );
}

export default Spam;