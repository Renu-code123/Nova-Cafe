"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES, GalleryImage } from "@/lib/data/gallery-data";
import { X, Clock, MapPin } from "lucide-react";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-24 sm:py-36 bg-[#0C0B09] border-b border-[rgba(245,239,230,0.06)] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
                05 — ATMOSPHERE GALLERY
              </span>
              <div className="h-[1px] w-12 bg-[#C88242]/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EFE6] font-light">
              Moments at Nova
            </h2>
          </div>

          <p className="text-xs text-[#9E9589] max-w-sm leading-relaxed font-mono">
            Captured across daily service. Light, architecture, artisanal roasts, and unhurried company.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Item 1: Wide / Large (col-span-8) */}
          <div
            onClick={() => setActiveImage(GALLERY_IMAGES[0])}
            className="md:col-span-8 relative aspect-[16/10] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)] group cursor-pointer"
          >
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-mono block">
                  {GALLERY_IMAGES[0].location}
                </span>
                <h4 className="font-serif text-2xl text-[#F5EFE6] mt-1">
                  {GALLERY_IMAGES[0].title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#9E9589] bg-[#0C0B09]/80 px-2.5 py-1 border border-white/10">
                {GALLERY_IMAGES[0].timestamp}
              </span>
            </div>
          </div>

          {/* Item 2: Portrait (col-span-4) */}
          <div
            onClick={() => setActiveImage(GALLERY_IMAGES[1])}
            className="md:col-span-4 relative aspect-[4/5] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)] group cursor-pointer"
          >
            <Image
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-mono block">
                  {GALLERY_IMAGES[1].location}
                </span>
                <h4 className="font-serif text-xl text-[#F5EFE6] mt-1">
                  {GALLERY_IMAGES[1].title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#9E9589] bg-[#0C0B09]/80 px-2.5 py-1 border border-white/10">
                {GALLERY_IMAGES[1].timestamp}
              </span>
            </div>
          </div>

          {/* Item 3: Landscape (col-span-4) */}
          <div
            onClick={() => setActiveImage(GALLERY_IMAGES[2])}
            className="md:col-span-4 relative aspect-[4/3] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)] group cursor-pointer"
          >
            <Image
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-mono block">
                  {GALLERY_IMAGES[2].location}
                </span>
                <h4 className="font-serif text-xl text-[#F5EFE6] mt-1">
                  {GALLERY_IMAGES[2].title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#9E9589] bg-[#0C0B09]/80 px-2.5 py-1 border border-white/10">
                {GALLERY_IMAGES[2].timestamp}
              </span>
            </div>
          </div>

          {/* Item 4: Landscape (col-span-4) */}
          <div
            onClick={() => setActiveImage(GALLERY_IMAGES[3])}
            className="md:col-span-4 relative aspect-[4/3] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)] group cursor-pointer"
          >
            <Image
              src={GALLERY_IMAGES[3].src}
              alt={GALLERY_IMAGES[3].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-mono block">
                  {GALLERY_IMAGES[3].location}
                </span>
                <h4 className="font-serif text-xl text-[#F5EFE6] mt-1">
                  {GALLERY_IMAGES[3].title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#9E9589] bg-[#0C0B09]/80 px-2.5 py-1 border border-white/10">
                {GALLERY_IMAGES[3].timestamp}
              </span>
            </div>
          </div>

          {/* Item 5: Landscape (col-span-4) */}
          <div
            onClick={() => setActiveImage(GALLERY_IMAGES[4])}
            className="md:col-span-4 relative aspect-[4/3] bg-[#141210] overflow-hidden border border-[rgba(245,239,230,0.08)] group cursor-pointer"
          >
            <Image
              src={GALLERY_IMAGES[4].src}
              alt={GALLERY_IMAGES[4].alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-mono block">
                  {GALLERY_IMAGES[4].location}
                </span>
                <h4 className="font-serif text-xl text-[#F5EFE6] mt-1">
                  {GALLERY_IMAGES[4].title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#9E9589] bg-[#0C0B09]/80 px-2.5 py-1 border border-white/10">
                {GALLERY_IMAGES[4].timestamp}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-[#0C0B09]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#141210] border border-[rgba(245,239,230,0.15)] z-10 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:text-[#C88242] transition-colors cursor-pointer border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141210]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-mono block">
                    {activeImage.location} · {activeImage.timestamp}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5EFE6] mt-1">
                    {activeImage.title}
                  </h3>
                  <p className="text-xs text-[#9E9589] mt-2">
                    {activeImage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
