export default function StatCard({ label, value, change, changeType, icon, iconBg }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-gray-400 font-semibold">{label}</p>
        <p className="font-extrabold text-[16px] text-gray-800 mt-0.5">{value}</p>
        <p
          className={`text-[11px] font-semibold mt-0.5 ${
            changeType === "up" ? "text-green-500" : "text-red-400"
          }`}
        >
          {changeType === "up" ? "↑" : "↓"} {change}
        </p>
      </div>
    </div>
  );
}
