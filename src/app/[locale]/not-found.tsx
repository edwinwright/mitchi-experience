import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";
import { Heading } from "@/components/heading";

export default function NotFoundPage() {
  const t = useTranslations("notFound");
  return (
    <Container className="py-8 flex flex-col items-center justify-center">
      <Heading level={1} className="mb-4 text-3xl">
        {t("title")}
      </Heading>
      <Prose>
        <p>{t.rich("body", tags)}</p>
      </Prose>
    </Container>
  );
}
