"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { events } from "@/lib/events";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      event.location.toLowerCase().includes(query.toLowerCase()) ||
      event.artists.some((artist) =>
        artist.toLowerCase().includes(query.toLowerCase())
      )
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#111212]/95 backdrop-blur-md z-[100] overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
          <h2 className="text-xl md:text-2xl font-light text-white">
            Search Events, Artists, or Venues
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 md:p-6 border-b border-white/10">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for events, artists, or venues..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 p-4 md:p-6">
          <div className="max-w-5xl mx-auto">
            {query && (
              <p className="text-white/50 mb-6">
                {filteredEvents.length} result{filteredEvents.length !== 1 ? "s" : ""} for "{query}"
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(query ? filteredEvents : events.slice(0, 9)).map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  onClick={onClose}
                  className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-1">{event.name}</h3>
                    <p className="text-white/50 text-sm">{event.location}</p>
                    <p className="text-white/40 text-sm mt-1">
                      {event.startDate} - {event.endDate}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {query && filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/50 text-lg">No events found matching "{query}"</p>
                <p className="text-white/30 mt-2">Try searching for a different event, artist, or venue</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
