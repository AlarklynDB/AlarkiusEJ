import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  function togglePlay() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); } else { a.play(); }
    setPlaying(!playing);
  }
  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  }
  function handleVolume(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  }
  function fmt(s: number) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrentTime(a.currentTime);
    const onLoad = () => setDuration(a.duration);
    const onEnd  = () => setPlaying(false);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onLoad);
    a.addEventListener('ended', onEnd);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onLoad);
      a.removeEventListener('ended', onEnd);
    };
  }, []);
  const progress = duration ? (currentTime / duration) * 100 : 0;
  return (
    <div className="w-full bg-[#0f0d0c] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-3">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="relative w-full h-1.5 bg-[#2e2b26] rounded-full cursor-pointer">
        <div className="absolute top-0 left-0 h-full bg-[#c9a84c] rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
        <input type="range" min={0} max={duration || 0} step={0.1} value={currentTime} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
      </div>
      <div className="flex items-center gap-4">
        <button onClick={togglePlay} className="w-9 h-9 rounded-full bg-[#c9a84c] hover:bg-[#d4b05a] transition-colors flex items-center justify-center shrink-0" aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#0f0d0c"><rect x="2" y="1" width="4" height="12" rx="1"/><rect x="8" y="1" width="4" height="12" rx="1"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#0f0d0c"><polygon points="2,1 13,7 2,13"/></svg>
          )}
        </button>
        <span className="font-body text-[11px] text-[#7a746e] tabular-nums shrink-0">{fmt(currentTime)} / {fmt(duration)}</span>
        <div className="flex items-center gap-2 ml-auto">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a4844" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            {volume > 0.5 && <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>}
            {volume > 0 && <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>}
          </svg>
          <div className="relative w-20 h-1.5 bg-[#2e2b26] rounded-full">
            <div className="absolute top-0 left-0 h-full bg-[#4a4844] rounded-full" style={{ width: `${volume * 100}%` }} />
            <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolume} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AnthemOfHealingAndPeace() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
          <Link to="/world/meta" className="hover:text-[#c9a84c] transition-colors">Meta Worldbuilding</Link>
          {" / "}
          <Link to="/world/meta/TheSigilOfHibrythia" className="hover:text-[#c9a84c] transition-colors">The Sigil of Hibrytheia</Link>
          {" / "}
          <Link to="/world/meta/TheSigilOfHibrythia/sylphrelm" className="hover:text-[#c9a84c] transition-colors">The Sylphrelm</Link>
          {" / "}
          <span className="text-[#c9a84c]">The Anthem of Healing and Peace</span>
        </p>

        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3 mt-4">The Sylphrelm</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">🎶 The Anthem of Healing and Peace</h1>
        <p className="font-body text-base text-[#7a746e] leading-relaxed italic">
          A Lyrical and Anthem sung by the Sylphs and Wind Spirits of the Sylphrelm
        </p>
      </div>

      {/* Credits */}
      <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
        <div className="space-y-1">
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Original Lyrics:</span> Alarkius Elvya Jay</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Instrumentation:</span> Alarkius Elvya Jay</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Lyricist:</span> Alarkius Elvya Jay | All Rights Reserved</p>
        </div>
      </div>

      {/* Tone */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Tone</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A slow-paced, peaceful style Japanese epic theme sung by a single female voice. The melody is soft, elegant, and airy, with a reverberatory presence that feels gentle and kind. Each feminine phrase lingers at the end with an airy delay and pause, creating an ethereal, choir-like atmosphere. The voice is delicate, soaring, and elegantly high.
        </p>
        <div className="mt-4 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Instruments</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Harps, Woodwinds, Oboe, Irish Flute, Cello, Percussion, Japanese Koto, Mandolin, Nylon Guitar, Nyckelharpa, Vibraphone, Strings, Marimba
          </p>
        </div>
      </div>

      {/* Audio Player */}
      <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">Unofficial Sample</p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed italic mb-4">Click to listen to an unofficial sample of "The Anthem of Healing and Peace"!</p>
        <AudioPlayer src="/audio/The-Anthem-of-Healing-and-Peace.mp3" />
        <p className="font-body text-xs text-[#4a4844] leading-relaxed mt-3 italic">Attribution: Music by SunoAI (only used as a tool, nothing else.)</p>
      </div>

      {/* Lyrics — Modern English */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Lyrics in Modern English</h2>

        <div className="space-y-6">
          {/* Intro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Intro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Aah and Ooh hums]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Japanese Instrumental Solo]</p>
          </div>

          {/* Verse 1 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 1]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Air and the Clouds are filled with fluff~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Let those feet fleet flight and take off like birds!</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Have the air and the gust bring you to peace and calm!</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">For this is the Cloud of Abode of Faes~</p>
            </div>
          </div>

          {/* Pre-Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Pre-chorus]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Come prepare your heart for healing!</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Let those who are weary heal from dirt and injury!</p>
            </div>
          </div>

          {/* Verse 2 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 2]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Let those feet you&apos;ve carried be washed away like dirt~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Those hands that fight and battle, let the rest with care.~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Let your heart waver down like a dove descending,</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">and treat your body anew with love and healing~</p>
            </div>
          </div>

          {/* Verse 3 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 3]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">We&apos;re the Sylphs of this Abode~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Where we welcome you in arms!~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Let&apos;s help you into your comfort and find you rest!~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Because this isn&apos;t the end just yet, no, it&apos;s just the start~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">For we believe in the great things you do~</p>
            </div>
          </div>

          {/* Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/30 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Chorus] x2</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">This is the Song of the Clouds!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">The Humble Abode of Fae!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Let&apos;s Sanctify those hearts,</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">and be born anew from Hope!</p>
            </div>
          </div>

          {/* Instrumental */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Instrumental Solo, Japanese-like]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[build up]</p>
          </div>

          {/* Final Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/50 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Final Chorus] x2</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Come prepare your heart for healing!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Let those who are weary heal from dirt and injury!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Dedicate your Heart to those you love!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">For this is the Sylphs&apos; Anthem of Healing and Peace!</p>
            </div>
          </div>

          {/* Outro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Outro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">Aah and Ooh hums —</p>
          </div>
        </div>
      </div>

      {/* Sylphic Grhenglish Lyrics */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Ánthema øf Hæalínæ æn Peác!</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-6 italic">
          Lyrics in Aeþerlen Dialect (Sylphic Grhenglish)
        </p>

        <div className="space-y-6">
          {/* Intro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Intro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Aah and Ooh hums]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Japanese Instrumental Solo]</p>
          </div>

          {/* Verse 1 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 1]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Þa Aera æn þa Clhúdas ær fíll&apos;d wíth flúffa~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Læt þøse fæt flæt flíghta æn tæke øff líke bírdæn!</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Hæve þa aera æn þa gústa bríng yeuh tó peác æn cálma!</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">For þís ís þa Clhúda øf Abøde øf Fæa~</p>
            </div>
          </div>

          {/* Pre-chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Pre-chorus]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Cómae prepæra yeuhr hæart for hæalínæ!</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Læt þøse whø ær weary hæala from dírta æn ínjury!</p>
            </div>
          </div>

          {/* Verse 2 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 2]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Læt þøse fæt yeuh&apos;ve cárried bæ wásh&apos;d awæy líke dírta~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Þøse hánds þat fíghta æn báttle, læt þa résta wíth cæra.~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Læt yeuhr hæart wávera døwn líke æ døve descéndínæ,</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">æn tréata yeuhr bødy anæw wíth lóve æn hæalínæ~</p>
            </div>
          </div>

          {/* Japanese Instrumental Solo */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Japanese Instrumental Solo]</p>
          </div>

          {/* Verse 3 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 3]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Wé&apos;ra þa Sýlphas øf þís Abøde~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Whæra wéan wélcome yeuh yn ármas!~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Læt&apos;s hælpa yeuh íntø yeuhr cómforta æn fínda yeuh résta!~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Becáuse þís ísn&apos;t þa énda jústa yét, nø, ít&apos;s jústa þa stárta~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">For wéan belíeve yn þa gréat þíngas yeuh døhn~</p>
            </div>
          </div>

          {/* Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/30 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Chorus] x2</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Þís ís þa Sónæ øf þa Clhúdas!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Þa Húmble Abøde øf Fæa!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Læt&apos;s Sánctífy þøse hæartas,</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">æn bæ børna anæw from Høpæ!</p>
            </div>
          </div>

          {/* Instrumental build */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Instrumental Solo, Japanese-like]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[build up]</p>
          </div>

          {/* Final Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/50 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Final Chorus] x2</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Cómae prepæra yeuhr hæart for hæalínæ!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Læt þøse whø ær weary hæala from dírta æn ínjury!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Dédícate yeuhr Hæarta tó þøse yeuh lóve!</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">For þís ís þa Sýlphas&apos; Ánthema øf Hæalínæ æn Peác!</p>
            </div>
          </div>

          {/* Outro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Outro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Instrumental Solo]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Ooh and Ahhs]</p>
          </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/meta/TheSigilOfHibrythia/sylphrelm"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Sylphrelm</p>
          </div>
        </Link>
      </div>

    </div>
  );
}

