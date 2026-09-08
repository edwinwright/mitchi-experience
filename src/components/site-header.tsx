import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  const t = useTranslations("nav");
  return (
    <header className="bg-background border-b">
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">{t("wordmark")}</Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/rules">{t("rules")}</Link>
            </li>
            <li>
              <Link href="/reference">{t("reference")}</Link>
            </li>
            <li>
              <Link href="/speak">{t("speak")}</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
