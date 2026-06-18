import { useState } from "react";
import { Link } from "react-router-dom";

const PowerToggle = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
        <span className="text-[#c9a84c] text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#131210] border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
};

export default function RunerusTheEarlywulf() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/characters"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Ancient Spirits of Creation
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Runerus, The Earlywulf Spirit
        </h1>
      </div>

      {/* Story Info Callout */}
      <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4">
        <p className="font-display text-sm text-[#f2ebeb] uppercase tracking-widest">Story Information</p>
        <p className="font-body text-sm text-red-400">Information on this page contains Spoilers for Book 1!</p>
        <hr className="border-[#2e2b26]" />
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Role</p>
          <p className="font-body text-sm text-[#c8c2ba]">Ancient Spirit of the Direwolf Lineage</p>
          <p className="font-body text-sm text-[#c8c2ba]">The Forefather of Direwolves</p>
          <p className="font-body text-sm text-[#c8c2ba]">The Earlywulf</p>
        </div>
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Presence</p>
          <p className="font-body text-sm text-[#c8c2ba]">Hibryds Book 1 EP 0 : Before Time</p>
          <p className="font-body text-sm text-[#c8c2ba]">Hibryds Book 1 EP VIII : An Early Advancement</p>
          <p className="font-body text-sm text-[#c8c2ba]">Hibryds Book 1 Epilogue : The War Between Rivals</p>
          <p className="font-body text-sm text-[#c8c2ba]">Referenced in Book 2</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 rounded-xl bg-[#1a1714] border border-[#2e2b26] flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4844]">[ Runerus illustration — coming soon ]</p>
      </div>

      {/* Opening Quote */}
      <div className="border-l-4 border-[#c9a84c] pl-6">
        <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
          "Behold, the Almighty Power of the Earlywulf."
        </p>
        <p className="font-body text-xs text-[#7a746e] mt-2">— Inscription on the Altar of Norrane</p>
      </div>

      {/* Origin and Backstory */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* The Earlywulf, Runerus */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Earlywulf, Runerus</h3>
          <p className="font-display text-base text-[#f2ebeb] mb-2">The Singular Forefather</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Long before the Direwolf races walked the lands of Planet Hetra, there was a <strong className="text-[#f2ebeb]">singular entity</strong>, fearsome, divine, ancient. He is called the <strong className="text-[#f2ebeb]">Earlywulf</strong>, and his name is <strong className="text-[#f2ebeb]">Runerus</strong>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Runerus is an <strong className="text-[#f2ebeb]">Ancient Spirit</strong> of enormous presence and power. He is not a creature of the mortal world; he is the <em>source</em> of an entire beast lineage, the progenitor from whom all Direwolves descend. His voice is said to sound like the engine of a tractor combined with a lion's growl, heavy, rumbling, commanding, yet unmistakably intelligent and warm toward those he deems worthy.
          </p>
        </div>

        {/* The Creation of the Direosaurous Wolf */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ The Creation of the Direosaurous Wolf</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In the ancient past of Planet Hetra, after Aurora Rimaea had given life to the world, Zohl Celestreule went to Runerus with a request: <em>create the Direosaurous Wolf</em>, the ancient predecessor from which future direwolf generations would evolve and descend. Runerus answered, and with that act, the Direwolf Lineage of Hetra was born.
          </p>
        </div>

        {/* The Two Lines */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ The Two Lines</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            From Runerus' power, the Direwolf Lineage was blessed and split into <strong className="text-[#f2ebeb]">two distinct races</strong>:
          </p>
          <div className="space-y-3 pl-4">
            <div className="border-l-2 border-[#2e2b26] pl-4">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Wulfwings</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Gentle, powerful, agile creatures with the white-highlighted traits of purity and discernment. Native primarily to the continent of Varleqe.
              </p>
            </div>
            <div className="border-l-2 border-[#2e2b26] pl-4">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Coppercrests</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                Powerhouse creatures with copper-nitrite skin, built for defense, highly intelligent, and uniquely docile around humans despite their raw power.
              </p>
            </div>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These two lines coexisted across the continent of Varleqe and beyond, and they still exist to this day.
          </p>
        </div>

        {/* His Hidden Altar */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ His Hidden Altar</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Runerus does not walk openly through the world. His resting place is a <strong className="text-[#f2ebeb]">hidden altar</strong> embedded deep within ancient ruins on the <strong className="text-[#f2ebeb]">Continent of Norrane</strong>, far east of Lynneria. The statue at the altar bears his exact likeness, a fearsome, divine form with a <strong className="text-[#f2ebeb]">lion's mane, a dragon's head, and the body of a saber-tooth</strong>. The inscription on the altar reads:
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              "Behold, the Almighty Power of the Earlywulf."
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The altar responds only to those who carry Direwolf blood. A handprint indent activates it, and when blood is given, Runerus awakens from his ancient slumber. Only Zohl, Aloria, and select others know of its existence.
          </p>
        </div>

        {/* Runerus and Kydel's Parents */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Runerus and Kydel&apos;s Parents</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            After the great Direwolf-Werebel war on Varleqe, Kydel&apos;s parents, <strong className="text-[#f2ebeb]">Arzo and Xyla</strong>, survived and wandered to a divine altar where they encountered <strong className="text-[#f2ebeb]">Queen Laeyana and Runerus</strong>. Laeyana bestowed them with human forms and magic powers. The two parents, knowing their son Kydel would need guidance, made a request of Runerus directly: <em>look after their son.</em>
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Runerus was pleased to accept.
          </p>
        </div>

        {/* Raising Kydel */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Raising Kydel</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In his travels, Runerus took on a mortal alias — <strong className="text-[#f2ebeb]">Ruefeus</strong>, and quietly entered Kydel&apos;s life. When Kydel was of mature age but still developing his abilities, <em>Ruefeus</em> (Runerus) raised him, teaching him how to survive. But more than survival — he taught Kydel <strong className="text-[#f2ebeb]">unique teachings, morals, ethics, and traits</strong> about Direwolves and other creatures.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When Runerus was satisfied that Kydel had grown enough, he disappeared into the night. He did not announce his departure. He simply left when the time was right, trusting that what he had instilled in Kydel would carry him forward.
          </p>
        </div>

        {/* Meeting Kydel Again */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Meeting Kydel Again — The Early Advancement</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Centuries later, when Zohl and Aloria brought Kydel to the Ruins of Norrane and activated the altar with his blood, Runerus awakened. He recognized Kydel immediately, not just as a Wulfwing Direwolf, but as something rarer:
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              "Out of the two lines I&apos;ve created, you broke free of the chains that once held you back. You are the first direwolf I know of to gain such power. Splendid! You are the finest of your race!"
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            After a private conversation, Runerus declared Kydel the <strong className="text-[#f2ebeb]">Successor of the Direwolf Lineage</strong> and bestowed upon him the <strong className="text-[#f2ebeb]">Earlywulf Form</strong>, the ability to transform into Runerus' own divine form, through a ring infused with divine orange aura essence.
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              "I wish you the best on your journeys with Raeya and Zohl. Hold them close to you and never let go!"
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The <strong className="text-[#f2ebeb]">Earlywulf Ring</strong> became one of Kydel&apos;s most significant possessions, and a responsibility he vowed only to use in emergencies or life-threatening situations.
          </p>
        </div>

        {/* Legacy and Presence */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Legacy and Presence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Runerus is a being of the ancient world who has quietly shaped the present one. He is not loud in his involvement; he works through lineage, through legacy, through the rare beings he selects. Kydel Rhunes is his greatest investment and chosen successor.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            His presence echoes in every Direwolf that walks the continent of Varleqe, in every instinct Kydel has ever trusted, and in the ring that sleeps on Kydel&apos;s left hand.
          </p>
        </div>
      </div>

      {/* Appearance */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Runerus&apos; physical form, the <strong className="text-[#f2ebeb]">Earlywulf</strong>, — is one of the most fearsome sights in the Hibrythian Saga:
        </p>
        <div className="space-y-3 pl-4">
          <div className="flex items-start gap-3">
            <span className="text-[#c9a84c] mt-1">•</span>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A <strong className="text-[#f2ebeb]">lion&apos;s mane</strong> around his neck and shoulders, massive and wild
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#c9a84c] mt-1">•</span>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A <strong className="text-[#f2ebeb]">dragon&apos;s head</strong>, imposing and ancient
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#c9a84c] mt-1">•</span>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The <strong className="text-[#f2ebeb]">body of a saber-tooth</strong>, powerful, agile, built for raw force
            </p>
          </div>
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His aura radiates in <strong className="text-[#f2ebeb]">divine orange</strong>, a color that nullifies all other aura colors in his altar&apos;s room, leaving only his own radiant presence visible.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His <strong className="text-[#f2ebeb]">voice</strong> carries the weight of centuries; it sounds like <em>the engine of a tractor combined with a lion&apos;s growl</em>, deep and heavy, yet capable of warmth and even humor toward those he respects.
        </p>
      </div>

      {/* Powers and Abilities */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers and Abilities</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-2">
          As an Ancient Spirit, Runerus holds powers rooted in the domain of beast life and the Direwolf Lineage:
        </p>
        <div className="space-y-3">
          <PowerToggle label="<< Lineage Creation >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He created both the Wulfwing and Coppercrest Direwolf races from his own power, blessing their lines into existence. He is the sole progenitor of the Direwolf Lineage.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Earlywulf Form Bestowal >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He can grant the ability to take on the Earlywulf form to those he deems worthy successors. This form grants limitless power while active, though it is taxing on the user&apos;s body.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Aura Perception >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Runerus can read and analyze the aura of any being, determining their power, mood, and potential. He immediately sensed Kydel&apos;s potent divine orange aura upon their meeting.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Spirit Object Creation >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He can manifest Spirit Objects, such as the Earlywulf Ring — to serve as vessels of power, infused with his own aura essence.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Omnipotence (Limited) >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              As an Ancient Spirit, he holds omnipotence within the scope of his domain, the Direwolf Lineage and beast life.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Limited Omniscience >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He holds vast knowledge, including awareness of Direwolves across the world and their status within the lineage.
            </p>
          </PowerToggle>
          <PowerToggle label="<< Realm Transference >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              He can travel between realms and dimensions and open spatial corridors when needed.
            </p>
          </PowerToggle>
        </div>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed italic mt-2">
          Note: Like other Ancient Spirits, Runerus does not hold all four omnis. He is all-powerful within his domain but is not a Lhumerial.
        </p>
      </div>

      {/* Relationships */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationships</h2>
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              name: "King Nhavah",
              desc: "His King and the architect of the Divine Realm. Runerus operates within the cosmic order Nhavah established."
            },
            {
              name: "Zohl Celestreule",
              desc: "A close and long-standing friend. Zohl was the one who first asked Runerus to create the Direosaurous Wolf, starting the Direwolf Lineage on Hetra. The two have a warm, trusting relationship; Zohl calls him an old friend without hesitation."
            },
            {
              name: "Aloria Cloudwave",
              desc: "Another trusted ally who knows of the altar in Norrane. She was present at Kydel's meeting with Runerus."
            },
            {
              name: "Aurora Rimaea",
              desc: "A fellow Ancient Spirit. While Rimaea seeded all life on Hetra, Runerus took special charge of the beast side of that life, specifically the Direwolf Lineage."
            },
            {
              name: "Kydel's Parents (Arzo and Xyla)",
              desc: "The Wulfwing Direwolves who survived the great war and came to him with a request: watch over their son. He honored this without hesitation."
            },
            {
              name: "Kydel Rhunes",
              desc: "His most significant relationship in the story. Runerus raised Kydel under the alias Ruefeus, shaped his morals and understanding of the world, and later declared him the Successor of the Direwolf Lineage. He holds immense pride in who Kydel has become, calling him \"the finest of your race.\" The Earlywulf Ring is the physical manifestation of their bond and Runerus' trust."
            }
          ].map((rel) => (
            <div key={rel.name} className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714]">
              <p className="font-display text-base text-[#f2ebeb] mb-2">{rel.name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{rel.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters/MorhvTheSpiritOfDeath"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Morhv, The Spirit of Death</p>
          </div>
        </Link>

        <Link
          to="/characters/AuroraRimaeaOfLife"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Aurora Rimaea, The Ancient Spirit of Life</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
