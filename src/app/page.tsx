"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import HeroCarousel from "@/components/HeroCarousel";
import SupportBanner from "@/components/SupportBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111212]">
      <Sidebar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main>
        <HeroCarousel />
        <SupportBanner />
        <Footer />
      </main>
    </div>
  );
}
