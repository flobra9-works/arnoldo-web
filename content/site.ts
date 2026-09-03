export type NavItem = { href: string; label: string };

export type SiteContent = {
  name: string;
  tagline: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    formatted: string;
  };
  geo: { lat: number; lng: number };
  phone: { display: string; tel: string };
  email: string;
  hours: { display: string; openingHours: string[] };
  nav: NavItem[];
  legal: {
    company: string;
    fn: string;
    court: string;
    uid: string;
    chamber: string;
    supervisory: string;
  };
};

export const site: SiteContent = {
  name: "Gelateria Arnoldo",
  tagline: "Italienische Eiskunst in Hernals",
  address: {
    street: "Hernalser Hauptstraße 145",
    postalCode: "1170",
    city: "Wien",
    country: "AT",
    formatted: "Hernalser Hauptstraße 145, 1170 Wien",
  },
  geo: { lat: 48.2176, lng: 16.3314 },
  phone: { display: "+43 1 486 68 94", tel: "+4314866894" },
  email: "gelateria@arnoldo.at",
  hours: {
    display: "Mo–So 12:00–22:00",
    openingHours: ["Mo-Su 12:00-22:00"],
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/eissorten", label: "Eissorten" },
    { href: "/geschichte", label: "Geschichte" },
    { href: "/salon", label: "Salon" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  legal: {
    company: "Gelateria Arnoldo OG",
    fn: "FN 289666f",
    court: "Handelsgericht Wien",
    uid: "ATU63224667",
    chamber: "Wirtschaftskammer Wien",
    supervisory: "Magistratisches Bezirksamt des XVII. Bezirkes",
  },
};
