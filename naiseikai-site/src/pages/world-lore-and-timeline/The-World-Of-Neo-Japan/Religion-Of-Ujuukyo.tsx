import { Link } from 'react-router-dom';

const ACCENT = '#ffd080';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-text mt-5 mb-1" style={{ color: ACCENT }}>
      {children}
    </p>
  );
}

export default function ReligionOfUjuukyo() {
  return (
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>The Religion of Ujuukyō</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1
          className="font-serif text-4xl sm:text-5xl mb-4"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🕍 The Religion of Ujuukyō
        </h1>
      </div>

      {/* ── Intro Block ── */}
      <div
        className="rounded-xl p-5 mb-8"
        style={{ borderLeft: `4px solid ${ACCENT}`, background: 'rgba(255,208,128,0.05)' }}
      >
        <p className="text-base font-semibold mb-1" style={{ color: ACCENT }}>
          私たちはあなたの沈黙に答えます。ようこそ。
        </p>
        <p className="italic text-sm text-text-muted mb-1">
          Watashitachi wa anata no chinmoku ni kotaemasu. Yōkoso.
        </p>
        <p className="italic text-sm text-text-muted mb-3">
          We will respond to your silence. Welcome in.
        </p>
        <p className="text-sm text-text-muted">You are safe here. Welcome home.</p>
      </div>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Ujuukyō is universal spiritual tradition of Naiseikai Universe, practiced by Humans, Yokai, Spirits, and Angels alike. Born following Great Descent of Year 5-1599. Unifying faith that transcends racial boundaries. All beings honor the same divine force — true sanctity lies in{' '}
        <strong style={{ color: ACCENT }}>value, virtue, and the reverence of death</strong>.
      </p>

      {/* ── Central Deity ── */}
      <SectionHeading>The Central Deity: Ujuu-sama (宇柔-様)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        Moon Goddess of Mercy and Silence. "Cosmic Gentleness."
      </p>

      <p className="text-sm text-text-faint italic mb-2">Sacred Titles:</p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• 静かの神 — Silence</li>
        <li>• 沈黙の神 — Stillness</li>
        <li>• 慈悲の神 — Mercy</li>
        <li>• 価値の女神 — Value</li>
        <li>• 美徳の女神 — Virtue</li>
      </ul>

      <p className="text-base text-text-muted leading-relaxed">
        Ujuu-sama embodies <strong style={{ color: ACCENT }}>"ma" (間)</strong> — meaningful silence, the space between breaths.
      </p>

      {/* ── Core Beliefs ── */}
      <SectionHeading>Core Beliefs &amp; Philosophy</SectionHeading>

      <SubHeading>The Sanctity of Death</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Death is a sacred passage honored with humility and discernment. Even human police believe in Ujuukyo. NEO-Japan practices are very high.
      </p>

      <SubHeading>Discernment Above All</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        識別 (shikibetsu) — knowing when to act or be still, to speak or honor silence. Loyalty is also one of them!
      </p>

      <SubHeading>Universal Equality</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Favors diligence, perseverance, compassion, humility, discernment. NYAQ philosophy aligns most closely.
      </p>

      <SubHeading>The Silence of Compassion</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        True mercy flows from silence. Ujuu-sama's silence is{' '}
        <strong style={{ color: ACCENT }}>presence of infinite understanding</strong>.
      </p>

      <SubHeading>Emotion, Values, and Virtues, as Holiness and Sacredness</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Emotions are sacred, spiritual and holy. Positive = purity, negative = pain. To grow in Naiseikai means to recognize and be aware of your own emotions.
      </p>

      {/* ── Sacred Practices ── */}
      <SectionHeading>Sacred Practices</SectionHeading>

      <SubHeading>Moon Gate Shrines</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Tsuki-mon (月門) shrines — multi-tiered gates ascending toward heaven.
      </p>

      <SubHeading>Rituals of Stillness</SubHeading>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Seika no Gi (静化の儀)</li>
        <li>• Ma no Inori (間の祈り)</li>
        <li>• Shingetsu no Sahai (新月の祭杯)</li>
      </ul>

      <SubHeading>💖 Honoring the Departed</SubHeading>
      <p className="text-base text-text-muted leading-relaxed mb-4">
        Quiet dignity, respectful silence — not just for Yokai, but for Humans too.
      </p>

      {/* ── Total Relinquishment ── */}
      <SectionHeading>Total Relinquishment (TRQMT)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        Must accept OWN Faith, Personhood, Imperfections, and Sins. Tri-ritual, must be done with a humble heart.
      </p>

      <p className="text-sm text-text-faint font-semibold mb-2">Pre-requisites:</p>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• Drench (Baptize) head with Sakura Water — symbolizes thought and purity</li>
        <li>• Wash and Clean the Feet — symbolizes the pathway you've walked</li>
      </ul>

      {/* ── Yokai Relinquishment ── */}
      <SectionHeading>Yokai Relinquishment (YRQMT)</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Forced. Takes away identity, emotions, yokai status, abilities, and powers. Only at Tenshi Shima or Ryuu no Shima. If criminal recognizes wrong doings, severity dialed down — only yokai status, abilities, and powers taken, replaced with human body. Record transferred to Human Police Task Force.
      </p>

      {/* ── The Body is a Temple ── */}
      <SectionHeading>The Body is a Temple</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Sacred no matter the flaws. Each body part represents the path taken.
      </p>

      <SubHeading>The Head — where the mind lives</SubHeading>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-4">
        <li>• The Eyes — evidence of what you've witnessed</li>
        <li>• The Ears — evidence of what they've heard</li>
        <li>• The Mouth — evidence of what kind of influence you speak to others</li>
      </ul>

      <SubHeading>The Body — not just Heart, it is the Soul of where emotions live</SubHeading>
      <ul className="space-y-1 list-none ml-2 text-sm text-text-muted mb-6">
        <li>• The Arms — weight carried (physical and mental), support that carry decisions</li>
        <li>• The Hands — sensation of touch, every action taken</li>
        <li>• The Legs — walking weight, constant motion, helps dodge obstacles</li>
        <li>
          • The Feet — the very pathway set foot on. No going back —{' '}
          <em style={{ color: ACCENT }}>
            "The Feet share your past into the future, even if that history tries to hide itself."
          </em>
        </li>
      </ul>

      {/* ── Sacred Texts ── */}
      <SectionHeading>Sacred Texts &amp; Teachings</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">
        Kachi Kyōten (価値経典 — Scripture of Value). Oral tradition, housed in NYAQ Floor Z.11.
      </p>

      <div
        className="rounded-xl p-5 mb-4 space-y-3"
        style={{ background: 'rgba(255,208,128,0.05)', border: `1px solid ${ACCENT}33` }}
      >
        <p className="italic text-sm text-text-faint">Core Maxims:</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"Silence is not absence. It is the fullness of presence."</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"Death is not an end. It is the doorway discernment walks through last."</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"Mercy does not speak loudly. It listens until the world quiets down."</p>
        <p className="italic text-sm" style={{ color: ACCENT }}>"Value yourself. Honor others. Hold silence like a gift."</p>
      </div>

      <p className="text-base text-text-muted leading-relaxed mb-2">
        The Faith in Practice — NYAQ deeply respects it; warriors and Dullahans are drawn to Moon Gate shrines.
      </p>

      <p className="text-base font-semibold mt-4 mb-6" style={{ color: ACCENT }}>
        "Live with discernment. Face death with humility. Find mercy in silence."
      </p>

      {/* ── Holy Decree of Sex ── */}
      <SectionHeading>The Holy Decree of Sex</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-3">Not a sin.</p>

      <p className="text-sm text-text-faint font-semibold mb-2">The Five Pillars:</p>
      <ol className="space-y-1 list-decimal list-inside text-sm text-text-muted mb-4">
        <li>Honesty</li>
        <li>Vulnerability</li>
        <li>Acceptance</li>
        <li>Honor</li>
        <li>Connection</li>
      </ol>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Within Ujuukyō, physical intimacy is regarded as one of the most sacred and vulnerable acts a being can engage in. It is not forbidden, nor is it treated with shame. Instead, the faith calls its followers to approach it with full presence — to be honest about one's desires, vulnerable in one's offering, accepting of the other, and honoring of their autonomy. Connection is the final pillar, recognizing that intimacy, at its truest, is a form of spiritual union. To enter this space with discernment and care is to honor the body as the temple it is.
      </p>

      {/* ── Seven Disparities ── */}
      <SectionHeading>The Seven Disparities of Ujuukyō</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        Ujuukyō does not condemn emotion — it understands the danger of imbalance (不均衡, fukinkou). Each Sacred Emotion carries within it a shadow: a Disparity that emerges when that emotion is left unchecked. These are not sins. They are warnings. Each has a Path to Balance.
      </p>

      {[
        { kanji: '慢心の影',  romaji: 'Manshin no Kage',    title: 'Shadow of Arrogance',       sacred: 'Confidence',       disparity: 'Arrogance',                       balance: 'Humility' },
        { kanji: '怒りの嵐',  romaji: 'Ikari no Arashi',    title: 'Storm of Unbound Rage',     sacred: 'Anger',            disparity: 'Destroys without discernment',    balance: 'Stillness and Mercy' },
        { kanji: '羨望の毒',  romaji: 'Senbou no Doku',     title: 'Poison of Bitter Envy',     sacred: 'Desire to grow',   disparity: 'Bitter envy',                     balance: 'Acceptance and gratitude' },
        { kanji: '欲望の鎖',  romaji: 'Yokubou no Kusari',  title: 'Chains of Selfish Desire',  sacred: 'Attraction',       disparity: 'Dishonors autonomy',              balance: 'Honor and respect' },
        { kanji: '貪欲の闇',  romaji: 'Donyoku no Yami',    title: 'Darkness of Hoarding',      sacred: 'Security',         disparity: 'Greed',                           balance: 'Generosity and trust' },
        { kanji: '過剰の迷い', romaji: 'Kajou no Mayoi',    title: 'Confusion of Excess',       sacred: 'Joy',              disparity: 'Excess without discernment',      balance: 'Discernment and Ma (間)' },
        { kanji: '無関心の霧', romaji: 'Mukanshin no Kiri', title: 'Fog of Apathy',             sacred: 'Rest',             disparity: 'Apathy',                          balance: 'Diligence and engagement' },
      ].map((d) => (
        <div
          key={d.kanji}
          className="border border-border rounded-xl bg-surface p-5 mb-4"
        >
          <p className="font-serif text-xl font-bold mb-0.5" style={{ color: ACCENT }}>{d.kanji}</p>
          <p className="text-xs italic text-text-faint mb-3">{d.romaji} — {d.title}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div>
              <span className="text-text-faint block text-xs uppercase tracking-widest mb-0.5">Sacred Emotion</span>
              <span className="text-text-muted">{d.sacred}</span>
            </div>
            <div>
              <span className="text-text-faint block text-xs uppercase tracking-widest mb-0.5">The Disparity</span>
              <span className="text-text-muted">{d.disparity}</span>
            </div>
            <div>
              <span className="text-text-faint block text-xs uppercase tracking-widest mb-0.5">Path to Balance</span>
              <span style={{ color: ACCENT }}>{d.balance}</span>
            </div>
          </div>
        </div>
      ))}

      {/* ── The Hidden Balance ── */}
      <SectionHeading>The Hidden Balance</SectionHeading>

      <div
        className="rounded-xl p-5 mb-6"
        style={{ background: 'rgba(255,208,128,0.07)', border: `1px solid ${ACCENT}` }}
      >
        <p className="font-serif text-lg font-bold mb-1" style={{ color: ACCENT }}>正義のための報復</p>
        <p className="text-xs italic text-text-faint mb-3">
          Seigi no tame no hōfuku — Retribution for Justice / Righteous Revenge
        </p>
        <p className="text-base text-text-muted leading-relaxed">
          Neither disparity nor sacred emotion. The Hidden Balance. Free will when roped into conflict. Ujuu-sama does not mind, as long as it feels{' '}
          <em style={{ color: ACCENT }}>right.</em>
        </p>
      </div>

      {/* ── Teaching of Disparities ── */}
      <SectionHeading>The Teaching of Disparities</SectionHeading>

      <ol className="space-y-2 list-decimal list-inside text-base text-text-muted mb-6">
        <li>Acknowledge without shame</li>
        <li>Seek the silence</li>
        <li>Return to balance</li>
        <li>Learn from the pain</li>
      </ol>

      <div
        className="rounded-xl p-5 mb-10 text-center"
        style={{ background: 'rgba(255,208,128,0.05)', border: `1px solid ${ACCENT}33` }}
      >
        <p className="italic text-base" style={{ color: ACCENT }}>
          "You are not feared. Or revered. You're you. At your fullest, your worst, and your best."
        </p>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-citizens-of-neo-japan" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← Yokai Citizens
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yhca-yokaihuman-coalition-act" className="btn-neon-purple text-sm px-4 py-2 rounded">
          YHCA →
        </Link>
      </div>

    </div>
  );
}
