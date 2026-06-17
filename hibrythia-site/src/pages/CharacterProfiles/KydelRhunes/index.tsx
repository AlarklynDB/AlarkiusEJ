import { useState } from 'react';
import { Link } from 'react-router-dom';

function PowerToggle({ title, color = '#c9a84c', children }: { title: string; color?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#131210] hover:bg-[#1a1714] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm" style={{ color }}>{title}</span>
        <span className="text-[#4a4844] text-lg" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>&#8964;</span>
      </button>
      {open && (
        <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

function SubPower({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="space-y-0.5">
      <p className="font-display text-sm text-[#c9a84c]">&#8642; {name}</p>
      <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function KydelRhunes() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Main Protagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Kydel Rhunes</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;(scoffs), me..? You think I&apos;m cute&hellip;? ////// W-well&hellip;if you say so&hellip;&rdquo; &mdash; Kydel, probably.</p>
        </blockquote>
      </div>

      {/* Story Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Story Information</p>
          <p className="font-body text-xs text-[#c9a84c] mb-3">Contains spoilers for Book 1!</p>
          <div className="space-y-1">
            <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Role:</span> Deuteragonist (Second MC)</p>
            <p className="font-body text-sm text-[#c8c2ba]">Wulfwing Direwolf (Race)</p>
            <p className="font-body text-sm text-[#c8c2ba]">Hibryd &amp; Beast Creature</p>
            <p className="font-body text-sm text-[#c8c2ba]">Raeya&apos;s Friend and Partner</p>
            <p className="font-body text-sm text-[#c8c2ba]">Zohl&apos;s Spirit Host Bond</p>
          </div>
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Profile</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Presence:</span> The Entire Series</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Point of Origin:</span> Varleqe</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Character Type:</span> Dynamic</p>
          <p className="font-body text-sm text-[#7a746e] mt-2 italic">This is my profile! The beast himself, Kydel! Let me show you who I am!</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Kydel Rhunes (redesign coming)</p>
      </div>

      {/* Personal Info */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'Birthday', val: 'Zestia 12th, 0856 AD' },
            { label: 'Direwolf Age', val: '1,388 years of age' },
            { label: 'Human Age', val: '204' },
            { label: 'Appearance Age', val: '20 – 28 (permanent)' },
            { label: 'Birthday Cycle', val: '5 years per increment' },
            { label: 'Gender', val: 'Agender (male appearance)' },
          ].map(({ label, val }) => (
            <div key={label} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-1">{label}</p>
              <p className="font-display text-sm text-[#f2ebeb]">{val}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-1">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Wolf-to-Human Age Conversion</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel&apos;s human age is at 204, despite his appearance that looks like he&apos;s in his 20 – 28. He will always look this way.</p>
          <p className="font-body text-sm font-mono text-[#7a746e]">24 ln(1388) + 31 = 204 human years</p>
          <p className="font-body text-sm font-mono text-[#7a746e]">16 ln(dog age) + 31 = human age</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Backstory */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Backstory and Origin</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Before having a second sentience awakening by Zohl, Kydel was once a beast citizen of Varleqe, a super-continent home to beasts and mythological creatures. Kydel is a direwolf, a gentle but yet fearsome and powerful being. However, his former home and territory was ransacked by Werebels (killer rabbits), an opposing race that rivals the direwolf race. Through that unfair incident, he sought out a new place, Hetrania, a floating continent in the sky.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          One day, Kydel ventures around Hetrania and stumbles among a very mysterious cave. Not knowing what would happen, he enters and the cave shuts. He tried to get out but failed. Suddenly, Kydel got attacked by something of the unknown, being dragged across the floor before blacking out. Moments passed and he had woken up, only to be confronted by a spirit named Zohl. Zohl had told Kydel that he now has a new second life, being able to talk and be aware of his surroundings much better. However, he was still confused about this role.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Later that day, Kydel encountered an Owl named Leon, who clarified some of his questions. Leon, at old age, before passing away, gave Kydel his inheritance, thus along with a few new abilities. Kydel felt as if he was given a new life and a new chance, so he took this opportunity to venture around the globe, making friends along the way. Along his adventures, he encountered a Sylph named Raeya, who he saved from a group of bullies. Raeya and Kydel then became friends, whose bond will become unbreakable throughout their adventures.
        </p>

        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            His Continued Backstory (Toggle Me!)
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Life with his Parents</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Back when Kydel was a direwolf at a young age of a puppy, both of the three would travel around the continent of Varleqe. His mother would give him upmost care and shelter! Whenever they come across dangerous foes, much like killer-rabbits and other monsters, the father would fight. Sometimes, both the mother and father would switch out if one ever got major injuries.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              When he was scared, his mom would sing him a sweet tone to help comfort him from the scary noises. It helped him calm down so much, that he himself had memorized the tone. His parents are both powerful creatures, and with Kydel still developing his beast abilities at a young age, he was considered weak until the day he matured.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              However, this all came to a halt. In 0865 AD, a huge war between both direwolves and killer-rabbits broke out, which waged all across the continent. On the 10th day of Calderia (month 6), both the parents decided not to participate in the war anymore, trying not to risk their son to immense dangers. So, when they found a secluded forest, the three of them hid there.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Danger awaits as their scent was picked up by their enemies again. The parents had no choice but to leave their son alone. The mother ripped a huge piece of earthly soil to cover over her son and scraped some manure over it (who was soundly asleep amidst the war). They left in secret, trying not to look back, to save their son from a gruesome outcome.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              As they ran, they lured their enemies to a huge gathering of both Wulfwing and Coppercrest Direwolves, resulting in a bloody battle, along with the help of demons. Eventually, the direwolves won the war, but the cost, of a lot of lives taken. However, the parents lived and decided to venture around a new region within the continent.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              After a few days from an intense war, both the parents approached a rather divine altar, thus where they met Queen Laeyana and Runerus, The Forefather of Direwolves. There she bestowed both the parents with human forms and magic powers, naming the father, Arzo, and the mother, Xyla. Both of them requested that Runerus should look after their son, and he was pleased to do so. Then, they were given the free choice to explore all around the world!
            </p>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2 mt-2">On his own&hellip;</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Kydel couldn&apos;t survive on his own, so after he was of mature age and his abilities still developing, a direwolf by the name Ruefeus (Runerus), took care of him until he grew up with complete abilities that allowed him to survive. Ruefeus also taught him other unique teachings, morals, ethics, and traits about Direwolves and other creatures. Later, when Ruefeus was satisfied with Kydel, he disappeared into the night.
            </p>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-2 mt-2">The year of 2245 AD</h3>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              In the Fifth month of Escael on the 31st Day, Kydel became a young adult wolf. There, his home was being terrorized by Killer Rabbits, again, due to the land&apos;s history. He won the fight, but was left unaware that one was still alive. There, he sought new land to make home, a floating continent in the sky called Hetrania. As he made that place home, he took the time and got rest. The next day, on The Month of Calderia, Kydel found a very mysterious and mystical cave. He ventured in and found nothing out of the ordinary. But wanting to leave, the entrance to the place shut tightly, and trying to escape a few times became futile. Just then a very bright divine like light attacked Kydel, rendering him unconscious.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Moments later, he woke up to only notice that he gained a second sentience, an awakening from a Spirit named Zohl. Xyla&apos;s backbone teachings towards Kydel was the foundation of his faith, kindness, and gentleness for life and experiences. And from thereon, both Zohl and Kydel set on an adventure to explore how much the world has to offer.
            </p>
          </div>
        </details>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Appearance */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Set Personality / Human Appearance</h2>
        <p className="font-body text-xs text-[#c9a84c]">Kydel&apos;s Human appearance will get a slight re-design!</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Kydel&apos;s personality is always on the bright and optimistic side. Even though at times he may be sad or unhappy, he doesn&apos;t let those other feelings get in the way, even if it is worth experiencing.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His human form (or appearance) stands around 5&apos;7 in height and has a lean tone build. His hair is playful, sleek, messy, coated with a silver palette. He has a long slick pony tail that hangs from the left side to the front, and a short side hair like tail from the right side of his head. However, he keeps his eyes his Direwolf version, remaining a bright orange color. Although agender, he adopts a male appearance. He&apos;s slim, but not too bulky. Kydel&apos;s build is supposed to reflect how agile his direwolf form is.
        </p>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">&#8642; Attire</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">He wears a navy gray blue turtleneck. And over it, another navy-like color but it&apos;s a cloak-like jacket. It has very intricate (zigzags) designs, some belts, and some pockets. The design isn&apos;t too over the top.</p>
          <ul className="space-y-1 pl-2">
            {["The cloak has inside pockets too.", "Mid-length that reaches to his upper knees.", "Can be buckled up."].map(t => (
              <li key={t} className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#4a4844]">—</span>{t}</li>
            ))}
          </ul>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">He wears dark brown boots, which have a fantasy-like design to it.</p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Four Identities */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 'The Social Self', text: "Kydel makes friends all around the world, even animals, beasts, and creatures. He's that social, and since he is a direwolf creature by default, he is always the optimistic and gentle friend. Others who see his beast form will look up to him. Kind and caring." },
            { id: 'The Personal Self', text: "When he's around Raeya and Zohl, this allows him to be vulnerable to them, able to talk about his problems, pressures, and issues. Even if it's just the little things, he will still talk about them, even if it doesn't bug him." },
            { id: 'The Core Self', text: "When Kydel is alone by himself, he's more reserved and authentic. Even when he is not using his powers, he's always wise, knowing what is right and wrong. But sometimes, even in the harshest decisions, he sometimes goes off to the wrong answer but ends up doing the right thing nonetheless." },
            { id: 'The Hidden Self (Both Human / Beast Self)', text: "He dislikes himself for who he is. Despite his great feats and his bright cheery side, the only contrast is that he thinks of himself as a dangerous and powerful direwolf. His final thoughts lead him to think of himself as a monster. Even though he mistakes, like hurting those whom he loves (by accidents more-so), his pride and ego bites back at him saying that he's a too powerful creature to exist in this world. He can sometimes be stubborn because of both his beast and human traits that he clings to. Pride is something he clings onto as his direwolf nature. However, he still has yet to grasp the other traits and emotions that all nhuemyns experience." },
          ].map(({ id, text }) => (
            <div key={id} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
              <p className="font-display text-sm text-[#c9a84c]">{id}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Relationship */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">His Relationship with Raeya, along with their Powers</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed">How they both learn about each other, grow, and interact</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Kydel Rhunes. The main protagonist of the series (and onwards). As a Direwolf beast creature, they hold many traits as one would: intelligence, loyalty, versatility, dexterity, and discernment. Direwolves are also very social creatures. Despite being within Rank 2 No.2 of the Beast Hierarchy System, these creatures know how to control their strength.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          He was originally from the continent of Varleqe (as stated from above). Adventuring through the place with Raeya made it clear he liked being around people who are fun and optimistic. But with her, it is a different story. After he rescued her from her predicament, that was the point where they became friends. Aside from his aloof and social personality, he wants Raeya to grow as a person. And knowing that she has gone through a lot even though she hadn&apos;t told him, makes him care for her even more. This is because of his mother&apos;s influence, a gentle but yet, kind and caring soul. Kydel wants to live up to his parents&apos; expectations not just as a direwolf, but as a creature with morality.
        </p>
        <details className="border border-[#2e2b26] rounded-xl overflow-hidden">
          <summary className="px-5 py-4 bg-[#131210] cursor-pointer font-display text-sm text-[#7a746e] hover:text-[#c8c2ba] hover:bg-[#1a1714] transition-colors">
            read more&hellip;
          </summary>
          <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              When he stepped in and offered his empathy and kindness towards her, he held his hand out and helped her, restoring her torn and injured wings while she healed her injuries and bruises. She might be a damsel in distress at that time, but he knows that she can grow from this. Because deep down, she wanted change, but was afraid to show it. Had he not helped her, she wouldn&apos;t be here today. And with Kydel&apos;s quick ability of discernment, he wanted to help her, no matter what she tells him.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Their adventures together bring them joy and excitement, with a lot of fun! At a certain point in time, their friendship and relationship became pristine. One day, Kydel asked her about her background, and she was hesitant to answer. But, she eventually confided with a story about her past. In another turning event, Raeya had broke in front of him, as she wept uncontrollably. He did not laugh nor did he mock her. He comforted her with words of understanding and assurance as he hugged her with gentle care.
            </p>
            <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
              <p className="font-body text-sm text-[#c9a84c] leading-relaxed italic">
                &ldquo;Stop listening to those shaming you! You should be proud of who you are! Be brave about yourself despite your insecurities or flaws! This is something that I really like about you! You might be afraid to show them, but from what I see, you are full of wonders! Face your problems head on with bravery and then you can improve yourself!~&rdquo; &mdash; Kydel to Raeya
              </p>
            </blockquote>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              This standing quote made Raeya realize her imperfections and she took it like a champion. Not only he re-assured her, he also praised her of who she was. She lacked little bravery to face her problems head on, but with him in her life, she feels like she can do it. She puts her trust in Kydel first, as she also cares about his growth! And from thereon, the two not only became partners, but best friends for life! :)
            </p>
          </div>
        </details>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* When it comes to powers */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">When it comes to having powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Both Kydel and Raeya knows it can be extremely fun to have powers, but also, dangerous at the same time! Their oaths to each other are <span className="italic text-[#f2ebeb]">not to hurt one another unless it comes to dire situations</span> (or worse). Sometimes for fun, they like to tease each other of their strength in terms of power. However, they never, ever, raise their ego or pride about who is stronger. Instead, they praise each other for their strengths and weaknesses when it comes to power scaling. This allows them to learn from their mistakes and improve from it. However, Kydel doesn&apos;t know that Raeya is stronger than him because of one of her dangerous powers, Infernal Magic, which triumphs him by 30 fold times.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Naturally, they are proud to have their powers! Because that makes them, them! And they need each other in terms of balance. Kydel&apos;s power, Eruptio Fervor, along with Raeya&apos;s Infernal Magic, rely on: <span className="text-[#4ade80]">ambition, emotion, and control</span>. When one of them is not themselves, one or the other needs to remind them about the outcome of their powers&apos; actions. They need to learn how to depart from a future consequence that will not only ruin their bond, but their trust.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          They are literally two sides of the same coin. Both need each other for balance. Not just their powers, but their morality. This helps them balance their sense of humanity, and their support for each other!
        </p>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Possessions */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Possessions</h2>
        <div className="space-y-3">
          {[
            { name: 'Portable Treestone Mansion', desc: 'This item was first purchased during the time Kydel and Raeya went to the Skypeak Obelisk.' },
            { name: 'The Earlywulf Ring', desc: "The Earlywulf Ring is a Spirit Object that was gifted to Kydel by the ancient spirit, Runerus. This was more of an early gift, an advancement, to Kydel as Runerus declared him a successor of the Direwolf Lineage. However, with the form being bestowed to Kydel, he vowed to himself only to use it in case of emergencies or life-threatening threats. The mention of this was in Episode 8 - An Early Advancement in Book 1." },
            { name: 'His Engagement Ring (Wedding Ring)', desc: 'A ring that he wears on his right ring finger as a sign of devotion to Raeya.' },
          ].map(({ name, desc }) => (
            <div key={name} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-1">
              <p className="font-display text-sm text-[#f2ebeb]">&#8642; {name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Powers & Sub-Powers — TOGGLEABLE */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Powers &amp; Sub-Powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Ever since Kydel had gained a human form, these are the powers he uses daily in that appearance! The older he gets in raw age, the more experience he gets. He literally grows older in power and more emotionally stable, which makes him extremely powerful in his own terms. Age unlocks control and awareness alongside damage (not just rather, it is a tandem age system).
        </p>
        <div className="space-y-3 mt-4">

          <PowerToggle title="Morph" color="#c9916c">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The power to take shape of something else. Kydel has used this a few times in his travels. He can also use this power to alter objects, but cannot rearrange technology. This is not a regenerative power. If Kydel loses a limb, he will have to ask Raeya to heal him up.</p>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest pt-1">Forms of Morph</p>
            <SubPower name="Armament Hardening" desc="This is a sub ability that is unique to Morph. This allows Kydel to restructure his morphed arms into a dense and durable layer that is stronger than graphene and diamond." />
            <SubPower name="Liquify" desc="Another sub-ability that is unique to Morph. This allows Kydel to restructure his morphed arms into a stretchy or liquid state." />
          </PowerToggle>

          <PowerToggle title="Restoration" color="#4ade80">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The power and ability to restore an object back into its fresh or previous state, while maintaining its previous quality. This power cannot heal injuries or revive people.</p>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest pt-1">Forms of Restoration</p>
            <SubPower name="Reconstruction" desc="Reconstruct broken terrain of any kind, from earth elements to man-made objects. This can also work on worn out or damaged clothing, broken parts, and more." />
            <SubPower name="Deconstruction" desc="Being able to deconstruct objects back into parts that made up the original object." />
            <SubPower name="Purification" desc="Being able to purify a dirty object. Even works on liquids. Can remove germs, rust, mold and any of the sort on a bacterial level." />
            <SubPower name="Telekemperture" desc="An overlapping power for both Telekinesis and Restoration." />
          </PowerToggle>

          <PowerToggle title="Telekinesis" color="#60a5fa">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The power to telekinetically move objects via mind or gesture by using one&apos;s energy signature. Kydel has used this multiple times in the series and is another main form of combat along with Morph.</p>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest pt-1">Forms of Telekinesis</p>
            <SubPower name="Dual-Kinesis" desc="The use of operating telekinesis at different individualities." />
            <SubPower name="Telekinetic Separation" desc="The ability to have an object float with telekinesis while the user deactivates the power while the object still floats in place. Works well with Dual-kinesis." />
            <SubPower name="Telekinetic Flying" desc="Basically just flying and levitation, through the use of telekinesis." />
            <SubPower name="Telekinetic Air Blade(s)" desc="Slashes of telekinetically charged air blades." />
            <SubPower name="Telekinetic Barrier(s)" desc="A telekinetic shield that can be layered one by one. Can decrease destruction." />
            <SubPower name="Telekinetic Field" desc="Allows objects and energy, along with cosmic energy (in all forms) to orbit around the user. The shape can vary." />
            <SubPower name="Telekinetic Absorption/Conversion" desc="This allows Kydel to absorb different kinds of energy from different kinds of crystals, where each contains different levels of energy, laminar flow, and condensation, also, converting energy to something else." />
            <SubPower name="Telekinetic Plasma" desc="Condensed telekinetic energy in the shape of an orb. This can also heat up and melt items." />
            <SubPower name="Telekinetic Helix" desc="Turns telekinetic plasma into a multitude of springs that wrap around the user's arms. Can be used to boost strength power, or be used as whips." />
            <SubPower name="Telekinetic Blast(s)" desc="A plasma blast that can be powered by different power ratios of a blast radius." />
            <SubPower name="Telekinetic Jolt" desc="A taser like jolt. Its power can vary from how powerful it can be from 1 (weakest) to 15 (strongest)." />
            <SubPower name="Telekinetic Target(s)" desc="A lock on telekinetic ability that allows the user to target a specific item or person. This can also grasp an object firmly in place." />
            <SubPower name="Telekinetic Glove(s)" desc="Gloves, but telekinesis. Protects the user's hand(s)." />
            <SubPower name="Telekinetic Stomp" desc="A stomp so great it sends out telekinetic vibrational waves." />
            <SubPower name="Telekemperture" desc="Telekemperture raises the temperature of a moderate heat or cold feeling to a higher or lower variable by controlling the energy that is emitted." />
            <SubPower name="Telekinetic Cloaking" desc="Much like Telekinetic Gloves and Barrier, this protects and covers the user's whole body. Kydel discovers this ability later in his travels when he goes super fast. This power also renders speed-dampening powers ineffective and helps breathe in space and underwater." />
          </PowerToggle>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Other Powers and Abilities */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Other Powers and Abilities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Kydel has a lot of different abilities. He has latencies and also powers that are beyond his familiarity.</p>

        <div className="space-y-3">

          <PowerToggle title="Magic Pocket (Powers bestowed by Zohl)" color="#a78bfa">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Powers and Sub-powers (Pt 2) — Powers bestowed by Zohl</p>
            <SubPower name="Magic Pocket" desc="A power that Zohl gave Kydel. This is more of a technical power that uses a pocket dimension as an inventory and storage. Kydel can summon objects from the Magic Pocket by thinking of its name and forming a gap in between his two hands." />
            <div className="space-y-1 pl-2">
              <p className="font-display text-sm text-[#c9a84c]">&#8642; How does it function?</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The Magic Pocket acts like a pocket dimension that is untethered from the actual 17 dimensions of reality. Therefore, it has its own systematic control. Time is abundant, but flows at a very slow rate. It can be freely manipulated to its own limits. It looks like a grid inside, much like that of an inventory display. Even though this power was bestowed to Kydel from Zohl, he cannot access this. It is completely unique to Kydel. This dimension is capable of storing living entities.</p>
              <p className="font-display text-sm text-[#c9a84c] mt-2">&#8642; Automation</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">It can be called out by thought or action. To enter as a living entity, Kydel will need to swipe down in the air with one of his hands while using telekinesis.</p>
            </div>
          </PowerToggle>

          <PowerToggle title="Limited Powers (Beast Form Only)" color="#7a746e">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Most of these powers are limited to Kydel&apos;s Beast form.</p>
            <SubPower name="Telepathic Voice Projection" desc="This power allows Kydel to project his voice even without moving his mouth. Kydel has found this ability useful when he's in his beast form. However, this power does not carry over to his human form." />
            <SubPower name="Regenerative Healing" desc="This power is an active ability that is only limited to his beast form. Kydel can regenerate his bruises, wounds, and injuries at excessive speeds. However, after Kydel got his human form, this power doesn't carry over." />
          </PowerToggle>

          <PowerToggle title="Eruptio Fervor (Unlocked)" color="#f87171">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">This power is known as Eruptio Fervor (known as EF). Its meaning is of <span className="italic text-[#f2ebeb]">intense eruption of emotions or passion</span>. This power that was once locked has been unlocked due to vigorous training. This happened in <span className="text-[#c9a84c] italic">Episode 9 - Fever Dream!</span></p>
            <ul className="space-y-2 pl-2 pt-1">
              <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#4a4844] shrink-0">—</span>EF is a power that uses a heavy amount of energy that only consumes on specific emotions. This power boosts all of Kydel&apos;s current powers ten-times and it can only be used with brute impact.</li>
              <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#4a4844] shrink-0">—</span>EF relies on a few abilities that Kydel uses. This power relies on Aura Perception and Enhanced Combat. Since Aura Perception is basically Aura Energy, Kydel can manipulate how strong his aura energy is, which can be combined with Enhanced Combat, Morph, and Telekinesis.</li>
            </ul>
          </PowerToggle>

          <PowerToggle title="Aura Focal Projection (AFP)" color="#fbbf24">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Another accessible power that appeared right after Kydel mastered EF. This power allows Kydel to focus aura energy to one point and manifest a physical aura-like blade. This can also use this power to boost his other powers ten-fold. This power can help boost the powers of telekinesis, morph, restoration, and outbreak.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Another type of power that is derived from Aura Focal Projection is <span className="text-[#f2ebeb]">Aura-Nature Manipulation</span>. This relies on the Power of Outbreak. Aura-Nature Manipulation manipulates the surrounding nature or atmosphere of the area.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">When the user enters Outbreak with a specific emotion, it can cause weather-mood manipulation (weather is nature based). There are only two types of Outbreak Aura-Emotions that triggers atmospheric change:</p>
            <ul className="space-y-2 pl-2">
              <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#60a5fa] shrink-0">—</span><span><span className="text-[#f2ebeb]">Sadness</span> will make the atmosphere turn into rain.</span></li>
              <li className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2"><span className="text-[#f87171] shrink-0">—</span><span><span className="text-[#f2ebeb]">Anger</span>, which turns the atmosphere into Fire and Thunder.</span></li>
            </ul>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Each atmosphere&apos;s emotional aura will disappear one by one after each emotion is resolved.</p>
          </PowerToggle>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Latencies */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Latencies</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          There are a few things about Kydel&apos;s powers that aren&apos;t to its true extent of what they can do. Here, there will be two listed latencies that Kydel is not aware of and how deadly these powers are.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f87171]">Deconstruction</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Deconstruction is a subpower of Restoration, which has a powerful and scary side. Not only does Deconstruction deconstruct objects back into parts they have been made up with, this can also destroy living organisms, from beasts, humans, and plant life. This is called <span className="text-[#f87171] font-semibold">Annihilate</span>.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f87171]">Telekemperture</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Telekemperture, a sub-power of Telekinesis. Kydel first experienced this back on Hetrania, while he roasted a fish with a breath so hot. However, this power isn&apos;t to its true extent. Not only is this a technical subpower of Telekinesis, it can also be used as both a defensive and offensive combat measurement. If you combine Telekemperture with Annihilate and Telekinetic Plasma/Blasts, this can be a deadly power.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Enhanced Abilities */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Enhanced Abilities and Senses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'Hypersonic Speed', desc: "Being able to go at intense speeds beyond hypersonic or at hypersonic. Kydel can use his share of telekinesis to make his speed invulnerable to powers that can cancel out Hypersonic Speed." },
            { name: 'Hyper Strength', desc: "Having the use of immense power and super strength." },
            { name: 'Hyper Resilience and Durability', desc: "Being able to pick up a fight without backing down. You could also say being durable." },
            { name: 'Enhanced Smell', desc: "As a beast, Kydel's sense of smell has greatly enhanced by four times of an average werewolf, wolf, and dog." },
            { name: 'Enhanced Vision', desc: "Kydel's vision has enhanced and has also gained a sub-ability, being able to see far objects with the use of x-ray." },
            { name: 'Enhanced Hearing', desc: "As a beast of its own terms, Kydel's sense of hearing has greatly enhanced ten-times. Kydel can perceive and listen to frequencies that are beyond both hibryds and Hernumias. Kydel can also focus his hearing onto one specific object or being." },
            { name: "Martial Arts - Beasts' Wulfwing", desc: "The Beasts' Wulfwing is a two-style art technique that is unique to only Kydel himself. Kydel developed this style in secret while he was at Skypeak Obelisk. This style of combat is only used when Kydel no longer has energy to use his supernatural powers. It's like a last resort and a very powerful art. The choreography may look soothing and gentle, much like the wind, but don't let it fool you since it lays a very disastrous blow at the end. Speed is also used for this art." },
          ].map(({ name, desc }) => (
            <div key={name} className="border border-[#2e2b26] rounded-xl bg-[#131210] p-4 space-y-1">
              <p className="font-display text-sm text-[#f2ebeb]">&#8642; {name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Weaknesses */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Weaknesses / Phobias</h2>
        <div className="space-y-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Empathetic Impulsive Vulnerability <span className="text-[#4a4844] font-body text-xs normal-case tracking-normal">(aka E.I.V / Mental Weakness)</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel&apos;s own emotions play a big part of who he is. Sometimes, most of his emotions can get to him which causes him to go down a straight impulsive path. Once Kydel gets locked in a specific emotion or variable, he uses it and lashes out. However, this weakness rarely occurs because Kydel knows how to control most of his emotions. His E.I.V also plays a big role in his power-related weakness for Eruptio Fervor.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">The Safety and Protection for Raeya</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel holds Raeya as a special friend in his heart. Not only their relationship and bond is strong, he treasures her for who she is. But whatever might happen to Raeya, hurt, injuries, or not, Kydel will take the blame on himself because he thinks his protection is not enough.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Atychiphobia &mdash; Phobia</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Defeat and/or Failure is never an option for Kydel, and he fears it. As a direwolf within the Beast Kingdom, they have no sense of loss, only in pride, power, and victory. That&apos;s how they stay afloat within that hierarchal system. But when it comes close to the verge of losing a battle or facing defeat (facing humiliation), Kydel will try to find a way to not experience that. His pride as a direwolf is what makes him, him. But if you take that away, it&apos;s just a shell full of emotional deprecation.</p>
          </div>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3 mt-6">Food Related Weaknesses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Natural Vanilla</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel being a direwolf cannot consume or intake vanilla. All direwolves cannot intake Vanilla. This is because Vanilla is made up of a single enzyme, Ferulic Acid, which is made up of Nethaji J, Gallage, and Esben H. This single enzyme cannot be digested for it is a &ldquo;poison,&rdquo; a one-way death sentence. Even eating the plant that vanilla comes from will do the same type of damage to direwolf species.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">However, he can consume artificial vanilla because it is not extracted by plants but made artificially with sugar, beans, cocoa, glycol, or caramel.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Chocolate</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">You may ask&hellip; <span className="italic">Isn&apos;t chocolate poison to canine species?</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Nope! Not in this world! Chocolate or any kind, including fermented or alcoholic (liquor) &mdash; make direwolves high, in heat, and sometimes, <span className="italic">very playful</span>. Think of it like anise!</p>
          </div>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3 mt-6">Power Related Weaknesses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Morph</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel&apos;s morph speed is fast, and this weakness is quite rare. While Morphing, he may be vulnerable as he can&apos;t really do anything. Plus if the morphing gets interrupted it has a chance of distorting his physical appearance. However, this can&apos;t be undone by the user itself but with help from a friend that knows soothing powers.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Eruptio Fervor</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Also known as EF, has a few drawbacks to it. This power uses a lot of energy, thus taking the toll on the user. It will render the user stressed and tired for ten minutes, immobile for five minutes. Another drawback is that this locked power can randomly appear at times, which makes it very hard to control. Kydel experienced this first when he was traveling with Raeya, and she was there to help get this side-effect under control.</p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Appearances */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearances</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Kydel has two animal forms and one divine form!</p>

        {/* Direwolf */}
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-6 space-y-4">
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
            <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Kydel Direwolf Form</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
            {[
              { label: 'Form', val: 'Direwolf — his default beast form, his true self.' },
              { label: 'Race', val: 'Hetranian Wulfwing' },
              { label: 'Body Type', val: 'Powertank / Agile' },
              { label: 'Eye Color', val: 'Orange' },
              { label: 'Gender', val: 'Male / Agender' },
              { label: 'Fur Color', val: 'Brown and Silver' },
            ].map(({ label, val }) => (
              <div key={label} className="space-y-0.5">
                <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">{label}</p>
                <p className="font-body text-sm text-[#c8c2ba]">{val}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-[#2e2b26] pt-4 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Kydel&apos;s Horn (Beast Direwolf Form)</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Direwolves have horns on their head. It signifies their strength. Kydel&apos;s specifically, is made to withstand huge blows. Super dense and nearly indestructible. It can still wear&hellip; but it takes nearly 65 years for it to have a scratch.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="border border-[#2e2b26] rounded-xl bg-[#0f0e0c] p-4 space-y-1">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Pre-Hibryd</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">His body stands and compares around to a Toyota Rav4. Even at this stage, he was still powerful to his own accord. This was Kydel&apos;s main build as a direwolf.</p>
            </div>
            <div className="border border-[#2e2b26] rounded-xl bg-[#0f0e0c] p-4 space-y-1">
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Post-Hibryd</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After being transformed by Zohl, his body stands and tanks around a size comparable to that of an Apocalypse Hellfire Jeep. 9&quot; in height, 20 ft&quot; in length, and 7.83 Ft&quot; in width.</p>
            </div>
          </div>
        </div>

        {/* Puppy Form */}
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-6 space-y-4">
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
            <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Passive Puppy Form</p>
          </div>
          <h3 className="font-display text-sm text-[#f2ebeb]">Passive Puppy Form — A rather very cute puppy!</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel gains this form to help Raeya relax a bit more! This form appeared in <span className="text-[#c9a84c] italic">Book 1: Hibryds - A Grand Voyage, EP 10</span>! Aside from being a very powerful direwolf, this form is more of a friendly appearance, but more wholesome and cute! &lt;3</p>
        </div>

        {/* Earlywulf */}
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-6 space-y-4">
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
            <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — The Earlywulf Form</p>
          </div>
          <h3 className="font-display text-sm text-[#f2ebeb]">The Earlywulf</h3>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">One of Kydel&apos;s most powerful forms, an Earlywulf. All of Kydel&apos;s powers in this form have no limit, but however, after completion of a battle, this form dissipates and Kydel turns back into either his Direwolf or Human Hibryd form. This also takes a toll on Kydel&apos;s body since the amount of energy was used for limitless power. This appearance is the largest of all, which scales up to 14 feet in height, 15 in length, and 13.5 Ft in width.</p>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/RaeyaFlutters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Raeya Flutters</p>
          </div>
        </Link>
        <Link to="/characters/ZohlCelestreule" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Zohl Celestreule</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
