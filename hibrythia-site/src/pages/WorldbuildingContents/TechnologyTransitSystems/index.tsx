import { Link } from 'react-router-dom';

function PropBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-4">
      <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechnologyTransitSystems() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-[960px] mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">
          World Databases
        </Link>
        {" / "}Technology &amp; Transit Systems
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-10">
        Technology &amp; Transit Systems
      </h1>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── The Great Tech Era ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          History
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-great-tech-era-of-1565-ad">
          The Great Tech Era of 1565 AD
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          Before the advances of technology of 1565 AD, people used to walk long miles because it was regarded as a healthy way of exercise, through the help of horses, Buffalosaurus Ants, and of the sort. But even with the huge time frame of 32 hours, walking or transportation via Beast Creatures wasn&apos;t enough. In fact, it wasn&apos;t efficient it&apos;s max, even with the help of tame beasts.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          The lands are vast and large, and taking trip to different areas, especially on the continents of Rynel and Varleqe — would take too long of a time. The technology before 1565 was at it&apos;s own absolute peak, using steam engines and steam punk technology. That Era was known as the <span className="text-[#f2ebeb] font-semibold">Steampunk Era</span>, which lasted from 3 AD - 1500 AD.
        </p>

        {/* Discovery of Hexicules */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-6 mt-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Discovery of Hexicules</h3>
          <p className="font-body text-sm text-[#c8c2ba] mb-4">
            This discovery happened in the year of <span className="text-[#f2ebeb] font-semibold">1501</span>, before the Great Technological Era of 1565. Hexicules are magic pink crystalline rocks — entirely different to people who have magic as abilities and powers. The Hexicule energy market is one of Hetra&apos;s most dominant industries — engineers and artificers have spent centuries trying to minimize energy loss during modification with only marginal success. Hexicules are also great stabilizers.
          </p>

          <PropBlock
            title="Properties & Mechanics"
            items={[
              "Hexicules are incredibly dense due to their high molecular structure, making it physically impossible to scratch or dent them under normal conditions — though they are not indestructible.",
              "Their energy regenerates at an extraordinarily fast rate, meaning recharging is rarely a necessity.",
              "A single Hexicule outputs a full charge of 64,500 eXpH.",
              "eXpH is an energy measurement: ElectriXore per Hour.",
            ]}
          />

          <PropBlock
            title="When Modified"
            items={[
              "When two or more Hexicules are combined, they lose 20% of their durability. Their regenerative properties slow significantly — taking approximately 2.5 hours to self-repair.",
              "When modified into batteries, Hexicules lose 30–50% of their base charge, outputting approximately 22,400 eXpH.",
            ]}
          />

          <p className="font-body text-sm text-[#c8c2ba] mt-2">
            Hexicules are the solution to everything since they are <span className="text-[#c9a84c] italic">"extremely versatile."</span>
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Technology Timeline ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Timeline
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2" id="technology-timeline">
          Technology Timeline
        </h2>
        <p className="font-body text-sm text-[#7a746e] italic mb-6">
          This is a Technology Timeline that is borrowed from the{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Calendar System</Link>.
        </p>

        <div className="space-y-4">
          {[
            {
              era: "The Steampunk Magic Era",
              date: "3 AD – 1500 AD",
              desc: "Steam Technology was what started with the abundance of Magic Abilities. This was the innovation of steam engines and the discovery of thermodynamics.",
            },
            {
              era: "The Discovery of Hexicules",
              date: "1501 AD",
              desc: "It puzzled the scientists of the time about what it is, why it is, and how it functions. It took 64 years to understand the science behind this strange crystal. Scientists from Lynneria and Rynels took extra study precautions, which includes research and experimentations.",
            },
            {
              era: "The Great Tech Era",
              date: "1565 AD – 2000 AD",
              desc: "There were many advancements done before 2000 before hit it off. This includes the discovery of Hardwood Lucid Metal, which is nearly used in metal buildings — as hard as diamond and dense as tungsten. This included the formation of HetraSEAP (1975 AD), the world's first Space Exploration Aeronautics Program.",
            },
            {
              era: "The Technomagical Era of Innovation",
              date: "2000 AD – Present",
              desc: "Known as the Technomagic Era, this is where all the knowledge from the past expands into the future. The innovation of mankind keeps evolving, and the technology goes along side it. From Hover Cars, to Sky Trains, and The Skypeak Obelisk — Magic became one of the underlying companions alongside technology. Planet Schavel was discovered in this year, sitting in the habitable zone of the sun...on the vertical orbit.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <h3 className="font-display text-sm text-[#f2ebeb]">{item.era}</h3>
                <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">{item.date}</span>
              </div>
              <p className="font-body text-base text-[#c8c2ba]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Ingress Protection ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Device Standards
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="ingress-protection-resistant-systems">
          Ingress Protection Resistant Systems
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          Most of these IP systems are used for high end products and inventions. Hexicules play a major role in these resistant systems.
        </p>

        <div className="space-y-3 mb-8">
          {[
            {
              code: "IP618",
              label: "Liquid Resistance",
              desc: "Complete resistance to water or liquids. Even the density doesn't matter, like: thick, thin, oil, or grease. A buffed version IP-68 which is a standard rating for phones.",
            },
            {
              code: "IP6-x250",
              label: "Dust and Scratches",
              desc: "Dust and Scratch Resistance to anything. Got a very sharp knife? Nah. It won't cut even on a deep level.",
            },
            {
              code: "MIL-STD-810G/H / IK200",
              label: "Drop & Shock",
              desc: "Tests devices against drops, vibration, shock, and extreme temperatures. Drop your phone from a skyscraper? It will survive. Due to the power of the HEXICULE!",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex gap-4">
              <div className="shrink-0">
                <span className="font-display text-base text-[#c9a84c]">{item.code}</span>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mt-0.5">{item.label}</p>
              </div>
              <p className="font-body text-base text-[#c8c2ba]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Ingress Adaptation */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Ingress Adaptation System(s)</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Ingress Adaptation, abbreviated to <span className="text-[#f2ebeb] font-semibold">IA</span>, uses the help of hexicules and magic. Let&apos;s say a person with magic wants to adapt their device to something — or if their devices have a supernatural security system. This is what IA is used for.
        </p>
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
          <span className="font-display text-base text-[#c9a84c]">IAS-M101</span>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">Ingress Adaptation Magic 101</p>
          <p className="font-body text-base text-[#c8c2ba]">
            IA-M101 is implemented in most technology that requires or uses hexicules as batteries or energy. This is also what allows the supernatural security to function in most devices like phones or computers. Tired of typing your password? Just use a magical ability to unlock your device!
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Land Transportation ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Transportation
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="transportation-of-modern-planet-hetra">
          Transportation of Modern Planet Hetra
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          The continental land mass of each place on Hetra is very expansive. Not only are they large, they span for miles, and it&apos;s not just plains or wilds. Most of these roads are only within city regions, but there are various methods to get around, which includes air travel and sea travel.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          ALL vehicles have smooth travel, great interior sounds, and noise suppression from outside noise. There are special functions that almost all vehicles have where the noise suppression can be toggled off for FULL immersive experience. There is no such thing as turbulence. Hexicules are the solution to everything.
        </p>

        {/* Land */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Land Transportation</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          Within walled cities on Lynneria and Varleqe, inner roads lead in and around the area. The roads are fitted with iron and magnets that use dry-ice magnetic levitation and hovering — allowing hover vehicles to get around quickly.
        </p>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-2">Hover Vehicles</h4>
          <p className="font-body text-sm text-[#c8c2ba] mb-3">
            There are lots of shapes and sizes — from busses, cars, mini cars, trucks, and more! These cars are full on electric vehicles that solely rely on the power of hexicules.
          </p>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">Most common around Lynneria&apos;s cities</p>
          <ul className="space-y-1">
            {[
              "Country of Riverchnaut: Eldreule and Kharphan",
              "Country of Nharvenile: Ironbark, Grelladore, and Quentyn City Harbor",
            ].map((city, i) => (
              <li key={i} className="flex gap-2 font-body text-base text-[#c8c2ba]">
                <span className="text-[#c9a84c]">—</span>
                <span>{city}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Air Transportation ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Air &amp; Sky Transit
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="air-sky-transportation">
          Air &amp; Sky Transportation
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          Planet Hetra is a super planet and the expanse of the sky stretches for miles across. Because of the 32/16 time system and two day gap, it would take at least days or hours of travel by normal vehicle. Instead, air vehicles are equipped with a special kind of fuel — <span className="text-[#f2ebeb] font-semibold">Lhureanium</span>, made up of hexicules, Vesselyte crystals, and plasma — used in air travel, along with Spaceships and Rockets.
        </p>
        <ul className="space-y-1 mb-6">
          {[
            "Storage Blimps for Imports and Exports use Lhureanium to get around quickly.",
            "Jets use Lhureanium.",
            "HetraSEAP rockets and ships use Lhureanium for fuel, along with hyper drive use.",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c]">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Aerotrains */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Air Trains — Aerotrains</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Aerotrains are sky trains. They can traverse around the skies and globe for imports at a faster speed than Storage Blimps. Aerotrains use air energy along with solar and lunar energy to stay afloat and maintain velocity. The highest they can go up to in speed is around <span className="text-[#f2ebeb] font-semibold">310 MPH</span>.
        </p>

        <div className="space-y-3">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-display text-base text-[#f2ebeb]">Aerotrain Imports Express</h4>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">ATI-Express</span>
            </div>
            <p className="font-body text-base text-[#c8c2ba]">
              The longest Aerotrain Express and the official train for exporting and importing goods from different regions. It departs from ATI-Express Station in New Rynels on the continent of Rynel — a megalopolis city. <span className="text-[#f2ebeb]">35 cabin units.</span>
            </p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-display text-base text-[#f2ebeb]">Hetranian AirLine Express</h4>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">H.A.L.E</span>
            </div>
            <p className="font-body text-sm text-[#c8c2ba] mb-3">
              The number one lead air transportation for vacations, tourism, and more. Uses the same energy method as ATI-Express. <span className="text-[#f2ebeb]">25 cabins</span>, making a stunning impression in the skies. Departs from New Rynels. Getting to different places around the world takes at most two hours because of how fast H.A.L.E goes.
            </p>
            <p className="font-body text-base text-[#c8c2ba]">
              There are a total of <span className="text-[#f2ebeb] font-semibold">6 HAL-Express Lines</span>, each with their own dedicated route.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Ocean Transit ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Ocean Transit
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="ocean-transit-systems">
          Ocean Transit Systems
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          Almost all of Hetra&apos;s water is contained in its global ocean, covering <span className="text-[#f2ebeb] font-semibold">82.8%</span> of global crust. There aren&apos;t many areas explored thoroughly, but scientists are willing to go to extreme measures to study the harshest conditions of oceans and seas. River systems are thoroughly examined and discovered, along with local wildlife — but the vast expanse of the cold stormy oceans gives quite a fight.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          Ships didn&apos;t have nearly enough power in the past because the thermodynamic conversion of tidal energy would breach into the ship&apos;s technology and fry everything. Not even Hexicules could supply enormous power. There&apos;s lots of wreckage out in the Rigid Cold Ocean, but that hasn&apos;t stopped the people from exploring despite the warnings. So, engineers devised a way to safely traverse the waters.
        </p>

        {/* UOTA */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Underwater Ocean Train Aquasubs <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">(UOTA)</span></h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Built within the year of <span className="text-[#f2ebeb] font-semibold">2124 AD</span> to combat the nasty ever-growing chaos above the ocean&apos;s surface. Long magnetic rails are built around the ocean floor of each continent, extending out to different regions and places around the globe. The UOTA departs from New Rynels&apos; Underground Station.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          The UOTA has <span className="text-[#f2ebeb] font-semibold">5 Aquasubs and lines</span>. One — the <span className="text-[#f2ebeb] font-semibold">UOTA-Shipment</span> — is used for importing and exporting goods. The other four lines are transit systems for the people of Hetra. The UOTA-Shipment goes up to the same speed as the ATI-Express.
        </p>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-6">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Passenger Lines</p>
          <div className="space-y-1">
            {["UOTA-Express 1", "UOTA-Express 2", "UOTA-Express 3", "UOTA-Express 4"].map((line, i) => (
              <div key={i} className="flex gap-2 font-body text-base text-[#c8c2ba]">
                <span className="text-[#c9a84c]">—</span>
                <span className="text-[#f2ebeb] font-semibold">{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* UOTA Rails */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">UOTA Rails</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          The magnetic suspension rails are built with <span className="text-[#f2ebeb] font-semibold">Hardwood Lucid Metal</span> with lines of Hexicules inside, which powers the suspension and hover mechanic of these trains. Hardwood Lucid Metal are wood-type metals found on the Continent of Norrane in cave systems — non-corrosive, non-rusting, and waterproof. These rails run on stable ground away from trenches, cliffsides, and anything that might crumble over time, underwater.
        </p>

        {/* UOTA Expresses */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">UOTA Expresses</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          Cabin units go up to <span className="text-[#f2ebeb] font-semibold">25</span>, the same as the HAL-Express. You can watch the underwater life come alive with tours around certain regions. For a Global Tour, each express line goes at <span className="text-[#f2ebeb] font-semibold">235 MPH</span> underwater. Tickets for a global underwater tour are priced at a fair <span className="text-[#c9a84c] font-semibold">Ħ45.99 Hetrix Dollars</span>.
        </p>
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-2">Built with the Same Materials</h4>
          <p className="font-body text-base text-[#c8c2ba]">
            These expresses, along with UOTA-Shipment, are built with the same materials as the UOTA-Rails. NO amount of water will breach the crevices or lines. It is completely safe, and also a smooth user experience underwater.
          </p>
        </div>
      </section>

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
