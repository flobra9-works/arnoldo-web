import Link from "next/link";
import { signatureFlavors } from "@/content/flavors";
import { FlavorCard } from "@/components/ui/FlavorCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SignatureFlavors() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionLabel>Unsere Signaturen</SectionLabel>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl md:text-4xl">Fünf Sorten, die uns ausmachen</h2>
        <Link
          href="/eissorten"
          className="text-sm text-espresso underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio rounded-sm"
        >
          Alle Sorten
        </Link>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {signatureFlavors.map((flavor) => (
          <li key={flavor.slug}>
            <FlavorCard flavor={flavor} size="hero" />
          </li>
        ))}
      </ul>
    </section>
  );
}
