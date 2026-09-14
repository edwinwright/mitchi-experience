type OnThisPageProps = {
  items: { id: string; title: string }[];
};

export function OnThisPage({ items }: OnThisPageProps) {
  return (
    <div className="py-6">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-blue-600 hover:text-red-600 focus-ring"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
