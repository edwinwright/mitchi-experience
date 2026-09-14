import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { RankList } from "@/components/rank-list";
import { tags } from "@/i18n/rich-text";

export function HomeRanking() {
  const tRanking = useTranslations("reference.ranking");
  const tHands = useTranslations("rules.hands");

  return (
    <section className="bg-foreground text-white">
      <Container className="flex flex-col gap-6 py-10 md:gap-11 md:py-20">
        <header className="flex flex-col gap-3.5">
          <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.03em] md:text-[46px] md:leading-none">
            {tRanking("heading")}
          </h2>
          <p className="font-mono text-xs tracking-[0.16em] text-stone-500 uppercase">
            {tRanking("caption")}
          </p>
        </header>

        <RankList variant="cards" />

        <p className="font-semibold text-blue-500 [&_a]:text-blue-500 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-red-500">
          {tHands.rich("onward", tags)}
        </p>
      </Container>
    </section>
  );
}
