type PageHeaderProps = {
  title: string;
  standfirst?: string;
};

export function PageHeader({ title, standfirst }: PageHeaderProps) {
  return (
    <header className="border-b-2 border-foreground pb-6 mb-8">
      <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
        {title}
      </h1>
      {standfirst ? (
        <p className="mt-3 font-serif text-lg text-muted md:text-xl">
          {standfirst}
        </p>
      ) : null}
    </header>
  );
}
