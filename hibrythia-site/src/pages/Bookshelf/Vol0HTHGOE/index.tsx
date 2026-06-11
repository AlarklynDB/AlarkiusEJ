export default function Vol0HTHGOE() {
  const episodes = [
    { slug: '/bookshelf/vol0/episode-0',  label: 'Episode 0',  title: 'HTHGOE' },
    { slug: '/bookshelf/vol0/episode-1',  label: 'Episode 1',  title: 'Continuity of Gaia 666' },
    { slug: '/bookshelf/vol0/episode-2',  label: 'Episode 2',  title: 'Consequence of Gaia 666' },
    { slug: '/bookshelf/vol0/episode-3',  label: 'Episode 3',  title: 'Rise of a Meta Continuity' },
    { slug: '/bookshelf/vol0/episode-4',  label: 'Episode 4',  title: 'The Start of the Hibrythian Saga' },
    { slug: '/bookshelf/vol0/episode-5',  label: 'Episode 5',  title: 'The Aexterium' },
    { slug: '/bookshelf/vol0/episode-6',  label: 'Episode 6',  title: 'The Mysterious Narrative' },
  ];

  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Free to Read</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#d8d4cc] mb-4">
        Vol. 0 — HTHGOE
      </h1>
      <p className="font-body text-sm text-[#7a7670] max-w-[64ch] leading-relaxed mb-10">
        The full Vol. 0 prologue arc is available to read for free. Select an episode below to begin.
      </p>
      <div className="flex flex-col gap-3">
        {episodes.map(({ slug, label, title }) => (
          <a
            key={slug}
            href={slug}
            className="flex items-center justify-between border border-[#2e2b26] bg-[#0e0d0b] rounded-sm px-5 py-4 hover:border-[#c9a84c]/40 hover:bg-[#141210] transition-all duration-[180ms] group"
          >
            <div className="flex flex-col gap-1">
              <span className="font-body text-xs tracking-widest uppercase text-[#c9a84c]">{label}</span>
              <span className="font-display text-sm text-[#d8d4cc]">{title}</span>
            </div>
            <span className="text-[#7a7670] group-hover:text-[#c9a84c] transition-colors duration-[180ms]">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}