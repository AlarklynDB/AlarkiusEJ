import { Link } from 'react-router-dom';

export default function TheNhuemynDB() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <span className="text-[#7a746e]">IV. Equation of Life</span>
        <span>›</span>
        <span className="text-[#7a746e]">The Nhuemyn DB</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Nhuemyn DB</h1>

      <div className="space-y-12">

        {/* Intro */}
        <section>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            A Database page for the types of races that are grouped into the classification for all the kinds of Nhuemyns in this world. This dictionary will often be updated due to new terms coming to recent chapters for the book itself. Disclaimer: All these words are either anagrams, made up, and or completely new words created by the creator for fictional purposes within the series of Hibryds.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Terminology */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Terminology</h2>
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 mb-6">
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Nhuemyns</p>
            <p className="font-body text-xs text-[#7a746e] italic mb-4">Scientific Name: Nheuma Sapherius</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Humans, Elves, Sylphs...etc of the kind are all related and bunched into one specific category; Nhuemyns. This is an umbrella term for humans that adopt similarities to each other despite the species. These types of humans can live up to 350 years of age. However, Sylphs can live longer than 350 years. Any kin of kind, that has almost human-like features are grouped in this classification.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* 14 Races */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Classification</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">What kinds of Nhuemyns are there?</h2>
          <p className="font-body text-sm text-[#7a746e] italic mb-8">Quite frankly, with so many human-like appearances around the world, there are 14 races that fall under this category.</p>

          <div className="space-y-8">

            {/* Humans */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Humans</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Humans as you know, are humans. Built with the basic necessary organs for survival, the brain, soul, and heart.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Dragonkin */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Dragonkin (demi/half)</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Dragonkins are humans that are partly descended from the ancient Earth Dragon, Aznthal. Although they no longer have the power to transform into a dragon, they have the ability to be very agile and intelligent. Most of the universities, academies, and schools of the world have Dragonkin as teachers for their knowledge is extensive.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Cyborgs */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Cyborgs</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Cyborgs are genetically modified humans with the use of technological advancements. Cyborgs in this world have different occupational careers of their choosing since most places need technological help or require recruitments.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Dwarfs */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Dwarfs</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                In Hetra's ancient past, Dwarfs were considered a highly important race for they are associated with smithing, crafting, and mining. The height of dwarfs comes close to 4'f to 4'7. But now that Hetra is slightly modernized, Dwarfs around the world have taken up most of the technological crafts' leadership and trade ports.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Dryads */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Dryads</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Forest entities that live in very lush jungles. Dryads in this world are known for wisdom and the art of sanctification.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Elves */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Elves</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Bow Hunters. They have very impish nature and they are highly classified as dangerous humans. The Elves in this world are acclaimed to two important rules: Hunt and Trade. Although some may not be dangerous (considered as Trader Elves), other elves are considered playful. An Elves' sexual drive is very high, with some cases ending up in brutal rape and kill.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Familia / Familiars */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Familia / Familiars</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Known as familiars, familia humans are small fairies that help balance nature itself. They are around the size of a mug. Familias can come in many different sub-races: fairies and pixies. Familiars are also known to help calm down quarreling races.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Half Demon */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Half Demon (Lesser Kind)</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Half Demons are humans whose appearance has two horns on their forehead and a thin, black tail. Lesser Kinds are not hostile nor violent, for they specialize in magic and dark magic. Some other nhuemyns like to call the Half Demons a Demon Mage.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Mystical Dryads */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Mystical Dryads</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Much like their forest dryad counterpart, Mystical Dryads are a combination of a sylph and Familiar cross-breed. Mystical Dryads are the only accessors to a special world called the Cloud Abode (for they also inhabit that place).
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Nezphels */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Nezphels</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Nezphels humans are elemental humans that interact with the particles of the world: "Nezpherons." Nezpherons are positive nemonic-energy atoms that help regulate the world's atomic and elemental structure. For if the atmosphere or important elements are scarce and no longer working, they are needed to be repaired and rejuvenated by Nezphels. There are only a few selected humans in the world who are Nezphels.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Sylphs */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Sylphs</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                Wind Spirits that fly freely around the world. They also reside in a place called the Cloud Abode and there are four current subraces of sylphs. A Sylphs' flying speed can match up to a hummingbirds' top speed from 60-70 BPS (beats per seconds). Some can even go faster through extensive training.
              </p>
              <Link
                to="/404"
                className="inline-flex items-center gap-2 font-body text-xs text-[#c9a84c] hover:text-[#f2ebeb] transition-colors"
              >
                More can be read on the Sylphs page →
              </Link>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Lizardmen */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Lizardmen / Lizardfolk</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Lizardfolk humans whose appearance has lizard like ears, and a tail coming from behind. Lizardmen are known as the worlds' best fishermen of the seas. The ability to navigate through harsh storms and environment is what makes them the world's best group.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Oceanfolk / Merfolk */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Oceanfolk / Merfolk</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Sea Humans of the oceans. They consist of merfolks, mermen and mermaids. Some have the ability to walk on land for they are also land creatures as well.
              </p>
            </div>

            <div className="border-t border-[#1e1c1a]" />

            {/* Zytkx Humanoid */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Zytkx Humanoid</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                Some say that 1 in a billion humans have a Zytkx Gene or Chromosome that turns a regular human into a Humanoid. They've called this type of race Zytkx. Zytkxs are vessel-humanoids where they can adapt to their surroundings very well with the use of their enhanced senses. In a dormant part of a human brain, once the Zytkx gene has activated, all their current senses gets heightened to 10 times. And during that same process, a second heart-like organ gets formed in their body, which allows Zytkxs to collect powers from sources around the world.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                However, with the current population in the world, there are two Zytkxs so far. In another continuity, known as The Dead-Shard Continuity, there used to be 100 Zytkxs before a great calamity happened.
              </p>
              <p className="font-body text-xs text-[#7a746e] italic mt-2">(This is where Hunter Noxx is from).</p>
            </div>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Back nav */}
        <div className="pt-4">
          <Link
            to="/world/databases"
            className="inline-flex items-center gap-2 font-body text-xs text-[#7a746e] hover:text-[#c9a84c] transition-colors"
          >
            ← Back to Databases & Systems
          </Link>
        </div>

      </div>
    </div>
  );
}