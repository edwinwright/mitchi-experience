import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RuleBodyProps = { children: ReactNode; className?: string };

/*
 * The paragraph stack for /rules: one serif scale, a 64ch measure at xl.
 * Term links are styled here, on the container, not in the tag map: ink
 * text on a 2px blue rule. A caller with a page link overrides via className.
 */
export function RuleBody({ children, className }: RuleBodyProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 font-serif text-lg leading-relaxed text-pretty text-stone-900 xl:max-w-prose",
        "[&_a]:underline [&_a]:decoration-2 [&_a]:decoration-blue-600 [&_a]:underline-offset-4 [&_a]:hover:text-blue-600",
        className,
      )}
    >
      {children}
    </div>
  );
}
