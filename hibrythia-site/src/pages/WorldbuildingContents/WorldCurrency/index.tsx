import { Link } from 'react-router-dom';

export default function WorldCurrency() {
  return (
    <div className="min-h-screen bg-[#100908]">
      <div className="max-w-[860px] mx-auto px-6 py-20 space-y-12">

        {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          III. The Inner Gears
        </p>

        {/* Page Title — HdTextDSize */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
            World Currency, Bills, and Coins!
          </h1>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
            Within our world and stories, currency is mentioned and is an important factor for everything that plays in here. Here on this page, there will be info about what our bills are, what coins the world uses, and also, their design!
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
            Within our worldbuilding, the currency has two types. Bills and Coins. In this fictional world, Bills &amp; Dollars are called Hetrix. Coins that uses cents are called Hetryl(s).
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            The Net Value of the entire world as of the year 2245 skyrockets up into the septillions. The estimated net worth (and value) is around ~250 septillion because of mass production, scientific breakthroughs, advanced technology, and more. This is due to all the mass markets and brands located on{' '}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Rynel</Link>,{' '}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Lynneria</Link>, and{' '}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Eulerich</Link>.
          </p>
        </div>

        <div className="border-t border-[#1e1c1a]" />

        {/* Coin Designs image placeholder */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Coin Designs</p>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-6">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Coin Designs — Image Placeholder ]</p>
          </div>

          {/* Earth Currency comparison */}
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Earth Currency (Reference)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
            {[
              ['USD $', '1'],
              ['Penny', '0.01'],
              ['Nickel', '0.05'],
              ['Dime', '0.10'],
              ['Quarter', '0.25'],
            ].map(([name, val]) => (
              <div key={name} className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-4 py-3 flex flex-col gap-1">
                <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">{name}</span>
                <span className="font-display text-base text-[#f2ebeb]">{val}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Banknotes image placeholder */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Hetrix Banknotes</p>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-6">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Hetrix Banknotes — Image Placeholder ]</p>
          </div>

          {/* What Equals What */}
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">What Equals What?</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-5">
            So, what's the deciding factor? What equals what? Here we will use Earth's currency as our example and rate. Since this world is fiction, there will also be different types of bills which is the equivalent to Earth's money.
          </p>

          {/* Bills table */}
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Bills — Hetrylx (Ħ)</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            If one USD Dollar is $1, then this means that Ħ3 Hetrix = USD $1
          </p>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden mb-8">
            <div className="grid grid-cols-2 border-b border-[#2e2b26] bg-[#0f0d0c] px-5 py-2">
              <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Hetrylx (Ħ)</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">USD Equivalent</span>
            </div>
            {[
              ['Ħ3',   '$1 USD'],
              ['Ħ7',   '$5 USD'],
              ['Ħ15',  '$10 USD'],
              ['Ħ35',  '$20 USD'],
              ['Ħ55',  '$50 USD'],
              ['Ħ75',  'Custom Hetrix'],
              ['Ħ150', '$100 USD'],
            ].map(([hx, usd]) => (
              <div key={hx} className="grid grid-cols-2 border-b border-[#1e1c1a] last:border-0 px-5 py-3 bg-[#0f0d0c] hover:bg-[#151210] transition-colors">
                <span className="font-display text-sm text-[#c9a84c]">{hx}</span>
                <span className="font-body text-sm text-[#c8c2ba]">{usd}</span>
              </div>
            ))}
          </div>

          {/* Coins table */}
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Coins — Hetryl(s)</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            If one USD cent is 0.01, then this means that 0.03 hetryl = 0.01 USD cent
          </p>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden mb-4">
            <div className="grid grid-cols-4 border-b border-[#2e2b26] bg-[#0f0d0c] px-5 py-2">
              <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Color</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Price</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">USD Cent</span>
              <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Coin Name</span>
            </div>
            {[
              ['Silver hetryl',          '0.03', '0.01', 'Kilpy / Kilpies'],
              ['Bronze hetryl',          '0.07', '0.05', 'Skrunkel(s)'],
              ['Gold hetryl',            '0.15', '0.10', 'Lhunk(s)'],
              ['Oxidized Copper hetryl', '0.35', '0.25', 'Nunkel(s)'],
            ].map(([color, price, cent, name]) => (
              <div key={name} className="grid grid-cols-4 border-b border-[#1e1c1a] last:border-0 px-5 py-3 bg-[#0f0d0c] hover:bg-[#151210] transition-colors">
                <span className="font-body text-sm text-[#c8c2ba]">{color}</span>
                <span className="font-display text-sm text-[#c9a84c]">{price}</span>
                <span className="font-body text-sm text-[#7a746e]">{cent}</span>
                <span className="font-body text-sm text-[#f2ebeb]">{name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Materials Used */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-5">Materials Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['Kilpies',   '85% Nickel and 15% Iron, which makes them slightly magnetic.'],
              ['Skrunkels', '75% Copper and 25% Tin, which gives them a dark-orange-like brown tint.'],
              ['Lhunks',    '80% Gold and 10% Copper, which makes them shine very bright in the sunlight.'],
              ['Nunkels',   'Emerald-infused iron, 70% iron with 30% emerald.'],
            ].map(([coin, material]) => (
              <div key={coin} className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors">
                <h4 className="font-display text-base text-[#f2ebeb] mb-2">{coin}</h4>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">Made with {material}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Misprints */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Collector Values — Misprints</h2>

          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Coin Worth(s)</h3>
          <div className="space-y-2 mb-8">
            {[
              ['Silver hetryl w/ any misprint letter to the side', 'Ħ27k'],
              ['Shortened X', 'Ħ35k'],
              ['Bronze hetryl w/ no indent or bevel + capital T', 'Ħ45k'],
              ['Gold hetryl w/ smooth sides and no K', 'Ħ54k'],
              ['Waxed Copper hetryl mixed with bronze w/ misspelled Hetry', 'Ħ75k'],
              ['Super Old misprinted coins', 'Ħ45k – Ħ90k'],
            ].map(([desc, val]) => (
              <div key={desc} className="flex items-start justify-between gap-4 border-b border-[#1e1c1a] pb-2 last:border-0 last:pb-0">
                <span className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</span>
                <span className="font-display text-sm text-[#c9a84c] whitespace-nowrap">{val}</span>
              </div>
            ))}
          </div>

          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Bill Worth(s) + Misprints</h3>
          <div className="space-y-2">
            {[
              ['Rare Bills: Ħ1 & Ħ5', 'Ħ350k+'],
              ['Old Misprints', 'Ħ650k'],
              ['Blank Misprints with just the Ħ and world flower symbol', 'Ħ750k'],
            ].map(([desc, val]) => (
              <div key={desc} className="flex items-start justify-between gap-4 border-b border-[#1e1c1a] pb-2 last:border-0 last:pb-0">
                <span className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</span>
                <span className="font-display text-sm text-[#c9a84c] whitespace-nowrap">{val}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom nav */}
        <div className="pt-2">
          <Link
            to="/world/databases"
            className="inline-flex items-center gap-2 font-body text-xs text-[#7a746e] hover:text-[#c9a84c] transition-colors"
          >
            ← Back to World Databases
          </Link>
        </div>

      </div>
    </div>
  );
}
