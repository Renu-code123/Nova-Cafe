"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="py-24 sm:py-36 bg-[#0C0B09] border-b border-[rgba(245,239,230,0.06)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Index */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
            01 — PHILOSOPHY
          </span>
          <div className="h-[1px] w-12 bg-[#C88242]/40" />
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Large Statement */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5EFE6] leading-[1.08] font-light"
            >
              “Made slowly. <br />
              <span className="italic text-[#C88242]">Served beautifully.</span>”
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-[#C88242] via-[rgba(245,239,230,0.15)] to-transparent my-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-[#D6CCC0] font-light leading-relaxed max-w-xl"
            >
              We reject the rush of the modern coffee drive-thru. Nova was founded on the belief that coffee is an artisanal craft, food is a communal ritual, and the spaces we inhabit shape how we think, create, and connect.
            </motion.p>
          </div>

          {/* Right Column: Editorial Paragraphs & Visual Card */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] relative"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E9589] font-mono block">
                  The Nova Standard
                </span>
                <p className="text-xs text-[#9E9589] leading-relaxed">
                  Every batch of beans is sourced directly from ethical high-elevation Indian estates and micro-lot international farms, roasted weekly to preserve delicate terroir florals, and prepared on precision machines calibrated daily to the room’s ambient humidity.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C88242] hover:text-[#DE9B5E] transition-colors"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Mini Stat/Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#141210]/50 border border-[rgba(245,239,230,0.05)]">
                <span className="text-[10px] text-[#6E665C] uppercase block">ROAST PROFILE</span>
                <span className="text-[#F5EFE6] font-medium mt-1 block">Omni-Roast Micro Lot</span>
              </div>
              <div className="p-4 bg-[#141210]/50 border border-[rgba(245,239,230,0.05)]">
                <span className="text-[10px] text-[#6E665C] uppercase block">FERMENTATION</span>
                <span className="text-[#F5EFE6] font-medium mt-1 block">36-72hr Sourdough</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
