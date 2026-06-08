import { Link } from 'react-router-dom'

// ─── Shared helpers ───────────────────────────────────────────────────────────
function ImgPlaceholder({ label, aspect = 'aspect-[3/4]' }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 my-6`}>
      <span className="text-3xl opacity-20">🖼</span>
      <span className="text-[10px] font-mono text-text-faint opacity-50">{label}</span>
    </div>
  )
}

// ─── Section divider ─────────────────────────────────────────────────────────

function Divider() {
  return <div className="section-divider my-8" />
}

// ─── Identity block ───────────────────────────────────────────────────────────

function IdentityBlock({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] transition-colors text-left"
      >
        <span className="font-mono text-sm text-text-muted">
          <span className="mr-2">{icon}</span>{title}
        </span>
        <span className="text-text-faint text-xs font-mono">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-sm text-text-muted leading-relaxed space-y-2 bg-[rgba(255,255,255,0.01)] border-t border-white/5">
          {children}
        </div>
      )}
    </div>
  )
}

// ─── Overview Tab ────────────────────────────────────────────────────────────


// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">The Quiet Crow &amp; The Ninja</Link>
      <span>/</span>
      <Link to="/titles/KarasuToNinja-TQCTN" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span className="text-[#d49fff]">Asami Kurose</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────
function AsamiKuroseTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/asami-kurose.jpg" aspect="aspect-[3/4]" />
      <ImgPlaceholder label="/characters/asami-yokai-forms.png (Yokai Forms)" aspect="aspect-video" />

      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Upcoming Character</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Asami Kurose</h2>
        <p className="text-text-faint font-mono text-sm italic">"Tension rises when unrequited love happens to be painful like a bed of thorns"</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Asami' },
            { label: 'Last Name', value: 'Kurose' },
            { label: 'Gender', value: 'Female' },
            { label: 'Yokai Race', value: 'Octoquid (Original) — Cursed with Snake Venom Blood' },
            { label: 'Age', value: '26' },
            { label: 'Height', value: '5\'9" / 175.26 cm' },
            { label: 'Birthday', value: 'June 17th, 2075' },
            { label: 'OC Created', value: '11/20/2025' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="text-[10px] font-mono text-text-faint mb-0.5">{label}</p>
              <p className="text-sm text-text-muted">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Nicknames */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Nicknames</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">General — </span>Kuru or Rose</p>
          <div className="space-y-1">
            <p><span className="text-text-faint font-mono text-xs">Haruhi — </span>Asachii</p>
            <p><span className="text-text-faint font-mono text-xs">Reina — </span>Ami, sometimes Kuu-chan</p>
            <p><span className="text-text-faint font-mono text-xs">Ruruka — </span>"Urosai-chan" (shut up slang)</p>
          </div>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Blue Lady', 'OctoGirl', 'Takoyaki', 'Kumo-Tako (Spider Octopus)', "Tako'don (Tako + Udon)", 'Super Emo Mommy #4'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
            <p className="text-[10px] font-mono text-text-faint mt-1">YES. ARU IS CALLING HER THAT.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Lineage */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Asami Kurose's Lineage</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>She's a descendant of the Octoquid Yokai Line from 1779, which was where the YARC began their activities. They captured all Octoquid alike and infused them with a <em>cursed tome</em> of Venomous Snake Blood, causing them to become half octoquid and snake. They then released them into the wild to cause violence under control. Not every Octopi followed orders — some hid from the YARC. Some fled to Mizuki Shoto for freedom.</p>
          <p>Among those family lines within the OctoQui Lineage, one became <span className="font-mono">Kurohashi (1)</span>, then <span className="font-mono">Kurohase (2)</span>, <span className="font-mono">Kurokaze (3)</span>, <span className="font-mono">Kurohana (4)</span>, and finally — <span className="font-mono text-[#d49fff]">Kurose</span>. The last generation of the Kurohashi Family.</p>
          <p>To some people, she gave off a very chill aura of control and grace. But beneath all that surfaced laid a girl that was victimized by the YARC.</p>
          <p className="text-text-faint text-xs font-mono">The YARC has been experimenting on Octopi for 225 years — not just Octopi. They've also targeted Kitsunes, Mermaids, and Demons.</p>
        </div>
      </div>

      <Divider />

      {/* Overview */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Character Overview</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Asami Kurose is a deeply dangerous and psychologically complex octopus yokai. She was once Haruhi Aoi's former lover before she disappeared without notice. Hailing from Sapporo (Hokkaido), she was known in her earlier years as a High School student (first year) as cold, composed, and mysterious. She has an uncanny ability to remain calm even under verbal abuse.</p>
          <p>She is a repeat offender. Kurose was eventually captured by the YARC where she was registered as Subject 6. Her records include allegations of manipulation, predatory behavior toward younger yokai girls, and multiple unconfirmed assaults. While under YARC watch, she was brutally mistreated by other yokai, forced into servitude under the corrupted director Shikuibito (The Death Eater Spirit).</p>
          <p>She was once impregnated by a Demon Yokai, and birthed a child, which was labeled a "defect" — tragically killed inside the facility. She also birthed another child, an octopus crossed mermaid. Also killed. Her time in the YARC was short lived, often escaping and getting captured again. Each time she was captured, she was forced to confront her own fears with the Telepathy Regulators the YARC supplied.</p>
        </div>
      </div>

      <Divider />

      {/* Relationship with Haruhi */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Her Relationship with Haruhi Aoi</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>In her first year of high school (even with so much going on), Haruhi asked her out. At first, Asami wondered why she asked — but Haruhi confessed that she liked her cold and mysterious composure. They dated for a while. But it wasn't good. The influences from the YARC ingrained into Asami's mind caused her to torture Haruhi unknowingly: Emotional Grooming, physical assault, and coercive control.</p>
          <p>Haruhi endured it all. Not because she wanted it — but because she didn't understand why Asami was projecting it. She blamed herself for not seeing through Asami.</p>
          <p>For Asami, this was her way of release — despite all the harm she caused. The institutional system may have broken her, but all she wanted was intimacy. To her, it was softness over unrelenting love — a love that felt exploitative but burned with <em>passion</em> that neither hurts nor discriminates.</p>
          <p>Haruhi failed to see past all the masks Asami wore.</p>
          <p>One day, Haruhi sent a breakup text. Asami, seeing this, disappeared. Couldn't respond. Only until the YARC found her again and imprisoned her — before she broke out one last time.</p>
          <div className="border-l-2 border-[#d49fff] pl-3 italic text-text-faint">
            Kurose represents a darker consequence of broken institutions and unresolved cycles of abuse, trauma, and manipulation. But behind her violent history lies a question — was she always this way, or did the YARC mold her into the monster she became?
          </div>
        </div>
      </div>

      <Divider />

      {/* Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Used to have an aloof personality since she was regarded as one of a kind — an octopus. Her aloofness was kind of like a cat's — very playful underneath. But ever since the YARC showed up, her personality started to change.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>She calls herself a monster — she thinks she's not worthy of others, let alone close friends. She views herself as insignificant and less than human ever since she began escaping the YARC. Even when she dated Haruhi, things took a drastic turn. She'd often manipulate Haruhi with telepathy just to feel safe. The reason she dated Haruhi was because she wanted to feel love — Haruhi's softness felt like Asami's only light.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self">
          <p>Her core self is mixed with her personal self. Because her relationship with Haruhi isn't just wrong — <em>she knows it is.</em> Even with everything happening, she wants to reconcile with her but can't even bring it up because the YARC would come in at random times to take her back. Haruhi has no idea that Asami is being victimized by an institution that gave her all those bad habits and actions.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Institutional and systematic abuse. The YARC broke her even when she was dating Haruhi. She has bruises, injuries, and scratches from every breakout — because Haruhi was the only light Asami could see.</p>
          <p>What Asami doesn't fully know herself is that she craves love with excessive softness. She wants to feel love, to be loved, to be respected. All she ever wanted was for someone to see her for who she is — but her judgement always gets the better of her, which is why she lashes out.</p>
          <p>After Haruhi's breakup text, Asami became afraid. Scared to even respond. She became depressed. The YARC finally took her and held her captive for years. When she broke out one last time, she wanted to die — but the one thing that kept her going was Haruhi. She wanted to see her one last time. Not for forgiveness. She knows what she did was wrong. But those hollow emotions she held back are what prevent her from repairing that relationship. Both their bonds are already broken — yet Haruhi doesn't even realize that Asami truly loved her. Still does.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Yokai Abilities &amp; Biology</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Telepathy (Primary)</p>
            <p className="text-sm text-text-muted leading-relaxed">Her hair-like tendrils (Octoquid traits) can be used to invade someone's mind:</p>
            <ul className="mt-2 space-y-1 text-sm text-text-muted">
              {['Gaslighting them', 'Reading their mind', 'Spying their memories', 'Thought Replacement'].map((p, i) => (
                <li key={i} className="flex gap-2"><span className="text-[#d49fff]">{i + 1}.</span>{p}</li>
              ))}
            </ul>
            <p className="text-xs text-text-faint mt-2 italic">She could easily become a Yokai Ninja, but she doesn't want to — she thinks Yokai Ninjas are merciless and too reckless. <span className="text-[#ffaad4]">(HAHAH THROWING SHADE AT RURUKA I SEE — Aru, approves! 💚)</span></p>
          </div>

          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Snake-Curse Biology</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Since Shikuibito had cursed the original Octoquid Yokai Bloodline in 1779 AD, Asami became a descendant of that lineage. As a result, she has snake blood that contains venom — giving her natural immunity to venom and poison from nature itself.</p>
              <p>However: artificial poison and venom is a weakness. When the YARC found her in high school, they took her snake blood and weaponized it as an anti-counter catalyst drug to experiment on her. This man-made compound is called <span className="font-mono text-red-400">INVЯ3XE</span>.</p>
            </div>
          </div>

          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Octopus Biology / Tendril Abilities</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Her blue dark hair is actual organs that act like octopus tendrils. They show her true emotions even if she hides behind them. They can stretch infinitely due to regenerative cells and stretch manipulation. She can walk on walls and ceilings. She can morph her hair into actual tentacles that look like an octopus.</p>
            </div>
          </div>

          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Natural Octopus Abilities</p>
            <ul className="space-y-1 text-sm text-text-muted">
              <li><span className="text-[#d49fff] font-mono text-xs">Morph Ability — </span>Can morph into a full octopus. Can also turn her fingers into tendrils. Multitasking Queen.</li>
              <li><span className="text-[#d49fff] font-mono text-xs">Full Octopus Form — </span>Two forms: Yokai style or Baby style. Both can blend into environments (natural octopus pigmentation). This won't work in human form unless she overrides it herself.</li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* NEO-Esper Powers */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">NEO-Esper Powers</h3>
        <div className="callout mb-4">
          <p className="text-sm text-text-muted leading-relaxed">Neo-ESPers are super rare in Naiseikai — and she's one of them. Not only were her telepathic abilities abused during her time at the YARC, they were also <strong>enhanced</strong> each time she escaped. Her powers are <span className="text-[#d49fff] font-mono">500x</span> stronger than an average telepath (or esper), making her the most powerful ESPer-based user in all of Naiseikai (dubbed by the YARC). Despite this, she holds back at <span className="text-text font-mono">4% out of 50,000%</span>.</p>
        </div>

        <h4 className="font-mono text-xs text-text-faint mb-3">Passive Powers</h4>
        <div className="space-y-2 mb-6">
          {[
            { name: 'Animal Telepathy', desc: 'She can talk to animals. The smaller the animal, the harder it is. Includes bugs and insects. Has no problem conversing with Tardigrades.' },
            { name: 'Empathetic Instinctive Response (E.I.R)', desc: 'Linked to her hair — her tendrils are attuned to her heart/emotions. Even if Asami hides her feelings, her hair shows them. Textile E.I.R Attunement: her hair can read and sense emotions from handwritten letters.' },
            { name: 'Hydrokinesis', desc: 'She\'s an octoquid that can water bend. Her Hydrokinesis can cut metal and the hardest materials. Can become Cryo-kinesis and Aero-kinesis. She can grab water from anywhere and turn it into different states of matter. If startled, her hair-like tendrils will shoot out ink.' },
            { name: 'Tendril Manipulation / Synchronization', desc: 'Her hair acts like tendrils. Even when they have a mind of their own, Asami can control them when needed. Mild hair growth. Doesn\'t hurt. Can regrow them (infinite regeneration).' },
            { name: 'Psychic Shield / Mental Barrier / Immunity', desc: 'She can protect herself from psychic attacks mentally.' },
            { name: 'Microscopic Zoom (Atomic Sight)', desc: 'She can see atoms and smaller matter. Like x-ray atomic sight — she can turn this on to see the composition of any object in front of her.' },
            { name: 'Telepathic Relay', desc: 'Can relay thoughts to others.' },
            { name: 'Telepathic Combat', desc: 'Mental battles with others. Asami likes using this for games like Rock Paper Scissors.' },
            { name: 'Thought Manipulation', desc: 'Only uses on herself mentally so she wouldn\'t have to feel.' },
            { name: 'Telepathic Absorption', desc: 'She can absorb telepathy-based powers, including psionic ones.' },
          ].map(({ name, desc }) => (
            <div key={name} className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl p-3">
              <p className="font-mono text-xs text-[#d49fff] mb-1">{name}</p>
              <p className="text-sm text-text-muted">{desc}</p>
            </div>
          ))}
        </div>

        <h4 className="font-mono text-xs text-text-faint mb-3">Dangerous Abilities</h4>
        <div className="space-y-3">
          {[
            {
              level: 'Danger Level 10',
              color: 'text-yellow-400',
              border: 'border-yellow-400/30',
              powers: ['Clairvoyance', 'Dowsing', 'Electronic Manipulation', 'Magnetic Manipulation', 'Holographic Projection', 'Illusion Manipulation', 'Memory Reading / Manipulation', 'Mental Barrier Destruction', 'Psychometry'],
            },
            {
              level: 'Danger Level 35',
              color: 'text-orange-400',
              border: 'border-orange-400/30',
              powers: ['Mental Manipulation', 'Mental Plane Manipulation', 'Mind Control / Remote Control', 'Mind Exchange', 'Mind Image'],
            },
            {
              level: 'Danger Level 70',
              color: 'text-amber-600',
              border: 'border-amber-600/30',
              powers: ['Persuasion and Possession', 'Psionic Intuition', 'Sensory Scrying (all kinds)', 'Sensory Deprivation / Manipulation'],
            },
            {
              level: 'Danger Level 100',
              color: 'text-red-400',
              border: 'border-red-400/30',
              powers: ['Subatomic DNA Control / Manipulation'],
            },
          ].map(({ level, color, border, powers }) => (
            <div key={level} className={`border ${border} rounded-xl p-4 bg-[rgba(255,255,255,0.02)]`}>
              <p className={`font-mono text-xs ${color} mb-2`}>⊰ {level}</p>
              <div className="flex flex-wrap gap-2">
                {powers.map(p => <span key={p} className="tag text-xs">{p}</span>)}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-faint mt-3 italic">If Asami went all out — the one (prohibited) thing she will NOT do is alter someone's biology. She respects agency, despite being a victim of institutional abuse.</p>
      </div>

      <Divider />

      {/* Other Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Other Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Sexuality</p>
            <p className="text-sm text-text-muted">Bisexual. Little preference over men, a lot over women. Her preference in women: she loves women who are submissive and those with a very gall energy.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Cold and mysterious. Often reserves herself.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">Winter and snow. Cute animals. Frogs are her favorite.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Insects. Dogs.</p>
          </div>
        </div>
        <div className="neon-card mt-3">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies / Skills</p>
          <p className="text-sm text-text-muted">Quite a multitasker due to her tendril-like hair.</p>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Acts like tendrils since she's half octopus and snake. Very dark blue color.</p>
          <p><span className="text-text-faint font-mono text-xs">Eyes — </span>Navy blue (a gray-like shade) with a slight purple hue.</p>
          <p><span className="text-text-faint font-mono text-xs">Style — </span>Likes to wear comfy cardigans and off-shoulder clothes.</p>
          <p><span className="text-text-faint font-mono text-xs">Memento — </span>An ocean-like pendant necklace that can turn into a bracelet. Wears it as a necklace — the pendant is a locket. Inside is carved: "August 15th, 2090 — 'The Day I was the Most Happiest,'" with a picture of Asami crying in Haruhi's arms. A needle (or strand of her hair) is needed to unlock the pinhole.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p className="text-[#d49fff]">朝美 — Asami</p>
          <p>朝 = morning, dawn &nbsp;|&nbsp; 美 = beauty, beautiful</p>
          <div className="mt-2" />
          <p className="text-[#d49fff]">黒瀬 — Kurose</p>
          <p>黒 = Black, darkness &nbsp;|&nbsp; 瀬 = Rapids, shallows, or shoal (like in a river)</p>
        </div>
      </div>

    </div>
  )
}

// ─── Character Index ──────────────────────────────────────────────────────────

const CHARACTER_TABS: { key: Tab; label: string; color: string }[] = [
  { key: 'characters-reina',  label: 'Hanako Reina',     color: 'text-[#7ef5ff]' },
  { key: 'characters-ruruka', label: 'Koa Ruruka',        color: 'text-[#d49fff]' },
  { key: 'characters-haruhi', label: 'Haruhi Aoi',        color: 'text-[#ffaad4]' },
  { key: 'characters-aru',    label: 'Little Bunny Aru',  color: 'text-[#ffaad4]' },
  { key: 'characters-asami',  label: 'Asami Kurose',      color: 'text-[#d49fff]' },
]


// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function AsamiKurosePage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <AsamiKuroseTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" className="btn-neon-cyan text-xs">← Little Bunny Aru</Link></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div></div>
      </div>
    </div>
  )
}
