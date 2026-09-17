import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { RuleSection } from "@/components/rule-section";
import { RuleBody } from "@/components/rule-body";
import { TermList } from "@/components/term-list";
import { SpeakTable } from "@/components/speak-table";
import { OnwardBlock } from "@/components/onward-block";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "terminology");
}

/*
 * Unlisted: a candidate replacement for /speak, reachable by URL only.
 * Not in the nav, the sitemap or the index (UNLISTED_PAGES in i18n/metadata).
 * The Mitchi Speak section reads the `speak` namespace so nothing is duplicated.
 */
export default function TerminologyPage() {
  const t = useTranslations("terminology");
  const tSpeak = useTranslations("speak");
  const tOnward = useTranslations("nextPage");
  return (
    <>
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <Container className="pt-8 pb-12 md:pt-13 md:pb-16 xl:pt-18 xl:pb-22">
        <div className="xl:max-w-5xl">
          <div className="divide-y divide-border">
            <RuleSection id="terms" number={1} heading={t("officialTerms")}>
              {/* The list runs to the section width here; /reference keeps the prose measure. */}
              <TermList className="xl:max-w-none" />
            </RuleSection>
            <RuleSection id="speak" number={2} heading={tSpeak("title")}>
              <RuleBody>
                <p>{tSpeak("standfirst")}</p>
              </RuleBody>
              <SpeakTable frame="rows" aria-labelledby="speak-heading" />
              <p className="font-serif text-lg leading-normal text-stone-600 xl:max-w-prose">
                {tSpeak("footnote")}
              </p>
            </RuleSection>
          </div>
          <OnwardBlock
            href="/about"
            heading={tOnward("heading")}
            label={tOnward("about.label")}
            summary={tOnward("about.summary")}
          />
        </div>
      </Container>
    </>
  );
}
