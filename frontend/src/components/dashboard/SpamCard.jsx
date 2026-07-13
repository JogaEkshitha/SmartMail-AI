import React from "react";
import { ShieldAlert } from "lucide-react";

const SpamCard = ({ email }) => {
  return (
    <div className="rounded-3xl border border-red-500/20 bg-white/5 p-6 backdrop-blur-3xl transition-all duration-300 hover:border-red-400/40">

      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-xl font-bold text-white">
            {email.subject}
          </h3>

          <p className="mt-2 font-semibold text-cyan-400">
            From: {email.sender}@smartmail.com
          </p>
        </div>

        <div className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-300">
          Spam
        </div>

      </div>

      <p className="mt-5 line-clamp-3 text-slate-300">
        {email.body}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Spam Score
          </p>

          <p className="mt-1 text-2xl font-bold text-red-400">
            {email.spam_score}%
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Category
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {email.category}
          </p>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

        <div className="flex items-center gap-2 text-red-300">
          <ShieldAlert size={18} />
          <span className="font-medium">
            AI detected as Spam
          </span>
        </div>

        <span className="text-sm text-slate-400">
          {new Date(email.created_at).toLocaleDateString()}
        </span>

      </div>

    </div>
  );
};

export default SpamCard;