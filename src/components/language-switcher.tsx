"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Locale = (typeof routing.locales)[number];

// The autonym is the accessible name, the two-letter code the visible label.
// Neither belongs in a message file: autonyms are named in their own language,
// and a language code is not translated.
const LOCALE_NAMES: Record<Locale, string> = { en: "English", es: "Español" };
const LOCALE_CODES: Record<Locale, string> = { en: "EN", es: "ES" };

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <nav aria-label={t("language")} className={className}>
      <ul className="flex rounded-md border border-foreground font-mono text-xs">
        {routing.locales.map((locale) => {
          const current = locale === currentLocale;
          return (
            <li key={locale} className="first:rounded-l last:rounded-r">
              <Link
                href={pathname}
                locale={locale}
                hrefLang={locale}
                lang={locale}
                aria-label={LOCALE_NAMES[locale]}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "focus-ring block px-2.5 py-1 transition-colors",
                  "first:rounded-l last:rounded-r",
                  current ? "bg-foreground text-white" : "hover:bg-stone-100",
                )}
              >
                {LOCALE_CODES[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
