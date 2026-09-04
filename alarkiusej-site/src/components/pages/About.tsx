import { useState, useEffect } from 'react'

const genres = [
  'Mythopoetic Fantasy',
  'Mythological & Spiritual Fiction',
  'Adventure Fantasy with Emotional Depth',
  'Psychological & Dramatic Fiction',
  'Slice-of-Life with Cosmic Weight',
  'Lore-Driven Sci-Fi & Symbolic Worldbuilding',
]

const skills = [
  { name: 'Traditional & Digital Drawing', icon: '🎨' },
  { name: 'Musician / Composer', icon: '🎹' },
  { name: 'Writer', icon: '✍️' },
  { name: 'Graphic Designer', icon: '🖥️' },
  { name: 'Worldbuilding', icon: '🌍' },
  { name: 'Creative Artist', icon: '✦' },
  { name: 'CBT/Beta Tester', icon: '🧪' },
]

interface MediumPost {
  title: string
  link: string
  pubDate: string
  thumbnail: string
  description: string
}

/** Extract first <img src> from raw HTML content — Medium's thumbnail field is often empty */
function extractThumbnail(content: string): string {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i)
  return match ? match[1] : ''
}

/** Strip HTML tags and return a clean excerpt */
function stripHtml(html: string, maxLen = 180): string {
  const stripped = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  return stripped.length > maxLen ? stripped.slice(0, maxLen) + '…' : stripped
}

