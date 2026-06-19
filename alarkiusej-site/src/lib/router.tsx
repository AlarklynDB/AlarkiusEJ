// ============================================================
// Lightweight router shim — replaces react-router-dom for Astro
// ------------------------------------------------------------
// Astro handles routing at the file level (pages/*.astro), so we
// don't need a client-side router. This shim provides drop-in
// replacements for the only react-router APIs the site used:
//   • <Link to="...">   → renders a real <a href="...">
//   • useLocation()      → reads window.location (SSR-safe)
//
// Pages import from '../lib/router' instead of 'react-router-dom'.
// astro.config.mjs ALSO aliases the bare 'react-router-dom'
// specifier here as a safety net, so any missed/legacy import
// still resolves and never crashes the build.
// ============================================================

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
// Returns an object shaped like react-router's location. On the
// server (build time) window is undefined, so we fall back to '/'.
// On the client (after hydration via client:load) it reflects the
// real URL — so Navbar's isActive() highlighting keeps working.
export interface ShimLocation {
  pathname: string
  search: string
  hash: string
}

export function useLocation(): ShimLocation {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '' }
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
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
