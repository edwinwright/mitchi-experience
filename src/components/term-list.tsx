import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

// In the order they are published, which is the order a new player meets them.
const TERMS = [
  "mitchi",
  "die",
  "hand",
  "roll",
  "rolledIn",
  "round",
  "turn",
  "startingPlayer",
  "rollLimit",
  "doubles",
  "worstHandSoFar",
  "pot",
  "takeThePot",
  "tieBreak",
  "points",
  "pointLimit",
] as const;

type TermListProps = { className?: string };

export function TermList({ className }: TermListProps) {
  const t = useTranslations("vocabulary");

  // One row per term at every width; label beside the definition from md.
  return (
    <dl className={cn("divide-y divide-border xl:max-w-prose", className)}>
      {TERMS.map((key) => (
        <div
          key={key}
          className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 md:flex-row md:gap-4"
        >
          <dt className="text-base font-semibold md:w-38 md:shrink-0">
            {t(`${key}.name`)}
          </dt>
          <dd className="font-serif text-lg leading-normal text-stone-900">
            {t(`${key}.definition`)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
