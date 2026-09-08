import { useTranslations } from "next-intl";
import { rankedGroups } from "@/data/hands";

export function HandTable() {
  const tRanking = useTranslations("reference.ranking");
  const tGroups = useTranslations("groups");
  const tHands = useTranslations("hands");
  const groups = rankedGroups();

  return (
    <>
      <h2 className="text-xl font-bold mb-6">{tRanking("heading")}</h2>
      <table>
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
                  <th scope="rowgroup" rowSpan={group.hands.length}>
                    {tGroups(group.group)}
                  </th>
                )}
                <td>
                  {hand.high} - {hand.low}
                </td>
                <td>{tHands(hand.id)}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </>
  );
}
