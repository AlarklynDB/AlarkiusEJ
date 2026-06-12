import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PWADevTools from '@/components/PWADevTools';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import LegendsAndMyths from '@/pages/LegendsAndMyths';
import OurWorldbuilding from '@/pages/OurWorldbuilding';
import WorldbuildingContents from '@/pages/WorldbuildingContents';
import CalendarAndTime from '@/pages/WorldbuildingContents/CalendarAndTime';
import LocalesAndSights from '@/pages/LocalesAndSights';
import MetaWorldbuilding from '@/pages/MetaWorldbuilding';
import OurCharacters from '@/pages/OurCharacters';
import Bookshelf from '@/pages/Bookshelf';
import Vol0HTHGOE from '@/pages/Bookshelf/Vol0HTHGOE';
import TimeSystem from '@/pages/TimeSystem';
import NotFound from '@/pages/NotFound';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <div ref={wrapRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <PWADevTools />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="lore" element={<PageTransition><LegendsAndMyths /></PageTransition>} />
          <Route path="world" element={<PageTransition><OurWorldbuilding /></PageTransition>} />
          <Route path="world/databases" element={<PageTransition><WorldbuildingContents /></PageTransition>} />
          <Route path="world/databases/CalendarAndTime" element={<PageTransition><CalendarAndTime /></PageTransition>} />
          <Route path="world/locales" element={<PageTransition><LocalesAndSights /></PageTransition>} />
          <Route path="world/meta" element={<PageTransition><MetaWorldbuilding /></PageTransition>} />
          <Route path="characters" element={<PageTransition><OurCharacters /></PageTransition>} />
          <Route path="bookshelf" element={<PageTransition><Bookshelf /></PageTransition>} />
          <Route path="bookshelf/vol0" element={<PageTransition><Vol0HTHGOE /></PageTransition>} />
          <Route path="32-16TimeSystem" element={<PageTransition><TimeSystem /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
      </Routes>
    </>
  );
}
