import { ReactNode } from "react";
import { Heading } from "@/components/heading";
import { twoDigit } from "@/lib/utils";

type RuleSectionProps = {
  id: string; // anchor, English in every locale
  number: number; // 1-based, formatted by twoDigit()
  heading: string;
  children: ReactNode;
};

/*
 * One numbered section of /rules. The number is decoration and never copy:
 * two aria-hidden spans, one beside the heading at base and one in the
 * gutter at md+, the same pattern GroupMark uses for its two dice sizes.
 */
export function RuleSection({
  id,
  number,
  heading,
  children,
}: RuleSectionProps) {
  const label = twoDigit(number);
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="py-8 first:pt-0 md:flex md:py-10 xl:py-12"
    >
      <span
        aria-hidden="true"
        className="hidden w-12 shrink-0 pt-2 font-mono text-base font-medium text-red-600 md:block xl:w-13 xl:text-lg"
      >
        {label}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-5 xl:gap-6">
        <div className="flex items-baseline justify-between gap-3">
          <Heading
            level={2}
            id={`${id}-heading`}
            className="text-2xl leading-none md:text-3xl xl:text-4xl"
          >
            {heading}
          </Heading>
          <span
            aria-hidden="true"
            className="font-mono text-base font-medium text-red-600 md:hidden"
          >
            {label}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
