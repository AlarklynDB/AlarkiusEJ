// ─── TheSigilOfHibrythia/index.tsx ────────────────────────────────────────────
// HAXL | The Hibrythian Saga — Meta Worldbuilding: The Sigil of Hibrytheia
// Content sourced word-for-word from Notion: The Sigil of Hibrytheia
// ──────────────────────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

const REALMS = [
  {
    number: "I",
    name: "The Divine Realm",
    subtitle: "The First Realm of Hibrytheia",
    to: "/world/meta/TheSigilOfHibrythia/divine-realm",
    body: "The Divine Realm is a metaphysical plane of existence that wraps around the Space-Time Continuum before the Continuity Frame (The Edge of Reality). This realm governs all systems, including planets, stars, and realms. What makes this unique is that the \"Gods\" in this world are called Lhumerials. Lhumerials are omnipotent, omniscient, omnipresent, and omnibenevolent. Lhumerials are 10-Dimensional Creatures.",
  },
  {
    number: "II",
    name: "The Sylphrelm",
    subtitle: "The Second Realm of Hibrytheia — The Cloud Abode",
    to: "/world/meta/TheSigilOfHibrythia/sylphrelm",
    body: "The Sylphrelm, known as The Cloud Abode, is a mystical realm on the northern outskirts of space that was created by one of The Spirits of Creation, Nahfia, whom was hand selected by Zohl and Vivianya. The realm itself is a very large, planetary-like body, home to many mystical beings, aside from Sylphs and Air Spirits. To get to the Cloud Abode, you\'ll need help from a Mystic Dryad that can connect with beings that live in the Abode. You\'ll be able to traverse to this realm via The Rainbow Funnel, with the help of a Dryad.",
  },
  {
    number: "III",
    name: "Midtheltra",
    subtitle: "The Third Realm of Hibrytheia — Planet Hetra",
    to: null,
    externalTo: "/world/databases/OurPlanetHetra",
    body: "Where the center of Hibrythia meets, the lands are called Midtheltra, known as Planet Hetra. Planet Hetra, otherwise known as Midtheltra, is a realm that bears life to humans, beasts, and creatures alike. This realm connects to The Sylphrelm and The Stygirelm, two other realms that coincide with one another. The inhabitants of Sylphrelm call Planet Hetra \"Midtheltra,\" because often, sylphs or dryads would take The Rainbow Funnel down to Planet Hetra to explore around or trade with citizens the goods from their place.",
  },
  {
    number: "IV",
    name: "The Stygian Realm",
    subtitle: "The Fourth Realm of Hibrytheia — Stygirelm",
    to: "/world/meta/TheSigilOfHibrythia/stygian-realm",
    body: "The Stygian Realm is the fourth realm that lies beyond Midtheltra and Sylphrelm. The darkness within this realm absorbs everything except for one light source. It is home to a lot of dark dwellers and critters, including Batragons, who can access this realm with their abilities.",
  },
  {
    number: "V",
    name: "The Extreulux Realm",
    subtitle: "The Fifth Realm of Hibrytheia — The Space-Time Continuum",
    to: "/world/meta/TheSigilOfHibrythia/extreulux-realm",
    body: "The Extreulux Realm is also known as the Space-Time Continuum. It is the rounded border that surrounds space, but also operates with it. It is invisible to the naked eye. The Extreulux Realm binds the fabric of space and time together, as the two co-exist with one another. Raw Time Energy is an energy that helps regulate the great unknown (space) and it sometimes causes Time Vortexes — hurricanes of time that are unstable. These Time Vortexes act as a portal to Ellhumhellm for unknown reasons, and all of them take place in The Dark Zone, where the Stygian Realm lurks. This realm works together with The Divine Realm, since there are Spirits who use its power to create time-system structures for developing universes.",
  },
  {
    number: "VI",
    name: "Ellhumhellm",
    subtitle: "The Sixth Realm of Hibrytheia — Hell, The Land of the Woeful",
    to: "/world/meta/TheSigilOfHibrythia/ellhumhellm",
    body: "Instead of being a bright, flaming red interpretation of Hell, Ellhumhellm is a cold and somber place with hues of blue and black — the sad version of the Hell known on Earth and through its biblical interpretations. In this place, there are no beings, no creatures, and no rulers. Aeonia, The Omnibound Spirit of Time, created this realm so that it can receive evil doers or those who commit grave atrocities or sins. Time distorts in this realm: it reverses, goes to negative time, and becomes hyperactive exponentially. When an individual comes here, their appearance becomes distorted and alternates from a baby to an elder, quickly. Everyone experiences this and when they scream in pain, the sound becomes nullified. They must endure the experience of their own guilt repeatedly. The realm itself has scattered lands of debris and craters caused by objects interacting with Time Vortexes.",
  },
  {
    number: "∞",
    name: "Illusia",
    subtitle: "The Hidden Realm of Hibrytheia — The Plane of Dreams",
    to: "/world/meta/TheSigilOfHibrythia/illusia",
    body: "Illusia is a hidden, metaphysical realm powered by dreams and curiosity, existing as a subspace fold within the Outerbounds and believed to be a key to unlocking the Multiverse. Though monks once attempted to reach it through Astralverging, the realm rejected them due to their prophetic nature, and imposed the curse of psychometry on those who got too close. To truly enter Illusia, one must become a \"Blank Slate\" — a soul of total emotional and spiritual emptiness — a state so impossible that only one being in all existence has achieved it: Hunter Noxx.",
  },
];

