// ============================================================
// Lightweight router shim — replaces react-router-dom for Astro
// ------------------------------------------------------------
// Astro handles routing at the file level (pages/*.astro), so we
// don't need a client-side router. This shim provides drop-in
// replacements for every react-router API the site used:
//   • <Link to="...">    → renders a real <a href="...">
//   • <NavLink to="...">  → real <a>, with className/isActive support
//   • useLocation()       → reads window.location (SSR-safe)
//   • <Outlet/>           → renders nothing (Astro <slot/> handles it)
//   • useNavigate()       → window.location.assign
//   • BrowserRouter/Routes/Route → render children (no-op)
//
// astro.config.mjs aliases the bare 'react-router-dom' specifier
// here as a universal safety net, so EVERY page/component import
// resolves transparently — zero import edits needed across the
// 149 page files.
// ============================================================

import { useState, useEffect } from 'react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

// ── <Link> ──────────────────────────────────────────────────
// Same surface as react-router's Link, but outputs a plain anchor
// so it works in static HTML and gets crawled by bots.
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
// On the client (after hydration) it reflects the real URL — so
// NavLink active-highlighting keeps working.
export interface ShimLocation {
  pathname: string
  search: string
  hash: string
}

function getLocation(): ShimLocation {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '' }
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }
}

export function useLocation(): ShimLocation {
  const [loc, setLoc] = useState<ShimLocation>(getLocation)

  useEffect(() => {
    function update() { setLoc(getLocation()) }
    // fires on browser back/forward
    window.addEventListener('popstate', update)
    // patch pushState/replaceState so <Link> clicks also trigger update
    const _push = history.pushState.bind(history)
    const _replace = history.replaceState.bind(history)
    history.pushState = function (...args) { const r = _push(...args); update(); return r }
    history.replaceState = function (...args) { const r = _replace(...args); update(); return r }
    return () => {
      window.removeEventListener('popstate', update)
      history.pushState = _push
      history.replaceState = _replace
    }
  }, [])

  return loc
}

// ── <NavLink> ───────────────────────────────────────────────
// react-router's NavLink supports className/style/children as a
// function of { isActive }. We compute isActive from the real URL
// (matches react-router's `end` semantics) and pass it through.
interface NavLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'style' | 'children'> {
  to: string
  end?: boolean
  className?: string | ((props: { isActive: boolean }) => string)
  style?: React.CSSProperties | ((props: { isActive: boolean }) => React.CSSProperties)
  children?: ReactNode | ((props: { isActive: boolean }) => ReactNode)
}

export function NavLink({ to, end, className, style, children, ...rest }: NavLinkProps) {
  const { pathname } = useLocation()
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(to + '/')
  const resolvedClass = typeof className === 'function' ? className({ isActive }) : className
  const resolvedStyle = typeof style === 'function' ? style({ isActive }) : style
  const resolvedChildren = typeof children === 'function' ? children({ isActive }) : children
  return (
    <a href={to} className={resolvedClass} style={resolvedStyle} aria-current={isActive ? 'page' : undefined} {...rest}>
      {resolvedChildren}
    </a>
  )
}

// ── Compatibility no-ops ────────────────────────────────────
export function Outlet() {
  return null
}

export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function Route(_: { path?: string; element?: ReactNode; index?: boolean; children?: ReactNode }) {
  return null
}

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== 'undefined') window.location.assign(to)
  }
}

