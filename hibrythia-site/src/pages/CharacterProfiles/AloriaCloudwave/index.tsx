import { useState } from 'react';
import { Link } from 'react-router-dom';

function PowerToggle({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors text-left"
      >
        <span className="font-display text-base text-[#f2ebeb]">{title}</span>
        <span className="text-[#c9a84c] text-sm ml-4">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#111009] space-y-3 border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AloriaCloudwave() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/characters"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          From The Divine Realm
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Aloria Cloudwave
        </h1>

        {/* Story Info Callout */}
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-3">
          <p className="font-display text-base text-[#f2ebeb]">Story Information</p>
          <p className="font-body text-sm text-red-400">Information on this page contains Spoilers for Book 1!</p>
          <div className="border-t border-[#2e2b26] pt-3 space-y-2">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Character Information, Backstories, and Origin</p>
            <div className="border-t border-[#2e2b26] pt-3 space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb]">Story Role:</span></p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2">
                <li>Recurring Character</li>
                <li>Support Character</li>
                <li>One of The Spirits of Creation</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3 space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb]">Story Presence:</span></p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2">
                <li>Main Support Character in Hibryds &mdash; &ldquo;A Grand Voyage&rdquo; of EP 0 &mdash; &ldquo;Before Time&rdquo;</li>
                <li>Shows up then and now</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb]">Character Type:</span> Round</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
        &ldquo;What a lovely day to bask out in the sun~! Come join me my dear. Let&apos;s relax~&rdquo; &mdash; Aloria
      </p>

      {/* Origin and Backstory */}
      <section className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* Manifestation in the Divine Realm */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Manifestation in the Divine Realm</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aloria Cloudwave is a Lyeceriax Spirit, a Fluid Type, who was manifested by King Nhavah during the early days of the Divine Realm&apos;s creation. Among the countless spirits brought into existence, Aloria stood out as one of the most promising talents, so much so that the King personally took notice of her potential.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When the King divided the newly manifested spirits into two primary groups: Celestriax and Lyeceriax. Aloria chose to become a Lyeceriax, joining the ranks of the Fluid Spirits. Unlike the Celestriax Core Spirits who focus on power construction and universe creation, Lyeceriax Spirits like Aloria specialize in cosmic weather manipulation, planetary weather control, and the creation of Lyecerium Crystals, mystical crystals that are prominent throughout the entire galaxy and essential for cosmic balance.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As a Lyeceriax Spirit, Aloria possesses a Galacticite at her core, an indestructible divine energy orb that grants her vitality, power, and an array of abilities including all eleven types of magic, psychic powers, and various &ldquo;-kinesis&rdquo; abilities. Her ethereal form is metaphysical with no distinct facial features, adorned with ribbon-like tendrils that float freely from her wrists and shoulders like a cape, with glitter-like patterns and spirit dust trailing behind her, the hallmark elegance of a Fluid Spirit.
          </p>
        </div>

        {/* The Gift of a Name */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The Gift of a Name</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            King Nhavah personally bestowed upon her the full name <span className="text-[#f2ebeb]">Aloria Cloudwave</span>. The surname &ldquo;Cloudwave&rdquo; reflects her fluid nature and her connection to atmospheric and cosmic phenomena. While the King granted this full name, most beings prefer to address her simply as &ldquo;Aloria,&rdquo; finding the intimacy of her first name more approachable.
          </p>
        </div>

        {/* Partnership with Zohl */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Partnership with Zohl Celestreule</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Shortly after her creation, King Nhavah called upon Aloria and assigned her a collaborative role with Zohl Celestreule, a Celestriax Core Spirit. The King&apos;s instructions were clear: she was to work alongside Zohl in creating a galaxy and solar system, to be his friend, and to collaborate well with him. This partnership would become one of the most significant relationships in Aloria&apos;s existence.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Together, Aloria and Zohl ventured into the vast, unknown cosmos, traveling at light speeds to the farthest regions of the black, infinite void where no star&apos;s light could reach. There, they began their grand work. Aloria created a Lyecerium Crystal core at Zohl&apos;s request, which became the foundation for what they named a &ldquo;Passion Star,&rdquo; a purple-cored celestial body protected by crystalline rock.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            They created <span className="text-[#f2ebeb]">Anadeya&apos;s Eye</span>, a galaxy shaped like an eye with tendril-like formations extending in different directions, and within it, <span className="text-[#f2ebeb]">The Nhumela Cluster</span>, a five-planet solar system with a sun called the Nhumela Cluster star. The third planet from this sun was <span className="text-[#f2ebeb]">Hetra</span>, which would become one of the most important worlds in existence. Aloria scattered Lyecerium Crystals across Hetra&apos;s surface, giving the planet a mystical atmosphere that would define its character for eons to come.
          </p>
        </div>

        {/* The Battle Against Eienel */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Battle Against Eienel</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aloria&apos;s courage was tested when a cosmic ifrit named Eienel, a being of pure greed and hunger for energy, broke through the protective multiversal barrier surrounding their creation. Eienel demanded they surrender Planet Hetra to him, and when they refused, he attacked.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aloria fought valiantly alongside Zohl against the immensely powerful entity. Despite being struck and thrown across space, she recovered and continued the battle, using every ounce of her divine power to protect their creation. When the ancient spirit Runerus arrived to assist them, the three worked together to weaken Eienel by targeting his core orb. Though they eventually succeeded in subduing and exiling the threat, the battle revealed Aloria&apos;s unwavering dedication and protective nature toward the worlds she helps create.
          </p>
        </div>

        {/* Guardian of the Lucid Sanctum */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Guardian of the Lucid Sanctum</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            After the conflict with Eienel, Zohl proposed creating a multiverse within his creation, and Aeonia, the Spirit of Time, was summoned to make it possible. Aloria accompanied them to a continent filled with forests and plant life, where Zohl created a hidden chamber beneath the ground: <span className="text-[#f2ebeb]">the Ruin Chamber of the Lucid Sanctum</span> (a name Aloria herself suggested).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aeonia manifested a gemstone imbued with the Essence of Time and placed it in the chamber, creating a multiversal nexus where every action branches into parallel realities. She then created a special compass, a small locket with a blue round crystal bearing the symbol of time, complete with a key, and entrusted it to Aloria. This device serves as the mechanism to open portals to different multiversal universes.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aloria accepted the role of <span className="text-[#f2ebeb]">Guardian of the Lucid Sanctum</span>, taking residence in this sacred place. From her position, she protects the multiversal gateway and can travel freely between universes using the compass given to her by Aeonia. She transformed into her Icegray Swan form to better suit her new home, and this became her primary physical manifestation when interacting with the mortal plane.
          </p>
        </div>

        {/* Nature and Attributes */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Nature and Attributes</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As a Lyeceriax Spirit, Aloria can change her size but cannot alter her molecular density. She possesses three forms: her ethereal metaphysical form, her creature form (the Hetraniean Icegray Swan), and a pendant form of her choosing. Each form has powers specific to that appearance, though some abilities, like Spirit Force, overlap across forms due to their fundamental importance.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Spirits themselves don&apos;t have traditional weaknesses, though they do experience the full range of emotions that mortals do. Aloria is <span className="text-[#f2ebeb]">omnipotent</span> in all of her forms, possessing unlimited power. She holds limited omniscience, having vast knowledge but not absolute awareness of all things. However, she is neither omnipresent nor omnibenevolent in the way that Lhumerials are; she exists in specific locations and makes choices based on her own moral compass.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Unlike some spirit types, Fluid Spirits like Aloria have no gem or jewel counterpart (unless they want one), only an animal counterpart. Aloria&apos;s animal form is the <span className="text-[#f2ebeb]">Hetraniean Icegray Swan</span>, a majestic and graceful creature that embodies her fluid, elegant nature.
          </p>
        </div>

        {/* Legacy and Presence */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Legacy and Presence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Throughout the ages, Aloria has remained a faithful guardian of the Lucid Sanctum and a devoted friend to Zohl. She appears &ldquo;then and now&rdquo; across the timeline of The Hibrythian Saga, offering aid, wisdom, and protection when needed. Her role as a Divine Spirit of Creation marks her as one of the most important celestial beings in the Hibrythian cosmos, and her gentle yet powerful presence continues to shape the fate of countless worlds and realities.
          </p>
        </div>
      </section>

      {/* Apparel and Forms */}
      <section className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Her Apparel and Forms</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Aloria has two appearances! These appearances have powers of their own and is{' '}
          <span className="underline">limited to that specific appearance.</span>{' '}
          Most of these forms have the same power, however they overlap because they are important.
        </p>

        {/* Metaphysical Form */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Metaphysical</h3>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
            <span className="font-body text-xs text-[#4a4844] tracking-widest uppercase">Metaphysical Form — Illustration Coming Soon</span>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aloria&apos;s default Lyeceriax form. They have a rough outline and no recognizable features.
          </p>
          <div className="space-y-3 pt-2">
            <p className="font-display text-sm text-[#f2ebeb]">Default Metaphysical Powers</p>
            <div className="space-y-3">
              <PowerToggle title="Stellarnova Energization">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  This power allows her to create planets, stars, galaxies, and universes.
                </p>
              </PowerToggle>
              <PowerToggle title="Nebular Propulsion">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Flying in space.
                </p>
              </PowerToggle>
              <PowerToggle title="Nebular Healing">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  The power to restore any damaged part of a planet or universe.
                </p>
              </PowerToggle>
              <PowerToggle title="Spirit Force">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  This power allows Aloria to connect with other spirits elsewhere, if it&apos;s on a planet or in a realm.
                </p>
              </PowerToggle>
            </div>
          </div>
          <div className="border-t border-[#2e2b26] pt-4">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic">
              Aloria&apos;s powers are an identical set to Zohl&apos;s, but she has more access to different ones since she&apos;s not capped like him.
            </p>
          </div>
        </div>

        {/* Hetraniean Icegray Swan Form */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Hetraniean Icegray Swan</h3>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
            <span className="font-body text-xs text-[#4a4844] tracking-widest uppercase">Icegray Swan Form — Illustration Coming Soon</span>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aloria&apos;s counter-appearance/animal form.
          </p>
          <div className="space-y-3 pt-2">
            <p className="font-display text-sm text-[#f2ebeb]">Animal Counterpart Powers</p>
            <div className="space-y-3">
              <PowerToggle title="Flight Manipulation">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Of course she can fly!
                </p>
              </PowerToggle>
              <PowerToggle title="Weather and Nature Manipulation">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Aloria can freely manipulate the weather and nature around her.
                </p>
              </PowerToggle>
              <PowerToggle title="Rapid Healing">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Instant healing through the use of cosmic and stellar stardust. However, if this power was used on a Hibryd with an equivalent set of powers, it would take at least an hour for the Hibryd to heal.
                </p>
              </PowerToggle>
              <PowerToggle title="Psychic Wingblade">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Swipes of psychic blades of air propelled by wing movement at sharp speeds.
                </p>
              </PowerToggle>
              <PowerToggle title="Knowledge Absorption">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  This ability allows Aloria to instantly know information and knowledge from basic surroundings, including history. However, this power is limited.
                </p>
              </PowerToggle>
              <PowerToggle title="Lightflash">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Flashes a bright blinding light to confuse a foe or an opponent.
                </p>
              </PowerToggle>
              <PowerToggle title="Spirit Force">
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  This power allows Aloria to connect with other spirits elsewhere, if it&apos;s on a planet or in a realm.
                </p>
              </PowerToggle>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav Cards */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters/QueenLaeyana"
          className="group flex items-center gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Previous</p>
            <p className="font-display text-sm text-[#f2ebeb]">Queen Laeyana</p>
          </div>
        </Link>
        <Link
          to="/characters/NahfiaAlphraey"
          className="group flex items-center justify-end gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%] text-right"
        >
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Nahfia Alphraey</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
