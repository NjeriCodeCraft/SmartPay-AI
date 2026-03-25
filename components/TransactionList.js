const categoryColors = {
  "Food & Dining": "#f0fff4",
  Transport: "#fff0f0",
  Bills: "#fffbeb",
  Income: "#ede9ff",
  Telecom: "#e6fffa",
  Shopping: "#fff0f0",
  Default: "#f3f4f6",
};

function formatAmount(amount) {
  const abs = Math.abs(amount).toLocaleString("en-NG");
  return amount < 0 ? `−₦${abs}` : `+₦${abs}`;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const today = new Date();
  const isToday = d.toDateString() === today.toDateString();
  if (isToday) {
    return `Today, ${d.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" })}`;
  }
  return d.toLocaleDateString("en-NG", { month: "short", day: "numeric" });
}

export default function TransactionList({ transactions, limit }) {
  const displayed = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="divide-y divide-gray-50">
      {displayed.map((tx) => (
        <div
          key={tx.id}
          className="flex items-center gap-3 py-2.5 px-1 hover:bg-gray-50 rounded-xl transition-all cursor-pointer group"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
            style={{ background: categoryColors[tx.category] || categoryColors.Default }}
          >
            {tx.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-gray-800 truncate">{tx.name}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {formatDate(tx.date)} · {tx.category}
            </p>
          </div>
          <p
            className={`font-extrabold text-[13px] flex-shrink-0 ${
              tx.amount > 0 ? "text-green-500" : "text-red-400"
            }`}
          >
            {formatAmount(tx.amount)}
          </p>
        </div>
      ))}
    </div>
  );
}
