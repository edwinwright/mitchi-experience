import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type OnwardBlockProps = {
  href: ComponentProps<typeof Link>["href"];
  heading: string;
  label: string;
  summary: string;
};

/*
 * The closing "next page" block. A plain div, not a nav landmark: one link does
 * not earn one, and labelling it would cost a message key. The heading is a <p>
 * for the same reason — "Next" is a label, and /about's outline is one h1.
 *
 * The arrow is decoration and stays out of the message files.
 */
export function OnwardBlock({
  href,
  heading,
  label,
  summary,
}: OnwardBlockProps) {
  return (
    <div className="flex flex-col gap-2 border-t-2 border-foreground pt-[22px] xl:flex-row xl:items-end xl:justify-between xl:gap-8 xl:pt-[26px]">
      <div className="flex flex-col gap-2">
        <p className="font-mono text-[10.5px] tracking-[0.16em] text-stone-600 uppercase md:text-[11px]">
          {heading}
        </p>
        <Link
          href={href}
          className="focus-ring text-[22px] font-bold tracking-[-0.02em] text-blue-600 underline underline-offset-[5px] hover:text-red-600 md:text-2xl xl:text-[26px]"
        >
          {label}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
      <p className="font-serif text-base leading-[1.5] text-stone-600 md:text-[16.5px] xl:max-w-[32ch] xl:text-right xl:text-[17px]">
        {summary}
      </p>
    </div>
  );
}
