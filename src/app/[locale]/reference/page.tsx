import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { RuleSection } from "@/components/rule-section";
import { RuleBody } from "@/components/rule-body";
import { StepList } from "@/components/step-list";
import { OnThisPage } from "@/components/on-this-page";
import { RankingCard } from "@/components/ranking-card";
import { ScoringTable } from "@/components/scoring-table";
import { TermList } from "@/components/term-list";
import { OnwardBlock } from "@/components/onward-block";
import { Heading } from "@/components/heading";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "reference");
}

export default function ReferencePage() {
  const t = useTranslations("reference");
  const tRanking = useTranslations("reference.ranking");
  const tScoring = useTranslations("reference.scoring");
  const tTerms = useTranslations("rules.vocabulary");
  const tGroups = useTranslations("handGroups");
  const tOnward = useTranslations("nextPage");

  return (
    <>
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      {/* xl:items-start is load-bearing: a stretched flex child cannot be sticky. */}
      <Container className="pb-14 md:pb-18 xl:flex xl:items-start xl:gap-20 xl:pt-15 xl:pb-22">
        <OnThisPage
          className="xl:sticky xl:top-7 xl:w-56 xl:shrink-0"
          items={[
            { id: "ranking", title: tRanking("heading") },
            { id: "scoring", title: tScoring("heading") },
            { id: "terms", title: tTerms("heading") },
          ]}
        />
        <div className="pt-8 md:pt-11 xl:min-w-0 xl:flex-1 xl:pt-0">
          <div className="divide-y divide-border">
            <RuleSection id="ranking" number={1} heading={tRanking("heading")}>
              <RankingCard />
              <RuleBody>
                <p>{tGroups.rich("withinGroup", tags)}</p>
              </RuleBody>
            </RuleSection>
            <Scoring />
            <RuleSection id="terms" number={3} heading={tTerms("heading")}>
              <TermList />
            </RuleSection>
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

const subHeading = "text-lg font-bold xl:text-xl";
const subBlock = "flex flex-col gap-3 md:gap-4";

function Scoring() {
  const t = useTranslations("reference.scoring");
  return (
    <RuleSection id="scoring" number={2} heading={t("heading")}>
      <div className={subBlock}>
        <Heading level={3} className={subHeading}>
          {t("perRound")}
        </Heading>
        <ScoringTable />
        <RuleBody className="xl:max-w-[62ch]">
          <p>{t.rich("note", tags)}</p>
        </RuleBody>
      </div>
      {/* Sub-block ids stay as they were when these were sections: anchors are URLs, not copy. */}
      <div id="tie-breaks" className={`${subBlock} border-t border-border pt-6`}>
        <Heading level={3} className={subHeading}>
          {t("tieBreak")}
        </Heading>
        <StepList
          items={[
            t("rule1"),
            t("rule2"),
            t("rule3"),
            t("rule4"),
            t("rule5"),
            t("rule6"),
          ]}
        />
      </div>
      <div id="ending" className={`${subBlock} border-t border-border pt-6`}>
        <Heading level={3} className={subHeading}>
          {t("pointLimit")}
        </Heading>
        <RuleBody className="xl:max-w-[62ch]">
          <p>{t.rich("limit", tags)}</p>
        </RuleBody>
      </div>
    </RuleSection>
  );
}
