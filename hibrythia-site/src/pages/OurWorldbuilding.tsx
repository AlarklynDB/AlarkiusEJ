import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    to: '/world/databases',
    label: 'Databases & Systems',
    description: 'The mechanics behind the world — planet Hetra, multiverse, time systems, powerscaling, currencies, and more.',
    tag: 'Worldbuilding Contents',
  },
  {
    to: '/world/locales',
    label: 'Locales & Sights',
    description: 'Explore the continents, cities, churches, obelisks, and natural wonders scattered across Hetra.',
    tag: 'Locations & Geography',
  },
  {
    to: '/lore',
    label: 'Legends & Myths',
    description: 'Ancient chronicles, myths, and lore fragments from the deep history of the Hibrythian world.',
    tag: 'Chronicles & Lore',
  },
];

export default function OurWorldbuilding() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Worldbuilding & Lore</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        The World and Lore
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-12 max-w-[600px] leading-relaxed">
        Everything that makes Hibrythia real — the planet, its people, its history, and the ancient forces that shaped it all. 
        Pick a category below to start exploring.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map(({ to, label, description, tag }) => (
          <Link
            key={to}
            to={to}
            className="group block border border-[#2e2b26] rounded-sm p-6 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
          >
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-3">{tag}</p>
            <h2 className="font-display text-base text-[#f2ebeb] mb-3 group-hover:text-[#c9a84c] transition-colors duration-200">
              {label}
            </h2>
            <p className="font-body text-xs text-[#7a7670] leading-relaxed mb-4">{description}</p>
            <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-200">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
