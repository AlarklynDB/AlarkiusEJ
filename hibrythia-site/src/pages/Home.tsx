export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-20 flex flex-col items-start gap-6">
        <div className="gold-rule" aria-hidden="true" />
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase">
          An Adventure Fantasy Series
        </p>
        <h1 className="font-display text-[clamp(2.5rem,1rem+4vw,5rem)] text-[#d8d4cc] leading-[1.05]">
          The Hibrythian Saga
        </h1>
        <p className="font-body text-base text-[#7a7670] max-w-[52ch]">
          A world of ancient magic, forgotten empires, and living myth.
          Enter the lore of Hibrythia — where every shadow has a name.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="/lore"
            className="font-body text-sm tracking-widest uppercase px-5 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/70 transition-all duration-[180ms]"
          >
            Explore Lore
          </a>
          <a
            href="/world"
            className="font-body text-sm tracking-widest uppercase px-5 py-2.5 text-[#7a7670] hover:text-[#d8d4cc] transition-colors duration-[180ms]"
          >
            The World →
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* Feature cards */}
      <section className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2e2b26]" aria-label="Explore">
        {[
          {
            label: 'Legends & Myths',
            href: '/lore',
            desc: 'Legends, stories, and myths, written by people around the world!',
          },
          {
            label: 'World',
            href: '/world',
            desc: 'Kingdoms, regions, and the living geography of the known realm.',
          },
          {
            label: 'Characters',
            href: '/characters',
            desc: 'The figures who shaped — and were shaped by — the saga.',
          },
        ].map(({ label, href, desc }) => (
          <a
            key={label}
            href={href}
            className="group bg-[#0e0d0b] p-8 flex flex-col gap-4 hover:bg-[#161412] transition-colors duration-[180ms]"
          >
            <span className="font-display text-xs tracking-[0.2em] text-[#c9a84c] uppercase">{label}</span>
            <p className="font-body text-sm text-[#7a7670] group-hover:text-[#d8d4cc] transition-colors duration-[180ms] max-w-[36ch]">
              {desc}
            </p>
            <span className="font-body text-xs text-[#4a4844] group-hover:text-[#c9a84c] transition-colors duration-[180ms] tracking-widest uppercase mt-auto">
              Explore →
            </span>
          </a>
        ))}
      </section>
    </div>
  );
}
