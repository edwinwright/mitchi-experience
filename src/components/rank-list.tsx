import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { HAND_GROUPS } from "@/data/hands";

export function RankList() {
  const tGroups = useTranslations("groups");
  const tHands = useTranslations("rules.hands");
  const groups = HAND_GROUPS.map((group) => ({
    key: group,
    name: tGroups(group),
    description: tHands(group),
  }));

  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm my-6">
      {groups.map((group) => (
        <Fragment key={group.key}>
          <dt className="font-bold">{group.name}</dt>
          <dd>{group.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
