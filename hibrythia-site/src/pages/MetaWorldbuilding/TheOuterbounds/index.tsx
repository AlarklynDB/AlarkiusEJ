import { Link } from 'react-router-dom';

const SINGULARITIES = [
  {
    name: 'Time',
    color: '#4ade80',
    colorLabel: 'Green',
    desc: 'The mastery of all time-related mechanics.',
  },
  {
    name: 'Void',
    color: '#60a5fa',
    colorLabel: 'Blue & Aqua',
    desc: 'Controls space. The fabric of area.',
  },
  {
    name: 'Existence',
    color: '#f87171',
    colorLabel: 'Red & Pink',
    desc: 'Controls reality: truths, lies, and promises.',
  },
  {
    name: 'Essence',
    color: '#2dd4bf',
    colorLabel: 'Teal Green',
    desc: 'Controls the aspect of the soul. The Spirit.',
  },
  {
    name: 'Authority',
    color: '#a855f7',
    colorLabel: 'Purple & Orange',
    desc: 'Controls and manipulates power and strength.',
  },
  {
    name: 'Ego',
    color: '#facc15',
    colorLabel: 'Bright Yellow',
    desc: 'Controls and manipulates the Mind. The brains and the brawns. It grants control over the mind and the hearts of others.',
  },
];

const CONTINUITIES = [
  {
    prime: 'Prime-1',
    name: 'The Hibryoverse Continuity',
    desc: "This is the story's main timeline, aka, The Hibrythian Saga. There are two alternate realities that have been started from the pilot novel. The code names for each Earth in this continuity are dubbed as PR1-EARTH-1A.",
  },
  {
    prime: 'Prime-2',
    name: 'The Gaia Continuity (The Real Earth Continuity)',
    desc: "The Gaia Continuity is a timeline where your Earth is from. This continuity's name can also be referred to as The Real Earth Continuity, since this history you live in is the second prime timeline. Each Earth in this timeline will have their own corresponding code name. The so called Earth you readers live on right now is dubbed as PR2-EARTH-1 (Prime-2 Earth 1). There are many other realities of your earth, but their histories have yet to develop. Time will tell.",
  },
  {
    prime: 'Prime-3',
    name: 'The Dead Shard Continuity',
    desc: 'The Dead Shard Continuity is the oldest of these three Primes, and was the original timeline before the birth of two new ones. This continuity is also known as The Old Gaia Continuity. (Prime-0, which is now Prime-3)',
  },
];

