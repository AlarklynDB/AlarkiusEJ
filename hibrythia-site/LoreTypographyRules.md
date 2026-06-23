# Hibrythia Site — Important Typography Conventions
> IMPORTANT Reference file for consistent heading sizes, body paragraph sizes across all lore pages.
> Last updated: June 15 2026

**Everything must be consistent!!!**

If Alarkius has made a recent change in any repo within hibrythia-site, you are to go along or continue with changes. Do not revert recent changes done by Alarkius unless asked.

---

## Body Width

| Convention Name | Tailwind Class              | Usage                              |
|-----------------|-----------------------------|------------------------------------|
| BodyWidth960    | max-w-[960px] mx-auto px-6  | Outer wrapper on every lore page   |

```tsx
// BodyWidth960 — Standard Lore Page Wrapper
<div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">
```

> All lore pages under /world/databases must use BodyWidth960. Do not use max-w-4xl, max-w-[760px], max-w-[860px], or any other width variant.

> this also includes subpages within pages

---

## Body Text Size

| Convention Name | Tailwind Class                           | Usage                                      |
|-----------------|------------------------------------------|--------------------------------------------|
| BodyTextBase    | font-body text-base text-[#c8c2ba] leading-relaxed | Reading paragraphs (all lore pages) |

```tsx
// BodyTextBase — Standard Reading Paragraph
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">...</p>

// Muted variant (secondary info)
<p className="font-body text-base text-[#7a746e] leading-relaxed">...</p>
```

> Use `text-base` for ALL reading body paragraphs. `text-sm` is only for table cells, card labels, list items inside cards, and sub-detail text. `text-xs` is only for breadcrumbs, section labels, and timestamps. Never use `text-sm` for standalone reading paragraphs.

---

## Heading Size Scale

| Convention Name  | Tailwind Class          | HTML Tag | Usage                        |
|------------------|-------------------------|----------|------------------------------|
| HdTextDSize      | text-3xl md:text-4xl    | h1       | Page title (every page)      |
| H2SectMidSize    | text-lg                 | h2       | Section header               |
| SubH3-SM         | text-sm                 | h3       | Sub-header                   |
| CardH4BLabel     | text-base               | h4 / p   | Card label / item title      |

---

## Full Class Strings (copy-paste ready)

```tsx
// HdTextDSize — Page Title
<h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Title</h1>

// H2SectMidSize — Section Header
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Section</h2>

// SubH3-SM — Sub-Header
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Sub-section</h3>

// CardH4BLabel — Card / Item Label
<h4 className="font-display text-base text-[#f2ebeb] mb-2">Label</h4>
```

---

## Bottom Nav Cards (Back + Next)

Every lore page that belongs to a themed group (e.g. Seven Wonders, Churches, Continents, Cosmic Foundation) must have a bottom nav row at the very end of the page content, inside the BodyWidth960 wrapper.

### Layout Rule
- `← Back` card is on the **left** — links to the **previous page in the sequence** (e.g. the church before this one, the previous locale, etc.)
  - Exception: the **first page** in a sequence links back to the parent index (e.g. Locales & Sights, World Databases)
- `Next →` card is on the **right** — links to the next page in the themed sequence
- They sit at opposite ends using `justify-between` within the 960 body width
- If the page is the **last** in its sequence, omit the Next card (Back card only — back links to parent index, not the previous page)
- The Back card label should match the actual page title (e.g. "The Runthian Church"), not a generic section name — unless it's the first page linking up to the parent section

### When to add a Next card
Add a `Next →` card whenever the theme/group the page belongs to has more than one entry and the current page is not the last. Examples:
- Seven Wonders of the World (7 pages in sequence)
- The Churches of the World (7 churches in sequence)
- I. The Cosmic Foundation (multiple lore entries in sequence)
- Continent pages (ordered sequence)

### Copy-paste template

```tsx
{/* Bottom Nav */}
<div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
  <Link
    to="/world/locales"
    className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
  >
    <span className="text-[#c9a84c] text-lg">←</span>
    <div>
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
      <p className="font-display text-sm text-[#f2ebeb]">Locales &amp; Sights</p>
    </div>
  </Link>

  <Link
    to="/world/locales/next-page-slug"
    className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
  >
    <div>
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
      <p className="font-display text-sm text-[#f2ebeb]">Next Page Title</p>
    </div>
    <span className="text-[#c9a84c] text-lg">→</span>
  </Link>
</div>
```

> The gold divider (`border-t border-[#2e2b26]`) is only on the nav row — never add a standalone gold horizontal rule at the top of the page.

---

## Color Reference

| Token        | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| Page/Headers | #f2ebeb   | All heading text               |
| Body text    | #c8c2ba   | Paragraph / body copy          |
| Muted        | #7a746e   | Secondary / helper text        |
| Very muted   | #4a4844   | Breadcrumbs, labels            |
| Gold         | #c9a84c   | Quotes and dramatic text ONLY  |

---

## Build Error Rules — READ BEFORE WRITING TSX

These are recurring TypeScript/JSX build traps that WILL break Cloudflare deploys.

### 1. Apostrophes in JS string literals
Single-quoted strings containing apostrophes break the TypeScript parser.

```tsx
// BREAKS BUILD
{ label: 'Hetra's Standard Systems' }

// SAFE — use double quotes
{ label: "Hetra's Standard Systems" }

// SAFE — escape in JSX text nodes (not in JS strings)
<p>Hetra&apos;s Standard Systems</p>
```

### 2. Missing object key names in JS arrays / objects
A value without its key name causes a TS1005 ':' expected error.

```tsx
// BREAKS BUILD — 'time:' key is missing
{ label: "Afternoons", "14:00 – 20:00 PM", desc: "..." }

// SAFE — all keys named explicitly
{ label: "Afternoons", time: "14:00 – 20:00 PM", desc: "..." }
```

### 3. Unescaped double quotes inside double-quoted strings
Embedding "word" inside a "..." string breaks parsing.

```tsx
// BREAKS BUILD
{ desc: "The misspelled "Hetry" coin" }

// SAFE — use single quotes for inner
{ desc: "The misspelled 'Hetry' coin" }
```

### 4. General rule
Any JS string literal that contains quotes, apostrophes, or colons in unusual positions must be double-checked before pushing.
When in doubt — use Python to write the file instead of bash heredocs to avoid shell escaping chaos.

If you see basic grammar error structures or minor spelling mistakes (not custom words) - fix it!

---

## Notes
- Gold (#c9a84c) is for quotes/dramatic text only — never section headers.
- MP3 files on Nhuemyn DB are ignored for now.
- Images use a placeholder div until the author adds them manually.
- Do not add lore to character/world pages until explicitly asked.
- README.md files are hands-off unless explicitly requested.

---

## Live Link Rule — ALWAYS CHECK FIRST

> **Always check if there is a live link before building or wiring routes. If there is, rewire and fix up instances to match. Repo subpage folder names and route slugs may differ from the live version.**

Before wiring any new route in App.tsx:
1. Ask Alaria if a live URL exists for the page, OR check `thehibrythiansaga.com` / `naiseikaiuniverse.com` / `alarkiusej.com` directly.
2. If a live URL is confirmed, use **that URL slug** as the `path=` value in App.tsx — not the folder/component name.
3. Update all `to=` links inside every related page file to match the live slug too.

```tsx
// Example — folder is named TheDivineRealm but live URL slug is divine-realm
// WRONG
<Route path="world/meta/TheSigilOfHibrythia/TheDivineRealm" .../>

// CORRECT (matches live)
<Route path="world/meta/TheSigilOfHibrythia/divine-realm" .../>
```
---

## Breadcrumb Navigation

> **Rule**: `/breadcrumb` links **must always appear at the very top of the page body, before the page title (H1)** — inside the BodyWidth960 wrapper.

Every character profile page and lore subpage must include a breadcrumb block at the top. The breadcrumb comes first, then the category label, then the H1.

### Structure (copy-paste ready)

```tsx
{/* Breadcrumb */}
<div>
  <Link
    to="/characters"
    className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
  >
    &#8592; Back to Characters
  </Link>
  <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
    Category Label (e.g. Antagonists, Main Protagonists, Locales &amp; Sights)
  </p>
  <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Page Title</h1>
</div>
```

### Rules
- The `← Back to [Section]` link uses `text-[#4a4844]` (very muted) and turns gold on hover.
- The category label uses `text-[#c9a84c] uppercase tracking-[0.25em] text-xs` — same gold small-caps style used throughout.
- The category label text must match the section the page belongs to:
  - Character pages → `Main Protagonists`, `Antagonists`, `Supporting Cast`, etc.
  - Lore subpages → match the parent section name (e.g. `Locales & Sights`, `Meta Worldbuilding`)
- **No standalone gold `<hr>` or divider between the breadcrumb and the H1.**
- The breadcrumb `to=` link points to the parent index page (e.g. `/characters`, `/world/locales`).
---

## What to Avoid — Breadcrumb Spacing Trap

> **Never place a breadcrumb (or any `<Link>`, `<p>`, `<nav>`) as a direct child of the `space-y-16` outer wrapper.**

The outer lore page wrapper uses `space-y-16`, which adds `4rem` of vertical gap between every direct child element. If the breadcrumb is a standalone direct child, it creates a massive visual gap between the breadcrumb and the page title below it.

### The wrong pattern (broken)
```tsx
// ❌ BROKEN — breadcrumb is a direct child of space-y-16
<div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

  {/* Breadcrumb */}
  <p className="font-body text-[10px] ...">Locales &amp; Sights / Page Title</p>   {/* ← HUGE GAP after this */}

  {/* Hero */}
  <div className="space-y-4">
    <h1>Page Title</h1>
  </div>
```

### The correct pattern (fixed)
```tsx
// ✅ CORRECT — breadcrumb + title wrapped together in one div
<div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

  {/* Breadcrumb + Title */}
  <div>
    <Link to="/world/locales" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
      &#8592; Back to Locales &amp; Sights
    </Link>
    <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Category Label</p>
    <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Page Title</h1>
  </div>

  {/* rest of sections */}
```

### Rule summary
- The breadcrumb link, category label, and H1 **must always be inside the same `<div>`** — never separated.
- This single `<div>` is one unit and counts as one child of `space-y-16`.
- `space-y-16` spacing only applies between major content sections (Hero, Origin, Powers, Relationships, etc.) — not between breadcrumb and title.

---

## Art Images — Lightbox Rule

> **Whenever Alaria provides an imgbb link (i.ibb.co) for character or world art, always replace the placeholder div with a clickable image that opens a fullscreen lightbox.**

Never use a plain `<img>` tag alone. Every art image must be wrapped with the Lightbox pattern below.

### Required steps
1. Add a `Lightbox` component at the top of the file (before the main export)
2. Add `const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);` inside the main component
3. Render `{lightbox && <Lightbox ... />}` as the first child inside the BodyWidth960 wrapper
4. Wrap every `<img>` in the clickable container below
- Scroll lock: `document.body.style.overflow = 'hidden'` on mount, cleaned up on unmount.
- Clicking outside the image (on the overlay) closes it. Clicking the image itself does NOT close it (`e.stopPropagation()`).
- If a page has multiple images, one shared `lightbox` state handles all of them.
- Remove the old placeholder div entirely when real art is provided. Do not keep both.
