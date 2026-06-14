import { Link } from "react-router-dom";

const hetraTimeline = [
  { era: "D.C.E (Divine Creation Era)", range: "~-40,539 DCE onward", layer: "ATEL", desc: "Planet Hetra in formation and cooldown. No life yet." },
  { era: "O.D (Oldendaye)", range: "~-10,000 OD \u2192 -1 OD", layer: "ATEL", desc: "Greungerian Era. The Five Giants. Early life. Continental splits." },
  { era: "Year 0", range: "0 OD", layer: "The Suppressor", desc: "The influx boundary. ATE and MTE are held apart here." },
  { era: "A.D (Aftendaye)", range: "1 AD \u2192 2245 AD (present)", layer: "MTEL", desc: "Modern civilization. Current Hetra. Where residents live." },
];

const comparisonTable = [
  { condition: "Without TTSD", result: "Outsider lands in the past (ATEL layer)" },
  { condition: "With TTSD", result: "Outsider lands in the present (MTEL, Year 2245 for Planet Hetra)" },
];

const quickRef = [
  { term: "ATEL", def: "Ancient Temporal Energy \u2014 pre-Year 1 AD, sealed past layer" },
  { term: "MTEL", def: "Modern Temporal Energy \u2014 Year 1 AD to 2245+, living present" },
  { term: "Year 0", def: "The Suppressor \u2014 boundary and conversion point between ATE and MTE" },
  { term: "TTSD", def: "Technology that converts ATE \u2192 MTE alignment for Outsiders" },
  { term: "Temporal Separation", def: "The law that keeps past (ATE) actions from affecting the present (MTE)" },
];

