import { describe, expect, it } from "vitest";
import { flavors, flavorsByCategory, signatureFlavors } from "@/content/flavors";

describe("flavors", () => {
  it("includes the full v1 list from the current site", () => {
    const names = flavors.map((f) => f.name);
    for (const required of [
      "Amarena", "Bacio", "Biscottino", "Sicilia", "Cremino", "Fiocco",
      "Haselnuss", "Joghurt", "Kaffee", "Malaga", "Nutella", "Pistazie",
      "Kokos", "(Bitter-)Schokolade", "Stracciatella", "Vanille", "Cheesecake",
      "Banane", "Erdbeere", "Heidelbeere", "Himbeere", "Mango", "Maracuja",
      "Marille", "Zitrone",
    ]) {
      expect(names).toContain(required);
    }
  });

  it("filters Klassiker / Frucht / Saison", () => {
    expect(flavorsByCategory("frucht").every((f) => f.category === "frucht")).toBe(true);
    expect(flavorsByCategory("saison").length).toBeGreaterThan(0);
    expect(flavorsByCategory("alle")).toHaveLength(flavors.length);
  });

  it("exposes 4–5 signature flavors for Home", () => {
    expect(signatureFlavors.length).toBeGreaterThanOrEqual(4);
    expect(signatureFlavors.length).toBeLessThanOrEqual(5);
  });
});
