import { useEffect, useMemo, useState } from "react";
import { X, Send } from "lucide-react";
import { toast } from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";
import api from "../../services/api";

function ReplyModal({
  isOpen,
  onClose,
  recipient,
  subject,
  reply,
}) {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  // Prevent Re: Re: Re:
  const replySubject = useMemo(() => {
    if (!subject) return "";
    return subject.startsWith("Re:") ? subject : `Re: ${subject}`;
  }, [subject]);

  // Clean AI reply before displaying
  useEffect(() => {
    if (reply) {
      let cleanedReply = reply;

      // Remove "Subject: ..."
      cleanedReply = cleanedReply.replace(/^Subject:.*\n*/i, "");

      setBody(cleanedReply.trim());
    } else {
      setBody("");
    }
  }, [reply]);

  if (!isOpen) return null;

  const handleSendReply = async () => {
    setLoading(true);

    try {
      await api.post("emails/send/", {
        recipient_username: recipient,
        subject: replySubject,
        body,
      });

      toast.success("Reply sent successfully!");

      setBody("");

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.recipient_username ||
        "Failed to send reply."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <h2 className="text-2xl font-bold text-white">
            Reply Email
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}
        <div className="space-y-6 p-6">

          <Input
            label="To"
            value={recipient}
            disabled
          />

          <Input
            label="Subject"
            value={replySubject}
            disabled
          />

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Message
            </label>

            <textarea
              rows={10}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-400
              "
            />

          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t border-white/10 px-6 py-5">

          <Button
            type="button"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleSendReply}
            disabled={loading || !body.trim()}
          >
            <Send size={18} />

            {loading ? "Sending..." : "Send Reply"}

          </Button>

        </div>

      </div>

    </div>
  );
}

export default ReplyModal;