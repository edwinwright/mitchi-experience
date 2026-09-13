import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";
import { CtaLink } from "@/components/cta-link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "home");
}

export default function HomePage() {
  const t = useTranslations("home");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("tagline")} />
      <Prose>
        <p>{t.rich("twist", tags)}</p>
        <p>{t.rich("scoring", tags)}</p>
        <p>{t.rich("need", tags)}</p>
      </Prose>
      <div className="my-4 flex gap-4">
        <CtaLink href="/rules">{t("cta.rules")}</CtaLink>
        <CtaLink href="/reference">{t("cta.reference")}</CtaLink>
      </div>
      <Prose>
        <p>{t.rich("provenance", tags)}</p>
      </Prose>
    </Container>
  );
}
