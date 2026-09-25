import Link from "next/link";

// Lets plain data strings carry links: "see the [Ayodhya guide](/travel-guides/lucknow-to-ayodhya-taxi)".
const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Same string without the link markup, for JSON-LD and other plain-text uses.
export function plainText(text) {
  return text.replace(LINK_PATTERN, "$1");
}

export default function LinkedText({ text }) {
  const parts = [];
  let last = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    const [whole, label, href] = match;
    const internal = href.startsWith("/") || href.startsWith("#");

    parts.push(
      internal ? (
        <Link key={match.index} href={href}>
          {label}
        </Link>
      ) : (
        <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ),
    );

    last = match.index + whole.length;
  }

  if (last < text.length) parts.push(text.slice(last));

  return <>{parts}</>;
}
