import { useState } from 'react'

const commissionTiers = [
  {
    name: 'Low Budget Bundle',
    price: '$50.00',
    description:
      'The basic starter pack. Styles can include 8-bit, retro, simple, minimal, elevator, lounge, classical, or Pokémon style.',
    instruments: '1 – 5',
    minLength: '1 min',
    maxLength: '2.5 min',
    duration: 'At least one week or less (without interruptions)',
    revisions: 'Free of charge, unlimited',
    accent: 'teal',
  },
  {
    name: 'Themed Bundle',
    price: '$140 USD',
    description:
      'Story theme centered bundle: fantasy, whimsical, dark, gloomy, horror…etc. Uses a variety of orchestral instruments with piano and violin as the main lead.',
    instruments: '6 – 10',
    minLength: '3 min',
    maxLength: '4 min',
    duration: 'Two weeks, if not three',
    revisions: 'Free of charge, unlimited',
    accent: 'rose',
    recommended: true,
  },
  {
    name: 'Legendary Bundle',
    price: '$250 – $750 USD',
    priceNote: 'Negotiable',
    description:
      'A super crazy buffed bundle. Not only a better version of the previous tier, it will have super sick beats, amazing drops, and super arpeggios.',
    instruments: '15 – 20',
    minLength: '3.5 min',
    maxLength: '6 min',
    duration: 'Three weeks to a month',
    revisions: 'Free of charge, unlimited',
    accent: 'gold',
  },
]

const musicProjects = [
  {
    name: 'The Daevekverse',
    tag: 'On/Off Project',
    description:
      'A Soundtrack Album Universe for original character Daemyth Nahvek (Daevek) — a Time Connoisseur from 4561, a noir and cyberpunk timeline. A highly skilled musician who\'s perfected Tempo and Music Manipulation. His theme: Luxuria Temporis ("The Luxury of Time").',
    icon: '⏱️',
  },
  {
    name: 'The Everfrost Series',
    tag: 'Music Album',
    description:
      'An original soundtrack series with a main focus on string instruments. Four tracks total, two published.',
    icon: '❄️',
    tracks: ['Everfrost — Published', 'Nullfrost — Published', 'Blackfrost — n/a', 'Hyperfrost — n/a'],
  },
]

const sampleVideos = [
  { label: 'Piano & Strings Ensemble', url: 'https://www.youtube.com/watch?v=jMQ1ef43joY' },
  { label: 'Piano, Cello, and Violin', url: 'https://www.youtube.com/watch?v=ysBZnlL2bQM' },
  { label: 'Pure Piano — Airy, Whimsical', url: 'https://www.youtube.com/watch?v=cOkGpY78W9o' },
  { label: 'An Orchestral Waltz', url: 'https://www.youtube.com/watch?v=UZZcmqTkf80' },
]

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

