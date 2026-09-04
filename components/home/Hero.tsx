import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/paths";

export function Hero() {
  return (
    <section className="md:relative md:min-h-[80dvh] md:overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full md:w-full">
        <img
          src={withBase("/images/hero.jpg")}
          alt="Handwerklich gezogenes Gelato im Salon Arnoldo"
          className="animate-hero h-full w-full object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-espresso/35 md:block" aria-hidden />
      <div className="relative bg-cream px-4 py-10 text-espresso md:mx-auto md:flex md:min-h-[80dvh] md:max-w-6xl md:flex-col md:justify-end md:gap-6 md:bg-transparent md:px-4 md:py-16 md:text-cream">
        <p className="text-xs uppercase tracking-[0.22em]">Wien-Hernals · Gelato naturale</p>
        <h1 className="mt-4 font-display text-4xl leading-tight md:mt-0 md:text-7xl">
          Italienische Eiskunst in Hernals
        </h1>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <Button asChild size="lg" data-cta="jetzt-besuchen">
            <a href="#besuch">Jetzt besuchen</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-cta="eissorten-entdecken"
            className="border-espresso text-espresso hover:bg-espresso/5 md:border-cream md:text-cream md:hover:bg-cream/10"
          >
            <Link href="/eissorten">Eissorten entdecken</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
