import { site } from "@/content/site";

export function mapsSearchUrl(query = site.address.formatted): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query = site.address.formatted): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=16`;
}

export function telHref(tel = site.phone.tel): string {
  return `tel:${tel}`;
}

export function mailtoHref(opts?: { subject?: string; body?: string }): string {
  const params = new URLSearchParams();
  if (opts?.subject) params.set("subject", opts.subject);
  if (opts?.body) params.set("body", opts.body);
  const qs = params.toString();
  return `mailto:${site.email}${qs ? `?${qs}` : ""}`;
}
