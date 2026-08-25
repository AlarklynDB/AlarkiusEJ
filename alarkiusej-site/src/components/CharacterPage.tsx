import { useState } from 'react'
import type { CharacterProfile } from '../data/characters/types'

interface CharacterPageProps {
  character: CharacterProfile
  previousCharacter?: {
    name: string
    slug: string
  }
  nextCharacter?: {
    name: string
    slug: string
  }
}

export default function CharacterPage({
  character,
  previousCharacter,
  nextCharacter,
}: CharacterPageProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <article className="min-h-screen bg-ink text-text pt-16">
      {/* Header with back navigation */}
      <header className="sticky top-16 z-40 bg-ink/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a
            href="/goldenhour-ashentruth"
            className="text-rose hover:text-rose-light transition-colors flex items-center gap-2 mb-3"
          >
            ← Golden Hour
          </a>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-text break-words">
            {character.name}
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero section */}
        <section className="mb-12">
          <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
            {character.tag}
          </p>
          {character.quote && (
            <blockquote className="text-lg italic text-rose-light border-l-2 border-rose pl-4 py-2 mb-4">
              {character.quote}
            </blockquote>
          )}
        </section>

        {/* Story callouts */}
        {character.storyCallouts.length > 0 && (
          <section className="mb-12 space-y-4">
            {character.storyCallouts.map((callout, idx) => (
              <div
                key={idx}
                className={`p-4 rounded border ${
                  callout.tone === 'gold'
                    ? 'bg-gold-bg border-gold text-text'
                    : callout.tone === 'rose'
                      ? 'bg-rose-bg border-rose text-text'
                      : 'bg-surface border-border text-text'
                }`}
              >
                {callout.lines.map((line, lineIdx) => (
                  <p
                    key={lineIdx}
                    className={
                      line.includes(':')
                        ? 'font-semibold text-sm uppercase tracking-wide'
                        : 'text-sm'
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </section>
        )}

        {/* Facts grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(character.facts).map(([key, value]) => (
              <div key={key} className="bg-surface border border-border rounded p-4">
                <dt className="text-xs uppercase tracking-wide text-text-muted mb-1">
                  {key}
                </dt>
                <dd className="text-text font-serif">{value}</dd>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-text mb-6 pb-3 border-b border-border">
            {character.backstory.heading}
          </h2>
          <div className="prose prose-invert max-w-none">
            {character.backstory.paragraphs.map((para, idx) => (
              <p key={idx} className="text-text leading-body mb-4">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Backstory Collapsible */}
        {character.backstoryCollapsible && (
          <section className="mb-12">
            <button
              onClick={() => toggleSection('backstory')}
              className="w-full text-left mb-6"
            >
              <h2 className="text-3xl font-serif font-bold text-text pb-3 border-b border-border hover:text-rose-light transition-colors">
                {character.backstoryCollapsible.heading}
                <span className="text-rose ml-2">
                  {expandedSections.includes('backstory') ? '−' : '+'}
                </span>
              </h2>
            </button>
            {expandedSections.includes('backstory') && (
              <div className="prose prose-invert max-w-none">
                {character.backstoryCollapsible.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-text leading-body mb-4">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Identities */}
        {character.identities && (
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-2 pb-3 border-b border-border">
              {character.identities.heading}
            </h2>
            {character.identities.intro && (
              <p className="text-text-muted italic mb-6">{character.identities.intro}</p>
            )}
            <div className="space-y-8">
              {character.identities.items.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-serif text-rose-light mb-3">
                    {item.label}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    {item.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-text leading-body mb-3">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Appearance */}
        {character.appearance && (
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-6 pb-3 border-b border-border">
              {character.appearance.heading}
            </h2>
            <div className="space-y-8">
              {character.appearance.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-serif text-gold-light mb-3">
                    {section.heading}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-text leading-body mb-3">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outfits */}
        {character.outfits && (
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-6 pb-3 border-b border-border">
              {character.outfits.heading}
            </h2>
            <div className="space-y-6">
              {character.outfits.items.map((item, idx) => (
                <div key={idx} className="bg-surface border border-border rounded p-4">
                  <h3 className="text-lg font-serif text-teal-light mb-2">
                    {item.label}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    {item.description.map((desc, dIdx) => (
                      <p key={dIdx} className="text-text text-sm leading-body">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Accessories */}
        {character.accessories && (
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-6 pb-3 border-b border-border">
              {character.accessories.heading}
            </h2>
            <div className="space-y-6">
              {character.accessories.items.map((item, idx) => (
                <div key={idx} className="bg-surface border border-border rounded p-4">
                  <h3 className="text-lg font-serif text-teal-light mb-2">
                    {item.label}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    {item.description.map((desc, dIdx) => (
                      <p key={dIdx} className="text-text text-sm leading-body">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills/Abilities */}
        {character.skills && (
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-6 pb-3 border-b border-border">
              {character.skills.heading}
            </h2>
            <div className="space-y-6">
              {character.skills.items.map((item, idx) => (
                <div key={idx} className="bg-surface border border-border rounded p-4">
                  <h3 className="text-lg font-serif text-teal-light mb-2">
                    {item.label}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    {item.description.map((desc, dIdx) => (
                      <p key={dIdx} className="text-text text-sm leading-body">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Notable Quotes */}
        {character.notableQuotes && (
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-6 pb-3 border-b border-border">
              {character.notableQuotes.heading}
            </h2>
            <div className="space-y-4">
              {character.notableQuotes.items.map((item, idx) => (
                <blockquote
                  key={idx}
                  className="bg-surface-raised border-l-2 border-rose pl-4 py-3 italic"
                >
                  <p className="text-text mb-1">"{item.quote}"</p>
                  <p className="text-text-muted text-sm">{item.attribution}</p>
                </blockquote>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Navigation footer */}
      <footer className="bg-surface border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {previousCharacter ? (
              <a
                href={`/characters/${previousCharacter.slug}`}
                className="text-rose hover:text-rose-light transition-colors flex items-center gap-2"
              >
                ← {previousCharacter.name}
              </a>
            ) : (
              <div />
            )}

            <a
              href="/goldenhour-ashentruth"
              className="text-teal hover:text-teal-light transition-colors"
            >
              Back to Golden Hour
            </a>

            {nextCharacter ? (
              <a
                href={`/characters/${nextCharacter.slug}`}
                className="text-rose hover:text-rose-light transition-colors flex items-center gap-2"
              >
                {nextCharacter.name} →
              </a>
            ) : (
              <div />
            )}
          </div>
        </div>
      </footer>
    </article>
  )
}
