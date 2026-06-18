import { Link } from "react-router-dom";

export default function PhilstraRhys() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
        &#8592; Back to Characters
      </Link>
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Background Characters</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Philstra Rhys</h1>
      <p className="font-body text-base text-[#4a4844] italic">Lore coming soon.</p>
    </div>
  );
}
