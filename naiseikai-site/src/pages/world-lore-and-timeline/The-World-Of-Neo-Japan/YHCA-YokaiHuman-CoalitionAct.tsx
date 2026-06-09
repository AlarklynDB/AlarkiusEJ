import { Link } from 'react-router-dom';
import LorePageLayout from '../../../components/LorePageLayout'

const ACCENT = '#c8a87a';

function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id ?? (typeof children === 'string' ? children.toLowerCase().replace(/&amp;/g, 'and').replace(/[&]/g, 'and').replace(/[^a-z0-9 -]/g, '').trim().replace(/ +/g, '-'): undefined)}
      className="font-serif text-2xl font-bold mt-10 mb-3"
      style={{ color: ACCENT, borderBottom: `1px solid ${ACCENT}44`, paddingBottom: '0.4rem' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-lg font-semibold mt-6 mb-2" style={{ color: ACCENT }}>
      {children}
    </h3>
  );
}

export default function YHCAYokaiHumanCoalitionAct() {
  return (
    <LorePageLayout>
    <div className="page-container">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-text-faint mb-8 flex-wrap">
        <Link to="/world-lore-and-timeline" className="hover:text-[#00e5ff] transition-colors">Lore &amp; Timeline</Link>
        <span>/</span>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan" className="hover:text-[#00e5ff] transition-colors">The World of Neo-Japan</Link>
        <span>/</span>
        <span style={{ color: ACCENT }}>The Yokai &amp; Human Coalition Act</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1
          className="font-serif text-3xl sm:text-4xl mb-3"
          style={{ color: ACCENT, textShadow: `0 0 18px ${ACCENT}99, 0 0 40px ${ACCENT}44` }}
        >
          🏛 The Yokai &amp; Human Coalition Act
        </h1>
        <p className="text-base font-semibold mb-1" style={{ color: ACCENT }}>
          妖怪と人間の連合法 Yōkai to Ningen no Rengōhō
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="mb-8 rounded-xl border border-border bg-surface flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
        <span className="text-3xl">🏛</span>
        <p className="font-mono text-xs font-semibold" style={{ color: ACCENT }}>YHCA Headquarters</p>
        <p className="text-text-faint text-xs">[ Image Placeholder ]</p>
      </div>

      {/* ── Main Section ── */}
      <SectionHeading>The Yokai and Human Coalition Act</SectionHeading>

      <SubHeading>The Y&amp;H Act is a pact between two sides</SubHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Yokai cannot kill or murder humans because it is illegal, even if it's the other way around. It's about moral laws and ambiguity between parties. There are a lot of Yokai when they appeared, which upsets the balance of humans. So together, both outstanding leaders of these parties banded together to form this act.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        However, it is NOT illegal for Yokai to kill Yokai. It has been a tradition since the early yokai settlements from Year 5 - 1599, since the first few yokais appeared in Year 5.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Ninjas (Shinobi) are not Yokai. They are high classed humans that specialize in Shadow abilities using tomes and runes.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        The <strong style={{ color: ACCENT }}>oldest yokai</strong> (of the Naiseikai World) to ever exist is the representor of all Yokai. Her name is <strong style={{ color: ACCENT }}>Mizumi Kamekoryu</strong>, a Dragon Turtle. She ages very slowly due to the factors of dragon blood and turtle biology. She ages once every 50 years. As of the year 2100, she is now 2095 years of age, despite looking like she's in her 40s.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        The Human Representative of the YHCA is led by Hibiki Aoba. She has somehow attained an anti-slow aging product which allowed her to prolong her life. She might be the same age as Mizumi. (AHAHA ARU IS SHIPPING THAT!!!)
      </p>

      {/* ── Location ── */}
      <SectionHeading>Location — Ninjin Prefecture</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        The YHCA's Headquarters is located in the Ninjin Prefecture alongside the{' '}
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/ninja-yokai-association-quarters" className="underline" style={{ color: ACCENT }}>NYAQ</Link>,
        since these two organizations rely on each other time to time.
      </p>

      {/* ── Five Doctrines ── */}
      <SectionHeading>The Five Doctrines of the YHCA</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-6">
        When the act was formed in <strong style={{ color: ACCENT }}>Year 1700</strong>, both human and yokai leaders agreed upon five fundamental doctrines to govern their coexistence. These doctrines are inscribed on five stone pillars located at the YHCA headquarters in Kyoto, Japan. Each pillar is written in both Japanese and the ancient Yokai script.
      </p>

      {[
        {
          num: 'Doctrine I',
          title: 'Sanctity of Human Life',
          quote: 'No yokai shall take the life of a human, regardless of provocation, transgression, or threat. To do so is to break the foundation of this pact and invite judgment upon oneself.',
          desc: 'This doctrine establishes the core protection for humanity. Any yokai who kills a human faces severe consequences, including potential execution or permanent imprisonment. However, self-defense clauses exist in extreme cases, though they require extensive tribunal review.',
        },
        {
          num: 'Doctrine II',
          title: 'Equality Under Consequence',
          quote: 'No human shall take the life of a yokai without cause recognized by law. The act of murder knows no species, and justice shall be blind to form.',
          desc: 'While humans hold less raw power than most yokai, this doctrine ensures that human-on-yokai violence is equally punishable. It was a compromise that granted yokai legal personhood under human law systems.',
        },
        {
          num: 'Doctrine III',
          title: 'The Old Ways Remain',
          quote: 'Conflict between yokai is a matter of their own tradition. The coalition does not extend its hand into yokai-on-yokai affairs, for their laws are ancient and beyond our jurisdiction.',
          desc: "This controversial doctrine permits yokai to kill other yokai without legal consequence from the YHCA. It acknowledges that yokai have had their own systems of honor, territory, and dominance long before humans were even aware of their existence. Many modern yokai activists challenge this doctrine as outdated and dangerous.",
        },
        {
          num: 'Doctrine IV',
          title: 'Representation and Voice',
          quote: 'The eldest and wisest among yokai shall stand as representative for all yokai kind. Their word shall carry the weight of generations, and their counsel shall guide the path forward.',
          desc: 'This doctrine officially recognizes Setsuna Kamekoryu (and any future representative) as the voice of all yokai in coalition matters. It grants her authority to negotiate, mediate, and speak on behalf of yokai interests in political and legal arenas.',
        },
        {
          num: 'Doctrine V',
          title: 'Integration and Coexistence',
          quote: 'Let both sides walk the same roads, share the same skies, and build a future where fear gives way to understanding. Isolation breeds only darkness.',
          desc: "The final doctrine encourages cultural exchange, education, and peaceful integration between humans and yokai. It's the idealistic heart of the YHCA—though in practice, prejudice and fear still run deep on both sides. This doctrine led to the creation of yokai registration systems, mixed schools, and eventually, organizations like the YARC (though its methods severely contradict this doctrine's intent).",
        },
      ].map((d) => (
        <div
          key={d.num}
          className="border border-border rounded-xl bg-surface p-5 mb-4"
        >
          <p className="text-xs font-mono text-text-faint mb-0.5">─────⊰ {d.num}</p>
          <p className="font-serif text-base font-bold mb-3" style={{ color: ACCENT }}>{d.title}</p>
          <blockquote
            className="italic text-sm mb-3 pl-3"
            style={{ borderLeft: `3px solid ${ACCENT}66`, color: ACCENT }}
          >
            "{d.quote}"
          </blockquote>
          <p className="text-sm text-text-muted leading-relaxed">{d.desc}</p>
        </div>
      ))}

      {/* ── Enforcement ── */}
      <SectionHeading>Enforcement and Violations</SectionHeading>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Violations of Doctrines I and II are handled by the <strong style={{ color: ACCENT }}>YHCA Tribunal</strong>, a court composed of both human judges and yokai elders. Punishments range from imprisonment to execution, depending on severity and intent.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-4">
        Violations of Doctrine V (discrimination, hate crimes, etc.) are handled more leniently, often resulting in fines, community service, or mandatory education programs.
      </p>

      <p className="text-base text-text-muted leading-relaxed mb-10">
        Doctrine III remains the most controversial, as it essentially creates a legal gray zone where yokai can settle disputes through violence. Many younger yokai have called for its revision.
      </p>

      {/* ── Bottom Nav ── */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/religion-of-ujuukyo" className="btn-neon-cyan text-sm px-4 py-2 rounded">
          ← Religion of Ujuukyō
        </Link>
        <Link to="/world-lore-and-timeline/the-world-of-neo-japan/yokai-association-recovery-center" className="btn-neon-purple text-sm px-4 py-2 rounded">
          YARC →
        </Link>
      </div>

    </div>
    </LorePageLayout>
  );
}
