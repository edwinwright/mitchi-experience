import { useTranslations } from "next-intl";
import { MitchiHand } from "@/components/mitchi-hand";

const th = "px-3 py-3 text-left text-sm font-bold md:px-4";
const roundCell = "px-3 py-3 font-serif text-base text-stone-900 md:px-4";
const valueCell = "px-3 py-3 font-mono text-xs md:px-4 md:text-sm";

/*
 * Three columns: round, Mitchis rolled, points in the pot. Rendered on /rules
 * and /reference. The Mitchis cell is decoration for assistive tech, since the
 * round cell already says how many were rolled. The cell stays in the tree so
 * column counts match; its content (dice, dash) is aria-hidden.
 */
export function ScoringTable() {
  const t = useTranslations("reference.scoring");
  return (
    <div className="overflow-hidden rounded-lg border border-border xl:max-w-xl">
      <table className="w-full border-collapse">
        <thead className="bg-stone-100">
          <tr className="divide-x divide-border">
            <th scope="col" className={th}>
              {t("roundHeader")}
            </th>
            <th scope="col" className={th}>
              {t("mitchisHeader")}
            </th>
            <th scope="col" className={th}>
              {t("potHeader")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          <tr className="divide-x divide-border">
            <td className={roundCell}>{t("none")}</td>
            <td className={`${valueCell} text-stone-600`}>
              <span aria-hidden="true">—</span>
            </td>
            <td className={valueCell}>{t("noneValue")}</td>
          </tr>
          <tr className="divide-x divide-border">
            <td className={roundCell}>{t("one")}</td>
            <td className={valueCell}>
              <MitchiCount times={1} />
            </td>
            <td className={valueCell}>{t("oneValue")}</td>
          </tr>
          <tr className="divide-x divide-border">
            <td className={roundCell}>{t("two")}</td>
            <td className={valueCell}>
              <MitchiCount times={2} />
            </td>
            <td className={valueCell}>{t("twoValue")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MitchiCount({ times }: { times: 1 | 2 }) {
  return (
    <span aria-hidden="true" className="flex items-center gap-2">
      <MitchiHand high={2} low={1} size={16} />× {times}
    </span>
  );
}
