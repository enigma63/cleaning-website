// Atlanta Cleaners triangle mark, redrawn from the company letterhead.
export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true">
      <polygon points="50,2 4,86 50,60" fill="#d62828" />
      <polygon points="50,2 50,60 96,86" fill="#2e9e4f" />
      <polygon points="4,86 50,60 96,86" fill="#1d3f9a" />
    </svg>
  );
}
