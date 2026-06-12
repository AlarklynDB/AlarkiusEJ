import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: 'VOL 0 — The Genesis of All',
    description: 'The beginning — the genesis of how the world formed. A standalone prequel to the main series.',
    books: [
      { to: '/bookshelf/vol0', label: 'The Hibrythian Genesis of Everything', tag: 'Vol 0' },
    ],
  },
  {
    title: 'Season 1: Journey Awaits!',
    description: '27 books across 9 volumes. The first season of The Hibrythian Saga.',
    books: [
      { to: '/bookshelf/season1/vol1', label: 'Volume 1: A Grand Voyage', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol2', label: 'Volume 2: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol3', label: 'Volume 3: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol4', label: 'Volume 4: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol5', label: 'Volume 5: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol6', label: 'Volume 6: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol7', label: 'Volume 7: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol8', label: 'Volume 8: TBD', tag: 'Season 1' },
      { to: '/bookshelf/season1/vol9', label: 'Volume 9: TBD', tag: 'Season 1' },
    ],
  },
  {
    title: 'Season II: TBD',
    description: '27 books across 9 volumes. The second season of The Hibrythian Saga.',
    books: [
      { to: '/bookshelf/season2/vol1', label: 'Volume 1: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol2', label: 'Volume 2: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol3', label: 'Volume 3: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol4', label: 'Volume 4: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol5', label: 'Volume 5: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol6', label: 'Volume 6: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol7', label: 'Volume 7: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol8', label: 'Volume 8: TBD', tag: 'Season 2' },
      { to: '/bookshelf/season2/vol9', label: 'Volume 9: TBD', tag: 'Season 2' },
    ],
  },
  {
    title: 'Season III: TBD',
    description: '27 books across 9 volumes. The third and final season of The Hibrythian Saga.',
    books: [
      { to: '/bookshelf/season3/vol1', label: 'Volume 1: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol2', label: 'Volume 2: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol3', label: 'Volume 3: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol4', label: 'Volume 4: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol5', label: 'Volume 5: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol6', label: 'Volume 6: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol7', label: 'Volume 7: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol8', label: 'Volume 8: TBD', tag: 'Season 3' },
      { to: '/bookshelf/season3/vol9', label: 'Volume 9: TBD', tag: 'Season 3' },
    ],
  },
  {
    title: 'HibryoX — Mini Stories',
    description: 'Short e-books for characters who deserve more time. 3–5 episodes each — backstory, development, and timeline catch-ups.',
    books: [
      { to: '/bookshelf/hibryox/raeyas-lost-time', label: "Raeya's Lost Time", tag: 'HibryoX' },
    ],
  },
];

export default function Bookshelf() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Published Works</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        The Bookshelf
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-3 max-w-[600px] leading-relaxed">
        A catalogue of all the books in The Hibrythian Saga. 81 books total across 3 seasons, 9 volumes each — plus standalone and mini story content.
      </p>
      <p className="font-body text-xs text-[#4a4844] mb-14 leading-relaxed">
        Total: 81 books · 3 Seasons · 9 Volumes per Season · 3 Books per Volume
      </p>

      <div className="space-y-14">
        {SECTIONS.map(({ title, description, books }) => (
          <section key={title}>
            <h2 className="font-display text-base text-[#f2ebeb] mb-1">{title}</h2>
            <p className="font-body text-xs text-[#4a4844] mb-5 leading-relaxed">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map(({ to, label, tag }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex flex-col justify-center min-h-[64px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
                >
                  {tag && (
                    <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">{tag}</p>
                  )}
                  <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
