import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentEmails from "../../components/dashboard/RecentEmails";
import AIAssistant from "../../components/dashboard/AIAssistant";
import api from "../../services/api";
import { useSearch } from "../../context/SearchContext";

import {
  Mail,
  Star,
  Brain,
  ShieldAlert,
} from "lucide-react";

function Dashboard() {
   const { searchQuery } = useSearch();
  const [dashboard, setDashboard] = useState({
    totalEmails: 0,
    priorityEmails: 0,
    spamEmails: 0,
    summaryCount: 0,
    recentEmails: [],
    insights: [],
  });

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    fetchDashboard();
    fetchProfile();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("dashboard/");
      setDashboard(response.data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
  try {
    const response = await api.get("accounts/profile/");
    setUser(response.data);
  } catch (error) {
    console.error("Profile Error:", error);
  }
};

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-slate-400">
          Loading dashboard...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Welcome Card */}
      <WelcomeCard insights={dashboard?.insights || []} />

      {/* Statistics */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Emails"
          value={dashboard.totalEmails}
          subtitle="Received Emails"
          icon={Mail}
          change="+12%"
          trend="up"
        />

        <StatCard
          title="Priority Emails"
          value={dashboard.priorityEmails}
          subtitle="Needs Attention"
          icon={Star}
          change="+5%"
          trend="up"
        />

        <StatCard
          title="AI Summaries"
          value={dashboard.summaryCount}
          subtitle="Generated"
          icon={Brain}
          change="+18%"
          trend="up"
        />

        <StatCard
          title="Spam Emails"
          value={dashboard.spamEmails}
          subtitle="Protected Inbox"
          icon={ShieldAlert}
          change="-2%"
          trend="down"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Bottom Section */}
<div className="mt-10 grid gap-8 xl:grid-cols-3">
  <div className="xl:col-span-2">
    <RecentEmails
      emails={
        dashboard?.recentEmails?.filter((email) => {
          if (!searchQuery) return true;

          const query = searchQuery.toLowerCase();

          return (
            email.subject?.toLowerCase().includes(query) ||
            email.sender?.toLowerCase().includes(query) ||
            email.body?.toLowerCase().includes(query)
          );
        }) || []
      }
    />
  </div>
  <AIAssistant insights={dashboard?.insights || []}
   loading={loading}
   username={user?.username} />      
  </div>
    </DashboardLayout>
  );
}

export default Dashboard;