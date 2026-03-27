"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/events";

export default function EventsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    // In a real app, we'd compare dates properly
    return filter === "upcoming";
  });

  return (
    <div className="min-h-screen bg-[#111212]">
      <Sidebar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main className="pt-20 lg:pt-0 lg:pl-16">
        {/* Header */}
        <div className="px-6 lg:px-12 py-12 lg:py-20">
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6">
            Browse Events
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Discover your next unforgettable experience. From music festivals to intimate concerts, find the perfect event for you.
          </p>

          {/* Filters */}
          <div className="flex items-center gap-3 mt-8">
            {(["all", "upcoming", "past"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  filter === f
                    ? "bg-white text-[#111212]"
                    : "border border-white/30 text-white/70 hover:text-white hover:border-white/50"
                }`}
              >
                {f === "all" ? "All Events" : f}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="px-6 lg:px-12 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
