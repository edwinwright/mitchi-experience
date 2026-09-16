import { useTranslations } from "next-intl";
import { speakHands } from "@/data/speak";
import { MitchiHand } from "@/components/mitchi-hand";
import { cn } from "@/lib/utils";

type SpeakTableProps = {
  /**
   * card: white card with a linen header row (/speak).
   * rows: hairlines only, header row present but visually hidden (/terminology).
   */
  frame?: "card" | "rows";
  /** id of the heading that names the table; there is no caption. */
  "aria-labelledby": string;
};

/*
 * The four Mitchi Speak names against the hands they stand for. Rows are
 * data (speakHands); the official name is a message, the Speak name a
 * proper noun rendered lang="en" translate="no". The Mitchi row is red on
 * the same test RankList uses.
 *
 * In the rows frame the header cells stay in flow with their text in an
 * sr-only span: sr-only on the th itself pulls it out of table layout and
 * Chrome can drop the column headers from the accessibility tree.
 */
export function SpeakTable({
  frame = "card",
  "aria-labelledby": labelledBy,
}: SpeakTableProps) {
  const tSpeak = useTranslations("speak");
  const tHands = useTranslations("hands");
  const card = frame === "card";

  const th = card
    ? "px-3 py-3 text-left text-sm leading-snug font-bold md:px-5 xl:px-6"
    : "p-0";
  const cell = card ? "px-3 py-4 md:px-5 xl:px-6 xl:py-5" : "py-4 xl:py-5";

  const table = (
    <table aria-labelledby={labelledBy} className="w-full border-collapse">
      <thead className={cn(card && "bg-stone-100")}>
        <tr className={cn(card && "divide-x divide-border border-b border-border")}>
          <th scope="col" className={cn(th, !card && "md:w-54 xl:w-75")}>
            {card ? (
              tSpeak("officialHeader")
            ) : (
              <span className="sr-only">{tSpeak("officialHeader")}</span>
            )}
          </th>
          <th scope="col" className={th}>
            {card ? (
              tSpeak("speakHeader")
            ) : (
              <span className="sr-only">{tSpeak("speakHeader")}</span>
            )}
          </th>
        </tr>
      </thead>
      <tbody
        className={cn("divide-y divide-border", !card && "border-y border-border")}
      >
        {speakHands().map(({ hand, name }) => (
          <tr key={hand.id} className={cn(card && "divide-x divide-border")}>
            <td className={cn(cell, "align-middle", !card && "pr-4")}>
              <span className="flex items-center gap-3 xl:gap-4">
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
                <span
                  className={cn(
                    "font-mono text-sm",
                    card ? "text-stone-900" : "text-stone-600",
                  )}
                >
                  {tHands(hand.id)}
                </span>
              </span>
            </td>
            <td
              lang="en"
              translate="no"
              className={cn(
                cell,
                "align-middle text-2xl font-bold tracking-tight xl:text-3xl",
                hand.group === "mitchi" && "text-red-600",
              )}
            >
              {name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return card ? (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      {table}
    </div>
  ) : (
    table
  );
}
