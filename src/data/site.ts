export const SITE = {
  name: "FastLicence",
  domain: "fastlicence.com",
  url: "https://fastlicence.com",
  /**
   * Public index. robots.txt, sitemap.xml, the robots meta tag, and
   * public/_headers stay in step with this flag.
   */
  publicIndex: true,
  tagline: "How long licensing takes",
  description:
    "A public timeline directory for U.S. collection, lending, money transmitter, and mortgage licensing. Statutory clocks and regulator-published times only. If a typical range is not published, we say it is unknown.",
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
