import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/layout/container";
import { SpeakTable } from "@/components/speak-table";
import { Prose } from "@/components/prose";
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
    <>
      <PageHeader title={t("title")} standfirst={t("standfirst")} />
      <Container className="py-8">
        <div className="py-6">
          <SpeakTable />
        </div>
        <hr className="border-border" />
        <Prose className="pt-6">
          <p>{t("footnote")}</p>
        </Prose>
      </Container>
    </>
  );
}
