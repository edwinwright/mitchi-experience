import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/layout/container";
import { StepList } from "@/components/step-list";
import { RankList } from "@/components/rank-list";
import { Example } from "@/components/example";
import { OnThisPage } from "@/components/on-this-page";
import { ScoringTable } from "@/components/scoring-table";
import { Prose } from "@/components/prose";
import { Link } from "@/i18n/navigation";
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
      <OnThisPage
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
      <hr className="border-border" />
      <Overview />
      <hr className="border-border" />
      <WhatYouNeed />
      <hr className="border-border" />
      <Setup />
      <hr className="border-border" />
      <Hands />
      <hr className="border-border" />
      <Round />
      <hr className="border-border" />
      <Scoring />
      <hr className="border-border" />
      <TieBreaks />
      <hr className="border-border" />
      <Winning />
      <Onward />
    </Container>
  );
}

function Overview() {
  const t = useTranslations("rules.overview");
  return (
    <div id="overview" className="py-6">
      <SectionHeading>{t("heading")}</SectionHeading>
      <Prose>
        <p>{t("body")}</p>
        <p>{t("objective")}</p>
      </Prose>
    </div>
  );
}

function WhatYouNeed() {
  const t = useTranslations("rules.need");
  return (
    <div id="what-you-need" className="py-6">
      <SectionHeading>{t("heading")}</SectionHeading>
      <Prose>
        <ul>
          <li>{t("dice")}</li>
          <li>{t("paper")}</li>
          <li>{t("players")}</li>
        </ul>
      </Prose>
    </div>
  );
}

function Setup() {
  const t = useTranslations("rules.setup");
  return (
    <div id="setup" className="py-6">
      <SectionHeading>{t("heading")}</SectionHeading>
      <Prose>
        <StepList items={[t("step1"), t("step2"), t("step3")]} />
      </Prose>
    </div>
  );
}

function Hands() {
  const t = useTranslations("rules.hands");
  return (
    <div id="hands" className="py-6">
      <SectionHeading>{t("heading")}</SectionHeading>
      <Prose>
        <p>{t("intro")}</p>
      </Prose>
      <RankList />
      <Prose>
        <p>{t("withinGroup")}</p>
        <p>{t.rich("onward", tags)}</p>
      </Prose>
    </div>
  );
}

function Round() {
  const t = useTranslations("rules.round");
  return (
    <div id="round" className="py-6">
      <SectionHeading>{t("heading")}</SectionHeading>
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
      <SectionHeading>{t("heading")}</SectionHeading>
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
      <SectionHeading>{t("heading")}</SectionHeading>
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
      <SectionHeading>{t("heading")}</SectionHeading>
      <Prose>
        <p>{t.rich("body", tags)}</p>
        <p>{t.rich("level", tags)}</p>
      </Prose>
    </div>
  );
}

function Onward() {
  const t = useTranslations("nav.onward");
  return (
    <p className="pt-8">
      <Link
        href="/reference"
        className="focus-ring font-semibold text-blue-600 underline underline-offset-4 hover:text-red-600"
      >
        {t("reference")}
      </Link>
    </p>
  );
}
