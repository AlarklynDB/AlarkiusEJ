import { Link } from '../../lib/router'

export default function Bookstore() {
  return (
    <div className="pt-16">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">
          404 — Coming Soon
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-text leading-tight mb-6">
          The Bookstore
          <br />
          <span className="text-rose-light">Isn&apos;t Open Yet</span>
        </h1>

        <p className="text-text-muted text-lg leading-relaxed mb-4">
          This page is being built. Soon it&apos;ll catalog every book across both of my IPs —
          The Hibrythian Saga, The Naiseikai Universe, and more.
        </p>

        <div className="callout callout-rose text-left mb-10">
          <span className="text-lg flex-shrink-0">📚</span>
          <p className="text-sm text-text leading-relaxed">
            In the meantime, the Author Exclusive Originals are already available for purchase on
            the home page — with more titles being added as they release.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-rose text-ink text-sm font-semibold rounded-lg hover:bg-rose-light transition-colors duration-200"
          >
            Back to Home
          </Link>
          <Link
            to="/hibrythian-saga"
            className="px-6 py-3 bg-surface border border-border text-text text-sm font-medium rounded-lg hover:bg-surface-raised hover:border-border-light transition-colors duration-200"
          >
            The Hibrythian Saga
          </Link>
          <Link
            to="/naiseikai-universe"
            className="px-6 py-3 bg-surface border border-border text-text text-sm font-medium rounded-lg hover:bg-surface-raised hover:border-border-light transition-colors duration-200"
          >
            The Naiseikai Universe
          </Link>
        </div>
      </section>
    </div>
  )
}
