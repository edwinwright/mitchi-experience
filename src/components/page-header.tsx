type PageHeaderProps = {
  title: string;
  standfirst?: string;
};

export function PageHeader({ title, standfirst }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {standfirst ? (
        <p className="mt-2 text-lg text-muted">{standfirst}</p>
      ) : null}
    </header>
  );
}
