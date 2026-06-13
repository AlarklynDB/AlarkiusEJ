import { Link } from 'react-router-dom';

export default function TerminologyLexicon() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-4xl mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">World Databases</Link>
        {" / "}Terminology Lexicon
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
        Terminology Lexicon
      </h1>

      {/* Intro */}
      <p className="font-body text-sm text-[#c8c2ba] mb-4">
        This is the Dictionary of the Handbook and an important page of the website itself. Here, you will learn about terminology that is taken from most places on this website, including new words that show up in the series.
      </p>
      <p className="font-body text-sm text-[#c8c2ba] mb-4">
        This dictionary will often be updated due to new terms coming to recent chapters for the book itself.
      </p>
      <p className="font-body text-sm text-[#7a746e] italic mb-8">
        <span className="font-semibold not-italic text-[#c8c2ba]">Disclaimer:</span> All these words are either anagrams, made up, and or completely new words created by the creator for fictional purposes within the series of Hibryds.
      </p>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Places & Services ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Places &amp; Services
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Places &amp; Services
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">AirLofts</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            It&apos;s just like an Airbnb, but called AirLofts in the Hibryds Cinematic Universe.
          </p>
        </div>
      </section>

      {/* ── Creatures & Species ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Creatures &amp; Species
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Creatures &amp; Species
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Beasts</h3>
          <p className="font-body text-sm text-[#c8c2ba] mb-3">
            Beasts in this universe are known as mythological creatures like Dregalosauruses, Grayhounds, werecats, vampires, Killer Rabbits, and other types of known lore. Beasts are no different from animals, but instead, they are more vicious, fearsome, and dangerous, along with their supernatural abilities. While some have abilities, others have powers.
          </p>
          <p className="font-body text-sm text-[#c8c2ba]">
            Beasts like these live on the supercontinent of Lynneria and they coexist with one another. The only beasts that have rivalry are the Werecats and Direwolves, for they are natural enemies. Direwolves in this universe are gentle and intelligent but yet fierce and powerful.
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Hibryd(s) or Beast(s)</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">
            Scientific Name: Ibridius Brutum
          </p>
          <p className="font-body text-sm text-[#c8c2ba]">
            A coined term for Beasts and Nhuemyns, whom have been given powers by a Spirit or has powers gained by supernatural causes. Hibryds that have powers or something that is equivalent to their level can live for almost up to 1,550 years.
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Nhuemyns</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">
            Scientific Name: Nhuemya Sapherius
          </p>
          <p className="font-body text-sm text-[#c8c2ba]">
            Humans, Elves, Sylphs...etc of the kind are all related and bunched into one specific category; Nhuemya Sapherius. Nhuemyns can live up to 350 years of age. However, Sylphs can live longer than 350 years. Read the Nhuemyn Database to learn more about Nhuemyns.
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Ophulus / Ophuli</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            A magic creature that serves as a guard for the Lucid Sanctum in Norrane. They are dangerously powerful creatures that can&apos;t be trifled with. One misstep and you will be a goner.
          </p>
        </div>
      </section>

      {/* ── Economy & Currency ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Economy &amp; Currency
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Economy &amp; Currency
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Currency Card</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            A card that is given to a Hibryd registered citizen. In order to become a Hibryd citizen, you must register at Kharphan. It is loaded with ($)5 Thousand Hetrix since it comes with the card. This was first given to Kydel when he went to Kharphan to fully become a citizen of the Hibryd race. Also known as <span className="text-[#f2ebeb] font-semibold">"C-Card."</span>
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetrix</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            A form of currency that is used all over the place of Lynneria and the planet of Hetra. The Unit Abbreviation for Hetrix is <span className="text-[#f2ebeb] font-semibold">"Hx."</span>
          </p>
        </div>
      </section>

      {/* ── Technology & Fuel ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Technology &amp; Fuel
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Technology &amp; Fuel
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetrylin</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            Negative-fused particles of cosmic radiation combined with a dying star. These are rare particles that can be found in space.
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Lhureanium</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            Lhureanium is a bio-chemical fuel that is used for Hyperspace Travels and Space Exploration.
          </p>
        </div>
      </section>

      {/* ── Time & Calendar ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Time &amp; Calendar
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Time &amp; Calendar
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Mornoon</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            A significant time of day that combines the word, Morning and Afternoon. Since this world has a 32 hour time system, Mornoon happens exactly at 12:60 AM.
          </p>
        </div>
      </section>

      {/* ── Phenomena & Conditions ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Phenomena &amp; Conditions
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Phenomena &amp; Conditions
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Fevermares</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            A known occurrence that after a nightmare, a fever starts. A fever can be as hot as 450 degrees helphranites.
          </p>
        </div>
      </section>

      {/* ── Language & Phrases ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Language &amp; Phrases
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">
          Language &amp; Phrases
        </h2>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Hnthé Nhá Vaar</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">
            Hetranian Ghrenglish
          </p>
          <p className="font-body text-sm text-[#c8c2ba]">
            A loose translation from Hetranian Ghrenglish, which means: <span className="text-[#c9a84c] italic">"It&apos;s never far from home"</span>, <span className="text-[#c9a84c] italic">"home"</span> or <span className="text-[#c9a84c] italic">"nostalgic"</span>.
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Janké(d)</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">
            Hetranian Ghrenglish
          </p>
          <p className="font-body text-sm text-[#c8c2ba] mb-3">
            Purple hydroacidic vomit from a sea creature.
          </p>
          <h4 className="font-display text-base text-[#f2ebeb] mb-1">(Piece of Janke)</h4>
          <p className="font-body text-sm text-[#c8c2ba]">
            A derogatory term to describe someone who looks and smells like vomit.
          </p>
        </div>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Skærøl Ǧhrün&apos;pæarou</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">
            Hetranian Ghrenglish — Common Demon Insult
          </p>
          <p className="font-body text-sm text-[#c8c2ba] mb-3">
            An insult using Hetranian Ghrenglish that is common among demons. It loosely translates to: <span className="text-[#c9a84c] italic">"a deformed child from their mother&apos;s womb."</span>
          </p>
          <p className="font-body text-sm text-[#7a746e]">
            This phrase is highly offensive even if it is used modernly in this world, because it is frowned upon especially for those who are victims of abuse or orphans.
          </p>
        </div>
      </section>

      {/* Back nav */}
      <div className="border-t border-[#2e2b26] pt-8 mt-4">
        <Link
          to="/world/databases"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to World Databases
        </Link>
      </div>

    </div>
  );
}
