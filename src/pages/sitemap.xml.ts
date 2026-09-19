import { SITE } from "../data/site";
import { pathsForSitemap } from "../lib/catalog";

export function GET() {
  const urls = SITE.publicIndex ? pathsForSitemap() : [];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${SITE.url}${path}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Robots-Tag": SITE.publicIndex ? "index,follow" : "noindex,nofollow",
    },
  });
}
