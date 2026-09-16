import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "about");
}

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <>
      <PageHeader
        title={t("title")}
        eyebrow={t("topics")}
        standfirst={t("standfirst")}
      />
      <Container className="py-8">
        <Prose>
          <p>{t.rich("origin", tags)}</p>
          <p>{t.rich("reconstruction", tags)}</p>
          <p>{t.rich("speak", tags)}</p>
          <p>{t.rich("colophon", tags)}</p>
        </Prose>
      </Container>
    </>
  );
}
