import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CitySkyline from './components/CitySkyline'
import Home from './pages/Home'
import Universe from './pages/Universe'
import Lore from './pages/Lore'
import Worldbuilding from './pages/Worldbuilding'
import Titles from './pages/Titles'
import Songbook from './pages/Songbook'
import Author from './pages/Author'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/universe"      element={<Universe />} />
            <Route path="/lore"          element={<Lore />} />
            <Route path="/worldbuilding" element={<Worldbuilding />} />
            <Route path="/titles"        element={<Titles />} />
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
