import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Compass, Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#0C0B09] px-6 text-[#F5EFE6] text-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C88242]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-lg space-y-6 relative z-10">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#181512] border border-[rgba(245,239,230,0.1)] flex items-center justify-center text-[#C88242]">
          <Coffee className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C88242] font-mono">
            404 · PAGE NOT FOUND
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F5EFE6] font-light">
            Looks like you’ve wandered off the menu.
          </h1>
          <p className="text-xs sm:text-sm text-[#9E9589] max-w-sm mx-auto leading-relaxed pt-2">
            The page you’re looking for has moved or does not exist. Let us guide you back to our coffees and kitchen.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <Link href="/">
            <Button variant="amber" size="md" withArrow>
              Back to Nova
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="outline" size="md">
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
