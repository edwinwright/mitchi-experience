import { Container } from "@/components/layout/container";
import { Prose } from "@/components/prose";
import { cn } from "@/lib/utils";
import { archivo, sourceSerif, jetbrainsMono, lato } from "@/app/fonts";
import "@/app/globals.css";
import { Heading } from "@/components/heading";

export default function NotFound() {
  return (
    <Container
      className={cn(
        "py-8 min-h-screen flex items-center justify-center",
        archivo.variable,
        sourceSerif.variable,
        jetbrainsMono.variable,
        lato.variable,
      )}
    >
      <div className="font-sans text-center">
        {/* Plain h1, not PageHeader: the band is site chrome, and this page has
            none. Hardcoded English — there is no provider here. */}
        <Heading level={1} className="mb-4 text-3xl">
          This page does not exist
        </Heading>
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
