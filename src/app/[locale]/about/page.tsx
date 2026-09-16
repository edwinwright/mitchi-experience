import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { OnwardBlock } from "@/components/onward-block";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "about");
}

export default function AboutPage() {
  const t = useTranslations("about");
  const tOnward = useTranslations("nav.onward");
  return (
    <>
      <PageHeader
        title={t("title")}
        eyebrow={t("topics")}
        standfirst={t("standfirst")}
      />
      {/* No Prose here: the three paragraphs are a descending type scale with
          their own measures, which is the one thing .prose exists to override. */}
      <Container className="pt-8 pb-12 md:pt-13 md:pb-16 xl:pt-18 xl:pb-22">
        <div className="flex flex-col gap-10 md:gap-14 xl:gap-18">
          <div className="flex flex-col gap-8 md:gap-10 xl:max-w-[1000px] xl:gap-13">
            <p className="font-serif text-xl leading-relaxed text-pretty text-stone-900 md:text-2xl xl:max-w-[44ch]">
              {t.rich("origin", tags)}
            </p>
            <p className="font-serif text-lg leading-relaxed text-pretty text-stone-900 md:text-lg xl:max-w-[56ch] xl:text-xl">
              {t.rich("reconstruction", tags)}
            </p>
            <p className="font-serif text-lg leading-relaxed text-pretty text-stone-900 md:text-lg xl:max-w-[56ch] xl:text-xl [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:hover:text-red-600">
              {t.rich("speak", tags)}
            </p>
            <p className="border-t border-border pt-4 font-mono text-xs leading-[1.7] text-stone-600 md:pt-[18px] md:text-xs xl:max-w-[60ch] xl:pt-5 xl:text-sm">
              {t.rich("colophon", tags)}
            </p>
          </div>
          <OnwardBlock
            href="/rules"
            heading={tOnward("heading")}
            label={tOnward("rules")}
            summary={tOnward("rulesSummary")}
          />
        </div>
      </Container>
    </>
  );
}
