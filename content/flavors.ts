export type FlavorCategory = "klassiker" | "frucht" | "saison";

export type Flavor = {
  slug: string;
  name: string;
  category: FlavorCategory;
  note?: string;
  signature?: boolean;
  image: string;
};

export const flavorCategories: { id: FlavorCategory | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "klassiker", label: "Klassiker" },
  { id: "frucht", label: "Frucht" },
  { id: "saison", label: "Saison" },
];

export const flavors: Flavor[] = [
  { slug: "amarena", name: "Amarena", category: "klassiker", note: "Sauerkirsche, klassisch italienisch", signature: true, image: "/images/flavors/amarena.jpg" },
  { slug: "bacio", name: "Bacio", category: "klassiker", note: "Haselnuss und Schokolade", signature: true, image: "/images/flavors/bacio.jpg" },
  { slug: "biscottino", name: "Biscottino", category: "klassiker", image: "/images/flavors/biscottino.jpg" },
  { slug: "sicilia", name: "Sicilia", category: "klassiker", note: "Sizilianische Mandeln", signature: true, image: "/images/flavors/sicilia.jpg" },
  { slug: "cremino", name: "Cremino", category: "klassiker", image: "/images/flavors/cremino.jpg" },
  { slug: "fiocco", name: "Fiocco", category: "klassiker", image: "/images/flavors/fiocco.jpg" },
  { slug: "haselnuss", name: "Haselnuss", category: "klassiker", signature: true, image: "/images/flavors/haselnuss.jpg" },
  { slug: "joghurt", name: "Joghurt", category: "klassiker", image: "/images/flavors/joghurt.jpg" },
  { slug: "kaffee", name: "Kaffee", category: "klassiker", image: "/images/flavors/kaffee.jpg" },
  { slug: "malaga", name: "Malaga", category: "klassiker", image: "/images/flavors/malaga.jpg" },
  { slug: "nutella", name: "Nutella", category: "klassiker", image: "/images/flavors/nutella.jpg" },
  { slug: "pistazie", name: "Pistazie", category: "klassiker", note: "Bronte-Pistazie", signature: true, image: "/images/flavors/pistazie.jpg" },
  { slug: "kokos", name: "Kokos", category: "klassiker", image: "/images/flavors/kokos.jpg" },
  { slug: "bitter-schokolade", name: "(Bitter-)Schokolade", category: "klassiker", image: "/images/flavors/schokolade.jpg" },
  { slug: "stracciatella", name: "Stracciatella", category: "klassiker", image: "/images/flavors/stracciatella.jpg" },
  { slug: "vanille", name: "Vanille", category: "klassiker", image: "/images/flavors/vanille.jpg" },
  { slug: "cheesecake", name: "Cheesecake", category: "klassiker", image: "/images/flavors/cheesecake.jpg" },
  { slug: "banane", name: "Banane", category: "frucht", image: "/images/flavors/banane.jpg" },
  { slug: "erdbeere", name: "Erdbeere", category: "frucht", image: "/images/flavors/erdbeere.jpg" },
  { slug: "heidelbeere", name: "Heidelbeere", category: "frucht", image: "/images/flavors/heidelbeere.jpg" },
  { slug: "himbeere", name: "Himbeere", category: "frucht", image: "/images/flavors/himbeere.jpg" },
  { slug: "mango", name: "Mango", category: "frucht", image: "/images/flavors/mango.jpg" },
  { slug: "maracuja", name: "Maracuja", category: "frucht", image: "/images/flavors/maracuja.jpg" },
  { slug: "marille", name: "Marille", category: "frucht", image: "/images/flavors/marille.jpg" },
  { slug: "zitrone", name: "Zitrone", category: "frucht", image: "/images/flavors/zitrone.jpg" },
  { slug: "saison", name: "Saisonale Sorte", category: "saison", note: "Nach Markt und Saison — bitte vor Ort fragen", image: "/images/flavors/saison.jpg" },
];

export const signatureFlavors = flavors.filter((f) => f.signature);

export function flavorsByCategory(category: FlavorCategory | "alle"): Flavor[] {
  if (category === "alle") return flavors;
  return flavors.filter((f) => f.category === category);
}
