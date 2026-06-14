import { Link } from 'react-router-dom';

const months = [
  { name: "The Month of Viviambel",  num: "1st",  days: 31,  note: "" },
  { name: "The Month of Yeulversi",  num: "2nd",  days: 31,  note: "" },
  { name: "The Month of Balkohv",    num: "3rd",  days: 31,  note: "" },
  { name: "The Month of Grenhcius",  num: "4th",  days: 30,  note: "" },
  { name: "The Month of Escael",     num: "5th",  days: 31,  note: "" },
  { name: "The Month of Calderia",   num: "6th",  days: 30,  note: "Calderia (Calder) is Vivianya's pet." },
  { name: "The Month of Brighner",   num: "7th",  days: 31,  note: "Brighner (Briggie) is Vivianya's pet." },
  { name: "The Month of Zestia",     num: "8th",  days: 31,  note: "Zestia is Yeul's pet." },
  { name: "The Month of Aburhalle",  num: "9th",  days: 30,  note: "Aburhalle (Abhur) is Yeul's pet." },
  { name: "The Month of Ruehoys",    num: "10th", days: 31,  note: "Ruehoys is Balkhov's pet." },
  { name: "The Month of Ehlmber",    num: "11th", days: 30,  note: "Ehlmber (Ember) is Grenhcius' pet." },
  { name: "The Month of Mulumber",   num: "12th", days: 60,  note: "Mulumber (Mulu) is Grenhcius' pet." },
  { name: "The Month of Griselmber", num: "13th", days: 40,  note: "Griselmber (Gristel) is Escaelui's pet." },
  { name: "The Month of Diebus Vitae", num: "14th", days: 7, note: "Signifies the new formation of life." },
];

const weekDays = [
  { day: "Hynsday",    num: "1st", name: "Hynnia",  equiv: "Sunday",    note: "His first church was built on the Continent of Eulerich, which became The Kingdom of Eulan." },
  { day: "Iyonsday",   num: "2nd", name: "Iyona",   equiv: "Monday",    note: "She built two churches — one in the Everherk Desert on the Continent of Lynneria, and one for The Kingdom of Oelen." },
  { day: "Bhuseday",   num: "3rd", name: "Buuse",   equiv: "Tuesday",   note: "He built the Ice Church in Alarctic Alpines. (Different from Eira's Castle, which was not built by Buuse.)" },
  { day: "Runesday",   num: "4th", name: "Runthia", equiv: "Wednesday", note: "She built a church in the Village of Ribbonfelt on the Continent of Varleqe." },
  { day: "Yhursday",   num: "5th", name: "Yhursa",  equiv: "Thursday",  note: "She built a Demon Church for the demon race in one of the ruins on the Continent of Varleqe." },
  { day: "Draxday",    num: "6th", name: "Draxyn",  equiv: "Friday",    note: "His first church wasn't for people. It was for dragons. It floats high in the skies near cloud height and it's home for different dragons." },
  { day: "Sethraday",  num: "7th", name: "Sethra",  equiv: "Saturday",  note: "His first church was built on Rynel — The Church of Unity, close to the Oakgnar Grand Tree." },
];

const dayEvents = [
  { label: "Neigh Nights",        time: "02:13 AM – Before Daybreak",  desc: "Where the dark nights become active." },
  { label: "Daybreak",            time: "~05:24 AM",                   desc: "A rather pink light hue illuminates the dark night." },
  { label: "Sunrise",             time: "06:33 – 07:36 AM",            desc: "A strange phenomenon where a hue so bright as green appears and stays for 1:03:59s." },
  { label: "Mornings",            time: "07:39 – 11:55 AM",            desc: "Early breakfast at 8 AM. Lunch between 12 – 13 PM." },
  { label: "Mornoon",             time: "11:55 AM – 13:65 AM",         desc: "An early Morning Noon — the combination of Morning and Afternoon." },
  { label: "Afternoons / Middays", time: "14:00 – 20:00 PM",             desc: "People can get a lot done within these hours." },
  { label: "Early Evenings",      time: "20:24 PM – Before Sunset",    desc: "Four hours before sunset and dusk." },
  { label: "Sunset",              time: "24:44 – 25:49 PM",            desc: "Leads into dusk." },
  { label: "Dusk",                time: "26:51 – 27:00 PM",            desc: "" },
  { label: "Evenings",            time: "27:00 – 32:59 PM",            desc: "Nightlife becomes active. Night jobs. People turn off around 28–29 PM and wake at four in the Nightly Mornings — nine whole hours for sleep!" },
  { label: "Midnight",            time: "01:05 – 02:00 AM",            desc: "" },
];

