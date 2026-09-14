"use client";

import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type en from "../../messages/en.json";

type NavHref = ComponentProps<typeof Link>["href"];
type NavKey = keyof typeof en.nav.main;

const NAV_ITEMS: { key: NavKey; href: NavHref }[] = [
  { key: "rules", href: "/rules" },
  { key: "reference", href: "/reference" },
  { key: "speak", href: "/speak" },
  { key: "about", href: "/about" },
];

type SiteNavProps = {
  /** "row" is the desktop header, "stack" the mobile panel. */
  layout?: "row" | "stack";
  className?: string;
};

/**
 * A client leaf so the layout stays static: usePathname is the only thing here
 * that reads the route, and reading it on the server turns the locale layout
 * dynamic. usePathname returns the internal path, so /es/reglas compares equal
 * to /rules.
 */
export function SiteNav({ layout = "row", className }: SiteNavProps) {
  const t = useTranslations("nav.main");
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul
        className={cn(
          "flex",
          layout === "row" ? "items-center gap-7" : "flex-col items-end gap-4",
        )}
      >
        {NAV_ITEMS.map(({ key, href }) => {
          const current = pathname === href;
          return (
            <li key={key}>
              <Link
                href={href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "focus-ring border-b-2 pb-0.5 text-base font-medium transition-colors",
                  current
                    ? "border-red-600"
                    : "border-transparent hover:border-blue-600 hover:text-blue-600",
                )}
              >
                {t(key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
