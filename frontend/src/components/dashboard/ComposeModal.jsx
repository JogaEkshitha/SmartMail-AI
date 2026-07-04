import React, { useState } from "react";
import { X, Send } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";
import api from "../../services/api";
import { toast } from "react-hot-toast";

const ComposeModal = ({ isOpen, onClose }) => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendEmail = async () => {
    if (!recipient || !subject || !body) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await api.post("emails/send/", {
        recipient_username: recipient,
        subject,
        body,
      });

      // Refresh notification bell immediately
      window.dispatchEvent(
        new Event("notificationUpdated")
      );

      toast.success("Email sent successfully!");

      setRecipient("");
      setSubject("");
      setBody("");

      onClose();
    } catch (error) {
      console.error(error);

      if (error.response) {
        toast.error(
          error.response?.data?.recipient_username ||
            error.response?.data?.recipient ||
            "Failed to send email."
        );
      } else {
        toast.error("Failed to send email.");
      }
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
            Compose Email
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6 p-6">

          <Input
            label="Recipient"
            type="email"
            placeholder="username@smartmail.com"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />

          <Input
            label="Subject"
            type="text"
            placeholder="Enter email subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Message
            </label>

            <textarea
              rows={8}
              placeholder="Write your message..."
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
                placeholder-slate-500
                outline-none
                transition-all
                duration-200
                focus:border-cyan-400/40
                focus:ring-2
                focus:ring-cyan-500/20
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
            onClick={handleSendEmail}
            disabled={loading}
          >
            <Send size={18} />
            {loading ? "Sending..." : "Send Email"}
          </Button>

        </div>

      </div>
    </div>
  );
};

export default ComposeModal;