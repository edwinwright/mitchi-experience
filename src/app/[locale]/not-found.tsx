import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";

export default function NotFoundPage() {
  const t = useTranslations("notFound");
  return (
    <>
      <PageHeader title={t("title")} />
      <Container className="py-8">
        <Prose>
          <p>{t.rich("body", tags)}</p>
        </Prose>
      </Container>
    </>
  );
}
