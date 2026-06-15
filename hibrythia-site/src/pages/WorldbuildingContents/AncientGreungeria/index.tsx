import { Link } from "react-router-dom";

export default function AncientGreungeria() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16 space-y-16">

      {/* Breadcrumb */}
      <nav className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] flex gap-2 items-center">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">World Databases</Link>
        <span>/</span>
        <span className="text-[#7a746e]">Ancient Greungeria</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">II. Ancient History</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb]">⌛ Ancient Greungeria</h1>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">The Father Continent</p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Hetra — Greungeria — Image Placeholder ]</p>
      </div>

      {/* The Father Continent intro */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-father-continent">The Father Continent</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Greungeria, the land of the ancient past of Hetra.</p>
          <p>This is where the lands used to be whole and one, before the split.</p>
          <p>At the start of the creation of Planet Hetra, once water and life was filled, there was once a massive continent that almost took up the planet&apos;s body. It stuck out of the water itself. Zohl had named this continent, Greungeria, the grand continent of its era. There were many wildlife here including different kinds of beasts, direosaurus wolves, dinosaurs, dragons....etc. Before the humans came, there were Five Giants.</p>
          <p>These Giants once held massive knowledge of Queen Laeyana&apos;s Magic, as they were the forefathers that govern each type of magic:</p>
        </div>
        <ul className="font-body text-base text-[#c8c2ba] space-y-1 ml-5 list-disc">
          <li>Sylph Magic.</li>
          <li>Infernal Magic.</li>
          <li>Elemental Magic.</li>
          <li>Combat Magic.</li>
          <li>General Magic.</li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Five Giants held the mastery of all these types of magic for each one. They lived until the first humans and nhuemyns came around 3.5 Oldendaye.</p>
        <ul className="font-body text-base text-[#c8c2ba] space-y-1 ml-5 list-disc">
          <li>Vivianya, The Sylph Nomad, Sylph Magic</li>
          <li>Yeulversi, The Human Ifrit, Infernal Magic</li>
          <li>Balkohv, The Nezphel Human, Elemental Magic</li>
          <li>Grenhcius, The Combat Cyborg, Combat Magic.</li>
          <li>Escaelui, The Human Giant, General Magic.</li>
        </ul>
        <p className="font-body text-sm text-[#7a746e] italic">
          (Each of these giants also participated in making the{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Hetranian Calendar</Link>!)
        </p>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Continental Split(s) */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-continental-splits">The Continental Split(s)</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>After many millennia and more, it became 501 Oldendaye. An asteroid came to Hetra from afar and split the north pole from the main Greungeria Continents. That north pole became known as the{" "}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Alarctic Alpines</Link>,{" "}
            where grass life was still active before a strange snow storm happened.</p>
          <p>It took nearly 200 years for the continents to settle into the current shape Modern Hetra stands on, but they didn&apos;t drift into place. The landmasses were violently displaced and and settled due to traces of hexicules within the lower mantles of crust, which caused it to become hyperactive (and cooling down significantly). But it wasn&apos;t as dangerous as it was compared to hexicule storms because The 5 Giants lived in this area and helped rebuild ancient civilization from the ground up even after the continental drift.</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Sylph Massacre of 15 AD */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-sylph-massacre-of-15-ad">The Sylph Massacre of 15 AD</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>In the Year of 15 AD, a huge war ensued over parts of the world. There were too many Sylphs which upset the balance of nhuemyn kind alike, and the Elves were the ones that started this genocide. Since Vivianya lived back in the past, her protection faded away for the Sylph Race after she had passed. A lot of conflict rose to war, which made the Elves more hasty and effective at their ways of hunting and killing. They&apos;re accusatory, volatile, and menaces. The Elves nearly killed 50% of the Sylph Population which was enough to cause fear into them. The remaining 50% went into hiding.</p>
          <p>Even during the active onslaught, two Sylph Representatives by the name Krentyl and Fahlia called up Queen Laeyana by accessing her Staff Altar out in the wilderness. They complained about the war and asked to be relocated somewhere safe, or, a new realm to reside in. Laeyana had huge pity for the Sylph Race. So she summoned Zohl, Aurora Rimaea, and Aloria to discuss what should happen, since Zohl was the one who made Planet Hetra along side with Aloria (with Rimaea being The Spirit of Life).</p>
        </div>
        <blockquote className="border-l-2 border-[#c9a84c] pl-5 py-1">
          <p className="font-body text-base text-[#c9a84c] italic">"I&apos;m not creating a new planet. I don&apos;t want to govern another responsibility while I have this one." — Zohl, politely refusing.</p>
        </blockquote>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Rimaea was officially retired from creating life (Unless asked). But Fahlia and Krentyl insisted. The Elves threatened their very existence.</p>
          <p>But Laeyana had an idea. Instead of asking Zohl and Rimaea, she handpicked out a Spirit from the Divine Realm to shoulder a new chapter. Her name was Nahfia, and her Role? She is the Spirit of Sylphs. The guardian and creator of all. Rimaea asked if Nafhia wanted the line and Creation Tether for the Sylph Race, and she obliged. She took it as her own and all ancestral DNA from the Sylph Line now resides in Nahfia.</p>
        </div>
      </section>

      {/* The Sylphs' New Home */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-sylphs-new-home">The Sylphs&apos; New Home</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p><Link to="/404" className="text-[#c9a84c] hover:underline">Nahfia</Link>{" "}
            now has creation powers. Since she isn&apos;t originally a Celestriax or a Lyeceriax, she has both of those Spirit Typing Powers. She wanted to do something nice for the Sylph Line, so instead of keeping them on Hetra, she created habitable formations in space. She calls this place The Sylphrelm, or The Cloud Abode.</p>
          <p>This place, however, is not round like Planet Hetra, nor does it spin on its axis, or revolve around a star. It is a flat, asteroid-like mass that has a top surface with a gravitational pull, similar to that of Hetra, which keeps the citizens and cities from floating into space. Even though the gravity keeps everything at bay, there is a huge round bubble like shield that envelops the entire mass, which helps give sunlight, air, and many other mystical properties.</p>
          <p>Thus, all the Sylphs from Hetra moved to the Sylphrelm.</p>
          <p className="text-[#7a746e] italic">More information about The Sylphrelm can be found here!</p>
        </div>
        <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] p-5">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">[ The Sylphrelm — Page Coming Soon ]</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Hetranian Ghrenglish */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-lg text-[#f2ebeb]" id="hetranian-ghrenglish">Hetranian Ghrenglish</h2>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">The Ancient Language of Planet Hetra</p>
        </div>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Ghrenglish is the ancient language spoken on Planet Hetra during the Greungerian Era and beyond, preceding the modern English of 1568 Aftendaye. Used by giants, early humans, demons, sylphs, and divine beings, Ghrenglish carries deep emotional, cultural, and symbolic resonance. Some phrases survive even in the modern age.</p>
          <p>There are two variations to the Language name, and it&apos;s pronounced the same way: Grhenglish or Ghrenglish.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
            <p className="font-display text-base text-[#f2ebeb]">Grhenglish</p>
            <p className="font-body text-base text-[#c8c2ba]">More for those who can&apos;t sound the R before the H.</p>
          </div>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
            <p className="font-display text-base text-[#f2ebeb]">Ghrenglish</p>
            <p className="font-body text-base text-[#c8c2ba]">Easier for those well versed in H before R — this one is more common nowadays. The "H" is silent in this.</p>
          </div>
        </div>
      </section>


      <div className="border-t border-[#2e2b26]" />

      {/* Subpages */}
      <section className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Explore Further</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/world/databases/AncientGreungeria/LearningGuide"
            className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm p-5 space-y-2 transition-all duration-200 group block"
          >
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Subpage</p>
            <p className="font-display text-base text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">⭐ Learning Guide for Hetranian Ghrenglish</p>
            <p className="font-body text-xs text-[#7a746e]">A beginner’s guide to alphabet, pronouns, verbs, pronunciation drills, and practice sentences in Ancient Grhenglish.</p>
          </Link>
          <Link
            to="/world/databases/AncientGreungeria/ChantOfBeasts"
            className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm p-5 space-y-2 transition-all duration-200 group block"
          >
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Subpage — Song</p>
            <p className="font-display text-base text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">“The Chant of Beasts”</p>
            <p className="font-body text-xs text-[#7a746e]">Þa Hræven’þa Býest — A primal battle chant sung in Varnæn (Demonic Ghrenglish). Full lyrics, Grhenglish translation, and backstory.</p>
          </Link>
        </div>
      </section>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex gap-4 flex-wrap">
        <Link to="/world/databases" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Databases &amp; Systems</span>
        </Link>
        <Link to="/world/databases/The17DimensionsOfReality" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">The 17 Dimensions of Reality</span>
        </Link>
      </div>

    </div>
  );
}
