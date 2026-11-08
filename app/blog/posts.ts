import fs from "node:fs";
import path from "node:path";
import { showSamples } from "../content";

// Blog posts are Markdown files in content/blog/. The file name becomes the web address,
// e.g. content/blog/office-cleaning-checklist.md -> /blog/office-cleaning-checklist
// Each file starts with a short header between --- lines (see the README for the format).
const postsDir = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author: string;
  image?: string;
  imageAlt?: string;
  draft: boolean;
  body: string;
  readingMinutes: number;
};

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const { data, body } = parseFrontmatter(fs.readFileSync(path.join(postsDir, file), "utf8"));
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author || "Atlanta Cleaners Team",
    image: data.image || undefined,
    imageAlt: data.imageAlt || data.title,
    draft: data.draft === "true",
    body,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

// Newest first. Drafts (draft: true) show only when running locally, never on the live site.
export function getPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map(readPost)
    .filter((post) => showSamples || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  if (!date) return "";
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
