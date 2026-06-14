import { Link } from "react-router-dom";

export default function LearningGuide() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16 space-y-12">

      {/* Breadcrumb */}
      <nav className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] flex gap-2 items-center">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">World Databases</Link>
        <span>/</span>
        <Link to="/world/databases/AncientGreungeria" className="hover:text-[#c9a84c] transition-colors">Ancient Greungeria</Link>
        <span>/</span>
        <span className="text-[#7a746e]">Learning Guide</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">II. Ancient History &mdash; Hetranian Ghrenglish</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb]">&#11088; Learning Guide for Hetranian Ghrenglish</h1>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">A Beginner&apos;s Guide to the Language of Ancient Hetra</p>
      </div>

      {/* Introduction */}
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Ghrenglish is the ancient and sacred language of the Greungerian Era, once spoken by giants, sylphs, early humans, and divine beings on Planet Hetra. Though it eventually gave way to Modern Hetranian English, Ghrenglish lives on in idioms, names, and ceremonial traditions. This guide will teach foundational grammar, pronunciation, and usage for new learners.</p>

      {/* Alphabet */}
      <div className="space-y-3">
        <h3 className="font-display text-base text-[#f2ebeb]">Alphabet &amp; Special Characters</h3>
        <p className="font-body text-sm text-[#c8c2ba]">Ghrenglish uses the Latin alphabet with additional characters:</p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
          {[
            ["æ", "/æ/ as in "cat""],
            ["þ", "/θ/ as in "think""],
            ["ð", "/ð/ as in "this""],
            ["Ǧ", "/gʁ/ or hard guttural "g""],
            ["ø", "/ø/ or /œ/ as in French "peur""],
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
            ["I / Me", "Ín", "/iʻn/"],
            ["You (sing.)", "Þau", "/θaʊ/"],
            ["You (pl./form.)", "Þúren", "/ˈθuʻ.rɛn/"],
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
        <h3 className="font-display text-base text-[#f2ebeb]">Basic Verbs &amp; Conjugation</h3>
        <p className="font-body text-sm text-[#c8c2ba]">Verbs are regular with slight vowel changes for tense. Common verbs:</p>
        <ul className="font-body text-sm text-[#c8c2ba] space-y-1 ml-5 list-disc">
          <li><span className="text-[#f2ebeb] font-medium">hæve</span> &mdash; to have / hold</li>
          <li><span className="text-[#f2ebeb] font-medium">spæc</span> &mdash; to speak</li>
          <li><span className="text-[#f2ebeb] font-medium">værahn</span> &mdash; to follow / pursue</li>
          <li><span className="text-[#f2ebeb] font-medium">dohn</span> &mdash; to open / release</li>
          <li><span className="text-[#f2ebeb] font-medium">tynan</span> &mdash; to bind / secure</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: "Present Tense", examples: ["Ín hæve — I have", "Þau spæc — You speak"] },
            { label: "Past Tense", examples: ["Ín hævad — I had", "Þau spæced — You spoke"] },
            { label: "Future Tense", examples: ["Ín shall hæve — I shall have"] },
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
            ["Nhá líveska þyn mæra.", "/nɑʻ ˈliʻ.vɛs.kə θɪn ˈmæ.ɾə/", "May home breathe your hope."],
            ["Færrün'vahr æn cild þa Void'hænn.", "/ˈfæɾ.ʁʊn.vɑʻr æn kɪld ðə vɔɪd.hæn/", "Fire-faded like a child of the Void."],
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
            ["My name is…", "Ín'sæ næuma es…"],
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
          <p className="font-body text-base text-[#c9a84c] italic">&ldquo;Hnthé Nhá Vaar&rdquo; &mdash; It&apos;s never far from home.</p>
        </blockquote>
      </div>

      <div className="border-t border-[#2e2b26]" />

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
