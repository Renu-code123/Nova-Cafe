export interface GalleryImage {
  id: string;
  title: string;
  timestamp: string;
  location: string;
  aspect: "large" | "portrait" | "landscape" | "wide";
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g-01",
    title: "THE BAR AT DAWN",
    timestamp: "07:45 AM",
    location: "Main Espresso Bar",
    aspect: "large",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    alt: "Custom polished copper espresso machine at the Nova bar with morning sunlight",
    caption: "First dial-in of the morning roast as the sun cuts through the atrium glass.",
  },
  {
    id: "g-02",
    title: "SLOW DRIP EXTRACTION",
    timestamp: "09:15 AM",
    location: "Slow Bar Atelier",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    alt: "Barista pouring hot water in spiral over Chemex filter",
    caption: "Hand-poured single origin Geisha extracted to exact grams and seconds.",
  },
  {
    id: "g-03",
    title: "MIDDAY ATRIUM",
    timestamp: "12:30 PM",
    location: "Courtyard & Garden",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
    alt: "Spacious architectural cafe seating with minimalist wooden furniture and greenery",
    caption: "Natural daylight washing over raw concrete pillars and Danish oak tables.",
  },
  {
    id: "g-04",
    title: "ARTISANAL BAKEHOUSE",
    timestamp: "04:30 AM",
    location: "Pastry Lab",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    alt: "Freshly baked golden pastries cooling on rack",
    caption: "72-hour sourdough croissants emerging from the deck oven.",
  },
  {
    id: "g-05",
    title: "AFTER DARK CONVERSATIONS",
    timestamp: "08:40 PM",
    location: "Mezzanine Lounge",
    aspect: "wide",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm ambient lit evening bistro atmosphere with patrons chatting",
    caption: "Amber lighting, natural wine, small plates, and low-tempo vinyl records.",
  },
  {
    id: "g-06",
    title: "CERAMIC CRAFT",
    timestamp: "03:10 PM",
    location: "Artisan Corner",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    alt: "Handmade ceramic coffee cup with tactile glaze",
    caption: "Custom stoneware crafted exclusively for Nova by studio potters.",
  },
];
