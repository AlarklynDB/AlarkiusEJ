import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Universe',
    children: [
      { label: 'Universe Overview', path: '/universe' },
      { label: 'Lore & Timeline', path: '/lore' },
    ],
  },
  { label: 'Titles', path: '/titles' },
  { label: 'Songbook', path: '/songbook' },
  {
    label: 'More',
    children: [
      { label: 'Author\'s Note', path: '/author' },
      { label: 'Alarkius EJ ↗', path: 'https://www.alarkiusej.com', external: true },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path
  const toggleDropdown = (label: string) =>
    setOpenDropdown(openDropdown === label ? null : label)
  const solidNav = scrolled || mobileOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidNav
          ? 'bg-[rgba(5,5,20,0.96)] backdrop-blur-md border-b border-[rgba(100,80,200,0.25)] shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-lg font-semibold text-text group-hover:text-[#bf5fff] transition-colors duration-200"
            style={{ textShadow: '0 0 12px rgba(191,95,255,0.4)' }}>
            内省界
          </span>
          <span className="text-text-faint text-xs hidden sm:inline tracking-wide"> | The Naiseikai Universe</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className={`px-3 py-2 text-sm rounded-md transition-all duration-200 flex items-center gap-1 ${
                    openDropdown === link.label
                      ? 'text-[#bf5fff] bg-[rgba(191,95,255,0.1)]'
                      : 'text-text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-[rgba(8,8,30,0.98)] border border-[rgba(100,80,200,0.3)] rounded-lg shadow-xl shadow-black/50 overflow-hidden backdrop-blur-md">
                    {link.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.path}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm text-text-muted hover:text-[#00e5ff] hover:bg-[rgba(0,229,255,0.06)] transition-all duration-150"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-3 text-sm transition-all duration-150 ${
                            isActive(child.path)
                              ? 'text-[#bf5fff] bg-[rgba(191,95,255,0.1)]'
                              : 'text-text-muted hover:text-text hover:bg-[rgba(191,95,255,0.06)]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  to={link.path!}
                  className={`px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                    isActive(link.path!)
                      ? 'text-[#bf5fff] bg-[rgba(191,95,255,0.1)]'
                      : 'text-text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[rgba(5,5,20,0.98)] backdrop-blur-md border-t border-[rgba(100,80,200,0.2)]">
          <ul className="max-w-5xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <span className="block px-3 py-2 text-xs text-text-faint uppercase tracking-widest font-mono">
                    {link.label}
                  </span>
                  {link.children.map((child) =>
                    child.external ? (
                      <a
                        key={child.path}
                        href={child.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-2 text-sm text-text-muted hover:text-[#00e5ff] transition-colors"
                      >
                        {child.label}
                      </a>
                    ) : (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-5 py-2 text-sm rounded-md transition-colors ${
                          isActive(child.path) ? 'text-[#bf5fff]' : 'text-text-muted hover:text-text'
                        }`}
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </li>
              ) : (
                <li key={link.path}>
                  <Link
                    to={link.path!}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(link.path!) ? 'text-[#bf5fff]' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  )
}
