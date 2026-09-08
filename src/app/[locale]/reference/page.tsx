import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { HandTable } from "@/components/hand-table";
import { ScoringTable } from "@/components/scoring-table";

export default function ReferencePage() {
  const t = useTranslations("reference");
  const tTieBreaks = useTranslations("reference.tieBreaks");
  const tEnding = useTranslations("reference.ending");

  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <hr />
      <HandTable />
      <hr />
      <ScoringTable />
      <hr />
      <h2 className="text-xl font-bold mb-6">{tTieBreaks("heading")}</h2>
      <ul className="list-disc list-inside">
        <li>{tTieBreaks("rule1")}</li>
        <li>{tTieBreaks("rule2")}</li>
        <li>{tTieBreaks("rule3")}</li>
        <li>{tTieBreaks("rule4")}</li>
        <li>{tTieBreaks("rule5")}</li>
        <li>{tTieBreaks("rule6")}</li>
      </ul>
      <hr />
      <h2 className="text-xl font-bold mb-6">{tEnding("heading")}</h2>
      <p>{tEnding("body")}</p>
    </Container>
  );
}
