import { CalendarDays, Sparkles } from "lucide-react";
import useProfile from "../../hooks/useProfile";

const WelcomeCard = ({ insights }) => {
  const { profile } = useProfile();

  const hour = new Date().getHours();

  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-gradient-to-r
        from-cyan-500/10
        via-slate-900/70
        to-blue-600/10
        p-10
        backdrop-blur-3xl
      "
    >
      <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-cyan-400" />

          <h1 className="text-4xl font-bold text-white">
            {greeting}, {profile?.username || "User"} 👋
          </h1>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-cyan-400" />

          <span className="text-slate-400">
            {today}
          </span>
        </div>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Welcome back to{" "}
          <span className="font-semibold text-cyan-400">
            SmartMail AI
          </span>
          . Manage your emails with AI-powered intelligence.
        </p>

        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
          <p className="font-semibold text-cyan-300">
            💡 AI Insight
          </p>

          <p className="mt-2 text-slate-300">
            {insights?.length
              ? insights[0]
              : "Your inbox is looking great today."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;