import { Link } from 'react-router-dom';

export default function Flimpies() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Flimpies</span>
      </div>

      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">Flimpies</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-8">Ghost Bunnies</p>

      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Flimpies — Ghost Rabbit Image Placeholder ]</p>
      </div>

      <div className="space-y-12">

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Overview</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">What are Flimpies?</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Flimpies are airborne ghost rabbits (or bunnies) that are common everywhere. They are the ghosts of cursed rabbits that were a result of a genetic mutation back in the old days on The Continent of Norrane. (Those cursed rabbits were a ticking time bomb). Despite being ghosts, they can be visible during the daytime, and can phase through objects at ease. Their appearance is quite loving and they mean no harm. Their colors vary throughout the world!
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            The most common colors of Flimpies you can see are light-pink and teal-green. The most rare colors of Flimpies are Crimson-Purple and Pure-Blue. Flimpies can also come in different variants. The difference between these variants are their ear shapes, cloud designs, or fin designs, along with their color. These creatures are very elusive and wild! They feed on berries, specifically Bluebloom Apricorns.
          </p>

          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-4">
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-2">Reproducing and Interbreeding</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                Flimpies can interbreed because they are genderless. Since their DNA from the past was unstable, the result of the modern Flimpie DNA are now overridden with their ghost-like properties. This preserves all genetic DNA except for their personality, nature, and color.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                A wild baby Flimpett will only look like a cloud with a light-visible exoskeleton of a ghost. In order for baby flimpies to grow, they need to feed on either Bluebloom Apricorns or develop their bodies during the night against the moon's natural light.
              </p>
            </div>
            <div className="border-t border-[#2e2b26] pt-3 space-y-1">
              {[
                ['Baby Flimpies are called', 'Flimpett(s)'],
                ['Flimpetts in a group are called', 'Blimps'],
                ['Grown Flimpie in a group are called', 'Plocks'],
                ['Flimpie in singular form is called', 'Flimpi'],
              ].map(([label,val])=>(
                <div key={label} className="flex justify-between gap-2">
                  <span className="font-body text-xs text-[#7a746e]">{label}</span>
                  <span className="font-body text-xs text-[#c8c2ba]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-base text-[#f2ebeb] mb-2">Habits</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              All wild Flimpies are clean freaks. The slightest inch of getting dirty, they will clean away instantly.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-8">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Flimpies — Ghost Rabbit Uncurled Tail Image Placeholder ]</p>
          </div>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Appearance</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            They have a very round and puffy body, no arms or legs. They have two ghost-like tendrils that extend from their cloud-based body. Flimpies are around the size of a 2-ply roll & an average coffee mug.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Each of these tendrils can reach out and latch onto objects. These tendrils have a staticky like feeling. The static charge on their fins tickle a little to humans, but can deal damage if frightened.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            These creatures have the power to absorb elements, thus giving them an elemental signature. You can tell by this through the color of their trail the leave behind while flying. Their eyes are white dots.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            They sit on a cloud-like tail that is super long which wraps around their body like a seat. They rarely let their cloud-tail uncurl. But when they do, the bottom of their body has a very thin wiggly membrane that connects to their tendrils. This part of their body is their skeletal base.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            All different types of Flimpies will each have their own behaviors/nature (jolly, impish, timid, bashful...etc).
          </p>
          <p className="font-body text-xs text-[#7a746e] mb-2">Their color to their body varies, but the most common ones are:</p>
          <ul className="space-y-1">
            {['Lightning Orange','Pale Pink','Sky Blue','Navy Blue'].map(c=>(
              <li key={c} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>{c}</span></li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Abilities</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-6">Creature Abilities</h2>
          <div className="space-y-4">
            {[
              ['Electrokinesis','Electricity Manipulation.'],
              ['Elemental Manipulation','The manipulation of nature elements (grass, water, fire...etc).'],
              ['Intangibility','Phasing through objects at will. Self Intangible Properties — this ability allows them to shift their ghostly density from light to heavy.'],
              ['Super Speed','Ability to go at fast speeds.'],
              ['Adaptability','Flimpies are quick to adapt to new surroundings, because by nature, they are intelligent creatures.'],
            ].map(([name,desc])=>(
              <div key={name} className="border-l-2 border-[#2e2b26] pl-5">
                <p className="font-display text-base text-[#f2ebeb] mb-1">{name}</p>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Common Wild Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {['Norrane, Outskirt Mountains','Eulerich, Oelen Plains','Varleqe, Greenside Hills','Varleqe, Ribbonfelt'].map(loc=>(
              <p key={loc} className="font-body text-sm text-[#c8c2ba]">— {loc}</p>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />
        <div className="pt-4">
          <Link to="/world/databases/CreaturesOfTheWorld" className="inline-flex items-center gap-2 font-body text-xs text-[#7a746e] hover:text-[#c9a84c] transition-colors">← Back to Creatures of The World</Link>
        </div>
      </div>
    </div>
  );
}
