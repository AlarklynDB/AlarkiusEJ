/**
 * Shared type definitions for full character profile data.
 * Each character in a "world" (GHOAT, Naiseikai, etc.) gets one file in
 * this folder exporting a single `CharacterProfile` object.
 *
 * To add a new character:
 *   1. Create `src/data/characters/<kebab-case-name>.ts`
 *   2. Export a default `CharacterProfile` object
 *   3. Import it wherever the character card/list lives and pass it to
 *      <CharacterProfileModal character={...} />
 */

export interface CharacterCallout {
  /** Matches the site's callout color tokens, e.g. 'gray_bg' from Notion -> mapped to gold/rose/etc. */
  tone?: 'gold' | 'rose' | 'neutral'
  lines: string[]
}

export interface CharacterSection {
  heading: string
  /** Paragraphs rendered in order. Use '\n\n' inside a single string only if intentional — prefer separate array items. */
  paragraphs: string[]
}

export interface CharacterCollapsibleSection extends CharacterSection {
  /** Label shown on the toggle before it's expanded */
  toggleLabel: string
}

export interface CharacterIdentity {
  label: string
  paragraphs: string[]
}

export interface CharacterListItem {
  label: string
  description: string[]
}

export interface CharacterFacts {
  [key: string]: string
}

export interface CharacterProfile {
  slug: string
  name: string
  tag: string
  quote?: string
  storyCallouts: CharacterCallout[]
  facts: CharacterFacts
  factsIntro?: string[]
  backstory: CharacterSection
  backstoryCollapsible?: CharacterCollapsibleSection
  identities?: {
    heading: string
    intro?: string
    items: CharacterIdentity[]
  }
  appearance?: {
    heading: string
    sections: CharacterSection[]
  }
  outfits?: {
    heading: string
    items: CharacterListItem[]
  }
  accessories?: {
    heading: string
    items: CharacterListItem[]
  }
}