export default function Music() {
  const [openTier, setOpenTier] = useState<string | null>(null)

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
            Soundtrack Composer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
            Music
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Piano-trained composer (8 years of lessons) who got into composition in 2020. Music and
            Storytelling is the strongest suit. Commissions are open!
          </p>
        </div>

        {/* Software */}
        <section className="mb-12">
          <div className="callout callout-gold">
            <span className="text-xl flex-shrink-0">🎵</span>
            <p className="text-sm text-text-muted leading-relaxed">
              Using{' '}
              <a
                href="https://musescore.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
              >
                Musescore4
              </a>{' '}
              — a powerful notation software with VSTs, SFXs, and audio editing via MuseHub. Also
              has Ableton, FL Studio, and LMMS installed, but primarily a{' '}
              <strong className="text-text">notation composer</strong>.
            </p>
          </div>
        </section>

        {/* Music Projects */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">Music Projects</h2>
          <div className="space-y-5">
            {musicProjects.map((project) => (
              <div
                key={project.name}
                className="p-6 bg-surface rounded-xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-bg border border-gold/30 flex items-center justify-center flex-shrink-0 text-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-text">{project.name}</h3>
                      <span className="tag tag-gold text-xs">{project.tag}</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">
                      {project.description}
                    </p>
                    {project.tracks && (
                      <div className="space-y-1">
                        {project.tracks.map((track) => {
                          const published = track.includes('Published')
                          return (
                            <div key={track} className="flex items-center gap-2">
                              <div
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  published ? 'bg-success' : 'bg-border-light'
                                }`}
                              />
                              <span
                                className={`text-xs ${
                                  published ? 'text-text-muted' : 'text-text-faint'
                                }`}
                              >
                                {track}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Samples */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-2">Music Samples</h2>
          <p className="text-text-muted text-sm mb-6">
            Hand-selected favorites. Click to watch on YouTube.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sampleVideos.map((video) => {
              const id = getYouTubeId(video.url)
              return (
                <a
                  key={video.label}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-surface border border-border rounded-xl overflow-hidden hover:border-border-light transition-colors"
                >
                  {id && (
                    <div className="relative">
                      <img
                        src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                        alt={video.label}
                        className="w-full aspect-video object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-rose/80 transition-colors">
                          <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm text-text font-medium group-hover:text-rose-light transition-colors">
                      {video.label}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        <div className="section-divider" />

        {/* Commissions */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-2">
            Music Commissions
          </h2>
          <p className="text-text-muted text-sm mb-2">
            Quality takes investment! Think through which tier works for your project.
          </p>
          <div className="callout mb-6">
            <span className="text-xl flex-shrink-0">📅</span>
            <p className="text-sm text-text-muted">
              <strong className="text-text">Schedule note:</strong> Making music takes time and
              communication is key. Schedule is flexible and can adapt to your timeline. Between
              two and four check-ins before the delivery date is standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {commissionTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                  tier.recommended
                    ? 'border-rose/50 bg-rose-bg'
                    : 'border-border bg-surface hover:border-border-light'
                }`}
                onClick={() => setOpenTier(openTier === tier.name ? null : tier.name)}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose text-ink text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div
                  className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center ${
                    tier.accent === 'teal'
                      ? 'bg-teal-bg border border-teal/30'
                      : tier.accent === 'rose'
                      ? 'bg-rose-bg border border-rose/30'
                      : 'bg-gold-bg border border-gold/30'
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      tier.accent === 'teal'
                        ? 'bg-teal'
                        : tier.accent === 'rose'
                        ? 'bg-rose'
                        : 'bg-gold'
                    }`}
                  />
                </div>
                <h3 className="font-serif text-base font-semibold text-text mb-1">{tier.name}</h3>
                <p
                  className={`text-xl font-bold mb-1 ${
                    tier.accent === 'teal'
                      ? 'text-teal-light'
                      : tier.accent === 'rose'
                      ? 'text-rose-light'
                      : 'text-gold-light'
                  }`}
                >
                  {tier.price}
                </p>
                {tier.priceNote && (
                  <p className="text-xs text-text-faint mb-2">({tier.priceNote})</p>
                )}
                <p className="text-xs text-text-muted mb-3 leading-relaxed">{tier.description}</p>

                {openTier === tier.name && (
                  <div className="mt-3 pt-3 border-t border-border space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-faint">Instruments</span>
                      <span className="text-text">{tier.instruments}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-faint">Min Length</span>
                      <span className="text-text">{tier.minLength}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-faint">Max Length</span>
                      <span className="text-text">{tier.maxLength}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-faint">Duration</span>
                      <span className="text-text text-right max-w-[60%]">{tier.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-faint">Revisions</span>
                      <span className="text-success">{tier.revisions}</span>
                    </div>
                  </div>
                )}

                <p className="text-xs text-text-faint mt-3">
                  {openTier === tier.name ? '↑ Click to collapse' : '↓ Click for details'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment + Contact */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-text mb-4">Payment & Getting Started</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            A <strong className="text-text">$10 charge</strong> for the score template comes first
            (regardless of which tier). Payment is handled through{' '}
            <a
              href="https://ko-fi.com/alarkiusej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-light hover:text-rose underline underline-offset-2 transition-colors"
            >
              Ko-Fi
            </a>
            . For the Legendary Bundle, please discuss the final price as it depends on quality.
          </p>
          <div className="callout">
            <span className="text-xl flex-shrink-0">💬</span>
            <div>
              <p className="text-sm text-text font-semibold mb-1">How to reach me</p>
              <p className="text-sm text-text-muted">
                Most active on Discord! Join the server or find the invite on the Contact page. Let
                me know you're a potential client so I don't mistake you for spam!
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://discord.gg/umB3p5qfE4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-rose text-ink text-sm font-semibold rounded-lg hover:bg-rose-light transition-colors"
          >
            Commission via Discord
          </a>
          <a
            href="https://ko-fi.com/alarkiusej"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-surface border border-border text-text text-sm font-medium rounded-lg hover:border-border-light transition-colors"
          >
            Support on Ko-Fi
          </a>
        </div>
      </div>
    </div>
  )
}
