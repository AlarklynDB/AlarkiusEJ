import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
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

export default function ChantOfBeasts() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16 space-y-12">

      {/* Breadcrumb */}
      <nav className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] flex gap-2 items-center">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">World Databases</Link>
        <span>/</span>
        <Link to="/world/databases/AncientGreungeria" className="hover:text-[#c9a84c] transition-colors">Ancient Greungeria</Link>
        <span>/</span>
        <span className="text-[#7a746e]">The Chant of Beasts</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">II. Ancient History — Hetranian Ghrenglish</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb]">“The Chant of Beasts”</h1>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Þa Hræven’þa Býest — Varnæn Dialect (Demonic Ghrenglish)</p>
      </div>

      <SongCard song={{
        title: "“The Chant of Beasts”",
        subtitle: "Þa Hræven’þa Býest",
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
          "Ðís es þa Hræven’þa Býest,",
          "Es þa fýerl’of Bælence æn Prýda.",
          "Es æll’æbout þa sürǧen býest,",
          "Só lét hæm stænd’out wíþ strængþa.",
          "",
          "[Verse 2]",
          "Dohn’lét þa lóaþen cóme for yeuh,",
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
          "Dohn’lét destrúction brǽch yeuhr hært..!~",
          "Dohn’lét yeuhr ówn blóod stæin yeuhr hænds…,",
          "Æn kéep yeuhr hært on chéck!",
          "",
          "[Verse 3]",
          "Dohn’wílt or drý yeuhr fyren’hært,",
          "Dohn’lét yeuhr flæme extínguish æwæy!",
          "Nǽver lét Prýda óvershadow yeuh,",
          "For hæm ítsælf es úgly æs hæm es.",
          "",
          "[Instrumental Buildup]",
          "",
          "[Verse 4]",
          "Ða hært es æ précious tóol…,",
          "Dohn’lét yeuhr mínd póison hæm..!",
          "For þa Hært es whæt mækes wéan whóle,",
          "Æn kéeps wéan býests rün wíþ dríve.",
          "",
          "[Final Chorus] x2",
          "Dohn’lét destrúction brǽch yeuhr hært..!~",
          "Dohn’lét yeuhr ówn blóod stæin yeuhr hænds…",
          "Æn kéep yeuhr hært on chéck!",
          "",
          "[Instrumental]",
          "[Outro]",
          "[FADE OUT]",
        ],
      }} />

      <div className="border-t border-[#2e2b26]" />

      {/* Backstory */}
      <section className="space-y-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Backstory of “Þa Hræven’þa Býest”</p>
        <div className="font-body text-sm text-[#c8c2ba] space-y-3 leading-relaxed">
          <p>This Chant isn&apos;t about manipulation or topping over foes. It&apos;s about not giving into the deepest pits where you can&apos;t recover from. This is about Courage and Self Esteem. This is sung using the dialect of Demons, Varnæn, which is known as Demonic Ghrenglish back in the World of Greungeria. The first case of this song was often used by Demons at first, but the meaning stuck well so much, it spread to other cultures. This song however, is hated by{" "}
            <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="text-[#c9a84c] hover:underline">Killer-Rabbits (also known as Werebels/Moonbels)</Link>,
            who break the very codes and meaning of this piece.</p>
          <p>The Demon Race in this world isn&apos;t really frowned upon. Other cultures view them with respectful autonomy because they&apos;re not demonic. They&apos;re beautiful creatures that have the ability to understand others even past those surface-level rumors and stereotypes.</p>
          <p>Other cultures view this chant as demonic since it relies heavily on the Varnæn dialect and since it came from the demons themselves. But don&apos;t be fooled. This song is well respected among other beast life who have the capability to understand demon language along with Sylphic Ghrenglish (Aeþerlen Dialect).</p>
        </div>
      </section>

      {/* Bottom nav */}
      <div className="flex flex-wrap gap-4 items-center justify-between pt-4">
        <Link
          to="/world/databases/AncientGreungeria"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to Ancient Greungeria
        </Link>
      </div>

    </div>
  );
}
