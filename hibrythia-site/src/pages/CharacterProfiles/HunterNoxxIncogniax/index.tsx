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

// ── InfoRow ────────────────────────────────────────────────────────────────────
interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex gap-3 font-body text-base leading-relaxed">
      <span className="text-[#c9a84c] font-display text-sm whitespace-nowrap">&lt;&lt; {label} &gt;&gt;</span>
      <span className="text-[#c8c2ba]">{value}</span>
    </div>
  );
}

// ── SubPower ───────────────────────────────────────────────────────────────────
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

// ── SectionDivider ─────────────────────────────────────────────────────────────
function SectionAnchor({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#c9a84c] font-display text-xs tracking-widest uppercase">─────⊰</span>
      <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function HunterNoxxIncogniax() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Header ── */}
      <div>
        <p className="font-display text-sm text-[#c9a84c] uppercase tracking-widest mb-2">
          The Hibrythian Saga &mdash; Antagonist
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">
          Hunter Noxx / Incogniax
        </h1>
        <p className="font-display text-sm text-[#6b6560] mb-6">Villain Name: Incogniax &nbsp;|&nbsp; Real Name: Hunter Noxx</p>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] leading-relaxed">
          &ldquo;You make me sick. From your bones and your cloud-like ego. Disgusting.&rdquo; &mdash; Hunter Noxx
        </blockquote>
      </div>

      {/* ── Story Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Information</h2>
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <div className="space-y-1">
            <p className="text-[#c9a84c] text-sm font-semibold italic">Information on this may contain spoilers for our books!</p>
            <p className="text-[#c9a84c] text-sm font-semibold italic">Information on this page could be subject to change!</p>
          </div>
          <p>Character Information, Backstories, and Origin</p>

          <div className="space-y-4 pt-1">
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Story Role</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Future Primary Antagonist (Villain, Nemesis, and Arch-Nemesis).</li>
                <li>Multiversal Threat Level: Exceeds Eienel (Cosmic Ifrit).</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Story Presence</p>
              <ul className="list-disc list-inside space-y-1">
                <li>First appearance: EP XIV of Book 1 (A Grand Voyage)</li>
                <li>Inflicted psychic nightmare/vision on Kydel from across continuities.</li>
                <li>Currently imprisoned in DEMS-24 but accessing other continuities via Dreamverse.</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Point of Origin</p>
              <p>The Dead Shard Continuity &mdash; specifically DEMS-24 (Dead Earth Memory Shard 24)</p>
              <p className="mt-1">Hibryds &mdash; Book 0 &mdash; HTHGOE (Available on Amazon)</p>
              <p className="mt-1">Current year in DEMS-24: Year <span className="text-[#f2ebeb]">3556</span></p>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Character Type</p>
              <p>Static/Flat (for now) &mdash; Destined to evolve as series progresses</p>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-2">Threat Assessment</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confirmed by Aeonia (Omnibound Spirit of Time) as a greater threat than Eienel.</li>
                <li>Capable of crossing continuity boundaries through forbidden techniques.</li>
                <li>Targeting Prime-1 (The Hibryoverse) for conquest.</li>
              </ul>
            </div>
            <p className="text-[#6b6560] text-sm italic pt-1">All information about Hunter Noxx is taken from his respective continuity (story)</p>
          </div>
        </div>
      </div>

      {/* ── Personal Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personal Information</h2>
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-3">
          <InfoRow label="Villain Name" value="Incogniax" />
          <InfoRow label="Real Name" value="Hunter Noxx" />
          <InfoRow label="Age" value="25- (he became immortal)" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="Role" value="Villain/Nemesis/Arch-Nemesis" />
          <InfoRow label="DOB" value="Griselmber 33rd, 1997" />
          <InfoRow label="Race" value="Zytkx Humanoid" />
        </div>
      </div>

      {/* ── Backstory and Origin ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Backstory and Origin</h2>
        <div className="space-y-10">

          {/* The Betrayal and the Nemesis */}
          <div>
            <SectionAnchor label="The Betrayal and the Nemesis" />
            <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
              <p>Hunter Noxx is a Zytkx Humanoid who originated from DEMS-24 within The Dead Shard Continuity&mdash;one of 9,999 Dead Earth Memory Shards that comprise the remnants of the original Gaia-666 (Old Earth Continuity). Once a member of the Hibrythian side of DEMS-24, Noxx betrayed his own kind and defected to the Secular-Christian party, where he rose to lead their Revolutionary Army in a brutal campaign against his former allies. He has main-character syndrome.</p>
              <p>His ambitions, however, were perpetually thwarted by one individual: <span className="text-[#f2ebeb]">Llyndel Nova</span>&mdash;the original variant of Kydel Rhunes and DEMS-24&apos;s Shard Balancer. Nova possessed an overwhelming arsenal of abilities including telekinesis, dark magic, time manipulation, divine power, and blood manipulation. With powers that rivaled those of a Lhumerial (god-level being), Nova could suppress and negate Noxx&apos;s abilities with ease. No matter how cunning Noxx&apos;s strategies or how powerful his assaults, Nova remained one step ahead&mdash;always.</p>
              <p>This eternal stalemate crowned Noxx as Nova&apos;s arch-nemesis, and by extension, the nemesis of any Llyndel variant throughout the Dead Shard Continuity.</p>
            </div>
          </div>

          {/* Appearance & Fit */}
          <div>
            <SectionAnchor label="Appearance & Fit" />
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">He&apos;s a fair-skinned Zytkx Humanoid and his eyes are crimson red. He wears a very long and drapey navy-black cloak with a hood that covers his entire face. But beyond his surface appearance of clothing, his hair is messy like a nest, brown with red highlights. But it looks really good on him, and even through the perception of others. He has a very agile and slender build, never too muscular or thin. Personality wise, his looks are distinguished and <em>very good looking.</em></p>
          </div>

          {/* The Forbidden Path */}
          <div>
            <SectionAnchor label="The Forbidden Path" />
            <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
              <p>Desperate to overcome his rival, Noxx secretly forged pacts with demons and other malevolent entities to augment his power. Yet even these dark bargains proved insufficient&mdash;Nova anticipated and neutralized every attempt at overthrow.</p>
              <p>Eventually, Noxx&apos;s schemes led to his imprisonment in a high-security cell with power-resistance technology. But imprisonment could not contain his ambition. During his incarceration, Noxx learned of the forbidden techniques of <span className="text-[#f2ebeb]">Dream Walking</span> and <span className="text-[#f2ebeb]">Astral Projection</span>&mdash;abilities temporarily granted to him through a psychic intermediary. Though these powers were not naturally his, Noxx seized upon them with ruthless determination.</p>
              <p>Entering a meditative trance, Noxx projected his astral form into <span className="text-[#f2ebeb]">the Dreamverse</span>&mdash;a realm beyond conventional time where dreams, nightmares, and alternate timeline events manifest as observable planes. Within this ethereal space, time flows differently, and Noxx exploited this property to conduct extensive reconnaissance across multiple realities.</p>
            </div>
          </div>

          {/* Discovery of Prime-1 */}
          <div>
            <SectionAnchor label="Discovery of Prime-1" />
            <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
              <p>While traversing the Dreamverse, Noxx observed the sleeping mind of <span className="text-[#f2ebeb]">Freya Silvers</span> from DEMS-878, confirming his theory that he could remain incognito while surveilling individuals across different Dead Earth Memory Shards. But his most significant discovery came by accident: when attempting to astral-project to another universe within the Dreamverse, a fluctuation in the realm caused his consciousness to breach the boundaries of his own continuity entirely.</p>
              <p>His mind was thrust into <span className="text-[#f2ebeb]">Prime-1: The Hibryoverse</span>&mdash;a separate, thriving continuity protected by a Non-Euclidean Strip and crowned as the primary narrative universe of <em>The Hibrythian Saga</em>. There, he witnessed a planet in its formation stages before the Dreamverse&apos;s recoil effect snapped him back to his original universe.</p>
              <p>This revelation changed everything. Noxx had found a new target&mdash;a universe without a Llyndel Nova to stop him, though it did contain <span className="text-[#f2ebeb]">Kydel Rhunes</span>, a variant who could potentially grow even more powerful than his nemesis.</p>
              <p>According to <span className="text-[#f2ebeb]">Aeonia, the Omnibound Spirit of Time</span>, Hunter Noxx represents a threat level surpassing even that of Eienel, the Cosmic Ifrit. His eventual arrival in the Hibryoverse is not a question of <em>if</em>, but <em>when</em>&mdash;delayed only by the vast temporal differences between the septillion-year-old Dead Shard Continuity and the comparatively young Hibryoverse.</p>
            </div>
          </div>

          {/* Current Status */}
          <div>
            <SectionAnchor label="Current Status" />
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Noxx remains physically imprisoned in DEMS-24, but his astral form continues to explore the Dreamverse and probe the defenses of Prime-1. He has already made his presence known by inflicting a vivid, terrorizing nightmare upon Kydel&mdash;a psychological attack that caused physical pain and introduced visions of a future confrontation. Though his powers are weakened when operating across continuity boundaries (as the Dreamverse is disconnected from the Dead Shard Continuity), Noxx is patient, calculating, and utterly relentless.</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">He has sworn to escape not only his prison, but his entire home continuity, and to bring hell upon any reality that stands in his path.</p>
          </div>

        </div>
      </div>

      {/* ── The Villain Name: Incogniax ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Villain Name: Incogniax</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Origin of the Alias</h3>
            <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
              <p>The name <em>Incognito</em> was born in the Dream Realm, Illusia, itself&mdash;a self-bestowed title that reflects both Hunter Noxx&apos;s methods and his nature as an unseen threat.</p>
              <p>During his early explorations of the Dreamverse, Noxx discovered a crucial advantage: his astral form remained completely invisible and undetectable to dreamers. He could freely invade sleeping minds, observe their deepest thoughts, memories, and fears, and catalog their psychological patterns&mdash;all while remaining utterly incognito. The dreamers could not perceive him, interact with him, or even sense his presence.</p>
              <p>Time flows aberrantly in the Dreamverse, allowing Noxx to conduct surveillance that would take years in real-time within what amounts to mere hours of observation. He tested this ability extensively on <span className="text-[#f2ebeb]">Freya Silvers</span> from DEMS-878, confirming that he could watch, learn, and strategize without any risk of detection or confrontation.</p>
              <p>This invisible, untouchable status within the dream realm&mdash;combined with his eventual accidental breach into Prime-1 (The Hibryoverse), where he witnessed planetary formation before being forcibly rebounded&mdash;led Noxx to adopt a new identity for his multiversal operations.</p>
              <p>He would no longer be merely <em>Hunter Noxx</em>, the failed revolutionary of DEMS-24.</p>
              <p>He would be <span className="text-[#f2ebeb] font-semibold">Incogniax</span>&mdash;the hidden watcher, the unseen enemy, the nightmare that strikes from beyond the boundaries of reality itself.</p>
            </div>
          </div>

          <div>
            <SectionAnchor label="Symbolism and Threat" />
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The alias serves as both a practical descriptor and a psychological weapon. As Incognito, Noxx operates in the shadows between continuities, gathering intelligence, inflicting terror through psychic attacks, and preparing for an eventual physical manifestation in Prime-1. His enemies cannot anticipate his moves because they cannot observe him. By the time they realize he is watching, it may already be too late.</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">When he finally arrives in the Hibryoverse in person, the name will carry the weight of all the nightmares he has seeded and all the fears he has cultivated from across the boundaries of existence.</p>
          </div>
        </div>
      </div>

      {/* ── Powers and Abilities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Powers and Abilities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">As a Zytkx Humanoid, Hunter&apos;s Abilities are off the charts! His physical prowess have been enhanced, even with supernatural powers that are beyond comprehension!</p>

        {/* Enhanced Abilities */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">─────⊰ Enhanced Abilities</h3>
        <div className="space-y-3 mb-10">
          <PowerToggle title="Super Speed">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to travel super fast</p>
          </PowerToggle>
          <PowerToggle title="High Dexterity Combat">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability and skill in performing a wide range of tasks.</p>
          </PowerToggle>
          <PowerToggle title="High Pressure Durability and Vitality">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Being able to withstand blows from opponents. He can also last days without food. This can also be endurance base.</p>
          </PowerToggle>
          <PowerToggle title="Inhuman Strength">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Super Strength. The ability to withstand and throw a stronger punch than a human&apos;s limitation.</p>
          </PowerToggle>
          <PowerToggle title="Enhanced Hearing">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to hear distant sounds from far away.</p>
          </PowerToggle>
          <PowerToggle title="Environmental Adaptability">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">One of the attributes of Hunter being a Zytkx Humanoid</p>
          </PowerToggle>
        </div>

        {/* Supernatural Powers */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Supernatural Powers</h3>
        <div className="space-y-3 mb-10">

          <PowerToggle title="Cosmic Force">
            <div className="space-y-4">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The power to take energy from the deepest places of space, the Cosmic Train. This power uses the forces of the cosmos, which contains, stellar energy, nuclear energy, and dwarf star energy. This type of power can be used to strength other active abilities and powers.</p>
              <div>
                <p className="font-display text-sm text-[#f2ebeb] mb-2">Forms of Cosmic Force</p>
                <SubPower name="Cosmic Speed" desc="Combined with his super speed, he draws the forces of the Cosmic Train to it and later localizes this power as his transportation device. It leaves trails of white fire behind which slowly dissipates." />
              </div>
            </div>
          </PowerToggle>

          <PowerToggle title="Shapeshifting">
            <div className="space-y-4">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The power and ability to take form of something else. This cannot be used on objects but rather on oneself.</p>
              <div>
                <p className="font-display text-sm text-[#f2ebeb] mb-2">Forms of Shapeshifting</p>
                <div className="space-y-3">
                  <SubPower name="Subatomic Control" desc="Incognito can freely control the particles, atoms, and DNA within himself to shapeshift into any material as possible, while remaining in the same human form. He can be as hard as diamond, soft as gallium, and dense as tungsten." />
                  <SubPower name="Invisibility" desc="The power to become invisible to the naked eye. Can confuse other foes or simply vanish from thin air." />
                  <SubPower name="Intangibility" desc="The power to phase and walk through solid objects. This can ignore energy." />
                </div>
              </div>
            </div>
          </PowerToggle>

          <PowerToggle title="Umbrakinesis">
            <div className="space-y-4">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The power to manipulate dark matter, dark energy, and dark particles.</p>
              <div>
                <p className="font-display text-sm text-[#f2ebeb] mb-2">Forms of Dark Energy</p>
                <div className="space-y-3">
                  <SubPower name="Dark Blasts" desc="Blasts that deal inflicting damage with blue fire." />
                  <SubPower name="Dark Pulses" desc="Sends pulses of dark vibrational waves, either through the ground or the air." />
                  <SubPower name="Shadow Lock" desc="The ability to step on someone's shadow and tidally lock them in place. This cannot work on Vampires or Ghosts." />
                  <SubPower name="Light Decay" desc="The ability to absorb any light. This however, cannot absorb Divine Light." />
                  <SubPower name="Dark Helix" desc="Strands of black-like psychic helix that wraps around the users' arm to strengthen strength" />
                </div>
              </div>
            </div>
          </PowerToggle>

        </div>

        {/* Trump Cards of Umbrakinesis */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Trump Cards of Umbrakinesis</h3>
        <div className="space-y-3">
          <TrumpCard name="Complete Chaos">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Unleashing a fury of dark-like attacks, where every surrounding becomes enveloped with darkness.</p>
          </TrumpCard>
          <TrumpCard name="Nightmare Fuel">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The ability to give opponents nauseating nightmares and headaches.</p>
          </TrumpCard>
          <TrumpCard name="Reigning Terror of Destruction">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">This power is a collection of Umbrakinesis, Complete Chaos, and Nightmare Fuel combined into a POWERFUL force of destruction. This power is well over the exponential stage of 10^10 in terms of number, and it&apos;s sheer force can almost disintegrate a solar system. However, this power it&apos;s not enough to triumph over Eienel&apos;s NbIX.</p>
          </TrumpCard>
        </div>
      </div>

      {/* ── Character Inspirations ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Character Inspiration(s)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-3">─────⊰ DC Universe</p>
            <ul className="space-y-1 font-body text-base text-[#c8c2ba] leading-relaxed">
              <li>Zoom</li>
              <li>Reverse Flash</li>
              <li>Brainiac</li>
            </ul>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-3">─────⊰ Avatar The Last Airbender</p>
            <ul className="space-y-1 font-body text-base text-[#c8c2ba] leading-relaxed">
              <li>Fire Lord Ozai</li>
              <li>Azula</li>
            </ul>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-3">─────⊰ Other</p>
            <ul className="space-y-1 font-body text-base text-[#c8c2ba] leading-relaxed">
              <li>Syndrome (The Incredibles)</li>
              <li>Loki (Marvel/Thor)</li>
              <li>Death Wolf (Puss N Boots Last Wish)</li>
              <li>Conquest / Thragg (Invincible)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/EphelTheMoonbel" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Ephel The Moonbel</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
