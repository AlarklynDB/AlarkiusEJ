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
      <span className="text-[#ff6b9d]">Hanako Reina</span>
    </nav>
  )
}

// ─── Character content ────────────────────────────────────────────────────────
function HanakoReinaTab() {
  return (
    <div className="space-y-8">
      <ImgPlaceholder label="/characters/hanako-reina.jpg" aspect="aspect-[3/4]" />

      <div>
        <span className="neon-sign text-[10px] mb-3 inline-block">Main Character</span>
        <h2 className="font-serif text-3xl text-[#7ef5ff] mb-1">Hanako Reina</h2>
        <p className="text-text-faint font-mono text-sm italic">"My love burns like ice, even if it's hot"</p>
      </div>

      <Divider />

      {/* General Info */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">General Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'First Name', value: 'Hanako' },
            { label: 'Last Name', value: 'Reina' },
            { label: 'Gender', value: 'Female / Futa / Intersex (She/Her/Hers)' },
            { label: 'Age', value: '24' },
            { label: 'Birthday', value: 'November 16th, 2076' },
            { label: 'Height', value: '154.94 cm (5\'1")' },
            { label: 'Sexuality', value: 'From straight to gay (lesbian)' },
            { label: 'Relationship', value: 'Ruruka\'s girlfriend; Haruhi\'s best friend' },
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
          <p><span className="text-text-faint font-mono text-xs">General — </span>Rei-chan, Hana, Rei-Rei (Asami / Haruhi), Inaha (Haruhi), Hana (Ruruka)</p>
          <div>
            <p className="text-text-faint font-mono text-xs mb-1">Little Aru's Nicknames —</p>
            <div className="flex flex-wrap gap-2">
              {['Reina-chii', 'Mother Crow', 'Crow Lady', 'Nako Nako', 'Big Dark Emo Bird', 'Crow Mommy #2'].map(n => (
                <span key={n} className="tag">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Backstory */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Backstory</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Hanako Reina grew up in an abusive household and was eventually kicked out by her family. She was later laid off from her retail customer service job, then evicted from her home. She stayed in a shelter before finding her footing.</p>
          <p>She now works at a cat daycare. One evening, she was found crying alone in a park by Koa Ruruka, who took her in. Through Ruruka, she was referred to Haruhi's Usagi Cafe (a Bunny Cafe) for work. In time, she confessed her feelings to Ruruka.</p>
        </div>
      </div>

      <Divider />

      {/* Living Legend */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Living Legend — The Quiet Crow</h3>
        <div className="callout space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            She is known in urban legend as the <em>Quiet Crow</em> — a figure belonging to the ancient Reinishi Family,
            also called the <em>Karasu Reinishi</em>. The lineage she belongs to is known as The Reina Generation.
            Her presence in the world of yokai carries weight beyond what her gentle exterior suggests.
          </p>
          <p>
            A living legend who walks quietly, speaks softly — but whose very existence rewrites the rules of what a Crow Yokai can be.
          </p>
        </div>
      </div>

      <Divider />

      {/* Anatomy / Age Biology */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Biology &amp; Anatomy</h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Age Biology</p>
            <p>She appears to be 24 forever — yokai aging stops at 18, after which it slows down significantly.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Anatomy</p>
            <p>Intersex — carries both male and female biological systems. She was cursed by Karasu to not have reproductive organs (no testes).</p>
          </div>
        </div>
      </div>

      <Divider />

      {/* The Four Identities */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">The Four Identities</h3>
        <IdentityBlock icon="😃" title="The Social Self">
          <p>Lighthearted and laidback in social settings. She holds back just in case — a practiced softness that hides how much she feels at any given moment.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="The Personal Self">
          <p>Warm and bubbly with Haruhi and Ruruka. Ruruka craves affection from her deeply. Around Little Aru, Reina becomes an absolute gremlin — chaotic energy fully unlocked.</p>
        </IdentityBlock>
        <IdentityBlock icon="🦋" title="Personal Self with Powers">
          <p>Her powers are passive in daily life. She once took Ruruka on a ride in giant bird form. She pranked Ruruka in small bird form. Her favorite ability? Freezing Touch.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="The Core Self">
          <p>Silence is how she heals. She doesn't degrade her intersex body — because of Ruruka's acceptance, she's learned to hold herself without shame.</p>
        </IdentityBlock>
        <IdentityBlock icon="👤" title="Core Self with Powers">
          <p>She holds back deliberately — she doesn't want to hurt Ruruka or Haruhi. Control is an act of love for her.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="The Hidden Self">
          <p>She was victimized by her parents through years of verbal abuse. When the YARC tested her, her anxiety exploded — destroying over 2,300 YARC ward buildings and killing yokai in the process. She carries this quietly.</p>
        </IdentityBlock>
        <IdentityBlock icon="🤕" title="Hidden Self with Powers">
          <p>Her powers are tied to her emotional state. Think of it as a pressure cooker — no cap, no limiter. She develops new powers subconsciously. Even she doesn't always know what she's capable of until it happens.</p>
        </IdentityBlock>
      </div>

      <Divider />

      {/* Appearance */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Appearance</h3>
        <div className="space-y-2 text-sm text-text-muted leading-relaxed">
          <p><span className="text-text-faint font-mono text-xs">Hair — </span>Black with red highlights, medium-long length ending at the shoulders.</p>
          <p><span className="text-text-faint font-mono text-xs">Eyes — </span>Heterochromatic: brown (right), red (left). Wears an eyepatch over the brown eye.</p>
          <p><span className="text-text-faint font-mono text-xs">Casual Outfit — </span>White casual off-shoulder dress with navy gray stripes, black mesh bra underneath, black loose shorts.</p>
        </div>
      </div>

      <Divider />

      {/* Personality & Traits */}
      <div>
        <h3 className="font-serif text-lg text-text mb-4">Personality &amp; Traits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Personality</p>
            <p className="text-sm text-text-muted">Shy and timid at first. Optimistic and bright once she opens up. Energetic. Loves sharing her interests.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Likes</p>
            <p className="text-sm text-text-muted">Cats, dogs, bunnies, music.</p>
          </div>
          <div className="neon-card">
            <p className="font-mono text-xs text-text-faint mb-2">Dislikes</p>
            <p className="text-sm text-text-muted">Loud noises, rude people, toxic traits, people who sexualize her timid side, extremely violent people — these trigger panic attacks.</p>
          </div>
        </div>
        <div className="neon-card mt-3">
          <p className="font-mono text-xs text-text-faint mb-2">Hobbies</p>
          <p className="text-sm text-text-muted">Drawing, writing, manga & anime.</p>
        </div>
      </div>

      <Divider />

      {/* Name Meaning */}
      <div>
        <h3 className="font-serif text-lg text-text mb-3">Name Meaning</h3>
        <div className="callout space-y-2 text-sm text-text-muted font-mono">
          <p>花心 <span className="text-text">Hanako</span> — 花 = Flower, 子/心 = Heart / Child</p>
          <p>麗水 <span className="text-text">Reina</span> — 麗 = Beautiful / Lovely, 水 = Water</p>
          <p className="text-text-faint italic not-italic font-sans mt-2">"A Flower's Heart is as beautiful as water itself"</p>
        </div>
      </div>

    </div>
  )
}

// ─── Koa Ruruka ──────────────────────────────────────────────────────────────


// ─── Page wrapper ─────────────────────────────────────────────────────────────

export default function HanakoReinaPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <HanakoReinaTab />
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div></div>
        <Link to="/titles/KarasuToNinja-TQCTN" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/KarasuToNinja-TQCTN/Koa-Ruruka" className="btn-neon-purple text-xs">Koa Ruruka →</Link></div>
      </div>
    </div>
  )
}
