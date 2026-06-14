import { Link } from "react-router-dom";
import LorePageLayout from '@/components/LorePageLayout';

// ─── Subpage types ─────────────────────────────────────────────────────────────
type SongSection = {
  title: string;
  subtitle: string;
  credits: string;
  tone: string;
  instruments: string;
  englishLyrics: string[];
  ghrenglishLyrics: string[];
  ghrenglishTitle: string;
  mp3Placeholder?: boolean;
};

// ─── Song component ────────────────────────────────────────────────────────────
function SongCard({ song }: { song: SongSection }) {
  return (
    <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] p-6 space-y-6">
      <div>
        <h3 className="font-display text-lg text-[#f2ebeb] mb-1">{song.title}</h3>
        <p className="font-body text-xs tracking-widest uppercase text-[#c9a84c]">{song.subtitle}</p>
      </div>
      <div className="font-body text-xs text-[#7a746e] space-y-0.5">
        {song.credits.split("\n").map((line, i) => <p key={i}>{line}</p>)}
      </div>
      <div>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">Tone</p>
        <p className="font-body text-sm text-[#c8c2ba]">{song.tone}</p>
      </div>
      <div>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">Instruments</p>
        <p className="font-body text-sm text-[#c8c2ba]">{song.instruments}</p>
      </div>
      {song.mp3Placeholder && (
        <div className="w-full py-6 bg-[#1a1714] border border-[#2e2b26] rounded-sm flex flex-col items-center justify-center gap-2">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Audio — Coming Soon ]</p>
          <p className="font-body text-xs text-[#4a4844]">MP3 placeholder — audio will be added later</p>
        </div>
      )}
      <div>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Lyrics — Modern English</p>
        <div className="font-body text-sm text-[#c8c2ba] space-y-1 leading-relaxed">
          {song.englishLyrics.map((line, i) => (
            line === "" ? <div key={i} className="h-2" /> :
            line.startsWith("[") ? <p key={i} className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-3">{line}</p> :
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-[#2e2b26] pt-6">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{song.ghrenglishTitle}</p>
        <div className="font-body text-sm text-[#c8c2ba] space-y-1 leading-relaxed italic">
          {song.ghrenglishLyrics.map((line, i) => (
            line === "" ? <div key={i} className="h-2" /> :
            line.startsWith("[") ? <p key={i} className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-3 not-italic">{line}</p> :
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function AncientGreungeria() {
  return (
    <LorePageLayout>
    <div className="max-w-[960px] mx-auto px-6 py-16 space-y-16">

      {/* Breadcrumb */}
      <nav className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] flex gap-2 items-center">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">World Databases</Link>
        <span>/</span>
        <span className="text-[#7a746e]">Ancient Greungeria</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">II. Ancient History</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb]">⌛ Ancient Greungeria</h1>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">The Father Continent</p>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Hetra — Greungeria — Image Placeholder ]</p>
      </div>

      {/* The Father Continent intro */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-father-continent">The Father Continent</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Greungeria, the land of the ancient past of Hetra.</p>
          <p>This is where the lands used to be whole and one, before the split.</p>
          <p>At the start of the creation of Planet Hetra, once water and life was filled, there was once a massive continent that almost took up the planet&apos;s body. It stuck out of the water itself. Zohl had named this continent, Greungeria, the grand continent of its era. There were many wildlife here including different kinds of beasts, direosaurus wolves, dinosaurs, dragons....etc. Before the humans came, there were Five Giants.</p>
          <p>These Giants once held massive knowledge of Queen Laeyana&apos;s Magic, as they were the forefathers that govern each type of magic:</p>
        </div>
        <ul className="font-body text-base text-[#c8c2ba] space-y-1 ml-5 list-disc">
          <li>Sylph Magic.</li>
          <li>Infernal Magic.</li>
          <li>Elemental Magic.</li>
          <li>Combat Magic.</li>
          <li>General Magic.</li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Five Giants held the mastery of all these types of magic for each one. They lived until the first humans and nhuemyns came around 3.5 Oldendaye.</p>
        <ul className="font-body text-base text-[#c8c2ba] space-y-1 ml-5 list-disc">
          <li>Vivianya, The Sylph Nomad, Sylph Magic</li>
          <li>Yeulversi, The Human Ifrit, Infernal Magic</li>
          <li>Balkohv, The Nezphel Human, Elemental Magic</li>
          <li>Grenhcius, The Combat Cyborg, Combat Magic.</li>
          <li>Escaelui, The Human Giant, General Magic.</li>
        </ul>
        <p className="font-body text-sm text-[#7a746e] italic">
          (Each of these giants also participated in making the{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Hetranian Calendar</Link>!)
        </p>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Continental Split(s) */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-continental-splits">The Continental Split(s)</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>After many millennia and more, it became 501 Oldendaye. An asteroid came to Hetra from afar and split the north pole from the main Greungeria Continents. That north pole became known as the{" "}
            <Link to="/404" className="text-[#c9a84c] hover:underline">Alarctic Alpines</Link>,{" "}
            where grass life was still active before a strange snow storm happened.</p>
          <p>It took nearly 200 years for the continents to settle into the current shape Modern Hetra stands on, but they didn&apos;t drift into place. The landmasses were violently displaced and and settled due to traces of hexicules within the lower mantles of crust, which caused it to become hyperactive (and cooling down significantly). But it wasn&apos;t as dangerous as it was compared to hexicule storms because The 5 Giants lived in this area and helped rebuild ancient civilization from the ground up even after the continental drift.</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Sylph Massacre of 15 AD */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-sylph-massacre-of-15-ad">The Sylph Massacre of 15 AD</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>In the Year of 15 AD, a huge war ensued over parts of the world. There were too many Sylphs which upset the balance of nhuemyn kind alike, and the Elves were the ones that started this genocide. Since Vivianya lived back in the past, her protection faded away for the Sylph Race after she had passed. A lot of conflict rose to war, which made the Elves more hasty and effective at their ways of hunting and killing. They&apos;re accusatory, volatile, and menaces. The Elves nearly killed 50% of the Sylph Population which was enough to cause fear into them. The remaining 50% went into hiding.</p>
          <p>Even during the active onslaught, two Sylph Representatives by the name Krentyl and Fahlia called up Queen Laeyana by accessing her Staff Altar out in the wilderness. They complained about the war and asked to be relocated somewhere safe, or, a new realm to reside in. Laeyana had huge pity for the Sylph Race. So she summoned Zohl, Aurora Rimaea, and Aloria to discuss what should happen, since Zohl was the one who made Planet Hetra along side with Aloria (with Rimaea being The Spirit of Life).</p>
        </div>
        <blockquote className="border-l-2 border-[#c9a84c] pl-5 py-1">
          <p className="font-body text-base text-[#c9a84c] italic">"I&apos;m not creating a new planet. I don&apos;t want to govern another responsibility while I have this one." — Zohl, politely refusing.</p>
        </blockquote>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Rimaea was officially retired from creating life (Unless asked). But Fahlia and Krentyl insisted. The Elves threatened their very existence.</p>
          <p>But Laeyana had an idea. Instead of asking Zohl and Rimaea, she handpicked out a Spirit from the Divine Realm to shoulder a new chapter. Her name was Nahfia, and her Role? She is the Spirit of Sylphs. The guardian and creator of all. Rimaea asked if Nafhia wanted the line and Creation Tether for the Sylph Race, and she obliged. She took it as her own and all ancestral DNA from the Sylph Line now resides in Nahfia.</p>
        </div>
      </section>

      {/* The Sylphs' New Home */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-sylphs-new-home">The Sylphs&apos; New Home</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p><Link to="/404" className="text-[#c9a84c] hover:underline">Nahfia</Link>{" "}
            now has creation powers. Since she isn&apos;t originally a Celestriax or a Lyeceriax, she has both of those Spirit Typing Powers. She wanted to do something nice for the Sylph Line, so instead of keeping them on Hetra, she created habitable formations in space. She calls this place The Sylphrelm, or The Cloud Abode.</p>
          <p>This place, however, is not round like Planet Hetra, nor does it spin on its axis, or revolve around a star. It is a flat, asteroid-like mass that has a top surface with a gravitational pull, similar to that of Hetra, which keeps the citizens and cities from floating into space. Even though the gravity keeps everything at bay, there is a huge round bubble like shield that envelops the entire mass, which helps give sunlight, air, and many other mystical properties.</p>
          <p>Thus, all the Sylphs from Hetra moved to the Sylphrelm.</p>
          <p className="text-[#7a746e] italic">More information about The Sylphrelm can be found here!</p>
        </div>
        <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] p-5">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">[ The Sylphrelm — Page Coming Soon ]</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Hetranian Ghrenglish */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-lg text-[#f2ebeb]" id="hetranian-ghrenglish">Hetranian Ghrenglish</h2>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">The Ancient Language of Planet Hetra</p>
        </div>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Ghrenglish is the ancient language spoken on Planet Hetra during the Greungerian Era and beyond, preceding the modern English of 1568 Aftendaye. Used by giants, early humans, demons, sylphs, and divine beings, Ghrenglish carries deep emotional, cultural, and symbolic resonance. Some phrases survive even in the modern age.</p>
          <p>There are two variations to the Language name, and it&apos;s pronounced the same way: Grhenglish or Ghrenglish.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
            <p className="font-display text-base text-[#f2ebeb]">Grhenglish</p>
            <p className="font-body text-sm text-[#c8c2ba]">More for those who can&apos;t sound the R before the H.</p>
          </div>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
            <p className="font-display text-base text-[#f2ebeb]">Ghrenglish</p>
            <p className="font-body text-sm text-[#c8c2ba]">Easier for those well versed in H before R — this one is more common nowadays. The "H" is silent in this.</p>
          </div>
        </div>
      </section>

      {/* Songs — Aeþerlen Dialect */}
      <section className="space-y-6">
        <div className="space-y-1">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Songs Sung with Aeþerlen Dialect (Sylphic Ghrenglish)</p>
        </div>
        <div className="space-y-6">
          <SongCard song={{
            title: "Raeya's Lullaby — A Heart Forged From Fire",
            subtitle: "Aeh Hæart Forgéd from Fýrræ",
            credits: "Original Lyrics: Alarkius Elvya Jay\nInstrumentation: Alarkius Elvya Jay\nLyricist: Alarkius Elvya Jay | All Rights Reserved",
            tone: "A slow-paced, peaceful style epic lullaby sung by a single female voice. The melody is soft, elegant, and airy, with a reverberatory presence that feels gentle and kind. Each feminine phrase lingers at the end with an airy delay and pause, creating an ethereal, atmosphere. The voice is delicate, soaring, and elegantly high.",
            instruments: "Harps, Woodwinds, Oboe Percussion, Japanese Koto, Nyckelharpa, Vibraphone, Marimba",
            mp3Placeholder: true,
            englishLyrics: [
              "[Intro]",
              "[Aah and Ooh hums]",
              "",
              "[Verse 1]",
              "May the moonlight bask you in it's coolness~",
              "May the sunlight bask you in it's warmth~",
              "Let the wind and the breeze pick you up…,",
              "As the wind shall help control your flow~",
              "",
              "[Pre-chorus]",
              "Come forth my splendid, how weary and tired.",
              "I wish for my heart to reach out to your despair.",
              "Don't fret and stumble, follow my voice~",
              "and breathe that breath with me.",
              "",
              "[Verse 2]",
              "The warmth from your soul makes you radiate with life~",
              "Don't give in to that false sense of hope.",
              "For your heart is forged from the souls of fire,",
              "let it burn with passion and with courage.",
              "",
              "[Chorus] x2",
              "May the moonlight bask you in it's coolness~",
              "May the sunlight bask you in it's warmth~",
              "Let the wind and the breeze pick you up…,",
              "As the wind shall help control your flow~",
              "",
              "[Final Chorus]",
              "May the moonlight bask you in it's coolness~",
              "May the sunlight bask you in it's warmth~",
              "",
              "[Outro]",
              "[Aah and Ooh hums]",
            ],
            ghrenglishTitle: "Lyrics in Aeþerlen Dialect (Sylphic Grhenglish)",
            ghrenglishLyrics: [
              "[Intro]",
              "[Aah and Ooh hums]",
              "",
              "[Verse 1]",
              "Nhæ þa moonlióma bæsk yeuh yn æ'cohlræ~",
              "Nhæ þa sollióma bæsk yeuh yn æ'wærmæ~",
              "Læt þa windsæl æn breezæl lift yeuh ūp…,",
              "Æs þa wind shæl hælp contrøl yeuhr flowa~",
              "",
              "[Pre-chorus]",
              "Cómae forth myn splendén, hów weary æn tírahn.",
              "Íhna wísh for myn hæart tó reachæ yeuhr despára.",
              "Døhn't fret æn stumblæ, føllow myn vóicæ~",
              "æn breathæ þat breatha wíth mé.",
              "",
              "[Aahs Instrumental]",
              "",
              "[Verse 2]",
              "Þa wærmæ from yeuhr søula mækes yeuh rádiate wíth lívæ~",
              "Døhn't gíve yn tó þat fálse sensæ øf høpæ.",
              "For yeuhr hæart ís forgéd from þa søulas øf fýrræ,",
              "læt ít burn wíth pássion æn wíth couragæ.",
              "",
              "[Instrumental Buildup]",
              "",
              "[Chorus] x2",
              "Nhæ þa moonlióma bæsk yeuh yn æ'cohlræ~",
              "Nhæ þa sollióma bæsk yeuh yn æ'wærmæ~",
              "Læt þa windsæl æn breezæl lift yeuh ūp…,",
              "Æs þa wind shæl hælp contrøl yeuhr flowa~",
              "",
              "[Final Chorus]",
              "Nhæ þa moonlióma bæsk yeuh yn æ'cohlræ~",
              "Nhæ þa sollióma bæsk yeuh yn æ'wærmæ~",
              "",
              "[Outro]",
              "[Aah and Ooh hums]",
            ],
          }} />
          <SongCard song={{
            title: "The Anthem of Healing and Peace — The Sylphrelm",
            subtitle: "Ánthema øf Hæalínæ æn Peác",
            credits: "Original Lyrics: Alarkius Elvya Jay\nInstrumentation: Alarkius Elvya Jay\nLyricist: Alarkius Elvya Jay | All Rights Reserved",
            tone: "A slow-paced, peaceful style Japanese epic theme sung by a single female voice. The melody is soft, elegant, and airy, with a reverberatory presence that feels gentle and kind. Each feminine phrase lingers at the end with an airy delay and pause, creating an ethereal, choir-like atmosphere. The voice is delicate, soaring, and elegantly high.",
            instruments: "Harps, Woodwinds, Oboe, Irish Flute, Cello, Percussion, Japanese Koto, Mandolin, Nylon Guitar, Nyckelharpa, Vibraphone, Strings, Marimba",
            mp3Placeholder: true,
            englishLyrics: [
              "[Intro]",
              "[Aah and Ooh hums]",
              "[Japanese Instrumental Solo]",
              "",
              "[Verse 1]",
              "The Air and the Clouds are filled with fluff~",
              "Let those feet fleet flight and take off like birds!",
              "Have the air and the gust bring you to peace and calm!",
              "For this is the Cloud of Abode of Faes~",
              "",
              "[Pre-chorus]",
              "Come prepare your heart for healing!",
              "Let those who are weary heal from dirt and injury!",
              "",
              "[Verse 2]",
              "Let those feet you've carried be washed away like dirt~",
              "Those hands that fight and battle, let the rest with care.~",
              "Let your heart waver down like a dove descending,",
              "and treat your body anew with love and healing~",
              "",
              "[Verse 3]",
              "We're the Sylphs of this Abode~",
              "Where we welcome you in arms!~",
              "Let's help you into your comfort and find you rest!~",
              "Because this isn't the end just yet, no, it's just the start~",
              "For we believe in the great things you do~",
              "",
              "[Chorus] x2",
              "This is the Song of the Clouds!",
              "The Humble Abode of Fae!",
              "Let's Sanctify those hearts,",
              "and be born anew from Hope!",
              "",
              "[Instrumental Solo, Japanese-like]",
              "[build up]",
              "",
              "[Final Chorus] x2",
              "Come prepare your heart for healing!",
              "Let those who are weary heal from dirt and injury!",
              "Dedicate your Heart to those you love!",
              "For this is the Sylphs' Anthem of Healing and Peace!",
              "",
              "[Outro]",
              "Aah and Ooh hums —",
            ],
            ghrenglishTitle: "Lyrics in Aeþerlen Dialect (Sylphic Grhenglish)",
            ghrenglishLyrics: [
              "[Intro]",
              "[Aah and Ooh hums]",
              "[Japanese Instrumental Solo]",
              "",
              "[Verse 1]",
              "Þa Aera æn þa Clhúdas ær fíll'd wíth flúffa~",
              "Læt þøse fæt flæt flíghta æn tæke øff líke bírdæn!",
              "Hæve þa aera æn þa gústa bríng yeuh tó peác æn cálma!",
              "For þís ís þa Clhúda øf Abøde øf Fæa~",
              "",
              "[Pre-chorus]",
              "Cómae prepæra yeuhr hæart for hæalínæ!",
              "Læt þøse whø ær weary hæala from dírta æn ínjury!",
              "",
              "[Verse 2]",
              "Læt þøse fæt yeuh've cárried bæ wásh'd awæy líke dírta~",
              "Þøse hánds þat fíghta æn báttle, læt þa résta wíth cæra.~",
              "Læt yeuhr hæart wávera døwn líke æ døve descéndínæ,",
              "æn tréata yeuhr bødy anæw wíth lóve æn hæalínæ~",
              "",
              "[Japanese Instrumental Solo]",
              "",
              "[Verse 3]",
              "Wé'ra þa Sýlphas øf þís Abøde~",
              "Whæra wéan wélcome yeuh yn ármas!~",
              "Læt's hælpa yeuh íntø yeuhr cómforta æn fínda yeuh résta!~",
              "Becáuse þís ísn't þa énda jústa yét, nø, ít's jústa þa stárta~",
              "For wéan belíeve yn þa gréat þíngas yeuh døhn~",
              "",
              "[Chorus] x2",
              "Þís ís þa Sónæ øf þa Clhúdas!",
              "Þa Húmble Abøde øf Fæa!",
              "Læt's Sánctífy þøse hæartas,",
              "æn bæ børna anæw from Høpæ!",
              "",
              "[Instrumental Solo, Japanese-like]",
              "[build up]",
              "",
              "[Final Chorus] x2",
              "Cómae prepæra yeuhr hæart for hæalínæ!",
              "Læt þøse whø ær weary hæala from dírta æn ínjury!",
              "Dédícate yeuhr Hæarta tó þøse yeuh lóve!",
              "For þís ís þa Sýlphas' Ánthema øf Hæalínæ æn Peác!",
              "",
              "[Outro]",
              "[Instrumental Solo]",
              "[Ooh and Ahhs]",
            ],
          }} />
        </div>
      </section>

      {/* Songs — Varnæn Dialect */}
      <section className="space-y-6">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Songs Sung with Varnæn Dialect (Demonic Ghrenglish)</p>
        <SongCard song={{
          title: "\u201cThe Chant of Beasts\u201d",
          subtitle: "Þa Hræven'þa Býest",
          credits: "Original Lyrics: Alarkius Elvya Jay\nInstrumentation: Alarkius Elvya Jay\nLyricist: Alarkius Elvya Jay | All Rights Reserved",
          tone: "A powerful, primal ancient fantasy chant with raw, guttural female vocals — fierce, rising into battle-cry shouts. Empowering, with driving rhythm and dark, echoing reverb that feels ancient and otherworldly. Heavy, ritualistic instrumentation: deep drums, staccato strings, tribal percussion. Set in a beautiful vicious time. Feels mountainous and raw. Played near the beautiful mountains. Vocal Style: Fierce, raw, guttural lows with soaring, aggressive highs. Strong vibrato on sustained notes.",
          instruments: "Heavy Taiko Drums, War Drums, Djembe, Frame Drums, Deep Bass Drums, Low Strings (Cellos, Double Bass), Distorted Electric Guitars (for texture), Horns (deep brass), Tribal Percussion, Shakuhachi (Japanese bamboo flute for eerie moments), Chains/Industrial Sounds (for atmosphere).",
          mp3Placeholder: true,
          englishLyrics: [
            "[Short Intro]",
            "[Heavy Drums & Vocals]",
            "[Instrumental Transition]",
            "",
            "[Verse 1]",
            "This is the Chant of the Beasts,",
            "It's the fuel of Balance and Pride.",
            "It's all about that surging beast,",
            "So let it stand out with strength.",
            "",
            "[Verse 2]",
            "Don't let the loathing come for you",
            "But let the sorrow become pain….,",
            "Let your heart burn with shields",
            "And have your fever stock at bay.",
            "",
            "[Fantasy Instrumental]",
            "",
            "[Pre-chorus]",
            "Gut your foes and threaten them",
            "And eave them fear the pain….!",
            "Let your cries be heard with spree",
            "And make your inner shame run with fear.",
            "",
            "[Chorus]",
            "Don't let destruction breach your heart..!~",
            "Don't let your own blood stain your hands…,",
            "And keep your heart on check!",
            "",
            "[Verse 3]",
            "Don't wilt or dry your fiery heart,",
            "Don't let your flame extinguish away!",
            "Never let Pride overshadow you",
            "For it itself is ugly as it is.",
            "",
            "[Instrumental Buildup]",
            "",
            "[Verse 4]",
            "The heart is a precious tool…,",
            "Don't let your mind poison it..!",
            "For the Heart is what makes us whole",
            "And keeps us beasts run with drive",
            "",
            "[Final Chorus]",
            "Don't let destruction breach your heart..!~",
            "Don't let your own blood stain your hands…,",
            "And keep your heart on check!",
            "",
            "Don't let destruction breach your heart..!~",
            "Don't let your own blood stain your hands…,",
            "And keep your heart on check!",
            "",
            "[Instrumental]",
            "[Outro]",
            "[FADE OUT]",
          ],
          ghrenglishTitle: "Lyrics in Varnæn Dialect (Demonic Grhenglish)",
          ghrenglishLyrics: [
            "[Short Intro]",
            "[Heavy Drums & Vocals]",
            "",
            "[Instrumental Transition]",
            "",
            "[Verse 1]",
            "Ðís es þa Hræven'þa Býest,",
            "Es þa fýerl'of Bælence æn Prýda.",
            "Es æll'æbout þa sürǧen býest,",
            "Só lét hæm stænd'out wíþ strængþa.",
            "",
            "[Verse 2]",
            "Dohn'lét þa lóaþen cóme for yeuh,",
            "Bút lét þa sórrow becóme pæin…,",
            "Lét yeuhr hærtfyrre bürn wíþ shýelds",
            "Æn hæve yeuhr fævren stóck æt bæy.",
            "",
            "[Fantasy Instrumental]",
            "",
            "[Pre-Chorus]",
            "Gút yeuhr fóes æn þrǽten hæmræn,",
            "Æn léave hæmræn fǽr þa pæin….!",
            "Lét yeuhr crýes be hǽrd wíþ sprée,",
            "Æn mæke yeuhr ínner shæme rün wíþ fǽr.",
            "",
            "[Chorus]",
            "Dohn'lét destrúction brǽch yeuhr hært..!~",
            "Dohn'lét yeuhr ówn blóod stæin yeuhr hænds…,",
            "Æn kéep yeuhr hært on chéck!",
            "",
            "[Verse 3]",
            "Dohn'wílt or drý yeuhr fyren'hært,",
            "Dohn'lét yeuhr flæme extínguish æwæy!",
            "Nǽver lét Prýda óvershadow yeuh,",
            "For hæm ítsælf es úgly æs hæm es.",
            "",
            "[Instrumental Buildup]",
            "",
            "[Verse 4]",
            "Ða hært es æ précious tóol…,",
            "Dohn'lét yeuhr mínd póison hæm..!",
            "For þa Hært es whæt mækes wéan whóle,",
            "Æn kéeps wéan býests rün wíþ dríve.",
            "",
            "[Final Chorus] x2",
            "Dohn'lét destrúction brǽch yeuhr hært..!~",
            "Dohn'lét yeuhr ówn blóod stæin yeuhr hænds…",
            "Æn kéep yeuhr hært on chéck!",
            "",
            "[Instrumental]",
            "[Outro]",
            "[FADE OUT]",
          ],
        }} />
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Backstory of &ldquo;Þa Hræven&apos;þa Býest&rdquo;</p>
          <div className="font-body text-sm text-[#c8c2ba] space-y-3 leading-relaxed">
            <p>This Chant isn&apos;t about manipulation or topping over foes. It&apos;s about not giving into the deepest pits where you can&apos;t recover from. This is about Courage and Self Esteem. This is sung using the dialect of Demons, Varnæn, which is known as Demonic Ghrenglish back in the World of Greungeria. The first case of this song was often used by Demons at first, but the meaning stuck well so much, it spread to other cultures. This song however, is hated by{" "}
              <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="text-[#c9a84c] hover:underline">Killer-Rabbits (also known as Werebels/Moonbels)</Link>,
              who break the very codes and meaning of this piece.</p>
            <p>The Demon Race in this world isn&apos;t really frowned upon. Other cultures view them with respectful autonomy because they&apos;re not demonic. They&apos;re beautiful creatures that have the ability to understand others even past those surface-level rumors and stereotypes.</p>
            <p>Other cultures view this chant as demonic since it relies heavily on the Varnæn dialect and since it came from the demons themselves. But don&apos;t be fooled. This song is well respected among other beast life who have the capability to understand demon language along with Sylphic Ghrenglish (Aeþerlen Dialect).</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* The Phrase I Love You */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-phrase-i-love-you">The Phrase "I Love You"</h2>
        <p className="font-body text-base text-[#c8c2ba]">This common phrase had ancient Ghrenglish variations, which has up to three versions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              phrase: "Éhn Éhnmo N'yue",
              type: "Masculine",
              desc: "A Masculine version of \"I love you.\" Spoken by men, for their significant other.",
              breakdown: ["Éhn — masculine for \"I\" or \"My\"", "Éhnmo — \"nmo\" derived from \"-amor\""],
            },
            {
              phrase: "Íhna Lhamé N'yua",
              type: "Feminine",
              desc: "A feminine version of \"I love you.\" Mostly spoken by females of the time. This version is from the Sylphic side of Ghrenglish.",
              breakdown: ["Íhna — feminized version of \"I\" and \"My\"", "Lhamé = Love, Amo(e)"],
              extra: "This phrase can also be translated not just to \"I love you,\" but also means: Gratitude, affection, personal love, yearning for love.",
            },
            {
              phrase: "Iihhń Igmoh 'yoo",
              type: "Familial / Neutral",
              desc: "A Familial phrase of \"I love you\" for family or platonic relationships / friendships. A neutral phrase of saying: \"I adore you\" or \"you're the best.\" Not for romantic phrases.",
              breakdown: ["Iihhń — a slow, neutral sounding \"I\" or \"my\"", "Ignis + Amo = Igmoh", "Ignis being fire, or passion"],
            },
          ].map((item, i) => (
            <div key={i} className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
              <div>
                <p className="font-display text-base text-[#f2ebeb] italic">{item.phrase}</p>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mt-1">{item.type}</p>
              </div>
              <p className="font-body text-sm text-[#c8c2ba]">{item.desc}</p>
              <ul className="font-body text-xs text-[#7a746e] space-y-0.5">
                {item.breakdown.map((b, j) => <li key={j}>— {b}</li>)}
              </ul>
              {item.extra && <p className="font-body text-xs text-[#c9a84c] italic">{item.extra}</p>}
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Dialectal Splits */}
      <section className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="dialectal-splits">Dialectal Splits</h2>

        {/* Varnæn Dialect */}
        <div className="space-y-4">
          <div className="border-l-2 border-[#c9a84c] pl-4">
            <h3 className="font-display text-base text-[#f2ebeb]">─⊰ Varnæn Dialect</h3>
            <p className="font-body text-xs text-[#c9a84c] tracking-widest uppercase mt-0.5">Demonic Ghrenglish</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-body text-sm text-[#c8c2ba]">
            <div><span className="text-[#7a746e]">Tone: </span>Harsh, clipped, guttural</div>
            <div><span className="text-[#7a746e]">Context: </span>Curses, abyssal rituals, dark sorcery</div>
            <div><span className="text-[#7a746e]">Traits: </span>Uses "sk, dr, gh, kh," and glottal breaks; verbs end in -nuhl, -aem, -farg</div>
          </div>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Phrasebook</p>
            {[
              ["Skærøl Ǧhrün'pæarou!", "Deformed child from womb."],
              ["Z'uhl'nahr khæm'nuhl draeg.", "Zohl's name be crushed in fire."],
              ["Færrün drak'hæl. Maezja fraeg'nuhl.", "Flame devours. Magic breaks."],
              ["Groun skhaer farg'kaem.", "Blood cries vengeance."],
              ["Thurn kael, nahr døhn.", "Fall low, stay gone."],
            ].map(([phrase, trans], i) => (
              <div key={i} className="flex gap-3 py-1.5 border-b border-[#1a1714] last:border-0">
                <p className="font-body text-sm text-[#f2ebeb] italic flex-1">{phrase}</p>
                <p className="font-body text-sm text-[#7a746e] flex-1">{trans}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="font-display text-base text-[#f2ebeb] italic">Skærøl Ǧhrün&apos;pæarou</p>
            <p className="font-body text-xs text-[#7a746e]">/skae-rohl gʁu:n-pɛə-roʊ/</p>
            <p className="font-body text-sm text-[#c8c2ba]">An insult. A derogatory phrase and term. It is a demonic dialect from Ghrenglish that loosely translates to:</p>
            <blockquote className="border-l-2 border-[#c9a84c] pl-5 py-1">
              <p className="font-body text-base text-[#c9a84c] italic">&ldquo;A deformed child from their mother&apos;s womb&rdquo;</p>
            </blockquote>
            <p className="font-body text-sm text-[#c8c2ba]">Highly offensive, even if it is used modernly. Often frowned upon when spoken because there are people who are victims of:</p>
            <ul className="font-body text-sm text-[#7a746e] space-y-1 ml-4 list-disc">
              <li>False Breedings who came out alive, but aren&apos;t the same.</li>
              <li>People who are orphans</li>
              <li>Or people who came out of a toxic, abusive relationship.</li>
            </ul>
            <p className="font-body text-sm text-[#c8c2ba] italic">It&apos;s never a good idea to insult someone you don&apos;t know.</p>
          </div>
        </div>

        <div className="border-t border-[#2e2b26]" />

        {/* Aeþerlen Dialect */}
        <div className="space-y-4">
          <div className="border-l-2 border-[#c9a84c] pl-4">
            <h3 className="font-display text-base text-[#f2ebeb]">─⊰ Aeþerlen Dialect</h3>
            <p className="font-body text-xs text-[#c9a84c] tracking-widest uppercase mt-0.5">Sylphic Ghrenglish</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-body text-sm text-[#c8c2ba]">
            <div><span className="text-[#7a746e]">Tone: </span>Breath-like, poetic, melodic</div>
            <div><span className="text-[#7a746e]">Context: </span>Prayers, nature communion, lullabies</div>
            <div><span className="text-[#7a746e]">Traits: </span>Uses "th, ll, ae, æ," and flowing vowels</div>
          </div>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Phrasebook</p>
            {[
              ["Hnthé Nhá Vaar", "It's never far from home."],
              ["Spæc'ren Leun æl Sol'ræ.", "Let the Light speak through the sun's soul."],
              ["Windsæl hæve æ'vahr'ná.", "Wind's grace follows your destiny."],
              ["Zho'uul'nah æl Maezja'ren.", "The shining stone watches over the magic."],
              ["Nhá líveska þyn mæra.", "Home breathes your hope."],
            ].map(([phrase, trans], i) => (
              <div key={i} className="flex gap-3 py-1.5 border-b border-[#1a1714] last:border-0">
                <p className="font-body text-sm text-[#f2ebeb] italic flex-1">{phrase}</p>
                <p className="font-body text-sm text-[#7a746e] flex-1">{trans}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="font-display text-base text-[#f2ebeb] italic">Hnthe Nha Varr</p>
            <p className="font-body text-xs text-[#7a746e]">hen - the / nha / faar</p>
            <p className="font-body text-sm text-[#c8c2ba]">Hnthé Nhá Vaar is a worldwide slang and phrase in the world of Hetra. Even the Sylphs use it.</p>
            <blockquote className="border-l-2 border-[#c9a84c] pl-5 py-1">
              <p className="font-body text-base text-[#c9a84c] italic">&ldquo;It&apos;s never far from Home&rdquo;</p>
            </blockquote>
            <p className="font-body text-sm text-[#c8c2ba]">"Hnthé Nhá Vaar" was apart of the ancient Hetranian language from 145 Oldendaye before everything became English in 1568 Aftendaye. People around the world seem to have kept the only ancient slang as-is because it sounds nostalgic and brings peace. The world dubs this as its only ancient language to keep it as original as possible.</p>
          </div>
          <div className="space-y-3">
            <p className="font-display text-base text-[#f2ebeb] italic">Íhna Lhamé N&apos;yua</p>
            <p className="font-body text-sm text-[#c8c2ba]">A feminine version of "I love you." Mostly spoken by females of the time. This version is from the Sylphic side of Ghrenglish.</p>
            <ul className="font-body text-sm text-[#7a746e] space-y-0.5 ml-4">
              <li>— Íhna — feminized version of "I" and "My"</li>
              <li>— Lhamé = Love, Amo(e)</li>
            </ul>
            <blockquote className="border-l-2 border-[#c9a84c] pl-5 py-1">
              <p className="font-body text-sm text-[#c9a84c] italic">This phrase can also be translated not just to "I love you," but also means: Gratitude, affection, personal love, yearning for love</p>
            </blockquote>
          </div>
          <p className="font-body text-sm text-[#c8c2ba]">There are some phrases that are spoken in Sylphic Ghrenglish. Sometimes, this dialect borrows guttural punctures from Demonic Ghrenglish to make their phrases more raw and honest. Both Sylphic and Demonic Languages respect each other&apos;s cultural dialect. There are many scholars from these two variations of Ghrenglish that are friends!</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Pronunciation Guide */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="pronunciation-guide">Pronunciation Guide</h2>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
          {[
            ["æ", "/æ/ as in \"cat\""],
            ["þ", "/θ/ as in \"think\""],
            ["ð", "/ð/ as in \"this\" (not yet used but available)"],
            ["ȝ", "/j/ or /ɣ/ depending on dialect"],
            ["Ǧ", "/gʁ/ or guttural /g/ (used in demonic dialects)"],
            ["ø", "/ø/ or /œ/ (as in French \"peur\")"],
            ["'", "Glottal stop or possessive marker"],
            ["á, é, í, ó, ú", "Indicates stress on that vowel"],
            ["\"c\" before \"i\" or \"e\"", "/s/; otherwise /k/"],
          ].map(([char, guide], i) => (
            <div key={i} className="flex gap-4 px-4 py-3 border-b border-[#1a1714] last:border-0">
              <p className="font-display text-sm text-[#c9a84c] w-24 shrink-0">{char}</p>
              <p className="font-body text-sm text-[#c8c2ba]">{guide}</p>
            </div>
          ))}
        </div>
        <div className="font-body text-sm text-[#7a746e] space-y-1 italic">
          <p>Examples:</p>
          <p>Skærøl → /ˈskæ.rʌl/</p>
          <p>Maezja → /ˈmaɪz.jə/ or /ˈmaez.ja/ (Sylphic)</p>
          <p>Færrün → /ˈfæɾ.ʁʊn/</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Sample Vocabulary */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="sample-vocabulary">Sample Vocabulary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { word: "Home", ghren: "Nhá /nɑː/", note: "Root for comfort/place of origin" },
            { word: "Far", ghren: "Vaar /vɑːr/", note: "Fade / distance / emotional parting" },
            { word: "Child", ghren: "Cild / Øl / Skærøl", note: "Øl = neutral, Skærøl = deformed/insult" },
            { word: "Womb", ghren: "Rou / Rhün /ruː/, /ʁʏn/", note: "Sacred space of origin" },
            { word: "Mother", ghren: "Moth'r / Mæhra", note: "Mæhra = poetic" },
            { word: "Never", ghren: "Hnthé /ˈhn̩.θeɪ/", note: "Used in cultural phrases" },
            { word: "Light", ghren: "Lióma / Leun", note: "From Latin lumen (light); Divine connotation" },
            { word: "Fire", ghren: "Fyr / Færrün", note: "Elemental root of Yeulversi" },
            { word: "Tree", ghren: "Þrægha /ˈθræg.hə/", note: "Ancient/rooted life" },
            { word: "Magic", ghren: "Maezja /ˈmaɪz.jə/", note: "Inspired by Latin magia; Shared root with Maeyen (spirit)" },
            { word: "Peace", ghren: "Sólrenn /ˈsoʊl.ɾɛn/", note: "From Latin sol (sun) + ren (still); poetic fusion" },
            { word: "Demon", ghren: "Dh'vel /ðəˈvɛl/", note: "Abyssal term for corrupted souls" },
            { word: "Janké", ghren: "Janké /ˈʒæŋ.ke/", note: "Purple hydroacidic vomit from a sea creature; used as a vulgar insult. Phrase: \"Piece of janké(d)\" to insult someone who smells and looks like vomit" },
          ].map((v, i) => (
            <div key={i} className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-1">
              <div className="flex justify-between items-baseline">
                <p className="font-display text-base text-[#f2ebeb]">{v.word}</p>
                <p className="font-body text-sm text-[#c9a84c] italic">{v.ghren}</p>
              </div>
              <p className="font-body text-xs text-[#7a746e]">{v.note}</p>
            </div>
          ))}
        </div>

        {/* Zho'uul */}
        <div className="border border-[#c9a84c]/20 bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <p className="font-display text-base text-[#f2ebeb] italic">Zho&apos;uul (ZHOH-ool)</p>
          <p className="font-body text-xs text-[#7a746e]">IPA: /ʒoʊ.ˈuːl/</p>
          <ul className="font-body text-sm text-[#c8c2ba] space-y-0.5">
            <li><span className="text-[#7a746e]">Meaning: </span>"Shining Stone"</li>
            <li><span className="text-[#7a746e]">Components: </span>Zho = shine/glow | &apos;uul = stone/core</li>
            <li><span className="text-[#7a746e]">Modern Evolution: </span>Zho&apos;uul → Zohl → Zephas</li>
          </ul>
          <p className="font-body text-sm text-[#c8c2ba]">Used as a title for divine beings, Zho&apos;uul is the original form of Zohl, the celestial creator appointed by King Nhavah.</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Pronouns & Honorifics */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="pronouns-honorifics">─────⊰ Pronouns & Honorifics</h2>

        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Personal Pronouns</p>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">English</p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Grhenglish</p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Notes</p>
            </div>
            {[
              ["I / Me", "Ín /iːn/", "Feminine: Íhna | Masculine: Éhn"],
              ["You (singular/informal)", "yeuh /ˈyeuh/", "Masc: N'yue | Fem: N'yua"],
              ["You're (plural/formal)", "yeuhrue /ˈyeuhrue/", "Respectful or plural \"you\""],
              ["Your (possessive/formal)", "yeuhr /ˈyeuhr/", "Formal possessive \"your\""],
              ["She / Her(s) / They(m)", "Shæm / hærs / Shæ'um", "Personal and Informal Use"],
              ["He / Him / His / They(m)", "Hæye / hæms / Hæsi / Hædte", "Personal and Informal Use"],
              ["He / She / They", "Hæm /hæm/", "Gender-neutral third-person, respectful"],
              ["We / Us", "Wéan /ˈweɪ.æn/", "Collective self"],
              ["They (plural)", "Hæmræn /ˈhæm.ræn/", ""],
            ].map(([en, gh, note], i) => (
              <div key={i} className="grid grid-cols-3 px-4 py-2.5 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors">
                <p className="font-body text-sm text-[#c8c2ba]">{en}</p>
                <p className="font-body text-sm text-[#f2ebeb] italic">{gh}</p>
                <p className="font-body text-xs text-[#7a746e]">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Honorifics & Titles</p>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
            {[
              ["Lord / Lady", "Vahla / Vahlé /ˈvɑː.lə/, /vɑːˈleɪ/", "Used in noble speech"],
              ["Master / Teacher", "Domhaer /ˈdɔm.hɛəɾ/", "Arcane / scholarly title"],
              ["Elder / Sage", "Thovanné /ˈθoʊ.væn.neɪ/", "Used in Sylphic dialects"],
              ["Warrior", "Bræknar /ˈbræk.nɑːɾ/", "Common among giants and combatants"],
              ["Divine / Blessed One", "Zho'haen /ʒoʊˈhaɪn/", "Title of reverence (e.g., Zho'uul)"],
            ].map(([title, ghren, note], i) => (
              <div key={i} className="grid grid-cols-3 px-4 py-2.5 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors">
                <p className="font-body text-sm text-[#c8c2ba]">{title}</p>
                <p className="font-body text-sm text-[#f2ebeb] italic">{ghren}</p>
                <p className="font-body text-xs text-[#7a746e]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Structural Use */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="structural-use">─────⊰ Structural Use</h2>
        <p className="font-body text-base text-[#c8c2ba]">Ghrenglish sentence structure typically follows these patterns:</p>
        <div className="space-y-3">
          {[
            { label: "Declarative", sub: "Subject + Verb + Object", note: "Most common structure in both dialects" },
            { label: "Interrogative", sub: "Question Word + Verb + Subject/Object", note: "Often begins with Whæ, Howr, Wheþer" },
            { label: "Command", sub: "Verb + Object / Subject (omitted often)", note: "Rituals, incantations, military speech" },
            { label: "Possessive", sub: "Noun + 'sæ / -rou or compound fusion", note: "Used for family ties or divine references" },
            { label: "Reflexive", sub: "Subject + Verb + self-phrase (ín'sæ, etc.)", note: "Seen in prayers and poetic lines" },
          ].map((s, i) => (
            <div key={i} className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-5 py-4 space-y-1">
              <p className="font-display text-base text-[#f2ebeb]">{s.label}</p>
              <p className="font-body text-sm text-[#c9a84c] italic">{s.sub}</p>
              <p className="font-body text-xs text-[#7a746e]">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Sentence Construction Templates */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="sentence-construction-templates">Sentence Construction Templates</h2>

        {[
          {
            label: "Ritual Speech",
            structure: "[Subject] + [Ancient Verb] + [Prepositional Phrase] + [Purpose/Command]",
            examples: [
              ["Zho'uul hæva þraesk ná Leun'pæar.", "The Shining Stone comes through Light's origin."],
              ["Spæc'ren Maezja! Dohn værahn æor'fae!", "Speak Magic! Open the seal of fate!"],
              ["Týnan þa eorðan, hæve Maezja'nahl.", "Bind the Earth, summon the High Magic."],
            ],
          },
          {
            label: "Insults",
            structure: "[Object/Person] + [Derogatory Modifier] + [Comparison/Origin Phrase]",
            examples: [
              ["Skærøl Ǧhrün'pæarou!", "Deformed child from the womb!"],
              ["Drægg'nuhl þa brækennn skaar!", "Filth of shattered bone!"],
              ["Færrün'vahr æn cild þa Void'hænn.", "Fire-faded like a child of the Void."],
            ],
          },
          {
            label: "Blessings",
            structure: "[Invocation] + [Positive Verb] + [Symbolic Object] + [Hope/Purpose]",
            examples: [
              ["Lióma'ren þynne þraesk hænh.", "Let the light guide your path."],
              ["Sólrenn mæra'næum vahr cild.", "Peace from the sun follows the child."],
              ["Nhá líveska þyn maezja.", "May home breathe your magic."],
            ],
          },
        ].map((section, i) => (
          <div key={i} className="space-y-3">
            <div className="border-l-2 border-[#c9a84c] pl-4">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">─────⊰ {section.label}</p>
              <p className="font-body text-xs text-[#7a746e] mt-1">Structure: {section.structure}</p>
            </div>
            <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
              {section.examples.map(([phrase, trans], j) => (
                <div key={j} className="flex gap-4 px-4 py-2.5 border-b border-[#1a1714] last:border-0">
                  <p className="font-body text-sm text-[#f2ebeb] italic flex-1">{phrase}</p>
                  <p className="font-body text-sm text-[#7a746e] flex-1">{trans}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Cultural Survivals */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="cultural-survivals">Cultural Survivals</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p><span className="italic">Hnthé Nhá Vaar</span> remains a living idiom used worldwide in Hetra, despite the fall of Ghrenglish. It evokes nostalgia and spiritual calm.</p>
          <p>(hen - the / nha / faar)</p>
          <p>Hnthé Nhá Vaar is a worldwide slang and phrase in the world of Hetra. It translates to: "It&apos;s never far from Home" — "Hnthé Nhá Vaar" was apart of the ancient Hetranian language from 145 Oldendaye before everything became English in 1568 Aftendaye. People around the world seem to have kept the only ancient slang as-is because it sounds nostalgic and brings peace. The world dubs this as its only ancient language to keep it as original as possible. Some of the locals have also turned this phrase into a soundtrack-like theme for it.</p>
        </div>
      </section>

      {/* Transition to Modern Hetranian English */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="the-transition-to-modern-hetranian-english">The Transition to Modern Hetranian English</h2>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>Modern Hetranian English developed as a natural evolution from Ancient Ghrenglish, carrying with it a blend of refined Latinic clarity and the melodic casualness reminiscent of Australian English. As a result, the dialect is recognized by:</p>
        </div>
        <ul className="font-body text-sm text-[#c8c2ba] space-y-1.5 ml-5 list-disc">
          <li>Smooth yet informal intonation, with rising sentence endings in casual speech</li>
          <li>Use of abbreviated contractions, blended vowels, and occasional glottal stops</li>
          <li>Latin-rooted structure in formal, legal, or divine language, especially among the educated or religious classes.</li>
        </ul>
        <div className="font-body text-base text-[#c8c2ba] space-y-4 leading-relaxed">
          <p>This unique fusion gives Hetranian English a tone that feels both ancient and approachable, used widely across all continents of Hetra. The decline of Ancient Ghrenglish began gradually after the fragmentation of the Greungerian supercontinent and the cultural dispersion of its people. As regional dialects like Aeþerlen and Varnæn fractured further, linguistic divergence increased.</p>
          <p>Between 1000 and 650 Oldendaye, formal use of Ghrenglish began to fade from everyday speech and was relegated to sacred texts, arcane rituals, and high literature. By 1568 Aftendaye, after the global standardization of education and political alliances between major continents, a newer form of streamlined, modern Hetranian English took hold.</p>
          <p>Certain phonetic forms, roots, and idioms (especially in blessings, place names, and noble titles) still retain Ghrenglish resonance — most notably seen in:</p>
        </div>
        <ul className="font-body text-sm text-[#c8c2ba] space-y-1.5 ml-5 list-disc italic">
          <li>Ritual phrases like Hnthé Nhá Vaar</li>
          <li>Divine names such as Zohl, Zephas, and Maezja</li>
          <li>Ceremonial titles like Zho&apos;haen and Thovanné</li>
        </ul>
        <p className="font-body text-sm text-[#c8c2ba]">This linguistic transition was not only organic but also symbolic — marking the end of the Divine Era and the rise of mortal civilizations across Hetra.</p>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Comparison Table */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb]" id="ghrenglish-vs-hetranian-english">Ghrenglish vs. Hetranian English</h2>
        <p className="font-body text-sm text-[#7a746e]">This table highlights the evolution and cultural blend that shaped Hetra&apos;s modern tongue while keeping its mythic core intact.</p>
        <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
          <div className="grid grid-cols-3 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Category</p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Ancient Ghrenglish</p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Modern Hetranian English</p>
          </div>
          {[
            ["Phonology", "Guttural, breathy, full of diacritics and flow", "Smoother, hybrid of Latin precision and Aussie rhythm"],
            ["Sentence Structure", "SVO (flexible), SOV in formal or ritual speech", "Primarily SVO with simplified grammar"],
            ["Vocabulary", "Mythic, metaphorical, nature-based", "More technical and practical, though poetic remnants remain"],
            ["Example Phrase", "Spæc'ren Maezja! — \"Speak Magic!\"", "Speak yer magic, mate! (casual) / Invoke the arcane. (formal)"],
            ["Tone", "Reverent, symbolic, sacred", "Earthy, melodic, versatile in tone"],
            ["Honorifics", "Zho'haen, Thovanné, Vahla", "Sir, Lady, Elder, Archmage"],
            ["Lingering Idioms", "Hnthé Nhá Vaar", "Still widely used as-is"],
          ].map(([cat, anc, mod], i) => (
            <div key={i} className="grid grid-cols-3 px-4 py-3 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors">
              <p className="font-body text-sm text-[#c9a84c] font-medium">{cat}</p>
              <p className="font-body text-sm text-[#c8c2ba] italic">{anc}</p>
              <p className="font-body text-sm text-[#c8c2ba]">{mod}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Learning Guide */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="font-display text-lg text-[#f2ebeb]" id="learning-guide-for-hetranian-ghrenglish">⭐ Learning Guide for Hetranian Ghrenglish</h2>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">A Beginner&apos;s Guide to the Language of Ancient Hetra</p>
        </div>

        {/* Introduction */}
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Ghrenglish is the ancient and sacred language of the Greungerian Era, once spoken by giants, sylphs, early humans, and divine beings on Planet Hetra. Though it eventually gave way to Modern Hetranian English, Ghrenglish lives on in idioms, names, and ceremonial traditions. This guide will teach foundational grammar, pronunciation, and usage for new learners.</p>

        {/* Alphabet */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#f2ebeb]">Alphabet & Special Characters</h3>
          <p className="font-body text-sm text-[#c8c2ba]">Ghrenglish uses the Latin alphabet with additional characters:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
            {[
              ["æ", "/æ/ as in \"cat\""],
              ["þ", "/θ/ as in \"think\""],
              ["ð", "/ð/ as in \"this\""],
              ["Ǧ", "/gʁ/ or hard guttural \"g\""],
              ["ø", "/ø/ or /œ/ as in French \"peur\""],
              ["'", "Glottal stop or possessive marker"],
              ["ȝ", "/j/ or /ɣ/ depending on dialect"],
            ].map(([c, g], i) => (
              <div key={i} className="flex gap-4 px-4 py-2.5 border-b border-[#1a1714] last:border-0">
                <p className="font-display text-sm text-[#c9a84c] w-8">{c}</p>
                <p className="font-body text-sm text-[#c8c2ba]">{g}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pronouns table */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#f2ebeb]">Pronouns (Personal)</h3>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2">
              {["English", "Grhenglish", "IPA"].map((h, i) => (
                <p key={i} className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">{h}</p>
              ))}
            </div>
            {[
              ["I / Me", "Ín", "/iːn/"],
              ["You (sing.)", "Þou", "/θaʊ/"],
              ["You (pl./form.)", "Þúren", "/ˈθuː.rɛn/"],
              ["He/She/They", "Hæm", "/hæm/"],
              ["We / Us", "Wéan", "/ˈweɪ.æn/"],
              ["They (plural)", "Hæmræn", "/ˈhæm.ræn/"],
            ].map(([en, gh, ipa], i) => (
              <div key={i} className="grid grid-cols-3 px-4 py-2.5 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors">
                <p className="font-body text-sm text-[#c8c2ba]">{en}</p>
                <p className="font-body text-sm text-[#f2ebeb] italic">{gh}</p>
                <p className="font-body text-xs text-[#7a746e]">{ipa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Basic Verbs */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#f2ebeb]">Basic Verbs & Conjugation</h3>
          <p className="font-body text-sm text-[#c8c2ba]">Verbs are regular with slight vowel changes for tense. Common verbs:</p>
          <ul className="font-body text-sm text-[#c8c2ba] space-y-1 ml-5 list-disc">
            <li><span className="text-[#f2ebeb] font-medium">hæve</span> — to have / hold</li>
            <li><span className="text-[#f2ebeb] font-medium">spæc</span> — to speak</li>
            <li><span className="text-[#f2ebeb] font-medium">værahn</span> — to follow / pursue</li>
            <li><span className="text-[#f2ebeb] font-medium">dohn</span> — to open / release</li>
            <li><span className="text-[#f2ebeb] font-medium">tynan</span> — to bind / secure</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: "Present Tense", examples: ["Ín hæve — I have", "Þou spæc — You speak"] },
              { label: "Past Tense", examples: ["Ín hævad — I had", "Þou spæced — You spoke"] },
              { label: "Future Tense", examples: ["Ín shall hæve — I shall have"] },
            ].map((t, i) => (
              <div key={i} className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-4 space-y-2">
                <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">{t.label}</p>
                {t.examples.map((e, j) => <p key={j} className="font-body text-sm text-[#c8c2ba] italic">{e}</p>)}
              </div>
            ))}
          </div>
        </div>

        {/* Pronunciation Drills */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#f2ebeb]">Pronunciation Drills</h3>
          <p className="font-body text-sm text-[#c8c2ba]">Practice saying the following aloud:</p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
            {[
              ["Spæc Maezja!", "/spæk ˈmaɪz.jə/", "Speak Magic!"],
              ["Nhá líveska þyn mæra.", "/nɑː ˈliː.vɛs.kə θɪn ˈmæ.ɾə/", "May home breathe your hope."],
              ["Færrün'vahr æn cild þa Void'hænn.", "/ˈfæɾ.ʁʊn.vɑːɾ æn kɪld ðə vɔɪd.hæn/", "Fire-faded like a child of the Void."],
            ].map(([phrase, ipa, trans], i) => (
              <div key={i} className="px-4 py-3 border-b border-[#1a1714] last:border-0 space-y-0.5">
                <p className="font-body text-sm text-[#f2ebeb] italic">{phrase}</p>
                <p className="font-body text-xs text-[#7a746e]">{ipa}</p>
                <p className="font-body text-xs text-[#c8c2ba]">{trans}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beginner Phrases Table */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#f2ebeb]">Beginner Phrases</h3>
          <div className="border border-[#2e2b26] rounded-sm overflow-hidden">
            <div className="grid grid-cols-2 bg-[#0f0d0c] border-b border-[#2e2b26] px-4 py-2">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">English</p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Grhenglish</p>
            </div>
            {[
              ["Hello", "Hælla"],
              ["Goodbye", "Dohn'sæ"],
              ["Thank you", "Mærra'lióma"],
              ["You're welcome", "Þou'sæ lióma"],
              ["My name is…", "Ín'sæ næuma es…"],
              ["Where are you from?", "Whæ þou hæve'pæar?"],
              ["Peace be with you", "Sólrenn þyn hæm"],
            ].map(([en, gh], i) => (
              <div key={i} className="grid grid-cols-2 px-4 py-2.5 border-b border-[#1a1714] last:border-0 hover:bg-[#151210] transition-colors">
                <p className="font-body text-sm text-[#c8c2ba]">{en}</p>
                <p className="font-body text-sm text-[#f2ebeb] italic">{gh}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Sentences */}
        <div className="space-y-3">
          <h3 className="font-display text-base text-[#f2ebeb]">Practice Sentences</h3>
          <p className="font-body text-sm text-[#7a746e]">Translate the following into Grhenglish:</p>
          <ol className="font-body text-sm text-[#c8c2ba] space-y-1 ml-5 list-decimal">
            <li>I hold magic.</li>
            <li>You speak light.</li>
            <li>We bind the earth.</li>
            <li>They follow the warrior.</li>
            <li>May home protect your child.</li>
          </ol>
        </div>

        {/* Final Notes */}
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Final Notes</p>
          <ul className="font-body text-sm text-[#c8c2ba] space-y-1.5 ml-4 list-disc">
            <li>Grhenglish thrives in tone, symbol, and story.</li>
            <li>Even a few words spoken aloud connect speakers to Hetra&apos;s divine heritage.</li>
            <li>Begin with blessings and poetic fragments, then build toward full rituals or songs.</li>
          </ul>
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 mt-3">
            <p className="font-body text-base text-[#c9a84c] italic">&ldquo;Hnthé Nhá Vaar&rdquo; — It&apos;s never far from home.</p>
          </blockquote>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Bottom nav */}
      <div className="flex flex-wrap gap-4 items-center justify-between pt-4">
        <Link
          to="/world/databases"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to World Databases
        </Link>
      </div>

    </div>
  </LorePageLayout>
  );
}
