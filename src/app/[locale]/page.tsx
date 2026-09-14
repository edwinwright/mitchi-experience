import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { tags } from "@/i18n/rich-text";
import { pageMetadata } from "@/i18n/metadata";
import { HomeHero } from "@/components/home-hero";
import { HomeQuickStart } from "@/components/home-quick-start";

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
    <>
      <HomeHero />
      <HomeQuickStart />
      <Container className="py-8">
        <Prose>
          <p>{t.rich("provenance", tags)}</p>
        </Prose>
      </Container>
    </>
  );
}
