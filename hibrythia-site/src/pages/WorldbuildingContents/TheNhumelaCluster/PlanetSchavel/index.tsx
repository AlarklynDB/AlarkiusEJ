import { Link } from 'react-router-dom';

export default function PlanetSchavel() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[960px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/TheNhumelaCluster" className="hover:text-[#c9a84c] transition-colors">Nhumela Cluster</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Planet Schavel</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">V. The Current World of Hibryds</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Planet Schavel 🎇</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-10">The Fourth and First Planet from The Sun</p>

      <div className="space-y-12">

        {/* Section 1 */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-5">The Fourth and First Planet from The Sun</h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              This planet orbits vertically within the Goldilocks Zone the same as Planet Hetra, albeit on a different axis.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The sun's gravitational waves launches themselves at both horizontal, diagonal, vertical heunixs, allowing planets to orbit around the sun at different angles, or at different orbital rings. And Planet Schavel wasn't a planet to begin with, it was a rogue planet that came from far far away. This planet arrived in this system after Hetra was still in its cooling down point when Zohl made his first green planet. And Zohl thought it would be a funny idea to put Schavel in the vertical Zone of the system.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              When Schavel falls through the horizontal orbit, it meets Hetra at a safe distance where the planet can be seen from the surface of Hetra and Schavel itself. The gravitational waves between these two planets will not interfere with each other because the distance is greater in the goldilocks zone.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              In some regions of the green zone and at a certain point in time, Planet Schavel will meet closely with Hetra without causing any gravitational disturbance. You can see Schavel up close with the naked eye when the time comes.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 2 — Inhabitants */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Inhabitants</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            This planet already has inhabitants, some from Planet Hetra. Since space exploration is already possible, transportation between Hetra and Schavel is possible. Since Space Travel is already normalized in this world, it made it possible for Hetranians to emigrate to Schavel. There is a huge lag between Schavel and Hetra's time system because it would take at least two days to get adjusted there. <span className="text-[#c9a84c] italic">"Schavelia-Hetrans"</span> is a term for people who live on Schavel.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 3 — Specifications */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Specifications</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">It is the same size as Hetra — and a near identical system.</p>
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-2">
            {[
              ['Shape', 'Perfect Sphere'],
              ['Diameter', '14,828 miles (23,866.45 km)'],
              ['Radius', '7,414 miles (11,933.25 km)'],
              ['Circumference', '46,572.34 miles (74,940.36 km)'],
              ['Rotational Speed at Equator', '1,584 mph (2,550 km/h)'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-wrap gap-2 justify-between border-b border-[#1e1c1a] pb-2 last:border-0 last:pb-0">
                <span className="font-body text-xs text-[#7a746e]">{label}</span>
                <span className="font-body text-xs text-[#c8c2ba]">{value}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-6">
            Unlike Planet Hetra that is a perfect Sphere (due to Zohl's Divine Runic Spell), Schavel made itself home on the vertical axis, which is considered the Fourth but FIRST planet from the Sun within the Nhumela Cluster.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-3">
            One might ask why is it a perfect sphere? Schavel was ONCE a rogue planet. That means it has encountered asteroids or comets that helped shaped it and mold it into a perfect sphere out in the vast cosmos before it landed in the Nhumela Cluster. Then there's the moon.
          </p>

          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-[#c9a84c]/30 pl-5">
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Moon Scavnar</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Moon Scavnar was once a comet. Before Schavel's orbit caught it. Scavnar emits a strange but soft magnetic and orbital wave that bounces towards Schavel and back. Even in orbit around the planet, the moon helps maintain the planet's spherical body. Strangely enough, both Schavel and its moon need each other. Scavnar sits closely to Schavel. If Scavnar is too far, Schavel will lose the "perfect sphere" shape. Also, on Schavel's surface, you can see the moon! A beautiful sight.
              </p>
            </div>

            <div className="border-l-2 border-[#c9a84c]/30 pl-5">
              <h3 className="font-display text-base text-[#f2ebeb] mb-2">The Time System</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">The time system on Schavel is different from Hetra.</p>
              <div className="space-y-1 mb-4">
                {[
                  ['1 Year', '540 Days'],
                  ['Months per Year', '15 months'],
                  ['Days per Month', '36 days (even)'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <span className="font-body text-xs text-[#7a746e] w-32 shrink-0">{k}</span>
                    <span className="font-body text-xs text-[#c9a84c]">{v}</span>
                  </div>
                ))}
              </div>
              <Link to="/world/databases/TheNhumelaCluster/PlanetSchavel/SchavelianCalendar" className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors">
                View Full Calendar →
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section 4 — Magic & History */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Magic &amp; History</h2>
          <div className="space-y-4 mb-8">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Emigrants from Planet Hetra stem way back from the First Space Age in Hetra's year of 2000. Technology became so advanced that Schavel was literally founded in that year. There was already animal life in Schavel in that year, so it made it a lot more easier for the first few Hetranians to visit that planet.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Scientists from Eldreule, along with the Hetranian Space Exploration &amp; Aeronautics Program (HetraSEAP) funded the first mission to explore Schavel before giving it its name. During the year of 2000–2010 on Schavel, scientists quickly got to study the planet's time system.
            </p>
            <ul className="space-y-1 pl-4">
              <li className="font-body text-sm text-[#c8c2ba] leading-[1.85] before:content-['–'] before:mr-2 before:text-[#c9a84c]">Schavel uses Hetra's 32/16 time system since the size of the planet is the same</li>
              <li className="font-body text-sm text-[#c8c2ba] leading-[1.85] before:content-['–'] before:mr-2 before:text-[#c9a84c]">Current Year on Schavel is 2245 — same as Hetra</li>
            </ul>
          </div>

          <h3 className="font-display text-base text-[#f2ebeb] mb-5">Elemental Fire Magic</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            On Schavel, Elemental Fire Magic was made and popularized globally. Elemental Fire Magic is a derivative magic from{' '}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Alchemic Magic</Link>{' '}
            and Elemental Magic, which was originally from Hetra, now made known on Schavel specifically. There are also different types of Elemental Fire Magic — each with their own type advantages and disadvantages. Elemental Fire Magic is based on energy and plasma.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { color: 'Red', hex: '#ef4444', weak: 'Blue Fire Magic, Black, and White', strong: 'Green, Orange, and Yellow', nullifies: 'Purple' },
              { color: 'Blue', hex: '#3b82f6', weak: 'Green, Yellow and Orange', strong: 'Red, Purple', nullifies: 'Purple, Black & White' },
              { color: 'Green', hex: '#22c55e', weak: 'Red, Purple, Black', strong: 'Blue, Yellow, Orange', nullifies: 'White' },
              { color: 'Yellow', hex: '#eab308', weak: 'Red, Black, Purple', strong: 'Blue, Green, White', nullifies: 'Orange' },
              { color: 'Orange', hex: '#f97316', weak: 'Red, Black, White', strong: 'Blue, Yellow, Purple', nullifies: 'Green' },
              { color: 'Purple', hex: '#a855f7', weak: 'Blue, Black, Orange', strong: 'White, Green, Yellow', nullifies: 'Red (mutual!)' },
              { color: 'White', hex: '#f8fafc', weak: 'Purple', strong: 'Black', nullifies: null },
              { color: 'Black', hex: '#6b7280', weak: 'White', strong: 'Red, White, Purple, Orange, Yellow, Green and Blue', nullifies: null },
            ].map((fire) => (
              <div key={fire.color} className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: fire.hex }} />
                  <h4 className="font-display text-sm text-[#f2ebeb]">{fire.color} Fire Magic</h4>
                  {fire.color === 'Red' && <span className="font-body text-[8px] tracking-widest uppercase text-[#c9a84c]/50 ml-auto">Base</span>}
                </div>
                <div className="space-y-1">
                  <p className="font-body text-[10px] text-[#7a746e]"><span className="text-[#ef4444]/70">Weak Against:</span> {fire.weak}</p>
                  <p className="font-body text-[10px] text-[#7a746e]"><span className="text-[#22c55e]/70">Strong Against:</span> {fire.strong}</p>
                  {fire.nullifies && <p className="font-body text-[10px] text-[#7a746e]"><span className="text-[#c8c2ba]/50">Nullifies:</span> {fire.nullifies}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] grid grid-cols-2 gap-4">
        <Link to="/world/databases/TheNhumelaCluster" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">The Nhumela Cluster</span>
        </Link>
        <Link to="/world/databases/TheNhumelaCluster/PlanetSchavel/SchavelianCalendar" className="group flex flex-col text-right border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 ml-auto w-full">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Schavel's Calendar System</span>
        </Link>
      </div>
    </div>
  );
}