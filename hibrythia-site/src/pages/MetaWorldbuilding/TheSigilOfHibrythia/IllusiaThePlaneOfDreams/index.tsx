import { Link } from 'react-router-dom';

export default function IllusiaThePlaneOfDreams() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
        <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
        {" / "}
        <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
        {" / "}
        <span className="text-[#c9a84c]">Illusia — The Plane of Dreams</span>
      </p>

      {/* Hero */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Illusia — The Dream Realm</h1>
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-6">The Mysterious Hidden Realm of Hibrytheia</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Early days and ancient years on Hetra, historians and astrologists of that time discovered that dreams are a dimensional plane. A plane that holds the possibility of different universes, parallel realities, and potentially, the existence of the Multiverse. Dreams in this world are one of the prime keys to unlocking the gates of the Multiverse, but the primitive technology at that time was inefficient. And even to this day, it is still impossible.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          The astrologists of that time had their spiritual awareness, for most of them were monks. They used their affinity and power to try to lucid-dream and walk into the potential infinite possibilities of the Dream Dimension, but failed to do so because of a strange barrier. This realm is one of the keys to unlock The Multiverse.
        </p>
      </div>

      {/* What It Is */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">What Is Illusia?</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This particular subspace is a supernatural mental plane of existence that is powered through each individual&apos;s dreams. A subspace domain like this is called a <span className="text-[#f2ebeb]">Linked Realm</span> — like a fold or a sheathe — that is bound by everything, and is also present in The Outerbounds. Not only is it a manifestation powered by dreams, it can also be traversed in, through Astralverge.
        </p>
      </div>

      {/* Blank Slate */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Blank Slate Requirement</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Even if you can dreamwalk, you need a very clear mind, a relaxed soul that has no impurities or sins, along with emotions that might cloud judgement and assessment. You also need to be void of all emotional values, traits, and feelings — because the Dream Realm will only react to a state of nothing. A <span className="text-[#f2ebeb]">Blank Slate</span>. But it won&apos;t mind even if you show curiosity, since the realm is powered by dreams, but also by curiosity.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          ...but the human mind and soul is always busy, so even trying to clear your entire soul is impossible. Monks were able to do it, but the only consequence they have with Astralverging is <span className="italic">psychometry</span>. This is why Monks are no longer able to dreamwalk — because the realm banned it — because they are prophets.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Prophets", "Predictors", "Fortune Tellers"].map((label) => (
            <div key={label} className="px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] text-center">
              <p className="font-display text-sm text-[#f2ebeb]">{label}</p>
              <p className="font-body text-xs text-[#7a746e] mt-1">Monks are perceived as:</p>
            </div>
          ))}
        </div>
      </div>

      {/* Terminology */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Terminology</h2>
        <div className="space-y-4">
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Astralverge</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Also known as Astral Convergence, where it relies on the power of Astral Projection, Dream Inhibitor, and Dream Walking. This is an astral-activity of projecting the soul into a vision or dream. Visions and Dreams are an actual plane of existence, so in order to visit it, astralverging your soul into the Dreamverse is a near-impossible feat.
            </p>
          </div>
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Event Space</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A feature that is apparent inside the Dreamverse. Event Spaces are bubble realms that house different dream-like multiversal realities, each with their own memories and events of that significant time. It can either happen when a person goes into REM sleep, daydreaming, or if they have nightmares.
            </p>
          </div>
        </div>
      </div>

      {/* Hunter Noxx */}
      <div>
        <div className="px-5 py-6 rounded-xl border border-[#c9a84c]/30 bg-[#c9a84c]/5">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            No one, as ever, <span className="font-display text-[#f2ebeb]">EVER</span>, astralverged......
          </p>
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic mt-3">
            ...except for Hunter Noxx.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            But how could he have done that... since he is from The Dead Shard Continuity?
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic mt-2">
            It remains...... a mystery.
          </p>
        </div>
      </div>

      {/* Bottom Nav — last in sequence, back only */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia/ellhumhellm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Ellhumhellm</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
