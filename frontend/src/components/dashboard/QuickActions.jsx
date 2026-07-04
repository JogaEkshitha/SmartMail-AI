import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Inbox,
  Brain,
  Star,
  ArrowRight,
} from "lucide-react";

import ComposeModal from "./ComposeModal";

const actions = [
  {
    title: "Compose",
    description: "Create and send a new email",
    icon: Plus,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Inbox",
    description: "View received emails",
    icon: Inbox,
    path: "/dashboard/inbox",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "AI Summary",
    description: "Read AI generated summaries",
    icon: Brain,
    path: "/dashboard/summary",
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "Priority",
    description: "View important emails",
    icon: Star,
    path: "/dashboard/priority",
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const handleAction = (action) => {
    if (action.title === "Compose") {
      setIsComposeOpen(true);
    } else {
      navigate(action.path);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => handleAction(action)}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                text-left
                backdrop-blur-3xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
              "
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color}`}
              >
                <Icon className="h-7 w-7 text-cyan-300" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-cyan-400 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-sm font-semibold">
                  Open
                </span>

                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          );
        })}
      </div>

      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
      />
    </div>
  );
};

export default QuickActions;