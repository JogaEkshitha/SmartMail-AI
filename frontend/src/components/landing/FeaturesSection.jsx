import React from "react";
import {
  Brain,
  Sparkles,
  MailCheck,
  ShieldCheck,
  FolderKanban,
  Search,
  BarChart3,
  Zap,
} from "lucide-react";
import { Card } from "../common/Card";

const features = [
  {
    icon: Brain,
    title: "AI Email Intelligence",
    description:
      "Automatically understands the context of every email, identifies intent, and prioritizes important conversations with advanced AI.",
    gradient: "from-cyan-500 to-sky-500",
  },
  {
    icon: Sparkles,
    title: "Smart AI Replies",
    description:
      "Generate professional, context-aware email responses in seconds while maintaining your preferred writing style.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: MailCheck,
    title: "Priority Detection",
    description:
      "Never miss critical emails again. SmartMail AI automatically detects urgent messages and highlights them instantly.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Spam Protection",
    description:
      "Advanced AI filters suspicious emails, phishing attempts, and unwanted messages before they reach your inbox.",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    icon: FolderKanban,
    title: "Smart Categorization",
    description:
      "Automatically organize emails into Work, Personal, Promotions, Social, and more without manual effort.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Search emails naturally using AI-powered understanding instead of relying only on keywords.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: BarChart3,
    title: "Inbox Analytics",
    description:
      "Gain insights into email activity, response trends, productivity, and communication patterns with beautiful analytics.",
    gradient: "from-cyan-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized AI models process emails instantly, giving you intelligent recommendations in under a second.",
    gradient: "from-violet-500 to-pink-500",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
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
            Powerful Features
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything You Need
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              To Master Your Inbox
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            SmartMail AI combines intelligent automation with a premium user
            experience to help you organize, prioritize, and respond to emails
            effortlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]"
              >
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-6 flex-1 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;