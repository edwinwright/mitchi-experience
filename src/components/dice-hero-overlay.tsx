import { MitchiDie } from "@/components/mitchi-die";
import { cn } from "@/lib/utils";

type DiceHeroOverlayProps = {
  size: number;
  className?: string;
};

export function DiceHeroOverlay({ size, className }: DiceHeroOverlayProps) {
  return (
    <div
      className={cn("pointer-events-none flex", className)}
      style={{ gap: size * 0.2 }}
    >
      <span className="motion-safe:animate-mitchi-float-b">
        <MitchiDie face={2} size={size} variant="block" />
      </span>
      <span className="motion-safe:animate-mitchi-float">
        <MitchiDie face={1} size={size} variant="block" />
      </span>
    </div>
  );
}
