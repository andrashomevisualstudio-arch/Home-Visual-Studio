import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/posts";
import { JsonLd } from "@/components/json-ld";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: `/blog/${post.meta.slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: "article",
      url: `/blog/${post.meta.slug}`,
      publishedTime: post.meta.date || undefined,
      images: post.meta.coverImage ? [post.meta.coverImage] : undefined,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <JsonLd
        data={[
          blogPostingSchema(post.meta),
          breadcrumbSchema([
            { name: "Főoldal", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.meta.title, path: `/blog/${post.meta.slug}` },
          ]),
        ]}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Vissza a bloghoz
      </Link>

      <header className="mt-8">
        <time className="block text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {formatDate(post.meta.date)}
        </time>
        <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05]">
          {post.meta.title}
        </h1>
        {post.meta.excerpt && (
          <p className="mt-5 text-lg text-muted-foreground">{post.meta.excerpt}</p>
        )}
      </header>

      {post.meta.coverImage && (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={post.meta.coverImage}
            alt={post.meta.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-neutral mt-12 max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-foreground prose-img:rounded-2xl">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
