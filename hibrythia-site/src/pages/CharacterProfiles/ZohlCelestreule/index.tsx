import { useState } from 'react';
import { Link } from 'react-router-dom';

function PowerToggle({ title, color = '#c9a84c', children }: { title: string; color?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#131210] hover:bg-[#1a1714] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm" style={{ color }}>{title}</span>
        <span className="text-[#4a4844] text-lg" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>&#8964;</span>
      </button>
      {open && (
        <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

function SubPower({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="space-y-0.5">
      <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; {name} &gt;&gt;</p>
      <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

const SPIRIT_WARDENS = ['Fey','Jinn','Tay','Zena','Zaea','Rein','Ash','Jade','Cal','Lana','Stella','Naele (later split from the group)'];

export default function ZohlCelestreule() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Main Protagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Zohl Celestreule</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;It&apos;s not like I&apos;m spoiling anything! Ugh. You make me worry.&rdquo; &mdash; Zohl</p>
        </blockquote>
      </div>

      {/* Story Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Story Information</p>
          <p className="font-body text-xs text-[#c9a84c] mb-3">Contains spoilers for Book 1!</p>
          <div className="space-y-1">
            <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Role:</span> The Main Protagonist</p>
            <p className="font-body text-sm text-[#c8c2ba]">A Divine Spirit, A Spirit of Creation</p>
            <p className="font-body text-sm text-[#c8c2ba]">Kydel&apos;s Friend and Guide</p>
            <p className="font-body text-sm text-[#c8c2ba]">Raeya&apos;s Friend</p>
          </div>
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Profile</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Presence:</span> The Entire Series</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Point of Origin:</span> The Divine Realm</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Character Type:</span> Dynamic</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Zohl (design overhaul coming)</p>
      </div>

      {/* Origin */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Origin of Zohl Celestreule</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Divine Spirit of Creation, Zohl is a Celestriax Spirit, manifested in the Divine Realm. Celestriax Spirits are core Spirits, and they have the ability to change the state of matter of their build. Since Zohl&apos;s Metaphysical form is not solid, they can change the structure of their body. It&apos;s like a ghost. Spirits themselves don&apos;t have weaknesses, although they do have the generic human emotion attributes.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl&apos;s full name is Zohl Celestreule. However, he prefers his first given name. Being a Divine Spirit of Creation does not make him a God. Gods don&apos;t exist in this world — rather, they go by a different name: a <span className="text-[#f2ebeb] font-semibold">Lhumerial</span>.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His main ethereal form is very huge when he&apos;s in the Divine Realm. He spans around 2,578 meters (8,458 feet tall) — taller than the Burj Khalifa. However, he can augment his size to different various heights, like that of a human, a rabbit, or a whale.
        </p>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Personality</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            As a Divine Spirit of Creation, he holds his Spirit Complexity very high. He&apos;s intelligent, conscientious, ethical, organized, punctual, and a dedicated hard worker. He is headstrong and has the drive with a clear goal in mind. He can sometimes be stoic and tough, but at other times, he can be fun to hang around because of his laidback personality. Despite being a know-it-all limited spirit, he&apos;s passionate to learn new things, not just relying on his Spirit Complexity.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Appearances & Powers — TOGGLEABLE */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Appearances &amp; Powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl has three appearances. These three appearances have powers of their own and are limited to that specific appearance. Most of these forms share the same powers, but they overlap because they are important. Toggle each to expand!
        </p>

        <div className="space-y-3 mt-4">

          <PowerToggle title="Ethereal Form" color="#c9a84c">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl&apos;s default form as a Celestriax Spirit. They have a rough outline and no recognizable features. They are roughly the size of a tall building. He has armor-like skin that is integrated into his body, along with a helmet-like face.</p>
            <div className="pt-2 space-y-3">
              <SubPower name="Domain Manipulation" desc="Zohl can create, shape, manipulate, and distort/warp domains (personal or otherwise), a realm/space, dimension, plane, reality or specific sphere of influence either belonging to or owned by others, the user, anyone or anything." />
              <SubPower name="Stellarnova Energization" desc="This power allows Zohl to create planets, stars, galaxies, and universes." />
              <SubPower name="Nebular Propulsion" desc="Flying in space." />
              <SubPower name="Nebular Healing" desc="The power to restore any damaged part of a planet or universe." />
              <SubPower name="Pure Cloning" desc="This subpower can only be used after 13 uses. This ability allows Zohl to create perfect clones of himself, with each clone having a different mindset and personality." />
              <SubPower name="Spirit Force" desc="This power allows Zohl to connect with other spirits elsewhere, if it's on a planet or in a realm." />
              <SubPower name="Portal Transportation" desc="To travel from one point to another without physically crossing the distance between the two points." />
              <SubPower name="Level Power Cap" desc="The Galacticite in Zohl's chest serves as a fundamental support for all his divine powers. It contains infinite pure Divine Energy. Knowing that this is extremely dangerous, this type of power allows him to cap his powers, which allows him to use less power rather than his full capacity." />
              <p className="font-body text-sm text-[#7a746e] italic">And many more&hellip; if he uncapped.</p>
            </div>
          </PowerToggle>

          <PowerToggle title="Human Nezphel Form" color="#60a5fa">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl&apos;s human form. A Nezphel is a type of human race among many others. Zohl gains this form in EP 11 of Book 1, after his Flimpie Form became unusable. 5&apos;5 in height. He has orange hair that is soft and sleek, with dark green eyes. His fit is often either active wear or a tangy-brown jacket.</p>
            <div className="pt-2 space-y-3">
              <SubPower name="Flight Manipulation" desc="The ability to manipulate the air space around a user to fly at various heights." />
              <SubPower name="Rapid Healing" desc="Instant healing through the use of cosmic and stellar stardust. However, if this power was used on a Hibryd with an equivalent set of powers, it would take at least an hour for the Hibryd to heal." />
              <SubPower name="Knowledge Absorption" desc="This ability allows Zohl to instantly know information and knowledge from basic surroundings, including history. Its range and radius is limited within only 600 heunix (feet)." />
              <SubPower name="Spirit Force" desc="This power allows Zohl to connect with other Spirits elsewhere, if it's on a planet or in a realm." />
              <SubPower name="Power Amplification" desc="The ability to amplify specific powers." />
              <SubPower name="Empower (Power Construction)" desc="The ability and power to manifest new powers." />
              <SubPower name="Power Modifier" desc="The ability to modify abilities and powers, including supernatural." />
              <SubPower name="Energy Strengthener" desc="This ability allows Zohl to restore someone's lost energy and strength." />
              <SubPower name="Intangibility" desc="The ability to phase through objects." />
              <SubPower name="Advanced Morph" desc="The ability to change one's shape into another. This can also be used on objects. Advanced Morph can be used for permanent change, or temporary — much like how he modified Raeya's phone into a smartwatch." />
              <SubPower name="Domain Manipulation" desc="Zohl can create, shape, manipulate, and distort/warp domains. Unlike King Nhavah's Domain Manipulation (which is infinite), Zohl's version of this power is very limited." />
              <SubPower name="Time Warp" desc="Zohl can cause temporary changes to time depending on the situation. This power is extremely limited. Example: A Pocket Dimension's time flow is super slow. Zohl can warp the slow rate of the pocket dimension to fit the flow of what is going on in the real world." />
              <p className="font-body text-sm text-[#7a746e] italic">Zohl can uncap his divine energy (override) so that he can get new powers into his human form if needed.</p>
            </div>
          </PowerToggle>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Four Identities */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'Social Self', text: '"Social, what is that? I\'m not that social am I?" is probably something Zohl would say. He wouldn\'t say he\'s 100% social, BUT he does want to learn more about nhuemyn knowledge and how it benefits life on planet Hetra. He likes to help other Nhuemyns with their tasks. He doesn\'t like to show off his abilities, but when asked, he will do so willingly.' },
            { id: 'Personal Self', text: "When he's around Kydel and Raeya, he's the type to spew nonsense and info about the world or just entertaining them with banter and jokes. Along with his friends, he likes to help them out in any way he can to help improve their abilities." },
            { id: 'Core Self', text: "As a Spirit, he tends to keep to himself, strict with authority. He tends to stay quiet in some cases, but he also likes to observe how life goes about. He likes to think of himself as an observer, a watcher. Aside from that, he also likes learning new things." },
            { id: 'Hidden Self', text: "His Spirit Complexity is what makes his ego soar high. For Spirits, their main traits come around Authority, Power, and Control. At this level within Zohl's ego, he has his head up high in the clouds, in terms of being a Spirit. However, this all comes to bite him, after his failed attempt to subdue his rogue clone. He thinks that he can control their outcome. But in truth, the outcome became much worse." },
          ].map(({ id, text }) => (
            <div key={id} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
              <p className="font-display text-sm text-[#c9a84c]">{id}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Zohl&apos;s Spirit Complexity</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            He is a tough nut when it comes to being a Divine Spirit of Creation. Perfectionism and All-Accordance are his ways of doing things the way he wants them to happen. And since he holds these two traits, it can sometimes cloud his vision. He is infatuated with himself and always wants one way or another to get to his goal. Although Spirits themselves have the ability to discern what is right and wrong, Zohl does not rely heavily on this.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            When spirits become corrupted to greed, gluttony, pride, and control, it turns them into <span className="text-[#f87171] font-semibold">Sphouls</span> — which would be a fatal consequence for Zohl. It was Kydel and Raeya who taught him the significance of humbleness and being human, saving him from that path.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Timeline */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Zohl&apos;s Timeline</h2>

        <div className="space-y-4">
          {[
            {
              ep: 'EP 0 — Before Time',
              text: "Zohl was tasked by King Nhavah to create a universe and name it. Zohl therefore did, naming it the Hibryds Universe. He made a galaxy by the name Anadeya's Eye, where a planet named Hetra would bear life. A foreign entity by the name Eienel threatened to destroy it. Zohl tried to fend off Eienel, but was too weak. Summoning the Earlywulf, they both defeated Eienel and imprisoned the entity in an object called the Black Stone, then exiled the Black Stone away into the Skull Zakar, a dead planet.",
            },
            {
              ep: 'Creating the Spirit Wardens',
              text: "His first task was to create a Spiritqual — a cave or den that is powerful enough to be indestructible and can house spirits. He then cloned himself 12 times, all perfect clones with their own mindset and personality, located on Hetrania, the floating continent. He told his twelve clones to name themselves freely, then named the group The Spirit Wardens.",
            },
            {
              ep: 'Naele Goes Rogue',
              text: "One Warden went rogue. Naele almost destroyed the Spiritqual, though the rest of the Wardens stopped Naele. But long after, Naele escaped out into the vast world of Hetra in pendant form. Naele unfortunately bonded with a demon witch named Rachnaea. Rachnaea's demon heart poisoned Naele, but he didn't care one bit. They were too strong together to stop.",
            },
            {
              ep: 'Kydel is Anointed',
              text: "Zohl asked his current clones to gather up. The plan was to anoint the upcoming being as a Hibryd. After the Hibryd woke up, Leon would pass on his inheritance. Yes — that Hibryd was Kydel. After the plan was set, Zohl chose four of his clones to merge back with him (Zena, Zaea, Rein, and Ash). The plan was a success, and Kydel was given a second sentience to life.",
            },
            {
              ep: 'EP 11 — The Battle of Conflicts',
              text: "Zohl desperately finds a way to separate Naele from Rachnaea, but fails. The witch's grip and insane bloodlust hinders Zohl's attempt. But Kydel had reached his boiling point, killing the witch in the process, which separates Naele with coincidence. However, this results with Naele's remaining power depleted.",
            },
            {
              ep: 'EP 13 — Final Merge',
              text: "Zohl had asked all remaining Wardens to return and merge back with him, giving him his near spirit-god like powers — although one short. At this stage Zohl is at his best and strongest form.",
            },
          ].map(({ ep, text }) => (
            <div key={ep} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
              <p className="font-display text-sm text-[#c9a84c]">{ep}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Spirit Wardens List */}
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">The Spirit Wardens (Original 12)</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SPIRIT_WARDENS.map((name, i) => (
              <div key={name} className="flex items-center gap-2">
                <span className="font-display text-xs text-[#4a4844]">{i + 1}.</span>
                <span className="font-body text-sm text-[#c8c2ba]">{name}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-2">
            Current Wardens guarding the Spiritqual as of Book 1 before EP 13: Fey, Jinn, Tay, Cal, Jade, Lana, Stella.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Level of Powers */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Level of Powers (Capped Max) &amp; History</h2>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-1">The Galacticite</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Zohl&apos;s Galacticite Core is the fundamental support in his divine powers — an infinite endless supply of divine energy. It is what keeps him alive and powerful. The core is an important aspect to all spirits, and it is indestructible. Zohl knows how deadly having infinite power is, so he caps his power level at <span className="text-[#60a5fa] font-semibold">4745 Lp</span> (levels per power) / infinity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { ep: 'EP 0 — Before Time', lp: '365 Lp (after 12 clones)', note: "Original benefactor caps at 4745 Lp, then clones himself 12 times. Each clone contains 365 Lp per clone. After cloning, Zohl himself becomes one of the 365 Lp." },
            { ep: 'After Naele goes rogue', lp: '4015 Lp (group total)', note: "365 x 10 = 3650 + LeoRei = 4015 Lp. Naele is taken out of the equation." },
            { ep: 'Battling the Demon Witch', lp: 'Rachnaea reaches ~6,400 Lp', note: "Rachnaea's LP rose as she absorbed their attacks and powers by manipulating Naele's stress and energy." },
            { ep: 'After the Battle', lp: '1460 Lp', note: "Zohl + (3 x 365) = 1460 Lp. He merged back Zena, Zaea, and Ash as volunteers." },
            { ep: 'EP 1 — After EP 0 events', lp: '1825 Lp', note: "Zohl (1460 Lp) bonds with Kydel. After Leon's passing, Rein merges back with Zohl. Rein + Zohl = 1825 Lp. New max Lp." },
            { ep: 'EP 13 — Final Merge', lp: 'Near spirit-god level', note: "All remaining Wardens merged back — one short. Zohl at his best and strongest form." },
          ].map(({ ep, lp, note }) => (
            <div key={ep} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4 space-y-1">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">{ep}</p>
              <p className="font-display text-sm text-[#60a5fa]">{lp}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/KydelRhunes" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Kydel Rhunes</p>
          </div>
        </Link>
        <Link to="/characters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back to</p>
            <p className="font-display text-sm text-[#f2ebeb]">Characters</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
