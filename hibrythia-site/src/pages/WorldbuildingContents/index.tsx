import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: 'V. The Current World of Hibryds',
    description: 'The physical reality of the planet Hetra and the solar system it calls home.',
    pages: [
      {
        to: '/world/databases/TheNhumelaCluster',
        label: 'The Nhumela Cluster',
        description: 'A star cluster and its worlds, including the home solar system of Planet Hetra.',
      },
      {
        to: '/world/databases/OurPlanetHetra',
        label: 'Our Planet Hetra (Midtheltra)',
        description: 'The geography, atmosphere, and physical makeup of the planet Hetra.',
      },
    ],
  },
  {
    title: 'IV. The Equation of Life',
    description: 'The living world — its creatures, peoples, and the beings that inhabit it.',
    pages: [
      {
        to: '/world/databases/CreaturesOfTheWorld',
        label: 'Creatures of the World',
        description: 'Flora, fauna, and supernatural entities that inhabit Hetra.',
      },
      {
        to: '/world/databases/TheNhuemynDB',
        label: 'The Nhuemyn Database',
        description: 'Archived records and data on the Nhuemyn — ancient beings of great power.',
      },
    ],
  },
  {
    title: 'III. The Inner Gears',
    description: 'The systems, sciences, and frameworks that keep the world of Hetra running.',
    pages: [
      {
        to: '/world/databases/HetraStandardSystems',
        label: 'Hetra's Standard Systems',
        description: 'Measurements, units, and standards used in the Hibrythian world.',
      },
      {
        to: '/world/databases/WorldCurrency',
        label: 'World Currency',
        description: 'The economic systems, currencies (including Ħ Hetrix), and trade across Hetra.',
      },
      {
        to: '/world/databases/GeoscienceOfHetra',
        label: 'Geoscience of Hetra',
        description: 'Scientific breakdown of Hetra\'s geology, tectonic systems, and natural forces.',
      },
      {
        to: '/world/databases/MagicDatabase',
        label: 'Magic Database',
        description: 'The rules, classifications, and mechanics of magic as it exists in the Hibrythian world.',
      },
      {
        to: '/world/databases/HibrythianReligions',
        label: 'Hibrythian Religions',
        description: 'The major religions, belief systems, and divine figures worshipped on Hetra.',
      },
      {
        to: '/world/databases/TerminologyLexicon',
        label: 'Terminology Lexicon',
        description: 'A comprehensive glossary of Hibrythian terms, titles, and unique language.',
      },
      {
        to: '/world/databases/ThePowerscalingSystem',
        label: 'The PowerScale System',
        description: 'How power levels are measured, classified, and compared across the world.',
      },
      {
        to: '/world/databases/WeatherClimateSeasons',
        label: 'Weather, Climate & Seasons',
        description: 'Climate zones, seasonal cycles, and weather phenomena across Hetra.',
      },
      {
        to: '/world/databases/TechnologyTransitSystems',
        label: 'Technology & Transit Systems',
        description: 'Technological advancements, transportation, and infrastructure of Hetra.',
      },
      {
        to: '/world/databases/CalendarAndTime',
        label: 'Calendar & Time — The 32-Hour System',
        description: 'The Hetranian calendar: 32-hour days, 14 months, 444 days per year.',
      },
    ],
  },
  {
    title: 'II. Ancient History',
    description: 'Civilizations and events that shaped the world long before the current age.',
    pages: [
      {
        to: '/world/databases/AncientGreungeria',
        label: 'Ancient Greungeria',
        description: 'A lost civilization — their language, culture, and remnants in the modern world.',
      },
    ],
  },
  {
    title: 'I. The Cosmic Foundation',
    description: 'The metaphysical bedrock of reality — dimensions, time, and the laws governing existence.',
    pages: [
      {
        to: '/world/databases/The17DimensionsOfReality',
        label: 'The 17 Dimensions of Reality',
        description: 'A breakdown of all 17 dimensions that compose existence in this universe.',
      },
      {
        to: '/world/databases/TemporalTimeStreamDilation',
        label: 'Temporal Time-Stream Dilation | TTSD',
        description: 'Time dilation mechanics and their effects on characters and events.',
      },
      {
        to: '/world/databases/TheNaturalLawOfSpaceTime',
        label: 'The Natural Law of Space-Time',
        description: 'How space, time, and causality function within the Hibrythian universe.',
      },
    ],
  },
];

export default function DatabasesAndSystems() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link to="/world" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block">
        ← Back to World
      </Link>
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Worldbuilding Contents</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        Databases & Systems
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-14 max-w-[600px] leading-relaxed">
        In here, there are a lot of systems and information based on how the world works, including info based on our planet, the multiverse, time, and many more!
      </p>

      <div className="space-y-14">
        {SECTIONS.map(({ title, description, pages }) => (
          <section key={title}>
            <h2 className="font-display text-base text-[#f2ebeb] mb-1">{title}</h2>
            <p className="font-body text-xs text-[#4a4844] mb-5 leading-relaxed">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map(({ to, label, description: desc }) => (
                <Link
                  key={to}
                  to={to}
                  className="group block border border-[#2e2b26] rounded-sm p-5 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
                >
                  <h3 className="font-display text-sm text-[#f2ebeb] mb-2 group-hover:text-[#c9a84c] transition-colors duration-200">
                    {label}
                  </h3>
                  <p className="font-body text-xs text-[#7a7670] leading-relaxed mb-3">{desc}</p>
                  <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-200">
                    Read →
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
