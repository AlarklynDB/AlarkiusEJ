import { Link } from 'react-router-dom';

export default function TheDivineRealm() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
          <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
          {" / "}
          <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
          {" / "}
          <span className="text-[#c9a84c]">The Divine Realm</span>
        </p>

        {/* Hero */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Divine Realm</h1>
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-6">The First Realm of Hibrytheia</p>

          {/* Image Placeholder */}
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center mb-8">
            <p className="font-display text-sm text-[#4a4844]">[ Official Design Image — Author to add ]</p>
          </div>

          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic mb-6">
            "You are brought into a vast, golden realm. It has faint-yellow skies, white clouds, and the ground, white and golden. It was a scene of peace, healing, and divinity as your senses of pain and sadness disappear."
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Divine Realm is above all realms, including the constructs the universe of what we know of: Time, Space, Matter, and Reality. This realm governs all systems, including planets, stars, and realms. What makes this most unique is that the "Gods" in this world are called Lhumerials. Lhumerials are omnipotent, omniscient, omnipresent, and omnibenevolent. Lhumerials are 10-Dimensional Creatures.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            The Divine Realm was manifested by King Nhavah, a Lhumerian. King Nhavah is one of them! King Nhavah takes on the form of a Stellar Zaratan and is a very powerful being. Stellar Zaratans are divine creatures and they are very wise.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            The Divine Realm is not a still force. It constantly moves 24/7, even though the sense of time does not exist in the DR. Night-time here doesn't exist as sleep is not needed. You won't feel tired at all!
          </p>
        </div>
      </div>

      {/* Terminology */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Terminology</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In this world, the gods you will read in this series are known as Lhumeria. Lhumerials are 10-Dimensional beings. They're all-powerful, all-knowing, and everywhere at once (Omnipotent, Omnipresent, Omniscient, and Omnibenevolent). But why are Lhumerials 10-D but not 17? This is because Lhumerials do not have the control over the last seven dimensions. They also cannot interact with The Outerbounds and do Continuity Traveling as their powers don't equal that of a spatial-realm's power.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          The Dream Dimension is made up of Dream Essence, powered by the souls of humans and beings alike, melded by the power of the mind itself. Lhumerias cannot invade or interact with the Dream Dimension for if they do, they will lose their powers.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Plural", value: "Lhumerias" },
            { label: "Male Form", value: "Lhumerian" },
            { label: "Female Form", value: "Lhumerial" },
          ].map((item) => (
            <div key={item.label} className="px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-display text-base text-[#f2ebeb]">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-6">
          The word "Lhumeria" stems from the ancient Hetranian word, "Lhe&apos;Maer&apos;a." Now that the world of Hetra&apos;s Hetranian language has evolved to English, the Hetranian word has been modified to "Lhumeria," which is now translated as "a vivid blinding being."
        </p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-3">
          Earthly knowledge on Hetra: the word "God/Goddess" is only used as a title, nothing else.
        </p>
      </div>

      {/* Divine Objects */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Divine Objects</h2>
        <div className="space-y-6">
          {[
            {
              name: "The Fountain of Life",
              desc: "The Fountain of Life is a Revival Item that is safely guarded in the Divine Realm. It is the essence of life, in the form of a liquid. Drinking this can revive a dead person back to life. This item is obtainable, but you will need permission from King Nhavah and a reason why you need this.",
            },
            {
              name: "Energon",
              desc: "An object that collects and stores energy in a time-radiated essence. It helps store Energoral Power to infinitely power and contain the aspect of vitality and immortality. A Divine Object. It looks like a trident-shaped tree with a core in the center handle where the three points meet, with an infinity-quad symbol that attaches around the handle.",
            },
            {
              name: "Auraunite",
              desc: "Auraunite is both a gem, rock, and ore that shines brightly with Magenta and Gold-like colors. It is a Divine Rock and gem of the Divine Realm and is considered a rock that is capable of granting infinite wishes.",
            },
            {
              name: "Jadeite",
              desc: "A green-like stone that is favored among The Spirits of Creation, including Nhavah and Laeyana.",
            },
          ].map((obj) => (
            <div key={obj.name} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">⊰ {obj.name}</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* King & Queen */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">The King and Queen</h2>
        <div className="space-y-8">
          <div className="px-5 py-6 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">King Nhavah</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The one of all, the one above all, and the creator of the universe — King Nhavah. King Nhavah is a Lhumerial (Lhumerian), a being that exists outside of 10 dimensions, and is the King of the Divine Realm. He has the form of a Stellar Zaratan in that realm. Not only is he the creator of the DR, he is regarded as the King of Spirits. The God of Spirits. The Creator of Spirits. Before the creation of the DR, he was formless but appeared as a white-grainy texture like orb.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              Although he can take on as many forms as he pleases, King Nhavah&apos;s main appearance is of a Stellar Zaratan, a giant lion-like turtle creature. The King himself is Omnipotent, Omniscient, Omnipresent, and Omnibenevolent.
            </p>
          </div>
          <div className="px-5 py-6 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Queen Laeyana</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Queen Laeyana is a Lhumerial (Lhumerian), a being that exists outside of 10 dimensions, and is the queen of all magic. Laeyana can take on as many forms as she pleases, and often times gifts individuals with the power of magic, or a specific type of magic. There is also a high chance that when a baby is before birth, she will bestow them with magic, giving a unique ability before being born into the world.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              Queen Laeyana, often referred to as the "Goddess" of Magic, is a popular idol to the many born-magic individuals. Around the world, there are Staff Altars that have a symbol and a plaque that symbolizes the presence of Queen Laeyana. Some have encountered Staff Altars, and sometimes will gain magic powers if they touch it — this is an example of how magic can manifest onto someone through external sources.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              Laeyana&apos;s current home resides in the Divine Realm, where she takes on the form of a Greenforest Sylph. Many spirits, who create worlds, will often ask for a fair share of powers from her, so that they can gift to individuals on their worlds. The Queen herself is Omnipotent, Omniscient, Omnipresent, and Omnibenevolent.
            </p>
            <div className="mt-4 pt-4 border-t border-[#2e2b26]">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Appearance</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                In The Divine Realm, she takes on the form of a giant ethereal dryad in a metaphysical state (no facial features). She glows a very faint yellow. She has ribbons and flowy patterns that flow from her wrists and elbows. Her hair is very sparkly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Celestriax Lyeceriax Nexzylkrai */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Celestriax, Lyeceriax &amp; Nexzylkrai</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
          The Divine Realm houses two types of Spirits, with an addition of one. These Spirits are divided into two groups: Celestriax and Lyeceriax. Each of these spirits have Galacticites on their chests.
        </p>

        {/* Galacticite */}
        <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714] mb-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">⊰ The Galacticite</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Indestructible Divine Energy encased in a galactical orb. This is a fundamental aspect for all Spirits, as it keeps their vitality, energy, and also acts as a source for all their numerous powers. The Divine energy contained inside grants Spirits a lot of powers — not just divine power but also all eleven types of magic, psychic abilities, "-kinesis" type powers, and more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { name: "Lyeceriax", sub: "Fluid Spirits", pronun: "Lie · seer/cer · i · ax/axe" },
            { name: "Celestriax", sub: "Core Spirits", pronun: "" },
            { name: "Nexzylkrai", sub: "Nexus / Axis Spirits", pronun: "" },
          ].map((s) => (
            <div key={s.name} className="px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <p className="font-display text-base text-[#f2ebeb] mb-1">{s.name}</p>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">{s.sub}</p>
              {s.pronun && <p className="font-body text-sm text-[#7a746e] mt-2">{s.pronun}</p>}
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed">There are male and female versions of these three groups.</p>

        <div className="space-y-6 mt-6">
          {/* Celestriax */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Celestriax — Core Spirits</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              As Core Spirits, these spirits can change their size. Core Spirits can create universes and planets at will, or if they were given a task from the King. They are Galactical Creators. Their role can be used for the following:
            </p>
            <ul className="space-y-1 pl-4">
              {[
                "Power Construction — The ability to create and manifest powers.",
                "Power Amplification — The ability to amplify specific powers.",
                "Power Modification — The ability to modify powers.",
                "Multiversal Construction (planets, universes, etc.)",
              ].map((item, i) => (
                <li key={i} className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2">
                  <span className="text-[#c9a84c] mt-1">›</span>{item}
                </li>
              ))}
            </ul>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
              <span className="text-[#f2ebeb] font-display text-sm">Ethereal Celestriax:</span> Their appearance is mostly metaphysical, meaning no facial features. They have a faint outer glow that is not too bright nor too dim, for their glow signifies their powers and aura. Their body is almost like armor, their head and torso being a shade of silver, while their arms correspond with their color.
            </p>
          </div>

          {/* Lyeceriax */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Lyeceriax — Fluid Spirits</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              As Fluid Spirits, these spirits can cause cosmic weather, and can control a planet&apos;s weather. Not only do they control the weather, they have the ability to create a special kind of crystal, called "Lyecerium Crystals," which are prominent crystals throughout the whole galaxy. They are Galactical Balancers.
            </p>
            <div className="mt-4 pt-4 border-t border-[#2e2b26]">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">What are Lyecerium Crystals?</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                These crystals are important for cosmic weather. They help serve the purpose of creating planets and other rock-like structures in the known cosmos, as they determine weather conditions of star clusters and how moderate they are. These crystals also help determine a planet&apos;s mass, density, size, and gravity. Not only Core Spirits can create planets, but so do these crystals. They float around space after Lyeceriax Spirits create them.
              </p>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
              <span className="text-[#f2ebeb] font-display text-sm">Ethereal Lyeceriax:</span> Their appearance is mostly metaphysical, meaning no facial features. They are smaller in size than a Celestriax. Among their appearance: ribbon-like tendrils that float freely from their wrists and from their shoulders like a cape. The fluidity of the ribbon-like movements is what makes Lyeceriax Spirits known as "Fluid Spirits." They almost look like an angel, but they don&apos;t have halos. Their glittery patterns and spirit-dust are rainbow-like colors.
            </p>
          </div>

          {/* Nexzylkrai */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Nexzylkrai — Nexus / Axis Spirits</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              These Spirits are not like the other two. Spirits who don&apos;t choose either of those roles are given the Nexzylkrai Role. Nexzylkrai means the centre, the nexus, the axis. It can also mean neutrality. Unlike the other two, these Spirits have the ability to switch to their other two counterparts&apos; powers. This ability is called the <span className="text-[#f2ebeb]">Trithereal Authority</span>. They can switch from their own role as a Nexzylkrai into either Celestriax or Lyeceriax when the opportunity deems fit! Nahfia Alphraey is one of these Spirits.
            </p>
          </div>
        </div>

        <div className="mt-6 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">They Work Together</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Although both Lyeceriax and Celestriax Spirits are different, they work together to bring peace and balance. These two spirit groups have animal counterparts. Lyeceriax and Celestriax don&apos;t hold all the four omnis — they only hold the quality of Omnipotence and limited Omniscience. If they held the four omnis, that would make them Lhumerials. However, one of the Spirits of Creation was given an exception.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
            When in the Divine Realm, their ethereal forms span as 47 feet tall. Both spirits have three forms: Ethereal, Creature, and Pendant style (of their choosing). Each of these forms will only have powers that correspond to that form.
          </p>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-3">
            It is stated in Episode 0 of Book 1 that if other spirits in the Divine Realm rebel against the king or their own morals, they are turned into Sphouls.
          </p>
        </div>
      </div>

      {/* Spirits of Creation */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">The Spirits of Creation</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
          The Spirits of Creation help create planets, galaxies, and systems within the space-time continuum.
        </p>
        <div className="space-y-4">
          {[
            {
              name: "Zohl Celestreule",
              desc: "A Celestriax Being of his own person. He is the creator of the planet Hetra, and is its protector.",
            },
            {
              name: "Aloria Cloudwave",
              desc: "A Lyeceriax being of her own person. Zohl's friend, and also a prominent spirit who is responsible for the creation of Lyecerianite Cores.",
            },
            {
              name: "Nahfia Alphraey",
              desc: "The creator of the Sylph Race, and also the founder of the Sylphrelm. She is the first Spirit to become the source of Sylph Magic, whom was blessed to have mastery over it by Queen Laeyana. Nahfia is a Trithereal Spirit — meaning she can take on three ethereal forms: Celestriax (Core), Lyeceriax (Fluid), and Nexzylkrai (Axis).",
            },
          ].map((spirit) => (
            <div key={spirit.name} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">{spirit.name}</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{spirit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ancient Spirits */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">The Ancient Spirits</h2>
        <div className="space-y-4">
          {[
            {
              name: "Aeonia — The Spirit of Time (The Omni-Bound Spirit)",
              desc: "Aeonia is the Spirit of Time, one of who is the Creator of Time itself. Being the Creator of Time, Aeonia has other capabilities. She can create timelines and multiverses for a planet that is set for its journey. She also has powers that are time-based related, such as Time Manipulation, Temporal Shifts, and more. Aeonia is omnipresent, omniscient, omnipotent, and omnibenevolent. However, this doesn't make her a Lhumerial as her Dimensional powers are limited. She can only go up to 10 Dimensions (excluding time itself because she is Time). This makes her a special Spirit with a special title.",
            },
            {
              name: "Aurora Rimaea — The Spirit of Life",
              desc: "Aurora Rimaea, better known as the Mother of Nature and Life, is an Ancient Spirit that creates life for habitable planets. This includes humans, plant life, animal life, and beast life.",
            },
            {
              name: "Mohrv — The Spirit of Death",
              desc: "Mohrv, better known as the Spirit of Death, is the personification of death itself. When beings from different worlds pass away or their time is up, Mohrv will show up at the given time to guide them into the afterlife and to protect them. Morhv is Rimaea's rivaling partner and also long-lasting friend. They don't intend to harm each other, but rather keep each other's sanity intact. Mohrv bears the resemblance of a Ghost Vulture with panda-like patterns of a Giant Panda. Its panda-like patterns are almost like the Yin and Yang. Although he doesn't have eyes, he can still see through that black patch on its head.",
            },
            {
              name: "Runerus — The Earlywulf Spirit",
              desc: "The Earlywulf is a singular, spirit entity, a forefather, and an ancient being of the Direwolf Lineage. The Earlywulf's appearance is fearsome and divine, with resemblances of a lion's mane and legs, a dragon's head, and the body of a sabre-tooth. He goes by the name Runerus.",
            },
          ].map((spirit) => (
            <div key={spirit.name} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">{spirit.name}</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{spirit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Beings */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Other Beings</h2>
        <div className="space-y-4">
          {[
            {
              name: "Sphouls",
              desc: "Sphouls are Spirit Ghouls. These Sphouls used to be a part of the Divine Realm, or once were part of the Divine Realm. But due to high conflict, controversy, and wrongful conviction, they were expelled to the Extreulux Realm. They were once just mere spirits of the Divine Realm. Since they don't have omnibenevolence, they can sometimes become Sphouls if they rebel or do something bad.",
            },
            {
              name: "Stellar Pegasus",
              desc: "Stellar Pegasus are free-will mannered Pegasus that roam around the DR and sometimes universes itself. Sometimes commissioned from Nhavah, they inspect how universes are doing and report back.",
            },
            {
              name: "Stellar Chimeras / Kherubihm",
              desc: "Stellar Chimeras and Kherubihm are fearsome beings of the Divine Realm, and are guards of the DR. Kherubihms are a play on words for Cherubim/Cherubs — but in this world they are cute but very fearsome. An Infant Kherub is about the size of the Great White Whale to the size of a moon (no powers yet at this stage). A Teenage Kherub is about the size of Saturn. An adult Kherub is about the size of Jupiter. Stellar Chimeras cannot reproduce, as they are manifestations, and are about the size of the largest comet, Comet Berardinelli-Bernstein.",
            },
          ].map((being) => (
            <div key={being.name} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">⊰ {being.name}</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{being.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Sigil of Hibrytheia</p>
          </div>
        </Link>
        <Link
          to="/world/meta/TheSigilOfHibrythia/sylphrelm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Sylphrelm</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
