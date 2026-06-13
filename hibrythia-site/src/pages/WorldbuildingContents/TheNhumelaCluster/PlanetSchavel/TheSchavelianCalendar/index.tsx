import { Link } from 'react-router-dom';

const SEASONS = [
  {
    name: 'Season of Eulveria',
    label: 'Spring',
    days: 144,
    color: '#86efac',
    months: [
      { name: 'The First Season of Eulveria', num: 'First Month', days: 36 },
      { name: 'The Second Season of Spring', num: 'Second Month', days: 36 },
      { name: 'The Third Season of Spring', num: 'Third Month', days: 36 },
      { name: 'The Fourth Season of Spring', num: 'Fourth Month', days: 36 },
    ],
  },
  {
    name: 'Season of Oa',
    label: 'Summer',
    days: 144,
    color: '#fbbf24',
    months: [
      { name: 'The First Season of Oa', num: 'Fifth Month', days: 36 },
      { name: 'The Second Season of Summer', num: 'Sixth Month', days: 36 },
      { name: 'The Third Season of Summer', num: 'Seventh Month', days: 36 },
      { name: 'The Fourth Season of Summer', num: 'Eighth Month', days: 36 },
    ],
  },
  {
    name: 'Season of Gholdt',
    label: 'Autumn',
    days: 144,
    color: '#f97316',
    months: [
      { name: 'The First Season of Gholdt', num: 'Ninth Month', days: 36 },
      { name: 'The Second Season of Autumn', num: 'Tenth Month', days: 36 },
      { name: 'The Third Season of Autumn', num: 'Eleventh Month', days: 36 },
      { name: 'The Fourth Season of Autumn', num: 'Twelfth Month', days: 36 },
    ],
  },
  {
    name: 'Season of Lhazael',
    label: 'Winter',
    days: 108,
    color: '#93c5fd',
    note: "Because of its axis on the vertical orbit, Winter is a bit shorter because the heat from the Sun melts the day side a bit quicker compared to Hetra.",
    months: [
      { name: 'The First Season of Lhazael', num: 'Thirteenth Month', days: 36 },
      { name: 'The Second Season of Winter', num: 'Fourteenth Month', days: 36 },
      { name: 'The Third Season of Winter', num: 'Fifteenth Month', days: 36 },
    ],
  },
];

export default function SchavelianCalendar() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/TheNhumelaCluster" className="hover:text-[#c9a84c] transition-colors">Nhumela Cluster</Link>
        <span>›</span>
        <Link to="/world/databases/TheNhumelaCluster/PlanetSchavel" className="hover:text-[#c9a84c] transition-colors">Planet Schavel</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Calendar System</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">V. The Current World of Hibryds</p>
      <h1 className="font-display text-4xl md:text-5xl text-[#f2ebeb] mb-4">Schavel's Calendar System 🪐</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-10">540 Days · 15 Months · 4 Seasons</p>

      <div className="space-y-12">

        {/* Overview */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">Schavel's Calendar</h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              540 Days in a year on Schavel might seem like a stretch, but it is a perfect getaway vacation and emigration between Schavel and Hetra. The Calendar system here is fairly lax, because when this planet was discovered, it was already teeming with life.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              But there wasn't any way to count the days so Schavelia-Hetrans devised a way to count the days due to similarities between Hetra.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The 32/16 Time system on Hetra is borrowed for Schavel, due to the fact they're the same sized planet. But Schavel sits on the vertical orbit within the system, so that means a year might be a bit longer.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              For each day in a year, Schavelia-Hetrans counted the pathway with technology from Hetra — using a huge UV Laser by pointing it at the sun — for 10 years. 2010 was the year the Calendar System was implemented.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              There are 15 months in one year on Schavel, and each month has 36 even days.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* At-a-glance */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-5">The Schavelian Calendar</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            The Months in this calendar are divided into seasons. Visually on the Calendar, these are all grouped into ONE visual hierarchy. The start of each season is labeled on the calendar as:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {SEASONS.map((s) => (
              <div key={s.name} className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-3 py-3 text-center">
                <p className="font-body text-[9px] tracking-widest uppercase mb-1" style={{ color: s.color }}>{s.label}</p>
                <p className="font-display text-sm text-[#f2ebeb]">{s.name}</p>
                <p className="font-body text-[10px] text-[#4a4844] mt-1">{s.days} days</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#4a4844] leading-relaxed">
            Some denizens of Schavel like to count these months in order. Like, Month 1, Month 2, Month 3… etc rather than just going off of Season Order.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Full season breakdown */}
        <section>
          <h2 className="font-display text-2xl text-[#f2ebeb] mb-8">Full Season Breakdown</h2>
          <div className="space-y-8">
            {SEASONS.map((season) => (
              <div key={season.name} className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] overflow-hidden">
                <div className="px-5 py-4 border-b border-[#2e2b26]" style={{ borderLeftWidth: '3px', borderLeftColor: season.color }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-base text-[#f2ebeb]">{season.name}</p>
                      <p className="font-body text-[10px] tracking-widest uppercase mt-0.5" style={{ color: season.color }}>{season.label} · {season.days} Days</p>
                    </div>
                    <span className="font-body text-xs text-[#4a4844]">{season.months.length} months</span>
                  </div>
                </div>
                <div className="divide-y divide-[#1e1c1a]">
                  {season.months.map((month) => (
                    <div key={month.name} className="px-5 py-3 flex items-center justify-between">
                      <div>
                        <p className="font-body text-sm text-[#c8c2ba]">{month.name}</p>
                        <p className="font-body text-[10px] text-[#4a4844]">({month.num})</p>
                      </div>
                      <span className="font-body text-xs text-[#7a746e]">{month.days} days</span>
                    </div>
                  ))}
                </div>
                {season.note && (
                  <div className="px-5 py-3 bg-[#0d0b0a] border-t border-[#2e2b26]">
                    <p className="font-body text-xs text-[#4a4844] italic">{season.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-[#2e2b26]">
        <Link to="/world/databases/TheNhumelaCluster/PlanetSchavel" className="group flex flex-col text-left border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 inline-flex w-fit">
          <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">← Back</span>
          <span className="font-display text-xs text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">Planet Schavel</span>
        </Link>
      </div>
    </div>
  );
}
