"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MENU_ITEMS, MenuItem } from "@/lib/data/menu-data";
import { MenuItemCard } from "../menu/MenuItemCard";
import { MenuDetailModal } from "../menu/MenuDetailModal";
import { Button } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

export function SignatureSection() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Pick top 6 featured signature items (coffee + kitchen)
  const signatureItems = MENU_ITEMS.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="py-24 sm:py-36 bg-[#0E0D0B] border-b border-[rgba(245,239,230,0.06)] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
                02 — PROVISIONS
              </span>
              <div className="h-[1px] w-12 bg-[#C88242]/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5EFE6] font-light">
              Today’s signatures
            </h2>
          </div>

          <p className="text-xs text-[#9E9589] max-w-sm leading-relaxed">
            Crafted in limited morning and evening batches. Single-origin coffees and seasonal bistro creations served fresh.
          </p>
        </div>

        {/* Editorial List of Items */}
        <div className="border-t border-[rgba(245,239,230,0.08)]">
          {signatureItems.map((item, index) => (
            <MenuItemCard
              key={item.id}
              item={item}
              index={index}
              onSelect={(selected) => setSelectedItem(selected)}
              viewMode="editorial"
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs text-[#6E665C] font-mono">
            Full catalog includes 24 seasonal specialty coffee, tea & culinary provisions.
          </span>
          <Link href="/menu">
            <Button variant="outline" size="md" withArrow>
              View Full Menu Catalog
            </Button>
          </Link>
        </div>
      </div>

      {/* Item Detail Modal */}
      <MenuDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
