import { Link } from "react-router-dom";

export default function TheVarleqianWaterfall() {
  return (
    <div className="min-h-screen bg-[#100908] py-16">
      <div className="max-w-[960px] mx-auto px-6">

        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
          The Hibrythian Saga &nbsp;/&nbsp; Locales &amp; Sights &nbsp;/&nbsp; The Varleqian Waterfall
        </p>

        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Seven Wonders of the World
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Varleqian Waterfall
        </h1>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Varleqian Waterfall — Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
          One of the Seven Wonders of The World. A waterfall that stands so high, the water that falls glows a very fluorescent blue color,
          due to different layers of atmospheric pressure. It stands on the highest peak of the middle point mountain and falls down to base.
          It&apos;s located in the northern mountains north of Oldtree Cemetery.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          At a whopping height of 3,833 meters (12,578 feet) tall, it is the highest earth-made structure in the entire world.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Luminescent Phenomenon</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The Varleqian Waterfall&apos;s signature blue glow isn&apos;t just beautiful &mdash; it&apos;s a natural wonder born from extreme altitude.
            As water cascades from the mountain&apos;s peak through multiple atmospheric pressure layers, the droplets refract light in ways
            seen nowhere else on the planet. The glow intensifies at dusk and dawn, creating an ethereal spectacle that can be seen
            for miles across the northern landscape.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Scientists and mages alike have studied this phenomenon for centuries. The leading theory suggests that the unique mineral
            composition of the mountain peak, combined with the sheer height and velocity of the falling water, creates a bio-luminescent
            reaction in the mist. Some local legends claim the glow is actually the tears of an ancient sky deity, forever mourning a lost love.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">A Pilgrimage Site</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Despite Varleqe&apos;s reputation as a dangerous, beast-inhabited continent, the Varleqian Waterfall draws pilgrims and adventurers
            from across the world. It&apos;s considered sacred by several religious orders, who believe bathing in the mist at the waterfall&apos;s
            base grants visions of the future or cleanses the soul of past sins. The journey to reach it, however, is treacherous.
            Travelers must pass through Oldtree Cemetery and venture deep into the northern mountains, where direwolves, demons, and
            other dangerous beasts roam freely. Only the most prepared expeditions survive the trek.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Basin &amp; Ecosystem</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            At the waterfall&apos;s base lies the Varleqian Basin, a massive crystalline pool that stretches for nearly half a mile in diameter.
            The water here is so pure that it&apos;s said to have healing properties &mdash; wounds mend faster, illnesses fade, and exhaustion
            melts away. The basin feeds into an underground river system that eventually connects to the Gulf of Varleqe.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The surrounding ecosystem thrives in the perpetual mist. Rare Lumimoss grows on the rocks, glowing faintly in harmony
            with the waterfall. Deeragons, ethereal creatures with translucent antlers, are often spotted drinking from the basin at dawn.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Historical Significance</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The waterfall was first documented by the ancient Varleqian civilization over 3,000 years ago. Ruins near the peak suggest
            there was once a temple complex dedicated to water deities, though much of it has crumbled into the abyss. Archaeologists
            have recovered artifacts indicating that the site was used for coronation ceremonies &mdash; new kings would climb to the peak
            and return transformed by their journey.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            During the Great Migration, when humans began fleeing Varleqe due to increasing beast populations, the waterfall became
            a symbol of what was lost &mdash; natural beauty and wonder abandoned to the wild.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Climb to the Peak</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Few have successfully climbed to the waterfall&apos;s source at the mountain peak. The ascent takes approximately three days
            for experienced climbers, and the air becomes dangerously thin near the summit. Those who&apos;ve reached the top describe
            a surreal landscape: ancient stone pillars arranged in geometric patterns, frozen even in summer, and a massive spring
            that seems to well up from the heart of the mountain itself.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Legend speaks of a hidden chamber behind the waterfall&apos;s source, accessible only to those deemed worthy by the mountain.
            What lies within remains a mystery &mdash; no expedition has ever confirmed its existence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Dangers &amp; Warnings</h2>
          <div className="space-y-3">
            {[
              { label: "Atmospheric Shifts", desc: "The extreme altitude can cause sudden weather changes. Blizzards can form within minutes, even in summer months." },
              { label: "Beast Territory", desc: "The northern mountains are home to Wulfwing Direwolf packs, particularly aggressive during mating season (late autumn)." },
              { label: "The Undertow", desc: "Despite the basin's beauty, swimming is extremely dangerous. The underground currents have claimed countless lives, dragging victims into the subterranean river system with no hope of escape." },
              { label: "Altitude Sickness", desc: "The peak's elevation causes severe altitude sickness in unprepared travelers. Proper acclimatization is essential." }
            ].map((danger) => (
              <div key={danger.label} className="p-4 border border-[#2e2b26] bg-[#0f0d0c] rounded-sm">
                <p className="font-display text-base text-[#f2ebeb] mb-1">{danger.label}</p>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{danger.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Cultural Impact</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The Varleqian Waterfall appears in countless works of art, literature, and music across the world. It&apos;s a symbol of
            unattainable beauty, the price of wonder, and nature&apos;s raw power. Several famous paintings depict the waterfall at
            different times of day, capturing the shifting hues of its luminescent cascade.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In Greenlux Town, the remaining residents celebrate the Festival of Falling Stars each year, where they light blue lanterns
            and float them on the rivers that flow from the waterfall, honoring both the landmark and their ancestors who once thrived
            on this continent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Connection to the Seven Wonders</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            As one of the Seven Wonders of the World, the Varleqian Waterfall represents the element of water and the concept of
            &ldquo;Eternal Flow&rdquo; &mdash; the idea that life, like water, constantly moves and transforms. The other six wonders are scattered
            across different continents, each representing fundamental aspects of existence.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Scholars debate whether the waterfall&apos;s placement as a Wonder is purely for its physical grandeur, or if there&apos;s a deeper,
            magical significance connected to the ancient world&apos;s power structure.
          </p>
        </section>

        <div className="w-full h-px bg-[#c9a84c]/30 my-12" />

        <div className="flex items-start justify-between">
          <Link to="/world/locales" className="group block p-4 border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm transition-all duration-200 max-w-[220px]">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1 group-hover:text-[#c9a84c]/60 transition-colors">&larr; Back</p>
            <p className="font-display text-base text-[#f2ebeb]">Locales &amp; Sights</p>
          </Link>
          <Link to="/world/locales/lost-city-lhavaria" className="group block p-4 border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm transition-all duration-200 max-w-[220px] text-right">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1 group-hover:text-[#c9a84c]/60 transition-colors">Next &rarr;</p>
            <p className="font-display text-base text-[#f2ebeb]">The Lost City of Lhavaria</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
