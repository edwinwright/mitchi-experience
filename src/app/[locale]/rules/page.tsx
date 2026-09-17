import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { RuleSection } from "@/components/rule-section";
import { RuleBody } from "@/components/rule-body";
import { StepList } from "@/components/step-list";
import { RankList } from "@/components/rank-list";
import { Example } from "@/components/example";
import { ExampleStrip } from "@/components/example-strip";
import { StageTable } from "@/components/stage-table";
import { OnThisPage } from "@/components/on-this-page";
import { ScoringTable } from "@/components/scoring-table";
import { OnwardBlock } from "@/components/onward-block";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";
import { Heading } from "@/components/heading";

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
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      {/* xl:items-start is load-bearing: a stretched flex child cannot be sticky. */}
      <Container className="pb-14 md:pb-18 xl:flex xl:items-start xl:gap-20 xl:pt-15 xl:pb-22">
        <OnThisPage
          className="xl:sticky xl:top-7 xl:w-56 xl:shrink-0"
          items={[
            { id: "overview", title: t("overview.heading") },
            { id: "what-you-need", title: t("need.heading") },
            { id: "setup", title: t("setup.heading") },
            { id: "hands", title: t("hands.heading") },
            { id: "round", title: t("round.heading") },
            { id: "scoring", title: t("scoring.heading") },
            { id: "tie-breaks", title: t("tieBreaks.heading") },
            { id: "winning", title: t("winning.heading") },
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
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("objective", tags)}</p>
      </RuleBody>
    </RuleSection>
  );
}

function WhatYouNeed() {
  const t = useTranslations("rules.need");
  return (
    <RuleSection id="what-you-need" number={2} heading={t("heading")}>
      <dl className="divide-y divide-border md:flex md:divide-x md:divide-y-0">
        {(["dice", "paper", "players"] as const).map((key) => (
          <div
            key={key}
            className="flex items-baseline gap-3 py-3 first:pt-0 last:pb-0 md:flex-1 md:flex-col md:gap-3 md:px-5 md:py-0 md:first:pl-0 md:last:pr-0 xl:px-8"
          >
            <dt className="w-20 shrink-0 font-mono text-xs tracking-widest text-stone-600 uppercase md:w-auto">
              {t(`${key}Label`)}
            </dt>
            <dd className="font-serif text-lg leading-normal text-stone-900">
              {t(key)}
            </dd>
          </div>
        ))}
      </dl>
    </RuleSection>
  );
}

function Setup() {
  const t = useTranslations("rules.setup");
  return (
    <RuleSection id="setup" number={3} heading={t("heading")}>
      <StepList items={[t("step1"), t("step2"), t("step3")]} />
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
      {/* Page link, not a term link: blue text and a 1px rule, as /about's <speak>. */}
      <RuleBody className="[&_a]:text-blue-600 [&_a]:decoration-1 [&_a]:hover:text-red-600">
        <p>{tGroups.rich("withinGroup", tags)}</p>
        <p>{t.rich("onward", tags)}</p>
      </RuleBody>
    </RuleSection>
  );
}

function Round() {
  const t = useTranslations("rules.round");
  const tStrip = useTranslations("rules.strip");
  const tHands = useTranslations("hands");
  // Players are numbered by turn order in the round; the prose gets the same
  // numbers through its a/b/c parameters. The · and → are rendered, not copy.
  const players = { a: "1", b: "2", c: "3" };
  const player = (n: number) => tStrip("player", { n });
  const rollsToLimit = (count: number) => (
    <>
      {tStrip("rolls", { count })} → {tStrip("limit", { count })}
    </>
  );
  return (
    <RuleSection id="round" number={5} heading={t("heading")}>
      <Heading level={3} className="pt-1 text-lg font-semibold xl:text-xl">
        {t("rollLimit.heading")}
      </Heading>
      <RuleBody>
        <p>{t.rich("rollLimit.body", tags)}</p>
        <p>{t.rich("rollLimit.choices", tags)}</p>
        <p>{t.rich("rollLimit.fresh", tags)}</p>
        <p>{t.rich("rollLimit.sets", tags)}</p>
      </RuleBody>
      <Example
        strip={
          <ExampleStrip
            rows={[
              {
                label: player(1),
                hand: "6-3",
                note: (
                  <>
                    {tHands("6-3")} · {rollsToLimit(2)}
                  </>
                ),
              },
            ]}
          />
        }
      >
        {t.rich("rollLimit.example", tags)}
      </Example>
      <Heading level={3} className="pt-1 text-lg font-semibold xl:text-xl">
        {t("others.heading")}
      </Heading>
      <RuleBody>
        <p>{t.rich("others.body", tags)}</p>
        <p>{t.rich("others.beat", tags)}</p>
      </RuleBody>
      <Example
        strip={
          <ExampleStrip
            rows={[
              {
                label: player(1),
                hand: "6-4",
                note: (
                  <>
                    {tHands("6-4")} · {rollsToLimit(1)}
                  </>
                ),
              },
              {
                label: player(2),
                hand: "5-1",
                note: (
                  <>
                    {tHands("5-1")} · {tStrip("worstSoFar")}
                  </>
                ),
              },
              {
                label: player(3),
                hand: "5-2",
                note: tStrip("needs", { hand: tHands("5-2") }),
              },
            ]}
          />
        }
      >
        {t.rich("others.example1", { ...tags, ...players })}
      </Example>
      <Example
        strip={
          <ExampleStrip
            rows={[
              {
                label: player(1),
                hand: "5-4",
                note: (
                  <>
                    {tHands("5-4")} · {rollsToLimit(3)}
                  </>
                ),
              },
              {
                label: player(2),
                hand: "6-2",
                note: (
                  <>
                    {tHands("6-2")} · {tStrip("stopsOnRoll", { count: 1 })}
                  </>
                ),
              },
            ]}
          />
        }
      >
        {t.rich("others.example2", { ...tags, ...players })}
      </Example>
    </RuleSection>
  );
}

function Scoring() {
  const t = useTranslations("rules.scoring");
  return (
    <RuleSection id="scoring" number={6} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("mitchis", tags)}</p>
        <p>{t.rich("next", tags)}</p>
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
        <p>{t.rich("body", tags)}</p>
        <ul role="list" className="flex flex-col gap-3">
          {(["rule1", "rule2", "rule3", "rule4", "rule5"] as const).map(
            (key) => (
              <li
                key={key}
                className="relative pl-7 before:absolute before:top-2.5 before:left-0 before:size-1.5 before:bg-foreground"
              >
                {t.rich(key, tags)}
              </li>
            ),
          )}
        </ul>
        <p>{t.rich("outcome", tags)}</p>
        <p>{t.rich("again", tags)}</p>
      </RuleBody>
      <Example strip={<StageTable />}>{t.rich("example", tags)}</Example>
    </RuleSection>
  );
}

function Winning() {
  const t = useTranslations("rules.winning");
  return (
    <RuleSection id="winning" number={8} heading={t("heading")}>
      <RuleBody>
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("level", tags)}</p>
      </RuleBody>
    </RuleSection>
  );
}
