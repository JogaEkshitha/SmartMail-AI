import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Top Gradient Border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-10" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-10 text-center lg:px-8">
        <h2 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          SmartMail AI
        </h2>

        <p className="mt-3 text-sm text-slate-400">
          AI-Powered Intelligent Email Management System
        </p>

        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <p className="mt-6 text-xs tracking-wide text-slate-500">
          © 2026 SmartMail AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;