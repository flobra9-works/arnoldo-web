import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VisitCard } from "@/components/ui/VisitCard";
import { SalonGallery, type GalleryShot } from "@/components/salon/SalonGallery";

export const metadata: Metadata = {
  title: "Salon",
  description:
    "Salon und Gastgarten der Gelateria Arnoldo in Hernals — italienisches Flair, weg vom Trubel der Einkaufsstraßen.",
};

const salonShots: GalleryShot[] = [
  { src: "/images/salon/interior.jpg", alt: "Innenraum des Salons Arnoldo in Hernals" },
  { src: "/images/salon/gastgarten.jpg", alt: "Gastgarten der Gelateria Arnoldo" },
  { src: "/images/salon/detail.jpg", alt: "Details aus dem Salon — Holz, Glas, Gelato" },
];

export default function SalonPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionLabel>Der Ort</SectionLabel>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Salon & Gastgarten</h1>
        <p className="mt-4 max-w-2xl text-lg text-espresso/65">
          Italienisches Flair in Hernals — weg vom Trubel der Einkaufsstraßen.
          Ein Salon für Handwerk, Familie und ein Eis im Gastgarten.
        </p>
      </div>
      <SalonGallery shots={salonShots} />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <VisitCard />
      </div>
    </main>
  );
}
