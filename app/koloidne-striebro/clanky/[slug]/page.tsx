import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTAINER } from "@/constants";
import { articles, getArticle } from "@/data/articles";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowLeftIcon } from "@/components/ui/Icons";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/koloidne-striebro/clanky/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Koloidné striebro | EMIS`,
    description: article.excerpt,
    // rozpracované články sa neindexujú
    robots: article.draft ? { index: false, follow: true } : undefined,
  };
}

export default async function ArticlePage(props: PageProps<"/koloidne-striebro/clanky/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <PageHeader crumb="Článok" title={article.title} lead={article.excerpt} image={article.image} />

      <article className={`${CONTAINER} max-w-3xl py-16 lg:py-20`}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <Image src={article.image} alt={article.imageAlt} fill sizes="768px" className="object-cover" />
        </div>
        <div className="mt-10 space-y-5 text-lg leading-relaxed">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link
          href="/koloidne-striebro"
          className="mt-12 inline-flex items-center gap-2 font-bold text-primary hover:underline"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Späť na koloidné striebro
        </Link>
      </article>
    </>
  );
}
