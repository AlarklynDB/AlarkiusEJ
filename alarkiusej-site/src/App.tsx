import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HibrythianSaga from './pages/HibrythianSaga'
import NaiseikaiUniverse from './pages/NaiseikaiUniverse'
import Music from './pages/Music'
import Manifesto from './pages/Manifesto'
import Policies from './pages/Policies'
import Contact from './pages/Contact'
import Tools from './pages/Tools'
import FindMyBooks from './pages/FindMyBooks'
import BnHibrythianSaga from './pages/BnHibrythianSaga'
import BnNaiseikaiUniverse from './pages/BnNaiseikaiUniverse'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-ink">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hibrythian-saga" element={<HibrythianSaga />} />
            <Route path="/naiseikai-universe" element={<NaiseikaiUniverse />} />
            <Route path="/music" element={<Music />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/find-my-books" element={<FindMyBooks />} />
            <Route path="/bn-hibrythian-saga" element={<BnHibrythianSaga />} />
            <Route path="/bn-naiseikai-universe" element={<BnNaiseikaiUniverse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
