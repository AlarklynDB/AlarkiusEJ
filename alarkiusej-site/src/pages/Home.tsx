import { Link } from 'react-router-dom'

const skills = [
  'Traditional & Digital Drawing',
  'Musician / Composer',
  'Writer',
  'Graphic Designer',
  'Worldbuilding',
  'Creative Artist',
]

const projects = [
  {
    title: 'The Hibrythian Saga',
    subtitle: 'Adventure Fantasy · Mythic Fiction · Emotional Epic',
    description:
      'A mythic Adventure Fantasy epic chronicling the fate of a fractured world born from divine ambition and human emotion. 81 books planned.',
    path: '/hibrythian-saga',
    accent: 'rose',
  },
  {
    title: 'The Naiseikai Universe',
    subtitle: 'Original English Light Novel · Anime Universe',
    description:
      'The World of Introspection — where shinobi, demis, youkai, and elemental majin move beneath the surface of a hidden society.',
    path: '/naiseikai-universe',
    accent: 'teal',
  },
  {
    title: 'Music Compositions',
    subtitle: 'Soundtrack Composer · Available for Commissions',
    description:
      'Piano-trained composer creating orchestral soundtracks since 2020. Commissions open across multiple tiers.',
    path: '/music',
    accent: 'gold',
  },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-teal/4 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-rose text-sm font-medium tracking-widest uppercase mb-4">
                Author Library
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6">
                Alarkius
                <br />
                <span className="text-rose-light">Elvya Jay</span>
              </h1>
              <p className="text-text-muted text-lg mb-4 leading-relaxed">
                Also known as <span className="text-text font-medium">AJ</span> or{' '}
                <span className="text-text font-medium">AlarkiusEJ</span> — a fantasy-adventure
                writer, composer, and worldbuilder who loves the thrill of excitement.
              </p>
              <div className="callout callout-rose mb-8">
                <span className="text-lg flex-shrink-0">🎨</span>
                <p className="text-sm text-text leading-relaxed">
                  One fateful day in December of 2017, he stepped into the world of crafting stories
                  and worldbuilding. What started as a spark of passion became{' '}
                  <em>The Hibrythian Saga</em> — a world he calls his child, and it keeps growing.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-rose text-ink text-sm font-semibold rounded-lg hover:bg-rose-light transition-colors duration-200"
                >
                  About Me
                </Link>
                <Link
                  to="/hibrythian-saga"
                  className="px-6 py-3 bg-surface border border-border text-text text-sm font-medium rounded-lg hover:bg-surface-raised hover:border-border-light transition-colors duration-200"
                >
                  View Works
                </Link>
                <Link
                  to="/music"
                  className="px-6 py-3 bg-surface border border-border text-text text-sm font-medium rounded-lg hover:bg-surface-raised hover:border-border-light transition-colors duration-200"
                >
                  Commission Music
                </Link>
              </div>
            </div>

            {/* Portrait / Identity card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 sm:w-80">
                <div className="relative">
                  <div className="w-full aspect-[3/4] rounded-2xl bg-surface-raised border border-border overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full border-2 border-rose/40 overflow-hidden mx-auto mb-4">
                        <img
                          src="/AlarkiusEJ.jpg"
                             alt="Alarkius Elvya Jay"
                              className="w-full h-full object-cover"
                            />
                        </div>
                      <p className="text-xs text-text-faint uppercase tracking-widest mb-1">Alarkius Elvya Jay</p>
                      <p className="text-text-muted text-sm">@alarkiusjay.bsky.social</p>
                      <p className="text-text-faint text-xs mt-1">He/Him · Lvl 25</p>
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        <span className="tag text-xs">Author</span>
                        <span className="tag text-xs">Composer</span>
                        <span className="tag text-xs">Worldbuilder</span>
                        <span className="tag text-xs">Artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-rose rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="font-serif text-3xl font-semibold text-text">Current Projects</h2>
          <p className="text-text-muted mt-2">Works that are out or currently being worked on.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.path}
              className="group block p-6 bg-surface border border-border rounded-xl hover:border-border-light hover:bg-surface-raised transition-all duration-300"
            >
              <div
                className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center ${
                  project.accent === 'rose'
                    ? 'bg-rose-bg border border-rose/30'
                    : project.accent === 'teal'
                    ? 'bg-teal-bg border border-teal/30'
                    : 'bg-gold-bg border border-gold/30'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    project.accent === 'rose'
                      ? 'bg-rose'
                      : project.accent === 'teal'
                      ? 'bg-teal'
                      : 'bg-gold'
                  }`}
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-text mb-1 group-hover:text-rose-light transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs text-text-faint mb-3">{project.subtitle}</p>
              <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-text-faint group-hover:text-rose transition-colors duration-200">
                <span>Learn more</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border bg-ink-light">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="md:w-1/3">
              <p className="text-rose text-xs font-medium tracking-widest uppercase mb-2">Craft</p>
              <h2 className="font-serif text-2xl font-semibold text-text">Skills &amp; Mediums</h2>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center p-10 bg-surface rounded-2xl border border-border">
          <h2 className="font-serif text-3xl font-semibold text-text mb-3">
            Let's create something amazing together.
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            Reach out on Discord, Bluesky, or support the work on Ko-Fi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://discord.gg/umB3p5qfE4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-rose text-ink text-sm font-semibold rounded-lg hover:bg-rose-light transition-colors duration-200"
            >
              Join Discord
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg hover:border-border-light transition-colors duration-200"
            >
              Contact Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
