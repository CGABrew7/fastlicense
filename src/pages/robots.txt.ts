import { SITE } from "../data/site";

export function GET() {
  const body = SITE.publicIndex
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  const headers: Record<string, string> = {
    "Content-Type": "text/plain; charset=utf-8",
  };
  if (!SITE.publicIndex) headers["X-Robots-Tag"] = "noindex, nofollow";
  return new Response(body, { headers });
}
