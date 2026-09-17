import { ReactNode } from "react";
import { useTranslations } from "next-intl";

type ExampleCardProps = { title?: string; children: ReactNode };

/*
 * A worked example on /rules: a white card with a mono label. Doesn't know or
 * care what its children are, a strip and prose, or a bare table.
 */
export function ExampleCard({ title, children }: ExampleCardProps) {
  const t = useTranslations("rules");
  return (
    <aside className="flex flex-col gap-4 rounded-xl border border-border bg-white p-4 md:p-5 xl:max-w-2xl xl:p-6">
      <p className="font-mono text-xs tracking-widest text-stone-600 uppercase">
        {title ?? t("exampleLabel")}
      </p>
      {children}
    </aside>
  );
}
