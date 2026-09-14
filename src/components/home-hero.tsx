import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { CtaLink } from "@/components/cta-link";
import { tags } from "@/i18n/rich-text";
import { DiceHeroOverlay } from "@/components/dice-hero-overlay";

export function HomeHero() {
  const t = useTranslations("home");

  return (
    <section>
      <div className="bg-red-600 text-white relative overflow-hidden">
        <Container className="relative z-2 min-h-0 md:min-h-150 py-9 md:py-[76px]">
          <div className="w-full md:w-[54%] flex flex-col justify-between gap-11">
            <header className="flex flex-col gap-6">
              <p className="font-mono uppercase tracking-[0.16em] md:tracking-[0.18em] text-xs text-white/85 pt-8">
                <span className="before:hidden md:before:inline-block before:content-[''] before:w-8 before:h-px before:bg-white/85  before:mr-4 before:align-middle">
                  {t("tagline")}
                </span>
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] md:leading-[0.93] tracking-[-0.035em]">
                {t("title")}
              </h1>
              <div className="font-serif text-lg md:text-xl leading-[1.45] max-w-[34ch] text-white/95">
                <p className="mb-4">{t.rich("twist", tags)}</p>
                <p>{t.rich("scoring", tags)}</p>
              </div>
            </header>
            <footer className="flex flex-col gap-4">
              <nav className="flex flex-col gap-2.5 md:flex-row md:gap-3 w-full md:w-auto">
                <CtaLink
                  className="w-full md:w-auto"
                  href="/rules"
                  variant="primary"
                  inverse
                >
                  {t("cta.rules")}
                </CtaLink>
                <CtaLink
                  className="w-full md:w-auto"
                  href="/reference"
                  variant="secondary"
                  inverse
                >
                  {t("cta.reference")}
                </CtaLink>
              </nav>
              <p className="font-mono text-[12.5px] leading-[1.7] text-white/85 hidden md:block">
                {t.rich("need", tags)}
              </p>
            </footer>
          </div>
        </Container>
        <div className="relative mt-14 h-[210px] md:absolute md:inset-y-0 md:left-[53%] md:right-0 md:mt-0 md:h-auto">
          <div aria-hidden="true" className="absolute inset-0 bg-red-800" />
          <DiceHeroOverlay
            size={64}
            className="absolute left-5 top-[-34px] md:hidden"
          />
          <DiceHeroOverlay
            size={104}
            className="absolute hidden md:flex md:left-[-58px] md:top-20"
          />
        </div>
      </div>
      <div className="md:hidden bg-foreground text-white">
        <Container className="py-[18px]">
          <div className="font-mono text-[12.5px] leading-[1.7] text-white/85">
            {t.rich("need", tags)}
          </div>
        </Container>
      </div>
    </section>
  );
}
