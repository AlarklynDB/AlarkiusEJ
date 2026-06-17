import { Link } from 'react-router-dom';

export default function TheCosmicTrainFromBeyond() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link
          to="/world/meta"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          ← Back to Meta Worldbuilding
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Cosmic &amp; Meta</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          The Cosmic Train from Beyond
        </h1>
      </div>

      {/* Image Placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — The Cosmic Train</p>
      </div>

      {/* A Train that Roams Existence */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">A Train that Roams Existence</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Within the continuity, there exists a force that roams across the infinite vast void of stars and space. It is called The Cosmic Train.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Cosmic Train is a Sentient Power House that travels freely across universes and continuities. It speaks telepathically and has a mind of its own. It does not know of its own origin but it knows only one thing: Balance and Power. It goes by the name, Calypso, The Cosmic Train. He is immortal, as its body is composed of interstellar energy and cosmic magic. He self-regenerates and repairs lost energy and magic it itself gives out to individuals who are worthy of Cosmic Magic.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His entire body is semi-transparent, making it harder to see him in the vast vacuum of space. His own body is colored and designed like a universe with stars. Calypso currently resides in The Hibryoverse, around the gaps of the Divine Realm. He became friends with King Nhavah and Queen Laeyana, as the two knew of its presence. Whenever Calypso travels, he would leave behind trails of cosmic starclouds, in which those starclouds will give birth to new solar systems, suns, and planets.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Calypso has Seven <strong className="text-[#f2ebeb]">Omnis</strong> to his powers.
        </p>
        <ul className="space-y-2 pl-4">
          {[
            'Omniscient',
            'Omnipotent',
            'Omnipresent',
            'Omniprosus',
            'Omniconceptus',
            'Omniversalitas',
          ].map((omni) => (
            <li key={omni} className="font-body text-base text-[#c8c2ba] leading-relaxed flex items-start gap-2">
              <span className="text-[#c9a84c] mt-1">—</span>
              <span>{omni}</span>
            </li>
          ))}
        </ul>

        {/* Omni definitions */}
        <div className="space-y-4 mt-6">
          <div className="border-l-2 border-[#c9a84c]/40 pl-4 space-y-1">
            <p className="font-display text-sm text-[#c9a84c]">Omniprosus</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A word that relates to unbound and free of all continuities. This makes it so that Calypso can travel freely to two different continuities within The Outerbounds. He cannot interact with the other two continuities, as it will mess up their timeline and story. He can however, observe them from afar and know what is going on in said continuity. (It&apos;s a custom word.)
            </p>
          </div>
          <div className="border-l-2 border-[#c9a84c]/40 pl-4 space-y-1">
            <p className="font-display text-sm text-[#c9a84c]">Omniconceptus</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A word that relates to free of all concepts and theories. This makes Calypso a being that can appear at will, whether the person believes in such a gargantuan concept or not. He has his own will, his own belief, and his own authority to claim that no concepts and theories can hold him down. This ability that he has, can also work on opponents.
            </p>
          </div>
          <div className="border-l-2 border-[#c9a84c]/40 pl-4 space-y-1">
            <p className="font-display text-sm text-[#c9a84c]">Omniversalitas</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Unbound across infinite realities or universes.
            </p>
          </div>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          With all seven Omnis held by Calypso, he dubs and calls himself an <strong className="text-[#f2ebeb]">Exeterius</strong>.
        </p>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Origin */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Calypso was not originally from The Hibryoverse Continuity. He was from The Dead Shard Continuity, otherwise known as The Old Gaia Continuity. Gaia-666&apos;s Continuity was named The Old Gaia Continuity, or The Old Earth Continuity. Then it became The Dead Shard Continuity.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          To be more specific, he was the last excess power that YHWH used up to destroy his beloved creation (events are told in the book,{' '}
          <a
            href="https://www.amazon.com/Hibryds-Hibrythian-Alarkius-Elvya-Jay/dp/B0FR5JZ71B"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a84c] hover:underline"
          >
            Hibryds - The Hibrythian Genesis of Everything (HTHGOE)
          </a>
          ).
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Although YHWH&apos;s presence and powers are gone, there was left a small presence in the shape of an orb left floating around, adrift in The Outerbounds — it had nowhere to go. Since The Outerbounds is a dormant sentient realm, it noticed the floating fluid of powers and turned it into a form of a Cosmic Train.
        </p>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-5 py-1">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
            &quot;May you take the shape of a Cosmic Train.&quot; The Outerbounds commanded the floating powers.
          </p>
        </blockquote>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          It was right at that moment Calypso was born, and how it got its name. Since Calypso itself was born anew, it itself doesn&apos;t contain any past or previous memories. Given the range and freedom from The Outerbounds, it allowed it to travel across continuities, and it made its way to The Hibryoverse Continuity where it made itself home.
        </p>

        {/* Build and Display */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3 mt-8">Build and Display</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Height &amp; Width</p>
            <p className="font-display text-base text-[#f2ebeb]">2,345 Heunix (meters)</p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed">
              Taller and wider than The Burj Khalifa.
            </p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Length</p>
            <p className="font-display text-base text-[#f2ebeb]">24,546 Heunix in KM (15,252.2 miles)</p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed">
              Longer than The Great Wall of China.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Second Source of Magic */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Second Source of Magic</h2>

        {/* Cosmic Magic */}
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-6 space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-[#2e2b26]" />
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest">Cosmic Magic</p>
            <div className="h-px flex-1 bg-[#2e2b26]" />
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed text-center">
            The power to influence the properties of interstellar particles such as magic stardust and cosmic stardust.
          </p>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Subpowers of Cosmic Magic</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'Cosmic Speed',
              desc: "Draws on the forces of the Cosmic Train to allow a user to go super fast. If an individual has powers of superspeed, this type of magic will boost the base power by 10x.",
            },
            {
              name: 'Radiate',
              desc: 'A Light-like energy that absorbs Dark Magic. A nullifying power.',
            },
            {
              name: 'Cosmic Healing',
              desc: 'The ability to draw cosmic-stardust to regenerate or heal a broken universe / dead planet.',
            },
            {
              name: 'Magic Infusion',
              desc: 'The power to infuse magic into objects (usually a weapon), beings or powers.',
            },
            {
              name: 'Magical Barriers',
              desc: 'The power to create shields out of magic/magical energy.',
            },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2"
            >
              <p className="font-display text-sm text-[#c9a84c]">{name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Calypso's Own Powers */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Calypso&apos;s Own Powers</h2>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-6 space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-[#2e2b26]" />
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest">Calypsonic</p>
            <div className="h-px flex-1 bg-[#2e2b26]" />
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed text-center">
            Powers that it itself can use to manipulate its own energy into powerful sets of powers.
          </p>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Types of Powers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'Cosmic Bestowal',
              desc: 'This power only bestows Cosmic Magic to users who are worthy of it. Calypso can use this however he wants, as he can control which powers of Cosmic Magic it itself can give.',
            },
            {
              name: 'Cosmikinesis',
              desc: 'A more buffed up version of telekinesis, but it uses elemental cosmic energy.',
            },
            {
              name: 'Cosmic Healing',
              desc: 'The ability to draw cosmic-stardust to regenerate or heal a broken universe / dead planet.',
            },
            {
              name: 'Portal and Realm Manipulation',
              desc: 'The manipulation and transportation of one place to another. This power can also affect the surrounding environments.',
            },
            {
              name: 'Gravity Manipulation',
              desc: 'The ability to manipulate gravity waves.',
            },
            {
              name: 'Mind Entrance',
              desc: 'A Communication Device for Calypso to transmit information to individuals.',
            },
            {
              name: 'Cosmic Light Speed',
              desc: 'An insanely fast power that allows Calypso to travel near light-speed or even go faster than the speed of light.',
            },
            {
              name: 'Intangibility',
              desc: 'The ability to phase through incoming objects, solids, or gas planets.',
            },
            {
              name: 'Auto-Presence',
              desc: 'The ability to become invisible to others, but can be perceived by individuals of the same power level or higher.',
            },
            {
              name: 'Depowerization',
              desc: 'Whenever he needs a rest, Calypso can turn off his powers so that he can rest when there are no tasks to fulfill. Trains do need rest every now and then.',
            },
            {
              name: 'Powerization',
              desc: 'A power that allows Calypso to reactivate his powers when needed.',
            },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2"
            >
              <p className="font-display text-sm text-[#c9a84c]">{name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-[#4a4844] leading-relaxed mt-4">
          Inspiration: The Speed Force (The Flash / DC)
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
          to="/world/meta/TheOuterbounds"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Outerbounds</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
