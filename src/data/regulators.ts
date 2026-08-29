export interface Regulator {
  name: string;
  url: string;
}

/** Statewide financial-services regulator used as the default desk for the four cores. */
export const FINANCE_REGULATOR: Record<string, Regulator> = {
  AL: { name: "Alabama State Banking Department", url: "https://banking.alabama.gov/" },
  AK: { name: "Alaska Division of Banking and Securities", url: "https://www.commerce.alaska.gov/web/dbs/" },
  AZ: { name: "Arizona Department of Insurance and Financial Institutions", url: "https://difi.az.gov/" },
  AR: { name: "Arkansas Securities Department", url: "https://securities.arkansas.gov/" },
  CA: { name: "California Department of Financial Protection and Innovation", url: "https://dfpi.ca.gov/" },
  CO: { name: "Colorado Division of Banking", url: "https://banking.colorado.gov/" },
  CT: { name: "Connecticut Department of Banking", url: "https://portal.ct.gov/dob" },
  DE: { name: "Delaware Office of the State Bank Commissioner", url: "https://banking.delaware.gov/" },
  FL: { name: "Florida Office of Financial Regulation", url: "https://flofr.gov/" },
  GA: { name: "Georgia Department of Banking and Finance", url: "https://dbf.georgia.gov/" },
  HI: { name: "Hawaii Division of Financial Institutions", url: "https://cca.hawaii.gov/dfi/" },
  ID: { name: "Idaho Department of Finance", url: "https://www.finance.idaho.gov/" },
  IL: { name: "Illinois Department of Financial and Professional Regulation", url: "https://idfpr.illinois.gov/" },
  IN: { name: "Indiana Department of Financial Institutions", url: "https://www.in.gov/dfi/" },
  IA: { name: "Iowa Division of Banking", url: "https://www.idob.state.ia.us/" },
  KS: { name: "Kansas Office of the State Bank Commissioner", url: "https://www.osbckansas.org/" },
  KY: { name: "Kentucky Department of Financial Institutions", url: "https://kfi.ky.gov/" },
  LA: { name: "Louisiana Office of Financial Institutions", url: "https://www.ofi.la.gov/" },
  ME: { name: "Maine Bureau of Financial Institutions", url: "https://www.maine.gov/pfr/financialinstitutions/" },
  MD: { name: "Maryland Office of Financial Regulation", url: "https://www.labor.maryland.gov/finance/" },
  MA: { name: "Massachusetts Division of Banks", url: "https://www.mass.gov/orgs/division-of-banks" },
  MI: { name: "Michigan Department of Insurance and Financial Services", url: "https://www.michigan.gov/difs" },
  MN: { name: "Minnesota Department of Commerce", url: "https://mn.gov/commerce/" },
  MS: { name: "Mississippi Department of Banking and Consumer Finance", url: "https://www.dbcf.ms.gov/" },
  MO: { name: "Missouri Division of Finance", url: "https://finance.mo.gov/" },
  MT: { name: "Montana Division of Banking and Financial Institutions", url: "https://banking.mt.gov/" },
  NE: { name: "Nebraska Department of Banking and Finance", url: "https://ndbf.nebraska.gov/" },
  NV: { name: "Nevada Financial Institutions Division", url: "https://fid.nv.gov/" },
  NH: { name: "New Hampshire Banking Department", url: "https://www.nh.gov/banking/" },
  NJ: { name: "New Jersey Department of Banking and Insurance", url: "https://www.nj.gov/dobi/" },
  NM: { name: "New Mexico Financial Institutions Division", url: "https://www.rld.nm.gov/financial-institutions/" },
  NY: { name: "New York Department of Financial Services", url: "https://www.dfs.ny.gov/" },
  NC: { name: "North Carolina Office of the Commissioner of Banks", url: "https://www.nccob.gov/" },
  ND: { name: "North Dakota Department of Financial Institutions", url: "https://www.nd.gov/dfi/" },
  OH: { name: "Ohio Division of Financial Institutions", url: "https://com.ohio.gov/divisions-and-programs/financial-institutions" },
  OK: { name: "Oklahoma State Banking Department", url: "https://oklahoma.gov/banking.html" },
  OR: { name: "Oregon Division of Financial Regulation", url: "https://dfr.oregon.gov/" },
  PA: { name: "Pennsylvania Department of Banking and Securities", url: "https://www.dobs.pa.gov/" },
  RI: { name: "Rhode Island Department of Business Regulation", url: "https://dbr.ri.gov/" },
  SC: { name: "South Carolina Board of Financial Institutions", url: "https://consumerfinance.sc.gov/" },
  SD: { name: "South Dakota Division of Banking", url: "https://dlr.sd.gov/banking/" },
  TN: { name: "Tennessee Department of Financial Institutions", url: "https://www.tn.gov/tdfi.html" },
  TX: { name: "Texas Department of Banking", url: "https://www.dob.texas.gov/" },
  UT: { name: "Utah Department of Financial Institutions", url: "https://dfi.utah.gov/" },
  VT: { name: "Vermont Department of Financial Regulation", url: "https://dfr.vermont.gov/" },
  VA: { name: "Virginia Bureau of Financial Institutions", url: "https://scc.virginia.gov/pages/Bureau-of-Financial-Institutions" },
  WA: { name: "Washington Department of Financial Institutions", url: "https://dfi.wa.gov/" },
  WV: { name: "West Virginia Division of Financial Institutions", url: "https://dfi.wv.gov/" },
  WI: { name: "Wisconsin Department of Financial Institutions", url: "https://www.wdfi.org/" },
  WY: { name: "Wyoming Division of Banking", url: "https://wyomingbankingdivision.wyo.gov/" },
};

/** Extra desks that matter for a specific core. These do not decide who must file. */
export const EXTRA_REGULATORS: Partial<
  Record<string, Partial<Record<"collection" | "lending" | "mortgage", Regulator[]>>>
> = {
  CA: {
    mortgage: [
      {
        name: "California Department of Real Estate (MLO endorsements)",
        url: "https://www.dre.ca.gov/licensees/MLOLicense.html",
      },
    ],
  },
  TX: {
    lending: [{ name: "Texas Office of Consumer Credit Commissioner", url: "https://occc.texas.gov/" }],
  },
  NY: {
    collection: [
      {
        name: "New York City Department of Consumer and Worker Protection (city collection license)",
        url: "https://www.nyc.gov/site/dca/businesses/license-checklist-debt-collection-agency.page",
      },
    ],
  },
};

export function regulatorsFor(code: string, licenseId: string): Regulator[] {
  const primary = FINANCE_REGULATOR[code];
  const extras = EXTRA_REGULATORS[code]?.[licenseId as "collection" | "lending" | "mortgage"] ?? [];
  return primary ? [primary, ...extras] : extras;
}
