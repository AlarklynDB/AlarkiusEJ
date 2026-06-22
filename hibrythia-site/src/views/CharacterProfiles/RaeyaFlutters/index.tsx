import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [visible, setVisible] = React.useState(false);

  // Fade in on mount
  React.useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Lock body scroll while open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      style={{ zIndex: 9999, backgroundColor: `rgba(0,0,0,${visible ? 0.92 : 0})`, transition: 'background-color 200ms ease' }}
      onClick={handleClose}
    >
      {/* Close button — inside the overlay, top-right corner, same z level */}
      <button
        onClick={handleClose}
        className="absolute top-3 right-4 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-base leading-none"
        aria-label="Close"
        style={{ zIndex: 10000 }}
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-2xl object-contain"
        style={{
          maxWidth: '95vw',
          maxHeight: '95vh',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 200ms ease, transform 200ms ease',
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

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
          <p className="font-body text-xs text-[#c9a84c] mb-3">Information on this page contains Spoilers for Book 1!</p>
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

      {/* Image — Raeya Flutters */}
      <div
        className="w-full rounded-xl overflow-hidden border border-[#2e2b26] cursor-zoom-in group relative"
        onClick={() => setLightbox({ src: 'https://i.ibb.co/QvRJCqRb/Raeya-Flutters-NEW.png', alt: 'Raeya Flutters' })}
      >
        <img
          src="https://i.ibb.co/QvRJCqRb/Raeya-Flutters-NEW.png"
          alt="Raeya Flutters"
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-body text-xs text-white tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full">Click to expand</span>
        </div>
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
            { label: 'Appearance Age', val: '20 - 28 (it stays the same)' },
            { label: 'Gender', val: 'Female' },
          ].map(({ label, val }) => (
            <div key={label} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-1">{label}</p>
              <p className="font-display text-sm text-[#f2ebeb]">{val}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Raeya&apos;s real age is at 212 sylph years, although she looks like she&apos;s in her 20s due to her appearance. Her birthday cycle is a duration of five years before she can reach her next age.</p>
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mt-3 mb-1">The Formula and Math</p>
          <p className="font-body text-sm text-[#7a746e] font-mono">( appearance age - 17 ) * 650 / 17 = overall age - 17</p>
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mt-2 mb-1">Calculation</p>
          <p className="font-body text-sm text-[#7a746e] font-mono">( 23 - 17 ) * 650 / 17 = 229</p>
          <p className="font-body text-sm text-[#7a746e] font-mono">229 - 17 = 212</p>
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
          She&apos;s a strong and diligent Sylph. Sometimes, she can be a klutz and an airhead, but what makes her unique is her compassion for others. Not romantically, but for friendship and bonding. But this later changes in her travels with Kydel.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Sylphs can live a very long life and they sometimes match a direwolves&apos; lifetime.</p>

        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            Her Continued Backstory (Toggle me!)
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Her Life on The Cloud Abode, aka, Sylphrelm</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              She originally came from The Cloud Abode, known as The Sylphrelm. Growing up, her hidden secret lineage of being a Highland Sylph was talked amongst her peers and neighbors, and she hated how harshly they talked behind her back. She grew up under the care of a compassionate dryad, ever since her parents were killed by elves. The moral rule all the sylphs in that realm came to a conclusion: <em>do not interact with elves</em>. It will result in many different consequences, like death and other vile methods of punishment. It was also then where cross-breeding between different sylph races happened.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              When she found out her parents were killed, she went into a dark pit of self loathing, where her fears of Autophobia and Anthropophobia kicked in. She couldn&apos;t come out of her shell, even when people who knew her cared for her.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              After the Dryad noticed her wails of despair, she took her in. She was nurtured, educated, and properly felt love and kindness to the one who took care of her. This was something that Raeya wanted to cling to, even if it means finding a partner. Raeya believes that kindness and compassion should come first, rather than greed, control and of the sort.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              However, her empathetic kindness is a weak spot, where she can easily take advantage of. When she got older, her dryad-mother figure told her to go down to Midtheltra to explore the world, see what it has to offer. There, she came across a town named Lenoria, where the people there were extremely kind and nice, which had a very nostalgic atmosphere. It had reminded her the love the dryad gave her, and so, she roughly stayed there for four to five years.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              But after a while, when it became the year of 2245, a rather troublesome group caused troubles in the town where she was staying. She tried to defend her home and also the people who took care of her, but instead, her kindness was taken advantage of when a group of bullies beat her up. They ended up throwing her into a secluded portion of forest and continued to toss her around, noticing how frail and easy she was to manipulate. When all hopes were lost, a beacon of flame lit up and saved her from her predicament.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              It was Kydel who stepped up in line, recognizing the right and the wrong, along with the ways of a fool, and the heart of a poor. He had saved her from the troublesome group, and that was when he reached his hand out to help Raeya in her time of need. She saw this as another act of kindness and grace. Not even that but something even greater, a fruit and trait of bravery and compassion. This act alone from Kydel pulled her out from her rabbit hole, and she clung onto his kindness. That was also after he held his hand out for her, she developed feelings for him.
            </p>
          </div>
        </details>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Four Identities */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Identities that makes her character round and dynamic!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Social Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">She&apos;s shy and timid at first, but once you get to know her, she will open up and become happy and energetic. She&apos;s sometimes a klutz, but when she is most needed, she will be there no matter the cause. Her extroversion after opening up is like a golden retriever, nothing but pure bliss! The people around her look up to her extraversion for how friendly she is.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Personal Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Whenever she&apos;s near her partner Kydel, or her friends, like Zohl, she feels relieved to be around them. She&apos;s able to talk and voice her concerns, look out for another, and also lowering her guard around them. Specifically, Kydel, because once he proposed to her to become his partner and wife, she felt nothing more than happiness.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Core Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Her authenticity to herself sometimes scare her, because when she&apos;s alone, she will always hold her guard up, no matter what happens to her when she&apos;s left alone. That sometimes exclude when she wants to be left alone, thinking in her thoughts about her actions or behavior. Thinking too much will make her brain go fuzzy, airless, thus, the &quot;klutz&quot; around her friends.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Hidden Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">A Healer and Comforter. Her kindness and empathy towards others bring more than just joy. She expresses her sentiment through various of methods, like bantering, offering friendship, and just being curious about others. She&apos;s a Sylph, and sylph species are known to calm people down since they possess a wide range of healing and tranquil abilities. However, this all comes to an act, an act of love. When Kydel first experienced a side-affect of Eruptio Fervor, Zohl had told her that he trusts her. And with her kindness leading her, she helped comfort her friend with kindness and gentleness, through her emotions and also her powers.</p>
          </div>
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
            { name: 'Hyper Speed', desc: "Being able to go at fast speeds. However, a Sylphs' max speed is at Mach 1." },
            { name: 'Hyper Strength', desc: 'Super immense strength' },
            { name: 'Enhanced Vision / Aura Perception', desc: "Can see objects from far away, even at great distances. Raeya's eyes also have the ability to perceive auras." },
            { name: 'Enhanced Hearing', desc: 'Able to perceive sounds a normal human cannot hear' },
            { name: 'Reflex Timing', desc: 'Being able to dodge incoming objects at great speed' },
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
          The power of influencing the course of events by using a mysterious or supernatural force. Raeya&apos;s magic comes in Four Types with their unique sub-abilities and how she uses them.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The older she gets in raw age, the more experience Raeya gets. She literally grows older in power and more emotionally stable, which makes her extremely powerful in her own terms. Age unlocks control and awareness alongside damage (not just rather, it is a tandem age system).
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">This is what Raeya has! Toggle each header to view more!</p>

        <div className="space-y-3 mt-4">

          <PowerToggle title="General Magic">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Unspecified magic powers that Raeya uses on a day to day adventure-basis. Some of these are shown throughout the series.</p>
            <SubPower name="Magic Pocket" desc="The power and ability to store items in a space-like pocket dimension. Much like Kydel's Magic Pocket ability, she can also go into it and store live beings." />
            <SubPower name="Size Augmentation" desc="The ability to change one's physical height or size to a bigger or smaller proportion. This is a default power to all sylphs. Raeya uses this multiple times throughout the series. Even if she's a smaller size, she can still pack a blow and punch." />
            <SubPower name="Spell Augmentation" desc="A magic spell that was taught by a clerk that allows Raeya to resize their portable treehouse the duo bought when they visited the Skypeak Obelisk." />
            <SubPower name="Magical-inesis" desc="Much like telekinesis, it relies on the use of magical properties. This can be used to bind spells." />
            <div className="space-y-1">
              <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; Magic Library Arsenal &gt;&gt;</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Chants and spells that the user can use to generate different kinds of magic. She can either speak it or visualize it. She can create new spells with the power of imagination. Also a part of Combat Magic!</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Her Magic Library Arsenal has a lot of toolkits. She can nullify psionic/psychic energy if she wanted, which includes all kinds of mind control. Some of her Magic Library Arsenal kits are passive and active too. Some of which include:</p>
              <ul className="space-y-1 pl-2 mt-1">
                <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Preamplification Spells</span></li>
                <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Strength/Boosting Spells</span></li>
                <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Summoning Spells, which summons mini helpers if needed.</span></li>
                <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Compartmentation, which applies to Appliances like stoves, dishwashers&hellip;.etc. It can make them operate normally without the use of electricity (energy)</span></li>
              </ul>
            </div>
          </PowerToggle>

          <PowerToggle title="Sylph Magic" color="#60a5fa">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed"><span className="text-[#60a5fa]">Sylph Magic</span> is one of Raeya&apos;s default magic abilities since these are powers that all sylphs have. This type of magic has two sets, one being Healing Magic, and the other being Tranquil Magic.</p>
            <div className="pt-2 space-y-2">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Healing Magic consists of</p>
              <SubPower name="Mystic Healing" desc="Healing through the use of magical properties that come instantaneously." />
              <SubPower name="Timed Healing" desc="The power to heal someone using a duration of time. Can work even if the user deactivates the power." />
            </div>
            <div className="pt-2 space-y-2">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Tranquil Magic consists of</p>
              <SubPower name="Disable" desc="a form of Tranquilization. This sub-power calms down one's heart rate and stuns them, disallowing them to move until the user deactivates this power. However, they can still perceive sounds and speak." />
              <SubPower name="Fairy Lullaby" desc="a soft-like gentle hum that can put someone to sleep through a timed duration. The lullaby can be short or long." />
              <SubPower name="Soothe Touch" desc="The power to calm down a raging beast or person. This can also work if the user has a very fast heart rate." />
              <SubPower name="Soothe Snap" desc="The power to instantaneously put someone to sleep with the use of the snap or render then unconscious." />
            </div>
          </PowerToggle>

          <PowerToggle title="Combat Magic" color="#facc15">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">One of Raeya&apos;s many forms of magic. Combat Magic specializes in offense for dealing blows to opponents.</p>
            <SubPower name="Magic Library" desc="Chants and spells that the user can use to generate different kinds of magic. She can either speak it or visualize it. She can create new spells with the power of imagination (also a part of general use)." />
            <SubPower name="Magic Blast" desc="Forms of blasts and explosions emitted from the users' hand at a distance." />
            <SubPower name="Magic Blades" desc="Magic blades that the user forms from the hand or arm movement." />
            <SubPower name="Magic Mindmelt" desc="A magical psychic ability that allows the user to tap into another's mind and cause migraines and excessive headaches." />
            <SubPower name="Magic Helix" desc="Magic Helix that bounds and wraps around the arm of the user. This strengthens punching." />
          </PowerToggle>

          <PowerToggle title="Infernal Magic" color="#f87171">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">A Set of Magic that Raeya hastily took from Queen Laeyana, The Goddess of Magic during her stay in the Divine Realm before she was revived.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Infernal Magic is one of Raeya&apos;s strongest types of combat magic. Infernal Magic changes Raeya&apos;s appearance, with both eye colors of dark red and blood streaks underneath her eyes (before mastery). Raeya never uses this magic since there are parts of it she cannot control. This makes Infernal Magic both dangerous and powerful. Infernal Magic boosts her magic powers by 30 times, including itself, along with her enhanced abilities. However, once she gets masters Infernal Magic, she will be able to control it with full ease.</p>
            <SubPower name="Astral Drag" desc="This allows the user to drag the astral soul of a being out of the body of an opponent." />
            <SubPower name="Blindsight" desc="This hinders the opponent's eyesight, blurry, and potentially, blind for the rest of their life." />
            <SubPower name="Blood Control" desc="A next-level power that allows the user to control the opponent's blood and make it boil from the inside." />
            <SubPower name="Blood Rage" desc="A magic that consumes the user's ambitions and lets them take control of whatever bloodlust emotion they have." />
            <SubPower name="Leeching Shade" desc="This drains the life force of an opponent up to 10 years." />
            <SubPower name="Illusionist" desc="The ability to cast real, lifelike illusions to confuse others." />
            <SubPower name="Phantom Blades" desc="Blades that are formed with the reaping souls of ghosts. They deal damage and can inflict curses onto opponents." />
            <SubPower name="Phantom Maelstorm" desc="A type of magic that consumes living souls of the dead. This turns dead souls into poison spikes that rushes in storms and torrents. This can cause the opponent to suffer from poisoning and potentially shorten their life-span." />
            <div className="pt-2 border-t border-[#2e2b26] space-y-3">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Infernal Magic has a pretty tragic downside to it. However, there is only one subset of this power that affects the whole set: Blood Rage. Blood Rage is a magic power that consumes the users&apos; ambitions and lets them take control of whatever bloodlust emotion they use (much like Kydel&apos;s EF but more dangerous). This can appear as a side-effect and can randomly pop up at times. When in the state of Blood Rage, the user&apos;s vision gets obfuscated and becomes half-unconscious, disabling them to see. However, they can hear and move normally. This normally won&apos;t happen if this power is trained correctly.</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Then comes the nasty part. Every subpower of Infernal Magic gets used and consumed at a huge amount, simultaneously. After the huge consumption of energy and power for Infernal Magic, this will render the user immobile for an hour if trained correctly. If not, this will render the user immobile for a day. Raeya now has complete mastery and control over this magic as of <span className="text-[#c9a84c] italic">&ldquo;Hibryds I - A Grand Voyage, EP 13 - Mastery.&rdquo;</span></p>
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
          When she first met Kydel when he rescued her from the unwanted group of bullies (in EP 4 of Book 1), she clung onto his kindness for a long time. But, she knew that relying just on this is not a good idea. Taking an emotion for granted that is both equally important to her and her friend, will not only result in a relationship that will cause pain, but also no room for growth. She knows that well enough.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          However, even though she <em>was </em>the damsel in distress back then, she was mentally unstable, whether or not she wanted to live or not. That was because she had this overwhelming guilt, not just being a Highland Sylph, but also not being able to stand up for herself. This is because she is very reserved around strangers, but open to those she knows or is acquainted with.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          When Kydel stepped in and offered his kindness when all hope was lost, she looked up and saw him as a <em>role model at first sight (and crush after)</em>. Kydel is a person who believes in bravery at it&apos;s finest. That&apos;s because if you face problems and fears without a brave mind head on, it means that you can&apos;t grow and improve from that experience. But after Kydel&apos;s influence on her, she no longer considers herself lost or a damsel, because she knew that this might become an obstacle between her relationship with Kydel.
        </p>

        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            read more&hellip;.(toggle me!)
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Later down the road in their adventures, Raeya had confessed her feelings to Kydel, making them friends to partners. After some fun adventures of battling, visiting sceneries, and more, the two decided to take a break in one of the worlds&apos; most famous attractions: The Skypeak Obelisk. It was right then when Raeya showed her true colors. With the pent up guilt she had over all these day of fun (where she kept to herself), she wept in front of her friend, exposing her emotions. Kydel saw her with her hair down and he thought it was beautiful.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Raeya says that having long hair is what led to people talking back against her and not just being a Highland Sylph. It was a distraction&mdash;too sparkly and too long. It annoyed them, and even pained them to look at it. Even when she cut it to back length, they would still talk back against her (right now her hair is at a decent length).
            </p>
            <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-relaxed italic">
                &ldquo;Stop listening to those shaming you! You should be proud of who you are! Be brave about yourself despite your insecurities or flaws! This is something that I really like about you! You might be afraid to show them, but from what I see, you are full of wonders!~&rdquo; - Kydel to Raeya
              </p>
            </blockquote>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He reminded her to stand up for her insecurities and face her problems head on with bravery, which was something she lacked little.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              After he reassured her, it was at this moment Raeya promised to herself to do better, be better, and be herself! From thereon, she aims to improves herself more, learning more about her limitations, and her strengths. And also, being able to bond with Kydel, who is someone she trusts and cares about.
            </p>
          </div>
        </details>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">When it comes to having Powers&hellip;</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Both Raeya and Kydel knows it can be a lot of fun, but also dangerous. They vow to never hurt each other unless it comes to dire situations (or worse). Both of them can match each other in strength. But in terms of raw strength, Raeya comes out on top because her Infernal Magic is much stronger than Kydel&apos;s Eruptio Fervor. However, they never use their powers to take advantage of one another for unwanted gain or simply for mockery. Neither of them think they are more powerful than each other, but rather they acknowledge each other&apos;s strengths and weaknesses when it comes to power scaling.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Naturally, they are proud to have their powers, and this also makes them, them. Their powers can sometimes be of help. They help balance and bring terms to each other. Both their powers, Kydel&apos;s Eruptio Fervor and Raeya&apos;s Infernal Magic rely on <span className="text-[#4ade80]">ambition, emotion, and control</span>. When one of them is not themselves, one or the other needs to remind them about the outcome of their powers&apos; actions. They need to learn how to depart from a future consequence that will not only ruin their bond, but their trust.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Two sides of the same coin. Both need each other, not just their powers but their morality. This is to help balance their sense of humanity and their support for each other.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Appearance / Outfits */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance / Outfits</h2>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb]">Hairstyle and Color</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Raeya&apos;s hair color is dark-brown with tints of pink. Her hairstyles are a mixture of:</p>
          <ul className="space-y-1 pl-2">
            <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Sideswept Pixie Cut</span></li>
            <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Medium - Long hair</span></li>
            <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>High-rise pony tail (medium length)</span></li>
            <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Front Medium Curls</span></li>
          </ul>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Raeya&apos;s hair is super fluffy and soft. Her ponytail is held up via a magic string, which bounds it in place. She rarely lets her hair down. Her eyes are blue. She has a very slender waist and figure.</p>
        </div>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb]">Apparel</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">She wears a maid-like dress (shoulder crop) that is light blue, with a navy-gray purple corset bodice near her waist that connects as a collar. Her corset isn&apos;t too tight. Her skirt has colors of pastel blue. Her sleeves are slightly attached to the collar of her dress. She&apos;s modest about her clothing so she wears full black tights. Her cuff links are the same color as her corset.</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">She wears a pink-flower clip along with a single blue-crystal earring. The flower was given by Kydel.</p>
        </div>

        <div className="space-y-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
            <p className="font-display text-sm text-[#f2ebeb]">&#8642; Cuff Links as Weights</p>
            <ul className="space-y-2 pl-2">
              <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>The two cuffs doubles in weight when she augments her size smaller (which is why she packs a punch). They weight at least two queen size beds.</span></li>
              <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#c9a84c] shrink-0">—</span><span>Once removed (sleeves rolled up with magic) her punches quadruple exponentially more. If she didn&apos;t hold back, one single punch could destroy an active volcano&mdash;vaporizing both the magma and the ash-like air out of thin air (ha puns!).</span></li>
            </ul>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
            <p className="font-display text-sm text-[#f2ebeb]">&#8642; Sylph Wings</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The wings behind her are transparent-white and blue and are made up of sylphium-fiber. They feel like cardstock paper, light, and has a texture of leather. However the downside to sylphium-fiber is that they are weak against water. Once the wings are drenched, they don&apos;t have the function to fly unless dry.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Her wingspan spans around 5&apos;3 in height, with a length of 3&apos;1, from arm end to end.</p>
          </div>
        </div>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb]">Size Augmentation Forms</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Size Augmentation allows Raeya to change sizes from big to small. When she&apos;s in a smaller size, her punches double in power because of how light and fast they are.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="border border-[#2e2b26] rounded-xl bg-[#0f0e0c] p-4 space-y-1">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Normal State</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Height: 5&apos;3</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Wingspan: 3&apos;1</p>
              <p className="font-body text-sm text-[#7a746e] text-xs">She&apos;s quite athletic too!</p>
            </div>
            <div className="border border-[#2e2b26] rounded-xl bg-[#0f0e0c] p-4 space-y-1">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Smaller State</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Height: 1&apos;5.5</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Wingspan: 1&apos;2.5</p>
              <p className="font-body text-sm text-[#7a746e] text-xs">Around the size of a medium toy plush.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Weaknesses */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Weaknesses</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Raeya has two weaknesses, one is easy to find, and one is a bit harder to exploit.</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">One of her weaknesses are her wings. If her wings are either wet or iced she cannot fly. That is because her wings are made of a special material that can&apos;t be dealt with liquids in both their respective matter. If Raeya was submerged in water, she cannot fly, due to the fact that her wings are like rocks in water.</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Another weakness of Raeya is the center spot of her wings, from where they appear and function. That spot is called the Pressure Point. When Raeya gets poked in that position while her wings are out, it renders her immobile to fly for a few minutes. However, when her wings disappear when she&apos;s not flying, that option to poke her pressure point no longer validates the counter-effect of her weakness.</p>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-4">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">PHOBIAS (Fears)</p>
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="font-display text-sm text-[#c9a84c]">Autophobia &gt;&gt; The Fear of Abandonment</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-sm text-[#c9a84c]">Anthropophobia &gt;&gt; The Fear of Rejection</p>
            </div>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Raeya&apos;s childhood has been centered around these two phobias. Near her young early age (explained in Ep 7 - About Raeya), her parents were killed due to a rampage of elves. This happened so fast, her flight and response was through the fear of abandonment and rejection. This was the first time she experienced both until a kindred soul helped her out before she met Kydel.</p>
          </div>
        </div>

        {/* Image — Raeya Flutters Infernal Form */}
        <div
          className="w-full rounded-xl overflow-hidden border border-[#2e2b26] cursor-zoom-in group relative"
          onClick={() => setLightbox({ src: 'https://i.ibb.co/5WbJdYJG/Raeya-Flutters-Infernal-NEW.png', alt: 'Raeya Flutters — Infernal Form' })}
        >
          <img
            src="https://i.ibb.co/5WbJdYJG/Raeya-Flutters-Infernal-NEW.png"
            alt="Raeya Flutters — Infernal Form"
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-body text-xs text-white tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full">Click to expand</span>
          </div>
        </div>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Power related Weaknesses — Infernal Magic</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Infernal Magic is one of her weaknesses (and also a set of her magic powers), a power that she cannot control unless she trains to master it. This power was &quot;gifted&quot; by Laeyana in return for something valuable. But since this type of power was latent within Raeya, parts of this power can be unstable, powerful, and dangerous. She fears that if she can&apos;t control it, she may end up hurting those who are close to her. This also changes her appearance slightly. Her clothing becomes reddish pink, her eyes turning red. She calls this form &ldquo;Infernal Raeya&rdquo; when she wants to go all out or as a last resort.</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Possessions */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Possessions</h2>
        <div className="space-y-3">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">&#8642; Portable Treestone Mansion</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">This item was first purchased during the time Kydel and Raeya went to the Skypeak Obelisk. They now use it as their home. Raeya has dual ownership of this because she has the required magic to resize the house.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">&#8642; Her Engagement Ring (Wedding Ring)</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">A ring that she wears on her right ring finger as a sign of devotion to Kydel.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">&#8642; Smartwatch - &ldquo;Rae-Band&rdquo;</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Before it became a smartwatch, it was once a phone Raeya had but never used in a long time. But ever since she became friends with Kydel and Zohl, she sometimes uses it to take pictures. Later down the road, Zohl used his powers to turn it into a smartwatch for her so she could use it to to display her powers. She calls it the Rae-Band. She wears it over her cuff links but uses magic to hide it.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">&#8642; A Pink Gemstone Earring</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">She wears this on her left ear, but it&apos;s a single one. It was a present given by her dryad-mother figure when she was back in The Sylphrelm. It holds a significance to her as it symbolizes parental loyalty.</p>
          </div>
        </div>
      </section>

      {/* Subpages */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Raeya Flutters — Related Pages</h2>
        <Link
          to="/characters/RaeyaFlutters/AHeartForgedFromFire"
          className="group flex items-center gap-4 px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200"
        >
          <span className="text-2xl">🎶</span>
          <div>
            <p className="font-display text-base text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Aeh Hæart Forgéd from Fýrræ</p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-0.5">Raeya&apos;s Lullaby — sung in Hetranian Ghrenglish to calm Kydel&apos;s berserker rage</p>
          </div>
          <span className="ml-auto text-[#c9a84c] text-lg opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </Link>
      </div>

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
