import {
          Mail,
          ShieldAlert,
          Star,
        } from "lucide-react";
        
        const cards = [
          {
            key: "total_emails",
            title: "Total Emails",
            icon: Mail,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
          },
          {
            key: "priority_emails",
            title: "Priority Emails",
            icon: Star,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
          },
          {
            key: "spam_emails",
            title: "Spam Emails",
            icon: ShieldAlert,
            color: "text-red-400",
            bg: "bg-red-500/10",
          },
        ];
        
        const AnalyticsCards = ({ data }) => {
          return (
            <div className="grid gap-6 md:grid-cols-3">
              {cards.map((card) => {
                const Icon = card.icon;
        
                return (
                  <div
                    key={card.key}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-3xl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400">
                          {card.title}
                        </p>
        
                        <h2 className="mt-3 text-4xl font-bold text-white">
                          {data[card.key]}
                        </h2>
                      </div>
        
                      <div
                        className={`rounded-2xl p-4 ${card.bg}`}
                      >
                        <Icon className={`h-8 w-8 ${card.color}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        };
        
        export default AnalyticsCards;