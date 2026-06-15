import { Link } from 'react-router-dom';

export default function HibrythianReligions() {
  return (
    <div className="min-h-screen bg-[#100908]">
      <div className="max-w-[960px] mx-auto px-6 py-20 space-y-12">

        {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          III. The Inner Gears
        </p>

        {/* Page Title — HdTextDSize */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Hibrythian Religions</h1>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-3">The Four Major Faiths of Hetra</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Religion across Hetra and its surrounding realms has evolved through millennia, branching from primordial divine sources into distinct belief systems that shape cultures, magic, and the hearts of its people. These four faiths — <strong className="text-[#f2ebeb]">Laeyanism</strong>, <strong className="text-[#f2ebeb]">Gianquisim</strong>, <strong className="text-[#f2ebeb]">Valthoreia</strong>, and <strong className="text-[#f2ebeb]">Nahfianism</strong> — represent the spiritual landscape of The Hibrythian Saga.
          </p>
        </div>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── LAEYANISM ── */}
        <section className="space-y-6">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">🌟 The Eternal Source</p>
            <h2 className="font-display text-lg text-[#f2ebeb]">Laeyanism</h2>
          </div>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors space-y-5">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Overview</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Laeyanism is the worship of <Link to="/characters/QueenLaeyana" className="text-[#c9a84c] hover:underline">Queen Laeyana</Link>, the <strong className="text-[#f2ebeb]">Goddess of Magic</strong> and one of the ancient Lhumerials who exists within 10 dimensions. As the primordial source of magic on Hetra, Laeyana is revered not as a distant, unknowable god, but as the <strong className="text-[#f2ebeb]">living wellspring</strong> from which all arcane power flows. There aren&apos;t many people who follow Laeyanism. But those who do are called <strong className="text-[#f2ebeb]">Laeyanists</strong>.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Core Beliefs</h4>
              <div className="space-y-2">
                {[
                  ['Magic is Divine', 'All magic comes from Queen Laeyana herself. To wield magic is to touch divinity.'],
                  ['The Four Sacred Types', 'Laeyana bestows four types of magic upon the worthy: General, Combat, Elemental, and Infernal.'],
                  ['Lost Magic as Sacred Mystery', 'Witchcraft and Amberian Magic are considered holy relics of a forgotten age, their loss mourned as spiritual wounds.'],
                  ['Divine Magicians', 'Those who master all five types of magic are honored with the title "Divine Magician," seen as Laeyana\'s chosen.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Practices &amp; Rituals</h4>
              <div className="space-y-2">
                {[
                  ['Staff Altars', 'Sacred sites scattered across Hetra where Laeyana\'s presence can be felt. Touching a Staff Altar may grant magical powers to the worthy.'],
                  ['Arcane Meditation', 'Scholars and mages engage in philosophical meditations, treating spellwork as prayer.'],
                  ['Invocations', 'Before casting powerful magic, practitioners may whisper "By Laeyana\'s grace" or "Maezja\'ren Laeyana" (Magic of Laeyana).'],
                  ['The Festival of Five Flames', 'Annual celebration honoring the Five Giants who first mastered Laeyana\'s magic.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Followers</h4>
              <div className="space-y-1">
                {['Mages, scholars, and magic users across all of Hetra','Academic institutions and magical universities','The Divine Order of the Arcane — A monastic order dedicated to studying Laeyana\'s teachings'].map(f => (
                  <div key={f} className="flex gap-3"><span className="text-[#c9a84c] shrink-0">—</span><p className="font-body text-base text-[#c8c2ba] leading-relaxed">{f}</p></div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">Sacred Symbols</h4>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Galactic Orb · The Five-Pointed Star (each point a type of magic) · <span className="text-[#c9a84c]">Colors: Gold, silver, and deep violet</span></p>
            </div>
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
                &ldquo;Lióma&apos;ren þynne þraesk hænh. Maezja æl Laeyana.&rdquo;
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-1">
                &ldquo;Let the light guide your path. Magic of Laeyana.&rdquo; — Common prayer
              </p>
            </blockquote>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── GIANQUISIM ── */}
        <section className="space-y-6">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">⚔️ The Old Faith</p>
            <h2 className="font-display text-lg text-[#f2ebeb]">Gianquisim</h2>
          </div>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors space-y-5">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Overview</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Gianquisim is the ancient worship of <strong className="text-[#f2ebeb]">The Five Giants of Greungeria</strong> — primordial beings who once walked Hetra and held mastery over the five types of magic bestowed by Queen Laeyana. This is the <strong className="text-[#f2ebeb]">Old Faith</strong>, practiced by traditionalists, historians, and those who honor the world&apos;s mythic past. Those who still follow this ancient faith are called <strong className="text-[#f2ebeb]">Gianquists</strong>.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Five Giants — The Sacred Quintet</h4>
              <div className="space-y-2">
                {[
                  ['Vivianya, The Sylph Nomad', 'Master of Sylph Magic (Healing & Tranquil)'],
                  ['Yeulversi, The Human Ifrit', 'Master of Infernal Magic'],
                  ['Balkohv, The Nezphel Human', 'Master of Elemental Magic'],
                  ['Grenhcius, The Combat Cyborg', 'Master of Combat Magic'],
                  ['Escaelui, The Human Giant', 'Master of General Magic'],
                ].map(([name, role], i) => (
                  <div key={name} className="flex gap-3">
                    <span className="font-display text-sm text-[#c9a84c] shrink-0">{i + 1}.</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{name}</strong> — {role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Core Beliefs</h4>
              <div className="space-y-2">
                {[
                  ['The Giants as Intermediaries', 'The Five Giants were chosen by Laeyana to teach magic to mortals. They are demigods, bridges between the divine and the earthly.'],
                  ['Ancient Wisdom', 'The Giants\' knowledge shaped the Hetranian Calendar, established magical law, and protected early civilizations.'],
                  ['The Greungerian Covenant', 'Believers honor the Giants\' sacrifice and stewardship of the "Father Continent."'],
                  ['The Sacred Chants', 'Ritual songs like "The Chant of Beasts" are prayers in Varnæn (Demonic Ghrenglish).'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Practices &amp; Rituals</h4>
              <div className="space-y-2">
                {[
                  ['Temple Pilgrimages', 'Ancient stone temples dedicated to each Giant still stand across Hetra\'s continents.'],
                  ['The Quintet Offering', 'Followers leave offerings at five altars (one for each Giant) during the solstices.'],
                  ['Oral Traditions', 'Elders recite the Ballad of the Five in Ancient Ghrenglish.'],
                  ['Giant\'s Day', 'Each Giant has a dedicated day of remembrance throughout the year.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">Sacred Symbols</h4>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Quintet Seal (five interlocking circles) · Stone Tablets carved with Ghrenglish scripture · <span className="text-[#c9a84c]">Colors: Brown, bronze, deep green, charcoal, amber</span></p>
            </div>
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
                &ldquo;Bræknar þa Gianté, hæve Maezja&apos;nahl.&rdquo;
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-1">
                &ldquo;Warriors of the Giants, summon the High Magic.&rdquo; — Common prayer
              </p>
            </blockquote>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── VALTHOREIA ── */}
        <section className="space-y-6">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">❄️ The Winter Moon Faith</p>
            <h2 className="font-display text-lg text-[#f2ebeb]">Valthoreia</h2>
          </div>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors space-y-5">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Overview</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Valthoreia is the modern worship of <strong className="text-[#f2ebeb]">Queen Eira Valthorne</strong>, the <strong className="text-[#f2ebeb]">Winter Moon Monarch</strong> — a powerful queen from ancient times who was deified after her mysterious disappearance. This is a <strong className="text-[#f2ebeb]">mortal-turned-divine</strong> faith, relatable and beloved by common folk, especially in northern and winter regions. Valthoreia is still one of the strongest religions currently in Modern Hetra. The people are called <strong className="text-[#f2ebeb]">Valthoreians</strong>. Valthoreia is the current modern religion on Planet Hetra.
              </p>
              <p className="font-body text-sm text-[#7a746e] leading-[1.85] mt-2 italic">
                Note: Eira Valthorne isn&apos;t a god or immortal. She&apos;s an all-powerful Ice Mage who ages very slowly.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Core Beliefs</h4>
              <div className="space-y-2">
                {[
                  ['Mortals Can Ascend', 'Queen Eira\'s deification proves that mortals can transcend through heroism, sacrifice, and divine blessing.'],
                  ['The Heart of Winter', 'Eira\'s heart was said to be carved from eternal winter, her crown woven from moonlight and blackfrost.'],
                  ['Balance Through Cold', 'Winter is not cruelty — it is protection, preservation, and the promise of renewal.'],
                  ['The Vanishing', 'Eira disappeared on a midwinter\'s eve. Some say she dissolved into snowflakes; others believe she merged with the moon Zenya.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Practices &amp; Rituals</h4>
              <div className="space-y-2">
                {[
                  ['The Midwinter Festival', 'Celebrated on the 55th day of Muhulmber (12th month). The most sacred holiday in Valthoreia.'],
                  ['Frostblooms', 'Crystalline flowers made from ice, bluebloom flowers, and enchanted herbs, placed in windows to guide Eira\'s spirit home.'],
                  ['The Blue Bonfire', 'At day\'s end, a blue flame is lit to help Eira\'s spirit pass peacefully.'],
                  ['Winter Offerings', 'Food is prepared not just for the living, but for Eira\'s spirit, who loved feasting with her people.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Followers</h4>
              <div className="space-y-1">
                {[
                  'Common folk across northern continents and cold regions',
                  'The Kingdom of Valthorne\'s descendants',
                  'Winter travelers, hunters, and those who brave the Alarctic Alpines',
                  'The Frostguard Clergy — Priests and priestesses who tend the Alarctic Ice Palace',
                ].map(f => (
                  <div key={f} className="flex gap-3"><span className="text-[#c9a84c] shrink-0">—</span><p className="font-body text-base text-[#c8c2ba] leading-relaxed">{f}</p></div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">Sacred Symbols</h4>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Crescent Moon · The Frostbloom (symbol of guidance and remembrance) · <span className="text-[#c9a84c]">Colors: Icy blue, silver, white, and deep indigo</span></p>
            </div>
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
                &ldquo;Eira Vahla, hæve Zenya&apos;nahl. Sólrenn mæra&apos;næum vahr.&rdquo;
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-1">
                &ldquo;Lady Eira, summon the moon&apos;s blessing. Peace from the sun follows.&rdquo; — Common prayer
              </p>
            </blockquote>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── NAHFIANISM ── */}
        <section className="space-y-6">
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">☁️ The Sylph Faith</p>
            <h2 className="font-display text-lg text-[#f2ebeb]">Nahfianism</h2>
          </div>

          <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-6 py-6 transition-colors space-y-5">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Overview</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Nahfianism is the spiritual practice of <strong className="text-[#f2ebeb]">the Sylphs</strong>, centered on <Link to="/characters/NahfiaAlphraey" className="text-[#c9a84c] hover:underline">Nahfia, The Spirit of Sylphs</Link> — the divine being who created the Sylphrelm (Cloud Abode) and saved the Sylph race from extinction. This faith is unique to Sylph culture, emphasizing healing, peace, song, and community. Sylphs alike, not just humans from Hetra, are called <strong className="text-[#f2ebeb]">Nahfians</strong>.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Core Beliefs</h4>
              <div className="space-y-2">
                {[
                  ['Nahfia as Savior & Creator', 'After the Sylph Massacre of 19 AD, Nahfia created the Sylphrelm, a sanctuary realm for her people.'],
                  ['Healing is Sacred', 'Sylph Magic (Healing + Tranquil) is a divine gift meant to nurture, protect, and bring peace.'],
                  ['Songs are Prayers', 'Music in Aeþerlen (Sylphic Ghrenglish) is the highest form of worship.'],
                  ['Community Over Self', 'The Sylphrelm thrives because Sylphs care for one another. Isolation is spiritual death.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Practices &amp; Rituals</h4>
              <div className="space-y-2">
                {[
                  ['Morning & Evening Hymns', 'Sung in Aeþerlen at dawn and dusk, echoing across the Cloud Abode.'],
                  ['The Anthem of Healing and Peace', 'A sacred choral piece sung during major ceremonies.'],
                  ['Rainbow Funnel Blessings', 'Priests bless travelers using the Rainbow Funnels (ley-lines) that connect realms.'],
                  ['The Festival of Sanctuary', 'Annual celebration honoring the creation of the Sylphrelm.'],
                  ['Healing Circles', 'Communal gatherings where Sylphs practice Tranquil Magic to soothe the wounded.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-[#c9a84c] mt-[3px] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong className="text-[#f2ebeb]">{title}</strong> — {desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Followers</h4>
              <div className="space-y-1">
                {[
                  'All Sylphs across the Sylphrelm\'s three provinces',
                  'Mystic Dryads who helped call upon Nahfia during the massacre',
                  'The Song Keepers — Sylphs who preserve sacred songs and teach them to the young',
                  'The Rainbow Wardens — Guardians of the Rainbow Funnels',
                ].map(f => (
                  <div key={f} className="flex gap-3"><span className="text-[#c9a84c] shrink-0">—</span><p className="font-body text-base text-[#c8c2ba] leading-relaxed">{f}</p></div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">Sacred Symbols</h4>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Rainbow Spiral · The Cloud Lotus (blooms only in the Sylphrelm) · <span className="text-[#c9a84c]">Colors: Sky blue, lavender, mint green, pale gold</span></p>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">The Seven Virtues of Nahfia</h4>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Compassion · Patience · Harmony · Gentleness · Healing · Song · Community</p>
            </div>
            <div>
              <h4 className="font-display text-base text-[#f2ebeb] mb-3">Religious Figures</h4>
              <div className="space-y-1">
                {[
                  'High Priestess Aloe Frey — Leader of the Southwing Sylphs and spiritual guide',
                  'The Sylph Council — Five leaders who also serve as religious authorities',
                ].map(f => (
                  <div key={f} className="flex gap-3"><span className="text-[#c9a84c] shrink-0">—</span><p className="font-body text-base text-[#c8c2ba] leading-relaxed">{f}</p></div>
                ))}
              </div>
            </div>
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
                &ldquo;Nhá líveska þyn Nahfia. Sólrenn mæra&apos;næum.&rdquo;
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-1">
                &ldquo;May home breathe through Nahfia. Peace from the sun follows.&rdquo; — Common prayer
              </p>
            </blockquote>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── INTER-FAITH DYNAMICS ── */}
        <section className="space-y-6">
          <h2 className="font-display text-lg text-[#f2ebeb]">Inter-Faith Dynamics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-5 py-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Theological Overlaps</h3>
              <div className="space-y-2">
                {[
                  'Laeyanism acknowledges Nahfia as a Spirit of Creation blessed by Queen Laeyana.',
                  'Gianquisim honors Vivianya, who practiced Sylph Magic — a bridge to Nahfianism.',
                  'Valthoreia may invoke Laeyana\'s name in ritual magic, acknowledging her as the source.',
                ].map((t, i) => (
                  <div key={i} className="flex gap-3"><span className="text-[#c9a84c] shrink-0">—</span><p className="font-body text-base text-[#c8c2ba] leading-relaxed">{t}</p></div>
                ))}
              </div>
            </div>
            <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-5 py-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Tensions &amp; Conflicts</h3>
              <div className="space-y-2">
                {[
                  'Purists vs. Syncretists — Some Laeyana worshipers see the Giants, Eira, and Nahfia as "lesser" figures unworthy of divine status.',
                  'Old Faith vs. New — Gianquisim followers sometimes clash with Valthoreia believers over "mortal deification."',
                  'Sylph Isolationism — Nahfianism is rarely practiced outside the Sylphrelm, leading to misunderstandings.',
                ].map((t, i) => (
                  <div key={i} className="flex gap-3"><span className="text-[#c9a84c] shrink-0">—</span><p className="font-body text-base text-[#c8c2ba] leading-relaxed">{t}</p></div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm px-5 py-5">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Regional Distribution</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                ['Laeyanism', 'Universal, especially strong in cities and magical academies'],
                ['Gianquisim', 'Rural areas, ancient temple sites, traditionalist enclaves'],
                ['Valthoreia', 'Northern continents, winter regions, the Alarctic Alpines'],
                ['Nahfianism', 'The Sylphrelm exclusively, though some Dryads on Hetra honor Nahfia'],
              ].map(([faith, region]) => (
                <div key={faith} className="flex gap-3">
                  <span className="font-display text-sm text-[#c9a84c] shrink-0 w-28">{faith}</span>
                  <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{region}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* ── TIMELINE ── */}
        <section className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb]">Timeline of Religious Development</h2>
          <div className="space-y-4">
            {[
              ['Ancient Era (Greungeria)', ['Laeyana gifts magic to the Five Giants', 'Gianquisim emerges as the first organized faith']],
              ['3OD - 19 AD — The Sylph Massacre', ['Nahfia creates the Sylphrelm', 'Nahfianism is born']],
              ['Steampunk Magic Era - ', ['Queen Eira Valthorne reigns and vanishes (circa~23 AD)', 'Valthoreia begins as folk worship, later formalized']],
              ['Modern Era (2245+)', ['Laeyanism dominant in urban centers', 'Gianquisim preserved by cultural orders', 'Valthoreia celebrated widely in winter regions', 'Nahfianism thrives in the isolated Sylphrelm']],
            ].map(([era, events]) => (
              <div key={era as string} className="border-l-2 border-[#2e2b26] pl-5">
                <p className="font-display text-sm text-[#f2ebeb] mb-2">{era as string}</p>
                {(events as string[]).map(e => (
                  <div key={e} className="flex gap-2 mb-1">
                    <span className="text-[#c9a84c] shrink-0">—</span>
                    <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{e}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Closing quote */}
        <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
          <p className="font-body text-sm text-[#c9a84c] leading-[1.85] italic">
            &ldquo;What makes a soul whole? Destiny, divinity, or love? Perhaps it is faith — faith in the gods, the giants, the queens, and the spirits who shaped us.&rdquo;
          </p>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mt-1">— A mage from the past</p>
        </blockquote>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/databases" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
            </div>
          </Link>
                  <Link to="/world/databases/TerminologyLexicon" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">Terminology Lexicon</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

      </div>
    </div>
  );
}
