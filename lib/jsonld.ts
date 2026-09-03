import { site } from "@/content/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: site.name,
    image: "https://www.arnoldo.at/images/hero.jpg",
    url: "https://www.arnoldo.at/",
    telephone: site.phone.display,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHours: site.hours.openingHours,
    servesCuisine: "Gelato",
    priceRange: "€",
  };
}
