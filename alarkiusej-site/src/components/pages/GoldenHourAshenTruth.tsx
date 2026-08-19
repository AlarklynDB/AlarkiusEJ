import { useState } from 'react'
import CharacterProfileModal from '../CharacterProfileModal'
import { characterProfiles } from '../../data/characters'

const characters = [
  { name: 'Lhua Gholdt', tag: 'she/her · 25', blurb: 'SS Rank Healer & Combatant — an apothecary who buried her feelings under responsibility.' },
  { name: 'Oshaeá "Oa" Ashen Lenhart', tag: 'she/her · 23', blurb: 'A demon-raised orphan who buried her grief under cheerfulness. Wields S Rank demon magic the city underrates.' },
  { name: 'Phaliyá the Slime', tag: 'she/it', blurb: 'Once a Demon Slime Boss — now a smaller, self-aware Rank A slime who teaches Oa to wield her power.' },
]

export default function GoldenHourAshenTruth() {
  const [openCharacter, setOpenCharacter] = useState<string | null>(null)
  const activeProfile = openCharacter ? characterProfiles[openCharacter] : null

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">
            GHOAT - Original Work
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
            Golden Hour of Ashen Truth
          </h1>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="tag tag-rose text-xs">Fantasy Romance</span>
            <span className="tag tag-rose text-xs">Adventure</span>
            <span className="tag tag-rose text-xs">Soft Comedy</span>
            <span className="tag tag-rose text-xs">Sci-Fi</span>
          </div>
          <div className="callout callout-gold">
            <span className="text-xl flex-shrink-0">🌉</span>
            <p className="text-sm text-text-muted">
              <span className="text-gold font-semibold">Currently in progress.</span> Chapters are
              being written and refined right now — this page will grow alongside the story. Will be published soon to: B&N and Google Play Books, alongside alarkiusej.com/bookshelf
            </p>
          </div>
        </div>

        {/* Setting */}
        <section className="mb-10">
          <p className="text-text-faint text-sm uppercase tracking-widest font-medium mb-3">Setting</p>
          <div className="flex flex-wrap gap-2">
            {['Medieval Sci-fi', 'Planet Hraeth', 'Thaosia — a Pangean Supercontinent', 'Year 4310 AD'].map((t) => (
              <span key={t} className="tag text-xs">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Blurb */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-4">Story Blurb</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            <strong className="text-text">Lhua Gholdt</strong> has always kept her world small — the
            apothecary, her work, the quiet discipline of someone who learned early that warmth costs
            too much to give away freely. Then{' '}
            <strong className="text-text">Oshaeá Lenhart</strong> walks in, all misty blue eyes and
            unguarded smiles, and ruins the math entirely.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            Set in the world of <span className="text-rose-light">Thaosia</span>,{' '}
            <em className="text-text">Golden Hour of Ashen Truth</em> follows two women circling
            something neither of them has a name for yet. One is a healer who buried her feelings
            under responsibility, and a girl who buried her grief under cheerfulness. Between them: a
            Rank SS demon slime with opinions, a city full of people who underestimate both of them,
            and the slow, stubborn work of learning to let someone in.
          </p>

          <div className="p-6 bg-surface-raised border border-rose/20 rounded-xl text-center italic">
            <p className="font-serif text-lg text-text">
              "It isn't a story about falling. It's about the moment after — when the flame catches,
              and you have to decide whether to cup it or let it breathe."
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Characters */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">Main Characters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map((c) => {
              const hasProfile = Boolean(characterProfiles[c.name])
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => hasProfile && setOpenCharacter(c.name)}
                  disabled={!hasProfile}
                  className={`text-left flex flex-col gap-2 p-4 bg-surface rounded-lg border border-border transition-colors duration-200 ${
                    hasProfile
                      ? 'hover:border-rose/40 hover:bg-surface-hover cursor-pointer'
                      : 'cursor-default'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-text">{c.name}</p>
                      <p className="text-xs text-text-faint">{c.tag}</p>
                    </div>
                    {hasProfile && (
                      <span className="text-xs text-rose-light flex-shrink-0 mt-0.5">View →</span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted leading-snug">{c.blurb}</p>
                </button>
              )
            })}
          </div>
        </section>

        <div className="section-divider" />

        {/* Interactive Calendar */}
        <section className="mb-12">
          <p className="text-text-faint text-sm uppercase tracking-widest font-medium mb-3">Explore the World</p>
          <a
            href="/thaosia-calendar"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-surface rounded-xl border border-gold/20 hover:border-gold/40 transition-colors duration-200 group"
          >
            <span className="text-3xl flex-shrink-0">📅</span>
            <div className="flex-1">
              <p className="text-base font-semibold text-text group-hover:text-gold transition-colors duration-200">
                The Thaosia Calendar
              </p>
              <p className="text-sm text-text-muted leading-snug mt-1">
                An interactive year calendar for Thaosia — 12 months, 540 days, the bell-based time
                system, and character birthdays, all mapped alongside GHOAT's chapter events.
              </p>
            </div>
            <span className="text-gold text-sm font-medium whitespace-nowrap self-start sm:self-center">
              Open Calendar →
            </span>
          </a>
        </section>

        <div className="section-divider" />

        {/* Who it's for */}
        <section>
          <div className="callout callout-rose">
            <span className="text-2xl flex-shrink-0">✨</span>
            <div>
              <p className="text-sm font-semibold text-text mb-1">Perfect for fans who like:</p>
              <p className="text-sm text-text-muted">
                Slow-burn Sapphic Romance, Cozy Fantasy Worldbuilding, and stories about learning to
                let someone in.
              </p>
            </div>
          </div>
        </section>
      </div>

      {activeProfile && (
        <CharacterProfileModal character={activeProfile} onClose={() => setOpenCharacter(null)} />
      )}
    </div>
  )
}
