export default function WelcomeCard({ balance, savingsRate }) {
  return (
    <div className="col-span-2 bg-gradient-to-br from-[#6c63ff] to-[#a78bfa] rounded-2xl p-7 flex justify-between items-center relative overflow-hidden min-h-[150px]">
      {/* Decorative circle */}
      <div className="absolute w-44 h-44 rounded-full bg-white/5 -top-12 right-32 pointer-events-none" />

      <div className="relative z-10">
        <p className="text-white font-extrabold text-lg">Your finances look great! 🎉</p>
        <p className="text-white/70 text-[12px] mt-1">
          You're saving {savingsRate}% this month — above your goal.
        </p>
        <p className="text-white/60 text-[11px] mt-4 uppercase tracking-widest">Available Balance</p>
        <p className="text-white font-extrabold text-3xl mt-1">
          ₦{balance.toLocaleString()}
        </p>
      </div>

      {/* Simple SVG illustration */}
      <svg
        width="100"
        height="110"
        viewBox="0 0 100 110"
        fill="none"
        className="relative z-10 flex-shrink-0"
      >
        <ellipse cx="50" cy="104" rx="24" ry="5" fill="rgba(255,255,255,0.12)" />
        <rect x="40" y="78" width="8" height="22" rx="4" fill="rgba(255,255,255,0.4)" />
        <rect x="52" y="78" width="8" height="22" rx="4" fill="rgba(255,255,255,0.4)" />
        <rect x="32" y="44" width="36" height="38" rx="10" fill="rgba(255,255,255,0.5)" />
        <rect x="15" y="46" width="18" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" transform="rotate(-12 15 46)" />
        <rect x="64" y="46" width="18" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" transform="rotate(12 64 46)" />
        <circle cx="50" cy="28" r="16" fill="rgba(255,255,255,0.6)" />
        <circle cx="44" cy="26" r="2" fill="rgba(108,99,255,0.5)" />
        <circle cx="56" cy="26" r="2" fill="rgba(108,99,255,0.5)" />
        <path d="M44 34 Q50 39 56 34" stroke="rgba(108,99,255,0.5)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="74" cy="22" r="10" fill="#f6ad55" opacity="0.9" />
        <text x="74" y="27" textAnchor="middle" fontSize="10" fontWeight="800" fill="white">₦</text>
      </svg>
    </div>
  );
}
