import { site } from "@/content/site";
import { mapsEmbedUrl, mapsSearchUrl, telHref } from "@/lib/maps";
import { Button } from "@/components/ui/button";

export function VisitCard({ showMap = true }: { showMap?: boolean }) {
  return (
    <section className="grid gap-6 rounded-2xl bg-white p-6 md:grid-cols-2">
      {showMap && (
        <iframe
          title="Karte — Gelateria Arnoldo"
          src={mapsEmbedUrl()}
          className="h-64 w-full rounded-xl border-0"
          loading="lazy"
        />
      )}
      <div className={showMap ? "" : "md:col-span-2"}>
        <h2 className="font-display text-2xl">Besuchen Sie uns</h2>
        <p className="mt-3">{site.address.formatted}</p>
        <p className="mt-1">{site.hours.display}</p>
        <p className="mt-1">
          <a
            href={telHref()}
            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio rounded-sm"
          >
            {site.phone.display}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild data-cta="anfahrt">
            <a href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer">
              Anfahrt
            </a>
          </Button>
          <Button asChild variant="secondary" data-cta="anrufen">
            <a href={telHref()}>Anrufen</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
