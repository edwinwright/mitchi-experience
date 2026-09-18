import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { RuleSection } from "@/components/rule-section";
import { RuleBody } from "@/components/rule-body";
import { StepList } from "@/components/step-list";
import { RankList } from "@/components/rank-list";
import { ExampleCard } from "@/components/example-card";
import { ExampleStrip } from "@/components/example-strip";
import { TieBreakExampleTable } from "@/components/tie-break-example-table";
import { TermList } from "@/components/term-list";
import { OnThisPage } from "@/components/on-this-page";
import { ScoringTable } from "@/components/scoring-table";
import { OnwardBlock } from "@/components/onward-block";
import type { HandId } from "@/data/hands";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";
import { Heading } from "@/components/heading";
import { bullet } from "@/lib/prose";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "rules");
}

export default function RulesPage() {
  const t = useTranslations("rules");
  const tOnward = useTranslations("nextPage");

  return (
    <>
      <PageHeader title={t("title")} standfirst={t("intro")} />
      {/* xl:items-start is load-bearing: a stretched flex child cannot be sticky. */}
      <Container className="pb-14 md:pb-18 xl:flex xl:items-start xl:gap-20 xl:pt-15 xl:pb-22">
        <OnThisPage
          className="xl:sticky xl:top-7 xl:w-56 xl:shrink-0"
          items={[
            { id: "overview", title: t("overview.heading") },
            { id: "what-you-need", title: t("youNeed.heading") },
            { id: "setup", title: t("setup.heading") },
            { id: "hands", title: t("hands.heading") },
            { id: "round", title: t("round.heading") },
            { id: "scoring", title: t("scoring.heading") },
            { id: "tie-breaks", title: t("tieBreaks.heading") },
            { id: "winning", title: t("winning.heading") },
            { id: "vocabulary", title: t("vocabulary.heading") },
          ]}
        />
        <div className="pt-8 md:pt-11 xl:min-w-0 xl:flex-1 xl:pt-0">
          <div className="divide-y divide-border">
            <Overview />
            <WhatYouNeed />
            <Setup />
            <Hands />
            <Round />
            <Scoring />
            <TieBreaks />
            <Winning />
            <Vocabulary />
          </div>
          <OnwardBlock
            href="/reference"
            heading={tOnward("heading")}
            label={tOnward("reference.label")}
            summary={tOnward("reference.summary")}
          />
        </div>
      </Container>
    </>
  );
}

function Overview() {
  const t = useTranslations("rules.overview");
  return (
    <RuleSection id="overview" number={1} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("summary", tags)}</p>
      </RuleBody>
    </RuleSection>
  );
}

// The strip/prose split inside an ExampleCard: a dashed rule between the dice
// strip and the prose underneath it, only when both are present.
const exampleStripWrap = "border-b border-dashed border-border pb-4 md:pb-5";
const exampleProse =
  "flex flex-col gap-3 font-serif text-base leading-relaxed text-stone-900 xl:text-lg";

function WhatYouNeed() {
  const t = useTranslations("rules.youNeed");
  return (
    <RuleSection id="what-you-need" number={2} heading={t("heading")}>
      <RuleBody>
        <ul role="list" className="flex flex-col gap-3">
          {(["dice", "paper", "players"] as const).map((key) => (
            <li key={key} className={bullet}>
              {t.rich(key, tags)}
            </li>
          ))}
        </ul>
      </RuleBody>
    </RuleSection>
  );
}

function Setup() {
  const t = useTranslations("rules.setup");
  return (
    <RuleSection id="setup" number={3} heading={t("heading")}>
      <StepList
        items={[t.rich("pointLimit", tags), t.rich("whoStarts", tags)]}
      />
    </RuleSection>
  );
}

function Hands() {
  const t = useTranslations("rules.hands");
  const tGroups = useTranslations("handGroups");
  return (
    <RuleSection id="hands" number={4} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("intro", tags)}</p>
      </RuleBody>
      <RankList />
      {/* Page link, not a term link: blue text and a 1px rule. */}
      <RuleBody className="[&_a]:text-blue-600 [&_a]:decoration-1 [&_a]:hover:text-red-600">
        <p>{tGroups.rich("withinGroup", tags)}</p>
        <p>{t.rich("allHandsLink", tags)}</p>
      </RuleBody>
    </RuleSection>
  );
}

