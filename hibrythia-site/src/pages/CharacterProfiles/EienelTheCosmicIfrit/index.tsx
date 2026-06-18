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

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function EienelTheCosmicIfrit() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Header ── */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Antagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Eienel, The Cosmic Ifrit
        </h1>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] leading-relaxed">
          &ldquo;Energy. Let me consume,&rdquo; &mdash; Eienel
        </blockquote>
      </div>

      {/* ── Story Info ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Info</h2>
        <div className="space-y-2 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p><span className="text-[#f2ebeb]">Story Role:</span> Supporter Antagonist in &ldquo;Hibryds &mdash; A Grand Voyage&rdquo; (Book 1); Main Antagonist in &ldquo;Hibryds &mdash; The Entity of Doubt&rdquo; (Book 2)</p>
          <p><span className="text-[#f2ebeb]">Story Presence:</span> In Episode 0 of Book 1 (&ldquo;Before Time&rdquo;), he was introduced as a gluttonous character who was exiled deep into space.</p>
          <p><span className="text-[#f2ebeb]">Point of Origin:</span> The Stygian Realm</p>
          <p><span className="text-[#f2ebeb]">Character Type:</span> Round</p>
        </div>
      </div>

      {/* ── Backstory and Origin ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Backstory and Origin</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Eienel was manifested in the Stygian Realm, a realm that lies beyond Midtheltra and Sylphrelm. This makes him a very dark and powerful creature. Although being born with such hasty traits, he likes attention and always wants more power to become the biggest creature of the universe. Not just the biggest, but the most dangerous one of all.</p>
          <p>His outlook on life is miniscule and he views others beneath him. Although he has no goal in life, the only thing that drives him insane is his glutton for energy. A Destroyer of Worlds.</p>
          <p>He was born with a core on his chest, and he calls it a Stygianite, or a Stygian Core. This type of core allows him to absorb energy of different matters and states to grow powerful in terms of seeking power and strength. He does so by destroying planetary timelines, planets, galaxies, and much more, where the creation of planets form by themselves. This core he has is not indestructible.</p>
          <p>He has gone around destroying different planetary timelines but hasn&apos;t been able to destroy at least one. That one timeline he couldn&apos;t destroy was the Hibryds Universe. Well, he was going to destroy it but he was intervened by two cosmic beings: Zohl, the Spirit of Hetra and the Ancient Earlywulf.</p>
        </div>
      </div>

      {/* ── Image 1 Placeholder — The Black Stone ── */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4540]">[ Image &mdash; The Black Stone ]</p>
      </div>

      {/* ── The Prison - The Black Stone ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Prison &mdash; The Black Stone</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>After losing to both of the supernatural and cosmic beings, Eienel was imprisoned in a Black Stone&mdash;which is one of his weaknesses. The Black Stone is an interstellar cosmic void prison that has no escape&mdash;that&apos;s only on the inside. The stone suppresses all powers. The outside is a pillar like stone. This said stone was casted and exiled to the Skull Zakar. This prison is made from the material from the core on his chest, which is called a Stygian Core, or a Stygianite. The only thing that can release Eienel from this prison is with a specific light: Stygian Gray. This prison like asteroid is about the size of a truck</p>
        </div>
      </div>

      {/* ── Stygian Gray ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Stygian Gray</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Stygian Gray is a type of infrared like light that is both faster than the speed of light and darkness. It happens once in every phenomena when planets form a straight line before and after the sun. It doesn&apos;t matter which solar system it happens in.</p>
      </div>

      {/* ── Personality ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personality</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Eienel is quick to get angry and sometimes does tasks hastily. Temper issues and a tyrant. His speaking methods resides in a telepathic voice projection ability, and it&apos;s a little intimidating hearing his voice at first. His voice and tone is close to a lion&apos;s growl.</p>
          <p>The capital vices aka cardinal sins or [the seven sins] will explain Eienel&apos;s personality and what makes him, him.</p>
          <div className="space-y-3 mt-2">
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">1. Pride</p>
              <p>High and mighty, and his pride makes him extremely boastful and cocky. Since he is powerful and all, his ego and pride makes him very, very, impudent.</p>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">2. Greed</p>
              <p>This is a long term vice of Eienel. He is extremely greedy and does not like sharing his portion of respect and pride. Ever since he was forged in the Empty Void of The Stygian Realm, all he could ever want is to destroy &mdash;nothing else.</p>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">3. Gluttonous</p>
              <p>His hunger for energy and power is unsatiable. He quells for dominance and authority over lesser beings, and he thinks highly of himself.</p>
            </div>
          </div>
          <p>The rest of his cardinal vices don&apos;t really have much of a personality toll on him. Even though he has them he chooses not to act on those extra vices except for those three.</p>
        </div>
      </div>

      {/* ── The Four Identities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Social Self</p>
            <p>He hates&hellip;..interacting. Despite being manifested from The Stygian Realm, his core beliefs are all due to his personality: High Gluttonous Greed, along with Pride.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Personal Self</p>
            <p>Rooted into his personality. Always flat. Hates change.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Core Self</p>
            <p>Rooted into his personality. Always flat. Hates change.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-1">Hidden Self</p>
            <p>He just wants to be understood by arrogance and validation. He doesn&apos;t want to be understood by his powers or personality. In truth, he wants to feel like he belongs to a group that acknowledges his threat, even if it doesn&apos;t sound like it. A paradox of validation.</p>
          </div>
        </div>
      </div>

      {/* ── Enhanced Abilities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Enhanced Abilities</h2>
        <div className="space-y-3">
          <PowerToggle title="Hyper-speed">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Travels at the speed of light, near FTL (but not enough to break it).</p>
          </PowerToggle>
          <PowerToggle title="Hyper-strength">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">just super strong!</p>
          </PowerToggle>
          <PowerToggle title="Resilience">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Super durable, not easy to land a critical punch or hit.</p>
          </PowerToggle>
          <PowerToggle title="Reflexes">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Galaxy Dust that surrounds him makes him able to dodge incoming attacks.</p>
          </PowerToggle>
        </div>
      </div>

      {/* ── Supernatural Powers ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Supernatural Powers</h2>
        <div className="space-y-3">
          <PowerToggle title="Energy Manipulation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Eienel can manipulate many different forms of energy. These types of energy become that of galactical dust that shrouds his body, and when he absorbs more, it becomes more dangerous and powerful. Eienel can also control how powerful each hit can be, from 1 to 100. However there are two types of energies that he can&apos;t absorb: Dark Matter and Divine Energy. Dark Matter, or Dark Energy, is the type of matter that he was born from. Give him that and it would weaken him. Divine Energy is extremely pure and potent, it can cause major burns.</p>
          </PowerToggle>
          <PowerToggle title="Gamma Ray Bursts">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">If this is combined with Energy Manipulation, it becomes deadly 100 fold times. He can only use this two times and can&apos;t use it for two weeks.</p>
          </PowerToggle>
          <PowerToggle title="Stellarkinesis">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Cosmic manipulation based telekinesis. Eienel can freely manipulate the energy of cosmic stars and turn it into his own.</p>
          </PowerToggle>
          <PowerToggle title="Space Manipulation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Teleporting, manipulating spatial dimensions, or even creating or destroying entire universes.</p>
          </PowerToggle>
          <PowerToggle title="Gravity Manipulation">
            <div className="space-y-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Eienel can manipulate gravity at will, even with magnetic forces and other unknown gravity-related areas. He can even manipulate a Black Hole&apos;s gravitational pull.</p>
              <div>
                <p className="font-display text-sm text-[#c9a84c] mb-1">Forms of Gravity Manipulation</p>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb]">Magnetic Manipulation</span> &mdash; magnetic properties that can be manipulated, which includes perfect north, neutral, and south</p>
              </div>
            </div>
          </PowerToggle>
          <PowerToggle title="Hyper Regeneration">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Eienel can regenerate his wounds and injuries at excessive speeds. Though in order to inflict actual damage before he could regen, it needs to be slowed down with a cold temperature at sub-zero, which is its only weakness.</p>
          </PowerToggle>
        </div>
      </div>

      {/* ── Trump Cards ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Trump Cards</h2>
        <div className="space-y-3">
          <TrumpCard name="Cosmic Meteor">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">A massive powerful energy pulse in the form of a cosmic meteor. There&apos;s no cooldown for this trump card.</p>
          </TrumpCard>
          <TrumpCard name="Nova Burst Implosion X (NbIX)">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Takes energy from an exploding super nova and a gamma ray burst which is combined with Stellarkinesis and turns the energy output by inverting it inwards into their vertex mass of distribution of a frenzy state. It then implodes inwards and shoots out a massive GRB from the center of where it was sucked in.</p>
          </TrumpCard>
          <TrumpCard name="Reigning Void">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">This power combines Dark Matter and Stellarkinesis, because one day, he found a loophole. Using Stellarkinesis, he can place-swap dark matter from the place he was forged from and combine it into one deadly attack which he calls Reigning Void. Using an infinite energy of it can cause a huge supernova explosion, capable of wiping out a single timeline, a super-star or a super-planet. Reigning Void takes the most stress out of Eienel&apos;s body and can render him immobile for seventeen hours, so he only uses this trump card as a last resort.</p>
          </TrumpCard>
        </div>
      </div>

      {/* ── Image 2 Placeholder — Eienel Antag 2 ── */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4540]">[ Image &mdash; Eienel, The Cosmic Ifrit Antag 2 ]</p>
      </div>

      {/* ── Forms and Appearances ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Forms and Appearances &mdash; Cosmic Ifrit</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Eienel in this form closely resembles an Ifrit and a Metaphysical Spirit, otherwise known as a Cosmic Ifrit. A Cosmic Ifrit is not your daily average demon ifrit you see everyday. Instead, a Cosmic Ifrit has a very defined body tone, muscle mass, and looks like a soul or a spirit. Though spirits aren&apos;t solid, they have the choice to become solid or not. For Eienel, he rather has a solid spirit composition as a Cosmic Ifrit.</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">He has three eyes, with red sharp pupils while his corneas are dyed black. Very long burn-ash red hair and it glows a very faint orange. He wears a type of armor that allows him to harness and controls his powers.</p>
      </div>

      {/* ── Fighting Style ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Fighting Style</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><span className="text-[#f2ebeb]">Experienced Combatant</span> &mdash; Eienel never lost a fight when in his default form. He has won over victorious battles. It takes years of training to perfect his combat preference.</p>
      </div>

      {/* ── Weaknesses ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Weaknesses</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Eienel has two weaknesses. One is exploitable, while the other is harder to achieve.</p>
          <p>His first weakness comes from the Black Stone, the place he escapes after the day of the Black Lunar. The Black Stone contains an anti-power suppressor using divine magic. But after his release, the stone shattered making it very hard to collect and restore. However, even if a fragment remains, it is enough to stop Eienel for a few minutes.</p>
          <p>Eienel&apos;s second weakness is the galaxy orb in the center of his chest. Located above his stomach and between his ribs, he heavily guards it for he knows that is his most weak spot. If he were to be struck there, it would render him immobile for three minutes due to impact and brute force.</p>
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back to</p>
            <p className="font-display text-sm text-[#f2ebeb]">Characters</p>
          </div>
        </Link>
        <Link to="/characters/QueenRachnaea" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Queen Rachnaea</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
