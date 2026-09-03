"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/lib/data/menu-data";
import { formatCurrency } from "@/lib/utils";
import { Button } from "../ui/Button";
import { useReservation } from "../reservations/ReservationContext";
import { X, Sparkles, AlertCircle, Coffee, Compass } from "lucide-react";

interface MenuDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function MenuDetailModal({ item, onClose }: MenuDetailModalProps) {
  const { openReservation } = useReservation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && item) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C0B09]/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#141210] border border-[rgba(245,239,230,0.14)] overflow-hidden text-[#F5EFE6] my-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-[#0C0B09]/70 text-[#9E9589] hover:text-[#F5EFE6] transition-colors cursor-pointer border border-white/10 backdrop-blur-sm"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative w-full h-72 sm:h-80 bg-[#1C1916] overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/30" />

            {/* Category badge */}
            <div className="absolute bottom-4 left-6 sm:left-8 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-[#0C0B09]/80 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#C88242] font-medium backdrop-blur-sm">
                {item.category}
              </span>
              {item.subcategory && (
                <span className="px-2.5 py-1 bg-[#0C0B09]/80 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#9E9589] backdrop-blur-sm">
                  {item.subcategory}
                </span>
              )}
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[rgba(245,239,230,0.08)] pb-5">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-[#F5EFE6]">
                  {item.name}
                </h3>
                {item.origin && (
                  <p className="text-xs text-[#C88242] flex items-center gap-1.5 mt-1 font-mono">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Origin: {item.origin}</span>
                  </p>
                )}
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-[#F5EFE6] font-light">
                {formatCurrency(item.price)}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#D6CCC0] leading-relaxed">
              {item.longDescription || item.description}
            </p>

            {/* Tasting Notes */}
            {item.tastingNotes && item.tastingNotes.length > 0 && (
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E9589] block mb-2 font-medium">
                  Sensory & Tasting Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-[#1C1916] border border-[rgba(245,239,230,0.08)] text-xs text-[#F5EFE6]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients & Allergens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[rgba(245,239,230,0.08)] text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E9589] block mb-1">
                  Ingredients
                </span>
                <p className="text-[#D6CCC0] leading-relaxed">
                  {item.ingredients.join(" · ")}
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E9589] block mb-1">
                  Allergens & Dietary
                </span>
                <p className="text-[#D6CCC0]">
                  Allergens: <span className="text-[#F5EFE6]">{item.allergens.join(", ") || "None"}</span>
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.dietaryTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase px-2 py-0.5 bg-[#C88242]/10 text-[#C88242] border border-[#C88242]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[rgba(245,239,230,0.08)]">
              <span className="text-[11px] text-[#9E9589]">
                Served fresh daily in our dining rooms.
              </span>
              <Button
                variant="primary"
                onClick={() => {
                  onClose();
                  openReservation(2);
                }}
                withArrow
              >
                Reserve a Table
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
