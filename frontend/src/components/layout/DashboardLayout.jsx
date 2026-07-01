

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 bg-slate-100 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;