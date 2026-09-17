import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("site");
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed top-0 left-0 focus-ring"
    >
      {t("skipToContent")}
    </a>
  );
}
