import type { Metadata } from "next";
import { site } from "@/content/site";
import { mailtoHref } from "@/lib/maps";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der Gelateria Arnoldo OG.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl md:text-5xl">Datenschutz</h1>
      <div className="mt-10 space-y-6 text-espresso/90">
        <p>
          Verantwortlich für diese Website ist {site.legal.company}, {site.address.formatted},
          E-Mail{" "}
          <a href={mailtoHref()} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <p>
          Die Seite wird bei Vercel gehostet. Beim Aufruf entstehen die üblichen
          Server-Logdaten (IP-Adresse, Zeitpunkt, aufgerufene Seite), die der
          Betriebssicherheit dienen. Wir setzen kein Tracking, kein Profiling
          und keine Werbe-Cookies ein.
        </p>
        <p>
          Es gibt keinen Online-Shop und kein Newsletter-Abo. Das Kontaktformular
          öffnet Ihr E-Mail-Programm (mailto). Die Nachricht verbleibt in Ihrem
          Mail-Client, bis Sie sie absenden; wir betreiben keinen Formular-Server.
        </p>
        <p>
          Schriften werden über Google Fonts (Fraunces, Inter) geladen. Die Karte
          auf Home, Salon und Kontakt ist ein Google-Maps-iframe. Dabei gelten die
          Datenschutzhinweise von Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          Sie haben Rechte auf Auskunft, Berichtigung, Löschung und Beschwerde bei
          der österreichischen Datenschutzbehörde. Anfragen bitte an {site.email}.
        </p>
      </div>
    </main>
  );
}
