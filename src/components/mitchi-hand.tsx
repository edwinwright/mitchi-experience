import { MitchiDie, type DieFace, type DieVariant } from "@/components/mitchi-die";

/**
 * A hand: two dice, high die first, on the system gap of 0.19 x the die.
 * Hands are data; the name of a hand is a message, never composed here.
 */
export type MitchiHandProps = {
  high: DieFace;
  low: DieFace;
  size?: number;
  variant?: DieVariant;
  inverse?: boolean;
  /** Accessible name for the whole hand, e.g. t("hands.mitchi"). */
  label?: string;
  className?: string;
};

export function MitchiHand({
  high,
  low,
  size = 38,
  variant = "flat",
  inverse = false,
  label,
  className,
}: MitchiHandProps) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "flex-start", gap: size * 0.19 }}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <MitchiDie face={high} size={size} variant={variant} inverse={inverse} />
      <MitchiDie face={low} size={size} variant={variant} inverse={inverse} />
    </span>
  );
}
