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
      <span className="text-[#ff6b9d]">Koa Ruruka</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────
function KoaRurukaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/koa-ruruka.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign neon-sign-purple text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#d49fff] mb-1">Koa Ruruka</h2>
        <p className="text-text-faint font-mono text-sm italic">"She's the one. My one and only."</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Koa' },
            { label: 'Last Name', value: 'Ruruka' },
            { label: 'Full Name', value: '瑠月琥空' },
            { label: 'Gender', value: 'Female' },
            { label: 'Sexuality', value: 'Lesbian' },
            { label: 'Age', value: '24' },
            { label: 'Birthday', value: 'November 2nd, 2076' },
            { label: 'Height', value: '167.64 cm (5\'6")' },
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
          <p><span className="text-text-faint font-mono text-xs">General — </span>Koa-chan, Ruruka, Ruru-chii (Reina / Haruhi), Ko-achii, Ururu (Haruhi), Koru / Koara / Koala (Asami)</p>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Purple Lady', 'Mommy #3', 'Ninja Lady', 'Thwacky Parkour Mommy #3', 'BIG OPPAI NINJA'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Story */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Story</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Koa Ruruka comes from a wealthy ninja heritage — the Koa Clan of Hiroshima Prefecture. She was exiled from her clan for the unforgivable reason of being a lesbian. The Koa Clan holds that only the union of man and woman is sacred. The NYAQ and Ujuukyō disagree.</p>
          <p>She found Hanako Reina crying alone in a park one night. She took her in. At first she saw Reina as a daughter figure. But Reina confessed her feelings. Ruruka was caught off guard — her emotions were more complicated than she expected.</p>
          <p>Reina gave Ruruka a handmade ice snowflake necklace with both their names engraved. Ruruka cried. And then, on her birthday, she asked Reina out. They are now dating.</p>
        </div>
      </div>

      <Divider />

      {/* The Koa Clan */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Koa Clan</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>The Koa Clan hails from Hiroshima Prefecture. The full clan name is <span className="font-mono text-text">"Koaru-hanaeitana-kayamei-mizukana"</span>, split into 15 generations. One descendant is a half-dragon, half-human hybrid.</p>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Outgoing and warm. She meets new people easily — yokai and human alike. Naturally motherly. People feel safe around her.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>Deeply trusts Reina, Haruhi, and Aru. Soft and fully open with them. Sweet with Reina since they started dating — she pampers her. Loves giving Aru headpats.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self">
          <p>Always holds her guard. Trained to protect herself first. Reina has been slowly teaching her that equality matters more than self-preservation. It's a work in progress — and it's changing her.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self with Haruhi">
          <p>They dated in high school for about 2 years. Haruhi once confided in Ruruka about her past with Asami — Ruruka was furious. She tracked Asami down and gave her words. She can't kill due to YHCA laws, but she made her point.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤐" title="The Hidden Self">
          <p>Stoic beneath the warmth. The Koa Clan exile troubled her more than she shows. She trusts her intuition fiercely — always knows right from wrong, even when everything around her is wrong.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="Hidden Self — Full Tragedy">
          <p>A training mission went wrong. She unsealed a cursed coffin — spirits escaped and corrupted her parents. Her parents were impaled on a fence. She witnessed it.</p>
          <p>The Koa Clan blamed her. She was imprisoned for 2 years. Then she stole a forbidden tome and used it on her parents' graves — her parents returned, but as twisted homunculi. The tome cursed her with 400 years of slowed aging.</p>
          <p>She was imprisoned for 4 more years. She broke four laws in total. The final, unforgivable reason for her exile? Being a lesbian.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Abilities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Ninja Status &amp; Abilities</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p><span className="font-mono text-xs text-text-faint">Classification — </span>High class human ninja.</p>
          <p><span className="font-mono text-xs text-text-faint">Power — </span>Can pulverize a factory-sized building. If she stopped holding back, she could destroy a state-wide city.</p>
          <p><span className="font-mono text-xs text-text-faint">Speed — </span>90–120 mph in under 15 minutes. Trained at Japan National Stadium. Nickname: "Speed Demon."</p>
          <p><span className="font-mono text-xs text-text-faint">Tools — </span>Shadow Tomes, Runes, Talismans, Glyphs, spells, Kunai, Shurikens, Swords.</p>
          <p><span className="font-mono text-xs text-text-faint">Vision — </span>Cat and bat vision — sees clearly in the dark for miles. Hilariously, she mistakes planes for birds and shopping bags for Vapor Spirits.</p>
          <p><span className="font-mono text-xs text-text-faint">Reflexes — </span>Under 10ms (close to the Condylostylus fly; better than cats at 20ms). Emotionally, though? Dense and slow.</p>
        </div>
      </div>

      <Divider />

      {/* Jobs */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Jobs</h3>
        <div className="flex flex-wrap gap-2">
          {['Interior Designer / Judge (day)', 'Bartender (night)', 'Freelance pet caretaker'].map(j => (
            <span key={j} className="tag tag-cyan">{j}</span>
          ))}
        </div>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Long purple-brown hair.</p>
          <p><span className="text-text-faint font-mono text-xs">Eyes — </span>Amethyst.</p>
          <p><span className="text-text-faint font-mono text-xs">Style — </span>Often wears ninja clothing; switches to casual on days off.</p>
        </div>
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Outgoing, extroverted. Acts like a mom to everyone around her — but only truly spoils Hanako. Strange yet mysterious. Loves being open.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">All kinds of animals. Music.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Abusive parents. Toxic traits.</p>
          </div>
        </div>
        <div className="neon-card mt-3">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Playing with dogs, cats, and bunnies.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>琥空 <span className="text-text">Koa</span> — 琥 = Amber, 空 = Sky</p>
          <p>瑠月 <span className="text-text">Ruruka</span> — 瑠 = Lapis lazuli, 月 = Moon</p>
          <p className="font-sans text-text-faint italic mt-1">Full name: 瑠月琥空</p>
        </div>
      </div>

    </div>
  )
}

// ─── Haruhi Aoi ──────────────────────────────────────────────────────────────


// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function KoaRurukaPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <KoaRurukaTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/KarasuToNinja-TQCTN/Hanako-Reina" className="btn-neon-cyan text-xs">← Hanako Reina</Link></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" className="btn-neon-purple text-xs">Haruhi Aoi →</Link></div>
      </div>
    </div>
  )
}
