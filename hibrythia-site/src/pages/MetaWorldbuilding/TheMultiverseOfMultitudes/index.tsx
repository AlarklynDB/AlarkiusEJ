import { Link } from 'react-router-dom';

export default function TheMultiverseOfMultitudes() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
          <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
          {" / "}
          <span className="text-[#c9a84c]">The Multiverse of Multitudes</span>
        </p>

        {/* Hero */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Multiverse of Multitudes</h1>

          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Hello!~ My name is <span className="text-[#f2ebeb]">Aeonia</span>, The Spirit of Time. Here, I will guide you through the vast concepts of The Multiverse within this series!
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            The first mention of the Multiverse is also in our World introduction, along in the first book of the series in <span className="text-[#c9a84c] italic">EP 0 "Before Time"</span>, where it explains the introduction of the Multiverse. The Multiverse, better known as "many-verse"; many-worlds, etc — is a concept of Alternate Universes that share a universal ranking system. Whether be parallel realities, alternate realities, different worlds or mirrored worlds, these concepts come into one thing: proof of the multiverse.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            There are varieties of universes, as they are created through Ehckol Events. Ehckol Events are actions done by a chain of events that lead from one thing to another. An event with different possible outcomes gives rise to different universes, one for each outcome.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            Some universes can take place in different periods and times, whether it be the ancient past, medieval times, a science-futuristic world, or a world set in apocalyptic times. This is because each universe has their own rules of how time passes in them.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            As for me, I am the one who helps create multiversal timelines and functions for each planet. I am also the one to develop the idea of The Outerbounds, which can be read below.
          </p>
        </div>
      </div>

      {/* Terminology */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Terminology</h2>
        <div className="space-y-4">
          {[
            {
              term: "Dreams",
              pronun: "",
              desc: "A subconscious activity within the brain during REM sleep. Dreams are a form of multiversal transportation from one plane to another reality. In this case, Dreamwalking is possible. However, interaction with other multiversal individuals while dreamwalking does not work.",
            },
            {
              term: "Ehckol Events",
              pronun: "pronunciation: (echo)",
              desc: "Ehckol Events are actions done by a chain of events that lead from one thing to another. An event with different possible outcomes gives rise to different universes, one for each outcome.",
            },
            {
              term: "Fixed Point / Absolute Point",
              pronun: "",
              desc: "Known by its two names, this is the starting point of time, an action. The source event that happens before the chain happens. There is no way in destroying a fixed point, as its current device is used to determine future actions and stories.",
            },
            {
              term: "Original Variants",
              pronun: "",
              desc: "This term is specifically bound to characters that have a back-point origin, which is an overarching term for the Old Gaia Continuity. Before the destruction and shard reformation of Gaia-666, there are a lot of characters that have their own origin story, thus the term, Original Variant. After Gaia-666 became The Dead Shard Continuity, it resulted in the birth of two new ones.",
            },
          ].map((item) => (
            <div key={item.term} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-1">⊰ {item.term}</h3>
              {item.pronun && (
                <p className="font-body text-xs text-[#7a746e] mb-2 italic">{item.pronun}</p>
              )}
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prime Universes intro */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Prime Universes</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A <span className="text-[#f2ebeb]">Prime</span> is a foundational continuity — a universe so structurally significant to the multiverse that its events, timelines, and existence form the backbone of all branching realities that stem from it. Unlike standard alternate universes, a Prime is not born from a single Ehckol Event. It is a <span className="italic">root reality</span>, one that either predates or fundamentally shapes the multiverse&apos;s current order.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          Each Prime is designated by a numerical code (PR1, PR2, PR3...) and may contain its own branching timelines, Dead Shards, or sub-realities — but the Prime itself remains the <span className="text-[#f2ebeb]">anchor point</span> of that cluster of existence.
        </p>
      </div>

      {/* Prime-1 */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-xs text-[#c9a84c] px-3 py-1 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">PR1</span>
          <h2 className="font-display text-lg text-[#f2ebeb]">Prime-1 — The Hibrythian Saga</h2>
        </div>
        <p className="font-display text-sm text-[#7a746e] mb-4 uppercase tracking-wider">The Hibryoverse Continuity</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This is the story&apos;s main timeline, aka The Hibrythian Saga. There are two alternate realities that have been started from the pilot novel. The code names for each Earth in this continuity are dubbed as PR1-EARTH-1A.
        </p>

        {/* Current Timeline */}
        <div className="mt-6 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Current Timeline in Our Story</h3>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-display text-xs text-[#c9a84c] px-3 py-1 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">PR1-Earth 1A</span>
            <span className="font-display text-sm text-[#f2ebeb]">The Hibryds Continuity / HibryoVerse</span>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Earth 1A is the current continuity of the current story that starts in the last chapter of <span className="text-[#c9a84c] italic">Hibryds EP 0 Before Time</span> and into the beginning of EP 1.
          </p>
        </div>

        {/* Branched Timelines */}
        <div className="mt-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Branched Timelines</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
            <span className="text-[#f2ebeb]">Branched Timelines</span> are caused not just because of a fatal action, but when an <span className="italic">emotion</span> goes haywire. Emotions are the pivotal force of action for The Hibrythian Saga because emotional cues and storytelling is what makes our universe unique. But if that said emotion becomes volatile, and possibly — <span className="italic">impossible to ignore</span> — the effects of that emotion affect the multiversal structure of time. And when it breaches and leaks into the essence of time and multitude, this is where the Branched Timelines begin.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">
            The term for this event is called: <span className="text-[#f2ebeb]">"Emotive Temporal Divergence"</span> or <span className="text-[#f2ebeb]">ETD</span> for short.
          </p>
          <div className="space-y-4">
            {[
              {
                code: "PR1-Earth 1A-B",
                title: "God Dimensional Buster Kydel",
                desc: "Earth 1A-B is a fixed point timeline in where Raeya's sacrifice meant nothing at all. There is no Fountain of Life to revive her, so instead, Kydel goes on a rampage, killing both Aloria and Zohl, gaining their powers, just to tear the fabric of reality to find Raeya.",
              },
              {
                code: "PR1-Earth 1A-C",
                title: "Continuing Kydel's Legacy",
                desc: "Earth 1A-C is a fixed point timeline where Raeya's dream is an actual reality. The reality where she accepted Zohl's power. After the death of Kydel, Raeya gained Kydel's powers and abilities from Zohl, including Kydel's two newest ones.",
              },
            ].map((branch) => (
              <div key={branch.code} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-xs text-[#c9a84c] px-3 py-1 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">{branch.code}</span>
                  <p className="font-display text-sm text-[#f2ebeb]">{branch.title}</p>
                </div>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{branch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prime-2 */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-xs text-[#c9a84c] px-3 py-1 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">PR2</span>
          <h2 className="font-display text-lg text-[#f2ebeb]">Prime-2 — The Gaia Continuity</h2>
        </div>
        <p className="font-display text-sm text-[#7a746e] mb-4 uppercase tracking-wider">The Real Earth Continuity</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Gaia Continuity is a timeline where your Earth is from. This continuity&apos;s name can also be referred to as The Real Earth Continuity, since this history you live in is the second prime timeline. Each Earth in this timeline will have their own corresponding code name. The so called Earth you readers live on right now is dubbed as <span className="text-[#f2ebeb]">PR2-EARTH-1</span> (Prime-2 Earth 1). There are many other realities of your earth, but their histories have yet to develop. Time will tell.
        </p>
      </div>

      {/* Prime-3 */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-xs text-[#c9a84c] px-3 py-1 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">PR3</span>
          <h2 className="font-display text-lg text-[#f2ebeb]">Prime-3 — The Old Earth Continuity</h2>
        </div>
        <p className="font-display text-sm text-[#7a746e] mb-4 uppercase tracking-wider">The Dead Shard Continuity</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Dead Shard Continuity is the oldest of these three Primes, and was the original timeline before the birth of two new ones. This continuity is also known as The Old Gaia Continuity or The Old Earth. (Prime-0, which is now Prime-3)
        </p>

        <div className="mt-6 px-5 py-6 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Story of Prime-3</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In this continuity, there used to be a planet that had both prime-1 and 2 combined, which was called Prime-0. That planet was called "Gaia-666." History unfolds with the basic biblical events, along with hibryds, humans, demons, and spirits alike. Whatever happened in the Bible happened in that reality, but there was a twist. Many fallen angels began to breed with false gods and humans, which resulted with Hibryds, whom are known as Hibrythianoids. However, these two sides clashed with each other, with Christianity being the dominant one. Both of these sides see no solution for equality and peace, but only judgement, hatred, and power. Each of these sides fought each other through the ages, with no end in sight.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            But in the year of 3356 AD, a super fluctuation occurred. The God of Gaia-666, YHWH ("yahweh," who was once benevolent in the prime days), had enough of the dire consequences of both parties&apos; actions. He placed a Distortion Apex Field and tore his very creation apart. This fluctuation caused the memories of the planet&apos;s to turn into Dead Shards, with their own timeline and universes. However, YHWH noticed that each of these shards&apos; memories contain dangerous effects and events. Some events can happen randomly, while others try to keep up to their own chronological order. But it is still not safe to travel to these memories.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            So, with all his power, he sacrificed himself, creating an indestructible barrier called the <span className="text-[#f2ebeb]">Warping Hex</span>. No one can enter or exit without the use of Dark Magic and a Distortion Shield to negate the powerful changing effects of history in each shards&apos; memories. There are up to <span className="text-[#f2ebeb]">9,999 shards</span> in total.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
            With YHWH gone, the Dead Shard Continuity was left adrift, bound in the Warping Hex, lost in the vast non-Euclidean space. And thus was the birth of two new prime continuities:
          </p>
          <div className="mt-4 space-y-2">
            {[
              { code: "Prime-1", label: "The Hibryoverse Continuity" },
              { code: "Prime-2", label: "The Gaia Continuity (The Real Earth Continuity)" },
            ].map((p) => (
              <div key={p.code} className="flex items-center gap-3">
                <span className="font-display text-xs text-[#c9a84c] px-3 py-1 rounded-lg border border-[#c9a84c]/30 bg-[#c9a84c]/5">{p.code}</span>
                <p className="font-body text-sm text-[#c8c2ba]">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DEMS Characters */}
        <div className="mt-8">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-5">Characters from Each Shard (DEMS-##)</h3>
          <div className="space-y-4">
            {[
              {
                shard: "DEMS-24",
                chars: [
                  { name: "Hunter Noxx", desc: "A recurring nemesis within the continuity. He is a lifelong nemesis of Tydel Nova." },
                  { name: "Llyndel Nova", desc: "The Original Variant of Kydel from the Original Planet of Gaia-666." },
                ],
              },
              {
                shard: "DEMS-66",
                chars: [
                  { name: "Jesus", desc: "A Historical Christian Figure that came back to live on a remnant shard of Gaia-666." },
                  { name: "Lucifer", desc: "Jesus' brother. To each other, they find a lot of fun in life. The two of the Shard's Balancers." },
                ],
              },
              {
                shard: "DEMS-77",
                chars: [
                  { name: "Sir Wynston Luciel, aka Dracula", desc: "A Historical Mythological Creature from the Ancient Medieval times of DEMS-77. Not only is he a vampire with powers, he had gained immortality and is able to harness a small amount of energy from the Sun to maintain the Shard's Balance." },
                ],
              },
              {
                shard: "DEMS-878",
                chars: [
                  { name: "Freya Silvers", desc: "The Original Variant of Raeya Flutters. Freya is the Shard's Balancer, a powerful Dryad-Sylph. Her powers contain all types of magic including Dark Magic, since Dark Magic is the original variant and version of Infernal Magic. She also has the powers to travel to each shard, which allows her to interact with other beings." },
                ],
              },
            ].map((group) => (
              <div key={group.shard} className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
                <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">{group.shard}</p>
                <ul className="space-y-3">
                  {group.chars.map((c) => (
                    <li key={c.name} className="flex gap-3">
                      <span className="text-[#c9a84c] mt-1 flex-shrink-0">›</span>
                      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                        <span className="text-[#f2ebeb]">{c.name}</span> — {c.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dreamverse */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Dreamverse — "Illusia"</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This particular subspace is a supernatural mental plane of existence that is powered through each individual&apos;s dreams. A subspace domain like this is called a <span className="text-[#f2ebeb]">Linked Realm</span> (like a fold or a sheathe), that is bound by everything, and is also present in The Outerbounds. Not only is it a manifestation powered by dreams, it can also be traversed in via Astralverge.
        </p>

        <div className="mt-6 space-y-4">
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Astralverge</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Also known as Astral Convergence, where it relies on the power of Astral Projection and Dream Inhibitor, and Dream Walking. This is an astral-activity of projecting the soul into a vision or dream. Visions and Dreams are an actual plane of existence, so in order to visit it, astralverging your soul into the Dreamverse is a near-impossible feat.
            </p>
          </div>
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Event Space</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A feature that is apparent inside the Dreamverse. Event Spaces are bubble realms that house different dream-like multiversal realities, each with their own memories and events of that significant time.
            </p>
          </div>
        </div>
      </div>

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
          to="/world/meta/TheSigilOfHibrythia"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Sigil of Hibrytheia</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
