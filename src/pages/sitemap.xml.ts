import { SITE } from "../data/site";
import { pathsForSitemap } from "../lib/catalog";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const urls = SITE.publicIndex ? pathsForSitemap() : [];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${xmlEscape(`${SITE.url}${path}`)}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
