# SpenceCom website — Intelligent Zen

Status: **Source implemented; not deployed to spencecom.ph**.

## Approved brand assets

- Full logo: `assets/brand/spencecom-logo-teal.png` — exact 26 October 2026 approved uploaded artwork.
- Icon master: `assets/brand/spencecom-icon-master.png` — exact approved hexagonal S uploaded artwork.
- Favicon / app icon variants: mechanically resized from approved icon master.
- OG image: composed using the approved full-logo image without redrawing the logo.
- Photography: generated smart workplace image at `assets/images/smart-workplace.webp`. Do not represent the conceptual image as an actual client project.
- Linux page: official Linux Mint Cinnamon desktop screenshot, sourced from `https://linuxmint.com/web/img/screenshots/c1.jpg`, attributed on the page; no affiliation claimed.

## Build

```bash
npm run check
npm run build
```

This emits 28 crawlable static HTML pages into `dist/`, plus XML sitemap, robots file, CSS, JavaScript and image assets. Deploy the **contents** of `dist/` as the web root. Each page has a canonical URL, unique title and description; service pages include JSON-LD `Service`; homepage includes organisation and FAQ data. The site uses accessible mobile navigation, responsive styling and reduced-motion support.

## Current commercial focus

- Based in Angeles City / Clark, Pampanga.
- Nationwide Philippine assessment and projects, including Luzon, Visayas and Mindanao (on-site logistics confirmed per project).
- Worldwide remote cloud, AI, server and advisory engagements.
- Microsoft 365, Google Workspace, email migration, cloud servers, smart Wi-Fi / mesh, NAS, private AI, meeting rooms and cybersecurity.
- **Linux desktops / call centre workstations**, especially Linux Mint Cinnamon and cloud applications, with application, dialler, headset and vendor-support compatibility pilots.

## Before live deployment

1. Confirm company phone number, legal registration, business postal address (if public) and definitive `@spencecom.ph` enquiry mailbox. Current contact buttons route via the **confirmed temporary owner address** `amit@axon.com.sg`; the enquiry form opens a mail client, not a backend service.
2. Replace conceptual photography with verified project photos only if a case study claims real deployment.
3. Obtain explicit consent before listing client names, logos, testimonials or results. Leadership's 20+ years is not SpenceCom's incorporation age.
4. Verify all service claims, locations, business name and contact details, then add accurate `LocalBusiness` markup if applicable.
5. On the designated German VPS, back up the target site and determine the existing web-server configuration before any upload; do not add NGINX or touch unrelated accounts.
6. Validate the deployed site: SSL, redirects, links, speed, form mail routing, favicon, OG social preview, schema, sitemap, robots and indexing. Register Google Search Console and Bing Webmaster Tools and use IndexNow when supported.

## SEO/AEO/GEO rationale

The site provides individual server-rendered pages, descriptive titles, clear service explanations, question-led content, attributable organisation information, internal links and regional service pages. Ranking and AI citations cannot be guaranteed. Avoid mass-produced city pages or unsupported client assertions.
