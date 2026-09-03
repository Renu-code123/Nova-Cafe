"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReservation } from "./ReservationContext";
import { Button } from "../ui/Button";
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Copy,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";

const TIME_SLOTS = {
  morning: ["08:30", "09:00", "09:30", "10:30", "11:30"],
  afternoon: ["12:30", "13:00", "14:00", "15:30", "16:30"],
  evening: ["18:00", "18:30", "19:30", "20:00", "20:30", "21:00"],
};

const SEATING_ZONES = [
  {
    id: "Main Atrium",
    name: "Main Atrium",
    desc: "Under the soaring glass ceiling surrounded by architectural ficus trees.",
    icon: "🌿",
  },
  {
    id: "Sunlit Courtyard",
    name: "Sunlit Courtyard",
    desc: "Open-air terracotta patio with gentle fountain acoustics.",
    icon: "☀️",
  },
  {
    id: "Espresso Bar Atelier",
    name: "Espresso Bar Atelier",
    desc: "Front-row counter seating watching the master baristas extract roasts.",
    icon: "☕",
  },
  {
    id: "Quiet Mezzanine",
    name: "Quiet Mezzanine",
    desc: "Intimate upper loft overlooking the entire bistro. Ideal for conversations.",
    icon: "🕯️",
  },
];

