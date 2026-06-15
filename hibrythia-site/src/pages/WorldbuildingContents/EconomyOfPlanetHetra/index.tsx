import { Link } from 'react-router-dom';

export default function EconomyOfPlanetHetra() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-[960px] mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">
          World Databases
        </Link>
        {" / "}Economy of Planet Hetra
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
        Economy of Planet Hetra
      </h1>

      {/* Intro callout */}
      <div className="bg-[#0f0d0c] border-l-2 border-[#c9a84c] pl-5 pr-4 py-4 mb-10">
        <p className="font-body text-base text-[#c8c2ba]">
          <span className="text-[#f2ebeb] font-semibold">The Economy of Planet Hetra</span> is one of the most expansive and complex systems in the known world. Powered by a unified currency, a thriving multi-continental trade network, and a net worth that has skyrocketed into the <span className="text-[#f2ebeb] font-semibold">~250 octillion</span> Hetrix range as of the year <span className="text-[#f2ebeb] font-semibold">2245</span>, Hetra&apos;s economy is a living, breathing force behind every story, adventure, and transaction in The Hibrythian Saga.
        </p>
      </div>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Currency System ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Currency System
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-currency-system-hetrix-hetryl">
          The Currency System — Hetrix &amp; Hetryl
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-8">
          Hetra operates on a two-tier currency system: <span className="text-[#f2ebeb] font-semibold">Bills (Hetrix)</span> and <span className="text-[#f2ebeb] font-semibold">Coins (Hetryl)</span>. The global symbol stamped on every single denomination is the <span className="text-[#f2ebeb] font-semibold">Erbgeroger Flower</span> — the world&apos;s emblem of Unity — ensuring that every transaction across the planet is a quiet reminder that prosperity is built on togetherness.
        </p>

        {/* Bills */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Bills — Hetrix (Ħ)</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          The Hetrix (Ħ) is the standard paper bill used across all continents. If <span className="text-[#f2ebeb] font-semibold">Ħ3 = $1 USD</span>, then the full denomination breakdown looks like this:
        </p>

        {/* Bills table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-4">Bill Value</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-4">USD Equivalent</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { bill: "Ħ3",   usd: "$1.00 USD",      note: "Base denomination" },
                { bill: "Ħ7",   usd: "$5.00 USD",      note: "—" },
                { bill: "Ħ15",  usd: "$10.00 USD",     note: "—" },
                { bill: "Ħ35",  usd: "$20.00 USD",     note: "—" },
                { bill: "Ħ55",  usd: "$50.00 USD",     note: "—" },
                { bill: "Ħ75",  usd: "Custom Hetrix",  note: "Unique to Hetra — no Earth equivalent" },
                { bill: "Ħ150", usd: "$100.00 USD",    note: "Highest standard denomination" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#2e2b26]/50 hover:bg-[#0f0d0c] transition-colors">
                  <td className="font-display text-base text-[#c9a84c] py-2 pr-4">{row.bill}</td>
                  <td className="font-body text-sm text-[#f2ebeb] py-2 pr-4">{row.usd}</td>
                  <td className="font-body text-sm text-[#7a746e] py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bills quote */}
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 mb-8">
          <p className="font-body text-sm text-[#c9a84c] italic">
            Every bill, from the humble Ħ3 to the prestigious Ħ150, bears the intricate engraving of the Erbgeroger Flower — forever present in the daily lives of every Hetranian.
          </p>
        </blockquote>

        {/* Coins */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Coins — Hetryl(s)</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Coins are the fractional currency of Hetra. If <span className="text-[#f2ebeb] font-semibold">0.03 hetryl = 0.01 USD cent</span>, the coin system maps as follows:
        </p>

        {/* Coins table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">Coin Name</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">Nickname</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">Value (Hetryl)</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">USD Equiv.</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2">Earth Counterpart</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Silver Hetryl",         nick: "Kilpy / Kilpies",  val: "0.03", usd: "0.01¢", earth: "Penny" },
                { name: "Bronze Hetryl",         nick: "Skrunkel(s)",      val: "0.07", usd: "0.05¢", earth: "Nickel" },
                { name: "Gold Hetryl",           nick: "Lhunk(s)",         val: "0.15", usd: "0.10¢", earth: "Dime" },
                { name: "Oxidized Copper Hetryl",nick: "Nunkel(s)",        val: "0.35", usd: "0.25¢", earth: "Quarter" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#2e2b26]/50 hover:bg-[#0f0d0c] transition-colors">
                  <td className="font-body text-sm text-[#f2ebeb] py-2 pr-3">{row.name}</td>
                  <td className="font-body text-sm text-[#c9a84c] py-2 pr-3">{row.nick}</td>
                  <td className="font-body text-sm text-[#c8c2ba] py-2 pr-3">{row.val}</td>
                  <td className="font-body text-sm text-[#c8c2ba] py-2 pr-3">{row.usd}</td>
                  <td className="font-body text-sm text-[#7a746e] py-2">{row.earth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coin Composition */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Coin Composition</h3>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          Each coin is made with a specific material blend that gives it its unique look and feel:
        </p>
        <div className="space-y-2 mb-4">
          {[
            { name: "Kilpies",   comp: "85% Nickel + 15% Iron. Slightly magnetic." },
            { name: "Skrunkels", comp: "75% Copper + 25% Tin. Dark orange-brown tint." },
            { name: "Lhunks",    comp: "80% Gold + 10% Copper. Shines brilliantly in sunlight." },
            { name: "Nunkels",   comp: "70% Iron + 30% Emerald-infused material. One of the most visually striking coins." },
          ].map((c, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3 flex gap-3">
              <span className="font-display text-base text-[#c9a84c] shrink-0 w-24">{c.name}</span>
              <span className="font-body text-base text-[#c8c2ba]">{c.comp}</span>
            </div>
          ))}
        </div>

        {/* Coin Designs placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Coin Designs — Image Placeholder ]</p>
        </div>

        {/* Banknotes placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Banknotes — Image Placeholder ]</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── World Net Worth ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Economic Scale
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="world-net-worth-economic-scale">
          World Net Worth &amp; Economic Scale
        </h2>

        <div className="bg-[#0f0d0c] border-l-2 border-[#7a746e] pl-5 pr-4 py-4 mb-6">
          <p className="font-body text-base text-[#c8c2ba]">
            As of the year <span className="text-[#f2ebeb] font-semibold">2245</span>, the estimated net worth of Planet Hetra is approximately <span className="text-[#f2ebeb] font-semibold">~250 Nonillion Hetrix.</span> This staggering figure is the result of centuries of mass production, scientific breakthroughs, advanced technology, and the combined economic output of all continents — chiefly <span className="text-[#f2ebeb] font-semibold">Rynel</span>, <span className="text-[#f2ebeb] font-semibold">Lynneria</span>, and <span className="text-[#f2ebeb] font-semibold">Eulerich</span>.
          </p>
        </div>

        <p className="font-body text-base text-[#c8c2ba]">
          This scale isn&apos;t just a number — it reflects a world that has grown from ancient kingdoms into a globally connected, semi-modernized civilization. Mass markets, global brands, and interplanetary-level ambitions (see: <span className="text-[#f2ebeb] font-semibold">HetraSEAP</span>) all fuel this astronomical figure.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Regional Economies ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Regional Economies
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6" id="regional-economies-wages">
          Regional Economies &amp; Wages
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          The economy of Hetra is not uniform — each continent and city has its own economic identity, wage tier, and primary industries.
        </p>

        {/* New Rynels */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-sm text-[#f2ebeb]">New Rynels</h3>
            <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">— Rynel</span>
          </div>
          <p className="font-body text-sm text-[#c8c2ba] mb-4">
            The largest coastline city in the entire world, <span className="text-[#f2ebeb] font-semibold">New Rynels</span> is the economic powerhouse of Planet Hetra. Home to the richest individuals on the planet — with personal net worth reaching into the <span className="text-[#f2ebeb] font-semibold">quadrillions</span> — this city is a hub for entrepreneurs, social workers, and high-paying industries.
          </p>
          <div className="space-y-1 text-sm">
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Minimum Wage</span><span className="text-[#f2ebeb]">Ħ25.35 Hetrix (~$19.55 USD)</span></p>
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Key Industries</span><span className="text-[#c8c2ba]">Entrepreneurship, Space Exploration (HetraSEAP), High Finance</span></p>
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Founded by</span><span className="text-[#c8c2ba]">Philstra Rhys</span></p>
          </div>
          <div className="mt-3 pt-3 border-t border-[#2e2b26] space-y-1 text-sm">
            <p className="font-body text-base text-[#c8c2ba]">Philstra Rhys is the world&apos;s first Multi-Sextillionaire, with a worth of 55 Sextillion.</p>
            <p className="font-body text-base text-[#c8c2ba]">HetraSEAP is backed by Philstra and has a worth around 25 quintillion Hetrix.</p>
          </div>
        </div>

        {/* Eulanis */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-sm text-[#f2ebeb]">Eulanis</h3>
            <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">— Eulerich</span>
          </div>
          <p className="font-body text-sm text-[#c8c2ba] mb-4">
            <span className="text-[#f2ebeb] font-semibold">Eulanis</span>, the major city of the Eulan Kingdom, sits within the Sandstone Mountains and operates as the center for all <span className="text-[#f2ebeb] font-semibold">trading posts, marketplaces, and fine goods</span> — many at very high prices. Eulanis is founded by the Briehale Monarchs.
          </p>
          <div className="space-y-1 text-sm">
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Average Wage</span><span className="text-[#f2ebeb]">Ħ22.45 Hetrix (~$16.32 USD)</span></p>
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Key Industries</span><span className="text-[#c8c2ba]">Trading, Fine Goods, Governance</span></p>
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Notable</span><span className="text-[#c8c2ba]">High job availability — employers continue hiring even during layoffs or vacations</span></p>
          </div>
          <div className="mt-3 pt-3 border-t border-[#2e2b26]">
            <p className="font-body text-base text-[#c8c2ba]">King Briehale and Queen Anika Briehale&apos;s total worth sits at roughly 650 quadrillion Hetrix.</p>
          </div>
        </div>

        {/* Oelenis */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-sm text-[#f2ebeb]">Oelenis</h3>
            <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">— Oelen Kingdom, Eulerich</span>
          </div>
          <p className="font-body text-sm text-[#c8c2ba] mb-4">
            <span className="text-[#f2ebeb] font-semibold">Oelenis</span> is Hetra&apos;s premier mining hub, responsible for the global supply of minerals, ores, and rocks. Its ports ship off to the Alarctic Frost for rare <span className="text-[#f2ebeb] font-semibold">Alarctic Ore</span> research.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] mb-4">
            Oelenis is founded by King Gorvich Eckhart and Queen Fahlia Eckhart. Fahlia Eckhart married into Eckhart&apos;s family side, taking his name. Her sister is Queen Anika Briehale.
          </p>
          <div className="space-y-1 text-sm">
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Average Wage</span><span className="text-[#f2ebeb]">Ħ20.65 Hetrix (~$14.75 USD)</span></p>
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Key Industries</span><span className="text-[#c8c2ba]">Carpentry, Smithing, Cartography, Oceanography</span></p>
            <p><span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mr-2">Notable</span><span className="text-[#c8c2ba]">The Rockseige Chasm connects all cave systems across Eulerich</span></p>
          </div>
          <div className="mt-3 pt-3 border-t border-[#2e2b26]">
            <p className="font-body text-base text-[#c8c2ba]">The Eckhart&apos;s worth notably stands around 550 quadrillion Hetrix, just 100 short of the Briehale&apos;s.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Skypeak Obelisk ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Secondary Economy
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-skypeak-obelisk-a-secondary-economy">
          The Skypeak Obelisk — A Secondary Economy
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Within the floating mega-structure known as <span className="text-[#f2ebeb] font-semibold">The Skypeak Obelisk</span> in Grelladore, Nharvenile, a completely separate internal economy operates.
        </p>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          While the outside world uses <span className="text-[#f2ebeb] font-semibold">Hetrix</span> as its standard currency, the Obelisk runs on <span className="text-[#f2ebeb] font-semibold">gems and system coins</span> — a fantasy video game-like economy where citizens farm ExP, complete quests, and earn rewards. However, the two economies are <span className="text-[#f2ebeb] font-semibold">not isolated from each other:</span>
        </p>

        <div className="bg-[#0f0d0c] border-l-2 border-[#6ab4e0] pl-5 pr-4 py-4 mb-4">
          <p className="font-body text-base text-[#c8c2ba]">
            System coins earned inside the Skypeak Obelisk can be <span className="text-[#f2ebeb] font-semibold">converted into real-world Hetrix</span> at coin-conversion shops located on every floor near the entrance. This creates a direct pipeline between the Obelisk&apos;s internal economy and the broader global market.
          </p>
        </div>

        <p className="font-body text-base text-[#c8c2ba]">
          The Obelisk can hold up to <span className="text-[#f2ebeb] font-semibold">2.3 million individuals</span> at one time, making it one of the most economically active single locations on the planet. The Worth of this attraction goes up to <span className="text-[#f2ebeb] font-semibold">60 Trillion Hetrix</span>.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Erbgeroger Flower ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Monetary Symbolism
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-erbgeroger-flower-monetary-symbolism">
          The Erbgeroger Flower &amp; Monetary Symbolism
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          No discussion of Hetra&apos;s economy is complete without mentioning the <span className="text-[#f2ebeb] font-semibold">Erbgeroger Flower</span> — the sacred mountain flower of Rynel that is the world symbol for <span className="text-[#f2ebeb] font-semibold">Unity</span>.
        </p>
        <p className="font-body text-base text-[#c8c2ba]">
          Its likeness is engraved on <span className="text-[#f2ebeb] font-semibold">every Hetrix bill in circulation.</span> This means that from the smallest Ħ3 purchase to a Ħ150 transaction, the Erbgeroger Flower passes through every hand, wallet, and market stall on the planet. It&apos;s not just symbolism — it&apos;s an intentional design choice embedded into Hetra&apos;s economy to remind every individual that <span className="text-[#c9a84c] italic">trade, prosperity, and wealth are things to be shared, not hoarded.</span>
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Rare Currency ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Collector&apos;s Market
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6" id="rare-currency-collectors-market">
          Rare Currency &amp; Collector&apos;s Market
        </h2>

        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Hetra also has a <span className="text-[#f2ebeb] font-semibold">rare currency collector&apos;s market</span> with some staggering valuations:
        </p>

        {/* Rare Coins */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Rare &amp; Misprinted Coins</h3>
        <div className="space-y-2 mb-8">
          {[
            { desc: "Silver Hetryl w/ any misprint letter",                             val: "Ħ27k" },
            { desc: "Shortened X misprint",                                              val: "Ħ35k" },
            { desc: "Bronze Hetryl w/ no indent or bevel + capital T",                  val: "Ħ45k" },
            { desc: "Gold Hetryl w/ smooth sides and no K",                              val: "Ħ54k" },
            { desc: "Waxed Copper Hetryl mixed with bronze w/ misspelled 'Hetry'",    val: "Ħ75k" },
            { desc: "Super old misprinted coins",                                        val: "Ħ45k – Ħ90k" },
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3 flex justify-between items-center">
              <span className="font-body text-base text-[#c8c2ba]">{item.desc}</span>
              <span className="font-display text-base text-[#c9a84c] shrink-0 ml-4">{item.val}</span>
            </div>
          ))}
        </div>

        {/* Rare Bills */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Rare &amp; Misprinted Bills</h3>
        <div className="space-y-2">
          {[
            { desc: "Rare denominations (Ħ1 & Ħ5)",                                    val: "Ħ350k+" },
            { desc: "Old misprinted bills",                                              val: "Ħ650k" },
            { desc: "Blank misprints (only Ħ symbol + Erbgeroger Flower) — rarest of all", val: "Ħ750k" },
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3 flex justify-between items-center">
              <span className="font-body text-base text-[#c8c2ba]">{item.desc}</span>
              <span className="font-display text-base text-[#c9a84c] shrink-0 ml-4">{item.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26] flex items-start justify-between">
        <Link to="/world/databases" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Databases &amp; Systems</span>
        </Link>
        <Link to="/world/databases/GeoscienceOfHetra" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">Next →</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Geoscience of Hetra</span>
        </Link>
      </div>

    </div>
  );
}
