import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AnalyticsCards from "../../components/dashboard/AnalyticsCards";
import CategoryPieChart from "../../components/dashboard/CategoryPieChart";
import AnalyticsInsights from "../../components/dashboard/AnalyticsInsights";
import api from "../../services/api";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await api.get("emails/analytics/");
      setAnalytics(response.data);
    } catch (error) {
      console.error("Analytics Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-slate-400">
          Loading analytics...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            AI-powered insights into your email activity.
          </p>
        </div>

        {/* Statistics */}
        <AnalyticsCards data={analytics} />

        {/* Charts */}
        <CategoryPieChart categories={analytics.categories} />

        {/* AI Insights */}
        <AnalyticsInsights data={analytics} />

      </div>
    </DashboardLayout>
  );
};

export default Analytics;