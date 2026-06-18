import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── PowerToggle ────────────────────────────────────────────────────────────────
interface PowerToggleProps {
  title: string;
  children: React.ReactNode;
}

function PowerToggle({ title, children }: PowerToggleProps) {
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
        <div className="px-5 py-4 bg-[#111009] space-y-2 border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
}

// ── SectionAnchor ──────────────────────────────────────────────────────────────
function SectionAnchor({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#c9a84c] font-display text-xs tracking-widest">─────⊰</span>
      <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
    </div>
  );
}

// ── DivineObject ───────────────────────────────────────────────────────────────
interface DivineObjectProps {
  name: string;
  desc: string;
}

function DivineObject({ name, desc }: DivineObjectProps) {
  return (
    <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
      <p className="font-display text-sm text-[#c9a84c]">{name}</p>
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function KingNhavah() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Breadcrumb + Header ── */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">From The Divine Realm</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">King Nhavah</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;Today is a lovely day in The Divine Realm. Everything here is Good.&rdquo; &mdash; Nhavah</p>
        </blockquote>
      </div>

      {/* ── Story Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Information</h2>
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p className="text-[#c9a84c] text-sm italic">Information on this page contains Spoilers for Book 1!</p>
          <p>Character Information, Backstories, and Origin</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Story Role</p>
              <ul className="space-y-1 text-sm">
                <li>Main Supporter Protagonist</li>
                <li>Support Character</li>
                <li>The King of All Creation</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Story Presence</p>
              <p className="text-sm">Main Support Character in Hibryds &mdash; &ldquo;A Grand Voyage&rdquo; of EP 0 &mdash; &ldquo;Before Time&rdquo;</p>
            </div>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Character Type</p>
              <p className="text-sm">Round</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Origin and Backstory ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Origin and Backstory</h2>

        {/* The King of All Creation */}
        <div className="mb-10">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-4">The King of All Creation</h3>
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>Before galaxies, stars, or realms &mdash; there was a singular presence. A faint white line gathered in the shapeless void, morphing and shifting until it became a luminous sphere. A low, magnificent hum reverberated from it, like a growling note from a tuba, immensely powerful yet soft. From this presence came a voice:</p>
            <blockquote className="border-l-2 border-[#c9a84c]/30 pl-4 py-1">
              <p className="italic text-[#c9a84c]"><em>&ldquo;I&hellip; Am&hellip; Nhavah.&rdquo;</em></p>
            </blockquote>
            <p>King Nhavah is the very first being &mdash; a <span className="text-[#f2ebeb]">Lhumerial</span>, a 10-Dimensional entity that exists outside the constraints of known reality. He is <span className="text-[#f2ebeb]">Omnipotent, Omniscient, Omnipresent, and Omnibenevolent</span>. Before he took on a form, he was formless &mdash; appearing as a white, grainy-textured orb drifting through the void.</p>
            <p>Upon entering the <span className="text-[#f2ebeb]">Divine Realm</span> &mdash; a realm he himself spoke into existence &mdash; his form changed into that of a <span className="text-[#f2ebeb]">Stellar Zaratan</span>: a colossal, divine lion-turtle creature with an immense tree growing from its shell. Majestic, ancient, and powerful beyond measure.</p>
          </div>
        </div>

        {/* The Creation of Everything */}
        <div className="mb-10">
          <SectionAnchor label="The Creation of Everything" />
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>With authority and purpose, King Nhavah spoke the universe into being:</p>
            <ul className="space-y-2 list-none pl-2">
              <li><span className="text-[#f2ebeb]">Space and Stars</span> &mdash; He commanded light and stars into the vast, formless void, calling it <em>Space</em>.</li>
              <li><span className="text-[#f2ebeb]">The Divine Realm</span> &mdash; A bright yellow light, separated from space, wrapping around all of existence.</li>
              <li><span className="text-[#f2ebeb]">The Stygian Realm</span> &mdash; A gray-black realm that formed between the gaps of the Divine and the Extreulux.</li>
              <li><span className="text-[#f2ebeb]">The Extreulux Realm</span> &mdash; The Space-Time Continuum, co-existing and binding with Space itself.</li>
            </ul>
            <p>He then met <span className="text-[#f2ebeb]">Queen Laeyana</span>, who appeared of her own will &mdash; a rainbow-hued tesseract diamond of a being. Together, they named themselves <em>Lhumerials</em> and made the Divine Realm their shared home. He decorated the realm with golden roads, quartz pillars, and statues alongside Laeyana, and proclaimed the <span className="text-[#f2ebeb]">Fountain of Life</span> &mdash; a sacred pool of divine water capable of reviving the dead under specific conditions.</p>
          </div>
        </div>

        {/* The Manifestation of Spirits */}
        <div className="mb-10">
          <SectionAnchor label="The Manifestation of Spirits" />
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>From vine-like tendrils that emerged from his shell, King Nhavah manifested Spirits into the Divine Realm. He divided them into two groups:</p>
            <ul className="space-y-2 list-none pl-2">
              <li><span className="text-[#f2ebeb]">Celestriax</span> &mdash; Core Spirits, focused on universe and planet creation, power construction, amplification, and modification.</li>
              <li><span className="text-[#f2ebeb]">Lyeceriax</span> &mdash; Fluid Spirits, responsible for cosmic weather and the creation of Lyecerium Crystals.</li>
            </ul>
            <p>Each Spirit was given a <span className="text-[#f2ebeb]">Galacticite</span> &mdash; an indestructible divine orb embedded in their chest, the source of their vitality and power. The King gave all Spirits the will to choose their own individuality and personality.</p>
            <p>He notably recognized two spirits as exceptionally promising: <span className="text-[#f2ebeb]">Zohl Celestreule</span> (Celestriax) and <span className="text-[#f2ebeb]">Aloria Cloudwave</span> (Lyeceriax), and personally tasked them with the creation of a galaxy and solar system.</p>
            <p>He also created the <span className="text-[#f2ebeb]">Ancient Spirits</span>:</p>
            <ul className="space-y-2 list-none pl-2">
              <li><span className="text-[#f2ebeb]">Aurora Rimaea</span> &mdash; Spirit of Life</li>
              <li><span className="text-[#f2ebeb]">Runerus</span> &mdash; The Earlywulf, Spirit of the Direwolves</li>
              <li><span className="text-[#f2ebeb]">Morhv</span> &mdash; Spirit of Death, Rimaea&apos;s rivaling partner</li>
              <li><span className="text-[#f2ebeb]">Aeonia</span> &mdash; Spirit of Time (The Omni-Bound Spirit), given powers approaching that of a lesser Lhumerial, tasked with governing time across the Multiverse from within the Extreulux Realm</li>
            </ul>
            <p>King Nhavah also created <span className="text-[#f2ebeb]">Stellar Kherubihm, Stellar Chimeras,</span> and <span className="text-[#f2ebeb]">Stellar Pegasai</span> as divine guards and free-roaming beings of the realm.</p>
          </div>
        </div>

        {/* On Sphouls */}
        <div className="mb-10">
          <SectionAnchor label="On Sphouls" />
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The King holds a firm law: any Spirit who rebels against his commands or corrupts themselves through greed, gluttony, pride, or control will be turned into a <span className="text-[#f2ebeb]">Sphoul</span> &mdash; a Spirit Ghoul &mdash; and expelled to the Extreulux Realm as its guardian. This came to pass when the first Sphoul led a rebellion within the Divine Realm, which the King swiftly ended.</p>
        </div>

        {/* His Wisdom and Foresight */}
        <div>
          <SectionAnchor label="His Wisdom and Foresight" />
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>King Nhavah chose <em>not</em> to bestow all four omnis upon the Spirits he creates &mdash; only omnipotence and limited omniscience. He feared that granting full omnipresence and omnibenevolence to Spirits would twist their personalities and turn them into Sphouls. His restraint in creation reflects a deep wisdom: power must be balanced with limitation.</p>
            <p>He made an <em>exception</em> for Aeonia alone, recognizing the immense cosmic responsibility her role demanded.</p>
            <p>He also knows the futures of those he creates. He foresaw the greatness of Zohl and Aloria before assigning them their tasks, and knew a specific individual would one day use the Fountain of Life.</p>
          </div>
        </div>
      </div>

      {/* ── Appearance ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <div className="space-y-4">
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">In The Divine Realm</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">A <span className="text-[#f2ebeb]">Stellar Zaratan</span> &mdash; a colossal, god-like lion-turtle creature with an immense divine tree growing from its shell. His vine-like tendrils extend from his shell, which he uses to manifest Spirits and objects. He is enormous and divine in presence.</p>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Before the Divine Realm&apos;s creation</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">A formless white, grainy-textured orb &mdash; the primordial shape of a Lhumerial before taking residence in a realm.</p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Although he can take on <span className="text-[#f2ebeb]">as many forms as he pleases</span>, the Stellar Zaratan is his primary and most recognized appearance.</p>
        </div>
      </div>

      {/* ── Powers and Abilities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Powers and Abilities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">King Nhavah is a <span className="text-[#f2ebeb]">10-Dimensional Lhumerial</span>, holding all four omnis:</p>
        <div className="space-y-3">
          <PowerToggle title="Omnipotence">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Unlimited power with no known ceiling.</p>
          </PowerToggle>
          <PowerToggle title="Omniscience">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">All-knowing across time, space, and existence.</p>
          </PowerToggle>
          <PowerToggle title="Omnipresence">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Exists everywhere at once.</p>
          </PowerToggle>
          <PowerToggle title="Omnibenevolence">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Acts with absolute goodwill and divine purpose.</p>
          </PowerToggle>
          <PowerToggle title="Domain Manipulation (Infinite)">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Unlike Zohl&apos;s limited version of this power, King Nhavah&apos;s Domain Manipulation is <em>infinite</em> &mdash; he can create, shape, manipulate, and warp any domain, realm, dimension, or sphere of influence without restriction.</p>
          </PowerToggle>
          <PowerToggle title="Spirit Manifestation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to manifest Spirits, Ancient Spirits, and divine beings from pure energy.</p>
          </PowerToggle>
          <PowerToggle title="Universal and Realm Creation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">He spoke the Divine Realm, the Stygian Realm, the Extreulux Realm, and the framework of Space itself into existence.</p>
          </PowerToggle>
          <PowerToggle title="Power Bestowal">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">He grants Spirits their Galacticites, unique powers, and roles. He bestowed near-Lhumerial power onto Aeonia as a singular exception.</p>
          </PowerToggle>
          <PowerToggle title="Realm Governance">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">He governs all systems &mdash; planets, stars, and realms &mdash; from within the Divine Realm, which sits above all other constructs including Time, Space, Matter, and Reality.</p>
          </PowerToggle>
        </div>
        <div className="mt-6 bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Limitations</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Despite his infinite power within his own universe, King Nhavah &mdash; like Queen Laeyana &mdash; is <span className="text-[#f2ebeb]">limited to his own universe</span>. He cannot become an Exeterius, cannot travel to The Outerbounds, and different multiversal iterations of him exist across other universes.</p>
        </div>
      </div>

      {/* ── Relationships ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationships</h2>
        <div className="space-y-3">
          {([
            ['Queen Laeyana', 'His queen and co-Lhumerial. They co-exist within the Divine Realm together, balancing the domains of Spirit governance (Nhavah) and Magic (Laeyana). He flirted with her upon their very first meeting. 💛'],
            ['Zohl Celestreule', 'One of the Spirits Nhavah personally recognized and tasked with creating the Nhumela Cluster and Planet Hetra. Nhavah knew Zohl\'s future would "be as bright as ever."'],
            ['Aloria Cloudwave', 'Another personally recognized Spirit, assigned to work with Zohl and create Lyecerium Crystals.'],
            ['Aeonia', 'The Spirit to whom Nhavah granted an extraordinary exception — powers nearing that of a lesser Lhumerial — and bestowed the title "The Omni-Bound Spirit."'],
            ['Morhv', 'Created by Nhavah as the Spirit of Death to balance Aurora Rimaea\'s domain of life.'],
            ['Calypso (The Cosmic Train from Beyond)', 'A being from beyond the Divine Realm\'s gaps that became friends with King Nhavah and Queen Laeyana.'],
          ] as [string, string][]).map(([name, desc]) => (
            <div key={name} className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
              <p className="font-display text-sm text-[#f2ebeb]">{name}</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divine Objects Under His Stewardship ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Divine Objects Under His Stewardship</h2>
        <div className="space-y-3">
          <DivineObject name="The Fountain of Life" desc="A revival pool in the Divine Realm, guarded under Nhavah's permission. Can revive the dead through a process called Incandescentry, under specific conditions." />
          <DivineObject name="Auraunite" desc="A divine gem capable of granting infinite wishes." />
          <DivineObject name="Energon" desc="A trident-shaped divine object that stores Energoral Power for vitality and immortality." />
          <DivineObject name="Jadeite" desc="A green divine stone favored by both Nhavah and Laeyana." />
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back to</p>
            <p className="font-display text-sm text-[#f2ebeb]">Characters</p>
          </div>
        </Link>
        <Link to="/characters/QueenLaeyana" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Queen Laeyana</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
