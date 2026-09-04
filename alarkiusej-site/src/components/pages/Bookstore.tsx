import SelfPublishedBooks, { ALL_BOOKS, EbookCategory } from '../SelfPublishedBooks'

const tqctn = ALL_BOOKS.find((b) => b.key === 'tqctn')!

export default function Bookstore() {
  return (
    <div className="pt-16">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-4 text-left">
        <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">
          Bookstore
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-text leading-tight mb-6">
          The Bookstore
        </h1>
        <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
          Every self-published title across my worlds, organized by universe.
          This bookstore will house all my author exclusive originals, my main hub. 
          Direct Shipping and Printing is done by Lulu Direct!
          B&N will be my second home, native to the US.
          Coming to Google Play Books Soon
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <div className="section-divider" />
      </div>

      {/* The Hibrythian Saga */}
      <SelfPublishedBooks
        bookKeys={['hard', 'soft']}
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
      <section className="max-w-5xl mx-auto px-6 py-12">
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

      <div className="max-w-5xl mx-auto px-6">
        <div className="section-divider" />
      </div>

      {/* eBooks */}
      <section className="max-w-5xl mx-auto px-6 py-12 pb-20">
        <div className="text-center sm:text-left mb-6">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-2">
            Digital Editions
          </p>
          <h2 className="font-serif text-3xl font-semibold text-text mb-2">eBooks</h2>
          <p className="text-text-muted">
            Prefer reading digitally? Find eBook editions here, organized by world.
          </p>
        </div>
        <div className="max-w-md mx-auto sm:mx-0 space-y-4">
          <EbookCategory
            category="The Naiseikai Universe"
            ebooks={[
              { label: 'TQCTN — The Quiet Crow & The Ninja!', href: tqctn.ebookLink },
            ]}
          />
        </div>
      </section>
    </div>
  )
}
