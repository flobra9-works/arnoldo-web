import { cn } from "@/lib/utils";
import { withBase } from "@/lib/paths";
import type { Flavor } from "@/content/flavors";

export function FlavorCard({
  flavor,
  size = "grid",
}: {
  flavor: Flavor;
  size?: "grid" | "hero";
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5 hover:shadow-md",
        size === "hero" && "min-w-0",
      )}
    >
      <div className={cn("relative bg-blush/40", size === "hero" ? "aspect-[4/5]" : "aspect-square")}>
        <img
          src={withBase(flavor.image)}
          alt={`Gelato ${flavor.name}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3
          className={cn(
            "text-espresso",
            size === "hero" ? "font-display text-2xl" : "font-medium text-lg",
          )}
        >
          {flavor.name}
        </h3>
        {flavor.note ? (
          <p className="mt-1 text-sm text-espresso/65">{flavor.note}</p>
        ) : null}
      </div>
    </article>
  );
}
