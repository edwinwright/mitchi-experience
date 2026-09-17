import { useTranslations } from "next-intl";
import { TwoColumnTable } from "@/components/two-column-table";

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
    <TwoColumnTable
      leftHeader={t("mitchisHeader")}
      rightHeader={t("pointsHeader")}
      rows={ROWS.map((row) => ({
        key: row.count,
        left: t(row.count),
        right: row.points,
      }))}
    />
  );
}
