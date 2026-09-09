import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

// These tags are available
type Tag =
  | "p"
  | "em"
  | "strong"
  | "term"
  | "about"
  | "reference"
  | "rules"
  | "speak";

export type TagMap = Record<Tag, (chunks: ReactNode) => ReactNode>;

export const tags: TagMap = {
  p: (chunks) => <p>{chunks}</p>,
  em: (chunks) => <em>{chunks}</em>,
  strong: (chunks) => <strong>{chunks}</strong>,
  term: (chunks) => <a href="#terms">{chunks}</a>,
  about: (chunks) => <Link href="/about">{chunks}</Link>,
  reference: (chunks) => <Link href="/reference">{chunks}</Link>,
  rules: (chunks) => <Link href="/rules">{chunks}</Link>,
  speak: (chunks) => <Link href="/speak">{chunks}</Link>,
};
