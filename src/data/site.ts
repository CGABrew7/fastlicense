export const SITE = {
  name: "FastLicense",
  domain: "fastlicence.com",
  url: "https://fastlicence.com",
  /**
   * Private staging lock. Public on fastlicence.com. Set false only to re-lock staging
   * and explicitly wants a public marketing index. Flip robots.txt.ts,
   * sitemap.xml.ts, Layout noindex, and public/_headers X-Robots-Tag together.
   * Do not treat a Pages preview as a launch to cornerstonelicensing.com.
   */
  publicIndex: true,
  tagline: "How long licensing takes",
  description:
    "A public timeline directory for U.S. collection, lending, money transmitter, and mortgage licensing. Statutory clocks and regulator-published times only. If a typical range is not published, we say it is unknown.",
  phone: "770-587-4595",
  cornerstone: {
    name: "Cornerstone Licensing",
    url: "https://cornerstonelicensing.com",
    contact: "https://cornerstonelicensing.com/contact",
    phone: "770-587-4595",
  },
  sisters: {
    simple: {
      name: "Licensing Made Simple",
      url: "https://licensingmadesimple.com",
      job: "who needs what, and where to file",
    },
    store: {
      name: "License Store",
      url: "https://licensestore.com",
      job: "compare providers and costs",
    },
  },
  owner: "Cornerstone Licensing",
  accessed: "2026-08-29",
} as const;
