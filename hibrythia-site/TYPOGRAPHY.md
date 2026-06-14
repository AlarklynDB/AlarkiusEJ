# Hibrythia Site — Important Typography Conventions
> IMPORTANT Reference file for consistent heading sizes across all lore pages. Should be read first before populating Lore!
> Last updated: June 14 2026 - 3:06 AM

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

## Color Reference

| Token        | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| Page/Headers | #f2ebeb   | All heading text               |
| Body text    | #c8c2ba   | Paragraph / body copy          |
| Muted        | #7a746e   | Secondary / helper text        |
| Very muted   | #4a4844   | Breadcrumbs, labels            |
| Gold         | #c9a84c   | Quotes and dramatic text ONLY  |

---

## ⚠️ Build Error Rules — READ BEFORE WRITING TSX

These are recurring TypeScript/JSX build traps that WILL break Cloudflare deploys.

### 1. Apostrophes in JS string literals
Single-quoted strings containing `'s`, `n't`, `'re`, etc. break the TypeScript parser.

```tsx
// ❌ BREAKS BUILD
{ label: 'Hetra's Standard Systems' }

// ✅ SAFE — use double quotes
{ label: "Hetra's Standard Systems" }

// ✅ SAFE — escape in JSX text (not in JS strings)
<p>Hetra&apos;s Standard Systems</p>
```

### 2. Missing object key names in JS arrays / objects
A value without its key name causes a TS1005 `':'` expected error.

```tsx
// ❌ BREAKS BUILD — 'time:' key is missing
{ label: "Afternoons", "14:00 – 20:00 PM", desc: "..." }

// ✅ SAFE — all keys named explicitly
{ label: "Afternoons", time: "14:00 – 20:00 PM", desc: "..." }
```

### 3. Unescaped double quotes inside double-quoted strings
Embedding `"word"` inside a `"..."` string breaks parsing.

```tsx
// ❌ BREAKS BUILD
{ desc: "The misspelled "Hetry" coin" }

// ✅ SAFE — use single quotes for inner
{ desc: "The misspelled 'Hetry' coin" }

// ✅ ALSO SAFE — escape with backslash
{ desc: "The misspelled \"Hetry\" coin" }
```

### 4. General rule
> **Any JS string literal (inside `''` or `""`) that contains quotes, apostrophes, or colons in unusual positions must be double-checked before pushing.**
> When in doubt — use Python to write the file instead of bash heredocs to avoid shell escaping chaos.

---

## Notes
- Gold (#c9a84c) is for quotes/dramatic text only — never section headers.
- MP3 files on Nhuemyn DB are ignored for now.
- Images use a placeholder div until the author adds them manually.
- Do not add lore to character/world pages until explicitly asked.
- README.md files are hands-off unless explicitly requested.
