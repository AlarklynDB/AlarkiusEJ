import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// ── Lore Data ────────────────────────────────────────────────
type Month = {
  num: number
  name: string
  short: string
  days: number
  lore: string
  giant: string
  accent: string
  special?: 'eclipse' | 'long' | 'sacred'
}

const MONTHS: Month[] = [
  { num: 1, name: 'The Month of Viviambel', short: 'Viviambel', days: 31, lore: 'First Month. Named after Vivianya, one of The Five Giants. The new year begins here.', giant: 'Five Giants', accent: '#e8b04a' },
  { num: 2, name: 'The Month of Yeulversi', short: 'Yeulversi', days: 31, lore: 'Second Month. Named after Yeul, one of The Five Giants.', giant: 'Five Giants', accent: '#4ac9c5' },
  { num: 3, name: 'The Month of Balkohv', short: 'Balkohv', days: 31, lore: 'Third Month. Named after Balkhov, one of The Five Giants.', giant: 'Five Giants', accent: '#9f7fe0' },
  { num: 4, name: 'The Month of Grenhcius', short: 'Grenhcius', days: 30, lore: 'Fourth Month. Named after Grenhcius, one of The Five Giants.', giant: 'Five Giants', accent: '#5ecb6a' },
  { num: 5, name: 'The Month of Escael', short: 'Escael', days: 31, lore: 'Fifth Month. Named after Escaelui, one of The Five Giants. Home of the Red Blood Eclipse on the 31st.', giant: 'Five Giants', accent: '#e05060', special: 'eclipse' },
  { num: 6, name: 'The Month of Calderia', short: 'Calderia', days: 30, lore: "Sixth Month. Named after Calderia (Calder), one of Vivianya's pets.", giant: 'Companions', accent: '#e8b04a' },
  { num: 7, name: 'The Month of Brighner', short: 'Brighner', days: 31, lore: "Seventh Month. Named after Brighner (Briggie), Vivianya's second pet. Paired with Calderia.", giant: 'Companions', accent: '#f5a623' },
  { num: 8, name: 'The Month of Zestia', short: 'Zestia', days: 31, lore: "Eighth Month. Named after Zestia, one of Yeul's pets.", giant: 'Companions', accent: '#4ac9c5' },
  { num: 9, name: 'The Month of Aburhalle', short: 'Aburhalle', days: 30, lore: "Ninth Month. Named after Aburhalle (Abhur), Yeul's second pet. Paired with Zestia.", giant: 'Companions', accent: '#7adbd8' },
  { num: 10, name: 'The Month of Ruehoys', short: 'Ruehoys', days: 31, lore: "Tenth Month. Named after Ruehoys, Balkhov's pet. The only single pet-month for a Giant.", giant: 'Companions', accent: '#9f7fe0' },
  { num: 11, name: 'The Month of Ehlmber', short: 'Ehlmber', days: 30, lore: "Eleventh Month. Named after Ehlmber (Ember), one of Grenhcius' pets.", giant: 'Companions', accent: '#5ecb6a' },
  { num: 12, name: 'The Month of Mulumber', short: 'Mulumber', days: 60, lore: "Twelfth Month. Named after Mulumber (Mulu), Grenhcius' second pet. The longest month at 60 days!", giant: 'Companions', accent: '#4a9e5c', special: 'long' },
  { num: 13, name: 'The Month of Griselmber', short: 'Griselmber', days: 40, lore: "Thirteenth Month. Named after Griselmber (Gristel), Escaelui's pet.", giant: 'Companions', accent: '#bb8040' },
  { num: 14, name: 'The Month of Diebus Vitae', short: 'Diebus Vitae', days: 7, lore: 'Fourteenth Month — the final 7 days, signifying the new formation of life. A sacred period.', giant: 'Sacred', accent: '#d4af37', special: 'sacred' },
]

const DAYS_OF_WEEK = [
  { num: 1, name: 'Hynsday', equiv: 'Sunday', named_after: 'Hynnia', lore: 'His first church was built on the Continent of Eulerich, which became The Kingdom of Eulan.' },
  { num: 2, name: 'Iyonsday', equiv: 'Monday', named_after: 'Iyona', lore: 'She built two churches — one in the Everherk Desert on Lynneria, and one for The Kingdom of Oelen.' },
  { num: 3, name: 'Bhuseday', equiv: 'Tuesday', named_after: 'Buuse', lore: 'He built the Ice Church Palace & Castle in Alarctic Alpines before Queen Valthorne took over.' },
  { num: 4, name: 'Runesday', equiv: 'Wednesday', named_after: 'Runthia', lore: 'She built a church in the Village of Ribbonfelt on the Continent of Varleqe.' },
  { num: 5, name: 'Yhursday', equiv: 'Thursday', named_after: 'Yhursa', lore: 'She built a Demon Church for the demon race in one of the ruins on the Continent of Varleqe.' },
  { num: 6, name: 'Draxday', equiv: 'Friday', named_after: 'Draxyn', lore: "His first church wasn't for people — it was for dragons. It floats high in the skies near cloud height." },
  { num: 7, name: 'Sethraday', equiv: 'Saturday', named_after: 'Sethra', lore: 'His first church was built on Rynel — The Church of Unity, close to the Oakgnar Grand Tree.' },
]

const SEASONS = [
  {
    name: 'Pink Spring',
    color: '#f4a0c8',
    start: { month: 0, day: 1 },
    end:   { month: 4, day: 31 }
  },
  {
    name: "Calderia's Heat",
    color: '#f5e642',
    start: { month: 5, day: 1 },
    end:   { month: 7, day: 26 }
  },
  {
    name: 'Aburhalle (Fall)',
    color: '#8b5e3c',
    start: { month: 7, day: 27 },
    end:   { month: 10, day: 26 }
  },
  {
    name: 'Wintervahle',
    color: '#7ec8e3',
    start: { month: 10, day: 27 },
    end:   { month: 12, day: 39 }
  },
  {
    name: 'Diebus Vitae Eve',
    color: '#a8e6b0',
    start: { month: 12, day: 40 },
    end:   { month: 13, day: 7 }
  }
]

function getSeasonMarker(monthIdx: number, day: number) {
  for (const s of SEASONS) {
    if (s.start.month === monthIdx && s.start.day === day) return { dot: 'start', season: s }
    if (s.end.month   === monthIdx && s.end.day   === day) return { dot: 'end',   season: s }
  }
  return null
}

const TIME_ZONES = [
  { name: 'Eulerich (Eulan Kingdom)', offset: 'UCC +12', desc: 'A prosperous continent. The Eulan Kingdom sits at the highest offset.' },
  { name: 'Eulerich (Oelen Kingdom)', offset: 'UCC +10', desc: 'The Oelen Kingdom, sharing the continent with Eulan but at a different zone.' },
  { name: 'Norrane', offset: 'UCC +6', desc: 'A Green Continent. Climate is very moderate — not too cold, not too hot.' },
  { name: 'Rynel (UCC Base)', offset: 'UCC ±0', desc: 'The Oakgnar Grand Tree sits here — first landmark for early navigation, visible from Lynneria, Hetrania, and Norrane.' },
  { name: 'Rynel (+1, +2 zones)', offset: 'UCC +1/+2', desc: 'The continent spans three different zones near the prime meridian.' },
  { name: 'Hetrania', offset: 'UCC -6', desc: 'The Sky Continent of Hetrania floats above the planet surface.' },
  { name: 'Lynneria', offset: 'UCC -7', desc: 'Home of the Everherk Desert, where Iyona built one of her churches.' },
  { name: 'Varleqe', offset: 'UCC -8 to -12', desc: 'A huge supercontinent split into four different zones. Spans from -8 to -12.' },
]

