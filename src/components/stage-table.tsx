import { useTranslations } from "next-intl";

const th =
  "pb-2 text-left font-mono text-xs tracking-widest text-stone-600 uppercase";

/*
 * The pot doubling through a tie-break, above the tie-break Example's prose.
 * Decoration, like ExampleStrip: the prose is the accessible copy, so the
 * table is aria-hidden. The pot values are rendered, not copy.
 */
export function StageTable() {
  const t = useTranslations("rules.stages");
  const rows: { stage: string; what: string; pot: number }[] = [
    { stage: t("round"), what: t("roundWhat"), pot: 1 },
    { stage: t("tieBreak", { n: 1 }), what: t("doubleWhat"), pot: 2 },
    { stage: t("mitchi"), what: t("mitchiWhat"), pot: 4 },
    { stage: t("tieBreak", { n: 2 }), what: t("doubleAgainWhat"), pot: 8 },
    { stage: t("tieBreak", { n: 3 }), what: t("stillLevelWhat"), pot: 16 },
  ];
  return (
    <table aria-hidden="true" className="w-full border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th scope="col" className={th}>
            {t("stageHeader")}
          </th>
          <th scope="col" className={th}>
            {t("whatHeader")}
          </th>
          <th scope="col" className={`${th} text-right`}>
            {t("potHeader")}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {rows.map((row) => (
          <tr key={row.stage}>
            <td className="w-30 py-3 pr-4 font-mono text-xs md:w-33 md:text-sm">
              {row.stage}
            </td>
            <td className="py-3 pr-4 font-serif text-base leading-snug text-stone-900">
              {row.what}
            </td>
            <td className="py-3 text-right font-mono text-lg font-medium md:text-xl">
              {row.pot}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
