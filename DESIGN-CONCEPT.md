# SpenceCom — Zen Future Homepage Concept
**Review status: concept only; not deployed.**

## Design intent
A premium, almost architectural technology website. Calm backgrounds and generous whitespace offset immersive, editorial full-bleed photography. Navy #082D4B and teal #009C9F are taken from approved BRAND.md. The actual wordmark is imported from assets/brand/spencecom-logo-teal.png.

## Design tour
1. Full-height architectural hero, animated camera drift + two fine-line orbits, headline “Technology, in harmony.”
2. Brand philosophy: “Not more technology. Better possibilities.”
3. Three image-led solution cards: Smart Living / Intelligent Workplaces / Connected Infrastructure.
4. Strategic differentiation: upgrade existing LAN, Wi-Fi, NAS and AV; cooperate with incumbent IT providers.
5. Six capability cells: Wi-Fi, NAS/Cloud, AV, Private AI, Security and Workflow Automation.
6. Consultation CTA and branded footer.

## Interaction
React 18 + Vite + Framer Motion + Lucide. Motion respects reduced-motion preference. Responsive mobile navigation. Semantic sections and accessible button names. No backend/forms yet.

## Preview locally
From repository root:
```bash
npm install
npm run dev
```
Visit the local Vite URL. For a production build use `npm run build`. No server deployment configured.

## Before launch
- Replace stock placeholder Unsplash photo URLs with original commissioned/generated SpenceCom brand images; license-check and optimise.
- Images: architectural home with subtle sensor light overlay; smart office with warm human presence; AI/automation visualization as restrained data sculpture; meeting room with real collaboration; Wi-Fi hotel lobby login visual; close-up structured cabling / NAS; 16:9 and 4:5 crops plus WebP/AVIF.
- Install dependencies and run build/browser QA (not executed by GitHub connector).
- Add real content pages, privacy notice, local service area, approved testimonials and contact details.
- Confirm domain, production infrastructure and legal company name.
- Replace placeholder contact CTA if a separate SpenceCom channel is agreed.
- Do not publish unsupported certification/guaranteed results or misleading AI features.

## Asset origin
Reference source for content categories: https://oneproits.com/audio-visual-smart-solutions.html
Current hero/card photos are *temporary third-party Unsplash placeholders*, not finished brand visuals. SpenceCom logo is owned repo asset.

## Review and deployment
Changes intentionally isolated on `concept/zen-future-homepage`. Review first. No pushes to main, no server changes.
