import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sparkles,
  LayoutDashboard,
  Inbox,
  Brain,
  ShieldAlert,
  Star,
  FolderKanban,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Inbox",
    path: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    name: "AI Summary",
    path: "/dashboard/summary",
    icon: Brain,
  },
  {
    name: "Spam Detection",
    path: "/dashboard/spam",
    icon: ShieldAlert,
  },
  {
    name: "Priority Inbox",
    path: "/dashboard/priority",
    icon: Star,
  },
  {
    name: "Categories",
    path: "/dashboard/categories",
    icon: FolderKanban,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-white/5 backdrop-blur-3xl">
      {/* Logo */}
      <div className="border-b border-white/10 px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl">
            <Sparkles className="h-7 w-7 text-cyan-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              SmartMail AI
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              AI Email Assistant
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-4 px-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Navigation
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/20 shadow-lg shadow-cyan-500/10"
                      : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  }`
                }
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          className="group flex w-full items-center gap-4 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/15 hover:text-red-400"
        >
          <LogOut className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;