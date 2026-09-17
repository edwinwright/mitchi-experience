import { useTranslations } from "next-intl";
import { cn, twoDigit } from "@/lib/utils";

type OnThisPageProps = {
  items: { id: string; title: string }[];
  className?: string;
};

/*
 * The page contents: a card at base, a two-column band at md, a plain list at
 * xl where the caller makes it a sticky sidebar via className. Always numbered;
 * the ordinals are decoration and never copy. Same-page fragments, so plain
 * <a href="#…">, not the locale-aware Link.
 */
export function OnThisPage({ items, className }: OnThisPageProps) {
  const t = useTranslations("site");
  return (
    <nav
      aria-labelledby="contents-heading"
      className={cn(
        "flex flex-col gap-4",
        "max-md:mt-6 max-md:rounded-xl max-md:border max-md:border-border max-md:bg-white max-md:p-4",
        "md:max-xl:border-b md:max-xl:border-border md:max-xl:py-6",
        className,
      )}
    >
      <p
        id="contents-heading"
        className="font-mono text-xs tracking-widest text-stone-600 uppercase xl:border-b xl:border-border xl:pb-3"
      >
        {t("onThisPage")}
      </p>
      {/* grid-flow-col + grid-rows-4 gives the 01/05, 02/06 column order without reordering the array. */}
      <ol
        role="list"
        className="flex flex-col gap-3 md:max-xl:grid md:max-xl:grid-flow-col md:max-xl:grid-rows-4 md:max-xl:gap-x-10"
      >
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="focus-ring flex gap-2 text-base font-medium hover:text-blue-600 xl:text-sm"
            >
              <span
                aria-hidden="true"
                className="w-6 shrink-0 font-mono text-xs text-stone-600"
              >
                {twoDigit(index + 1)}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
