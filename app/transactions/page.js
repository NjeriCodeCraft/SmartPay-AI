import TransactionList from "@/components/TransactionList";
import { transactions, summaryStats } from "@/data/transactions";

export default function TransactionsPage() {
  const categories = ["All", "Food & Dining", "Transport", "Bills", "Income", "Shopping", "Telecom"];

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-7">
        <div>
          <h1 className="font-extrabold text-[22px] text-gray-800">Transactions</h1>
          <p className="text-[13px] text-gray-400 mt-1">All your payments and income — March 2026</p>
        </div>
        <button className="bg-[#6c63ff] text-white rounded-xl px-4 py-2 text-[13px] font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
          + Add Transaction
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">Total Income</p>
          <p className="font-extrabold text-[22px] text-green-500 mt-1">₦{summaryStats.income.toLocaleString()}</p>
          <p className="text-[11px] text-gray-400 mt-1">2 credit transactions</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">Total Spent</p>
          <p className="font-extrabold text-[22px] text-red-400 mt-1">₦{summaryStats.spent.toLocaleString()}</p>
          <p className="text-[11px] text-gray-400 mt-1">{summaryStats.transactionCount} debit transactions</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">Net Balance</p>
          <p className="font-extrabold text-[22px] text-[#6c63ff] mt-1">₦{summaryStats.balance.toLocaleString()}</p>
          <p className="text-[11px] text-gray-400 mt-1">After all transactions</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all border ${
              cat === "All"
                ? "bg-[#6c63ff] text-white border-[#6c63ff]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#6c63ff] hover:text-[#6c63ff]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* All transactions */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-extrabold text-[15px] text-gray-800">All Transactions</h2>
          <span className="text-[12px] text-gray-400">{transactions.length} entries</span>
        </div>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
