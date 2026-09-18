import { useTranslations } from "next-intl";
import { Container } from "./layout/container";
import { tags } from "@/i18n/rich-text";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/heading";
import { proseLink } from "@/lib/prose";

const STEPS = [
  "whoStarts",
  "rollLimit",
  "everyoneElse",
  "handRanking",
  "pot",
  "winning",
] as const;

export function HomeQuickStart() {
  const t = useTranslations("home.quickStart");

  return (
    <section className="bg-stone-50">
      <Container className="flex flex-col gap-6 py-10 md:gap-11 md:py-20">
        <header className="border-b-2 border-foreground pb-3.5 md:pb-5">
          <Heading level={2} className="text-3xl md:text-5xl">
            {t("heading")}
          </Heading>
        </header>

        <ol className="grid grid-cols-1 gap-y-4 md:gap-x-18 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((key, i) => (
            <li
              key={key}
              className={cn(
                "flex gap-3 py-5 md:flex-col md:gap-3.5 md:py-0 relative",

                /* 1 column styles */
                "max-md:not-last:before:absolute",
                "max-md:not-last:before:-bottom-2",
                "max-md:not-last:before:left-0",
                "max-md:not-last:before:w-full",
                "max-md:not-last:before:h-px",
                "max-md:not-last:before:bg-stone-200",

                /* 2 column styles */
                // 1. Horizontal row lines (Only apply to rows before the final row)
                "md:max-lg:nth-[-n+4]:before:absolute",
                "md:max-lg:nth-[-n+4]:before:-bottom-8",
                "md:max-lg:nth-[-n+4]:before:left-0",
                "md:max-lg:nth-[-n+4]:before:w-full",
                "md:max-lg:nth-[-n+4]:before:h-px",
                "md:max-lg:nth-[-n+4]:before:bg-stone-200",

                // 2. Vertical column lines (Skip every 2nd column)
                "md:max-lg:not-nth-[2n]:after:absolute",
                "md:max-lg:not-nth-[2n]:after:-right-9",
                "md:max-lg:not-nth-[2n]:after:top-0",
                "md:max-lg:not-nth-[2n]:after:h-full",
                "md:max-lg:not-nth-[2n]:after:w-px",
                "md:max-lg:not-nth-[2n]:after:bg-stone-200",

                /* 3 column styles */
                // 1. Horizontal row lines (Only for the top row elements)
                "lg:nth-[-n+3]:before:absolute",
                "lg:nth-[-n+3]:before:-bottom-8",
                "lg:nth-[-n+3]:before:left-0",
                "lg:nth-[-n+3]:before:w-full",
                "lg:nth-[-n+3]:before:h-px",
                "lg:nth-[-n+3]:before:bg-stone-200",

                // 2. Vertical column lines (Skip every 3rd column)
                "lg:not-nth-[3n]:after:absolute",
                "lg:not-nth-[3n]:after:-right-9",
                "lg:not-nth-[3n]:after:top-0",
                "lg:not-nth-[3n]:after:h-full",
                "lg:not-nth-[3n]:after:w-px",
                "lg:not-nth-[3n]:after:bg-stone-200",
              )}
            >
              <span
                aria-hidden="true"
                className="w-8 shrink-0 pt-1 font-mono text-sm font-medium text-red-600 md:w-auto md:pt-0 md:text-base"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={`font-serif text-lg text-stone-900 md:text-xl ${proseLink}`}
              >
                {t.rich(key, tags)}
              </div>
            </li>
          ))}
        </ol>

        <p className={proseLink}>{t.rich("fullRulesLink", tags)}</p>
      </Container>
    </section>
  );
}
