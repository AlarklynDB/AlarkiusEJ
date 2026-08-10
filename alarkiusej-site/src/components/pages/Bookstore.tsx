import SelfPublishedBooks from '../SelfPublishedBooks'

export default function Bookstore() {
  return (
    <div className="pt-16">
      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-4 text-center">
        <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">
          Bookstore
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-text leading-tight mb-6">
          The Bookstore
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          Every self-published title across my worlds, organized by universe.
        </p>
      </section>

      {/* The Hibrythian Saga */}
      <SelfPublishedBooks
        bookKeys={['soft']}
        eyebrow="Book Collection"
        heading="The Hibrythian Saga"
        description={
          <>
            A Mega Collection of all books Related to{' '}
            <a
              href="https://thehibrythiansaga.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose hover:text-rose-light underline transition-colors duration-200"
            >
              The Hibrythian Saga
            </a>
          </>
        }
        showBookstoreLink={false}
        anchorId="hibrythian-books"
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="section-divider" />
      </div>

      {/* The Naiseikai Universe */}
      <SelfPublishedBooks
        bookKeys={['tqctn']}
        eyebrow="Book Collection"
        heading="The Naiseikai Universe"
        description={
          <>
            A Mega Collection of all books and series Related to{' '}
            <a
              href="https://naiseikaiuniverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose hover:text-rose-light underline transition-colors duration-200"
            >
              The Naiseikai Universe
            </a>
          </>
        }
        showBookstoreLink={false}
        anchorId="naiseikai-books"
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="section-divider" />
      </div>

      {/* Other Novels I write */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center sm:text-left">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-2">
            Book Collection
          </p>
          <h2 className="font-serif text-3xl font-semibold text-text mb-2">
            Other Novels I Write
          </h2>
          <p className="text-text-muted">
            Alarkius also likes to write in different genres. Coming soon!
          </p>
        </div>
      </section>
    </div>
  )
}
