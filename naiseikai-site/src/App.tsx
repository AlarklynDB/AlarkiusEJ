import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CitySkyline from './components/CitySkyline'
import Home from './pages/Home'
import Universe from './pages/Universe'
import PowerScaling from './pages/PowerScaling'
import Lore from './pages/Lore'
import Titles from './pages/Titles'
import Songbook from './pages/Songbook'
import Author from './pages/Author'
import TQCTN from './pages/KarasuToNinja-TQCTN'
import HanakoReina from './pages/TQCTN-Characters/Hanako-Reina'
import KoaRuruka from './pages/TQCTN-Characters/Koa-Ruruka'
import HaruhiAoi from './pages/TQCTN-Characters/Haruhi-Aoi'
import LittleBunnyAru from './pages/TQCTN-Characters/Your-One-and-Only-Little-Bunny-Aru'
import AsamiKurose from './pages/TQCTN-Characters/Asami-Kurose'
import Nevertheless from './pages/SorenaoAne-Nevertheless'
import Dullahan from './pages/DuraDekiruKoi-Dullahan'
import LonelyAndroid from './pages/HitoJinzo2GF-LonelyAndroid'
import GyakuTen from './pages/GyakuTEN-ParadoxicalReincarnation'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/universe"      element={<Universe />} />
            <Route path="/power-scaling" element={<PowerScaling />} />
            <Route path="/lore"          element={<Lore />} />
            <Route path="/titles"        element={<Titles />} />
            <Route path="/titles/KarasuToNinja-TQCTN" element={<TQCTN />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Hanako-Reina" element={<HanakoReina />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Koa-Ruruka" element={<KoaRuruka />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" element={<HaruhiAoi />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" element={<LittleBunnyAru />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Asami-Kurose" element={<AsamiKurose />} />
            <Route path="/titles/SorenaoAne-Nevertheless" element={<Nevertheless />} />
            <Route path="/titles/DuraDekiruKoi-Dullahan" element={<Dullahan />} />
            <Route path="/titles/HitoJinzo2GF-LonelyAndroid" element={<LonelyAndroid />} />
            <Route path="/titles/GyakuTEN-ParadoxicalReincarnation" element={<GyakuTen />} />
            <Route path="/songbook"      element={<Songbook />} />
            <Route path="/author"        element={<Author />} />
          </Routes>
        </main>
        <Footer />
        {/* Fixed city skyline — sits above bg, below content */}
        <CitySkyline />
      </div>
    </BrowserRouter>
  )
}
