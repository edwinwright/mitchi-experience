import { Heading } from "./heading";

type PageHeaderProps = {
  title: string;
  standfirst?: string;
};

export function PageHeader({ title, standfirst }: PageHeaderProps) {
  return (
    <header className="border-b-2 border-foreground pb-6 mb-8">
      <Heading level={1} className="text-4xl md:text-5xl">
        {title}
      </Heading>
      {standfirst ? (
        <p className="mt-3 font-serif text-lg text-muted md:text-xl">
          {standfirst}
        </p>
      ) : null}
    </header>
  );
}
