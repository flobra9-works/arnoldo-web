import { mapsEmbedUrl, mapsSearchUrl } from "@/lib/maps";
import { Button } from "@/components/ui/button";

export function ContactMap() {
  return (
    <div className="grid gap-4">
      <iframe
        title="Karte — Gelateria Arnoldo"
        src={mapsEmbedUrl()}
        className="h-80 w-full rounded-2xl border-0"
        loading="lazy"
      />
      <Button asChild data-cta="anfahrt" className="justify-self-start">
        <a href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer">
          Anfahrt
        </a>
      </Button>
    </div>
  );
}
