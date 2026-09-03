"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-6">
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm tracking-wide text-espresso/80 hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pistachio focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm",
              active && "font-medium text-espresso underline decoration-pistachio decoration-2 underline-offset-8",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
