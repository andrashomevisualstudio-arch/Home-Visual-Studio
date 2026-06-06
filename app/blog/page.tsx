import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tippek, trendek és esettanulmányok az ingatlan média világából — fotózás, videó, AI és marketing ingatlanosoknak.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
      <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-px w-7 bg-foreground/40" />
        Blog
      </span>
      <h1 className="display-xl text-[clamp(2.5rem,7vw,6rem)]">
        Gondolatok & tippek
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Hogyan adhatod el gyorsabban és jobb áron az ingatlant a megfelelő médiával?
      </p>

      {posts.length === 0 ? (
        <p className="mt-16 text-muted-foreground">
          Hamarosan érkeznek az első bejegyzések.
        </p>
      ) : (
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <time className="mt-5 block text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-muted-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
