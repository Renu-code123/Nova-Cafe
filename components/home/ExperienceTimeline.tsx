"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, CloudSun, Moon, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    step: "01",
    time: "MORNING",
    hours: "08:00 AM — 12:00 PM",
    title: "Quiet Tables & First Pour",
    description: "Gentle natural light cutting across Danish oak tables. Freshly laminated sourdough croissants warm from the hearth, paired with pristine single-origin pour overs.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    time: "AFTERNOON",
    hours: "12:00 PM — 05:30 PM",
    title: "Conversations & Bistro Plates",
    description: "Creative energy, lingering meetings, and slow hours. Artisanal burrata, truffle mushroom toasts, and cold brew tonics served with easy hospitality.",
    icon: CloudSun,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    time: "EVENING",
    hours: "06:00 PM — 10:00 PM",
    title: "Amber Lights & Shared Company",
    description: "The space shifts mood. Low-tempo jazz on vinyl, natural botanical infusions, shared small plates, and rich dark chocolate miso tarts under soft candlelight.",
    icon: Moon,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="py-24 sm:py-36 bg-[#0C0B09] border-b border-[rgba(245,239,230,0.06)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              03 — RHYTHM & ATMOSPHERE
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EFE6] font-light tracking-tight leading-tight">
            Come for the coffee. <br />
            <span className="italic text-[#C88242]">Stay for the atmosphere.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9589] max-w-xl mx-auto leading-relaxed">
            Nova changes nuance with the daylight. A space engineered for focus in the early morning and unhurried intimacy by evening.
          </p>
        </div>

        {/* 3-Column Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative bg-[#141210] border border-[rgba(245,239,230,0.08)] hover:border-[rgba(200,130,66,0.3)] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full bg-[#1C1916] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent opacity-80" />

                  {/* Time Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0C0B09]/80 backdrop-blur-md px-3 py-1 border border-white/10 text-[10px] font-mono uppercase text-[#F5EFE6]">
                    <IconComponent className="w-3 h-3 text-[#C88242]" />
                    <span>{exp.time}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[10px] text-[#6E665C]">
                      <span>EXPERIENCE {exp.step}</span>
                      <span>{exp.hours}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#F5EFE6] group-hover:text-[#C88242] transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-xs text-[#9E9589] leading-relaxed pt-3">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[rgba(245,239,230,0.06)] flex items-center justify-between text-[11px] text-[#6E665C]">
                    <span className="font-mono">Atmosphere & Service</span>
                    <span className="text-[#C88242] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
