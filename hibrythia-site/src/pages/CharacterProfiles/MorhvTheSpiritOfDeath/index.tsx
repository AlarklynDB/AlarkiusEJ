import { useState } from 'react';
import { Link } from 'react-router-dom';

function PowerToggle({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors text-left"
      >
        <span className="font-display text-base text-[#f2ebeb]">{title}</span>
        <span className="text-[#c9a84c] text-sm ml-4">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#111009] space-y-3 border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
}

export default function MorhvTheSpiritOfDeath() {
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
          Morhv, The Spirit of Death
        </h1>

        {/* Story Info Callout */}
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-3">
          <p className="font-display text-base text-[#f2ebeb]">Story Information</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Mentioned in a few chapters in coming books&hellip;but overall, his presence is a recurring entity that resides everywhere throughout the whole series.
          </p>
          <div className="border-t border-[#2e2b26] pt-3 space-y-3">
            <div>
              <p className="font-body text-base text-[#f2ebeb]">Story Role:</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2 mt-1">
                <li>Recurring Entity</li>
                <li>Ancient Spirit of Death</li>
                <li>Protector of Souls</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#f2ebeb]">Story Presence:</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2 mt-1">
                <li>Mentioned throughout the series</li>
                <li>Resides everywhere across timelines and realities</li>
                <li>Appears when needed most</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                There can only be one Spirit of Death throughout the Continuity and Multiverse of The Hibrythian Saga (Prime 1), since Morhv is the Anchor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <span className="font-body text-xs text-[#4a4844] tracking-widest uppercase">Morhv, The Spirit of Death &mdash; Illustration</span>
      </div>

      {/* Origin and Backstory */}
      <section className="space-y-10">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* The Spirit of Death, Morhv */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Spirit of Death, Morhv</h3>
          <p className="font-display text-xs tracking-[0.2em] text-[#c9a84c] uppercase mb-2">The Birth of Balance</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In the early days of the Divine Realm, after King Nhavah had manifested the Spirits of Creation and established the cosmic order, he turned his attention to a fundamental truth: where there is life, there must also be death. Not as an ending, but as a transition&mdash;a sacred passage from one state of existence to another.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aurora Rimaea, the Spirit of Life, had already been created. She was a pure, cosmic, angel-like sylph dryad whose purpose was to give life to planets and create the abundance of living beings across the universe. But the King recognized that life alone was incomplete. There needed to be a counterbalance, a force of equal importance to ensure the natural cycle remained unbroken.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            And so, King Nhavah manifested one more Ancient Spirit.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            With his vine-like palms held out, a black-and-white light shone atop them, forming into what looked like a vulture with panda-like patterns. The creature has black spots that resembled a skull covering where its eyes should be. Although it possessed no visible eyes, it could see through that black patch with perfect clarity.
          </p>
        </div>

        {/* The Naming and Purpose */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The Naming and Purpose</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The King looked upon this new spirit and spoke:
          </p>
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
            &ldquo;Your name is now Morhv. You shall be the Spirit of Death, the one who protects the deceased, and also Rimaea&apos;s rivaling partner.&rdquo;
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Morhv bowed before the King, his voice emerging for the first time&mdash;a beautiful, sweet tone like a cello being played elegantly. &ldquo;Thank you, my King,&rdquo; he said, and then leaped from the King&apos;s palms down to the ground where he greeted the rest of his companions.
          </p>
        </div>

        {/* Partners in the Cycle */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Partners in the Cycle</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When Morhv met Aurora Rimaea for the first time, there was an immediate understanding between them. They were not enemies, despite being &ldquo;rivals&rdquo; in the cosmic sense. Rather, they were two halves of the same eternal truth: life and death, creation and transition, beginning and ending. You could say that Morhv and Rimaea are couples, (parents).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            They became long-lasting friends, bound together not by opposition but by complementary purpose. Rimaea gives life to worlds; Morhv protects those lives when their time comes to an end. Together, they keep each other&apos;s sanity intact, reminding one another that both life and death are sacred, necessary, and beautiful in their own ways.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Morhv&apos;s panda-like patterns&mdash;black and white, perfectly balanced&mdash;symbolize this duality. They are almost like the Yin and Yang, representing the eternal dance between creation and conclusion, light and shadow, presence and absence.
          </p>
        </div>

        {/* The Protector of Souls */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The Protector of Souls</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Morhv is the personification of death itself, but not in the way mortals fear. He is not a reaper who takes life cruelly or prematurely. Instead, he is a <span className="text-[#f2ebeb]">guardian</span>, a <span className="text-[#f2ebeb]">protector</span>, a gentle guide who appears when beings from different worlds (whether multiversal or not) pass away or their time is up.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When a soul departs the mortal plane, Morhv shows up at the given time to guide them into the afterlife and protect them on their journey. He ensures that no soul is lost, abandoned, or afraid. He walks with them through the veil, offering comfort and reassurance that death is not an end, but a transformation.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As a force of nature, Morhv&apos;s main job is to protect souls. That is the one thing he does best, and it is a responsibility he takes with utmost seriousness.
          </p>
        </div>

        {/* Nature and Appearance */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Nature and Appearance</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Morhv bears the resemblance of a <span className="text-[#f2ebeb]">Ghost Vulture</span> with the distinctive black-and-white patterns of a Giant Panda. His skull-like markings give him an appearance that might seem ominous at first glance, yet his presence radiates calm and peace rather than fear.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Though he appears to have no eyes&mdash;only black patches where eyes would be&mdash;he sees everything with perfect clarity. Some say he sees not just the physical world, but the spiritual essence of all beings, perceiving their true nature beyond flesh and form.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            His voice is one of his most striking features: beautiful, sweet, and melodic, like a cello being played with elegance and care. When he speaks, there is comfort in his words, a reminder that death is not something to be feared but something to be honored.
          </p>
        </div>

        {/* Omnipresence Across Existence */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Omnipresence Across Existence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As an Ancient Spirit, Morhv possesses abilities that transcend ordinary existence. He has omnipresence knowledge&mdash;the ability to be everywhere at once, across past, present, and future. He can foresee incoming events, allowing him to arrive precisely when a soul needs him most.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He can traverse realms and dimensions freely, moving between the Divine Realm, the mortal plane, and the spaces in between. Time holds no barrier for him; he can manipulate it across multiversal realities to find and protect souls no matter where or when they exist.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Morhv can replay actions of the past, manifest d&eacute;j&agrave; vu, and even bestow reincarnation upon those he deems worthy of a second chance&mdash;though this power comes with a cooldown of 100 years, making it a rare and precious gift.
          </p>
        </div>

        {/* A Spirit of Compassion */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ A Spirit of Compassion</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Despite his association with death, Morhv is not cold or distant. He cares deeply for the souls he protects and for his fellow spirits in the Divine Realm. He values trust, integrity, and ethical conduct, and while he may be skeptical of questionable methods, he ultimately believes in second chances and learning from mistakes.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He has worked closely with other Spirits of Creation, including Zohl Celestreule, offering guidance and protection when needed. Though he may question the actions of others, his compassion always wins out in the end&mdash;because protecting souls is not just his duty, it is his calling.
          </p>
        </div>

        {/* Legacy and Presence */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Legacy and Presence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Throughout the ages, Morhv has remained a steady, invisible presence across all of existence. He does not seek recognition or praise. He simply appears when he is needed, guides souls to their next destination, and ensures that the cycle of life and death continues in harmony.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He is mentioned throughout The Hibrythian Saga, a recurring entity that resides everywhere across timelines and realities. While he may not always be seen, his influence is felt by every soul that passes from one realm to the next.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Morhv is a reminder that death is not an enemy to be feared, but a friend who walks beside us when our time comes&mdash;a gentle guide, a protector, and a force of nature that ensures no soul is ever truly alone.
          </p>
        </div>
      </section>

      {/* Spirit Powers */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Spirit Powers</h2>
        <div className="space-y-3">
          <PowerToggle title="Multiversal Time Manipulation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to control time across multiversal realities and dimensions so that he can freely travel to and find souls to protect.
            </p>
          </PowerToggle>
          <PowerToggle title="Action Replay">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The power to replay actions of others, events from the past, present, or future visually within their mind or by projecting an energy-like projection.
            </p>
          </PowerToggle>
          <PowerToggle title="Déjà-Vu Manifestation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              This allows the user to manifest d&eacute;j&agrave; vu into existence. The user brings feelings of repeating events, visions of the past, or other similar phenomena into current reality.
            </p>
          </PowerToggle>
          <PowerToggle title="Omnipresence Knowledge">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to be everywhere at once, past, present, and future, with the ability to foresee incoming events to absorb and obtain knowledge.
            </p>
          </PowerToggle>
          <PowerToggle title="Realm Transference">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to teleport between realms and dimensions.
            </p>
          </PowerToggle>
          <PowerToggle title="Bestowal of Reincarnation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A cooldown power that lasts up to 100 years. Morhv can use this power to reincarnate someone back into the same world if he feels like they deserve a second chance.
            </p>
          </PowerToggle>
        </div>
        <p className="font-body text-base text-[#7a746e] leading-relaxed italic">
          &hellip;and many more that relate to death&hellip;
        </p>
      </section>

      {/* Bottom Nav — second in Ancient Spirits sequence */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters/AeoniaTheSpiritOfTime"
          className="group flex items-center gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Previous</p>
            <p className="font-display text-sm text-[#f2ebeb]">Aeonia, The Spirit of Time</p>
          </div>
        </Link>
        <Link
          to="/characters/RunerusTheEarlywulf"
          className="group flex items-center justify-end gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%] text-right"
        >
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Runerus, The Earlywulf</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
