import { Link } from 'react-router-dom';

export default function CommunityHub() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-12">

      {/* Breadcrumb */}
      <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider">
        <Link to="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
        {" / "}
        <span className="text-[#c9a84c]">Community Hub</span>
      </p>

      {/* Header */}
      <div>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">The Hibrythian Saga</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Community Hub</h1>
        <p className="font-body text-base text-[#7a746e] leading-relaxed max-w-[600px]">
          A space for readers, worldbuilders, and fans of The Hibrythian Saga. Discussion, comments, and community features coming soon!
        </p>
      </div>

      {/* Community Rules */}
      <div className="px-6 py-6 rounded-xl border border-[#2e2b26] bg-[#1a1714] space-y-4">
        <h2 className="font-display text-base text-[#f2ebeb]">Community Guidelines</h2>
        <ul className="space-y-2">
          {[
            { icon: '✦', text: 'Be respectful. No harassment, hate speech, or personal attacks.' },
            { icon: '✦', text: 'Keep discussions relevant to The Hibrythian Saga, its lore, and related topics.' },
            { icon: '✦', text: 'No spoilers in comment titles. Use spoiler tags where available.' },
            { icon: '✦', text: 'Do not repost, redistribute, or claim any lore, art, or writing as your own.' },
            { icon: '✦', text: 'Constructive feedback is welcome. Negativity for the sake of it is not.' },
            { icon: '✦', text: 'Have fun and engage genuinely!' },
          ].map(({ icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <span className="text-[#c9a84c] text-xs mt-1 shrink-0">{icon}</span>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Comments section rendered by Astro below the React island */}

    </div>
  );
}
