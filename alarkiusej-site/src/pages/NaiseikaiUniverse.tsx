const books = [
  {
    title: 'The Quiet Crow & The Ninja',
    volume: 'Vol 1 - Standard Edition',
    status: 'Available',
    genre: "Girls' Love · Supernatural · Drama",
    where: 'Barnes & Noble',
    href: "https://www.barnesandnoble.com/w/the-quiet-crow-the-ninja-alarkius-elvya-jay/1149627312?ean=9798994097656",
  },
  {
    title: 'The Quiet Crow & The Ninja',
    volume: 'Vol 1 - Colored Edition (Character Profiles)',
    status: 'Available',
    genre: "Girls' Love · Supernatural · Drama",
    where: 'Barnes & Noble',
    href: "https://www.barnesandnoble.com/w/the-quiet-crow-the-ninja-alarkius-elvya-jay/1149627312?ean=9798995278108",
  },
]

export default function NaiseikaiUniverse() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-teal text-xs font-medium tracking-widest uppercase mb-3">
            Light Novel Universe
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-2">
            The Naiseikai Universe
          </h1>
          <p className="text-text-muted text-lg mb-4">
            Also known as <strong className="text-text">The World of Introspection</strong>
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-medium border text-teal-light"
              style={{ background: 'rgba(90,158,143,0.12)', borderColor: 'rgba(90,158,143,0.4)' }}
            >
              Original English Light Novel
            </span>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-medium border text-teal-light"
              style={{ background: 'rgba(90,158,143,0.12)', borderColor: 'rgba(90,158,143,0.4)' }}
            >
              Anime Universe
            </span>
          </div>

          {/* Official Website Card */}
          <a
            href="https://www.naiseikaiuniverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mb-6 flex items-center justify-between gap-4 p-4 bg-surface border border-border hover:border-teal/40 hover:bg-surface-raised rounded-xl transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border"
                style={{ background: 'rgba(90,158,143,0.12)', borderColor: 'rgba(90,158,143,0.35)' }}
              >
                <span className="text-base">🌏</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-text group-hover:text-teal-light transition-colors">
                  Official Universe Website
                </p>
                <p className="text-xs text-text-faint">naiseikaiuniverse.com</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-text-faint group-hover:text-teal-light transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* KarasuEJ callout */}
        <section className="mb-10">
          <div
            className="p-5 rounded-xl border flex items-start gap-3"
            style={{ background: 'rgba(90,158,143,0.08)', borderColor: 'rgba(90,158,143,0.3)' }}
          >
            <span className="text-2xl flex-shrink-0">🐦‍⬛</span>
            <div>
              <p className="text-sm font-semibold text-text mb-1">
                Author Name:{' '}
                <em className="text-teal-light font-bold not-italic">KarasuEJ</em>
              </p>
              <p className="text-sm text-text-muted">
                Alarkius uses the name <strong className="text-text">KarasuEJ</strong> as the
                official Japanese Author Name — solely for the Naiseikai Universe. This is a
                separate author identity dedicated to this universe.
              </p>
            </div>
          </div>
        </section>

        {/* Premise */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-5">Universe Premise</h2>
          <blockquote className="border-l-2 border-teal pl-6 py-1 mb-6">
            <p className="text-text leading-relaxed italic font-serif text-lg">
              "There are those who walk unseen among us — whispers in the wind, shadows in the
              crowd. In the age of concrete cities and neon skies, beings of ancient bloodlines still
              move beneath the surface. They are shinobi, assassins, spies, demis, androids, youkai,
              elemental majin, and shifters — each gifted with strange powers that bend the rules of
              our world."
            </p>
          </blockquote>
          <p className="text-text-muted leading-relaxed mb-4">
            Known only to a few, this hidden society thrives in secrecy, bound by myth, magic, and
            the weight of unspoken wars. Some live in silence. Some carry out missions in the dark.
            And some… are still searching for where they belong.
          </p>
          <div className="p-5 bg-surface-raised border border-border rounded-xl text-center">
            <p className="font-serif text-base text-text-muted italic">
              "This is not the world you know."
            </p>
            <p className="font-serif text-lg font-semibold text-text mt-1">
              This is The World of Introspection.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Description */}
        <section className="mb-12">
          <p className="text-text-muted leading-relaxed mb-4">
            The Naiseikai Universe features a lot of different titles with unique genres that spin
            and subvert from classic tropes. There are a lot of different kinds of stories in this
            universe — all connected by the shared hidden world.
          </p>
          <div className="callout callout-rose">
            <span className="text-xl flex-shrink-0">💖</span>
            <p className="text-sm text-text leading-relaxed">
              <strong className="text-rose-light">Perfect for those who love</strong> Girls' Love
              stories with deep meaning and heartfelt messages!
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Books */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">
            Books in the Naiseikai Universe
          </h2>
          <div className="space-y-4">
            {books.map((book) => (
              <div
                key={book.volume}
                className="p-6 bg-surface rounded-xl border border-border hover:border-border-light transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full border"
                    style={{
                      background: 'rgba(90,158,143,0.12)',
                      borderColor: 'rgba(90,158,143,0.4)',
                      color: '#7bbfb0',
                    }}
                  >
                    {book.volume}
                  </span>
                  <span className="text-xs text-success">{book.status}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-text mb-1 group-hover:text-teal-light transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-text-faint mb-4">{book.genre}</p>
                <a
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-teal hover:text-teal-light transition-colors"
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
      </div>
    </div>
  )
}
