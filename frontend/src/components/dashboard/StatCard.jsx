import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  trend,
  subtitle,
}) => {
  const isUp = trend?.toLowerCase() === "up";

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-3xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
      "
    >
      <div className="flex items-start justify-between">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 transition-transform duration-300 group-hover:scale-105">
          {Icon && (
            <Icon className="h-7 w-7 text-cyan-400" />
          )}
        </div>

        {/* Trend Badge */}
        {change && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
              isUp
                ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                : "border border-red-500/20 bg-red-500/10 text-red-400"
            }`}
          >
            {isUp ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}

            {change}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-8">

        <p className="text-sm font-medium text-slate-400">
          {title}
        </p>

        <h3 className="mt-3 text-4xl font-black tracking-tight text-white">
          {value}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
};

export default StatCard;