const timezones = [
  { continent: "Eulerich",  ucc: "UCC +10 / +13", note: "Divided by two countries: The Eulan Kingdom (UCC +13) and The Oelen Kingdom (UCC +10)." },
  { continent: "Norrane",   ucc: "UCC +6",         note: "A Green Continent. Climate is very moderate — not too cold and not too hot." },
  { continent: "Rynel",     ucc: "UCC ±0",         note: "Splits into three zones: ±0, +1, & +2. The Oakgnar Grand Tree sits in the ±0 zone — the first landmark for early navigation, visible from Lynneria, Hetrania, and Norrane." },
  { continent: "Hetrania",  ucc: "UCC -6",         note: "The Sky Continent of Hetrania." },
  { continent: "Lynneria",  ucc: "UCC -7",         note: "" },
  { continent: "Varleqe",   ucc: "UCC -8 to -12",  note: "A huge supercontinent split into four different zones." },
];

export default function CalendarAndTime() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-[960px] mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">
          World Databases
        </Link>
        {" / "}Calendar &amp; Time
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
        Calendar &amp; Time — The 32 Hour System
      </h1>

      {/* Opening quote */}
      <blockquote className="border-l-2 border-[#c9a84c] pl-5 py-1 mb-8">
        <p className="font-body text-sm text-[#c9a84c] italic">
          "All time flows forward. All choices echo outward. And every consequence reshapes the path ahead."
        </p>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mt-2">~ Aeonia</p>
      </blockquote>

      {/* Image placeholder — 32 Clock */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ 16-Hour Clock Visual — Image Placeholder ]</p>
      </div>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Time Overview ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Overview</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="time">Time</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-3">
          A construct of reality and how all things linearly progress through time. Unlike how Earth has a 24/12 hour system, Planet Hetra uses a <span className="text-[#f2ebeb] font-semibold">32/16 Hour Time system</span>, with <span className="text-[#f2ebeb] font-semibold">14 months</span> in one year. The sun rises in the north-east and sets down at the north-west. Days and nights are a bit longer.
        </p>
        <div className="flex gap-4 text-sm mb-3">
          <span className="font-body text-[#7a746e]">Time Format:</span>
          <span className="font-display text-base text-[#f2ebeb]">00:00:00</span>
        </div>
        <p className="font-body text-sm text-[#7a746e] italic">Daylight Time Savings does not exist here.</p>

        {/* Systematic Process */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mt-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">A Systematic Process</h3>
          <p className="font-body text-sm text-[#c8c2ba] mb-3">
            Systematically and Astronomically, Time on Planet Hetra works in tandem with <span className="text-[#f2ebeb] font-semibold">The Sylphrelm</span>. The Sylphrelm operates on 32 hours a day, 444 days for one year — much like it is on Planet Hetra.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] mb-2">This is all because of a special function:</p>
          <p className="font-body text-sm text-[#c8c2ba] pl-4 border-l border-[#c9a84c]/40">
            <span className="text-[#f2ebeb] font-semibold">Hetra's second moon, Zenya.</span> Zenya works with the main moon it orbits, <span className="text-[#f2ebeb] font-semibold">Anzeya</span>, which controls the tides. While that happens, Zenya — the satellite moon — controls the time, day, and length of the year.
          </p>
          <p className="font-body text-sm text-[#c9a84c] italic mt-3">32 hours a day, with great daylight, less night hours, but a longer year of 444 days!</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Seconds, Minutes, Hours ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Time Units</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="seconds-minutes-hours">Seconds, Minutes, Hours…</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          It's almost the same as Earth's measurements, but time expands a bit more here.
        </p>

        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Seconds Hand</h3>
          <p className="font-body text-sm text-[#c8c2ba]">
            That red hand that has the "S" label is the longest on Hetra's clock and time. It takes <span className="text-[#f2ebeb] font-semibold">80 seconds</span> to complete a full rotation for 1 minute. For each rotation of the second hand, the M Hand moves to the next minute mark.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-4">Duration</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-4">In Seconds</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2">Label</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dur: "1 minute",   sec: "80 seconds",   label: "" },
                { dur: "10 minutes", sec: "800 seconds",  label: "Eighth of an Hour" },
                { dur: "20 minutes", sec: "1,600 seconds",label: "Quarter Hour" },
                { dur: "40 minutes", sec: "3,200 seconds",label: "Half Hour" },
                { dur: "80 minutes", sec: "6,400 seconds",label: "One Hour" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#2e2b26]/50 hover:bg-[#0f0d0c] transition-colors">
                  <td className="font-display text-base text-[#f2ebeb] py-2 pr-4">{row.dur}</td>
                  <td className="font-body text-sm text-[#c9a84c] py-2 pr-4">{row.sec}</td>
                  <td className="font-body text-sm text-[#7a746e] py-2">{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Calendar & Eras ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Calendar</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="calendar-and-year-representation">Calendar and Year Representation</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Interpretation of what AD and BC is, including custom month names for this world. There is also a new era range.
        </p>
        <div className="space-y-2 mb-4">
          {[
            { abbr: "D.C.E", full: "Divine Creation Era" },
            { abbr: "O.D",   full: "Oldendaye" },
            { abbr: "A.D",   full: "Aftendaye" },
          ].map((e, i) => (
            <div key={i} className="flex gap-3 items-center">
              <span className="font-display text-base text-[#c9a84c] w-12 shrink-0">{e.abbr}</span>
              <span className="font-body text-sm text-[#c8c2ba]">{e.full}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-[#f2ebeb] font-semibold mb-6">1 Year = 444 days</p>

        {/* Year 0 + timeline */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-6">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Year 0 Exists in This World!</h3>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-3">Range Example — backwards years are when Planet Hetra was still in formation → cooldown, before life was implemented.</p>
          <div className="font-body text-sm text-[#c8c2ba] leading-loose">
            <span className="text-[#7a746e]">~-40,539 DCE → ~-35,456 DCE → ~-20,000 DCE →</span><br />
            <span className="text-[#7a746e] text-[10px] tracking-widest uppercase">Oldendaye (O.D) starts</span><br />
            <span>→ -10,000 OD → -5,000 OD → -2245 OD → -500 OD → -100 OD → -10 OD → -1 OD →</span><br />
            <span className="text-[#c9a84c] font-semibold">→ 0 OD → 1 AD → 2 AD → currently 2245 AD</span>
          </div>
        </div>

        {/* Eras */}
        <h3 className="font-display text-sm text-[#f2ebeb] mb-4">Eras Within Planet Hetra</h3>
        <div className="space-y-3">
          {[
            { era: "The Greungerian Era (Ancient Era)", date: "10,000 OD – 500 OD", desc: "This was when the continents were still a massive landmass before the split. A meteor about the size of Greenland came from space in 501 OD and split the continents. It took nearly 200 years for the continents to settle into the current shape Modern Hetra stands on. They didn't drift into place. They were violently displaced and settled due to traces of hexicules within the lower mantles of crust. It became hyper reactive and cooled down significantly.  It wasn’t as dangerous as it was compared to hexicule storms because The 5 Giants lived in this area and helped rebuild ancient civilization—even after the continental drift.." },
            { era: "The Medieval Era", date: "300 OD – 1 AD", desc: "Started in 300 OD and ended in 1 AD before the implementation of The Hetranian Calendar." },
            { era: "The Steampunk Magic Era", date: "3 AD – 1500 AD", desc: "Steam Technology was the first innovation alongside Magic Abilities. This introduced the first ten concepts of steam engines and the discovery of thermodynamics." },
            { era: "The Discovery of Hexicules", date: "1501 AD", desc: "It puzzled the scientists of the time about what it is, why it is, and how it functions. It took 64 years to understand the science behind this strange crystal. Scientists from Lynneria and Rynels took extra study precautions, which includes research and experimentations." },
            { era: "The Great Tech Era of 1565", date: "1565 AD – 2000 AD", desc: "There were many advancements done before 2000. This includes the discovery of Hardwood Lucid Metal — as hard as diamond and dense as tungsten. This included the formation of HetraSEAP (1975 AD), the world's first Space Exploration Aeronautics Program." },
            { era: "The Technomagical Era of Innovation", date: "2000 AD – Present", desc: "Known as the Technomagic Era — all knowledge from the past expands into the future. From Hover Cars, to Sky Trains, and The Skypeak Obelisk — Magic became one of the underlying companions alongside technology. Planet Schavel was discovered in this year, sitting in the habitable zone of the sun...on the vertical orbit." },
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 hover:border-[#c9a84c]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <h4 className="font-display text-base text-[#f2ebeb]">{item.era}</h4>
                <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">{item.date}</span>
              </div>
              <p className="font-body text-sm text-[#c8c2ba]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── The Hetranian Almanac ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Almanac</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-hetranian-almanac">The Hetranian Almanac</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          This calendar was first implemented in the year <span className="text-[#f2ebeb] font-semibold">2 AD</span> (1 OD – 2 AD), where The Five Giants made a world calendar called The Hetranian Calendar. It has <span className="text-[#f2ebeb] font-semibold">14 months</span>. The first five months of the calendar are named after The Five Giants. The other eight months are named after each of The Five Giants' companions (each of them had one or two pets).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">Month</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">Name</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-3">Days</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {months.map((m, i) => (
                <tr key={i} className="border-b border-[#2e2b26]/50 hover:bg-[#0f0d0c] transition-colors">
                  <td className="font-display text-base text-[#c9a84c] py-2 pr-3">{m.num}</td>
                  <td className="font-body text-sm text-[#f2ebeb] py-2 pr-3">{m.name}</td>
                  <td className="font-body text-sm text-[#c8c2ba] py-2 pr-3">{m.days}</td>
                  <td className="font-body text-sm text-[#7a746e] py-2">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Red Blood Eclipse ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Phenomenon</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="a-strange-occurrence-the-red-blood-eclipse">A Strange Occurrence — The Red Blood Eclipse</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-4">
          Once every <span className="text-[#f2ebeb] font-semibold">250 years</span>, a strange phenomena occurs where the Moon turns into a Red Blood Eclipse.
        </p>
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4 space-y-3">
          <p className="font-body text-sm text-[#c8c2ba]">
            When the sun shines brightly at its peak on a very warm day, the moon blocks it. <span className="text-[#f2ebeb] font-semibold">Anzeya</span>, the planet's main moon, blocks the sun, along with the smaller satellite moon, <span className="text-[#f2ebeb] font-semibold">Zenya</span>.
          </p>
          <p className="font-body text-sm text-[#c8c2ba]">
            When the sun's rays hit against the moon, due to effects of solar scattering, Anzeya brightens up from behind where it becomes semi-translucent. Zenya — a moon that glows green — refracts back the sun's light onto Anzeya.
          </p>
          <p className="font-body text-sm text-[#c8c2ba]">
            This effect displaces all other colors except Red with a tint of Green onto both moons, where it becomes a <span className="text-[#f2ebeb] font-semibold">Blood Red Eclipse</span>.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-1">Known Occurrence</p>
            <p className="font-body text-sm text-[#f2ebeb]">Escael 31st, 2245 — 24:25 PM</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#c9a84c]/20 rounded-sm px-4 py-3">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">This Lunar Event Triggers Something Dangerous…</p>
            <p className="font-body text-sm text-[#c8c2ba]">The Evolution of Werebels into Moonbels (Killer Rabbits)</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Days of the Week ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">The Week</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-days-of-the-week">The Days of the Week</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          Within the world of the Hibrythian Saga, there are custom days named after <span className="text-[#f2ebeb] font-semibold">The Seven Architects</span> — important figures who helped create beautiful churches around the world. They were master builders who used magic to help construct these wonderful buildings, popping up on each of the seven days to help each other complete churches in designated locations. When the Five Giants took notice of their craftsmanship, they wanted to use their names for the days of the week. Thus, this is how weeks started when the Hetranian Calendar was implemented.
        </p>
        <div className="space-y-3">
          {weekDays.map((d, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 hover:border-[#c9a84c]/40 hover:bg-[#151210] transition-colors">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <span className="font-display text-base text-[#f2ebeb]">{d.day}</span>
                <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">{d.num} Day</span>
                <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Named after {d.name}</span>
                <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">≈ {d.equiv}</span>
              </div>
              <p className="font-body text-sm text-[#c8c2ba]">{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Day & Night ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Day &amp; Night</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="the-day-and-night">The Day and Night</h2>

        {/* Image placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-6">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Times of Day &amp; Their Names — Image Placeholder ]</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 text-center">
            <p className="font-display text-2xl text-[#f2ebeb] mb-1">19 Hours</p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">Daylight</p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 text-center">
            <p className="font-display text-2xl text-[#f2ebeb] mb-1">13 Hours</p>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Night-time</p>
          </div>
        </div>
        <p className="font-body text-sm text-[#7a746e] italic mb-6">Hetra has longer days and shorter nights. A lot of stuff can be achieved within 19 hours!</p>

        <div className="space-y-2">
          {dayEvents.map((e, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3 flex flex-col sm:flex-row sm:items-start gap-2">
              <div className="shrink-0 sm:w-48">
                <span className="font-display text-base text-[#f2ebeb]">{e.label}</span>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">{e.time}</p>
              </div>
              {e.desc && <p className="font-body text-sm text-[#c8c2ba]">{e.desc}</p>}
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-[#7a746e] italic mt-4">
          From 28 PM – 5 AM, people can get up to 8–10 hours of sleep at most. Night workers can clock out at around 03:15 AM and wake up at 11–12 AM — another eight to ten hours!
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Time Zones ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Time Zones</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="time-zones-ucc">Time Zones — UCC</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          Local Time Zones on Hetra are represented by <span className="text-[#f2ebeb] font-semibold">UCC — The Universal Celestial Clock</span>. The world has a lot of sunlight, and within the zones, there is still light before night reaches.
        </p>

        {/* Image placeholder */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-6">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Timezones on Hetra — Image Placeholder ]</p>
        </div>

        <div className="space-y-3 mb-10">
          {timezones.map((tz, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4 flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="shrink-0 sm:w-36">
                <span className="font-display text-base text-[#f2ebeb]">{tz.continent}</span>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]">{tz.ucc}</p>
              </div>
              {tz.note && <p className="font-body text-sm text-[#c8c2ba]">{tz.note}</p>}
            </div>
          ))}
        </div>

        {/* Image placeholder — Night visual */}
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-8">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ UCC Timezones with Night Visual — Image Placeholder ]</p>
        </div>

        {/* Two Days Ahead */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 mb-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Hetra is TWO Days Ahead</h3>
          <p className="font-body text-sm text-[#c8c2ba] mb-3">
            Unlike Earth which has a "one day" ahead format, Planet Hetra is ahead by <span className="text-[#f2ebeb] font-semibold">two days</span> due to its larger circumference and wider distribution of time zones. So if today is Hynsday in one region, some places might be experiencing Iyonsday or even Bhuseday.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] mb-4">
            Planet Hetra's massive size (3% larger than Earth) combined with its 32-hour day cycle creates a unique temporal distribution across its surface. With the UCC system spanning from <span className="text-[#f2ebeb] font-semibold">UCC +12 to UCC -12</span>, there's a <span className="text-[#f2ebeb] font-semibold">24-hour differential</span> between the furthest time zones. Since a full day is 32 hours, and the time zone spread covers 24 hours of difference, this means:
          </p>
          <div className="space-y-1 pl-4 border-l border-[#c9a84c]/30">
            <p className="font-body text-sm text-[#c8c2ba]">When it's <span className="text-[#f2ebeb]">Hynsday 08:00 AM</span> in Rynel (UCC ±0)</p>
            <p className="font-body text-sm text-[#c8c2ba]">It could be <span className="text-[#f2ebeb]">Iyonsday 20:00 PM</span> in Eulan Kingdom (UCC +12)</p>
            <p className="font-body text-sm text-[#c8c2ba]">And <span className="text-[#f2ebeb]">Sethraday 16:00 PM</span> in western Varleqe (UCC -12)</p>
          </div>
        </div>

        {/* Daily Life Implications */}
        <div className="space-y-3">
          {[
            { title: "Communication & Scheduling", desc: "Inter-continental communication requires careful attention to both time zones AND days. Business meetings, family calls, and global events must account for not just hour differences, but potentially being on different days entirely." },
            { title: "Travel & Day Lag", desc: "Travelers crossing multiple continents experience 'day lag' in addition to traditional jet lag. Someone traveling from Varleqe (UCC -12) to Eulerich (UCC +12) could literally 'lose' or 'gain' entire days depending on their direction of travel." },
            { title: "Cultural Celebrations", desc: "Holidays and festivals are celebrated at different times across the world. A global New Year celebration in the month of Viviambel might see western Varleqe ringing in the new year a full two days after Eulerich already has." },
          ].map((item, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-4">
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">{item.title}</h4>
              <p className="font-body text-sm text-[#c8c2ba]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Conversations ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Conversations</p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4" id="conversations">Conversations</h2>
        <p className="font-body text-sm text-[#c8c2ba] mb-6">
          Here are some examples of how the Two-Day difference affects everyday communication across Planet Hetra:
        </p>

        {/* Example 1 */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Example 1 — The Deadline Disaster</p>
          <div className="space-y-3 font-body text-sm">
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Solen (Varleqe West - UCC -12) via CrystalComm</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Hey Vael, just finishing up my part of the Guild Report — I'll have it to you by Bhuseday morning, promise!"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Vael (Eulan Kingdom - UCC +13)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"...Solen. It is currently Runesday, 14:07 PM here. The Guild Master already asked where it was."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Solen</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"No — NO — it's still Iyonsday night here, I have time—"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Vael</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"You had time. Two days ago. I suggest you start writing very fast."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Solen</p>
              <p className="text-[#c9a84c] italic pl-3 border-l border-[#c9a84c]/40]">"I hate this planet."</p>
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Example 2 — The Romantic Miscalculation</p>
          <div className="space-y-3 font-body text-sm">
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Emris (Rynel - UCC +1)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"I sent her flowers to arrive on Yhursday for our anniversary. I planned it months in advance. I am a GREAT partner."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Friend Toran (Lynneria - UCC -7)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Emris. Where does she live?"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Emris</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"...Norrane. UCC +6. Why?"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Toran</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"It is already Draxday evening in Norrane. Your flowers arrived a day late."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Emris</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"..."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Toran</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"How are you a cartographer and you still don't do UCC math before romantic gestures."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Emris</p>
              <p className="text-[#c9a84c] italic pl-3 border-l border-[#c9a84c]/40]">"Do not speak to me right now."</p>
            </div>
          </div>
        </div>

        {/* Example 3 */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Example 3 — Grandmother Doesn't Care About Time Zones</p>
          <div className="space-y-3 font-body text-sm">
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Neva (Western Varleqe - UCC -10)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Grandma, you called at 03:00 AM my time—"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Gran Dushe (Norrane - UCC +6)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"It is a perfectly reasonable hour. It is Runesday morning here and the sun is already up."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Neva</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"It is BHUSEDAY here and it is the MIDDLE OF THE NIGHT."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Gran Dushe</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"In MY day we did not complain about time. We simply woke up."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Neva</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"In your day people didn't live on opposite ends of the planet, Gran—"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Gran Dushe</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Are you coming to visit or not? I made Ruehoys cake."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Neva</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"...I'll be there by Sethraday."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Gran Dushe</p>
              <p className="text-[#c9a84c] italic pl-3 border-l border-[#c9a84c]/40]">"I will count from MY Sethraday, just so you know."</p>
            </div>
          </div>
        </div>

        {/* Example 4 */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Example 4 — Festival of Lights Scheduling</p>
          <div className="space-y-3 font-body text-sm">
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">City Herald Oswin (Rynel - UCC ±0) — Official CrystalBroadcast</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Citizens! The Festival of Lights begins at sundown on Draxday, Calderia 15th! All are welcome!"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Merchant Calla (Varleqe East - UCC -8)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Does that mean OUR Draxday or RYNEL's Draxday?"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Herald Oswin</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"...UCC Standard Draxday."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Merchant Calla</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"So Yhursday here. Got it."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Traveler Brix (Eulerich - UCC +10)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"That's Sethraday for me. Do I just... show up early?"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Herald Oswin</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"The festival lasts three days. You will catch some of it. Probably."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Traveler Brix</p>
              <p className="text-[#c9a84c] italic pl-3 border-l border-[#c9a84c]/40]">"'Probably.' Wonderful. Love this world."</p>
            </div>
          </div>
        </div>

        {/* Example 5 */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 mb-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Example 5 — Night Shift Problems</p>
          <div className="space-y-3 font-body text-sm">
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Dawnwatch Officer Lenne (Hetrania - UCC -6) — Logging into the Continental Watch Network</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Iyonsday night shift, clocking in. All quiet on the sky continent."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Dawnwatch Officer Rethis (Eulerich - UCC +13)</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Officer Lenne, I am clocking OUT of Bhuseday morning shift. You two are overlapping by eight hours today."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Lenne</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Wait, so right now you're finishing a shift that starts the day AFTER mine?"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Rethis</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Technically I have already lived through your 'tomorrow.'"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Lenne</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"...Is it a good day?"</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Rethis</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Nothing unusual. A minor Moonbel sighting near the eastern ridge."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Lenne</p>
              <p className="text-[#c8c2ba] pl-3 border-l border-[#2e2b26]">"Noted. I'll watch for it in my 'today' then."</p>
            </div>
            <div>
              <p className="text-[#7a746e] text-[10px] tracking-widest uppercase mb-1">Rethis</p>
              <p className="text-[#c9a84c] italic pl-3 border-l border-[#c9a84c]/40]">"Good luck. You already know how it ends."</p>
            </div>
          </div>
        </div>

      </section>

      {/* Back nav */}
      <div className="border-t border-[#2e2b26] pt-8 mt-4 flex items-center justify-between">
        <Link
          to="/world/databases"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors"
        >
          ← Back to World Databases
        </Link>
        <Link
          to="/32-16TimeSystem"
          className="inline-flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#c9a84c] hover:underline transition-colors"
        >
          View Interactive Calendar →
        </Link>
      </div>

    </div>
  );
}
