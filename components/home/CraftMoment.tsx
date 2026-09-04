import { SectionLabel } from "@/components/ui/SectionLabel";
import { withBase } from "@/lib/paths";

export function CraftMoment() {
  return (
    <section className="bg-blush/30">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <SectionLabel>Handwerk</SectionLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Täglich frisch, aus natürlichen Zutaten</h2>
          <p className="mt-4 text-lg text-espresso/65">
            Gelato naturale nach traditionellen Rezepturen — ohne Fertigmix, mit Milch,
            Frucht und Geduld. Cannoli, Cassata und Waffeln gehören zum Haus, das Eis
            bleibt die Mitte.
          </p>
        </div>
        <img
          src={withBase("/images/craft.jpg")}
          alt="Frische Zutaten und Hände bei der Gelato-Zubereitung"
          className="h-full min-h-72 w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
