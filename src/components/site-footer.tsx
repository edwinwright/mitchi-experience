import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  const t = useTranslations("nav");
  return (
    <footer className="bg-background border-t">
      <Container className="py-4 text-sm text-muted-foreground">
        <p>{t("footer")}</p>
      </Container>
    </footer>
  );
}
