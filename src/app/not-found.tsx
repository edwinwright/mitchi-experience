import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { cn } from "@/lib/utils";
import { archivo, sourceSerif, jetbrainsMono, lato } from "@/app/fonts";
import "@/app/globals.css";

export default function NotFound() {
  return (
    <Container
      className={cn(
        "min-h-screen flex items-center justify-center",
        archivo.variable,
        sourceSerif.variable,
        jetbrainsMono.variable,
        lato.variable,
      )}
    >
      <div className="font-sans text-center">
        {/* Plain h1, not PageHeader: the band is site chrome, and this page has
            none. Hardcoded English — there is no provider here. */}
        <h1 className="mb-8 font-sans font-bold text-[44px] leading-[0.96] tracking-[-0.035em] md:text-[56px]">
          This page does not exist
        </h1>
        <Prose>
          <p>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- root 404, no locale provider */}
            Try the <a href="/">home page</a>.
          </p>
        </Prose>
      </div>
    </Container>
  );
}
