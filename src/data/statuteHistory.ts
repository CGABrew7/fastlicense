import type { LicenseId } from "./licenses";

/**
 * Statute files opened in the Global Law corpora on 2026-10-30.
 * History and blame links point at the corpus repository Global Law pins.
 * The parent repository's history view for these submodule paths lists no commits.
 */

export type StatuteJurisdiction = "CA" | "DC" | "IN" | "NJ" | "UT";

export interface StatuteLink {
  label: string;
  note: string;
  globalLawPath: string;
  historyUrl: string;
  blameUrl: string;
}

export interface StatuteHistoryGroup {
  license: LicenseId;
  licenseLabel: string;
  links: StatuteLink[];
}

export interface StatuteHistory {
  jurisdiction: StatuteJurisdiction;
  jurisdictionName: string;
  /** How the corpus license treats the statute text. */
  textAttribution: string;
  corpusLicenseUrl: string;
  groups: StatuteHistoryGroup[];
}

const CC_BY = "https://creativecommons.org/licenses/by/4.0/";

const CORPORA: Record<
  StatuteJurisdiction,
  { repo: string; prefix: string; name: string; textAttribution: string }
> = {
  CA: {
    repo: "united-states-california-law",
    prefix: "united-states/california/statutes/",
    name: "California",
    textAttribution:
      "California code text: public domain under Government Code section 10248.5.",
  },
  DC: {
    repo: "united-states-district-of-columbia-law",
    prefix: "united-states/district-of-columbia/statutes/",
    name: "District of Columbia",
    textAttribution:
      "D.C. Code text: public domain. The Council of the District of Columbia states that the codes and laws on its code website are in the public domain.",
  },
  IN: {
    repo: "united-states-indiana-law",
    prefix: "united-states/indiana/statutes/",
    name: "Indiana",
    textAttribution:
      "Indiana Code text: not subject to copyright. The title PDFs carry no copyright notice.",
  },
  NJ: {
    repo: "united-states-new-jersey-law",
    prefix: "united-states/new-jersey/statutes/",
    name: "New Jersey",
    textAttribution: "New Jersey statute text: the State claims no copyright.",
  },
  UT: {
    repo: "united-states-utah-law",
    prefix: "united-states/utah/statutes/",
    name: "Utah",
    textAttribution: "Utah Code text: the State of Utah claims no copyright.",
  },
};

interface RawFile {
  jurisdiction: StatuteJurisdiction;
  license: LicenseId;
  file: string;
  label: string;
  note: string;
}

