export type LicenseId = "collection" | "lending" | "money-transmitter" | "mortgage";

export interface LicenseType {
  id: LicenseId;
  slug: string;
  name: string;
  shortName: string;
  core: string;
  nmlsFamily: string;
  summary: string;
}

export const LICENSES: LicenseType[] = [
  {
    id: "collection",
    slug: "collection",
    name: "Collection / ARM",
    shortName: "Collection",
    core: "Accounts receivable management and third-party collection",
    nmlsFamily: "debt / collection company licenses, where a state manages them on NMLS",
    summary:
      "State collection-agency and related ARM licenses. This site tracks how long a filed application sits with the regulator — not whether you need the license.",
  },
  {
    id: "lending",
    slug: "lending",
    name: "Consumer lending",
    shortName: "Lending",
    core: "Consumer finance, installment, and related lender licenses",
    nmlsFamily: "consumer finance / lender company licenses on NMLS",
    summary:
      "Company-level consumer lender and consumer-finance licenses. Timelines here are about regulator review after a complete filing, not product design or rate caps.",
  },
  {
    id: "money-transmitter",
    slug: "money-transmitter",
    name: "Money transmitter",
    shortName: "Money transmitter",
    core: "Money transmission and money services businesses",
    nmlsFamily: "money services / money transmitter company licenses on NMLS",
    summary:
      "Money transmitter and related MSB company licenses. Several states publish a statutory decision clock that starts only after the file is complete — including FBI background-check results.",
  },
  {
    id: "mortgage",
    slug: "mortgage",
    name: "Mortgage company",
    shortName: "Mortgage",
    core: "Mortgage lender, broker, and servicer company licenses",
    nmlsFamily: "mortgage company licenses on NMLS; individual MLOs are a related but separate clock",
    summary:
      "Company mortgage lender, broker, and servicer licenses. Individual mortgage loan originator endorsements are adjacent and sometimes have a published review window.",
  },
];

export function getLicenseBySlug(slug: string) {
  return LICENSES.find((l) => l.slug === slug);
}
