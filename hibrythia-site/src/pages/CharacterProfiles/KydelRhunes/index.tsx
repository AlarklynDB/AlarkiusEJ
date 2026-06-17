import { useState } from 'react';
import { Link } from 'react-router-dom';

function PowerToggle({ title, color = '#c9a84c', children }: { title: string; color?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#131210] hover:bg-[#1a1714] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm" style={{ color }}>{title}</span>
        <span className="text-[#4a4844] text-lg" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>&#8964;</span>
      </button>
      {open && (
        <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

function SubPower({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="space-y-0.5">
      <p className="font-display text-sm text-[#c9a84c]">&#8642; {name}</p>
      <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function KydelRhunes() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Main Protagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Kydel Rhunes</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;(scoffs), me..? You think I&apos;m cute&hellip;? ////// W-well&hellip;if you say so&hellip;&rdquo; &mdash; Kydel, probably.</p>
        </blockquote>
      </div>

      {/* Story Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Story Information</p>
          <p className="font-body text-xs text-[#c9a84c] mb-3">Contains spoilers for Book 1!</p>
          <div className="space-y-1">
            <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Role:</span> Deuteragonist (Second MC)</p>
            <p className="font-body text-sm text-[#c8c2ba]">Wulfwing Direwolf (Race)</p>
            <p className="font-body text-sm text-[#c8c2ba]">Hibryd &amp; Beast Creature</p>
            <p className="font-body text-sm text-[#c8c2ba]">Raeya&apos;s Friend and Partner</p>
            <p className="font-body text-sm text-[#c8c2ba]">Zohl&apos;s Spirit Host Bond</p>
          </div>
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Profile</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Presence:</span> The Entire Series</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Point of Origin:</span> Varleqe</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Character Type:</span> Dynamic</p>
          <p className="font-body text-sm text-[#7a746e] mt-2 italic">The beast himself, Kydel! Let me show you who I am!</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Kydel Rhunes (redesign coming)</p>
      </div>

      {/* Personal Info */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'Birthday', val: 'Zestia 12th, 0856 AD' },
            { label: 'Direwolf Age', val: '1,388 years' },
            { label: 'Human Age', val: '204' },
            { label: 'Appearance Age', val: '20 – 28 (permanent)' },
            { label: 'Birthday Cycle', val: '5 years per increment' },
            { label: 'Gender', val: 'Agender (male appearance)' },
          ].map(({ label, val }) => (
            <div key={label} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-1">{label}</p>
              <p className="font-display text-sm text-[#f2ebeb]">{val}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-1">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Wolf-to-Human Age Conversion</p>
          <p className="font-body text-sm font-mono text-[#7a746e]">16 ln(dog age) + 31 = human age</p>
          <p className="font-body text-sm font-mono text-[#7a746e]">24 ln(1388) + 31 = 204</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Backstory */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Backstory and Origin</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Before having a second sentience awakening by Zohl, Kydel was once a beast citizen of Varleqe, a super-continent home to beasts and mythological creatures. Kydel is a direwolf, a gentle but yet fearsome and powerful being. However, his former home and territory was ransacked by Werebels (killer rabbits), an opposing race that rivals the direwolf race. Through that unfair incident, he sought out a new place, Hetrania, a floating continent in the sky.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          One day, Kydel ventures around Hetrania and stumbles upon a very mysterious cave. Not knowing what would happen, he enters and the cave shuts. He tried to get out but failed. Suddenly, Kydel got attacked by something of the unknown, being dragged across the floor before blacking out. Moments passed and he had woken up, only to be confronted by a spirit named Zohl. Zohl had told Kydel that he now has a new second life, being able to talk and be aware of his surroundings much better.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Later that day, Kydel encountered an Owl named Leon, who clarified some of his questions. Leon, at old age, before passing away, gave Kydel his inheritance, thus along with a few new abilities. Kydel felt as if he was given a new life and a new chance, so he took this opportunity to venture around the globe, making friends along the way. Along his adventures, he encountered a Sylph named Raeya, who he saved from a group of bullies. Raeya and Kydel then became friends, whose bond will become unbreakable throughout their adventures.
        </p>

        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            His Continued Backstory (Toggle Me!)
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Life with his Parents</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Back when Kydel was a direwolf at a young age of a puppy, both of the three would travel around the continent of Varleqe. His mother would give him upmost care and shelter! Whenever they came across dangerous foes, the father would fight. When he was scared, his mom would sing him a sweet tone to help comfort him from the scary noises.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              In 0865 AD, a huge war between both direwolves and killer-rabbits broke out across the continent. The parents decided not to participate in the war, trying not to risk their son to immense dangers. They found a secluded forest and hid there — then danger arrived as their scent was picked up by enemies again. The parents had no choice but to leave their son alone. The mother ripped a huge piece of earthly soil to cover over her son (who was soundly asleep amidst the war). They ran, luring their enemies to a huge gathering of both Wulfwing and Coppercrest Direwolves, resulting in a bloody battle. Eventually, the direwolves won — the parents lived.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              After the war, both parents approached a rather divine altar, where they met Queen Laeyana and Runerus, The Forefather of Direwolves. She bestowed both the parents with human forms and magic powers, naming the father Arzo, and the mother Xyla. Both of them requested that Runerus should look after their son, and he was pleased to do so.
            </p>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2 mt-2">On His Own&hellip;</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Kydel could not survive on his own, so a direwolf by the name Ruefeus (Runerus) took care of him until he grew up with complete abilities. Ruefeus also taught him unique teachings, morals, ethics, and traits about Direwolves and other creatures. Later, when Ruefeus was satisfied with Kydel, he disappeared into the night.
            </p>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2 mt-2">The Year of 2245 AD</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              In the Fifth month of Escael on the 31st Day, Kydel became a young adult wolf. His home was being terrorized by Killer Rabbits again. He won the fight but was left unaware that one was still alive. He sought new land — Hetrania, the floating continent. The next day, he found a very mysterious and mystical cave. Wanting to leave, the entrance shut tightly. A bright, divine-like light attacked Kydel, rendering him unconscious. Moments later, he woke up to only notice that he had gained a second sentience — an awakening from a Spirit named Zohl.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Xyla&apos;s backbone teachings towards Kydel were the foundation of his faith, kindness, and gentleness for life and experiences. And from thereon, both Zohl and Kydel set on an adventure to explore how much the world has to offer.
            </p>
          </div>
        </details>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Appearance */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Set Personality / Human Appearance</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Kydel&apos;s personality is always on the bright and optimistic side. Even though at times he may be sad or unhappy, he doesn&apos;t let those other feelings get in the way, even if it is worth experiencing.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His human form stands around 5&apos;7 in height and has a lean tone build. His hair is playful, sleek, messy, coated with a silver palette. He has a long slick ponytail that hangs from the left side to the front, and a short side-hair-like tail from the right side of his head. He keeps his eyes his Direwolf version, remaining a bright orange color. Although agender, he adopts a male appearance.
        </p>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">&#8642; Attire</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            He wears a navy gray-blue turtleneck. Over it, a cloak-like jacket in a similar navy-like color — with very intricate zigzag designs, some belts, and pockets. Mid-length that reaches to his upper knees, and can be buckled up. He wears dark brown boots with a fantasy-like design.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Four Identities */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'The Social Self', text: "Kydel makes friends all around the world, even animals, beasts, and creatures. He's that social, and since he is a direwolf creature by default, he is always the optimistic and gentle friend. Others who see his beast form will look up to him. Kind and caring." },
            { id: 'The Personal Self', text: "When he's around Raeya and Zohl, this allows him to be vulnerable to them, able to talk about his problems, pressures, and issues. Even if it's just the little things, he will still talk about them, even if it doesn't bug him." },
            { id: 'The Core Self', text: "When Kydel is alone by himself, he's more reserved and authentic. Even when he is not using his powers, he's always wise, knowing what is right and wrong. But sometimes, even in the harshest decisions, he sometimes goes off to the wrong answer but ends up doing the right thing nonetheless." },
            { id: 'The Hidden Self', text: "He dislikes himself for who he is. Despite his great feats and his bright cheery side, the only contrast is that he thinks of himself as a dangerous and powerful direwolf. His final thoughts lead him to think of himself as a monster. His pride and ego bites back at him saying that he's a too powerful creature to exist in this world." },
          ].map(({ id, text }) => (
            <div key={id} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
              <p className="font-display text-sm text-[#c9a84c]">{id}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Possessions */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Possessions</h2>
        <div className="space-y-3">
          {[
            { name: 'Portable Treestone Mansion', desc: 'This item was first purchased during the time Kydel and Raeya went to the Skypeak Obelisk.' },
            { name: 'The Earlywulf Ring', desc: "The Earlywulf Ring is a Spirit Object gifted to Kydel by the ancient spirit, Runerus. This was more of an early gift — an advancement — to Kydel as Runerus declared him a successor of the Direwolf Lineage. He vowed to himself only to use it in case of emergencies or life-threatening threats. First mentioned in Episode 8 — An Early Advancement in Book 1." },
            { name: 'His Engagement Ring (Wedding Ring)', desc: 'A ring that he wears on his right ring finger as a sign of devotion to Raeya.' },
          ].map(({ name, desc }) => (
            <div key={name} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-1">
              <p className="font-display text-sm text-[#f2ebeb]">&#8642; {name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Powers — TOGGLEABLE */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Powers &amp; Sub-Powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Ever since Kydel gained a human form, these are the powers he uses daily in that appearance. The older he gets in raw age, the more experience he gets — age unlocks control and awareness alongside damage. Toggle each power to expand!
        </p>
        <div className="space-y-3 mt-4">

          <PowerToggle title="Morph" color="#c9916c">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The power to take shape of something else. Kydel has used this a few times in his travels. He can also use this power to alter objects, but cannot rearrange technology. This is not a regenerative power — if Kydel loses a limb, he will have to ask Raeya to heal him up.</p>
            <SubPower name="Armament Hardening" desc="This is a sub ability unique to Morph. This allows Kydel to restructure his morphed arms into a dense and durable layer that is stronger than graphene and diamond." />
            <SubPower name="Liquify" desc="Another sub-ability unique to Morph. This allows Kydel to restructure his morphed arms into a stretchy or liquid state." />
          </PowerToggle>

          <PowerToggle title="Restoration" color="#4ade80">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The power and ability to restore an object back into its fresh or previous state, while maintaining its previous quality. This power cannot heal injuries or revive people.</p>
            <SubPower name="Reconstruction" desc="Reconstruct broken terrain of any kind, from earth elements to man-made objects. This can also work on worn out or damaged clothing, broken parts, and more." />
            <SubPower name="Deconstruction" desc="Being able to deconstruct objects back into parts that made up the original object." />
            <SubPower name="Purification" desc="Being able to purify a dirty object. Even works on liquids. Can remove germs, rust, mold and any of the sort on a bacterial level." />
            <SubPower name="Telekemperture" desc="An overlapping power for both Telekinesis and Restoration." />
          </PowerToggle>

          <PowerToggle title="Telekinesis" color="#60a5fa">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The power to telekinetically move objects via mind or gesture by using one's energy signature. Kydel has used this multiple times in the series and is another main form of combat along with Morph.</p>
            <SubPower name="Dual-Kinesis" desc="The use of operating telekinesis at different individualities." />
            <SubPower name="Telekinetic Separation" desc="The ability to have an object float with telekinesis while the user deactivates the power while the object still floats in place. Works well with Dual-kinesis." />
            <SubPower name="Telekinetic Flying" desc="Basically just flying and levitation, through the use of telekinesis." />
            <SubPower name="Telekinetic Air Blade(s)" desc="Slashes of telekinetically charged air blades." />
            <SubPower name="Telekinetic Barrier(s)" desc="A telekinetic shield that can be layered one by one. Can decrease destruction." />
            <SubPower name="Telekinetic Field" desc="Allows objects and energy, along with cosmic energy (in all forms) to orbit around the user. The shape can vary." />
            <SubPower name="Telekinetic Absorption / Conversion" desc="This allows Kydel to absorb different kinds of energy from different kinds of crystals, where each contains different levels of energy, laminar flow, and condensation, also converting energy to something else." />
            <SubPower name="Telekinetic Plasma" desc="Condensed telekinetic energy in the shape of an orb. This can also heat up and melt items." />
            <SubPower name="Telekinetic Helix" desc="Turns telekinetic plasma into a multitude of springs that wrap around the user's arms. Can be used to boost strength power, or be used as whips." />
            <SubPower name="Telekinetic Blast(s)" desc="A plasma blast that can be powered by different power ratios of a blast radius." />
            <SubPower name="Telekinetic Jolt" desc="A taser-like jolt. Its power can vary from 1 (weakest) to 15 (strongest)." />
            <SubPower name="Telekinetic Target(s)" desc="A lock-on telekinetic ability that allows the user to target a specific item or person. This can also grasp an object firmly in place." />
            <SubPower name="Telekinetic Glove(s)" desc="Gloves, but telekinesis. Protects the user's hand(s)." />
            <SubPower name="Telekinetic Stomp" desc="A stomp so great it sends out telekinetic vibrational waves." />
            <SubPower name="Telekemperture" desc="Telekemperture raises the temperature of a moderate heat or cold feeling to a higher or lower variable by controlling the energy that is emitted." />
            <SubPower name="Telekinetic Cloaking" desc="Much like Telekinetic Gloves and Barrier, this protects and covers the user's whole body. Kydel discovers this ability later in his travels when he goes super fast. This power also renders speed-dampening powers ineffective and helps breathe in space and underwater." />
          </PowerToggle>

          <PowerToggle title="Magic Pocket (Bestowed by Zohl)" color="#a78bfa">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">A power that Zohl gave Kydel. This is more of a technical power that uses a pocket dimension as an inventory and storage. Kydel can summon objects from the Magic Pocket by thinking of its name and forming a gap in between his two hands.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The Magic Pocket acts like a pocket dimension untethered from the actual 17 dimensions of reality. Therefore, it has its own systematic control. Time is abundant, but flows at a very slow rate. It looks like a grid inside, much like an inventory display. This dimension is capable of storing living entities. Can be called out by thought or action.</p>
          </PowerToggle>

          <PowerToggle title="Limited Powers (Beast Form Only)" color="#7a746e">
            <SubPower name="Telepathic Voice Projection" desc="This power allows Kydel to project his voice even without moving his mouth. Useful in beast form. However, this power does not carry over to his human form." />
            <SubPower name="Regenerative Healing" desc="This power is an active ability only limited to his beast form. Kydel can regenerate his bruises, wounds, and injuries at excessive speeds. After Kydel got his human form, this power doesn't carry over." />
          </PowerToggle>

          <PowerToggle title="Eruptio Fervor (Unlocked)" color="#f87171">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Eruptio Fervor (known as EF). Its meaning is of <span className="italic text-[#f2ebeb]">intense eruption of emotions or passion</span>. This power that was once locked has been unlocked due to vigorous training. First unlocked in <span className="text-[#c9a84c] italic">Episode 9 — Fever Dream!</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">EF alters Kydel&apos;s direwolf form. His eyes turn orange with a faint black hue. In his beast form, his body faintly glows blue or orange — and will sometimes emit sparks. In his human form, his hair turns silver-blue and similarly emits sparks. This power relies on <span className="text-[#4ade80]">ambition, emotion, and control</span>, much like Raeya&apos;s Infernal Magic.</p>
          </PowerToggle>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Kydel & Raeya */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">His Relationship with Raeya, along with their Powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Kydel Rhunes. The main protagonist of the series. As a Direwolf beast creature, they hold many traits as one would: intelligence, loyalty, versatility, dexterity, and discernment. Direwolves are also very social creatures.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          After he rescued Raeya from her predicament, that was the point where they became friends. Aside from his aloof and social personality, he wants Raeya to grow as a person. And knowing that she has gone through a lot even though she hadn&apos;t told him, makes him care for her even more. Kydel wants to live up to his parents&apos; expectations not just as a direwolf, but as a creature with morality.
        </p>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-sm text-[#c9a84c] leading-relaxed italic">
            &ldquo;Stop listening to those shaming you! You should be proud of who you are! Be brave about yourself despite your insecurities or flaws! This is something that I really like about you! You might be afraid to show them, but from what I see, you are full of wonders! Face your problems head on with bravery and then you can improve yourself!&rdquo; &mdash; Kydel to Raeya
          </p>
        </blockquote>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">When it comes to having Powers&hellip;</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Both Kydel and Raeya know it can be extremely fun to have powers, but also dangerous. Their oaths to each other: not to hurt one another unless it comes to dire situations. They never raise their ego or pride about who is stronger — instead, they praise each other for their strengths and weaknesses. Kydel doesn&apos;t know that Raeya is stronger than him because of Infernal Magic, which triumphs him by 30 fold times.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Kydel&apos;s power, Eruptio Fervor, along with Raeya&apos;s Infernal Magic, rely on <span className="text-[#4ade80]">ambition, emotion, and control</span>. Two sides of the same coin. Both need each other for balance — not just their powers, but their morality.
          </p>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/RaeyaFlutters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Raeya Flutters</p>
          </div>
        </Link>
        <Link to="/characters/ZohlCelestreule" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Zohl Celestreule</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
