import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import { Mail } from "lucide-react";

import useEmailSearch from "../../hooks/useEmailSearch";

function Sent() {
  const { emails, loading } = useEmailSearch("emails/sent/");

  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <PageHeader
        title="Sent"
        subtitle="View all emails you have sent."
      />

      <div className="mt-8 space-y-4">
        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-slate-400">Loading sent emails...</p>
          </div>
        ) : emails.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-3xl">
            <Mail
              size={60}
              className="mx-auto mb-4 text-slate-500"
            />

            <h2 className="text-2xl font-bold text-white">
              No Sent Emails
            </h2>

            <p className="mt-3 text-slate-400">
              Emails you send will appear here.
            </p>
          </div>
        ) : (
          emails.map((email) => (
            <div
              key={email.id}
              onClick={() => navigate(`/dashboard/inbox/${email.id}`)}
              className="
                cursor-pointer
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition
                hover:border-cyan-400/40
                hover:bg-white/10
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {email.subject}
                  </h2>

                  <p className="mt-1 text-cyan-400">
                    To: {email.recipient}@smartmail.com
                  </p>
                </div>

                <span className="text-sm text-slate-400">
                  {new Date(email.created_at).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  })}
                </span>
              </div>

              <p className="mt-4 line-clamp-2 text-slate-300">
                {email.body}
              </p>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}

export default Sent;