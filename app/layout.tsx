import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexaura Blog - AI Platform for Tunisian Startups",
  description: "Discover insights on legal compliance, AI-powered recruitment, and startup growth in Tunisia. Learn how Nexaura helps entrepreneurs succeed.",
  keywords: "Nexaura, Tunisia startups, legal compliance, AI recruitment, TeamBuilder, ComplianceGuard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
