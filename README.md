# Velocity Land & Tree Services – Website

**URL:** https://www.velocitylts.com  
**Location:** Blumenort, Manitoba, Canada  
**Phone:** (204) 226-7174  
**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion

---

## Getting Started

**Netlify Project:** `velocity-ltd-dev`

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## SEO Strategy

### Current Implementation
- ✅ Next.js Metadata API (title, description, OpenGraph)
- ✅ JSON-LD structured data (LocalBusiness, Organization, Service, FAQPage)
- ✅ `sitemap.xml` auto-generated via `next-sitemap`
- ✅ `robots.txt` auto-generated via `next-sitemap`
- ✅ Twitter Card metadata
- ✅ Canonical URL configuration
- ✅ Google Business Profile linked via `sameAs` schema
- ✅ FAQ section with `FAQPage` schema for AI Overview eligibility

### SEO Packages

| Package | Purpose |
|---------|---------|
| `schema-dts` | TypeScript types for Schema.org JSON-LD |
| `next-sitemap` | Auto-generates `sitemap.xml` + `robots.txt` post-build |

### Schema / Structured Data

JSON-LD schemas implemented in `src/components/JsonLd.tsx`:

1. **`LocalBusiness`** – Name, address (Blumenort, MB), phone, geo coordinates, hours, `sameAs` links
2. **`Organization`** – Entity identity for AI understanding
3. **`Service`** (×5) – Forestry Mulching, Land Clearing, Grading, Driveway Installation, Septic Design
4. **`FAQPage`** – Conversational Q&A for AI Overviews and featured snippets

### Google Business Profile Integration

GBP is integrated through **data alignment** (not direct API):
- `sameAs` in JSON-LD links to GBP, Facebook, Instagram
- NAP (Name/Address/Phone) on website matches GBP exactly
- Structured data mirrors GBP service categories

### AI Search Optimization (GEO)

Strategies for surfacing in ChatGPT, Gemini, Perplexity, and Google AI Overviews:
- FAQ schema provides quotable answers AI engines can cite directly
- Service descriptions use specific entities, locations, and service types
- E-E-A-T signals: Licensed Arborist, Red Seal Electrician, Certified Septic Expert
- Structured data creates machine-readable entity clarity

---

## Keyword Strategy

### Primary Keywords

| Keyword | Intent |
|---------|--------|
| forestry mulching Manitoba | Service discovery |
| land clearing Blumenort | Local service |
| septic installation Manitoba | Service discovery |
| land clearing services near me | High-intent local |
| grading and excavating Manitoba | Service discovery |
| driveway installation Manitoba | Service discovery |
| lot clearing Manitoba | Service discovery |
| fence line clearing Manitoba | Service discovery |

### Long-Tail Keywords by Service

#### Forestry Mulching
- forestry mulching cost per acre Manitoba
- brush clearing services Blumenort MB
- eco-friendly land clearing Manitoba
- overgrown lot mulching southeast Manitoba
- fence line clearing with mulcher Manitoba
- forestry mulcher for hire southeast Manitoba
- land reclamation services rural Manitoba
- woodlot clearing near Blumenort
- sustainable forestry mulching solutions Manitoba
- mulching for fire prevention Manitoba
- trail clearing services southeast Manitoba
- vegetation management rural Manitoba

#### Land Clearing & Lot Clearing
- lot clearing for construction Manitoba
- site preparation services Blumenort
- agricultural land clearing southeast Manitoba
- residential land clearing Blumenort
- commercial property clearing Manitoba
- excavation and land clearing Niverville
- bush clearing RM of Hanover
- cost of land clearing per acre Manitoba
- right-of-way clearing Manitoba
- environmentally responsible land clearing MB
- rough land clearing for farms Manitoba

#### Septic Systems
- certified septic installers Blumenort Manitoba
- septic system design rural Manitoba
- new septic tank installation cost Manitoba
- septic field installation southeast Manitoba
- residential septic system design Manitoba
- Manitoba septic system regulations
- soil testing for septic systems Manitoba
- holding tank installation rural MB
- advanced wastewater treatment system Manitoba

#### Driveways, Culverts & Grading
- gravel driveway installation Blumenort
- culvert installation Manitoba
- driveway grading services rural Manitoba
- site grading for new home Manitoba
- subdivision grading Manitoba

#### Property Line & Over Growth Management
- property line clearing Manitoba
- over growth management southeast MB
- wright of way management Manitoba
- property line fence clearing rural Manitoba

#### AI-Optimized Conversational Queries (GEO)
- who does forestry mulching near Blumenort
- best land clearing company in Manitoba
- how much does forestry mulching cost in Manitoba
- do I need a permit for septic in Manitoba
- what is forestry mulching vs traditional clearing
- best septic installer near Blumenort Manitoba
- how long does land clearing take for a 5 acre lot
- can forestry mulching prevent erosion
- who does driveway installation near Blumenort
- licensed arborist land clearing Manitoba

---

## Instagram Gallery Sync

The website features an automated Instagram gallery populated directly from the `@velocitylandtreeservice` profile, without requiring an official Instagram API key. 

### Update Script
The repository includes a custom Node.js script `tools/download-instagram-gallery.js` which fetches the latest public posts.

- **Operation:** Run `node tools/download-instagram-gallery.js` from the command line.
- **Output:** It downloads the 9 most recent images and saves them into the `public/gallery/instagram/` directory.
- **Metadata:** It extracts captions, shortcodes, and permalinks, writing them to a JSON file at `public/gallery/instagram/instagram_captions.json`.

### Frontend Implementation
- The homepage (`src/app/page.tsx`) uses a `useEffect` hook to asynchronously load the `instagram_captions.json` metadata at runtime (bypassing caching).
- The Gallery section maps over these items, displaying them in a responsive CSS grid (`bg-cover` over custom div elements).
- Clicking an image opens a full-screen animated modal (powered by Framer Motion) displaying the image, the extracted Instagram caption, and a direct link to the original Instagram post.

---

## Social Links

- **Instagram:** https://www.instagram.com/velocitylandtreeservice/
- **Facebook:** https://www.facebook.com/p/Velocity-Land-Tree-Services-100066414313610/
- **Google Business Profile:** 5.0 ★ (4 reviews) – Forestry Service category

---

## Future SEO Expansion

For maximum search surface area, consider expanding to multi-page:

| Page | URL | Benefit |
|------|-----|---------|
| Forestry Mulching | `/services/forestry-mulching` | Dedicated keyword targeting |
| Land Clearing | `/services/land-clearing` | Geo-targeted service page |
| Septic Installation | `/services/septic-installation` | High-value keyword |
| Driveways & Grading | `/services/driveways-grading` | Service keyword targeting |
| FAQ | `/faq` | AI Overviews, featured snippets |
| Blog | `/blog` | Long-tail keyword coverage |
