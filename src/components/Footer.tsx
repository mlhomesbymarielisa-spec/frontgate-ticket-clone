"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [activeTab, setActiveTab] = useState<"events" | "business">("events");
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#111212] border-t border-white/10 pt-12 pb-8 px-4 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
          {/* Logo and Tabs */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-white/80">FGT</span>
            </div>

            {/* Tabs */}
            <div className="flex items-center bg-[#1a1a1b] rounded-full p-1">
              <button
                onClick={() => setActiveTab("events")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "events"
                    ? "bg-white text-[#111212]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                  activeTab === "business"
                    ? "bg-white text-[#111212]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Go to Business
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 md:gap-10">
            <Link
              href="/events"
              className="text-white hover:text-white/70 transition-colors flex items-center gap-2"
            >
              Browse Events
              <span className="w-5 h-5 bg-[#7baa60] rounded flex items-center justify-center">
                <span className="text-[10px] text-white">+</span>
              </span>
            </Link>
            <Link
              href="/support"
              className="text-white hover:text-white/70 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-white/70 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="text-white hover:text-white/70 transition-colors"
            >
              Careers
            </Link>
          </nav>
        </div>

        {/* Newsletter and Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          {/* Newsletter */}
          <div>
            <p className="text-white mb-3">Subscribe to our newsletter!</p>
            <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 rounded-full px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-white/10 border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-white/50">Follow us on</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section - Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
          <p className="text-white/40">
            © Front Gate Tickets 2026. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
            <Link href="/terms-of-sale" className="text-white/40 hover:text-white/60 transition-colors">
              Terms of Sale
            </Link>
            <Link href="/accessibility" className="text-white/40 hover:text-white/60 transition-colors">
              Accessibility Statement
            </Link>
            <button className="text-white/40 hover:text-white/60 transition-colors text-left">
              Do not sell or share my personal information
            </button>
            <button className="bg-[#1a1a1b] text-white/60 px-4 py-2 rounded text-xs hover:bg-[#252526] transition-colors">
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
