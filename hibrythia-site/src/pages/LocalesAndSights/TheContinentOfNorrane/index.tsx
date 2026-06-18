import { Link } from 'react-router-dom';

export default function TheContinentOfNorrane() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          Locales &amp; Sights / The Continent of Norrane
        </p>

        {/* Hero */}
        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Continent of Norrane</h1>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In the past for the continent of Norrane, there used to be massive gem-storms that contained huge traces of Hexicules. Though after many centuries and millennia, these storms have decreased. Here are the places in Norrane that suffered from hexicules and the wild forestation growth. There are mountain islands that surround this continent and they are enveloped in fog. Getting here is risky.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Norrane — Image Placeholder ]</p>
      </div>

      {/* Locations */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Green City Harbor</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A city north-west of Fallehnhelm and the Lucid Sanctum. It is near the border of Norrane. Green City Harbor used to operate well with East City Harbor (a city in Nharvenile, Lynneria), but due to the massive hexicules that Norrane is made up of, the Green City Harbor was overtaken by forestation.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Fallehnhelm</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A city in Norrane. It operates okay, but the crazy growth of forestation is causing the city to become more...devastated. Though the citizens are fine with the city the way it is.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Tree of Elenia</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            An ancient tree and historical landmark in Norrane. It is located south of Green City Harbor and Fallehnhelm near the border of the continent. It&apos;s next to some paths that head east towards the gate ruins that lead to the Lucid Sanctum.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Gate Ruins</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            South of both the Fallen Ruins and the Lucid Sanctum in Norrane. It&apos;s the gateway to both places.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Lucid Ruins</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            South of the Lucid Sanctum, located in the center of Norrane. This place houses ancient knowledge of the past.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Lucid Sanctum</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A mysterious, enchanting place in the center of Norrane. It&apos;s hidden deep within Norrane and is the only place that can&apos;t be destroyed since it&apos;s guarded with indestructible magic. You can find Hexicules here, small pieces of them. The only piece that cannot be mined, destroyed, or moved is the giant Hexicule Crystal that holds the continent of Norrane up. If destroyed, Norrane will disappear. The Lucid Sanctum is also heavily guarded by versatile magic creatures, known as Ophulus.
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
                  <Link to="/world/locales/rynel" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">The Continent of Rynel</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

    </div>
  );
}

