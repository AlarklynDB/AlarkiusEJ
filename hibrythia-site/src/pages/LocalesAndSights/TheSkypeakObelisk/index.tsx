import { Link } from 'react-router-dom';

export default function TheSkypeakObelisk() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
        Locales &amp; Sights / The Skypeak Obelisk
      </p>

      {/* Hero */}
      <div className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Skypeak Obelisk</h1>

        {/* Callout */}
        <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c]">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            <span className="font-display text-[#f2ebeb]">The Skypeak Obelisk</span> is the center of attraction in the city of Grelladore, in Nharvenile, a country north of Riverchnaut. It is a floating building in the sky that has over 200 floors, standing at 900 floors max &mdash; looming over the entire city and outranking the highest building in Eldreule.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Skypeak Obelisk &mdash; Image Placeholder ]</p>
      </div>

      {/* Overview & Purpose */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Overview &amp; Purpose</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Skypeak Obelisk serves as a Fantasy-Video game-like system where you can farm actual ExP Points to help better and improve your powers, including gold. There are also unique housing systems that you can purchase and live within. Among these floors, there are quests, party systems, PVP, battling systems, and boss fights. A lot of citizens from around the world come to this very place to have fun.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The building can fit at least <strong className="text-[#f2ebeb]">2.3 million individuals</strong> at one time because of how huge its size is &mdash; making it one of the most economically active single locations on the entire planet. The building itself has over millions of windows that are made out of hexicules, which is stronger than diamond and a lot of other materials. There&apos;s an entrance near the bottom where flying cars can exit and enter. Billboards float around the area and blimps, the size of the building&apos;s windows.
        </p>
      </div>

      {/* Hexicule Power System */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Hexicule Power System</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Skypeak Obelisk operates on Hexicules. Hexicules are magic crystals that help serve as a fundamental core when it comes to buildings or inventions. They can be used as a variety of things, like batteries, engines, and technological inventions.
        </p>

        {/* Callout */}
        <div className="border-l-2 border-[#6ab4e0] pl-5 pr-4 py-4 bg-[#0b0e12] rounded-sm">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            They are very dense because of the high molecular structure it is made from. It&apos;s so dense that it is physically impossible to make a scratch or dent on them. These crystals are not indestructible, however.
          </p>
        </div>

        <ul className="space-y-3">
          {[
            "A single hexicule energy can regenerate at insane and excessive speeds, so recharging isn\u2019t an only option.",
            "When Hexicules are combined together, they lose 20% of their durability and their regenerative properties (It takes nearly 2.5 hours for the hexicules to repair itself on its own).",
            "Hexicules that are modified into batteries lose 30\u201350% of their charge.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#c9a84c] mt-[3px] shrink-0">&mdash;</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Construction & Architecture */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Construction &amp; Architecture</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The building itself is made out of indestructible metal called <strong className="text-[#f2ebeb]">Hardwood-Lucid</strong>, which is made by combining Lyecerium crystals and Norrane Hardwood Trees together.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The size of the Skypeak Obelisk is humongous. It looms over the city and is bigger, wider, and taller than your average building. The Skypeak Obelisk also outranks the highest building in Eldreule.
        </p>
      </div>

      {/* Internal Economy & Currency */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Internal Economy &amp; Currency</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Within the Skypeak Obelisk, its system differs from the outside world. While the outside world uses <strong className="text-[#f2ebeb]">Hetrix (Ħ)</strong> as its main currency, the Obelisk uses <strong className="text-[#f2ebeb]">gems and system coins</strong> as its internal currency.
        </p>

        {/* Callout */}
        <div className="border-l-2 border-[#c9a84c]/40 pl-5 pr-4 py-4 bg-[#0f0d0c] rounded-sm">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            System coins earned inside the Skypeak Obelisk can be <strong className="text-[#f2ebeb]">converted into real-world Hetrix</strong> at coin-conversion shops located on every floor near the entrance. This creates a direct pipeline between the Obelisk&apos;s internal economy and the broader global market.
          </p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This conversion system allows visitors and residents alike to turn in-game rewards &mdash; earned through quests, boss fights, PVP, and ExP farming &mdash; into <strong className="text-[#f2ebeb]">legitimate, real-world wealth</strong> in Hetrix. High-performing players and competitive teams have been known to generate significant income this way.
        </p>

        {/* Economic Scale */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Economic Scale</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The total estimated worth of the Skypeak Obelisk as an attraction and economic entity reaches up to <strong className="text-[#f2ebeb]">Ħ60 Trillion Hetrix</strong> &mdash; a staggering valuation that reflects not just its real estate and infrastructure, but the enormous volume of transactions, conversions, and commerce generated daily across all 200+ floors.
          </p>
          <p className="font-body text-sm text-[#4a4844] mb-2 tracking-wide">For reference on the global Hetranian scale:</p>
          <div className="space-y-2">
            {[
              { label: "Ħ3", desc: "approximately $1.00 USD" },
              { label: "Ħ60 Trillion", desc: "Obelisk valuation — among the most valuable single structures in the known world" },
              { label: "~Ħ25 Quintillion", desc: "HetraSEAP estimated worth" },
              { label: "~Ħ35 Sextillion", desc: "Philstra Rhys\u2019 personal fortune" },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-4 items-baseline border-b border-[#2e2b26]/50 py-2">
                <span className="font-display text-base text-[#c9a84c] shrink-0 w-36">{label}</span>
                <span className="font-body text-sm text-[#7a746e] leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Powerhouse System */}
      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Skypeak Obelisk: A Powerhouse System</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Skypeak Obelisk is unlike any other attraction on Planet Hetra. It operates as an entirely self-contained world within a world. Visitors who step inside quickly realize that the rules of the outside don&apos;t apply here. Its currency is different, its systems are different, and its scale is unlike anything found elsewhere on the planet.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            From the moment you enter through the lower-section entrance (a spacious hub lined with food stalls, robotic staff, and a full reception), the Obelisk makes its scope immediately clear. A <strong className="text-[#f2ebeb]">free guided tour</strong> is available to all newcomers, led by a compact robot tour guide that takes guests on a tram-like ride through the building&apos;s vast interior. Floor by floor, panoramic windows reveal entire cities, growing forests, wildlife habitats, caves, and fully realized game-like systems spanning up to <strong className="text-[#f2ebeb]">800 active floors</strong>. The remaining 100 floors serve as the Obelisk&apos;s control deck.
          </p>
        </div>

        {/* Skydroid System */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Skydroid System</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Upon registering as a member, visitors are issued a <strong className="text-[#f2ebeb]">Skydroid</strong>, a small remote-like device that acts as the user&apos;s all-in-one interface. The Skydroid handles:
          </p>
          <div className="grid gap-3">
            {[
              { label: "Inventory Management", desc: "Items and rewards are scanned and stored automatically." },
              { label: "XP & Level Tracking", desc: "Experience points are logged and skills can be unlocked through it." },
              { label: "Currency Management", desc: "Coins, gems, and reward tracking." },
              { label: "Power Overlay", desc: "The Skydroid can bind to and display the user\u2019s powers and abilities." },
              { label: "Location Services", desc: "If lost, the Skydroid uses a built-in NFC detector to find its owner via their Membership card." },
            ].map(({ label, desc }) => (
              <div key={label} className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c] hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
                <h4 className="font-display text-base text-[#f2ebeb] mb-1">{label}</h4>
                <p className="font-body text-sm text-[#7a746e] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed">
            VIP passes grant full access to all floors and systems. For those who earn them, the pass integrates seamlessly with the Skydroid.
          </p>
        </div>

        {/* Domain System */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Domain System</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Domains are one of the most popular challenge features within the Obelisk. They are enclosed combat arenas, each with its own boss, theme, and difficulty tier. The rules are as follows:
          </p>
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] divide-y divide-[#2e2b26]">
            {[
              { rule: "Entry Fee", detail: "10 coins required to accept a domain challenge." },
              { rule: "Time Limit", detail: "6.5 minutes enforced." },
              { rule: "On Failure / Forfeit", detail: "The 10 coins are absorbed into the domain\u2019s stacked reward pool." },
              { rule: "On Clear", detail: "The challenger claims the full stacked reward pool \u2014 coins, gems, rare materials, and special tickets such as the Rainbow Ticket (redeemable for housing systems)." },
            ].map(({ rule, detail }) => (
              <div key={rule} className="flex gap-4 px-4 py-3">
                <span className="font-display text-xs text-[#c9a84c] tracking-widest uppercase shrink-0 w-32 mt-[2px]">{rule}</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Highly contested or long-unbeaten domains can accumulate enormous reward pools over time, making them prime targets for skilled adventurers.
          </p>
        </div>

        {/* Housing & Floors */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Housing &amp; Floors</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Obelisk&apos;s housing system spans every active floor, each with a distinct <strong className="text-[#f2ebeb]">seasonal theme</strong>. Players can purchase, customize, and even <strong className="text-[#f2ebeb]">take their housing with them</strong>. Certain properties can be miniaturized into a magic-laced container for portable travel outside the Obelisk entirely, and resized by a magic user at will.
          </p>
          <p className="font-body text-sm text-[#7a746e] mb-2">Each floor also features its own:</p>
          <ul className="space-y-2">
            {[
              "Town squares and adventurer hubs (Adventurer\u2019s Quarters)",
              "Shops, markets, mini-games, hot springs, and training centers",
              "Wildlife zones and domain areas",
              "Food stalls and specialty cafes",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#c9a84c] shrink-0 mt-[3px]">&mdash;</span>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* A World That Rewards Power */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">A World That Rewards Power</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Skypeak Obelisk is ultimately built for growth. Whether through domains, PVP, monster hunting, or sparring in training fields, every action within the Obelisk can yield XP. That XP then unlocks <strong className="text-[#f2ebeb]">skills and powers that carry over to the outside world</strong>, making the Obelisk not just an attraction but a genuine development system for Hibryds, adventurers, and magic users alike.
          </p>
          <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
            <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
              For those willing to put in the work, the Obelisk has a way of bringing out the best in people, and the strongest.
            </p>
          </blockquote>
        </div>
      </div>        {/* Bottom Nav */}
        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
          <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales & Sights</p>
            </div>
          </Link>
        </div>

    </div>
  );
}

