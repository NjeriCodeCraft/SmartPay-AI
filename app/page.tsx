import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Top Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Financial Dashboard
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Good morning, Adaeze. Your finances are looking healthy! 🚀
        </p>
      </div>

      {/* Stats Grid - Using your specific StatCard component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="Total Balance" 
          value="₦1,240,500.00" 
          change="12.5%" 
          changeType="up" 
          icon="🏦" 
          iconBg="#ede9ff" 
        />
        <StatCard 
          label="Spending" 
          value="₦450,000.00" 
          change="8.2%" 
          changeType="down" 
          icon="📉" 
          iconBg="#fff5f5" 
        />
        <StatCard 
          label="Savings" 
          value="₦85,000.00" 
          change="2.4%" 
          changeType="up" 
          icon="🎯" 
          iconBg="#e6fffa" 
        />
        <StatCard 
          label="AI Score" 
          value="780" 
          change="15pts" 
          changeType="up" 
          icon="✨" 
          iconBg="#fff9db" 
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Transaction Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Transactions</h3>
            <button className="text-[#6c63ff] text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {/* We will map your real transcripts.js here in Phase 3 */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl animate-pulse">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl animate-pulse">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="bg-[#6c63ff] rounded-3xl p-7 text-white shadow-xl shadow-indigo-100 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl mb-4">
              💡
            </div>
            <h3 className="font-bold text-lg mb-2">Smart Insight</h3>
            <p className="text-sm text-indigo-100 leading-relaxed font-medium">
              "You've spent 20% more on Transport this week than usual. Interswitch suggest using the new 'Commute Pass' to save ₦5,000."
            </p>
          </div>
          <button className="mt-6 bg-white text-[#6c63ff] w-full py-3 rounded-2xl text-sm font-extrabold hover:bg-gray-50 transition-colors">
            Analyze Spending
          </button>
        </div>

      </div>
    </div>
  );
}