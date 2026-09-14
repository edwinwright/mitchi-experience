import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/layout/container";
import { OnThisPage } from "@/components/on-this-page";
import { HandTable } from "@/components/hand-table";
import { ScoringTable } from "@/components/scoring-table";
import { TermList } from "@/components/term-list";
import { Prose } from "@/components/prose";
import { Link } from "@/i18n/navigation";
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
  const tTieBreaks = useTranslations("reference.tieBreaks");
  const tEnding = useTranslations("reference.ending");
  const tTerms = useTranslations("rules.terms");

  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <OnThisPage
        items={[
          { id: "ranking", title: tRanking("heading") },
          { id: "scoring", title: tScoring("heading") },
          { id: "tie-breaks", title: tTieBreaks("heading") },
          { id: "ending", title: tEnding("heading") },
          { id: "terms", title: tTerms("heading") },
        ]}
      />
      <hr className="border-border" />
      <div id="ranking" className="py-6">
        <HandTable />
      </div>
      <hr className="border-border" />
      <div id="scoring" className="py-6">
        <SectionHeading>{tScoring("heading")}</SectionHeading>
        <Prose>
          <p>{tScoring("note")}</p>
        </Prose>
        <ScoringTable />
      </div>
      <hr className="border-border" />
      <div id="tie-breaks" className="py-6">
        <SectionHeading>{tTieBreaks("heading")}</SectionHeading>
        <Prose>
          <ul>
            <li>{tTieBreaks("rule1")}</li>
            <li>{tTieBreaks("rule2")}</li>
            <li>{tTieBreaks("rule3")}</li>
            <li>{tTieBreaks("rule4")}</li>
            <li>{tTieBreaks("rule5")}</li>
            <li>{tTieBreaks("rule6")}</li>
          </ul>
        </Prose>
      </div>
      <hr className="border-border" />
      <div id="ending" className="py-6">
        <SectionHeading>{tEnding("heading")}</SectionHeading>
        <Prose>
          <p>{tEnding("body")}</p>
        </Prose>
      </div>
      <hr className="border-border" />
      <div id="terms" className="py-6">
        <SectionHeading>{tTerms("heading")}</SectionHeading>
        <TermList />
      </div>
      <Onward />
    </Container>
  );
}

function Onward() {
  const t = useTranslations("nav.onward");
  return (
    <p className="pt-8">
      <Link
        href="/rules"
        className="focus-ring font-semibold text-blue-600 underline underline-offset-4 hover:text-red-600"
      >
        {t("rules")}
      </Link>
    </p>
  );
}
