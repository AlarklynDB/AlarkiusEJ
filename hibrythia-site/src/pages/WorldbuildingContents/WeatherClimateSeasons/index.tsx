import { Link } from 'react-router-dom';

export default function WeatherClimateSeasons() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">
          World Databases
        </Link>
        {" / "}Weather, Climate &amp; Seasons
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
        Weather, Climate &amp; Seasons
      </h1>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Planet Hetra's Weather System ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Overview
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Planet Hetra&apos;s Weather System
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-8">
          Hetra&apos;s Weather, climate and seasons are moderate and not too strong. Unlike Earth, it can be scorching hot or cold on some days. This world offers better humidity, heat and cold levels, and also, seasons that are set to their own moderate degree. Storms only happen when the cycle of nature gets affected by hexicules in the air.
        </p>

        {/* Temperature Metric */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Temperature Metric
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Temperature Metric
        </h2>

        {/* Image placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-6">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ World Temperature Metric — Image Placeholder ]</p>
        </div>

        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          These two words are a play off for Earth&apos;s measurements, Fahrenheit and Celsius. These two measurements are not 1:1 to Earth&apos;s units as they are more stronger and also very, very, tough to translate. One new temperature metric for this world is called Nullfrost. Nullfrost is one of the coldest temperature measurements in the World of Hetra.
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
            <h4 className="font-display text-base text-[#f2ebeb] mb-1">Helphranite</h4>
            <p className="font-body text-sm text-[#c8c2ba]">A play on word for Fahrenheits.</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
            <h4 className="font-display text-base text-[#f2ebeb] mb-1">Helphieus</h4>
            <p className="font-body text-sm text-[#c8c2ba]">Also a play on word for Celsius.</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
            <h4 className="font-display text-base text-[#f2ebeb] mb-1">Nullfrost</h4>
            <p className="font-body text-sm text-[#c8c2ba]">A new metric for this world, inspired by Kelvin.</p>
          </div>
        </div>

        {/* Nullfrost detail */}
        <div className="bg-[#0f0d0c] border border-[#c9a84c]/20 rounded-sm p-5 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Nullfrost</h3>
          <p className="font-body text-sm text-[#c8c2ba] mb-2">
            In this world, that is below -310° Helphieus (-230° Helphranites) is called Nullfrost. In most parts of the world, some environments can go colder than -645° NF. Anything colder than that is called <span className="text-[#f2ebeb] font-semibold">Blackfrost</span>. The Huenix Abbr. for Nullfrost is <span className="text-[#f2ebeb] font-semibold">NF</span>.
          </p>
        </div>

        <p className="font-body text-sm text-[#c8c2ba]">
          Planet Hetra&apos;s Moderate temperature is at <span className="text-[#f2ebeb] font-semibold">35°HL</span>, or <span className="text-[#f2ebeb] font-semibold">75°HF</span>, which makes it easy for life to sustain.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── World Seasons ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          World Seasons
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          World Seasons
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          The seasons in this world closely resemble the counterpart of Earth, however, they are given their own unique names. It is also shown on our{" "}
          <Link to="/32-16TimeSystem" className="text-[#c9a84c] hover:underline">calendar</Link>!
        </p>

        <div className="space-y-3">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="font-display text-base text-[#f2ebeb] shrink-0 w-48">Pink Spring</h4>
            <p className="font-body text-sm text-[#c8c2ba]">Starts on Viviambel 1st and ends on Escael 31st.</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="font-display text-base text-[#f2ebeb] shrink-0 w-48">Calderia&apos;s Heat <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">(Summer)</span></h4>
            <p className="font-body text-sm text-[#c8c2ba]">Starts on Zestia 1st and ends on the 26th of Zestia.</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="font-display text-base text-[#f2ebeb] shrink-0 w-48">Aburhalle <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">(Fall)</span></h4>
            <p className="font-body text-sm text-[#c8c2ba]">Starts on the 27th of Zestia and ends on Elhmber 26th.</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="font-display text-base text-[#f2ebeb] shrink-0 w-48">Wintervahle</h4>
            <p className="font-body text-sm text-[#c8c2ba]">Starts on Mhulumber 1st and ends on Griselmber 39th.</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="font-display text-base text-[#f2ebeb] shrink-0 w-48">Dibeus Vitae Eve</h4>
            <p className="font-body text-sm text-[#c8c2ba]">Starts on Griselmber 40th, leads into the last month, and ends on Dibeus Vitae 7th.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── A Strange Phenomenon ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Phenomenons
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          A Strange Phenomenon
        </h2>
        <p className="font-body text-sm text-[#c8c2ba]">
          Planet Hetra emits a strange pink glow in the air when there are a lot of hexicules clustered beneath its rocky surface. This isn&apos;t harmful to life itself. Rather, it&apos;s what causes random storms and hexicule showers. Scientists have dubbed this strange element as{" "}
          <span className="text-[#f2ebeb] font-semibold">Oxygen-Hexatide-3</span> or,{" "}
          <span className="text-[#f2ebeb] font-semibold">oHx3</span>.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Ocean Currents ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Ocean Currents
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Ocean Currents
        </h2>

        {/* Image placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-8">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Ocean Currents — Warm &amp; Cold — Image Placeholder ]</p>
        </div>

        {/* Cold Currents */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-400 shrink-0" />
            <h3 className="font-display text-sm text-[#f2ebeb]">Cold Currents</h3>
          </div>
          <div className="space-y-3 pl-5">
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Alarctic Stream</h4>
              <p className="font-body text-sm text-[#c8c2ba]">This current descends from both the nooks of the north pole and crosses around the world, where it branches off into many different cold currents.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Rigid Cold Currents</h4>
              <p className="font-body text-sm text-[#c8c2ba]">A glacial current birthed the Rigid Cold Currents deep trenches. It snakes along the continent of Rynel&apos;s western coast and slides under Hetrania like a slithering serpent.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Rigid Spiral</h4>
              <p className="font-body text-sm text-[#c8c2ba]">A rare cold gyre that spirals inwards and outwards between Eulerich, Hexphos Island, The Alarctic Frost, Norrane, and Rynel. A lot of ocean storms happen here.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Southern Straight</h4>
              <p className="font-body text-sm text-[#c8c2ba]">Right below the Alarctic Frost, this straight current does a huge straight loop in the southern pole. It is said the currents here are the coldest.</p>
            </div>
          </div>
        </div>

        {/* Warm Currents */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-orange-400 shrink-0" />
            <h3 className="font-display text-sm text-[#f2ebeb]">Warm Currents</h3>
          </div>
          <div className="space-y-3 pl-5">
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Gulf Stream of Varleqe</h4>
              <p className="font-body text-sm text-[#c8c2ba]">A tropical current belt of warmth looping around the Gulf of Varleqe, from the east of Eulerich to Varleqe (around the planet). This also feeds into the Lynnerian Sea between Varleqe and Lynneria.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Rynnelia Current</h4>
              <p className="font-body text-sm text-[#c8c2ba]">A snake-like current that mixes into the Rigid Cold Currents that also wraps around that continent.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Norrane Belt</h4>
              <p className="font-body text-sm text-[#c8c2ba]">The warm currents here help regulate the temperature of the continent of Norrane.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Eulerian Surge</h4>
              <p className="font-body text-sm text-[#c8c2ba]">A three-style warm current of water that shoots eastward to Varleqe (from the west of that continent) before it continues onwards.</p>
            </div>
            <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-1">The Southern Alpine Lift</h4>
              <p className="font-body text-sm text-[#c8c2ba]">A current that spirals between Lynneria, Rynel, and the Alarctic Alpines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div className="border-t border-[#2e2b26] pt-8 mt-4">
        <Link
          to="/world/databases"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to World Databases
        </Link>
      </div>

    </div>
  );
}
