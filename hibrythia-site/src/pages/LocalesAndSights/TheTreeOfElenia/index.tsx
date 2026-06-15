import { Link } from "react-router-dom";

export default function TheTreeOfElenia() {
  return (
    <div className="min-h-screen bg-[#100908] py-16">
      <div className="max-w-[960px] mx-auto px-6">

        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
          The Hibrythian Saga &nbsp;/&nbsp; Locales &amp; Sights &nbsp;/&nbsp; The Tree of Elenia
        </p>

        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Seven Wonders of the World
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Tree of Elenia
        </h1>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Tree of Elenia — Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          One of the Seven Wonders of The World. Located in the continent of Norrane, near the west border, south of Fallehnhelm,
          near the paved roads leading to the Gate Ruins of Lucid Sanctum.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The Tree of Elenia was originally a big Norrane Hardwood Tree with a magical orb in the center (other hardwood trees
            don&apos;t have an orb except this one, which makes it unique). It was named by a powerful Witch named Elena who lived in Norrane.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            After Elena&apos;s visit to the tree, a gem-storm knocked over the top, exposing the orb. The top half then flipped upside down
            and dug itself into the ground as extra roots. Vines sprouted from inside, powered by the orb, gathering air, sunlight,
            and hexicule energy.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Elena returned at old age and tried to fix the tree &mdash; she failed, as the hardwood was too hard. Without hesitating,
            she gave up her powers to Elenia and passed on.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Elenia became sentient. Elenia has no gender, but considers herself female due to Elena&apos;s inheritance. She has served as
            a peacekeeper for Norraneans during famines, droughts, harsh weather, and granted wishes. She also made the surrounding area
            unable to produce other trees (except herself and nearby objects) &mdash; which is why the land around the Tree of Elenia
            appears barren.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Elenia&apos;s Powers</h2>
          <div className="space-y-4">
            {[
              { label: "Wish Prayer", desc: "Inherited from Elena. Controls limits via Nature Manipulation and Aura Manipulation. Seemingly unlimited uses." },
              { label: "Wish Revival", desc: "Revives someone from the dead. 1,000 year cooldown after use." },
              { label: "Dual Contract Wish", desc: "Fulfills a contract wish that two individuals agree upon." },
              { label: "Life Leech", desc: "Takes life force from living beings. Can also drain hexicule energy." },
              { label: "Nature Manipulation", desc: "Controls air, plants, and earth." },
              { label: "Aura Manipulation", desc: "High level. Can deceive beings about her presence. Can communicate from far distances." }
            ].map((power) => (
              <div key={power.label} className="p-4 border border-[#2e2b26] bg-[#0f0d0c] rounded-sm">
                <p className="font-display text-base text-[#f2ebeb] mb-2">{power.label}</p>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{power.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-[#c9a84c]/30 my-12" />

        <div className="flex items-start justify-between">
          <Link to="/world/locales" className="group block p-4 border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm transition-all duration-200 max-w-[220px]">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1 group-hover:text-[#c9a84c]/60 transition-colors">&larr; Back</p>
            <p className="font-display text-base text-[#f2ebeb]">Locales &amp; Sights</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
