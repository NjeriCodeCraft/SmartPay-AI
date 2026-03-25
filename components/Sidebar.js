"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    section: "Overview",
    links: [
      { href: "/", label: "Dashboard", icon: "⊞" },
      { href: "/insights", label: "AI Insights", icon: "〜" },
      { href: "/predictor", label: "Predictor", icon: "◷", badge: "New" },
    ],
  },
  {
    section: "Payments",
    links: [
      { href: "/transactions", label: "Transactions", icon: "₦" },
      { href: "/bills", label: "Pay Bills", icon: "▣" },
      { href: "/transfer", label: "Transfer", icon: "↓" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[220px] min-h-screen bg-white border-r border-gray-100 flex flex-col py-7 sticky top-0 h-screen flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 pb-6 border-b border-gray-100">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#a78bfa] flex items-center justify-center text-white font-bold text-sm">
          SP
        </div>
        <span className="font-extrabold text-[15px] text-gray-800">
          Smart<span className="text-[#6c63ff]">Pay</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pt-4">
        {navItems.map((section) => (
          <div key={section.section} className="mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2.5 mb-1.5">
              {section.section}
            </p>
            {section.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold mb-0.5 transition-all ${
                    isActive
                      ? "bg-[#ede9ff] text-[#6c63ff]"
                      : "text-gray-500 hover:bg-[#ede9ff] hover:text-[#6c63ff]"
                  }`}
                >
                  <span className="text-base w-4 text-center">{link.icon}</span>
                  <span className="flex-1">{link.label}</span>
                  {link.badge && (
                    <span className="bg-[#6c63ff] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="px-5 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38b2ac] to-[#6c63ff] flex items-center justify-center text-white text-xs font-bold">
            AO
          </div>
          <div>
            <p className="text-[13px] font-bold text-gray-800">Adaeze O.</p>
            <p className="text-[11px] text-gray-400">Lagos · Premium</p>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 mt-3 flex items-center gap-1.5">
          <span className="w-4 h-0.5 rounded bg-gradient-to-r from-[#6c63ff] to-[#38b2ac] inline-block"></span>
          Powered by Interswitch
        </p>
      </div>
    </aside>
  );
}