function Round() {
  const t = useTranslations("rules.round");
  const tLabels = useTranslations("rules.exampleLabels");
  const tHands = useTranslations("hands");
  // Players are numbered by turn order in the round; the prose gets the same
  // numbers through its a/b/c parameters. The · and → are rendered, not copy.
  const players = { a: "1", b: "2", c: "3" };
  const player = (n: number) => tLabels("player", { n });
  const rolledIn = (hand: HandId, count: number) =>
    tLabels("rolledIn", { hand: tHands(hand), count });
  const setsLimit = (hand: HandId, count: number) => (
    <>
      {rolledIn(hand, count)} → {tLabels("rollLimit", { count })}
    </>
  );
  return (
    <RuleSection id="round" number={5} heading={t("heading")}>
      <Heading level={3} className="pt-1 text-lg font-semibold xl:text-xl">
        {t("rollLimit.heading")}
      </Heading>
      <RuleBody>
        <p>{t.rich("rollLimit.rolls", tags)}</p>
        <ul role="list" className="flex flex-col gap-3">
          {(["rerollBoth", "keepOne", "stop"] as const).map((key) => (
            <li key={key} className={bullet}>
              {t.rich(`rollLimit.${key}`, tags)}
            </li>
          ))}
        </ul>
        <p>{t.rich("rollLimit.newChoice", tags)}</p>
        <p>{t.rich("rollLimit.setsLimit", tags)}</p>
      </RuleBody>
      <ExampleCard>
        <div className={exampleStripWrap}>
          <ExampleStrip
            rows={[
              { label: player(1), hand: "6-3", note: setsLimit("6-3", 2) },
            ]}
          />
        </div>
        <div className={exampleProse}>{t.rich("rollLimit.example", tags)}</div>
      </ExampleCard>
      <Heading level={3} className="pt-1 text-lg font-semibold xl:text-xl">
        {t("everyoneElse.heading")}
      </Heading>
      <RuleBody>
        <p>{t.rich("everyoneElse.turn", tags)}</p>
        <p>{t.rich("everyoneElse.worstHandSoFar", tags)}</p>
      </RuleBody>
      <ExampleCard>
        <div className={exampleStripWrap}>
          <ExampleStrip
            rows={[
              { label: player(1), hand: "6-4", note: setsLimit("6-4", 1) },
              {
                label: player(2),
                hand: "5-1",
                note: (
                  <>
                    {tHands("5-1")} · {tLabels("worstHandSoFar")}
                  </>
                ),
              },
              {
                label: player(3),
                hand: "5-2",
                note: tLabels("needs", { hand: tHands("5-2") }),
              },
            ]}
          />
        </div>
        <div className={exampleProse}>
          {t.rich("everyoneElse.example1", { ...tags, ...players })}
        </div>
      </ExampleCard>
      <ExampleCard>
        <div className={exampleStripWrap}>
          <ExampleStrip
            rows={[
              { label: player(1), hand: "5-4", note: setsLimit("5-4", 3) },
              {
                label: player(2),
                hand: "6-2",
                note: (
                  <>
                    {rolledIn("6-2", 1)} · {tLabels("stops")}
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className={exampleProse}>
          {t.rich("everyoneElse.example2", { ...tags, ...players })}
        </div>
      </ExampleCard>
    </RuleSection>
  );
}

function Scoring() {
  const t = useTranslations("rules.scoring");
  return (
    <RuleSection id="scoring" number={6} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("startingPot", tags)}</p>
        <p>{t.rich("mitchis", tags)}</p>
        <p>{t.rich("takeThePot", tags)}</p>
      </RuleBody>
      <ScoringTable />
    </RuleSection>
  );
}

function TieBreaks() {
  const t = useTranslations("rules.tieBreaks");
  return (
    <RuleSection id="tie-breaks" number={7} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("intro", tags)}</p>
        <ol className="flex flex-col gap-3 pl-9 [&_li]:list-decimal [&_li::marker]:font-mono [&_li::marker]:text-sm [&_li::marker]:text-stone-600">
          {(
            ["doublePot", "rollOnce", "addMitchis", "worstHandTakes"] as const
          ).map((key) => (
            <li key={key}>{t.rich(key, tags)}</li>
          ))}
        </ol>
      </RuleBody>
      <ExampleCard>
        <TieBreakExampleTable />
      </ExampleCard>
    </RuleSection>
  );
}

function Winning() {
  const t = useTranslations("rules.winning");
  return (
    <RuleSection id="winning" number={8} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("gameEnds", tags)}</p>
        <p>{t.rich("tiedOnFewest", tags)}</p>
      </RuleBody>
    </RuleSection>
  );
}

function Vocabulary() {
  const t = useTranslations("rules.vocabulary");
  return (
    <RuleSection id="vocabulary" number={9} heading={t("heading")}>
      <TermList />
    </RuleSection>
  );
}
