import { useTranslations } from "next-intl";

type Row = {
  what: "tied" | "potDoubles" | "mitchi" | "tiedAgain" | "takesPot";
  calculation?: string;
  pot: number;
};

type Phase = {
  key: string;
  label: { key: "round" } | { key: "tieBreak"; n: number };
  rows: Row[];
};

/*
 * The worked tie-break example: a running pot through a round and two
 * tie-breaks. One tbody per phase, each opened by a full-width group row,
 * so a screen reader hears the phase before its rows without rowspan. The
 * calculations and pot values are data, the same in every locale.
 */
const PHASES: Phase[] = [
  { key: "round", label: { key: "round" }, rows: [{ what: "tied", pot: 1 }] },
  {
    key: "tie-break-1",
    label: { key: "tieBreak", n: 1 },
    rows: [
      { what: "potDoubles", calculation: "1 × 2", pot: 2 },
      { what: "mitchi", calculation: "2 + 2", pot: 4 },
      { what: "tiedAgain", pot: 4 },
    ],
  },
  {
    key: "tie-break-2",
    label: { key: "tieBreak", n: 2 },
    rows: [
      { what: "potDoubles", calculation: "4 × 2", pot: 8 },
      { what: "takesPot", pot: 8 },
    ],
  },
];

const th =
  "pb-2 text-left font-mono text-xs tracking-widest text-stone-600 uppercase";
const numeric = "text-right font-mono tabular-nums";

export function TieBreakExampleTable() {
  const t = useTranslations("rules.tieBreaks.example");
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th scope="col" className={th}>
            {t("whatHappensHeader")}
          </th>
          <th scope="col" className={`${th} ${numeric} w-20 md:w-24`}>
            {t("calculationHeader")}
          </th>
          <th scope="col" className={`${th} ${numeric} w-12 md:w-16`}>
            {t("potHeader")}
          </th>
        </tr>
      </thead>
      {PHASES.map((phase) => (
        <tbody key={phase.key} className="divide-y divide-border">
          <tr className="border-b border-border">
            <th
              colSpan={3}
              scope="rowgroup"
              className="pt-4 pb-2 text-left font-mono text-xs font-medium md:text-sm"
            >
              {phase.label.key === "round"
                ? t("round")
                : t("tieBreak", { n: phase.label.n })}
            </th>
          </tr>
          {phase.rows.map((row, index) => (
            <tr key={index}>
              <td className="py-3 pr-4 font-serif text-base leading-snug text-stone-900">
                {t(row.what)}
              </td>
              <td className={`${numeric} py-3 pr-4 text-sm text-stone-600`}>
                {row.calculation}
              </td>
              <td className={`${numeric} py-3 text-lg font-medium md:text-xl`}>
                {row.pot}
              </td>
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}
