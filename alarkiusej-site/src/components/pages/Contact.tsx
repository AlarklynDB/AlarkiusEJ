export default function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">Contact</h1>
          <p className="text-text-muted text-lg">
            Let's create something amazing together! Here's the best way to reach me.
          </p>
        </div>

        {/* Primary CTA */}
        <section className="mb-8">
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

        {/* Email */}
        <section className="mb-8">
          <div className="p-6 sm:p-8 bg-surface rounded-2xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-rose text-xs font-medium tracking-widest uppercase mb-1">Prefer Email?</p>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text">
                Or email me via contact@alarkiusej.com
              </h2>
              <p className="text-text-muted text-sm mt-1">
                Good for business inquiries, licensing, or anything that needs a paper trail.
              </p>
            </div>
            <a
              href="mailto:contact@alarkiusej.com"
              className="self-start sm:self-auto flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg hover:border-border-light hover:bg-ink transition-colors duration-200 whitespace-nowrap"
            >
              Send an Email
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* All Socials */}
        <section className="mb-8">
          <a
            href="/socials"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 bg-surface rounded-2xl border border-border hover:border-border-light hover:bg-ink-light transition-colors duration-200"
          >
            <div>
              <p className="text-rose text-xs font-medium tracking-widest uppercase mb-1">Find Me Everywhere</p>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text">All My Socials</h2>
              <p className="text-text-muted text-sm mt-1">
                YouTube, Twitch, Reddit, Bluesky, Medium, and more — every place I post, in one spot.
              </p>
            </div>
            <span className="self-start sm:self-auto flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-surface-raised border border-border text-text text-sm font-medium rounded-lg group-hover:border-border-light group-hover:bg-ink transition-colors duration-200 whitespace-nowrap">
              View All Socials
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
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
