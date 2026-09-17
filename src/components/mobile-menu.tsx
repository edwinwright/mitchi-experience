"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

type MobileMenuProps = {
  children: ReactNode;
  className?: string;
};

export function MobileMenu({ children, className }: MobileMenuProps) {
  const t = useTranslations("site");
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  // The header is in the layout, so this element survives a client-side
  // navigation with its open attribute intact. Without this the panel stays
  // over the page the reader just asked for.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  return (
    <details ref={menu} className={className}>
      <summary
        aria-label={t("menu")}
        className="focus-ring flex min-h-11 min-w-11 -mr-2.5 cursor-pointer list-none flex-col items-center justify-center gap-1.5 [&::-webkit-details-marker]:hidden"
      >
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
      </summary>
      <div className="absolute inset-x-0 top-full z-40 flex flex-col gap-6 border-b border-border bg-stone-50 px-5 pb-10 pt-2">
        {children}
      </div>
    </details>
  );
}
