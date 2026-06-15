import { Link } from 'react-router-dom';

export default function HetraDirectWolves() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[960px] mx-auto">
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Hetranian Direwolves</span>
      </div>

      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">Hetranian Direwolves</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-8">Beast Hierarchy Kingdom — Rank 2, No. 2</p>

      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Hetranian Direwolves — Image Placeholder ]</p>
      </div>

      <div className="space-y-12">

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Overview</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Hetranian Direwolves</h2>
          <p className="font-body text-sm text-[#7a746e] italic mb-3">Aside from Kydel being non-human and is a Wulfwing Direwolf Species, here are official designs for the original species, Wulfwings and Coppercrest.</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Hetranian Direwolves are beast creatures, better known as "beasts." They are regional direwolves (some native to the continent of Varleqe) and they come in two separate species. All direwolves cannot intake Vanilla. This is because Vanilla is made up of a single enzyme, Ferulic Acid, which is made up of, Nethaji J, Gallage, and Esben H. This single enzyme cannot be digested for it is a "poison," a one-way death sentence. Even eating the plant that vanilla comes from will do the same type of damage to direwolf species. Not all direwolves have horns on their head.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>Manmade Vanilla or Artificial Vanilla (90%) can be digestible, but only in small amounts.</span></li>
          </ul>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            There's a type of sweet that makes Direwolves become drunk or either high. Fermented Liquor Chocolate, is one of those substance. Intaking a substance like this will cause direwolves to become excited and playful, and sometimes, aroused. However, these effects will wear off in at least two hours. Fermented Liquor Chocolate is packaged in golden strips with a red-wine color label. All Direwolves can also eat chocolate of any kind, not just Fermented ones (and dogs in general).
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            Hetranian Direwolves have insane speed, strength, dexterity, and intelligence. They know how to discern.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Wulfwings */}
        <section>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-8">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Wulfwing Direwolf — Image Placeholder ]</p>
          </div>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Wulfwing Direwolves</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            In ALL Wulfwing Species, they're around the size of a Mini SUV. They have a stout and tank build, agile and lean. Their white highlights near neck to head level along with their tail, are a default trait across all Wulfwings. Wulfwings are gentle and powerful. Their jaw force is super strong and can lift up to 20 units of force. Wulfwings are slightly larger than Coppercrests.
          </p>
          <p className="font-body text-xs text-[#7a746e] mb-2">The White Highlights on their tail and head resembles:</p>
          <ul className="space-y-1 mb-6">
            {['Purity','Innocence','Gentleness','Discernment'].map(t=>(
              <li key={t} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>{t}</span></li>
            ))}
          </ul>

          <h3 className="font-display text-base text-[#f2ebeb] mb-4">Wulfwing Abilities</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            Wulfwings have a few select abilities they use, some are passive, some defensive. Their speed is almost like that of a peregrine falcon's descent, but 4x faster. Their strength is almost like that of a hydraulic press at max. To compare, their strength is a lot more stronger than an African Bush Elephant, and their jaw strength, much stronger than a saltwater crocodile.
          </p>

          <div className="space-y-4 mb-8">
            <h4 className="font-display text-sm text-[#f2ebeb]">Defensive Abilities</h4>
            {[
              ['Resonance Barrier','Their white fur highlights can flare up and generate a short-burst force field — not permanent, but triggered instinctively when sensing lethal intent nearby. More of a "last second shield" vibe. Ties into their discernment trait!'],
              ['Gale Step','Since their speed is 4x a peregrine falcon\'s dive, they can use sudden burst movement to evade rather than block — basically making them nearly untouchable in a fight defensively. Think "you can\'t hit what you can\'t catch."'],
              ['Concussive Howl','A deep, resonating howl that sends out a shockwave strong enough to stagger or disorient attackers. Not harmful — just buys distance. Fits the "gentle but powerful" energy perfectly.'],
            ].map(([name,desc])=>(
              <div key={name} className="border-l-2 border-[#2e2b26] pl-5">
                <p className="font-display text-sm text-[#f2ebeb] mb-1">{name}</p>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="font-display text-sm text-[#f2ebeb]">Passive Abilities</h4>
            {[
              ['Regeneration','They can regenerate their wounds and injuries.'],
              ['Discerning Sight','They can read intent — so before a threat even acts, Wulfwings already know it\'s coming. Essentially a "can\'t be ambushed" passive that complements the discernment symbolism in their white markings.'],
            ].map(([name,desc])=>(
              <div key={name} className="border-l-2 border-[#2e2b26] pl-5">
                <p className="font-display text-sm text-[#f2ebeb] mb-1">{name}</p>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-base text-[#f2ebeb] mb-4">Gender Identification — Wulfwing</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Male Direwolves will have horns on their heads and their ears are pointy. Female Direwolves don't, but their ears tips curve slightly inward like a tail lick. (Same concept for Coppercrests)
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">But their Mid-Fur colors can vary, along with their eyes (like a suit)</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Common Fur Colors</p>
              {['Muted Brown (as shown in the design)','Earthy Green','Earthy Blue','Navy'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Rare Fur Colors</p>
              {['Pink','Sea Blue','Tangent Red'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Common Eye Colors</p>
              {['Blue','Yellow','Green'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Rare Eye Colors</p>
              {['Red','Black (with white pupils)','Bright Green'].map(c=>(
                <p key={c} className="font-body text-sm text-[#c8c2ba]">— {c}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Coppercrests */}
        <section>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-8">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Coppercrest Direwolf — Image Placeholder ]</p>
          </div>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Coppercrest Direwolves</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Coppercrests are powerhouses because of their skin. Their fur and skin are made up of copper-nitrite, while their fur are made out of copper-keratin nitrite. It's silky-like and it's a green-brown-yellow gradient.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Unlike Wulfwings that have a lot of variations, all Coppercrests stick to this unique design. Their bodies can withstand atomic attacks, bullets, nuclear, and a lot more, thanks to their copper-like skin that feels indestructible. Highly intelligent species. Prioritizes Defense over Speed, and Attack over Specials.
          </p>
          <p className="font-body text-sm text-[#f2ebeb] font-medium mb-4">Coppercrest Direwolves are ONE OF A KIND.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-xs text-[#7a746e] mb-2">That means:</p>
              {['All have the same genetic material','Same Eye Color','Same build'].map(i=>(
                <p key={i} className="font-body text-sm text-[#c8c2ba]">— {i}</p>
              ))}
            </div>
            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
              <p className="font-body text-xs text-[#7a746e] mb-2">BUT:</p>
              <p className="font-body text-sm text-[#c8c2ba]">— Different Abilities</p>
            </div>
          </div>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            The Copper Material in this world is not brittle or weak unlike Earth. It is durable and dense. Before Coppercrests even became Coppercrests—there used to be one Coppercrest that never had these copper-like genetics. It was supposed to be a Wulfwing with a Copper like crest on its chest. However, due to the strong stomach acids in direwolves that can break down anything (except Vanilla), the Copper Crested Wolf took a liking to eating raw unrefined copper, which resulted it's skin and fur to turn into copper-nitrate. Thus began cross-breeding with other Copper Crested Wolves, which eventually turned the entire lineage into Coppercrests.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            Coppercrests are smaller in size than Wulfwings. Despite being wild beasts, they are super docile and tame around humans unlike Wulfwings. The scientists of The Eulerich Kingdom use Coppercrests to help aid in Defending against minority monsters, Armies, Peacekeepers, and Military.
          </p>

          <h3 className="font-display text-base text-[#f2ebeb] mb-4">Coppercrest Abilities</h3>
          <div className="space-y-4 mb-6">
            <h4 className="font-display text-sm text-[#f2ebeb]">Defensive Abilities</h4>
            {[
              ['Copper Defense Layering','They can manipulate their skin\'s layers to make the copper more dense and harder to make bruises or scratches. Bullets or any similar weaponry will not damage them.'],
              ['Copper Powder Burst','Their tail is full of copper dust. They can manipulate how many there is, and then shoot them out like how porcupines lose their quills, or how skunks spray "piss" to ward off enemies.'],
            ].map(([name,desc])=>(
              <div key={name} className="border-l-2 border-[#2e2b26] pl-5">
                <p className="font-display text-sm text-[#f2ebeb] mb-1">{name}</p>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-sm text-[#f2ebeb]">Passive Abilities</h4>
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Copper Bite Contamination</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">Their bites can inflict and spread copper onto enemies like a heat-signature. Helps track escaped foes. Often used to lock onto a target.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Common Wild Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {['Norrane, Outskirt Mountains','Eulerich, Oelen Plains','Varleqe, Greenside Hills','Varleqe, Ribbonfelt','Varleqe, Greenlux'].map(loc=>(
              <p key={loc} className="font-body text-sm text-[#c8c2ba]">— {loc}</p>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">← Prev Entry</span>
            <span className="font-display text-sm text-[#f2ebeb]">Killer Rabbits</span>
          </Link>
          <Link to="/world/databases/CreaturesOfTheWorld/Flimpies" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1 items-end text-right">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Next Entry →</span>
            <span className="font-display text-sm text-[#f2ebeb]">Flimpies — Ghost Bunnies</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
