import { useState } from "react";
import { Link } from "react-router-dom";

const PowerToggle = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
        <span className="text-[#c9a84c] text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#131210] border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
};

export default function LeonTheEulerianOwl() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/characters"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Background Characters
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Leon, Eulerian Owl
        </h1>
      </div>

      {/* Story Info Callout */}
      <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4">
        <p className="font-display text-sm text-[#f2ebeb] uppercase tracking-widest">Story Information</p>
        <p className="font-body text-sm text-red-400">Information on this page contains Spoilers for Book 1!</p>
        <hr className="border-[#2e2b26]" />
        <p className="font-body text-sm text-[#c8c2ba]">Character Information, Backstories, and Origin</p>
        <hr className="border-[#2e2b26]" />
        <div className="space-y-3">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Role</p>
          <div className="space-y-2">
            <div className="border-l-2 border-[#2e2b26] pl-4">
              <p className="font-body text-sm text-[#c8c2ba]">Main Supporter Protagonist in &quot;Hibryds I: EP 0 - Before Time&quot;</p>
              <p className="font-body text-xs text-[#7a746e] mt-0.5">Status: <span className="text-green-400">Alive</span></p>
            </div>
            <div className="border-l-2 border-[#2e2b26] pl-4">
              <p className="font-body text-sm text-[#c8c2ba]">Supporter Protagonist in &quot;Hibryds I: EP II - The Confusion&quot;</p>
              <p className="font-body text-xs text-[#7a746e] mt-0.5">Status: <span className="text-red-400">Deceased</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 rounded-xl bg-[#1a1714] border border-[#2e2b26] flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4844]">[ Leon, The Eulerian Beast Owl — illustration ]</p>
      </div>

      {/* Origin and Backstory */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Leon is a Eulerian Beast Owl that originated from Eulerich, a continent that is far east of Hetrania and other continents. Due to high weather activity and harsh conditions in the Eulan Kingdom, this forced Leon to travel west to find a much calmer and peaceful place. He&apos;s just an Owl.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Among his travels, he&apos;s flown over seas and oceans, and even battled weather. This battling the weather and traversing in the air almost took Leon two weeks to make it to the floating continent of Hetrania.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Upon reaching Hetrania, Leon didn&apos;t have the name &quot;Leon&quot; yet. Leon made home to Hetrania for a few weeks. During his time on Hetrania, he explored around and discovered the Spiritqual, an underground cave on Hetrania. Doing so resulted in Leon meeting Rein, but Leon named himself &quot;Leon&quot;. This also made Leon more sentient, being able to speak and perceive the world at a different lifestyle.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Leon was the first ever Hibryd anointed by Rein. And as a Hibryd, Leon could live for a very long time!
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          After a few decades living on Hetra, one of the Spirit Wardens went rogue and almost caused damage to the Spiritqual. That Warden was Naele. However, the rest of the Wardens stopped Naele. But after a short duration of time, Naele escaped out into the vast world of Hetra in his amulet form. Leon was informed about this, since he was the Hibryd at that time.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Leon actually encountered Naele once. It was when Naele broke free of the Spiritqual and was exploring around Hetrania. Rein, who was with Leon, asked what Naele was doing. Naele didn&apos;t respond so Leon tried to keep up, but was pushed away. So, obviously, Leon, along with Rein talked to the other Wardens about this. They later reported the incident to Zohl, which made him extremely upset.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl asked Leon and Rein where Naele went. But to their surprise, both Leon and Rein didn&apos;t know where he could&apos;ve gone after the encounter. So in a group, the Wardens along with Leon and Zohl searched for Naele. Cal was the one who found Naele, but they were too late.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Naele unfortunately bonded with a demon witch, by the name Rachnaea. Rachnaea&apos;s demon heart poisoned Naele, but he didn&apos;t care one bit. Cal, Zohl, Rein, along with Leon tried to stop Naele and Rachnaea, but they were too strong together. So Cal, along with the others, went back to the Spiritqual to brainstorm ways to take down this said opponent. They had no options, so they had to wait to find and anoint a Hibryd. Even Leon wasn&apos;t powerful enough to take down the demon witch.
        </p>

        {/* The passage of time section */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Many millennia, quincentenaries&apos;, and decades later, it became the year 2245. In the fifth month of the summer (The Month of Escael), Leon was getting old and Rein couldn&apos;t continue without a new host. However, Rein can merge back with Zohl if Zohl needed his clones to fuse back together. Zohl who was here on Hetrania sensed a very noble and kind heart heading its way towards the island, so Zohl asked his current clones to gather up.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The plan was to anoint the upcoming being as a Hibryd, and after the hibryd wakes up, Leon will pass on his inheritance to said hibryd, along with some new powers. Yes, you&apos;re thinking correctly. That Hibryd was Kydel. After that, Leon passed away.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Before Leon passed away, he gave Kydel the &quot;Will of Leon&quot; along with some unique abilities that enhance physical strengths.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Will of Leon is a title that Leon houses. However, he passed the title to Kydel before he passed away.
          </p>
        </div>
      </div>

      {/* Appearance */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">His Appearance</h2>
        <p className="font-display text-sm text-[#f2ebeb] mb-2">Eulerian Beast Owl</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Leon&apos;s Eulerian Beast Owl appearance has a rough similar look to a Great Horned Owl. However his features are more enhanced and tone defining.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Although Leon may look like a Great Horned Owl, being an Eulerian Beast Owl has a size greater than an average owl.
        </p>
        <div className="space-y-2 pl-4">
          {[
            "Leon has a neck-like mane that stands out like a collar, a sharp beak, and sharp-blue eyes.",
            "His fur pattern is of brown and yellow stripes, with a triangle shaped pattern on the back.",
            "Leon's beast size is around 152 CM (around 5 FT) with a wingspan of 4'9 (length)"
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notable Feats */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Notable Feats</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Leon has gone up against Rachnaea and Naele. Although the plan was a bust, crafted by the Spirit Wardens and Zohl himself, Leon did manage to land a decent punch on Rachnaea. However, it was not enough to separate Naele from Rachnaea.
        </p>
      </div>

      {/* Powers, Abilities, Senses */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers, Abilities, Senses</h2>

        {/* Enhanced Senses */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Enhanced Senses and Physical Abilities</h3>
          <div className="space-y-3">
            <PowerToggle label="─────⊰ Hyper Strength">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Having the use of immense power and super strength.
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Hyper Resilience and Durability">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Being able to pick up a fight without backing down. You could also say being durable (durability).
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Enhanced Smell">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                As a beast, Leon&apos;s sense of smell has greatly enhanced.
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Enhanced Vision">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Vision has enhanced and has also gained a sub-ability, being able to see far objects with the use of x-ray.
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Enhanced Hearing">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                As a beast of its own terms, Leon&apos;s sense of hearing has greatly enhanced ten-times.
              </p>
            </PowerToggle>
          </div>
        </div>

        {/* Powers Rein Gave Leon */}
        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Powers Rein Gave Leon</h3>
          <div className="space-y-3">
            <PowerToggle label="─────⊰ Psychic Wingblade">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed mb-3">
                Swipes of psychic blades of air propelled by wing movement at sharp speeds.
              </p>
              <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Forms of Psychic Wingblade</p>
              <div className="flex items-start gap-3 pl-2">
                <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                  <strong className="text-[#f2ebeb]">Psychic Feather Shuriken</strong> — Feather-shaped shuriken hurled at a target.
                </p>
              </div>
            </PowerToggle>
            <PowerToggle label="─────⊰ Knowledge Absorption">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                This ability allows Leon to instantly know information and knowledge from basic surroundings, including history.
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Lightflash">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Flashes a bright blinding light to confuse a foe or an opponent.
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Screech Sonar">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Screech Sonar is a sound ability. This allows Leon to chirp/tweet at a very loud frequency which can hurt the target&apos;s ears.
              </p>
            </PowerToggle>
            <PowerToggle label="─────⊰ Bestowal">
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                This power is a one time use and as a last resort power. Leon uses this power to give Kydel some new powers. This also gives Kydel the Will of Leon.
              </p>
            </PowerToggle>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Character Profiles</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
