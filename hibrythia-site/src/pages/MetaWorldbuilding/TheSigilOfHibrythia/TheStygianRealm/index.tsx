import { Link } from 'react-router-dom';

export default function TheStygianRealm() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
        <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
        {" / "}
        <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
        {" / "}
        <span className="text-[#c9a84c]">The Stygian Realm</span>
      </p>

      {/* Hero */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Stygian Realm</h1>
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-6">The Fourth Realm of Hibrytheia</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Stygian Realm is the fourth realm that lies beyond Midtheltra and Sylphrelm. Since this realm is pitch black, no light can be seen entering or escaping, for the darkness within absorbs everything except for one light source. This land is ruled by creatures of the dark. There are rocky terrain and a void of limitless dark energy. It is also very cold in this place as it survives off of cool and dark energy.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          This realm stands before the Extreulux Realm, which is the space-time continuum. It is a subdivision realm from Ellhumhellm, as it can also act as a gate to that place. It is located in the Dark Zone, a region in space.
        </p>
      </div>

      {/* Land of Darkness */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Land of Darkness</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Much like how the Sylphrelm operates (a massive land formation by rocks), this place is built on a very jagged foundation of dark energy, and a massive land that is carved out of a Stygian Asteroid — by far the biggest object known in the universe. It spans within 945 miles in both length and width. There are mountains that reach very high, and very low craters and ravines.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          It has a very dark black bubble that encases around the landform, which allows room for air to be abundant. However, with the amount of dark energy present, it makes the atmosphere very dark, unable for light to appear — except for one light source.
        </p>
      </div>

      {/* Access */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Access</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The only creatures that can go about through the Stygian Realm and Midtheltra are <span className="text-[#f2ebeb]">Stygian Batragons</span> — bat-like dragon creatures that have the power to traverse through.
        </p>
      </div>

      {/* Cosmic Torch */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">One Light of Exception — The Cosmic Torch</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
          Navigating the Stygian Realm is really hard, but if you really want to see what the Stygian Realm is, you will need to prepare yourself a special item that can brighten this said realm.
        </p>

        <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714] mb-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Cosmic Torch — Components</h3>
          <ul className="space-y-2">
            {["Dying Dwarf Star", "Ring Alloy", "Divine Hilt"].map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#c9a84c] font-display text-sm mt-0.5">{i + 1}.</span>
                <p className="font-body text-base text-[#f2ebeb]">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          You can obtain the Divine Hilt from the Divine Realm, but it is not easy to get there — you will need a Spirit to open up a portal. To build this Cosmic Torch, locate the hilt first (Divine Realm), then find a Ring Alloy on any planet with rings. The Dying Dwarf Star is your last item and is extremely rare.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          Once done, you can enter the Stygian Realm. The Cosmic Torch contains an anti-repelling dark agent that repels the darkness itself, so you can easily see the realm. But be careful when you enter with the Cosmic Torch — Dark Dwellers may attack without reason. You can offer them some Space Dust to make them friendly toward you.
        </p>
      </div>

      {/* Beings */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Beings</h2>
        <div className="space-y-4">
          {[
            {
              name: "Stygian Batragons",
              desc: "Stygian Batragons are bat-like dragon creatures. They have bat wings, a body of a lizard, and a dragon's face. These Stygian Batragons live in various places on Hetra and are the only accessors to the Stygian Realm since they also live there. Their dragon-style counterpart is of a Chinese-dragon, colored in shades of black, white, and gray. They sometimes resemble the Yin and the Yang because of the patterns on their scaly body design.",
            },
            {
              name: "Devil-Gods",
              desc: "Infernal, dark, evil creatures that oppose the Divine Realm.",
            },
            {
              name: "Dark Dwellers",
              desc: "Void creatures that don't sleep. They have a similar appearance to Nagas and their builds vary a lot.",
            },
            {
              name: "Cosmic Ifrits",
              desc: "A combination of a metaphysical spirit and ifrits — otherwise known as a Cosmic Ifrit. A Cosmic Ifrit is not your daily average demon. Instead, a Cosmic Ifrit has a very defined body tone, muscle mass, and looks like a soul or a spirit. Though spirits aren't solid, they have the choice to become solid or not. They are manifested here in the realm. Their cosmic-like spirit body is mainly colors of black and grey, and they glow a black blur.",
            },
            {
              name: "Styginews",
              desc: "Flying Lizard Newts. Don't worry, they're friendly.",
            },
          ].map((being) => (
            <div key={being.name} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">{being.name}</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{being.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Zone */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Dark Zone</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Dark Zone is a vast, corrupted region within the Space-Time Continuum, where otherwise "normal" elemental matter is warped by unstable time phenomena, dark energy saturation, and the lingering influence of void-born forces. It is not just "space, but darker" — it is a zone where the rules still exist, but they behave wrong, like the fabric of reality is bruised and constantly trying to heal.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          In the Natural Law of Space-Time, the Dark Zone is described as a place where corrupted variations of elemental matter can exist (Black Hydrogen, Dark Helium, Dark Gold, and countless others), and where dangerous anomalies — like Time Vortexes and the presence of Black Stars — make the region hostile to ordinary travel and stable life.
        </p>

        <div className="mt-6 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Structure — The Dark Zone and Its Border</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Dark Zone is not freely leaking into the rest of the Continuum. It is contained and "guarded" by the <span className="text-[#f2ebeb]">Molten Ring Disk</span>, a colossal ring formation of comet-like rocks that surrounds the Dark Void and prevents unstable objects from being hurled outward. The border matters, because beyond it lies the <span className="text-[#f2ebeb]">Pure Zone</span>, where pure elements naturally override and disintegrate corrupted matter that slips too far out of the Dark Zone.
          </p>
        </div>

        <div className="mt-4 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Stygian Realm&apos;s Place in It</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Stygian Realm is one of the Dark Zone&apos;s most infamous landmasses: a massive territory carved from a Stygian Asteroid and encased in a black atmospheric bubble. Unlike many Dark Zone phenomena that drift or roam, the Stygian Realm is a fixed location — an anchored "dark world" within the Dark Zone&apos;s greater void.
          </p>
          <ul className="space-y-2 mt-4">
            {[
              "It draws on the Dark Zone's abundant dark energy to maintain its cold, light-devouring atmosphere.",
              "It exists within the same hazardous neighborhood as Time Vortex activity and corrupted matter fields.",
              "It benefits from the Dark Zone's containment rules (the Ring Disk), which helps keep this realm's darkness from bleeding into the Pure Zone unchecked.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#c9a84c] mt-1 flex-shrink-0">›</span>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">What It&apos;s Like to Navigate</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Even with air present (thanks to the atmospheric bubble), the Dark Zone&apos;s defining trait is instability — visibility, orientation, and "normal" senses can become unreliable. This is why the Stygian Realm&apos;s single exception of light (and tools like the Cosmic Torch) becomes so important: without a counterforce, travelers are effectively swallowed by the same principle that defines the Dark Zone itself: corrupted matter + darkness + warped space-time.
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia/sylphrelm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Sylphrelm</p>
          </div>
        </Link>
        <Link
          to="/world/meta/TheSigilOfHibrythia/extreulux-realm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Extreulux Realm</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
