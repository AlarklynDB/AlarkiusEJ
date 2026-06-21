// ============================================================
// Footer — extracted from the old Layout.tsx footer.
// Static, but kept as a React island for parity (the © year is
// computed at render). Anti-piracy notice + Dead Shard Continuity.
// ============================================================
export default function Footer() {
  return (
    <footer className="border-t border-[#2e2b26] py-6 mt-12">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center gap-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
          <p className="font-body text-[0.6rem] text-[#4a4844] tracking-wider uppercase">
            © {new Date().getFullYear()} The Hibrythian Saga ·{' '}
            <a
              href="https://www.alarkiusej.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a84c] transition-colors duration-150"
            >
              Alarkius Elvya Jay
            </a>
          </p>
          <div className="gold-rule hidden sm:block" aria-hidden="true" />
          <p className="font-body text-[0.6rem] text-[#4a4844] tracking-wider">
            All Lore &amp; Worldbuilding Are Rights Reserved.
          </p>
        </div>
        <div className="piracy-notice w-full" role="note" aria-label="Anti-piracy notice">
          <p className="piracy-notice-title">[The Dead Shard Continuity Notice — Class C Piracy Violation]</p>
          <p className="piracy-notice-body">
            Unauthorized redistribution of Hibrythiea-Encoded lore and Stories has been detected.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;You're not trying to pirate this entire site, are you… <em>user·? Do you really want to find out the hard way?</em><br />
            This universe is heavily protected! Reuploading or stealing content will lead to legal
            consequences — and yes, we can track it. Don't try and fight{' '}
            <a href="/characters" target="_self">Hunter Noxx</a>,{' '}
            <a href="/characters" target="_self">Zohl</a>, or{' '}
            <a href="/characters" target="_self">Kydel Rhunes</a>.
            {' '}Or any of our characters. They will obliterate you to smithereens!
          </p>
        </div>
      </div>
    </footer>
  )
}
