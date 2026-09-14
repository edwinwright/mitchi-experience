import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = ComponentProps<"h1"> & {
  level: HeadingLevel;
  inverse?: boolean;
};

export function Heading({
  level,
  inverse = false,
  className,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        "font-sans font-bold leading-nond tracking-tight",
        inverse && "text-white",
        className,
      )}
      {...props}
    />
  );
}
