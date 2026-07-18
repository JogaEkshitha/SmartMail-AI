import { Bot, LoaderCircle } from "lucide-react";

function ReplyLoader() {
  return (
    <div className="flex flex-col items-center py-16">

      <div className="relative">

        <Bot className="h-16 w-16 text-cyan-400" />

        <LoaderCircle className="absolute -right-3 -top-3 h-6 w-6 animate-spin text-cyan-300" />

      </div>

      <h2 className="mt-8 text-2xl font-bold text-white">
        SmartMail AI is Thinking...
      </h2>

      <p className="mt-3 text-slate-400">
        Analyzing your email and generating replies.
      </p>

      <div className="mt-8 h-2 w-80 overflow-hidden rounded-full bg-slate-800">

        <div className="h-full w-full animate-pulse rounded-full bg-cyan-400" />

      </div>

    </div>
  );
}

export default ReplyLoader;