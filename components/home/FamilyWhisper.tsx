import Link from "next/link";

export function FamilyWhisper() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <p className="font-display text-2xl md:text-3xl">
        Seit Vincenzo aus den Dolomiten — vier Generationen Gelato in Wien.
      </p>
      <Link
        href="/geschichte"
        className="mt-6 inline-block text-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio rounded-sm"
      >
        Unsere Geschichte
      </Link>
    </section>
  );
}
