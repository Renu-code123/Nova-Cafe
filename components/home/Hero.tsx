"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useReservation } from "../reservations/ReservationContext";
import { ArrowDown, Clock, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  const { openReservation } = useReservation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0B09]">
      {/* Background Image with subtle scale & parallax effect */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.42 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop"
          alt="Nova Café artisanal bistro interior with cinematic lighting"
          fill
          priority
          className="object-cover object-center filter saturate-90 contrast-110"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09] via-[#0C0B09]/50 to-[#0C0B09]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B09]/80 via-transparent to-[#0C0B09]/80" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-32 w-full flex flex-col justify-between min-h-screen">
        {/* Top Spacer */}
        <div className="h-12" />

        {/* Center Hero Block */}
        <div className="max-w-4xl space-y-8 my-auto">
          {/* Metadata pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#141210]/80 border border-[rgba(245,239,230,0.12)] backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C88242] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D6CCC0] font-mono">
              Atelier Bistro · Specialty Roasts
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F5EFE6] leading-[1.02] font-light"
            >
              Coffee. Food. <br />
              <span className="italic font-serif text-[#C88242]">Creativity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-base sm:text-lg text-[#D6CCC0] max-w-2xl font-sans font-light leading-relaxed pt-2"
            >
              An artisanal café and bistro where single-origin coffees, thoughtful culinary craft, and rotating creative energy come together with slow intention.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link href="/menu">
              <Button variant="primary" size="lg" withArrow>
                Explore Menu
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openReservation(2)}
            >
              Reserve a Table
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar: Location, Hours, Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-12 border-t border-[rgba(245,239,230,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#9E9589]"
        >
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C88242]" />
              <span className="text-[#F5EFE6]">LUCKNOW / INDIA</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C88242]" />
              <span>OPEN TODAY · 8:00 AM — 10:00 PM</span>
            </div>
          </div>

          <a
            href="#manifesto"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#9E9589] hover:text-[#F5EFE6] transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
