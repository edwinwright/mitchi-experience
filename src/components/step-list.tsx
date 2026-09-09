import { ReactNode } from "react";

type StepListProps = {
  items: ReactNode[];
};

export function StepList({ items }: StepListProps) {
  return (
    <ol className="list-decimal list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}
