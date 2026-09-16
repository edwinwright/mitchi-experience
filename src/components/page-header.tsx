import { Container } from "./layout/container";
import { Heading } from "./heading";

type PageHeaderProps = {
  title: string;
  standfirst?: string;
  eyebrow?: string;
};

/*
 * The full-bleed linen band every interior page opens with. It sits outside
 * the page Container, not inside it, and closes itself with its own rule.
 *
 * overflow-hidden is load-bearing: dot-field is wider than the part of it that
 * is meant to be seen, and without it the band produces horizontal page scroll
 * at narrow widths.
 *
 * The eyebrow slot is optional and only /about fills it today.
 */
export function PageHeader({ title, standfirst, eyebrow }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-stone-300 bg-stone-100">
      <div aria-hidden="true" className="dot-field" />
      <Container className="relative flex flex-col gap-4 pt-8 pr-6 pb-6 md:gap-5 md:pt-12 md:pr-60 md:pb-7 xl:pt-[42px] xl:pr-[584px] xl:pb-[38px]">
        {eyebrow ? (
          <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-stone-600 uppercase md:gap-3">
            <span
              aria-hidden="true"
              className="h-px w-5 bg-blue-600 md:w-7 xl:w-8"
            />
            {eyebrow}
          </p>
        ) : null}
        <Heading
          level={1}
          className="pr-28 text-4xl md:pr-0 md:text-5xl xl:text-6xl"
        >
          {title}
        </Heading>
        {standfirst ? (
          <p className="font-serif text-lg text-muted md:text-xl xl:max-w-[38ch]">
            {standfirst}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
