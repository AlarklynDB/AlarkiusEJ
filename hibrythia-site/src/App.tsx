import { Routes, Route } from 'react-router-dom';
import PWADevTools from '@/components/PWADevTools';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import LegendsAndMyths from '@/pages/LegendsAndMyths';
import OurWorldbuilding from '@/pages/OurWorldbuilding';
import WorldbuildingContents from '@/pages/WorldbuildingContents';
import LocalesAndSights from '@/pages/LocalesAndSights';
import MetaWorldbuilding from '@/pages/MetaWorldbuilding';
import OurCharacters from '@/pages/OurCharacters';
import Bookshelf from '@/pages/Bookshelf';
import TimeSystem from '@/pages/TimeSystem';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <>
    <PWADevTools />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lore" element={<LegendsAndMyths />} />
        <Route path="world" element={<OurWorldbuilding />} />
        <Route path="world/databases" element={<WorldbuildingContents />} />
        <Route path="world/locales" element={<LocalesAndSights />} />
        <Route path="world/meta" element={<MetaWorldbuilding />} />
        <Route path="characters" element={<OurCharacters />} />
        <Route path="bookshelf" element={<Bookshelf />} />
        <Route path="32-16TimeSystem" element={<TimeSystem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
  );
}
