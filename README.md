# FastLicense

The **speed / timeline satellite** in the three-site Cornerstone Licensing directory play. It answers how long a filed company license can sit, what commonly stops the clock, and whether a real expedite exists. Typical weeks stay **unknown** unless a statute or regulator page is cited.

This repo is the Cornerstone CE / licensing context for FastLicense. It is **not** a marketing publish to [cornerstonelicensing.com](https://cornerstonelicensing.com). Filing work stays on that desk. Do not spend money, change production DNS, or contact regulators from this satellite.

Owner: Jeff Brewer / Hanok. Operating partner: Cornerstone Licensing.

## Three-site split

| Site | Job |
| --- | --- |
| **This site** (`fastlicense.com`) | How long, what delays, when expedite is real |
| [Licensing Made Simple](https://licensingmadesimple.com) | Who needs what, and where to file |
| [License Store](https://licensestore.com) | Compare providers and costs |
| [Cornerstone Licensing](https://cornerstonelicensing.com) | Sequence and file the work |

Four cores: collection / ARM, consumer lending, money transmitter, mortgage company. 50 states × 4 cores = 200 pair pages.

## Private staging (current)

`SITE.publicIndex` in `src/data/site.ts` is **false**. Until that flag is flipped:

- Every page sends `noindex,nofollow`
- `robots.txt` disallows crawlers
- `sitemap.xml` is empty
- Cloudflare Pages `_headers` sends `X-Robots-Tag: noindex, nofollow`
- A muted footer note records private staging for internal review. The header and homepage lead do not.

Use the Cloudflare Pages preview as the demo, not the custom domain.

- Production Pages: https://fastlicense.pages.dev
- Do **not** attach or advertise `fastlicense.com` from this workstream. DNS still points at a host that times out on HTTPS.
- Do **not** edit or publish pages on cornerstonelicensing.com from this repo.

Default branch is **`master`**. A leftover `main` branch is the August 10 marketing stub. Do not point Cloudflare Pages production at `main`.

## Demo walk (no spend)

1. Home — four cores, sister-site split, Cornerstone CTA.
2. `/licenses/money-transmitter/texas/` — cited 120-day complete-application clock, deemed approval.
3. `/licenses/mortgage/california/` — typical range unknown; CA DRE MLO three-week window marked **adjacent**.
4. `/licenses/collection/alabama/` — typical range unknown on purpose.
5. `/delays/` and `/expedite/` — completeness, CBC name checks, no paid skip-the-line.
6. `/methodology/` — statutory clock ≠ typical wait.
7. `/contact/` — phone and Cornerstone contact URL only. No application form on this domain.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # writes ./dist
npm run preview  # serves the build
```

Node 20+ recommended. No environment variables are required.

## Cloudflare Pages

Already connected as project `fastlicense` (Astro, `npm run build`, output `dist`). Same attach path as the other Hanok satellites. Custom-domain attach and any DNS change are a separate job, not part of private staging.

When a public launch is actually approved, flip `SITE.publicIndex` to `true` and drop the `X-Robots-Tag` line in `public/_headers`.

## Facts rule

Only clocks in `src/data/clocks.ts` may print a timeframe. Cited in this build (accessed 2026-08-29 unless noted):

- TX / VA / IL / MO money transmitter — statutory 120-day complete-application clocks (deemed approval where the section says so)
- NY money transmitter — 90-day filing clock, no deemed approval
- CA DRE MLO endorsement — “reviewed within 3 weeks” as of 4 May 2026, **adjacent only**

NMLS is a filing channel, not a timer. Who-must-file stays on licensingmadesimple.com. Costs stay on licensestore.com.

## Out of scope

- Public marketing publish to cornerstonelicensing.com
- DNS / TLS for fastlicense.com
- Paid Cloudflare or domain spend
- Regulator phone calls or email
- Invented fast-track week ranges, vendor rankings, or testimonials
