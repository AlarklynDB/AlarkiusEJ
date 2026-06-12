import { Link } from 'react-router-dom';

const CHAPTERS = [
  { to: '/bookshelf/vol0/ep0',  label: 'EP 0 — The Hibrythian Genesis o/ Everything' },
  { to: '/bookshelf/vol0/ep1',  label: 'EP I — The Continuity of Gaia-666' },
  { to: '/bookshelf/vol0/ep2',  label: 'EP II — The Consequence of Gaia-666' },
  { to: '/bookshelf/vol0/ep3',  label: 'EP III — The Rise of a Meta Continuity' },
  { to: '/bookshelf/vol0/ep4',  label: 'EP IV — The Start of The Hibrythian Saga' },
  { to: '/bookshelf/vol0/ep5',  label: 'EP V — The Aexterium' },
  { to: '/bookshelf/vol0/ep6',  label: 'EP VI — The Mysterious Narrative' },
];

export default function Vol0HTHGOE() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link
        to="/bookshelf"
        className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block"
      >
        ← Back to Bookshelf
      </Link>

      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Vol 0 · The Genesis of All</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-2 leading-tight">
        Hibryds — The Hibrythian Genesis of Everything
      </h1>
      <p className="font-body text-xs text-[#4a4844] tracking-widest uppercase mb-10">
        Also known as HTHGOE · Book 0
      </p>

      {/* Premise */}
      <section className="mb-16 space-y-5 max-w-[680px]">
        <h2 className="font-display text-base text-[#f2ebeb] mb-4">
          The Hibrythian Saga Presents a Story Where.....
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          Before galaxies, gods, or genres—there was White Matter. A formless consciousness. A ripple in the void. And from it, a world: <span className="text-[#c9a84c]">Gaia-666</span>—the prime simulation, the crucible where time, will, and sorrow intertwine.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          This isn't just a prologue or prequel.
        </p>
        <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
          This is the multiversal origin scroll of The Hibrythian Saga.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          Spanning divine absurdity, mythopoetic rhythms, and a confrontation between narrative and narrator, this book introduces the central cosmology of a story where fate is real, and where fiction feels alive. Read with us as the birth of continuities form, the creation of the <span className="text-[#c9a84c] italic">Aexterium</span>, and the downfall of Genesis itself. Watch as gods mourn their own blueprints, and stories become sentient enough to question their place in the archive.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          Through layered myth, theological whispers, and sci-fi flourishes, <span className="text-[#f2ebeb]">Alarkius Elvya Jay</span> pens the tale of a world that doesn't just begin—but <span className="text-[#c9a84c] italic">remembers</span> beginning.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          Whether you're a new initiate or a devoted Hibrythian, this is where your journey starts: <span className="text-[#c9a84c] italic">at the origin of all origins.</span>
        </p>
        <p className="font-body text-sm text-[#f2ebeb] leading-[1.85] font-medium">
          This is Hibryds — The Hibrythian Genesis Of Everything
        </p>
      </section>

      {/* Buy link */}
      <div className="mb-16 flex gap-4 flex-wrap">
        <a
          href="https://www.barnesandnoble.com/w/hibryds-the-hibrythian-genesis-of-everything-alarkius-elvya-jay/1149652816?ean=9798994097687"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-[10px] tracking-widest uppercase px-5 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/70 transition-all duration-[180ms]"
        >
          Get it on Barnes & Noble ↗
        </a>
      </div>

      {/* Table of Contents */}
      <section>
        <h2 className="font-display text-base text-[#f2ebeb] mb-1">Table of Contents</h2>
        <p className="font-body text-xs text-[#4a4844] mb-6 leading-relaxed">
          7 episodes. Content coming soon — chapters will be added here as they go live.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHAPTERS.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-center min-h-[64px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
            >
              <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">
                Episode {i}
              </p>
              <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
