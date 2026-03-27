"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";

const openings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Event Operations Manager",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time",
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Austin, TX",
    type: "Full-time",
  },
  {
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "Unlimited PTO policy",
  "Festival ticket perks",
  "Remote-friendly culture",
  "Professional development budget",
];

export default function CareersPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111212]">
      <Sidebar onSearchClick={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <main className="pt-20 lg:pt-0 lg:pl-16">
        {/* Hero Section */}
        <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-[#111212]/70" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
              Help us create unforgettable experiences for millions of fans worldwide.
            </p>
          </div>
        </div>

        {/* Culture Section */}
        <div className="px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
              Why Front Gate?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              At Front Gate Tickets, we're passionate about live music and creating technology
              that brings fans closer to the experiences they love. Our team is made up of
              dreamers, builders, and music lovers who believe in the power of live events.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-[#1a1a1b] rounded-xl p-6 text-left"
                >
                  <div className="w-2 h-2 bg-[#7baa60] rounded-full mb-3" />
                  <p className="text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="px-6 lg:px-12 py-16 bg-[#0d0d0e]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-12 text-center">
              Open Positions
            </h2>

            <div className="space-y-4">
              {openings.map((job) => (
                <a
                  key={job.title}
                  href="#"
                  className="block bg-[#1a1a1b] rounded-xl p-6 hover:bg-[#222223] transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#7baa60] transition-colors flex items-center gap-2">
                        {job.title}
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                        <span className="bg-white/10 px-3 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#7baa60] font-medium">
                      Apply Now
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 lg:px-12 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-light text-white mb-4">
              Don't see the right role?
            </h2>
            <p className="text-white/60 mb-8">
              We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@frontgatetickets.com"
              className="inline-flex items-center gap-2 bg-white text-[#111212] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Send Your Resume
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
