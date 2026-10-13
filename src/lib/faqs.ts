import type { LicenseType } from "../data/licenses";
import { SITE } from "../data/site";
import type { StateRecord } from "../data/states";

export interface FaqItem {
  question: string;
  answerHtml: string;
  answerText: string;
}

export function homeFaqs(cited: number): FaqItem[] {
  return [
    {
      question: "What is a statutory clock?",
      answerHtml:
        "<p>A statute that tells the agency to approve or deny within a stated number of days after a defined start, usually the date the application is complete. It is an outer bound. Several money-transmitter statutes allow an extension for good cause. Deemed approval, silence counting as a yes, is marked only where the cited section says so. New York's money-transmitter statute does not.</p>",
      answerText:
        "A statute that tells the agency to approve or deny within a stated number of days after a defined start, usually the date the application is complete. It is an outer bound. Several money-transmitter statutes allow an extension for good cause. Deemed approval, silence counting as a yes, is marked only where the cited section says so. New York's money-transmitter statute does not.",
    },
    {
      question: "Why do most state pages leave the typical range blank?",
      answerHtml: `<p>A typical range is printed only when the regulator publishes one. This build has ${cited} clocks with a statute or a regulator-published timeframe, accessed ${SITE.accessed}. The other state and license pairs stay blank. The method is written out on the <a href="/methodology/">methods</a> page.</p>`,
      answerText: `A typical range is printed only when the regulator publishes one. This build has ${cited} clocks with a statute or a regulator-published timeframe, accessed ${SITE.accessed}. The other state and license pairs stay blank. The method is written out on the methods page.`,
    },
    {
      question: "Does filing on NMLS start the clock?",
      answerHtml:
        "<p>NMLS is how many of these company licenses are requested. It does not replace the state review clock. Completeness (documents, fees, attestations, and where required the FBI background-check response) is what starts most of the statutory clocks cited here.</p>",
      answerText:
        "NMLS is how many of these company licenses are requested. It does not replace the state review clock. Completeness (documents, fees, attestations, and where required the FBI background-check response) is what starts most of the statutory clocks cited here.",
    },
    {
      question: "What usually consumes the calendar before a statute starts?",
      answerHtml:
        '<p>A file the agency has not marked complete. NMLS describes FBI fingerprint results as usually about 48 hours, and name-check processing as up to 90 days. Prints older than 180 days expire. Control-person gaps, a bond in the wrong name, financials that do not match the statute, and an on-site exam are the other delays this desk cites. The list is on <a href="/delays/">delays</a>.</p>',
      answerText:
        "A file the agency has not marked complete. NMLS describes FBI fingerprint results as usually about 48 hours, and name-check processing as up to 90 days. Prints older than 180 days expire. Control-person gaps, a bond in the wrong name, financials that do not match the statute, and an on-site exam are the other delays this desk cites. The list is on the delays page.",
    },
    {
      question: "Is California's three-week figure the company mortgage timeline?",
      answerHtml:
        "<p>California DRE said, as of 4 May 2026, that new mortgage loan originator endorsement filings were reviewed within three weeks of submission. That is an individual endorsement clock. It is labeled adjacent on the California mortgage page. It is not a published typical time for a company lender or broker license at DFPI.</p>",
      answerText:
        "California DRE said, as of 4 May 2026, that new mortgage loan originator endorsement filings were reviewed within three weeks of submission. That is an individual endorsement clock. It is labeled adjacent on the California mortgage page. It is not a published typical time for a company lender or broker license at DFPI.",
    },
    {
      question: "Is a paid expedite part of these licenses?",
      answerHtml:
        '<p>For these four cores, the directory does not cite a general, regulator-published paid expedite that shortens company-license review. What moves a date is a complete first filing: the MU1 and state checklist, background checks inside the fingerprint window, the bond in the name the checklist uses, and answers to deficiency letters. Detail is on <a href="/expedite/">expedite</a>.</p>',
      answerText:
        "For these four cores, the directory does not cite a general, regulator-published paid expedite that shortens company-license review. What moves a date is a complete first filing: the MU1 and state checklist, background checks inside the fingerprint window, the bond in the name the checklist uses, and answers to deficiency letters. Detail is on the expedite page.",
    },
    {
      question: "Who prepares the application?",
      answerHtml: `<p>${SITE.cornerstone.name}. ${SITE.name} publishes the clocks. Use <a href="${SITE.cornerstone.contact}">Ask Cornerstone</a> for a timeline review of a real file. Keep social-security numbers and full financials on that desk, not in a note to this satellite.</p>`,
      answerText: `${SITE.cornerstone.name}. ${SITE.name} publishes the clocks. Use Ask Cornerstone for a timeline review of a real file. Keep social-security numbers and full financials on that desk, not in a note to this satellite.`,
    },
    {
      question: "I am reading this from the UK. Are FCA timelines here?",
      answerHtml:
        "<p>These pages cite United States statutes and United States regulator notices for the four cores. An FCA authorisation timetable is a different desk and is not published here. If the filing is in a U.S. state, read that state's page, then ask Cornerstone to sequence the file.</p>",
      answerText:
        "These pages cite United States statutes and United States regulator notices for the four cores. An FCA authorisation timetable is a different desk and is not published here. If the filing is in a U.S. state, read that state's page, then ask Cornerstone to sequence the file.",
    },
  ];
}

