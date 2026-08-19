import { useEffect } from 'react'
import type { CharacterProfile } from '../data/characters/types'

interface CharacterProfileModalProps {
  character: CharacterProfile
  onClose: () => void
}

/**
 * Full-profile "island" overlay — not a routed page, just a scrollable
 * card that floats above the current page and can be closed without
 * navigating away. Renders the complete lore for one character.
 */
export default function CharacterProfileModal({ character, onClose }: CharacterProfileModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${character.name} profile`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Island */}
      <div className="relative bg-ink border border-border-light rounded-2xl shadow-2xl shadow-black/60 w-full max-w-2xl max-h-[85vh] overflow-y-auto">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 pb-4 bg-ink/95 backdrop-blur border-b border-border">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text">{character.name}</h2>
            <p className="text-xs text-text-faint mt-1">{character.tag}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="flex-shrink-0 p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors duration-150"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6 space-y-8">
          {character.quote && (
            <p className="font-serif text-lg text-text-muted italic text-center border-b border-border pb-6">
              {character.quote}
            </p>
          )}

          {character.storyCallouts.map((callout, i) => (
            <div key={i} className="callout callout-rose flex-col items-start gap-1.5">
              {callout.lines.map((line, j) => (
                <p
                  key={j}
                  className={
                    line.startsWith('-')
                      ? 'text-sm text-text-muted pl-3'
                      : 'text-sm text-text font-semibold'
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          ))}

          {/* Facts */}
          <section>
            <h3 className="font-serif text-xl font-semibold text-text mb-4">{character.backstory.heading}</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5 p-4 bg-surface rounded-lg border border-border">
              {Object.entries(character.facts).map(([label, value]) => (
                <div key={label} className="flex gap-2 text-sm">
                  <dt className="text-text-faint flex-shrink-0">{label}:</dt>
                  <dd className="text-text-muted">{value}</dd>
                </div>
              ))}
            </dl>
            {character.backstory.paragraphs.map((p, i) => (
              <p key={i} className="text-text-muted leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </section>

          {/* Collapsible backstory */}
          {character.backstoryCollapsible && (
            <section>
              <h3 className="font-serif text-xl font-semibold text-text mb-4">
                {character.backstoryCollapsible.heading}
              </h3>
              <details className="group">
                <summary className="cursor-pointer text-sm font-medium text-rose-light hover:text-rose transition-colors duration-150 mb-4 italic list-none flex items-center gap-2">
                  <span className="inline-block transition-transform duration-200 group-open:rotate-90">▸</span>
                  {character.backstoryCollapsible.toggleLabel}
                </summary>
                <div className="space-y-4 pl-1 border-l-2 border-rose/20 ml-2 pl-4">
                  {character.backstoryCollapsible.paragraphs.map((p, i) =>
                    p.startsWith('###') ? (
                      <h4 key={i} className="font-serif text-base font-semibold text-text pt-2">
                        {p.replace(/^###\s*/, '')}
                      </h4>
                    ) : (
                      <p key={i} className="text-text-muted leading-relaxed">
                        {p}
                      </p>
                    )
                  )}
                </div>
              </details>
            </section>
          )}

          {/* Four Identities */}
          {character.identities && (
            <section>
              <h3 className="font-serif text-xl font-semibold text-text mb-1">{character.identities.heading}</h3>
              {character.identities.intro && (
                <p className="text-sm text-text-faint mb-4">{character.identities.intro}</p>
              )}
              <div className="space-y-5">
                {character.identities.items.map((identity) => (
                  <div key={identity.label}>
                    <p className="text-sm font-semibold text-gold mb-1.5">{identity.label}</p>
                    {identity.paragraphs.map((p, i) => (
                      <p key={i} className="text-text-muted leading-relaxed text-sm mb-2">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Appearance */}
          {character.appearance && (
            <section>
              <h3 className="font-serif text-xl font-semibold text-text mb-4">{character.appearance.heading}</h3>
              <div className="space-y-4">
                {character.appearance.sections.map((s) => (
                  <div key={s.heading}>
                    <p className="text-sm font-semibold text-text mb-1.5">{s.heading}</p>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="text-text-muted leading-relaxed text-sm mb-2">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outfits */}
          {character.outfits && (
            <section>
              <h3 className="font-serif text-xl font-semibold text-text mb-4">{character.outfits.heading}</h3>
              <div className="space-y-4">
                {character.outfits.items.map((item) => (
                  <div key={item.label} className="p-3 bg-surface rounded-lg border border-border">
                    <p className="text-sm font-semibold text-rose-light mb-1.5">{item.label}</p>
                    {item.description.map((d, i) => (
                      <p key={i} className="text-text-muted leading-relaxed text-sm mb-1.5 last:mb-0">
                        {d}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Accessories */}
          {character.accessories && (
            <section className="pb-2">
              <h3 className="font-serif text-xl font-semibold text-text mb-4">{character.accessories.heading}</h3>
              <div className="space-y-4">
                {character.accessories.items.map((item) => (
                  <div key={item.label} className="p-3 bg-surface rounded-lg border border-border">
                    <p className="text-sm font-semibold text-gold mb-1.5">{item.label}</p>
                    {item.description.map((d, i) => (
                      <p key={i} className="text-text-muted leading-relaxed text-sm mb-1.5 last:mb-0">
                        {d}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
