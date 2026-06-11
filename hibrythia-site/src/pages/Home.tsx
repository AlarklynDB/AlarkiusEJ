// ─── Home.tsx ─────────────────────────────────────────────────────────────────
// HAXL | The Hibrythian Saga — Home Page
// Content sourced word-for-word from Notion: alarkiusej/HAXL-The-Hibrythian-Saga
// ──────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">


      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-14 flex flex-col items-start gap-5">
        <div className="gold-rule" aria-hidden="true" />
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase">
          An Adventure Fantasy World &amp; Book Series
        </p>
        <h1 className="font-display text-[clamp(1.75rem,1rem+2.5vw,3rem)] text-[#d8d4cc] leading-[1.1]">
          The Hibrythian Saga
        </h1>
        <p className="font-body text-sm text-[#7a7670] max-w-[56ch] leading-relaxed">
          Official Website for "Hibryds — A Grand Voyage" and many more books in this series!
        </p>
        <p className="font-body text-xs text-[#c9a84c]/60">
          © All Rights Reserved | Alarkius Elvya Jay / AlarkiusEJ |{' '}
          <a
            href="https://www.alarkiusej.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#c9a84c] transition-colors"
          >
            alarkiusej.com
          </a>
        </p>

        {/* Nav CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="/lore"
            className="font-body text-xs tracking-widest uppercase px-5 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/70 transition-all duration-[180ms]"
          >
            Explore Lore
          </a>
          <a
            href="/world"
            className="font-body text-xs tracking-widest uppercase px-5 py-2.5 text-[#7a7670] hover:text-[#d8d4cc] transition-colors duration-[180ms]"
          >
            The World →
          </a>
          <a
            href="/characters"
            className="font-body text-xs tracking-widest uppercase px-5 py-2.5 text-[#7a7670] hover:text-[#d8d4cc] transition-colors duration-[180ms]"
          >
            Characters →
          </a>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── WHAT DO I DO HERE? ────────────────────────────────────────────── */}
      <section className="py-10 bg-[#141210] border border-[#2e2b26] rounded-sm px-6 my-10">
        <h2 className="font-display text-lg text-[#d8d4cc] mb-2">💡 What do I do here?</h2>
        <p className="font-body text-sm text-[#7a7670] mb-5 leading-relaxed">
          Don't know where to start? You can either explore this website, or…
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/lore#world-intro"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#c9a84c]/30 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 transition-all duration-[180ms]"
          >
            Read our World Introduction
          </a>
          <a
            href="/lore#issues"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#2e2b26] text-[#7a7670] rounded-sm hover:border-[#c9a84c]/30 hover:text-[#d8d4cc] transition-all duration-[180ms]"
          >
            Check out our Issues
          </a>
          <a
            href="/lore#calendar"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#2e2b26] text-[#7a7670] rounded-sm hover:border-[#c9a84c]/30 hover:text-[#d8d4cc] transition-all duration-[180ms]"
          >
            World Calendar
          </a>
        </div>
        <p className="font-body text-xs text-[#4a4844] mt-5 leading-relaxed">
          All references here that relate to our book, worldbuilding, or quotes, are coded in:{' '}
          <span className="text-[#c9a84c]">yellow</span>,{' '}
          <span className="text-[#c9985a]">pastel orange</span>, and{' '}
          <span className="text-[#888] underline">gray links</span>!
        </p>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── THE HIBRYTHIAN MANIFESTO ──────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-5 tracking-wide">
          The Hibrythian Manifesto
        </h2>
        <p className="font-body text-sm text-[#7a7670] max-w-[72ch] leading-relaxed mb-6">
          The Hibrythian Saga is not just an Adventure Fantasy series. It is a mythopoetic epic of
          spiritual warfare, lost magic, divine reckoning, and identity reborn. From skyward
          continents to ancient divine realms, this saga dares to walk the line between high fantasy
          and eternal truth. It is the beating heart and series of Alarkius Elvya Jay's works.
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 font-body text-sm">
          <div>
            <dt className="text-[#c9a84c] text-xs tracking-widest uppercase mb-0.5">Genre(s)</dt>
            <dd className="text-[#7a7670]">Adventure Fantasy | Mythic Fiction | Slice-of-Life Fantasy | Emotional Epic</dd>
          </div>
          <div>
            <dt className="text-[#c9a84c] text-xs tracking-widest uppercase mb-0.5">Tone</dt>
            <dd className="text-[#7a7670]">Mythopoetic • Heartfelt • Cinematic • Philosophical • Hopeful through darkness</dd>
          </div>
          <div>
            <dt className="text-[#c9a84c] text-xs tracking-widest uppercase mb-0.5">Main Genres</dt>
            <dd className="text-[#7a7670]">Adventure Fantasy (progressive)</dd>
          </div>
          <div>
            <dt className="text-[#c9a84c] text-xs tracking-widest uppercase mb-0.5">Mixed Genres</dt>
            <dd className="text-[#7a7670]">Slice of Life (w/ subtle romance) • Action • Superheroes • Magic • Science Fiction</dd>
          </div>
        </dl>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── UNIVERSAL PREMISE ─────────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-5 tracking-wide">
          Universal Premise
        </h2>
        <p className="font-body text-sm text-[#7a7670] max-w-[68ch] leading-relaxed mb-4">
          The Hibrythian Saga is a world that is forged through the hands of a perfectionist, a beast
          creature that is ridiculed of overwhelming power, and a girl that thinks her past is a
          burden. Even through all the shadows, Hope hasn't been lost yet. It just needs to be found.
          And at the center of this world…?{' '}
          There lies a question that is waiting to be answered:
        </p>
        <blockquote className="border-l-2 border-[#c9a84c]/40 pl-5 font-display text-base text-[#c9a84c]/80 italic">
          What makes a soul whole..? Is it destiny, divinity, or love?
        </blockquote>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── MULTIPLE TITLES & BRANDING ────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-5 tracking-wide">
          Multiple Titles and Branding Names
        </h2>
        <p className="font-body text-sm text-[#7a7670] max-w-[68ch] leading-relaxed mb-5">
          The Hibrythian Saga goes under a lot of names. It's not just called The Hibryds Cinematic
          Universe! This universe contains a lot of different stories aside from our main series —
          it's because the world is expansive and constantly growing!
        </p>
        <ul className="font-body text-sm text-[#7a7670] space-y-2 list-disc list-inside mb-5">
          <li>The Hibrythian Saga is a "Book-First Cinematic Universe" (not just the worldbuilding)</li>
        </ul>
        <p className="font-body text-sm text-[#7a7670] max-w-[68ch] leading-relaxed mb-3">
          Our Official Umbrella Brand is called:{' '}
          <span className="text-[#c9a84c] font-bold">HAXL</span>.
        </p>
        <p className="font-body text-sm text-[#7a7670] max-w-[68ch] leading-relaxed">
          <span className="text-[#c9a84c] font-bold">HAXL </span>
          is short for <em>Hibryds ArcLog Xinematic Library</em>
        </p>
        <ul className="font-body text-sm text-[#7a7670] space-y-2 list-disc list-inside mt-3">
          <li>It can also be called Hibryds.AXL</li>
          <li>"The Hibrythian Saga" is also our watermark &amp; brand name for all our content!</li>
          <li>The Hibryoverse is our in-universe multiverse name!</li>
        </ul>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── THE PILLARS ───────────────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-8 tracking-wide">
          The Pillars of the Hibrythian Saga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2e2b26]">
          {[
            {
              title: 'Divine Mythology',
              body: 'Every legend began with Zohl, who is a Spirit of Creation. His doubts about evil creatures birthed the world of Hetra (the planet he made).',
            },
            {
              title: 'Hybrid Legacy',
              body: 'Hibryds are not merely characters. They are symbols. Of spiritual transformation. Of identity found through trial. Of evolution born from pain and blessing.',
            },
            {
              title: 'Worldbuilding',
              body: 'Simple and intricate, yet effective. Takes popular tropes and humanizes them. Some elements are inspired by pop culture! Better than Marvel and DC (hehe).',
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-[#0e0d0b] p-7 flex flex-col gap-3">
              <span className="font-display text-xs tracking-[0.2em] text-[#c9a84c] uppercase">{title}</span>
              <p className="font-body text-sm text-[#7a7670] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── THEMES THAT MATTER ────────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-6 tracking-wide">
          Themes That Matter
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 font-body text-sm text-[#7a7670]">
          {[
            'Creation vs Consequence',
            'Identity, Purpose, and Self-Worth',
            'Cosmic Conflict & Internal Battles',
            'Friendship, Family, and Emotional Bonds',
            'Myth, Memory, and Legacy',
          ].map((theme) => (
            <li key={theme} className="flex items-center gap-2 before:content-['—'] before:text-[#c9a84c]/50 before:text-xs">
              {theme}
            </li>
          ))}
        </ul>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── WORKS IN THE SAGA ─────────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-6 tracking-wide">
          Works in The Hibrythian Saga
        </h2>
        <div className="border border-[#2e2b26] rounded-sm p-6 bg-[#0e0d0b] max-w-[520px]">
          <p className="font-display text-base text-[#d8d4cc] mb-1">Hibryds — A Grand Voyage</p>
          <p className="font-body text-xs text-[#c9a84c] tracking-widest uppercase">
            Already out and published to Barnes &amp; Nobles!
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── NARRATIVE GENRES ──────────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-8 tracking-wide">
          Narrative Genres
        </h2>
        <div className="space-y-8">
          {[
            {
              genre: 'Adventure (Progressive)',
              body: `Epic journeys across galaxies, realms, and planes of consciousness where characters grow through obstacles. From battling cosmic threats to exploring breathtaking locales across Hetra and beyond, every adventure molds the heart. Progressive in nature — characters evolve, powers awaken, and the world expands with each arc.`,
            },
            {
              genre: 'Slice of Life (with Subtle Romance)',
              body: `Between the battles and divine reckonings, life breathes. Quiet moments of friendship at the Skypeak Obelisk, shared laughter, healing conversations, and bonds that form unexpectedly. Romance is woven gently — never forced, always heartfelt. Think Raeya's compassion meeting Kydel's courage, or Zohl learning that perfection isn't the goal — connection is.`,
            },
            {
              genre: 'Action & Superhero Fantasy',
              body: `Fast-paced, brutal, cinematic battles with gruesome intensity. Explosive, high-stakes combat where overwhelming power meets intense emotion. Characters push their limits in brutal, cinematic clashes that test body, mind, and spirit. Hibryds aren't just fighters — they're symbols of transformation, forged through struggle and reborn through strength. Anime-inspired intensity meets mythic drama.`,
            },
            {
              genre: 'Mythic Fiction & Epic Fantasy (Mixed Fantasy)',
              body: `This saga walks the line between high fantasy and eternal truth. Spirits of Creation like Zohl shape worlds. Ancient giants from Greungeria left legacies. The 17 Dimensions of Reality hum with divine beings. It's mythopoetic — philosophical, cinematic, and aching with hope. Every legend asks: What makes a soul whole? Destiny, divinity, or love?`,
            },
          ].map(({ genre, body }) => (
            <div key={genre} className="border-l-2 border-[#2e2b26] hover:border-[#c9a84c]/40 pl-6 transition-colors duration-[180ms]">
              <h3 className="font-display text-sm tracking-wide text-[#c9a84c] mb-2">{genre}</h3>
              <p className="font-body text-sm text-[#7a7670] leading-relaxed max-w-[68ch]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── WORLDBUILDING GENRES ──────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-8 tracking-wide">
          Worldbuilding Genres
        </h2>
        <div className="space-y-8">
          {[
            {
              genre: 'Science Fiction & Fantasy',
              body: `From Advanced Technology and Science, comes engineered entities like Androids and Cyborgs! Artificial Intelligence, Space-like mechanics, and the concept of the Multiverse!`,
            },
            {
              genre: 'Urban Fantasy',
              body: `Hetra in 2245+ is a futuristic urban world where walled city-states protect against monstrous beasts and demons. Modern civilization thrives alongside ancient magic, with skyscrapers like the Skypeak Obelisk towering over streets where Hibryds, supernatural beings, and humans coexist in a world that blends cutting-edge innovation with mystical forces.`,
            },
            {
              genre: 'Supernatural Forces',
              body: `From Spirits of Creation like Zohl to demons, werewolves, direwolves, and cosmic entities like Eienel the Ifrit, supernatural forces shape every corner of existence. Magic flows from Queen Laeyana herself — General, Combat, Elemental, Infernal, and Lost Magic like Witchcraft and Amberian Magic. Divine beings from the 17 Dimensions of Reality, ancient giants, Sylphs with Healing and Tranquil magic, and creatures born from biblical-inspired lore all weave through this mythopoetic world.`,
            },
            {
              genre: 'Alternate History / Alternate Earth',
              body: `This is not the Earth you know and love. In this world, there are different continents with unique shapes and sizes, set on a Super Planet called Hetra in the year 2245 and beyond.`,
            },
          ].map(({ genre, body }) => (
            <div key={genre} className="border-l-2 border-[#2e2b26] hover:border-[#c9a84c]/40 pl-6 transition-colors duration-[180ms]">
              <h3 className="font-display text-sm tracking-wide text-[#c9a84c] mb-2">{genre}</h3>
              <p className="font-body text-sm text-[#7a7670] leading-relaxed max-w-[68ch]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── EXPANDING NOTICE ──────────────────────────────────────────────── */}
      <section className="py-10 bg-[#141210] border border-[#2e2b26] rounded-sm px-6 my-4">
        <p className="font-body text-xs text-[#7a7670] leading-relaxed">
          💡 Content on this website is constantly expanding, along with edits and updates. To keep
          in touch, please bookmark this site if you love content like this! This website is
          constantly expanding with new lore and such, so it is recommended you refresh the page once
          in a while!
        </p>
      </section>

      {/* ── SOCIALS ───────────────────────────────────────────────────────── */}
      <section className="py-14">
        <h2 className="font-display text-xl text-[#d8d4cc] mb-4 tracking-wide">
          Socials and @s
        </h2>
        <p className="font-body text-sm text-[#7a7670] max-w-[64ch] leading-relaxed mb-5">
          We have a YouTube Channel, as this worldbuilding project has music to it! We post
          soundtracks based on plot, themes, arcs and more! And we also do art-timelapses, for
          official in-book descriptions and designs!
        </p>
        <p className="font-body text-sm text-[#7a7670] max-w-[64ch] leading-relaxed mb-6">
          You can also stay up to date with our series by joining our discord server, where we post
          Behind-The-Scenes, Work In Progresses, and more! We also have a Google Profile!
        </p>

        {/* YouTube Playlist embed */}
        <p className="font-body text-xs text-[#4a4844] tracking-widest uppercase mb-3">
          We have music made for our world! Check it out here!
        </p>
        <div className="aspect-video max-w-[640px] rounded-sm overflow-hidden border border-[#2e2b26]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/videoseries?list=PLlEQ6f2A00UhlqPa7ZjoSBtDsG8aoYsDH"
            title="The Hibrythian Saga — YouTube Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent mb-16" aria-hidden="true" />

    </div>
  );
}