export function guideFaqs(input: {
  day120?: number;
  clocks: { state: StateRecord; license: LicenseType; label: string }[];
  suretyUrl: string;
}): FaqItem[] {
  const clockList = input.clocks.map(({ state, label }) => `${state.name}: ${label}`).join(" ");
  const clockItems = input.clocks
    .map(
      ({ state, license, label }) =>
        `<li><a href="/licenses/${license.slug}/${state.slug}/">${state.name}</a>. ${label}</li>`,
    )
    .join("");
  const day120Sentence = input.day120
    ? `Some money transmitter pages in this directory cite ${input.day120} days after a complete application. Read the state page that carries that label.`
    : "This directory does not currently cite a 120 day money transmitter clock.";

  return [
    {
      question: "Does the clock start when I click submit?",
      answerHtml:
        "<p>Usually no. On most of these licenses the statutory period starts when the application is complete. Submit means the channel accepted the package. Check the citation on your state and license page before your team counts days.</p>",
      answerText:
        "Usually no. On most of these licenses the statutory period starts when the application is complete. Submit means the channel accepted the package. Check the citation on your state and license page before your team counts days.",
    },
    {
      question: "Why is the timeline blank for my state?",
      answerHtml:
        '<p>The blank is intentional. A figure appears only when a statute or regulator page publishes it. Do not copy another state\'s number. Open the <a href="/licenses/">license</a> and <a href="/states/">state</a> pages and keep the cell that is already there.</p>',
      answerText:
        "The blank is intentional. A figure appears only when a statute or regulator page publishes it. Do not copy another state's number. Open the license and state pages and keep the cell that is already there.",
    },
    {
      question: "Is 120 days the normal wait for a money transmitter license?",
      answerHtml: `<p>No. A deadline on a statute is not a national average and not approval on the last day. ${day120Sentence}</p>${
        clockItems ? `<ul>${clockItems}</ul>` : ""
      }`,
      answerText: `No. A deadline on a statute is not a national average and not approval on the last day. ${day120Sentence}${
        clockList ? ` ${clockList}` : ""
      }`,
    },
    {
      question: "Does NMLS decide how long approval takes?",
      answerHtml:
        "<p>No. NMLS is the filing channel for many of these applications. The state keeps the review clock. Channel status and the state's completeness test are separate facts. Track both.</p>",
      answerText:
        "No. NMLS is the filing channel for many of these applications. The state keeps the review clock. Channel status and the state's completeness test are separate facts. Track both.",
    },
    {
      question: "Can I expedite a collection, lending, mortgage, or money transmission file?",
      answerHtml:
        '<p>Only where that state offers a faster path. Read <a href="/expedite/">expedite</a> with the state page. A firm cannot compress a review the regulator did not create. You can still shorten the time it takes to reach a complete file.</p>',
      answerText:
        "Only where that state offers a faster path. Read the expedite page with the state page. A firm cannot compress a review the regulator did not create. You can still shorten the time it takes to reach a complete file.",
    },
    {
      question: "What if a bond has to land before review starts?",
      answerHtml: `<p>Treat the bond as a completeness item. While it is missing, the review clock may not be running. Read <a href="${input.suretyUrl}" target="_blank" rel="noopener">SuretyResearch</a> for the bond path, then ask Cornerstone to sequence bond steps with the license clock.</p>`,
      answerText:
        "Treat the bond as a completeness item. While it is missing, the review clock may not be running. Read SuretyResearch for the bond path, then ask Cornerstone to sequence bond steps with the license clock.",
    },
  ];
}
