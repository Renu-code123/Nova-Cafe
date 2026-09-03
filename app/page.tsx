import { Hero } from "@/components/home/Hero";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { SignatureSection } from "@/components/home/SignatureSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { CultureSection } from "@/components/home/CultureSection";
import { GallerySection } from "@/components/home/GallerySection";
import { VisitTeaser } from "@/components/home/VisitTeaser";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <ManifestoSection />
      <SignatureSection />
      <ExperienceTimeline />
      <CultureSection />
      <GallerySection />
      <VisitTeaser />
    </div>
  );
}
