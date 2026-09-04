import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/paths";

export function Hero() {
  return (
    <section className="relative min-h-[80dvh] overflow-hidden">
      <img
        src={withBase("/images/hero.jpg")}
        alt="Handwerklich gezogenes Gelato im Salon Arnoldo"
        className="animate-hero absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/35" />
      <div className="relative mx-auto flex min-h-[80dvh] max-w-6xl flex-col justify-end gap-6 px-4 py-16 text-cream">
        <p className="text-xs uppercase tracking-[0.22em]">Wien-Hernals · Gelato naturale</p>
        <h1 className="font-display text-5xl leading-tight md:text-7xl">
          Italienische Eiskunst in Hernals
        </h1>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" data-cta="jetzt-besuchen">
            <a href="#besuch">Jetzt besuchen</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-cta="eissorten-entdecken"
            className="border-cream text-cream hover:bg-cream/10"
          >
            <Link href="/eissorten">Eissorten entdecken</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
