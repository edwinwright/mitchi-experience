import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-5 md:px-9 lg:px-14",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