const RAW: RawFile[] = [
  {
    jurisdiction: "CA",
    license: "collection",
    file: "fin/100001.md",
    label: "California Financial Code § 100001",
    note: "License section of the Debt Collection Licensing Act. Financial Code section 100000, in the same corpus, states that the division may be cited as the Debt Collection Licensing Act.",
  },
  {
    jurisdiction: "CA",
    license: "lending",
    file: "fin/22100.md",
    label: "California Financial Code § 22100",
    note: "License section of the California Financing Law. Financial Code section 22000 states that the division is known and may be cited as the California Financing Law.",
  },
  {
    jurisdiction: "CA",
    license: "money-transmitter",
    file: "fin/2030.md",
    label: "California Financial Code § 2030",
    note: "License section of the Money Transmission Act. Financial Code section 2000 states that the division shall be known and may be cited as the Money Transmission Act.",
  },
  {
    jurisdiction: "CA",
    license: "mortgage",
    file: "fin/50120.md",
    label: "California Financial Code § 50120",
    note: "Application section of the California Residential Mortgage Lending Act. Financial Code section 50000 states that the division will be known and may be cited as the California Residential Mortgage Lending Act.",
  },
  {
    jurisdiction: "CA",
    license: "mortgage",
    file: "bpc/10166.04.md",
    label: "California Business and Professions Code § 10166.04",
    note: "Application for a license endorsement as a mortgage loan originator.",
  },
  {
    jurisdiction: "IN",
    license: "collection",
    file: "title-25/25-11-1/25-11-1-5.md",
    label:
      "IC 25-11-1-5. Issuance of license by secretary of state; expiration; reciprocal licensing; provisional license; nonresident collection agencies",
    note: "Collection agency license issuance.",
  },
  {
    jurisdiction: "IN",
    license: "lending",
    file: "title-24/24-4.5-1/24-4.5-1-101.md",
    label: "IC 24-4.5-1-101. Not in the Indiana Code 2026",
    note: "The file states that this section is not printed in the Indiana Code 2026 and that Article 4.5 is printed as repealed. IC 4-22-2.3-6 in the same corpus refers to the Uniform Consumer Credit Code as IC 37-2. Title 37 is not in the repository.",
  },
  {
    jurisdiction: "IN",
    license: "money-transmitter",
    file: "title-28/28-8-4.1/28-8-4.1-501.md",
    label:
      "IC 28-8-4.1-501. Engaging in the business of money transmission; license required; exceptions; license not transferrable or assignable",
    note: "Money transmission license requirement. IC 28-8-4.1-101 states that the chapter may be cited as the Money Transmission Modernization Act.",
  },
  {
    jurisdiction: "IN",
    license: "mortgage",
    file: "title-23/23-2.5-3/23-2.5-3-1.md",
    label: "IC 23-2.5-3-1. Loan broker license required",
    note: "IC 23-2.5-1-14 defines a loan broker as a person who, for consideration, procures a residential mortgage loan from a third party.",
  },
  {
    jurisdiction: "NJ",
    license: "collection",
    file: "title-45/18-1.md",
    label: "N.J.S. 45:18-1. Collection agencies to file bond",
    note: "Bond filing required to conduct a collection agency.",
  },
  {
    jurisdiction: "NJ",
    license: "lending",
    file: "title-17/11C-3.md",
    label: "N.J.S. 17:11C-3. License required for consumer lender, sales finance company.",
    note: "N.J.S. 17:11C-1 states that sections 1 through 49 shall be known as the New Jersey Consumer Finance Licensing Act.",
  },
  {
    jurisdiction: "NJ",
    license: "money-transmitter",
    file: "title-17/15C-4.md",
    label: "N.J.S. 17:15C-4. License required.",
    note: "N.J.S. 17:15C-1 states that the act shall be known as the New Jersey Money Transmitters Act.",
  },
  {
    jurisdiction: "NJ",
    license: "mortgage",
    file: "title-17/11C-54.md",
    label: "N.J.S. 17:11C-54. Licensing requirements.",
    note: "The file addresses residential mortgage lender and residential mortgage broker business licenses. N.J.S. 17:11C-51 names the New Jersey Residential Mortgage Lending Act.",
  },
  {
    jurisdiction: "UT",
    license: "lending",
    file: "title-70C/70C-8-202.md",
    label: "Utah Code § 70C-8-202. Notification.",
    note: "Notification section of the Utah Consumer Credit Code. Section 70C-1-101 states that the title is known as the Utah Consumer Credit Code.",
  },
  {
    jurisdiction: "UT",
    license: "money-transmitter",
    file: "title-7/7-25-201.md",
    label: "Utah Code § 7-25-201. Licensing required.",
    note: "Section 7-25-101 states that the chapter is known as the Money Transmitter Act.",
  },
  {
    jurisdiction: "UT",
    license: "mortgage",
    file: "title-70D/70D-2-201.md",
    label: "Utah Code § 70D-2-201. Registration -- Exemptions.",
    note: "Registration section of the Mortgage Lending and Servicing Act. Section 70D-2-101 states that the chapter is known as the Mortgage Lending and Servicing Act. The file addresses engaging in business as a lender, broker, or servicer.",
  },
  {
    jurisdiction: "DC",
    license: "lending",
    file: "title-26/26-901.md",
    label:
      "D.C. Code § 26-901. Businesses required to procure license and pay tax; appointment of resident agent; service of process or notice.",
    note: "The file addresses engaging in the business of loaning money without procuring a license.",
  },
  {
    jurisdiction: "DC",
    license: "money-transmitter",
    file: "title-26/26-1002.md",
    label: "D.C. Code § 26-1002. License required.",
    note: "License required to engage in the business of money transmission.",
  },
  {
    jurisdiction: "DC",
    license: "mortgage",
    file: "title-26/26-1103.md",
    label: "D.C. Code § 26-1103. License requirements.",
    note: "The file requires a license to engage in business as a mortgage loan originator, loan officer, mortgage lender, or mortgage broker.",
  },
];

