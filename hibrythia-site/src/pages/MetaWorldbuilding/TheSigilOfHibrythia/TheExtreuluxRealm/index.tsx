import { Link } from 'react-router-dom';

export default function TheExtreuluxRealm() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
          <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
          {" / "}
          <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
          {" / "}
          <span className="text-[#c9a84c]">The Extreulux Realm</span>
        </p>

        {/* Hero */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Extreulux Realm</h1>
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-6">The Space-Time Continuum — The Fifth Realm of Hibrytheia</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["The Great Unknown", "The Vast Cosmos", "The Fabric of Space", "The Realm of Infinite Void", "The Space-Time Continuum"].map((name) => (
              <span key={name} className="font-display text-xs text-[#c9a84c] px-3 py-1.5 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">{name}</span>
            ))}
          </div>

          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Extreulux Realm goes by many names. The most popular name it also symbolizes is <span className="text-[#f2ebeb] italic">The Space-Time Continuum</span>. This is a realm that binds everything together, as it is just... space, itself. This realm is an energy-like field that binds all the realms in one place, with the exception of Ellhumhellm.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            The Extreulux Realm works together with the Divine Realm, since it lends its power for the Spirits who create matter, space, and time. Only the King from the Divine Realm can access the Extreulux Realm and communicate with it.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            However, even as it is dubbed as The Space-Time Continuum, The Extreulux Realm is not just a part of it — it is also its own realm that resides within space. It is a duality realm, that has its own subspace dimension that exists within it.
          </p>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-4 italic">
            Think of it like The TVA from Marvel, but it helps regulate the space-time continuum and the multiverse within the Realm of Hibrytheia.
          </p>
        </div>
      </div>

      {/* Beings */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Beings</h2>

        <div className="space-y-4">
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Sphouls</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Sphouls are Spirit Ghouls. These Sphouls used to be a part of the Divine Realm, or once were a part of the Divine Realm. But due to high conflict, controversy, and wrongful conviction, they were expelled to the Extreulux Realm.
            </p>
          </div>

          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Aeonia — The Spirit of Space-Time</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              One of the beings in this realm is the Spirit of Time — Aeonia, who has a female voice. She also has mastery over the space dimension, but she rather sticks with Time itself, because that is her role.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              Aeonia describes herself as a living dice-spirit and is a very powerful being. Aeonia can stop all of time, including alternate timelines, parallel dimensions, realities, multiverse-timelines, and the dreamverse. Aeonia&apos;s overall role is to help create "time" after the creation of planets and universes.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              Aeonia herself has all three omnis: Power, Presence, and Knowledge. However, her dimensions of powers are limited to 11 dimensions, excluding time because she is Time itself — thus having the King give her the title: <span className="text-[#f2ebeb] italic">"The Omni-Bound Spirit."</span>
            </p>
          </div>
        </div>
      </div>

      {/* Aeonia Powers */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Aeonia&apos;s Powers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { power: "Time Manipulation", desc: "The power to manipulate time." },
            { power: "Multiversal Time Manipulation", desc: "The ability to control time across multiversal realities and dimensions." },
            { power: "Action Replay", desc: "The power to replay actions of others, events from the past, present, or future." },
            { power: "Deja-Vu Manifestation", desc: "Allows the user to manifest déjà vu into existence. The user brings feelings of repeating events, visions of the past, or other similar phenomenon into current reality." },
            { power: "Dimensional Shifting", desc: "User can manipulate the physical dimensions of themselves, other people, or objects, changing the targets' dimensions between 0-4D, making them incredibly difficult to catch or confine." },
            { power: "Temporal Warping", desc: "The ability to warp reality using time-based phenomena. This can shape the existential state around oneself by manipulating time and events to enact any desired effect (possibilities, probabilities, etc.)." },
            { power: "Omnipresence Knowledge", desc: "The ability to be everywhere at once — past, present, and future — with the ability to foresee incoming events to absorb and obtain knowledge." },
            { power: "Realm Transference", desc: "The ability to teleport between realms and dimensions using her space-like powers." },
          ].map((item) => (
            <div key={item.power} className="px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">{item.power}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-6 italic">
          ...and many more that relate to Time. She also has Space (Space Manipulation) — like powers such as Teleportation, which she has complete mastery of.
        </p>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia/stygian-realm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Stygian Realm</p>
          </div>
        </Link>
        <Link
          to="/world/meta/TheSigilOfHibrythia/ellhumhellm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Ellhumhellm</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
