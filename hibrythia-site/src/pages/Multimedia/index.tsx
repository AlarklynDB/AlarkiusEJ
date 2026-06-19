import { Link } from "react-router-dom";

const MEDIA_CARDS = [
  {
    to: "/multimedia/32-16TimeSystem",
    label: "32-16 Time System",
    desc: "Explore the interactive calendar of Planet Hetra — a fully lore-accurate time system.",
    available: true,
  },
  {
    to: "/multimedia/InteractiveMap",
    label: "Interactive Map",
    desc: "A live, interactive map of Planet Hetra and its continents.",
    available: false,
  },
  {
    to: "/multimedia/PlanetHetraInteractive",
    label: "Interactive Globe: Planet Hetra",
    desc: "Spin and explore the planet Hetra in full 3D.",
    available: false,
  },
  {
    to: "/multimedia/PlanetSchavelInteractive",
    label: "Interactive Globe: Planet Schavel",
    desc: "Explore Planet Schavel and its unique biomes.",
    available: false,
  },
];

const MUSIC = [
  {
    videoId: "eln-ozQG_HU",
    title: "Melodic Harmony | The Town of Lenoria",
    date: "Nov 2024",
  },
  {
    videoId: "Y8TxUCWQPkM",
    title: "The Hibrythian Saga | Book Series + Worldbuilding Trailer [UPDATED]",
    date: "Aug 2024",
  },
  {
    videoId: "ma9cGvODp-8",
    title: "Kharphan | The City of Techmahology | A City Soundtrack",
    date: "Dec 2023",
  },
  {
    videoId: "qnj7k-KRPpM",
    title: "Enth Voyagé | An Adventure Theme",
    date: "Nov 2023",
  },
  {
    videoId: "utiBxJiYJuI",
    title: "Fluttering Skies (Raeya's Theme) [Remastered]",
    date: "Oct 2023",
  },
  {
    videoId: "apvGBmP8wro",
    title: "Wulfwing Legacy (Kydel's Theme) [Remastered]",
    date: "Oct 2023",
  },
];

export default function Multimedia() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Home
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          The Hibrythian Saga
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          Interactive Media
        </h1>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed max-w-[640px]">
          The Hibrythian Saga consists has a lot of rich content. From maps, time systems, and more. Here, you'll find media, not just our music!
        </p>
      </div>

      {/* Interactive Media Cards */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Interactive Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MEDIA_CARDS.map(({ to, label, desc, available }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col gap-2 border border-[#2e2b26] rounded-xl bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200 px-6 py-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                  {label}
                </span>
                {available ? (
                  <span className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c] border border-[#c9a84c]/30 rounded-sm px-2 py-0.5">
                    Live
                  </span>
                ) : (
                  <span className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] border border-[#2e2b26] rounded-sm px-2 py-0.5">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="font-body text-sm text-[#7a746e] leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2e2b26]" />

      {/* Music Section */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Original Music</h2>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed max-w-[560px]">
            Every world has a sound. These are the original soundtracks and themes composed for The Hibrythian Saga — from character themes to city atmospheres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MUSIC.map(({ videoId, title, date }) => (
            <a
              key={videoId}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-[#2e2b26] rounded-xl bg-[#131210] hover:border-[#c9a84c]/40 overflow-hidden transition-all duration-200"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
                  alt={title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#0e0d0b]/70 border border-[#c9a84c]/40 flex items-center justify-center group-hover:border-[#c9a84c] transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#c9a84c] ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col gap-1">
                <p className="font-display text-xs text-[#f2ebeb] leading-snug group-hover:text-[#c9a84c] transition-colors duration-200 line-clamp-2">
                  {title}
                </p>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">{date}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.youtube.com/@TheHibrythianSaga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2e2b26] rounded-sm text-[#7a746e] font-body text-xs tracking-widest uppercase hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-all duration-200"
        >
          View Full Channel &#8599;
        </a>
      </div>

    </div>
  );
}
