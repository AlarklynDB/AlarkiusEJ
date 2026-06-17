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
        <span className="text-[#4a4844] text-lg transition-transform duration-200" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#8964;</span>
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
      <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; {name} &gt;&gt;</p>
      <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function RaeyaFlutters() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Main Protagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Raeya Flutters</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;I&apos;m Raeya! Happy to meet you! I love cute things!&rdquo;</p>
        </blockquote>
      </div>

      {/* Story Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Story Information</p>
          <p className="font-body text-xs text-[#c9a84c] mb-3">Contains spoilers for Book 1!</p>
          <div className="space-y-1">
            <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Role:</span> Tritagonist (Third MC)</p>
            <p className="font-body text-sm text-[#c8c2ba]">Sylph</p>
            <p className="font-body text-sm text-[#c8c2ba]">Kydel&apos;s Friend and Partner</p>
            <p className="font-body text-sm text-[#c8c2ba]">Zohl&apos;s Friend</p>
          </div>
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Profile</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Presence:</span> The Entire Series</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Point of Origin:</span> The Sylphrelm (The Cloud Abode)</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Character Type:</span> Dynamic</p>
          <p className="font-body text-sm text-[#7a746e] mt-2 italic">Let me, Raeya, take you through my profile!</p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Raeya Flutters</p>
      </div>

      {/* Personal Info */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'Birthday', val: 'Zestia 19th, 2032' },
            { label: 'Height', val: "5'5" },
            { label: 'Race', val: 'Sylph' },
            { label: 'Sylph Age', val: '212' },
            { label: 'Appearance Age', val: '20 – 28 (stays the same)' },
            { label: 'Gender', val: 'Female' },
          ].map(({ label, val }) => (
            <div key={label} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-1">{label}</p>
              <p className="font-display text-sm text-[#f2ebeb]">{val}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-1">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Age Formula</p>
          <p className="font-body text-sm text-[#c8c2ba]">Raeya&apos;s real age is 212 sylph years, though she looks in her 20s. Her birthday cycle is five years per age increment.</p>
          <p className="font-body text-sm text-[#7a746e] font-mono">( appearance age - 17 ) * 650 / 17 = overall age - 17</p>
          <p className="font-body text-sm text-[#7a746e] font-mono">( 23 - 17 ) * 650 / 17 = 229 &nbsp;→&nbsp; 229 - 17 = 212</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Backstory */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Backstory and Origin</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Raeya is a Highland Sylph and a friend (and also partner) to Kydel. Bred throughout her past races, Highland Sylphs are a very rare breed. The most common Sylph races are Southwing Sylphs and Sunpike Sylphs. Raeya is shy at first, but once you get to know her and open up to her, she&apos;ll be nothing but energetic, eager, curious, and fun to hang out with. Highland Sylphs are Magic Users and Healers. So if you ever do encounter one, you&apos;ll befriend one of them and they&apos;ll come on adventures with you.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Raeya was rescued by Kydel in the forest next to her hometown, Lenoria. She got caught up with a group of bullies but eventually, Kydel stepped in and ended it. Raeya, who was watching, felt safe, and also fell for Kydel for a bit after being saved and protected by him. She told him she was an inhabitant of Lenoria and they both headed towards the town. They later became friends.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          She&apos;s a strong and diligent Sylph. Sometimes, she can be a klutz and an airhead, but what makes her unique is her compassion for others. Not romantically, but for friendship and bonding. But this later changes in her travels with Kydel. Sylphs can live a very long life and they sometimes match a direwolf&apos;s lifetime.
        </p>

        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            Her Continued Backstory (toggle me!)
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Her Life on The Cloud Abode, aka, Sylphrelm</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              She originally came from The Cloud Abode, known as The Sylphrelm. Growing up, her hidden secret lineage of being a Highland Sylph was talked amongst her peers and neighbors, and she hated how harshly they talked behind her back. She grew up under the care of a compassionate dryad, ever since her parents were killed by elves. The moral rule all the sylphs in that realm came to a conclusion: do not interact with elves. It will result in many different consequences, like death and other vile methods of punishment. It was also then where cross-breeding between different sylph races happened.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              When she found out her parents were killed, she went into a dark pit of self loathing, where her fears of Autophobia and Anthropophobia kicked in. She couldn&apos;t come out of her shell, even when people who knew her cared for her.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              After the Dryad noticed her wails of despair, she took her in. She was nurtured, educated, and properly felt love and kindness to the one who took care of her. This was something that Raeya wanted to cling to, even if it means finding a partner. Raeya believes that kindness and compassion should come first, rather than greed, control and of the sort.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              However, her empathetic kindness is a weak spot, where she can easily be taken advantage of. When she got older, her dryad-mother figure told her to go down to Midtheltra to explore the world, see what it has to offer. There, she came across a town named Lenoria, where the people there were extremely kind and nice, which had a very nostalgic atmosphere. It reminded her of the love the dryad gave her, and so, she roughly stayed there for four to five years.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              But after a while, when it became the year of 2245, a rather troublesome group caused troubles in the town where she was staying. She tried to defend her home and the people who took care of her, but instead, her kindness was taken advantage of when a group of bullies beat her up. They ended up throwing her into a secluded portion of forest. When all hopes were lost, a beacon of flame lit up and saved her from her predicament.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              It was Kydel who stepped up in line, recognizing the right and the wrong, along with the ways of a fool, and the heart of a poor. He had saved her from the troublesome group, and that was when he reached his hand out to help Raeya in her time of need. She saw this as another act of kindness and grace — not even that but something even greater, a fruit and trait of bravery and compassion. This act alone from Kydel pulled her out from her rabbit hole, and she clung onto his kindness. That was also after he held his hand out for her, she developed feelings for him.
            </p>
          </div>
        </details>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Four Identities */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Identities that make her character round and dynamic!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              id: 'Social Self',
              text: "She's shy and timid at first, but once you get to know her, she will open up and become happy and energetic. She's sometimes a klutz, but when she is most needed, she will be there no matter the cause. Her extroversion after opening up is like a golden retriever, nothing but pure bliss! The people around her look up to her extraversion for how friendly she is.",
            },
            {
              id: 'Personal Self',
              text: "Whenever she's near her partner Kydel, or her friends, like Zohl, she feels relieved to be around them. She's able to talk and voice her concerns, look out for another, and also lowering her guard around them. Specifically, Kydel, because once he proposed to her to become his partner and wife, she felt nothing more than happiness.",
            },
            {
              id: 'Core Self',
              text: "Her authenticity to herself sometimes scares her, because when she's alone, she will always hold her guard up, no matter what happens to her when she's left alone. That sometimes excludes when she wants to be left alone, thinking in her thoughts about her actions or behavior. Thinking too much will make her brain go fuzzy, airless, thus, the \"klutz\" around her friends.",
            },
            {
              id: 'Hidden Self',
              text: "A Healer and Comforter. Her kindness and empathy towards others bring more than just joy. She expresses her sentiment through various methods, like bantering, offering friendship, and just being curious about others. She's a Sylph, and sylph species are known to calm people down since they possess a wide range of healing and tranquil abilities. However, this all comes to an act — an act of love.",
            },
          ].map(({ id, text }) => (
            <div key={id} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
              <p className="font-display text-sm text-[#c9a84c]">{id}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Enhanced Senses */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Enhanced Senses &amp; Physical Abilities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Enhanced Physical Abilities that allow Raeya to navigate around the World of Hetra. These senses and abilities are heightened when they gain powers from external sources, or are born with them. Circumstances range, but given their surroundings, they need to learn how to adapt and overcome them!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'Hyper Speed', desc: "Being able to go at fast speeds. However, a Sylph's max speed is at Mach 1." },
            { name: 'Hyper Strength', desc: 'Super immense strength.' },
            { name: 'Enhanced Vision / Aura Perception', desc: "Can see objects from far away, even at great distances. Raeya's eyes also have the ability to perceive auras." },
            { name: 'Enhanced Hearing', desc: 'Able to perceive sounds a normal human cannot hear.' },
            { name: 'Reflex Timing', desc: 'Being able to dodge incoming objects at great speed.' },
          ].map(({ name, desc }) => (
            <div key={name} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4 space-y-1">
              <p className="font-display text-sm text-[#f2ebeb]">&#8642; {name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Powers — TOGGLEABLE */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Supernatural Powers &amp; Sub-powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The power of influencing the course of events by using a mysterious or supernatural force. Raeya&apos;s magic comes in four types with their unique sub-abilities. The older she gets in raw age, the more experience Raeya gets — age unlocks control and awareness alongside damage. Toggle each header to view more!
        </p>

        <div className="space-y-3 mt-4">

          <PowerToggle title="General Magic">
            <SubPower name="Magic Pocket" desc="The power and ability to store items in a space-like pocket dimension. Much like Kydel's Magic Pocket ability, she can also go into it and store live beings." />
            <SubPower name="Size Augmentation" desc="The ability to change one's physical height or size to a bigger or smaller proportion. This is a default power to all sylphs. Even if she's a smaller size, she can still pack a blow and punch." />
            <SubPower name="Spell Augmentation" desc="A magic spell that was taught by a clerk that allows Raeya to resize their portable treehouse the duo bought when they visited the Skypeak Obelisk." />
            <SubPower name="Magical-inesis" desc="Much like telekinesis, it relies on the use of magical properties. This can be used to bind spells." />
            <SubPower name="Magic Library Arsenal" desc="Chants and spells that the user can use to generate different kinds of magic. She can either speak it or visualize it. She can create new spells with the power of imagination. Includes: Preamplification Spells, Strength/Boosting Spells, Summoning Spells (summons mini helpers), and Compartmentation (makes appliances operate without electricity). Can also nullify psionic/psychic energy including all kinds of mind control." />
          </PowerToggle>

          <PowerToggle title="Sylph Magic" color="#60a5fa">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Sylph Magic is one of Raeya&apos;s default magic abilities — powers that all sylphs have. This type of magic has two sets: Healing Magic and Tranquil Magic.</p>
            <div className="pt-2 space-y-2">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Healing Magic</p>
              <SubPower name="Mystic Healing" desc="Healing through the use of magical properties that come instantaneously." />
              <SubPower name="Timed Healing" desc="The power to heal someone using a duration of time. Can work even if the user deactivates the power." />
            </div>
            <div className="pt-2 space-y-2">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Tranquil Magic</p>
              <SubPower name="Disable" desc="A form of Tranquilization. This sub-power calms down one's heart rate and stuns them, disallowing them to move until the user deactivates this power. However, they can still perceive sounds and speak." />
              <SubPower name="Fairy Lullaby" desc="A soft, gentle hum that can put someone to sleep through a timed duration. The lullaby can be short or long." />
              <SubPower name="Soothe Touch" desc="The power to calm down a raging beast or person. This can also work if the user has a very fast heart rate." />
              <SubPower name="Soothe Snap" desc="The power to instantaneously put someone to sleep with the use of a snap or render them unconscious." />
            </div>
          </PowerToggle>

          <PowerToggle title="Combat Magic" color="#facc15">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">One of Raeya&apos;s many forms of magic. Combat Magic specializes in offense for dealing blows to opponents.</p>
            <SubPower name="Magic Library" desc="Chants and spells that the user can use to generate different kinds of magic. She can either speak it or visualize it. She can create new spells with the power of imagination (also a part of general use)." />
            <SubPower name="Magic Blast" desc="Forms of blasts and explosions emitted from the user's hand at a distance." />
            <SubPower name="Magic Blades" desc="Magic blades that the user forms from the hand or arm movement." />
            <SubPower name="Magic Mindmelt" desc="A magical psychic ability that allows the user to tap into another's mind and cause migraines and excessive headaches." />
            <SubPower name="Magic Helix" desc="Magic Helix that bounds and wraps around the arm of the user. This strengthens punching." />
          </PowerToggle>

          <PowerToggle title="Infernal Magic" color="#f87171">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">A Set of Magic that Raeya hastily took from Queen Laeyana, The Goddess of Magic during her stay in the Divine Realm before she was revived. Infernal Magic is one of Raeya&apos;s strongest types of combat magic. It changes Raeya&apos;s appearance, with both eye colors of dark red and blood streaks underneath her eyes (before mastery). Infernal Magic boosts her magic powers by 30 times, including itself, along with her enhanced abilities.</p>
            <SubPower name="Astral Drag" desc="This allows the user to drag the astral soul of a being out of the body of an opponent." />
            <SubPower name="Blindsight" desc="This hinders the opponent's eyesight, blurry, and potentially blind for the rest of their life." />
            <SubPower name="Blood Control" desc="A next-level power that allows the user to control the opponent's blood and make it boil from the inside." />
            <SubPower name="Blood Rage" desc="A magic that consumes the user's ambitions and lets them take control of whatever bloodlust emotion they have. This can appear as a side-effect and can randomly pop up at times. When in the state of Blood Rage, the user's vision gets obfuscated and becomes half-unconscious, disabling them to see. However, they can hear and move normally." />
            <SubPower name="Leeching Shade" desc="This drains the life force of an opponent up to 10 years." />
            <SubPower name="Illusionist" desc="The ability to cast real, lifelike illusions to confuse others." />
            <SubPower name="Phantom Blades" desc="Blades that are formed with the reaping souls of ghosts. They deal damage and can inflict curses onto opponents." />
            <SubPower name="Phantom Maelstrom" desc="A type of magic that consumes living souls of the dead. This turns dead souls into poison spikes that rush in storms and torrents. This can cause the opponent to suffer from poisoning and potentially shorten their life-span." />
            <div className="pt-2 border-t border-[#2e2b26]">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After the huge consumption of energy and power for Infernal Magic, this will render the user immobile for an hour if trained correctly. If not, this will render the user immobile for a day. Raeya now has complete mastery and control over this magic as of <span className="text-[#c9a84c] italic">Hibryds I — A Grand Voyage, EP 13 — Mastery.</span></p>
            </div>
          </PowerToggle>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Raeya & Kydel Balance of Powers */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Raeya &amp; Kydel&apos;s Balance of Power(s)</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed">How they interact with each other, learn and grow</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          When she first met Kydel when he rescued her from the unwanted group of bullies (in EP 4 of Book 1), she clung onto his kindness for a long time. But, she knew that relying just on this is not a good idea. Taking an emotion for granted that is both equally important to her and her friend will not only result in a relationship that will cause pain, but also no room for growth.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          However, even though she was the damsel in distress back then, she was mentally unstable, whether or not she wanted to live or not. That was because she had this overwhelming guilt, not just being a Highland Sylph, but also not being able to stand up for herself. When Kydel stepped in and offered his kindness when all hope was lost, she looked up and saw him as a role model at first sight (and crush after).
        </p>
        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            Read more&hellip; (toggle me!)
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Later down the road in their adventures, Raeya had confessed her feelings to Kydel, making them friends to partners. After some fun adventures of battling, visiting sceneries, and more, the two decided to take a break in one of the world&apos;s most famous attractions: The Skypeak Obelisk. It was right then when Raeya showed her true colors. With the pent up guilt she had kept to herself, she wept in front of her friend, exposing her emotions. Kydel saw her with her hair down and he thought it was beautiful.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Raeya says that having long hair is what led to people talking back against her — not just being a Highland Sylph. It was a distraction; too sparkly and too long. Even when she cut it to back length, they would still talk back against her.
            </p>
            <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-relaxed italic">
                &ldquo;Stop listening to those shaming you! You should be proud of who you are! Be brave about yourself despite your insecurities or flaws! This is something that I really like about you! You might be afraid to show them, but from what I see, you are full of wonders!&rdquo; — Kydel to Raeya
              </p>
            </blockquote>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He reminded her to stand up for her insecurities and face her problems head on with bravery. After he reassured her, it was at this moment Raeya promised to herself to do better, be better, and be herself! From thereon, she aims to improve herself more, learning more about her limitations, and her strengths — bonding with Kydel, who is someone she trusts and cares about.
            </p>
          </div>
        </details>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">When it comes to having Powers&hellip;</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Both Raeya and Kydel know it can be a lot of fun, but also dangerous. They vow to never hurt each other unless it comes to dire situations. Both of them can match each other in strength. But in terms of raw strength, Raeya comes out on top because her Infernal Magic is much stronger than Kydel&apos;s Eruptio Fervor. However, they never use their powers to take advantage of one another.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Both their powers — Kydel&apos;s Eruptio Fervor and Raeya&apos;s Infernal Magic — rely on <span className="text-[#4ade80]">ambition, emotion, and control</span>. Two sides of the same coin. Both need each other, not just their powers but their morality, to help balance their sense of humanity and their support for each other.
          </p>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Characters</p>
          </div>
        </Link>
        <Link to="/characters/KydelRhunes" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Kydel Rhunes</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
