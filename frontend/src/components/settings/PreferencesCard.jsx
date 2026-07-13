import { Globe } from "lucide-react";

function PreferencesCard({
  language,
  setLanguage,
  timezone,
  setTimezone,
  dateFormat,
  setDateFormat,
}) {
  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl">

      {/* Heading */}

      <div className="mb-6 flex items-center gap-3">

        <Globe className="h-6 w-6 text-cyan-400" />

        <h2 className="text-xl font-semibold text-white">
          Preferences
        </h2>

      </div>

      <div className="space-y-6">

        {/* Language */}

        <div className="flex items-center justify-between">

          <span className="text-slate-300">
            Language
          </span>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-800 px-4 py-2 text-white outline-none transition focus:border-cyan-400"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
          </select>

        </div>

        {/* Timezone */}

        <div className="flex items-center justify-between">

          <span className="text-slate-300">
            Timezone
          </span>

          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-800 px-4 py-2 text-white outline-none transition focus:border-cyan-400"
          >
            <option>Asia/Kolkata</option>
            <option>UTC</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
            <option>Asia/Tokyo</option>
          </select>

        </div>

        {/* Date Format */}

        <div className="flex items-center justify-between">

          <span className="text-slate-300">
            Date Format
          </span>

          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="rounded-xl border border-white/10 bg-slate-800 px-4 py-2 text-white outline-none transition focus:border-cyan-400"
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>

        </div>

      </div>

    </div>
  );
}

export default PreferencesCard;