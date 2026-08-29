export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  accessed: string;
}

export const SOURCES: Record<string, Source> = {
  nmls_checklist: {
    id: "nmls_checklist",
    title: "Licensing Checklists, Requirements, and Fees",
    publisher: "NMLS Resource Center (CSBS / SRR)",
    url: "https://mortgage.nationwidelicensingsystem.org/knowledge/Products/nmls/stateresourcecenter/SitePages/Checklist-Compiler.aspx",
    accessed: "2026-08-29",
  },
  nmls_policy: {
    id: "nmls_policy",
    title: "NMLS Policy Guidebook for Licensees (archive copy dated 17 April 2026)",
    publisher: "NMLS Resource Center",
    url: "https://mortgage.nationwidelicensingsystem.org/knowledge/Products/nmls/stateresourcecenter/NMLSPolicyGuideArchives/NMLS%20Policy%20Guidebook%20for%20Licensees%2004172026.pdf",
    accessed: "2026-08-29",
  },
  nmls_cbc: {
    id: "nmls_cbc",
    title: "Criminal Background Check (federal MLO / NMLS CBC process)",
    publisher: "NMLS Resource Center",
    url: "https://mortgage.nationwidelicensingsystem.org/knowledge/Products/nmls/pubs/ugCompFed/licensing/institution_Fed/maps/topics/regFedComp_MLO_CBC.html",
    accessed: "2026-08-29",
  },
  nmls_mu2_cbc: {
    id: "nmls_mu2_cbc",
    title: "Criminal Background Check (CBC) for MU2 control persons",
    publisher: "NMLS Policy Guide",
    url: "https://mortgage.nationwidelicensingsystem.org/knowledge/Products/nmls/pubs/policyGuide/reference/policyGuide/maps/topics/nmlsPG_ch3_MU2_CBC.html",
    accessed: "2026-08-29",
  },
  csbs_mtma: {
    id: "csbs_mtma",
    title: "CSBS Money Transmission Modernization Act (MTMA)",
    publisher: "Conference of State Bank Supervisors",
    url: "https://www.csbs.org/csbs-money-transmission-modernization-act-mtma",
    accessed: "2026-08-29",
  },
  csbs_mtma_model: {
    id: "csbs_mtma_model",
    title: "CSBS Model Money Transmission Modernization Act (13 September 2021)",
    publisher: "Conference of State Bank Supervisors",
    url: "https://www.csbs.org/sites/default/files/2021-09/CSBS%20Model%20Money%20Transmission%20Modernization%20Act_09.13.21.pdf",
    accessed: "2026-08-29",
  },
  tx_fin_152: {
    id: "tx_fin_152",
    title: "Texas Finance Code § 152.106 — Issuance of License",
    publisher: "Texas Legislature",
    url: "https://statutes.capitol.texas.gov/Docs/FI/htm/FI.152.htm",
    accessed: "2026-08-29",
  },
  va_mt: {
    id: "va_mt",
    title: "Virginia Code § 6.2-1933 — Issuance of license",
    publisher: "Virginia Legislative Information System",
    url: "https://law.lis.virginia.gov/vacode/title6.2/chapter19.1/section6.2-1933/",
    accessed: "2026-08-29",
  },
  il_mtma: {
    id: "il_mtma",
    title: "205 ILCS 658 — Uniform Money Transmission Modernization Act",
    publisher: "Illinois General Assembly",
    url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4543&ChapterID=5",
    accessed: "2026-08-29",
  },
  mo_mt: {
    id: "mo_mt",
    title: "Missouri Revised Statutes § 361.942 — Issuance of license",
    publisher: "Missouri Revisor of Statutes",
    url: "https://revisor.mo.gov/main/OneSection.aspx?section=361.942",
    accessed: "2026-08-29",
  },
  ny_bnk_642: {
    id: "ny_bnk_642",
    title: "New York Banking Law § 642 — Application for license",
    publisher: "New York State Senate",
    url: "https://www.nysenate.gov/legislation/laws/BNK/642",
    accessed: "2026-08-29",
  },
  ny_dfs_mt: {
    id: "ny_dfs_mt",
    title: "Money Transmitter Licensing",
    publisher: "New York Department of Financial Services",
    url: "https://www.dfs.ny.gov/apps_and_licensing/money_transmitters",
    accessed: "2026-08-29",
  },
  ca_dre_times: {
    id: "ca_dre_times",
    title: "Current Processing Timeframes",
    publisher: "California Department of Real Estate",
    url: "https://www.dre.ca.gov/Licensees/CurrentTimeframes.html",
    accessed: "2026-08-29",
  },
  ca_dre_mlo: {
    id: "ca_dre_mlo",
    title: "MLO License Endorsement Information",
    publisher: "California Department of Real Estate",
    url: "https://www.dre.ca.gov/licensees/MLOLicense.html",
    accessed: "2026-08-29",
  },
  safe_act: {
    id: "safe_act",
    title: "Secure and Fair Enforcement for Mortgage Licensing Act (12 U.S.C. § 5101 et seq.)",
    publisher: "U.S. Government Publishing Office",
    url: "https://www.govinfo.gov/app/details/USCODE-2023-title12/USCODE-2023-title12-chap51",
    accessed: "2026-08-29",
  },
};

export function sourceList(ids: string[]): Source[] {
  return ids.map((id) => {
    const source = SOURCES[id];
    if (!source) throw new Error(`Unknown source id: ${id}`);
    return source;
  });
}
