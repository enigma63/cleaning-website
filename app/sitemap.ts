import type { MetadataRoute } from "next";
import { getPosts } from "./blog/posts";

const siteUrl = process.env.URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().filter((post) => !post.draft);
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date || undefined,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
