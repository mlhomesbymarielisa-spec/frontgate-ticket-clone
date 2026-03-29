"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand Name */}
        <Link href="/" className="text-2xl font-black text-white uppercase tracking-tighter">
          Front<span className="text-slate-400">Gate</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-sm font-semibold">
          <Link href="/events" className="text-slate-300 hover:text-white transition-colors">
            Browse Events
          </Link>
          <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
            Support
          </Link>
          <Link href="/login" className="text-slate-300 hover:text-white transition-colors">
            Log In
          </Link>
          
          {/* White Sign Up Button */}
          <Link 
            href="/signup" 
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-slate-200 transition-all border border-white font-bold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
} // <--- This was the missing '}' causing your Vercel error!
