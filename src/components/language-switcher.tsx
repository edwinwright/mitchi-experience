"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

const LOCALE_NAMES: Record<(typeof routing.locales)[number], string> = {
  en: "English",
  es: "Español",
};

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <nav aria-label={t("language")} className={className}>
      <ul className="flex items-center gap-4 text-sm">
        {routing.locales.map((locale) => (
          <li key={locale}>
            <Link
              href={pathname}
              locale={locale}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === currentLocale ? "page" : undefined}
              className="aria-[current=page]:font-bold"
            >
              {LOCALE_NAMES[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
