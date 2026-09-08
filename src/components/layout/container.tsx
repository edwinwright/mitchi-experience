import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full md:container max-w-6xl! mx-auto px-4 md:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
