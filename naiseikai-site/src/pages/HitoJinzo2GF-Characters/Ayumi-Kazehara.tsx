import { Link } from 'react-router-dom'

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/titles" className="hover:text-[#00e5ff] transition-colors">Titles</Link>
      <span>/</span>
      <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="hover:text-[#00e5ff] transition-colors">Lonely Android</Link>
      <span>/</span>
      <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="hover:text-[#00e5ff] transition-colors">Characters</Link>
      <span>/</span>
      <span style={{ color: '#67e8f9' }}>Ayumi Kazehara</span>
    </nav>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AyumiKazeharaPage() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">
        <div>
          <span className="neon-sign text-[10px] mb-3 inline-block">Character</span>
          <h2 className="font-serif text-3xl mb-1" style={{ color: '#67e8f9' }}>Ayumi Kazehara</h2>
          <p className="text-text-faint font-mono text-sm italic">Profile coming soon.</p>
        </div>
        <div className="callout text-sm text-text-muted">
          <p>This character profile is a work in progress. Check back soon!</p>
        </div>
      </div>
      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki" className="btn-neon-cyan text-xs">← Akari Chisaki</Link></div>
        <Link to="/titles/HitoJinzo2GF-LonelyAndroid" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Characters
        </Link>
        <div></div>
      </div>
    </div>
  )
}
