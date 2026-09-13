type ExampleProps = {
  children: React.ReactNode;
};

export function Example({ children }: ExampleProps) {
  return <aside className="my-6 bg-stone-100 p-4 rounded-lg">{children}</aside>;
}
