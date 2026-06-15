import React from "react";
import { Link } from "react-router-dom";

export default function TheOakgnarGrandTree() {
  return (
    <div className="min-h-screen bg-[#100908] py-16">
      <div className="max-w-[960px] mx-auto px-6">

        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
          The Hibrythian Saga &nbsp;/&nbsp; Locales &amp; Sights &nbsp;/&nbsp; The Oakgnar Grand Tree
        </p>

        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Seven Wonders of the World
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Oakgnar Grand Tree
        </h1>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Oakgnar Grand Tree — Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
          One of the Seven Wonders of The World. It&apos;s composed of three main materials, a single Hexicule Core, Hardwood, and Stonewood.
          The Hexicule Core keeps the tree intact within the ground, serves as a light beacon, is nearly indestructible, and can regenerate
          its roots and wood when damaged.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          The Oakgnar Grand Tree is a symbolism where all the four corners of Hetra (earth) binds together where people are unified
          despite absolute differences of each other. A worldwide cultural festival will be held a month, yearly, celebrating life
          and enjoying it to the fullest.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Specifications</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The Oakgnar Tree stands at a whopping height of 5.42 heunix (miles) in height, which is around 8.72 heunix (kilometers) tall.
            The entire root system stretches under and beneath the continent of Rynel, which roughly makes the shape of said continent.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The tree itself emits a soft moderate heat and light distribution system under its canopy since it ALMOST takes up the
            circumference of each town that surrounds it. The base of the tree is not too wide because the continent of Rynel acts as
            the support. It&apos;s an equal weight distribution system within the tree and the continent itself.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Current Modern Scientists do not know the age of this tree, and it is super hard to penetrate or cut through. The leaves
            from the tree itself contains mystical properties which makes it harder to study, since most scientists think it protects
            the tree itself from harm.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Viewable at Distances</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            This Tree can be seen at a viewable distance from the Continent of Lynneria, Hetrania, and Norrane. However, from other
            regions of Hetra, like Varleqe and Eulerich, it&apos;s barely visible due to the curvature of the planet. But it can easily
            be tracked since it emits a small aura-like beacon around the Tree, due to a small hexicule magnetic pull. You can buy
            a special compass at local shops to track the tree.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Located in UCC&plusmn;0</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Oakgnar Grand Tree is directly located at UCC&plusmn;0, in the center zone of the region. It is the westernmost zone
            from UCC+1 and UCC+2.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Oakgnar Festivities</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Every year, for a duration of one month, festivities, weddings, and celebrations are held specifically on Rynel during
            the month of Griselmber. Griselmber is a month that has a duration of 40 days. Everyone from around the world, despite
            being different and with differences, all come to this very place to celebrate the life they were given (united together
            through a kindred spirit). Toss away the pain and the suffering just for a month and celebrate. The time of relaxation,
            peace, fun, and games all reside on Rynel&apos;s famous and favorable, popular event, The Oakgnar Grand Festivities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Oakgnar Towns</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            There are a total of Four Oakgnar towns that surround the Oakgnar Grand Tree. They are named:
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { town: "Oakgnar Verns", dir: "North" },
              { town: "Oakgnar Grelt", dir: "South" },
              { town: "Oakgnar Maple", dir: "East" },
              { town: "Oakgnar Astel", dir: "West" }
            ].map((t) => (
              <div key={t.town} className="p-3 border border-[#2e2b26] bg-[#0f0d0c] rounded-sm">
                <p className="font-display text-base text-[#f2ebeb]">{t.town}</p>
                <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">{t.dir}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Transportation between these towns and around the Oakgnar Tree is fairly easy, since there is a main circular road
            that connects all four towns. There are fast shuttle buses that go up to 210 miles per hour. You could literally stay
            on this bus for hours admiring the view of the Oakgnar Tree (if you don&apos;t want to get off). It takes at least
            80 minutes (or 1 hour) to get to each town.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            If you are walking or running on foot, it will take at least 1 hour and 40 minutes &mdash; people in this world have
            magical abilities, so getting to places tends to be quicker even without the use of a shuttle bus at max speed ability.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Past History of the Oakgnar Tree</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            In the Ancient Era of Greungeria, the Oakgnar Tree stood there as a navigational system for early settlements and
            migration within visible reach. The early tribes and explorers came from The Alarctic Alpines &mdash; a north pole that
            was once lush and green, had an ancient city known as Valthoreia, which is ruled by Queen Eira Valthorne. The immigrants
            from here after the queen&apos;s departure who tragically vanished one day, migrated to pre-Rynel. This was with the help
            of the Oakgnar Tree that stood tall and mighty back then.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Now, the Valthoreians have dispersed in terms of religious means, but still kept the religion of Valthoreia alive.
            What was once known as the Valthoreians are now Rynerieans.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The Tree, however, didn&apos;t just unify a new era for humans &mdash; it created the baseline of how unity should be:
            peace and balanced. Other older Valthoreians that were once part of Queen Eira&apos;s civilization in the Alarctic Alpines
            are now known as:
          </p>
          <ul className="space-y-2 mb-4">
            {["Varlequieans (Varleqe)", "Lynnerians (Lynneria)", "Norraneans (Norrane)", "Eulerians (Eulerich)"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-[#c9a84c]">&#x2014;</span>
                <p className="font-body text-base text-[#c8c2ba]">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Memorials and Funerals</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            The base of the Oakgnar tree&apos;s circumference isn&apos;t too wide, nor does it take up much space on land. But it is not
            considered sacred. Everything must come and go &mdash; which is the way of life. Well, that is with the exception of
            the Tree itself &mdash; it can&apos;t seem to die whatsoever.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
            Instead, each of the roots that dig into the earth each have their own grassy beds and soils. There are a lot of memorials
            and funerals built on top of these roots. Some are built into the ground that are in between each roots, which also help
            serve as protection.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Each of these memorials hold significant value because for each town that surrounds the tree, there are mayors that help
            govern over the towns through time. Most of the mayors that helped with each town from generations and generations are
            Hibryds &mdash; people bestowed with magical abilities &mdash; only to be used responsibly. There are generation of
            Mayors buried in these memorials as they have made impact down the line within each of the Oakgnar Town&apos;s History.
          </p>
        </section>

        <div className="w-full h-px bg-[#c9a84c]/30 my-12" />

        <div className="flex items-start justify-between">
          <Link to="/world/locales" className="group block p-4 border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm transition-all duration-200 max-w-[220px]">
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1 group-hover:text-[#c9a84c]/60 transition-colors">&larr; Back</p>
            <p className="font-display text-base text-[#f2ebeb]">Locales &amp; Sights</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
