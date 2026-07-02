import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import Button from "../../components/common/Button";
import ComposeModal from "../../components/dashboard/ComposeModal";
import api from "../../services/api";
import { Plus, Mail } from "lucide-react";

function Inbox() {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmails();
  }, []);
  
  const fetchEmails = async () => {
    try {
      const response = await api.get("emails/inbox/");
  
      setEmails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between">
        <PageHeader
          title="Inbox"
          subtitle="View and manage all your received emails."
        />

        <Button onClick={() => setIsComposeOpen(true)}>
          <Plus size={18} />
          Compose
        </Button>
      </div>

      <div className="mt-8 space-y-4">

  {loading ? (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <p className="text-slate-400">Loading emails...</p>
    </div>
  ) : emails.length === 0 ? (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-3xl">
      <Mail
        size={60}
        className="mx-auto mb-4 text-slate-500"
      />

      <h2 className="text-2xl font-bold text-white">
        No Emails Yet
      </h2>

      <p className="mt-3 text-slate-400">
        Your received emails will appear here.
      </p>
    </div>
  ) : (
    emails.map((email) => (
      <div
        key={email.id}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
          transition
          hover:border-cyan-400/40
          hover:bg-white/10
          cursor-pointer
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              {email.subject}
            </h2>

            <p className="mt-1 text-cyan-400">
              From: {email.sender}@smartmail.com
            </p>
          </div>

          <span className="text-sm text-slate-400">
            {new Date(email.created_at).toLocaleString()}
          </span>
        </div>

        <p className="mt-4 line-clamp-2 text-slate-300">
          {email.body}
        </p>
      </div>
    ))
  )}

</div>
      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
      />
    </DashboardLayout>
  );
}

export default Inbox;