export default function TheOuterbounds() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link
          to="/world/meta"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Meta Worldbuilding
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Cosmic &amp; Meta</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          The Outerbounds
        </h1>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed max-w-[600px]">
          A Meta Realm
        </p>
      </div>

      {/* What Is the Outerbounds */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          The Narrative Realm Veil Beyond the Frame
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Outerbounds is a high dimensional plane of existence that is known as a Narrative Realm, or a dimension, where it exists OUTSIDE of everything. It is an eternal white expanse beyond mortal comprehension.
        </p>
        <div className="space-y-2 pl-4 border-l-2 border-[#2e2b26]">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">It is not a place, but a presence.</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">It&apos;s a mythic substance that is incomprehensible to the human mind. Invisible to the naked eye.</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">It is a primordial pre-conceptual substance that predates spacetime, form, or mind.</p>
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In the cosmology of{' '}
          <a
            href="https://www.amazon.com/Hibryds-Hibrythian-Genesis-Everything-Saga/dp/B0FQJXH2LC/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a84c] hover:underline italic"
          >
            Hibryds &ndash; The Hibrythian Genesis of Everything
          </a>
          , the Outerbounds is the first veil glimpsed by the Creator of Gaia-666 when His grief wept into the void. It is described as a space of &ldquo;glowing white&rdquo;&mdash;pure, numinous, and unshaped. It does not shimmer, it does not radiate. It <em className="text-[#f2ebeb]">waits.</em>
        </p>

        <div className="border-t border-[#2e2b26] pt-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Attributes of the Outerbounds</h3>
          <ul className="space-y-3">
            {[
              { text: "Always white. Not bright. Not blinding. Just", em: "white." },
              { text: "Not empty. But still.", em: null },
              { text: "Cannot be measured in time or distance.", em: null },
              { text: "No sound can echo there — only thoughts, only longing.", em: null },
              { text: "The only known portal to the Outerbounds is through the Aexterium&apos;s awakening.", em: null },
            ].map((item, i) => (
              <li key={i} className="font-body text-base text-[#c8c2ba] leading-relaxed flex items-start gap-3">
                <span className="text-[#c9a84c] mt-1 shrink-0">&#8212;</span>
                <span>
                  {item.text}{item.em ? <> <em className="text-[#f2ebeb]">{item.em}</em></> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[#c9a84c]/20 rounded-xl bg-[#131210] p-6 mt-4">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In essence, the Outerbounds is not the end.
          </p>
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic mt-1">
            It is the stillness <em>before</em> the beginning.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* What Makes a Continuity */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">What Makes a Continuity a Continuity</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In this world, a continuity is a story. And inside a story has contents that make it a story. In other cases, it can also hold a multiverse.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            {
              label: 'A Continuity Frame',
              desc: 'This frame bounds and contains every single narrative element inside.',
            },
            {
              label: 'A Non-Euclidean Strip',
              desc: 'A Möbius strip that infinitely floats around the continuity to protect it.',
            },
            {
              label: 'IPCI\u2122',
              desc: 'Illusion Projected Continuity Imagery. A visual projection of future images, past images — of what is, what will be, and what was. A visual projection of all sacred events inside a story that has already started, or haven\'t. Story inhabitants do not have this type of awareness to see their own events. Only The Outerbounds is its witness.',
            },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2"
            >
              <p className="font-display text-sm text-[#c9a84c]">{label}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Continuities */}
      <section className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Continuities (Stories) in The Outerbounds</h2>
        <div className="space-y-6">
          {CONTINUITIES.map(({ prime, name, desc }) => (
            <div
              key={prime}
              className="border border-[#2e2b26] rounded-xl bg-[#131210] p-6 space-y-3"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="font-display text-xs text-[#c9a84c] border border-[#c9a84c]/30 rounded px-2 py-0.5 uppercase tracking-widest">
                  {prime}
                </span>
                <h3 className="font-display text-sm text-[#f2ebeb]">{name}</h3>
              </div>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Story of Prime 3 */}
        <div className="space-y-5">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Story of Prime-3</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In this continuity, there used to be a planet that had both prime-1 and 2 combined, which was called Old-Prime-1. That planet was called &ldquo;Gaia-666.&rdquo; History unfolds with the basic biblical events, along with hibryds, humans, demons, and spirits alike. Whatever happened in the Bible happened in that reality, but there was a twist. Many fallen angels began to breed with false gods and humans, which resulted with Hibryds, whom are known as Hibrythianoids. However, these two sides clashed with each other, with Christianity being the dominant one. Both of these sides saw no solution for equality and peace, but only judgement, hatred, and power. Each of these sides fought each other through the ages, with no end in sight.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            But in the year of 3356 AD, a super fluctuation occurred. The God of Gaia-666, YHWH (&ldquo;yahweh,&rdquo; who was once benevolent in the prime days), had enough of the dire consequences of both the parties&apos; actions. He placed a Distortion Apex Field and tore his very creation apart. This fluctuation caused the memories of the planet&apos;s to turn into Dead Shards, with their own timeline and universes. However, YHWH noticed that each of these shards&apos; memories contain dangerous effects and events. Some events can happen randomly, while others try to keep up to their own chronological order. But it&apos;s still not safe to travel to these memories.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            So, with all his power, he sacrificed himself, creating an indestructible barrier called the <strong className="text-[#f2ebeb]">Warping Hex</strong>. No one can enter or exit without the use of Dark Magic and a Distortion Shield to negate the powerful changing effects of history in each shards&apos; memories. There are up to 9,999 shards in total.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            With YHWH gone, the Dead Shard Continuity was left adrift, bound in the Warping Hex, lost in the vast non-Euclidean space. And thus was the birth of two new prime continuities:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <div className="border border-[#2e2b26] rounded-xl bg-[#1a1714] px-5 py-3 flex items-center gap-3">
              <span className="font-display text-xs text-[#c9a84c] border border-[#c9a84c]/30 rounded px-2 py-0.5 uppercase tracking-widest shrink-0">Prime-1</span>
              <p className="font-body text-sm text-[#c8c2ba]">The Hibryoverse Continuity</p>
            </div>
            <div className="border border-[#2e2b26] rounded-xl bg-[#1a1714] px-5 py-3 flex items-center gap-3">
              <span className="font-display text-xs text-[#c9a84c] border border-[#c9a84c]/30 rounded px-2 py-0.5 uppercase tracking-widest shrink-0">Prime-2</span>
              <p className="font-body text-sm text-[#c8c2ba]">The Gaia Continuity (The Real Earth Continuity)</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Aexterium */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Aexterium</h2>

        {/* Image placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
          <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — The Aexterium</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Stone that merges all constructs of reality and what we know of: Time, Space, Reality, Essence, Power, Ego and The God Shard.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          These singularities merge into one stone called the Aexterium, a powerful stone that can cross realities, universes, and conceptual multiverses. Each of the singularities within that stone activate when called upon with hand signs. It lives invisible, inside The Outerbounds in a far and secluded place. It holds the three prime continuities&apos; power by sharing its share of them to help them stay afloat, allowing their progression to continue.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Inside the gemstone, is a shard that was taken from The Dead Shard Continuity, and shaped into a <strong className="text-[#f2ebeb]">God Shard</strong> by The Outerbounds. This stone-like shape helps contain all the six singularities, and upon choosing which power of singularity, the color will switch.
        </p>

        {/* Singularities */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3 mt-6">The Seven Singularities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SINGULARITIES.map(({ name, color, colorLabel, desc }) => (
            <div
              key={name}
              className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2"
              style={{ borderLeftColor: color, borderLeftWidth: '3px' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="font-display text-sm font-semibold"
                  style={{ color }}
                >
                  {name}
                </span>
                <span className="font-body text-xs text-[#4a4844]">&mdash; {colorLabel}</span>
              </div>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Nav — last page in Meta Worldbuilding, so Back only */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheCosmicTrainFromBeyond"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Cosmic Train from Beyond</p>
          </div>
        </Link>

        <Link
          to="/world/meta"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Section</p>
            <p className="font-display text-sm text-[#f2ebeb]">Meta Worldbuilding</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
