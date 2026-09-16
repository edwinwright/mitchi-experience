import { useTranslations } from "next-intl";

const th =
  "px-3 py-3 text-left text-sm leading-snug font-bold md:px-4";
const countCell = "px-3 py-3 font-mono text-sm font-medium md:px-4";
const pointsCell = "px-3 py-3 font-serif text-base text-stone-900 md:px-4";

/*
 * Points per round: how many Mitchis were rolled, and what that puts in the
 * pot. Rendered on /rules and /reference. The count is data, not copy.
 */
export function ScoringTable() {
  const t = useTranslations("reference.scoring");
  const rows = [
    { count: 0, points: t("noneValue") },
    { count: 1, points: t("oneValue") },
    { count: 2, points: t("twoValue") },
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-border xl:max-w-xl">
      <table className="w-full border-collapse">
        <thead className="bg-stone-100">
          <tr className="divide-x divide-border">
            <th scope="col" className={`${th} w-30 md:w-40`}>
              {t("roundHeader")}
            </th>
            <th scope="col" className={th}>
              {t("potHeader")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.count} className="divide-x divide-border">
              <td className={countCell}>{row.count}</td>
              <td className={pointsCell}>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
