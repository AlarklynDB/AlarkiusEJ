// ============================================================
// Lightweight router shim — replaces react-router-dom for Astro
// ------------------------------------------------------------
// Astro handles routing at the file level (pages/*.astro), so we
// don't need a client-side router. This shim provides drop-in
// replacements for the only react-router APIs the site used:
//   • <Link to="...">   → renders a real <a href="...">
//   • useLocation()      → reads the current path (SSR-safe)
//
// Pages import from '../lib/router' instead of 'react-router-dom'.
// astro.config.mjs ALSO aliases the bare 'react-router-dom'
// specifier here as a safety net, so any missed/legacy import
// still resolves and never crashes the build.
// ============================================================

import { useState, useEffect, createContext, useContext } from 'react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

// ── <Link> ──────────────────────────────────────────────────
// Same surface as react-router's Link (to / children / className…),
// but outputs a plain anchor so it works in static HTML and gets
// crawled by bots. Extra anchor attrs (target, rel, etc.) pass through.
interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children?: ReactNode
}

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}

// ── useLocation() ───────────────────────────────────────────
// Returns an object shaped like react-router's location.
//
// Hydration note: every page is pre-rendered at build time where
// window is undefined, so useLocation() cannot read the real URL on
// the server. If the initial CLIENT render disagrees with what the
// server sent down, React does not patch className/aria-current
// mismatches during hydration, so the server's (wrong) classes stay
// in the DOM — e.g. "Home" staying highlighted on every page.
//
// To get the right answer from the first byte (no flash), the page
// path is passed in from BaseLayout.astro, which already knows it:
//   <Navbar currentPath={path} client:load />
// Navbar hands it to <LocationProvider>, and useLocation() seeds its
// state from it. Server and client both start with that value, so
// hydration matches AND the correct link is active immediately. The
// effect then syncs to window.location, which is a no-op visually.
export interface ShimLocation {
  pathname: string
  search: string
  hash: string
}

const SERVER_LOCATION: ShimLocation = { pathname: '/', search: '', hash: '' }

const LocationContext = createContext<string | null>(null)

/** Provides the SSR-known pathname to every useLocation() below it. */
export function LocationProvider({ pathname, children }: { pathname?: string; children?: ReactNode }) {
  return <LocationContext.Provider value={pathname ?? null}>{children}</LocationContext.Provider>
}

function getLocation(): ShimLocation {
  if (typeof window === 'undefined') return SERVER_LOCATION
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
}

export function useLocation(initialPathname?: string): ShimLocation {
  const contextPathname = useContext(LocationContext)
  // Seed from the SSR-known path (argument, then context). Both server
  // and client see the same value, so the hydration render matches.
  const seed = initialPathname ?? contextPathname
  const [loc, setLoc] = useState<ShimLocation>(
    seed ? { pathname: seed, search: '', hash: '' } : SERVER_LOCATION
  )

  useEffect(() => {
    // Sync to the real URL once mounted (also covers pages that
    // didn't pass a path — they correct themselves here).
    setLoc(getLocation())
    // fires on browser back/forward
    const update = () => setLoc(getLocation())
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  return loc
}

// ── Compatibility no-ops ────────────────────────────────────
// Kept so any stray import resolves. BrowserRouter just renders
// its children (Astro is the real router); useNavigate pushes
// via the browser.
export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== 'undefined') window.location.assign(to)
  }
}
