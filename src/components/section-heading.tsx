import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";

type SectionHeadingProps = {
  inverse?: boolean;
  children: ReactNode;
};

export function SectionHeading({ inverse, children }: SectionHeadingProps) {
  return (
    <Heading
      level={2}
      className={cn("mb-6 text-2xl md:text-3xl", inverse && "text-white")}
    >
      {children}
    </Heading>
  );
}
