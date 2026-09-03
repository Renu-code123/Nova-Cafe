"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Car, Train, Clock, Phone, Mail } from "lucide-react";

export function MapPlaceholder() {
  const [activePin, setActivePin] = useState<"bistro" | "parking" | "metro">("bistro");

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] bg-[#12100E] border border-[rgba(245,239,230,0.1)] overflow-hidden flex flex-col justify-between p-6">
      {/* Abstract Architectural Grid / Vector Map Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5EFE6" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Abstract stylized roads & avenues */}
        <line x1="0" y1="120" x2="100%" y2="220" stroke="#C88242" strokeWidth="2" strokeOpacity="0.4" />
        <line x1="180" y1="0" x2="320" y2="100%" stroke="#F5EFE6" strokeWidth="1.5" strokeOpacity="0.3" />
        <line x1="60%" y1="0" x2="40%" y2="100%" stroke="#F5EFE6" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="52%" cy="48%" r="48" fill="none" stroke="#C88242" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
      </svg>

      {/* Top Map Switcher Controls */}
      <div className="relative z-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActivePin("bistro")}
          className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
            activePin === "bistro"
              ? "bg-[#C88242] text-[#0C0B09] font-medium border-[#C88242]"
              : "bg-[#1C1916]/80 backdrop-blur-sm text-[#9E9589] border-[rgba(245,239,230,0.1)] hover:text-[#F5EFE6]"
          }`}
        >
          <MapPin className="w-3 h-3 inline mr-1" /> Flagship Entrance
        </button>
        <button
          type="button"
          onClick={() => setActivePin("parking")}
          className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
            activePin === "parking"
              ? "bg-[#C88242] text-[#0C0B09] font-medium border-[#C88242]"
              : "bg-[#1C1916]/80 backdrop-blur-sm text-[#9E9589] border-[rgba(245,239,230,0.1)] hover:text-[#F5EFE6]"
          }`}
        >
          <Car className="w-3 h-3 inline mr-1" /> Valet & Parking
        </button>
        <button
          type="button"
          onClick={() => setActivePin("metro")}
          className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
            activePin === "metro"
              ? "bg-[#C88242] text-[#0C0B09] font-medium border-[#C88242]"
              : "bg-[#1C1916]/80 backdrop-blur-sm text-[#9E9589] border-[rgba(245,239,230,0.1)] hover:text-[#F5EFE6]"
          }`}
        >
          <Train className="w-3 h-3 inline mr-1" /> Metro Station
        </button>
      </div>

      {/* Center Interactive Pin Indicator */}
      <div className="relative z-10 self-center text-center">
        <div className="relative inline-block">
          <div className="w-12 h-12 rounded-full bg-[#C88242]/20 border border-[#C88242] flex items-center justify-center animate-pulse mx-auto">
            <MapPin className="w-6 h-6 text-[#C88242]" />
          </div>
          <div className="mt-2 bg-[#141210]/95 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-xs font-mono text-[#F5EFE6] shadow-xl">
            {activePin === "bistro" && "Nova Atelier · 14 Gomti Promenade"}
            {activePin === "parking" && "Valet Station · East Promenade Gate"}
            {activePin === "metro" && "Gomti Nagar Station · 4 min walk"}
          </div>
        </div>
      </div>

      {/* Bottom Coordinates & Directions */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[rgba(245,239,230,0.08)] text-[10px] font-mono text-[#9E9589] bg-[#141210]/90 backdrop-blur-md p-3">
        <span>26.8467° N, 80.9462° E</span>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C88242] hover:text-[#DE9B5E] transition-colors flex items-center gap-1 uppercase"
        >
          <Navigation className="w-3 h-3" /> Open in Google Maps
        </a>
      </div>
    </div>
  );
}
