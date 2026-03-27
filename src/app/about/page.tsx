"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import { Zap, Users, Globe, Shield } from "lucide-react";

const stats = [
  { value: "500+", label: "Events Powered" },
  { value: "10M+", label: "Tickets Sold" },
  { value: "50+", label: "Festival Partners" },
  { value: "15+", label: "Years of Experience" },
];

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously push the boundaries of ticketing technology to create seamless experiences for fans and promoters alike.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in building lasting relationships with our partners and creating memorable moments for every attendee.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "We're committed to making live events accessible to everyone, everywhere, through our global platform.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Security and reliability are at the core of everything we do, ensuring safe transactions for millions of fans.",
  },
];

export default function AboutPage() {
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
              backgroundImage: "url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-[#111212]/70" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-6">
              About Us
            </h1>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
              Redefining the festival ticketing experience through innovation, creativity, and technology.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-6 lg:px-12 py-16 border-b border-white/10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-[#7baa60] mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
              Our Mission
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Front Gate Tickets is dedicated to creating the most seamless and memorable ticketing
              experience for fans and promoters. We partner with the world's most iconic festivals
              and events to deliver innovative solutions that make live experiences accessible to everyone.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              From the moment you discover an event to the second you walk through the gates,
              we're with you every step of the way. Our technology powers some of the biggest
              names in live entertainment, and we're just getting started.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="px-6 lg:px-12 py-16 bg-[#0d0d0e]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-[#1a1a1b] rounded-2xl p-8 hover:bg-[#222223] transition-colors"
                >
                  <value.icon className="w-10 h-10 text-[#7baa60] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="px-6 lg:px-12 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Trusted by the Best
            </h2>
            <p className="text-white/60 mb-12">
              Powering ticketing for the world's most iconic festivals and events
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["EDC", "Bonnaroo", "Lollapalooza", "Outside Lands", "BottleRock", "Governors Ball"].map(
                (partner) => (
                  <div
                    key={partner}
                    className="text-white/80 text-xl font-semibold hover:text-[#7baa60] transition-colors cursor-pointer"
                  >
                    {partner}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 lg:px-12 pb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#7baa60]/30 to-[#1a1a1b] rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Ready to work with us?
            </h2>
            <p className="text-white/60 mb-8">
              Whether you're a promoter looking to sell tickets or a fan looking for your next adventure, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events"
                className="bg-white text-[#111212] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Browse Events
              </Link>
              <Link
                href="/support"
                className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
