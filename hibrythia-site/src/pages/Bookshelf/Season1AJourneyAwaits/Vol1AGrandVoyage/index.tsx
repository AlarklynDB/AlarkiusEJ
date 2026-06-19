import { Link } from "react-router-dom";

export default function Vol1AGrandVoyage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/bookshelf/season1"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Season 1
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Season 1: Journey Awaits!
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          Volume 1: A Grand Voyage
        </h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed max-w-[640px]">
          Three books. One beginning. A world beyond time.
        </p>
      </div>

      {/* Book I */}
      <div className="space-y-6">
        <div>
          <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-2">Book I</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
            Hibryds &#8212; A Grand Voyage
          </h2>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-6">
            The Hibrythian Saga &#8212; Volume 1, Book 1
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Book&#39;s Blurb</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In a universe where creation is art, the balance of good and evil hangs by a thread! Zohl, who is a Spirit of Creation, believes that he has executed a flawless world: a planet full of wonders! However, this was halted by a threat, who was soon defeated with the help from his friends. But when the shadows of his past refuse to fade away, even when new friendships form in unexpected places, Zohl&#39;s concept of perfection is put to the test.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Enter Raeya Flutters, an enigmatic sylph that spreads joyful banter wherever she goes! And meet Kydel, a person of his own making, who casually becomes a pawn in Zohl&#39;s selfish plan. As he navigates the complexities of friendship, trust, and the weight of his own decisions, the pristine world he envisioned begins to rise with conflict.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Can he learn to embrace the flaws in his creation and redeem himself before it&#39;s too late? Embark with Zohl on a powerful journey filled with wonder, self-discovery, and a reality that no plan is <em>truly perfect</em>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            &#34;Hibryds &#8212; A Grand Voyage&#34; invites you to dive deep into the heart of genuine connections and a vast world of greatness!
          </p>
        </div>

        {/* Content warnings / interest tags */}
        <div className="space-y-2">
          <p className="font-body text-sm text-[#7a746e] leading-relaxed">For those interested in:</p>
          <ul className="list-none space-y-1">
            {[
              "Violent Battles (mutilation, gore, blood)",
              "Slice of Life",
              "Progressive Adventure",
              "Action Packed Epic",
              "Anime-style Novel",
              "Overpowered Characters",
              "Cinematic Universe",
              "Superheroes & Monsters",
              "Magic & Adventure",
              "Science Fiction Fantasy",
              "Contemporary & High Fantasy",
            ].map((item) => (
              <li key={item} className="font-body text-sm text-[#c8c2ba] flex items-start gap-2">
                <span className="text-[#c9a84c] mt-0.5">&#8250;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Genres */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Genres of the Book</h3>
          <div className="space-y-2">
            <p className="font-body text-sm text-[#c8c2ba]">1. Adventure (progressive)</p>
            <p className="font-body text-sm text-[#c8c2ba]">2. Fantasy</p>
            <p className="font-body text-sm text-[#7a746e] mt-3">Other Genres Mixed in:</p>
            <p className="font-body text-sm text-[#c8c2ba]">1. Action</p>
            <p className="font-body text-sm text-[#c8c2ba]">2. Superhero</p>
            <p className="font-body text-sm text-[#c8c2ba]">3. Magic</p>
            <p className="font-body text-sm text-[#c8c2ba]">4. Mixtures of Contemporary, Epic, High, and Sci-Fi!</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://alarkiusej.com/bn-hibrythian-saga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#c9a84c]/60 bg-[#1a1714] text-[#c9a84c] font-display text-sm hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-200"
        >
          Now Available on B&amp;N &#8599;
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2e2b26]" />

      {/* Book II */}
      <div className="space-y-6">
        <div>
          <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-2">Book II</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
            Hibryds &#8212; The Entity of Doubt
          </h2>
          <span className="inline-block font-body text-[9px] tracking-widest uppercase text-[#c9a84c] border border-[#c9a84c]/40 rounded-sm px-2 py-0.5 mb-6">
            In Development
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Book&#39;s Blurb</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-4">
            The Return of Eienel
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            After the devastating events of Kydel&#39;s rampage during his battle with Rachnaea, he&#39;s left questioning everything&#8212;his powers, his worth, and his place among his friends. Nearly consumed by self-doubt, his emotions lashed out where he didn&#39;t mean to. Yet even as he helps Zohl see that imperfection is part of being human, a far greater threat looms&#8230;
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A forgotten name resurfaces: Eienel&#8212;a foe from Zohl&#39;s haunted past, now poised to return with vengeance&#8230; or worse, destruction. The fate of the world may lie in Kydel&#39;s hands, but his mind is far from ready. Can Kydel face the truth of who he is, and wield the monstrous powers he fears will define him? Or will his doubts open the door for Eienel&#39;s escape?
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Venture forth into Book 2 of the Hibrythian Saga&#8212;Hibryds: The Entity of Doubt&#8212;where acceptance may be Kydel&#39;s greatest battle of all.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-body text-sm text-[#7a746e]">Other Information</p>
          <p className="font-body text-sm text-[#c8c2ba]">Audience: 17+</p>
        </div>

        {/* Genres */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Genres of the Book</h3>
          <div className="space-y-2">
            <p className="font-body text-sm text-[#c8c2ba]">1. Adventure (progressive)</p>
            <p className="font-body text-sm text-[#c8c2ba]">2. Fantasy</p>
            <p className="font-body text-sm text-[#7a746e] mt-3">Other Genres Mixed in:</p>
            <p className="font-body text-sm text-[#c8c2ba]">1. Action</p>
            <p className="font-body text-sm text-[#c8c2ba]">2. Superhero</p>
            <p className="font-body text-sm text-[#c8c2ba]">3. Magic</p>
            <p className="font-body text-sm text-[#c8c2ba]">4. Mixtures of Contemporary, Epic, High, and Sci-Fi!</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2e2b26]" />

      {/* Book III */}
      <div className="space-y-6">
        <div>
          <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-2">Book III</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
            Hibryds &#8212; (TBD)
          </h2>
          <span className="inline-block font-body text-[9px] tracking-widest uppercase text-[#4a4844] border border-[#2e2b26] rounded-sm px-2 py-0.5 mb-6">
            Under Construction &#8212; Content Coming Soon
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Book&#39;s Blurb</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">TBD</p>
        </div>

        <div className="space-y-2">
          <p className="font-body text-sm text-[#7a746e]">Other Information</p>
          <p className="font-body text-sm text-[#c8c2ba]">Audience: 17+</p>
        </div>

        {/* Genres */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Genres of the Book</h3>
          <div className="space-y-2">
            <p className="font-body text-sm text-[#c8c2ba]">1. Adventure (progressive)</p>
            <p className="font-body text-sm text-[#c8c2ba]">2. Fantasy</p>
            <p className="font-body text-sm text-[#7a746e] mt-3">Other Genres Mixed in:</p>
            <p className="font-body text-sm text-[#c8c2ba]">1. Action</p>
            <p className="font-body text-sm text-[#c8c2ba]">2. Superhero</p>
            <p className="font-body text-sm text-[#c8c2ba]">3. Magic</p>
            <p className="font-body text-sm text-[#c8c2ba]">4. Mixtures of Contemporary, Epic, High, and Sci-Fi!</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/bookshelf/season1"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Season 1: Journey Awaits!</p>
          </div>
        </Link>
        <div />
      </div>

    </div>
  );
}
