import { Link } from "react-router-dom";

export default function PlanetHetraInteractive() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link
          to="/multimedia"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Interactive Media
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Interactive Media
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          Interactive Globe: Planet Hetra
        </h1>
      </div>

      {/* Coming Soon card */}
      <div className="border border-[#2e2b26] rounded-xl bg-[#1a1714] px-8 py-16 flex flex-col items-center text-center gap-5">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Status</p>
        <h2 className="font-display text-2xl text-[#f2ebeb]">Coming Soon</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed max-w-[480px]">
          This interactive experience is currently under construction. Check back later — it&#39;s going to be something really special.
        </p>
        <div className="flex flex-wrap gap-3 mt-2 justify-center">
          <Link
            to="/multimedia"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2e2b26] rounded-sm text-[#7a746e] font-body text-xs tracking-widest uppercase hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-200"
          >
            &#8592; Back to Multimedia
          </Link>
          <Link
            to="/world"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c] font-body text-xs tracking-widest uppercase hover:bg-[#c9a84c]/8 transition-all duration-200"
          >
            Explore Worldbuilding &#8594;
          </Link>
        </div>
      </div>

    </div>
  );
}