const LICENSE_LABEL: Record<LicenseId, string> = {
  collection: "Collection",
  lending: "Consumer lending",
  "money-transmitter": "Money transmitter",
  mortgage: "Mortgage",
};

function toLink(raw: RawFile): StatuteLink {
  const corpus = CORPORA[raw.jurisdiction];
  const encoded = raw.file.split("/").map(encodeURIComponent).join("/");
  return {
    label: raw.label,
    note: raw.note,
    globalLawPath: `${corpus.prefix}${raw.file}`,
    historyUrl: `https://github.com/lexifina/${corpus.repo}/commits/main/${encoded}`,
    blameUrl: `https://github.com/lexifina/${corpus.repo}/blame/main/${encoded}`,
  };
}

function build(jurisdiction: StatuteJurisdiction, rows: RawFile[]): StatuteHistory {
  const corpus = CORPORA[jurisdiction];
  const licenses: LicenseId[] = ["collection", "lending", "money-transmitter", "mortgage"];
  const groups = licenses
    .map((license) => ({
      license,
      licenseLabel: LICENSE_LABEL[license],
      links: rows.filter((row) => row.license === license).map(toLink),
    }))
    .filter((group) => group.links.length > 0);
  return {
    jurisdiction,
    jurisdictionName: corpus.name,
    textAttribution: corpus.textAttribution,
    corpusLicenseUrl: `https://github.com/lexifina/${corpus.repo}/blob/main/LICENSE.md`,
    groups,
  };
}

const BY_JURISDICTION: Record<StatuteJurisdiction, StatuteHistory> = {
  CA: build("CA", RAW.filter((row) => row.jurisdiction === "CA")),
  DC: build("DC", RAW.filter((row) => row.jurisdiction === "DC")),
  IN: build("IN", RAW.filter((row) => row.jurisdiction === "IN")),
  NJ: build("NJ", RAW.filter((row) => row.jurisdiction === "NJ")),
  UT: build("UT", RAW.filter((row) => row.jurisdiction === "UT")),
};

const STATE_TO_JURISDICTION: Record<string, StatuteJurisdiction> = {
  CA: "CA",
  IN: "IN",
  NJ: "NJ",
  UT: "UT",
};

export const HISTORY_CC_BY_URL = CC_BY;
export const HISTORY_CREDIT_URL = "https://lexifina.com";

export function statuteHistoryForState(stateCode: string): StatuteHistory | undefined {
  const jurisdiction = STATE_TO_JURISDICTION[stateCode];
  return jurisdiction ? BY_JURISDICTION[jurisdiction] : undefined;
}

export function statuteHistoryForPair(
  stateCode: string,
  license: LicenseId,
): StatuteHistory | undefined {
  const history = statuteHistoryForState(stateCode);
  if (!history) return undefined;
  const groups = history.groups.filter((group) => group.license === license);
  if (!groups.length) return undefined;
  return { ...history, groups };
}

export function districtStatuteHistory(license?: LicenseId): StatuteHistory | undefined {
  const history = BY_JURISDICTION.DC;
  if (!license) return history;
  const groups = history.groups.filter((group) => group.license === license);
  if (!groups.length) return undefined;
  return { ...history, groups };
}

/** Titles recorded for the United States Code corpus. Title 12 is not among them. */
export const USC_TITLES_IN_GLOBAL_LAW = [1, 3, 4, 9, 11, 13, 17, 35, 39] as const;
