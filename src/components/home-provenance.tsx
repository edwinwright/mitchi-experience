import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { tags } from "@/i18n/rich-text";

export function HomeProvenance() {
  const t = useTranslations("home");

  return (
    <section className="bg-stone-100">
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="relative h-[240px] overflow-hidden bg-stone-300 md:min-h-[440px]">
          <Image
            src="/img/home-provenance.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            aria-hidden
          />
        </div>
        <Container className="flex flex-col justify-center py-8">
          <p className="font-serif text-lg leading-normal text-stone-900 max-w-[44ch] md:text-xl [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:hover:text-red-600">
            {t.rich("origin", tags)}
          </p>
        </Container>
      </div>
    </section>
  );
}
