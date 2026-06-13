import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PWADevTools from '@/components/PWADevTools';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import LegendsAndMyths from '@/pages/LegendsAndMyths';
import OurWorldbuilding from '@/pages/OurWorldbuilding';
import WorldbuildingContents from '@/pages/WorldbuildingContents';
import CalendarAndTime from '@/pages/WorldbuildingContents/CalendarAndTime';
import TheNhumelaCluster from '@/pages/WorldbuildingContents/TheNhumelaCluster';
import PlanetSchavel from '@/pages/WorldbuildingContents/TheNhumelaCluster/PlanetSchavel';
import SchavelianCalendar from '@/pages/WorldbuildingContents/TheNhumelaCluster/PlanetSchavel/TheSchavelianCalendar';
import OurPlanetHetra from '@/pages/WorldbuildingContents/OurPlanetHetra';
import TheNhuemynDB from '@/pages/WorldbuildingContents/TheNhuemynDB';
import CreaturesOfTheWorld from '@/pages/WorldbuildingContents/CreaturesOfTheWorld';
import BeastHierarchyKingdom from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/BeastHierarchyKingdom';
import TheDregalosaurus from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/TheDregalosaurus';
import DemonCreatures from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/DemonCreatures';
import KillerRabbits from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/KillerRabbits';
import HetraDirectWolves from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/HetraDirectWolves';
import Flimpies from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/Flimpies';
import DeerDragons from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/DeerDragons';
import PastModernDinosaurs from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/PastModernDinosaurs';
import LocalesAndSights from '@/pages/LocalesAndSights';
import MetaWorldbuilding from '@/pages/MetaWorldbuilding';
import OurCharacters from '@/pages/OurCharacters';
import Bookshelf from '@/pages/Bookshelf';
import Vol0HTHGOE from '@/pages/Bookshelf/Vol0HTHGOE';
import Vol0EP0 from '@/pages/Bookshelf/Vol0HTHGOE/EP0';
import Vol0EP1 from '@/pages/Bookshelf/Vol0HTHGOE/EP1';
import Vol0EP2 from '@/pages/Bookshelf/Vol0HTHGOE/EP2';
import Vol0EP3 from '@/pages/Bookshelf/Vol0HTHGOE/EP3';
import Vol0EP4 from '@/pages/Bookshelf/Vol0HTHGOE/EP4';
import Vol0EP5 from '@/pages/Bookshelf/Vol0HTHGOE/EP5';
import Vol0EP6 from '@/pages/Bookshelf/Vol0HTHGOE/EP6';
import HetraStandardSystems from '@/pages/WorldbuildingContents/HetraStandardSystems';
import WorldCurrency from '@/pages/WorldbuildingContents/WorldCurrency';
import GeoscienceOfHetra from '@/pages/WorldbuildingContents/GeoscienceOfHetra';
import MagicDatabase from '@/pages/WorldbuildingContents/MagicDatabase';
import TimeSystem from '@/pages/TimeSystem';
import NotFound from '@/pages/NotFound';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <Route path="world/databases/TheNhumelaCluster" element={<PageTransition><TheNhumelaCluster /></PageTransition>} />
          <Route path="world/databases/TheNhumelaCluster/PlanetSchavel" element={<PageTransition><PlanetSchavel /></PageTransition>} />
          <Route path="world/databases/TheNhumelaCluster/PlanetSchavel/SchavelianCalendar" element={<PageTransition><SchavelianCalendar /></PageTransition>} />
          <Route path="world/databases/OurPlanetHetra" element={<PageTransition><OurPlanetHetra /></PageTransition>} />
          <Route path="world/databases/HetraStandardSystems" element={<PageTransition><HetraStandardSystems /></PageTransition>} />
          <Route path="world/databases/WorldCurrency" element={<PageTransition><WorldCurrency /></PageTransition>} />
          <Route path="world/databases/GeoscienceOfHetra" element={<PageTransition><GeoscienceOfHetra /></PageTransition>} />
          <Route path="world/databases/MagicDatabase" element={<PageTransition><MagicDatabase /></PageTransition>} />
          <Route path="world/databases/TheNhuemynDB" element={<PageTransition><TheNhuemynDB /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld" element={<PageTransition><CreaturesOfTheWorld /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/BeastHierarchyKingdom" element={<PageTransition><BeastHierarchyKingdom /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/TheDregalosaurus" element={<PageTransition><TheDregalosaurus /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/DemonCreatures" element={<PageTransition><DemonCreatures /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/KillerRabbits" element={<PageTransition><KillerRabbits /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/HetraDirectWolves" element={<PageTransition><HetraDirectWolves /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/Flimpies" element={<PageTransition><Flimpies /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/DeerDragons" element={<PageTransition><DeerDragons /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/PastModernDinosaurs" element={<PageTransition><PastModernDinosaurs /></PageTransition>} />
          <Route path="world/locales" element={<PageTransition><LocalesAndSights /></PageTransition>} />
          <Route path="world/meta" element={<PageTransition><MetaWorldbuilding /></PageTransition>} />
          <Route path="characters" element={<PageTransition><OurCharacters /></PageTransition>} />
          <Route path="bookshelf" element={<PageTransition><Bookshelf /></PageTransition>} />
          <Route path="bookshelf/vol0" element={<PageTransition><Vol0HTHGOE /></PageTransition>} />
          <Route path="bookshelf/vol0/ep0" element={<PageTransition><Vol0EP0 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep1" element={<PageTransition><Vol0EP1 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep2" element={<PageTransition><Vol0EP2 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep3" element={<PageTransition><Vol0EP3 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep4" element={<PageTransition><Vol0EP4 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep5" element={<PageTransition><Vol0EP5 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep6" element={<PageTransition><Vol0EP6 /></PageTransition>} />
          <Route path="32-16TimeSystem" element={<PageTransition><TimeSystem /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
      </Routes>
    </>
  );
}
