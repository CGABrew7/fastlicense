import type { LicenseId } from "./licenses";
import { SOURCES, type Source } from "./sources";

export type ClockKind = "statutory" | "published_typical";

export interface Clock {
  state: string;
  license: LicenseId;
  kind: ClockKind;
  label: string;
  summary: string;
  days?: number;
  clockStarts: string;
  deemedApproval: boolean;
  extendable: boolean;
  /** Adjacent product (e.g. individual MLO) — do not treat as this license's typical time. */
  adjacent?: boolean;
  asOf?: string;
  sourceIds: string[];
}

/**
 * Only clocks we can point at a statute or a regulator-published timeframe.
 * Typical "X–Y weeks" ranges that are not on those pages stay off this list.
 */
export const CLOCKS: Clock[] = [
  {
    state: "TX",
    license: "money-transmitter",
    kind: "statutory",
    label: "120 days after the application is complete",
    summary:
      "The banking commissioner must approve or deny a completed money-services application by the 120th day after the completion date. If neither happens, the application is approved and the license takes effect the next business day. The period may be extended for good cause.",
    days: 120,
    clockStarts: "the date the commissioner determines the application is complete",
    deemedApproval: true,
    extendable: true,
    sourceIds: ["tx_fin_152"],
  },
  {
    state: "VA",
    license: "money-transmitter",
    kind: "statutory",
    label: "120 days after the application is complete",
    summary:
      "Once the State Corporation Commission determines a money-transmitter application is complete, it must approve or deny within 120 days. Silence after that window is deemed approval, effective the next business day, unless the Commission extends the period for good cause.",
    days: 120,
    clockStarts: "the date the Commission determines the application is complete",
    deemedApproval: true,
    extendable: true,
    sourceIds: ["va_mt"],
  },
  {
    state: "IL",
    license: "money-transmitter",
    kind: "statutory",
    label: "120-day complete-application clock under the Illinois MTMA",
    summary:
      "Illinois replaced its prior transmitters-of-money statute with the Uniform Money Transmission Modernization Act (205 ILCS 658). The CSBS model that statute follows — and the Illinois act implements — requires an approve-or-deny decision within 120 days after the file is complete, with deemed approval if the secretary does neither. Completeness includes required items such as FBI criminal-background-check results.",
    days: 120,
    clockStarts: "the date the application is determined complete under 205 ILCS 658",
    deemedApproval: true,
    extendable: true,
    sourceIds: ["il_mtma", "csbs_mtma_model"],
  },
  {
    state: "MO",
    license: "money-transmitter",
    kind: "statutory",
    label: "120 days after the application is complete",
    summary:
      "Missouri Revised Statutes § 361.942 requires the director to approve or deny a completed money-transmission application within 120 days of the completion date. If neither happens, the application is approved by operation of law and the license takes effect the next business day. The director may extend the period for good cause.",
    days: 120,
    clockStarts: "the completion date recorded by the Division of Finance",
    deemedApproval: true,
    extendable: true,
    sourceIds: ["mo_mt"],
  },
  {
    state: "NY",
    license: "money-transmitter",
    kind: "statutory",
    label: "90 days from filing, extendable with the applicant’s written consent",
    summary:
      "Banking Law § 642 says the superintendent shall approve conditionally or deny a money-transmitter application within ninety days from the filing. That period may be extended by the applicant’s written consent. The statute does not treat silence as approval. DFS also states that no application is complete until the department has every required item, document, and fee.",
    days: 90,
    clockStarts: "filing — but DFS will not treat the file as complete until all required items arrive",
    deemedApproval: false,
    extendable: true,
    sourceIds: ["ny_bnk_642", "ny_dfs_mt"],
  },
  {
    state: "CA",
    license: "mortgage",
    kind: "published_typical",
    label: "DRE: new MLO endorsement filings reviewed within 3 weeks (as of 4 May 2026)",
    summary:
      "The California Department of Real Estate publishes current processing times for mortgage loan originator license endorsements. As of 4 May 2026, DRE said new filings and sponsorship requests were reviewed within three weeks of submission. That is an individual MLO-endorsement clock, not a published typical time for a company mortgage lender or broker license at DFPI. DRE lists common delays: duplicate filings, unanswered questions, missing course information, and waiting on DOJ/FBI fingerprint reports.",
    days: 21,
    clockStarts: "submission of the NMLS MLO endorsement filing to DRE",
    deemedApproval: false,
    extendable: false,
    adjacent: true,
    asOf: "2026-05-04",
    sourceIds: ["ca_dre_times", "ca_dre_mlo"],
  },
];

export function clocksFor(state: string, license: LicenseId): Clock[] {
  return CLOCKS.filter((c) => c.state === state && c.license === license);
}

export function clocksForLicense(license: LicenseId): Clock[] {
  return CLOCKS.filter((c) => c.license === license);
}

export function clocksForState(state: string): Clock[] {
  return CLOCKS.filter((c) => c.state === state);
}

export function clockSources(clock: Clock): Source[] {
  return clock.sourceIds.map((id) => SOURCES[id]);
}
