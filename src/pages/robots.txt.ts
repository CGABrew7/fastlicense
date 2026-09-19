import { SITE } from "../data/site";

export function GET() {
  const body = SITE.publicIndex
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}
