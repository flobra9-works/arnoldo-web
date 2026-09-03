import type { Metadata } from "next";
import { flavors } from "@/content/flavors";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";
import { VisitCard } from "@/components/ui/VisitCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Eissorten",
  description:
    "Klassiker, Frucht und Saison — Gelato naturale aus natürlichen Zutaten, täglich frisch in Hernals.",
};

export default function EissortenPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <SectionLabel>Gelato naturale</SectionLabel>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Unsere Eissorten</h1>
      <p className="mt-4 max-w-2xl text-lg text-espresso/65">
        Natürliche Zutaten, traditionelle Rezepturen, saisonale Noten. Kein Fertigmix —
        täglich im Salon gezogen. Sorten wechseln mit dem Markt.
      </p>
      <FlavorGrid flavors={flavors} />
      <div className="mt-16">
        <VisitCard showMap={false} />
      </div>
    </main>
  );
}