function MediumFeedCard() {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Served by our own Cloudflare Worker (worker.js), which fetches and
    // parses Medium's RSS feed server-side — Medium's feed can't be read
    // directly from the browser (no CORS header), and this avoids relying
    // on third-party proxy services like rss2json for uptime/rate limits.
    fetch('/api/medium-feed')
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'ok' && data.items?.length) {
          const mapped: MediumPost[] = data.items.map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail: extractThumbnail(item.content || ''),
            description: stripHtml(item.content || ''),
          }))
          setPosts(mapped)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(posts.length - 1, c + 1))

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    } catch {
      return dateStr
    }
  }

  const post = posts[current]

  return (
    <section className="mt-12">
      <div className="p-8 sm:p-10 bg-surface rounded-2xl border border-border">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-rose text-xs font-medium tracking-widest uppercase mb-1">Medium</p>
            <h2 className="font-serif text-2xl font-semibold text-text">
              Alarkius is on Medium!
            </h2>
            <p className="text-text-muted text-sm mt-1">
              Find Writing Tips made by AlarkiusEJ!
            </p>
          </div>
          <a
            href="https://medium.com/@alarkiusej"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 px-4 py-2 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg hover:border-border-light hover:bg-ink-light transition-colors duration-200 whitespace-nowrap"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            View Profile
          </a>
        </div>

        {/* Skeleton */}
        {loading && (
          <div className="animate-pulse">
            <div className="w-full h-48 bg-surface-raised rounded-xl mb-5" />
            <div className="h-5 bg-surface-raised rounded w-3/4 mb-3" />
            <div className="h-4 bg-surface-raised rounded w-1/4 mb-4" />
            <div className="h-4 bg-surface-raised rounded w-full mb-2" />
            <div className="h-4 bg-surface-raised rounded w-5/6" />
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-10 text-text-muted text-sm">
            <p>Couldn’t load posts right now.</p>
            <a
              href="https://medium.com/@alarkiusej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose hover:text-rose-light underline mt-2 inline-block transition-colors duration-200"
            >
              Visit Medium profile →
            </a>
          </div>
        )}

        {/* Post display */}
        {!loading && !error && post && (
          <>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Thumbnail */}
              {post.thumbnail ? (
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-surface-raised border border-border mb-5">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-full h-48 sm:h-56 rounded-xl bg-surface-raised border border-border mb-5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-text-faint" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </div>
              )}

              {/* Title + meta */}
              <h3 className="font-serif text-xl font-semibold text-text leading-snug mb-2 group-hover:text-rose-light transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-xs text-text-faint mb-3">{formatDate(post.pubDate)}</p>
              <p className="text-sm text-text-muted leading-relaxed">{post.description}</p>

              <div className="mt-4 flex items-center gap-1 text-xs text-rose group-hover:text-rose-light transition-colors duration-200">
                <span>Read on Medium</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Navigation controls */}
            <div className="flex items-center justify-between mt-7 pt-5 border-t border-border">
              <button
                onClick={prev}
                disabled={current === 0}
                aria-label="Previous post"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-muted text-sm hover:text-text hover:border-border-light disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>

              <span className="text-xs text-text-faint tabular-nums">
                {current + 1} / {posts.length}
              </span>

              <button
                onClick={next}
                disabled={current === posts.length - 1}
                aria-label="Next post"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-muted text-sm hover:text-text hover:border-border-light disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

/** Floating dismissible notice: anti-GenAI stance, shown once per browser session */
function GenAINotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = window.localStorage.getItem('genai-notice-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    setVisible(false)
    window.localStorage.setItem('genai-notice-dismissed', '1')
  }

  if (!visible) return null

  return (
    <div
      role="alert"
      className="fixed bottom-5 right-5 left-5 sm:left-auto sm:max-w-sm z-50 flex items-start gap-3 rounded-xl border border-error/40 bg-[#2a1616] px-4 py-3.5 shadow-2xl shadow-black/40"
    >
      <span className="text-error text-lg leading-none mt-0.5">⛔</span>
      <p className="flex-1 text-sm text-error font-medium leading-snug">
        Support Human Artists and Creators. Say no to GenAI.
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss notice"
        className="text-error/70 hover:text-error transition-colors duration-150 flex-shrink-0 -mt-0.5 -mr-1 p-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">About</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
            Alarkius Elvya Jay
          </h1>
          <p className="text-text-muted text-lg">
            Also known as <strong className="text-text">AJ</strong> or{' '}
            <strong className="text-text">AlarkiusEJ</strong> — an online pen-name and pseudonym.
          </p>
        </div>

        {/* Bio columns */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="w-full aspect-square rounded-2xl bg-surface border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-28 h-28 rounded-full bg-rose-bg border-2 border-rose/40 flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-5xl font-bold text-rose">AJ</span>
                </div>
                <p className="font-serif text-xl font-semibold text-text">Alarkius Elvya Jay</p>
                <p className="text-text-muted text-sm mt-1">alarkiusej.com </p>
                <p className="text-text-faint text-xs mt-1">He/Him · Lvl 25</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="tag text-xs">Author</span>
                  <span className="tag text-xs">Composer</span>
                  <span className="tag text-xs">Worldbuilder</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="callout callout-rose">
              <span className="text-xl flex-shrink-0">🎨</span>
              <p className="text-sm text-text leading-relaxed">
                Alarkius Elvya Jay, more commonly known as AJ (AlarkiusEJ), is a fantasy-adventure
                writer that loves the thrill of excitement! One fateful day back in December of 2017,
                he decided to try and enter the world of crafting stories and worldbuilding. The
                passion of creating new worlds sparked interest in the making of stories, and so, he
                stepped in. It was a magical feeling, stepping into the world of stories and fiction,
                and that was where his interests has sparked a huge idea!
              </p>
            </div>
            <div className="callout callout-rose">
              <span className="text-xl flex-shrink-0">🎨</span>
              <p className="text-sm text-text leading-relaxed">
                Fast forward to today! Within the past years, he created a world that he calls his
                child, The Hibrythian Saga, which has nine long volumes, an ongoing project! Aside
                from writing, he's constantly imagining up new things for different projects. He loves
                music and plays the piano, which got him into creating compositions, along with
                drawing at a young age.
              </p>
            </div>
          </div>
        </section>

        {/* Other Info */}
        <section className="mb-12 p-6 bg-surface rounded-xl border border-border">
          <h2 className="font-serif text-xl font-semibold text-text mb-3">Other Information</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Alarkius Elvya Jay is an online pen-name and pseudonym, which can be shortened to "AJ"
            or "Jay." Ideas are inspired through various mediums and media: anime, stories, and pop
            culture. Music is a huge part of identity — a fan of video game soundtracks, Japanese
            music, and cool orchestral soundtracks. Other similar names to Alarkius Elvya Jay include: 
            "AlarkiusJay" , "AlarkiusElvyaJ" , or "AlarkiusElvyaJay" — these names are taken and not avaliable for use. 
          </p>
        </section>

        <div className="section-divider" />

        {/* Soundtrack Composer */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-4">
            Soundtrack Composer
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Growing up, I took piano lessons for eight years, now self-learning and practicing. In
            2020, composition began with the first piece for the Hibrythian Saga. As time continued,
            more compositions were made for the saga, which has made home to its own{' '}
            <a
              href="https://www.youtube.com/@TheHibrythianSaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-light hover:text-rose transition-colors underline underline-offset-2"
            >
              YouTube channel
            </a>{' '}
            and personal channel too.
          </p>
          <p className="text-text-muted italic">Music and Storytelling is my strongest suit!</p>
        </section>

        <div className="section-divider" />

        {/* Indie Author */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-2">An Indie Author</h2>
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-6">
            From Writer turned Indie Author | 2017+
          </p>

          <p className="text-text-muted leading-relaxed mb-6">
            Ever since I started to write my first story, I've really enjoyed it since I can bring
            my ideas to life. My first ever world is{' '}
            <em className="text-text">The Hibrythian Saga</em>, a multi-collection series that
            consists of novels, world lore, and multimedia storytelling. The first book of the
            saga is called{' '}
            <span className="text-gold font-medium">"Hibryds - A Grand Voyage,"</span> which is
            already available on Barnes &amp; Nobles and the project continues to grow. It's not
            just worlds I like to create, I also like creating stories that tie heavily into the
            world at <em className="text-text">just the right pace</em> without dumping too much.
          </p>

          <p className="text-text-muted leading-relaxed mb-2">My Works and Universes:</p>
          <ul className="list-disc list-inside text-text-muted leading-relaxed mb-6 space-y-1">
            <li>The Hibrythian Saga</li>
            <li>The Naiseikai Universe</li>
          </ul>
          <p className="text-text-muted leading-relaxed mb-6">
            <a
              href="/hibrythian-saga"
              className="text-rose-light hover:text-rose transition-colors underline underline-offset-2"
            >
              The Hibrythian Saga
            </a>{' '}
            and{' '}
            <a
              href="/naiseikai-universe"
              className="text-rose-light hover:text-rose transition-colors underline underline-offset-2"
            >
              The Naiseikai Universe
            </a>{' '}
            are my worlds that blend everything that I like to write in. These works aren't just
            stories…. they are worlds that are mythic with real heartfelt struggles, turned into
            satisfying journeys.
          </p>

          <h3 className="font-serif text-lg font-semibold text-text mb-3">My Writing Style</h3>
          <p className="text-text-muted leading-relaxed mb-6">
            A lot of my works will center with a heartfelt mythopoetic tone that can pull weight
            and love. My stories often blend poetic prose with emotional depth, silent
            introspection and symbolic themes. I like to put a mix of{' '}
            <em className="text-text">faith,</em> character emotion, spiritual conflict, and
            transformation in my works, even when I write Fantasy, Sci-Fi, or Adventure or more.
            My narratives explore love, loss, identity, and healing all within intricately built
            worlds (lores) that feel both timeless and intimate. I also like to blend popular
            tropes, along with media to shape it into my own style.
          </p>

          <h3 className="font-serif text-lg font-semibold text-text mb-4">Genres I Write In</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {genres.map((g) => (
              <span key={g} className="tag tag-rose text-xs">
                ✦ {g}
              </span>
            ))}
          </div>

          <div className="callout callout-rose">
            <span className="text-xl flex-shrink-0">💖</span>
            <div>
              <p className="text-sm font-semibold text-text mb-1">Also Specializing In:</p>
              <p className="text-sm text-text-muted leading-relaxed">
                <strong className="text-rose-light">
                  Girls' Love (GL) / Queer &amp; Sapphic Romance / Drama
                </strong>{' '}
                — tender, emotional, character-driven stories that centers around relationships,
                found family, and more!
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Skills */}
        <section>
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border hover:border-border-light transition-colors duration-200"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-sm text-text-muted">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Available for Hire */}
        <section className="mt-8 p-6 sm:p-8 bg-surface rounded-2xl border border-border">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="font-serif text-2xl font-semibold text-text">
              Skills Available for Hire
            </h2>
            <span className="tag tag-rose text-xs">Status: Remote</span>
          </div>

          <p className="text-text-muted text-sm leading-relaxed mb-4">
            Want to hire me to break your apps or help improve features? Here's what I can do!
            It can be your web app, website, apps, or games!
          </p>
          <ul className="list-disc list-inside text-text-muted text-sm leading-relaxed mb-6 space-y-1">
            <li>CBT Beta/Alpha Tester</li>
            <li>UIX Beta/Alpha Tester</li>
            <li>UIX Designer (rookie)</li>
          </ul>

          <p className="text-text-muted text-sm leading-relaxed mb-4">
            Since I like creating stories and worlds, I can also offer a neat skill for those
            who are looking for a rich experience:
          </p>
          <ul className="list-disc list-inside text-text-muted text-sm leading-relaxed mb-6 space-y-1">
            <li>Narrative Designer</li>
          </ul>

          <p className="text-text-muted text-sm leading-relaxed mb-4">
            You can get in touch with me using the link below!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg hover:border-border-light hover:bg-ink transition-colors duration-200"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </section>

        {/* Medium RSS Feed */}
        <MediumFeedCard />

        {/* Manifesto */}
        <a
          href="/manifesto"
          className="group mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 bg-surface rounded-2xl border border-border hover:border-border-light hover:bg-ink-light transition-colors duration-200"
        >
          <div>
            <p className="text-rose text-xs font-medium tracking-widest uppercase mb-1">Author Manifesto</p>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text">Why I Write</h2>
            <p className="text-text-muted text-sm mt-1">
              An Author Manifesto of why I love Writing, based on my Faith in Jesus.
            </p>
          </div>
          <span className="self-start sm:self-auto flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg group-hover:border-border-light group-hover:bg-ink transition-colors duration-200 whitespace-nowrap">
            Read the Manifesto
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        {/* Contact */}
        <a
          href="/contact"
          className="group mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 bg-surface rounded-2xl border border-border hover:border-border-light hover:bg-ink-light transition-colors duration-200"
        >
          <div>
            <p className="text-rose text-xs font-medium tracking-widest uppercase mb-1">Get in Touch</p>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text">Contact</h2>
            <p className="text-text-muted text-sm mt-1">
              Reach out for commissions, collabs, or just to say hi.
            </p>
          </div>
          <span className="self-start sm:self-auto flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg group-hover:border-border-light group-hover:bg-ink transition-colors duration-200 whitespace-nowrap">
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>

      <GenAINotice />
    </div>
  )
}
