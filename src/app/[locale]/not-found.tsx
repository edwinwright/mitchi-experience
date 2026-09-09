import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";

export default function NotFoundPage() {
  const t = useTranslations("notFound");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} />
      <Prose>
        <p>{t.rich("body", tags)}</p>
      </Prose>
    </Container>
  );
}
