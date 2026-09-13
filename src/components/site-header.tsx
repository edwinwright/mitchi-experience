import { useTranslations } from "next-intl";
import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import type en from "../../messages/en.json";
import { Wordmark } from "@/components/wordmark";

type NavHref = ComponentProps<typeof Link>["href"];
type NavKey = keyof typeof en.nav.main;

const NAV_ITEMS: { key: NavKey; href: NavHref }[] = [
  { key: "rules", href: "/rules" },
  { key: "reference", href: "/reference" },
  { key: "speak", href: "/speak" },
  { key: "about", href: "/about" },
];

export function SiteHeader() {
  const t = useTranslations("nav");
  const tMain = useTranslations("nav.main");

  return (
    <header className="bg-background border-b border-border">
      <Container className="py-4 grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-y-4 items-start">
        <div className="col-start-1 row-span-2">
          <Link
            href="/"
            aria-label={t("wordmark")}
            className="focus-ring inline-flex"
          >
            <Wordmark />
          </Link>
        </div>
        <nav className="col-start-2 row-start-2 justify-self-end">
          <ul className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="hover:underline focus-ring">
                  {tMain(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher className="col-start-2 row-start-1 justify-self-end" />
      </Container>
    </header>
  );
}
