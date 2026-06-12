import { Link } from 'react-router-dom';

const PAGES = [
      {
        to: '/world/databases/OurPlanetHetra',
        label: 'Our Planet Hetra',
        description: 'The geography, atmosphere, and physical makeup of the planet Hetra.',
      },
      {
        to: '/world/databases/GeoscienceOfHetra',
        label: 'Geoscience of Hetra',
        description: 'Scientific breakdown of Hetra\'s geology, tectonic systems, and natural forces.',
      },
      {
        to: '/world/databases/WeatherClimateSeasons',
        label: 'Weather, Climate & Seasons',
        description: 'Climate zones, seasonal cycles, and weather phenomena across Hetra.',
      },
      {
        to: '/world/databases/TheMultiverseOfMultitudes',
        label: 'The Multiverse of Multitudes',
        description: 'The layered multiverse structure and how the planes of existence interact.',
      },
      {
        to: '/world/databases/The17DimensionsOfReality',
        label: 'The 17 Dimensions of Reality',
        description: 'A breakdown of all 17 dimensions that compose existence in this universe.',
      },
      {
        to: '/world/databases/TheNaturalLawOfSpaceTime',
        label: 'The Natural Law of Space-Time',
        description: 'How space, time, and causality function within the Hibrythian universe.',
      },
      {
        to: '/world/databases/TemporalTimeStreamDilation',
        label: 'Temporal Time-Stream Dilation',
        description: 'Time dilation mechanics and their effects on characters and events.',
      },
      {
        to: '/world/databases/ThePowerscalingSystem',
        label: 'The Powerscaling System',
        description: 'How power levels are measured, classified, and compared across the world.',
      },
      {
        to: '/world/databases/HibrythianReligions',
        label: 'Hibrythian Religions',
        description: 'The major religions, belief systems, and divine figures worshipped on Hetra.',
      },
      {
        to: '/world/databases/AncientGreungeria',
        label: 'Ancient Greungeria',
        description: 'A lost civilization — their language, culture, and remnants in the modern world.',
      },
      {
        to: '/world/databases/CreaturesOfTheWorld',
        label: 'Creatures of the World',
        description: 'Flora, fauna, and supernatural entities that inhabit Hetra.',
      },
      {
        to: '/world/databases/TechnologyTransitSystems',
        label: 'Technology & Transit Systems',
        description: 'Technological advancements, transportation, and infrastructure of Hetra.',
      },
      {
        to: '/world/databases/WorldCurrency',
        label: 'World Currency',
        description: 'The economic systems, currencies (including Ħ Hetrix), and trade across Hetra.',
      },
      {
        to: '/world/databases/WorldMetrics',
        label: 'World Metrics',
        description: 'Measurements, units, and standards used in the Hibrythian world.',
      },
      {
        to: '/world/databases/TerminologyLexicon',
        label: 'Terminology Lexicon',
        description: 'A comprehensive glossary of Hibrythian terms, titles, and unique language.',
      },
      {
        to: '/world/databases/TheNhuemynDB',
        label: 'The Nhuemyn Database',
        description: 'Archived records and data on the Nhuemyn — ancient beings of great power.',
      },
      {
        to: '/world/databases/TheNhumelaCluster',
        label: 'The Nhumela Cluster',
        description: 'A star cluster and its worlds, including Planet Schavel and its calendar.',
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
      <p className="font-body text-sm text-[#7a7670] mb-10 max-w-[600px] leading-relaxed">
        Systems, sciences, and mechanics that define how the world of Hetra operates — from its physical laws to its cultural frameworks.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PAGES.map(({ to, label, description }) => (
          <Link
            key={to}
            to={to}
            className="group block border border-[#2e2b26] rounded-sm p-5 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
          >
            <h2 className="font-display text-sm text-[#f2ebeb] mb-2 group-hover:text-[#c9a84c] transition-colors duration-200">
              {label}
            </h2>
            <p className="font-body text-xs text-[#7a7670] leading-relaxed mb-3">{description}</p>
            <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-200">
              Read →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
