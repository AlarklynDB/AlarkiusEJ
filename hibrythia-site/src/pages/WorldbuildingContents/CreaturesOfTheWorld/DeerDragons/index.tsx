import { Link } from 'react-router-dom';

export default function DeerDragons() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Deer Dragons</span>
      </div>

      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">Deer Dragons</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-8">Deeragons</p>

      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Deeragon — Image Placeholder ]</p>
      </div>
      <p className="font-body text-xs text-[#4a4844] italic mb-10 text-center">NEW DESIGN COMING SOON</p>

      <div className="space-y-12">

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Overview</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Deeragons — Deer Dragons</h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Deeragons are a cross-species of Deers and Nulergon Dragons. They are cute and timid creatures, with the body of a deer, a small tail of a dragon, along with huge wings that appear out of its back. Their antlers are made out of carbon-fiber keratin, which is a one-of-a-kind material in all Deeragon species. They all come in different fur variations and they are considered passive-neutral animals. Deeragons are tamable as they only require Luminescent Hetra Berries.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Deeragons primarily live on Norrane, but they travel freely around the world to breed and expand their race. They lay eggs and each egg size can range from small or large, depending on each of the Deeragons' build. Their favorite snacks are Luminescent Hetra Berries, and they are attracted to cute and tiny things. Their wings can expand and contract due to numerous muscle ligaments inside. They can easily hide their wings when they are on land. The fur coating on their neck and their wings keeps their body warm and soft, as they like basking in the sunlight. The heat stored in their fur gets converted into supplements that help quench their thirst for water.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              A baby Deeragon is called a Deeragi.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              A female Deeragon's appearance has fur-strands that stick out from the tail — they are sensitive to touch and it arouses female Deeragons. When a tail does not have fur strands stick out from the end of a tail, it is a male. Female Deeragons are alpha-dominant over their male counterparts.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Color Variants</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-6">Among the many variations of Deeragons, there are many common colors apparent within their species.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Common Colors</p>
              {['Pastel Light Pink','Pastel Orange','Brown-Gray'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Rare Colors</p>
              {['Crimson Dragon Red','Pure Blue','Sky-Blue Lightning'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Uncommon Colors</p>
              {['Sea Foam Green','Ice Crystal Opal','Black-Yellow Thunder'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Common Wild Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {['Norrane, Outskirt Mountains','Eulerich, Oelen Plains','Varleqe, Greenside Hills','Varleqe, Ribbonfelt'].map(loc=>(
              <p key={loc} className="font-body text-sm text-[#c8c2ba]">— {loc}</p>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />
        <div className="pt-4">
          <Link to="/world/databases/CreaturesOfTheWorld" className="inline-flex items-center gap-2 font-body text-xs text-[#7a746e] hover:text-[#c9a84c] transition-colors">← Back to Creatures of The World</Link>
        </div>
      </div>
    </div>
  );
}
