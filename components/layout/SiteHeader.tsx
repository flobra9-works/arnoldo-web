import Link from "next/link";
import { site } from "@/content/site";
import { mapsSearchUrl } from "@/lib/maps";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
        >
          Arnoldo
          <span className="ml-2 text-xs font-sans font-normal uppercase tracking-[0.18em] text-espresso/65">
            Gelateria
          </span>
        </Link>
        <NavLinks items={site.nav} />
        <div className="flex items-center gap-4">
          <p className="hidden text-sm text-espresso/65 lg:block">{site.hours.display}</p>
          <Button asChild data-cta="anfahrt">
            <a href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer">
              Anfahrt
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
