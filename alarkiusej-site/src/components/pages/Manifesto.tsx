export default function Manifesto() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="page-hero">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-3">
            Author Manifesto
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
            Why I Write
          </h1>
          <p className="text-text-muted text-base leading-relaxed border-b border-border pb-6">
            An Author Manifesto of why I love Writing, which is based on my Faith on Jesus.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="text-xs text-text-faint">Related:</span>
            <a href="/hibrythian-saga" className="text-xs text-rose hover:text-rose-light transition-colors">
              The Hibrythian Saga
            </a>
            <span className="text-text-faint text-xs">·</span>
            <a href="/naiseikai-universe" className="text-xs text-rose hover:text-rose-light transition-colors">
              The Naiseikai Universe
            </a>
          </div>
        </div>

        <article className="space-y-10 prose-custom">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-text mb-3">
              Writing is a Craft of Passion for me. They are all based on emotions and faith.
            </h2>
            <p className="text-text-muted leading-relaxed">
              I don't write stories just for fun. I write stories because I enjoy emotional weight,
              pain, suffering, healing, and catharsis.
            </p>
          </section>

          <div className="section-divider" />

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-text mb-3">
              Why I like Weight and Deep Connections
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We live in a world where love is in a lower list of priorities. I write because I want
              to change that. Love is important. Emotions are important. Respect should honor each
              one of us human beings. We all deserve love, but are unworthy of that.
            </p>
            <div className="callout callout-rose">
              <span className="text-xl flex-shrink-0">✝️</span>
              <p className="text-sm text-text leading-relaxed italic">
                Didn't Jesus die on the cross for us? Because he saw us as sinners and Loved us so
                greatly? I want to bring that gap in. Values are sacred. Mutual agreement is a must.
                If you take a blind eye and see past it, all you are is a person who invalidates
                feelings. Don't be like that. Be better for the world, and for yourself.
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* Section 3 - GL */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-text mb-3">
              If I follow Jesus, why do I write Girls' Love?
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Since my other universe, The Naiseikai Universe, is mainly centered on drama,
              supernatural, and GL, I thought I should address this, based on my Faith through Jesus.
            </p>
            <blockquote className="border-l-2 border-rose pl-5 mb-4">
              <p className="text-text italic font-serif">
                I follow Jesus because of his compassion for us as sinners. He loves us.
              </p>
            </blockquote>
            <p className="text-text-muted leading-relaxed mb-4">
              The Bible clearly states that Men should not be with men and Women should not be with
              women — and I can agree to that. But right now, this world we live in is divided and
              judged too harshly.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              I never write to sexualize or fetishize relationships like these. I write because I
              believe that LOVE can still be present, even if other people tell us otherwise, or say
              that it's wrong. It's not wrong if Love can help guide us, not to mock or judge.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-surface rounded-lg border border-border text-center">
                <p className="text-sm text-text-muted italic">
                  If women want to be with women, so be it.
                </p>
              </div>
              <div className="p-3 bg-surface rounded-lg border border-border text-center">
                <p className="text-sm text-text-muted italic">
                  If men want to be with men, so be it.
                </p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              I don't want to judge. We all have free will. We just need to choose wisely. To discern
              if love can still find a way for us. Fiction itself is a way for me to express things
              that most people are afraid to talk about. Read different mediums, write different
              mediums, and gain experience on what it means to be a writer.
            </p>
          </section>

          <div className="section-divider" />

          {/* Section 4 - Suffering */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-text mb-3">
              You might also ask — "Why do we suffer?"
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              It's because through suffering and pain brings us close to:
            </p>
            <div className="flex gap-4 flex-wrap mb-4">
              {['Faith', 'Love', 'Hope'].map((word) => (
                <div
                  key={word}
                  className="flex-1 min-w-[80px] p-4 bg-surface-raised border border-rose/20 rounded-xl text-center"
                >
                  <p className="font-serif text-lg font-semibold text-rose-light">{word}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted leading-relaxed">
              This is what Jesus represents. I want my works to reflect that. My stories. Even if
              others say otherwise. Because if they do? I'll just ignore that and keep on writing.
            </p>
            <p className="text-text-muted leading-relaxed mt-3">
              If you want to follow me and my works because I write with truth and soul, I don't
              mind. I want to bring people close to God and Jesus, not to preach, but to bring back
              what Love should be:
            </p>
            <div className="my-5 p-5 bg-surface rounded-xl border border-border text-center">
              <p className="font-serif text-lg italic text-text">
                "Sacred and Divine, even if it is messy or not. We're all people who are broken and
                are trying to survive in this harsh bitter world."
              </p>
            </div>
          </section>

          <div className="section-divider" />

          {/* Section 5 - No Preachiness */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-text mb-3">
              No Preachiness. Just Easter Eggs.
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              I do not plan to rub or preach Christianity in my works — The Hibrythian Saga or The
              Naiseikai Universe — but it will keep borrowing the basic theme of emotions and values.
              It is not to slander, belittle, or blaspheme.
            </p>
            <p className="text-text-muted leading-relaxed">
              In The Hibrythian Saga, there are references and easter eggs that come from The Bible,
              so if you like red herrings — <em>look out or stay tuned.</em> The Naiseikai Universe
              will also have some red herrings… but for that, you'll just need to explore to find
              out!
            </p>
          </section>

          <div className="section-divider" />

          {/* Closing */}
          <section>
            <div className="callout callout-rose">
              <span className="text-2xl flex-shrink-0">💖</span>
              <div>
                <p className="text-sm font-semibold text-text mb-1">Love is important. Never forget that.</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  We need more stories with catharsis and GOOD development!!! All works are also
                  inspired by Mob Psycho 100 at their core — because this show taught that{' '}
                  <em>
                    "Self Respect and Love is as equally as important for seeing past the surface of
                    others… and to love them for who they are, even if it hurts."
                  </em>
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
