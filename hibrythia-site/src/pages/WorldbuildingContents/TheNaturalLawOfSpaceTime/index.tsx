import { Link } from "react-router-dom";

const idibs_rank = [
  "Galactic Cosmic Rays (GCRs)",
  "Solar Particle Events (SPE)",
  "HZE Ions",
  "Gamma Ray Bursts (GRBs)",
  "Supernovas",
];

const airBubbleConditions = [
  "There must be light for warmth",
  "Water can develop",
  "Cosmic Parasites that take liking to said land",
  "Carbon based elements are present",
];

const darkBubbleConditions = [
  "There must be Black Light for warmth",
  "Dark Water can develop",
  "Cosmic Parasites that take liking to said land",
  "Carbon based elements are present.",
];

export default function TheNaturalLawOfSpaceTime() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <nav className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] flex gap-2 items-center flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Worldbuilding</Link>
        <span className="text-[#2e2b26]">/</span>
        <span className="text-[#7a746e]">The Natural Law of Space-Time</span>
      </nav>

      {/* Gold rule */}

      {/* Header */}
      <div className="space-y-3">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">I. The Cosmic Foundation</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb]">&#127756; The Natural Law of Space-Time</h1>
      </div>

      {/* Intro */}
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
        Within The Hibrythian Saga&hellip;&hellip;. There are many happenings within The Space Time Continuum, otherwise known as The Extreulux Realm. From stars, novas, clusters, solar systems, galaxies, and more&hellip; there are many dangerous things about <em>the great unknown</em>. Here, this page will list a lot of different things that might happen, even stuff that happens behind the naked eye.
      </p>

      {/* ── DANGEROUS EXPLOSIONS ── */}
      <section className="space-y-8">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Dangerous Explosions</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Dangerous Explosions</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          There are a lot of dangerous explosions that happen. They either happen when massive stars are collided with Black Stars or with other celestial bodies of energy.
        </p>

        {/* IDIBs */}
        <div className="space-y-4">
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ IDIBs &mdash; Image Placeholder ]</p>
          </div>
          <h3 className="font-display text-sm text-[#f2ebeb]">Ionized Dark Implosion Burst(s)</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Known as IDIBs, they are the most powerful and dangerous forms of explosions. They are the top of the most dangerous happenings which triumph over:
          </p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
            {idibs_rank.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-2.5 border-b border-[#1a1714] last:border-0">
                <span className="font-display text-sm text-[#c9a84c] w-5 shrink-0">{i + 1}.</span>
                <p className="font-body text-base text-[#c8c2ba]">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            IDIBs happens once in every lifetime. These bursts only happen when a Black Star fails to ionize and fuse, colliding with a massive supernova. They collapse inwards on themselves which causes an implosion, which is significantly stronger than a black hole itself. It sucks in dark matter along with helium, hydrogen, carbon, and Pheronic Cells from nearby stars. This causes an unstable reaction, which is so huge, it causes beams of bright white light to shoot out from its inwards vortex, randomly in all directions, before it completely explodes and disintegrates in itself.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In each of the random dangerous beams of energy, the four elements of helium, hydrogen, pheronic cells, and dark matter are fused together to become: <span className="text-[#f2ebeb] font-medium">Pheronic Plasma.</span> This type of plasma will destroy anything in its wake as it travels at FTL feats.
          </p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Fun Fact about Pheronic Plasma</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Although Pheronic Plasma can destroy almost anything, it can sometimes cause a new chain of reactions by birthing new universes, clusters, stars and more! This is all because of the excess plasma that are left when their wake of energy decreases and floats in the void.
            </p>
            <blockquote className="border-l-2 border-[#c9a84c] pl-4 mt-3">
              <p className="font-body text-sm text-[#c9a84c] italic">&ldquo;In every death, there is life.&rdquo;</p>
            </blockquote>
          </div>
        </div>

        {/* Time Vortexes */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb]">Dangerous Time Vortexes</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Time Vortexes, as stated in The Anchor of Life: Tornados and Hurricanes of Time, that spin around at extreme speeds. These vortexes come and go around the space-time continuum in different places. However, they all act as a &ldquo;wormhole&rdquo; that throws objects like planets, comets, asteroids and stars to Ellhumhellm for unknown reasons. These vortexes cannot appear in solar systems that houses planets and stars with their own orbital plane. The &ldquo;time&rdquo; in these systems is stable and pure, which stops them from entering.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These vortexes can also appear near impending IDIBs, which can cause them to implode quickly or slowly. A strange phenomena happens when the Pheronic Plasma releases, it causes a spiraling effect that makes the plasma drizzle like rain, which makes the event very beautiful.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The color of these time vortexes are of shades of green, blue, and white, since it absorbs in light which makes it look bright and mildly dangerous. Green Lightning shoots out from the core of the center of these vortexes.
          </p>
        </div>
      </section>

      {/* ── DANGEROUS OBJECTS ── */}
      <section className="space-y-6">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Dangerous Objects</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Dangerous Objects</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
            <h3 className="font-display text-sm text-[#f2ebeb]">Black Stars</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              These stars are super cold, where they reach to -892k NF (Nullfrost), which is well out of reach of the standard temperature metric. Being so black, it is like they are invisible.
            </p>
            <p className="font-body text-[10px] text-[#4a4844] italic">(Inspired by Black 3.0, darkest acrylic paint)</p>
          </div>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
            <h3 className="font-display text-sm text-[#f2ebeb]">Pheronic Cells</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Within the space-time continuums, there are a few particles that are super dangerous if they interact with other likes or stellar-based explosions. These cells are very strange quarks that behave randomly when they are released from Cosmic Parasites (which can live in space without any care).
            </p>
          </div>
        </div>
      </section>

      {/* ── PASSIVE OBJECTS ── */}
      <section className="space-y-6">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Passive Objects</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Passive Objects</h2>
        <p className="font-body text-base text-[#7a746e]">Objects that pose no serious threat.</p>

        {/* Atmospheric Air Bubbles */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Atmospheric Air Bubbles</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These bubbles develop out of excess potassium hydroxide plasma, which occurs spontaneously when Hydrostrogen Stars die. The excess elements that come out of these stars react with the cold in space, which shapes and molds it into a bubble.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Inside the bubble, air becomes abundant, which lets the object float freely around.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Potassium Hydroxide Plasma, <span className="text-[#f2ebeb]">&ldquo;kOHp&rdquo;</span>
          </p>
          <p className="font-body text-base text-[#7a746e]">In very rare cases, these bubbles can land on incoming asteroids or meteors, which turns them into habitual lands, given the right circumstances:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
            {airBubbleConditions.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-2.5 border-b border-[#1a1714] last:border-0">
                <span className="font-display text-sm text-[#c9a84c] w-5 shrink-0">{i + 1}.</span>
                <p className="font-body text-base text-[#c8c2ba]">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#4a4844] italic">These bubbles cling to the asteroid permanently and can&apos;t pop whatsoever. Their size can vary depending on how big the KoHp is.</p>
        </div>

        {/* Hydrostrogen Star */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Hydrostrogen Star (Purple Star)</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Purple Hydrogen Stars nearing the end of their life. They glow a very blue like purple and emit a very nice cool feeling when approached. Not too cold or hot. These stars don&apos;t implode or explode. Just a gradual fade out before they turn solid&mdash;which is also how most planets are formed.
          </p>
        </div>
      </section>

      {/* ── PASSION STARS ── */}
      <section className="space-y-6">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Stellar Bodies</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Passion Stars</h2>

        {/* Aqualivia Sun */}
        <div className="space-y-4">
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Aqualivia Sun &mdash; Image Placeholder ]</p>
          </div>
          <h3 className="font-display text-sm text-[#f2ebeb]">The Aqualivia Sun</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Every solar system has a sun that burns immense heat. And as we know in general, the sun is a star. This said star is in the center of the Nhumela Cluster, where 5 Planets orbit around! The Sun is roughly 178,270 Heunix (miles) in size. The sun&apos;s gravitational waves launches themselves at both horizontal, diagonal, vertical heunixs, allowing planets to orbit around the sun at different angles, or at different orbital rings. This sun isn&apos;t your average typical yellow sun. The sun is actually a Passion Star.
          </p>
        </div>

        {/* What is a Passion Star */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">What is a Passion Star?</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A Passion Star is a very rare type of star, where it emits so brightly, it is easy to look at from space, and even from the surface of Planet Hetra (where the series takes place). This star, first spotted by Zohl (who is a Spirit of Creation), found it very beautiful. It&apos;s not too harsh, not too cool, as it maintains a very moderate heat signature. It sometimes have solar flares once in a while, but they usually die down within 3 minutes or less. These solar flares, when scattered on Planet Hetra, gives the nightly skies a very passionate aurora borealis of colors! Passion Stars can live for a very long time, and it won&apos;t burn out within 51 million years.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            There is also a strange physics behind The Sun&hellip;.: it can intercept vertical orbital status for planets too. No one knows why, not even Zohl, or the scientists on Planet Hetra knows why. It just works for some reason.
          </p>
        </div>

        {/* Bio-Lyceionic Fusion */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <h3 className="font-display text-sm text-[#f2ebeb]">Bio-Lyceionic Fusion</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A process that enacts fusion between elemental particles and a Lyecerianite Core. This is where the energy within keeps at a lyceonic rate. The energy flows like a torrent of water and magma, as it runs at a <span className="text-[#f2ebeb] font-medium">laminar</span> rate.
          </p>
        </div>

        {/* Color */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">How its color came to be</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Aqualivia Sun&apos;s color is very unique! It glows a very iridescent like color of sky blue, teal, with a tint of pink, orange, and red. It&apos;s very pretty. This type of sun brings better light source and moderate heat, with less radiation. This allows light on Planet Hetra to be a bit brighter than usual. But why does it look like this?
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This is all because of one single thing: A Lyecerianite Core (which can be read below), which is a type of crystal geode. The lyceranite glows a very beautiful color of sky-blue and magenta, with a rock like shell protecting it.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            After the discovery of the color, the people of Hetra have named this particular sun, <span className="text-[#f2ebeb] font-medium">Aqualivia.</span>
          </p>
        </div>
      </section>

      {/* ── WHITE BUFFERS ── */}
      <section className="space-y-6">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Cosmic Phenomena</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">White Buffers</h2>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ White Buffer &mdash; Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          They&apos;re the opposite of Black Holes. Black holes themselves are popular, since they suck in light, matter, and any of the sort. But since White Buffers are the opposite of these dangerous volatile objects, they serve as a fundamental part of the Space-Time Continuum. These objects help rejuvenate all the periodic elements of the table which helps balance the elements naturally without causing a disturbance.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Gravity doesn&apos;t pull. It absorbs and pushes back out.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The sound these Buffers emit is very low and soft. Kind of like a cat&apos;s purr, but muted.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          White Buffers are formed when an Atmospheric Air Bubble collides with a white supernova filled with kOPh.
        </p>

        {/* Appearance */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Appearance</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Unlike a Black Hole &mdash; which tears light from existence and leaves nothing but an invisible wound in space &mdash; a White Buffer is unmistakable. It glows. Brilliantly. At its core, it emits a dense, pearl-white luminescence, so full of light that it almost looks <em>solid</em> from a distance. Surrounding this core are slow, wide rings of radiant energy that drift outward in all directions &mdash; not spinning inward like a black hole&apos;s accretion disk, but blooming <em>outward</em>, like exhaled breath.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The closer you get, the more visible the individual elements become &mdash; tiny streams of hydrogen, helium, carbon, and other purified particles flowing out of it in gentle cascades, like light filtered through a prism.
          </p>
        </div>

        {/* How It Works */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">How It Works</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Where a Black Hole compresses and <em>destroys</em> matter into a singularity, a White Buffer does the exact opposite &mdash; it <em>decompresses.</em> Everything it takes in gets broken back down to its most fundamental, pure elemental state, and then slowly expelled back into the Space-Time Continuum.
          </p>
          <p className="font-body text-sm text-[#7a746e] italic">Think of it less like a cosmic vacuum, and more like a cosmic lung. It breathes in &mdash; and it breathes out.</p>
          <div className="space-y-3 mt-2">
            <div className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb] font-medium">What it absorbs:</span> Deteriorated matter, corrupted particles, decayed stardust, and depleted elemental energy that has lost its stability over time. It does <em>not</em> absorb living objects, planets with active orbital planes, or stars in active fusion. There seems to be a natural boundary that protects these things &mdash; scientists and scholars of Hetra have called this the <em>Passive Threshold.</em></p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb] font-medium">What it expels:</span> Pure, restored versions of the periodic elements &mdash; clean Hydrogen, clean Helium, untainted Carbon &mdash; scattered gently into the surrounding void. This is what gives the regions near a White Buffer unusually rich elemental density, making them prime zones for new star formation.</p>
            </div>
          </div>
        </div>

        {/* Passive Threshold */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <h3 className="font-display text-sm text-[#f2ebeb]">The Passive Threshold</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of the most fascinating things about White Buffers is what they <em>don&apos;t</em> do.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A Black Hole pulls without discrimination. Everything within reach is consumed &mdash; light, matter, time. A White Buffer, however, seems to carry a natural sense of <em>restraint.</em> Objects that are in stable states &mdash; a planet in a healthy orbit, a living star mid-fusion, a Cosmic Parasite just floating by &mdash; are gently repelled rather than absorbed. The gravity pushes instead of pulls, creating a soft but firm barrier that keeps living or stable matter at a safe distance.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This boundary is invisible, but its effect is felt. Ships or objects that drift too close without degraded matter will simply&hellip; drift back. Calmly. Unbothered.
          </p>
        </div>

        {/* Relationship with Dark Zone */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <h3 className="font-display text-sm text-[#f2ebeb]">Relationship with the Dark Zone</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            White Buffers are predominantly found in the Pure Zone. However, there are rare recorded cases of a White Buffer forming near the border of the Molten Ring Disk &mdash; and when this happens, the result is striking. The purifying energy that radiates from the Buffer begins to slowly <em>neutralize</em> the corrupted dark matter that leaks from between the ring rocks.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            It doesn&apos;t destroy the Dark Zone. It just&hellip; <em>cleans the edges.</em> Like a filter. The Molten Ring Disk doesn&apos;t seem to mind &mdash; it continues doing its job regardless &mdash; but the border between the Pure Zone and the Dark Zone in those areas tends to be noticeably more stable and calm than elsewhere.
          </p>
        </div>

        {/* Fun Fact */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Fun Fact about White Buffers</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            White Buffers are theorized to be one of the <em>oldest</em> objects in the Space-Time Continuum. Because they don&apos;t consume or collapse, they have no natural end state &mdash; they simply continue to give, indefinitely, as long as there is deteriorated matter to process. Some scholars on Hetra believe that without White Buffers, the elemental balance of the Extreulux Realm would have collapsed long ago.
          </p>
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 mt-3">
            <p className="font-body text-sm text-[#c9a84c] italic">&ldquo;Where a black hole takes from the world &mdash; a White Buffer gives it back.&rdquo;</p>
          </blockquote>
        </div>
      </section>

      {/* ── ELEMENTAL MATTER ── */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Matter &amp; Energy</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Elemental Matter and Its Variations</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In other regions of the Space-Time Continuum, there are pure and positive energy matter that are common, in which these elements make up stars, galaxies, and planets. Think of&hellip;the Table of Elements. So Hydrogen, Helium, Gold, Nickle&hellip;.etc.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Potassium Hydroxide Plasma, also known as <span className="text-[#f2ebeb] font-medium">kOPh</span> is a new element made for this world.
        </p>

        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Dark Matter and Its Variations</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In other regions of the <em>Space-Time Continuum</em>, there are areas that are corrupted with Time Vortexes. Regions like this are called <span className="text-[#f2ebeb] font-medium">The Dark Zone.</span> And in the Dark Zone, there is Dark Matter and Energy. Corrupted forms of elements from The Table of Elements.
          </p>
          <p className="font-body text-base text-[#7a746e]">There are a lot of dark versions of Elemental Matter:</p>
          <div className="space-y-1.5 pl-4">
            {[
              'Dark Hydrogen, also known as Black Hydrogen',
              'Dark Helium',
              'Dark Gold',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">{i + 1}.</span>
                <p className="font-body text-base text-[#c8c2ba]">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#4a4844] italic">And the list goes on&hellip;&hellip;</p>
        </div>
      </section>

      {/* ── SPACE CREATURES ── */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Space Creatures</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">Space Creatures</h2>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Cosmic Parasites</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These tiny little microbes of parasites come in many different forms and they look like amoebas. There are almost <span className="text-[#f2ebeb] font-medium">one decillion</span> of them in space because they multiply like crazy, even after dying due to different types of nearby star explosions. Some parasites evolve by eating stardust, which allows them to converse. These parasites can SURVIVE anywhere in space. Even in the Dark Zone.
          </p>
          <div className="flex gap-3 items-start pt-1">
            <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">These parasites can help produce water and carbon, using their special ability called &ldquo;Atomic Production&rdquo;</p>
          </div>
        </div>
      </section>

      {/* ── THE DARK ZONE ── */}
      <section className="space-y-6">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">The Dark Zone&#8482;</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">The Dark Zone&#8482;</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Dark Zone has a lot of weird&hellip;happenings. From Time Vortexes and Black Stars, there is a counterpart for the Atmospheric Air Bubble. It&apos;s very large, but miniscule to The Pure Zone.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Stygian Realm is in this zone.
        </p>

        {/* Dark Atmospheric Bubbles */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Dark Atmospheric Bubble or Black Air Bubbles</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These bubbles develop out of excess potassium hydroxide plasma when they are hit with Time Vortexes in the Dark Void. And the Potassium Hydroxide Plasma? They are found when Black Stars explode in The Dark Void, known as B-kOHp in the Dark Void.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The excess elements that come out of these stars react with the Time Vortexes in the Dark Void, which shapes and molds it into a bubble. Black Potassium Hydroxide Plasma, <span className="text-[#f2ebeb]">&ldquo;B-kOHp&rdquo;</span>
          </p>
        </div>

        {/* Black Air Bubbles */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">Black Air Bubbles work the same as their Counterpart</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Inside the bubble, air becomes abundant, which lets the object float freely around.
          </p>
          <p className="font-body text-base text-[#7a746e]">In very rare cases, these bubbles can land on incoming asteroids or meteors, which turns them into habitual lands, given the right circumstances:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
            {darkBubbleConditions.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-2.5 border-b border-[#1a1714] last:border-0">
                <span className="font-display text-sm text-[#c9a84c] w-5 shrink-0">{i + 1}.</span>
                <p className="font-body text-base text-[#c8c2ba]">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#4a4844] italic">These bubbles cling to the asteroid permanently and can&apos;t pop whatsoever. Their size can vary depending on how big the kOHp is.</p>
        </div>

        {/* Molten Ring Disk */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb]">The Molten Ring Disk &mdash; The Guardian of The Dark Zone</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Molten Ring Disk are humongous comet-like rocks that travel and trail around the Dark Void. There are over 2.3decillion rocks in the disk and each have their own gravitational pull that WORKS together to keep the Dark Void from hurling objects out. It stretches miles long and high. Think of it like The Great Wall of China, but if it was BIGGER in floating rock form, wider, and longer.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Dark Void&apos;s matter fade between the Ring Disk before it meets the Pure Void, where the elements from The Pure Zone override the border of the Dark Void (doesn&apos;t affect the Ring Disk, cuz it doesn&apos;t care).
          </p>
          <div className="flex gap-3 items-start">
            <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">These rocks are in a constant state between magma, plasma, water made of neutral elements.</p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Despite the Rocks in the Ring Disk being old comets and objects, they follow The Natural Law of Space-Time to keep things balanced between The Dark Zone and The Pure Zone.
          </p>
        </div>
      </section>

      {/* ── THE PURE ZONE ── */}
      <section className="space-y-5">
        <div className="w-full h-px bg-[#2e2b26]" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">The Pure Zone</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">The Pure Zone (The Space-Time Fabric)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Pure Zone of the Space-Time Continuum is extremely larger than the Dark Void (albeit being another large body filled with danger). This area of the space-time continuum is where planets and stars and such live in (where they are formed).
        </p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <p className="font-body text-sm text-[#f2ebeb] font-medium">Here&apos;s the catch though:</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Dark Zone&apos;s dangerous objects are protected by a MASSIVE ring formation of rocks that <em>surrounds</em> The Dark Zone. That means Time Vortexes and Black Air Bubbles cannot escape.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Because the Pure Void is full of Pure elements that can PURIFY anything, even the slightest object that escapes the Dark Void will be disintegrated.
          </p>
        </div>
      </section>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/databases" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
            </div>
          </Link>
      </div>

    </div>
  );
}

