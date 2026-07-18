import React from "react";
import {
  BrainCircuit,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const AIAssistant = ({
  insights,
  loading = false,
  username = "User",
}) => {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const lastAnalyzed = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const displayName = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : "User";

  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl transition-all duration-500">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-500/15 p-3">
          <BrainCircuit className="h-7 w-7 text-cyan-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Assistant
          </h2>

          <p className="text-sm text-slate-400">
            Powered by Gemini AI
          </p>
        </div>

      </div>

      {/* Greeting */}
      <div className="mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">

        <div className="flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-cyan-400" />

          <h3 className="font-semibold text-white">
            {greeting}, {displayName}! 👋
          </h3>

        </div>

        <p className="mt-2 text-sm text-slate-300">
          Here's your AI-powered inbox summary for today.
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {today}
        </p>

      </div>

      {/* AI Recommendations */}
      <div className="space-y-4">

        {loading ? (

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-800/40 p-6 text-center animate-pulse">

            <BrainCircuit className="mx-auto mb-4 h-8 w-8 animate-spin text-cyan-400" />

            <h3 className="font-semibold text-white">
              AI is analyzing your inbox...
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Generating personalized recommendations...
            </p>

          </div>

        ) : insights?.length > 0 ? (

          insights.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-800/40 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/30 hover:bg-slate-800/70"
            >

              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />

              <p className="text-sm leading-6 text-slate-200">
                {item}
              </p>

            </div>

          ))

        ) : (

          <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-center">

            <BrainCircuit className="mx-auto mb-3 h-8 w-8 text-slate-500" />

            <p className="text-slate-400">
              No AI recommendations available.
            </p>

          </div>

        )}

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

        <p className="text-xs text-slate-400">
          🤖 Gemini AI is actively monitoring your inbox.
        </p>

        <p className="text-xs text-slate-400">
          🕒 Last analyzed: {lastAnalyzed}
        </p>

      </div>

    </div>
  );
};

export default AIAssistant;