import { Link } from 'react-router-dom'

const timelineEvents = [
  {
    era: 'Ancient Era',
    date: 'Before recorded history',
    color: 'amber',
    events: [
      { title: 'The First Pacts', desc: 'Yokai and humans forge the earliest agreements of co-existence, long before written law.' },
      { title: 'Elemental Bloodlines', desc: 'Ancient clans with elemental affinities emerge — aligned with wind, shadow, light, fire, and vapor.' },
    ],
  },
  {
    era: 'The Coalition Age',
    date: '1700s',
    color: 'purple',
    events: [
      {
        title: 'Yokai & Human Coalition Act',
        desc: 'Japan establishes the landmark legal framework recognizing Yokai as co-citizens. The global tongue becomes Japanese. Culture and power are not colonized — they are reclaimed.',
        highlight: true,
      },
      { title: 'Rise of the Ninja Yokai Association Quarters (NYAQ)', desc: 'A governing body forms to manage relations between Yokai and Ninja clans.' },
    ],
  },
  {
    era: 'Modern Era',
    date: '2000s – 2090s',
    color: 'cyan',
    events: [
      { title: 'Bio-Tech Expansion', desc: 'Android and Cyborg development accelerates. The first Artificial Yokai are created, blurring the line between machine and spirit.' },
      { title: 'YARC Establishment', desc: 'The Yokai Association Recovery Center (YARC) is founded — officially as a recovery organization, though its true motives remain… contested.' },
    ],
  },
  {
    era: 'Neo-Japan 2100+',
    date: '2100 and beyond',
    color: 'pink',
    events: [
      { title: 'The World of Naiseikai', desc: 'The stage is set. Shinobi, yokai, androids, demis, majin, and shifters live side by side — some in secrecy, some in the open, all carrying stories.' },
      { title: 'The Hidden Society', desc: 'Known only to a few, secret factions and hidden bloodlines continue to operate beneath the neon-lit surface of Neo-Japan.' },
    ],
  },
]

const colorBorder: Record<string, string> = {
  cyan:   'border-[rgba(0,229,255,0.5)]',
  purple: 'border-[rgba(191,95,255,0.5)]',
  pink:   'border-[rgba(255,110,180,0.5)]',
  amber:  'border-[rgba(255,179,71,0.5)]',
}
const colorDot: Record<string, string> = {
  cyan:   'bg-[#00e5ff]',
  purple: 'bg-[#bf5fff]',
  pink:   'bg-[#ff6eb4]',
  amber:  'bg-[#ffb347]',
}
const colorLabel: Record<string, string> = {
  cyan:   'text-[#7ef5ff]',
  purple: 'text-[#d49fff]',
  pink:   'text-[#ffaad4]',
  amber:  'text-[#ffd080]',
}

export default function Lore() {
  return (
    <div className="page-container">

      {/* Header */}
      <div className="mb-12">
        <span className="neon-sign text-[10px] mb-4 inline-block">History</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">Lore & Timeline</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The history of an alternate Earth — where Yokai and humans have lived side by side for centuries,
          and where Japan rose not through conquest, but through spiritual resonance.
        </p>
      </div>

      {/* Setting callout */}
      <section className="mb-12">
        <div className="callout callout-purple">
          <div>
            <p className="text-sm font-mono text-[#d49fff] mb-1">📍 World Setting</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-text">This is not the Earth you know.</strong> In this world, Japan rose through spiritual resonance.
              The global tongue is Japanese. The ancient pacts between Yokai and Humans became law. Culture, power, and identity were
              never colonized — they were reclaimed. The history within Naiseikai Earth differs from what we know.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-purple text-[10px] mb-6 inline-block">Timeline</span>
        <h2 className="font-serif text-2xl mb-8 text-text">World History</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(191,95,255,0.5)] via-[rgba(0,229,255,0.3)] to-transparent" />

          <div className="space-y-12 pl-12">
            {timelineEvents.map((era) => (
              <div key={era.era}>
                {/* Era header */}
                <div className="relative mb-4">
                  <span
                    className={`absolute -left-14 top-1 w-4 h-4 rounded-full ${colorDot[era.color]}`}
                    style={{ boxShadow: `0 0 8px ${era.color === 'cyan' ? 'rgba(0,229,255,0.8)' : era.color === 'purple' ? 'rgba(191,95,255,0.8)' : era.color === 'pink' ? 'rgba(255,110,180,0.8)' : 'rgba(255,179,71,0.8)'}` }}
                  />
                  <p className={`font-serif text-xl font-semibold ${colorLabel[era.color]}`}>{era.era}</p>
                  <p className="text-xs text-text-faint font-mono mt-0.5">{era.date}</p>
                </div>

                {/* Era events */}
                <div className="space-y-3">
                  {era.events.map((ev) => (
                    <div
                      key={ev.title}
                      className={`border rounded-lg p-4 bg-surface transition-all duration-300 hover:bg-surface-raised ${
                        ev.highlight ? colorBorder[era.color] : 'border-border'
                      }`}
                      style={ev.highlight ? { boxShadow: `0 0 12px rgba(${era.color === 'purple' ? '191,95,255' : '0,229,255'},0.1)` } : undefined}
                    >
                      <p className={`font-serif text-base mb-1 font-semibold ${ev.highlight ? colorLabel[era.color] : 'text-text'}`}>{ev.title}</p>
                      <p className="text-sm text-text-muted leading-relaxed">{ev.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factions section */}
      <section className="mb-14">
        <div className="section-divider" />
        <span className="neon-sign neon-sign-pink text-[10px] mb-4 inline-block">Organizations</span>
        <h2 className="font-serif text-2xl mb-6 text-text">Key Factions & Organizations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="neon-card">
            <p className="font-serif text-base mb-1 text-[#7ef5ff]">YARC</p>
            <p className="text-xs text-text-faint font-mono mb-2">Yokai Association Recovery Center</p>
            <p className="text-sm text-text-muted">Officially a recovery organization. Its true motives are heavily questioned by those who look closely enough.</p>
          </div>
          <div className="neon-card">
            <p className="font-serif text-base mb-1 text-[#d49fff]">NYAQ</p>
            <p className="text-xs text-text-faint font-mono mb-2">Ninja Yokai Association Quarters</p>
            <p className="text-sm text-text-muted">Governs relations between Yokai and Ninja clans. A cornerstone of the hidden society's political structure.</p>
          </div>
        </div>
      </section>

      {/* Nav */}
      <div className="section-divider" />
      <div className="flex flex-wrap gap-3">
        <Link to="/worldbuilding" className="btn-neon-cyan text-xs">Worldbuilding →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles & Stories →</Link>
      </div>
    </div>
  )
}
