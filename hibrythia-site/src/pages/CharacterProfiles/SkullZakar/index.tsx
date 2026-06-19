import { Link } from "react-router-dom";
import { useState } from "react";

const PowerToggle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl bg-[#1a1714] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-body text-sm text-[#c9a84c] tracking-wide">
          {title}
        </span>
        <span className="text-[#c9a84c] text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 border-t border-[#2e2b26]">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

export default function SkullZakar() {
  return (
    <main className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/characters"
          className="text-[#4a4844] hover:text-[#c9a84c] text-[10px] tracking-widest uppercase transition-colors"
        >
          ← Back to Characters
        </Link>
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-3 mt-4">
          Background Characters
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Skull Zakar
        </h1>
      </div>

      {/* Character Illustration */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md aspect-[3/4] bg-[#1a1714] border border-[#2e2b26] rounded-2xl flex items-center justify-center">
          <span className="font-body text-sm text-[#4a4844] italic">
            Skull Zakar illustration
          </span>
        </div>
      </div>

      {/* Intro Quote */}
      <div className="border-l-4 border-[#c9a84c] pl-6">
        <p className="text-[#c9a84c] italic font-body text-base leading-relaxed">
          "Halt! Are you really willing to land onto the Skull Zakar? Because if you do, there is no escaping this place!"
        </p>
      </div>

      {/* The Skull Zakar */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          The Skull Zakar
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Skull Zakar is a parasitic planet that feeds off of small dead planets, dead-stars, dwarf stars, and novas. Now you may be wondering why "Zakar" is a part of that name. Zakar is the name of the planet. Plot twist, Zakar is a parasitic cosmic lifeform. The planet itself was already dead, but Zakar, the parasitic life form took control of the planet's core and became one with it. Therefore, it feeds on dead planets and stars. Dead Planets are called "skulls."
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The environment down on the Skull Zakar is very harsh. It's oceans and rivers are burgundy-red and they are boiling at extreme temperatures, temperatures that reach up to 835° helphranites. The cause of this is due to the insane magma core it was built on.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zakar can freely move around in space due to the gravitational pulls she herself can manipulate. The appearance of the planet has a very hazy look, with its atmospheric color as teal, mixed with orange. It has two red crater spots and they almost look like eyes.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In size comparison, this planet is 20x bigger than Jupiter. It is at 1,737,630 miles wide!
        </p>
      </div>

      {/* Other Information */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Other Information
        </h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          During the time that Zohl and the Earlywulf exiled the Black Stone to Skull Zakar, the stone was placed on the planet. Zakar knew of what the Black Stone was, but did not know that Eienel was trapped inside. Eienel, whom was trapped within the stone, tried to free himself (the stone moved a little) but failed.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zakar had sensed this happen once or twice so she later telepathically communicated with Eienel and discovered why he was trapped. Zakar then promised (coerced by Eienel) him that she would find a way to free him from the stone, if she can escape alive. Eienel had a furious grudge against the Hibryds Universe, the universe he failed to destroy.
        </p>
      </div>

      {/* Beings */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Beings
        </h2>

        {/* Cosmic Parasites */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#c9a84c] tracking-wide">
            Cosmic Parasites
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Cosmic Parasites, otherwise known as a Parasitic Lifeform, are parasites that invade dead planets and stars. They also become one with it and can freely control how they move. These are rare beings, 1 out of every nth chance that you can encounter. Each Cosmic Parasite are not of the same. They can come in various forms and are built differently from each other.
          </p>
        </div>

        {/* Star Enenomes */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#c9a84c] tracking-wide">
            Star Enenomes
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Much like Earth's Anemones, they're called Enenomes in this universe. They orbit around Skull Zakar and they feed on the ice trails that comets leave behind. They serve no purpose other than being Zakar's friends.
          </p>
        </div>

        {/* Zakar Herself */}
        <div className="space-y-4">
          <h3 className="font-display text-base text-[#c9a84c] tracking-wide">
            Zakar herself (Skull Zakar)
          </h3>
          <p className="font-body text-[10px] text-[#4a4844] tracking-widest uppercase">
            Zakar uses She/Her/It pronouns!
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Zakar is a Cosmic Parasite that invaded a dead planet called Skull. Zakar named herself Skull Zakar, since she found it fitting. Zakar feeds on dead planets and stars that can be found randomly floating out in universes or galaxies. This includes rogue objects too. However, Zakar cannot feed on living planets or galaxies. Living systems are too potent for Zakar, and it causes harm to her because living systems have pure hearts. If Zakar was to feed and eat on one, she would die immediately.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Zakar herself does not have any ill intentions. She only wants to survive. And possibly make friends (though there aren't many life forms in the cosmic-interstellar space).
          </p>
        </div>

        {/* How Zakar Feeds */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#c9a84c] tracking-wide">
            How Zakar Feeds
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The continental crusts and edges on the planet-like-body can move to Zakar's will. It acts like a mouth for her. That's how she can eat dead objects or just comets and asteroids.
          </p>
        </div>

        {/* Planetary Size Comparison */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#c9a84c] tracking-wide">
            Planetary Size Comparison
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Zakar's planetary body is HUGE. If she was a planet within{" "}
            <Link
              to="/world/databases/TheNhumelaCluster"
              className="text-[#c9a84c] underline underline-offset-2 hover:text-[#f2ebeb] transition-colors"
            >
              The Nhumela Cluster
            </Link>{" "}
            (where Planet Hetra is (story's current setting)), she would be the Jupiter of the system! She just needs to be very far away so that she can eat incoming asteroids or comets!
          </p>
        </div>

        {/* Personality */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#c9a84c] tracking-wide">
            Personality
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Timid, outgoing, and curious by nature. Despite being a Cosmic Parasite, Zakar can get along well with others, since these species have a shared sense of sympathy. When she became one with the planet, her personality is described as big, yet tiny.
          </p>
        </div>
      </div>

      {/* Parasite Abilities */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Parasite Abilities (Powers)
        </h2>
        <div className="space-y-3">
          <PowerToggle title="─────⊰ Atomic Production">
            As a parasite herself, she can create natural known elements from her body and eject it out into space. All parasites has this ability not because they have it's about maintaining space matter, which is very similar to how White Buffers act like.
          </PowerToggle>
          <PowerToggle title="─────⊰ Energy Manipulation">
            Being a parasite, eating stardust allowed her to mature and grow up in size and abilities. She can manipulate energy signatures, including her own. This includes abilities like Telekinesis, which is a sub-power of energy manipulation. But it's only in her parasite form, not planet form.
          </PowerToggle>
          <PowerToggle title="─────⊰ Gravity Manipulation">
            As a planet, she can manipulate gravity to fly and move around, which also include the planets magnetic properties.
          </PowerToggle>
          <PowerToggle title="─────⊰ Continental Manipulation">
            This power is unique to Zakar herself as a parasitic planet. She can freely manipulate the continents and land mass within the planetary body. The magma beneath can be manipulated too.
          </PowerToggle>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters"
          className="rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 transition-colors px-5 py-4 block max-w-[45%]"
        >
          <span className="text-[#4a4844] text-[10px] tracking-widest uppercase block mb-1">
            ← Back to Characters
          </span>
        </Link>
        {/* Last background character — no Next */}
        <div />
      </div>

    </main>
  );
}
