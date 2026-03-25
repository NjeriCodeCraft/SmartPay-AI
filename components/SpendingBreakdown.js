export default function SpendingBreakdown({ data }) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <div key={item.category}>
          <div className="flex justify-between mb-1.5">
            <span className="text-[12px] font-semibold text-gray-500">{item.category}</span>
            <span className="text-[12px] font-bold text-gray-800">
              ₦{item.amount.toLocaleString()} · {item.percent}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${item.percent}%`, background: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
