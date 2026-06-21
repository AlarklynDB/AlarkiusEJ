// ============================================================
// Navbar — extracted from the old Layout.tsx header.
// Hydrates as a client island (client:load) so the mobile drawer
// toggle + active-link highlighting keep working. Uses the router
// shim's NavLink/useLocation (aliased from react-router-dom).
// ============================================================
import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/world',      label: 'World' },
  { to: '/characters', label: 'Characters' },
  { to: '/bookshelf',  label: 'Bookshelf' },
  { to: '/multimedia', label: 'Multimedia' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
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
            <li>
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  [
                    'font-body text-[0.75rem] tracking-widest uppercase px-2.5 py-1 rounded-sm transition-all duration-[180ms]',
                    isActive ? 'text-[#c9a84c] bg-[#c9a84c]/8' : 'text-[#7a7670] hover:text-[#d8d4cc]',
                  ].join(' ')
                }
              >
                Community Hub
              </NavLink>
            </li>
          </ul>
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
            <NavLink
              to="/community"
              className={({ isActive }) =>
                [
                  'block font-body text-sm tracking-widest uppercase px-3 py-2.5 rounded-sm transition-all duration-[180ms]',
                  isActive ? 'text-[#c9a84c]' : 'text-[#7a7670] hover:text-[#c9a84c]',
                ].join(' ')
              }
            >
              Community Hub
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
