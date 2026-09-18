import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

// type Calculation = { a: number; op: "×" | "+"; b: number };

type Row = {
  what: "tied" | "potDoubles" | "mitchi" | "tiedAgain" | "takesPot";
  calculation?: string;
  pot: number;
};

type Phase = {
  key: string;
  label: "round" | "tieBreak1" | "tieBreak2";
  rows: Row[];
};

/*
 * The worked tie-break example: a running pot through a round and two
 * tie-breaks. One tbody per phase, each opened by a full-width group row,
 * so a screen reader hears the phase before its rows without rowspan. The
 * calculations and pot values are data, the same in every locale; the
 * phase labels are whole messages, not a numbered template.
 */
const PHASES: Phase[] = [
  { key: "round", label: "round", rows: [{ what: "tied", pot: 1 }] },
  {
    key: "tie-break-1",
    label: "tieBreak1",
    rows: [
      { what: "potDoubles", calculation: "× 2", pot: 2 },
      { what: "mitchi", calculation: "+ 2", pot: 4 },
      { what: "tiedAgain", pot: 4 },
    ],
  },
  {
    key: "tie-break-2",
    label: "tieBreak2",
    rows: [
      { what: "potDoubles", calculation: "× 2", pot: 8 },
      { what: "takesPot", pot: 8 },
    ],
  },
];

const th =
  "pb-2 text-left font-mono text-xs tracking-widest text-stone-600 uppercase";
const numeric = "font-mono text-center";

export function TieBreakExampleTable() {
  const t = useTranslations("rules.tieBreaks.example");
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th scope="col" className={th}>
            {t("whatHappensHeader")}
          </th>
          <th scope="col" className={cn(th, numeric, "w-24 md:w-32")}>
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
              {t(phase.label)}
            </th>
          </tr>
          {phase.rows.map((row, index) => (
            <tr key={index}>
              <td className="py-3 pr-4 font-serif text-base leading-snug text-stone-900">
                {t(row.what)} {row.calculation && `(${row.calculation})`}
              </td>
              <td className={cn(numeric, "py-3")}>{row.pot}</td>
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  );
}
