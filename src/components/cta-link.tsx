import { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CtaLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function CtaLink({
  className,
  variant = "primary",
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium no-underline focus-ring",
        variant === "primary"
          ? "bg-foreground text-background"
          : "border border-border bg-background text-foreground",
        className,
      )}
      {...props}
    />
  );
}
