import { Fragment } from "react";
import { useTranslations } from "next-intl";
import {
  HAND_GROUPS,
  handsInGroup,
  type Hand,
  type HandGroup,
} from "@/data/hands";
import { MitchiHand } from "@/components/mitchi-hand";
import { cn } from "@/lib/utils";

type RankListProps = {
  variant?: "list" | "cards";
};

type RankItem = {
  key: HandGroup;
  name: string;
  description: string;
  best: Hand;
};

export function RankList({ variant = "list" }: RankListProps) {
  const tGroups = useTranslations("groups");
  const tHands = useTranslations("rules.hands");
  const items: RankItem[] = HAND_GROUPS.map((group) => ({
    key: group,
    name: tGroups(group),
    description: tHands(group),
    best: handsInGroup(group)[0]!,
  }));

  const Presentation = variant === "cards" ? RankCards : RankDefinitions;

  return <Presentation items={items} />;
}

function RankDefinitions({ items }: { items: RankItem[] }) {
  return (
    <dl className="my-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm">
      {items.map((item) => (
        <Fragment key={item.key}>
          <dt className="font-bold">{item.name}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

function RankCards({ items }: { items: RankItem[] }) {
  return (
    <ol className="grid grid-cols-1 gap-3 p-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.key}
          className={cn(
            "flex gap-3 rounded-lg px-4 py-3.5 md:flex-col md:px-4.5 md:py-5.5",
            item.key === "mitchi" ? "bg-red-600" : "border border-stone-800",
          )}
        >
          <GroupMark hand={item.best} />
          <div>
            <p className="text-lg font-bold">{item.name}</p>
            <p
              className={cn(
                "mt-1 font-serif text-sm",
                item.key === "mitchi" ? "text-white/85" : "text-stone-500",
              )}
            >
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function GroupMark({ hand }: { hand: Hand }) {
  return (
    <div aria-hidden="true" className="shrink-0">
      <div className="w-18 md:hidden">
        <MitchiHand high={hand.high} low={hand.low} variant="flat" size={30} />
      </div>
      <div className="hidden md:block">
        <MitchiHand high={hand.high} low={hand.low} variant="flat" size={38} />
      </div>
    </div>
  );
}
