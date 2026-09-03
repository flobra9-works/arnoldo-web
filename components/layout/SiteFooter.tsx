import Link from "next/link";
import { site } from "@/content/site";
import { mailtoHref, mapsSearchUrl, telHref } from "@/lib/maps";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/40 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Arnoldo</p>
          <p className="mt-2 text-sm text-espresso/65">{site.tagline}</p>
        </div>
        <nav aria-label="Fußzeile" className="grid gap-2 text-sm">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-espresso hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="grid gap-2 text-sm">
          <p>{site.address.formatted}</p>
          <p>{site.hours.display}</p>
          <p>
            <a
              href={telHref()}
              data-cta="anrufen"
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio rounded-sm"
            >
              {site.phone.display}
            </a>
          </p>
          <p>
            <a
              href={mailtoHref()}
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio rounded-sm"
            >
              {site.email}
            </a>
          </p>
          <p>
            <a
              href={mapsSearchUrl()}
              data-cta="anfahrt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Anfahrt
            </a>
          </p>
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-espresso/65">
            Gelatobox für Feste — bitte telefonisch oder per E-Mail anfragen.{" "}
            <a href={telHref()} data-cta="anrufen" className="underline underline-offset-4">
              Anrufen
            </a>
            {" · "}
            <a href={mailtoHref({ subject: "Gelatobox-Anfrage" })} className="underline underline-offset-4">
              E-Mail
            </a>
          </p>
          <p>
            <Link href="/impressum" className="hover:underline">
              Impressum
            </Link>
            {" · "}
            <Link href="/datenschutz" className="hover:underline">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
      <p className="border-t border-gold/30 py-4 text-center text-xs text-espresso/65">
        © {year} {site.legal.company}
      </p>
    </footer>
  );
}
