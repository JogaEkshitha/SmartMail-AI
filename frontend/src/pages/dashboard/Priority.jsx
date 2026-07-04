import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import { Star } from "lucide-react";

import useEmailSearch from "../../hooks/useEmailSearch";

function Priority() {
  const { emails, loading } = useEmailSearch("emails/priority/");

  return (
    <DashboardLayout>
      <PageHeader
        title="Priority Inbox"
        subtitle="Important emails that require your attention."
      />

      <div className="mt-8 space-y-4">
        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-slate-400">Loading priority emails...</p>
          </div>
        ) : emails.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-3xl">
            <Star
              size={60}
              className="mx-auto mb-4 text-yellow-500"
            />

            <h2 className="text-2xl font-bold text-white">
              No High Priority Emails
            </h2>

            <p className="mt-3 text-slate-400">
              You're all caught up.
            </p>
          </div>
        ) : (
          emails.map((email) => (
            <div
              key={email.id}
              className="
                rounded-3xl
                border
                border-yellow-500/30
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-yellow-400/60
                hover:bg-white/10
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-yellow-500/10
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {email.subject}
                  </h2>

                  <p className="mt-1 text-cyan-400">
                    From: {email.sender}@smartmail.com
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-2">
                  <Star
                    size={16}
                    className="text-yellow-400"
                  />

                  <span className="text-sm font-semibold text-yellow-300">
                    HIGH
                  </span>
                </div>
              </div>

              <p className="mt-5 line-clamp-3 text-slate-300">
                {email.body}
              </p>

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
    </DashboardLayout>
  );
}

export default Priority;