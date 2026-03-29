"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
        
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
              <Link href="/events" className="text-slate-300 hover:text-white transition-colors">Browse Events</Link>
              <Link href="/support" className="text-slate-300 hover:text-white transition-colors">Support</Link>
              <Link href="/login" className="text-slate-300 hover:text-white transition-colors">Log In</Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
