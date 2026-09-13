import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { TermList } from "@/components/term-list";
import { StepList } from "@/components/step-list";
import { RankList } from "@/components/rank-list";
import { Example } from "@/components/example";
import { OnThisPage } from "@/components/on-this-page";
import { ScoringTable } from "@/components/scoring-table";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";

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

  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <hr />
      <OnThisPage
        items={[
          { id: "quick-start", title: t("quickStart.heading") },
          { id: "overview", title: t("overview.heading") },
          { id: "what-you-need", title: t("need.heading") },
          { id: "setup", title: t("setup.heading") },
          { id: "hands", title: t("hands.heading") },
          { id: "round", title: t("round.heading") },
          { id: "scoring", title: t("scoring.heading") },
          { id: "tie-breaks", title: t("tieBreaks.heading") },
          { id: "winning", title: t("winning.heading") },
          { id: "terms", title: t("terms.heading") },
        ]}
      />
      <hr />
      <QuickStart />
      <hr />
      <Overview />
      <hr />
      <WhatYouNeed />
      <hr />
      <Setup />
      <hr />
      <Hands />
      <hr />
      <Round />
      <hr />
      <Scoring />
      <hr />
      <TieBreaks />
      <hr />
      <Winning />
      <hr />
      <Terms />
    </Container>
  );
}

function QuickStart() {
  const t = useTranslations("rules.quickStart");
  const items = [
    t.rich("step1", tags),
    t.rich("step2", tags),
    t.rich("step3", tags),
    t.rich("step4", tags),
    t.rich("step5", tags),
    t.rich("step6", tags),
  ];

  return (
    <div id="quick-start" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <StepList items={items} />
      <p>{t("footnote")}</p>
    </div>
  );
}

function Overview() {
  const t = useTranslations("rules.overview");
  return (
    <div id="overview" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <p>{t("body")}</p>
      <p>{t("objective")}</p>
    </div>
  );
}

function WhatYouNeed() {
  const t = useTranslations("rules.need");
  return (
    <div id="what-you-need" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <ul>
        <li>{t("dice")}</li>
        <li>{t("paper")}</li>
        <li>{t("players")}</li>
      </ul>
    </div>
  );
}

function Setup() {
  const t = useTranslations("rules.setup");
  return (
    <div id="setup" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <StepList items={[t("step1"), t("step2"), t("step3")]} />
    </div>
  );
}

function Hands() {
  const t = useTranslations("rules.hands");
  return (
    <div id="hands" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <p>{t("intro")}</p>
      <RankList />
      <p>{t("withinGroup")}</p>
      <p>{t.rich("onward", tags)}</p>
    </div>
  );
}

function Round() {
  const t = useTranslations("rules.round");
  return (
    <div id="round" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <h3 className="text-lg font-bold mb-4">{t("rollLimit.heading")}</h3>
      <Prose>
        <p>{t.rich("rollLimit.body", tags)}</p>
        <p>{t.rich("rollLimit.choices", tags)}</p>
        <p>{t.rich("rollLimit.fresh", tags)}</p>
        <p>{t.rich("rollLimit.sets", tags)}</p>
      </Prose>
      <Example>{t.rich("rollLimit.example", tags)}</Example>
      <h3 className="text-lg font-bold mb-4">{t("others.heading")}</h3>
      <Prose>
        <p>{t.rich("others.body", tags)}</p>
        <p>{t.rich("others.beat", tags)}</p>
      </Prose>
      <Example>
        {t.rich("others.example1", {
          ...tags,
          a: "A",
          b: "B",
          c: "C",
        })}
      </Example>
      <Example>
        {t.rich("others.example2", {
          ...tags,
          a: "A",
          b: "B",
          c: "C",
        })}
      </Example>
    </div>
  );
}

function Scoring() {
  const t = useTranslations("rules.scoring");
  return (
    <div id="scoring" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <Prose>
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("mitchis", tags)}</p>
        <p>{t.rich("next", tags)}</p>
      </Prose>
      <ScoringTable />
    </div>
  );
}

function TieBreaks() {
  const t = useTranslations("rules.tieBreaks");
  return (
    <div id="tie-breaks" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <Prose>
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("rule1", tags)}</p>
        <p>{t.rich("rule2", tags)}</p>
        <p>{t.rich("rule3", tags)}</p>
        <p>{t.rich("rule4", tags)}</p>
        <p>{t.rich("rule5", tags)}</p>
        <p>{t.rich("outcome", tags)}</p>
        <p>{t.rich("again", tags)}</p>
        <Example>{t.rich("example", tags)}</Example>
      </Prose>
    </div>
  );
}

function Winning() {
  const t = useTranslations("rules.winning");
  return (
    <div id="winning" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <Prose>
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("level", tags)}</p>
      </Prose>
    </div>
  );
}

function Terms() {
  const t = useTranslations("rules.terms");
  return (
    <div id="terms" className="py-6">
      <h2 className="text-xl font-bold mb-6">{t("heading")}</h2>
      <TermList />
    </div>
  );
}
