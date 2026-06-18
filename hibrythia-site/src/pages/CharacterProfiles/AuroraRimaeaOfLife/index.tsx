import { Link } from 'react-router-dom';

export default function AuroraRimaeaOfLife() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
        &#8592; Back to Characters
      </Link>
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Ancient Spirits of Creation</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#d8d4cc] mb-8">
        Aurora Rimaeia of Life
      </h1>
      <p className="font-body text-base text-[#7a7670]">
        We're slowly migrating our content here! Check back soon.
      </p>
    </div>
  );
}
