import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { Heading } from "@/components/heading";
import { OnwardBlock } from "@/components/onward-block";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";
import { bullet } from "@/lib/prose";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "about");
}

// Section ids are anchors, English in every locale.
const SECTIONS = [
  {
    id: "game",
    key: "game",
    paragraphs: ["game.summary"],
  },
  {
    id: "origin",
    key: "origin",
    paragraphs: ["origin.learnt", "origin.cousin"],
  },
  {
    id: "why-it-stuck",
    key: "whyItStuck",
    paragraphs: ["whyItStuck.easy", "whyItStuck.tactical"],
  },
  {
    id: "related-games",
    key: "relatedGames",
    paragraphs: ["relatedGames.intro"],
  },
] as const;

const paragraph =
  "font-serif text-lg leading-relaxed text-pretty text-stone-900 xl:text-xl";

export default function AboutPage() {
  const t = useTranslations("about");
  const tOnward = useTranslations("nextPage");
  return (
    <>
      <PageHeader title={t("title")} standfirst={t("intro")} />
      {/* Plain sections, not RuleSection: About has no ordinals. No Prose:
          the type scale is set here, which is the one thing .prose overrides. */}
      <Container className="pt-8 pb-12 md:pt-13 md:pb-16 xl:pt-18 xl:pb-22">
        <div className="flex flex-col gap-10 md:gap-14 xl:gap-18">
          <div className="flex max-w-[70ch] flex-col gap-10 md:gap-12 xl:max-w-[60ch]">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="flex flex-col gap-4 md:gap-5"
              >
                <Heading
                  level={2}
                  id={`${section.id}-heading`}
                  className="text-2xl md:text-3xl"
                >
                  {t(`${section.key}.heading`)}
                </Heading>
                {section.paragraphs.map((key) => (
                  <p key={key} className={paragraph}>
                    {t.rich(key, tags)}
                  </p>
                ))}
                {section.key === "relatedGames" && (
                  <ul role="list" className="flex flex-col gap-3">
                    {(["mia", "mexico"] as const).map((key) => (
                      <li
                        key={key}
                        className={`${paragraph} ${bullet}`}
                      >
                        {t.rich(`relatedGames.${key}`, tags)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <OnwardBlock
            href="/rules"
            heading={tOnward("heading")}
            label={tOnward("rules.label")}
            summary={tOnward("rules.summary")}
          />
        </div>
      </Container>
    </>
  );
}
