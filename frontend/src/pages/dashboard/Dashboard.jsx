import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";

function Dashboard() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening today."
      />
    </DashboardLayout>
  );
}

export default Dashboard;
