import { Link } from 'react-router-dom';

export default function EphelTheMoonbel() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Header ── */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Antagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Ephel The Moonbel
        </h1>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] leading-relaxed">
          &ldquo;Human&hellip;? Don&apos;t anger me boy. I&apos;m Ephel. And this is my profile&rdquo; &mdash; Ephel, probably
        </blockquote>
      </div>

      {/* ── Story Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Information</h2>
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p className="text-[#c9a84c] text-sm italic">Information on this page contains Spoilers for Book 1! And may <span className="underline font-semibold">subject to change</span></p>
          <p>Character Information, Backstories, and Origin</p>
          <div className="space-y-3 pt-1">
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Story Role</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Supporter Antagonist / Recurring</li>
                <li>A Moonbel, a type of Killer Rabbit</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Story Presence</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Introduced in Episode 1 of Book 1 (&ldquo;Territorial&rdquo;), disappears shortly after.</li>
                <li>Reappears in EP 14 of Book 1</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Point of Origin</p>
              <p>Varleqe</p>
            </div>
            <div>
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Character Type</p>
              <p>Static / Flat (for now)</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Backstory ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Backstory</h2>

        {/* Origins as an Alpha Werebel */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Origins as an Alpha Werebel</h3>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          <p>Ephel was the leader of a pack of Killer Rabbits, also known as <span className="text-[#f2ebeb]">Werebels</span> (Were-Rabbits). As an <span className="text-[#f2ebeb]">Alpha Werebel</span>, he possessed distinct abilities that set him apart from common Werebels&mdash;most notably, the ability to speak human language and shape-shift his appearance to blend in with other species.</p>
          <p>Werebels are bipedal mutations of sterilized rabbits that escaped from illicit vampire experimentations dating back to 15 AD. A vampire named Dhivlaine infused his DNA with white-albino rabbits, creating these giant, powerful creatures. Werebels stand around 7ft&apos;4&quot; in height and are classified as <span className="text-[#f2ebeb]">Rank 2, No. 1</span> in the Beast Hierarchy Kingdom.</p>
        </div>

        {/* The Red Blood Eclipse Evolution */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Red Blood Eclipse Evolution</h3>
        <p className="font-display text-xs text-[#6b6560] mb-4">Date: Escael 31st, 2245 @ 24:25 PM</p>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          <p>During a territorial battle against a Wulfwing Direwolf on the Continent of Varleqe, Ephel and his pack were ambushed. The direwolf proved to be a formidable opponent, killing two of Ephel&apos;s pack members and leaving Ephel himself near death.</p>
          <p>As Ephel lay dying in the forest, the moon gradually blocked the sun, creating a <span className="text-[#f2ebeb]">Red Blood Eclipse</span>&mdash;a rare astronomical event that occurs once every 250 years. When the sun&apos;s rays hit the moon Anzeya, combined with the green glow from the satellite moon Zenya, it creates a blood-red appearance that triggers the evolution of Werebels into <span className="text-[#f2ebeb]">Moonbels</span>.</p>
          <p>Under the influence of this eclipse, Ephel underwent his evolution while on the brink of death. His body transformed, becoming much larger and more powerful. He survived when his pack mates did not, emerging as an <span className="text-[#f2ebeb]">Alpha Moonbel</span>&mdash;a being 20 times more powerful than his previous form.</p>
        </div>

        {/* Physical Appearance as a Moonbel */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Physical Appearance as a Moonbel</h3>
        <div className="mb-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p className="mb-3">As an Alpha Moonbel, Ephel&apos;s appearance is both intimidating and hideous:</p>
          <ul className="space-y-2 list-none">
            <li><span className="text-[#f2ebeb]">Build:</span> The biggest of all Moonbels, spanning at least the height of a small room</li>
            <li><span className="text-[#f2ebeb]">Face:</span> Skull-like with <span className="text-[#f2ebeb]">three piercing eyes</span>&mdash;two standard eyes plus one in the center above them, washed with red and black</li>
            <li><span className="text-[#f2ebeb]">Arms:</span> <span className="text-[#f2ebeb]">Four arms</span>, two on each side, giving him devastating combat capability</li>
            <li><span className="text-[#f2ebeb]">Ears:</span> Longer and deformed, serving as powerful hearing instruments</li>
            <li><span className="text-[#f2ebeb]">Teeth:</span> Sharp teeth that protrude menacingly</li>
            <li><span className="text-[#f2ebeb]">Tail:</span> Longer and more controlled than a Werebel&apos;s, functioning as an extra limb</li>
            <li><span className="text-[#f2ebeb]">Fur:</span> Dark black with streaks of red and white</li>
            <li><span className="text-[#f2ebeb]">Posture:</span> Hunched back on two legs with razor-sharp claws</li>
          </ul>
        </div>
      </div>

      {/* ── Abilities & Powers ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Abilities &amp; Powers</h2>
        <div className="mb-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p className="mb-3">As an Alpha Moonbel, Ephel possesses immense power:</p>
          <ul className="space-y-2 list-none">
            <li><span className="text-[#f2ebeb]">Strength Multiplier:</span> His strength is boosted <span className="text-[#f2ebeb]">20-fold</span> compared to his Alpha Werebel form (10-fold for regular Moonbels)</li>
            <li><span className="text-[#f2ebeb]">Devastating Combat Power:</span> Can decimate a country-worth population in approximately 15 minutes</li>
            <li><span className="text-[#f2ebeb]">Language:</span> Can speak both beast and human languages fluently</li>
            <li><span className="text-[#f2ebeb]">Energy Projection:</span> Can charge and release massive energy beams</li>
            <li><span className="text-[#f2ebeb]">Physical Combat:</span> Delivers crushing blows with his four arms</li>
            <li><span className="text-[#f2ebeb]">Intimidation Aura:</span> His presence alone can terrify even powerful creatures</li>
            <li><span className="text-[#f2ebeb]">Enhanced Senses:</span> Superior hearing and smell</li>
            <li><span className="text-[#f2ebeb]">Signature Trait:</span> A haunting whistle that he uses to intimidate opponents</li>
          </ul>
          <p className="mt-4">Though he could easily have more than just physical power. But&hellip;.that&apos;s for a different story.</p>
        </div>
      </div>

      {/* ── Personality & Motivations ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personality &amp; Motivations</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Ephel is driven by vengeance and malice. After Kydel killed his mates during their first encounter, Ephel became blinded by hatred and seeks to torment and destroy the direwolf who wronged him. He exhibits the arrogance typical of Rank 1 Beast Kingdom creatures, believing power and strength are all that matters.</p>
          <p>His intimidating presence, haunting whistle, and terrifying aura make him a formidable antagonist who prioritizes territory, hierarchy, and dominance above all else.</p>
        </div>
      </div>

      {/* ── Story Timeline ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Timeline</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Book 1 &mdash; Episode I: &ldquo;Territorial&rdquo; <span className="text-[#6b6560]">(Escael 31st, 2245)</span></h3>
            <div className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <p className="mb-3">Ephel and his pack fought a Wulfwing Direwolf (later revealed to be Kydel in his beast form) for territory on Varleqe. During this brutal battle:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Two of Ephel&apos;s Werebel pack members evolved into Moonbels during the Red Blood Eclipse</li>
                <li>The direwolf killed both evolved Moonbels</li>
                <li>Ephel himself evolved into an Alpha Moonbel while near death</li>
                <li>He watched from the shadows as the direwolf triumphed, vowing revenge</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Book 1 &mdash; Episode 14: &ldquo;Incoming Threats&rdquo;</h3>
            <div className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <p className="mb-3">His second appearance. He has been that silent observer from afar watching Kydel tear himself apart.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Came back to remind Kydel that he IS a Monster</li>
                <li>Almost unalived Kydel</li>
                <li>Then disappears</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Relationships ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationships</h2>
        <div className="font-body text-base text-[#c8c2ba] leading-relaxed">
          <p><span className="text-[#f2ebeb]">Kydel Rhunes</span> (Enemy): Mortal enemies due to their species&apos; rivalry and Kydel killing Ephel&apos;s pack mates. Ephel seeks revenge against the direwolf.</p>
        </div>
      </div>

      {/* ── Notable Quotes ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Notable Quotes</h2>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] leading-relaxed">
          &ldquo;Victory shall be ours&hellip;!&rdquo; &mdash; During the territorial battle in EP I
        </blockquote>
      </div>

      {/* ── Trivia ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Trivia</h2>
        <ul className="space-y-2 font-body text-base text-[#c8c2ba] leading-relaxed list-disc list-inside">
          <li>Ephel has a <span className="text-[#f2ebeb]">horror theme soundtrack</span> planned specifically for his character</li>
          <li>His haunting whistle is one of his most iconic traits, used to instill fear</li>
          <li>As an Alpha Moonbel, Ephel is one of the most powerful non-divine creatures in the series</li>
          <li>His species (Killer Rabbits/Moonbels) are perpetually at war with Hetranian Direwolves over ethical matters like territory, food, hierarchy ranking, and strength</li>
        </ul>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/QueenRachnaea" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Queen Rachnaea</p>
          </div>
        </Link>
        <Link to="/characters/HunterNoxxIncogniax" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Hunter Noxx / Incogniax</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
