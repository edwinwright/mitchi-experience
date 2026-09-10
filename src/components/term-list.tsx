import { Fragment } from "react";
import { useTranslations } from "next-intl";

export function TermList() {
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

  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm my-6">
      {items.map((item) => (
        <Fragment key={item.key}>
          <dt className="font-bold">{item.title}</dt>
          <dd>{item.value}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
