import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Star } from "lucide-react";

const RecentEmails = ({ emails }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recent Emails
        </h2>

        <button
          onClick={() => navigate("/dashboard/inbox")}
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          View All →
        </button>
      </div>

      <div className="space-y-4">
        {emails?.length === 0 ? (
          <div className="py-10 text-center">
            <Mail className="mx-auto h-10 w-10 text-slate-500" />

            <p className="mt-4 text-slate-400">
              No recent emails.
            </p>
          </div>
        ) : (
          emails?.map((email) => (
            <div
              key={email.id}
              onClick={() =>
                navigate(`/dashboard/inbox/${email.id}`)
              }
              className="
                cursor-pointer
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/10
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">
                    {email.subject}
                  </h3>

                  <p className="mt-1 text-sm text-cyan-400">
                    From: {email.sender}@smartmail.com
                  </p>
                </div>

                {email.priority === "High" && (
                  <div className="flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400" />

                    <span className="text-xs font-semibold text-yellow-300">
                      HIGH
                    </span>
                  </div>
                )}
              </div>

              <p className="mt-4 text-sm text-slate-500">
                {new Date(email.created_at).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                })}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentEmails;