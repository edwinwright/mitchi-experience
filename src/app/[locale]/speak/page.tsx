import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { RuleSection } from "@/components/rule-section";
import { SpeakTable } from "@/components/speak-table";
import { OnwardBlock } from "@/components/onward-block";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "speak");
}

export default function SpeakPage() {
  const t = useTranslations("speak");
  const tOnward = useTranslations("nav.onward");
  return (
    <>
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <Container className="pt-8 pb-12 md:pt-13 md:pb-16 xl:pt-18 xl:pb-22">
        <div className="xl:max-w-5xl">
          {/* RuleSection labels its heading `${id}-heading`; the table is named by it. */}
          <RuleSection id="names" number={1} heading={t("caption")}>
            <SpeakTable aria-labelledby="names-heading" />
            <p className="border-t border-border pt-5 font-serif text-lg leading-normal text-stone-600 xl:max-w-prose">
              {t("footnote")}
            </p>
          </RuleSection>
          <OnwardBlock
            href="/about"
            heading={tOnward("heading")}
            label={tOnward("about")}
            summary={tOnward("aboutSummary")}
          />
        </div>
      </Container>
    </>
  );
}
