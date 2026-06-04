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
]

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
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-6">2017+</p>

          <p className="text-text-muted leading-relaxed mb-6">
            Ever since writing the first story, there's been deep enjoyment in bringing ideas to
            life. The first ever world is <em className="text-text">The Hibrythian Saga</em>, a
            multi-collection series that consists of novels, world lore, and multimedia storytelling.
            The first book,{' '}
            <span className="text-gold font-medium">"Hibryds - A Grand Voyage,"</span> is already
            available on Barnes &amp; Noble and the project continues to grow. These works aren't
            just stories — they are worlds that are mythic with real heartfelt struggles, turned into
            satisfying journeys.
          </p>

          <h3 className="font-serif text-lg font-semibold text-text mb-3">My Writing Style</h3>
          <p className="text-text-muted leading-relaxed mb-6">
            A lot of the works center with a heartfelt mythopoetic tone that can pull weight and
            love. Stories often blend poetic prose with emotional depth, silent introspection and
            symbolic themes. There's a mix of faith, character emotion, spiritual conflict, and
            transformation even in Fantasy, Sci-Fi, or Adventure writing. Narratives explore love,
            loss, identity, and healing all within intricately built worlds that feel both timeless
            and intimate.
          </p>

          <h3 className="font-serif text-lg font-semibold text-text mb-4">Genres</h3>
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
                <strong className="text-rose-light">Girls' Love (GL) / Queer Romance / Drama</strong>{' '}
                — tender, emotional, character-driven stories that center around relationships, found
                family, and more.
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
      </div>
    </div>
  )
}
