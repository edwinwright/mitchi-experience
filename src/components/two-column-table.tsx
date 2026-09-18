import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Row = { key: string; left: ReactNode; right: ReactNode };

type TwoColumnTableProps = {
  leftHeader: ReactNode;
  rightHeader: ReactNode;
  rows: Row[];
};

const th = "px-3 py-3 text-left text-sm leading-snug font-bold md:px-4";
const leftCell = "px-3 py-3 font-serif text-base text-stone-900 md:px-4";
const rightCell =
  "px-3 py-3 text-center font-mono text-sm font-medium tabular-nums md:px-4";

/*
 * The narrow rounded-border table shared by /rules and /reference's scoring
 * and tie-break tables: a left label column and a right numeric column.
 */
export function TwoColumnTable({
  leftHeader,
  rightHeader,
  rows,
}: TwoColumnTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border xl:max-w-xl">
      <table className="w-full border-collapse">
        <thead className="bg-stone-100">
          <tr className="divide-x divide-border">
            <th scope="col" className={th}>
              {leftHeader}
            </th>
            <th scope="col" className={cn(th, "w-30 text-center md:w-40")}>
              {rightHeader}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.key} className="divide-x divide-border">
              <td className={leftCell}>{row.left}</td>
              <td className={rightCell}>{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
