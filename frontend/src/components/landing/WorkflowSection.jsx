import React from "react";
import {
  LogIn,
  Brain,
  Sparkles,
  LayoutDashboard,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { Card } from "../common/Card";

const steps = [
  {
    icon: LogIn,
    title: "User Login",
    description:
      "Securely log in to SmartMail AI and access your personalized workspace with a safe authentication experience.",
    gradient: "from-cyan-500 to-sky-500",
  },
  {
    icon: Brain,
    title: "AI Email Analysis",
    description:
      "The AI analyzes incoming emails for importance, spam, urgency, and category using intelligent language understanding.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Sparkles,
    title: "Smart Processing",
    description:
      "Generate AI summaries, detect spam, assign priorities, and categorize emails automatically for maximum productivity.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard",
    description:
      "View organized emails, analytics, summaries, spam reports, and priority insights from one intelligent dashboard.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const WorkflowSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            Workflow
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            How SmartMail AI
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            A streamlined AI-powered workflow that transforms email management
            into a faster, smarter, and more organized experience.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-24">
          {/* Desktop Connector */}
          <div className="absolute left-0 right-0 top-16 hidden lg:block">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-24">
              {[1, 2, 3].map((item) => (
                <ArrowRight
                  key={item}
                  className="h-8 w-8 text-cyan-400/60"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative flex flex-col">
                  <Card className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_25px_70px_rgba(6,182,212,0.15)]">
                    {/* Step Number */}
                    <div className="mb-8 flex items-center justify-between">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <span className="text-5xl font-black text-white/5">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-6 flex-1 text-base leading-8 text-slate-400">
                      {step.description}
                    </p>
                  </Card>

                  {/* Mobile Connector */}
                  {index !== steps.length - 1 && (
                    <div className="flex justify-center py-6 lg:hidden">
                      <ArrowDown className="h-7 w-7 text-cyan-400/70" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;