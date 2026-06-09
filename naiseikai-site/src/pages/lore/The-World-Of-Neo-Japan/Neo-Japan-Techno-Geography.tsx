import { Link } from 'react-router-dom'

export default function NeoJapanTechnoGeography() {
  return (
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/lore" className="hover:text-[#00e5ff] transition-colors">Lore & Timeline</Link>
        <span>/</span>
        <Link to="/lore/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span className="text-[#7ef5ff]">NEO-Japan's Techno Geography</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-4 inline-block">World-Building</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">🗾 NEO-Japan's Techno Geography</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The physical and technological landscape of Neo-Japan — megacities, floating districts, underground networks, and the neon sprawl.
        </p>
      </div>

      <div className="section-divider mb-10" />

      {/* ── A Different Earth ──────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-4">A Different…..Earth</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            In the Naiseikai Universe, this is an Alternate Earth that differs from the Earth we know and love.<br />
            But due to the significance of Yokai, Spirits, Humans and Angels, the size of Japan has increased because new landforms were made due to Earth Yokais inhabiting the continent.
          </p>
          <p>And no, this is not the Neolithic age. This is the Future of Japan in the year 2,100.</p>
        </div>

        {/* Image placeholder: Map of Neo-Japan */}
        <div className="mt-6 rounded-xl border border-[rgba(126,245,255,0.2)] bg-[rgba(126,245,255,0.03)] flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
          <span className="text-3xl">🗾</span>
          <p className="text-[#7ef5ff] font-mono text-xs font-semibold">Map of Neo-Japan</p>
          <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-4">Overview of Neo-Japan's Techno-Geography</h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>Neo-Japan is significantly larger than the Japan of our Earth due to spiritual and supernatural influences. Earth Yokais, through their connection to the land, have caused tectonic shifts and the formation of new landmasses over centuries. The continent now spans a greater area with additional islands, mountain ranges, and coastal regions that did not exist in our timeline.</p>
          <p>While many familiar prefectures and cities still exist, their locations have been adjusted to accommodate the expanded geography. Some regions have been relocated entirely, and new spiritual zones have emerged that operate outside traditional prefecture boundaries.</p>
          <p>Earth and Water Yokai work together to build and maintain this technology for the benefit of all citizens. Their magic is woven into every component of the floating system, making it a true fusion of supernatural power and advanced engineering.</p>
        </div>

        {/* Technology Production Duration */}
        <div className="mt-6 border border-[rgba(212,169,106,0.3)] rounded-xl bg-[rgba(212,169,106,0.04)] p-5">
          <h3 className="font-serif text-lg text-[#d4a96a] mb-3">Technology Production Duration</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-2">All of the technology that was built for Neo-Japan happened in the year of 1256 - 1275 AD.</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2">
            <li>• Which is Year 5 - 1599, even when new supernatural beings came down.</li>
            <li>• The age of Neo-Japan started in 2000, even with new technological innovations coming.</li>
          </ul>
        </div>

        {/* Neo-Japan Floats */}
        <div className="mt-6 border border-[rgba(126,245,255,0.2)] rounded-xl bg-[rgba(126,245,255,0.03)] p-5">
          <h3 className="font-serif text-lg text-[#7ef5ff] mb-3">Neo-Japan "Floats" on Water</h3>
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Due to a lot of inhabitants of Earth and Water yokai, they have agreed to help all citizens alike by using their magic to turn the entirety of Japan's landmass TO FLOAT steadily on the water! So that means there are no longer earthquakes (albeit minor ones (underwater volcanoes)) and tsunamis! The entirety Neo-Japan <em>technically floats</em> because under its giant mass, there are strong earth-like pillars that lift it above waters.</p>
            <p>The stabilization is very smooth and it will not affect citizen life. All ocean internet cables run under this floating landmass. A very high neural network! If a tsunami hits the cliff-side walls of mass, the energy from that will be converted into clean renewable energy, which can power the whole of Neo-Japan for centuries if not more!</p>
            <div className="callout callout-purple mt-3">
              <p className="text-sm text-text-muted italic">There are rumors of an underwater yokai city somewhere under the floating landmass of Neo-Japan, but no one knows where it is. Mizuki Shoto's Founder keeps it a secret.</p>
            </div>
          </div>
        </div>

        {/* Ports and Beaches */}
        <div className="mt-6 border border-border rounded-xl bg-surface p-5">
          <h3 className="font-serif text-lg text-text mb-3">But what about the Ports and the Beaches?</h3>
          <p className="text-sm text-text-muted leading-relaxed">They are still there! Because of the landmass that is raised significantly, the beaches are at a lower elevation due to the help of all the Earth Yokais magic. There's a huge elevator-like slide that goes up and down along the walls of the cliffsides! This allows you to go down and enjoy the beach life. Shops are indented into the walls of the landmass which are tsunami-proof if it ever happens.</p>
        </div>

        {/* Daily Life */}
        <div className="mt-6 border border-border rounded-xl bg-surface p-5">
          <h3 className="font-serif text-lg text-text mb-3">Daily Life</h3>
          <p className="text-sm text-text-muted leading-relaxed">The technology doesn't really interfere much with culture and interaction. In fact, it just enhances the atmosphere in the entirety of Neo-Japan. High developed places like Kyoto, Tokyo, Osaka…etc still have those ridiculous amounts of billboards for ads and campaigns, not just brands too. Anime trailers are also broadcasted sometimes. The biggest #1 anime hit in Neo-Japan is <em>Mob Psycho 100</em> &gt;:)</p>
        </div>

        {/* Transportation */}
        <div className="mt-6 border border-border rounded-xl bg-surface p-5">
          <h3 className="font-serif text-lg text-text mb-3">Transportation</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">Transportation is an important thing in Neo-Japan. Maglev Trains are still here. But to get to islands like Hokkaido, Mizuki Shoto, Ryu no Shima, Kyushu Region, Shikoku Region and Tenshi Shima there are…!</p>
          <ul className="space-y-2 text-sm text-text-muted list-none">
            <li>• <strong className="text-text">Sky Bridge Trains</strong> — They still use the Maglev Trains, but instead they are called Maglev Air.</li>
            <li>• <strong className="text-text">Maglev-Seas</strong> — Also a thing! But these are only for Magnoid Tourism. They run along the Network Cables which doubles as a rail system.</li>
            <li>• Walking is still a nationwide thing. But to get to places faster, people like to roller-skate!</li>
          </ul>
        </div>

        {/* Attractions */}
        <div className="mt-6 border border-[rgba(255,208,80,0.2)] rounded-xl bg-[rgba(255,208,80,0.03)] p-5">
          <h3 className="font-serif text-lg text-[#ffd080] mb-3">Attractions / Wonders</h3>
          <ul className="space-y-2 text-sm text-text-muted list-none">
            <li>• <strong className="text-text">Mount Fuji</strong> is still the highest mountain!</li>
            <li>• A new waterfall by the name <strong className="text-text">Sora no Taki</strong> exists within the <strong className="text-text">Sora no Oka Region</strong>. It is the biggest, widest, and tallest natural formation to exist in Neo-Japan. It outranks Niagara Falls and Paradise Falls.</li>
            <li>• <strong className="text-text">Ryuu no Kyuuden</strong> — It is open to the public and it is the first ever Dragon Palace to exist. Dragon Yokais are pretty open and friendly! The architecture inside is extravagant. Carved out of pristine stone-like gold and amber materials.</li>
            <li>• <strong className="text-text">The Otohashi Bamboosa Flower</strong> — it stands high and mighty on the little island next to the Otohashi Yama Range.</li>
            <li>• <strong className="text-text">Mizuki Shoto Bioluminescent Tree</strong> — unlike other bioluminescent phenomena around the world, this Tree that stands on the biggest island archipelago glows a very pretty purple and aqua blue color at night. It happens for one day, specifically on August 12th for each year. The remaining months allows this tree to soak up the rays of energy from the sun before it glows again.</li>
          </ul>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Floating Technology ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-2">Floating Technology</h2>

        {/* Image placeholder: Floating Technology of NEO-Japan */}
        <div className="mb-6 rounded-xl border border-[rgba(126,245,255,0.2)] bg-[rgba(126,245,255,0.03)] flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
          <span className="text-3xl">🌊</span>
          <p className="text-[#7ef5ff] font-mono text-xs font-semibold">Floating Technology of NEO-Japan</p>
          <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mb-6">Neo-Japan's floating landmass is supported by advanced technology and yokai magic working in harmony. These systems are used across ALL landforms of Neo-Japan to keep the continent stable and afloat.</p>

        {/* IP Ratings */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <h3 className="font-serif text-lg text-text mb-3">Ingress Protection Rating Labels</h3>
          <p className="text-sm text-text-muted font-semibold mb-2">IP100 & IK100 — Water and Shock Resistance</p>
          <ul className="space-y-2 text-sm text-text-muted list-none">
            <li>• The technology used to keep Neo-Japan afloat has the highest waterproof rating, designated as IP100 (essentially IP68, but significantly stronger). This ensures all floating devices can withstand extreme water pressure and force without failure.</li>
            <li>• IK100 is for shock resistance.</li>
            <li>• <strong className="text-text">IPC200</strong> — Ingress Corrosive Protection 200 — can withstand any corrosion and acidity to the max.</li>
            <li>• <strong className="text-text">IEPR 50</strong> — Ingress Electric-Protection Resistance 50 (Max) — The streets are coated with rubber latex and earthy materials which negates random transformers from exploding electricity onto the streets. It recycles the electricity back into the ground and into the system. Renewable energy!</li>
          </ul>
        </div>

        {/* Earth Pillars */}
        <div className="border border-border rounded-xl bg-surface p-5">
          <h3 className="font-serif text-lg text-text mb-3">Earth Pillars / Mounts</h3>
          <p className="text-sm text-text-muted leading-relaxed">Massive earth-like pillars extend from the underside of the landmass down into the ocean floor. These pillars, created and maintained through Earth Yokai magic, serve as the primary structural support for the entire floating continent. They are incredibly stable and anchor Neo-Japan in place.</p>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Magnetic Suspension / Magnoids ────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-2">Magnetic Suspension via Superconductors</h2>
        <p className="text-sm text-[#7ef5ff] font-mono mb-2">Also known as Magnoids</p>

        {/* Image placeholder: Magnoids of Neo-Japan */}
        <div className="mb-6 rounded-xl border border-[rgba(212,163,255,0.2)] bg-[rgba(212,163,255,0.03)] flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
          <span className="text-3xl">🧲</span>
          <p className="text-[#d49fff] font-mono text-xs font-semibold">Magnoids of Neo-Japan</p>
          <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mb-6">The landmass utilizes magnetic suspension technology powered by superconductors. This system is incredibly stable - so much so that citizens will not notice any movement or vibration in their daily lives. The suspension also absorbs vibrations from small earthquakes and tremors, converting that kinetic energy along with tsunami energy into eco-friendly electricity. Think of it like frictionless motion on a superconductor magnet with dry ice inside those giant magnoids.</p>

        <div className="space-y-3 mb-6">
          <div className="border border-[rgba(255,107,107,0.2)] rounded-xl bg-surface p-4 text-sm text-text-muted leading-relaxed">
            <p className="font-semibold text-text mb-1">If a single Magnoid turns Offline…</p>
            <p>All of the Magnoids are a single hivemind. They operate individually even though they are linked together. If one becomes offline, the rest stay up. It takes about a team of 100 to go down to fix it!</p>
          </div>
          <div className="border border-[rgba(126,245,255,0.2)] rounded-xl bg-surface p-4 text-sm text-text-muted leading-relaxed">
            <p className="font-semibold text-text mb-1">A Weird Phenomenon</p>
            <p>The magnetic suspension waves, <em>although invisible,</em> can be seen and felt under the water (because of how water reacts to magnetic waves). This does not harm other technology like scuba diving gear when fixing components. In fact, when these fields are met, they sync up! Gives off a very mute but soft humming tone in the 3,523hz range.</p>
            <p className="mt-2 text-text-faint italic">The effects might remind you of water reacting to soundwaves!</p>
          </div>
        </div>

        {/* Magnoid Sizes */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <h3 className="font-serif text-lg text-text mb-3">Magnoid Levitators Size</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">They vary depending on the size of each island, plate, or landmass.</p>
          <p className="text-sm text-text-muted mb-2">Magnoids stop unnatural phenomenon — they help support the whole landmass up in the waters which prevents massive sinkholes from happening.</p>
          <p className="text-sm text-[#7ef5ff] font-semibold mb-2">Island Sized Magnoids like:</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2">
            <li>• <strong className="text-text">Hokkaido</strong> — Mountains here are heavy. A super strong force is needed.</li>
            <li>• <strong className="text-text">Mizuki Shoto</strong> — The Biolum Tree is HEAVY. Needs support with a lot of electromagnetic force.</li>
            <li>• <strong className="text-text">Tenshi Shima</strong> — not necessarily needed, but just in case. This place is pretty chill.</li>
            <li>• <strong className="text-text">Ryuu no Shima</strong> — needs a giant one. The volcano here often causes small eruptions which is enough to shake it.</li>
          </ul>
        </div>

        {/* Magnoids in Mainland */}
        <div className="border border-border rounded-xl bg-surface p-5 mb-4">
          <h3 className="font-serif text-lg text-text mb-3">Magnoids in Mainland NEO-Japan</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">The size is at least the size of Naomi. The Levitators are placed strategically where all the roads cross into one point and also at prefecture/region edges.</p>

          <p className="text-xs font-mono text-[#7ef5ff] mb-1">Dead Center Road Crossings (Prefecture Sizes Combined):</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2 mb-4">
            <li>• Ninjin, Fukushima, Gunma, Nigata, and Tochigi</li>
            <li>• Tokyo, Tenka, Naomi, Usa — Also extends to the Hashi Prefecture</li>
            <li>• Akita, Iwate, Yamagata & Miyagi</li>
            <li>• Tottori, Shimane, & Hyogo</li>
            <li>• Osaka, Nara, & Wakayama</li>
          </ul>

          <p className="text-xs font-mono text-[#7ef5ff] mb-1">Prefecture Centers:</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2 mb-4">
            <li>• <strong className="text-text">Ninjin Magnoid</strong> — same magnoid that takes up Dead Center Road Crossings</li>
            <li>• <strong className="text-text">Gifu Magnoid</strong> — Takes up Ishikawa, Nagano, Fukui, & Aichi</li>
            <li>• <strong className="text-text">Kanagawa Magnoid</strong> — Takes up Saitama, Chiba and Shizuoka</li>
            <li>• <strong className="text-text">Takahashi Magnoid</strong> — Takes up Takahashi, Okayama, Yamaguchi and Hiroshima</li>
          </ul>

          <p className="text-xs font-mono text-[#7ef5ff] mb-1">Sora no Oka:</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2 mb-4">
            <li>• Northern Most Region</li>
            <li>• Center most region</li>
            <li>• Southern Most Region (just pass Tottori)</li>
          </ul>

          <p className="text-xs font-mono text-[#7ef5ff] mb-1">Otohashi Yama:</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2 mb-4">
            <li>• Only has three Magnoid Points (east to west) to the border of Aomori and Akita</li>
          </ul>

          <p className="text-xs font-mono text-[#7ef5ff] mb-1">Prefecture Edges in Neo-Japan:</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2 mb-4">
            <li>• Yaeyue Magnoid</li>
            <li>• The Hanami Region
              <ul className="ml-4 space-y-1 mt-1">
                <li>— Yaofuya Magnoid — Yaoshi and Fuyatsu</li>
                <li>— Hayatsuna Magnoid — Hayami and Setsuna</li>
              </ul>
            </li>
            <li>• Hashi Magnoid</li>
            <li>• Yamanashi Magnoid</li>
          </ul>

          <p className="text-xs font-mono text-[#7ef5ff] mb-1">Single Magnoids:</p>
          <ul className="space-y-1 text-sm text-text-muted list-none ml-2">
            <li>• <strong className="text-text">Ryu no Shima</strong> — takes up the whole size of the island</li>
            <li>• <strong className="text-text">Tenshi Shima</strong> — also the whole island size</li>
            <li>• <strong className="text-text">Kyushu Region</strong> — Technically a single magnoid, since Okinawa and Natsuya are in the same landmass (islands sprouting out of the Kyushu Plate)</li>
            <li>• <strong className="text-text">Hokkaido Magnoid</strong> — same size as the prefecture itself.</li>
            <li>• <strong className="text-text">Hanami Region</strong> — Technically a single magnoid, since Kanko, Kihara, and Niaji are in the same landmass plate</li>
            <li>• <strong className="text-text">Mizuki Shoto (Archipelago)</strong> — Technically a single magnoid, since all its lands are in the same landmass plate</li>
            <li>• <strong className="text-text">Shikoku Region</strong> — A Single Magnoid that supports the whole island landmass</li>
          </ul>
        </div>
      </section>

      <div className="section-divider mb-10" />

      {/* ── Systems of Neo-Japan ──────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl text-text mb-6">Systems of Neo-Japan</h2>

        {/* Network System */}
        <div className="border border-[rgba(126,245,255,0.2)] rounded-xl bg-[rgba(126,245,255,0.03)] p-5 mb-4">
          <h3 className="font-serif text-lg text-[#7ef5ff] mb-3">Network System</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">Underneath all these tech like systems are Network Cable Systems. It stretches out and carves the shape of the whole of Neo-Japan underwater as a shape with interconnecting intersections and many network-linked systems.</p>
          <ul className="space-y-2 text-sm text-text-muted list-none">
            <li>• Neo-Japan runs on 12G under 9Pbps (9,000 Tbs).</li>
            <li>• Neo-Japan has up to 12 Exabytes (EB) of storage.
              <ul className="ml-4 space-y-1 mt-1">
                <li>— The AI used for the Water Filtration System requires at least 4 EBs, since they need a lot of processing power to determine toxins in water.</li>
                <li>— The rest are for technology storage along with infrastructure data plans and energy storage.</li>
              </ul>
            </li>
            <li>• Has its own Mobile Network named <strong className="text-text">"REI-3"</strong> (which is also a name for their vocaloid mascot).</li>
          </ul>
        </div>

        {/* Aqueducts */}
        <div className="border border-[rgba(126,245,255,0.2)] rounded-xl bg-[rgba(126,245,255,0.03)] p-5 mb-4">
          <h3 className="font-serif text-lg text-[#7ef5ff] mb-3">Aqueducts System</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">Integrated aqueducts run throughout the underside of the floating landmass, serving multiple critical functions:</p>
          <ul className="space-y-2 text-sm text-text-muted list-none">
            <li>• <strong className="text-text">Water Filtration:</strong> Purifying ocean water for civilian use!
              <ul className="ml-4 space-y-1 mt-1">
                <li>— <strong className="text-text">Drinkable Water Supply:</strong> Providing clean water to all regions of Neo-Japan!</li>
                <li>— <strong className="text-text">AI Filtering Systems:</strong> Unlike generative systems, the AI systems here in Neo-Japan help filter out dirty water and purify them into clean drinkable water. They are effective when it comes to figuring out toxins or very salty saline that have been mixed with the ocean water. It doesn't use chlorine as an artificial adhesive for tap water. Instead, Hydrogen-Mint (a new chemical substance) is used in tap water which gives it a cool healthy feel.</li>
              </ul>
            </li>
            <li>• <strong className="text-text">Energy Generation:</strong> Harnessing water flow for power! Even from tsunamis and small quakes at the ocean floor!</li>
            <li>• <strong className="text-text">Waste is produced into Energy</strong> — Ever wonder where fecal matter goes? Now you know. NEO-Japan's water and oceans (mainland, which includes lakes/rivers) are THE CLEANEST in the whole of Naiseikai.</li>
          </ul>
        </div>

        {/* Cliffside Safety */}
        <div className="border border-border rounded-xl bg-surface p-5">
          <h3 className="font-serif text-lg text-text mb-3">Cliffside Safety Systems</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">The cliffsides that connect the elevated landmass to the beaches below are equipped with advanced safety features. Almost ALL of these cliffsides have these systems:</p>
          <ul className="space-y-2 text-sm text-text-muted list-none">
            <li>• <strong className="text-text">Embedded Underground Stairs:</strong> Hidden stairway systems built into either end of the cliff walls.</li>
            <li>• <strong className="text-text">Emergency Metal Gates:</strong> In case a tsunami hits, massive metal gates will slide down to seal off access points and prevent citizen harm.</li>
            <li>• <strong className="text-text">Super Large Escalator:</strong> At the end of the stair systems, a large escalator takes citizens up to the surface level! There are either escalators, elevators, or hydraulic systems that can make upwards travel smooth without any repercussions.</li>
          </ul>
        </div>
      </section>

      {/* Nav */}
      <div className="mt-12 section-divider" />
      <div className="flex flex-wrap gap-3 mt-4">
        <Link to="/lore/the-world-of-neo-japan" className="btn-neon-cyan text-xs">← The World of Neo-Japan</Link>
        <Link to="/lore/the-world-of-neo-japan/neo-japan-prefectures" className="btn-neon-purple text-xs">Neo-Japan Prefectures →</Link>
      </div>

    </div>
  )
}
