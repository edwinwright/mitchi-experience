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
    <div className="flex flex-col gap-2 border-t border-foreground pt-5 xl:flex-row xl:items-end xl:justify-between xl:gap-8 xl:pt-6">
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-stone-600 uppercase">{heading}</p>
        <Link
          href={href}
          className="focus-ring text-xl text-blue-600 underline underline-offset-4 hover:text-red-600 md:text-2xl"
        >
          {label}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
      <p className="font-serif text-base text-stone-600 xl:max-w-[32ch]">
        {summary}
      </p>
    </div>
  );
}