export default function TemporalTimeStreamDilation() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <nav className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] flex gap-2 items-center flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Worldbuilding</Link>
        <span className="text-[#2e2b26]">/</span>
        <span className="text-[#7a746e]">Temporal Time Stream Dilation</span>
      </nav>

      {/* Gold rule */}

      {/* Header */}
      <div className="space-y-3">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">I. The Cosmic Foundation</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb]">&#128336; Temporal Time Stream Dilation | TTSD</h1>
        <p className="font-body text-sm text-[#7a746e]">A Mechanic for Temporal Displacement</p>
      </div>

      {/* Intro quote */}
      <blockquote className="border-l-2 border-[#c9a84c] pl-5">
        <p className="font-body text-base text-[#c9a84c] italic">This is not Time Travel. This is Time Dilation.</p>
      </blockquote>

      {/* Narrator intro */}
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
        Hello there Outlander from afar. My name is Aeonia, The Spirit of Time, and I&apos;m here to guide you into the vast lore of the Temporal Time Stream Dilation System. Buckle up and get ready for a wild ride!
      </p>

      {/* Core Premise */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Core Premise</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Temporal Time Stream Dilation</h2>

        <blockquote className="border-l-2 border-[#2e2b26] pl-5 my-4">
          <p className="font-body text-sm text-[#c8c2ba] italic">If you travel at light speed, you experience time slower. And if you&apos;re an Alien traveling to Earth, you&apos;ll be seeing the past. The age of either the Dinosaurs or early proto-life.</p>
        </blockquote>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Every planet emits a natural, invisible aura called <span className="text-[#f2ebeb] font-medium">Temporal Energy.</span> To the people living on that planet, it is completely unnoticeable &mdash; they exist in their present as normal. But to <span className="text-[#f2ebeb] font-medium">Outsiders</span> approaching from space, this energy causes them to perceive and <em>physically experience</em> the planet in a past era rather than the current year.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          TTSD is the technology that bridges this gap &mdash; aligning Outsiders to the planet&apos;s present temporal layer without altering history, breaking causality, or constituting time travel. There are two types of Temporal Energy Layers.
        </p>
      </section>

      {/* Year 0 */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">The Suppressor</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Year 0</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          As referenced in our Calendar Time System &mdash; The 32/16 Hour System, Year 0 exists in this world for The Hibrythian Saga! It&apos;s not just a number as this year serves as a pivotal role in the current Hetranian Calendar System and within the Mechanics of Time.
        </p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          {[
            "Sits at the boundary between ATE and MTE",
            "Not a date. Not a reset. An active suppressor.",
            "Its primary function: keep ATE and MTE permanently separated",
            "Also acts as the influx point \u2014 the conversion gate where Ancient Temporal Energy is processed into Modern Temporal Energy for TTSD use",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ATEL */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Energy Layer</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Ancient Temporal Energy (ATEL)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          ATEL, also known as Ancient Temporal Energy Layer (or just ATE), is a natural old energy radiating from a planet. This type of energy is only confined to the ancient eras of a planet that goes through time naturally. Like the age of the continents, the age of the dinosaurs&hellip;and more.
        </p>
        <p className="font-body text-sm text-[#7a746e] mb-2">This Energy does many of the following:</p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          {[
            "Covers everything before Year 1 AD",
            "What Outsiders encounter without TTSD",
            "Landing on Hetra unshielded = arriving in the pre-Greungerian era",
            "Actions taken within ATE stay in ATE \u2014 no effect on the present whatsoever",
            "The past is fully sealed and sandboxed \u2014 this is called Temporal Separation",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MTEL */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Energy Layer</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Modern Temporal Energy (MTEL)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          MTEL, also known as Modern Temporal Energy Layer (or just MTE), is a natural modern energy radiating from a planet. This type of energy is only confined to the modern eras of a planet that goes through time naturally. Think of it like the future. Or any time period after Year 0.
        </p>
        <p className="font-body text-sm text-[#7a746e] mb-2">This Energy does many of the following:</p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          {[
            "The living flow of Planet Hetra\u2019s time or for any other planet.",
            "Covers Year 1 AD \u2192 Year 2245+",
            "What all residents naturally exist within",
            "TTSD aligns Outsiders to MTE so they land in the present",
            "Because MTE is a continuous, active flow \u2014 movement within MTE is possible",
            "This is how in-universe time travel functions: navigating along the MTE current to any year between Year 1 AD and 2245 for Planet Hetra.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">The Technology</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">TTSD &mdash; How It Works</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Temporal Time Stream Dilation is a type of technology that is used for FTL and Hyperdrive Travels in space. There are many alien worlds within The Hibrythian Saga aside from The Stygian Realm and The Sylphrelm. Uncharted Territory? Adventure Time!
        </p>
        <div className="space-y-2">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">What it&apos;s used in and for:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
            {[
              "Technology installed on ships and vessels",
              "Reads and processes Ancient Temporal Energy through the Year 0 influx point",
              "Converts it into Modern Temporal Energy",
              "Result: the ship and its crew are aligned to the planet\u2019s present year (2245 or any)",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
          <div className="grid grid-cols-2 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2.5">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Condition</p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Result</p>
          </div>
          {comparisonTable.map((row, i) => (
            <div key={i} className="grid grid-cols-2 px-4 py-3 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors">
              <p className="font-body text-sm text-[#f2ebeb]">{row.condition}</p>
              <p className="font-body text-sm text-[#c8c2ba]">{row.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TTSD x Planet Hetra */}
      <section className="space-y-8">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">TTSD x Planet Hetra</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Planet Hetra &mdash; The Primary Subject</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Planet Hetra is the <span className="text-[#f2ebeb] font-medium">primary subject</span> of this system and the most studied case of Ancient Temporal Energy in the known universe. What Outsiders perceive without TTSD, and what residents of 2245 actually live in, are two entirely different temporal layers &mdash; separated by millennia of Hetranian history.
        </p>

        {/* Without TTSD */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb]">What Outsiders See Without TTSD</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            An Outsider approaching Hetra without TTSD active will be absorbed into the planet&apos;s <span className="text-[#f2ebeb] font-medium">Ancient Temporal Energy (ATEL)</span> field. What they perceive and physically encounter is not the Hetra of 2245 &mdash; it is the Hetra of the <span className="text-[#f2ebeb] font-medium">Greungerian Era</span>, the age before the continental split.
          </p>
          <p className="font-body text-sm text-[#7a746e]">This means:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
            {[
              "The Father Continent, Greungeria, still intact and whole \u2014 one massive landmass dominating the planet\u2019s surface",
              "Prehistoric wildlife: direosaurus wolves, ancient dragons, dinosaurs, and beasts of Zohl\u2019s early creation",
              "The Five Giants may still walk this land: Vivianya, Yeulversi, Balkohv, Grenhcius, and Escaelui",
              "No modern cities. No Walled City-States. No Skypeak Obelisk.",
              "No humans or nhuemyns yet \u2014 or only the earliest arrivals around 3.5 Oldendaye",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#4a4844] italic">This is the ATE default. Ancient. Sealed. Untouchable.</p>
        </div>

        {/* Timeline table */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb]">Hetra&apos;s Temporal Timeline &mdash; ATEL vs MTEL Mapped</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Hetra&apos;s full timeline places the ATE and MTE divide in context:</p>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
            <div className="grid grid-cols-4 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2.5">
              {["Era", "Range", "Energy Layer", "What It Represents"].map((h, i) => (
                <p key={i} className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">{h}</p>
              ))}
            </div>
            {hetraTimeline.map((row, i) => (
              <div key={i} className="grid grid-cols-4 px-4 py-3 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors gap-2">
                <p className="font-body text-sm text-[#f2ebeb]">{row.era}</p>
                <p className="font-body text-sm text-[#c8c2ba]">{row.range}</p>
                <p className="font-body text-sm text-[#c9a84c]">{row.layer}</p>
                <p className="font-body text-sm text-[#7a746e]">{row.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1.5 pl-2">
            {[
              { abbr: "D.C.E", full: "Divine Creation Era \u2014 the formation age, long before life" },
              { abbr: "O.D", full: "Oldendaye \u2014 the ancient era, the age Outsiders fall into without TTSD" },
              { abbr: "A.D", full: "Aftendaye \u2014 the modern era, what TTSD aligns you to" },
            ].map((item, i) => (
              <p key={i} className="font-body text-xs text-[#7a746e]">
                <span className="text-[#c8c2ba] font-medium">{item.abbr}</span> = <em>{item.full}</em>
              </p>
            ))}
          </div>
        </div>

        {/* Year 0 in History */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb]">Year 0 in Hetranian History</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Year 0 is not just a temporal mechanic &mdash; it exists as a <span className="text-[#f2ebeb] font-medium">recognized marker in Hetra&apos;s own calendar system.</span> The 32/16 Hour Time System and the Hetranian Calendar both acknowledge Year 0 as the fixed point between Oldendaye and Aftendaye.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            In TTSD terms, Year 0 is the <span className="text-[#f2ebeb] font-medium">Suppressor</span> &mdash; the influx point where Ancient Temporal Energy is converted into Modern Temporal Energy. In calendar terms, it is the breath between two eras. Both definitions are correct. Both describe the same cosmic reality from different angles.
          </p>
          <blockquote className="border-l-2 border-[#c9a84c] pl-5">
            <p className="font-body text-sm text-[#c9a84c] italic">Year 0 is not a reset. It is the line the universe drew between what was and what is.</p>
          </blockquote>
        </div>

        {/* Ancient Greungeria — ATEL Default */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb]">Ancient Greungeria &mdash; The ATEL Default State</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            For any Outsider without TTSD arriving at Hetra, <span className="text-[#f2ebeb] font-medium">Ancient Greungeria is what they land in.</span> This is the age the planet&apos;s ATE preserves and projects.
          </p>
          <p className="font-body text-xs text-[#7a746e] uppercase tracking-widest">Key features of the ATEL-locked Greungerian Hetra:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
            {[
              "The Father Continent \u2014 before the asteroid of ~600 OD split the north pole into the Alarctic Alpines, and before two meteors fragmented the rest into the modern continents",
              "A world governed by Zohl\u2019s early creation work, including the Divine Runic Spell that maintains Hetra\u2019s perfect spheroid shape.",
              "The age of ancient wildlife and the Five Giants who governed the five schools of magic",
              "Pre-Hetranian Calendar \u2014 the calendar was not implemented until 2 AD. There are no months, no weeks, no named days in this temporal layer",
              "Ghrenglish is the spoken language here \u2014 not Modern Hetranian English, which didn\u2019t take hold until 1568 Aftendaye",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#4a4844] italic">Actions taken within this ATE layer &mdash; observing, exploring, or interacting &mdash; remain sealed in the past by Temporal Separation. No consequence reaches 2245.</p>
        </div>

        {/* What TTSD Aligns You To */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb]">What TTSD Aligns You To &mdash; Modern Hetra (2245 AD)</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            With TTSD active, an Outsider is brought into alignment with the <span className="text-[#f2ebeb] font-medium">current MTE layer</span> &mdash; the Hetra of 2245 Aftendaye:
          </p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
            {[
              "Population: 12.959 Billion people across multiple continents",
              "Continents: Fully fragmented from ancient Greungeria \u2014 Eulerich, Norrane, Rynel, Hetrania, Lynneria, Varleqe, and the Alarctic Alpines",
              "Technology and Magic coexist \u2014 walled city-states, androids, cyborgs, advanced infrastructure",
              "Universal Celestial Clock (UCC) time zones span UCC +12 to UCC -12, with Hetra running on a 32-hour day, 444-day year cycle governed by its two moons: Anzeya and Zenya",
              "The Hetranian Calendar is fully active, with 14 months \u2014 the first five named after The Five Giants themselves, and the remaining eight months after their pets.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Quick Reference</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Terminology</h2>
        <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
          <div className="grid grid-cols-2 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2.5">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Term</p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Definition</p>
          </div>
          {quickRef.map((row, i) => (
            <div key={i} className="grid grid-cols-2 px-4 py-3 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors gap-4">
              <p className="font-body text-sm text-[#c9a84c] font-medium">{row.term}</p>
              <p className="font-body text-sm text-[#c8c2ba]">{row.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <div className="space-y-2 pt-4">
        <p className="font-body text-sm text-[#7a746e] italic">This is the present. This is where the story lives.</p>
        <p className="font-body text-sm text-[#c9a84c]">Welcome Aboard.</p>
      </div>

      <div className="w-full h-px bg-[#c9a84c]/20" aria-hidden="true" />

      {/* Bottom nav */}
      <div className="flex flex-wrap gap-4 items-center justify-between pt-2">
        <Link
          to="/world/databases"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to World Databases
        </Link>
      </div>

    </div>
  );
}
