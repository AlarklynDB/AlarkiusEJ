import { Link } from 'react-router-dom';

export default function DemonCreatures() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Demon Creatures</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-2xl md:text-3xl text-[#f2ebeb] mb-6">Demon Creatures</h1>

      <div className="space-y-12">

        {/* Intro */}
        <section>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            This world only has a few selection of Demon Creatures that have been brought into this world by The Demon Grandfather, Khalfvyskov. He has bought a total of 10 types of creatures into this world each with their own unique identifier. These demons were created to life in the year of 55 AD, and they age at the same rate, with their age measured in days. The Demon Race in this world isn't really frowned upon. Other cultures view them with respectful autonomy because they're not demonic or fully evil.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            They're beautiful creatures that have the ability to understand others even past those surface-level rumors and stereotypes.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Demon Beings */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">The Ten Types</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Demon Beings</h2>
          <div className="space-y-5">

            {[
              {
                name: 'Khnavkiers',
                desc: "A direct demon-descendant from Khalfvyskov himself. They look like a combination of minotaurs, onis, and chimeras. As the closest living relatives to the Demon Grandfather's bloodline, Khnavkiers are among the most commanding of all demon-kind. Their composite form carries the horned bulk of a minotaur, the fierce and fearsome spirit of an oni, and the chimeric unpredictability of a creature that refuses to be defined by a single nature. They are rare, and their presence alone demands acknowledgment.",
              },
              {
                name: 'Lesser Demon Witches / Demon Witches',
                note: 'different than Mages and Witches',
                desc: "Among the creatures, comes Lesser Demon Witches. They all come in different appearances, but that's their main form. They can fully evolve into a full demon witch through countless bloodshed. This evolution is not a gift — it is earned through survival and the slow accumulation of power that only comes from enduring the worst the world can offer. What they look like before that evolution varies wildly; no two Lesser Witches share the same face or form.",
              },
              {
                name: 'Devil/Demon Angels — Fallen Angels',
                desc: "Once beings of a higher order, Fallen Angels occupy a strange and sorrowful place within demon-kind. They retain the wings and luminous structure of their former selves, but the light that once defined them has been replaced by something darker and more volatile. They are not fully demon in the traditional sense — their origin sets them apart — yet they fall under Khalfvyskov's domain all the same. Among all demon beings, Fallen Angels are perhaps the most conflicted, carrying the memory of what they were alongside the reality of what they have become.",
              },
              {
                name: 'Demon Ogres',
                desc: "Large, brutish, and deceptively durable, Demon Ogres are a heavy-bodied class of demon-kind known for their physical endurance above all else. Unlike more magically inclined demon subraces, Demon Ogres lead with sheer force and resilience. Their size puts them well above most creatures in a confrontation, and their demon lineage — Black Blood Cells, Demon Core Cells and all — makes them far more dangerous than a surface read would suggest.",
              },
              {
                name: 'Gorgons',
                desc: "Gorgons are demon beings defined by their petrifying presence — not always literally, but the effect they have on those who encounter them is rarely comfortable. Serpentine features, an unsettling gaze, and a commanding stillness mark the Gorgon as one of the more ancient and eerie presences within demon-kind. Their connection to Khalfvyskov's original ten types is well-established, and their reputation, however distorted by myth, has spread far beyond the demon communities that know them best.",
              },
              {
                name: 'Imps',
                desc: "Small, quick, and mischievous by nature, Imps are the most numerous and arguably the most underestimated of demon-kind. What they lack in raw power, they compensate for in cunning, agility, and an uncanny ability to appear exactly where they are least wanted. Despite their diminutive stature, Imps carry the same Demon Core Cell biology as every other member of Khalfvyskov's lineage — meaning that once Demonization occurs at age 23, an Imp is nothing to take lightly.",
              },
              {
                name: 'Djinns',
                desc: "Djinns are among the most arcane of demon beings — creatures of will, bound to no single form and no single place. Their power is tied to intent, and their presence in any space tends to shift the atmosphere in ways that are difficult to articulate. Whether that shift registers as warmth or unease depends entirely on the Djinn in question. They are ancient in manner, deliberate in action, and deeply aware of the weight their kind carries in the cultural imagination of Hetra.",
              },
              {
                name: 'Demon Mages / Witches',
                note: 'Lesser, Half, Demi kinds of Demon Mages',
                desc: "Demon Mages and Witches represent the scholarly and magical spine of demon-kind. Where other subraces lead with physicality, Demon Mages lead with knowledge — deep, studied, and often inherited through bloodline as much as it is learned. They come in three recognized sub-classifications: Lesser, Half, and Demi kinds, each distinguished by the concentration of demon lineage in their blood and the ceiling of power available to them. A Demi-class Demon Mage, at full development, is considered among the most formidable magic-users in the known world.",
              },
              {
                name: 'Tainted Serpents',
                desc: "Tainted Serpents are large, venomous, and deeply unsettling — serpentine beings whose demon corruption has pushed them well beyond the natural scope of any ordinary beast. Their scales carry a dark, iridescent quality, and the venom they produce is not merely physical in its effects. They are territorial and precise, preferring patience over aggression, and that patience is as much a weapon as anything they carry physically.",
              },
              {
                name: 'Devil Snakes',
                desc: "Distinct from Tainted Serpents in origin and temperament, Devil Snakes are a sleeker and more aggressive class of demon serpent. Where Tainted Serpents are methodical, Devil Snakes are driven — fast, direct, and difficult to predict. Their demon lineage is expressed less through magic and more through sheer biological intensity: heightened senses, rapid regeneration, and a ferocity that belies their frame.",
              },
            ].map(({ name, note, desc }) => (
              <div key={name} className="border-l-2 border-[#2e2b26] pl-5">
                <h3 className="font-display text-base text-[#f2ebeb] mb-1">{name}</h3>
                {note && <p className="font-body text-xs text-[#7a746e] italic mb-2">({note})</p>}
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}

            <p className="font-body text-xs text-[#4a4844] italic pl-5">(and many more)</p>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Demon Culture */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Society</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Demon Culture</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            The Demon Race is one of the most misunderstood — and most underestimated — cultures on Planet Hetra. Where other races might see power and assume danger, those who look closer find a people defined by beauty, knowledge, and a deep capacity for emotional understanding. Demons are not frowned upon by the world at large. Other cultures regard them with respectful autonomy, recognizing them as beings who see past surface-level rumors and stereotypes with remarkable clarity.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            At their cultural core, demons are a personification of beauty, wealth, and knowledge — not merely the raw strength that places them at the top of the Beast Hierarchy Kingdom. That strength exists, but it is not what defines them.
          </p>

          <div className="space-y-8 mt-8">

            {/* Cultural Dishes */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-4">Cultural Dishes</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-5">
                Food is one of the quieter but more telling expressions of demon culture. Where other races develop cuisine around abundance or trade, demon cooking tends to emerge from necessity, magic, and personal craft — dishes that are difficult to replicate outside of demon hands because their preparation often requires an active use of demonic energy as much as it does heat or technique.
              </p>
              <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
                <h4 className="font-display text-sm text-[#f2ebeb] mb-3">Dàema Énchil Curry</h4>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                  One of the most well-known dishes made by Lesser Demons, Dàema Énchil Curry is a slow-prepared curry with roots in the culinary traditions of demon communities that lived across Varleqe and its surrounding territories. It is not a simple meal — most of its preparation processes require magic to complete correctly, and the full recipe is typically passed down within demon communities rather than recorded formally.
                </p>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                  The dish is known for its deceptively light texture offset by a rich, layered spiciness that builds gradually on the palate. The spice is never described as harsh or overwhelming — it sits at a precise threshold that warms without punishing, enriched with depth that most non-demon cooks struggle to replicate. Those who have tried it describe the taste as something close to aged fermentation meeting warm earth: complex, full-bodied, and unmistakably alive.
                </p>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                  The scent of Dàema Énchil Curry cooking outdoors is said to carry far enough to attract wildlife, which is considered a quiet mark of quality in demon culinary tradition — that even the natural world recognizes something worth gathering for. It is a dish made to be shared, and in demon culture, the act of sharing it holds weight beyond the meal itself.
                </p>
              </div>
            </div>

            {/* Identity */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Identity & Social Standing</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Despite being classified as Rank 1, No. 2 in the Beast Hierarchy Kingdom — just below The Dregalosaurus Zaratan — demons carry themselves with a dignity that extends well beyond combat. Their cultural identity is rooted in the understanding that power alone does not make a race worthy of respect. What earns that respect is the way they treat others: with patience, autonomy, and a willingness to look beyond what is said on the surface.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-3">
                This reputation is hard-earned. Demon culture places strong value on emotional intelligence, self-governance, and the bonds formed through shared lineage — all tracing back to the one bloodline that started it all: The Demon Grandfather, Khalfvyskov.
              </p>
            </div>

            {/* Varnæn */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">The Varnæn Dialect — Language as Cultural Identity</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                The spoken language of demon culture is Varnæn, the Demonic dialect of ancient Ghrenglish. Its tone is harsh, clipped, and guttural — built for declarations, curses, abyssal rituals, and dark sorcery. Verbs carry endings like -nuhl, -aem, and -farg, and the dialect is heavy with glottal breaks and sounds like "sk," "dr," "gh," and "kh."
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                But language carries culture, and Varnæn is no exception. Embedded within it are strong cultural taboos — most notably the phrase Skærøl Ǧhrün'pæarou, a deeply offensive insult that loosely translates to "a deformed child from their mother's womb." Its use is widely frowned upon, even in the modern era, because of what it targets: orphans, survivors of false breedings, and those who came from toxic or abusive origins. The fact that this taboo exists and persists speaks volumes about demon values.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Varnæn is also mutually respected by Sylphic Ghrenglish (Aeþerlen) speakers. Scholars from both language traditions have long been friends, and both dialects borrow from each other in moments of raw emotional honesty.
              </p>
            </div>

            {/* Chant of Beasts */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">The Chant of Beasts — A Cultural Anthem</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                Perhaps the most iconic expression of demon culture is "Þa Hræven'þa Býest" — The Chant of Beasts. Originally sung by demons in the Varnæn dialect, the chant is not about dominance or war. It is about courage, self-esteem, and emotional resilience — about refusing to let destruction breach the heart.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                The chant spread far beyond the demon race because its message resonated across cultures universally. It is sung near mountains, played with heavy drums and raw vocals, and carries a tone described as primal and fierce — yet deeply protective of the inner self.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Not everyone embraces it. Werebels and Moonbels are known to actively hate the chant, as they break the very codes it stands for. But that opposition only reinforces what the chant represents: a cultural anthem that endures because of what it asks people to protect.
              </p>
            </div>

            {/* Yhursian Church */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">The Yhursian Demon Church — Sacred Architecture & Diplomacy</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                On the supercontinent of Varleqe, built into ancient ruins rather than constructed anew, stands the Yhursian Demon Church — the only Architect church ever built for a non-human race. Its builder, Yhursa, chose to honor rather than replace the ruins that demons already called home. The result is a structure that grows from its surroundings rather than standing apart from them.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                Its entrance pillars are carved in Varnæn — not with prayers, but with declarations of welcome and belonging. Below ground, the church opens into a wide hall lit by deep red eternal flames, with a polished floor bearing an ancient Greungerian symbol of sanctuary at its center.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                The church has served for millennia as a neutral territorial zone — a space where demon factions, often in conflict with one another, could gather for rites of passage, truces, and communal ceremony. Attacking within its walls is considered a serious violation of demon cultural law, a status that has held — imperfectly but consistently — since the Greungerian Era. Yhursa's work was so significant that the Five Giants named Yhursday — the fifth day of the Hetranian week — in her honor. Demon culture is, in that small way, written into the very calendar of the world.
              </p>
            </div>

            {/* Sub-classifications */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Sub-Classifications Within Demon Society</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Demon society is not monolithic. Within its broader culture exist distinct sub-classifications documented in the{' '}
                <Link to="/world/databases/TheNhuemynDB" className="text-[#c9a84c] hover:underline">Nhuemyn DB</Link>
                : Half-Demons and Lesser Demons are recognized nhuemyn types of their own. These sub-kinds are not hostile or violent — they specialize in magic and dark magic, and carry their own identities within the wider demon cultural framework.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-3">
                This internal taxonomy reflects a culture that is organized, self-aware, and layered — not a single bloc, but a lineage with branches.
              </p>
            </div>

            {/* Varleqe */}
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Varleqe — The Cultural Homeland</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                The majority of demon culture finds its home on Varleqe, a supercontinent of ruins, lush river lands, and scorched territorial zones. Human settlement has largely declined or collapsed here, leaving the land primarily to demons, direwolves, and beasts. Demons have a deep, ancestral relationship with Varleqe's ancient structures — living in and around them, treating them as home territory in a way that is cultural as much as it is practical. For those who know where to look, Varleqe is not a wasteland. It is a homeland.
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Life Cycle */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Biology</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">The Demon Life Cycle</h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Each Demon Creature in every different subrace will age slowly after 23 years. At the age of 23 is when demons get their abilities and powers after undergoing a process called Demonization. Demonization happens when every cell in a demon body becomes unstable due to the changing effects of black blood cells. The unstable cells turn into Demon Core Cells, which each develop their own unique abilities and powers. After this process is done, the aging factor is slowed down during that 23rd year. In a dormant section of a demon brain, those powers and abilities become a part of their survivability. They are powerful to their own accord. All Demons have two hearts.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              It takes 975 years for a demon to reach 155 years old (biological age). The oldest age they can live up to is 9,000 years old. The ages of baby-23 needs to be dismissed, because those years are when they age much like how humans age.
            </p>
          </div>

          {/* Formula */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 mt-6 space-y-3">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Formula</h3>
            <p className="font-body text-xs text-[#c9a84c] font-mono">( apparent age - 23 ) * 975 / 23 = overall real age - 23</p>
            <p className="font-body text-xs text-[#7a746e] italic">(biological age)</p>
            <div className="border-t border-[#2e2b26] pt-3 mt-3">
              <p className="font-body text-xs text-[#4a4844] mb-2">Calculation:</p>
              <p className="font-body text-xs text-[#c8c2ba] font-mono">( 155 - 23 ) * 975 / 23 = 5595</p>
              <p className="font-body text-xs text-[#c8c2ba] font-mono">5595 - 23 = 5572</p>
            </div>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] pt-2">
              The actual age of a demon right now in the year of 2245 is at the age of 5,572 years old, because they all age at the same rate after their 23rd year. This is because the main source of their lineage comes from one bloodline that is passed over generations, The Demon Grandfather, Khalfvyskov, who lived on Hetra long ago. He used a clock-based demon magic to set a vicarious life cycle for his future generations to come. That was how Demonization happened. Demonization is essentially hardcoded into every demon's future blood.
            </p>
          </div>

          {/* Quick Death */}
          <div className="mt-6">
            <h3 className="font-display text-base text-[#f2ebeb] mb-3">The Quick Death</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
              Demons die a horrible death, even if it means the exception of getting themselves killed by external factors. 8,999 is their oldest age until they die off into the age of 9,000. All demon abilities and powers deteriorate their health in a span of one year, which causes them to die by the hands of too much power.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The fires of power will decrease due to low minerals in their body, and the depletion of Black Blood Cells. The Demon Core Cells will fight over the whole body, which causes their Black Cells to die off in matter of seconds. And in a span of 6.5 months, their powers will be gone, and all that left is their ability of regeneration. The power of regeneration will obviously fight back, but with little Demon Core Cell and Black Blood Cells left, that ability is left to waste and all you get is a rotten, smelly husk in their 9k years of age.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to="/world/databases/CreaturesOfTheWorld/TheDregalosaurus" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">← Prev Entry</span>
            <span className="font-display text-sm text-[#f2ebeb]">The Dregalosaurus</span>
          </Link>
          <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1 items-end text-right">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Next Entry →</span>
            <span className="font-display text-sm text-[#f2ebeb]">Killer Rabbits</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
