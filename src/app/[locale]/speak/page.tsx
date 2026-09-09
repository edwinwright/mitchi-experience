import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { SpeakTable } from "@/components/speak-table";

export default function SpeakPage() {
  const t = useTranslations("speak");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <hr />
      <SpeakTable />
      <hr />
      <p>{t("footnote")}</p>
    </Container>
  );
}
