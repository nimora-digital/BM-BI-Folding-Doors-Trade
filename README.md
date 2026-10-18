# BM Bi Folding Doors Trade — prospect demonstration

A complete React, Vite and TypeScript trade website prepared by Nimora Digital. This is an independent prospect demonstration, not an authorised official company channel. No login or ChatGPT dependency is required.

## Deploy to Netlify

1. Extract this ZIP. Upload its contents directly to the root of a new GitHub repository, including hidden files.
2. In Netlify, import that repository. Use Node **22**, install **npm ci**, build **npm run build**, publish **dist**. `netlify.toml` supplies build, functions, headers and 404 routing.
3. Deploy through the Git-connected build. Do not drag-and-drop only `dist`: that would omit the enquiry function.
4. No custom secret or email-provider key is required. Netlify provides its Blobs environment to deployed Functions. Confirm Blobs and Functions are available on the selected account and check current usage limits and costs.
5. Submit a fictional test enquiry. Check the `private-demo-enquiries` Blobs store in the Netlify administration environment; verify the saved record and success screen. Test account and contact enquiries too.
6. Keep all demo noindex controls enabled until the customer explicitly approves production launch.

Netlify supplies the `URL` environment variable used for sitemap and canonical generation. Outside Netlify, set `URL` to the intended HTTPS origin before building; otherwise sitemap URLs deliberately use `example.invalid`. Browser canonical tags follow the actual origin.

## Local development and verification

```sh
npm ci
npm test
npm run build
npm run preview
```

Node 22.17.1 was used for verification. Static preview serves the entire website but does not execute Netlify Functions. It reports that a submission has not been saved instead of simulating success. For integrated browser testing use a Netlify branch deployment, or Netlify CLI development with a linked test site.

`npm test` includes validation checks and an integration test using the real Netlify Blobs local server. That test writes fictional records to an isolated temporary directory under `test-results/`, reads them back, tests duplicate throttling, and removes the directory. No test submissions belong in the repository.

## Pages

- `/` — homepage
- `/products` — filterable range
- `/products/bifold-doors`
- `/products/sliding-doors`
- `/products/aluminium-windows`
- `/products/entrance-doors` — entrance, French and single doors
- `/products/heritage-glazing` — heritage doors and internal screens
- `/products/roof-lanterns` — roof lanterns and gable frames
- `/products/commercial-glazing` — commercial doors, shop fronts and curtain walling
- `/trade-supply`
- `/installation`
- `/trade-accounts`
- `/request-quote`
- `/inspiration`
- `/about`
- `/faqs`
- `/contact`
- `/privacy`
- `/cookies`
- `/terms`
- `/thank-you`
- Custom 404 for unknown paths

## Editing and architecture

Product descriptions and general pages: `src/content.ts`. Layout and enquiry forms: `src/main.tsx`. Styling: `src/style.css`. Browser page metadata: `src/metadata.ts`. Static route shells, sitemap and Website structured data: `scripts/prerender.mjs`.

This is structured source content, not a CMS. The build emits route-specific HTML entry files; React renders the page content in the browser. It is not full content server rendering. The supplied demo remains noindex.

Images are local WebP assets with lazy loading below the hero. Generated illustrations are not company installations, exact products or technical drawings. See `ASSETS.md` for provenance and prompts. The BM text mark is a proposed typographic treatment, not an approved company logo.

## Enquiries, security and operations

`netlify/functions/enquiry.mjs` accepts same-origin JSON POST requests. It applies length limits, server validation, a honeypot, minimum completion time and per-IP throttling. It saves validated records in a private Netlify Blobs store. There is no public record-reading endpoint. Only a successful storage write produces a success response. The forms disable the submit button during saving.

Notifications, CRM forwarding, email acknowledgements, analytics, uploads, payments, accounts and marketing automation are disabled or absent. Click-to-call and click-to-email use the supplied trade details and require a visitor action.

The simple rate limiter is suitable for evaluating this demo. It is not a distributed atomic abuse-prevention system; concurrent requests can race. Consider provider rate limits, a privacy-assessed CAPTCHA and transactional idempotency before a high-volume public launch. Hashed IP throttle keys and test records require an operator retention/deletion process. This project does not claim a security audit or legal certification.

Headers prohibit framing and external scripts, restrict connections and disable indexing. No application cookies, browser storage, remote fonts or third-party embeds are used. Review hosting-level logging and privacy terms before collecting real details.

## Handoff

Read `HANDOFF.md` for test results, outstanding limitations, customer approval items and the Nimora sales summary.
