# Hibrythia Site — Typography Conventions
> Reference file for consistent heading sizes across all lore pages.
> Last updated: June 2026

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

## Notes
- Gold (#c9a84c) is for quotes/dramatic text only — never section headers.
- MP3 files on Nhuemyn DB are ignored for now.
- Images use a placeholder div until the author adds them manually.
- Do not add lore to character/world pages until explicitly asked.
