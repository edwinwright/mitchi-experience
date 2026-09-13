import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { SpeakTable } from "@/components/speak-table";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "speak");
}

export default function SpeakPage() {
  const t = useTranslations("speak");
  return (
    <Container className="py-8">
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <hr />
      <SpeakTable />
      <hr />
      <p>{t("footnote")}</p>
    </Container>
  );
}
