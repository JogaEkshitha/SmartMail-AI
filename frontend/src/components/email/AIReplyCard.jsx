import {
  BriefcaseBusiness,
  MessageCircle,
  Zap,
} from "lucide-react";

import CopyButton from "./CopyButton";

const icons = {
  Professional: BriefcaseBusiness,
  Friendly: MessageCircle,
  Short: Zap,
};

const colors = {
  Professional: "text-sky-400",
  Friendly: "text-emerald-400",
  Short: "text-purple-400",
};

function AIReplyCard({ title, reply , onReply}) {

  const Icon = icons[title] || MessageCircle;

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">

      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Icon className={`h-6 w-6 ${colors[title]}`} />

          <h3 className={`text-xl font-semibold ${colors[title]}`}>
            {title}
          </h3>

        </div>

       <div className="flex items-center gap-2">
  <CopyButton text={reply} />

  <button
    onClick={onReply}
    className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400"
  >
    ↩ Reply
  </button>
</div>        

      </div>

      <div className="whitespace-pre-wrap leading-8 text-slate-300">
        {reply}
      </div>

    </div>
  );
}

export default AIReplyCard;