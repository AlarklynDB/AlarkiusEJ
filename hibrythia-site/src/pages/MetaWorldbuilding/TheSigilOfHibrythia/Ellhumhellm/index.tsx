import { Link } from 'react-router-dom';

export default function Ellhumhellm() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
        <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
        {" / "}
        <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
        {" / "}
        <span className="text-[#c9a84c]">Ellhumhellm</span>
      </p>

      {/* Hero */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Ellhumhellm</h1>
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-6">Hell — The Last of the Six Realms of Hibrytheia</p>

        {/* Image Placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center mb-8">
          <p className="font-display text-sm text-[#4a4844]">[ Ellhumhellm Official Art — Author to add ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Instead of being a bright, flaming red interpretation of Hell, Ellhumhellm is a cold and somber place, with hues of blue and black. Ellhumhellm is the sad version of the Hell that is known on Earth (and through its biblical interpretations).
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          In this place, there are no beings, no creatures, and no rulers. Aeonia, The Spirit of Time, made this place to be a receiver of bad souls. This is a realm that felt excess and sad to rival that of the Divine Realm, though no activity created it.
        </p>
      </div>

      {/* Landscape */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Landscape</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The lands are black-bluish-green and the mountains are blue. There is damaged and shattered terrain that looks broken. The paths are made of gravel and grains of sand, with navy-like slime that acts as dripstone. The water in this realm is not water at all — it is bioluminescent sulfuric acid. It may look like a bright, shining blue color, but it is deadly. It can cause a lot of burning degrees to the skin and can even penetrate to the bone. There are very sharp rocks that can pierce through thin paper, and a blue-like fog that envelops around the entire realm.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          People will walk around aimlessly in this time-forgotten place. Silence is your own judgement, and also your own enemy. It can talk back to you, insult you, roast you, freeze dead thoughts — and a lot more. You will always hyperventilate, feel chills, and worst of all — Freezing Acidic Burns if you step into the aqua-blue glowing rivers.
        </p>
      </div>

      {/* Who Gets Sent Here */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Who Gets Sent Here</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Individuals who commit high acts of murder, genocide, treason, and any of the sort will be sent to this place, since it is hardcoded to only take people who do extremely vile things. Even if they do things out of the goodness of their heart but still had evil intentions, they will get sent to this place (and even the other way around).
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">
          You can still get sent here if you die in a life where you did bad things — not just from Divine Retribution from Familiars (a fantasy race) or from an Ancient Spirit that sees your life as a hindrance to others.
        </p>
      </div>

      {/* Time Distortion */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Time Distortion</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Time distorts in this realm. It reverses, goes to negative time, and becomes hyperactive exponentially. When an individual comes here, their appearance will become distorted and alter between from a baby to an elder, very quickly. Everyone experiences this and when they scream in pain, the sound becomes nullified. They are wrapped in their own guilt and will have to experience it over and over, wandering aimlessly throughout the land.
        </p>
      </div>

      {/* Noxia Doloria */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Noxia Doloria — The Rivers of Self Harm</h2>
        <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The illuminating glow from the aqua-blue water here is at its max freezing point despite being liquid. You will burn and acidize, you will feel pain, while you also regenerate your wounds from the burns due to the effects of the water. You can die, and come back painfully.
          </p>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed mt-3 italic">
            Think of it like Re:Zero — Subaru&apos;s Return to Death. But much, much more painful.
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia/extreulux-realm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Extreulux Realm</p>
          </div>
        </Link>
        <Link
          to="/world/meta/TheSigilOfHibrythia/illusia"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Illusia — The Plane of Dreams</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
