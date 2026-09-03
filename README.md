<div align="center">

# ☕ NOVA CAFÉ & ARTISANAL BISTRO

### *Where coffee, food and creativity meet.*

<p align="center">
  <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop" alt="Nova Cafe Interior" width="100%" style="border-radius: 4px;" />
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16_App_Router-0C0B09?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-0C0B09?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-0C0B09?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-0C0B09?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Motion-0C0B09?style=for-the-badge&logo=framer&logoColor=EA4C89)](https://motion.dev/)
[![Zod](https://img.shields.io/badge/Validation-Zod-0C0B09?style=for-the-badge&logo=zod&logoColor=3E67B1)](https://zod.dev/)

---

</div>

## ✦ Overview

**Nova Café & Artisanal Bistro** is an editorial, production-grade full-stack web experience inspired by modern architectural studios, high-end culinary journals, and contemporary hospitality aesthetics (Aesop + Kinfolk + Wallpaper*).

Built with **Next.js App Router**, **TypeScript**, and **Framer Motion**, it delivers an unhurried, luxury digital presence combining single-origin coffee showcases, interactive menu filtering, a multi-step table reservation booking engine, and rotating artist residency features.

---

## ✦ Key Features

### ☕ 1. Interactive Sensory Menu Engine
* **Instant Filtering & Live Search**: Filter effortlessly by Category (*Specialty Coffee, Artisanal Tea, Morning Provisions, Bistro & Brunch, Daily Bakehouse, Confection*), Dietary Tags (*Vegan, Gluten-Free, Dairy-Free, Nut-Free, House Signature*), or keyword queries.
* **Editorial & Grid Views**: Toggle between high-fashion editorial typography list and photographic masonry grid layouts.
* **Tasting Notes & Allergen Modals**: Dedicated item inspection modal displaying origin elevation, tasting profiles, ingredient breakdown, and direct table booking triggers.

### 📅 2. Multi-Step Table Reservation System
* **Global Booking Access**: Seamless interactive modal available from any page.
* **Atmospheric Seating Zones**: Choose your ideal ambiance (*Main Atrium, Sunlit Courtyard, Espresso Bar Atelier, Quiet Mezzanine*).
* **Instant Confirmation Passes**: Generates a unique reservation reference code (`NOV-XXXX`), interactive pass copier, and celebration confetti.
* **Validated Server Persistence**: Server-side Zod validation with safe data storage in `/api/reservations`.

### 🏛️ 3. Editorial Narrative & Atmospheric Journey
* **Cinematic 100vh Hero**: Subtle parallax scaling, staggered typography entrance, and live opening status.
* **Three-Period Atmosphere Timeline**: Interactive scroll progression highlighting *01 Morning (Quiet Tables & First Pour)*, *02 Afternoon (Conversations & Bistro Plates)*, and *03 Evening (Amber Lights & Vinyl Sessions)*.
* **"Art Lives Here" Gallery**: Showcase for quarterly independent artist exhibitions, studio ceramics, and vinyl listening records.
* **Interactive Architectural Vector Map**: Custom styled SVG map with interactive pins for main entrance, valet portico, and metro transit.

### ⚡ 4. Agency-Grade UI/UX & Micro-Interactions
* **Custom Desktop Precision Cursor**: Magnetic smoothing ring with interactive hover expansion.
* **Dynamic Scrolled Navigation**: Transparent-to-frosted glass backdrop transitions with full-screen editorial mobile drawer.
* **Responsive Typography**: Paired Google Fonts (`Cormorant Garamond` + `Plus Jakarta Sans`).
* **Dark & Warm Palette**: Rich charcoal (`#0C0B09`), espresso (`#2A1E17`), warm cream (`#F5EFE6`), and subtle copper amber (`#C88242`).

---

## ✦ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict typing throughout) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with bespoke design tokens |
| **Motion** | [Framer Motion](https://motion.dev/) (Subtle, high-performance animations) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Validation** | [Zod](https://zod.dev/) for type-safe client/server schemas |
| **Storage & API** | Next.js Route Handlers with file-backed persistence (`lib/storage/db.ts`) |

---

## ✦ Project Architecture

```text
nova-cafe/
├── app/
│   ├── layout.tsx              # Root layout (Fonts, SEO metadata, Navbar, Footer, Global Modal)
│   ├── page.tsx                # Homepage (Hero, Manifesto, Signatures, Experience, Gallery, Visit)
│   ├── menu/page.tsx           # Interactive Menu (Search, Category/Dietary Filters, Views, Modals)
│   ├── about/page.tsx          # Brand Story, Ethical Sourcing, Hearth Bakehouse, Principles
│   ├── visit/page.tsx          # Location, Map, Opening Hours, Valet, FAQ Accordion
│   ├── contact/page.tsx        # Private Bookings, Artist Submissions, Press Inquiries Form
│   ├── not-found.tsx           # Editorial 404 ("Wandered off the menu")
│   ├── globals.css             # Design tokens, color palettes, bespoke typography utilities
│   └── api/
│       ├── menu/route.ts       # Searchable menu catalog API
│       ├── reservations/route.ts # Table booking API with Zod validation & storage
│       ├── contact/route.ts    # Direct inquiries API
│       └── newsletter/route.ts # Newsletter subscription API
│
├── components/
│   ├── navbar/Navbar.tsx       # Glass sticky navbar & full-screen mobile menu
│   ├── footer/Footer.tsx       # Dark editorial footer with newsletter integration
│   ├── hero/Hero.tsx           # Cinematic 100vh hero with staggered reveal
│   ├── reservations/
│   │   ├── ReservationContext.tsx # React Context for global modal state
│   │   └── ReservationModal.tsx   # Multi-step booking engine (Date, Zone, Time, Form, Ticket)
│   ├── menu/
│   │   ├── MenuFilter.tsx      # Category pills, dietary toggles, search bar, layout switcher
│   │   ├── MenuItemCard.tsx    # Editorial list & visual masonry cards
│   │   └── MenuDetailModal.tsx # Sensory tasting notes & allergen modal
│   ├── home/
│   │   ├── ManifestoSection.tsx   # Philosophy & asymmetric layout
│   │   ├── SignatureSection.tsx   # Today's 6 signature provisions
│   │   ├── ExperienceTimeline.tsx # Morning / Afternoon / Evening narrative
│   │   ├── CultureSection.tsx     # "Art Lives Here" rotating exhibition
│   │   ├── GallerySection.tsx     # Asymmetric photography lightbox grid
│   │   └── VisitTeaser.tsx        # Location preview & interactive map
│   └── ui/
│       ├── Button.tsx          # Editorial button variants with animated arrow
│       ├── CustomCursor.tsx    # Desktop precision cursor
│       └── MapPlaceholder.tsx  # Architectural interactive SVG map
│
├── lib/
│   ├── data/
│   │   ├── menu-data.ts        # 24 artisanal coffees, teas, provisions & desserts
│   │   └── gallery-data.ts     # Curated high-res imagery with timestamp badges
│   ├── storage/
│   │   └── db.ts               # Resilient file-backed JSON database engine
│   ├── validations/
│   │   └── schemas.ts          # Zod validation schemas
│   └── utils.ts                # Styling utilities & formatters
│
└── public/                     # Static assets & icons
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ installed
- npm / yarn / pnpm

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/your-username/nova-cafe.git

# Navigate into project directory
cd nova-cafe

# Install packages
npm install
```

### 2. Run Locally in Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✦ Contributing & License

Crafted with care for **Nova Café & Artisanal Bistro**.

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">

*“Made slowly. Served beautifully.”*

</div>
