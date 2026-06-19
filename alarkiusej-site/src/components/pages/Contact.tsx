const socials = [
  {
    name: 'Discord',
    handle: 'Join the Server',
    href: 'https://discord.gg/umB3p5qfE4',
    description: 'Most active here! Best way to reach for commissions, collabs, or just to chat.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.128 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
    accent: 'rose',
  },
  {
    name: 'Bluesky',
    handle: '@alarkiusjay.bsky.social',
    href: 'https://bsky.app/profile/alarkiusjay.bsky.social',
    description: 'Find updates, thoughts, and creative posts here.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.504 6.479.368 2.43 1.675 3.04 2.959 2.872 2.876-.384 6.057-.985 8.537 1.88m-3 4c4.006-1.73 10.284.7 11.4 5.07.17.67-.067 1.45-.782 1.738-.654.263-1.37-.09-1.794-.67-1.617-2.217-5.66-5.02-8.824-6.138" />
      </svg>
    ),
    accent: 'teal',
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/alarkiusej',
    href: 'https://www.linkedin.com/in/alarkiusej/',
    description: 'Professional profile and career updates.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: 'gold',
  },
  {
    name: 'YouTube (Personal)',
    handle: '@AlarkiusJay',
    href: 'https://www.youtube.com/@AlarkiusJay',
    description: 'Personal channel with music, creative content, and more.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    accent: 'rose',
  },
  {
    name: 'YouTube (Hibrythian Saga)',
    handle: '@TheHibrythianSaga',
    href: 'https://www.youtube.com/@TheHibrythianSaga',
    description: 'Official music channel for The Hibrythian Saga compositions.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    accent: 'gold',
  },
  {
    name: 'Ko-Fi',
    handle: 'Support the Work',
    href: 'https://ko-fi.com/alarkiusej',
    description: 'Support the work and fund ongoing projects, compositions, and worlds.',
    icon: <span className="text-lg">☕</span>,
    accent: 'teal',
  },
]

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">Contact</h1>
          <p className="text-text-muted text-lg">
            Let's create something amazing together! Here's where you can find and reach me.
          </p>
        </div>

        {/* Primary CTA */}
        <section className="mb-12">
          <div className="p-8 bg-surface rounded-2xl border border-border text-center">
            <h2 className="font-serif text-2xl font-semibold text-text mb-3">
              Best Way to Reach Me
            </h2>
            <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
              Discord is where I'm most active! Whether it's for music commissions, collaborations,
              or just to say hi — join the server. Please introduce yourself so I know you're not a
              spammer!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://discord.gg/umB3p5qfE4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-ink text-sm font-semibold rounded-lg hover:bg-rose-light transition-colors duration-200"
              >
                Join Discord Server
              </a>
              <a
                href="https://bsky.app/profile/alarkiusjay.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg hover:border-border-light transition-colors duration-200"
              >
                Find on Bluesky
              </a>
            </div>
          </div>
        </section>

        {/* Socials Grid */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-text mb-6">All Socials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-surface rounded-xl border border-border hover:border-border-light hover:bg-surface-raised transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    social.accent === 'rose'
                      ? 'bg-rose-bg border border-rose/30 text-rose group-hover:bg-rose/20'
                      : social.accent === 'teal'
                      ? 'bg-teal-bg border border-teal/30 text-teal group-hover:bg-teal/20'
                      : 'bg-gold-bg border border-gold/30 text-gold group-hover:bg-gold/20'
                  }`}
                >
                  {social.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text text-sm group-hover:text-rose-light transition-colors">
                    {social.name}
                  </p>
                  <p className="text-xs text-text-faint mb-1 truncate">{social.handle}</p>
                  <p className="text-xs text-text-muted leading-snug">{social.description}</p>
                </div>
                <svg
                  className="w-4 h-4 text-text-faint group-hover:text-rose transition-colors flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Ko-Fi Banner */}
        <section>
          <div className="p-6 bg-teal-bg border border-teal/30 rounded-xl flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif text-lg font-semibold text-text mb-1">Support on Ko-Fi</h3>
              <p className="text-sm text-text-muted">
                Just a little can help keep the worlds alive, the music flowing, and the stories
                growing. Every coffee counts!
              </p>
            </div>
            <a
              href="https://ko-fi.com/alarkiusej"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-teal text-ink text-sm font-semibold rounded-lg hover:bg-teal-light transition-colors duration-200"
            >
              Buy a Coffee ☕
            </a>
          </div>
        </section>

        <p className="text-center text-text-faint text-sm mt-12">
          Thanks for stopping by my corner of the internet!
        </p>
      </div>
    </div>
  )
}
