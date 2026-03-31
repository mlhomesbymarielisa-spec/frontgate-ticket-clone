import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111212] border-t border-white/10 pt-12 pb-8 px-4 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
          
          {/* Newsletter / Sign Up Section */}
          <div>
            <p className="text-white mb-3">Subscribe to our newsletter!</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/30 rounded-full px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
              />
              <Link href="/signup">
                <button 
                  type="button"
                  className="bg-white/10 border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-colors"
                >
                  Sign Up
                </button>
              </Link>
            </div>
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
