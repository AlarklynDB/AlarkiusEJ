import React from "react";
import { Link } from "react-router-dom";

export default function TheEulerianCatalogs() {
  return (
    <div className="min-h-screen bg-[#100908] py-16">
      <div className="max-w-[960px] mx-auto px-6">

        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
          The Hibrythian Saga &nbsp;/&nbsp; Locales &amp; Sights &nbsp;/&nbsp; The Eulerian Catalogs
        </p>

        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Seven Wonders of the World
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Eulerian Catalogs
        </h1>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Eulerian Catalogs — Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          One of the Seven Wonders of The World. A giant underground library stretching from the Eulan Kingdom to the Oelen Kingdom.
          Its architecture has been dated to 235 Oldendaye. Built for Giants. Books of all sizes, different aisles, and magic books.
          Texts on Eulerian Martial Arts and Hethurgism. Open to the public. Surface entrance found at the Euriel Town ruins (Euriel Ruins).
          Closes during the Month of Mulumber and Griselmber due to heavy snowstorms.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Hethurgism</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Hethurgism is an ancient martial arts originating in the Greungerian Era. Invented by humans who trained under the guidance
            of Faes and Beasts. Unlike most combat systems, it is not energy-based &mdash; instead, it deals with physical pressure points,
            finds weak points in an opponent, and suppresses Aura within living beings. The closest Earth equivalent would be a combination
            of Wuxia Arts, Tai-Chi, and Japanese Aikido. It is a rare practice in modern times.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Magic Books &amp; Objects</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The Eulerian Catalogs houses an extensive collection of magical items: spells, incantations, grimoires, tomes, and artifacts.
            Ancient weapons are present, though they are extremely fragile and must not be handled roughly. Decorative objects include
            a giant hammer that swings like Mjolnir, and a giant claymore said to have beheaded a giant demon dragon. Many objects
            once belonged to The 5 Giants of the Greungerian Era.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Library Construction</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
            The underground structure mirrors the entire shape of the Continent of Eulerich. It has multiple layers descending to the base plate:
          </p>
          <div className="space-y-4">
            {[
              { label: "Floor 0 (Before the Crust)", desc: "All books and weapons are housed here." },
              { label: "Floor Z", desc: "Giant fossilized dragon bones. So heavy that a single bone can flatten a town. They cannot be moved to the surface. Small portions may be extracted and sold (not auctioned) at a high price." },
              { label: "Floor B", desc: "Giant stone constructions holding up Floor Z and Floor 0. Includes stone pyramids, oddly shaped heads, henges, and other unusual structures. Their purpose remains a mystery." },
              { label: "Floor A (Closed since 1675 AD)", desc: "Contains three oddly placed pillars in triangular formation — two on the base floor, one on the ceiling. There is a mechanical-like device with bearings that could potentially reactivate a portal. Scientists from Eldreule discovered it but were afraid to activate it, fearing it might bring about the end of the world. Stygian Batragons appear here via surface shafts." }
            ].map((floor) => (
              <div key={floor.label} className="p-4 border border-[#2e2b26] bg-[#0f0d0c] rounded-sm">
                <p className="font-display text-base text-[#f2ebeb] mb-2">{floor.label}</p>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{floor.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-[#c9a84c]/30 my-12" />

        <div className="flex items-start justify-between">
          <Link to="/world/locales" className="group block p-4 border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm transition-all duration-200 max-w-[220px]">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1 group-hover:text-[#c9a84c]/60 transition-colors">&larr; Back</p>
            <p className="font-display text-base text-[#f2ebeb]">Locales &amp; Sights</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
