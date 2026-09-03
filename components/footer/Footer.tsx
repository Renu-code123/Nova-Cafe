"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message || "You're on the list. Welcome to Nova.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Please enter a valid email address.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-[#0A0908] border-t border-[rgba(245,239,230,0.08)] text-[#F5EFE6] pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[rgba(245,239,230,0.06)]">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-wider text-[#F5EFE6] font-light block mb-2">
                NOVA
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C88242] font-mono">
                Coffee · Food · Culture
              </p>
            </div>
            <p className="text-xs text-[#9E9589] max-w-sm leading-relaxed">
              An artisanal café and bistro where thoughtful food, exceptional single-estate coffee, and creative energy come together slowly.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#141210] border border-[rgba(245,239,230,0.08)] text-[11px] text-[#D6CCC0]">
                Flagship Atelier · Lucknow, India
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6E665C] font-semibold block">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/menu" className="text-[#9E9589] hover:text-[#F5EFE6] transition-colors">
                  Menu Offerings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#9E9589] hover:text-[#F5EFE6] transition-colors">
                  Our Story & Origin
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-[#9E9589] hover:text-[#F5EFE6] transition-colors">
                  Visit & Hours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#9E9589] hover:text-[#F5EFE6] transition-colors">
                  Private Gatherings
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6E665C] font-semibold block">
              Service Hours
            </span>
            <div className="space-y-3 text-xs text-[#9E9589]">
              <div>
                <p className="text-[#F5EFE6]">Monday — Friday</p>
                <p className="text-[11px]">8:00 AM — 10:00 PM</p>
              </div>
              <div>
                <p className="text-[#F5EFE6]">Saturday — Sunday</p>
                <p className="text-[11px]">9:00 AM — 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Journal Subscription */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6E665C] font-semibold block">
              The Nova Journal
            </span>
            <p className="text-xs text-[#9E9589] leading-relaxed">
              New seasonal menus, upcoming guest roaster pop-ups, and artistic gatherings.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#141210] border border-[rgba(245,239,230,0.12)] px-3.5 py-2.5 text-xs text-[#F5EFE6] placeholder-[#6E665C] focus:border-[#C88242] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#C88242] text-[#0C0B09] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#DE9B5E] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    "Join"
                  )}
                </button>
              </div>
              {status === "success" && (
                <p className="text-emerald-400 text-[11px] flex items-center gap-1">
                  <Check className="w-3 h-3" /> {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-rose-400 text-[11px]">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E665C]">
          <div>
            © {new Date().getFullYear()} Nova Café & Artisanal Bistro. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#9E9589] transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-[#9E9589] transition-colors cursor-pointer">Vogue Dining</span>
            <span className="hover:text-[#9E9589] transition-colors cursor-pointer">Specialty Coffee Assoc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
