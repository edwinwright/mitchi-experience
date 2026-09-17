import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { RankList } from "@/components/rank-list";
import { tags } from "@/i18n/rich-text";
import { Heading } from "./heading";

export function HomeRanking() {
  const t = useTranslations("home.ranking");

  return (
    <section className="bg-foreground text-white">
      <Container className="flex flex-col gap-6 py-10 md:gap-11 md:py-20">
        <header className="flex flex-col gap-3.5">
          <Heading level={2} className="text-3xl md:text-5xl">
            {t("heading")}
          </Heading>
        </header>

        <RankList variant="cards" />

        <p className="font-semibold text-blue-500 [&_a]:text-blue-500 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-red-500">
          {t.rich("allHandsLink", tags)}
        </p>
      </Container>
    </section>
  );
}
