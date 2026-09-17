import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

// These tags are available
type Tag =
  "em" | "strong" | "term" | "about" | "reference" | "rules" | "tieBreaks";

export type TagMap = Record<Tag, (chunks: ReactNode) => ReactNode>;

export const tags: TagMap = {
  em: (chunks) => <em>{chunks}</em>,
  strong: (chunks) => <strong>{chunks}</strong>,
  term: (chunks) => (
    <Link
      href={{ pathname: "/rules", hash: "vocabulary" }}
      className="focus-ring"
    >
      {chunks}
    </Link>
  ),
  about: (chunks) => (
    <Link href="/about" className="focus-ring">
      {chunks}
    </Link>
  ),
  reference: (chunks) => (
    <Link href="/reference" className="focus-ring">
      {chunks}
    </Link>
  ),
  rules: (chunks) => (
    <Link href="/rules" className="focus-ring">
      {chunks}
    </Link>
  ),
  tieBreaks: (chunks) => (
    <Link
      href={{ pathname: "/rules", hash: "tie-breaks" }}
      className="focus-ring"
    >
      {chunks}
    </Link>
  ),
};
