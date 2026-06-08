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

// ─── TQCTN ────────────────────────────────────────────────────────────────────
import TQCTN from './pages/KarasuToNinja-TQCTN'
import HanakoReina from './pages/TQCTN-Characters/Hanako-Reina'
import KoaRuruka from './pages/TQCTN-Characters/Koa-Ruruka'
import HaruhiAoi from './pages/TQCTN-Characters/Haruhi-Aoi'
import LittleBunnyAru from './pages/TQCTN-Characters/Your-One-and-Only-Little-Bunny-Aru'
import AsamiKurose from './pages/TQCTN-Characters/Asami-Kurose'

// ─── SorenaoAne ───────────────────────────────────────────────────────────────
import Nevertheless from './pages/SorenaoAne-Nevertheless'
import AsahiNanako from './pages/SorenaoANE-Characters/Asahi-Nanako'
import ReikoNozomi from './pages/SorenaoANE-Characters/Reiko-Nozomi'
import ShionNanako from './pages/SorenaoANE-Characters/Shion-Nanako'
import KoharuInoue from './pages/SorenaoANE-Characters/Koharu-Inoue'
import CyllviaApril from './pages/SorenaoANE-Characters/Cyllvia-April'

// ─── Dullahan ─────────────────────────────────────────────────────────────────
import Dullahan from './pages/DuraDekiruKoi-Dullahan'
import KoriYukino from './pages/DuraDekiruKoi-Characters/Kori-Yukino'
import HinokaAmane from './pages/DuraDekiruKoi-Characters/Hinoka-Amane'

// ─── Lonely Android ───────────────────────────────────────────────────────────
import LonelyAndroid from './pages/HitoJinzo2GF-LonelyAndroid'
import AyaneOtokura from './pages/HitoJinzo2GF-Characters/Ayane-Otokura'
import AkariChisaki from './pages/HitoJinzo2GF-Characters/Akari-Chisaki'
import AyumiKazehara from './pages/HitoJinzo2GF-Characters/Ayumi-Kazehara'

// ─── GyakuTEN ─────────────────────────────────────────────────────────────────
import GyakuTen from './pages/GyakuTEN-ParadoxicalReincarnation'
import NarratorKun from './pages/GyakuTEN-Characters/Narrator-Kun'
import EinaArataki from './pages/GyakuTEN-Characters/Eina-Arataki'
import MasatoRenKillerkun from './pages/GyakuTEN-Characters/Masato-Ren-Killer-kun'

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

            {/* TQCTN */}
            <Route path="/titles/KarasuToNinja-TQCTN" element={<TQCTN />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Hanako-Reina" element={<HanakoReina />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Koa-Ruruka" element={<KoaRuruka />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Haruhi-Aoi" element={<HaruhiAoi />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Your-One-and-Only-Little-Bunny-Aru" element={<LittleBunnyAru />} />
            <Route path="/titles/KarasuToNinja-TQCTN/Asami-Kurose" element={<AsamiKurose />} />

            {/* SorenaoAne */}
            <Route path="/titles/SorenaoAne-Nevertheless" element={<Nevertheless />} />
            <Route path="/titles/SorenaoAne-Nevertheless/Asahi-Nanako" element={<AsahiNanako />} />
            <Route path="/titles/SorenaoAne-Nevertheless/Reiko-Nozomi" element={<ReikoNozomi />} />
            <Route path="/titles/SorenaoAne-Nevertheless/Shion-Nanako" element={<ShionNanako />} />
            <Route path="/titles/SorenaoAne-Nevertheless/Koharu-Inoue" element={<KoharuInoue />} />
            <Route path="/titles/SorenaoAne-Nevertheless/Cyllvia-April" element={<CyllviaApril />} />

            {/* Dullahan */}
            <Route path="/titles/DuraDekiruKoi-Dullahan" element={<Dullahan />} />
            <Route path="/titles/DuraDekiruKoi-Dullahan/Kori-Yukino" element={<KoriYukino />} />
            <Route path="/titles/DuraDekiruKoi-Dullahan/Hinoka-Amane" element={<HinokaAmane />} />

            {/* Lonely Android */}
            <Route path="/titles/HitoJinzo2GF-LonelyAndroid" element={<LonelyAndroid />} />
            <Route path="/titles/HitoJinzo2GF-LonelyAndroid/Ayane-Otokura" element={<AyaneOtokura />} />
            <Route path="/titles/HitoJinzo2GF-LonelyAndroid/Akari-Chisaki" element={<AkariChisaki />} />
            <Route path="/titles/HitoJinzo2GF-LonelyAndroid/Ayumi-Kazehara" element={<AyumiKazehara />} />

            {/* GyakuTEN */}
            <Route path="/titles/GyakuTEN-ParadoxicalReincarnation" element={<GyakuTen />} />
            <Route path="/titles/GyakuTEN-ParadoxicalReincarnation/Narrator-Kun" element={<NarratorKun />} />
            <Route path="/titles/GyakuTEN-ParadoxicalReincarnation/Eina-Arataki" element={<EinaArataki />} />
            <Route path="/titles/GyakuTEN-ParadoxicalReincarnation/Masato-Ren-Killer-kun" element={<MasatoRenKillerkun />} />

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
