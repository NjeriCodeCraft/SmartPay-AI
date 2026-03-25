import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar"; // Make sure this file exists in /components!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartPay AI | Interswitch Hackathon",
  description: "AI-Powered Personal Finance & Spending Insights",
};

// app/layout.tsx (Updated)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex bg-[#fcfcfd] min-h-screen">
        <Sidebar />
        {/* Match the sidebar width exactly here */}
        <main className="flex-1 ml-[220px] p-10">
          {children}
        </main>
      </body>
    </html>
  );
}