"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/events";
import { Ticket, Calendar, MapPin, ChevronLeft } from "lucide-react";

export default function EventPage() {
  const params = useParams();
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to all events
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Event Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={event.image} 
              alt={event.title} 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-6 text-slate-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                {event.location}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ticket Purchase */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-100">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Ticket className="w-5 h-5 mr-2" />
              Select Tickets
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 cursor-pointer transition-all bg-slate-50">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-lg">General Admission</span>
                  <span className="text-blue-600 font-bold">${event.price}</span>
                </div>
                <p className="text-sm text-slate-500">Includes entry for all days.</p>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 cursor-pointer transition-all">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-lg">VIP Pass</span>
                  <span className="text-blue-600 font-bold">${(event.price * 1.5).toFixed(0)}</span>
                </div>
                <p className="text-sm text-slate-500">Express entry + exclusive lounges.</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
