import { site } from "@/content/site";
import { mailtoHref, mapsSearchUrl, telHref } from "@/lib/maps";
import { Button } from "@/components/ui/button";

export function ContactDetails() {
  return (
    <div>
      <dl className="grid gap-6">
        <div>
          <dt className="text-xs uppercase tracking-[0.22em] text-espresso/65">Telefon</dt>
          <dd className="mt-1">
            <a href={telHref()} data-cta="anrufen" className="hover:underline">
              {site.phone.display}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.22em] text-espresso/65">E-Mail</dt>
          <dd className="mt-1">
            <a href={mailtoHref()} className="hover:underline">
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.22em] text-espresso/65">Adresse</dt>
          <dd className="mt-1">{site.address.formatted}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.22em] text-espresso/65">Öffnungszeiten</dt>
          <dd className="mt-1">{site.hours.display}</dd>
        </div>
      </dl>
      <p className="mt-8 text-sm text-espresso/65">
        Gelatobox für Feste und Feiern — bitte telefonisch oder per E-Mail anfragen.
        Kein Online-Buchungskalender.
      </p>
      <div className="mt-6">
        <Button asChild data-cta="anfahrt">
          <a href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer">
            Anfahrt
          </a>
        </Button>
      </div>
    </div>
  );
}
