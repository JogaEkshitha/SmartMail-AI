import React from "react";
import {
  Briefcase,
  Wallet,
  User,
  Gift,
  FileText,
  Calendar,
} from "lucide-react";

const categoryConfig = {
  Work: {
    icon: Briefcase,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  Finance: {
    icon: Wallet,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  Personal: {
    icon: User,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  Promotion: {
    icon: Gift,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  General: {
    icon: FileText,
    color: "text-slate-400",
    bg: "bg-slate-500/10",
  },
};

const CategoryCard = ({ email }) => {
  const config =
    categoryConfig[email.category] || categoryConfig.General;

  const Icon = config.icon;

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-3xl
        transition-all
        duration-300
        hover:border-cyan-400/20
      "
    >
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${config.bg}`}
          >
            <Icon className={`h-6 w-6 ${config.color}`} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              {email.subject}
            </h3>

            <p className="mt-1 text-cyan-400">
              From: {email.sender}@smartmail.com
            </p>
          </div>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${config.bg} ${config.color}`}
        >
          {email.category}
        </span>

      </div>

      <p className="mt-5 line-clamp-3 text-slate-300">
        {email.body}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

        <div className="flex items-center gap-2 text-slate-400">
          <Calendar size={16} />
          <span>
            {new Date(email.created_at).toLocaleDateString()}
          </span>
        </div>

        <span className="text-cyan-400 font-medium">
          {email.priority} Priority
        </span>

      </div>
    </div>
  );
};

export default CategoryCard;