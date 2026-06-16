import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: 'Main Protagonists (Rotating)',
    description: 'The core cast at the heart of the Hibrythian Saga — their journeys intertwine across the series.',
    characters: [
      { to: '/characters/ZohlCelestreule',   label: 'Zohl Celestreule' },
      { to: '/characters/KydelRhunes',        label: 'Kydel Rhunes' },
      { to: '/characters/RaeyaFlutters',      label: 'Raeya Flutters' },
    ],
  },
  {
    title: 'Antagonists',
    description: 'The forces that stand against our protagonists — each with their own motives and power.',
    characters: [
      { to: '/characters/EienelTheCosmicIfrit',  label: 'Eienel, The Cosmic Ifrit' },
      { to: '/characters/QueenRachnaea',          label: 'Queen Rachnaea' },
      { to: '/characters/EphelTheMoonbel',        label: 'Ephel The Moonbel' },
      { to: '/characters/HunterNoxxIncogniax',    label: 'Hunter Noxx / Incogniax' },
    ],
  },
  {
    title: 'From The Divine Realm',
    description: 'Beings of the Divine Realm — rulers, guardians, and ancient spirits of immense power.',
    characters: [
      { to: '/characters/KingNhavah',      label: 'King Nhavah' },
      { to: '/characters/QueenLaeyana',    label: 'Queen Laeyana' },
      { to: '/characters/AloriaCloudwave', label: 'Aloria Cloudwave' },
      { to: '/characters/NahfiaAlphraey',  label: 'Nahfia Alphraey' },
    ],
  },
  {
    title: 'Ancient Spirits of Creation',
    description: 'The primordial spirits who shaped the foundations of the Hibrythian world.',
    characters: [
      { to: '/characters/AeoniaTheSpiritOfTime',  label: 'Aeonia, The Spirit of Time' },
      { to: '/characters/MorhvTheSpiritOfDeath',  label: 'Morhv, The Spirit of Death' },
      { to: '/characters/RunerusTheEarlywulf',     label: 'Runerus, The Earlywulf Spirit' },
      { to: '/characters/AuroraRimaeaOfLife',      label: 'Aurora Rimaea, Spirit of Life' },
    ],
  },
  {
    title: 'Support Characters',
    description: 'Allies, companions, and figures who shape the world around our main cast.',
    characters: [
      { to: '/characters/TheSpiritWardens',   label: 'The Spirit Wardens' },
      { to: '/characters/LeonTheEulerianOwl', label: 'Leon, Eulerian Owl' },
      { to: '/characters/AviaRemyls',         label: 'Avia Remyls' },
      { to: '/characters/SkullZakar',         label: 'Skull Zakar' },
    ],
  },
];

export default function CharacterProfiles() {
  const sections = useMemo(
    () =>
      SECTIONS.map((section) => {
        if (section.title !== 'Main Protagonists (Rotating)') return section;
        const characters = [...section.characters];
        // Fisher-Yates shuffle
        for (let i = characters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        return { ...section, characters };
      }),
    [],
  );

  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Figures</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        Characters
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-14 max-w-[600px] leading-relaxed">
        The figures who shaped — and were shaped by — the Hibrythian Saga. From protagonists to ancient spirits, each character carries a story worth knowing.
      </p>

      <div className="space-y-14">
        {sections.map(({ title, description, characters }) => (
          <section key={title}>
            <h2 className="font-display text-base text-[#f2ebeb] mb-1">{title}</h2>
            <p className="font-body text-xs text-[#4a4844] mb-5 leading-relaxed">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {characters.map(({ to, label, tag }: { to: string; label: string; tag?: string }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex flex-col justify-center min-h-[64px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
                >
                  {tag && (
                    <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">{tag}</p>
                  )}
                  <p className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                    {label}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
