import { describe, expect, it } from "vitest";
import { mapsSearchUrl, telHref, mailtoHref } from "@/lib/maps";

describe("maps helpers", () => {
  it("builds a Google Maps search URL for the salon", () => {
    const url = mapsSearchUrl();
    expect(url).toContain("google.com/maps/search");
    expect(url).toContain(encodeURIComponent("Hernalser Hauptstraße 145"));
  });

  it("builds a tel: href without spaces", () => {
    expect(telHref()).toBe("tel:+4314866894");
  });

  it("builds mailto with subject and body", () => {
    const href = mailtoHref({ subject: "Anfrage", body: "Guten Tag" });
    expect(href.startsWith("mailto:gelateria@arnoldo.at")).toBe(true);
    expect(href).toContain("subject=Anfrage");
  });
});
