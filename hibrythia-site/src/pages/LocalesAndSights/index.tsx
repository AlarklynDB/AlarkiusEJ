import { Link } from 'react-router-dom';

const PAGES = [
      {
        to: '/world/locales/TheSkyContinentOfHetrania',
        label: 'The Sky Continent of Hetrania',
        description: 'A floating continent high above Hetra, home to ancient civilizations.',
      },
      {
        to: '/world/locales/TheContinentOfEulerich',
        label: 'The Continent of Eulerich',
        description: 'A vast continent known for its scholarly traditions and Eulerian culture.',
      },
      {
        to: '/world/locales/TheContinentOfLynneria',
        label: 'The Continent of Lynneria',
        description: 'A lush continent defined by its diverse kingdoms and natural wonders.',
      },
      {
        to: '/world/locales/TheContinentOfNorrane',
        label: 'The Continent of Norrane',
        description: 'A northern landmass of harsh climates and resilient peoples.',
      },
      {
        to: '/world/locales/TheContinentOfRynel',
        label: 'The Continent of Rynel',
        description: 'A continent rich in ancient history and contested territories.',
      },
      {
        to: '/world/locales/AlarcticAlpines',
        label: 'Alarctic Alpines',
        description: 'A frozen mountain range of extreme cold and rare wildlife.',
      },
      {
        to: '/world/locales/TheAlarcticIcePalace',
        label: 'The Alarctic Ice Palace',
        description: 'A legendary palace carved entirely from ancient ice.',
      },
      {
        to: '/world/locales/TheLostCityOfLhavaria',
        label: 'The Lost City of Lhavaria',
        description: 'A mythical sunken city, lost to the ages and sought by many.',
      },
      {
        to: '/world/locales/TheOakgnarGrandTree',
        label: 'The Oakgnar Grand Tree',
        description: 'The largest living tree on Hetra, considered sacred by many cultures.',
      },
      {
        to: '/world/locales/TheVarleqianWaterfall',
        label: 'The Varleqian Waterfall',
        description: 'A colossal waterfall believed to have mystical properties.',
      },
      {
        to: '/world/locales/TheErbgerogerFlower',
        label: 'The Erbgeroger Flower',
        description: 'A rare flower that blooms once a decade and holds great spiritual meaning.',
      },
      {
        to: '/world/locales/TheEulerianCatalogs',
        label: 'The Eulerian Catalogs',
        description: 'A massive library and archive system maintained by Eulerian scholars.',
      },
      {
        to: '/world/locales/TheHynnianChurch',
        label: 'The Hynnian Church',
        description: 'The primary religious institution of the Hynnian faith.',
      },
      {
        to: '/world/locales/TheIyonianChurches',
        label: 'The Iyonian Churches',
        description: 'A collection of churches devoted to the Iyonian deities.',
      },
      {
        to: '/world/locales/TheDraxianSkyChurch',
        label: 'The Draxian Sky Church',
        description: 'A church built in the clouds, accessible only by those with flight.',
      },
      {
        to: '/world/locales/TheBhuseianIceChurch',
        label: 'The Bhuseian Ice Church',
        description: 'A church constructed from enchanted ice in the frozen north.',
      },
      {
        to: '/world/locales/TheRunthianChurch',
        label: 'The Runthian Church',
        description: 'The house of worship for followers of the Runthian faith.',
      },
      {
        to: '/world/locales/TheSethranianChurch',
        label: 'The Sethranian Church',
        description: 'A dark and imposing church tied to the Sethranian order.',
      },
      {
        to: '/world/locales/TheYhursianDemonChurch',
        label: 'The Yhursian Demon Church',
        description: 'A forbidden church worshipping demon-aligned entities.',
      },
      {
        to: '/world/locales/TheSkypeakObelisk',
        label: 'The Skypeak Obelisk',
        description: 'A towering obelisk at the world\'s highest elevation — its purpose unknown.',
      },
      {
        to: '/world/locales/HetraSEAPSpaceProgram',
        label: 'Hetra SEAP Space Program',
        description: 'Hetra\'s space exploration and astronomical program — reaching beyond the sky.',
      },
];

export default function LocalesAndSights() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link to="/world" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block">
        ← Back to World
      </Link>
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Locations & Geography</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        Locales & Sights
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-10 max-w-[600px] leading-relaxed">
        Continents, sacred sites, churches, natural wonders, and iconic landmarks scattered across the world of Hetra.
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
