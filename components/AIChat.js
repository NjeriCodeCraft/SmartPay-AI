"use client";
import { useState, useRef, useEffect } from "react";

const quickChips = [
  { label: "💡 Save more", text: "How can I save more money this month?" },
  { label: "🍔 Food spend", text: "Show me my food spending analysis" },
  { label: "🔮 Predict balance", text: "Predict my end of month balance" },
  { label: "⚠️ Any alerts?", text: "Are there any unusual transactions?" },
];

export default function AIChat({ transactions, stats }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! 👋 I've reviewed your transactions. You're spending **35% on food** — ₦54,712 this month. Want to set a budget cap?`,
    },
    {
      role: "assistant",
      content: `📈 At your current pace you'll end March with **₦198,320** — ₦42k more than last year. Great progress!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const msg = text || input.trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          context: { transactions, stats },
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't connect. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function renderContent(text) {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden h-full">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#f8f7ff] to-[#eef9ff]">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#38b2ac] flex items-center justify-center text-base">
          🤖
        </div>
        <div>
          <p className="font-extrabold text-[13px] text-gray-800">SmartPay AI</p>
          <p className="text-[11px] text-green-500 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
            Online · Ready
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5 min-h-0">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed max-w-[92%] ${
              msg.role === "assistant"
                ? "bg-[#f3f0ff] text-gray-800 self-start rounded-bl-sm"
                : "bg-[#6c63ff] text-white self-end rounded-br-sm"
            }`}
            dangerouslySetInnerHTML={
              msg.role === "assistant"
                ? { __html: renderContent(msg.content) }
                : undefined
            }
          >
            {msg.role === "user" ? msg.content : undefined}
          </div>
        ))}
        {loading && (
          <div className="bg-[#f3f0ff] self-start px-3.5 py-3 rounded-2xl rounded-bl-sm">
            <div className="flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick chips */}
      <div className="flex flex-wrap gap-1.5 px-4 pb-2">
        {quickChips.map((chip) => (
          <button
            key={chip.label}
            onClick={() => sendMessage(chip.text)}
            className="bg-gray-50 border border-gray-200 rounded-full px-2.5 py-1 text-[11px] font-semibold text-gray-500 hover:bg-[#ede9ff] hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 px-4 py-3 border-t border-gray-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about your finances…"
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-[12px] text-gray-800 outline-none focus:border-[#6c63ff] focus:bg-white transition-all placeholder-gray-400"
        />
        <button
          onClick={() => sendMessage()}
          className="w-9 h-9 rounded-xl bg-[#6c63ff] flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all flex-shrink-0"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
