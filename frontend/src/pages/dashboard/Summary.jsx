import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import { Brain } from "lucide-react";

import useEmailSearch from "../../hooks/useEmailSearch";

function Summary() {
  const { emails, loading } = useEmailSearch("emails/summary/");

  return (
    <DashboardLayout>
      <PageHeader
        title="AI Summary"
        subtitle="Quick summaries of your received emails."
      />

      <div className="mt-8 space-y-4">
        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-slate-400">Loading summaries...</p>
          </div>
        ) : emails.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-3xl">
            <Brain
              size={60}
              className="mx-auto mb-4 text-slate-500"
            />

            <h2 className="text-2xl font-bold text-white">
              No Summaries Available
            </h2>

            <p className="mt-3 text-slate-400">
              AI-generated summaries will appear here.
            </p>
          </div>
        ) : (
          emails.map((email) => (
            <div
              key={email.id}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-white/10
                hover:shadow-lg
                hover:shadow-cyan-500/10
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

              <div className="mt-5 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5 shadow-inner">
                <div className="mb-2 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-cyan-400" />
                  <span className="font-semibold text-cyan-300">
                    AI Summary
                  </span>
                </div>

                <p className="leading-7 text-slate-200">
                  {email.summary || "No summary available."}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}

export default Summary;