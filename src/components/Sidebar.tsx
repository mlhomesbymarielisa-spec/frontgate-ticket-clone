"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

interface SidebarProps {
  onSearchClick: () => void;
}

export default function Sidebar({ onSearchClick }: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-16 bg-[#111212] border-r border-white/5 z-50 flex-col items-center py-6 hidden lg:flex">
        {/* Logo */}
        <Link href="/" className="mb-8">
          <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center">
            <span className="text-xs font-bold text-white/80">FGT</span>
          </div>
        </Link>

        {/* Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors mb-4"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Search Icon */}
        <button
          onClick={onSearchClick}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          aria-label="Search"
        >
          <Search size={22} />
        </button>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#111212] border-b border-white/5 z-50 flex items-center justify-between px-4 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white/80">FGT</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={onSearchClick}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#111212] z-[100] transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
            >
              Events
            </Link>
            <Link
              href="/support"
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-5xl font-light text-white hover:text-white/70 transition-colors"
            >
              Careers
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pb-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