const STYLES = `
.hetra-cal {
  --color-bg: #0e0d0b;
  --color-surface: #131210;
  --color-surface-2: #1a1814;
  --color-surface-offset: #1e1c18;
  --color-surface-offset-2: #242018;
  --color-surface-dynamic: #2a2620;
  --color-divider: #2e2b26;
  --color-border: #3a3630;
  --color-text: #d8d4cc;
  --color-text-muted: #8a867e;
  --color-text-faint: #504c46;
  --color-text-inverse: #0e0d0b;
  --color-accent-gold: #c9a84c;
  --color-accent-gold-hover: #dbbe6a;
  --color-accent-teal: #4ac9c5;
  --color-accent-teal-hover: #7adbd8;
  --color-accent-red: #e05060;
  --color-accent-purple: #9f7fe0;
  --color-accent-green: #5ecb6a;
  --color-primary: #c9a84c;
  --color-primary-hover: #dbbe6a;
  --clock-face: #0e0d0b;
  --clock-ring: #3a3630;
  --clock-ring-inner: #2e2b26;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
  --transition-interactive: 180ms cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.6);
  --shadow-glow-gold: 0 0 24px rgba(232, 176, 74, 0.25);
  --shadow-glow-teal: 0 0 24px rgba(74, 201, 197, 0.2);
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem);
  --text-2xl: clamp(2rem, 1.2rem + 2.5vw, 3.5rem);
  --text-hero: clamp(2.5rem, 1rem + 5vw, 5rem);
  --font-display: 'Cinzel Decorative', 'Cinzel', 'Georgia', serif;
  --font-heading: 'Cinzel', 'Georgia', serif;
  --font-body: 'Lora', 'Georgia', serif;
  --content-default: 1100px;

  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  width: 100%;
  min-height: 100vh;
}
.hetra-cal *, .hetra-cal *::before, .hetra-cal *::after { box-sizing: border-box; margin: 0; padding: 0; }
.hetra-cal img, .hetra-cal svg { display: block; max-width: 100%; }
.hetra-cal h1, .hetra-cal h2, .hetra-cal h3, .hetra-cal h4 { text-wrap: balance; line-height: 1.15; font-family: var(--font-heading); }
.hetra-cal p, .hetra-cal li { text-wrap: pretty; }
.hetra-cal button { cursor: pointer; background: none; border: none; color: inherit; font: inherit; }
.hetra-cal a { color: var(--color-accent-teal); text-decoration: none; }
.hetra-cal a:hover { color: var(--color-accent-teal-hover); text-decoration: underline; }

.hetra-cal section { padding: clamp(var(--space-12), 8vw, var(--space-20)) var(--space-6); }
.hetra-cal section:nth-child(even) { background: var(--color-surface); }
.hetra-cal .section-inner {
  max-width: var(--content-default);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}
.hetra-cal .section-label {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent-teal);
}
.hetra-cal .section-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--color-text);
  letter-spacing: 0.05em;
}
.hetra-cal .section-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: calc(-1 * var(--space-5));
}

/* HERO */
.hetra-cal .hero {
  position: relative;
  overflow: hidden;
  padding: clamp(var(--space-20), 12vw, var(--space-24)) var(--space-6);
  text-align: center;
  background: radial-gradient(ellipse 80% 60% at 50% 0%,
    rgba(201, 168, 76, 0.08),
    transparent 70%);
}
.hetra-cal .hero-stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 15% 20%, var(--color-accent-gold), transparent),
    radial-gradient(1px 1px at 80% 15%, var(--color-text-faint), transparent),
    radial-gradient(1.5px 1.5px at 40% 70%, var(--color-accent-teal), transparent),
    radial-gradient(1px 1px at 65% 50%, var(--color-text-faint), transparent),
    radial-gradient(1px 1px at 20% 80%, var(--color-text-faint), transparent),
    radial-gradient(1.5px 1.5px at 88% 65%, var(--color-accent-gold), transparent),
    radial-gradient(1px 1px at 55% 10%, var(--color-text-faint), transparent),
    radial-gradient(1px 1px at 30% 40%, var(--color-accent-purple), transparent),
    radial-gradient(1px 1px at 70% 80%, var(--color-text-faint), transparent),
    radial-gradient(1px 1px at 10% 55%, var(--color-text-faint), transparent),
    radial-gradient(1.5px 1.5px at 92% 30%, var(--color-accent-teal), transparent),
    radial-gradient(1px 1px at 48% 85%, var(--color-text-faint), transparent);
  pointer-events: none;
}
.hetra-cal .hero-content {
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
}
.hetra-cal .hero-era-badge {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent-gold);
  padding: var(--space-1) var(--space-4);
  border: 1px solid color-mix(in srgb, var(--color-accent-gold) 35%, transparent);
  border-radius: var(--radius-full);
}
.hetra-cal .hero-title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  color: var(--color-text);
  letter-spacing: 0.02em;
  text-shadow: 0 0 40px color-mix(in srgb, var(--color-accent-gold) 30%, transparent);
}
.hetra-cal .hero-quote {
  font-style: italic;
  color: var(--color-text-muted);
  font-size: var(--text-base);
  max-width: 560px;
  line-height: 1.8;
}
.hetra-cal .hero-attr {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  color: var(--color-accent-gold);
  letter-spacing: 0.1em;
}
.hetra-cal .hero-stats {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-4);
}
.hetra-cal .stat-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  min-width: 90px;
  box-shadow: var(--shadow-md);
}
.hetra-cal .stat-num {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-accent-gold);
}
.hetra-cal .stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* CLOCK */
.hetra-cal .clock-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-10);
  align-items: start;
}
@media (max-width: 700px) { .hetra-cal .clock-layout { grid-template-columns: 1fr; } }
/* Centered two-clock layout */
.hetra-cal .clocks-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
.hetra-cal .clock-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  width: clamp(180px, 38%, 260px);
}
.hetra-cal .clock-unit-label {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}
.hetra-cal .analog-clock-wrap {
  display: flex;
  justify-content: center;
  filter: drop-shadow(var(--shadow-glow-teal));
}
.hetra-cal .analog-clock { max-width: 300px; width: 100%; }
.hetra-cal .digital-display { display: flex; flex-direction: column; gap: var(--space-5); }
.hetra-cal .digital-time {
  font-family: 'Cinzel', monospace;
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--color-accent-gold);
  letter-spacing: 0.08em;
  text-shadow: var(--shadow-glow-gold);
  line-height: 1;
}
.hetra-cal .digital-time-16 {
  color: #9f7fe0;
  text-shadow: 0 0 12px rgba(159,127,224,0.5);
}
.hetra-cal .digital-period {
  font-family: var(--font-heading);
  font-size: var(--text-base);
  color: var(--color-accent-teal);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: calc(-1 * var(--space-3));
}
.hetra-cal .time-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); }
.hetra-cal .time-info-card {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.hetra-cal .ti-label { font-size: var(--text-xs); color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
.hetra-cal .ti-val { font-family: var(--font-heading); font-size: var(--text-sm); color: var(--color-text); font-weight: 600; }
.hetra-cal .time-conversion {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
}
.hetra-cal .conv-label {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
}
.hetra-cal .conv-row {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-sm);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-divider);
  color: var(--color-text-muted);
}
.hetra-cal .conv-row:last-child { border-bottom: none; }
.hetra-cal .conv-row span:last-child { color: var(--color-accent-teal); font-family: var(--font-heading); }

.hetra-cal .daynight-timeline {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-6) var(--space-8);
}
.hetra-cal .dn-label {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-4);
}
.hetra-cal .dn-bar-wrap { position: relative; }
.hetra-cal .dn-bar {
  position: relative;
  height: 20px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: linear-gradient(to right,
    #0a0a1a 0%, #1a1060 6.25%, #2a2080 16.9%, #e8952a 20.7%, #87ceeb 25%,
    #4a90d9 43.8%, #5ba8e0 59.4%, #f4a460 75%, #e07030 77.5%, #8030a0 84.2%,
    #1a0840 90%, #0a0a1a 100%);
  margin-bottom: var(--space-2);
}
.hetra-cal .dn-marker {
  position: absolute;
  top: -3px;
  width: 4px;
  height: 26px;
  background: white;
  border-radius: var(--radius-full);
  box-shadow: 0 0 8px rgba(255,255,255,0.8);
  transform: translateX(-50%);
  left: 50%;
  transition: left 1s linear;
}
.hetra-cal .dn-labels {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  font-family: var(--font-heading);
  margin-bottom: var(--space-6);
}
.hetra-cal .dn-events { position: relative; height: 60px; margin-top: var(--space-2); }
.hetra-cal .dn-event {
  position: absolute;
  font-size: 11px;
  color: var(--color-text-muted);
  text-align: center;
  transform: translateX(-50%);
  white-space: nowrap;
  line-height: 1.3;
}
.hetra-cal .dn-event small { color: var(--color-text-faint); font-size: 10px; }
.hetra-cal .dn-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 2px;
  vertical-align: middle;
}
.hetra-cal .dn-dot.night { background: #3a2060; }
.hetra-cal .dn-dot.dawn { background: #6050a0; }
.hetra-cal .dn-dot.sunrise { background: #e8952a; }
.hetra-cal .dn-dot.noon { background: #4a90d9; }
.hetra-cal .dn-dot.sunset { background: #e07030; }
.hetra-cal .dn-dot.dusk { background: #8030a0; }
.hetra-cal .dn-dot.midnight { background: #252050; }

/* CALENDAR */
.hetra-cal .calendar-nav { display: flex; align-items: center; gap: var(--space-4); justify-content: space-between; }
.hetra-cal .cal-nav-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  transition: all var(--transition-interactive);
  flex-shrink: 0;
}
.hetra-cal .cal-nav-btn:hover { background: var(--color-surface-offset); color: var(--color-accent-gold); border-color: var(--color-accent-gold); }
.hetra-cal .cal-month-display { text-align: center; flex: 1; }
.hetra-cal .cal-month-name { display: block; font-family: var(--font-heading); font-size: var(--text-lg); color: var(--color-text); font-weight: 700; }
.hetra-cal .cal-month-num { font-size: var(--text-xs); color: var(--color-accent-teal); letter-spacing: 0.1em; }
.hetra-cal .month-lore {
  background: var(--color-surface-offset);
  border-left: 3px solid var(--color-accent-gold);
  padding: var(--space-3) var(--space-5);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}
.hetra-cal .month-lore-text { font-size: var(--text-sm); color: var(--color-text-muted); font-style: italic; }
.hetra-cal .cal-day-headers {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-bottom: 0;
  background: #131210;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  border: none;
  border-bottom: 1px solid rgba(232, 176, 74, 0.25);
}
.hetra-cal .cal-day-header {
  text-align: center;
  padding: 6px 4px;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 700;
  color: #e8b04a;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: transparent;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: none;
}
.hetra-cal .cal-day-header:last-child {
  border-right: none;
}
.hetra-cal .cal-day-header span { font-size: 9px; font-weight: 400; color: var(--color-text-faint); text-transform: none; letter-spacing: 0; font-family: var(--font-body); }
.hetra-cal .cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}
/* Checker pattern — warm dark tones matching site */
.hetra-cal .cal-cell:nth-child(odd) {
  background: #1a1814;
}
.hetra-cal .cal-cell:nth-child(even) {
  background: #201e19;
}
.hetra-cal .cal-cell.empty {
  background: #161410 !important;
  cursor: default;
  background-image: repeating-linear-gradient(
    135deg,
    rgba(201,168,76,0.03) 0px,
    rgba(201,168,76,0.03) 1px,
    transparent 1px,
    transparent 10px
  ) !important;
}
.hetra-cal .cal-cell {
  aspect-ratio: 1 / 1;
  min-height: 60px;
  padding: 0;
  background: #1a1814;
  border-radius: 0;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Cinzel', serif;
  font-size: 13px;
  color: rgba(216,212,204,0.35);
  transition: all 0.15s ease;
  cursor: default;
  position: relative;
  overflow: hidden;
}
/* Day number — top-right corner with dark outlined box */
.hetra-cal .cal-day-num {
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  color: rgba(216,212,204,0.75);
  background: rgba(10,9,7,0.7);
  border-bottom-left-radius: 4px;
  border: 1px solid rgba(201,168,76,0.15);
  border-top: none;
  border-right: none;
  padding: 3px 5px;
  min-width: 22px;
  text-align: center;
}
.hetra-cal .cal-cell.day { color: var(--color-text); }
.hetra-cal .cal-cell.day:hover {
  background: rgba(201,168,76,0.07) !important;
  z-index: 1;
}
.hetra-cal .cal-cell.today {
  background: color-mix(in srgb, #c9a84c 18%, #1a1814) !important;
  border: 1px solid #c9a84c !important;
  z-index: 1;
}
.hetra-cal .cal-cell.today .cal-day-num {
  color: #c9a84c;
  font-weight: 700;
}
.hetra-cal .cal-cell.eclipse-day {
  background: color-mix(in srgb, #e05060 15%, #1a1814) !important;
  border: 1px solid #e05060 !important;
}
.hetra-cal .eclipse-indicator {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-accent-red);
  position: absolute;
  top: 4px;
  left: 4px;
}
/* Season pill — absolute overlay, centered in cell */
.hetra-cal .season-pill {
  --spill-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--spill-color) 18%, rgba(14,13,11,0.85));
  border: 1px solid color-mix(in srgb, var(--spill-color) 55%, transparent);
  font-family: 'Raleway', sans-serif;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--spill-color);
  white-space: nowrap;
  line-height: 1.4;
  z-index: 2;
  pointer-events: none;
}
.hetra-cal .season-pill::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--spill-color);
  flex-shrink: 0;
}
.hetra-cal .season-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  padding: 12px 24px;
  background: #161410;
  border-top: 1px solid rgba(201,168,76,0.12);
  border-radius: 0 0 8px 8px;
}
.hetra-cal .season-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Cinzel', serif;
  font-size: 10px;
  color: rgba(216,212,204,0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.hetra-cal .season-legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.hetra-cal .year-progress-wrap {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-5) var(--space-6);
}
.hetra-cal .yp-label {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-4);
}
.hetra-cal .yp-months { display: flex; gap: 3px; align-items: flex-end; flex-wrap: nowrap; overflow-x: auto; }
.hetra-cal .yp-month { flex: 1; min-width: 20px; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; }
.hetra-cal .yp-bar {
  width: 100%;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  background: var(--color-surface-dynamic);
  border: 1px solid var(--color-border);
  transition: all var(--transition-interactive);
}
.hetra-cal .yp-month.active .yp-bar { background: var(--color-accent-gold); border-color: var(--color-accent-gold); box-shadow: var(--shadow-glow-gold); }
.hetra-cal .yp-month:hover .yp-bar { background: var(--color-accent-teal); border-color: var(--color-accent-teal); }
.hetra-cal .yp-month-label {
  font-size: 9px;
  color: var(--color-text-faint);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  font-family: var(--font-heading);
}
.hetra-cal .yp-month.active .yp-month-label { color: var(--color-accent-gold); }
.hetra-cal .calendar-grid-wrap {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
}

/* MONTHS GRID */
.hetra-cal .months-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); }
.hetra-cal .month-card {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition: all var(--transition-interactive);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.hetra-cal .month-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-accent, var(--color-accent-gold));
}
.hetra-cal .month-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--card-accent, var(--color-accent-gold)); }
.hetra-cal .month-card-num { font-size: var(--text-xs); color: var(--color-text-faint); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.12em; }
.hetra-cal .month-card-name { font-family: var(--font-heading); font-size: var(--text-base); font-weight: 700; color: var(--color-text); }
.hetra-cal .month-card-days { font-size: var(--text-xs); color: var(--card-accent, var(--color-accent-gold)); font-family: var(--font-heading); font-weight: 600; }
.hetra-cal .month-card-lore { font-size: var(--text-xs); color: var(--color-text-muted); font-style: italic; line-height: 1.5; margin-top: var(--space-1); }

/* DAYS */
.hetra-cal .days-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-4); }
.hetra-cal .day-card {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  transition: all var(--transition-interactive);
}
.hetra-cal .day-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--color-accent-teal); }
.hetra-cal .day-num { font-size: var(--text-xs); color: var(--color-accent-teal); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.15em; }
.hetra-cal .day-name { font-family: var(--font-heading); font-size: var(--text-base); font-weight: 700; color: var(--color-text); margin: var(--space-1) 0; }
.hetra-cal .day-equiv { font-size: var(--text-xs); color: var(--color-text-faint); font-style: italic; margin-bottom: var(--space-2); }
.hetra-cal .day-lore { font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; }

/* TIME ZONES */
.hetra-cal .tz-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-3); }
.hetra-cal .tz-card {
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
}
.hetra-cal .tz-name { font-family: var(--font-heading); font-size: var(--text-sm); font-weight: 700; color: var(--color-text); }
.hetra-cal .tz-offset { font-family: var(--font-heading); font-size: var(--text-xs); color: var(--color-accent-gold); margin: var(--space-1) 0; }
.hetra-cal .tz-desc { font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.5; }
.hetra-cal .tz-note {
  background: color-mix(in srgb, var(--color-accent-teal) 10%, var(--color-surface-offset));
  border: 1px solid color-mix(in srgb, var(--color-accent-teal) 40%, transparent);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}
.hetra-cal .tz-note strong { color: var(--color-accent-teal); }

/* ERAS */
.hetra-cal .eras-timeline { display: flex; flex-direction: column; gap: var(--space-4); }
.hetra-cal .era-entry {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface-offset);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}
.hetra-cal .era-badge {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 700;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 70px;
  text-align: center;
}
.hetra-cal .era-entry.dce .era-badge { background: color-mix(in srgb, var(--color-accent-purple) 20%, transparent); color: var(--color-accent-purple); border: 1px solid color-mix(in srgb, var(--color-accent-purple) 40%, transparent); }
.hetra-cal .era-entry.od .era-badge { background: color-mix(in srgb, var(--color-accent-teal) 20%, transparent); color: var(--color-accent-teal); border: 1px solid color-mix(in srgb, var(--color-accent-teal) 40%, transparent); }
.hetra-cal .era-entry.ad .era-badge { background: color-mix(in srgb, var(--color-accent-gold) 20%, transparent); color: var(--color-accent-gold); border: 1px solid color-mix(in srgb, var(--color-accent-gold) 40%, transparent); }
.hetra-cal .era-info strong { font-family: var(--font-heading); font-size: var(--text-base); display: block; margin-bottom: var(--space-2); color: var(--color-text); }
.hetra-cal .era-info p { font-size: var(--text-sm); color: var(--color-text-muted); }
.hetra-cal .year0-note {
  background: color-mix(in srgb, var(--color-accent-gold) 8%, var(--color-surface-offset));
  border: 1px solid color-mix(in srgb, var(--color-accent-gold) 30%, transparent);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
.hetra-cal .y0-badge {
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  color: var(--color-accent-gold);
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-accent-gold);
  border-radius: var(--radius-full);
  white-space: nowrap;
  flex-shrink: 0;
}

/* ECLIPSE */
.hetra-cal .eclipse-section { background: var(--color-surface); }
.hetra-cal .eclipse-card {
  display: flex;
  gap: var(--space-8);
  align-items: center;
  background: linear-gradient(135deg, color-mix(in srgb, #8B0000 12%, var(--color-surface-offset)), var(--color-surface-offset));
  border: 1px solid color-mix(in srgb, var(--color-accent-red) 40%, transparent);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-10);
}
@media (max-width: 600px) { .hetra-cal .eclipse-card { flex-direction: column; padding: var(--space-6); } }
.hetra-cal .eclipse-moon { flex-shrink: 0; filter: drop-shadow(0 0 20px rgba(139, 0, 0, 0.6)); }
.hetra-cal .eclipse-badge {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: var(--text-xs);
  color: var(--color-accent-red);
  padding: var(--space-1) var(--space-3);
  border: 1px solid color-mix(in srgb, var(--color-accent-red) 40%, transparent);
  border-radius: var(--radius-full);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}
.hetra-cal .eclipse-info h3 { font-family: var(--font-display); font-size: var(--text-lg); color: var(--color-accent-red); margin-bottom: var(--space-3); }
.hetra-cal .eclipse-info p { font-size: var(--text-sm); color: var(--color-text-muted); margin-bottom: var(--space-3); line-height: 1.7; }
.hetra-cal .eclipse-event { color: var(--color-text) !important; }
.hetra-cal .eclipse-event strong { color: var(--color-accent-gold); }
.hetra-cal .eclipse-warn { color: color-mix(in srgb, var(--color-accent-red) 80%, var(--color-text-muted)) !important; font-style: italic; }

@media (max-width: 480px) {
  .hetra-cal .hero-stats { gap: var(--space-2); }
  .hetra-cal .stat-pill { min-width: 70px; padding: var(--space-3) var(--space-4); }
  .hetra-cal .dn-events { display: none; }

  /* Hide the full day name text, show short abbreviation via ::before */
  .hetra-cal .cal-day-header span { display: none; }
  .hetra-cal .cal-day-header {
    font-size: 0;
    padding: 4px 2px;
    letter-spacing: 0;
  }
  .hetra-cal .cal-day-header::before {
    content: attr(data-short);
    font-size: 9px;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    color: #e8b04a;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  /* Tighter cells */
  .hetra-cal .cal-cell {
    aspect-ratio: 1 / 1;
    min-height: unset;
    padding: 2px;
    font-size: 11px;
  }
  .hetra-cal .calendar-grid-wrap {
    padding: 12px;
  }
  .hetra-cal .cal-day-headers,
  .hetra-cal .cal-grid {
    gap: 1px;
  }
}
.hetra-cal .year-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 0.75rem 0;
}
.hetra-cal .cal-year-display {
  font-family: var(--font-heading);
  font-size: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  font-weight: 700;
  color: var(--color-accent-gold);
  letter-spacing: 0.08em;
  min-width: 120px;
  text-align: center;
  text-shadow: 0 0 24px rgba(232, 176, 74, 0.25);
}
.hetra-cal .year-btn {
  font-family: var(--font-heading) !important;
  font-size: 0.75rem !important;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem !important;
  width: auto !important;
  white-space: nowrap;
  color: var(--color-accent-gold) !important;
  border-color: color-mix(in srgb, var(--color-accent-gold) 40%, transparent) !important;
}
.hetra-cal .year-btn:hover {
  background: color-mix(in srgb, var(--color-accent-gold) 12%, transparent) !important;
  border-color: var(--color-accent-gold) !important;
}
`

