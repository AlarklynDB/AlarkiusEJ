import { Link } from 'react-router-dom';

export default function TheContinentOfRynel() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        Locales &amp; Sights / The Continent of Rynel
      </p>

      {/* Hero */}
      <div className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Continent of Rynel</h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The continent of Rynel, west Varleqe, Hetrania, and Lynneria, is smack-dab center of the globe (not literally). Rynel is another continent much like Norrane. Instead of operating on a large hexicule crystal, Rynel operates on the Oakgnar Grand Tree, which is considered to be the biggest and tallest tree in the whole world. There are a total of six locations on this continent, four being Oakgnar&apos;s towns, one ruin, and one city.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Rynel — Image Placeholder ]</p>
      </div>

      {/* Locations */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Locations within Rynel</h2>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Oakgnar Grand Tree</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Oakgnar Grand Tree is composed of three main materials, a single Hexicule Core, Hardwood, and Stonewood. The Hexicule Core keeps the tree intact within the ground, serves as a light beacon, is nearly indestructible, and can regenerate its roots and wood when damaged. The Oakgnar Grand Tree is a symbolism where all the four corners of Hetra (earth) binds together where people are unified despite absolute differences of each other. A worldwide cultural festival will be held a month, yearly, celebrating life and enjoying it to the fullest. The time zone that the Oakgnar Grand Tree is located at is on UCC-0.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Oakgnar Towns</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            There are a total of Four Oakgnar towns that surround the Oakgnar Grand Tree. They are named:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { dir: "N", name: "Oakgnar Verns", mayor: "Tyle Lynn" },
              { dir: "S", name: "Oakgnar Grelt", mayor: "Kyle Lynn" },
              { dir: "E", name: "Oakgnar Maple", mayor: "Nyle Lynn" },
              { dir: "W", name: "Oakgnar Astel", mayor: "Eli Lynn" },
            ].map(({ dir, name, mayor }) => (
              <div key={name} className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
                <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">{dir}</p>
                <h4 className="font-display text-base text-[#f2ebeb] mb-1">{name}</h4>
                <p className="font-body text-sm text-[#7a746e]">Mayor: {mayor}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed">
            These four towns are named by the Lynn Brothers who are the towns&apos; Mayors.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">New Rynels</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Being the largest coast-line city in the entire world, New Rynels spans around two state-wide lengths (like the counter-part of New York, but bigger and busier). This place is home to the richest people on the planet, with numbers that go up to the quadrillions. This city is filled with entrepreneurs, social workers, and big jobs that give out large pays, with the minimum wage being at <span className="font-body text-[#f2ebeb]">&#294;25.35 Hetrix (19.55 USD)</span>. This is also a place home to a space program called The Hetranian Space Exploration &amp; Aeronautics Program (HetraSEAP). This huge coastal city is founded by Philstra Rhys.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Rynel Ruins</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            South of both Oakgnar Towns and New Rynels. Rynel Ruins leads underground, with the ruins being the exact size of the continent itself. Scientists say that the Rynel Ruins leads to an underground ancient animal kingdom, The Feathered Dinosaurs. Though there are texts and myths that say these creatures may be real, it still remains a speculation to this day. Currently, there is no way to enter the said ruins, since the entrance is sealed off with a divine seal.
          </p>
        </div>
      </div>

      {/* Oakgnar Festivities */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Oakgnar Festivities (Oakgnar Grand Tree)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Every year, for a duration of one month, festivities, weddings, and celebrations are held specifically on Rynel during the month of Muhulmber. Muhulmber is a month that has a duration of 60 days. Everyone from around the world, despite being different and with differences, all come to this very place to celebrate the life they were given (united together through a kindred spirit). Toss away the pain and the suffering just for a month and celebrate. The time of relaxation, peace, fun, and games all reside on Rynel&apos;s famous and favorable, popular event, The Oakgnar Grand Festivities.
        </p>
        <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
            This happens on the 45th day of the month.
          </p>
        </blockquote>
      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex items-start justify-between">
        <Link to="/world/locales" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Locales &amp; Sights</span>
        </Link>
        <Link to="/world/locales/varleqe" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">The Super-Continent of Varleqe</span>
        </Link>
      </div>

    </div>
  );
}
