import DashboardLayout from "../../components/layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            📧 Total Emails
          </h2>

          <p className="text-4xl mt-4 text-blue-600">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            ⭐ Important
          </h2>

          <p className="text-4xl mt-4 text-yellow-500">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            📝 AI Summaries
          </h2>

          <p className="text-4xl mt-4 text-green-600">
            0
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;