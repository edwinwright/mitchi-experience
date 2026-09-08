import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Tags = {
  term: (chunks: ReactNode) => ReactNode;
  em: (chunks: ReactNode) => ReactNode;
  strong: (chunks: ReactNode) => ReactNode;
  p: (chunks: ReactNode) => ReactNode;
  link: (chunks: ReactNode) => ReactNode;
};

type ProseProps = {
  children: (tags: Tags) => ReactNode;
  href?: ComponentProps<typeof Link>["href"];
};

export function Prose({ children, href }: ProseProps) {
  return children({
    term: (chunks) => <a href="#terms">{chunks}</a>,
    em: (chunks) => <em>{chunks}</em>,
    strong: (chunks) => <strong>{chunks}</strong>,
    p: (chunks) => <p>{chunks}</p>,
    link: (chunks) =>
      href ? <Link href={href}>{chunks}</Link> : <>{chunks}</>,
  });
}
