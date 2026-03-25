import AIChat from "@/components/AIChat";
import SpendingBreakdown from "@/components/SpendingBreakdown";
import { transactions, spendingByCategory, summaryStats } from "@/data/transactions";

const insights = [
  { icon: "🍔", title: "High food spending", desc: "You spend 35% on food — ₦54,712 this month. The average for your income bracket is 25%.", type: "warning" },
  { icon: "📈", title: "Savings on track", desc: "Your savings rate of 72% is well above your 60% goal. Keep it up!", type: "success" },
  { icon: "🚗", title: "Transport costs rising", desc: "Transport spend is up 18% vs last month. Consider Bolt's monthly plan to save ₦8,000.", type: "info" },
  { icon: "💡", title: "Optimization tip", desc: "Switch to weekly grocery shopping instead of daily — could save ₦10,000/month.", type: "tip" },
];

const typeStyles = {
  warning: "bg-orange-50 border-orange-200 text-orange-700",
  success: "bg-green-50 border-green-200 text-green-700",
  info: "bg-blue-50 border-blue-200 text-blue-700",
  tip: "bg-purple-50 border-purple-200 text-purple-700",
};

export default function InsightsPage() {
  return (
    <div className="p-8">
      <div className="mb-7">
        <h1 className="font-extrabold text-[22px] text-gray-800">AI Insights</h1>
        <p className="text-[13px] text-gray-400 mt-1">Smart analysis of your spending patterns</p>
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-5">
        <div className="flex flex-col gap-5">
          {/* Insight cards */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="font-extrabold text-[15px] text-gray-800 mb-4">This Month's Insights</h2>
            <div className="flex flex-col gap-3">
              {insights.map((insight, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border ${typeStyles[insight.type]}`}
                >
                  <span className="text-xl flex-shrink-0">{insight.icon}</span>
                  <div>
                    <p className="font-bold text-[13px]">{insight.title}</p>
                    <p className="text-[12px] mt-0.5 opacity-80">{insight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spending breakdown */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="font-extrabold text-[15px] text-gray-800 mb-4">Spending by Category</h2>
            <SpendingBreakdown data={spendingByCategory} />
          </div>
        </div>

        {/* AI Chat */}
        <div className="flex flex-col" style={{ height: "calc(100vh - 160px)" }}>
          <AIChat transactions={transactions} stats={summaryStats} />
        </div>
      </div>
    </div>
  );
}
