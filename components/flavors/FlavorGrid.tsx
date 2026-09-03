"use client";

import { useMemo, useState } from "react";
import {
  flavorCategories,
  flavorsByCategory,
  type Flavor,
  type FlavorCategory,
} from "@/content/flavors";
import { FlavorCard } from "@/components/ui/FlavorCard";

export function FlavorGrid({ flavors }: { flavors: Flavor[] }) {
  const [active, setActive] = useState<FlavorCategory | "alle">("alle");
  const visible = useMemo(
    () => (active === "alle" ? flavors : flavorsByCategory(active)),
    [active, flavors],
  );

  return (
    <div className="mt-10">
      <div role="group" aria-label="Sorten filtern" className="flex flex-wrap gap-2">
        {flavorCategories.map((cat) => {
          const on = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(cat.id)}
              className={
                on
                  ? "rounded-full bg-pistachio px-4 py-1.5 text-sm text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  : "rounded-full border border-pistachio px-4 py-1.5 text-sm text-pistachio focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              }
            >
              {cat.label}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 text-espresso/65">Zurzeit keine Sorten in dieser Kategorie.</p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((flavor) => (
            <li key={flavor.slug}>
              <FlavorCard flavor={flavor} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
