export interface DelayFactor {
  id: string;
  title: string;
  summary: string;
  sourceIds: string[];
}

export const DELAYS: DelayFactor[] = [
  {
    id: "incomplete",
    title: "The file is not complete",
    summary:
      "Statutory clocks almost always start on a completeness date, not the day you hit submit. NMLS and state checklists treat a filing as incomplete until every required document, fee, attestation, and background-check response is in. A deficiency letter usually stops or resets that clock.",
    sourceIds: ["nmls_checklist", "csbs_mtma_model", "ny_dfs_mt"],
  },
  {
    id: "cbc",
    title: "FBI criminal background check",
    summary:
      "NMLS documents the FBI criminal background check used for mortgage loan originators and, where a state requires it, for company control persons on the MU2. Prints usually return in about 48 hours. If the FBI sends the request to name-check processing, NMLS says results may take up to 90 days. Fingerprints not taken within 180 days expire and must be paid for again.",
    sourceIds: ["nmls_cbc", "nmls_mu2_cbc"],
  },
  {
    id: "control-persons",
    title: "Control-person and MU2 gaps",
    summary:
      "Company applications stall when a direct owner, indirect owner, or qualifying individual has not authorized a required CBC, credit report, or attestation. The NMLS policy guide says CBC results go to the regulator, not the applicant, and a missing state authorization means the check has to be paid for again.",
    sourceIds: ["nmls_mu2_cbc", "nmls_policy"],
  },
  {
    id: "financials",
    title: "Financial statements and net-worth proof",
    summary:
      "Money-transmitter and many lender filings require financials that match the statute. The CSBS model MTMA treats completeness as a facial check that required items — including the FBI response — are present. Substance review of financial condition happens after that, and weak or stale statements produce more questions, not a faster clock.",
    sourceIds: ["csbs_mtma_model", "nmls_checklist"],
  },
  {
    id: "bond",
    title: "Surety bond or security not posted",
    summary:
      "Many of these licenses cannot be issued until the required surety bond or alternative security is in place. The bond itself is not a processing-time figure, but a missing or wrongly-named obligee is a classic reason a complete-looking file still sits.",
    sourceIds: ["nmls_checklist"],
  },
  {
    id: "exam",
    title: "Investigation or on-site exam",
    summary:
      "The CSBS model money-transmission act lets the commissioner investigate financial condition, character, and fitness, and may include an on-site investigation at the applicant’s expense. That work happens after completeness. It is not an official expedite lane.",
    sourceIds: ["csbs_mtma_model"],
  },
  {
    id: "multistate",
    title: "Parallel state queues",
    summary:
      "NMLS lets a company apply to multiple states from one record. Each state still reviews on its own clock. A deficiency in one state does not automatically pause another, and a 120-day statute in one MTMA state says nothing about a neighbor that never adopted that clock.",
    sourceIds: ["nmls_policy", "csbs_mtma"],
  },
];

export function delayById(id: string) {
  return DELAYS.find((d) => d.id === id);
}
