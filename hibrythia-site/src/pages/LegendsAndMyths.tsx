import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    label: 'Legends of The Past',
    description: 'Legends, stories, and myths written by people around the world — documented in libraries under different iterations.',
    items: [
      {
        title: 'The Midwinter Festival',
        subtitle: '"Queen Eira\'s Festival"',
        desc: 'On the 55th day of Mulumber, people across Hetra honor the ancient ice queen who vanished on a midwinter\'s eve — crafting Frostbloom crystals, sharing food, and lighting blue bonfires to guide her spirit home.',
        path: '/lore/midwinter-festival',
        icon: '❄️',
      },
      {
        title: 'The Lore of Hexphos Island',
        subtitle: 'A Dangerous & Moving Island',
        desc: 'A surface-floating island near the south ice caps, drifting freely on Hetra\'s ocean currents. Said to be the origin of all life — only one immortal Hibryd has ever set foot there, and he returned forever changed.',
        path: '/lore/hexphos-island',
        icon: '🗒️',
      },
    ],
  },
];

export default function LegendsAndMyths() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[860px] mx-auto">
      {/* Back nav */}
      <Link
        to="/world"
        className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors mb-10"
      >
        ← Back to World
      </Link>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
        Chronicles, Stories, &amp; Fabled Myths
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[#f2ebeb] mb-4">
        Legends &amp; Myths
      </h1>
      <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-16 max-w-[560px]">
        Myths, histories, and ancient chronicles of the Hibrythian World — stories passed down through generations, documented in libraries across every continent.
      </p>

      {/* Sections */}
      <div className="space-y-16">
        {SECTIONS.map((section) => (
          <section key={section.label}>
            {/* Section header */}
            <div className="mb-6">
              <h2 className="font-display text-xl text-[#f2ebeb] mb-2">
                {section.label}
              </h2>
              <p className="font-body text-[11px] text-[#4a4844] leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group flex flex-col border border-[#2e2b26] rounded-sm bg-[#0f0d0c] hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-all duration-200 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity select-none">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-body text-[10px] tracking-wide text-[#c9a84c]/60 italic mb-2">
                        {item.subtitle}
                      </p>
                      <p className="font-body text-xs text-[#4a4844] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/40 group-hover:text-[#c9a84c]/70 transition-colors mt-4 self-end">
                    Read →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 border-t border-[#1e1c1a]" />
          </section>
        ))}

        {/* Coming soon note */}
        <div className="text-center py-8">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">
            More entries coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
