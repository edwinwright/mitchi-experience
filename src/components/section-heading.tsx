import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold tracking-[-0.02em] mb-6 md:text-[28px]">
      {children}
    </h2>
  );
}
