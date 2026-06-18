import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── PowerToggle Component ──────────────────────────────────────────────────────
interface PowerToggleProps {
  title: string;
  children: React.ReactNode;
}

function PowerToggle({ title, children }: PowerToggleProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors text-left"
      >
        <span className="font-display text-base text-[#f2ebeb]">{title}</span>
        <span className="text-[#c9a84c] text-sm ml-4">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#111009] space-y-3 border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
}

// ── TrumpCard Component ────────────────────────────────────────────────────────
interface TrumpCardProps {
  name: string;
  children: React.ReactNode;
}

function TrumpCard({ name, children }: TrumpCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#c9a84c]/30 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors text-left"
      >
        <span className="font-display text-base text-[#c9a84c]">{name}</span>
        <span className="text-[#c9a84c] text-sm ml-4">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#111009] space-y-2 border-t border-[#c9a84c]/20">
          {children}
        </div>
      )}
    </div>
  );
}

// ── SubPower Row ───────────────────────────────────────────────────────────────
interface SubPowerProps {
  name: string;
  desc: string;
}

function SubPower({ name, desc }: SubPowerProps) {
  return (
    <div className="space-y-1">
      <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; {name} &gt;&gt;</p>
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function QueenRachnaea() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Header ── */}
      <div>
        <p className="font-display text-sm text-[#c9a84c] uppercase tracking-widest mb-2">
          The Hibrythian Saga &mdash; Antagonist
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Queen Rachnaea
        </h1>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] leading-relaxed">
          &ldquo;The flame from my Heart will never die, because I won&apos;t let it!&rdquo; &mdash; Rachnaea
        </blockquote>
      </div>

      {/* ── Story Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Information</h2>
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-3 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p className="text-[#c9a84c] text-sm italic">Information on this page contains Spoilers for Book 1! New Info for Book 2 will be released soon!</p>
          <p>Character Information, Backstories, and Origin about Queen Rachnaea.</p>
          <div className="pt-2 space-y-2">
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Story Role</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Main Antagonist in &ldquo;Hibryds &mdash; A Grand Voyage&rdquo; (Book 1)</li>
                <li>Fourth Protagonist in &ldquo;Hibryds &mdash; The Entity of Doubt&rdquo; (Book 2)</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Story Presence</p>
              <ul className="list-disc list-inside space-y-1">
                <li>In Episode 10 of Book 1 (&ldquo;A Battle of Conflicts&rdquo;), she was killed after a brutal battle.</li>
                <li>In Hibryds II &mdash; She was revived for Main Story Plot (and onwards)</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Character Type</p>
              <p>Round</p>
            </div>
          </div>
          <p className="italic text-[#c9a84c]">Wanna dive into my profile?! Let me, Rachnaea, guide you!</p>
        </div>
      </div>

      {/* ── Image 1 Placeholder — Queen Rachnaea ── */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4540]">[ Image &mdash; Queen Rachnaea ]</p>
      </div>

      {/* ── Original Backstory ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Original Backstory</h2>
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Before the Happening of Queen Rachnaea</h3>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Before a life that was given full awakening, Rachnaea was once a beast creature, a demon witch, that lived by her own standards. In her prime days, she lived on the supercontinent of Varleqe, and she was a kind of a lesser demon that could evolve into a Demon Witch. She has a bewildering and stunning hourglass figure and wears gold-like bronze armor. She has two horns that stick out of her ears and pink-like horns as ears.</p>
          <p className="text-[#6b6560] italic">(Around this time, Demons are classified as Rank 1. No. 2 within the Beast Hierarchy System, as the possess power like no other)</p>
          <p>Even as a demon, they give a lot of attitude and sass, because all demons have some sort of similar trait. For Rachnaea though, she gives the most sassy and nasty behavior, long with a very short control of temper and anger. Even the little most things will make her become ill-tempered, and she does not like rules. Everything has to go into her exact order. She has a hunger for power and strives to stay among the sub-ranks of No.2 because demons themselves also compete for power and ranking.</p>
          <p>She was created in the year of 0055 AD from the demon grandfather, Khalfvyskov, on the Fifth Month of Escael, on the 5th Day. Demons in this world like the number 5 in iteration and sequence. 05/05/0055 AD.</p>
          <p>Her current age as of current year of 2245 is of 79,981 days old (2190 years).</p>
        </div>
      </div>

      {/* ── Naele's Intervention ── */}
      <div>
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Naele&apos;s Intervention (From Book 1)</h3>
        <h3 className="font-display text-sm text-[#c9a84c] mb-4">Rachnaea, The Rogue Hibryd</h3>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>After all hell broke loose on a neighboring continent called Hetrania, Zohl&apos;s rogue clone named Naele fled and flew to Varleqe. It was at this point he found a creature to his liking without caution and merged with it. But little did he know, he became one with a demon, which was Rachnaea. He tried to escape but couldn&apos;t due to her huge influence over control. He was forced to allow her to speak, and he had no choice to submit to her greedy nature. It was also during this time he gave her the ability to converse in English.</p>
          <p>As this happened, Zohl was trying to track down Naele, only to be surprised that Naele was working with Rachnaea, forcibly. He wanted help, asking to flee from the witch, but Zohl had doubts even when fighting the witch. She manipulated Naele&apos;s energy and took it as her own, only to make him suffer even more.</p>
          <p>When Zohl and his group fought her, the bond within Naele and Rachnaea was too powerful to cut down. Not only her power was stronger than the group, her grip and willpower of greed was too much for Naele, along with Zohl&apos;s team. So they had to retreat back to their hideout, to find a plan to take down Rachnaea.</p>
        </div>

        <p className="font-display text-sm text-[#6b6560] mt-8 mb-4">Sometime later&hellip;.</p>

        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>She laid siege on a town called Amberwick, which is said to house powerful mage books from the ancient past. Upon studying those books in an underground ruin, she taught herself the ability to use magic, and also, witchcraft. With more insane powers, she can negate magic attacks of any kind from any magic based opponent. During the studying of magic, she found herself a pink-gradient bone like crown and wore it on her head, which signifies her as &ldquo;Queen.&rdquo;</p>
          <p>Amberwick is a name of a town on the Continent of Lynneria. She only seiged that town and nowhere else because of the ancient magic texts.</p>
          <p>After her success with magic and witchcraft, she later caused bloodshed, having the Amberieans do slave work for her. People inferior, or if they do bad stuff or rebel against her, will get slaughtered. She uses those blood to later evolve into a full Demon Witch</p>
          <p>Queen Rachnaea, now with her newfound powers, decided it was best to ramp up the siege in the continent of Lynneria. There were many waves of sieges throughout decades and eons. She summoned her minions and sieged the town, taking control. Every citizen there was made a slave, including the mayor of the town.</p>
          <p>Almost all the newborns and children had to acclimate to Rachnaea&apos;s order.</p>
          <p>This has been going on for years, decades, and even centuries. With the amount of bloodshed even prior to her evolution into a Full Demon Witch, she grew more in power. And during that time, she saw Naele as inferior and leeched his power from him even more, with him trying to survive. An abusive authority over power between her and Naele, sparked huge controversies with each other. However, Naele could not comprehend Rachnaea&apos;s full demon authority, and he had to succumb to it.</p>
          <p>When the year of 2245 came, Rachnaea sensed a chilling powerful enemy far out. She thought she was the only one gained with power and divine gifts, but she was wrong.</p>
          <p>To who was that foe of Rachnaea? That foe, so to say, is Kydel. As his presence moved around everywhere, every beast could sense it, including Rachnaea, from miles away. When Kydel heard of the disturbance of Rachnaea&apos;s siege from the city of Grelladore (in Nharvenile), he decided it was time to take on an opponent in Amberwick, which was her. With Rachnaea awaiting for Kydel&apos;s arrival, she was nervous and afraid. She wanted to flee, but she couldn&apos;t. Once Kydel arrived at the devastated look of Amberwick, he questioned Rachnaea before they battled. Kydel emerged victorious, killing Rachnaea.</p>
          <p>However, this all changed when a certain someone offered her a better life later down the road after her &ldquo;revival.&rdquo;</p>
        </div>
      </div>

      {/* ── Static Personality ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Her Static Personality</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Rachnaea is a sassy, cunning, and a devilish demon. She holds her pride up high and will not allow others to bring her down. She is hungry for power and will do anything to gain immense entitlement, either through bloodshed or worse. Her hunger for power and to remain the most powerful creature stays the same.</p>
          <p>Rachnaea has a human appearance, but she doesn&apos;t use it as often. She only uses it if she wants to blend in with actual humans to go shop or steal items from stores or big name brands. When she is in her human form, her appearance age is at 30.</p>
        </div>
      </div>

      {/* ── Four Identities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Her Four Identities</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Social Self</p>
            <p>To other demons and creatures alike, she&apos;s very hot tempered and easy to anger. Even the littlest of things will make her all noisy and loud. Put a mosquito in her vicinity, she&apos;ll try and kill it. Dogs barking at her? She&apos;ll bark back! Being noisy and annoying? She will do the same. Rachnaea will mimic your attitude in the best way possible to get back at you.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Personal Self</p>
            <p>She doesn&apos;t have friends and is alone, despite having minions doing work for her. She feels inadequate and a loser because of her hostile personality towards other demons, along with nhuemyns.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Core Self</p>
            <p>Having studied magic, she has gained the knowledge to turn into a human where she can fit in with others. She does this so she can go shopping for materials or food. Rachnaea knows having to make siege requires money, thus, she goes about in her human form and shops for strange&hellip;..items. People who notice her alluring laidback presence will always ask her to repair their rooftiles or help build. Because of this soft and heart-warming quality that humans give off, she was slightly influenced, which made her a little fond of them. Her human name is Neah.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Hidden Self</p>
            <p>All the power that she gained herself isn&apos;t enough, and deep down, she wanted to stop this despite having a life full of ridiculousness. At the end of the day, she has a very soft personality and her understanding of humanity made her mature her mind. She wants change.</p>
          </div>
        </div>
      </div>

      {/* ── Image 2 Placeholder — The Demon Witch ── */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4540]">[ Image &mdash; The Demon Witch Queen Rachnaea ]</p>
      </div>

      {/* ── Post Hibryd Appearance ── */}
      <div>
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Post Hibryd Appearance</h3>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">During her siege on Amberwick decades and decades ago, she was able finally to evolve into a full Demon Witch, which gave her the ability to fly at extraordinary speeds. Her strength becomes stronger than before, in which she also gains unfathomable power, not just from Naele who helped her gain hindsight about the world.</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">In this form, she can fly up to the thermosphere. Any point beyond that, her wings will freeze due to the cold air, making gravity do the work.</p>
      </div>

      {/* ── Abilities and Powers (Pre-Naele) ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Abilities and Powers (Pre-Naele)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">Before Rachnaea had a second awakening with Naele, these were her original powers.</p>

        <div className="space-y-3">
          <PowerToggle title="Beast Abilities">
            <div className="space-y-3">
              <SubPower name="Super Strength" desc="Immense strength" />
              <SubPower name="Super Speed" desc="immense speed" />
              <SubPower name="Hyper-boost" desc="an ability to jump around obstacles that are higher than a building." />
            </div>
          </PowerToggle>

          <PowerToggle title="Morph">
            <div className="space-y-2">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to take form as something else.</p>
              <p className="font-display text-sm text-[#f2ebeb] mt-2 mb-1">Forms of Morph</p>
              <SubPower name="Armament Hardening" desc="allows Rachnaea's morphed features to become sharpened, efficient, and durable" />
            </div>
          </PowerToggle>

          <PowerToggle title="Magic and Witchcraft">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Magic learnt in the Ruins of Amberwick, along with Witchcraft. Rachnaea can use this ability to negate other magic-type combats from opponents who uses different types of magic.</p>
          </PowerToggle>

          <PowerToggle title="Pyrokinesis">
            <div className="space-y-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Well, she is a demon. Demons breathe fire and shoot fire. What else is there? lol</p>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Forms of Pyrokinesis</p>
              <SubPower name="Fire Bullets" desc="a consecutive burst of fire, thrown or spit repeatedly" />
              <SubPower name="Fire Ball" desc="Fire breathed onto the hand and thrown at a target far away." />
              <SubPower name="Incinerate" desc={'Close to the move, "Fire Ball," but this move can only be used once.'} />
              <SubPower name="Flamethrower" desc="fire hurled from the breath of the user." />
              <SubPower name="Overheat" desc="Uses the user's body heat to generate a massive heatwave." />
              <SubPower name="Eruption" desc="fire-fueled with anger and rage, once hit at climax, will erupt." />
              <SubPower name="Flight Manipulation" desc="When in the air without the use of wings or not, fire can be used as an alternate way for flight" />
            </div>
          </PowerToggle>
        </div>
      </div>

      {/* ── Abilities and Powers w/ Naele ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Abilities and Powers w/ Naele</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">When Rachnaea was teaming with Naele, these are the powers she had.</p>

        {/* Enhanced Abilities */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Enhanced Abilities</h3>
        <div className="space-y-3 mb-8">
          <PowerToggle title="Hyper Reflex Tension">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to react quickly with incoming objects or powers.</p>
          </PowerToggle>
          <PowerToggle title="Hyper Strength">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">immense strength</p>
          </PowerToggle>
          <PowerToggle title="Hyper Speed">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to run at immense speeds</p>
          </PowerToggle>
          <PowerToggle title="Enhanced Senses">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Sight, Hearing, Touch, Taste, Smell, and Clairvoyance are greatly enhanced</p>
          </PowerToggle>
        </div>

        {/* Powers */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Powers</h3>
        <div className="space-y-3">
          <PowerToggle title="Morph">
            <div className="space-y-2">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to take form as something else.</p>
              <p className="font-display text-sm text-[#f2ebeb] mt-2 mb-1">Forms of Morph</p>
              <SubPower name="Armament Hardening" desc="allows morphed features to become sharpened, efficient, and durable" />
            </div>
          </PowerToggle>

          <PowerToggle title="Energy Manipulation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The manipulation of energy in different forms. This acts as a catalyst.</p>
          </PowerToggle>

          <PowerToggle title="Seismic Grip">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">When activated, it shows a dark, shadowy figure of a hand for a grip, which can inflict damage.</p>
          </PowerToggle>

          <PowerToggle title="Magic and Witchcraft">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Magic learnt in the Ruins of Amberwick, along with Witchcraft. Rachnaea can use this ability to negate other magic-type combats from opponents who uses different types of magic.</p>
          </PowerToggle>

          <PowerToggle title="Hyper-Pyrokinesis">
            <div className="space-y-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Well, she is a demon. Demons breathe fire and shoot fire. What else is there? Fire Manipulation. This type of power was enhanced by Naele that fits Rachnaea&apos;s control over fire.</p>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Forms of Hyper-Pyrokinesis</p>
              <SubPower name="Firespikes" desc="a consecutive burst of fire, thrown or spit repeatedly, as point arrows." />
              <SubPower name="Gigaton Firefist" desc="A fully formed fist with fire that hurts and weighs tons upon impact." />
              <SubPower name="Xross Incinerate" desc="In the form of a cross, the user hurls out fire that incinerates foes by vaporizing their clothing." />
              <SubPower name="Flamethrower" desc="fire hurled from the breath of the user or from their hands." />
              <SubPower name="Firebalm Acidizer" desc="Acid Fire that is used to scorch or melt dense materials. When used on organic, this will cause 5 degree burns." />
              <SubPower name="Purple Firestorm" desc="This creates a purple firestorm that surrounds the user as a protectant against debris that flies up." />
              <SubPower name="Plasma Lightning Whips" desc="Condensed fire energy, in the form of a whip. It's like siting in an electric chair full of 500 watts." />
              <SubPower name="Explosive Acid Splash" desc="Fire-Condensed acid added with a mixture of gunpowder and sodium (highly reactive when hit with air)" />
            </div>
          </PowerToggle>
        </div>

        {/* Trump Card */}
        <div className="mt-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Trump Card</h3>
          <TrumpCard name="Flaming Inferno Hellspike">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Colors of blue, purple and red fire compiled into a single, massive, sphere entity. This causes sharp-fire like spikes to rain down from the sphere within the target of radius. This causes a 20 degree burn and inflicts poison damage</p>
          </TrumpCard>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2e2b26]">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">However, after she was killed, she had kept these powers after Naele disintegrated into thin air, because of her overwhelming authority and control over energy and power. Rachnaea hasn&apos;t even tapped into her full potential yet. She held back strictly (unaware) when she fought Zohl, Raeya, and Kydel, because deep down, she wanted this cycle of hatred to end. But instead, she ignored that.</p>
        </div>
      </div>

      {/* ── Weaknesses ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Weaknesses</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Rachnaea has three weaknesses. Two of them are easy enough to exploit and one is a bit harder, but exploitable.</p>
          <p>One of them is her tail. Rachnaea&apos;s tail is sensitive to touch and is fragile against ice. Although she hides it in plain sight, it still makes her vulnerable if someone approaches her from behind and tries to subdue her. When her tail is exposed or touched by bare hands, her body aches and contracts for around five minutes, disabling her movements.</p>
          <p>The second weakness of Rachnaea are her wings. Ice is one of the weaknesses when it comes to flying. There is a twist to this though. If she gets hit with <span className="text-[#f2ebeb]">Ice</span>, she cannot fly, at all.</p>
          <p>The third weakness of all, which is the hardest one to achieve in defeating Rachnaea is.....Naele.</p>
          <p>Naele is a spirit host, bound to Rachnaea, also a clone of Zohl. In order to defeat Rachnaea, Naele needs to be separated from her, through the help of Zohl. Rachnaea states that she is defenseless and powerless if Naele is not there with her. Although she was defeated by Kydel later and after the death of Naele, she kept these powers because of her level of authority over energy signatures, which later become one with her.</p>
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/EienelTheCosmicIfrit" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Eienel, The Cosmic Ifrit</p>
          </div>
        </Link>
        <Link to="/characters/EphelTheMoonbel" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Ephel The Moonbel</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
