import { Link } from 'react-router-dom';

export default function TheDregalosaurus() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">The Dregalosaurus</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">The Dregalosaurus</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-8">Beast Hierarchy Kingdom — Rank 1, No. 1</p>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Dregalosaurus Zaratan — Image Placeholder ]</p>
      </div>

      <div className="space-y-12">

        {/* Main entry */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">The Beast</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-2">THE DREGALOSAURUS</h2>
          <p className="font-body text-sm text-[#c9a84c] italic mb-6">He calls himself Regaris.</p>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Regaris is a Megalodon-dinosaur dragon like-tortoise that lives near the south pole hidden beneath the Alarctic Frost. This beast creature only becomes active during the summer, blessing the oceans with newer fish-like life. In most legends, it is said that the Dregalosaurus was once a feared legendary being. The Dregalosaurus often times breaches past the surface of the oceans to gaze out onto the land where many humans and creatures live, wondering if either instills fear towards them or they look up to said legendary creature. It only speaks telepathically when it wants. It's about 762 heunix tall and 1,325 heunix feet long.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The Dregalosaurus is 3000 years of age since it lived during the Era of Greungeria. It still lives to this day! It hibernates for 10 years and becomes active for another ten before going back to hibernation.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              It lived with the first five giants in the past.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The Dregalosaurus itself is a pretty powerful being. It's one of the strongest beings in the world with it's powers reaching up to Rank A - Supernatural. It does not destroy as much as it wants, as it itself is a benevolent creature. Passive-Aggressive. It's powers are only used when a foe greater and evil than itself is a threat to the course of nature.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Powers */}
        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Abilities</p>
          <h2 className="font-display text-xl text-[#f2ebeb] mb-6">Powers</h2>

          {/* Hydrokinesis */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 mb-6">
            <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Hydrokinesis</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-5">
              The ability to manipulate water-like molecules and turn them into different types of combat through the use of energy beams and telekinetic properties. Hydrokinesis also allows the use of air manipulation to pull water out from it. Regaris has completely mastery over Hydrokinesis.
            </p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-4">Forms of Hydrokinesis</p>
            <div className="space-y-3">
              {[
                ['Hydrokinetic Blade(s)', 'Slashes of telekinetically charged air blades.'],
                ['Hydrokinetic Blasts', 'A telekinetic shield that can be layered one by one. Can decrease destruction and supply air for hyperspace.'],
                ['Hydrokinetic Energy Beam', 'A gush of powerful boiling water from the breath of a Dregalosaurus.'],
                ['Hydrokinetic Barrier', 'A water-like bubble that protects its' user.'],
              ].map(([name, desc]) => (
                <div key={name} className="border-l-2 border-[#2e2b26] pl-4">
                  <p className="font-display text-base text-[#f2ebeb] mb-1">{name}</p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sea's Blessing */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 mb-6">
            <h3 className="font-display text-lg text-[#f2ebeb] mb-1">Sea's Blessing</h3>
            <p className="font-body text-xs text-[#7a746e] italic mb-3">100-Year Cooldown Power</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              After hibernation of a 10 years, The Dregalosaurus comes out of hiding to bless the seas with newer fish life, manifesting babies and sea-creatures alike.
            </p>
          </div>

          {/* Sea's Judgement */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
            <h3 className="font-display text-lg text-[#f2ebeb] mb-3">Sea's Judgement</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              A power that intimidates foes where they get judged by the sea itself. This power's resolve is to judge those heavily of dire consequences of messing with nature. The foe is casted with a curse where they live for 100 years before the power becomes of use. Seas' Judgement relies on dark matter and energy. In the last year of the 100 years on the last day, the opponent will fall down due to a lightning strike composed of Dark Energy. It takes 100 years for life to flourish and live, but to meddle with it desires a punishment from the power of Seas' Judgement.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom nav */}
        <div className="pt-4">
          <Link
            to="/world/databases/CreaturesOfTheWorld"
            className="inline-flex items-center gap-2 font-body text-xs text-[#7a746e] hover:text-[#c9a84c] transition-colors"
          >
            ← Back to Creatures of The World
          </Link>
        </div>

      </div>
    </div>
  );
}
