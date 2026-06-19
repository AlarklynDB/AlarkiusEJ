import { Link } from "react-router-dom";

const VOLUMES = [
  { to: "/bookshelf/season3/vol1", label: "Volume 1: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol2", label: "Volume 2: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol3", label: "Volume 3: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol4", label: "Volume 4: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol5", label: "Volume 5: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol6", label: "Volume 6: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol7", label: "Volume 7: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol8", label: "Volume 8: TBD", tag: "Season 3" },
  { to: "/bookshelf/season3/vol9", label: "Volume 9: TBD", tag: "Season 3" },
];

export default function Season3TBD() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/bookshelf"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Bookshelf
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          The Hibrythian Saga
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          Season III: TBD
        </h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed max-w-[640px]">
          27 books across 9 volumes. Content: To Be Determined. Explore the Website for great lore and worldbuilding!
        </p>
      </div>

      {/* Volume Grid */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Volumes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VOLUMES.map(({ to, label, tag }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-center min-h-[72px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
            >
              <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">{tag}</p>
              <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/bookshelf"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Bookshelf</p>
          </div>
        </Link>
        <div />
      </div>

    </div>
  );
}
