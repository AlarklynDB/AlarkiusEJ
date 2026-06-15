import { Link } from "react-router-dom";

const basicDimensions = [
  { num: 1, label: "Length" },
  { num: 2, label: "Width" },
  { num: 3, label: "Depth" },
  { num: 4, label: "Time" },
  { num: 5, label: "Space" },
  { num: 6, label: "Matter" },
  { num: 7, label: "Illusion" },
  { num: 8, label: "Probability" },
  { num: 9, label: "Perception" },
  { num: 10, label: "Reality" },
];

const multiversalDimensions = [
  { num: 11, label: "The Essence and Nostalgic vividness of Dreams / Dreamverse Manipulation" },
  { num: 12, label: "The Infinitum of Possibilities" },
  { num: 13, label: "All Possible Universes Branching from the Same Start Conditions" },
  { num: 14, label: "All Possible Spectrums of Universes with Different Start Conditions" },
  { num: 15, label: "A Plane of All Possible Universes, Different Start Conditions" },
  { num: 16, label: "Direct Movement from One Multiverse to Another" },
  { num: 17, label: "The Manipulation of The Outerbounds and Continuity Traveling." },
];

export default function The17DimensionsOfReality() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">

      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          <li><Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Worldbuilding</Link></li>
          <li className="text-[#2e2b26]">/</li>
          <li className="text-[#7a746e]">The 17 Dimensions of Reality</li>
        </ol>
      </nav>

      {/* Gold rule */}

      {/* Section label */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">I. The Cosmic Foundation</p>

      {/* Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">
        🔳 The 17 Dimensions of Reality
      </h1>
      <p className="font-body text-sm text-[#7a746e] mb-10">
        The Dimensional Planes of Hibryds Cinematic Universe
      </p>

      {/* Intro */}
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-16">
        Within the Fictitious series and story, the Hibryds Universe has a total of 17 Dimensions. These dimensions makes up the series, and the future of the story. So, what consists within the fictitious 17 dimensions?
      </p>

      {/* Dimension Tables */}
      <section className="mb-16">
        <div className="w-full h-px bg-[#2e2b26] mb-8" />

        <div className="grid md:grid-cols-2 gap-8">

          {/* Basic Dimensions */}
          <div>
            <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Basic Dimensions</h2>
            <div className="flex flex-col gap-2">
              {basicDimensions.map((d) => (
                <div
                  key={d.num}
                  className="flex items-center gap-4 border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-4 py-3 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-all"
                >
                  <span className="font-display text-sm text-[#c9a84c] w-6 shrink-0">{d.num}</span>
                  <span className="font-body text-base text-[#c8c2ba]">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Multiversal Dimensions */}
          <div>
            <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Multiversal Dimensions</h2>
            <div className="flex flex-col gap-2">
              {multiversalDimensions.map((d) => (
                <div
                  key={d.num}
                  className="flex items-start gap-4 border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-4 py-3 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-all"
                >
                  <span className="font-display text-sm text-[#c9a84c] w-7 shrink-0">{d.num}</span>
                  <span className="font-body text-base text-[#c8c2ba] leading-relaxed">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quwarkels */}
      <section className="mb-16">
        <div className="w-full h-px bg-[#2e2b26] mb-8" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Terminology</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Quwarkels</h2>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-8">
          Quwarkels are the fundamental particles that construct the fabric of all 17 dimensions, possessing a unique dual nature that makes them both the building blocks of reality and active participants in its manifestation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* As Dimensional Particles */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">As Dimensional Particles</h3>
            <ul className="flex flex-col gap-3">
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                Quwarkels are the smallest measurable units that compose dimensional planes (Length, Width, Depth, Time, Space, Matter, Illusion, Probability, Perception, and Reality)
              </li>
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                Each dimension has its own distinct &quot;flavor&quot; or type of Quwarkel&mdash;Time Quwarkels, Matter Quwarkels, Probability Quwarkels, etc.
              </li>
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                When dimensions interact or overlap, their respective Quwarkels resonate together, creating observable dimensional phenomena
              </li>
            </ul>
          </div>

          {/* As Probability Anchors */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-4">As Probability Anchors</h3>
            <ul className="flex flex-col gap-3">
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                At any given moment, infinite probabilities exist in a state of quantum flux (as governed by Dimension 8: Probability)
              </li>
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                Quwarkels actively &quot;lock in&quot; which probability becomes actualized reality
              </li>
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                When a choice is made or an event occurs, Quwarkels collapse the wave of possibilities into a single concrete outcome
              </li>
              <li className="font-body text-base text-[#c8c2ba] leading-relaxed pl-4 border-l border-[#2e2b26]">
                This anchoring function is why reality feels solid and consistent despite the existence of infinite parallel possibilities
              </li>
            </ul>
          </div>

        </div>

        {/* Dimensional Barriers */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Dimensional Barriers</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The ancient Hetranian monks and astrologists who attempted to breach the Dream Dimension encountered barriers composed of stabilized Quwarkels. These Quwarkel structures maintain the separation between dimensional planes. Successful interdimensional travel would require the ability to manipulate Quwarkels themselves&mdash;a technology that remains beyond reach even in the current era.
          </p>
        </div>
      </section>

      {/* Dream Dimension */}
      <section className="mb-16">
        <div className="w-full h-px bg-[#2e2b26] mb-8" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Deep Dive</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Why is the Dream Dimension or the Dreamverse considered the 11th?</h2>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
          Early days and ancient years on Hetra, historians and astrologists of that time have discovered the dreams are a dimensional plane. A plane that holds the possibility of different universes, parallel realities, and potentially, the existence of the Multiverse. Dreams in this world, are the prime keys to unlocking the the gates of the Multiverse, but the primitive technology at that time was inefficient. And even to this day, it&apos;s still impossible.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The astrologists of that time had their spiritual awareness, for most of them were monks. They&apos;ve used their affinity and power to try and lucid-dream and walk into the potential infinite possibilities of the Dream Dimension, but fails to do so, because of a strange barrier.
        </p>
      </section>

      {/* 10-D Beings */}
      <section className="mb-16">
        <div className="w-full h-px bg-[#2e2b26] mb-8" />
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Entities</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-8">10-D Beings</h2>

        <div className="flex flex-col gap-6">

          {/* Queen Laeyana */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-6">
            <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Queen Laeyana &mdash; Image Placeholder ]</p>
            </div>
            <h3 className="font-display text-base text-[#f2ebeb] mb-3">Queen Laeyana</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Queen Laeyana is a Lhumerial, a being that exists within the 10-D, and is the Queen of all Magic. Laeyana can take on as many forms as she pleases, and often times gifts individuals with the power of magic (or a specific type of magic). There is also a high chance that when a baby is of before birth, she will bestow them with magic, giving a unique ability before being born into the world. Laeyana is a powerful, magic Lhumeria.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Queen Laeyana, often referred to as the &quot;Goddess&quot; of Magic, is a popular idol to the many born-magic individuals, who read from texts and history. Around the world, there are Staff Altars that have a symbol and a plaque that symbolizes the presence of Queen Laeyana. Some have encountered Staff Altars, and sometimes will gain magic powers if they touch it.&mdash;&mdash;&mdash;this is an example of how magic can manifest onto someone through external sources.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Laeyana&apos;s current home resides in the Divine Realm, where she takes on the form of a Greenforest Sylph. Many spirits, who create worlds, will often ask for a fair share of powers from her, so that they can gift to individuals on their worlds.
            </p>
          </div>

          {/* King Nhavah */}
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-6">
            <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ King Nhavah &mdash; Image Placeholder ]</p>
            </div>
            <h3 className="font-display text-base text-[#f2ebeb] mb-3">King Nhavah</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              King Nhavah is another Lhumerian that is also 10-D. King Nhavah is the creator of the Divine Realm, which has the form of a Stellar Zaratan in that realm. Not only he is the creator of the DR, he&apos;s regarded as the King of Spirits. The God of Spirits. The Creator of Spirits.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Many of the Spirits that were manifested with their own spirit and personality stems from the King&apos;s powers. However, these spirits that the King creates are only omniscient (all-knowing) and omnipotent (all-powerful). The King fears that if he creates a spirit with all the 3 omnis, their personality will become twisted and thus turning them into Sphouls.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex items-start justify-between">
        <Link to="/world/databases" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Databases &amp; Systems</span>
        </Link>
        <Link to="/world/databases/TemporalTimeStreamDilation" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Temporal Time-Stream Dilation | TTSD</span>
        </Link>
      </div>

    </div>
  );
}
