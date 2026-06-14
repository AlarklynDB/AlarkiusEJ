import { Link } from 'react-router-dom';

// Rank color map
const rankColors: Record<string, string> = {
  E: '#a0a0a0',
  D: '#7ec8a0',
  C: '#6ab4e0',
  B: '#c49be0',
  A: '#e0a060',
  S: '#e06060',
  X: '#c9a84c',
  N: '#8888cc',
  R: '#70b8b8',
};

interface RankTierProps {
  rank: string;
  label: string;
  description: string;
  tiers: { sub: string; desc: string; muted?: boolean }[];
  note?: string;
}

function RankTier({ rank, label, description, tiers, note }: RankTierProps) {
  const color = rankColors[rank] ?? '#c8c2ba';
  return (
    <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-6 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
      {/* Rank badge + label */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className="font-display text-lg font-bold"
          style={{ color }}
        >
          RANK {rank}
        </span>
        <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">
          — {label}
        </span>
      </div>
      {/* Description */}
      <p className="font-body text-sm text-[#c8c2ba] mb-4">{description}</p>
      {/* Tier rows */}
      {tiers.length > 0 && (
        <div className="border-t border-[#2e2b26] pt-4 space-y-2">
          {tiers.map((t, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span
                className="font-display text-sm font-semibold shrink-0"
                style={{ color: t.muted ? '#4a4844' : color }}
              >
                {t.sub}
              </span>
              <span
                className={
                  t.muted
                    ? 'font-body text-sm text-[#4a4844] italic'
                    : 'font-body text-sm text-[#c8c2ba]'
                }
              >
                {t.desc}
              </span>
            </div>
          ))}
        </div>
      )}
      {note && (
        <p className="font-body text-sm text-[#7a746e] italic mt-4 border-t border-[#2e2b26] pt-3">
          {note}
        </p>
      )}
    </div>
  );
}

export default function ThePowerscalingSystem() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">
          World Databases
        </Link>
        {" / "}The PowerScale System
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
        The PowerScale System
      </h1>

      {/* Intro */}
      <p className="font-body text-sm text-[#c8c2ba] mb-8">
        In the Hibryds Cinematic Universe, there is a system called the Power Scaling System. This system measures the power each individual has, born with powers or have inherited powers from somewhere. Most individuals' power can vary, and this system places them on where their power level should be. This can also apply to characters who have abnormal strengths even as a human.
      </p>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* Section label */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
        Power Scaling System
      </p>
      <h2 className="font-display text-lg text-[#f2ebeb] mb-8" id="power-scaling-system">
        Power Scaling System
      </h2>

      {/* RANK E */}
      <RankTier
        rank="E"
        label="Human Level"
        description="The lowest is Rank E, one that only measures the users' mental limitations. This only uses human strength, like beating up a guitar, smashing your computer....etc."
        tiers={[
          { sub: "E-1", desc: "Murder / Cannibalism (or any form of murder)" },
        ]}
      />

      {/* RANK D */}
      <RankTier
        rank="D"
        label="Inhuman / Non Human"
        description="The second to lowest is Rank D, with measurements of physical attributes and strength limitations. This practically elevates the power for bodybuilders, since their strength is higher than Rank E. Capable of lifting weights that are limited to 200 heunix."
        tiers={[
          { sub: "D-1", desc: "Car Destruction" },
          { sub: "D-2", desc: "Appliance Damages" },
          { sub: "D-3", desc: "Wrecking Ball Damage" },
          { sub: "D-4", desc: "Can deadlift a house or small apartment" },
        ]}
      />

      {/* RANK C */}
      <RankTier
        rank="C"
        label="Superhuman"
        description="Rank C is different from D and E. Rank C measures powers based on how strong they can destroy or create a building. Rank C also measures both mental and physical attributes."
        tiers={[
          { sub: "C-1", desc: "Destroy Houses, Apartment Complexes, Skyscrapers" },
          { sub: "C-2", desc: "Create Houses, Apartment Complexes, Skyscrapers" },
          { sub: "C-3", desc: "Small to Large Towns" },
        ]}
      />

      {/* RANK B */}
      <RankTier
        rank="B"
        label="Power Gifted"
        description="Rank B, otherwise known as Power Gifted, measures the power of individuals that have been given powers from another source. Power Gifted only has the max power output of 5."
        tiers={[
          { sub: "B-1", desc: "City Level Destruction or Creation" },
          { sub: "B-2", desc: "Nuclear Destruction, Country level." },
          { sub: "B-3", desc: "State Destruction (if held back)" },
          { sub: "B-4", desc: "Small to Large Mountain Level" },
        ]}
      />

      {/* RANK A */}
      <RankTier
        rank="A"
        label="Supernatural"
        description="Rank A is a measurement of powerhouse abilities. That means people or users that contain supernatural powers are put in Rank A. Supernatural powers can be born with or have been given by a Potent Spirit. Hibryds are in this category."
        tiers={[
          { sub: "A-1", desc: "Country Level Destruction x10 or Creation" },
          { sub: "A-2", desc: "Continental Destruction / Continental Rifts" },
          { sub: "A-3", desc: "Island Level Destruction, Pompeii Style but 20x" },
        ]}
      />

      {/* RANK S */}
      <RankTier
        rank="S"
        label="Hypernatural"
        description="Rank S measures powers and categorizes each ability by their strength ten-fold. This includes magic users and aura users that have the capability of destroying a planet or a galaxy / creating a galaxy or a planet / moon."
        tiers={[
          { sub: "S-1", desc: "Ocean and Seas Destruction / Vaporization from Magma Level" },
          { sub: "S-2", desc: "Particle Destroyer (Atoms at a molecular level)" },
          { sub: "S-3", desc: "Materialization of objects and anti-matter" },
          { sub: "S-4", desc: "Planetary Level Destruction (includes meteor-level) - but only at a small scale. Think like destroying Jupiter" },
        ]}
      />

      {/* RANK X */}
      <RankTier
        rank="X"
        label="Omni-Natural"
        description="Rank X, otherwise known as Omninatural, houses individuals that can destroy a timeline or create a timeline, galaxies, planets, moons and universes. Divine Power fits within this category."
        tiers={[
          { sub: "X-1", desc: "Hyperverse Level" },
          { sub: "X-2", desc: "Stellarkinesis (Galaxy Manipulation)" },
          { sub: "X-3", desc: "Timeline creation, destruction. Universal Destruction and Creation / Multiversal" },
        ]}
      />

      {/* RANK N */}
      <RankTier
        rank="N"
        label="Unknown Power"
        description="Rank N is a type of power that still holds a mystery. How does one attain N? No individual has gone this far yet."
        tiers={[
          { sub: "N-1", desc: "Manipulation of The Outerbounds, All Realities, and Multiversal Complexities" },
          { sub: "N-5", desc: "Unaffected by concepts. Nullifies any ill-intent concepts and or/destroying a concept", muted: true },
        ]}
      />

      {/* RANK R */}
      <RankTier
        rank="R"
        label="Beast Power"
        description="Rank R, Beast Power, falls between Rank B - S, since their power level can vary. Beast Power emulates the raw power of a beasts' max strength. This type of ranking also depends on which weapon or power a beast wields."
        tiers={[]}
        note="Rank BS. Ha. Get it?"
      />

      {/* Back nav */}
      <div className="border-t border-[#2e2b26] pt-8 mt-4">
        <Link
          to="/world/databases"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to World Databases
        </Link>
      </div>

    </div>
  );
}
