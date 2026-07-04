import React from "react";
import { BrainCircuit } from "lucide-react";

const AIInsights = ({ insights }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">
      <div className="mb-6 flex items-center gap-3">
        <BrainCircuit className="h-7 w-7 text-cyan-400" />

        <h2 className="text-2xl font-bold text-white">
          AI Insights
        </h2>
      </div>

      <div className="space-y-4">
        {insights?.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4"
          >
            <p className="text-slate-200">
              💡 {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;