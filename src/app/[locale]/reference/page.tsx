import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";

export default function ReferencePage() {
  const t = useTranslations("reference");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
    </Container>
  );
}
