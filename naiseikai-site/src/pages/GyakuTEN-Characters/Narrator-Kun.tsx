import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface TabProps {
  label: string
  children: ReactNode
}

const TABS: TabProps[] = [
  { label: '📜 Profile', children: null },
  { label: '👁 Visual', children: null },
  { label: '💬 Personality', children: null },
  { label: '📖 Story Role', children: null },
  { label: '🔮 Symbolism', children: null },
  { label: '🛒 Merch Quotes', children: null },
  { label: '📝 Extra Notes', children: null },
]

export default function NarratorKun() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="page-container" style={{ '--accent': '#d49fff' } as React.CSSProperties}>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/titles">Titles</Link>
        {' / '}
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation">GyakuTEN | Paradoxical Reincarnation</Link>
        {' / '}
        <span>Characters</span>
        {' / '}
        <span>Narrator-kun</span>
      </nav>

      {/* Header */}
      <header className="char-header">
        <h1 className="neon-sign-purple">📜 Narrator-kun</h1>
        <p className="char-subtitle">Main Character — GyakuTEN | Paradoxical Reincarnation</p>
        <div className="tag-row">
          <span className="tag">Unreliable Narrator</span>
          <span className="tag">Mascot</span>
          <span className="tag">Glyph Entity</span>
          <span className="tag">Emotional Menace</span>
        </div>
      </header>

      {/* Tabs */}
      <div className="tab-bar">
        {TABS.map((tab, i) => (
          <button
            key={i}
            className={`tab-btn${activeTab === i ? ' active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">

        {/* TAB 0 — Profile */}
        {activeTab === 0 && (
          <section>
            <h2 className="neon-sign">Identity</h2>
            <div className="neon-card">
              <table className="info-table">
                <tbody>
                  <tr><td><strong>Project</strong></td><td>GyakuTEN | Paradoxical Reincarnation</td></tr>
                  <tr><td><strong>Role</strong></td><td>Unreliable Narrator / Mascot / Glyph Entity / Emotional Menace</td></tr>
                  <tr>
                    <td><strong>Name(s)</strong></td>
                    <td>Narrator-kun, Gyaku-kun, Glyph-kun, "That bastard in the margins"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-divider" />

            <h2 className="neon-sign">Kanji Origin</h2>
            <div className="neon-card">
              <p>
                <strong>逆 (gyaku)</strong> – "Reverse", "Against", "Inversion"
              </p>
              <p>
                Symbolic of karmic resistance, narrative contradiction, and cyclical rebellion. Design integrates stylized form of 逆 with added limbs, eye, and expression.
              </p>
            </div>

            <div className="section-divider" />

            <h2 className="neon-sign">Concept Summary</h2>
            <div className="callout">
              <p>
                Narrator-kun (aka Gyaku-kun) is the living embodiment of repetition, reversal, and reluctant commentary. Once a glyph in the divine script of karma, he broke free from the margins of the page and now mocks the reincarnation cycle while still guiding it. He is not a friend. Not a guide. Not a moral compass. But he is always there.
              </p>
              <blockquote className="char-quote">
                "You again? Yeah, I remember this loop. You fail here."
              </blockquote>
            </div>
          </section>
        )}

        {/* TAB 1 — Visual */}
        {activeTab === 1 && (
          <section>
            <h2 className="neon-sign">Visual Description</h2>
            <div className="neon-card">
              <table className="info-table">
                <tbody>
                  <tr><td><strong>Form</strong></td><td>The character 逆 brought to life, limbs emerging from strokes</td></tr>
                  <tr><td><strong>Primary Color</strong></td><td>Deep karmic purple-black, ink-like, gradient fades</td></tr>
                  <tr><td><strong>Aura</strong></td><td>Subtle violet glow, glitchy shimmer, shadow smudges</td></tr>
                  <tr><td><strong>Eye</strong></td><td>One lidded, sarcastic eye; often tired, annoyed, or smug</td></tr>
                  <tr><td><strong>Faceplate</strong></td><td>Orange/yellow bar over the eye – like a narrative visor</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 2 — Personality */}
        {activeTab === 2 && (
          <section>
            <h2 className="neon-sign">Personality</h2>
            <div className="neon-card">
              <table className="info-table">
                <tbody>
                  <tr><td><strong>Voice</strong></td><td>Sarcastic, dry, slightly bored narrator energy</td></tr>
                  <tr><td><strong>Tone</strong></td><td>Passive-aggressive, jaded, emotionally exhausted</td></tr>
                  <tr><td><strong>Alignment</strong></td><td>Neutral-Cursed</td></tr>
                  <tr>
                    <td><strong>Catchphrases</strong></td>
                    <td>"Loop detected." / "Try harder this time." / "F**k you, but not really."</td>
                  </tr>
                  <tr><td><strong>Relationship to Reader</strong></td><td>Intimately rude. Knows you better than you do.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout" style={{ marginTop: '1.5rem' }}>
              <p>"He's the narrator that remembers every failure, but still narrates your story… begrudgingly."</p>
            </div>
          </section>
        )}

        {/* TAB 3 — Story Role */}
        {activeTab === 3 && (
          <section>
            <h2 className="neon-sign">Functions in the Story</h2>
            <div className="neon-card">
              <ul className="char-list">
                <li>Narrative glue between reincarnation episodes</li>
                <li>Adds meta-commentary, fourth wall pokes, and emotional texture</li>
                <li>Switches between omniscient, first-person, and sarcastic voiceover</li>
                <li>Sometimes scribbles into the story itself</li>
                <li>Refuses redemption arcs but still allows them to play out</li>
              </ul>
            </div>
          </section>
        )}

        {/* TAB 4 — Symbolism */}
        {activeTab === 4 && (
          <section>
            <h2 className="neon-sign">Symbolism</h2>
            <div className="neon-card">
              <ul className="char-list">
                <li>Reversal of fate</li>
                <li>Resistance to narrative finality</li>
                <li>Karmic backlog personified</li>
                <li>Emotional whiplash mascot</li>
              </ul>
            </div>
          </section>
        )}

        {/* TAB 5 — Merch Quotes */}
        {activeTab === 5 && (
          <section>
            <h2 className="neon-sign">Potential Merch Quotes</h2>
            <div className="neon-card">
              <ul className="char-list">
                <li>"You're back already?"</li>
                <li>"Don't worry, I hated this scene too."</li>
                <li>"Spoiler alert: you mess it up again."</li>
                <li>"F**k you, but I'm still here."</li>
              </ul>
            </div>
          </section>
        )}

        {/* TAB 6 — Extra Notes */}
        {activeTab === 6 && (
          <section>
            <h2 className="neon-sign">Extra Notes</h2>
            <div className="neon-card">
              <ul className="char-list">
                <li>Often appears in story transitions, title cards, or memory fragments</li>
                <li>Sometimes leaks out of the narration box or glitches the scene</li>
                <li>May be worshipped by some karmic cults within the world of GyakuTEN</li>
                <li>Has never once spoken kindly, but still gives closure</li>
              </ul>
            </div>

            <div className="section-divider" />

            <div className="callout">
              <blockquote className="char-quote">
                "Narrator-kun is not just the voice. He is the loop."
              </blockquote>
            </div>
          </section>
        )}

      </div>

      {/* Prev / Next Nav */}
      <div className="char-nav">
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki" className="btn-neon-cyan">
          ← Eina Arataki
        </Link>
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation" className="btn-neon-purple">
          Back to GyakuTEN
        </Link>
        <Link to="/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun" className="btn-neon-cyan">
          Masato Ren →
        </Link>
      </div>

    </div>
  )
}
