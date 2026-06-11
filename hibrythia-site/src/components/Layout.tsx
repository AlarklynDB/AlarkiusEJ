import { Outlet, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/lore',       label: 'Lore' },
  { to: '/world',      label: 'World' },
  { to: '/characters', label: 'Characters' },
];

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#0e0d0b]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#2e2b26] bg-[#0e0d0b]/90 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo mark */}
          <a href="/" className="flex items-center gap-3 group" aria-label="The Hibrythian Saga">
            <svg viewBox="0 0 28 28" width="28" height="28" fill="none" aria-hidden="true">
              <path d="M5 4 L5 24 M5 14 L23 14 M23 4 L23 24"
                stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"
                className="transition-all duration-200 group-hover:stroke-[#e0be6a]"
              />
              <circle cx="5"  cy="4" r="1" fill="#c9a84c" />
              <circle cx="14" cy="4" r="1" fill="#c9a84c" opacity="0.4" />
              <circle cx="23" cy="4" r="1" fill="#c9a84c" />
            </svg>
            <span className="font-display text-sm tracking-[0.15em] text-[#c9a84c] uppercase"
              style={{ letterSpacing: '0.18em' }}
            >Hibrythia</span>
          </a>

          {/* Nav */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      [
                        'font-body text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm transition-all duration-[180ms]',
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
      <footer className="border-t border-[#2e2b26] py-8 mt-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#4a4844] tracking-wider uppercase">
            © {new Date().getFullYear()} The Hibrythian Saga · Alarkius Elvya Jay
          </p>
          <div className="gold-rule hidden sm:block" aria-hidden="true" />
          <p className="font-body text-xs text-[#4a4844] tracking-wider">
            All Lore & Worldbuilding Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
