const AnalyticsInsights = ({ data }) => {
          const categories = data.categories;
        
          const topCategory = Object.keys(categories).reduce(
            (a, b) =>
              categories[a] > categories[b] ? a : b
          );
        
          return (
            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                AI Insights
              </h2>
        
              <ul className="space-y-3 text-slate-300">
                <li>
                  📂 Most emails belong to <b>{topCategory}</b>.
                </li>
        
                <li>
                  ⭐ High Priority Emails:{" "}
                  <b>{data.priority_emails}</b>
                </li>
        
                <li>
                  🛡 Spam Emails:{" "}
                  <b>{data.spam_emails}</b>
                </li>
        
                <li>
                  📧 Total Emails:{" "}
                  <b>{data.total_emails}</b>
                </li>
              </ul>
            </div>
          );
        };
        
        export default AnalyticsInsights;