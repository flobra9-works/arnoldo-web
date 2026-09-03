import type { Metadata } from "next";
import Link from "next/link";
import { timeline, geschichteClosing } from "@/content/geschichte";
import { Timeline } from "@/components/geschichte/Timeline";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Geschichte",
  description:
    "Vier Generationen Gelato: von Vincenzo aus den Dolomiten bis Fausto und Sonja in Hernals.",
};

export default function GeschichtePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <SectionLabel>Familie Arnoldo</SectionLabel>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Unsere Geschichte</h1>
      <Timeline beats={timeline} />
      <p className="mt-16 font-display text-2xl">{geschichteClosing}</p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/salon">Den Salon besuchen</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/kontakt">Kontakt</Link>
        </Button>
      </div>
    </main>
  );
}
