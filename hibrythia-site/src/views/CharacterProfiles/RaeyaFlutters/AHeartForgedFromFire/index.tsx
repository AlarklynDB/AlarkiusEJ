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
    const onEnd = () => setPlaying(false);
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

      {/* Progress bar */}
      <div className="relative w-full h-1.5 bg-[#2e2b26] rounded-full cursor-pointer">
        <div
          className="absolute top-0 left-0 h-full bg-[#c9a84c] rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
        <input
          type="range" min={0} max={duration || 0} step={0.1} value={currentTime}
          onChange={handleSeek}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-[#c9a84c] hover:bg-[#d4b05a] transition-colors flex items-center justify-center shrink-0"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#0f0d0c">
              <rect x="2" y="1" width="4" height="12" rx="1"/>
              <rect x="8" y="1" width="4" height="12" rx="1"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#0f0d0c">
              <polygon points="2,1 13,7 2,13"/>
            </svg>
          )}
        </button>

        {/* Time */}
        <span className="font-body text-[11px] text-[#7a746e] tabular-nums shrink-0">
          {fmt(currentTime)} / {fmt(duration)}
        </span>

        {/* Volume */}
        <div className="flex items-center gap-2 ml-auto">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a4844" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            {volume > 0.5 && <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>}
            {volume > 0 && <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>}
          </svg>
          <div className="relative w-20 h-1.5 bg-[#2e2b26] rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#4a4844] rounded-full"
              style={{ width: `${volume * 100}%` }}
            />
            <input
              type="range" min={0} max={1} step={0.01} value={volume}
              onChange={handleVolume}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AHeartForgedFromFire() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
          <Link to="/characters" className="hover:text-[#c9a84c] transition-colors">Characters</Link>
          {" / "}
          <Link to="/characters/RaeyaFlutters" className="hover:text-[#c9a84c] transition-colors">Raeya Flutters</Link>
          {" / "}
          <span className="text-[#c9a84c]">A Heart Forged from Fire</span>
        </p>

        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3 mt-4">Raeya Flutters</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">🎶 Aeh Hæart Forgéd from Fýrræ</h1>
        <p className="font-display text-base text-[#7a746e] mb-6 italic">"A Heart Forged from Fire"</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Lullaby that Raeya sings to Kydel using Hetranian Ghrenglish whenever Kydel himself almost tries to go full berserker mode. It&apos;s very soothing and powerful, because this Lullaby is a part of her powers.
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
          A slow-paced, peaceful style epic lullaby sung by a single female voice. The melody is soft, elegant, and airy, with a reverberatory presence that feels gentle and kind. Each feminine phrase lingers at the end with an airy delay and pause, creating an ethereal atmosphere. The voice is delicate, soaring, and elegantly high.
        </p>
        <div className="mt-4 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Instruments</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Harps, Woodwinds, Oboe, Percussion, Japanese Koto, Nyckelharpa, Vibraphone, Marimba
          </p>
        </div>
      </div>

      {/* Audio Player */}
      <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
        <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">Unofficial Sample</p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed italic mb-4">Click to listen to an unofficial sample of "A Heart Forged from Fire"!</p>
        <AudioPlayer src="/audio/A-Heart-Forged-from-Fire.mp3" />
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
          </div>

          {/* Verse 1 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 1]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">May the moonlight bask you in it&apos;s coolness~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">May the sunlight bask you in it&apos;s warmth~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Let the wind and the breeze pick you up…,</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">As the wind shall help control your flow~</p>
            </div>
          </div>

          {/* Pre-chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Pre-chorus]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Come forth my splendid, how weary and tired.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">I wish for my heart to reach out to your despair.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Don&apos;t fret and stumble, follow my voice~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">and breathe that breath with me.</p>
            </div>
          </div>

          {/* Verse 2 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 2]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The warmth from your soul makes you radiate with life~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Don&apos;t give in to that false sense of hope.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">For your heart is forged from the souls of fire,</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">let it burn with passion and with courage.</p>
            </div>
          </div>

          {/* Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/30 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Chorus] x2</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">May the moonlight bask you in it&apos;s coolness~</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">May the sunlight bask you in it&apos;s warmth~</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Let the wind and the breeze pick you up…,</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">As the wind shall help control your flow~</p>
            </div>
          </div>

          {/* Final Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/50 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Final Chorus]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">May the moonlight bask you in it&apos;s coolness~</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">May the sunlight bask you in it&apos;s warmth~</p>
            </div>
          </div>

          {/* Outro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Outro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Aah and Ooh hums]</p>
          </div>
        </div>
      </div>

      {/* Aeþerlen Dialect */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Aeh Hæart Forgéd from Fýrræ</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-6 italic">
          Lyrics in Aeþerlen Dialect (Sylphic Grhenglish)
        </p>

        <div className="space-y-6">
          {/* Intro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Intro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Aah and Ooh hums]</p>
          </div>

          {/* Verse 1 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 1]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Nhæ þa moonlióma bæsk yeuh yn æ&apos;cohlræ~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Nhæ þa sollióma bæsk yeuh yn æ&apos;wærmæ~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Læt þa windsæl æn breezæl lift yeuh ūp…,</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Æs þa wind shæl hælp contrøl yeuhr flowa~</p>
            </div>
          </div>

          {/* Pre-chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Pre-chorus]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Cómae forth myn splendén, hów weary æn tírahn.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Íhna wísh for myn hæart tó reachæ yeuhr despára.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Døhn&apos;t fret æn stumblæ, føllow myn vóicæ~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">æn breathæ þat breatha wíth mé.</p>
            </div>
          </div>

          {/* Aahs Instrumental */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Aahs Instrumental]</p>
          </div>

          {/* Verse 2 */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Verse 2]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Þa wærmæ from yeuhr søula mækes yeuh rádiate wíth lívæ~</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Døhn&apos;t gíve yn tó þat fálse sensæ øf høpæ.</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">For yeuhr hæart ís forgéd from þa søulas øf fýrræ,</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">læt ít burn wíth pássion æn wíth couragæ.</p>
            </div>
          </div>

          {/* Instrumental Buildup */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Instrumental Buildup]</p>
          </div>

          {/* Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/30 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Chorus] x2</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Nhæ þa moonlióma bæsk yeuh yn æ&apos;cohlræ~</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Nhæ þa sollióma bæsk yeuh yn æ&apos;wærmæ~</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Læt þa windsæl æn breezæl lift yeuh ūp…,</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Æs þa wind shæl hælp contrøl yeuhr flowa~</p>
            </div>
          </div>

          {/* Final Chorus */}
          <div className="px-5 py-5 rounded-xl border border-[#c9a84c]/50 bg-[#1a1714]">
            <p className="font-display text-xs text-[#c9a84c] uppercase tracking-wider mb-3">[Final Chorus]</p>
            <div className="space-y-1">
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Nhæ þa moonlióma bæsk yeuh yn æ&apos;cohlræ~</p>
              <p className="font-body text-base text-[#f2ebeb] leading-relaxed">Nhæ þa sollióma bæsk yeuh yn æ&apos;wærmæ~</p>
            </div>
          </div>

          {/* Outro */}
          <div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">[Outro]</p>
            <p className="font-body text-base text-[#7a746e] leading-relaxed italic">[Aah and Ooh hums]</p>
          </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters/RaeyaFlutters"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Raeya Flutters</p>
          </div>
        </Link>
      </div>

    </div>
  );
}


