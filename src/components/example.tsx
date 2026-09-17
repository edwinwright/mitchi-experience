import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type ExampleProps = { children?: ReactNode; strip?: ReactNode };

/*
 * A worked example on /rules: a white card with a mono label. Children are the
 * caller's t.rich output, one or more paragraphs. `strip` is an ExampleStrip,
 * drawn above the prose under a dashed rule. The tie-break example is a
 * table with no prose, so it is the strip and the rule is dropped.
 */
export function Example({ children, strip }: ExampleProps) {
  const t = useTranslations("rules");
  return (
    <aside className="flex flex-col gap-4 rounded-xl border border-border bg-white p-4 md:p-5 xl:max-w-2xl xl:p-6">
      <p className="font-mono text-xs tracking-widest text-stone-600 uppercase">
        {t("exampleLabel")}
      </p>
      {strip && (
        <div
          className={cn(
            children && "border-b border-dashed border-border pb-4 md:pb-5",
          )}
        >
          {strip}
        </div>
      )}
      {children && (
        <div className="flex flex-col gap-3 font-serif text-base leading-relaxed text-stone-900 xl:text-lg">
          {children}
        </div>
      )}
    </aside>
  );
}
