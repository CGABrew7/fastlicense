import { LICENSES } from "../data/licenses";
import { SITE } from "../data/site";
import { STATES } from "../data/states";
import { pathsForSitemap } from "../lib/catalog";

const blurbs: Record<string, string> = {
  "/": "Cited clocks for collection, lending, money transmitter, and mortgage company licenses.",
  "/about/": "Who keeps the directory. Filing contact is Cornerstone Licensing.",
  "/contact/": "Contact Cornerstone Licensing. This domain does not take applications.",
  "/privacy/": "Privacy notes for a static directory.",
  "/methodology/": "When a number is printed, and why a blank stays blank.",
  "/delays/": "What commonly stops a file before a statutory clock starts.",
  "/expedite/": "When a faster review path is actually published.",
  "/guides/how-long-does-a-business-license-take/":
    "How long a business license takes, and when the clock starts.",
  "/licenses/": "The four license cores.",
  "/states/": "Fifty-state index.",
};

function blurbFor(path: string): string {
  if (blurbs[path]) return blurbs[path];
  const pair = path.match(/^\/licenses\/([^/]+)\/([^/]+)\/$/);
  if (pair) {
    const license = LICENSES.find((item) => item.slug === pair[1]);
    const state = STATES.find((item) => item.slug === pair[2]);
    if (license && state) return `${license.name} timeline in ${state.name}.`;
  }
  const type = path.match(/^\/licenses\/([^/]+)\/$/);
  if (type) {
    const license = LICENSES.find((item) => item.slug === type[1]);
    if (license) return `${license.name} timelines by state.`;
  }
  const state = path.match(/^\/states\/([^/]+)\/$/);
  if (state) {
    const record = STATES.find((item) => item.slug === state[1]);
    if (record) return `${record.name} timelines for the four cores.`;
  }
  return "Public page.";
}

function titleFor(path: string): string {
  if (path === "/") return "Home";
  const pair = path.match(/^\/licenses\/([^/]+)\/([^/]+)\/$/);
  if (pair) {
    const license = LICENSES.find((item) => item.slug === pair[1]);
    const state = STATES.find((item) => item.slug === pair[2]);
    if (license && state) return `${state.name} ${license.shortName}`;
  }
  const type = path.match(/^\/licenses\/([^/]+)\/$/);
  if (type) {
    const license = LICENSES.find((item) => item.slug === type[1]);
    if (license) return license.name;
  }
  const state = path.match(/^\/states\/([^/]+)\/$/);
  if (state) {
    const record = STATES.find((item) => item.slug === state[1]);
    if (record) return record.name;
  }
  const known: Record<string, string> = {
    "/about/": "About",
    "/contact/": "Contact",
    "/privacy/": "Privacy",
    "/methodology/": "Methods",
    "/delays/": "Delays",
    "/expedite/": "Expedite",
    "/guides/how-long-does-a-business-license-take/": "How long a business license takes",
    "/licenses/": "Licenses",
    "/states/": "States",
  };
  return known[path] ?? path;
}

export function GET() {
  const pages = pathsForSitemap();
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} publishes cited statutory clocks and regulator-published waits for United States company licenses. A typical range stays unknown unless a public source states it. ${SITE.cornerstone.name} prepares and files the work. This site does not take applications.`,
    "",
    "## Contact",
    "",
    `- [${SITE.cornerstone.name}](${SITE.cornerstone.contact}): filing questions and timeline reviews.`,
    `- [About](${SITE.url}/about/): who keeps the pages.`,
    `- [Contact](${SITE.url}/contact/): how to reach ${SITE.cornerstone.name}.`,
    "",
    "## Every public page",
    "",
    ...pages.map((path) => `- [${titleFor(path)}](${SITE.url}${path}): ${blurbFor(path)}`),
    "",
    `Sitemap: ${SITE.url}/sitemap.xml`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
