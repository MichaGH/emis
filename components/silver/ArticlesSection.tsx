import Image from "next/image";
import Link from "next/link";
import { CONTAINER } from "@/constants";
import { articles } from "@/data/articles";
import { ArrowRightIcon } from "@/components/ui/Icons";

// Články o koloidnom striebre — karty s fotkou; obsah v data/articles.ts.
export function ArticlesSection() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} py-16 lg:py-24`}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Články o koloidnom striebre
          </h2>
          <p className="text-lg leading-relaxed lg:pb-1">
            Viac o koloidnom striebre a jeho účinkoch nájdete v článkoch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/koloidne-striebro/clanky/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-surface"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold group-hover:text-primary">{article.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-primary">
                  Čítať článok
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
