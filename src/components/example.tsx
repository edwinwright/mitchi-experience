import { ReactNode } from "react";
import { useTranslations } from "next-intl";

type ExampleProps = { children: ReactNode };

/*
 * A worked example on /rules: a white card with a mono label. Children are the
 * caller's t.rich output, one or more paragraphs. The inner div is where a
 * dice strip goes later, above the prose; not built now.
 */
export function Example({ children }: ExampleProps) {
  const t = useTranslations("rules");
  return (
    <aside className="flex flex-col gap-4 rounded-xl border border-border bg-white p-4 md:p-5 xl:max-w-2xl xl:p-6">
      <p className="font-mono text-xs tracking-widest text-stone-600 uppercase">
        {t("exampleLabel")}
      </p>
      <div className="flex flex-col gap-3 font-serif text-base leading-relaxed text-stone-900 xl:text-lg">
        {children}
      </div>
    </aside>
  );
}
