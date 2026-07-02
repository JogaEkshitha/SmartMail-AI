import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative flex h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
      </div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-72 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="ml-72 flex min-w-0 flex-1 flex-col">
        {/* Top Navbar */}
        <header className="fixed left-72 right-0 top-0 z-30">
          <TopNavbar />
        </header>

        {/* Page Content */}
        <main className="mt-20 flex-1 overflow-y-auto px-6 py-6 lg:px-8 lg:py-8">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;