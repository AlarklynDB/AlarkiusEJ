import { Link } from "react-router-dom";

export default function TheErbgerogerFlower() {
  return (
    <div className="min-h-screen bg-[#100908] py-16">
      <div className="max-w-[960px] mx-auto px-6">

        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
          The Hibrythian Saga &nbsp;/&nbsp; Locales &amp; Sights &nbsp;/&nbsp; The Erbgeroger Flower
        </p>

        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Seven Wonders of the World
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Erbgeroger Flower
        </h1>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Erbgeroger Flower — Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          One of the Seven Wonders of The World. A mountain flower on Mount Erbgeroger, on the continent of Rynel.
          It contains mystical luminescence hetryphils which creates a nearly indestructible silk (near Orb Weaver&apos;s Silk level).
          Only one known specimen exists in the world. A worldwide symbol for &ldquo;Unity.&rdquo; Protected by a magical barrier &mdash;
          no living being can enter its region.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Cultural Significance</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Its design has been engraved on every Hetrix bill (&#x126;3 &ndash; &#x126;150). Blank misprints of the bills (extremely rare)
            are valued at around &#x126;750,000.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Mystical Properties</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            <span className="font-display text-base text-[#f2ebeb]">Luminescence Hetryphils</span> &mdash; glows with an ethereal light of unknown origin.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            <span className="font-display text-base text-[#f2ebeb]">Magical Barrier</span> &mdash; a barrier of unknown origin surrounds the flower.
            Some theorize it may have been created by ancient magic users, while others suggest the flower itself generates the barrier
            as a natural defense mechanism.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Mysteries</h2>
          <ul className="space-y-3">
            {[
              "How was the barrier created?",
              "Why is there only one known specimen?",
              "What other properties might the flower possess?",
              "Who first discovered it?"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="font-body text-[#c9a84c] mt-1">&#x2014;</span>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-6">
            Ancient texts reference the Erbgeroger Flower, but the true origin of both the flower and its barrier has been lost to history.
          </p>
        </section>

        <div className="w-full h-px bg-[#c9a84c]/30 my-12" />

        <div className="flex items-start justify-between">
          <Link to="/world/locales" className="group block p-4 border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm transition-all duration-200 max-w-[220px]">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1 group-hover:text-[#c9a84c]/60 transition-colors">&larr; Back</p>
            <p className="font-display text-base text-[#f2ebeb]">Locales &amp; Sights</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
