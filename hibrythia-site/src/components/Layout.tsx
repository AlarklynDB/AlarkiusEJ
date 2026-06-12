import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/world',      label: 'World' },
  { to: '/characters', label: 'Characters' },
  { to: '/bookshelf',  label: 'Bookshelf' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <div className="min-h-dvh flex flex-col bg-[#100908]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#2e2b26] bg-[#0e0d0b]/90 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-5 h-12 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group" aria-label="The Hibrythian Saga" data-pwa-tap>
            <span
              className="font-display text-xs tracking-[0.15em] text-[#c9a84c] uppercase"
              style={{ letterSpacing: '0.18em' }}
            >The Hibrythian Saga</span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            <ul className="flex items-center gap-0.5" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      [
                        'font-body text-[0.75rem] tracking-widest uppercase px-2.5 py-1 rounded-sm transition-all duration-[180ms]',
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
            <a
              href="https://www.alarkiusej.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[0.75rem] tracking-widest uppercase px-2.5 py-1 rounded-sm transition-all duration-[180ms] text-[#7a7670] hover:text-[#c9a84c] ml-1 flex items-center gap-1"
            >
              Author Site →
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-[#c9a84c] transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-[#c9a84c] transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-[#c9a84c] transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-[#2e2b26] bg-[#0e0d0b]/98 backdrop-blur-sm ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="px-5 py-4 space-y-1" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [
                      'block font-body text-sm tracking-widest uppercase px-3 py-2.5 rounded-sm transition-all duration-[180ms]',
                      isActive
                        ? 'text-[#c9a84c]'
                        : 'text-[#7a7670] hover:text-[#f2ebeb]',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://www.alarkiusej.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm tracking-widest uppercase px-3 py-2.5 rounded-sm text-[#7a7670] hover:text-[#c9a84c] transition-all duration-[180ms]"
              >
                Author Site →
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* ── Main ── */}
      <main
        className="flex-1"
        style={{
          background: `
            radial-gradient(ellipse 28% 65% at 0% 75%, rgba(122,48,5,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 28% 65% at 100% 75%, rgba(122,48,5,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 16% 42% at 0% 32%, rgba(122,48,5,0.16) 0%, transparent 65%),
            radial-gradient(ellipse 16% 42% at 100% 32%, rgba(122,48,5,0.16) 0%, transparent 65%),
            linear-gradient(to bottom, #100908 0%, #100908 70%, #0e0d0b 100%),
            #100908
          `,
        }}
      >
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#2e2b26] py-6 mt-12">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
            <p className="font-body text-[0.6rem] text-[#4a4844] tracking-wider uppercase">
              © {new Date().getFullYear()} The Hibrythian Saga · Alarkius Elvya Jay
            </p>
            <div className="gold-rule hidden sm:block" aria-hidden="true" />
            <p className="font-body text-[0.6rem] text-[#4a4844] tracking-wider">
              All Lore &amp; Worldbuilding Are Rights Reserved.
            </p>
          </div>
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
