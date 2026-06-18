// ─── TheLoreOfHexphosIsland/index.tsx ─────────────────────────────────────────
// HAXL | The Hibrythian Saga — Legends & Myths: The Lore of Hexphos Island
// Content sourced word-for-word from Notion: Legends & Myths > The Lore Of Hexphos Island
// ──────────────────────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

export default function TheLoreOfHexphosIsland() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          <Link to="/lore" className="hover:text-[#c9a84c] transition-colors">Legends &amp; Myths</Link>
          <span>/</span>
          <span className="text-[#7a746e]">The Lore of Hexphos Island</span>
        </nav>

        {/* Hero */}
        <div>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
            Legends of The Past
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
            The Lore of Hexphos Island
          </h1>
          <p className="font-body text-base text-[#7a746e] leading-relaxed max-w-[600px]">
            A surface-floating island near the south ice caps, drifting freely on Hetra&apos;s ocean currents &mdash; and said to be the origin of all life.
          </p>
        </div>
      </div>

      {/* Section: The Lore of Hexphos Island */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          The Lore of Hexphos Island
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          An island far off and very far away from both Norrane, Lynneria, Eulerich, and Varleqe. It is near the south ice caps and is a hazardous place. The island has two mountains, and one dormant volcano. The island is said to be extremely dangerous. It is impossible to get to this said island, and the origins of its name are unknown.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Not only is this island dangerous, it is a surface-floating island. Meaning that this island can freely move due to the planet&apos;s ocean current.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          One remark from a professor in Grelladore says this about Hexphos Island:
        </p>
        <blockquote className="border-l-2 border-[#c9a84c]/40 pl-5 space-y-3">
          <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
            &ldquo;Only one person has set foot there, and has experienced an insufferable pain. He was one of those who had overwhelming powers, and is a Hibryd, but he was an immortal one. Though as he came back, he felt empty, both physically and mentally, for what he saw and heard, was too divine for human-kind alike.&rdquo;
          </p>
          <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
            &ldquo;It is also said that Hexphos Island was where life once originated from&hellip;&rdquo;
          </p>
        </blockquote>
      </section>

      {/* Section: Mysteries of the Land */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Mysteries of the Land
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          There are a few phrases that are commonly heard all around the planet of Hetra. It goes like this:
        </p>
        <div className="space-y-2 pl-4 border-l border-[#2e2b26]">
          <p className="font-body text-base text-[#c8c2ba] italic leading-relaxed">&ldquo;All life originated from Hexphos Island.&rdquo;</p>
          <p className="font-body text-base text-[#c8c2ba] italic leading-relaxed">&ldquo;Where is Hozen?&rdquo;</p>
          <p className="font-body text-base text-[#c8c2ba] italic leading-relaxed">&ldquo;Who is Hozen?&rdquo;</p>
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Hozen is the name of the Hibryd that set foot on Hexphos Island once. This was a very long time ago, as he wanted to find how life started. But as he found the answer, he was cursed with immortality, since the truth behind life was too fearsome.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Hexphos Island is home to Cyndrypals.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          <span className="text-[#f2ebeb] font-semibold">Cyndrypals</span> are exotic beasts of Hexphos Island and only native to there. They are anamorphic creatures that can take whatever form they please. These beasts are very powerful in their own accord, but sometimes they won&apos;t attack if you give them an item called Hitryphls. Hitryphls make them friendly. Their appearance is both horrifying and cute, though it will take some time to get used to them since they can also speak.
        </p>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/lore/midwinter-festival"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Midwinter Festival</p>
          </div>
        </Link>
      </div>

    </div>
  );
}

