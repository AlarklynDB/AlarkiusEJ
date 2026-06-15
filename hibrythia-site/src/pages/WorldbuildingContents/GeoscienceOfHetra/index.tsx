import { Link } from 'react-router-dom';

export default function GeoscienceOfHetra() {
  return (
    <div className="min-h-screen bg-[#100908]">
      <div className="max-w-[960px] mx-auto px-6 py-20 space-y-12">

        {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          III. The Inner Gears
        </p>

        {/* Page Title — HdTextDSize */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
            Geoscience of Hetra
          </h1>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
            Rocks, Stones, Ores &amp; Minerals
          </p>
          <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4 mb-4">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic">
              This is the Dictionary of the Handbook and an important page of the website itself. Here, you&apos;ll learn about terminology, objects, and places written throughout the series — a glossary to the entire franchise.
            </p>
            <p className="font-body text-sm text-[#7a746e] leading-[1.85] italic mt-1">
              This dictionary is frequently updated as new terms emerge in recent chapters.
            </p>
          </blockquote>
        </div>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── CRYSTALS ── */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Crystals</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-8">
            Crystals in Hetra are among the most versatile and sought-after materials on the planet. From powering cities to enhancing living beings, they sit at the intersection of nature and technology.
          </p>

          {/* Hexicules */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Hexicules</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Hexicules are <strong className="text-[#f2ebeb]">core crystals</strong> composed of high-energy magic cells — live inanimate beings in their own right. They are extraordinarily common and can be found virtually anywhere across Hetra. Discovered in 1501, which took 64 years to study before The Great Technological Era of 1565.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Appearance</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Hexicules vary greatly in size. Small ones are often shaped like a heart; larger ones can reach nearly the size of a drawer. They sometimes naturally group together in formations of up to eight — three small and five large — forming what are called <strong className="text-[#f2ebeb]">Hexicule Clusters</strong>, or a <strong className="text-[#f2ebeb]">Supercluster</strong>.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Properties &amp; Mechanics</h4>
            <ul className="space-y-2 mb-4">
              {[
                'Hexicules are incredibly dense due to their high molecular structure, making it physically impossible to scratch or dent them under normal conditions — though they are not indestructible.',
                'Their energy regenerates at an extraordinarily fast rate, meaning recharging is rarely a necessity.',
                'A single Hexicule outputs a full charge of 64,500 eXpH.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-[3px]">—</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">When Modified</h4>
            <ul className="space-y-2 mb-5">
              {[
                'When two or more Hexicules are combined, they lose 20% of their durability and their regenerative properties slow significantly — taking approximately 2.5 hours to self-repair.',
                'When modified into batteries, Hexicules lose 30–50% of their base charge, outputting approximately 22,400 eXpH.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-[3px]">—</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] italic">
                💡 The Hexicule energy market is one of Hetra&apos;s most dominant industries — engineers and artificers have spent centuries trying to minimize energy loss during modification with only marginal success.
              </p>
            </blockquote>
          </div>

          {/* Hetranium Crystals */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Hetranium Crystals</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Hetranium Crystals are <strong className="text-[#f2ebeb]">uncommon</strong> and scattered across Hetra — found on land, in oceans, and deep within seas. They are immediately recognizable by their <strong className="text-[#f2ebeb]">glowing orange color</strong> and distinctive geometry: sharp, jagged edges paired with unusually flat surfaces.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Appearance &amp; Structure</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Hetranium comes in <strong className="text-[#f2ebeb]">three different shapes and sizes</strong>, though all share the same sharp-flat composition. Their glow is faint in daylight but vivid in darkness, making them useful as natural markers in deep cave systems.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Uses</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Hetranium is primarily valued in <strong className="text-[#f2ebeb]">navigation and architecture</strong>. Their natural luminosity makes them popular for lining underground passages, pathways, and structural pillars in areas where light sources are scarce. Some artificers have also experimented with Hetranium as a supplementary energy emitter, though it lacks the output power of Hexicules.
            </p>
          </div>

          {/* Vesselyte Crystals */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Vesselyte Crystals</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Vesselyte Crystals are extraordinarily rare on Hetra — most deposits exist deep within the <strong className="text-[#f2ebeb]">Stygian Realm</strong>, where dark and freezing conditions allow them to properly develop.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Properties</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Vesselyte&apos;s most notable trait is its interaction with living beings. When in proximity to or used by a person with innate powers, it grants <strong className="text-[#f2ebeb]">laminar storage of energy within the veins</strong> — essentially creating additional vein-energy pathways in the body, expanding capacity for power storage and growth.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              In everyday, non-biological use, Vesselyte functions as a <strong className="text-[#f2ebeb]">high-capacity energy storage and transfer medium</strong> — prized by engineers who need stable, long-duration energy containment.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Growth Conditions</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">
              These crystals thrive exclusively in <strong className="text-[#f2ebeb]">cold and dark environments</strong>. Attempts to cultivate them outside the Stygian Realm have failed consistently, making supply limited and their value exceptionally high.
            </p>

            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] italic">
                ⚠️ Due to their rarity and biological interaction properties, Vesselyte is heavily regulated in most Hetran territories. Unauthorized use is treated as a serious offense.
              </p>
            </blockquote>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── STONES ── */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Stones</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-8">
            Stones form the literal foundation of Hetra&apos;s built world — from humble homes to towering industrial complexes. Most are mined and processed for construction, though each variety carries its own unique qualities.
          </p>

          {/* Briarstone */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Briarstone</h3>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-4">
              Colors: White, gray-pink, and silver-blue
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Briarstone is one of Hetra&apos;s most <strong className="text-[#f2ebeb]">widely used building materials</strong>, found naturally across the globe beneath cave systems. Miners collect it in bulk to serve as the structural base for houses, buildings, and other foundations.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              What makes Briarstone unique is that it contains <strong className="text-[#f2ebeb]">small traces of Hexicules</strong> within its composition — giving it a faint, ghostly glow when struck on impact. This property makes it somewhat sought after aesthetically, as buildings made from Briarstone shimmer subtly when damaged or hit, almost like the stone is alive.
            </p>
          </div>

          {/* Condensed Briarstone */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Condensed Briarstone</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Condensed Briarstone is the <strong className="text-[#f2ebeb]">purified form</strong> of standard Briarstone — processed and refined to remove all Hexicule content. The result is a significantly <strong className="text-[#f2ebeb]">denser and more structurally stable</strong> material.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              Without the trace Hexicule interference, Condensed Briarstone does not glow — making it the preferred choice for <strong className="text-[#f2ebeb]">precision construction</strong> where predictability and uniformity matter more than aesthetics. It is commonly used in load-bearing walls, vaults, and reinforced infrastructure.
            </p>
          </div>

          {/* Karterstone */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Karterstone</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              A <strong className="text-[#f2ebeb]">silver-quartz-like stone</strong> that generates deep within cave systems. Karterstone has a remarkable natural camouflage — its surface texture and coloration shift subtly to blend with the surrounding cave environment, making it notoriously difficult to locate.
            </p>
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Uses</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">
              Karterstone is a staple of <strong className="text-[#f2ebeb]">industrial applications</strong>, valued for its density, tensile strength, and resistance to heat. It is commonly used in machinery housings, industrial press plates, and heavy-duty manufacturing tools.
            </p>
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] italic">
                🔍 Mining guilds have developed specialized detection equipment over the years to locate Karterstone deposits — relying on subtle shifts in light refraction rather than direct sight.
              </p>
            </blockquote>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── MINERALS ── */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-8">Minerals</h2>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Hitryphls</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Hitryphls are <strong className="text-[#f2ebeb]">pollen-enhancing particles</strong> derived from <strong className="text-[#f2ebeb]">Bluebloom Flowers</strong> — classified as a mineral due to the crystalline structure they develop after the pollen undergoes a natural mineralization process over time.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              They serve primarily as a <strong className="text-[#f2ebeb]">herbal mineral supplement for Magic Users</strong>, enhancing the body&apos;s ability to channel and refine magical energy. Practitioners often grind Hitryphls into powders or steep them in tinctures for use during extended magical exertion or recovery.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              While their origins are botanical, their mineral classification is widely accepted in Hetran scientific communities — Hitryphls represent a rare case of <strong className="text-[#f2ebeb]">organic-to-mineral transition</strong> that researchers continue to study.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── ORES ── */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-8">Ores</h2>

          {/* Magnophyte */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Magnophyte</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Magnophyte is a <strong className="text-[#f2ebeb]">meteoric ore</strong> — debris from a large meteor that struck Hetra in the distant past, scattering fragments across the planet&apos;s surface. Some deposits remain accessible to this day, while others have been gradually absorbed into the planet through erosion and geological pressure over millennia.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Appearance</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Magnophyte has a distinctly alien shape: an <strong className="text-[#f2ebeb]">oddly structured hexagonal cube</strong>, unlike any naturally occurring Hetran ore. The geometry is a relic of its extraterrestrial origin — believed to be the result of crystallization under the vacuum pressures of deep space.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Uses</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Due to its alien composition, Magnophyte reacts differently to heat and pressure than native Hetran materials. It is currently being studied as a potential <strong className="text-[#f2ebeb]">alloy component</strong> for next-generation tools and structural materials — though reliable deposits are becoming increasingly rare.
            </p>
          </div>

          {/* Anzeyanax */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Anzeyanax</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Anzeyanax is an ore <strong className="text-[#f2ebeb]">originating from Anzeya</strong>, Hetra&apos;s moon — arriving on the planet through natural lunar debris falls over long periods of time.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Appearance</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              The ore emits a <strong className="text-[#f2ebeb]">bright green glow</strong> that has baffled scientists across Hetra for generations. No satisfactory explanation for its luminosity has been established — leading to both serious scientific inquiry and considerable folklore surrounding the ore&apos;s origins and purpose.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Current Status</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">
              The most prominent known specimen of Anzeyanax is displayed in <strong className="text-[#f2ebeb]">Ironbark&apos;s Central Museum</strong>, where it draws significant public curiosity. Whether additional deposits exist on the surface of Anzeya itself remains an open question — one that space research programs have begun to take seriously.
            </p>

            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
                🌕 Some local legends claim the green glow is a signal — that Anzeya is &quot;calling back&quot; its lost pieces. Scientists, naturally, disagree. But they haven&apos;t been able to prove otherwise.
              </p>
            </blockquote>
          </div>
        </section>


        <div className="border-t border-[#1e1c1a]" />

        {/* ── TYPES OF WOOD ── */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-8">Types of Wood</h2>

          {/* Norrane Hardwood Trees */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Norrane Hardwood Trees</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Norrane Hardwood Trees are a species of tree <strong className="text-[#f2ebeb]">native to the continent of Norrane</strong>, known predominantly for their exceptional durability and density. The wood of these trees is remarkably resistant &mdash; famously, even the powerful Witch <strong className="text-[#f2ebeb]">Elena</strong> was unable to cut or repair the Tree of Elenia due to how hard its hardwood was.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">
              Norrane Hardwood Trees grow in large numbers across Norrane and serve as one of the continent&apos;s most valuable natural resources. They are a defining feature of the continent&apos;s landscape and economy.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Notable Uses</h4>
            <ul className="space-y-2 mb-5">
              {[
                "As a raw structural material, Norrane Hardwood appears as one of the three core components of the Oakgnar Grand Tree — alongside a Hexicule Core and Stonewood.",
                "When combined with Lyecerium crystals, Norrane Hardwood Trees can be processed into Hardwood-Lucid Metal — an engineered alloy that is as hard as diamond and as dense as tungsten.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-[3px]">—</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] italic">
                The <strong className="text-[#c8c2ba]">Tree of Elenia</strong> is the most famous individual specimen of a Norrane Hardwood Tree, distinguished by its magical orb and sentient nature &mdash; a trait no other Norrane Hardwood Tree possesses.
              </p>
            </blockquote>
          </div>

          {/* Hardwood-Lucid Metal */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-6">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Hardwood-Lucid Metal</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">
              Hardwood-Lucid Metal (also called <strong className="text-[#f2ebeb]">Hardwood Lucid Metal</strong>) is an <strong className="text-[#f2ebeb]">engineered alloy</strong> created by combining <strong className="text-[#f2ebeb]">Norrane Hardwood Trees</strong> with <strong className="text-[#f2ebeb]">Lyecerium crystals</strong>. It was first discovered and developed during <strong className="text-[#f2ebeb]">The Great Technological Era of 1565 AD</strong>, and quickly became one of Hetra&apos;s most sought-after industrial materials.
            </p>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Properties</h4>
            <ul className="space-y-2 mb-5">
              {[
                "Hardness comparable to diamond",
                "Density comparable to tungsten",
                "Non-corrosive — does not rust",
                "Completely waterproof",
                "Classed as a wood-type metal, found sourced from Norrane's cave systems",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-[3px]">—</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Known Applications</h4>
            <ul className="space-y-2">
              {[
                "The structural frame of The Skypeak Obelisk in Grelladore, Nharvenile — described as indestructible",
                "The UOTA magnetic suspension rails that run along the ocean floor, powering the hover mechanics of the Underwater Ocean Train Aquasubs",
                "Widely used in metal buildings across Hetra's modern infrastructure since the Technomagical Era",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-[3px]">—</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Stonewood */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Stonewood</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A type of petrified wood native to Rynel itself. Unlike actual petrified wood, Stonewood is very hard, but at the right given circumstances, it can become flexible but also soft &mdash; due to the properties of Lyecerium and Hetranium crystals combined. This type of stonewood doesn&apos;t break as easily. Often used in construction applications.
            </p>
          </div>
        </section>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/databases" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
            </div>
          </Link>
                  <Link to="/world/databases/MagicDatabase" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">Magic Database</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

      </div>
    </div>
  );
}
