import { ReactNode } from "react";
import { handById, type HandId } from "@/data/hands";
import { MitchiHand } from "@/components/mitchi-hand";

export type StripRow = {
  label: string; // already translated by the caller: "Player 1"
  hand: HandId;
  note: ReactNode; // already translated; separators rendered by the caller
};

type ExampleStripProps = { rows: StripRow[] };

/*
 * The dice rows above an Example's prose: who rolled what, in turn order.
 * Decoration: the prose under it is the complete example and the accessible
 * copy, so the whole strip is aria-hidden. Kept as a list so the structure
 * is honest if that is ever reversed.
 */
export function ExampleStrip({ rows }: ExampleStripProps) {
  return (
    <ol role="list" aria-hidden="true" className="flex flex-col gap-3">
      {rows.map((row, index) => {
        const hand = handById(row.hand);
        return (
          <li key={index} className="flex items-center gap-3 md:gap-4">
            <span className="w-20 shrink-0 font-mono text-xs font-medium">
              {row.label}
            </span>
            <span className="shrink-0">
              <MitchiHand
                high={hand.high}
                low={hand.low}
                size={28}
                className="md:hidden"
              />
              <MitchiHand
                high={hand.high}
                low={hand.low}
                size={32}
                className="hidden md:inline-flex"
              />
            </span>
            <span className="font-mono text-xs text-stone-600 md:text-sm">
              {row.note}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
