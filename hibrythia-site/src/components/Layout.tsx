import { Outlet, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/lore',       label: 'Lore' },
  { to: '/world',      label: 'World' },
  { to: '/characters', label: 'Characters' },
  { to: '/bookshelf',  label: 'Bookshelf' },
];

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#0e0d0b]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#2e2b26] bg-[#0e0d0b]/90 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-5 h-12 flex items-center justify-between">
          {/* Logo mark */}
          <a href="/" className="flex items-center group" aria-label="The Hibrythian Saga">
            <span className="font-display text-xs tracking-[0.15em] text-[#c9a84c] uppercase"
              style={{ letterSpacing: '0.18em' }}
            >The Hibrythian Saga | Official Website </span>
          </a>

          {/* Nav */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-0.5" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      [
                        'font-body text-[0.65rem] tracking-widest uppercase px-2.5 py-1 rounded-sm transition-all duration-[180ms]',
                        isActive
                          ? 'text-[#c9a84c] bg-[#c9a84c]/8'
                          : 'text-[#7a7670] hover:text-[#d8d4cc]',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#2e2b26] py-6 mt-12">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center gap-5">
          {/* Copyright row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
            <p className="font-body text-[0.6rem] text-[#4a4844] tracking-wider uppercase">
              © {new Date().getFullYear()} The Hibrythian Saga · Alarkius Elvya Jay
            </p>
            <div className="gold-rule hidden sm:block" aria-hidden="true" />
            <p className="font-body text-[0.6rem] text-[#4a4844] tracking-wider">
              All Lore &amp; Worldbuilding Rights Reserved
            </p>
          </div>

          {/* Anti-piracy notice */}
          <div className="piracy-notice w-full" role="note" aria-label="Anti-piracy notice">
            <p className="piracy-notice-title">[The Dead Shard Continuity Notice — Class C Piracy Violation]</p>
            <p className="piracy-notice-body">
              Unauthorized redistribution of Hibrythiea-Encoded lore and Stories has been detected.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;You're not trying to pirate this entire site, are you… <em>user·? Do you really want to find out the hard way?</em><br />
              This universe is heavily protected! Reuploading or stealing content will lead to legal
              consequences — and yes, we can track it. Don't try and fight{' '}
              <a href="/characters" target="_self">Hunter Noxx</a>,{' '}
              <a href="/characters" target="_self">Zohl</a>, or{' '}
              <a href="/characters" target="_self">Kydel Rhunes</a>.
              {' '}Or any of our characters. They will obliterate you to smithereens!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
