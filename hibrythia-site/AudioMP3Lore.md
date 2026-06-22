# Hibrythia Site — Audio / MP3 Rules
> Reference file for adding audio to lore and character subpages.
> Last updated: June 22 2026

---

## Where MP3 Files Live

All MP3 files must be placed in:

```
hibrythia-site/public/audio/
```

Files in `public/` are served at the root URL, so a file at `public/audio/MySong.mp3` is accessible at `/audio/MySong.mp3`.

> Never import MP3 files as JS/TS modules. Always reference them via a `/audio/filename.mp3` string in the `src` prop.

---

## Uploading MP3 Files

MP3 files are typically too large for the GitHub API (`PUT` endpoint has an argument limit). Always push them via `git` CLI:

```bash
# Clone the repo
git clone https://github.com/AlarklynDB/AlarkiusEJ.git

# Copy the file into public/audio/
mkdir -p hibrythia-site/public/audio
cp MyFile.mp3 hibrythia-site/public/audio/

# Commit and push
git add hibrythia-site/public/audio/MyFile.mp3
git commit -m "feat: add MyFile.mp3 to public/audio"
git push
```

---

## The AudioPlayer Component

Never use a plain `<audio controls>` tag — the browser's native player cannot be styled to match the site's dark theme. Always use the custom `AudioPlayer` component below.

### When to add it
- Any lore or character subpage that has an MP3 placeholder (`[ Audio — Author to add ]`)
- Replace the placeholder div entirely with `<AudioPlayer src="..." />`

### Component (copy-paste ready)

Add this above the page's `export default` function, in the same file:

```tsx
import React, { useState, useRef, useEffect } from 'react';

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
```

---

## Usage in a Page

```tsx
{/* Audio Player */}
<div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
  <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">Unofficial Sample</p>
  <p className="font-body text-sm text-[#7a746e] leading-relaxed italic mb-4">
    Click to listen to an unofficial sample of "Song Title"!
  </p>
  <AudioPlayer src="/audio/Your-File-Name.mp3" />
  <p className="font-body text-xs text-[#4a4844] leading-relaxed mt-3 italic">
    Attribution: Music by SunoAI (only used as a tool, nothing else.)
  </p>
</div>
```

---

## Rules

- **One `AudioPlayer` per page** — if a page has multiple songs, each gets its own instance.
- **File naming** — use kebab-case matching the song/page name. Example: `A-Heart-Forged-from-Fire.mp3`.
- **`preload="metadata"`** — always set this so the duration loads without downloading the full file upfront.
- **Never use native `<audio controls>`** — it inherits the browser/OS theme and looks jarring on the dark site.
- **The outer wrapper card** (`border border-[#2e2b26] bg-[#1a1714]`) lives in the page TSX, not inside `AudioPlayer` — keeps the component reusable.
- **`import React, { useState, useRef, useEffect }`** must be at the top of any file using `AudioPlayer`. If the file already imports React, just add `useRef` and `useEffect` to the existing import.

---

## MP3 Placeholder Convention

When an MP3 is not yet available, use this placeholder block (same wrapper, different inner content):

```tsx
{/* Audio Player Placeholder */}
<div className="px-5 py-5 rounded-xl border border-[#2e2b26] bg-[#1a1714]">
  <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-3">Unofficial Sample</p>
  <p className="font-body text-sm text-[#7a746e] leading-relaxed italic mb-4">
    Click here to listen to an unofficial sample of "Song Title"!
  </p>
  <div className="w-full rounded-lg bg-[#131210] border border-[#2e2b26] flex items-center justify-center py-6">
    <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">[ Audio — Author to add ]</p>
  </div>
  <p className="font-body text-xs text-[#4a4844] leading-relaxed mt-3 italic">
    Attribution: Music by SunoAI (only used as a tool, nothing else.)
  </p>
</div>
```

When the real MP3 is provided, replace only the inner `<div>` placeholder with `<AudioPlayer src="/audio/filename.mp3" />`. Keep the outer wrapper card and attribution line intact.
