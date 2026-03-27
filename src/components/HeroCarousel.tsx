"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { heroSlides } from "@/lib/events";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Background Image with overlay - Concert crowd background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111212] via-[#111212]/80 to-[#111212]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111212] via-transparent to-[#111212]/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full pt-16 lg:pt-0 lg:pl-16 min-h-screen">
        {/* Left Section - Text */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-8 lg:py-0 order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-white leading-[1.1] mb-10 tracking-tight">
            Discover
            <br />
            your next
            <br />
            experience
          </h1>

          <Link
            href="/events"
            className="inline-flex items-center justify-center w-fit bg-white text-[#111212] px-10 py-4 rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
          >
            Browse All Events
          </Link>
        </div>

        {/* Right Section - Event Card */}
        <div className="flex-1 flex items-center justify-center px-4 lg:px-8 py-6 lg:py-0 order-1 lg:order-2">
          <div className="relative w-full max-w-[340px] lg:max-w-[400px] xl:max-w-[440px]">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute -left-4 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-4 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>

            {/* Event Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" key={currentIndex}>
              <div className="aspect-[3/4] relative">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.name}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Event Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex items-end justify-between">
                <div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-white mb-1">
                    {currentSlide.name}
                  </h2>
                  <p className="text-white/70 text-sm lg:text-base">{currentSlide.dates}</p>
                </div>
                <Link
                  href={`/events/${heroSlides[currentIndex].id}`}
                  className="w-11 h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label={`View ${currentSlide.name}`}
                >
                  <ArrowUpRight size={18} className="text-[#111212]" />
                </Link>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {heroSlides.map((_, index) => (
                <button
                  key={`dot-${heroSlides[index].id}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
