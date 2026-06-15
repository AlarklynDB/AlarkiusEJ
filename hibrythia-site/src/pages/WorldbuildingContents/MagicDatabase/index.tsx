import { Link } from 'react-router-dom';

export default function MagicDatabase() {
  return (
    <div className="min-h-screen bg-[#100908]">
      <div className="max-w-[960px] mx-auto px-6 py-20 space-y-12">

        {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          III. The Inner Gears
        </p>

        {/* Page Title — HdTextDSize */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Magic Database</h1>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Magic comes from <strong className="text-[#f2ebeb]">Three Sources</strong> in the entire world; one of which is Queen Laeyana.
          </p>
        </div>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── SOURCE 1: QUEEN LAEYANA ── */}
        <section className="space-y-8">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">The First Source</p>
            <h2 className="font-display text-lg text-[#f2ebeb] mb-3">The Sources of Magic</h2>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <Link to="/characters/QueenLaeyana" className="text-[#c9a84c] hover:underline">Queen Laeyana</Link> is a Lhumerial (Lhumerian), a being that exists within 10 dimensions, and is the Queen of Magic. She is one of the main sources of Magic.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-2">
              Here&apos;s a list of what she is the owner of:
            </p>
          </div>

          {/* Lost Magic */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-6 py-6">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">─────⊰ Lost Magic</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">
              These two types of magic are lost to civilization and are no longer practiced, as these two are very rare and scarce uses of power. Also known as Ancient Magic.
            </p>
            <div className="space-y-5">
              <div>
                <h4 className="font-display text-base text-[#f2ebeb] mb-2">
                  <span className="text-[#c9a84c]">&laquo;</span>{' '}Witchcraft{' '}<span className="text-[#c9a84c]">&raquo;</span>
                </h4>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-2">
                  Witchcraft was once a beautiful type of magic that specialized in revitalizing nature, which was once called Sorcery, or Nature Magic. Its presence prevailed from <strong className="text-[#f2ebeb]">100 OD to 1607 AD</strong>.
                </p>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  However, in the year of <strong className="text-[#f2ebeb]">1558 AD</strong>, a demon creature got a hold of said magic and cursed it into having dark and vile spells that are used to harm and kill people. It became very popular in those years, that is before other demons had to abandon the power. It is now lost to this day. But in some parts of the world, like Amberwick, there houses knowledge and spells of Witchcraft, from before its curse and after its curse.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base text-[#f2ebeb] mb-2">
                  <span className="text-[#c9a84c]">&laquo;</span>{' '}Amberian Magic{' '}<span className="text-[#c9a84c]">&raquo;</span>
                </h4>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Lost Magic from the Town of Amberwick. There is only one human from the long past that possesses this power and he still lives to this day. Amberian Magic was born in <strong className="text-[#f2ebeb]">205 OD</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* The Four Types */}
          <div>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">The Four Types of Magic</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
              These types of Magic are the types of powers that Queen Laeyana bestows among those who seek adventure and ambition, and also those who are deemed worthy of that type of power.
            </p>

            {/* General Magic */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">
                <span className="text-[#c9a84c]">&laquo;</span>{' '}General Magic{' '}<span className="text-[#c9a84c]">&raquo;</span>
              </h4>
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] mb-4">General, unspecific, magical powers that are used on a daily basis.</p>
              <div className="space-y-3">
                {[
                  ['Magic Pocket', 'The power and ability to store items in a space-like pocket dimension.'],
                  ['Size Augmentation', 'The ability to change one\'s physical height or size to a bigger or smaller proportion. This is a default power to all Sylphs. Raeya, who is one of the characters in this world, uses this multiple times throughout the series. Even if she\'s a smaller size, she can still pack a blow and punch.'],
                  ['Magic Strengthener', 'The power to boost the physical limitations of strength, individually or for other users.'],
                  ['Telekinetical Magic', 'Different from the actual power of psychokinesis, Telekinetical Magic relies on the properties of magic. Often known as Magic-kinesis.'],
                ].map(([name, desc]) => (
                  <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                    <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combat Magic */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">
                <span className="text-[#c9a84c]">&laquo;</span>{' '}Combat Magic{' '}<span className="text-[#c9a84c]">&raquo;</span>
              </h4>
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] mb-4">One of the main forms of magic. Combat Magic specializes in offense for dealing blows to opponents.</p>
              <div className="space-y-3">
                {[
                  ['Magic Blast', 'Forms of blasts and explosions emitted from the users\' hand at a distance.'],
                  ['Magic Blades', 'Magic blades that the user forms from the hand or arm movement.'],
                  ['Magic Library', 'Chants and spells that the user can use to generate different kinds of magic. Can either speak it or visualize it from imagination.'],
                  ['Magic Mindmelt', 'A magical psychic ability that allows the user to tap into another\'s mind and cause migraines and excessive headaches.'],
                  ['Magic Helix', 'Magic Helix that bounds and wraps around the arm of the user. This strengthens punching.'],
                  ['Magic Strengthener', 'The power to boost the physical limitations of strength, individually or for other users.'],
                ].map(([name, desc]) => (
                  <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                    <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Elemental Magic */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors mb-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">
                <span className="text-[#c9a84c]">&laquo;</span>{' '}Elemental Magic{' '}<span className="text-[#c9a84c]">&raquo;</span>
              </h4>
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] mb-4">Elemental Magic uses the manipulation of earthly elements, from water, earth, fire, and air. Even to the elements that come after the main four (metal, lava, blood, plasma...etc)</p>
              <div className="space-y-3">
                {[
                  ['Earth Magic', 'The manipulation of Earth-objects. This includes metal elements like steel, gold, aluminum...etc'],
                  ['Plant Magic', 'The manipulation and alteration of plant life. This includes roots, trees, and different types of flowers.'],
                  ['Water Magic', 'The manipulation of water-based liquid objects. This goes to the extension of air vapor, clouds, blood, and many more. Sub-element: Ice Magic.'],
                  ['Fire Magic', 'The manipulation of Fire-based objects/items/entities. This includes the many forms of fire: magma (lava), heat...etc. Sub-element: Plasma Magic.'],
                  ['Air Magic', 'The manipulation of air-based items/entities. Can manipulate spirits, souls, and ghosts.'],
                ].map(([name, desc]) => (
                  <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                    <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infernal Magic */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">
                <span className="text-[#c9a84c]">&laquo;</span>{' '}Infernal Magic{' '}<span className="text-[#c9a84c]">&raquo;</span>
              </h4>
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] mb-3">One of the strongest types of magic, if combined with Combat Magic. Rarely used in individuals since there are parts of it that are dangerous. Infernal Magic gets a power boost of <strong className="text-[#f2ebeb]">20 times</strong>.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
                Without proper training, immobility hits right after, which lasts for an hour or so. Tiredness, stress, soreness, and sometimes slight petrification happens. Petrification doesn&apos;t fully petrify — think of it like a hard shell.
              </p>
              <div className="space-y-3">
                {[
                  ['Astral Drag', 'This allows the user to drag the astral soul of a being out of the body of an opponent.'],
                  ['Blindsight', 'This hinders the opponent\'s eyesight blurry, and potentially, blind for the rest of their life.'],
                  ['Blood Control', 'A next-level power that allows the user to control the opponent\'s blood and make it boil from the inside.'],
                  ['Blood Rage', 'A magic that consumes the user\'s ambitions and lets them take control of whatever bloodlust emotion they have.'],
                  ['Leeching Shade', 'This drains the life force of an opponent up to 10 years.'],
                  ['Phantom Blades', 'Blades that are formed with the reaping souls of ghosts. They deal damage and can inflict curses onto opponents.'],
                  ['Phantom Maelstorm', 'A type of magic that consumes living souls of the dead. This turns dead souls into poison spikes that rushes in storms and torrents. This can cause the opponent to suffer from poisoning and potentially shorten their life-span by 5 years.'],
                ].map(([name, desc]) => (
                  <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                    <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divine Magician note */}
          <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic">
              When an individual holds or possesses five sets of Laeyana&apos;s Magic, they earn the title, <strong className="text-[#f2ebeb]">&ldquo;Divine Magician.&rdquo;</strong> There are Four Types of Magic that Laeyana herself gives to worthy individuals, while there are a few that remain hidden and kept secret from humanity.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic mt-2">
              In the year of <strong className="text-[#f2ebeb]">2 AD</strong>, There were Five Giants who possessed knowledge of each of the five types of magic, which you can read on our page,{' '}
              <Link to="/world/databases/OurPlanetHetra" className="text-[#c9a84c] hover:underline">Planet Hetra</Link>.
            </p>
          </blockquote>

          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-5 py-4">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The amount of magic is unknown because when you have Alchemic Magic, you can alter or make new types of magic, or sub-elemental powers for a specific type of magic. There are many new iterations of magic that are used to make new forms.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── SOURCE 2: COSMIC MAGIC ── */}
        <section className="space-y-6">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">The Second Source</p>
            <h2 className="font-display text-lg text-[#f2ebeb] mb-3">Cosmic Magic</h2>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              There is another source of magic, however, it is untethered from the entire continuity of The Hibryoverse. It is called Cosmic Magic and its source is from The Cosmic Train,{' '}
              <Link to="/404" className="text-[#c9a84c] hover:underline">Calypso</Link>. Cosmic Magic has the power to influence the properties of interstellar particles such as magic stardust and cosmic stardust from across multiverses and universes.
            </p>
          </div>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Subpowers of Cosmic Magic</h3>
            <div className="space-y-3">
              {[
                ['Cosmic Speed', 'Cosmic Speed draws on the forces of the Cosmic Train to allow a user to go super fast. If an individual has powers of superspeed, this type of magic will boost the base power by 10x.'],
                ['Radiate', 'A Light-like energy that absorbs Dark Magic. A nullifying power.'],
                ['Cosmic Healing', 'The ability to draw cosmic-stardust to regenerate or heal a broken universe / dead planet.'],
                ['Magic Infusion', 'The power to infuse magic into objects (usually a weapon), beings or powers.'],
                ['Magical Barriers', 'The power to create shields out of magic/magical energy.'],
              ].map(([name, desc]) => (
                <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── SOURCE 3: SYLPH MAGIC ── */}
        <section className="space-y-6">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">The Third Source</p>
            <h2 className="font-display text-lg text-[#f2ebeb] mb-3">Sylph Magic</h2>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Sylph Magic is a default magic power for Sylphs since these are powers that all Sylphs have. Sylph Magic has two sets, one being Healing Magic, and the other being Tranquil Magic. This type of Magic comes from{' '}
              <Link to="/characters/NahfiaAlphraey" className="text-[#c9a84c] hover:underline">Nahfia, The Spirit of Sylphs</Link>.
            </p>
          </div>

          {/* Physical Abilities */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-6 py-5">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">─────⊰ Physical Abilities</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              All Sylphs have extraordinary speed and strength (it ranges), because that is where they prioritize their talents into. When they fly, their flight speed is measured in BPS (Beats Per Seconds — Hummingbird Speed). Their speed can only go up to Mach 1–2 by limit. M5 if they undergo vigorous training. Their reflexes and reaction time are one of the fastest, which outpaces a cat&apos;s and a fly&apos;s. They can also fly backwards and diagonal directions when needed.
            </p>
          </div>

          {/* Vocal Abilities */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-6 py-5">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">─────⊰ Vocal Abilities</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              The vocal range for Sylphs are all over the place. It can be low or high depending on the context. These vocal abilities are what make their music and songs elegant and atmospheric since it carries weight, longevity, and sweetness. This is used in Fairy Lullaby.
            </p>
            <div className="border-l-2 border-[#2e2b26] pl-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">Multi-Voice Harmony (MVH)</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">One Voice can be split into multi-layers in one throat and track. This allows them to sing in different octaves while having one main voice act as the lead singer.</p>
            </div>
          </div>

          {/* Healing Magic */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">─────⊰ Healing Magic</p>
            <div className="space-y-3">
              {[
                ['Mystic Healing', 'Healing through the use of magical properties that come instantaneously.'],
                ['Timed Healing', 'The power to heal someone using a duration of time. Can work even if the user deactivates the power.'],
                ['User-Life Healing', 'This power allows the user to share their life force with someone in order to heal them. Useful for party traveling.'],
                ['Alchemic Healing', 'Uses the surrounding nature to heal wounds and injuries.'],
              ].map(([name, desc]) => (
                <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tranquil Magic */}
          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">─────⊰ Tranquil Magic</p>
            <div className="space-y-3">
              {[
                ['Disable', 'A form of Tranquil Magic. This sub-power calms down one\'s heart rate and stuns them, disallowing them to move until the user deactivates this power. However, they can still perceive sounds and speak.'],
                ['Fairy Lullaby', 'A soft-like gentle hum that can put someone to sleep through a timed duration. The lullaby can be short or long.'],
                ['Soothe Touch', 'The power to calm down a raging beast or person. This can also work if the user has a very fast heart rate.'],
                ['Soothe Snap', 'The power to instantaneously put someone to sleep with the use of the snap or render them unconscious.'],
                ['Icy Breath', 'The power of coolness that spreads down on someone when their temperament feels warm or hot.'],
              ].map(([name, desc]) => (
                <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── DERIVED MAGIC ── */}
        <section className="space-y-6">
          <div>
            <h2 className="font-display text-lg text-[#f2ebeb] mb-3">Derived Magic / Altered Magic</h2>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Derived Magic is basically human-knowledge made magic that became an alteration of the original source from which it came from.
            </p>
          </div>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors">
            <div className="space-y-5">
              {[
                ['Alchemic Magic', 'Alchemy-based Magic. Derived from Elemental Magic, as it responds to the alteration of structures (combination, creation, transformation, and transmogrification). In lore-based setting, Alchemic Magic is more of a catalyst — a type of technical power used to augment and change current types of magic into something new. This type of magic has no purpose for fighting, as it is more science related than anything else. The discovery of this magic happened in 0 AD.'],
                ['Mystic Magic', 'Composed of [redacted] and [redacted]. This type of magic is super powerful, more powerful than Infernal Magic.'],
                ['Techmahology', 'A fusion of General Magic with Technology, which gets you Techno Magic, or Techmahology. This became apparent in the City of Kharphan in the year of 2125 AD.'],
              ].map(([name, desc]) => (
                <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{name}</p>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex items-start justify-between">
        <Link to="/world/databases" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Databases &amp; Systems</span>
        </Link>
        <Link to="/world/databases/HibrythianReligions" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Hibrythian Religions</span>
        </Link>
      </div>

      </div>
    </div>
  );
}