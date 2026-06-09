import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
      <Link to="/lore" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
      <span>/</span>
      <Link to="/lore/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
      <span>/</span>
      <span style={{ color: '#ffaad4' }}>Yokai Association Recovery Center</span>
    </nav>
  )
}

function Divider() {
  return <div className="section-divider my-8" />
}

export default function YokaiAssociationRecoveryCenter() {
  return (
    <div className="page-container">
      <Breadcrumb />
      <div className="space-y-8">

        <div>
          <span className="text-3xl mb-4 block">⚠️</span>
          <h2 className="font-serif text-3xl mb-2" style={{ color: '#ffaad4' }}>Yokai Association Recovery Center</h2>
          <p className="text-text-faint font-mono text-sm italic max-w-xl">The YARC — a government-sanctioned facility with a deeply dark history.</p>
        </div>

        <Divider />

        <div className="callout text-sm text-text-muted leading-relaxed space-y-3">
          <p className="font-mono text-xs text-text-faint">// PLACEHOLDER — content coming soon</p>
          <p>This lore entry is still being written. Check back once the Notion page for this topic has been populated!</p>
        </div>

      </div>

      <div className="mt-12 section-divider" />
      <div className="flex justify-between items-center gap-4 flex-wrap mt-6">
        <div><Link to="/lore/the-world-of-neo-japan/yhca-yokaihuman-coalition-act" className="btn-neon-cyan text-xs">← YHCA</Link></div>
        <Link to="/lore/the-world-of-neo-japan" className="text-xs font-mono text-text-faint hover:text-text transition-colors">
          ↑ All Topics
        </Link>
        <div><Link to="/lore/the-world-of-neo-japan/ninja-yokai-association-quarters" className="btn-neon-cyan text-xs">NYAQ →</Link></div>
      </div>
    </div>
  )
}
