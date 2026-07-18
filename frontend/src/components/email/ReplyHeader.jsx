import { Bot, Sparkles } from "lucide-react";

function ReplyHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-cyan-500/20 p-4">
          <Bot className="h-8 w-8 text-cyan-400" />
        </div>

        <div>

          <div className="flex items-center gap-3">

            <h2 className="text-3xl font-bold text-white">
              Smart AI Reply
            </h2>

            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
              Gemini 2.5 Flash
            </span>

          </div>

          <p className="mt-1 text-slate-400">
            Generate intelligent replies in multiple writing styles.
          </p>

        </div>

      </div>

      <Sparkles className="h-8 w-8 animate-pulse text-cyan-400" />

    </div>
  );
}

export default ReplyHeader;