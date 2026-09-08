import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} />
    </Container>
  );
}
