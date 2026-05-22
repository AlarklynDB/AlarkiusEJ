import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────
interface SubSection {
  heading: string
  content: React.ReactNode
}

interface SubPage {
  id: string
  icon: string
  title: string
  subtitle?: string
  sections: SubSection[]
}

// ─── Subpage Data ─────────────────────────────────────────────────────────────

const subPages: SubPage[] = [
  // ── 1. Main Timeline ────────────────────────────────────────────────────────
  {
    id: 'timeline',
    icon: '🗓️',
    title: 'Lore & Timeline',
    subtitle: 'The chronological history of the Naisei-Kai Universe',
    sections: [
      {
        heading: 'Overview',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>The Lore Timeline for the Naisei-Kai Universe, its history, and also stories! Since the Worldbuilding Genres here are: Sci-Fi, Urban Fantasy, Supernatural, and Alternate History, the entire earth is now labeled in this world as <strong className="text-text">Alt-Earth.</strong></p>
            <p>A chronological compilation of key character birthdays, lore events, and mystical timestamps across the interconnected stories of:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Shizukana Karasu to Ninja (SKTN)</li>
              <li>Nevertheless, You're Still My Sister! (SorenaoAne)</li>
              <li>The Lonely Android and Her Two GFs (HitoJinzo2GF)</li>
              <li>Can This Dullahan Fall in Love? (DuraDekiruKoi)</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '🗓️ Primordial & Foundational Timeline',
        content: (
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
            <div>
              <p className="font-semibold text-[#ffd080]">Year 0</p>
              <p>The Naisei-Kai Universe begins.</p>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">Year 5 — 1599 · The Great Yokai Descent</p>
              <p>Appearance of Yokai and Supernatural beings begins to show in Ancient Japan. It's not just Japan though — Yokai began to show up around the world!</p>
              <div className="mt-2 ml-4 space-y-2">
                <p><span className="text-[#d4a96a]">Yokai Relinquishment</span> — A dangerous powerful act for Yokai Shrines. It takes away the yokai status, powers, and the ability to change into their yokai counterparts, turning them into a human. But the cost? Emotions are taken away. Only for a vessel to walk adrift across the Earth. The only place to do this is at Tenshi Shima (Angel Island) and Ryuu no Shima (Dragon Island). This act is more of a forced relinquishment for yokais who have committed atrocities. Total Relinquishment must be done through Ujuukyo Practices.</p>
                <p><span className="text-[#ffd080]">May 05, 050</span> AD — <strong className="text-text">The Religion of Ujuukyō forms.</strong></p>
                <p><span className="text-[#d4a96a]">Sept 18th, 1465</span> — Japan Imperialists and Immigrants (500k of them) traverse the world to spread their Japanese influence to different cultures. On September 18th, The Japanese Language has been immortalized worldwide. Japanese is now the main native language. This is now regarded as a National Holiday.</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">1600 · Yokai-Edo Japan Era Begins</p>
              <p><span className="text-[#ffd080]">Jan 7th, 1650</span> — Kori Yukino is born from a line of Dullahans, Warriors, and Martial Artists (DuraDekiruKoi)</p>
              <p>March 25th, 1675 — Education in Neo Japan has been Formed.</p>
            </div>
            <div>
              <p className="font-semibold text-[#d49fff]">1700 · The Yokai & Human Coalition Act (YHCA)</p>
              <p>A formal agreement that integrates both societies in balance.</p>
              <div className="mt-2 ml-4 space-y-2">
                <p><span className="text-[#d4a96a]">The Y&H Coalition Act</span> — The YHCA was formed exactly on 1700. Yokai cannot kill or murder humans because it is illegal, even if it's the other way around. It's about moral laws and ambiguity between parties. However, it is NOT illegal for Yokai to kill Yokai. It has been a tradition since the early yokai settlements from Year 5 - 1599.</p>
                <p>The Yokai Association Recovery Center (YARC) — Formed in 1779 AD by the YHCA. The YARC rehabilitates repeat offenders into making them relive their past errors so that they can make up for it.</p>
                <p>The Ninja Yokai Association Quarters (NYAQ) — Formed in 1795 by the YHCA. There are a lot of yokai and humans who band together to become Ninjas through wealth, fame, and mercenaries.</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">1809</p>
              <p>Birth of the Reinishi Karasu Generational Family (precursor to Hanako Reina's bloodline in SKTN).</p>
              <p className="mt-1"><span className="text-[#d4a96a]">18XX (Late 1800s):</span> Karasu Reinishi disappears and places a curse on the Reina generation, splitting it from the original Reinishi Tree.</p>
              <p className="mt-1"><span className="text-[#d4a96a]">YARC - Ties Are Cut (1875):</span> During Death Eater's reign, he had cut ALL official ties off from the YHCA including the Yokai Side of the YHCA. This organization has gone rogue.</p>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">1900</p>
              <p>Spirits and astral beings begin descending into Pre-Industrial Japan.</p>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">1945</p>
              <p>Yokai-Imperial Japan era begins. Cultural clashes and supernatural tensions rise.</p>
            </div>
            <div>
              <p className="font-semibold text-[#7ef5ff]">2000</p>
              <p>NEO-Japan begins — an era of spiritual rebirth and technological renaissance.</p>
            </div>
            <div>
              <p className="font-semibold text-[#ffaad4]">April 22, 2000</p>
              <p><strong className="text-text">Ayumi Kazehara</strong> manifests as a spirit due to her contract with the Goddess of Nature (HitoJinzo2GF).</p>
            </div>
            <div>
              <p className="font-semibold text-[#7ef5ff]">2010</p>
              <p>Holotech and illusionary advanced technology begins development.</p>
            </div>
            <div>
              <p className="font-semibold text-[#7ef5ff]">2020–2022</p>
              <p>Tsukihiko Virus Pandemic sweeps through the world, deeply affecting both humans and yokai alike.</p>
            </div>
            <div>
              <p className="font-semibold text-[#7ef5ff]">2030–2050</p>
              <p>Android and Cybernetic Synthetics are perfected. They are now real, living entities capable of biological reproduction.</p>
            </div>
            <div>
              <p className="font-semibold text-[#7ef5ff]">2060</p>
              <p>Rise of Cyborgs as a distinct identity class. They are not androids or cybernetic synthetics — they're a carbon based copy on titanium alloy and Vapor Spirits.</p>
            </div>
          </div>
        ),
      },
      {
        heading: '🗓️ Modern-Era Birthdays (2070s–2080s)',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <div>
              <p className="font-semibold text-[#ffd080]">2075 Birthdays</p>
              <ul className="list-none ml-2 space-y-1">
                <li>• <strong className="text-text">May 23</strong> — Cyllvia April (SorenaoANE)</li>
                <li>• <strong className="text-text">July 16</strong> — Haruhi Aoi (KarasuToNinja)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">2076 Birthdays</p>
              <ul className="list-none ml-2 space-y-1">
                <li>• <strong className="text-text">July 7</strong> — Hinoka Amane (DuraDekiruKoi)</li>
                <li>• <strong className="text-text">August 1</strong> — Reiko Nanako (SorenaoANE)</li>
                <li>• <strong className="text-text">September 22</strong> — Ayane Otokura, human birthday (HitoJinzo2GF)</li>
                <li>• <strong className="text-text">October 31</strong> — Chisaki Akari (HitoJinzo2GF)</li>
                <li>• <strong className="text-text">November 2</strong> — Koa Ruruka (KarasuToNinja)</li>
                <li>• <strong className="text-text">November 16</strong> — Hanako Reina (KarasuToNinja)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">2077 Birthdays</p>
              <ul className="list-none ml-2 space-y-1">
                <li>• <strong className="text-text">May 22</strong> — Koharu Inoue (SorenaoANE)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">2080 Birthdays</p>
              <ul className="list-none ml-2 space-y-1">
                <li>• <strong className="text-text">July 13</strong> — Shion Nozomi (SorenaoANE)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">2081 Birthdays</p>
              <ul className="list-none ml-2 space-y-1">
                <li>• <strong className="text-text">July 17</strong> — Asahi Nanako (SorenaoANE)</li>
                <li>• <strong className="text-text">June 13</strong> — Ayane Otokura, android activation (HitoJinzo2GF)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#ffd080]">2090</p>
              <p><strong className="text-text">April 22</strong> — Ayumi Kazehara takes on human form (HitoJinzo2GF)</p>
            </div>
          </div>
        ),
      },
      {
        heading: '🗓️ 2100 and Beyond',
        content: (
          <p className="text-sm text-text-muted leading-relaxed">The present-day timeline where all current stories take place across the Naisei-Kai Universe. Events from SKTN, SorenaoAne, HitoJinzo2GF, and DuraDekiruKoi all converge and unfold here.</p>
        ),
      },
      {
        heading: '🌀 Meta-Timeline: Major Emotional & Lore Events',
        content: (
          <ul className="space-y-2 text-sm text-text-muted leading-relaxed list-none">
            <li>• <strong className="text-text">Asahi's 20th birthday (2081)</strong> — Reiko disappears due to suicidal depression and reappears at Koharu's place. Emotional confrontation ensues.</li>
            <li>• <strong className="text-text">Hanako Reina unlocks Black Halo (EP 10, SKTN)</strong> — Triggered by fear and rage when Ruruka is endangered. Symbolic hair color change occurs.</li>
            <li>• <strong className="text-text">Phoenix Sky Castle Attack</strong> — Hinoka loses her lineage and nearly dies, her Eternal Flame begins to fade. Event predates DuraDekiruKoi.</li>
            <li>• <strong className="text-text">Ayumi loses Kazuki to shark attack (2094)</strong> — Formative grief moment; her wind powers spiral. Leads to emotional rebirth.</li>
            <li>• <strong className="text-text">Ayane self-deactivates (2087)</strong> — After Ayafutsu's death. Later found by Akari and rehabilitated.</li>
            <li>• <strong className="text-text">EP XII (SKTN)</strong> — Birth of Little Bunny Aru, summoned via Bamboo Magic by Haruhi Aoi. Technically only 3 days old.</li>
          </ul>
        ),
      },
    ],
  },

  // ── 2. NEO-Japan Techno Geography ───────────────────────────────────────────
  {
    id: 'techgeo',
    icon: '🗾',
    title: "NEO-Japan's Techno Geography",
    subtitle: 'A different Earth — the floating continent of 2100',
    sections: [
      {
        heading: 'A Different Earth',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>In the Naiseikai Universe, this is an Alternate Earth that differs from the Earth we know and love. But due to the significance of Yokai, Spirits, Humans and Angels, the size of Japan has increased because new landforms were made due to Earth Yokais inhabiting the continent.</p>
            <p>And no, this is not the Neolithic age. This is the Future of Japan in the year 2,100.</p>
          </div>
        ),
      },
      {
        heading: 'Overview of Neo-Japan\'s Techno-Geography',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Neo-Japan is significantly larger than the Japan of our Earth due to spiritual and supernatural influences. Earth Yokais, through their connection to the land, have caused tectonic shifts and the formation of new landmasses over centuries. The continent now spans a greater area with additional islands, mountain ranges, and coastal regions that did not exist in our timeline.</p>
            <p>While many familiar prefectures and cities still exist, their locations have been adjusted to accommodate the expanded geography. Some regions have been relocated entirely, and new spiritual zones have emerged that operate outside traditional prefecture boundaries.</p>
            <p className="font-semibold text-[#7ef5ff]">Technology Production Duration</p>
            <p>All of the technology that was built for Neo-Japan happened in the year of 1256–1275 AD — which is Year 5–1599. The age of Neo-Japan started in 2000, even with new technological innovations coming.</p>
          </div>
        ),
      },
      {
        heading: 'Neo-Japan "Floats" on Water',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Due to a lot of inhabitants of Earth and Water yokai, they have agreed to help all citizens alike by using their magic to turn the entirety of Japan's landmass TO FLOAT steadily on the water! So that means there are no longer earthquakes (albeit minor ones — underwater volcanoes) and tsunamis! The entirety Neo-Japan <em>technically floats</em> because under its giant mass, there are strong earth-like pillars that lift it above waters.</p>
            <p>The stabilization is very smooth and it will not affect citizen life. All ocean internet cables run under this floating landmass. A very high neural network! If a tsunami hits the cliff-side walls of mass, the energy from that will be converted into clean renewable energy, which can power the whole of Neo-Japan for centuries if not more!</p>
            <p className="text-[#7ef5ff] italic">There are rumors of an underwater yokai city somewhere under the floating landmass of Neo-Japan, but no one knows where it is. Mizuki Shoto's Founder keeps it a secret.</p>
          </div>
        ),
      },
      {
        heading: 'But what about the Ports and Beaches?',
        content: (
          <p className="text-sm text-text-muted leading-relaxed">They are still there! Because of the landmass that is raised significantly, the beaches are at a lower elevation due to the help of all the Earth Yokais' magic. There's a huge elevator-like slide that goes up and down along the walls of the cliffsides! This allows you to go down and enjoy the beach life. Shops are indented into the walls of the landmass which are tsunami-proof if it ever happens.</p>
        ),
      },
      {
        heading: 'Transportation',
        content: (
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>Transportation is an important thing in Neo-Japan. Maglev Trains are still here. But to get to islands like Hokkaido, Mizuki Shoto, Ryu no Shima, Kyushu Region, Shikoku Region and Tenshi Shima there are:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li><strong className="text-text">Sky Bridge Trains</strong> — Maglev Air trains that connect distant islands.</li>
              <li><strong className="text-text">Maglev-Seas</strong> — Also a thing! These are only for Magnoid Tourism. They run along the Network Cables which doubles as a rail system.</li>
              <li>Walking is still a nationwide thing. But to get to places faster, people like to roller-skate!</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Attractions & Wonders',
        content: (
          <ul className="space-y-2 text-sm text-text-muted leading-relaxed list-none">
            <li>• <strong className="text-text">Mount Fuji</strong> — Still the highest mountain!</li>
            <li>• <strong className="text-text">Sora no Taki</strong> — A new waterfall in the Sora no Oka Region. The biggest, widest, and tallest natural formation in Neo-Japan. Outranks Niagara Falls and Paradise Falls.</li>
            <li>• <strong className="text-text">Ryuu no Kyuuden</strong> — Open to the public. The first ever Dragon Palace to exist. Architecture is extravagant — carved out of pristine stone-like gold and amber materials.</li>
            <li>• <strong className="text-text">The Otohashi Bamboosa Flower</strong> — Stands high and mighty on the little island next to the Otohashi Yama Range.</li>
            <li>• <strong className="text-text">Mizuki Shoto Bioluminescent Tree</strong> — Glows purple and aqua blue at night. Happens for one day, specifically on August 12th each year.</li>
          </ul>
        ),
      },
      {
        heading: 'Floating Technology & Magnoids',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Neo-Japan's floating landmass is supported by advanced technology and yokai magic working in harmony — also known as <strong className="text-text">Magnoids (Magnetic Suspension via Superconductors)</strong>. The system is incredibly stable — so much so that citizens will not notice any movement or vibration in their daily lives.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <div className="border border-border rounded-lg p-3 bg-surface">
                <p className="text-[#7ef5ff] font-semibold text-xs mb-1">IP100 & IK100</p>
                <p className="text-xs">Water and shock resistance — highest waterproof rating. IPC200 for corrosion. IEPR 50 for electrical protection.</p>
              </div>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <p className="text-[#7ef5ff] font-semibold text-xs mb-1">Earth Pillars / Mounts</p>
                <p className="text-xs">Massive earth-like pillars extend from the underside of the landmass down into the ocean floor, maintained through Earth Yokai magic.</p>
              </div>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <p className="text-[#7ef5ff] font-semibold text-xs mb-1">Network System</p>
                <p className="text-xs">Neo-Japan runs on 12G under 9Pbps. Own mobile network named "REI-3." Up to 12 Exabytes of storage.</p>
              </div>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <p className="text-[#7ef5ff] font-semibold text-xs mb-1">Aqueducts System</p>
                <p className="text-xs">Purifying ocean water for civilian use. AI filtering systems detect toxins. Hydrogen-Mint used instead of chlorine for tap water.</p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  // ── 3. Prefectures ──────────────────────────────────────────────────────────
  {
    id: 'prefectures',
    icon: '🗾',
    title: "NEO-Japan's Prefectures",
    subtitle: 'Traditional and spiritual landscapes of Alt-Earth Japan',
    sections: [
      {
        heading: 'Traditional Prefectures',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            {[
              { name: 'Ninjin Prefecture', desc: 'A new prefecture where the NYAQ is established, alongside the YHCA.' },
              { name: 'Hokkaido', desc: 'The northernmost island, largely unchanged in structure but slightly expanded in size.' },
              { name: 'Tohoku Region', desc: 'A vast northern region encompassing Aomori, Akita, Iwate, Miyagi, Yamagata, and Fukushima.' },
              { name: 'Kanto Region', desc: 'The central-eastern region containing Tokyo, Kanagawa, Saitama, Chiba, Gunma, Tochigi, and Ibaraki. New/Notable Cities: Hashi, Naomi, Rosa, Tenka, & Usa.' },
              { name: 'Chubu Region', desc: 'The central region, home to Niigata, Toyama, Ishikawa, Fukui, Nagano, Gifu, Shizuoka, Aichi, and Yamanashi. New/Notable Cities: Raoki, Yue, Yae.' },
              { name: 'Kansai Region', desc: 'The central-western region including Osaka, Kyoto, Hyogo, Shiga, Nara, Wakayama, and Mie.' },
              { name: 'Chugoku Region', desc: 'The western region containing Tottori, Shimane, Okayama, Hiroshima, and Yamaguchi. New/Notable Cities: Takahashi.' },
              { name: 'Shikoku Region', desc: 'The southern island region with Tokushima, Kagawa, Ehime, and Kochi.' },
              { name: 'Kyushu Region', desc: 'The southwestern region encompassing Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Okinawa, and Kagoshima. New/Notable Cities: Natsuya.' },
            ].map((p) => (
              <div key={p.name} className="border border-border rounded-lg p-3 bg-surface">
                <p className="font-semibold text-text text-sm">{p.name}</p>
                <p className="text-xs mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'Spiritual Landscapes & New Regions',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            {[
              { name: 'Hanami Region 🌸', desc: 'Sacred zones marked by shrines, altars, and spiritual sites. Ancient cherry blossom trees bloom year-round due to spiritual energy.' },
              { name: 'Otohashi Yama ⛰️', desc: 'A newly formed mountain range from Earth Yokai activity. Wind through its peaks creates ethereal musical tones.' },
              { name: 'Mizuki Shoto 🧜‍♀️', desc: 'An archipelago founded by a powerful Mermaid Spirit. Sacred waters; a gateway between the human world and oceanic spirit realms.' },
              { name: 'Sora no Oka 🏔️', desc: 'A highland plateau region characterized by high-altitude plains and connection to wind and sky spirits. Home of the YARC (Fuka-sa Range).' },
              { name: 'Ryū no Shima 🐉', desc: '"Dragon Island" — a volcanic island formed by dragon-type Yokai activity. Home of the Ryuu no Kyuuden (Dragon Palace).' },
              { name: 'Tenshi Shima 👼', desc: '"Angel Island" — a mysterious and isolated region protected by spiritual barriers, connected to angelic beings.' },
            ].map((r) => (
              <div key={r.name} className="border border-[rgba(191,95,255,0.3)] rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#d49fff] text-sm">{r.name}</p>
                <p className="text-xs mt-1">{r.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'Key Differences from Our Earth',
        content: (
          <ul className="space-y-2 text-sm text-text-muted leading-relaxed list-none">
            <li>• Continental Scale: Neo-Japan is approximately 40% larger than Japan in our timeline.</li>
            <li>• Geographic Repositioning: Major cities and prefectures have been shifted to accommodate new landmasses.</li>
            <li>• New Islands: Mizuki Shoto and Ryū no Shima among others have emerged.</li>
            <li>• Spiritual Zones: Areas like the Hanami Region exist as cultural-spiritual designations rather than political boundaries.</li>
            <li className="text-[#ff6b6b]">• The Hiroshima and Nagasaki Bombings — <em>Never happened.</em></li>
            <li>• Hatsune Miku and other popular Vocaloids are still active!</li>
            <li>• Entertainment War of 2000: China got 1st, Neo-Japan got 2nd, London and America tied for Music Storytelling.</li>
          </ul>
        ),
      },
    ],
  },

  // ── 4. Yokai Citizens ───────────────────────────────────────────────────────
  {
    id: 'yokai',
    icon: '👹',
    title: 'Yokai Citizens of Neo-Japan',
    subtitle: 'Species catalogue of the Naiseikai Universe',
    sections: [
      {
        heading: 'Avian Yokai',
        content: (
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
            {[
              { name: 'Crow (Karasu)', color: '#7ef5ff', desc: 'The Crow Yokai lineage traces back to 1809 with the Reinishi Karasu Generational Family. Their most notable ability is connection to silence and stillness. Modern descendants like Hanako Reina possess telekinesis, cryokinesis, and the ability to transform into crow forms. Crow Yokai age differently — their appearance freezes around age 18.' },
              { name: 'Raven (Watarigasu)', color: '#d49fff', desc: 'Distinct from Crow Yokai despite similar appearances. Ravens possess abilities tied to wisdom, prophecy, and memory manipulation. They are sought as historians, archivists, and spiritual advisors. Deep purple-black feathers with iridescent sheen; silver or violet eyes that glow when using prophecy abilities.' },
              { name: 'Swan (Hakuchō)', color: '#7ef5ff', desc: 'Elegant water-affiliated avian spirits known for grace, beauty, and devastating combat prowess when provoked. Possess Hydro-Grace, Serenade of Stillness, and Swan\'s Fury (300% power increase when protecting loved ones). Swan Yokai mate for life.' },
              { name: 'Vulture (Hagewashi)', color: '#ffd080', desc: 'Death-affiliated avian spirits with deep connections to the cycle of life, decay, and rebirth. Perform sky burials, serve as epidemic response teams and forensic investigators. Recognized by Ujuukyō faith as Kiyome no Tori (Birds of Purification).' },
              { name: 'Peacock (Kujaku)', color: '#ffaad4', desc: 'Flamboyant spirits connected to beauty, pride, illusion, and solar magic. Their tail feathers can hypnotize viewers. Known as celebrities, diplomats, and psychological warfare specialists. Abilities strengthen significantly in direct sunlight.' },
              { name: 'Falcon (Hayabusa)', color: '#7ef5ff', desc: 'Apex predatory avian spirits with unmatched speed, precision, and hunting prowess. Can achieve speeds exceeding 240 mph in dive attacks — fastest of all avian yokai. Elite NYAQ forces. "When a Falcon is assigned, the mission is already complete."' },
            ].map((y) => (
              <div key={y.name} className="border border-border rounded-lg p-3 bg-surface">
                <p className="font-semibold text-sm mb-1" style={{ color: y.color }}>─────⊰ {y.name}</p>
                <p className="text-xs">{y.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'Supernatural Yokai',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            {[
              { name: 'Octoquid (Tako-Ika)', desc: 'Descended from the Octoquid Yokai Line established in 1779. The YARC infused this lineage with cursed snake blood, creating half-octoquid, half-snake hybrids. Many fled to Mizuki Shoto. Possess telepathic abilities through their tendril-like hair and hydrokinesis.' },
              { name: 'Kitsune (Fox)', desc: 'Fox Yokai are among the supernatural beings targeted by the YARC for experimentation. Known for their cunning nature and shapeshifting abilities.' },
              { name: 'Dragon (Ryū)', desc: 'Dragon-type Yokai are fire and earth spirits of immense power. Subtypes include: Dracolich (Undead Dragon), Serpentine Yokai (Sea Dragons), Chinese Dragons, Norse Dragons, Lizardfolk, and Kobolds.' },
              { name: 'Demon (Akuma)', desc: 'Demon Yokai possess cursed artifacts. Subtypes: Lesser Demon, Demon Witches, Mages and Wizards. They possess significant supernatural abilities and can interbreed with other yokai species.' },
              { name: 'Vampire (Kyūketsuki)', desc: 'Vampire Yokai can become Ninja — as evidenced by Erika Von Schuvausst, a Vampire Yokai Ninja from London. They possess enhanced abilities and can integrate into human society.' },
              { name: 'Dullahan', desc: 'Warrior yokai who often train alongside Ninjas at the NYAQ. They honor death as sacred and are known for their martial prowess. Dullahan lineages include warriors and martial artists.' },
              { name: 'Harpy', desc: 'Avian humanoids with the upper body of a human and wings/talons/lower body of birds of prey. Wingspan typically 12–15 feet. They possess Master Flight, Wind Manipulation, and Storm Calling. Harpy Yokai have no other counterparts — every physical detail is permanent.' },
              { name: 'Angels (Tenshi)', desc: 'Celestial beings who descended during Year 5–1599. Tenshi Shima (Angel Island) serves as a sacred territory. Angels can become Ninjas, known as Tenshi-kō-shin within the NYAQ. Tenshi Shima is one of two locations where Yokai Relinquishment can be performed.' },
              { name: 'Phoenix (Fushichō)', desc: 'Fewer than 50 estimated to exist. Revered as symbols of renewal, hope, and transformation. Undergo cyclical renewal — when they reach the end of their life cycle, their physical form dissolves into flames and they are reborn from the ashes. Patient, wise, and philosophical.' },
              { name: 'Bamboo Bunny (Rabbit)', desc: 'Impossibly Rare shifter-type Yokais, experts at hiding and camouflage. At least 150 known recorded rumors, with one exception: Haruhi Aoi. Known for empathic abilities and connection to earth and plant magic. Experience heat cycles every 2–3 years during fall season.' },
            ].map((y) => (
              <div key={y.name} className="border border-border rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#d49fff] text-sm mb-1">─────⊰ {y.name}</p>
                <p className="text-xs">{y.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'Elemental & Spirit Yokai',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#ffd080] text-sm mb-1">Earth Yokai (Tsuchi Yōkai)</p>
              <p className="text-xs">Deep connections to the land, causing tectonic shifts and new landmasses. They work with Water Yokai to maintain the earth pillars under Neo-Japan. The main figures are Badger Yokais and Earth Dragons.</p>
            </div>
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#7ef5ff] text-sm mb-1">Water Yokai (Mizu Yōkai) & Mermaids (Ningyo)</p>
              <p className="text-xs">Collaborate with Earth Yokai to maintain Neo-Japan's floating technology. Mermaid Spirits founded the Mizuki Shoto archipelago. Rumors of an underwater yokai city somewhere beneath the landmass.</p>
            </div>
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#d49fff] text-sm mb-1">Vapor Spirits</p>
              <p className="text-xs">Docile spirits that help humankind maintain balance. Used in the creation of Cyborgs. Sometimes, they don't need vessels. They are ageless and can take on many forms as they please.</p>
            </div>
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#7ef5ff] text-sm mb-1">Death Eater Spirit (Shikuibito)</p>
              <p className="text-xs">A corrupted spirit who served as director in YARC facilities, known for brutal treatment of captured yokai. Currently possesses Kihara Amaru, the YARC's original founder.</p>
            </div>
          </div>
        ),
      },
      {
        heading: 'Half Yokai (Demi-Yokai)',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Half Yokai emerged as a distinct population following the Y&H Coalition Act of 1700 AD, when interspecies relationships became more common and socially accepted. They occupy a unique space in Neo-Japan's supernatural society.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                { name: 'Half-Kitsune', desc: 'Fox-human hybrids with limited shapeshifting and enhanced charm/illusion magic. Often possess 1–3 tails instead of the full nine.' },
                { name: 'Half-Vampire', desc: 'Retain vampire strength and longevity but can tolerate sunlight (though it weakens them). Pig Blood is a good dietary alternative.' },
                { name: 'Half-Dragon', desc: 'Incredible physical strength and minor fire resistance, but cannot achieve full dragon transformation. May manifest scales.' },
                { name: 'Half-Mermaid', desc: 'Can breathe underwater and possess enhanced swimming. Require regular water immersion to maintain health.' },
                { name: 'Half-Tengu', desc: 'Bird-human hybrids with enhanced agility and minor wind manipulation. Some can achieve limited flight.' },
                { name: 'Half-Oni', desc: 'Demon-human hybrids with enhanced strength and durability. May possess small horns or unusual skin tones.' },
              ].map((h) => (
                <div key={h.name} className="border border-border rounded-lg p-3 bg-surface">
                  <p className="font-semibold text-[#ffaad4] text-xs mb-1">{h.name}</p>
                  <p className="text-xs">{h.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-2">Half Yokai generally possess 30–70% of a full yokai's supernatural abilities. Many find purpose and acceptance within the NYAQ, classified as <strong className="text-text">Funjin-kō-shin</strong> (Dust Path Ninja). In Ujuukyō faith, they are seen as living bridges between human and yokai worlds.</p>
          </div>
        ),
      },
    ],
  },

  // ── 5. Ujuukyō ──────────────────────────────────────────────────────────────
  {
    id: 'ujuukyo',
    icon: '🕍',
    title: 'The Religion of Ujuukyō',
    subtitle: '宇柔教 · The Faith of Cosmic Gentleness',
    sections: [
      {
        heading: 'Overview',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p className="italic text-[#d49fff]">私たちはあなたの沈黙に答えます。ようこそ。<br /><span className="text-text-faint text-xs">We will respond to your silence. Welcome in. You are safe here. Welcome home.</span></p>
            <p><strong className="text-text">Ujuukyō</strong> is the universal spiritual tradition of the Naiseikai Universe, practiced by Humans, Yokai, Spirits, and Angels alike. Born following the Great Descent of Year 5–1599, Ujuukyō emerged as a unifying faith that transcends racial boundaries. All beings honor the same divine force — true sanctity lies not in power or origin, but in <strong className="text-text">value, virtue, and the reverence of death.</strong></p>
          </div>
        ),
      },
      {
        heading: 'The Central Deity: Ujuu-sama (宇柔-様)',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>At the heart of Ujuukyō stands <strong className="text-text">Ujuu-sama</strong>, the Moon Goddess of Mercy and Silence, whose name translates to "Cosmic Gentleness." Sacred titles:</p>
            <ul className="space-y-1 ml-2 list-none">
              <li>• 静かの神 (Shizuka no kami) — Goddess of Silence</li>
              <li>• 沈黙の神 (Chinmoku no Kami) — Goddess of Stillness</li>
              <li>• 慈悲の神 (Jihi no kami) — Goddess of Mercy</li>
              <li>• 価値の女神 (Kachi no megami) — Goddess of Value</li>
              <li>• 美徳の女神 (Bitoku no megami) — Goddess of Virtue</li>
            </ul>
            <p>Ujuu-sama embodies the sacred concept of <strong className="text-text">"ma" (間)</strong> — the meaningful silence, the space between breaths, the pause that holds understanding.</p>
          </div>
        ),
      },
      {
        heading: 'Core Beliefs & Philosophy',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            {[
              { title: 'The Sanctity of Death', desc: 'Death is not an enemy to be feared, but a sacred passage to be honored with humility and discernment.' },
              { title: 'Discernment Above All', desc: 'The most treasured virtue — knowing when to act and when to be still, when to speak and when to honor silence.' },
              { title: 'Universal Equality', desc: 'Ujuu-sama does not favor Angels over Yokai or Spirits over Humans. She favors those who embody diligence, perseverance, compassion, humility, and discernment.' },
              { title: 'Emotion as Holiness', desc: 'Emotions are sacred and spiritual — positive ones symbolize purity, negative ones symbolize pain and growth. To grow in Naiseikai means to recognize and be aware of your own emotions.' },
            ].map((b) => (
              <div key={b.title} className="border border-[rgba(191,95,255,0.3)] rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#d49fff] text-sm">{b.title}</p>
                <p className="text-xs mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'Sacred Practices',
        content: (
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>Followers worship at <strong className="text-text">Tsuki-mon (月門, Moon Gate)</strong> shrines. Key rituals:</p>
            <ul className="space-y-1 ml-2 list-none">
              <li>• <strong className="text-text">Seika no Gi</strong> — Ritual of Sanctification in complete silence</li>
              <li>• <strong className="text-text">Ma no Inori</strong> — Prayer of the Pause, honoring the space between words</li>
              <li>• <strong className="text-text">Shingetsu no Sahai</strong> — New Moon Reverence, monthly observations</li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Relinquishment Rituals',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <div className="border border-[rgba(255,210,80,0.4)] rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#ffd080] text-sm">Total Relinquishment (TRQMT)</p>
              <p className="text-xs mt-1">Requires accepting your own Faith, Personhood, Imperfections, and Sins. A tri-ritual that must be done with a humble heart. Pre-requisites: Drench (Baptize) head with Sakura Water (symbolizes thought and purity), and Wash and Clean the Feet (symbolizes the pathway you've walked). Only then can Ujuu-sama recognize your growth.</p>
            </div>
            <div className="border border-[rgba(100,160,255,0.4)] rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#7eb8ff] text-sm">Yokai Relinquishment (YRQMT)</p>
              <p className="text-xs mt-1">A forced act that takes away identity and emotions. It takes away yokai status, abilities, and powers. Only possible at Tenshi Shima (Angel Island) or Ryuu no Shima (Dragon Island). If a criminal recognizes their wrong-doings, the severity is dialed down.</p>
            </div>
          </div>
        ),
      },
      {
        heading: 'The Seven Disparities of Ujuukyō',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Disparities (不均衡, <em>fukinkou</em>) are states of spiritual imbalance — not sins to be punished, but teachers of the hardest lessons.</p>
            {[
              { kanji: '慢心の影', romaji: 'Manshin no Kage', name: 'Shadow of Arrogance', balance: 'Humility' },
              { kanji: '怒りの嵐', romaji: 'Ikari no Arashi', name: 'Storm of Unbound Rage', balance: 'Stillness and Mercy' },
              { kanji: '羨望の毒', romaji: 'Senbou no Doku', name: 'Poison of Bitter Envy', balance: 'Acceptance and Gratitude' },
              { kanji: '欲望の鎖', romaji: 'Yokubou no Kusari', name: 'Chains of Selfish Desire', balance: 'Honor and Respect' },
              { kanji: '貪欲の闇', romaji: 'Donyoku no Yami', name: 'Darkness of Hoarding', balance: 'Generosity and Trust' },
              { kanji: '過剰の迷い', romaji: 'Kajou no Mayoi', name: 'Confusion of Excess', balance: 'Discernment and Ma (間)' },
              { kanji: '無関心の霧', romaji: 'Mukanshin no Kiri', name: 'Fog of Apathy', balance: 'Diligence and Engagement' },
            ].map((d) => (
              <div key={d.kanji} className="border border-border rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#ffd080] text-xs">{d.kanji} — {d.romaji}</p>
                <p className="text-text text-sm mt-0.5">{d.name}</p>
                <p className="text-xs mt-1">Path to Balance: <span className="text-[#7ef5ff]">{d.balance}</span></p>
              </div>
            ))}
            <div className="border border-[rgba(255,179,71,0.4)] rounded-lg p-3 bg-surface mt-2">
              <p className="font-semibold text-[#ffd080] text-xs">正義のための報復 — Seigi no tame no hōfuku</p>
              <p className="text-text text-sm mt-0.5">Retribution for Justice (Hidden Balance)</p>
              <p className="text-xs mt-1">Neither a disparity nor a sacred emotion. When you're roped into a conflict as an outsider, you have free will to enact what is right. Ujuu-sama does not mind, as long as it feels <em>right.</em></p>
            </div>
            <p className="italic text-[#d49fff] text-xs mt-2">"You are not feared. Or revered. You're you. At your fullest, your worst, and your best."</p>
          </div>
        ),
      },
    ],
  },

  // ── 6. YHCA ─────────────────────────────────────────────────────────────────
  {
    id: 'yhca',
    icon: '🏥',
    title: 'Yokai & Human Coalition Act',
    subtitle: '妖怪と人間の連合法 · Formed in Year 1700',
    sections: [
      {
        heading: 'Overview',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Yokai cannot kill or murder humans because it is illegal, even if it's the other way around. It's about moral laws and ambiguity between parties. However, it is NOT illegal for Yokai to kill Yokai. It has been a tradition since the early yokai settlements from Year 5–1599.</p>
            <p>Ninjas (Shinobi) are not Yokai. They are high classed humans that specialize in Shadow abilities using tomes and runes.</p>
            <div className="border border-[rgba(212,169,106,0.4)] rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#d4a96a] text-sm">Representatives</p>
              <p className="text-xs mt-1"><strong className="text-text">Mizumi Kamekoryu</strong> — The oldest yokai in the Naiseikai World (a Dragon Turtle). Ages once every 50 years. As of 2100, she is 2095 years of age, despite looking like she's in her 40s.</p>
              <p className="text-xs mt-1"><strong className="text-text">Hibiki Aoba</strong> — The Human Representative of the YHCA.</p>
            </div>
            <p className="text-xs text-text-faint">Location: Ninjin Prefecture, alongside the NYAQ.</p>
          </div>
        ),
      },
      {
        heading: 'The Five Doctrines of the YHCA',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            {[
              { num: 'I', title: 'Sanctity of Human Life', quote: '"No yokai shall take the life of a human, regardless of provocation, transgression, or threat. To do so is to break the foundation of this pact and invite judgment upon oneself."' },
              { num: 'II', title: 'Equality Under Consequence', quote: '"No human shall take the life of a yokai without cause recognized by law. The act of murder knows no species, and justice shall be blind to form."' },
              { num: 'III', title: 'The Old Ways Remain', quote: '"Conflict between yokai is a matter of their own tradition. The coalition does not extend its hand into yokai-on-yokai affairs, for their laws are ancient and beyond our jurisdiction."' },
              { num: 'IV', title: 'Representation and Voice', quote: '"The eldest and wisest among yokai shall stand as representative for all yokai kind. Their word shall carry the weight of generations, and their counsel shall guide the path forward."' },
              { num: 'V', title: 'Integration and Coexistence', quote: '"Let both sides walk the same roads, share the same skies, and build a future where fear gives way to understanding. Isolation breeds only darkness."' },
            ].map((d) => (
              <div key={d.num} className="border border-[rgba(212,169,106,0.3)] rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#d4a96a] text-sm">Doctrine {d.num}: {d.title}</p>
                <p className="italic text-xs mt-1 text-text-faint">{d.quote}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },

  // ── 7. YARC ─────────────────────────────────────────────────────────────────
  {
    id: 'yarc',
    icon: '🏥',
    title: 'Yokai Association Recovery Center',
    subtitle: '妖怪協会回復センター · The Naiseikai Universe\'s Most Corrupt Organization',
    sections: [
      {
        heading: 'History & Backstory',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p className="text-[#ff6b6b] text-xs font-semibold">Content Warning: SA / Abuse / Manipulation / Experimentation — Everything here is entirely fictional.</p>
            <p>Formed in <strong className="text-text">1779 AD</strong> by the YHCA. The YARC rehabilitates repeat offenders into making them relive their past errors through Intense Telepathy Regulators — forcing criminals to rewatch their memories one by one, while breaking their minds. This corrupts them, and then breaks them.</p>
            <div className="space-y-2 mt-2">
              <div className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="text-[#7ef5ff] font-semibold">Before The Possession (1779–1854)</p>
                <p>Kihara Amaru, a Dullahan Official, formed the YARC following Ujuukyo Principles for genuine rehabilitation.</p>
              </div>
              <div className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="text-[#ff6b6b] font-semibold">The Shift (1855)</p>
                <p>Kihara Amaru is cursed and inhabited by Shikuibito (Death Eater), who corrupted the entire organization.</p>
              </div>
              <div className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="text-[#ff6b6b] font-semibold">Ties Are Cut (1875)</p>
                <p>All official YHCA ties severed. The YARC goes rogue, funded by black markets, stock investments, and money laundering.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        heading: 'Building & Location',
        content: (
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            <p>Located in the <em>Sora no Fuka-sa Range</em> of the Sora no Oka Region. At night, the white sleek metal reflects off the moonlight — <em>like an imposing building…waiting—silently.</em></p>
            <p>Shaped like the top half of a trident. The main building has up to <strong className="text-text">70 floors</strong>. The Underground Foundation (UGF) has up to <strong className="text-text">100 floors downward</strong>. Below Floor 1 is the Failed Wing.</p>
            <p>The Defcon Tine Towers (DTTs) act as batteries powered by UV and UV-ML (Ultraviolet Moonlight) — a day's worth of charge lasts up to a month.</p>
          </div>
        ),
      },
      {
        heading: 'Known Subjects (Assets/Victims)',
        content: (
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            {[
              { id: 'Subject 0', name: '????', desc: 'Had escaped the YARC and is presumed dead. No one knows where they are now.' },
              { id: 'Subject Z', name: 'Kihara Amaru', desc: 'Possessed by Shikuibito. Called "Subject Z" by Death Eater out of spite.' },
              { id: 'Subject 1', name: 'Tatsuya Ryu', desc: 'A Half Snake and Dragon Yokai. Killed by undergoing Telepathy Regulation.' },
              { id: 'Subject 2', name: 'Alice Renforth', desc: 'A Fairy Yokai from London. Walked out free because she was too cute to experiment on.' },
              { id: 'Subject 3', name: 'Xiangxue', desc: 'A Half Yokai Qilin from China. Died due to a poisoned tranq dart.' },
              { id: 'Subject 4', name: 'Yokai-X', desc: 'Said to harness the power of healing and illusions. The YARC is confused about how this yokai can be here and everywhere at once.' },
              { id: 'Subject 5', name: 'Tsubaki (Colocasia Tea Plant)', desc: 'Became sentient due to external factors. Killed a staff member once. Now reigns free in Japan.' },
              { id: 'Subject 6', name: 'Asami Kurose', desc: 'An Octopus yokai cursed with snake blood venom. Shikuibito\'s personal slave. Escapes time to time but ends up being captured. She is still alive to this day.' },
            ].map((s) => (
              <div key={s.id} className="border border-[rgba(255,107,107,0.3)] rounded-lg p-2 bg-surface text-xs">
                <p className="font-semibold text-[#ff6b6b]">{s.id} — "{s.name}"</p>
                <p className="mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },

  // ── 8. NYAQ ─────────────────────────────────────────────────────────────────
  {
    id: 'nyaq',
    icon: '🥷',
    title: 'Ninja Yokai Association Quarters',
    subtitle: 'Formed in 1795 · Morally Grey But Functional',
    sections: [
      {
        heading: 'Overview',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>Unlike the YARC and the YHCA, this Association is an ambiguity organization. A morally grey place where Ninjas (humans) and Yokai Ninjas gather. Formed in <strong className="text-text">1795 by the YHCA.</strong></p>
            <p>Ninjas are considered mercenaries in this world, or high classed humans. Some show restraint, while some don't. There are some slight corruption in the NYAQ, but it doesn't overpower the whole Ninja Association.</p>
            <p>The building looks very sleek, modern, but also ancient — like a very large Japanese Temple. Goes up to <strong className="text-text">10.5 Floors</strong> from the ground up, and <strong className="text-text">11 floors</strong> from the ground down. Next to Japan National Stadium.</p>
          </div>
        ),
      },
      {
        heading: 'Floor Hierarchy',
        content: (
          <div className="space-y-2 text-sm text-text-muted leading-relaxed font-mono text-xs">
            <p className="text-[#d4a96a]">Underground (Deepest to Surface): Z.11 · Y.10 · X.09 · W.08 · V.07 · U.06 · T.05 · S.04 · R.03 · Q.02 · P.01</p>
            <p className="text-[#7ef5ff]">Ground Level: A0 (Main Entrance)</p>
            <p className="text-[#d49fff]">Above Ground: A.01 · B.02 · C.03 · D.04 · E.05 · F.06 · G.07 · H.08 · I.09 · J.10</p>
            <p className="text-text-faint mt-2 leading-relaxed">Floor Z.11 (deepest level) contains libraries for tomes, talismans, and ancient scrolls. Floor J.10 is an open roof floor for large Yokai landings — also houses a hospital for YARC escapees.</p>
          </div>
        ),
      },
      {
        heading: 'Ninja Types & Terminology',
        content: (
          <div className="space-y-2 text-sm text-text-muted leading-relaxed">
            {[
              { name: 'Funjin-kō-shin · 粉塵行忍', label: 'Dust Path Ninja', type: 'Human' },
              { name: 'Yōkai-kō-shin · 妖怪行忍', label: 'Yokai Path Ninja', type: 'Yokai' },
              { name: 'Seishin-kō-shin · 精神行忍', label: 'Spirit Path Ninja', type: 'Spirit' },
              { name: 'Tenshi-kō-shin · 天使行忍', label: 'Angel Path Ninja', type: 'Angel' },
            ].map((n) => (
              <div key={n.name} className="border border-border rounded-lg p-2 bg-surface flex items-center gap-3">
                <span className="text-xs font-mono text-text-faint w-6">{n.type[0]}</span>
                <div>
                  <p className="text-[#7ef5ff] text-xs font-semibold">{n.name}</p>
                  <p className="text-xs">{n.label} — {n.type} Ninjas</p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'Notable Members',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-text">Koa Ruruka</p>
              <p className="text-xs mt-1">Kicked out from the Koa Clan but trained independently at the NYAQ. Top recorded speed: <strong className="text-[#7ef5ff]">90–120 mph in under 15 minutes.</strong> Nickname: "Speed Demon." Powerful enough to pulverize factory-sized buildings.</p>
            </div>
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-text">Erika Von Schuvausst</p>
              <p className="text-xs mt-1">A Vampire Yokai from London with Romanian DNA. 250 years old, looks like a teenager. Nickname: <em>"The Silent Striker"</em> — takes out clients and bounties without killing. Great friends with Ruruka.</p>
            </div>
            <div className="border border-border rounded-lg p-3 bg-surface">
              <p className="font-semibold text-text">Xueye Ryuko</p>
              <p className="text-xs mt-1">From Guangdong, China. Han Dynasty lineage. Quelled an evil spirit named Eustauss in America. Nicknames: <em>"Dragon Queller of Snow"</em> and <em>"Snow's Wrath"</em> (given by Hanako Reina).</p>
            </div>
          </div>
        ),
      },
    ],
  },

  // ── 9. Education ─────────────────────────────────────────────────────────────
  {
    id: 'education',
    icon: '🏫',
    title: 'Education in Neo-Japan',
    subtitle: 'Formed March 25th, 1675 · 6 > 3 > 3 > 5 System',
    sections: [
      {
        heading: 'Overview',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <p>In Neo-Japan 2100+, education follows a unified progression that prepares both yokai and human students for their roles in society. The system emphasizes coexistence, spiritual practice through Ujuukyō, and understanding of yokai magic alongside traditional academics.</p>
            <p>Most professors, counselors, and teachers are <strong className="text-text">Ninjas</strong>, since they have deep understanding of both human and yokai traits. Education is about Faith, based on Ujuukyo Teachings.</p>
          </div>
        ),
      },
      {
        heading: 'The Foundational Path (12 Years)',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            {[
              { name: 'Elementary School — Fledgling (Grades 1–6)', hours: '10:30 AM – 1:45 PM', desc: 'Introduces basic literacy, mathematics, history, and fundamentals of yokai-human coexistence. Basic Ujuukyō principles. Introduction to yokai species and culture.' },
              { name: 'Junior High — Novice (Grades 7–9)', hours: '9:30 AM – 3:45 PM', desc: 'Deepens knowledge and begins specialized skill development. Intermediate Ujuukyō teachings and rituals. Civic education about YHCA, YARC, and NYAQ.' },
              { name: 'Senior High — Trainee · Apprentice · Disciple (Grades 10–12)', hours: '9:30 AM – 3:45 PM', desc: 'Grade 10 (Trainee): Choose preliminary specializations. Grade 11 (Apprentice): Work with mentors, internships. Grade 12 (Disciple): Alchemy & Chemistry required. Choose U5 or YU-5.' },
            ].map((s) => (
              <div key={s.name} className="border border-[rgba(0,229,255,0.2)] rounded-lg p-3 bg-surface">
                <p className="font-semibold text-[#7ef5ff] text-sm">{s.name}</p>
                <p className="text-xs text-text-faint font-mono">{s.hours} + 25 min extracurricular</p>
                <p className="text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: 'University Split',
        content: (
          <div className="space-y-3 text-sm text-text-muted leading-relaxed">
            <div className="border border-[rgba(191,95,255,0.3)] rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#d49fff]">University (U-5) — 5-Year Program</p>
              <p className="text-xs mt-1">For general fields, human society integration, business, arts, sciences. Yokai also welcome. Progression: <span className="text-text">Quester (1–2) → Scholar (3) → Adeptus (4) → Sentinel (5)</span></p>
            </div>
            <div className="border border-[rgba(255,170,80,0.3)] rounded-lg p-3 bg-surface">
              <p className="font-semibold text-[#ffd080]">Yokai University (YU-5) — 5-Year Program</p>
              <p className="text-xs mt-1">Specialized path focused on yokai biology, magic, culture, spirituality, and guardianship. Also called "The High Five." Progression: <span className="text-text">Sage (1–2) → Baron (3) → Herald (4) → Saint (5)</span></p>
              <p className="text-xs mt-1 text-text-faint">Notable alumni: Haruhi Aoi (Animal Therapy, Baron Yr 3), Nora Renaku — AI Specialist &amp; founder of the Magnoids and REI-3 network (Herald Yr 4)</p>
            </div>
          </div>
        ),
      },
    ],
  },

  // ── 10. Megacorps ────────────────────────────────────────────────────────────
  {
    id: 'megacorps',
    icon: '🏬',
    title: 'Megacorps & Brands',
    subtitle: 'Consumerism, culture, and corporations of Neo-Japan 2100+',
    sections: [
      {
        heading: '🍺 Beer & Alcohol Brands',
        content: (
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-text-muted">
            {[
              { name: 'Sapporo Beer', slogan: '"The Taste of Neo-Japan\'s North"', desc: 'Founded 1876. Expanded to include craft beer lines influenced by yokai brewing techniques.' },
              { name: 'Asahi Super Dry', slogan: '"Dry, Sharp, Unmatched"', desc: 'Launched 1987. Temperature-responsive beers that change flavor profiles. Primary rival to Orion Draft.' },
              { name: 'Orion Draft', slogan: '"Taste the Islands, Feel the Breeze"', desc: 'Originally from Okinawa. Limited edition "Moonlight Orion" sake-beer hybrid released only during full moons.' },
              { name: 'Kyoto Brewing', slogan: '"Tradition Perfected"', desc: '"Golden Pavilion" sake considered the finest in all of Neo-Japan, aged in yokai-blessed cedar barrels.' },
            ].map((b) => (
              <div key={b.name} className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="font-semibold text-text">{b.name}</p>
                <p className="text-text-faint italic">{b.slogan}</p>
                <p className="mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: '🎮 Entertainment & Technology',
        content: (
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-text-muted">
            {[
              { name: 'SEGA', slogan: '"Games That Respect You"', desc: 'After Nintendo\'s abolishment (2078), SEGA rose to #1. Acquired Sonic, Pac-Man, and Mario. Full-dive VR gaming pioneered.' },
              { name: 'Pokémon Company', slogan: '"Catch Them All, Forever"', desc: 'Freed from Nintendo\'s control. Games developed with complete creative freedom. "Yokémon" variants created from yokai mythology.' },
              { name: 'Renaku Cars', slogan: '"Drive Without Driving"', desc: 'Founded 2089. Fully autonomous vehicles with zero accidents. Flagship "Renaku Harmony" can float over water.' },
              { name: 'UNIQOLO', slogan: '"Life Wear for Everyone"', desc: 'Rebranded in 2087. Adaptive clothing using nano-fiber technology and yokai-engineered materials.' },
            ].map((b) => (
              <div key={b.name} className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="font-semibold text-text">{b.name}</p>
                <p className="text-text-faint italic">{b.slogan}</p>
                <p className="mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: '📺 Animation Studios',
        content: (
          <div className="space-y-2 text-sm text-text-muted">
            {[
              { name: 'Studio Bones', note: '"Animation with Soul"', desc: 'Founded 1998. A legendary studio with Bones A–J teams. Known for Mob Psycho 100 (#1 anime in Neo-Japan — Ujuu-sama\'s favorite), MHA, FMA. Pioneered yokai spiritual energy to enhance animation fluidity.' },
              { name: 'Studio Lings', desc: 'Rose to prominence after Mappa\'s bankruptcy. Specializes in high-quality slice-of-life anime with yokai themes.' },
              { name: 'Cloverworks', desc: 'Gained massive popularity in the 2090s. Creates visually stunning action anime and romantic comedies.' },
              { name: 'IsekaiWORKS', desc: 'Rose in 2060 as an umbrella studio. Adapts isekai and action works. Sub-studios include Madhouse and A1 Pictures.' },
            ].map((s) => (
              <div key={s.name} className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="font-semibold text-text">{s.name} {s.note ? <span className="text-text-faint font-normal">{s.note}</span> : null}</p>
                <p className="mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: '🎵 Musical Artists & Vocaloids',
        content: (
          <div className="space-y-2 text-sm text-text-muted">
            {[
              { name: 'Ado', genre: 'Rock, Pop, Experimental', desc: 'Legendary vocalist. Over 30 albums. Collaborates with yokai musicians, creating hybrid performances with holographic stage technology.' },
              { name: 'YOASOBI', genre: 'Pop, EDM, Narrative Music', desc: 'Pioneered "Narrative EDM." Produced theme songs for over 200 anime series. "Yoru ni Kakeru" is a timeless classic.' },
              { name: 'EVE', genre: 'Pop, EDM, Electronic, Alternative', desc: 'Pioneered AI-assisted composition tools. Concerts are immersive experiences combining music, visual art, and spiritual energy.' },
              { name: 'Kenshi Yonezu', genre: 'Pop, Rock, Electronic, Experimental', desc: 'Over 40 studio albums. "Lemon" remains one of the most-streamed Japanese songs ever, even after 80+ years.' },
              { name: 'ZUTOMAYO', genre: 'Rock, Pop, Alternative', desc: 'Mysterious group led by ACAね (Acane). Pioneered "Phantom Stage" performances — visible but untouchable concerts.' },
              { name: 'REI-3', genre: 'Electronic, Pop, Techno EDM', desc: 'The first Vocaloid Brand and Icon of the REI-3 Network System of Japan. Created 2045. Serves dual purpose: network mascot AND fully functional Vocaloid performer.' },
              { name: 'Hatsune Miku & the Vocaloid Collective', genre: 'Various', desc: 'Miku has evolved into a fully sentient AI performer. Still releasing hundreds of new songs yearly through collaboration with producers worldwide.' },
            ].map((a) => (
              <div key={a.name} className="border border-border rounded-lg p-2 bg-surface text-xs">
                <p className="font-semibold text-[#ffaad4]">{a.name}</p>
                <p className="text-text-faint">{a.genre}</p>
                <p className="mt-0.5">{a.desc}</p>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Lore() {
  const [activeTab, setActiveTab] = useState<string>('timeline')
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const activePage = subPages.find((p) => p.id === activeTab) ?? subPages[0]

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="page-container">
      {/* Header */}
      <div className="mb-10">
        <span className="neon-sign text-[10px] mb-4 inline-block">History</span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-4 text-text">🌋 Lore & Timeline</h1>
        <p className="text-text-muted text-base leading-relaxed max-w-2xl">
          The history of an alternate Earth — where Yokai and humans have lived side by side for centuries,
          and where Japan rose not through conquest, but through spiritual resonance.
        </p>
      </div>

      {/* Setting callout */}
      <section className="mb-8">
        <div className="callout callout-purple">
          <div>
            <p className="text-sm font-mono text-[#d49fff] mb-1">📍 World Setting</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-text">This is not the Earth you know.</strong> In this world, Japan rose through spiritual resonance.
              The global tongue is Japanese. The ancient pacts between Yokai and Humans became law. Culture, power, and identity were
              never colonized — they were reclaimed. The history within Naiseikai Earth differs from what we know.
            </p>
            <p className="text-xs text-text-faint mt-2 italic">A saga of shadowed bloodlines and hidden truths, and self introspection... This is a world where it will move your hearts.</p>
          </div>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="mb-6 flex flex-wrap gap-2">
        {subPages.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 font-mono ${
              activeTab === p.id
                ? 'border-[rgba(191,95,255,0.8)] text-[#d49fff] bg-[rgba(191,95,255,0.1)]'
                : 'border-border text-text-muted hover:border-[rgba(191,95,255,0.4)] hover:text-text'
            }`}
          >
            {p.icon} {p.title}
          </button>
        ))}
      </div>

      {/* Active page content */}
      <div>
        <div className="mb-6">
          <div className="section-divider" />
          <h2 className="font-serif text-2xl text-text mt-4">{activePage.icon} {activePage.title}</h2>
          {activePage.subtitle && (
            <p className="text-sm text-text-faint font-mono mt-1">{activePage.subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {activePage.sections.map((section, idx) => {
            const key = `${activeTab}-${idx}`
            const isOpen = openSections[key] !== false // default open
            return (
              <div key={key} className="border border-border rounded-lg bg-surface overflow-hidden">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-raised transition-colors"
                >
                  <span className="font-serif text-base text-text">{section.heading}</span>
                  <span className="text-text-faint text-sm ml-2 flex-shrink-0">{isOpen ? '▲' : '▼'}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-border">
                    {section.content}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="mt-12 section-divider" />
      <div className="flex flex-wrap gap-3 mt-4">
        <Link to="/worldbuilding" className="btn-neon-cyan text-xs">Worldbuilding →</Link>
        <Link to="/titles" className="btn-neon-purple text-xs">Titles & Stories →</Link>
      </div>
    </div>
  )
}
