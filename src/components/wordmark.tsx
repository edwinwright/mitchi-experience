import { MitchiHand } from "@/components/mitchi-hand";
import { cn } from "@/lib/utils";

/**
 * The Mitchi lockup. Brand sheet v2, sections 01-02.
 *
 *   die         0.662 x type size
 *   cap height  0.720 x type size, which is the die plus its offset
 *   gap         0.260 x type size, dice to type
 *
 * The dice box is exactly the cap height, so a baseline-aligned row puts the
 * die top on the cap line and the offset bottom on the baseline without
 * trimming the text box.
 */

const DIE = 0.68;
const GAP = 0.25;

export type WordmarkProps = {
  /** Type size in px. The dice derive from it. Default 34, the header desktop size. */
  size?: number;
  /** Dark grounds: white type, coloured offsets, no visible outline. */
  inverse?: boolean;
  className?: string;
};

export function Wordmark({
  size = 34,
  inverse = false,
  className,
}: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-wordmark leading-none",
        inverse && "text-white",
        className,
      )}
      style={{ fontSize: size, gap: size * GAP }}
    >
      <MitchiHand
        high={2}
        low={1}
        size={size * DIE}
        variant="offset"
        inverse={inverse}
      />
      <span>MiTCHi</span>
    </span>
  );
}
