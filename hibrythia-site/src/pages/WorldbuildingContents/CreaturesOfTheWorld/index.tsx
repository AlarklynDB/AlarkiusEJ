import { Link } from 'react-router-dom';

export default function CreaturesOfTheWorld() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[960px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <span className="text-[#7a746e]">IV. Equation of Life</span>
        <span>›</span>
        <span className="text-[#7a746e]">Creatures of The World</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Creatures of The World</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-10">Lores and Entries of Creatures of The World!</p>

      {/* Important Aspects — card links to subpages */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-4">Important Aspects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Beast Hierarchy Kingdom', to: '/world/databases/CreaturesOfTheWorld/BeastHierarchyKingdom' },
            { label: 'The Dregalosaurus', to: '/world/databases/CreaturesOfTheWorld/TheDregalosaurus' },
            { label: 'Demon Creatures', to: '/world/databases/CreaturesOfTheWorld/DemonCreatures' },
            { label: 'Killer Rabbits', to: '/world/databases/CreaturesOfTheWorld/KillerRabbits' },
            { label: 'Hetranian Direwolves', to: '/world/databases/CreaturesOfTheWorld/HetraDirectWolves' },
            { label: 'Flimpies — Ghost Bunnies', to: '/world/databases/CreaturesOfTheWorld/Flimpies' },
            { label: 'Deer Dragons — Deeragons', to: '/world/databases/CreaturesOfTheWorld/DeerDragons' },
            { label: 'Past & Modern Day Dinosaurs', to: '/world/databases/CreaturesOfTheWorld/PastModernDinosaurs' },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="block border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-4 py-3 transition-all duration-200"
            >
              <span className="font-body text-sm text-[#c8c2ba] hover:text-[#f2ebeb] transition-colors">{label}</span>
              <span className="block font-body text-[10px] text-[#4a4844] mt-1 tracking-wide">→ View Entry</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t border-[#1e1c1a] mb-12" />

      {/* Intro */}
      <section className="mb-12">
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Taxonomy. Creatures and Living Beings on the world of Hetra will be listed here! However, Guard Creatures will not be listed here, but in their specific locales. These creatures will be seen throughout the majority of the series! Normal animals won't be listed since they can also be found everywhere on the world of Hetra, like fish, whales, birds...etc.
        </p>
      </section>

      <div className="border-t border-[#1e1c1a] mb-12" />

      {/* Hetranian Dragons */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Category I</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Hetranian Dragons</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-8">
          Dragons. Who wouldn't like that?! Their size can vary from small to large. You can find these creatures anywhere on Varleqe or the rest of the world. Their most common sightings are near some ruins. There are three types of Dragon species.
        </p>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-5">Dragon Species</h3>
        <div className="space-y-6">

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Wyvernmux Dragons</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Wyvernmux Dragons are mountain terrain creatures. Their dragon appearance more resembles a wyvern, while their other features remain the same. However, Wyvernmux have two legs, wings as their arms and on the tips, their hands. These bodies are built for climbing. Although they can't fly despite having wings, they use them to glide from high to low places.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Seapertent Dragons</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Seapertent Dragons are big dragons, since they're ocean creatures. With wings from a bat, two arms, and a body of a Sea Serpent, they roam the seas and are considered one of the gentle dragons. They don't attack unless provoked. They are the size of a megalodon and can live in oceans and on lands. They can't fly on land, but can in the ocean.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Nulergon Dragons</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Nulergon Dragons are a new kind of species discovered in the Eulerich Kingdom during The Great Creature Discovery Era (1956 - 1990 AD). These creatures are tame to mankind, as they have adapted to their surroundings quickly and very well. They aren't super big though, as they are around the size of a swimming pool. There used to be around 500, but now, there are at least 100 left. Some of these dragons here live on the{' '}
              <Link to="/404" className="text-[#c9a84c] hover:underline">Draxian Church</Link>{' '}
              that floats in the skies.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Elemental Dragons</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Elemental Dragons, also known as Magidraxon, are dragons that are a magic-descent creature from{' '}
              <Link to="/404" className="text-[#c9a84c] hover:underline">Elemental Magic</Link>
              , a type of magic that is common everywhere. These dragons have abilities that correspond to the environment they adapt to. Each of these Magidraxons have their own elemental power. There are at least 3,510 of these dragons. These dragons also live in the Draxian Sky Church. Magidraxons are entirely different from Nulergon, Seapertent, and Wyvernmux.
            </p>
            <ul className="space-y-1">
              {[
                'Earth Dragons — Earth based Magic Dragons.',
                'Water Dragons — Water based Magic Dragons.',
                'Air Dragons — they blend well with the sky.',
                'Lightning Dragons >> their rarity comes in a 20 out of 3,510 chance!',
                'Fire Dragons >> this one is the most common!',
              ].map((item) => (
                <li key={item} className="font-body text-sm text-[#c8c2ba] flex gap-2">
                  <span className="text-[#4a4844] mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2e2b26] mt-8 pt-8 space-y-6">
          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Stygian Batragons</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Stygian Batragons are bat-like dragon creatures. These Stygian Batragons live in various places on Hetra and are the only accessors to the Stygian Realm since they also live there. Their dragon-style counterpart is of a Chinese-dragon, colored in shades of black, white, and gray. They sometimes resemble the Ying and the Yang because of the patterns on their scaley body design.
            </p>
          </div>
          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h4 className="font-display text-base text-[#f2ebeb] mb-2">Grayhounds</h4>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Grayhounds have an appearance of a lizard snout, wolf eyes, and a lion's body with wings. Grayhounds travel around the world and are mistaken as dragons.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#1e1c1a] mb-12" />

      {/* Beast Creatures */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Category II</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-8">Beast Creatures</h2>
        <div className="space-y-6">

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Catwolfs</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Hetranian Catwolfs are a genetic species of the ancient Catrelwulfs (In the past, there used to be a population of 500 Catrelwulfs). However, before the extinction of the Catrelwulf, it has blessed its genetic inheritance to future generations of what we call, Catwolfs. Catwolfs nowadays have all 50/50 appearance of a cat and wolf combined, though they can look entirely different because of how fast they adapt to their surroundings.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Direwolves</h3>
            <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="font-body text-xs text-[#c9a84c] hover:underline block mb-3">[click here to view design art!]</Link>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
              Hetranian Direwolves are beast creatures, better known as "beasts." They are regional direwolves (some native to the continent of Varleqe) and they come in two separate species. These are a part of the Beast Kingdom.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-base text-[#f2ebeb] mb-2">Wulfwing Direwolves</h4>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Wulfwing Direwolves are the size of a mini car. They have a stout and tank build, with a fluffy appearance. They have a single horn that sticks out of their head (center upper forehead from the eyes) and they have sharp orange eyes. Their fur color can range from gray, white, black, and blue, and they have diamond-shape patterns as their eyebrows. These patterns can also appear on their tails. Wulfwings are gentle and powerful. Their jaw force is super strong and can lift up to 20 units of force.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base text-[#f2ebeb] mb-2">Coppercrest Direwolves</h4>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                  Coppercrest Direwolves have one distinct feature that differs from Wulfwings. They have a copper-plating armor body that consists of, "copper" that is surrounded by green-tinted fur. This copper-plating are actually their skin, which is built to withstand massive blows. They have blue eyes, the polar opposite of orange. Coppercrest Direwolves can be found everywhere. Coppercrests are powerhouses because of their skin, and some are tamed by Eulerieans in Eulerich for combat and military purposes. Coppercrests are smaller in size than Wulfwings.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Werewolves</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Hetranian Werewolves are a completely different species from direwolves. Werewolves are anamorphic humanoid creatures that can change their appearance slightly to resemble an average wolf. These creatures are both bipedal and quadruped. They can run at insane speeds and jump to high elevations. These werewolves are hostile towards humans, but not other beasts.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Werecats</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Hetraniaen Werecats are cousins of Catwolfs under a similar appearance. Instead, they have features of a vampire, sharp teeth, sharp eyes, and a fur-like coat structure. Werecats only come out at night, and they hate the sunlight. Legend has it that the first werecat got its vampire-like features from its master in the ancient past, who was trying to combine his own genetic code with a Catrelwulf. To much avail, the master successfully turned one of the Catrelwulfs into a Werecat. However, the werecat became hostile to its master and left.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#1e1c1a] mb-12" />

      {/* Dangerous Creatures */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Category III</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-8">Dangerous Creatures</h2>
        <div className="space-y-6">

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Kromocidilians</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Hetranian Kromocidilian are a combination of Komodo Dragons and Crocodiles. Kromocidilians can live both on land and water, and are considered one of the seas' most ferocious creatures. Kromocidilians can't always keep their mouths shut since they like to lure in prey and snack on them like a feast. Kromocidilians are also masters of disguise. This is because their skin pigments can blend in with their surroundings at a fast rate. They can come in many species.
            </p>
            <ul className="space-y-1">
              {['Desertland Kromocidilians', 'Mountainland Kromocidilians', 'Oceanfloor Kromocidilians'].map(s => (
                <li key={s} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Jaglaegers</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Hetranian Jaglaegers are a mixture of Jaguars and Eagles. These Jaglaegers have the head of an eagle and legs and tails of a jaguar with a sharp yellow piercing gaze. They can both run on ground and fly in the air. Jaglaegers can come in regional variants and their fur colors are diverse. Their diet consists of both plants and meat.
            </p>
            <p className="font-body text-xs text-[#7a746e] mb-2">Jaglaegers come in two species:</p>
            <ul className="space-y-1">
              {['Grassland Jaglaegers', 'Forestsky Jaeglaegers'].map(s => (
                <li key={s} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Buffalosaurus(es)</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Buffalosauruses are giant buffalo lizards that can be found in the Eulan Kingdom in Eulerich. They have a rough body and with scales as their skin. However, their necks are made out of fur, since they like to use that area to soak in heat from the sun.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Buffalosaurus Ants</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Buffaolusaurus Ants are giant lizard-like insects. They have the size of a buffalo's body, scales of a lizard, and six legs. Buffaolusaurus Ants are cousins of Buffalosauruses and are found in the Oelen Kingdom in Eulerich. The citizens of Eulerich use Buffaolusaurus Ants as transportation since these ants can carry weights that surpass their mass. You can find these ants in giant caves they have made. They climb walls so watch out!
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#1e1c1a] mb-12" />

      {/* Wildcard Entries */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Category IV</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-8">Wildcard Entries</h2>
        <div className="space-y-6">

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Cloudborn Swans</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              Cloudborn Swans are a default common species throughout the World of Hetra, and their diversity can range to four different species. These swans originate from the Cloud Abode, but they made their way down to Varleqe, Hetrania, Lynneria, Norrane, and Eulerich to further expand their species. They're also somewhat intelligent! These are the current Swan species aside from the current Cloudborn Swans:
            </p>
            <ul className="space-y-1">
              {['Oceancold Swans', 'Mountain Gray Swans', 'Desertland Swans', 'Grassland Swans', 'Icegray Swans'].map(s => (
                <li key={s} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844]">—</span><span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Jellurtle-ortises</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Jellurtle-ortises are a combination of jellyfish, turtles, and tortoises, done and gone wrong (correctly), as a lab experiment by a mad scientist. This scientist was trying to achieve the true impossible, Eternal Immortality, since these three animals contain the same genetic code. Now, seas are overpopulating of Jellurtle-ortises. These make fantastic prey for predators. This is also a very fun tongue-twister!
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">
              <Link to="/world/databases/CreaturesOfTheWorld/Flimpies" className="hover:text-[#c9a84c] transition-colors">Flimpies</Link>
            </h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Flimpies are airborne ghost rabbits (or bunnies) that are common everywhere. They are the ghosts of cursed rabbits that were a result of a genetic mutation back in the old days on Norrane. However, those cursed rabbits were on a ticking time-bomb. Flimpies are native to Norrane. Despite being ghosts, they can be visible during the daytime. Their appearance is quite loving and they mean no harm. Their colors vary throughout the world. Flimpies are currently not tamable due to how wild and elusive they are.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
              The outer glow to the Flimpies allows them to manipulate it, like tendrils that reach out and latch onto objects. This is a small unique ability they use. They can also freely manipulate the charge of the glow to a static like feeling. However, it doesn't affect living beings. Aesthetic purposes.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Strigiocta</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-3">
              A newly discovered species of Octopus-Owls. They have the appearance of an owl and their wings as octopus tendrils (four on each side). These wings both serve as extra limbs and flight, for they are covered in oil-based feathers that work well underwater, on land, and in the air. When on land, those limbs are served as legs and arms for land travelling.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              In the air, they are suctioned together to give flight. Although these creatures are nocturnal sea-dwellers, they are also active in the day. In the day, they hunt on lands for big prey, using their tendrils to bind and choke them to death.
            </p>
            <div className="mt-3 space-y-1">
              {['Plural: Strigiocti', 'When in a pack, they are called Strigioctoks.', 'Baby Strigiocti are called Strigioki.', 'Scientific Grouping: Strigiphapods'].map(s => (
                <p key={s} className="font-body text-xs text-[#7a746e] italic">{s}</p>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Pangolarin Bears</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Pangolarin Bears are a cross-species, genetic mutated animal from Pangolins and Polar Bear breeding. Pangolins no longer exist, for their genetic code has been bred into Polar Bears at an excessive rate. These Pangolarin Bears can survive blizzards and even hailstorms in the Alarctic Alpines. Their fur is completely made of reinforced keratin, which is one of the hardest material in the world (this is what human fingernails are made out of).
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Pyroleos</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Hetranian Pyroleos are Fire Lions that are only exclusive to Varleqe. They are insanely dangerous and are impossible to touch. This is because their fur is heat-based sensitive to their surroundings and that they are constantly active. Pyroleos make it easy to survive in the Winter. Some places in Varleqe can reach below -0 degrees (C/F) and this doesn't even affect Pyroleos because their manes are basically a humongous fireplace.
            </p>
          </div>

          <div className="border-l-2 border-[#2e2b26] pl-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetranian Cranklaenkeys</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Hetranian Cranklaenkeys are crane-like monkeys. They are bipedal creatures, with arms as wings and their feathers as their fingers, with a fully functional tail of a monkey. Cranklaenkeys are avian and land animals, and they sometimes hang out in forests on the continent of Norrane. However, they are super loud and annoying. These annoying creatures also go by a different title, as "Rosemaries."
            </p>
          </div>

        </div>
      </section>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/databases" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
            </div>
          </Link>
                  <Link to="/world/databases/TheNhuemynDB" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">The Nhuemyn Database</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

    </div>
  );
}
