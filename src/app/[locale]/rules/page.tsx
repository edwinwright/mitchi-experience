import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";

export default function RulesPage() {
  const t = useTranslations("rules");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
    </Container>
  );
}
