import { Palette, Moon } from "lucide-react";

function AppearanceCard({
  theme,
  setTheme,
}) {
  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl">

      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">

        <Palette className="h-6 w-6 text-cyan-400" />

        <h2 className="text-xl font-semibold text-white">
          Appearance
        </h2>

      </div>

      <div className="space-y-6">

        {/* Theme */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Moon className="h-5 w-5 text-slate-300" />

            <span className="text-slate-300">
              Theme
            </span>

          </div>

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "bg-cyan-500 text-slate-950"
                : "bg-slate-700 text-white"
            }`}
          >
            {theme === "dark"
              ? "Dark Mode"
              : "Light Mode"}
          </button>

        </div>

        {/* Accent Color */}

        <div className="flex items-center justify-between">

          <span className="text-slate-300">
            Accent Color
          </span>

          <div className="flex items-center gap-3">

            <div className="h-5 w-5 rounded-full bg-cyan-400 border border-cyan-200"></div>

            <span className="text-slate-400">
              Cyan
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AppearanceCard;