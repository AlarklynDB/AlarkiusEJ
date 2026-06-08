import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/SorenaoAne-Nevertheless" className="hover:text-[#00e5ff] transition-colors">Nevertheless You're Still My Sister</Link>
      <span>/</span>
      <Link to="/titles/SorenaoAne-Nevertheless" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span style={{ color: '#ffb347' }}>Reiko Nozomi</span>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ReikoNozomiPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Character</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: '#ffb347' }}>Reiko Nozomi</h2>
          <p className="text-text-faint font-mono text-sm italic">Profile coming soon.</p>
        </div>
        <div className="callout text-sm text-text-muted">
          <p>This character profile is a work in progress. Check back soon!</p>
        </div>
      </div>
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/SorenaoAne-Nevertheless/Asahi-Nanako" className="btn-neon-cyan text-xs">← Asahi Nanako</Link></div>
        <Link to="/titles/SorenaoAne-Nevertheless" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div><Link to="/titles/SorenaoAne-Nevertheless/Shion-Nanako" className="btn-neon-purple text-xs">Shion Nanako →</Link></div>
      </div>
    </div>
  )
}
