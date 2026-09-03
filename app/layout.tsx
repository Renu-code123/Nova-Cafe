import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "@/components/reservations/ReservationContext";
import { ReservationModal } from "@/components/reservations/ReservationModal";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Café & Artisanal Bistro — Coffee, Food & Culture",
  description:
    "Discover Nova Café & Artisanal Bistro — thoughtfully crafted single-origin coffee, artisanal culinary provisions, and a creative space designed for slow moments and good conversations in Lucknow.",
  keywords: [
    "Nova Cafe",
    "Artisanal Bistro",
    "Specialty Coffee Lucknow",
    "Single Origin Coffee",
    "Gourmet Brunch",
    "Bakery",
    "Fine Coffee",
  ],
  authors: [{ name: "Nova Café & Artisanal Bistro" }],
  openGraph: {
    title: "Nova Café & Artisanal Bistro — Coffee, Food & Culture",
    description:
      "Specialty coffee, slow-fermented bakehouse, and contemporary bistro dining in an architectural sanctuary.",
    url: "https://novacafe.in",
    siteName: "Nova Café & Artisanal Bistro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Nova Café & Artisanal Bistro Flagship Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Café & Artisanal Bistro",
    description: "Where coffee, food and creativity meet.",
    images: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#0C0B09] text-[#F5EFE6] font-sans antialiased min-h-screen flex flex-col selection:bg-[#C88242] selection:text-[#0C0B09]">
        <ReservationProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  );
}
