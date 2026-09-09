type DicePairProps = {
  high: number;
  low: number;
};

export function DicePair({ high, low }: DicePairProps) {
  return (
    <span className="text-lg flex items-center gap-1">
      <span>{high}</span>
      <span className="text-muted"> - </span>
      <span>{low}</span>
    </span>
  );
}
