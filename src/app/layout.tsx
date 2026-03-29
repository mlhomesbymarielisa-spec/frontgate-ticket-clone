import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 1. Add this import

export const metadata: Metadata = {
  title: "Front Gate Tickets | Discover Your Next Experience",
  description: "Redefining the festival ticketing experience for promoters & fans through innovation, creativity, & technology. ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950">
        <Navbar /> {/* 2. Add the Navbar here */}
        {children}
      </body>
    </html>
  );
}
