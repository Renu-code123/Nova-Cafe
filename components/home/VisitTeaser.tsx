"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPlaceholder } from "../ui/MapPlaceholder";
import { Button } from "../ui/Button";
import { useReservation } from "../reservations/ReservationContext";
import { MapPin, Clock, Phone, Mail, Navigation, ArrowUpRight } from "lucide-react";

export function VisitTeaser() {
  const { openReservation } = useReservation();

  return (
    <section className="py-24 sm:py-36 bg-[#0E0D0B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
                06 — VISIT THE ATELIER
              </span>
              <div className="h-[1px] w-12 bg-[#C88242]/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F5EFE6] font-light">
              Join us at the table
            </h2>
          </div>

          <p className="text-xs text-[#9E9589] max-w-sm leading-relaxed font-mono">
            Walk-ins warmly welcomed for espresso bar & light fare. Table bookings recommended for evening bistro service.
          </p>
        </div>

        {/* Split Grid: Information + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address Card */}
            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
                LOCATION & ADDRESS
              </span>
              <h3 className="font-serif text-2xl text-[#F5EFE6]">
                Nova Café & Artisanal Bistro
              </h3>
              <p className="text-xs text-[#9E9589] leading-relaxed">
                14 Gomti Riverfront Promenade, Sector 4, <br />
                Gomti Nagar, Lucknow, Uttar Pradesh 226010
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#D6CCC0]">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C88242]" /> +91 522 492 8100
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C88242]" /> table@novacafe.in
                </span>
              </div>
            </div>

            {/* Service Hours */}
            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
                SERVICE HOURS
              </span>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-baseline border-b border-[rgba(245,239,230,0.06)] pb-2">
                  <span className="text-[#D6CCC0]">Monday — Friday</span>
                  <span className="font-mono text-[#F5EFE6]">8:00 AM — 10:00 PM</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-[rgba(245,239,230,0.06)] pb-2">
                  <span className="text-[#D6CCC0]">Saturday — Sunday</span>
                  <span className="font-mono text-[#F5EFE6]">9:00 AM — 11:00 PM</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[#9E9589]">Kitchen Last Orders</span>
                  <span className="font-mono text-[#C88242]">45 mins prior to close</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="amber"
                onClick={() => openReservation(2)}
                withArrow
              >
                Reserve a Table
              </Button>
              <Link href="/visit">
                <Button variant="outline">
                  Directions & Parking Guide
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Map Placeholder */}
          <div className="lg:col-span-7">
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
