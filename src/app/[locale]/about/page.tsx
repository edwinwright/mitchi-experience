import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} />
      <Prose>
        <p>{t.rich("origin", tags)}</p>
        <p>{t.rich("reconstruction", tags)}</p>
        <p>{t.rich("speak", tags)}</p>
        <p>{t.rich("colophon", tags)}</p>
      </Prose>
    </Container>
  );
}
