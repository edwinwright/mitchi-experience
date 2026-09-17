import { useTranslations } from "next-intl";

const th = "px-3 py-3 text-left text-sm leading-snug font-bold md:px-4";
const countCell = "px-3 py-3 font-serif text-base text-stone-900 md:px-4";
const pointsCell =
  "px-3 py-3 text-right font-mono text-sm font-medium tabular-nums md:px-4";

/*
 * Points per round: how many Mitchis were rolled, and what that puts in the
 * pot. Rendered on /rules and /reference. The pot values are data, not copy:
 * 1 to start, 2 for the first Mitchi, 2 more for each after. Four rows so the
 * column does not read as doubling.
 */
const ROWS = [
  { count: "none", points: 1 },
  { count: "one", points: 2 },
  { count: "two", points: 4 },
  { count: "three", points: 6 },
] as const;

export function ScoringTable() {
  const t = useTranslations("potTable");
  return (
    <div className="overflow-hidden rounded-lg border border-border xl:max-w-xl">
      <table className="w-full border-collapse">
        <thead className="bg-stone-100">
          <tr className="divide-x divide-border">
            <th scope="col" className={th}>
              {t("mitchisHeader")}
            </th>
            <th scope="col" className={`${th} w-30 text-right md:w-40`}>
              {t("pointsHeader")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {ROWS.map((row) => (
            <tr key={row.count} className="divide-x divide-border">
              <td className={countCell}>{t(row.count)}</td>
              <td className={pointsCell}>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
