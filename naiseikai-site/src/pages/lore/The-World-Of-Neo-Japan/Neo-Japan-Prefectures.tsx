import { Link } from 'react-router-dom'

export default function NeoJapanPrefectures() {
  return (
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/lore" className="hover:text-[#00e5ff] transition-colors">Lore & Timeline</Link>
        <span>/</span>
        <Link to="/lore/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span className="text-[#7ef5ff]">NEO-Japan's Prefectures</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-4 inline-block">World-Building</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">🗾 NEO-Japan's Prefectures</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          Traditional and spiritual landscapes of Alt-Earth Japan — rearranged, expanded, and reborn across a continent that never was.
        </p>
      </div>

      {/* Image placeholder: Map of Neo-Japan */}
      <div className="mb-10 rounded-xl border border-[rgba(126,245,255,0.2)] bg-[rgba(126,245,255,0.03)] flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
        <span className="text-3xl">🗾</span>
        <p className="text-[#7ef5ff] font-mono text-xs font-semibold">Map of Neo-Japan</p>
        <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
      </div>

      <div className="section-divider mb-10" />

      {/* ── Traditional Prefectures ───────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-3">Traditional Prefectures</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">These are the standard political divisions of Neo-Japan, similar to our Earth but rearranged across the expanded landmass:</p>

        <div className="space-y-3">

          {/* Ninjin */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Ninjin Prefecture</p>
            <ul className="space-y-1 text-sm text-text-muted list-none">
              <li>• This is a new prefecture where the NYAQ is established, alongside with the YHCA.</li>
            </ul>
          </div>

          {/* Hokkaido */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Hokkaido</p>
            <ul className="space-y-1 text-sm text-text-muted list-none">
              <li>• The northernmost island, largely unchanged in structure but slightly expanded in size.</li>
            </ul>
          </div>

          {/* Tohoku */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Tohoku Region</p>
            <ul className="space-y-1 text-sm text-text-muted list-none">
              <li>• A vast yellow-coded area in the northern mainland, encompassing prefectures like Aomori, Akita, Iwate, Miyagi, Yamagata, and Fukushima.</li>
            </ul>
          </div>

          {/* Kanto */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Kanto Region</p>
            <div className="space-y-1 text-sm text-text-muted">
              <p>• The orange-coded central-eastern region containing major urban centers including Tokyo, Kanagawa, Saitama, Chiba, Gunma, Tochigi, and Ibaraki. Due to continental expansion, these prefectures have shifted positions compared to our Earth.</p>
              <p className="ml-4 text-[#d4a96a]">New/Notable Cities: Hashi, Naomi, Rosa, Tenka, & Usa</p>
            </div>
          </div>

          {/* Chubu */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Chubu Region</p>
            <div className="space-y-1 text-sm text-text-muted">
              <p>• The mint/cyan central region, home to prefectures such as Niigata, Toyama, Ishikawa, Fukui, Nagano, Gifu, Shizuoka, Aichi, and Yamanashi.</p>
              <p className="ml-4 text-[#d4a96a]">New/Notable Cities: Raoki, Yue, Yae</p>
            </div>
          </div>

          {/* Kansai */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Kansai Region</p>
            <ul className="space-y-1 text-sm text-text-muted list-none">
              <li>• The purple central-western region including Osaka, Kyoto, Hyogo, Shiga, Nara, Wakayama, and Mie. The cities are rearranged slightly.</li>
            </ul>
          </div>

          {/* Chugoku */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Chugoku Region</p>
            <div className="space-y-1 text-sm text-text-muted">
              <p>• The lavender western region containing Tottori, Shimane, Okayama, Hiroshima, and Yamaguchi.</p>
              <p className="ml-4 text-[#d4a96a]">New/Notable Cities: Takahashi</p>
            </div>
          </div>

          {/* Shikoku */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Shikoku Region</p>
            <ul className="space-y-1 text-sm text-text-muted list-none">
              <li>• The pink southern island region with its four prefectures: Tokushima, Kagawa, Ehime, and Kochi.</li>
            </ul>
          </div>

          {/* Kyushu */}
          <div className="border border-border rounded-xl bg-surface p-5">
            <p className="font-serif text-base text-text font-semibold mb-2">Kyushu Region</p>
            <div className="space-y-1 text-sm text-text-muted">
              <p>• The gray southwestern region encompassing Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Okinawa, and Kagoshima.</p>
              <p className="ml-4 text-[#d4a96a]">New/Notable Cities: Natsuya is a new island that rivals Okinawa</p>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Spiritual Landscapes ──────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-3">Spiritual Landscapes and New Regions</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">These areas exist outside traditional prefecture governance and hold spiritual or supernatural significance:</p>

        <div className="space-y-4">

          {/* Hanami Region */}
          <div className="border border-[rgba(191,95,255,0.3)] rounded-xl bg-[rgba(191,95,255,0.03)] p-5">
            <p className="font-serif text-lg text-[#d49fff] font-semibold mb-1">Hanami Region 🌸</p>
            <p className="text-xs text-text-faint font-mono italic mb-3">Bright cyan zones scattered throughout northern and eastern Neo-Japan</p>
            <p className="text-sm text-text-muted leading-relaxed">The Hanami Region is not a political prefecture but rather a collective name for sacred zones marked by local shrines, altars, and spiritual sites. These areas are scattered across multiple prefectures, creating a network of holy grounds. The Hanami Region is recognized by the presence of ancient cherry blossom trees that bloom year-round due to spiritual energy, and each site is protected by local shrine keepers and spirits.</p>
          </div>

          {/* Otohashi Yama */}
          <div className="border border-[rgba(100,200,100,0.3)] rounded-xl bg-[rgba(100,200,100,0.03)] p-5">
            <p className="font-serif text-lg text-[#a8ff8a] font-semibold mb-1">Otohashi Yama ⛰️</p>
            <p className="text-xs text-text-faint font-mono italic mb-3">Dark green mountainous region in the northwest</p>
            <p className="text-sm text-text-muted leading-relaxed">A newly formed mountain range that emerged due to Earth Yokai activity. The name translates to "Sound Bridge Mountains," so called because the wind through the peaks creates ethereal musical tones. This region is sparsely populated and known for its dangerous terrain and strong spiritual presence.</p>
          </div>

          {/* Mizuki Shoto */}
          <div className="border border-[rgba(126,245,255,0.3)] rounded-xl bg-[rgba(126,245,255,0.03)] p-5">
            <p className="font-serif text-lg text-[#7ef5ff] font-semibold mb-1">Mizuki Shoto 🧜‍♀️</p>
            <p className="text-xs text-text-faint font-mono italic mb-3">Bright blue island chain in the southeast</p>
            <p className="text-sm text-text-muted leading-relaxed">An archipelago founded and shaped by a powerful Mermaid Spirit centuries ago. These islands did not exist in our Earth's timeline and are considered sacred waters. The Mizuki Shoto is home to unique marine life and serves as a gateway between the human world and oceanic spirit realms. The region has a small human population that lives in harmony with water spirits.</p>
          </div>

          {/* Sora no Oka */}
          <div className="border border-[rgba(126,245,255,0.2)] rounded-xl bg-[rgba(126,245,255,0.02)] p-5">
            <p className="font-serif text-lg text-[#7ef5ff] font-semibold mb-1">Sora no Oka 🏔️</p>
            <p className="text-xs text-text-faint font-mono italic mb-3">Mint green region on the western coast</p>
            <p className="text-sm text-text-muted leading-relaxed mb-3">A highland plateau region that emerged on the western seaboard. Sora no Oka, meaning "Sky Hills," is characterized by high-altitude plains and is known for its clear skies and connection to wind and sky spirits.</p>
            <div className="border border-[rgba(255,107,107,0.2)] rounded-lg bg-surface p-3 mt-2">
              <p className="text-sm text-text font-semibold mb-1">─────⊰ Fuka-sa no Oka</p>
              <p className="text-sm text-text-muted">• The YARC resides on some hills in the southern part of Fuka-sa that oversees Okayama and Tottori in the Chugoku Region.</p>
            </div>
          </div>

          {/* Ryuu no Shima */}
          <div className="border border-[rgba(255,100,100,0.3)] rounded-xl bg-[rgba(255,100,100,0.03)] p-5">
            <p className="font-serif text-lg text-[#ff8a8a] font-semibold mb-1">Ryū no Shima 🐉</p>
            <p className="text-xs text-text-faint font-mono italic mb-3">Red/coral island in the southwest</p>
            <p className="text-sm text-text-muted leading-relaxed">Translating to "Dragon Island," this landmass is a volcanic island formed by the activity of dragon-type Yokai. The island is largely uninhabited by humans due to its active volcanic nature and serves as a territory for powerful fire and earth spirits. Ancient legends speak of dragons still dwelling in its mountains.</p>
          </div>

          {/* Tenshi Shima */}
          <div className="border border-[rgba(255,255,255,0.15)] rounded-xl bg-[rgba(255,255,255,0.02)] p-5">
            <p className="font-serif text-lg text-text font-semibold mb-1">Tenshi Shima 👼</p>
            <p className="text-xs text-text-faint font-mono italic mb-3">Small outlined region</p>
            <p className="text-sm text-text-muted leading-relaxed">Meaning "Angel Island," this is a mysterious and isolated region with connections to angelic beings. Little is publicly known about Tenshi Shima, as it remains restricted to most civilians and is protected by spiritual barriers.</p>
          </div>

        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Key Differences ───────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-6">Key Differences from Our Earth</h2>
        <div className="border border-border rounded-xl bg-surface p-5">
          <ul className="space-y-3 text-sm text-text-muted list-none leading-relaxed">
            <li>• <strong className="text-text">Continental Scale:</strong> Neo-Japan is approximately 40% larger than Japan in our timeline</li>
            <li>• <strong className="text-text">Geographic Repositioning:</strong> Major cities and prefectures have been shifted to accommodate new landmasses and spiritual zones</li>
            <li>• <strong className="text-text">New Islands:</strong> Multiple island chains have emerged, including Mizuki Shoto and Ryū no Shima</li>
            <li>• <strong className="text-text">Spiritual Zones:</strong> Areas like the Hanami Region exist as cultural-spiritual designations rather than political boundaries</li>
            <li>• <strong className="text-text">Increased Biodiversity:</strong> The expanded landmass and spiritual influence have created unique ecosystems not found in our timeline</li>
            <li className="text-[#ff8a8a]">• <strong>The Hiroshima and Nagasaki Bombings</strong> — <em>Never happened.</em></li>
            <li>• The entire world is inhabited by supernatural beings like yokai and such. It's not just confined to Neo-Japan.</li>
            <li>• Hatsune Miku and other popular Vocaloids are still active!</li>
          </ul>
        </div>

        {/* Peaceful Wars */}
        <div className="mt-4 border border-[rgba(255,208,80,0.2)] rounded-xl bg-[rgba(255,208,80,0.03)] p-5">
          <h3 className="font-serif text-lg text-[#ffd080] mb-3">Peaceful Wars</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-2">Entertainment War of 2000 happened between China, London, America, and Neo-Japan.</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2">
            <li>• China got first place for insane performance and graphics</li>
            <li>• Neo-Japan got second place for immersive story telling</li>
            <li>• London and America tied for Music Storytelling</li>
          </ul>
        </div>
      </section>

      {/* Nav */}
      <div className="mt-12 section-divider" />
      <div className="flex flex-wrap gap-3 mt-4">
        <Link to="/lore/the-world-of-neo-japan/neo-japan-techno-geography" className="btn-neon-cyan text-xs">← Techno-Geography</Link>
        <Link to="/lore/the-world-of-neo-japan/yokai-citizens-of-neo-japan" className="btn-neon-purple text-xs">Yokai Citizens →</Link>
      </div>

    </div>
  )
}
