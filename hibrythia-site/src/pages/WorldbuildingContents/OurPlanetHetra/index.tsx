import { Link } from 'react-router-dom';

export default function OurPlanetHetra() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Our Planet Hetra</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">V. The Current World of Hibryds</p>
      <h1 className="font-display text-4xl md:text-5xl text-[#f2ebeb] mb-2">Our Planet Hetra</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-4">Midtheltra · The Third Realm of Hibrytheia</p>

      {/* Planet image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Modern Day Hetra — Image Placeholder ]</p>
      </div>

      <div className="space-y-12">

        {/* Section 1 — Planet Hetra */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">Planet Hetra</h2>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-4">Solar System / Galaxy — Where are we?</p>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Planet Hetra is the third planet from the sun in the Nhumela Cluster. This planet is in the Goldilocks Zone, which makes it easy to bear life and that life can live on here.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              This planet is a creation of Zohl, which was tasked by King Nhavah of the Divine Realm. Zohl created the galaxy first, which was named <span className="text-[#c9a84c] italic">"Anadeya's Eye,"</span> in which multiple solar systems will be in. One of the many specific systems Zohl was tasked to manage was the Nhumela Cluster (which is the name of the solar system Planet Hetra is in).
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              However, before humans could be brought to Hetra, a foreign entity by the name Eienel threatened to destroy it. Zohl tried to fend off Eienel, but was too weak. Summoning the Earlywulf, a being from the Divine Realm, they both defeated Eienel and imprisoned the entity in an object called the Black Stone.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              After the commotion, Zohl and the Earlywulf decided it was best to exile the Black Stone away into the Skull Zakar, a dead planet. Shortly after that, Zohl requested help from a spirit that creates life, Aurora Rimaea. Aurora Rimaea is the Spirit of Mother Nature and Life itself and was able to give life to Planet Hetra, including humans.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 2 — Comparison to Earth */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">Comparison to Earth</h2>

          {/* Comparison image placeholder */}
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-8">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Hetra vs. Earth Comparison — Image Placeholder ]</p>
          </div>

          <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Planet Hetra has a lot of people!</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            Planet Hetra is a lot more bigger than Earth, but has similar density, gravity, and mass. Hetra is 3% bigger in terms of numbers, but almost works the same as Earth. The specifications here are calculated from the citizens of Hetra, primarily scientists from the City of Eldreule (on Lynneria).
          </p>

          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-2 mb-6">
            <p className="font-body text-xs text-[#4a4844] mb-4">Almost all of Hetra's water is contained in its global ocean, covering 82.8% of global crust.</p>
            {[
              ['Population (Year 2245)', '12.959 Billion People'],
              ['Diameter', '14,828 miles (23,866.45 km)'],
              ['Radius', '7,414 miles (11,933.25 km)'],
              ['Circumference', '46,572.34 miles (74,940.36 km)'],
              ['Rotational Speed at Equator', '1,584 mph (2,550 km/h)'],
              ['Gravity', 'Same as Earth, but 2% lighter'],
              ['Age of Planet Hetra', '~52,784 years (~53k)'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-wrap gap-2 justify-between border-b border-[#1e1c1a] pb-2 last:border-0 last:pb-0">
                <span className="font-body text-xs text-[#7a746e]">{label}</span>
                <span className="font-body text-xs text-[#c8c2ba] text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 3 — Zohl's Perspective */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">Zohl's Perspective of Hetra</h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              During the process of Early Hetra when Zohl made it, he had placed a Divine Runic Spell that helps regulate Planet Hetra from becoming an oblete spheroid. This Runic Spell helps regulate and balance the natural order of a perfect sphere. But what does this spell regulate? Here's what it does and why Zohl made Planet Hetra a spheroid. Zohl doesn't really care much about physics and scientific numbers. He just creates based off of vibes alone.
            </p>
            <ul className="space-y-2 pl-4">
              {[
                'There is no equatorial bulge — balanced magnetic and polar fields',
                'The Runic spell helps maintain the centrifugal force from rotation',
                'Equal Mass distribution and internal fluidity',
                'The Size of Planet Hetra',
                'Magnetic and Polar Fields (equally balanced)',
              ].map((item) => (
                <li key={item} className="font-body text-sm text-[#c8c2ba] leading-[1.85] flex gap-2">
                  <span className="text-[#c9a84c] shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 4 — Goldilocks Zone */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-4">Goldilock Zone</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            The habitable zone is the area around a star where it is not too hot and not too cold for liquid water to exist on the surface of surrounding planets. This distance from the Sun is called the habitable zone, or the Goldilocks zone.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 5 — World Seasons */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">World Seasons</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            The seasons in this world closely resemble the counterpart of Earth, however, they are given their own unique names.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: 'Pink Spring', color: '#f9a8d4', start: 'Viviambel 29th', end: 'Escael 20th' },
              { name: "Calderia's Heat", color: '#fbbf24', start: 'Escael 21st', end: '30th of Zestia' },
              { name: 'Aburhalle', color: '#fb923c', start: '31st of Zestia', end: 'Muhulmber 2nd' },
              { name: 'Wintervahle', color: '#93c5fd', start: 'Mhulumber 3rd', end: 'Viviambel 28th' },
            ].map((season) => (
              <div key={season.name} className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4" style={{ borderLeftWidth: '3px', borderLeftColor: season.color }}>
                <p className="font-display text-base text-[#f2ebeb] mb-2">{season.name}</p>
                <p className="font-body text-xs text-[#4a4844]">{season.start} → {season.end}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 6 — Calendar & Year */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">Calendar and Year Representation</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            Interpretation of what AD and BC is, including custom month names for this world! There is also a new era range!
          </p>
          <div className="space-y-3 mb-6">
            {[
              ['D.C.E', '"Divine Creation Era"'],
              ['O.D', '"Oldendaye"'],
              ['A.D', '"Aftendaye"'],
            ].map(([abbr, name]) => (
              <div key={abbr} className="flex items-center gap-3">
                <span className="font-display text-sm text-[#c9a84c] w-12 shrink-0">{abbr}</span>
                <span className="font-body text-sm text-[#c8c2ba] italic">{name}</span>
              </div>
            ))}
          </div>
          <div className="border border-[#c9a84c]/20 rounded-sm bg-[#0f0d0c] px-5 py-4 mb-6">
            <p className="font-body text-sm text-[#c9a84c]">1 Year = 444 days</p>
          </div>

          <h3 className="font-display text-lg text-[#f2ebeb] mb-4">Year 0 exists in this world!</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-3">Range Example</p>
          <p className="font-body text-xs text-[#7a746e] leading-relaxed italic mb-4">
            These backwards years are estimated as the Era when Planet Hetra was still in formation → cooldown, before life was implemented.
          </p>
          <div className="font-body text-sm text-[#c8c2ba] leading-[2] space-y-1">
            <p>~-40,539 DCE → ~-35,456 DCE → ~-20,000 DCE</p>
            <p className="text-[#4a4844] text-xs italic">Oldendaye (O.D) starts at this range</p>
            <p>→ -10,000 OD → -5,000 OD → -2,245 OD → -500 OD → -100 OD → -10 OD → -1 OD</p>
            <p className="text-[#c9a84c] text-xs">Year 0 exists here!</p>
            <p>→ 0 OD → 1 AD → 2 AD → currently <strong className="text-[#f2ebeb]">2245 AD</strong></p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 7 — Symbolisms */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-6">Symbolisms on Hetra</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-[#c9a84c]/30 pl-5">
              <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Erbgeroger Flower</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                The Erbgeroger Flower, also known as the <span className="text-[#c9a84c] italic">"Valley of the Mountains"</span> is a mountain flower that lives on Mount Erbgeroger (in the continent of Rynel). This flower contains mystical luminescence hetryphils that can help produce Silk that is nearly indestructible, near to the level of an Orb Weaver's Silk. This flower is considered sacred as there is only one kind, and is the world's symbolism flower for <span className="text-[#c9a84c] italic">"Unity."</span> It is protected with a magical barrier and no one can set foot into its region.
              </p>
            </div>
            <div className="border-l-2 border-[#c9a84c]/30 pl-5">
              <h3 className="font-display text-lg text-[#f2ebeb] mb-3">The Oakgnar Grand Tree</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                The Oakgnar Grand Tree is over millions years old, and it thrived during the Era of Greungeria. It is composed of three main materials; a single Hexicule Core, Hardwood, and Stonewood. The Hexicule Core keeps the tree intact within the ground, serves as a light beacon, is nearly indestructible, and can regenerate its roots and wood when damaged. The Oakgnar Grand Tree is a symbolism where all the four corners of Hetra (earth) bind together where people are unified despite absolute differences of each other. A worldwide cultural festival will be held a month, yearly, celebrating life and enjoying it to the fullest. The Oakgnar Grand Tree stands as tall as Everest. It still stands to this day!
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 8 — The Moons */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-6">The Moons</h2>
          <div className="space-y-6">
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
              <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Anzeya</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                The size of Anzeya is roughly the size of the continent of Lynneria and is bigger than Zenya, a satellite moon that orbits around. Anzeya is a continental moon and many ores can be found here, including Anzeyanax: a bright green glowing ore that is the planet's signature ore. Anzeya's distance to Hetra is 132,657 huenix (miles — 213,490.747 km) away from Hetra. With a mass that is not too heavy and not too light, it can safely orbit around Hetra at a distance that close.
              </p>
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
              <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Zenya</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Zenya, a smaller moon that orbits around Anzeya. Zenya, before becoming a moon, used to be a bright white comet. However, due to the polarity of and gravitational pull of Hetra and Anzeya, the moon became Anzeya's smaller moon.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26]">
        <Link to="/world/databases" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Databases & Systems</span>
        </Link>
      </div>
    </div>
  );
}
