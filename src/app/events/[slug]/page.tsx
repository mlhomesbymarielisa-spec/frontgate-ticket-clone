"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Clock, Share2, Heart } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import { events } from "@/lib/events";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#111212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-white mb-4">Event Not Found</h1>
          <Link href="/events" className="text-[#7baa60] hover:underline">
            Browse all events
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.name,
          text: `Check out ${event.name} at ${event.location}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-[#111212]">
      <Sidebar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main className="pt-20 lg:pt-0 lg:pl-16">
        {/* Hero Section */}
        <div className="relative h-[50vh] lg:h-[60vh]">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111212] via-[#111212]/50 to-transparent" />

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="absolute top-6 left-6 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Actions */}
          <div className="absolute top-6 right-6 flex items-center gap-3">
            <button
              onClick={handleShare}
              className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Share event"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isFavorite ? "bg-red-500 text-white" : "bg-black/50 hover:bg-black/70 text-white"
              }`}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 lg:px-12 py-8 lg:py-12">
          <div className="max-w-4xl">
            {/* Event Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              {event.name}
            </h1>

            {/* Event Details */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={18} className="text-[#7baa60]" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Calendar size={18} className="text-[#7baa60]" />
                <span>{event.startDate} - {event.endDate}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#7baa60] hover:bg-[#6a9950] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors mb-12">
              Get Tickets
            </button>

            {/* Lineup Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Lineup</h2>
              <div className="flex flex-wrap gap-3">
                {event.artists.map((artist) => (
                  <span
                    key={artist}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
              <p className="text-white/70 leading-relaxed">
                Join us for an unforgettable experience at {event.name} in {event.location}.
                This multi-day festival features an incredible lineup of artists across multiple stages,
                along with art installations, food vendors, and more. Get your tickets now before they sell out!
              </p>
            </div>

            {/* Ticket Information */}
            <div className="bg-[#1a1a1b] rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Ticket Information</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <div>
                    <h3 className="text-white font-medium">General Admission</h3>
                    <p className="text-white/50 text-sm">Standard festival access</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">From $299</p>
                    <button className="text-[#7baa60] text-sm hover:underline">Select</button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <div>
                    <h3 className="text-white font-medium">VIP Pass</h3>
                    <p className="text-white/50 text-sm">Premium viewing areas + amenities</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">From $599</p>
                    <button className="text-[#7baa60] text-sm hover:underline">Select</button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="text-white font-medium">Platinum Experience</h3>
                    <p className="text-white/50 text-sm">All-access + exclusive perks</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">From $1,299</p>
                    <button className="text-[#7baa60] text-sm hover:underline">Select</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

