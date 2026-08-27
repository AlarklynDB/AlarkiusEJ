const socials = [
  {
    name: 'YouTube — Music',
    handle: '@alarkiusjay',
    href: 'https://www.youtube.com/@AlarkiusJay',
    accent: 'rose',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'YouTube — Writing',
    handle: '@alarkiusej',
    href: 'https://www.youtube.com/@AlarkiusEJ',
    accent: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'YouTube — The Hibrythian Saga',
    handle: '@thehibrythiansaga',
    href: 'https://www.youtube.com/@TheHibrythianSaga',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Twitch',
    handle: 'alarkiusej',
    href: 'https://www.twitch.tv/alarkiusej',
    accent: 'rose',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L21.429 12V0zm13.714 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h12.857Z" />
      </svg>
    ),
  },
  {
    name: 'Reddit',
    handle: 'u/OfficialAlarkiusJay',
    href: 'https://www.reddit.com/user/OfficialAlarkiusJay/',
    accent: 'gold',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.7ZM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249Zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249Zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .015-.463.33.33 0 0 0-.463 0c-.56.56-1.782.75-2.5.75-.718 0-1.954-.19-2.5-.75a.326.326 0 0 0-.243-.094Z" />
      </svg>
    ),
  },
  {
    name: 'Bluesky',
    handle: '@alarkiusjay.bsky.social',
    href: 'https://bsky.app/profile/alarkiusjay.bsky.social',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.504 6.479.368 2.43 1.675 3.04 2.959 2.872 2.876-.384 6.057-.985 8.537 1.88m-3 4c4.006-1.73 10.284.7 11.4 5.07.17.67-.067 1.45-.782 1.738-.654.263-1.37-.09-1.794-.67-1.617-2.217-5.66-5.02-8.824-6.138" />
      </svg>
    ),
  },
  {
    name: 'Medium',
    handle: '@alarkiusej',
    href: 'https://medium.com/@alarkiusej',
    accent: 'rose',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    name: 'Cara.App',
    handle: '@alarkiusej',
    href: 'https://cara.app/alarkiusej',
    accent: 'gold',
    icon: <span className="text-lg">🎨</span>,
  },
  {
    name: 'Gumroad',
    handle: 'alarkiusej.gumroad.com',
    href: 'https://alarkiusej.gumroad.com/',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.5 6.75h9a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75zm0 4.5h9a3.75 3.75 0 010 7.5h-9a3.75 3.75 0 010-7.5zm0 1.5a2.25 2.25 0 000 4.5h9a2.25 2.25 0 000-4.5h-9z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: 'AlarklynDB',
    href: 'https://github.com/AlarklynDB',
    accent: 'rose',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.814 1.103.814 2.222v3.293c0 .32.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Casting Call Club',
    handle: 'alarkiuselvyaj',
    href: 'https://www.castingcall.club/m/alarkiuselvyaj',
    accent: 'gold',
    icon: <span className="text-lg">🎙️</span>,
  },
]

const accentClasses: Record<string, string> = {
  rose: 'bg-rose-bg border border-rose/30 text-rose group-hover:bg-rose/20',
  teal: 'bg-teal-bg border border-teal/30 text-teal group-hover:bg-teal/20',
  gold: 'bg-gold-bg border border-gold/30 text-gold group-hover:bg-gold/20',
}

const socialsBackground = {
  backgroundImage:
    'radial-gradient(ellipse 140% 110% at 100% 100%, rgba(255,128,0,0.8) 0%, rgba(241,117,51,0.8) 18%, rgba(220,47,126,0.8) 38%, rgba(158,42,100,0.6) 55%, rgba(31,33,50,0) 75%)',
}

export default function Socials() {
  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundColor: '#1F2132' }}>
      <div className="fixed inset-0 pointer-events-none" style={socialsBackground} />
      <div className="relative w-full max-w-2xl mx-auto px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="page-hero text-center">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">Find Me Everywhere</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">AlarkiusEJ</h1>
          <p className="text-text-muted text-base leading-relaxed">
            Author · Composer · Worldbuilder — every place you can find me, all in one spot.
          </p>
        </div>

        {/* Socials List */}
        <div className="space-y-3 mt-10">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 sm:p-5 bg-surface rounded-xl border border-border hover:border-border-light hover:bg-surface-raised transition-all duration-200"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${accentClasses[social.accent]}`}
              >
                {social.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-text text-sm group-hover:text-rose-light transition-colors">
                  {social.name}
                </p>
                <p className="text-xs text-text-faint truncate">{social.handle}</p>
              </div>
              <svg
                className="w-4 h-4 text-text-faint group-hover:text-rose group-hover:translate-x-0.5 transition-all flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-rose-light transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to alarkiusej.com
          </a>
        </div>
      </div>
    </div>
  )
}
