import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/page-header";
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
        <PageHeader title="This page does not exist" />
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
