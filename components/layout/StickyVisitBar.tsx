import { site } from "@/content/site";
import { mapsSearchUrl, telHref } from "@/lib/maps";

export function StickyVisitBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/40 bg-cream px-4 py-3 md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-espresso/65">Heute {site.hours.display}</p>
        <div className="flex gap-2">
          <a
            data-cta="anrufen"
            href={telHref()}
            className="rounded-full border border-espresso px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Anrufen
          </a>
          <a
            data-cta="anfahrt"
            href={mapsSearchUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pistachio px-3 py-1.5 text-sm text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Anfahrt
          </a>
        </div>
      </div>
    </div>
  );
}
