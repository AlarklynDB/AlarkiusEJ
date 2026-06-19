const liveTools = [
  {
    name: 'Quillosofi',
    tagline: 'All-in-one Writing & Studio',
    description:
      'A free, open-source, dark-mode-first Writing App for Authors, Worldbuilders or just Note Taking users! One document, two views — continuous Quillscript mode and paginated Quillginate Mode — with zero data lost between them.',
    status: 'Alpha — Active Development',
    statusColor: 'gold',
    platform: 'Windows · macOS · Linux (Electron)',
    href: 'https://quillosofi.com',
    github: 'https://github.com/TheAlarklynZone/Quillosofi',
    icon: '📝',
    tags: ['Writing App', 'Worldbuilding', 'Desktop', 'Open Source'],
  },
  {
    name: 'MultiRP Customizer',
    tagline: 'Multi-profile Discord Rich Presence manager',
    description:
      'Run up to 5 named Discord Rich Presence profiles, toggle one active at a time, with a Discord-accurate live preview, auto-rotation scheduling, encrypted bot-token export, and seamless auto-updates from GitHub Releases.',
    status: 'Released — v1.9.9.3',
    statusColor: 'success',
    platform: 'Windows · macOS · Linux (Electron)',
    href: 'https://github.com/TheAlarklynZone/MultiRPCustomizer/releases',
    github: 'https://github.com/TheAlarklynZone/MultiRPCustomizer',
    icon: '🎮',
    tags: ['Discord', 'Rich Presence', 'Desktop', 'Open Source'],
  },
]

const upcomingTools = [
  {
    name: 'Quilvar',
    tagline: 'Store your clips. Paste with precision.',
    description:
      'A lightweight, cross-platform clipboard manager that lives in your system tray and acts like an default app too. Search your clip history, pin what matters, organize into Quivers, and summon it all with Shift+Alt+V. Never lose copied text again.',
    platform: 'Windows · macOS · Linux (Tauri)',
    github: 'https://github.com/TheAlarklynZone/Quilvar',
    icon: '📋',
    tags: ['Clipboard Manager', 'Desktop', 'Coming Soon'],
  },
  {
    name: 'Varmojii',
    tagline: 'Your glyphs, on demand.',
    description:
      'A system-wide emoji, symbol & glyph picker that replaces the broken Win+. experience. One global chord summons a fast overlay — search emoji, kaomoji, IPA symbols, math glyphs, and more — and inserts directly into any active app, zero clipboard roundtrip.',
    platform: 'Windows · macOS · Linux (Tauri)',
    github: 'https://github.com/TheAlarklynZone/Varmojii',
    icon: '✨',
    tags: ['Emoji Picker', 'Desktop', 'Coming Soon'],
  },
]

const tagColorMap: Record<string, string> = {
  'Writing App': 'tag-rose',
  Worldbuilding: 'tag-rose',
  Discord: 'tag-blue',
  'Rich Presence': 'tag-blue',
  'Clipboard Manager': 'tag-gold',
  'Emoji Picker': 'tag-gold',
  Desktop: '',
  'Open Source': '',
  'Coming Soon': '',
}

function TagBadge({ label }: { label: string }) {
  const color = tagColorMap[label] ?? ''
  return (
    <span className={`tag text-xs ${color}`}>{label}</span>
  )
}

function ToolCard({
  tool,
  live,
}: {
  tool: (typeof liveTools)[0] | (typeof upcomingTools)[0]
  live: boolean
}) {
  const t = tool as any
  return (
    <div className="p-6 bg-surface rounded-xl border border-border hover:border-border-light transition-all duration-200 group flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-surface-raised border border-border flex items-center justify-center flex-shrink-0 text-2xl">
          {t.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-serif text-lg font-semibold text-text group-hover:text-rose-light transition-colors">
              {t.name}
            </h3>
            {live && t.statusColor === 'success' && (
              <span className="text-xs font-medium text-success">{t.status}</span>
            )}
            {live && t.statusColor === 'gold' && (
              <span className="text-xs font-medium text-gold">{t.status}</span>
            )}
            {!live && (
              <span className="text-xs font-medium text-text-faint bg-surface-raised border border-border px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-xs text-text-faint">{t.platform}</p>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm font-medium text-text-muted italic">{t.tagline}</p>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed">{t.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {t.tags.map((tag: string) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-4 pt-1 mt-auto">
        {live && t.href && (
          <a
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-rose hover:text-rose-light transition-colors font-medium"
          >
            Visit Site
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        {t.github && (
          <a
            href={t.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-faint hover:text-text-muted transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function Tools() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">
            The Alarklyn Zone
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
            Tools & Apps
          </h1>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="tag tag-rose text-xs">Open Source</span>
            <span className="tag tag-rose text-xs">Desktop Apps</span>
            <span className="tag tag-rose text-xs">Free Forever</span>
          </div>
          <div className="callout callout-gold">
            <span className="text-xl flex-shrink-0">🛠️</span>
            <p className="text-sm text-text-muted">
              <span className="text-gold font-semibold">Apps built by Alarkius Elvya Jay.</span>{' '}
              Every tool is free, open-source, no subscriptions, no paywalls — ever. Built for
              writers, creators, and anyone who wants their workflow to feel a little more magical.
            </p>
          </div>
        </div>

        {/* Live Apps */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">Available Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {liveTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} live={true} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Upcoming Apps */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-2">In the Workshop</h2>
          <p className="text-sm text-text-muted mb-6">
            Apps currently in design and development — no ETAs, just vibes and progress.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {upcomingTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} live={false} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Org callout */}
        <section>
          <div className="flex items-start gap-4 p-6 bg-surface rounded-xl border border-border">
            <div className="w-10 h-10 rounded-lg bg-rose-bg border border-rose/30 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🏛️</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-text mb-1">
                The Alarklyn Zone
              </h3>
              <p className="text-sm text-text-muted mb-3">
                All apps and tools live under the TheAlarklynZone GitHub organization — one home
                for everything built by Alarkius Elvya Jay.
              </p>
              <a
                href="https://github.com/TheAlarklynZone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-rose hover:text-rose-light transition-colors"
              >
                View the org on GitHub
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
