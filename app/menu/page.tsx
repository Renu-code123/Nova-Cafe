"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, MenuItem } from "@/lib/data/menu-data";
import { MenuFilter } from "@/components/menu/MenuFilter";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { MenuDetailModal } from "@/components/menu/MenuDetailModal";
import { Coffee, UtensilsCrossed, Sparkles } from "lucide-react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"editorial" | "grid">("editorial");
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const toggleDietary = (tag: string) => {
    setSelectedDietary((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Dietary match (must match all selected tags)
      if (
        selectedDietary.length > 0 &&
        !selectedDietary.every((tag) => item.dietaryTags.includes(tag as any))
      ) {
        return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesIng = item.ingredients.some((i) => i.toLowerCase().includes(q));
        const matchesNotes = item.tastingNotes?.some((n) => n.toLowerCase().includes(q));
        const matchesOrigin = item.origin?.toLowerCase().includes(q);

        if (!matchesName && !matchesDesc && !matchesIng && !matchesNotes && !matchesOrigin) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#0C0B09] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              PROVISIONS & ROASTS
            </span>
            <div className="h-[1px] w-12 bg-[#C88242]/40" />
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl text-[#F5EFE6] font-light tracking-tight">
            The Nova Menu
          </h1>
          <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
            Every coffee is roasted in micro-lots, brewed with filtered spring water, and paired with scratch-baked provisions from our hearth.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12">
          <MenuFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedDietary={selectedDietary}
            onToggleDietary={toggleDietary}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onToggleViewMode={setViewMode}
            activeCount={filteredItems.length}
          />
        </div>

        {/* Items Container */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center border border-[rgba(245,239,230,0.06)] bg-[#141210] p-12">
            <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-[#9E9589] mb-4">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F5EFE6] mb-2">
              Nothing available in this category right now
            </h3>
            <p className="text-xs text-[#9E9589] max-w-sm mx-auto mb-6">
              Try adjusting your dietary filters or search keywords to discover other offerings.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDietary([]);
                setSearchQuery("");
              }}
              className="text-xs uppercase tracking-widest text-[#C88242] underline hover:text-[#DE9B5E] cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  onSelect={(sel) => setActiveItem(sel)}
                  viewMode="grid"
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="border-t border-[rgba(245,239,230,0.08)] divide-y divide-transparent"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  onSelect={(sel) => setActiveItem(sel)}
                  viewMode="editorial"
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Sensory Note Footer */}
        <div className="mt-20 p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#9E9589]">
          <div className="flex items-center gap-3">
            <Coffee className="w-5 h-5 text-[#C88242] shrink-0" />
            <span>
              Oat, Almond, and Lactose-Free whole milk substitutions available across all espresso beverages.
            </span>
          </div>
          <span className="font-mono text-[#6E665C] shrink-0">
            Prices inclusive of local dining taxes.
          </span>
        </div>
      </div>

      {/* Item Detail Modal */}
      <MenuDetailModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </div>
  );
}
