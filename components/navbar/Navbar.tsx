"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useReservation } from "../reservations/ReservationContext";
import { Button } from "../ui/Button";
import { Menu as MenuIcon, X, ArrowUpRight, Compass, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { href: "/menu", label: "Menu", subtitle: "Curated Offerings" },
  { href: "/about", label: "Our Story", subtitle: "Craft & Philosophy" },
  { href: "/visit", label: "Visit", subtitle: "Flagship Atelier" },
  { href: "/contact", label: "Contact", subtitle: "Inquiries & Gatherings" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openReservation } = useReservation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0C0B09]/85 backdrop-blur-md border-b border-[rgba(245,239,230,0.08)] py-4"
            : "bg-gradient-to-b from-black/70 via-black/20 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-baseline gap-2.5">
            <span className="font-serif text-2xl sm:text-3xl tracking-wider text-[#F5EFE6] font-light">
              NOVA
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.3em] text-[#9E9589] font-sans border-l border-white/10 pl-2.5">
              Café & Bistro
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                    isActive
                      ? "text-[#F5EFE6] font-medium"
                      : "text-[#9E9589] hover:text-[#F5EFE6]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C88242]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Reserve CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openReservation(2)}
              className="px-5 py-2.5 text-xs uppercase tracking-widest bg-transparent border border-[rgba(245,239,230,0.25)] hover:border-[#C88242] hover:bg-[#C88242]/10 text-[#F5EFE6] transition-all duration-300 cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5EFE6] hover:text-[#C88242] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#0C0B09] flex flex-col justify-between p-8 pt-28 text-[#F5EFE6] md:hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#C88242]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C88242] block">
                Navigation
              </span>
              <nav className="flex flex-col space-y-5">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between py-2 border-b border-[rgba(245,239,230,0.06)]"
                    >
                      <div>
                        <span className="font-serif text-3xl text-[#F5EFE6] group-hover:text-[#C88242] transition-colors">
                          {link.label}
                        </span>
                        <span className="block text-[11px] text-[#6E665C] mt-0.5 tracking-wider font-sans uppercase">
                          {link.subtitle}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#9E9589] group-hover:text-[#C88242] transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-[rgba(245,239,230,0.08)] z-10">
              <Button
                variant="amber"
                className="w-full justify-center py-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openReservation(2);
                }}
              >
                Reserve a Table
              </Button>
              <div className="flex items-center justify-between text-[11px] text-[#9E9589]">
                <span>Lucknow Flagship · Open 8AM — 10PM</span>
                <span className="text-[#C88242]">Specialty Coffee</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
