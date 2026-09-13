import { useTranslations } from "next-intl";
import { rankedGroups } from "@/data/hands";
import { MitchiHand } from "./mitchi-hand";

export function HandTable() {
  const tRanking = useTranslations("reference.ranking");
  const tGroups = useTranslations("groups");
  const tHands = useTranslations("hands");
  const groups = rankedGroups();

  return (
    <>
      <h2 className="text-xl font-bold mb-6">{tRanking("heading")}</h2>
      <div className="overflow-x-auto">
        <table className="border-collapse border border-border">
          <caption>{tRanking("caption")}</caption>
          <thead>
            <tr>
              <th scope="col" className="px-3 py-2 text-left">
                {tRanking("groupHeader")}
              </th>
              <th scope="col" className="px-3 py-2 text-left">
                {tRanking("diceHeader")}
              </th>
              <th scope="col" className="px-3 py-2 text-left">
                {tRanking("handHeader")}
              </th>
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
                      className="px-3 py-2 align-top text-left"
                    >
                      {tGroups(group.group)}
                    </th>
                  )}
                  <td className="px-3 py-2">
                    <MitchiHand high={hand.high} low={hand.low} />
                  </td>
                  <td className="px-3 py-2">{tHands(hand.id)}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
