import { useEffect, useRef, useState, type ReactNode } from 'react';

interface NavItem {
  id: string;
  label: string;
}

export default function LorePageLayout({ children }: { children: ReactNode }) {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [wide, setWide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track viewport width
  useEffect(() => {
    const check = () => setWide(window.innerWidth >= 1148);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Build nav from h2[id] elements
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const headings = Array.from(container.querySelectorAll('h2[id]')) as HTMLHeadingElement[];
    const items: NavItem[] = headings.map((h) => ({
      id: h.id,
      label: h.textContent?.trim() ?? '',
    }));
    setNavItems(items);
    if (items.length > 0) setActiveId(items[0].id);
  }, []);

  // Intersection observer — highlight active section on scroll
  useEffect(() => {
    if (navItems.length < 4) return;
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [navItems]);

  return (
    <>
      {/* Side nav — only rendered when wide enough AND enough sections */}
      {wide && navItems.length >= 4 && (
        <nav
          aria-label="Page sections"
          style={{
            position: 'fixed',
            top: '5.5rem',
            right: '1.5rem',
            width: '180px',
            maxHeight: 'calc(100vh - 7rem)',
            overflowY: 'auto',
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-2 px-2">
            On this page
          </p>
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 72;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="font-body text-[11px] px-2 py-1.5 rounded-sm transition-all duration-150 leading-snug truncate"
                style={{
                  color: isActive ? '#c9a84c' : '#4a4844',
                  background: isActive ? 'rgba(201,168,76,0.07)' : 'transparent',
                  borderLeft: isActive ? '2px solid #c9a84c' : '2px solid transparent',
                  fontWeight: isActive ? 500 : 400,
                }}
                title={item.label}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}

      <div ref={containerRef}>{children}</div>
    </>
  );
}
