import type { Metadata } from "next";
import { site } from "@/content/site";
import { mailtoHref, telHref } from "@/lib/maps";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Gelateria Arnoldo OG, Wien-Hernals.",
};

export default function ImpressumPage() {
  const { legal, address, phone, email } = site;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl md:text-5xl">Impressum</h1>
      <div className="mt-10 grid gap-6 text-espresso/90">
        <p>
          <strong>{legal.company}</strong>
        </p>
        <p>
          {address.street}
          <br />
          {address.postalCode} {address.city}
        </p>
        <p>
          Tel.{" "}
          <a href={telHref()} className="hover:underline">
            {phone.display}
          </a>
          <br />
          E-Mail{" "}
          <a href={mailtoHref()} className="hover:underline">
            {email}
          </a>
        </p>
        <p>
          {legal.fn}
          <br />
          {legal.court}
          <br />
          UID {legal.uid}
        </p>
        <p>Mitglied der {legal.chamber}</p>
        <p>
          Aufsichtsbehörde:
          <br />
          {legal.supervisory}
        </p>
      </div>
      {/* Angaben vor Launch mit der Auftraggeberin prüfen. */}
    </main>
  );
}
