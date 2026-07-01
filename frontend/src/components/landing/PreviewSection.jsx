import React from "react";
import {
  Brain,
  ShieldCheck,
  MailCheck,
  FolderKanban,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Button from "../common/Button";
import { Card } from "../common/Card";

const PreviewSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Dashboard Preview
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything in One
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              Smart Dashboard
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Monitor AI summaries, spam reports, priorities, smart categories,
            and productivity insights from a beautifully designed dashboard.
          </p>
        </div>

        {/* Dashboard */}
        <div className="relative mt-20">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-500/10 blur-3xl" />

          <Card className="relative rounded-[2rem] border border-white/10 bg-slate-900/60 p-5 backdrop-blur-3xl lg:p-8">
            {/* Dashboard Header */}
            <div className="mb-8 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  SmartMail AI Dashboard
                </h3>

                <p className="mt-2 text-slate-400">
                  AI-powered insights for faster and smarter email management.
                </p>
              </div>

              <Button className="group">
                Open Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {/* Left Section */}
              <div className="space-y-6 xl:col-span-2">
                {/* AI Summary */}
                <Card className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-xl">
                  <div className="flex items-start gap-5">
                    <div className="rounded-2xl bg-cyan-500/10 p-3">
                      <Brain className="h-6 w-6 text-cyan-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-xl font-semibold text-white">
                          AI Email Summary
                        </h4>

                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          Generated
                        </span>
                      </div>

                      <p className="mt-5 leading-8 text-slate-400">
                        You received 18 new emails today. Three are marked as
                        high priority, five are promotional, and two were
                        detected as spam. AI recommends replying to the client
                        meeting request first.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Bottom Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Priority */}
                  <Card className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-cyan-500/10 p-3">
                        <MailCheck className="h-5 w-5 text-cyan-400" />
                      </div>

                      <h4 className="text-lg font-semibold text-white">
                        Priority Detection
                      </h4>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        "Client Meeting",
                        "Project Deadline",
                        "Team Review",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3"
                        >
                          <span className="text-sm text-slate-300">
                            {item}
                          </span>

                          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                            High
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Spam */}
                  <Card className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-cyan-500/10 p-3">
                        <ShieldCheck className="h-5 w-5 text-cyan-400" />
                      </div>

                      <h4 className="text-lg font-semibold text-white">
                        Spam Detection
                      </h4>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-sm text-slate-300">
                            Suspicious Email
                          </span>
                        </div>

                        <span className="text-xs text-red-400">
                          Blocked
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          <span className="text-sm text-slate-300">
                            Inbox Protected
                          </span>
                        </div>

                        <span className="text-xs text-emerald-400">
                          Secure
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <Card className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-cyan-500/10 p-3">
                      <FolderKanban className="h-5 w-5 text-cyan-400" />
                    </div>

                    <h4 className="text-lg font-semibold text-white">
                      Smart Categorization
                    </h4>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      ["Primary", "18"],
                      ["Work", "12"],
                      ["Promotions", "34"],
                      ["Social", "9"],
                      ["Spam", "6"],
                    ].map(([name, count]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-slate-300">{name}</span>

                        <span className="rounded-full bg-slate-700 px-3 py-1 text-sm text-white">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Analytics */}
                <Card className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-cyan-500/10 p-3">
                      <BarChart3 className="h-5 w-5 text-cyan-400" />
                    </div>

                    <h4 className="text-lg font-semibold text-white">
                      Analytics
                    </h4>
                  </div>

                  <div className="mt-8 space-y-7">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-400">
                          Productivity Score
                        </span>

                        <span className="text-white">92%</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                      <div className="flex items-center gap-4">
                        <TrendingUp className="h-6 w-6 text-cyan-400" />

                        <div>
                          <p className="text-sm text-slate-400">
                            Weekly Efficiency
                          </p>

                          <h5 className="mt-1 text-3xl font-bold text-white">
                            +84%
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-center">
                        <p className="text-xs text-slate-400">
                          Emails Today
                        </p>

                        <h5 className="mt-2 text-2xl font-bold text-white">
                          58
                        </h5>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-center">
                        <p className="text-xs text-slate-400">
                          AI Replies
                        </p>

                        <h5 className="mt-2 text-2xl font-bold text-white">
                          21
                        </h5>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;