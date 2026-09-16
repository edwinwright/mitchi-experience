import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type TermListProps = { className?: string };

export function TermList({ className }: TermListProps) {
  const t = useTranslations("terms");
  const items = [
    {
      key: "mitchi",
      title: t("mitchi.name"),
      value: t("mitchi.definition"),
    },
    {
      key: "hand",
      title: t("hand.name"),
      value: t("hand.definition"),
    },
    {
      key: "roll",
      title: t("roll.name"),
      value: t("roll.definition"),
    },
    {
      key: "rollLimit",
      title: t("rollLimit.name"),
      value: t("rollLimit.definition"),
    },
    {
      key: "worstHand",
      title: t("worstHand.name"),
      value: t("worstHand.definition"),
    },
    {
      key: "worstHandSoFar",
      title: t("worstHandSoFar.name"),
      value: t("worstHandSoFar.definition"),
    },
    {
      key: "pot",
      title: t("pot.name"),
      value: t("pot.definition"),
    },
    {
      key: "takeThePot",
      title: t("takeThePot.name"),
      value: t("takeThePot.definition"),
    },
    {
      key: "tieBreak",
      title: t("tieBreak.name"),
      value: t("tieBreak.definition"),
    },
    {
      key: "points",
      title: t("points.name"),
      value: t("points.definition"),
    },
    {
      key: "pointLimit",
      title: t("pointLimit.name"),
      value: t("pointLimit.definition"),
    },
  ];

  // One row per term at every width; label beside the definition from md.
  return (
    <dl className={cn("divide-y divide-border xl:max-w-prose", className)}>
      {items.map((item) => (
        <div
          key={item.key}
          className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 md:flex-row md:gap-4"
        >
          <dt className="text-base font-semibold md:w-38 md:shrink-0">
            {item.title}
          </dt>
          <dd className="font-serif text-lg leading-normal text-stone-900">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
