"use client";

import React from "react";
import { CATEGORIES } from "@/lib/data/menu-data";
import { Search, LayoutGrid, ListFilter, SlidersHorizontal, X } from "lucide-react";

interface MenuFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedDietary: string[];
  onToggleDietary: (tag: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: "editorial" | "grid";
  onToggleViewMode: (mode: "editorial" | "grid") => void;
  activeCount: number;
}

const DIETARY_FILTERS = [
  "Vegan",
  "Vegetarian",
  "Gluten-Free",
  "Dairy-Free",
  "House Signature",
  "Nut-Free",
];

export function MenuFilter({
  selectedCategory,
  onSelectCategory,
  selectedDietary,
  onToggleDietary,
  searchQuery,
  onSearchChange,
  viewMode,
  onToggleViewMode,
  activeCount,
}: MenuFilterProps) {
  return (
    <div className="space-y-6">
      {/* Top Bar: Search & View Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[rgba(245,239,230,0.08)] pb-5">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9589]" />
          <input
            type="text"
            placeholder="Search coffee, pastries, tasting notes, ingredients..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#141210] border border-[rgba(245,239,230,0.12)] pl-10 pr-9 py-2.5 text-xs text-[#F5EFE6] placeholder-[#6E665C] focus:border-[#C88242] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E9589] hover:text-[#F5EFE6] cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View Toggle & Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <span className="text-[11px] font-mono text-[#9E9589]">
            Showing <strong className="text-[#F5EFE6]">{activeCount}</strong> offerings
          </span>

          <div className="flex items-center bg-[#141210] border border-[rgba(245,239,230,0.1)] p-0.5">
            <button
              type="button"
              onClick={() => onToggleViewMode("editorial")}
              className={`p-1.5 transition-colors cursor-pointer ${
                viewMode === "editorial"
                  ? "bg-[#C88242] text-[#0C0B09]"
                  : "text-[#9E9589] hover:text-[#F5EFE6]"
              }`}
              title="Editorial List View"
            >
              <ListFilter className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onToggleViewMode("grid")}
              className={`p-1.5 transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#C88242] text-[#0C0B09]"
                  : "text-[#9E9589] hover:text-[#F5EFE6]"
              }`}
              title="Visual Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-[#F5EFE6] text-[#0C0B09] font-medium border-[#F5EFE6]"
                  : "bg-[#141210] text-[#9E9589] border-[rgba(245,239,230,0.08)] hover:border-[rgba(245,239,230,0.25)] hover:text-[#F5EFE6]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Dietary Sub-filters */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-[10px] uppercase tracking-widest text-[#6E665C] mr-2">
          Dietary:
        </span>
        {DIETARY_FILTERS.map((tag) => {
          const isSelected = selectedDietary.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onToggleDietary(tag)}
              className={`px-3 py-1 text-[11px] rounded-none border transition-all cursor-pointer ${
                isSelected
                  ? "border-[#C88242] bg-[#C88242]/15 text-[#C88242]"
                  : "border-[rgba(245,239,230,0.06)] bg-[#141210]/60 text-[#9E9589] hover:border-[rgba(245,239,230,0.18)]"
              }`}
            >
              {tag}
            </button>
          );
        })}
        {selectedDietary.length > 0 && (
          <button
            onClick={() => {
              DIETARY_FILTERS.forEach((t) => {
                if (selectedDietary.includes(t)) onToggleDietary(t);
              });
            }}
            className="text-[11px] text-[#C88242] underline ml-2 cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
