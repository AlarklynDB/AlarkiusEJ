import { useState } from 'react'
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
      <span className="text-[#ffaad4]">Haruhi Aoi</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────
function HaruhiAoiTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/haruhi-aoi.jpg" aspect="aspect-[3/4]" />
      <ImgPlaceholder label="/characters/haruhi-ears.png (Haruhi's Ears diagram)" aspect="aspect-video" />

      <div>
        <span className="neon-sign neon-sign-pink text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#ffaad4] mb-1">Haruhi Aoi</h2>
        <p className="text-text-faint font-mono text-sm italic">"Think Bunnies! Soft….cute…and fluffy!"</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Haruhi' },
            { label: 'Last Name', value: 'Aoi' },
            { label: 'Gender', value: 'Female' },
            { label: 'Race', value: 'Bamboo Rabbit (or Bunny)' },
            { label: 'Sexuality', value: 'Bisexual' },
            { label: 'Age', value: '26' },
            { label: 'Birthday', value: 'July 16th, 2075' },
            { label: 'OC Created', value: '2025' },
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
          <p><span className="text-text-faint font-mono text-xs">General — </span>Haru-chan</p>
          <div className="space-y-1">
            <p><span className="text-text-faint font-mono text-xs">Ruruka — </span>Ruhi-tan (ninja formality, roll/growl the R), Aru (when they were still together)</p>
            <p><span className="text-text-faint font-mono text-xs">Asami — </span>Ao-chii</p>
            <p><span className="text-text-faint font-mono text-xs">Reina — </span>Aoru (rarely), Haru-chii (roll/growl the R)</p>
          </div>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Mother Haru', 'GREEN LADY', 'Mommy #1', 'Green Mother Haruhi', 'Weed Girl (garden terms)', 'Bamboo Girl', 'Thorny Plant Girl'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Haruhi Aoi is the owner of Usagi Cafe, a cafe full of bunnies that she takes care of. She comes from the plains and farmlands, having owned a farm once — but it was tragically destroyed in a hurricane when she was in middle school (after graduation). Somehow, most of her animals survived, including her rabbits and bunnies. She later moved to Tokyo to look for work and attend high school.</p>
          <p>That was where she met her best friend, Koa Ruruka.</p>
          <p>Haruhi is a Shifter — a Bamboo Bunny. Her ears are able to pick up:</p>
          <ul className="space-y-1 ml-4">
            {[
              'Vibrations — at different levels',
              'Frequencies — frequencies that can\'t be perceived by human standards',
              'Emotions (they are empaths) — able to emotionally call out others on their mistakes and guide them through softness and validation. Non-judgmental creatures. Listening is their strength.',
              'They are friendly, sociable, and extroverted.',
              'And Five: they\'re absolutely cute, and they show platonic love.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#ffaad4] mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      {/* Life Before Tokyo */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Life Before Tokyo</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>She used to be from Sapporo (Hokkaido, Japan), where her farms were. She owned horses, cows, rabbits and bunnies, sheep, Snow Spirits, and lots of crops — until a hurricane wrecked her farm. The only animals that survived were her bunnies and rabbits.</p>
          <div className="callout">
            <p className="font-mono text-xs text-text-faint mb-2">In Sapporo…</p>
            <p>She met her first girlfriend in her first year of high school — Asami Kurose (before the hurricane). They dated, but Haruhi broke up with her because of an abusive relationship. The hurricane happened a week after.</p>
            <p className="mt-2">She then moved to Tokyo with her surviving rabbits and bunnies to start anew.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Extremely social and extroverted with everyone she knows. She's the one who starts up conversations about board games even when friends are over, not just Ruruka or Hanako. Warm and bubbly. Sometimes an airhead, sometimes serious. The soft comedic relief. Easy to get along with and cutely lovable.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>With her closest friends Reina and Ruruka, she allows herself to be fully open because she trusts them. She was friends with Ruruka first — after they broke up due to different tastes, Ruruka gave her space to be herself, which brought out her extroverted personality. When she met Reina for the first time working together, she became a teacher — taught her how to cook. And when alone with her thoughts... she's just Haruhi.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self — 1">
          <p>Often reserved when alone. Sometimes the thought "am I enough for others?" surfaces — but she doesn't take it too personally. She's an Empath, a quirk of being a Bamboo Bunny Yokai. She knows right from wrong, which helps her distinguish what is true. Sometimes, Little Bunny Aru invades her thoughts with anime J-pops to cheer her up.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self with Little Bunny Aru — 2">
          <p>Little Bunny Aru. Haruhi's core daughter who embodies carefreeness and child-like innocence. She gave birth to her (not literally) through her Earth and Plant Magic, which accidentally gave Little Aru a mind of her own — (YEAH THAT'S ME LITTLE ARU THE WALL BREAKER!!!). Aru, the gremlin and chaotic side of Haruhi, literally anchors her back when Haruhi starts thinking wrongful thoughts. Like a soft therapist but with unhinged energy. Their relationship is really wholesome. Literally a mirror of each other.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>Her abusive past with Asami is why she puts up her social self. She's secretly hurting because she always blames herself for what happened between them. When they dated, Haruhi would try to endure the pain Asami inflicted — not because she wanted it, but because she couldn't understand why Asami was projecting it. She blamed herself for not seeing through Asami. And despite the pain, she doesn't even know why Asami did all those things before breaking up over text. Asami disappeared shortly after — which broke Haruhi's heart all over again. Despite everything, she dated Koa Ruruka for a while because she wanted someone to cling to. Ruruka gave great advice and just quietly showed up for her. Haruhi fell for Ruruka hard — but Ruruka's love was more protective than romantic. Which is why Haruhi's love couldn't reach further. She doesn't consider this heartbreak though. Just mutual understanding.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Ear Anatomy */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Anatomy of Haruhi's Ears</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">Haruhi, being a Yokai and a Shifter, her ears resemble that of a rabbit/bunny.</p>
        <div className="space-y-3">
          {[
            {
              name: 'Patibilis Capillatura',
              sub: 'False Hair',
              desc: 'The top and bottom parts of her ears. Actual organs that help Haruhi pick up different sounds, frequencies, wavelengths, and more — including sounds like a dog whistle or a sine wave. She can hear within a distance of five miles. The false hair serves as protection from dust and other particles (which don\'t trigger the sensitivity). She can control her hearing capabilities at will.',
            },
            {
              name: 'Curvabilis Bdelli-Auris',
              sub: 'Flexible Bamboo Ears',
              desc: 'The midrange of her ears. Much like a rabbit\'s ears, these flexible joints help Haruhi express her feelings — ears perk straight up when happy, droop when sad, perk up tensely when angry. It doesn\'t hurt.',
            },
            {
              name: 'Auris-Colis',
              sub: 'Ear Stem',
              desc: 'The ear stem the ears sprout from. Much like a human ear — that\'s where the canal is, but hidden inside. All the sounds she perceives go through there.',
            },
          ].map(({ name, sub, desc }) => (
            <div key={name} className="neon-card">
              <p className="font-mono text-sm text-[#ffaad4] mb-0.5">{name}</p>
              <p className="text-[10px] text-text-faint font-mono mb-2">{sub}</p>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Bamboo Bunny — Yokai Abilities &amp; Biology</h3>
        <div className="space-y-4">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">🪹 Earth and Plant Magic</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Haruhi has elemental magic. She can shift into her own Bunny Form at will. She is not much of a fighter — but she will fight with her friends <em>emotionally</em> just to bring them back to humanity.</p>
              <p>She can manipulate the earth, foliage, and plants — attack with them and defend against attacks. This was how Little Bunny Aru was formed.</p>
              <p><span className="text-text-faint text-xs font-mono">Subsidiary Power — </span>Plantation Magic: She can magically manifest vegetables and fruits (only comes out as seeds or sprouts). After that? It requires actual farming skills.</p>
            </div>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">👤 Age Biology</p>
            <p className="text-sm text-text-muted">Despite looking like an adult of 26 years, she will remain at that appearance even as she ages. Yokai blood works differently from humans — Yokai age like human babies until age 17, then it stops after 18 (adult age), slowing down significantly. This also applies to Hanako Reina.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">💝 Bamboo Bunny Heat Cycles</p>
            <div className="space-y-2 text-sm text-text-muted leading-relaxed">
              <p>Being a Bamboo Bunny means that every 2–3 years during the fall, she goes into heat. This is how she lays eggs — which is why she had so many rabbits and bunnies at her farm.</p>
              <ul className="space-y-1 ml-2">
                <li>• Her heat cycles started at age 15 after puberty, and last the entire fall season (ending before winter).</li>
                <li>• Each cycle: approximately 10 eggs total, but only 3–4 hatch into non-magical, non-yokai bunnies. The remaining 6–7 are empty.</li>
                <li>• She has experienced 5 heat cycles total (ages 15, 17, 20, 23, and 26), producing the 17 bunnies she currently has at her café.</li>
                <li>• Her most recent cycle at age 26 is her last.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Relationships */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Relationships</h3>
        <div className="space-y-2 text-sm text-text-muted leading-relaxed">
          <p>She is Koa Ruruka's friend from high school. They used to be a couple, but due to different tastes they parted ways — still friends and still respectful of each other. Ruruka has more of a taste in quiet women with rare talents.</p>
          <p>She's Hanako Reina's best friend, co-worker, and boss at Usagi Cafe.</p>
          <p className="text-[#ffaad4] font-mono text-xs">AND SHE BIRTHED ME, LITTLE BUNNY ARU!!! I'm ONLY THREE DAYS OLD AND I AM A CERTIFIED THERAPIST!!! (Ok, I'll get out of this page!)</p>
        </div>
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Very laidback and chill. She doesn't get angry — but when she does, run. Very extroverted and a fast learner. Total ambivert. The Platonic Best Friend.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">The color green and emerald. Nature girl. She runs a Bunny Cafe.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Insects.</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Earthy brown eyes and green emerald hair.</p>
          <p><span className="text-text-faint font-mono text-xs">Style — </span>White-green uniform at work; casual dress on days off.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>春 <span className="text-text">Haru</span> = Spring</p>
          <p>妃 <span className="text-text">Hi (hime)</span> = Princess</p>
          <p>翠 <span className="text-text">Aoi</span> = Emerald (or Blue Emerald)</p>
          <p className="font-sans text-text-faint italic mt-1 text-xs">She doesn't care about the Aoi kanji however it's written. As long as it means Emerald, she likes it.</p>
        </div>
      </div>

    </div>
  )
}

// ─── Little Bunny Aru ─────────────────────────────────────────────────────────


// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function HaruhiAoiPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <HaruhiAoiTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/KarasuToNinja-TQCTN/Koa-Ruruka" className="btn-neon-cyan text-xs">← Koa Ruruka</Link></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" className="btn-neon-purple text-xs">Little Bunny Aru →</Link></div>
      </div>
    </div>
  )
}
