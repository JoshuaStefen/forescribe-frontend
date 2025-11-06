import "./globals.css";
import React from "react";

export const metadata = {
  title: "Forescribe - Master your digital landscape",
  description:
    "Forescribe — AI-powered SaaS operations and software asset visibility.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen antialiased overflow-hidden">
        <div className="background-svg z-0" aria-hidden="true" />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(118.88deg, rgba(0,0,0,0.7) 38.24%, rgba(139,61,255,0.7) 97.48%)",
            border: "1px solid rgba(0,0,0,1)",
            opacity: 1,
          }}
        />
        {/* 🔹 Top-left Logo */}
        <header className="absolute top-10 left-28 z-40">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="forescribe"
              className="w-40 h-9 object-contain"
            />
          </div>
        </header>

        <div className="background-blur-overlay" aria-hidden="true" />
        {/* 🌐 Page Content */}
        <main className="relative z-30 flex items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
