import { useTranslations } from "next-intl";
import { rankedGroups } from "@/data/hands";
import { SectionHeading } from "./section-heading";
import { MitchiHand } from "./mitchi-hand";

export function HandTable() {
  const tRanking = useTranslations("reference.ranking");
  const tGroups = useTranslations("groups");
  const tHands = useTranslations("hands");
  const groups = rankedGroups();

  return (
    <>
      <SectionHeading>{tRanking("heading")}</SectionHeading>
      <div className="overflow-x-auto">
        <table className="data-table">
          <caption>{tRanking("caption")}</caption>
          <thead>
            <tr>
              <th scope="col">{tRanking("groupHeader")}</th>
              <th scope="col">{tRanking("diceHeader")}</th>
              <th scope="col">{tRanking("handHeader")}</th>
            </tr>
          </thead>
          {groups.map((group) => (
            <tbody key={group.group}>
              {group.hands.map((hand, i) => (
                <tr key={hand.id}>
                  {i === 0 && (
                    <th
                      scope="rowgroup"
                      rowSpan={group.hands.length}
                      className="align-top"
                    >
                      {tGroups(group.group)}
                    </th>
                  )}
                  <td>
                    <MitchiHand high={hand.high} low={hand.low} />
                  </td>
                  <td>{tHands(hand.id)}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
