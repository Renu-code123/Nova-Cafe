"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      errs.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim() || formData.subject.length < 3) {
      errs.subject = "Subject must be at least 3 characters";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "General Inquiry",
          subject: "",
          message: "",
        });
      } else {
        setErrors({ form: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#0C0B09] min-h-screen text-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C88242] uppercase tracking-[0.3em]">
              COMMUNICATION & PRIVATE EVENTS
            </span>
            <div className="h-[1px] w-12 bg-[#C88242]/40" />
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl text-[#F5EFE6] font-light">
            Get in touch
          </h1>
          <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed font-light">
            Whether inquiring about private dining bookings, coffee wholesale, or artist residency proposals, our team responds with care.
          </p>
        </div>

        {/* Split Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#141210] border border-[rgba(245,239,230,0.08)] p-8 sm:p-12 relative">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C88242]/15 border border-[#C88242]/30 flex items-center justify-center text-[#C88242]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-[#F5EFE6]">
                    Message Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E9589] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Nova. Our concierge team reviews all inquiries within 24 hours.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.form && (
                  <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                    {errors.form}
                  </div>
                )}

                {/* Inquiry Type Select */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-2 font-mono">
                    01. Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-xs text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                  >
                    <option value="General Inquiry">General Dining & Table Inquiry</option>
                    <option value="Private Events & Gatherings">Private Events & Dining Buyouts</option>
                    <option value="Artist & Residency Submissions">Artist & Ceramic Residency Submission</option>
                    <option value="Coffee Wholesale">Specialty Coffee Roaster Wholesale</option>
                    <option value="Press & Media">Press, Photography & Media</option>
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5 font-mono">
                      02. Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tara Kapoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-xs text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                    />
                    {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5 font-mono">
                      03. Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="tara@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-xs text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5 font-mono">
                      04. Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-xs text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5 font-mono">
                      05. Subject *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Private dinner for 18 guests"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-xs text-[#F5EFE6] focus:border-[#C88242] focus:outline-none"
                    />
                    {errors.subject && <p className="text-red-400 text-[10px] mt-1">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9E9589] mb-1.5 font-mono">
                    06. Your Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event, date requirements, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1C1916] border border-[rgba(245,239,230,0.12)] p-3 text-xs text-[#F5EFE6] focus:border-[#C88242] focus:outline-none resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="amber"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full justify-center"
                    withArrow
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Department Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
                DIRECT CHANNELS
              </span>
              <h3 className="font-serif text-2xl text-[#F5EFE6]">
                Atelier Concierge
              </h3>
              <p className="text-xs text-[#9E9589] leading-relaxed">
                For immediate assistance with today’s table bookings or directions:
              </p>
              <div className="pt-2 space-y-2 text-xs font-mono">
                <p className="text-[#D6CCC0]">
                  Phone: <span className="text-[#F5EFE6]">+91 522 492 8100</span>
                </p>
                <p className="text-[#D6CCC0]">
                  Concierge: <span className="text-[#F5EFE6]">concierge@novacafe.in</span>
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#141210] border border-[rgba(245,239,230,0.08)] space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C88242] font-mono block">
                SPECIALIST INQUIRIES
              </span>
              <div className="space-y-4 text-xs pt-2">
                <div>
                  <h4 className="text-[#F5EFE6] font-serif text-base">Private Events & Gatherings</h4>
                  <p className="text-[#9E9589] font-mono text-[11px]">events@novacafe.in</p>
                </div>
                <div>
                  <h4 className="text-[#F5EFE6] font-serif text-base">Artist Residency & Gallery</h4>
                  <p className="text-[#9E9589] font-mono text-[11px]">curator@novacafe.in</p>
                </div>
                <div>
                  <h4 className="text-[#F5EFE6] font-serif text-base">Wholesale Green & Roasted Beans</h4>
                  <p className="text-[#9E9589] font-mono text-[11px]">roastery@novacafe.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
