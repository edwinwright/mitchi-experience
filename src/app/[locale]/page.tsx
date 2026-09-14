import { Metadata } from "next";
import { pageMetadata } from "@/i18n/metadata";
import { HomeHero } from "@/components/home-hero";
import { HomeQuickStart } from "@/components/home-quick-start";
import { HomeRanking } from "@/components/home-ranking";
import { HomeProvenance } from "@/components/home-provenance";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "home");
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeQuickStart />
      <HomeRanking />
      <HomeProvenance />
    </>
  );
}
