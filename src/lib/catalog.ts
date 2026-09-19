import { CLOCKS, clocksFor, type Clock } from "../data/clocks";
import { LICENSES, type LicenseId, type LicenseType } from "../data/licenses";
import { regulatorsFor, type Regulator } from "../data/regulators";
import { SOURCES, sourceList, type Source } from "../data/sources";
import { STATES, type StateRecord } from "../data/states";

export interface TimelineRecord {
  state: StateRecord;
  license: LicenseType;
  typicalPublished: boolean;
  typicalLabel: string;
  clocks: Clock[];
  regulators: Regulator[];
  sources: Source[];
}

export function typicalLabel(clocks: Clock[]): { published: boolean; label: string } {
  const published = clocks.find((c) => c.kind === "published_typical" && !c.adjacent);
  if (published) return { published: true, label: published.label };
  const ownClocks = clocks.filter((c) => !c.adjacent);
  if (ownClocks.length) {
    return {
      published: false,
      label: "Typical range unknown — statutory clock cited",
    };
  }
  if (clocks.some((c) => c.adjacent)) {
    return { published: false, label: "Typical range unknown — adjacent clock cited" };
  }
  return { published: false, label: "Typical range unknown" };
}

export function recordFor(state: StateRecord, license: LicenseType): TimelineRecord {
  const clocks = clocksFor(state.code, license.id);
  const { published, label } = typicalLabel(clocks);
  const sourceIds = new Set<string>(["nmls_checklist"]);
  for (const clock of clocks) {
    for (const id of clock.sourceIds) sourceIds.add(id);
  }
  if (license.id === "mortgage") sourceIds.add("safe_act");
  if (license.id === "money-transmitter") {
    sourceIds.add("csbs_mtma");
    sourceIds.add("csbs_mtma_model");
  }
  return {
    state,
    license,
    typicalPublished: published,
    typicalLabel: label,
    clocks,
    regulators: regulatorsFor(state.code, license.id),
    sources: sourceList([...sourceIds]),
  };
}

export function allRecords(): TimelineRecord[] {
  const rows: TimelineRecord[] = [];
  for (const state of STATES) {
    for (const license of LICENSES) {
      rows.push(recordFor(state, license));
    }
  }
  return rows;
}

export function pathsForSitemap(): string[] {
  const staticPaths = [
    "/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/methodology/",
    "/delays/",
    "/expedite/",
    "/licenses/",
    "/states/",
  ];
  const licensePaths = LICENSES.map((l) => `/licenses/${l.slug}/`);
  const statePaths = STATES.map((s) => `/states/${s.slug}/`);
  const pairPaths = STATES.flatMap((s) =>
    LICENSES.map((l) => `/licenses/${l.slug}/${s.slug}/`),
  );
  return [...staticPaths, ...licensePaths, ...statePaths, ...pairPaths];
}

export function citedClockCount() {
  return CLOCKS.length;
}

export function licenseById(id: LicenseId) {
  return LICENSES.find((l) => l.id === id)!;
}

export { SOURCES };
