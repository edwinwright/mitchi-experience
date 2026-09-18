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
    <aside className="rounded-xl border border-border bg-white xl:max-w-2xl">
      <h3 className="px-4 py-4 md:px-5 xl:px-6 font-mono font-bold text-xs tracking-widest text-stone-600 uppercase bg-stone-100">
        {title ?? t("exampleLabel")}
      </h3>
      {/* <p className="font-mono text-xs tracking-widest text-stone-600 uppercase bg-stone-100">
        
      </p> */}
      <div className="p-4 md:p-5 xl:p-6">{children}</div>
    </aside>
  );
}
