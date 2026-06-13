import { Link } from 'react-router-dom';

export default function BeastHierarchyKingdom() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Beast Hierarchy Kingdom</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-2xl md:text-3xl text-[#f2ebeb] mb-6">Beast Hierarchy Kingdom</h1>

      <div className="space-y-12">

        {/* Intro */}
        <section>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            In the Hibryds Cinematic Universe, there is a separate system called a Beast Hierarchy Kingdom, where it classifies each creatures' strengths and where they are in the ranks of the kingdom. Beast Creatures include: Werebels, Direwolves, Demons....etc.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            There are also animals in this world, like dogs, lions, elephants...etc. Their animal system / kingdom is the same. However, Beasts are different as they pack more power and strength than average animals.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Rank 1 */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Rankings</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Rank 1</h2>
          <div className="space-y-6">

            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">No. 1</p>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">
                <Link to="/world/databases/CreaturesOfTheWorld/TheDregalosaurus" className="hover:text-[#c9a84c] transition-colors">The Dregalosaurus Zaratan</Link>
              </h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                In first place among the kingdom of beasts, The Dregalosaurus Zaratan comes out top in this list. It's a Megalodon-dragon like dinosaur tortoise that lives near the south pole hidden beneath the Alarctic Frost. It is said to be extremely powerful, as it is well over 3,000 years of age ever since it lived throughout the Era of Greungeria (Hetra's past in where all the continents were one).
              </p>
            </div>

            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">No. 2</p>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">
                <Link to="/world/databases/CreaturesOfTheWorld/DemonCreatures" className="hover:text-[#c9a84c] transition-colors">Demons</Link>
              </h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Pretty self explanatory. They're descendants of Khalfvyskov whom contain UNFATHOMABLE power.
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Rank 2 */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Rank 2</h2>
          <div className="space-y-6">

            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">No. 1</p>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">
                <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="hover:text-[#c9a84c] transition-colors">Were-Rabbits / Killer Rabbits</Link>
              </h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
                Werebels, aka Were Rabbits, also called Killer Rabbits, are bipedal mutations of sterilized rabbits that are escapees of illicit vampire experimentations. Werebels are giant! They stand around 7ft'4 in height and 2ft'3 width (length too).
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
                Through time, Werebels only sought power and strength, and it was classified in 1607 AD that they are Apex Beasts of the Beast Kingdom. They are in the Top 1 Place. However, even with that much power, a rivaling race called{' '}
                <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="text-[#c9a84c] hover:underline">Hetranian Direwolves</Link>
                {' '}come close to Top 2 (Wulfwing Direwolves and Coppercrest Direwolves).
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
                Werebels evolve into a final stage called a Moonbel. A Moonbel is much more powerful than its pre-evolution. Their power increases 10 fold and their strength may trifle that of a Wulfwing, however, it is still undetermined to their full extent.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Moonbels look a lot more different than their pre-evolved form. Their head almost resembles that of a skull with three piercing sharp eyes (with one eye in the center above the two), washed with red and black. Their ears become longer and deformed, as they serve as powerful hearing instruments. Their body becomes slightly bigger, and they have four arms, two on each side. Their tail becomes longer and they can control it with ease, serving as an extra limb.
              </p>
            </div>

            <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-2">No. 2</p>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">
                <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="hover:text-[#c9a84c] transition-colors">Hetranian Direwolves</Link>
              </h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
                Hetraniean Direwolves are beast creatures, better known as "beasts." They are regional direwolves (some native to the continent of Varleqe) and they come in two separate species. Wulfwing Direwolves and Coppercrest Direwolves. The Direwolves rival that of Were-rabbits, as they often fight each other to take their ranking within Rank 2.
              </p>
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-display text-sm text-[#f2ebeb] mb-2">Wulfwing Direwolves</h4>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                    Wulfwing Direwolves are the size of a SUV-car. They have a stout and tank build, with a fluffy appearance. They have a single horn that sticks out of their head (center upper forehead from the eyes) and they have sharp orange eyes. Their fur color can range from shades of gray, white, black, and blue, and they have diamond-shape patterns as their eyebrows. These patterns can also appear on their tails. Wulfwings are gentle and powerful. Their jaw force is super strong and can lift up to 20 units of force. Wulfwings are slightly larger than Coppercrests.
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                    To distinguish between a male and female Wulfwing, you have to look at their tail's base joint. If the joint part is puffier and has more fur with a slightly tinted brown color, that is a Female Wulfwing. Males do not have puffier fur around that joint part of their tail along with that dark-brown tint.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-sm text-[#f2ebeb] mb-2">Coppercrest Direwolves</h4>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                    Coppercrest Direwolves have one distinct feature that differs from Wulfwings. They have a copper-plating armor body that consists of, "copper" that is surrounded by green-tinted fur. This copper-plating are actually their skin, which is built to withstand massive blows. They have blue eyes, the polar opposite of orange. Coppercrest Direwolves can be found everywhere. These beasts are powerhouses because of their skin, and some are tamed by Eulerieans in Eulerich for combat and military purposes. They are smaller in size than Wulfwings.
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                    To distinguish between a male and female Coppercrest, you have to look at their tail's base joint. If the joint part is puffier and has more fur with a slightly tinted dark-green color, that is a Female Wulfwing. Males do not have puffier fur around that joint part of their tail along with that dark-green tint.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Rank 3 */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Rank 3</h2>
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
            <h3 className="font-display text-base text-[#f2ebeb] mb-3">Stygian Batragons</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Fearsome Stygian Dragons from The Stygian Realm. They're a bat-dragon fusion and their power triumphs just below Rank 1 and 2. Some of these Batragons can talk. Some have an intelligent mind of a scholar.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div />
          <Link to="/world/databases/CreaturesOfTheWorld/TheDregalosaurus" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1 items-end text-right">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Next Entry →</span>
            <span className="font-display text-sm text-[#f2ebeb]">The Dregalosaurus</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
