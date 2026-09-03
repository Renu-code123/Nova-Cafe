"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "@/lib/data/menu-data";
import { formatCurrency } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  onSelect: (item: MenuItem) => void;
  viewMode?: "editorial" | "grid";
}

export function MenuItemCard({ item, index, onSelect, viewMode = "editorial" }: MenuItemCardProps) {
  const paddedIndex = String(index + 1).padStart(2, "0");

  if (viewMode === "grid") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, delay: index * 0.04 }}
        onClick={() => onSelect(item)}
        className="group relative bg-[#141210] border border-[rgba(245,239,230,0.08)] hover:border-[rgba(200,130,66,0.3)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1916]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent opacity-60" />
          
          {item.featured && (
            <div className="absolute top-3 left-3 bg-[#0C0B09]/85 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#C88242]">
              Signature
            </div>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h4 className="font-serif text-lg sm:text-xl text-[#F5EFE6] group-hover:text-[#C88242] transition-colors leading-tight">
                {item.name}
              </h4>
              <span className="font-serif text-lg text-[#F5EFE6] font-light shrink-0">
                {formatCurrency(item.price)}
              </span>
            </div>
            <p className="text-xs text-[#9E9589] line-clamp-2 leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[rgba(245,239,230,0.06)] text-[10px]">
            <div className="flex flex-wrap gap-1.5">
              {item.dietaryTags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[#9E9589] uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[#C88242] inline-flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              Details <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  // Editorial List View
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      onClick={() => onSelect(item)}
      className="group relative border-b border-[rgba(245,239,230,0.08)] py-6 sm:py-7 hover:border-[rgba(200,130,66,0.35)] transition-all cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        {/* Left column: Number + Title */}
        <div className="flex items-baseline gap-4 md:gap-8 flex-1">
          <span className="font-mono text-xs text-[#6E665C] group-hover:text-[#C88242] transition-colors select-none shrink-0">
            {paddedIndex}
          </span>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h4 className="font-serif text-xl sm:text-2xl text-[#F5EFE6] group-hover:text-[#C88242] transition-colors">
                {item.name}
              </h4>
              {item.dietaryTags.includes("House Signature") && (
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C88242] border border-[#C88242]/30 px-2 py-0.5">
                  Signature
                </span>
              )}
            </div>
            <p className="text-xs text-[#9E9589] max-w-xl leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Right column: Tasting Note + Price + Arrow */}
        <div className="flex items-center justify-between md:justify-end gap-6 md:gap-10 shrink-0 pl-8 md:pl-0">
          {item.tastingNotes && (
            <span className="text-[11px] text-[#6E665C] hidden lg:block max-w-[180px] text-right truncate">
              {item.tastingNotes.slice(0, 2).join(" · ")}
            </span>
          )}
          <span className="font-serif text-xl sm:text-2xl text-[#F5EFE6] font-light">
            {formatCurrency(item.price)}
          </span>
          <div className="w-8 h-8 rounded-full border border-[rgba(245,239,230,0.1)] flex items-center justify-center text-[#9E9589] group-hover:border-[#C88242] group-hover:text-[#C88242] transition-all">
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
