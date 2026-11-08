import Link from "next/link";
import type { ReactNode } from "react";

// A small Markdown renderer for blog posts. Supports:
//   ## Heading, ### Subheading, paragraphs, - bullet lists, 1. numbered lists,
//   > quotes, **bold**, *italic*, and [links](https://example.com).
type Block =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] };

function parseBlocks(source: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let quote: string[] = [];

  const flush = () => {
    if (paragraph.length) blocks.push({ type: "p", text: paragraph.join(" ") });
    if (quote.length) blocks.push({ type: "quote", text: quote.join(" ") });
    paragraph = [];
    quote = [];
  };

  const addItem = (type: "ul" | "ol", text: string) => {
    flush();
    const last = blocks[blocks.length - 1];
    if (last && last.type === type) last.items.push(text);
    else blocks.push({ type, items: [text] });
  };

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    let match: RegExpMatchArray | null;
    if (!line) flush();
    else if ((match = line.match(/^###\s+(.*)/))) {
      flush();
      blocks.push({ type: "h3", text: match[1] });
    } else if ((match = line.match(/^#{1,2}\s+(.*)/))) {
      flush();
      blocks.push({ type: "h2", text: match[1] });
    }
    else if ((match = line.match(/^[-*]\s+(.*)/))) addItem("ul", match[1]);
    else if ((match = line.match(/^\d+[.)]\s+(.*)/))) addItem("ol", match[1]);
    else if ((match = line.match(/^>\s?(.*)/))) {
      if (paragraph.length) flush();
      quote.push(match[1]);
    } else {
      const last = blocks[blocks.length - 1];
      // An indented line straight after a list item continues that item.
      if (!paragraph.length && !quote.length && rawLine.startsWith("  ") && last && (last.type === "ul" || last.type === "ol")) {
        last.items[last.items.length - 1] += ` ${line}`;
      } else {
        if (quote.length) flush();
        paragraph.push(line);
      }
    }
  }
  flush();
  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const className = "font-semibold text-[#1d3f9a] underline decoration-lime-400 decoration-2 underline-offset-4 hover:text-[#0f2a6b]";
      if (href.startsWith("/")) {
        return <Link key={index} href={href} className={className}>{label}</Link>;
      }
      return (
        <a key={index} href={href} className={className} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return part;
  });
}

function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function Markdown({ source }: { source: string }) {
  return (
    <div className="text-lg leading-8 text-slate-700">
      {parseBlocks(source).map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} id={headingId(block.text)} className="mt-12 scroll-mt-24 text-2xl font-extrabold tracking-tight text-[#0f2a6b] md:text-3xl">
                {renderInline(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="mt-8 text-xl font-bold text-[#0f2a6b]">
                {renderInline(block.text)}
              </h3>
            );
          case "quote":
            return (
              <blockquote key={index} className="mt-6 rounded-r-2xl border-l-4 border-lime-400 bg-lime-50 px-6 py-4 text-slate-800">
                {renderInline(block.text)}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={index} className="mt-5 space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#2e9e4f]" aria-hidden="true" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="mt-5 space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f2a6b] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          default:
            return (
              <p key={index} className="mt-5">
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
