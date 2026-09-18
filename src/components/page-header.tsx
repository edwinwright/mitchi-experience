import { Container } from "./layout/container";
import { Heading } from "./heading";

type PageHeaderProps = {
  title: string;
  standfirst?: string;
};

/*
 * The full-bleed linen band every interior page opens with. It sits outside
 * the page Container, not inside it, and closes itself with its own rule.
 *
 * overflow-hidden is load-bearing: dot-field is wider than the part of it that
 * is meant to be seen, and without it the band produces horizontal page scroll
 * at narrow widths.
 */
export function PageHeader({ title, standfirst }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-stone-300 bg-stone-100">
      <div aria-hidden="true" className="dot-field" />
      <Container className="relative flex flex-col gap-4 pt-8 pb-6 md:gap-5 md:pt-12 md:pb-8 xl:pt-10 xl:pb-9">
        <Heading level={1} className="text-4xl md:text-5xl xl:text-6xl">
          {title}
        </Heading>
        {standfirst ? (
          <p className="font-serif text-lg text-muted max-w-[42ch] md:text-xl">
            {standfirst}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
