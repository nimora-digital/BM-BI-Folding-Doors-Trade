# Nimora Digital handoff

Prepared 18 October 2026. Status: built and tested locally; not deployed to a public HTTPS site. No Netlify or GitHub deployment credentials were supplied. This export is the manual-deployment deliverable requested in the brief.

## Design and implementation

A premium architectural trade experience using graphite, navy, crisp blue, large typography, precise grids and product-led imagery. Includes the homepage, filterable seven-category catalogue, seven dedicated product pages, trade supply, installation, account enquiries, quote request, inspiration gallery, about, FAQs, contact, three legal drafts, submission result and custom 404. See README for all routes.

The homepage contains trade introduction, all seven product categories, service discussion points, four-stage enquiry journey, account CTA, inspiration and final RFQ CTA. Product pages cover applications, design considerations, material/finish discussions, supply coordination, questions and related categories without unsupported performance claims.

Forms collect test enquiries, validate them server-side and save them privately using Netlify Blobs. No notifications, email acknowledgements or CRM forwarding are activated. There are no fake logins, invented prices, reviews, guarantees or manufacturer authorisations.

## Verification results

- Clean `npm ci` succeeded with the lockfile on Node 22.17.1.
- Production TypeScript and Vite build passed.
- Five automated tests passed: normalisation/valid inputs; invalid fields; malformed/oversized data; account-specific requirements; real local Netlify Blobs persistence/readback and repeat-submit throttling.
- Storage test also checks invalid email, honeypot rejection and method rejection through the actual function handler. Fictional test records are removed after the test.
- Browser accessed the production preview. Every page and the custom 404 rendered with the intended heading and page title.
- Desktop layout inspected at 1440 × 1000; mobile homepage inspected at 390 × 844. Representative product, catalogue, forms, gallery and policy pages had no horizontal overflow at the mobile width.
- Mobile navigation opens; catalogue category filter changes the result set; gallery viewer opens and Escape closes it; native required-field validation blocks empty submissions.
- Browser form with fictional details correctly reported that static-preview storage was unavailable. It did not display a simulated success result.
- Local assets loaded during browser checks. Below-the-fold images use lazy loading. Final WebP images were checked after the final build.
- Browser console checked during form tests: no application warnings/errors captured. Static-preview backend requests are expected to fail because Vite does not run Netlify Functions.
- Route entry files, noindex metadata, blocking robots.txt, sitemap, canonical generation, Website structured data, security headers and custom Netlify 404 configuration are included.

## Remaining verification and limitations

No public deployment, deployed HTTPS URL, Netlify build log, platform storage permissions or end-to-end deployed submission has been verified. Run the deployment smoke checks in README before sharing a hosted demonstration. The locally tested backend is real code and storage integration, but a local test is not proof of a successful hosted deployment.

The React site requires JavaScript. Static route entry shells are generated, but full page content is rendered by React rather than server-rendered. It remains noindex for this demonstration. Automated accessibility audits, broad cross-browser testing and load testing have not been performed.

The supplied Nimora master instructions were referenced by the brief but were not included in the attachment or available workspace. This implementation follows the supplied detailed brief. Typography uses system sans-serif fonts and authored CSS rather than downloaded fonts or Tailwind; React/Vite/TypeScript are used as requested.

The rate limiter is a basic demo control, not a distributed atomic limit. There is no CAPTCHA, upload service, admin dashboard, CMS, analytics, production account system or notification service. Blobs administrators need a retention and deletion procedure. Hosting usage and optional services may incur provider charges; no paid plan was purchased.

## Customer sign-off checklist

- [ ] Authorise the website, its official operator and the transition from prospect demonstration to production.
- [ ] Confirm the trade phone **+44 1642 227935**. The brief and existing company website differ: the website advertises **01642 227035** and **0800 025 8007**. The supplied trade number was retained throughout.
- [ ] Confirm **trade@bmbifoldingdoors.co.uk** and ownership of its mailbox. No test email was sent.
- [ ] Confirm the showroom address before adding it: the supplied brief attributes Maxwell Road, Middlesbrough, TS3 8TE to the main website. The demo currently shows only Middlesbrough.
- [ ] Supply and approve the company logo. The current typographic BM mark is a concept treatment.
- [ ] Approve product categories and copy, selected manufacturer models, technical documents, availability statements and all commercial terms.
- [ ] Approve illustration use or replace with licensed company photographs. Generated architectural illustrations are fictional, not technical documents or company project evidence.
- [ ] Supply approved project descriptions, locations and photographs before presenting completed projects or testimonials.
- [ ] Confirm trade account eligibility and benefits, installation scope, delivery/collection arrangements and enquiry-routing responsibilities.
- [ ] Approve controller identity, privacy wording, lawful basis, provider processing arrangements, record retention and deletion, and legal/commercial terms.
- [ ] Deploy to an authorised Netlify account and verify private saved test records, all three forms, error handling, headers, deep links and true 404 status over HTTPS.
- [ ] Approve production enquiry processing separately. Notifications, acknowledgements, CRM and marketing remain disabled.
- [ ] Remove noindex only after production approval, updating HTML robots metadata, Netlify X-Robots-Tag and public robots.txt together. Update schema/canonicals if changing brand, domain or content.

## FEATURES CURRENTLY LIVE

None claimed. No deployed website was verified. Built and locally tested: the full multi-page experience, seven-category product range, filtering, responsive navigation, image viewer, quote/account/contact forms, private storage integration, legal drafts and deployment configuration.

## FEATURES WE CAN ADD WITH CUSTOMER CONTENT OR APPROVAL

Approved logo and company photography; real project case studies and before/after galleries; selected-model specification sheets and verified performance figures; approved trade benefits and commercial terms; production privacy/controller details; final service coverage and showroom information. These require customer content, permissions and implementation/review time. A CMS or secure upload workflow would be additional development.

## ADDITIONAL INTEGRATIONS AVAILABLE AFTER APPROVAL

CRM lead routing; staff notifications and customer acknowledgements; secure drawings/specification uploads; consent-managed analytics; booking tools; verified account onboarding and ordering systems. Each needs scope, provider selection, credentials, security/privacy assessment and testing. Development and provider subscription, storage or usage charges may apply; no prices are assumed or services activated.

## Research sources

- Existing company website: https://www.bmbifoldingdoors.co.uk/ — category and business context, consulted 18 October 2026. Public claims are treated as company-advertised offerings rather than independent guarantees. Copy and images were not reproduced.
- Trade Facebook URL supplied by the brief: https://www.facebook.com/profile.php?id=100091385123433 — not independently accessed during this build.
- Unsplash license: https://unsplash.com/license — asset permissions reference. See ASSETS.md for source identifiers and generated-image prompts.
