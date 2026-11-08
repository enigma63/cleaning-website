import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "../blog/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] bg-[#0f2a6b]" tabIndex={-1} aria-hidden="true">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-sm font-semibold uppercase tracking-widest text-lime-300">
            Atlanta Cleaners Blog
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm text-slate-500">
          {post.draft && <span className="mr-2 rounded bg-amber-100 px-2 py-0.5 text-xs font-bold uppercase text-amber-800">Draft</span>}
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
        </p>
        <h3 className="mt-3 text-xl font-bold leading-snug text-[#0f2a6b]">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{post.description}</p>
        <Link href={`/blog/${post.slug}`} className="mt-5 text-sm font-semibold text-[#2e9e4f] hover:underline">
          Read article →
        </Link>
      </div>
    </article>
  );
}
