import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Brain,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

import Button from "../common/Button";

const features = [
  "AI-powered email categorization",
  "Priority inbox detection",
  "One-click AI smart replies",
];

const stats = [
  {
    value: "1M+",
    label: "Emails Processed",
  },
  {
    value: "99.2%",
    label: "AI Accuracy",
  },
  {
    value: "<1s",
    label: "Response Time",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("access");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Reduced opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-10" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-cyan-300 backdrop-blur-xl">
              <Mail className="h-4 w-4" />
              AI-Powered Email Management
            </div>

            <h1 className="mt-10 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
              <span className="block">Your Inbox,</span>

              <span className="mt-3 block whitespace-nowrap bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Reimagined by AI
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              Organize emails automatically, prioritize important
              conversations, generate intelligent replies, and boost
              productivity with an AI-powered inbox designed for modern
              professionals.
            </p>

            {/* Reduced spacing */}
            <div className="mt-10">
  <Button
    onClick={handleGetStarted}
    className="group w-full sm:w-auto"
  >
    {localStorage.getItem("access")
      ? "Go to Dashboard"
      : "Get Started"}

    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />
                  <span className="text-sm leading-6 text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/20"
                >
                  <h3 className="text-3xl font-black text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-3xl">
              {/* Softer Glow */}
              <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-r from-cyan-500/15 via-sky-500/8 to-violet-500/15 blur-3xl" />

              <div className="relative rounded-[2.75rem] border border-white/10 bg-white/10 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all duration-300 hover:border-cyan-400/15 lg:p-10">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-cyan-400/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-cyan-500/15 p-4 transition-transform duration-300 hover:scale-105">
                      <Brain className="h-7 w-7 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        SmartMail AI
                      </h3>

                      <p className="text-sm text-slate-400">
                        AI Email Assistant
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 transition-all duration-300 hover:bg-emerald-500/20">
                    Live
                  </span>
                </div>

                {/* Dashboard Cards */}
                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-cyan-500/15 p-3">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white">
                            AI Email Summary
                          </h4>

                          <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300">
                            High Priority
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          Three important client emails require immediate
                          attention. AI recommends replying to the meeting
                          invitation before 3 PM.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-violet-500/15 p-3">
                        <Zap className="h-6 w-6 text-violet-400" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white">
                            AI Reply Confidence
                          </h4>

                          <span className="text-sm font-semibold text-white">
                            92%
                          </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
                          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/20">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-emerald-500/15 p-3">
                        <ShieldCheck className="h-6 w-6 text-emerald-400" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          Spam Detection
                        </h4>

                        <p className="mt-2 text-sm text-slate-400">
                          37 suspicious emails blocked automatically today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -right-8 -top-8 hidden rounded-2xl border border-cyan-400/15 bg-white/10 p-5 backdrop-blur-2xl shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 xl:block">
                  <p className="text-xs text-slate-400">
                    Productivity
                  </p>

                  <h4 className="mt-2 text-3xl font-black text-white">
                    +85%
                  </h4>
                </div>

                <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-cyan-400/15 bg-white/10 p-5 backdrop-blur-2xl shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 xl:block">
                  <p className="text-xs text-slate-400">
                    AI Accuracy
                  </p>

                  <h4 className="mt-2 text-3xl font-black text-white">
                    99.2%
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* End Dashboard */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;