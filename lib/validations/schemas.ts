import { z } from "zod";

export const reservationSchema = z.object({
  date: z.string().min(1, "Please select a date for your visit"),
  time: z.string().min(1, "Please select a preferred time slot"),
  guests: z.number().int().min(1, "Minimum 1 guest").max(12, "For parties over 12, please contact our private events team"),
  seatingArea: z.enum(["Main Atrium", "Sunlit Courtyard", "Espresso Bar Atelier", "Quiet Mezzanine", "Any Available"]).default("Any Available"),
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(8, "Please provide a valid contact number").max(20),
  specialRequest: z.string().max(400).optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  inquiryType: z.enum(["General Inquiry", "Private Events & Gatherings", "Artist & Residency Submissions", "Press & Media", "Coffee Wholesale"]).default("General Inquiry"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(120),
  message: z.string().min(10, "Message must be at least 10 characters").max(1500),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
