import { Link } from 'react-router-dom';

export default function TheSylphrelm() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
        <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
        {" / "}
        <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
        {" / "}
        <span className="text-[#c9a84c]">The Sylphrelm</span>
      </p>

      {/* Hero */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Sylphrelm</h1>
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-6">The Cloud Abode — The Second Realm of Hibrytheia</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Sylphrelm is a mystical realm on the northern outskirts of space, created by one of the Spirits of Creation, Nahfia, who was hand selected by Zohl and Vivianya. The realm itself is a very large, planetary-like body, home to many mystical beings — Sylphs, Air Spirits, Faes, and more.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          It is not round like Planet Hetra, doesn&apos;t spin on its axis, and doesn&apos;t revolve around a star. It is a flat, asteroid-like mass that has a top surface with a gravitational pull similar to that of Hetra, which keeps the citizens and cities from floating into space. Even though the gravity keeps everything at bay, there is a huge round bubble-like shield that envelops the entire mass, which helps give sunlight, air, and many other mystical properties.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Westward Province", desc: "In the North-Western Parts of the Space-Time Continuum." },
            { label: "Central Abode", desc: "Due North — the hub of the Rainbow Funnels and home of the Sylph Council." },
            { label: "Eastward Province", desc: "In the North-Eastern Parts of the Space-Time Continuum." },
          ].map((p) => (
            <div key={p.label} className="px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <p className="font-display text-base text-[#f2ebeb] mb-1">{p.label}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-4">
          Key Inspiration: Asgard (Marvel/Norse)
        </p>
      </div>

      {/* Sylph Massacre */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Sylph Massacre of 15 AD (Part 2)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This event is now immortalized as history. There is a memorial-like tablet on the Central Abode that details the full history of The Sylph Massacre from 15 AD, based on eyewitnesses, survivors, and victims. The saying goes: if you ever encounter an Elf or Elves, do not interact with them. That is the number one rule of the Sylphrelm.
        </p>
      </div>

      {/* Time */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Time — How Does It Work?</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Systematically and Astronomically, time on the Sylphrelm works in tandem with Hetra&apos;s Time System. The Sylphrelm operates on 32 hours a day, 444 days for one year, much like it is on Planet Hetra. This is all because of a special function: Hetra&apos;s second moon, Zenya.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
          Zenya works with the main moon it orbits, Anzeya, which controls the tides. While that happens, Zenya, the satellite moon, controls the time, day, and length of the year — 32 hours a day, with great daylight, less night hours, but a longer year of 444 days!
        </p>

        <div className="mt-6 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Rainbow Funnels</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As mystical as it is, there are natural portals that exist on Sylphrelm, known as ley-lines, which serve as transportation to Midtheltra and The Stygirelm via the Rainbow Funnel. These flows of ley-lines are in direct contact and paths with The Extreulux Realm (The Space-Time Continuum), which are controlled and used only by a Mystic Dryad, who have the ability to use these funnels.
          </p>
        </div>
      </div>

      {/* Sylphs */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Sylphs — What Are They?</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          They&apos;re High Air Fairies mixed with Dryads, Faes, and other wind-like spirits. Their ears are pointy and slanted backwards instead of pointing outwards like elves do, and their wings are semi-translucent. A lot of Sylphs have heterochromatic eyes that range from many different colors! However, there are rare cases where their eyes are the same color.
        </p>
      </div>

      {/* Sylph Magic */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Sylph Magic and Abilities — The Third Source of Magic</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
          Sylph Magic is a default magic power for Sylphs, as these are powers that all Sylphs have. Sylph Magic has two sets: Healing Magic and Tranquil Magic. This type of Magic comes from Nahfia, The Spirit of Sylphs.
        </p>

        <div className="space-y-6">
          {/* Physical */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Physical Abilities</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              All Sylphs have extraordinary speed and strength (it ranges), because that is where they prioritize their talents. When they fly, their flight speed is measured in BPS (Beats Per Seconds — Hummingbird Speed). Their speed can only go up to Mach 1-2 by limit, M5 if they undergo vigorous training. Their reflexes and reaction time are one of the fastest, outpacing a cat&apos;s and a fly&apos;s. They can also fly backwards and in diagonal directions when needed.
            </p>
          </div>

          {/* Vocal */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Vocal Abilities</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The vocal range for Sylphs is all over the place. It can be low or high depending on the context. These vocal abilities make their music and songs elegant and atmospheric since they carry weight, longevity, and sweetness. This is used in Fairy Lullaby.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              <span className="text-[#f2ebeb] font-display text-sm">Multi-Voice Harmony (MVH):</span> One voice can be split into multi-layers in one throat and track. This allows them to sing in different octaves while having one main voice act as the lead singer. A Sylph&apos;s voice and vocals are their main instruments and they take pride in it. Actions may speak louder than words, but words themselves are a magical source of knowledge.
            </p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-2">Fun Fact: A Sylph&apos;s voice can mimic instruments perfectly.</p>
          </div>

          {/* Healing Magic */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Healing Magic</h3>
            <ul className="space-y-2">
              {[
                { power: "Mystic Healing", desc: "Healing through the use of magical properties that come instantaneously." },
                { power: "Timed Healing", desc: "The power to heal someone using a duration of time. Can work even if the user deactivates the power." },
                { power: "User-Life Healing", desc: "This power allows the user to share their life force with someone in order to heal them. Useful for party traveling." },
                { power: "Alchemic Healing", desc: "Uses the surrounding nature to heal wounds and injuries." },
              ].map((item) => (
                <li key={item.power} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">›</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                    <span className="text-[#f2ebeb]">{item.power}</span> — {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tranquil Magic */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Tranquil Magic</h3>
            <ul className="space-y-2">
              {[
                { power: "Disable", desc: "A form of Tranquil Magic. This sub-power calms down one's heart rate and stuns them, disallowing them to move until the user deactivates this power. However, they can still perceive sounds and speak." },
                { power: "Fairy Lullaby", desc: "A soft, gentle hum that can put someone to sleep through a timed duration. The lullaby can be short or long." },
                { power: "Soothe Touch", desc: "The power to calm down a raging beast or person. This can also work if the user has a very fast heart rate." },
                { power: "Soothe Snap", desc: "The power to instantaneously put someone to sleep with the use of the snap, or render them unconscious." },
                { power: "Icy Breath", desc: "The power of coolness that spreads down on someone when their temperament feels warm or hot." },
              ].map((item) => (
                <li key={item.power} className="flex gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">›</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                    <span className="text-[#f2ebeb]">{item.power}</span> — {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* History */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">History</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The history behind the four Sylph races goes far back. The Southwing and Sunpike originate from the Cloud Abode, known as the Sylphrelm. However, two Sylphs from those factions decided to fly down onto the lands of Hetra and roam around, meeting different creatures, races, and humans. Along those travels, both the Sunpike and Southwing encountered land Sylphs, who call themselves Northtint and Greenpetal Sylphs. The Sunpike and Southwing introduced themselves to the Northtints and Greenpetals and they all got along naturally.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          When time passed, the Southwing and Sunpike agreed with the Northtints and Greenpetals to cross-breed races throughout time. When the rest of the Southwings and Sunpikes heard of this from above, they wanted to stop the cross-breeding, but failed. The leaders of both eventually agreed even though there were disagreements at the time.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          Throughout time, the leaders of the first four Sylph races arranged and founded the Sylph Council, which can be found on the Cloud Abode.
        </p>
      </div>

      {/* Sylph Lifeline */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Sylph Lifeline</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Sylph can live up to 600 years of age because time for them is slower. A fetus to a baby occurs very fast — this is because their cells materialize at a fast rate. This stops once the baby fully develops after three months.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
          After three months, <span className="text-[#f2ebeb]">Sylphanization I</span> occurs, where layers of undeveloped wings wrap around the baby and turn into a cocoon. Sylphanization I occurs for 10 years. The wings that Sylphs have are made of <span className="text-[#f2ebeb]">Sylphium-Fiber</span>, a special genetic material in all Sylphs&apos; wings. They feel like cardstock paper, light, and have a texture of leather. However, the downside to Sylphium-Fiber is that it is weak against water. Once the wings are drenched, they don&apos;t have the function to fly unless dry.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
          After Sylphanization I, the baby Sylph emerges as a child, who are called <span className="text-[#f2ebeb]">Sylphrey/Sylphries</span> — around the ages of 10-15, turning their lives toward education.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
          During the 16th stage, Sylphries go under one year of <span className="text-[#f2ebeb]">Sylphanization II</span>. This is an optional process that Sylphries get to choose: to be born with magic or not. After Sylphanization II, Sylphries become adults, starting at the age of 17+.
        </p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-3">
          Note: This lifeline process goes for all Sylph races, as it is a tradition for families.
        </p>
      </div>

      {/* Anatomy */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Anatomy of the Sylph Species</h2>

        {/* Ear image placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center mb-6">
          <p className="font-display text-sm text-[#4a4844]">[ Anatomy of the Sylph Ear Diagram — Author to add ]</p>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Sylph Ears</h3>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          At first glance, a Sylph&apos;s ear can look elf-like — but the structure is different. Instead of one clean taper, it forms two distinct hook-ended extensions called the <span className="text-[#f2ebeb]">Upper Lick</span> and <span className="text-[#f2ebeb]">Lower Lick</span>, both slanting downward near their tips. The ear still has a Main Ear Canal like a human&apos;s, but the overall shape is elongated upward and sits at a slightly angled tilt. All Sylphs can control their own hearing sense.
        </p>

        <div className="mt-6 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">⊰ Crebritas Euripus (Frequency Channel)</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Also known as the Frequency Channel, the Crebritas Euripus runs through the Upper Lick and Lower Lick. This channel helps Sylphs detect subtle frequencies and vibrations — sinewaves, heartbeats, air tremors, and other near-undetectable sounds — making their hearing extraordinarily sensitive, especially along the Upper Lick.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-xs text-[#4a4844] uppercase tracking-wider text-left py-3 pr-4">Feature</th>
                <th className="font-display text-xs text-[#4a4844] uppercase tracking-wider text-left py-3 pr-4">Sylph</th>
                <th className="font-display text-xs text-[#4a4844] uppercase tracking-wider text-left py-3">Elf</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e2b26]">
              {[
                { feature: "Overall silhouette", sylph: "Elongates upward, splits into Upper Lick and Lower Lick (two hook-ended extensions).", elf: "Tapers in a clean, outward point." },
                { feature: "Tip geometry", sylph: "Visible break in the outline where the two licks separate — a 'double-tip' feel.", elf: "One continuous edge to the tip." },
                { feature: "Sensitivity focus", sylph: "Specialized through Crebritas Euripus (Frequency Channel) running through both licks.", elf: "Standard fantasy-sharp hearing." },
              ].map((row) => (
                <tr key={row.feature}>
                  <td className="font-display text-sm text-[#f2ebeb] py-4 pr-4 align-top">{row.feature}</td>
                  <td className="font-body text-sm text-[#c8c2ba] leading-relaxed py-4 pr-4 align-top">{row.sylph}</td>
                  <td className="font-body text-sm text-[#c8c2ba] leading-relaxed py-4 align-top">{row.elf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-4">Wing Anatomy — Coming soon.</p>
      </div>

      {/* Sylph Races */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Sylph Races</h2>
        <div className="space-y-4">
          {[
            {
              name: "Southwing Sylphs",
              desc: "Southwing Sylphs are from the skies above, the Cloud Abode, along with Sunpikes. A Southwing's wings are made up of water particles combined with a thin mesh of webs and cotton. Southwing Sylphs can change the density of their wings if they want to fly on a lower elevation or on land. The water-like droplets that hang from the webs make a small jingle! There are three individual flutters on each side. The water weakness negates this, since Southwings are made out of water particles. However, they can still freeze if hit with ice — a counter weakness.",
            },
            {
              name: "Sunpike Sylphs",
              desc: "Sunpike Sylphs are from the skies above, the Cloud Abode, along with the others. A Sunpike's wings contrast against the sun as ice-like slates similar to that of a moth's wings. They are semi-transparent and they have rays coming out like quills. Their wings actually have a double weakness — not just water, but also ice and snow. Because of their ice-like properties, when it sticks, it forms more layers which causes their flying to slow down. This is why they often make their wings disappear when it rains or snows. Two individual flutters on each side.",
            },
            {
              name: "Northtint Sylphs",
              desc: "Northtint Sylphs are mountain-based Sylphs found on every mountain-like location. They can survive with little or more oxygen level because of the elevations they live on. Their wing structures have adapted to a mountain-like feature and feel like a thin layer of cut stone. Their wings are also semi-transparent, but on each top of their wings, there is a thin layer of quartz on each of those three individual flutters. When exposed to water, it becomes brittle. But they will heal in no time, with gravel and heat. Four individual flutters on each side (eight total).",
            },
            {
              name: "Greenpetal Sylphs",
              desc: "Greenpetal Sylphs have a high affection for flowers, which can be found everywhere. More specifically, Greenpetals can be found in the Oelen Kingdom, in Eulerich. A Greenpetal's wings are flower-like patterned wings, specifically from petals shaped like a flat funnel, but bigger in shape. Despite these wings not being translucent, it gives them a huge advantage — they can blend into their surroundings because their wings almost look like flowers. Three individual flutters on each side (six total).",
            },
            {
              name: "Highland Sylph",
              desc: "Not much is known about this rare race and lineage. No one knows how it started and came to be. Because of this uniqueness, the other four races tend to talk back and criticize those who came from this line. Remains a mystery. The wings have three flutters on each side. The bottom two flutters on each side are super sharp at the tips. The top flutter, single on each side, has three points — white with a bone-like feel, with blue-wing mesh connecting them like frog feet (but for wings). Middle flutters pierce outwards with blue-like mesh. Bottom flutters pierce downward at an angle.",
            },
          ].map((race) => (
            <div key={race.name} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">⊰ {race.name}</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{race.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Other Species</h3>
          <ul className="space-y-2">
            {[
              { name: "Mystic Dryads", desc: "Mystic Dryads are beings that both live in the Cloud Abode and on Hetra." },
              { name: "Fae", desc: "Fairies of the Wind and Air. They are small in size, but they pack a punch! They include Pixies, Genies, and Familias." },
              { name: "Flimpies", desc: "These creatures are present here in the Sylphrelm!" },
            ].map((s) => (
              <li key={s.name} className="flex gap-3">
                <span className="text-[#c9a84c] mt-1 flex-shrink-0">›</span>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  <span className="text-[#f2ebeb]">{s.name}</span> — {s.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sylph Council */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Sylph Council</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
          The Sylph Council is made up of five leaders — technically four, because four are present and one is MIA.
        </p>
        <div className="space-y-3">
          {[
            { faction: "Southwings", leader: "Aloe Frey", details: "122, Female" },
            { faction: "Sunpikes", leader: "Aerial Summers", details: "204, Male" },
            { faction: "Northtints", leader: "Aurous Winters", details: "213, Male" },
            { faction: "Greenpetals", leader: "Autumn Gray", details: "150, Female" },
          ].map((c, i) => (
            <div key={c.faction} className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <span className="font-display text-xs text-[#4a4844] w-5">{i + 1}.</span>
              <div className="flex-1">
                <p className="font-display text-sm text-[#f2ebeb]">{c.faction}</p>
                <p className="font-body text-sm text-[#c8c2ba]">{c.leader}</p>
              </div>
              <p className="font-body text-sm text-[#7a746e]">{c.details}</p>
            </div>
          ))}
          <div className="px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] opacity-60">
            <p className="font-display text-sm text-[#f2ebeb]">Highlands — Leader Unknown</p>
            <p className="font-body text-sm text-[#7a746e] mt-1">The leader to the Highlands has never shown up to the founding of the Sylph Council. She is currently MIA and is nowhere to be found.</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia/divine-realm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Divine Realm</p>
          </div>
        </Link>
        <Link
          to="/world/meta/TheSigilOfHibrythia/stygian-realm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Stygian Realm</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
