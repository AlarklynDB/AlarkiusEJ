import { Link } from 'react-router-dom';

export default function PastModernDinosaurs() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Past & Modern Day Dinosaurs</span>
      </div>

      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Past & Modern Day Dinosaurs</h1>

      <div className="space-y-12">

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">History</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">The Dinosaurs — What Happened?!</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Within Ancient Hetra's Past, there long lived Dinosaurs. Big ferocious beast creatures that once roamed every corner on Hetra. The most activeness of Dinosaurs lived on Ancient Varleqe, Rynel, Norrane, and The Alarctic Alpines. However, within the great Jurassic Era, there was a global, massive ice-storm that forced most of the land dinosaurs underground. Some became buried within the lands, and some sea dinosaurs fled up north to the Alarctic Alpines. After the passing of the storm, no dinosaur ever set foot back on those lands. Instead, their move to the undergrounds made them adapt to the surroundings. Although, some of those dinosaurs still exist, since many have evolved over time to adapt to current modern civilization.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-6">Now Known Dinos (Present Day)</h2>
          <p className="font-body text-sm text-[#7a746e] italic mb-6">There are still some dinosaurs that still thrive to this day, despite some of the others have moved underground.</p>
          <div className="space-y-5">
            {[
              {name:'Compsognathus', desc:'The Composganthus are small dinosaur species that lives on mountains on Varleqe. There are only 100 of these left. As they adapted over time, they have learned to be curious and friendly creatures. They\'re herbivores and only eat plants.'},
              {name:'Pteroynewts', desc:'Avian Dinosaurs that snack on bats and bugs. There are only 40 left of these and they live on Norrane.'},
              {name:'Velociraptors', desc:'These small and fast dinos used to be hostile towards human kind. But over time, the learned to be curious and tame.'},
            ].map(({name,desc})=>(
              <div key={name} className="border-l-2 border-[#2e2b26] pl-5">
                <h3 className="font-display text-lg text-[#f2ebeb] mb-2">{name}</h3>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Past Dinosaurs</h2>
          <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Discovered Fossils</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            Now that Planet Hetra has evolved, many fossils have been dug up throughout the course of time and have been displayed on museums.
          </p>
          <p className="font-body text-xs text-[#7a746e] mb-3">Displayed Fossils:</p>
          <ul className="space-y-1">
            {[
              'The Ithyaneosaurus Rex',
              'The Pterodactyl',
              'The Great Megalosaurus Whale',
              'The Megalosaurus Rex',
              'The Tyrannosaurus Rex',
              'The Blucinarysisaurus Raptor',
              'The Chinkenansaurus Raptor',
            ].map(f=>(
              <li key={f} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>{f}</span></li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">The Ruins of Rynel</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            South of the four Oakgnar Towns, but southwest New Rynels. Rynel Ruins leads underground, with the ruins being the exact size of the continent itself. Scientists say that the Rynel Ruins leads to an underground ancient animal kingdom, The Feathered Dinosaurs. Though there are texts and myths that say these creatures may be real, it still remains a speculation to this day. Currently, there is no way to enter the said ruins, since the entrance is sealed off with a divine seal.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Institution</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Archaeology of Fossils</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            On the Continent of Eulerich, there is a massive museum that is dedicated into preserving the bones of recently uncovered dinos. Ever since the uncovering of the{' '}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Nulergon Dragons</Link>
            {' '}(they were revived), more and more skeletal remains of dinosaurs have been uncovered worldwide. It's not just land fossils but also underwater skeletal leviathans.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            This Museum is called <span className="text-[#f2ebeb] font-medium">H.E.L.M.S</span> — <span className="text-[#f2ebeb] font-medium">Hetra's Extinct Lifeform Memorial Sanctuary</span>.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">About H.E.L.M.S</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            H.E.L.M.S stands as the largest paleontological institution on the continent of Eulerich, housing over 10,000 fossil specimens from across Planet Hetra. The sanctuary was founded in era of The Great Creature Discovery Era (1956 - 1990 AD) after the miraculous revival of the Nulergon Dragons sparked a worldwide surge in fossil excavation efforts.
          </p>

          <h3 className="font-display text-lg text-[#f2ebeb] mb-4">The Main Halls</h3>
          <div className="space-y-4">
            {[
              ['The Jurassic Wing','Dedicated to the land giants that roamed Ancient Varleqe, Rynel, and Norrane. This hall features the complete skeletal reconstructions of the Ithyaneosaurus Rex, Megalosaurus Rex, and the Tyrannosaurus Rex. Interactive displays show how these creatures once dominated the prehistoric landscapes.'],
              ['The Avian Exhibit','Home to flying reptiles and early bird ancestors, including the Pterodactyl remains and fossilized Pteroynewts ancestors. Visitors can see the evolutionary links between ancient avians and modern species.'],
              ['The Leviathan Gallery','A breathtaking underwater-themed hall showcasing the skeletal remains of The Great Megalosaurus Whale and other marine behemoths. Suspended from the ceiling, these massive skeletons create an immersive ocean experience.'],
              ['The Raptor Den','Features the fierce predators of the past, including the Blucinarysisaurus Raptor and Chinkenansaurus Raptor. Fossil impressions show preserved feather patterns and hunting behaviors.'],
              ['The Ice Age Chamber','Chronicles the global ice-storm event that changed Hetra forever. This exhibit explores how the catastrophic freeze forced dinosaurs underground and shaped the planet\'s evolutionary path.'],
              ['The Modern Wing','Displays of Hetra\'s current modern animals and dinosaurs.'],
            ].map(([name,desc])=>(
              <div key={name} className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-4 py-4">
                <h4 className="font-display text-base text-[#f2ebeb] mb-2">{name}</h4>
                <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Research & Conservation</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            H.E.L.M.S isn't just a museum — it's an active research facility. Scientists from across the continents work here to study fossil remains, conduct DNA analysis on preserved specimens, and theorize about the underground dinosaur kingdoms that may still exist beneath Hetra's surface. The sanctuary also partners with excavation teams worldwide to properly preserve and catalog newly discovered fossils.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-3">The Sealed Archives</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
            Deep within H.E.L.M.S lies a restricted section called <span className="text-[#c9a84c] italic">The Sealed Archives</span>, where the most mysterious and unexplainable fossil discoveries are kept. Rumors suggest some specimens here show signs of divine energy or unnatural preservation — fossils that shouldn't exist according to current geological understanding. Access is granted only to high-level researchers and approved investigators.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-4">Zoo Sanctuary — HELMS-Z</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            This Museum isn't just about dinosaurs. They also have a section for modern animals too and an extended Zoo called H.E.LM.S Zoo (or HELMS-Z) where some fossils have the possibility to be revived but unable to be released to the wild. There's enough protection to keep the revived dinos (not the big ones) as the Museum's farm creatures or pets. HELMS-Z is not part of any political branch there for experiments are not done as much. Their belief in reviving fossils to their natural counterpart is to preserve their beauty. No mutation or vile experimentation.
          </p>
          <div className="border-l-2 border-[#2e2b26] pl-5 mb-4">
            <p className="font-display text-base text-[#f2ebeb] mb-2">Experiments are Safe</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The experiments done are not dangerous. They are very safe and the doctors, along with scientists treat these creatures with care. Even fossils that are revived sometimes have a disability rate, which also prohibits the staff to release them to the wild. HELMS-Z is a sanctuary. Not a laboratory.
            </p>
          </div>

          <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Some Fossils Can't Be Revived</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
            It's a 50/50 chance of happening. There are successful attempts, there are sometimes failed attempts. What's required for a fossil to revive and restore if there's enough carbon, amber, and hydrogen cells and membranes that have been left preserved in the fossilized rocks around it.
          </p>
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
            <p className="font-body text-xs text-[#7a746e] mb-3">Percentage needed for a Successful Revival at 100%:</p>
            {[
              ['15%', 'Amber'],
              ['45%', 'Carbon'],
              ['20%', 'Hydrogen Cells (skin cells with moisture)'],
              ['20%', 'Skin Membranes'],
            ].map(([pct,label])=>(
              <div key={label} className="flex gap-4 justify-between border-b border-[#1e1c1a] pb-2 last:border-0 last:pb-0 mb-2">
                <span className="font-body text-sm text-[#c9a84c]">{pct}</span>
                <span className="font-body text-sm text-[#c8c2ba]">{label}</span>
              </div>
            ))}
            <p className="font-body text-xs text-[#7a746e] italic mt-3">Anything lower than that is a failure, thus the fossils are preserved as statues.</p>
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
