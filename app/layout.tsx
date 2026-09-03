import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyVisitBar } from "@/components/layout/StickyVisitBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arnoldo.at"),
  title: {
    default: "Gelateria Arnoldo — Italienische Eiskunst in Hernals",
    template: "%s · Gelateria Arnoldo",
  },
  description:
    "Gelato naturale in Wien-Hernals. Täglich frisch, seit Generationen. Hernalser Hauptstraße 145.",
  openGraph: {
    locale: "de_AT",
    type: "website",
    siteName: "Gelateria Arnoldo",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-cream text-espresso antialiased pb-16 md:pb-0">
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyVisitBar />
      </body>
    </html>
  );
}
