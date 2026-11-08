import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "../../components/Markdown";
import PostCard from "../../components/PostCard";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import { PhoneIcon, WhatsAppIcon } from "../../components/Icons";
import { business, whatsappLink } from "../../business";
import { formatDate, getPost, getPosts } from "../posts";

// Only the posts in content/blog exist; any other address shows the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${business.name}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      ...(post.image ? { images: [{ url: post.image, alt: post.imageAlt }] } : {}),
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
    ...(post.draft ? { robots: { index: false } } : {}),
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const whatsappHref = whatsappLink(`Hello, I read your article “${post.title}” and I’d like a cleaning quote.`);
  const morePosts = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: business.name },
    ...(post.image ? { image: post.image } : {}),
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <article>
          <header className="bg-[#0f2a6b] text-white">
            <div className="mx-auto max-w-3xl px-6 pb-14 pt-10 md:pb-16">
              <Link href="/blog" className="text-sm font-semibold text-lime-300 hover:underline">
                ← All articles
              </Link>
              {post.draft && (
                <p className="mt-6 inline-block rounded bg-amber-300 px-3 py-1 text-xs font-bold uppercase text-amber-950">
                  Draft: only visible on this computer
                </p>
              )}
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
              <p className="mt-5 text-lg leading-8 text-blue-100">{post.description}</p>
              <p className="mt-6 text-sm text-blue-200">
                {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min
                read
              </p>
            </div>
          </header>

          {post.image && (
            <div className="mx-auto -mb-4 max-w-4xl px-6 pt-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-xl">
                <Image src={post.image} alt={post.imageAlt ?? ""} fill preload sizes="(min-width: 896px) 848px, 100vw" className="object-cover" />
              </div>
            </div>
          )}

          <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
            <Markdown source={post.body} />

            <aside className="mt-14 rounded-[2rem] bg-[#0f2a6b] p-8 text-white shadow-xl md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Need a hand?</p>
              <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">Let our team do the cleaning for you</h2>
              <p className="mt-3 leading-7 text-blue-100">
                Free quotes for homes, offices, short-lets, and post-construction sites across Abuja.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-3.5 font-bold text-[#0f2a6b] transition hover:bg-lime-300"
                >
                  <WhatsAppIcon /> Free Quote on WhatsApp
                </a>
                <a
                  href={`tel:${business.phones[0].tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  <PhoneIcon /> {business.phones[0].display}
                </a>
              </div>
            </aside>
          </div>
        </article>

        {morePosts.length > 0 && (
          <section className="bg-slate-50 py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#0f2a6b] md:text-3xl">More from our blog</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {morePosts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
      <WhatsAppFloat href={whatsappHref} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </div>
  );
}
