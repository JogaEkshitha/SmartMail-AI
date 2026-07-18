import { useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

import api from "../../services/api";

import ReplyHeader from "./ReplyHeader";
import ReplyLoader from "./ReplyLoader";
import AIReplyCard from "./AIReplyCard";
import ReplyModal from "./ReplyModal";

function AIReplySection({ email }) {
  const [loading, setLoading] = useState(false);
  const [replies, setReplies] = useState(null);

  // New States
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedReply, setSelectedReply] = useState("");

  const generateReplies = async () => {
    setLoading(true);

    try {
      const response = await api.post("emails/ai-reply/", {
        subject: email.subject,
        body: email.body,
      });

      setReplies(response.data);
    } catch (error) {
      console.error("AI Reply Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }

      alert("Failed to generate AI replies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl">

      <ReplyHeader />

      {!loading && !replies && (
        <div className="flex justify-center">
          <button
            onClick={generateReplies}
            className="group flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-400/40"
          >
            <Sparkles
              size={22}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span>Generate AI Replies</span>
          </button>
        </div>
      )}

      {loading && <ReplyLoader />}

      {!loading && replies && (
        <>
          <div className="space-y-6">

            <AIReplyCard
              title="Professional"
              reply={replies.professional}
              onReply={() => {
                setSelectedReply(replies.professional);
                setShowReplyModal(true);
              }}
            />

            <AIReplyCard
              title="Friendly"
              reply={replies.friendly}
              onReply={() => {
                setSelectedReply(replies.friendly);
                setShowReplyModal(true);
              }}
            />

            <AIReplyCard
              title="Short"
              reply={replies.short}
              onReply={() => {
                setSelectedReply(replies.short);
                setShowReplyModal(true);
              }}
            />

          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={generateReplies}
              className="flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-900"
            >
              <RefreshCw size={18} />
              Regenerate Replies
            </button>
          </div>
        </>
      )}

      {/* Reply Modal */}
      <ReplyModal
        isOpen={showReplyModal}
        onClose={() => setShowReplyModal(false)}
        recipient={email.sender}
        subject={email.subject}
        reply={selectedReply}
      />

    </div>
  );
}

export default AIReplySection;