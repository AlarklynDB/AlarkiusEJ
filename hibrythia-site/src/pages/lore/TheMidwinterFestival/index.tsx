// ─── TheMidwinterFestival/index.tsx ───────────────────────────────────────────
// HAXL | The Hibrythian Saga — Legends & Myths: The Midwinter Festival
// Content sourced word-for-word from Notion: Legends & Myths > The Midwinter Festival
// ──────────────────────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

export default function TheMidwinterFestival() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        <Link to="/lore" className="hover:text-[#c9a84c] transition-colors">Legends &amp; Myths</Link>
        <span>/</span>
        <span className="text-[#7a746e]">The Midwinter Festival</span>
      </nav>

      {/* Hero */}
      <div>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Legends of The Past
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Midwinter Festival
        </h1>
        <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
          &ldquo;Queen Eira&apos;s Festival&rdquo;
        </p>
      </div>

      {/* Section: A Festivity in the Longest Month */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          A Festivity in the Longest Month
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Midwinter Festival is a holiday in the 12th Month of Mulumber, on the 55th day, which has a total of 60 days. This festival happened because of a prominent figure back in the ancient days of Hetra.
        </p>
      </section>

      {/* Section: The Story goes like this */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          The Story goes like this&hellip;
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The story about the Midwinter Festival dates back to a long time ago. It happened on the Alarctic Alpines, before it was covered in snow, where a kingdom once reigned over the whole world before everything went awry.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In the ancient past, a prominent figure by the name of Eira Valthorne was a queen for The Kingdom of Valthorne, which was named after her. She was a powerful queen bestowed with ice powers like no other. Her heart was said to be carved from a shard of eternal winter, along with her crown that was woven from moonlight and blackfrost. Although her dominion was cold and bitter, she kept balance, silencing the storms and guarding the land from hexicule showers. She was a defender for the world until one day.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          She tragically vanished on one midwinter&apos;s eve. Some say that she disappeared into the earth in the far south, while others say she died due to a strange illness. Other legends would say she was betrayed and was shattered into unfathomable counts of snowflakes, although that is up to interpretation.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          After Queen Eira&apos;s disappearance, the people wanted to remember her, so they began the <em>Midwinter Festival</em>. It is meant to be a sacred observance cloaked in boisterous behavior. Townsfolk would craft Frostblooms, which are crystalline flowers made from ice, bluebloom flowers, and enchanted herbs. These pretty crystals are placed in windows to guide her spirit home!
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          She was a feared queen, but people also respected her because of her impact on the world, so that&apos;s why on the 55th day, people recognize it as the day the Queen vanished. Although the people still do that, the festival still happens! Food is prepared not just for the people, but also for her spirit, as she enjoyed food and eating with her kingdom.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Not only is it called The Midwinter Festival, it&apos;s also called &ldquo;Queen Eira&apos;s Festival.&rdquo;
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          At the end of the day, a blue bonfire is lit to help her pass on peacefully.
        </p>
      </section>

      {/* Section: Frostbloom Crystals */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Frostbloom Crystals
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A symbol of Queen Eira. This was an iconic crown she would wear on her head and it became the Symbol of Protection.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          These Crystals are mainly comprised of Crystalline Flowers made from Ice, Bluebloom Flowers, and enchanted herbs. The Bluebloom Flowers have this particular dye that emits very softly at night, with a blue fire light inside a lantern.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A mold is given which is the exact shape of the Bluebloom Flower where water is poured so that it can cool down to take shape. Easily taken out.
        </p>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/lore"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Legends &amp; Myths</p>
          </div>
        </Link>
        <Link
          to="/lore/hexphos-island"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Lore of Hexphos Island</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
