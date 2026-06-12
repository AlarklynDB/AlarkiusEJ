import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    category: 'Continents',
    label: 'CONTINENTS OF PLANET HETRA',
    description: 'The great landmasses that shape the world of Hetra — each with its own civilizations, climates, and histories.',
    items: [
      {
        title: 'Alarctic Alpines',
        desc: 'The north pole continent stretching across Hetra\'s northern hemisphere. Home to Pangolarin Bears, Seapertant Dragons, and the legendary Ice Palace of Queen Eira.',
        path: '/world/locales/alarctic-alpines',
        icon: '🗺️',
      },
      {
        title: 'Eulerich',
        desc: 'A supercontinent east of the known world, home to the Eulerians — a highly intelligent race versed in ancient technology and forgotten magic.',
        path: '/world/locales/eulerich',
        icon: '🗺️',
      },
      {
        title: 'Hetrania',
        desc: 'The Sky Continent floating high above Hetra, home to ancient civilizations and the source of many of the world\'s oldest mysteries.',
        path: '/world/locales/hetrania',
        icon: '🗺️',
      },
      {
        title: 'Lynneria',
        desc: 'A lush continent defined by its diverse kingdoms, vibrant cultures, and breathtaking natural wonders.',
        path: '/world/locales/lynneria',
        icon: '🗺️',
      },
      {
        title: 'Norrane',
        desc: 'A northern landmass of harsh climates and resilient peoples, shaped by centuries of struggle and survival.',
        path: '/world/locales/norrane',
        icon: '🗺️',
      },
      {
        title: 'Rynel',
        desc: 'A continent of contrasts — its landscapes range from dense rainforests to open plains, harboring some of Hetra\'s most unique wildlife.',
        path: '/world/locales/rynel',
        icon: '🗺️',
      },
      {
        title: 'Varleqe',
        desc: 'A vast supercontinent whose origins remain shrouded in mystery, with ancient ruins that hint at a civilization far older than recorded history.',
        path: '/world/locales/varleqe',
        icon: '🗺️',
      },
    ],
  },
  {
    category: 'Attractions',
    label: 'ATTRACTIONS & TOURISM',
    description: 'Notable landmarks and points of interest drawing travelers from across the known world.',
    items: [
      {
        title: 'The Skypeak Obelisk',
        desc: 'A towering monument rising at the highest elevation on Hetra, visible from continents away on a clear day.',
        path: '/world/locales/skypeak-obelisk',
        icon: '🏛️',
      },
      {
        title: 'HetraS.E.A.P — Space Program',
        desc: 'Hetra\'s pioneering space exploration program, pushing the boundaries of what civilizations on this world can achieve.',
        path: '/world/locales/hetra-seap',
        icon: '🚀',
      },
    ],
  },
  {
    category: 'Wonders',
    label: 'SEVEN WONDERS OF THE WORLD',
    description: 'Worldwide wonders of Planet Hetra — natural and constructed marvels recognized across all continents.',
    items: [
      {
        title: 'The Erbgeroger Flower',
        desc: 'A legendary bloom said to grow only once every century, its petals possessing properties beyond natural understanding.',
        path: '/world/locales/erbgeroger-flower',
        icon: '🌸',
      },
      {
        title: 'The Eulerian Catalogs',
        desc: 'An ancient repository of Eulerian knowledge — vast libraries carved into the rock of Eulerich holding texts of forgotten eras.',
        path: '/world/locales/eulerian-catalogs',
        icon: '📜',
      },
      {
        title: 'The Tree of Elenia',
        desc: 'A colossal sacred tree whose roots are said to reach every corner of the world, revered across religions and cultures alike.',
        path: '/world/locales/tree-of-elenia',
        icon: '🌳',
      },
      {
        title: 'The Oakgnar Grand Tree',
        desc: 'An ancient giant standing at the heart of the continent, its canopy wide enough to shelter an entire village.',
        path: '/world/locales/oakgnar-grand-tree',
        icon: '🌲',
      },
      {
        title: 'The Varleqian Waterfall',
        desc: 'The mightiest waterfall on Hetra, cascading from the cliffs of Varleqe in a roar that can be heard for miles.',
        path: '/world/locales/varleqian-waterfall',
        icon: '💧',
      },
      {
        title: 'The Lost City of Lhavaria',
        desc: 'A submerged city whose ruins hold secrets to a civilization that vanished long before recorded history began.',
        path: '/world/locales/lost-city-lhavaria',
        icon: '🏚️',
      },
      {
        title: 'The Alarctic Ice Palace',
        desc: 'Built by the ancient Queen Eira and later claimed by the ice giant Ischvnielle, this crystalline palace stands as both monument and warning.',
        path: '/world/locales/alarctic-ice-palace',
        icon: '🧊',
      },
    ],
  },
  {
    category: 'Churches',
    label: 'THE CHURCHES OF THE WORLD',
    description: "Planet Hetra's main churches — seats of faith, culture, and spiritual power scattered across every continent.",
    items: [
      {
        title: 'The Hynnian Church',
        desc: 'The oldest and most widespread faith on Hetra, with congregations reaching every major continent.',
        path: '/world/locales/hynnian-church',
        icon: '⛪',
      },
      {
        title: 'The Iyonian Churches',
        desc: 'A network of sister churches bound by shared doctrine but divided by regional interpretations of ancient scripture.',
        path: '/world/locales/iyonian-churches',
        icon: '⛪',
      },
      {
        title: 'The Bhuseian Ice Church',
        desc: 'A remote church carved into the glaciers of the north, practiced by those who revere the cold as sacred.',
        path: '/world/locales/bhuseian-ice-church',
        icon: '❄️',
      },
      {
        title: 'The Runthian Church',
        desc: 'A militant order of faith, known for their discipline, armor-clad clergy, and long history of holy wars.',
        path: '/world/locales/runthian-church',
        icon: '⚔️',
      },
      {
        title: 'The Yhursian Demon Church',
        desc: 'A feared and misunderstood sect that venerates what others call demons — their true motives remain debated.',
        path: '/world/locales/yhursian-demon-church',
        icon: '🔥',
      },
      {
        title: 'The Draxian Sky Church',
        desc: 'Worshippers of the sky and celestial bodies, this church holds its services at Hetrania\'s highest elevations.',
        path: '/world/locales/draxian-sky-church',
        icon: '🌌',
      },
      {
        title: 'The Sethranian Church of Unity',
        desc: 'A progressive church seeking to bridge the theological divides between Hetra\'s many competing faiths.',
        path: '/world/locales/sethranian-church',
        icon: '🕊️',
      },
    ],
  },
];

export default function LocalesAndSights() {
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
        Locations &amp; Geography
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[#f2ebeb] mb-4">
        Locales &amp; Sights
      </h1>
      <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-16 max-w-[560px]">
        Continents, sacred sites, churches, natural wonders, and iconic landmarks scattered across the world of Hetra.
      </p>

      {/* Sections */}
      <div className="space-y-16">
        {SECTIONS.map((section) => (
          <section key={section.category}>
            {/* Section header */}
            <div className="mb-6">
              <p className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/60 mb-1">
                {section.label}
              </p>
              <p className="font-body text-xs text-[#4a4844] leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group flex flex-col border border-[#2e2b26] rounded-sm bg-[#0f0d0c] hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-all duration-200 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity select-none">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors leading-snug mb-1">
                        {item.title}
                      </h3>
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

            {/* Section divider */}
            <div className="mt-10 border-t border-[#1e1c1a]" />
          </section>
        ))}
      </div>
    </div>
  );
}
