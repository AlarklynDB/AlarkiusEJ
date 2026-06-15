import { Link } from 'react-router-dom';

export default function TheContinentOfEulerich() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        Locales &amp; Sights / The Continent of Eulerich
      </p>

      {/* Hero */}
      <div className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Continent of Eulerich</h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Eulerich is a supercontinent east of Varleqe, Hetrania, Lynneria, and Norrane. Eulerich is home to the Eulerians, a race that is highly intelligent in ancient technology and ancient magic. Eulerich will only be mentioned in the first novel of the series, but the arc will come later in the series! You can check out the map here!
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Eulerich — Image Placeholder ]</p>
      </div>

      {/* Eulan Kingdom */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Eulan Kingdom</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Eulan Kingdom is located in the Eulan Desert, north of Oelen Kingdom. There is one major city and two striving towns that reside in the Eulan Kingdom.
        </p>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Eulanis</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Eulanis is the major city of the Eulan Kingdom. It is located within the Sandstone Mountains and takes up the size of a volcanic island (Honolulu in size). There in the city resides a King and Queen who governs the entire Eulan Kingdom, King Edward Briehale and Queen Anika Briehale.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The population alone in Eulanis reaches up to 5,000 individuals. Eulanis is the center for all trading posts, marketplaces, and fine goods that come in very expensive prices. Those who make a living here reports that the paying wages is around <span className="font-body text-[#f2ebeb]">&#294;22.45 hetrix ($16.32 USD)</span>. Finding jobs in Eulanis to work under the King and Queen is not a very hard task, because most locations will keep hiring despite other workers being laid off, or on vacation. There were many kings and queens in the past who rose to fame on Eulanis, but many of them died out either to old age or assassination attempts. One of the most famous assassinations happened in 450 OD (oldendaye): the Kulvera Attempt &mdash; orchestrated by Damien Kulvera to kill King Renton. This attempt needed the use of a rope, the Heimlich, a glass of water, and a gag. The Church of Hynnia sits here in this city.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Endriel</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Endriel is a thriving town southeast of Eulanis. Endriel is a trading town and has a trading road that leads down to the Oelen Kingdom. Not only is this town a trading town, this town connects all roads to Earnel, the Oelen Kingdom, and Eulanis. Endriel is like a rest-stop town for travelers and wanderers.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Earnel</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Earnel is a Lumberjack Town / Harbor Town that is located west of Eulanis and Endriel. Earnel has an endless supply of Dark Lumberwood Trees that is used for building materials.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Euriel Ruins / Euriel Town</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Euriel Ruins was an underground city that was once striving in the ancient Eulerich Era. However, most of the Eulerieans have moved out of that area due to high dust storms which made it difficult to breathe. It is now abandoned. There are many texts and libraries within the Euriel Ruins, and many Eulerieans believe that there&apos;s deep, hidden knowledge about the continent and ancient texts about Eulerian Magic.
          </p>
        </div>
      </div>

      {/* Oelen Kingdom */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Oelen Kingdom</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Oelen Kingdom is located in the Oelen Plains, southwest of Eulan Kingdom. The Oelen Kingdom is governed by one major city along with three towns and one ruin that complete the kingdom itself.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The population alone in the Oelen Kingdom is estimated around 450,340 individuals, including the king. This kingdom is responsible for the gathering of minerals, rocks, ores, and a mining system that connects all caves in the continent to one place, Rockseige Chasm and Orehirel Ruins.
        </p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed">
          Locales: Oelenis, Ol&apos;Lenel, Oarasel, Orheigne, Orehirel Ruins
        </p>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Oelenis</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Oelenis is the major city of the Oelen Kingdom. Located near the border of Eulerich. Oelenis takes up the size of a huge volcanic island and a forest away from the Cold Rigid Sea. Oelenis has ports and ships that ship off to sea on the west that gets to the Alarctic Frost, the South Pole for research on Alarctic Ores.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Oelenis is founded by King Gorvich Eckhart and Queen Fahlia Eckhart. Fahlia Eckhart married into Eckhart&apos;s family side, taking his name. Her sister is Queen Anika Briehale.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The paying wages in Oelenis, reported by well known professions goes up to around <span className="font-body text-[#f2ebeb]">&#294;20.65 hetrix ($14.75 USD)</span>. There are a lot of different professions, but the main popular ones are Carpentry, Smithing, Cartography, and Oceanography.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Ol&apos;Lenel</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Ol&apos;lenel is a striving vintage town that is south of Oelenis. Every building there has an old look, but is built to look modern-style. There are a lot of adults and elderly people living here. There are a few specific professions here, carpentry and smithing.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Oarasel</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Oarasel is a striving town and village northeast of Oelenis and Ol&apos;Lenel in the Oelen Plains. Oarasel is a sister town to Orheigne.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Orheigne</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Orheigne is a striving town and village southeast of Oarasel, northeast of Oelenis and Ol&apos;Lenel. Orheigne is a sister town to Oarasel.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Orehriel Ruins</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            There is said to be some hidden knowledge about how the massive supercontinent, Varleqe, was founded. Some speculated there once used to be a huge hidden library that contains massive knowledge about the Planet Hetra. However, these are just theories. Orehriel Ruins have a lot of monsters now, so trying to seek knowledge is impossible. Orehriel Ruins is also a place where many different kinds of ores and rocks reside. A great place for adventurers and collectors.
          </p>
        </div>
      </div>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales &amp; Sights</p>
            </div>
          </Link>
                  <Link to="/world/locales/hetrania" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">The Sky Continent of Hetrania</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

    </div>
  );
}

