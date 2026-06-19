const themes = [
  { icon: '🌀', label: 'Creation vs Consequence' },
  { icon: '🕊️', label: 'Identity, Purpose, and Self-Worth' },
  { icon: '🔥', label: 'Cosmic Conflict & Internal Battles' },
  { icon: '🌸', label: 'Friendship, Family, and Emotional Bonds' },
  { icon: '⏳', label: 'Myth, Memory, and Legacy' },
  { icon: '🐉', label: 'Adventure, Fantasy, Action & More!' },
]

const books = [
  {
    title: 'Hibryds — The Hibrythian Genesis of Everything',
    volume: 'Book 0 - The Genesis / Prequel',
    status: 'Available Now',
    where: 'Barnes & Noble',
    href: 'https://www.barnesandnoble.com/w/hibryds-the-hibrythian-genesis-of-everything-alarkius-elvya-jay/1149652816?ean=9798994097687',
  },
  {
    title: 'Hibryds — A Grand Voyage',
    volume: 'Book 1 - The First Main Book',
    status: 'Available Now',
    where: 'Barnes & Noble',
    href: 'https://www.barnesandnoble.com/w/hibryds-a-grand-voyage-book-1-alarkius-elvya-jay/1149652259?ean=9798994097670',
  },
]

const characters = ['Zohl Celestreule', 'Kydel', 'Raeya Flutters', 'Neàh']


export default function HibrythianSaga() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">
            Main Book Series
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
            The Hibrythian Saga
          </h1>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="tag tag-rose text-xs">Adventure Fantasy</span>
            <span className="tag tag-rose text-xs">Mythic Fiction</span>
            <span className="tag tag-rose text-xs">Slice-of-Life Fantasy</span>
            <span className="tag tag-rose text-xs">Emotional Epic</span>
          </div>
          <div className="callout callout-gold">
            <span className="text-xl flex-shrink-0">⭐</span>
            <p className="text-sm text-text-muted">
              <span className="text-gold font-semibold">81 books planned in total.</span> This is my
              main series that I am currently working on! Two books are already available on Barnes
              &amp; Noble.
            </p>
          </div>

          {/* Official Website Card */}
          <a
            href="https://www.thehibrythiansaga.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-between gap-4 p-4 bg-surface border border-border hover:border-rose/40 hover:bg-surface-raised rounded-xl transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-bg border border-rose/30 flex items-center justify-center flex-shrink-0">
                <span className="text-base">📖</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-text group-hover:text-rose-light transition-colors">
                  TheHibrythianSaga.com
                </p>
                <p className="text-xs text-text-faint">Official Universe Website. (Content has yet to migrate to a similar build for this website. Coming soon!)</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-text-faint group-hover:text-rose-light transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

        </div>

        {/* Tone */}
        <section className="mb-10">
          <p className="text-text-faint text-sm uppercase tracking-widest font-medium mb-3">Tone</p>
          <div className="flex flex-wrap gap-2">
            {['Mythopoetic', 'Heartfelt', 'Cinematic', 'Philosophical', 'Hopeful through darkness'].map(
              (t) => (
                <span key={t} className="tag text-xs">
                  {t}
                </span>
              )
            )}
          </div>
        </section>

        {/* Description */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-4">Series Description</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            <em className="text-text">The Hibrythian Saga</em> is a mythic{' '}
            <strong className="text-text">Adventure Fantasy</strong> epic chronicling the fate of a
            fractured world born from divine ambition and human emotion. Set across galaxies, realms,
            and planes of consciousness, this saga unravels the story of{' '}
            <strong className="text-text">Hetra</strong> — a planet forged by spirits, claimed by
            chosen kin, and tested by shadowed remnants of creation.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            From its foundational <strong className="text-text">Genesis</strong> to the personal
            journeys of{' '}
            <span className="text-rose-light">
              {characters.join(', ')}
            </span>
            , and many others, the Saga bridges the grand scale of gods and stars with the quiet
            intimacy of healing, identity, and chosen family.
          </p>

          <div className="p-6 bg-surface-raised border border-rose/20 rounded-xl text-center italic">
            <p className="font-serif text-lg text-text">
              "What makes a soul whole — destiny, divinity, or love?"
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Core Themes */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">Core Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <div
                key={theme.label}
                className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-border hover:border-rose/30 transition-colors duration-200"
              >
                <span className="text-2xl flex-shrink-0">{theme.icon}</span>
                <p className="text-sm text-text-muted leading-snug italic">{theme.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Who it's for */}
        <section className="mb-12">
          <div className="callout callout-rose">
            <span className="text-2xl flex-shrink-0">✨</span>
            <div>
              <p className="text-sm font-semibold text-text mb-1">Perfect for fans who like:</p>
              <p className="text-sm text-text-muted">
                Emotional Depth, Mythopoetic Narration and Worldbuilding, Anime, Fantasy, and More!
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Available Books */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">
            Available Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {books.map((book) => (
              <div
                key={book.title}
                className="p-6 bg-surface rounded-xl border border-border hover:border-border-light transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-rose bg-rose-bg border border-rose/30 px-2 py-0.5 rounded-full">
                    {book.volume}
                  </span>
                  <span className="text-xs text-success">{book.status}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-text mb-2 group-hover:text-rose-light transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-text-faint mb-4">Available at {book.where}</p>
                <a
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-rose hover:text-rose-light transition-colors"
                >
                  Find on {book.where}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Music */}
        <section>
          <div className="flex items-start gap-4 p-6 bg-surface rounded-xl border border-border">
            <div className="w-10 h-10 rounded-lg bg-gold-bg border border-gold/30 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🎵</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-text mb-1">
                Official Music Channel
              </h3>
              <p className="text-sm text-text-muted mb-3">
                The Hibrythian Saga has its own dedicated YouTube channel featuring original
                compositions made for the series.
              </p>
              <a
                href="https://www.youtube.com/@TheHibrythianSaga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light transition-colors"
              >
                Visit the channel
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
