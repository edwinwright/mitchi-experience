import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileMenu } from "@/components/mobile-menu";
import { SiteNav } from "@/components/site-nav";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="relative z-10 border-b border-stone-300 bg-stone-50">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4 md:py-6">
          <Link
            href="/"
            aria-label={t("wordmark")}
            className="focus-ring inline-flex"
          >
            <Wordmark size={27} className="md:hidden" />
            <Wordmark size={34} className="hidden md:inline-flex" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <SiteNav layout="row" />
            <LanguageSwitcher />
          </div>

          <MobileMenu className="md:hidden">
            <div className="flex flex-col items-end gap-4">
              <SiteNav layout="stack" />
              <LanguageSwitcher />
            </div>
          </MobileMenu>
        </div>
      </Container>
    </header>
  );
}
