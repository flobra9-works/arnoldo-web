import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactDetails } from "@/components/kontakt/ContactDetails";
import { ContactMap } from "@/components/kontakt/ContactMap";
import { ContactForm } from "@/components/kontakt/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Gelateria Arnoldo in Hernals — Telefon, E-Mail, Anfahrt und Öffnungszeiten. Hernalser Hauptstraße 145, 1170 Wien.",
};

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionLabel>Besuch & Gespräch</SectionLabel>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Kontakt</h1>
      <p className="mt-4 max-w-2xl text-lg text-espresso/65">
        Rufen Sie uns an, schreiben Sie uns, oder kommen Sie vorbei. Wir sind täglich
        von 12:00 bis 22:00 für Sie da.
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <ContactDetails />
        <ContactMap />
      </div>
      <div className="mt-16 max-w-xl">
        <h2 className="font-display text-2xl">Nachricht</h2>
        <p className="mt-2 text-sm text-espresso/65">Name, E-Mail, Nachricht.</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
      <p className="mt-16 text-sm text-espresso/65">
        <Link href="/impressum" className="hover:underline">
          Impressum
        </Link>
        {" · "}
        <Link href="/datenschutz" className="hover:underline">
          Datenschutz
        </Link>
      </p>
    </main>
  );
}
