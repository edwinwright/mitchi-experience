import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { RuleSection } from "@/components/rule-section";
import { RuleBody } from "@/components/rule-body";
import { OnThisPage } from "@/components/on-this-page";
import { RankingCard } from "@/components/ranking-card";
import { ScoringTable } from "@/components/scoring-table";
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
  const tOnward = useTranslations("nextPage");

  return (
    <>
      <PageHeader title={t("title")} standfirst={t("intro")} />
      {/* xl:items-start is load-bearing: a stretched flex child cannot be sticky. */}
      <Container className="pb-14 md:pb-18 xl:flex xl:items-start xl:gap-20 xl:pt-15 xl:pb-22">
        <OnThisPage
          className="xl:sticky xl:top-7 xl:w-56 xl:shrink-0"
          items={[
            { id: "ranking", title: tRanking("heading") },
            { id: "scoring", title: tScoring("heading") },
          ]}
        />
        <div className="pt-8 md:pt-11 xl:min-w-0 xl:flex-1 xl:pt-0">
          <div className="divide-y divide-border">
            <RuleSection id="ranking" number={1} heading={tRanking("heading")}>
              <RuleBody>
                <p>{tRanking.rich("intro", tags)}</p>
              </RuleBody>
              <RankingCard />
            </RuleSection>
            <Scoring />
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

// Text sits above each table, never below: mid-game, the sentence is what
// the table means and the table is the answer.
function Scoring() {
  const t = useTranslations("reference.scoring");
  const tTieBreaks = useTranslations("reference.tieBreaks");
  const tPointLimit = useTranslations("reference.pointLimit");
  return (
    <RuleSection id="scoring" number={2} heading={t("heading")}>
      <div className={subBlock}>
        <RuleBody className="xl:max-w-[62ch]">
          <p>{t.rich("intro", tags)}</p>
        </RuleBody>
        <ScoringTable />
      </div>
      {/* Sub-block ids stay as they were when these were sections: anchors are URLs, not copy. */}
      <div
        id="tie-breaks"
        className={`${subBlock} border-t border-border pt-6`}
      >
        <Heading level={3} className={subHeading}>
          {tTieBreaks("heading")}
        </Heading>
        <RuleBody className="xl:max-w-[62ch]">
          <p>{tTieBreaks.rich("intro", tags)}</p>
        </RuleBody>
        <TieBreakTable />
        <p className="font-semibold [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-red-600">
          {tTieBreaks.rich("fullRulesLink", tags)}
        </p>
      </div>
      <div id="ending" className={`${subBlock} border-t border-border pt-6`}>
        <Heading level={3} className={subHeading}>
          {tPointLimit("heading")}
        </Heading>
        <RuleBody className="xl:max-w-[62ch]">
          <p>{tPointLimit.rich("summary", tags)}</p>
        </RuleBody>
      </div>
    </RuleSection>
  );
}

const th = "px-3 py-3 text-left text-sm leading-snug font-bold md:px-4";
const whenCell = "px-3 py-3 font-serif text-base text-stone-900 md:px-4";
const potCell =
  "px-3 py-3 text-right font-mono text-sm font-medium tabular-nums md:px-4";

// What happens to the pot in a tie-break. The operators are data, the same
// in every locale; the row labels are messages.
const TIE_BREAK_ROWS = [
  { when: "eachTieBreak", pot: "× 2" },
  { when: "eachMitchi", pot: "+ 2" },
] as const;

function TieBreakTable() {
  const t = useTranslations("reference.tieBreaks");
  return (
    <div className="overflow-hidden rounded-lg border border-border xl:max-w-xl">
      <table className="w-full border-collapse">
        <thead className="bg-stone-100">
          <tr className="divide-x divide-border">
            <th scope="col" className={th}>
              {t("whenHeader")}
            </th>
            <th scope="col" className={`${th} w-30 text-right md:w-40`}>
              {t("potHeader")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {TIE_BREAK_ROWS.map((row) => (
            <tr key={row.when} className="divide-x divide-border">
              <td className={whenCell}>{t(row.when)}</td>
              <td className={potCell}>{row.pot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
