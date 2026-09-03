"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { Button } from "@/components/ui/Button";
import { useReservation } from "@/components/reservations/ReservationContext";
import { MapPin, Clock, Car, Train, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do I need a reservation for morning coffee?",
    a: "No reservations are needed for morning coffee, bakery pastries, or light daytime seating. Walk-ins are always welcomed in the atrium, coffee bar, and courtyard. For evening dinner service and weekend brunch parties, reservations are highly recommended.",
  },
  {
    q: "Are dietary accommodations and non-dairy options available?",
    a: "Yes. All our signature drinks can be prepared with organic oat milk or house-pressed almond milk. Our kitchen features clearly labeled vegan, gluten-friendly, and nut-free dishes prepared with dedicated cookware.",
  },
  {
    q: "Is there workspace and high-speed Wi-Fi available?",
    a: "We welcome remote creators and creative work from 8:00 AM to 5:00 PM on weekdays with high-speed fiber Wi-Fi and power outlets along the long communal work benches and mezzanine.",
  },
  {
    q: "Is valet parking available at the venue?",
    a: "Yes, complimentary valet parking is stationed at the East Promenade Gate directly outside the main atrium entrance from 8:00 AM to 11:00 PM daily.",
  },
  {
    q: "Can I host a private event or brand workshop at Nova?",
    a: "Our Mezzanine Lounge and Sunlit Courtyard are available for intimate private dinners, corporate masterclasses, and wedding receptions. Contact our events atelier via the Contact page for bespoke menus.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.q}
            className="border border-[rgba(245,239,230,0.08)] bg-[#141210] transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
            >
              <span className="font-serif text-lg sm:text-xl text-[#F5EFE6]">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#C88242] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-xs sm:text-sm text-[#9E9589] leading-relaxed border-t border-[rgba(245,239,230,0.04)] pt-4">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function VisitPage() {
  const { openReservation } = useReservation();

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#0C0B09] min-h-screen text-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20 sm:space-y-32">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              LOCATION & VISITOR GUIDE
            </span>
            <div className="h-[1px] w-12 bg-[#C88242]/40" />
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl text-[#F5EFE6] font-light">
            Visit the Flagship
          </h1>
          <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
            Situated on the calm riverfront promenade in Gomti Nagar, designed with natural textures, natural light, and tranquil water features.
          </p>
        </div>

        {/* Map & Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <MapPlaceholder />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
                ADDRESS
              </span>
              <h3 className="font-serif text-2xl text-[#F5EFE6]">
                14 Gomti Riverfront Promenade
              </h3>
              <p className="text-xs text-[#9E9589] leading-relaxed">
                Sector 4, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India
              </p>
            </div>

            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
                OPENING HOURS
              </span>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-[rgba(245,239,230,0.06)] pb-2">
                  <span className="text-[#D6CCC0]">Monday — Friday</span>
                  <span className="font-mono text-[#F5EFE6]">8:00 AM — 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(245,239,230,0.06)] pb-2">
                  <span className="text-[#D6CCC0]">Saturday — Sunday</span>
                  <span className="font-mono text-[#F5EFE6]">9:00 AM — 11:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button
                variant="amber"
                className="w-full sm:w-auto"
                onClick={() => openReservation(2)}
                withArrow
              >
                Reserve a Table
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  General Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Transportation & Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[rgba(245,239,230,0.08)] pt-16">
          <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-3">
            <Car className="w-5 h-5 text-[#C88242]" />
            <h4 className="font-serif text-lg text-[#F5EFE6]">Valet & Parking</h4>
            <p className="text-xs text-[#9E9589] leading-relaxed">
              Complimentary dedicated valet service at the main portico. Underground secure parking available for 60 vehicles.
            </p>
          </div>

          <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-3">
            <Train className="w-5 h-5 text-[#C88242]" />
            <h4 className="font-serif text-lg text-[#F5EFE6]">Transit & Metro</h4>
            <p className="text-xs text-[#9E9589] leading-relaxed">
              Located 350 meters from Gomti Nagar Metro Station. 15-minute drive from Lucknow Charbagh Railway Station.
            </p>
          </div>

          <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-3">
            <ShieldCheck className="w-5 h-5 text-[#C88242]" />
            <h4 className="font-serif text-lg text-[#F5EFE6]">Accessibility</h4>
            <p className="text-xs text-[#9E9589] leading-relaxed">
              Fully wheelchair-accessible ground floor atrium, outdoor garden patio, elevator to the mezzanine, and accessible restrooms.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8 border-t border-[rgba(245,239,230,0.08)] pt-16">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5EFE6]">
              Planning your visit
            </h3>
          </div>

          <div className="max-w-4xl">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