export default function TimeSystem() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const $ = (id: string) => root.querySelector<HTMLElement>(`#${id}`)

    let currentMonthIdx = 0
    let currentYear = 2245

    // Anchor: Year 2245 Month 1 Day 1 = Bhuseday (index 2)
    // 444 days/year → 444 % 7 = 3 → each year shifts +3
    const ANCHOR_YEAR = 2245
    const ANCHOR_START_DAY = 2
    const YEAR_DAY_SHIFT = 3 // 444 % 7

    function getYearStartDay(year: number): number {
      const diff = year - ANCHOR_YEAR
      return (((ANCHOR_START_DAY + diff * YEAR_DAY_SHIFT) % 7) + 7) % 7
    }

    function getMonthStartDay(year: number, monthIdx: number): number {
      const yearStart = getYearStartDay(year)
      let daysBefore = 0
      for (let i = 0; i < monthIdx; i++) daysBefore += MONTHS[i].days
      return (yearStart + daysBefore) % 7
    }

    function getHetraTime() {
      const now = new Date()
      const realSecondsInDay = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()
      const realMs = now.getMilliseconds()
      const realDayFraction = realSecondsInDay / 86400
      const hetraTicksPerDay = 32 * 80 * 80
      const hetraTicks = Math.floor(realDayFraction * hetraTicksPerDay)
      const hMinutes = Math.floor(hetraTicks / 80) % 80
      const hHours = Math.floor(hetraTicks / (80 * 80))
      // Seconds: 1 Hetranian second = 80 real seconds.
      const hSeconds = Math.floor(realSecondsInDay % 80)
      const hSecFrac = (hSeconds + realMs / 1000) / 80 // smooth sweep over 80s
      return { hHours, hMinutes, hSeconds, hSecFrac }
    }

    function getHourLabel(h: number) {
      if (h >= 5 && h < 13) return 'AM'
      if (h >= 13 && h < 20) return 'PM'
      if (h >= 20 && h < 26) return 'PM'
      return h >= 27 ? 'PM' : 'AM'
    }

    function getPeriodName(h: number, m: number) {
      const t = h + m / 80
      if (t < 2.217) return { name: 'Deep Night' }
      if (t < 5.4) return { name: 'Neigh Nights' }
      if (t < 6.55) return { name: 'Daybreak' }
      if (t < 7.65) return { name: 'Sunrise' }
      if (t < 11.917) return { name: 'Morning' }
      if (t < 14) return { name: 'Mornoon' }
      if (t < 20.4) return { name: 'Afternoon' }
      if (t < 24.733) return { name: 'Early Evening' }
      if (t < 25.817) return { name: 'Sunset' }
      if (t < 27) return { name: 'Dusk' }
      return { name: 'Evening' }
    }

    const isDaytime = (h: number) => h >= 5 && h < 25
    const pad = (n: number, len = 2) => String(n).padStart(len, '0')

    const buildClockFaceFor = (ticksId: string, labelsId: string, totalHours: number) => {
      const ticksG = $(ticksId)
      const labelsG = $(labelsId)
      if (!ticksG || !labelsG) return

      const cx = 150, cy = 150, r = 138, labelR = 118
      const majorEvery = totalHours / 4

      let tickHTML = '', labelHTML = ''
      for (let i = 0; i < totalHours; i++) {
        const angle = (i / totalHours) * 2 * Math.PI - Math.PI / 2
        const isMajor = i % majorEvery === 0
        const isMid = i % (majorEvery / 2) === 0
        const tickLen = isMajor ? 12 : (isMid ? 8 : 5)
        const strokeW = isMajor ? 2 : 1
        const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle)
        const x2 = cx + (r - tickLen) * Math.cos(angle), y2 = cy + (r - tickLen) * Math.sin(angle)
        const opacity = isMajor ? 0.9 : (isMid ? 0.6 : 0.3)
        tickHTML += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="currentColor" stroke-width="${strokeW}" opacity="${opacity}"/>`
        if (isMajor) {
          const lx = cx + labelR * Math.cos(angle), ly = cy + labelR * Math.sin(angle)
          labelHTML += `<text x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" font-size="${i === 0 ? 14 : 12}" font-weight="600" opacity="0.85">${i === 0 ? `0/${totalHours}` : i}</text>`
        } else if (isMid) {
          const lx = cx + labelR * Math.cos(angle), ly = cy + labelR * Math.sin(angle)
          labelHTML += `<text x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" font-size="9" opacity="0.5">${i}</text>`
        }
      }
      ticksG.innerHTML = tickHTML
      labelsG.innerHTML = labelHTML
    }

    function updateClock() {
      const { hHours, hMinutes, hSeconds, hSecFrac } = getHetraTime()
      const hourAngle = ((hHours + hMinutes / 80) / 32) * 360 - 90
      const minAngle = (hMinutes / 80) * 360 - 90
      const secAngle = hSecFrac * 360 - 90
      const cx = 150, cy = 150
      const toRad = (a: number) => (a * Math.PI) / 180
      const handCoords = (angle: number, length: number) => ({
        x: cx + length * Math.cos(toRad(angle)),
        y: cy + length * Math.sin(toRad(angle)),
      })
      const hourEnd = handCoords(hourAngle, 68)
      const minEnd = handCoords(minAngle, 88)
      const secEnd = handCoords(secAngle, 92)
      const secBack = handCoords(secAngle + 180, 15)
      const hh = $('hand-hour')
      const hm = $('hand-minute')
      const hs = $('hand-second')
      if (hh) { hh.setAttribute('x2', hourEnd.x.toFixed(2)); hh.setAttribute('y2', hourEnd.y.toFixed(2)) }
      if (hm) { hm.setAttribute('x2', minEnd.x.toFixed(2)); hm.setAttribute('y2', minEnd.y.toFixed(2)) }
      if (hs) {
        hs.setAttribute('x2', secEnd.x.toFixed(2))
        hs.setAttribute('y2', secEnd.y.toFixed(2))
        hs.setAttribute('x1', secBack.x.toFixed(2))
        hs.setAttribute('y1', secBack.y.toFixed(2))
      }
      const dt = $('digital-time')
      if (dt) dt.textContent = `${pad(hHours)}:${pad(hMinutes)}:${pad(hSeconds)}`
      const period = getPeriodName(hHours, hMinutes)
      const dp = $('digital-period')
      if (dp) dp.textContent = period.name
      const dayPeriodEl = $('day-period')
      if (dayPeriodEl) dayPeriodEl.textContent = period.name
      const dayNightEl = $('day-night')
      if (dayNightEl) dayNightEl.textContent = isDaytime(hHours) ? 'Day (19h)' : 'Night (13h)'
      const hourTypeEl = $('hour-type')
      if (hourTypeEl) hourTypeEl.textContent = getHourLabel(hHours)

      // 16-hour clock
      const h16Hours = hHours % 16
      const h16HourAngle = ((h16Hours + hMinutes / 80) / 16) * 360 - 90
      const hourEnd16 = handCoords(h16HourAngle, 68)

      const hh16 = $('hand-hour-16')
      const hm16 = $('hand-minute-16')
      const hs16 = $('hand-second-16')
      if (hh16) { hh16.setAttribute('x2', hourEnd16.x.toFixed(2)); hh16.setAttribute('y2', hourEnd16.y.toFixed(2)) }
      if (hm16) { hm16.setAttribute('x2', minEnd.x.toFixed(2)); hm16.setAttribute('y2', minEnd.y.toFixed(2)) }
      if (hs16) {
        hs16.setAttribute('x2', secEnd.x.toFixed(2)); hs16.setAttribute('y2', secEnd.y.toFixed(2))
        hs16.setAttribute('x1', secBack.x.toFixed(2)); hs16.setAttribute('y1', secBack.y.toFixed(2))
      }
      const dt16 = $('digital-time-16')
      if (dt16) dt16.textContent = `${pad(h16Hours)}:${pad(hMinutes)}:${pad(hSeconds)}`
      const dp16 = $('digital-period-16')
      if (dp16) dp16.textContent = hHours < 16 ? 'AM Cycle' : 'PM Cycle'

      const marker = $('dn-marker')
      if (marker) {
        const fraction = (hHours + hMinutes / 80) / 32
        marker.style.left = `${(fraction * 100).toFixed(2)}%`
      }
    }

    function buildMonthsGrid() {
      const grid = $('months-grid')
      if (!grid) return
      grid.innerHTML = MONTHS.map((m, i) => {
        const specialBadge =
          m.special === 'eclipse' ? '<span style="color:#e05060;font-size:10px;">🔴 Eclipse Month</span>' :
          m.special === 'long' ? '<span style="color:#5ecb6a;font-size:10px;">⚡ Longest Month</span>' :
          m.special === 'sacred' ? '<span style="color:#d4af37;font-size:10px;">✦ Sacred Period</span>' : ''
        return `
        <div class="month-card" style="--card-accent:${m.accent}" data-month="${i}">
          <span class="month-card-num">Month ${m.num} of 14 · ${m.giant}</span>
          <span class="month-card-name">${m.name}</span>
          <span class="month-card-days">${m.days} days ${specialBadge}</span>
          <span class="month-card-lore">${m.lore}</span>
        </div>`
      }).join('')
      grid.querySelectorAll<HTMLElement>('.month-card').forEach((card) => {
        card.addEventListener('click', () => {
          const idx = Number(card.dataset.month)
          buildCalendar(idx)
          root?.querySelector('.calendar-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      })
    }

    function buildDaysGrid() {
      const grid = $('days-grid')
      if (!grid) return
      grid.innerHTML = DAYS_OF_WEEK.map((d) => `
        <div class="day-card">
          <div class="day-num">Day ${d.num} of 7</div>
          <div class="day-name">${d.name}</div>
          <div class="day-equiv">${d.equiv} Equivalent · Named after ${d.named_after}</div>
          <div class="day-lore">${d.lore}</div>
        </div>`).join('')
    }

    function buildTZGrid() {
      const grid = $('tz-grid')
      if (!grid) return
      grid.innerHTML = TIME_ZONES.map((tz) => `
        <div class="tz-card">
          <div class="tz-name">${tz.name}</div>
          <div class="tz-offset">${tz.offset}</div>
          <div class="tz-desc">${tz.desc}</div>
        </div>`).join('')
    }

    function buildYearProgress() {
      const wrap = $('yp-months')
      if (!wrap) return
      const maxDays = Math.max(...MONTHS.map((m) => m.days))
      wrap.innerHTML = MONTHS.map((m, i) => {
        const heightPct = Math.round((m.days / maxDays) * 60) + 20
        return `
        <div class="yp-month ${i === currentMonthIdx ? 'active' : ''}" data-month="${i}" title="${m.name}: ${m.days} days" style="flex:${m.days}">
          <div class="yp-bar" style="height:${heightPct}px"></div>
          <span class="yp-month-label">${m.short.substring(0, 4)}</span>
        </div>`
      }).join('')
      wrap.querySelectorAll<HTMLElement>('.yp-month').forEach((el) => {
        el.addEventListener('click', () => buildCalendar(Number(el.dataset.month)))
      })
    }

    function buildCalendar(monthIdx: number, year?: number) {
      if (year !== undefined) currentYear = year

      if (monthIdx < 0) {
        currentYear -= 1
        monthIdx = 13
      } else if (monthIdx > 13) {
        currentYear += 1
        monthIdx = 0
      }
      currentMonthIdx = monthIdx

      const month = MONTHS[currentMonthIdx]
      const nameEl = $('cal-month-name')
      const numEl = $('cal-month-num')
      const loreEl = $('month-lore-text')
      const yearEl = $('cal-year-display')
      if (nameEl) nameEl.textContent = month.name
      if (numEl) numEl.textContent = `Month ${month.num} of 14 · ${month.days} days`
      if (loreEl) loreEl.textContent = month.lore
      if (yearEl) yearEl.textContent = `${currentYear} AD`

      const startDayOfWeek = getMonthStartDay(currentYear, currentMonthIdx)
      const grid = $('cal-grid')
      if (!grid) return

      let html = ''
      for (let i = 0; i < startDayOfWeek; i++) html += '<div class="cal-cell empty"></div>'
      for (let d = 1; d <= month.days; d++) {
        const isEclipse = month.special === 'eclipse' && d === 31
        const cls = isEclipse ? 'cal-cell day eclipse-day' : 'cal-cell day'
        const marker = getSeasonMarker(currentMonthIdx, d)
        let seasonDot = ''
        if (marker) {
          const label = marker.dot === 'start'
            ? `${marker.season.name} begins`
            : `${marker.season.name} ends`
          seasonDot = `<div class="season-pill" style="--spill-color:${marker.season.color}">${label}</div>`
        }
        html += `<div class="${cls}"><span class="cal-day-num">${d}</span>${seasonDot}${isEclipse ? '<div class="eclipse-indicator" title="Red Blood Eclipse · 24:25 PM"></div>' : ''}</div>`
      }
      // Empty cells after last day (fill out the final row)
      const totalCells = startDayOfWeek + month.days
      const trailingEmpty = (7 - (totalCells % 7)) % 7
      for (let i = 0; i < trailingEmpty; i++) {
        html += `<div class="cal-cell empty"></div>`
      }
      grid.innerHTML = html
      buildYearProgress()
    }

    const prevBtn = $('prev-month')
    const nextBtn = $('next-month')
    const onPrev = () => buildCalendar(currentMonthIdx - 1)
    const onNext = () => buildCalendar(currentMonthIdx + 1)
    prevBtn?.addEventListener('click', onPrev)
    nextBtn?.addEventListener('click', onNext)

    const prevYearBtn = $('prev-year')
    const nextYearBtn = $('next-year')
    const onPrevYear = () => buildCalendar(currentMonthIdx, currentYear - 1)
    const onNextYear = () => buildCalendar(currentMonthIdx, currentYear + 1)
    prevYearBtn?.addEventListener('click', onPrevYear)
    nextYearBtn?.addEventListener('click', onNextYear)

    buildClockFaceFor('clock-ticks', 'clock-labels', 32)
    buildClockFaceFor('clock-ticks-16', 'clock-labels-16', 16)
    buildCalendar(0)
    buildMonthsGrid()
    buildDaysGrid()
    buildTZGrid()
    updateClock()
    const intervalId = window.setInterval(updateClock, 1000)

    return () => {
      window.clearInterval(intervalId)
      prevBtn?.removeEventListener('click', onPrev)
      nextBtn?.removeEventListener('click', onNext)
      prevYearBtn?.removeEventListener('click', onPrevYear)
      nextYearBtn?.removeEventListener('click', onNextYear)
    }
  }, [])

  return (
    <div className="pt-16">
      <style>{STYLES}</style>

      {/* Back link — blends into site background, no black bar */}
      <div style={{ background: '#0e0d0b', padding: '1rem 1.5rem 0.5rem' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
            fontSize: '0.875rem', color: '#8a867e', textDecoration: 'none',
            transition: 'color 0.2s',
            fontFamily: "'Raleway', sans-serif",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8a867e')}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Hetranian Calendar — full-width, breaks out of the site column */}
      <div className="hetra-cal" ref={rootRef} style={{ width: '100%' }}>
          <main>
            {/* Hero Banner */}
            <section className="hero">
              <div className="hero-stars" aria-hidden="true" />
              <div className="hero-content">
                <p className="hero-era-badge">2245 AD · Aftendaye Era</p>
                <h1 className="hero-title">Hetranian Calendar</h1>
                <p className="hero-quote">
                  "All time flows forward. All choices echo outward. And every consequence reshapes the path ahead."
                </p>
                <p className="hero-attr">— Aeonia, The Spirit of Time</p>
                <div className="hero-stats">
                  <div className="stat-pill"><span className="stat-num">32</span><span className="stat-label">Hours/Day</span></div>
                  <div className="stat-pill"><span className="stat-num">14</span><span className="stat-label">Months/Year</span></div>
                  <div className="stat-pill"><span className="stat-num">444</span><span className="stat-label">Days/Year</span></div>
                  <div className="stat-pill"><span className="stat-num">7</span><span className="stat-label">Days/Week</span></div>
                </div>
              </div>
            </section>

            {/* Live Clock Section */}
            <section className="clock-section">
              <div className="section-inner">
                <div className="section-label">Live Hetranian Time</div>
                <h2 className="section-title">The 32-Hour Clock</h2>
                <p className="section-desc">1 minute = 80 seconds · 1 hour = 80 minutes · 32 hours per day · 19h of Daylight, 13h of Night-time</p>

                {/* Two clocks centered */}
                <div className="clocks-row">

                  {/* 32-Hour Clock */}
                  <div className="clock-unit">
                    <div className="clock-unit-label">32-Hour Clock</div>
                    <div className="analog-clock-wrap" style={{ filter: 'drop-shadow(0 0 12px rgba(74,201,197,0.3))' }}>
                      <svg className="analog-clock" viewBox="0 0 300 300" aria-label="32-hour Hetranian analog clock">
                        <circle cx="150" cy="150" r="145" fill="var(--clock-face, #0d0e1a)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                        <circle cx="150" cy="150" r="138" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 4"/>
                        <g id="clock-ticks" />
                        <g id="clock-labels" fontFamily="Cinzel, serif" fill="currentColor" textAnchor="middle" dominantBaseline="middle" />
                        <g opacity="0.25">
                          <circle cx="150" cy="60" r="8" fill="#e8b04a" />
                          <circle cx="155" cy="57" r="6" fill="var(--clock-face, #0d0e1a)" />
                        </g>
                        <g opacity="0.18">
                          <circle cx="150" cy="240" r="5" fill="#4ac9c5" />
                          <circle cx="152" cy="239" r="3.5" fill="var(--clock-face, #0d0e1a)" />
                        </g>
                        <line id="hand-hour" x1="150" y1="150" x2="150" y2="75" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        <line id="hand-minute" x1="150" y1="150" x2="150" y2="58" stroke="#4ac9c5" strokeWidth="2.5" strokeLinecap="round"/>
                        <line id="hand-second" x1="150" y1="160" x2="150" y2="50" stroke="#e05060" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="150" cy="150" r="5" fill="white"/>
                        <circle cx="150" cy="150" r="2.5" fill="#e05060"/>
                      </svg>
                    </div>
                    <div id="digital-time" className="digital-time" style={{ textAlign: 'center' }}>00:00:00</div>
                    <div id="digital-period" className="digital-period" style={{ textAlign: 'center', marginTop: 0 }}>Dawn</div>
                  </div>

                  {/* 16-Hour Clock */}
                  <div className="clock-unit">
                    <div className="clock-unit-label">16-Hour Clock</div>
                    <div className="analog-clock-wrap" style={{ filter: 'drop-shadow(0 0 12px rgba(74,201,197,0.3))' }}>
                      <svg className="analog-clock" viewBox="0 0 300 300" aria-label="16-hour Hetranian analog clock">
                        <circle cx="150" cy="150" r="145" fill="var(--clock-face, #0d0e1a)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                        <circle cx="150" cy="150" r="138" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 4"/>
                        <g id="clock-ticks-16" />
                        <g id="clock-labels-16" fontFamily="Cinzel, serif" fill="currentColor" textAnchor="middle" dominantBaseline="middle" />
                        <g opacity="0.25">
                          <circle cx="150" cy="60" r="8" fill="#e8b04a" />
                          <circle cx="155" cy="57" r="6" fill="var(--clock-face, #0d0e1a)" />
                        </g>
                        <g opacity="0.18">
                          <circle cx="150" cy="240" r="5" fill="#4ac9c5" />
                          <circle cx="152" cy="239" r="3.5" fill="var(--clock-face, #0d0e1a)" />
                        </g>
                        <line id="hand-hour-16" x1="150" y1="150" x2="150" y2="75" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        <line id="hand-minute-16" x1="150" y1="150" x2="150" y2="58" stroke="#4ac9c5" strokeWidth="2.5" strokeLinecap="round"/>
                        <line id="hand-second-16" x1="150" y1="160" x2="150" y2="50" stroke="#e05060" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="150" cy="150" r="5" fill="white"/>
                        <circle cx="150" cy="150" r="2.5" fill="#e05060"/>
                      </svg>
                    </div>
                    <div id="digital-time-16" className="digital-time digital-time-16" style={{ textAlign: 'center' }}>00:00:00</div>
                    <div id="digital-period-16" className="digital-period" style={{ textAlign: 'center', marginTop: 0 }}>AM Cycle</div>
                  </div>

                </div>

                {/* Info cards and conversion table below both clocks */}
                <div className="digital-display">
                  <div className="time-info-grid">
                    <div className="time-info-card">
                      <span className="ti-label">Day Period</span>
                      <span id="day-period" className="ti-val">Daybreak</span>
                    </div>
                    <div className="time-info-card">
                      <span className="ti-label">Day / Night</span>
                      <span id="day-night" className="ti-val">Day (19h)</span>
                    </div>
                    <div className="time-info-card">
                      <span className="ti-label">Hour Type</span>
                      <span id="hour-type" className="ti-val">AM</span>
                    </div>
                    <div className="time-info-card">
                      <span className="ti-label">UCC Offset</span>
                      <span className="ti-val">±0 (Rynel)</span>
                    </div>
                  </div>
                  <div className="time-conversion">
                    <p className="conv-label">Time Conversion Reference</p>
                    <div className="conv-row"><span>1 minute</span><span>= 80 seconds</span></div>
                    <div className="conv-row"><span>1 hour</span><span>= 6,400 seconds</span></div>
                    <div className="conv-row"><span>Half hour</span><span>= 40 min · 3,200 sec</span></div>
                    <div className="conv-row"><span>Full day</span><span>= 32 hours · 204,800 sec</span></div>
                  </div>
                </div>

                <div className="daynight-timeline">
                  <div className="dn-label">Day &amp; Night Cycle (32 hours)</div>
                  <div className="dn-bar-wrap">
                    <div className="dn-bar" id="dn-bar">
                      <div className="dn-marker" id="dn-marker" />
                    </div>
                    <div className="dn-labels">
                      <span>0</span><span>4</span><span>8</span><span>12</span><span>16</span><span>20</span><span>24</span><span>28</span><span>32</span>
                    </div>
                  </div>
                  <div className="dn-events">
                    <div className="dn-event" style={{ left: '4.1%' }}><span className="dn-dot night" />Neigh Nights<br /><small>02:13 AM</small></div>
                    <div className="dn-event" style={{ left: '16.9%' }}><span className="dn-dot dawn" />Daybreak<br /><small>05:24 AM</small></div>
                    <div className="dn-event" style={{ left: '20.7%' }}><span className="dn-dot sunrise" />Sunrise<br /><small>06:33 AM</small></div>
                    <div className="dn-event" style={{ left: '43.8%' }}><span className="dn-dot noon" />Mornoon<br /><small>11:55 AM</small></div>
                    <div className="dn-event" style={{ left: '77.5%' }}><span className="dn-dot sunset" />Sunset<br /><small>24:44 PM</small></div>
                    <div className="dn-event" style={{ left: '84.2%' }}><span className="dn-dot dusk" />Dusk<br /><small>26:51 PM</small></div>
                    <div className="dn-event" style={{ left: '97%' }}><span className="dn-dot midnight" />Midnight<br /><small>01:05 AM</small></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Calendar Section */}
            <section className="calendar-section">
              <div className="section-inner">
                <div className="section-label">The Hetranian Almanac</div>
                <h2 className="section-title">Year Calendar</h2>
                <p className="section-desc">444 days · 14 months · Named after The Five Giants and their companions. The Hibrythian Saga is set in the year 2245+ </p>

                {/* Year navigation */}
                <div className="year-nav">
                  <button className="cal-nav-btn year-btn" id="prev-year" aria-label="Previous year">« Prev Year</button>
                  <span className="cal-year-display" id="cal-year-display">2245 AD</span>
                  <button className="cal-nav-btn year-btn" id="next-year" aria-label="Next year">Next Year »</button>
                </div>

                <div className="calendar-nav">
                  <button className="cal-nav-btn" id="prev-month" aria-label="Previous month">&#8592;</button>
                  <div className="cal-month-display">
                    <span className="cal-month-name" id="cal-month-name">The Month of Viviambel</span>
                    <span className="cal-month-num" id="cal-month-num">Month 1 of 14 · 31 days</span>
                  </div>
                  <button className="cal-nav-btn" id="next-month" aria-label="Next month">&#8594;</button>
                </div>

                <div className="month-lore" id="month-lore">
                  <p className="month-lore-text" id="month-lore-text" />
                </div>

                <div className="calendar-grid-wrap">
                  <div className="cal-day-headers">
                    <div className="cal-day-header" data-short="Hyn">Hynsday<span>Sun eq.</span></div>
                    <div className="cal-day-header" data-short="Iyo">Iyonsday<span>Mon eq.</span></div>
                    <div className="cal-day-header" data-short="Bhu">Bhuseday<span>Tue eq.</span></div>
                    <div className="cal-day-header" data-short="Run">Runesday<span>Wed eq.</span></div>
                    <div className="cal-day-header" data-short="Yhu">Yhursday<span>Thu eq.</span></div>
                    <div className="cal-day-header" data-short="Drx">Draxday<span>Fri eq.</span></div>
                    <div className="cal-day-header" data-short="Set">Sethraday<span>Sat eq.</span></div>
                  </div>
                  <div className="cal-grid" id="cal-grid" />
                  {/* Season legend */}
                  <div className="season-legend">
                    {SEASONS.map((s) => (
                      <div key={s.name} className="season-legend-item">
                        <div className="season-legend-dot" style={{ background: s.color }} />
                        {s.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="year-progress-wrap">
                  <div className="yp-label">Year Progress — 2245 AD</div>
                  <div className="yp-months" id="yp-months" />
                </div>
              </div>
            </section>

            {/* Months Reference */}
            <section className="months-section">
              <div className="section-inner">
                <div className="section-label">The Hetranian Almanac</div>
                <h2 className="section-title">All 14 Months</h2>
                <div className="months-grid" id="months-grid" />
              </div>
            </section>

            {/* Days of the Week */}
            <section className="days-section">
              <div className="section-inner">
                <div className="section-label">Weekly Calendar</div>
                <h2 className="section-title">The 7 Days of the Week</h2>
                <p className="section-desc">Named after The Seven, master builders who created churches across the world</p>
                <div className="days-grid" id="days-grid" />
              </div>
            </section>

            {/* Time Zones */}
            <section className="tz-section">
              <div className="section-inner">
                <div className="section-label">Universal Celestial Clock</div>
                <h2 className="section-title">Time Zones of Hetra</h2>
                <p className="section-desc">UCC spans from +12 to -12 — Hetra is TWO days ahead across its vast size</p>
                <div className="tz-grid" id="tz-grid" />
                <div className="tz-note">
                  <strong>The Three-Day Window:</strong> At any given moment on Planet Hetra, three different calendar days exist simultaneously across the world. This is taught to children as part of basic temporal literacy.
                </div>
              </div>
            </section>

            {/* Eras Reference */}
            <section className="eras-section">
              <div className="section-inner">
                <div className="section-label">Historical Timeline</div>
                <h2 className="section-title">Era System</h2>
                <div className="eras-timeline">
                  <div className="era-entry dce">
                    <div className="era-badge">D.C.E</div>
                    <div className="era-info">
                      <strong>Divince Creation Era</strong>
                      <p>~-40,539 DCE onward. The era when Planet Hetra was still in formation and cooldown, before life was implemented.</p>
                    </div>
                  </div>
                  <div className="era-entry od">
                    <div className="era-badge">O.D</div>
                    <div className="era-info">
                      <strong>Oldendaye</strong>
                      <p>-10,000 OD through Year 0. Life began emerging. Year 0 exists in this world.</p>
                    </div>
                  </div>
                  <div className="era-entry ad">
                    <div className="era-badge">A.D</div>
                    <div className="era-info">
                      <strong>Aftendaye</strong>
                      <p>1 AD onward. The Hetranian Calendar was implemented in Year 2 AD by The Five Giants. Currently 2245 AD.</p>
                    </div>
                  </div>
                </div>
                <div className="year0-note">
                  <span className="y0-badge">Year 0 Exists!</span>
                  Unlike real-world calendars, Hetra's timeline includes Year 0 as a valid date in the Oldendaye era.
                </div>
              </div>
            </section>

            {/* Special Event */}
            <section className="eclipse-section">
              <div className="section-inner">
                <div className="eclipse-card">
                  <div className="eclipse-moon" aria-hidden="true">
                    <svg viewBox="0 0 80 80" width="80" height="80">
                      <circle cx="40" cy="40" r="35" fill="#8B0000" opacity="0.8" />
                      <circle cx="46" cy="36" r="28" fill="#2d0808" opacity="0.6" />
                      <circle cx="40" cy="40" r="35" fill="none" stroke="#ff3300" strokeWidth="1.5" opacity="0.6" />
                    </svg>
                  </div>
                  <div className="eclipse-info">
                    <div className="eclipse-badge">Rare Event · Every 250 Years</div>
                    <h3>The Red Blood Eclipse</h3>
                    <p>When Anzeya (main moon) blocks the sun alongside Zenya (satellite moon), Zenya's green glow refracts back onto Anzeya — displacing all colors except red, creating a Blood Red Eclipse.</p>
                    <p className="eclipse-event"><strong>Known Occurrence:</strong> Escael 31st, 2245 · 24:25 PM</p>
                    <p className="eclipse-warn">⚠ This lunar event triggers the Evolution of Werebels into Moonbels (Killer Rabbits)</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </div>
  )
}