export function ReservationModal() {
  const { isOpen, closeReservation, defaultGuests } = useReservation();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [guests, setGuests] = useState(defaultGuests);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seatingArea, setSeatingArea] = useState("Main Atrium");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setGuests(defaultGuests || 2);
      // Default to tomorrow's date formatted as YYYY-MM-DD
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDate(tomorrow.toISOString().split("T")[0]);
      setTime("19:30");
      setErrors({});
    }
  }, [isOpen, defaultGuests]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeReservation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeReservation]);

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = "Please enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          time,
          guests,
          seatingArea,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          specialRequest: formData.specialRequest,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setConfirmedReservation(data.data);
        setStep(4);
        try {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#C88242", "#F5EFE6", "#DE9B5E", "#A89F91"],
          });
        } catch (e) {
          // ignore if canvas-confetti issues
        }
      } else {
        setErrors({ form: data.error || "Failed to submit booking" });
      }
    } catch (err) {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefCode = () => {
    if (confirmedReservation?.referenceCode) {
      navigator.clipboard.writeText(confirmedReservation.referenceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeReservation}
          className="fixed inset-0 bg-[#0C0B09]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#141210] border border-[rgba(245,239,230,0.12)] rounded-none shadow-2xl z-10 overflow-hidden text-[#F5EFE6] my-8"
        >
          {/* Top Decorative Amber Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C88242] to-transparent" />

          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[rgba(245,239,230,0.08)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C88242] font-semibold">
                  Nova Bistro Atelier
                </span>
                <span className="text-[10px] text-[#6E665C]">/</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E9589]">
                  {step === 4 ? "Confirmed" : `Step 0${step} of 03`}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-[#F5EFE6]">
                {step === 1 && "Select Party & Date"}
                {step === 2 && "Time & Seating Zone"}
                {step === 3 && "Guest Information"}
                {step === 4 && "Table Reserved"}
              </h3>
            </div>

            <button
              onClick={closeReservation}
              className="p-2 text-[#9E9589] hover:text-[#F5EFE6] hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {/* STEP 1: PARTY SIZE & DATE */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Party Size */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#9E9589] mb-4">
                    01. Number of Guests
                  </label>
                  <div className="flex items-center gap-4 bg-[#1C1916] p-2 border border-[rgba(245,239,230,0.08)] max-w-sm">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 flex items-center justify-center text-lg hover:bg-white/10 transition-colors text-[#F5EFE6] cursor-pointer"
                    >
                      −
                    </button>
                    <div className="flex-1 text-center font-serif text-2xl text-[#F5EFE6]">
                      {guests} <span className="text-xs font-sans text-[#9E9589] uppercase tracking-wider">{guests === 1 ? "Guest" : "Guests"}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(12, guests + 1))}
                      className="w-10 h-10 flex items-center justify-center text-lg hover:bg-white/10 transition-colors text-[#F5EFE6] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[11px] text-[#6E665C] mt-2">
                    For private dining parties larger than 12 guests, please contact our events atelier.
                  </p>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#9E9589] mb-4">
                    02. Date of Visit
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-sm text-[#F5EFE6] focus:border-[#C88242] focus:outline-none tracking-wider"
                      />
                    </div>
                    <div className="flex items-center text-xs text-[#9E9589] p-3 bg-[#1C1916]/50 border border-[rgba(245,239,230,0.05)]">
                      <Clock className="w-4 h-4 mr-2 text-[#C88242] shrink-0" />
                      <span>Table held for 90 minutes. Grace period 15 min.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (!date) {
                        setErrors({ date: "Please pick a date" });
                        return;
                      }
                      setStep(2);
                    }}
                    withArrow
                  >
                    Continue to Time & Area
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: TIME & SEATING ZONE */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Seating Zone */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#9E9589] mb-4">
                    01. Seating Atmosphere
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SEATING_ZONES.map((zone) => {
                      const isSelected = seatingArea === zone.id;
                      return (
                        <div
                          key={zone.id}
                          onClick={() => setSeatingArea(zone.id)}
                          className={`p-4 border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#C88242] bg-[#1F1B16]"
                              : "border-[rgba(245,239,230,0.08)] bg-[#181613] hover:border-[rgba(245,239,230,0.2)]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif text-base text-[#F5EFE6]">
                              {zone.icon} {zone.name}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-[#C88242]" />
                            )}
                          </div>
                          <p className="text-[11px] text-[#9E9589] leading-relaxed">
                            {zone.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#9E9589] mb-3">
                    02. Available Time Slots
                  </label>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#6E665C] block mb-2">
                        Evening & Bistro Service
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {TIME_SLOTS.evening.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            className={`px-4 py-2 text-xs tracking-wider border transition-all cursor-pointer ${
                              time === slot
                                ? "bg-[#C88242] text-[#0C0B09] font-medium border-[#C88242]"
                                : "bg-[#1C1916] text-[#D6CCC0] border-[rgba(245,239,230,0.08)] hover:border-[rgba(245,239,230,0.3)]"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#6E665C] block mb-2">
                        Morning & Brunch Service
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {TIME_SLOTS.morning.concat(TIME_SLOTS.afternoon).map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            className={`px-4 py-2 text-xs tracking-wider border transition-all cursor-pointer ${
                              time === slot
                                ? "bg-[#C88242] text-[#0C0B09] font-medium border-[#C88242]"
                                : "bg-[#1C1916] text-[#D6CCC0] border-[rgba(245,239,230,0.08)] hover:border-[rgba(245,239,230,0.3)]"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-between border-t border-[rgba(245,239,230,0.08)]">
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    <ChevronLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (!time) {
                        setErrors({ time: "Please select a time slot" });
                        return;
                      }
                      setStep(3);
                    }}
                    withArrow
                  >
                    Guest Details
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: GUEST INFORMATION */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {errors.form && (
                  <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                    {errors.form}
                  </div>
                )}

                {/* Summary Pill */}
                <div className="p-3.5 bg-[#1C1916] border border-[rgba(245,239,230,0.08)] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3 text-[#D6CCC0]">
                    <span className="text-[#C88242] font-semibold">{guests} Guests</span>
                    <span>•</span>
                    <span>{date}</span>
                    <span>•</span>
                    <span>{time}</span>
                  </div>
                  <span className="text-[11px] text-[#9E9589] tracking-wider uppercase">
                    {seatingArea}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-sm text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                    />
                    {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-sm text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5">
                    Phone Number (for SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-sm text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                  />
                  {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5">
                    Dietary Notes or Occasion (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Celebrating an anniversary / Gluten allergy / High chair needed"
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-sm text-[#F5EFE6] focus:border-[#C88242] focus:outline-none resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-between border-t border-[rgba(245,239,230,0.08)]">
                  <Button variant="secondary" onClick={() => setStep(2)}>
                    <ChevronLeft className="w-3.5 h-3.5 mr-1 inline" /> Back
                  </Button>
                  <Button
                    variant="amber"
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                  >
                    Confirm Reservation
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: CONFIRMATION RECEIPT */}
            {step === 4 && confirmedReservation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 space-y-6"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C88242]/15 border border-[#C88242]/30 flex items-center justify-center text-[#C88242]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C88242] font-semibold block mb-1">
                    Booking Confirmed
                  </span>
                  <h4 className="font-serif text-3xl text-[#F5EFE6]">
                    We look forward to hosting you, {confirmedReservation.name}.
                  </h4>
                  <p className="text-xs text-[#9E9589] max-w-md mx-auto mt-2">
                    A confirmation pass has been dispatched to{" "}
                    <span className="text-[#F5EFE6] font-mono">{confirmedReservation.email}</span>.
                  </p>
                </div>

                {/* Ticket Pass */}
                <div className="bg-[#1C1916] border border-[rgba(245,239,230,0.14)] p-6 text-left relative max-w-md mx-auto">
                  <div className="flex items-center justify-between border-b border-[rgba(245,239,230,0.08)] pb-4 mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#6E665C] block">
                        Reservation Ref
                      </span>
                      <span className="font-mono text-lg font-bold text-[#C88242] tracking-wider">
                        {confirmedReservation.referenceCode}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={copyRefCode}
                      className="inline-flex items-center gap-1 text-[11px] text-[#9E9589] hover:text-[#F5EFE6] transition-colors p-1.5 border border-white/10 cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? "Copied" : "Copy Code"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#6E665C] block">
                        Date & Time
                      </span>
                      <span className="text-[#F5EFE6] font-medium">
                        {confirmedReservation.date} at {confirmedReservation.time}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#6E665C] block">
                        Party Size
                      </span>
                      <span className="text-[#F5EFE6] font-medium">
                        {confirmedReservation.guests} {confirmedReservation.guests === 1 ? "Guest" : "Guests"}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#6E665C] block">
                        Seating Zone
                      </span>
                      <span className="text-[#F5EFE6] font-medium">
                        {confirmedReservation.seatingArea}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="primary" onClick={closeReservation}>
                    Done & Return to Site
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
