import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Worlds',
    children: [
      { label: 'The Hibrythian Saga', path: '/hibrythian-saga' },
      { label: 'The Naiseikai Universe', path: '/naiseikai-universe' },
    ],
  },
  { label: 'Music', path: '/music' },
  { label: 'Tools & Apps', path: '/tools' },
  { label: 'Buy My Books', path: 'https://www.barnesandnoble.com/search?q=Alarkius%20Elvya%20Jay&contributorName=alarkius-elvya-jay', external: true },
  {
    label: 'FAQ',
    children: [
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Policies', path: '/policies' },
      { label: 'Manifesto', path: '/manifesto' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const solidNav = scrolled || mobileOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidNav ? 'bg-ink/95 backdrop-blur-sm border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl font-semibold text-text group-hover:text-rose-light transition-colors duration-200">
            AlarkiusEJ 
          </span>
          <span className="text-text-faint text-sm hidden sm:inline"> |Author Library</span>
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
                      ? 'text-rose-light bg-rose-bg'
                      : 'text-text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-surface-raised border border-border rounded-lg shadow-xl shadow-black/30 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-3 text-sm transition-all duration-150 ${
                          isActive(child.path)
                            ? 'text-rose-light bg-rose-bg'
                            : 'text-text-muted hover:text-text hover:bg-surface-hover'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : link.external ? (
              <li key={link.label}>
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm rounded-md transition-all duration-200 text-rose-light hover:text-text hover:bg-surface font-medium"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  to={link.path!}
                  className={`px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                    isActive(link.path!)
                      ? 'text-rose-light bg-rose-bg'
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
        <div className="lg:hidden bg-ink/98 backdrop-blur-sm border-t border-border">
          <ul className="max-w-5xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <span className="block px-3 py-2 text-xs text-text-faint uppercase tracking-wider font-medium">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`block px-5 py-2 text-sm rounded-md transition-colors ${
                        isActive(child.path) ? 'text-rose-light' : 'text-text-muted hover:text-text'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </li>
              ) : link.external ? (
                <li key={link.label}>
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm rounded-md transition-colors text-rose-light hover:text-text font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.path}>
                  <Link
                    to={link.path!}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(link.path!) ? 'text-rose-light bg-rose-bg' : 'text-text-muted hover:text-text hover:bg-surface'
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
