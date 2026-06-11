export default function Episode0HTHGOE() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Vol. 0 · Episode 0</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#d8d4cc] mb-8">
        HTHGOE
      </h1>
      <p className="font-body text-base text-[#7a7670] leading-relaxed mb-16">
        We're slowly migrating our content here! Check back soon.
      </p>

      {/* ── Chapter Navigation ── */}
      <div className="flex items-center justify-between gap-4 border-t border-[#2e2b26] pt-8 mt-8">
        <div><span /></div>
        <a href="/bookshelf/vol0" className="font-body text-xs tracking-widest uppercase text-[#4a4844] hover:text-[#7a7670] transition-colors duration-[180ms]">
          ↑ Vol. 0 Contents
        </a>
        <div><a href="/bookshelf/vol0/episode-1" className="flex items-center gap-2 font-body text-xs tracking-widest uppercase px-4 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/70 transition-all duration-[180ms]">Episode 1 →</a></div>
      </div>
    </div>
  );
}
