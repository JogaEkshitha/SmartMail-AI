import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Button from "../../components/common/Button";
import PageHeader from "../../components/dashboard/PageHeader";
import api from "../../services/api";
import { ArrowLeft, Mail } from "lucide-react";
import AIReplySection from "../../components/email/AIReplySection";

function EmailDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmail();
  }, []);

  const fetchEmail = async () => {
    try {
      const response = await api.get(`emails/${id}/`);
      setEmail(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <PageHeader
          title="Email"
          subtitle="Loading email..."
        />
      </DashboardLayout>
    );
  }

  if (!email) {
    return (
      <DashboardLayout>
        <PageHeader
          title="Email"
          subtitle="Email not found."
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Button onClick={() => navigate("/dashboard/inbox")}>
        <ArrowLeft size={18} />
        Back
      </Button>

      {/* Email Card */}

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-cyan-500/20 p-4">
            <Mail className="text-cyan-400" />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              {email.subject}
            </h1>

            <p className="mt-2 text-cyan-400">
              From: {email.sender}@smartmail.com
            </p>

            <p className="text-sm text-slate-400">
              {new Date(email.created_at).toLocaleString()}
            </p>

          </div>

        </div>

        <hr className="my-8 border-white/10" />

        <div className="whitespace-pre-wrap leading-8 text-slate-300">
          {email.body}
        </div>

      </div>

      {/* Smart AI Reply */}

      <AIReplySection email={email} />

    </DashboardLayout>
  );
}

export default EmailDetail;