import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

// These tags are available
type Tag = "em" | "strong" | "term" | "about" | "reference" | "rules" | "speak";

type RichTextProps = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export function RichText({ children }: RichTextProps) {
  return (
    <div className="prose">
      {children({
        em: (chunks) => <em>{chunks}</em>,
        strong: (chunks) => <strong>{chunks}</strong>,
        term: (chunks) => <span className="term">{chunks}</span>,
        about: (chunks) => <Link href="/about">{chunks}</Link>,
        reference: (chunks) => <Link href="/reference">{chunks}</Link>,
        rules: (chunks) => <Link href="/rules">{chunks}</Link>,
        speak: (chunks) => <Link href="/speak">{chunks}</Link>,
      })}
    </div>
  );
}
