"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useReservation } from "@/components/reservations/ReservationContext";
import { Compass, Sparkles, Sprout, HeartHandshake, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const { openReservation } = useReservation();

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#0C0B09] min-h-screen text-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24 sm:space-y-36">
        {/* Hero Headline */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              THE NOVA MANIFESTO
            </span>
            <div className="h-[1px] w-12 bg-[#C88242]/40" />
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F5EFE6] font-light leading-[1.04]">
            More than <br />
            <span className="italic text-[#C88242]">a café.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#D6CCC0] max-w-2xl font-light leading-relaxed pt-2">
            Nova was created as a sanctuary against the noise of speed. A dedicated meeting ground for slow mornings, honest conversations, creative work, and intentional nourishment.
          </p>
        </div>

        {/* Large Cinematic Hero Composition */}
        <div className="relative aspect-[16/9] w-full bg-[#141210] border border-[rgba(245,239,230,0.08)] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1800&auto=format&fit=crop"
            alt="Nova Café architectural interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 sm:left-10 text-xs font-mono text-[#D6CCC0]">
            The Flagship Atrium · Designed with Danish Oak, Raw Concrete & Living Ficus
          </div>
        </div>

        {/* Story Section 1: The Coffee & Roastery Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
              01 / ETHICAL SOURCING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EFE6] font-light">
              Direct from high-altitude estates.
            </h2>
            <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
              We work directly with generational coffee farmers across Chikmagalur, Coorg, and the Biligirirangana Hills in South India, as well as select micro-lot origins in Ethiopia and Colombia.
            </p>
            <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
              By cutting out middlemen, our growers receive premium prices well above fair-trade baselines, enabling sustainable agroforestry and biodiversity conservation on the hillsides.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#141210] border border-[rgba(245,239,230,0.08)]">
                <span className="text-[#C88242] block text-xl font-serif">100%</span>
                <span className="text-[#6E665C] uppercase mt-1 block">Traceable Single Estates</span>
              </div>
              <div className="p-4 bg-[#141210] border border-[rgba(245,239,230,0.08)]">
                <span className="text-[#C88242] block text-xl font-serif">84+</span>
                <span className="text-[#6E665C] uppercase mt-1 block">SCA Cupping Score</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)]">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
              alt="Artisanal pour over coffee brewing at Nova"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Story Section 2: The Bakehouse & Kitchen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)]">
            <Image
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop"
              alt="Freshly baked sourdough croissant"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
              02 / THE BAKEHOUSE & HEARTH
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5EFE6] font-light">
              Wild fermentation, cultured butter.
            </h2>
            <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
              Our bakehouse wakes up at 4:00 AM every single morning. We nurture a 6-year-old wild sourdough starter, blending stoneground organic flours with French AOP cultured butter.
            </p>
            <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
              Nothing is ever rushed or frozen. The 72-hour lamination cycle ensures hundreds of whisper-thin, crisp layers that surrender gently to the tooth.
            </p>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="space-y-12 border-t border-[rgba(245,239,230,0.08)] pt-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              OUR GUIDING PRINCIPLES
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5EFE6]">
              How we hold space
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <Sprout className="w-6 h-6 text-[#C88242]" />
              <h4 className="font-serif text-xl text-[#F5EFE6]">Radical Seasonality</h4>
              <p className="text-xs text-[#9E9589] leading-relaxed">
                We only cook with what the soil produces naturally in each season. Our menu evolves dynamically every 90 days.
              </p>
            </div>

            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <Sparkles className="w-6 h-6 text-[#C88242]" />
              <h4 className="font-serif text-xl text-[#F5EFE6]">Acoustic & Tactile Calm</h4>
              <p className="text-xs text-[#9E9589] leading-relaxed">
                Sound levels, table spacing, and natural light are engineered to cultivate focus without sterile quietness.
              </p>
            </div>

            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <HeartHandshake className="w-6 h-6 text-[#C88242]" />
              <h4 className="font-serif text-xl text-[#F5EFE6]">Warm Hospitality</h4>
              <p className="text-xs text-[#9E9589] leading-relaxed">
                No pretension or gatekeeping in coffee. Whether you drink black pour overs or sweet lattes, you are treated as family.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Invitation CTA */}
        <div className="p-12 sm:p-16 bg-[#141210] border border-[rgba(200,130,66,0.3)] text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-5xl text-[#F5EFE6]">
            Experience Nova in Person
          </h3>
          <p className="text-xs sm:text-sm text-[#9E9589] max-w-lg mx-auto">
            We invite you to spend a morning with our baristas or an evening lingering over shared plates.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button
              variant="amber"
              size="lg"
              onClick={() => openReservation(2)}
              withArrow
            >
              Reserve a Table
            </Button>
            <Link href="/menu">
              <Button variant="outline" size="lg">
                View Offerings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
