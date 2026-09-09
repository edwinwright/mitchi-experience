type ExampleProps = {
  children: React.ReactNode;
};

export function Example({ children }: ExampleProps) {
  return <aside className="my-6 bg-gray-100 p-4 rounded-lg">{children}</aside>;
}
