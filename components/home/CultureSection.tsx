"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, Disc, Sparkles } from "lucide-react";

export function CultureSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#0E0D0B] border-b border-[rgba(245,239,230,0.06)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Asymmetric 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto bg-[#1C1916] overflow-hidden border border-[rgba(245,239,230,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop"
                alt="Art exhibition and ceramics at Nova Café"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09]/80 via-transparent to-transparent" />

              {/* Floating Exhibition Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141210]/90 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block mb-1">
                  CURRENT ROTATING EXHIBIT
                </span>
                <p className="font-serif text-lg text-[#F5EFE6]">
                  “Earth, Salt & Ochre” by Studio Mati
                </p>
                <span className="text-[10px] text-[#9E9589] font-mono block mt-1">
                  Ceramics, pigment canvases & sculptural lighting
                </span>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#181512] border border-[rgba(245,239,230,0.1)] p-4 max-w-[200px] shadow-2xl">
              <Disc className="w-5 h-5 text-[#C88242] mb-2 animate-spin-slow" />
              <span className="text-[9px] uppercase tracking-widest text-[#6E665C] block">
                Vinyl Listening Station
              </span>
              <p className="text-xs text-[#D6CCC0] font-serif mt-1">
                Warm analog jazz & ambient neo-classical
              </p>
            </div>
          </div>

          {/* Right Column: Story & Engagement */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
                  04 — CULTURE & RESIDENCY
                </span>
                <div className="h-[1px] w-12 bg-[#C88242]/40" />
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EFE6] font-light leading-[1.08]">
                Art lives here.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D6CCC0] leading-relaxed font-light">
              Nova is more than a culinary destination; it is a living canvas for independent visual artists, ceramicists, typographers, and musicians. Every quarter, our gallery walls, tableware, and playlist rotate to celebrate new regional talent.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-[#141210] border border-[rgba(245,239,230,0.06)]">
                <Palette className="w-5 h-5 text-[#C88242] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#F5EFE6] font-medium">
                    Quarterly Artist Residencies
                  </h4>
                  <p className="text-xs text-[#9E9589] mt-1 leading-relaxed">
                    Local painters and photographers showcase original pieces with 100% of art sale proceeds going directly to the artists.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#141210] border border-[rgba(245,239,230,0.06)]">
                <Sparkles className="w-5 h-5 text-[#C88242] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#F5EFE6] font-medium">
                    Hand-Thrown Ceramic Editions
                  </h4>
                  <p className="text-xs text-[#9E9589] mt-1 leading-relaxed">
                    Our coffee cups and tasting carafes are custom-thrown in small batches by regional studio potters, available for purchase.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C88242] hover:text-[#DE9B5E] transition-colors border-b border-[#C88242]/40 pb-1"
              >
                <span>Submit an Artist Portfolio / Residency Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
