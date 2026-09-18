import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CtaLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
  inverse?: boolean;
};

export function CtaLink({
  variant = "primary",
  inverse = false,
  className,
  ...props
}: CtaLinkProps) {
  const ground = inverse ? "inverse" : "regular";

  const linkClassMap = {
    regular: {
      primary: "bg-foreground text-white hover:bg-blue-600",
      secondary:
        "border border-foreground bg-transparent text-foreground hover:border-blue-600 hover:bg-stone-50 hover:text-blue-600",
    },
    inverse: {
      primary: [
        "bg-white text-foreground shadow-[4px_4px_0_0_var(--color-foreground)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-150",
        "motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[6px_6px_0_0_var(--color-foreground)]",
      ],
      secondary:
        "border-2 border-white/85 bg-transparent text-white hover:bg-white/15",
    },
  } as const;

  const linkClasses = cn(
    "focus-ring inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold no-underline transition-colors",
    linkClassMap[ground][variant],
    className,
  );

  return <Link className={linkClasses} {...props} />;
}
