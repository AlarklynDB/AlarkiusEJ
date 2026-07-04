import { Link } from '../lib/router'

const socials = [
  { label: 'Support me on Ko-Fi', href: 'https://ko-fi.com/alarkiusej' },
  { label: 'My LinkedIn', href: 'https://www.linkedin.com/in/alarkiusej/' },
  { label: 'My Writing YouTube', href: 'https://www.youtube.com/@AlarkiusEJ' },
  { label: 'Discord', href: 'https://discord.gg/umB3p5qfE4' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/OfficialAlarkiusJay/'},
  { label: 'Bluesky', href: 'https://bsky.app/profile/alarkiusjay.bsky.social' },
  { label: 'Cara.App', href: 'https://cara.app/alarkiusej' },
]

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Hibrythian Saga', path: '/hibrythian-saga' },
  { label: 'Naiseikai Universe', path: '/naiseikai-universe' },
  { label: 'Music', path: '/music' },
  { label: 'Manifesto', path: '/manifesto' },
  { label: 'Policies', path: '/policies' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink-light mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-xl font-semibold text-text hover:text-rose-light transition-colors">
              AlarkiusEJ
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              Author · Composer · Worldbuilder
              <br />
              Creator of The Hibrythian Saga &amp; The Naiseikai Universe.
            </p>
            <a
              href="https://ko-fi.com/alarkiusej"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-rose-bg border border-rose/30 text-rose-light text-sm rounded-lg hover:bg-rose/20 transition-colors duration-200"
            >
              Support on Ko-Fi
            </a>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-faint font-medium mb-4">Site</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-muted hover:text-text transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-faint font-medium mb-4">Find Me</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-rose-light transition-colors duration-150"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-faint">
            &copy; {new Date().getFullYear()} Alarkius Elvya Jay (AlarkiusEJ). All Rights Reserved.
          </p>
          <p className="text-xs text-text-faint">
            All Worldbuilding Content is protected under Copyright Law.
          </p>
        </div>
      </div>
    </footer>
  )
}
