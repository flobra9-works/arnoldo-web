import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SalonTease() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img
          src="/images/salon/interior.jpg"
          alt="Warmer Innenraum des Salons Arnoldo in Hernals"
          className="min-h-72 w-full rounded-2xl object-cover"
        />
        <div>
          <SectionLabel>Der Salon</SectionLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Italienisches Flair, weg vom Trubel</h2>
          <p className="mt-4 text-lg text-espresso/65">
            In Hernals, nicht in der Einkaufsstraße. Ein Ort für Familie, Gastgarten
            und ein Eis in Ruhe.
          </p>
          <Link
            href="/salon"
            className="mt-6 inline-block text-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio rounded-sm"
          >
            Den Salon entdecken
          </Link>
        </div>
      </div>
    </section>
  );
}
