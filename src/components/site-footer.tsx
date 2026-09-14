import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteNav } from "@/components/site-nav";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const t = useTranslations("nav");

  return (
    <footer className="bg-foreground text-white">
      <Container className="flex flex-col gap-8 pt-8 pb-10 md:gap-11 md:pt-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label={t("wordmark")}
              className="focus-ring inline-flex"
            >
              <Wordmark inverse size={27} className="md:hidden" />
              <Wordmark inverse size={32} className="hidden md:inline-flex" />
            </Link>
            <p className="max-w-[48ch] font-serif text-base text-stone-500">
              {t("footer")}
            </p>
          </div>

          <div className="flex flex-col items-start gap-6">
            <SiteNav inverse layout="grid" className="md:hidden" />
            <SiteNav inverse layout="stack" className="hidden md:block" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-6 border-t border-stone-800 pt-5">
          <p className="font-mono text-xs text-stone-500">mitchidice.com</p>
          <LanguageSwitcher variant="list" inverse />
        </div>
      </Container>
    </footer>
  );
}
