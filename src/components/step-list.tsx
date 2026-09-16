import { ReactNode } from "react";
import { twoDigit } from "@/lib/utils";

type StepListProps = {
  items: ReactNode[];
};

/*
 * Numbered rows with hairlines, for /rules setup. The ordinal is rendered,
 * not copy, and hidden from assistive tech: the <ol> already gives the count.
 */
export function StepList({ items }: StepListProps) {
  return (
    <ol role="list" className="divide-y divide-border xl:max-w-prose">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 py-4 first:pt-0 last:pb-0">
          <span
            aria-hidden="true"
            className="w-8 shrink-0 pt-1 font-mono text-xs font-medium md:w-10 xl:w-11 xl:text-sm"
          >
            {twoDigit(index + 1)}
          </span>
          <span className="font-serif text-lg leading-relaxed text-stone-900">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}
