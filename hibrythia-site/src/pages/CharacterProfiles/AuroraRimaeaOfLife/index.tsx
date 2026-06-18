import { useState } from "react";
import { Link } from "react-router-dom";

const PowerToggle = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
        <span className="text-[#c9a84c] text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#131210] border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
};

export default function AuroraRimaeaOfLife() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/characters"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Ancient Spirits of Creation
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Aurora Rimaea, The Ancient Spirit of Life
        </h1>
      </div>

      {/* Story Info Callout */}
      <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4">
        <p className="font-display text-sm text-[#f2ebeb] uppercase tracking-widest">Story Information</p>
        <p className="font-body text-sm text-red-400">Information on this page contains Spoilers for Book 1!</p>
        <hr className="border-[#2e2b26]" />
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Role</p>
          <p className="font-body text-sm text-[#c8c2ba]">Supporting Cast</p>
          <p className="font-body text-sm text-[#c8c2ba]">Ancient Spirit of Life</p>
          <p className="font-body text-sm text-[#c8c2ba]">Mother of Nature</p>
        </div>
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Presence</p>
          <p className="font-body text-sm text-[#c8c2ba]">Hibryds Book 1 EP 0 : Before Time</p>
          <p className="font-body text-sm text-[#c8c2ba]">Appears across timelines and realities</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 rounded-xl bg-[#1a1714] border border-[#2e2b26] flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4844]">[ Aurora Rimaea illustration — coming soon ]</p>
      </div>

      {/* Opening Quote */}
      <div className="border-l-4 border-[#c9a84c] pl-6">
        <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
          "Beauty among all things are of elegance."
        </p>
        <p className="font-body text-xs text-[#7a746e] mt-2">— Rimaea</p>
      </div>

      {/* Origin and Backstory */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* The Mother of Nature and Life */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Mother of Nature and Life</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In the early days of the Divine Realm, after King Nhavah had established the Spirits of Creation and defined the roles of Celestriax and Lyeceriax, he turned his attention toward something fundamental, something that the universe, and every world within it, would desperately need.
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              Life.
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            From his vine-like palms, two lights of brown and red shone and split, one of them forming into something pure, angelic, and majestic. A <strong className="text-[#f2ebeb]">cosmic, angel-like sylph dryad</strong> emerged before him, radiant and soft in presence.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The King looked upon her and spoke:
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              "Your name is Aurora Rimaea, the Spirit of Life."
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            And so she was anointed. She bowed before the King, and from that moment forward, she became <strong className="text-[#f2ebeb]">Aurora Rimaea</strong>, the <strong className="text-[#f2ebeb]">Ancient Spirit of Life</strong>, the <strong className="text-[#f2ebeb]">Mother of Nature</strong>, the one who breathes existence into the worlds that Spirits of Creation build.
          </p>
        </div>

        {/* Her Role in Creation */}
        <div className="space-y-4">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Her Role in Creation</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aurora Rimaea&apos;s purpose is both vast and sacred: she gives life to habitable planets. Everything living, humans, plant life, animal life, beast life, is born from her touch.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When Zohl Celestreule completed the physical formation of <strong className="text-[#f2ebeb]">Planet Hetra</strong> and the Eienel threat had been dealt with, he went to Rimaea and asked her to give his world life. She answered. Traveling to the Nhumela Cluster, she gave the planet:
          </p>
          <div className="space-y-3 pl-4">
            {[
              { label: "The skies, the waters, and the lands", desc: "The foundational geography of a living world" },
              { label: "A massive supercontinent, Greungeria", desc: "A giant landmass that gouged out of the water (later split by an asteroid)" },
              { label: "Plant life", desc: "Which thrived and flourished across its surface" },
              { label: "Dinosaurs and ancient beasts", desc: "The first creatures to walk the world, designed to evolve through time" },
              { label: "Nhuemyns (humanoid species)", desc: "Many kinds of humans, elves, sylphs, and more" },
              { label: "Feral and passive animals", desc: "Diverse animal life seeded across Hetra's continents and ecosystems" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  <strong className="text-[#f2ebeb]">{item.label}</strong>, {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Rimaea&apos;s work on Planet Hetra is the reason all life on it exists. She is, in the truest sense, the planet&apos;s <strong className="text-[#f2ebeb]">mother</strong>.
          </p>
        </div>

        {/* Her Partnership with Runerus */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Her Partnership with Runerus</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When it came time to give Hetra a direwolf lineage, Zohl asked <strong className="text-[#f2ebeb]">Runerus, the Earlywulf Spirit</strong>, to create the Direosaurous Wolf as a predecessor for future direwolf generations. Rimaea worked alongside this process, her domain of life encompassing not just humanoid species, but the full breadth of creatures, beasts, and ancient animals that filled the world.
          </p>
        </div>

        {/* Her Relationship with Morhv */}
        <div className="space-y-4">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Her Relationship with Morhv</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Rimaea did not work alone in the cosmic cycle. King Nhavah, upon noticing that she had no counterpart to balance her domain, asked her:
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              "Aurora, how would you like to have a partner that will help aid and protect your creation once their time is up?"
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Rimaea, understanding immediately, replied: <em>"Oh? You mean Death? As it itself is important for life?"</em>
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The King nodded, and <strong className="text-[#f2ebeb]">Morhv, the Spirit of Death</strong>, was created from his vine-like palms shortly after. When the two met for the first time, there was an immediate understanding between them. They were not enemies despite being cosmic "rivals." Instead, they were <strong className="text-[#f2ebeb]">two halves of the same eternal truth</strong>: life and death, creation and transition, beginning and ending.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            They are long-lasting friends, bound by complementary purpose. They keep each other&apos;s sanity intact, reminding one another that both life and death are sacred, necessary, and beautiful in their own ways. <em>You could say that Morhv and Rimaea are couples, in a sense, parents to all things living and dying.</em>
          </p>
        </div>

        {/* Legacy and Presence */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Legacy and Presence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aurora Rimaea appears across timelines and realities throughout The Hibrythian Saga. While she may not always be front and center in the story&apos;s events, her influence is woven into every blade of grass, every creature that walks, and every being that draws breath on Planet Hetra.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She is the Mother of Nature, quiet, ever-present, and the reason there is a world worth protecting at all.
          </p>
        </div>
      </div>

      {/* Appearance */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <p className="font-display text-sm text-[#f2ebeb] mb-2">In The Divine Realm:</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A <strong className="text-[#f2ebeb]">pure, cosmic, angel-like sylph dryad</strong>, luminous, soft, and divine in presence. She was described as looking like a heavenly figure when first manifested from King Nhavah&apos;s palms. Her appearance reflects the qualities of her domain: natural, living, and beautiful.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          She can take on forms suited to her role and the environments she visits, much like other Ancient Spirits.
        </p>
      </div>

      {/* Powers and Abilities */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers and Abilities</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-2">
          As an Ancient Spirit, Aurora Rimaea holds powers that extend across all of cosmic life:
        </p>
        <div className="space-y-3">
          <PowerToggle label="<< Life Bestowal >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Her primary role: she can give life to any habitable planet, including all forms of living beings: humanoids, plants, animals, beasts, and more. Her life-giving touch is what transforms a barren planet into a living, breathing world.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Nature and Ecosystem Creation >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              She creates the full ecological framework of a planet: skies, waters, landmasses, forests, and the natural systems that sustain all life.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Species Manifestation >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              From existing creature DNA, she can create new species and iterations of life, guiding the diversity of a planet&apos;s inhabitants.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Omnipotence (Limited) >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              As an Ancient Spirit, she holds omnipotence, unlimited power within the scope of her domain.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Limited Omniscience >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              She holds vast knowledge, though not absolute awareness of all things.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Realm Transference >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              She can travel between realms and dimensions to reach the worlds that need her.
            </p>
          </PowerToggle>
        </div>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed italic mt-2">
          Note: As an Ancient Spirit (not a Lhumerial), Rimaea does not hold all four omnis. She is all-powerful and widely knowing within her domain, but is not omnipresent or omnibenevolent in the full Lhumerial sense.
        </p>
      </div>

      {/* Relationships */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationships</h2>
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              name: "King Nhavah",
              desc: "Her creator and King. Nhavah anointed her with her name and role, recognizing from the moment of her creation that life needed a dedicated guardian. She bowed before him and greeted the rest of her companions."
            },
            {
              name: "Morhv, The Spirit of Death",
              desc: "Her cosmic \"rival\" and long-lasting partner. They are two halves of the same cycle; she gives life, he protects it when it ends. Their bond is one of the most profound in the Divine Realm. They are described as something like parents to all living things."
            },
            {
              name: "Runerus, The Earlywulf",
              desc: "A fellow Ancient Spirit she works alongside in populating worlds with life and creatures."
            },
            {
              name: "Zohl Celestreule",
              desc: "The Spirit of Creation who called upon her to give life to Planet Hetra. She is a key resource and collaborator for Spirits building new worlds."
            },
            {
              name: "Nahfia, The Spirit of Sylphs",
              desc: "Another Ancient Spirit who works within the domain of life and creation, the founder of the Sylphrelm and creator of the Sylph Race."
            }
          ].map((rel) => (
            <div key={rel.name} className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714]">
              <p className="font-display text-base text-[#f2ebeb] mb-2">{rel.name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{rel.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters/RunerusTheEarlywulf"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Runerus, The Earlywulf Spirit</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
