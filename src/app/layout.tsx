import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Front Gate Tickets | Discover Your Next Experience",
  description: "Redefining the festival ticketing experience for promoters & fans through innovation, creativity, & technology.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
