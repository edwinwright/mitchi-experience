import { useTranslations } from "next-intl";
import { HANDS, rankedGroups, type Hand } from "@/data/hands";
import { Heading } from "@/components/heading";
import { MitchiHand } from "@/components/mitchi-hand";
import { cn, twoDigit } from "@/lib/utils";

/*
 * All 21 hands in rank order, grouped, for /reference. Six groups in two
 * columns from md, one at base. Rank numbers and group ranges are computed
 * from HANDS order and rendered aria-hidden; each group's list is labelled
 * by its heading, so the ranking reads as six named lists.
 *
 * Distinct from RankList, which shows one best hand per group.
 */
export function RankingCard() {
  const tRanking = useTranslations("reference.ranking");
  const tGroups = useTranslations("handGroups");
  const tHands = useTranslations("hands");

  // HANDS is in rank order, so a hand's rank is its position in it.
  const rankOf = (hand: Hand) => HANDS.indexOf(hand) + 1;
  const groups = rankedGroups().map(({ group, hands }) => {
    return {
      group,
      hands,
    };
  });
  const columns = [groups.slice(0, 3), groups.slice(3)];

  return (
    <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">
      <p className="font-serif text-lg leading-normal text-stone-600">
        {tRanking("tableCaption")}
      </p>
      <div className="rounded-xl border border-border bg-white p-4 md:grid md:grid-cols-2 md:gap-x-6 md:p-5 xl:gap-x-8 xl:p-6">
        {columns.map((column, c) => (
          <div
            key={c}
            className={cn(
              "flex flex-col gap-5 xl:gap-6",
              c === 0 && "md:border-r md:border-border md:pr-6 xl:pr-8",
              c === 1 && "pt-5 max-md:border-t max-md:border-border md:pt-0",
            )}
          >
            {column.map(({ group, hands }) => (
              <div key={group} className="flex flex-col gap-2.5">
                {/* Inset by the rank column + gap so the name sits over the dice. */}
                <div className="flex items-baseline justify-between gap-3 border-b border-foreground pb-2 pl-8">
                  <Heading
                    level={3}
                    id={`group-${group}`}
                    className="text-base xl:text-lg"
                  >
                    {tGroups(`${group}.name`)}
                  </Heading>
                </div>
                <ol
                  role="list"
                  aria-labelledby={`group-${group}`}
                  className="flex flex-col gap-2"
                >
                  {hands.map((hand) => (
                    <li key={hand.id} className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="w-5 shrink-0 font-mono text-xs text-stone-600"
                      >
                        {twoDigit(rankOf(hand))}
                      </span>
                      <MitchiHand
                        high={hand.high}
                        low={hand.low}
                        size={26}
                        className="xl:hidden"
                      />
                      <MitchiHand
                        high={hand.high}
                        low={hand.low}
                        size={30}
                        className="hidden xl:inline-flex"
                      />
                      <span className="font-mono text-xs xl:text-sm">
                        {tHands(hand.id)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
