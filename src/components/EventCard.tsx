"use client";

import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";
import type { Event } from "@/lib/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group bg-[#1a1a1b] rounded-2xl overflow-hidden event-card block"
    >
      {/* Image */}
      <div className="aspect-[4/5] relative overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">
          {event.name}
        </h3>

        <div className="flex items-center gap-2 text-white/60 mb-2">
          <MapPin size={14} />
          <span className="text-sm">{event.location}</span>
        </div>

        <div className="flex items-center gap-2 text-white/60 mb-4">
          <Calendar size={14} />
          <span className="text-sm">
            {event.startDate} - {event.endDate}
          </span>
        </div>

        {/* Artists */}
        <div className="flex flex-wrap gap-1">
          {event.artists.slice(0, 4).map((artist) => (
            <span
              key={artist}
              className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
            >
              {artist}
            </span>
          ))}
          {event.artists.length > 4 && (
            <span className="text-xs text-white/40 px-2 py-1">
              +{event.artists.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
