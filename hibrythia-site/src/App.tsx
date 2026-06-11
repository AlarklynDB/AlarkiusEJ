import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import LegendsAndMyths from '@/pages/LegendsAndMyths';
import World from '@/pages/World';
import Characters from '@/pages/Characters';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lore" element={<LegendsAndMyths />} />
        <Route path="world" element={<World />} />
        <Route path="characters" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

