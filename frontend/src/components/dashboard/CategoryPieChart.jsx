import {
          Chart as ChartJS,
          ArcElement,
          Tooltip,
          Legend,
        } from "chart.js";
        
        import { Pie } from "react-chartjs-2";
        
        ChartJS.register(
          ArcElement,
          Tooltip,
          Legend
        );
        
        const CategoryPieChart = ({ categories }) => {
          const data = {
            labels: Object.keys(categories),
        
            datasets: [
              {
                data: Object.values(categories),
        
                backgroundColor: [
                  "#06b6d4",
                  "#22c55e",
                  "#a855f7",
                  "#f97316",
                  "#64748b",
                ],
              },
            ],
          };
        
          return (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Category Distribution
              </h2>
        
              <div className="mx-auto max-w-md">
                <Pie data={data} />
              </div>
            </div>
          );
        };
        
        export default CategoryPieChart;