export default function TheSigilOfHibrythia() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
        <span>/</span>
        <span className="text-[#7a746e]">The Sigil of Hibrytheia</span>
      </nav>

      {/* Hero */}
      <div>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Meta Worldbuilding
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          Hibrytheia, The Sigil of Life
        </h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed max-w-[680px]">
          Hibrythieon, otherwise known as The Sigil of Life (or The World Sigil), is an energy field that connects and supports The Six Realms in the Hibryoverse Continuity. The entire Crest of Life is contained inside the Continuity Frame — a frame that prevents Continuity Traversal to the other Primes.
        </p>
      </div>

      {/* Other Names */}
      <section className="space-y-3">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Other Names</h2>
        <ul className="space-y-1 pl-4 border-l border-[#2e2b26]">
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed">The Hibrythieon of Life</li>
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed">The Hibrytheiax</li>
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed">The Sigil of Hibrytheia</li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed pt-2">
          In terms of visual representation, it is symbolized by an infinity knotted symbol that has a sword and a crest combined together. The bottom crest is where Hell lies — a realm not connected by travel, but through Time Vortexes that act as portals. Key inspiration: Yggdrasil.
        </p>
      </section>

      {/* The Six Realms */}
      <section className="space-y-10">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">The Six Realms of Hibrytheia</h2>

        {REALMS.map((realm) => (
          <div key={realm.number} className="border border-[#2e2b26] rounded-xl bg-[#0f0d0c] p-6 space-y-3">
            <div className="flex items-start gap-4">
              <span className="font-display text-2xl text-[#c9a84c] leading-none mt-0.5 min-w-[2rem]">{realm.number}</span>
              <div className="flex-1">
                <h3 className="font-display text-base text-[#f2ebeb] mb-0.5">{realm.name}</h3>
                <p className="font-body text-xs text-[#4a4844] uppercase tracking-wider mb-3">{realm.subtitle}</p>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{realm.body}</p>
                {realm.to && (
                  <Link
                    to={realm.to}
                    className="inline-flex items-center gap-2 mt-4 font-display text-xs text-[#c9a84c] hover:text-[#f2ebeb] transition-colors tracking-wide uppercase"
                  >
                    Explore {realm.name} <span>→</span>
                  </Link>
                )}
                {!realm.to && realm.externalTo && (
                  <Link
                    to={realm.externalTo}
                    className="inline-flex items-center gap-2 mt-4 font-display text-xs text-[#c9a84c] hover:text-[#f2ebeb] transition-colors tracking-wide uppercase"
                  >
                    View Planet Hetra <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Time Vortexes callout */}
      <section className="space-y-4 border-l-2 border-[#c9a84c]/30 pl-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-3">Time Vortexes</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Tornadoes and Hurricanes of Time that spin around at extreme speeds. These vortexes come and go around the space-time continuum in different places. However, they all act as a wormhole that throws objects like planets, comets, asteroids, and stars to Ellhumhellm for unknown reasons.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          These vortexes cannot appear in solar systems that house planets and stars with their own orbital plane — the "time" in these systems is stable and pure.
        </p>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Meta Worldbuilding</p>
          </div>
        </Link>
        <Link
          to="/world/meta/cosmic-train"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Cosmic Train From Beyond</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
