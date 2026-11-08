import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import PostCard from "../components/PostCard";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { whatsappLink } from "../business";
import { getPosts } from "./posts";

const description =
  "Cleaning tips, checklists, and news from Atlanta Cleaners Nigeria Ltd, a professional cleaning company in Abuja.";

export const metadata: Metadata = {
  title: "Blog | Atlanta Cleaners Nigeria Ltd",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "Atlanta Cleaners Blog", description, url: "/blog", type: "website" },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <section className="bg-[#0f2a6b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Our Blog</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Cleaning tips and news from Abuja’s airport-trusted cleaners
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Practical advice for keeping homes, offices, and short-lets spotless, from the team at Atlanta
              Cleaners.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            {posts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-lg text-slate-600">New articles are coming soon.</p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat href={whatsappLink()} />
    </div>
  );
}
