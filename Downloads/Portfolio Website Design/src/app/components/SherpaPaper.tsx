import museumExterior from 'figma:asset/5cfbbb1d9d91d400ee0830e8fb1402768f2bcaab.png';
import exhibitionPoster from 'figma:asset/9bf8844248e68385eb7335b8464a8577bbd70db6.png';
import artworkPhoto from '../../imports/sherpa_image.jpg';

const AAA_LINK = "https://www.aaa-a.org/programs/a-conversation-with-tsherin-sherpa";
const EXHIBITION_LINK = "https://www.tnam.museum/exhibition/detail/643";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
    >
      {children}
    </a>
  );
}

export function SherpaPaper({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#d1d5dc_transparent]">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-[80px] py-5 flex items-center gap-6 z-10">
        <button
          onClick={onClose}
          className="text-[10px] uppercase tracking-[0.14em] text-gray-400 hover:text-black transition-colors flex items-center gap-1.5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          ← Go back
        </button>
        <span className="text-[10px] uppercase tracking-[0.14em] text-gray-300" style={{ fontFamily: 'var(--font-mono)' }}>
          Sherpa Needs to Be in Taipei — 2025
        </span>
      </div>

      <div className="max-w-[680px] mx-auto py-[60px] px-[40px]">
        <h1
          className="leading-[1.1] font-bold tracking-[-0.02em] mb-2"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#0c0c0c' }}
        >
          Bring Tsherin Sherpa to Taipei
        </h1>
        <p className="text-[13px] tracking-[0.1em] text-gray-400 uppercase mb-10" style={{ fontFamily: 'var(--font-mono)' }}>December 18, 2025</p>

        <div className="space-y-8 text-[16px] leading-[1.8]" style={{ color: '#536372' }}>

          {/* Introduction */}
          <section>
            <div className="space-y-[18px]">
              <p>
                Throughout my four years at Minerva, every Thanksgiving break has been memorable, introducing me to new art, new people, and moments of quiet contemplation.
                During my first year, I took public transportation from San Francisco to Monterey, and if you have ever relied on American transit, you know how painfully slow that journey can be. The California coastline made it worthwhile. Sophomore year, I stayed in Seoul, walking through every exhibition and shopping mall I had somehow missed. Junior year brought the San Diego Museum of Art and the Broad in Los Angeles. Following this unintentional artistic tradition, I ended up in Tainan this year. Since there was not much else to do, we headed to the local art museum.
              </p>

              <figure className="my-6">
                <img src={museumExterior} alt="Tainan Art Museum, November 26, 2025" className="w-full rounded" />
                <figcaption className="text-[11px] mt-2 text-center leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                  Nastassia Shaveika, personal photograph, <A href={EXHIBITION_LINK}>Tainan Art Museum</A>, November 26, 2025.
                </figcaption>
              </figure>

              <p>
                The museum was surprisingly uncrowded. Some visitors strolled through the ground-floor exhibition of Japanese female artists; a few lingered over Taiwanese paintings. Only a handful climbed to the second floor to see the works of <A href={AAA_LINK}>Tsherin Sherpa</A>. Even in the gallery dedicated entirely to him, most people gathered around a wishing station where they could write prayers to be blessed by monks in Nepal. The rest of the artworks received only glances and Instagram snapshots.
              </p>

              <figure className="my-6">
                
                
              </figure>

              <p>
                Tsherin Sherpa was born in 1968 in <A href="https://en.wikipedia.org/wiki/Boudhanath">Boudhanath</A>, near one of Nepal's most sacred Buddhist stupas. From twelve, he trained under his father, Urgen Dorje Sherpa, learning the art of Himalayan Buddhism. The creation of a thangka, as the exhibition text notes, "requires intense concentration, years of training, and strict adherence to traditional canons (Exhibition Text 1)."
              </p>
              <p>
                At eighteen, Sherpa made a seemingly absurd move to Taiwan to study computer science and Mandarin (<A href={AAA_LINK}>Asia Art Archive, 2011</A>). Three years later, he returned to Nepal and continued working with his father. In 1998, at thirty, he moved to California and invented what I call "Buddhist pop art".
              </p>
              <p>
                Two works from the Tainan exhibition anchor my analysis. The first is a bronze sculpture of a child-like deity in a crown with turquoise, hands on its hips, blowing bubble gum, and wearing only golden briefs. The second is a large painting of a fierce, blue-faced figure crowned with skulls and flames, featuring a third eye and one hand raised in a peace sign.
              </p>

              <figure className="my-6">
                <img src={artworkPhoto} alt="Tsherin Sherpa, bronze sculpture and painting from LABYRINTHUS UNIVERSI" className="w-full rounded" />
                <figcaption className="text-[11px] mt-2 text-center leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                  Nastassia Shaveika, personal photograph, Tsherin Sherpa, bronze sculpture and painting from <A href={EXHIBITION_LINK}>"LABYRINTHUS UNIVERSI,"</A> Tainan Art Museum, November 26, 2025.
                </figcaption>
              </figure>

              <p>
                This essay argues that Sherpa's work deserves a major exhibition in Taipei. Using hermeneutics, I trace how his work transforms the traditions it requires us to know. Through iconography and postcolonial theory, I examine how his signs travel and refuse Western ideas of timeless Eastern spirituality. Moreover, based on performativity and deconstruction, I argue that Sherpa does not destroy the sacred – he reveals that the sacred has always been a performance, always in motion, always alive.
              </p>
            </div>
          </section>

          {/* Form and Interpretation */}
          <section>
            <h2 className="text-[1.6rem] leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>
              Form and Interpretation
            </h2>
            <div className="space-y-[18px]">
              <p>
                The bronze deity is roughly the size of a child. Ornate crown, turquoise inlay, hands on hips, golden bubble mid-blow, golden briefs where robes should cascade.
              </p>
              <p>
                To create this, Sherpa collaborated with traditional Newar studios in the Kathmandu Valley, utilizing fire-gilded copper – a technique dating back to the 10th century, and reaching its peak in the 17th, becoming a distinct genre in Nepal's classical art. Gold powder is mixed with mercury, applied to copper, and heated past 356 °C until the mercury evaporates. Technically demanding and highly toxic. The fumes could kill (Exhibition Text 2).
              </p>
              <p>
                Why choose this method? Sherpa could have cast the figure in modern materials, painted it gold, and achieved a similar visual effect with a fraction of the danger. Sherpa's choice of this ancient and labor-intensive method to produce figures in golden underwear, blowing bubble gum, is a statement in itself: tradition is not abandoned, but it is not left untouched either.
              </p>
              <p>
                The hermeneutic circle is unavoidable in this context (Schleiermacher 1998, 5-29). To understand the briefs, we need the thangka tradition; to understand the tradition, we now see it through the briefs. Schleiermacher's spiral tightens with each viewing. Conventionally, in thangka painting, the turquoise signifies divine status, and the deity is supposed to be wearing robes, not underwear. But the work transforms those conventions. Once we see the modern-day deity, we cannot return to the "innocent" thangka. I cannot unsee the bubble gum. When I next encounter a "traditional" thangka, the bubble gum will haunt me.
              </p>
              <p>
                Grammatically, this is a deity. The crown is easy to read; even the posture is balanced, with shoulders back, as the deity knows its power. Psychologically, Sherpa has inserted something the grammar never anticipated. The bubble gum and briefs are not errors. Sherpa trained under his father for six years. He knows the rules. He breaks them deliberately. The "original meaning" of these symbols cannot be recovered because the symbols themselves have been estranged from their origins; yet, the tradition cannot be dismissed, as the work's power depends entirely on our recognition of what has been disrupted.
              </p>
              <p>
                This reflects Taipei's cultural situation. At Longshan Temple, visitors encounter Huang Tu-Shui's <em>Shakyamuni Emerging</em>, a replica of a 1926 sculpture destroyed by American bombs in 1945. Which is the "original"? Like Sherpa's work, the <em>Shakyamuni Emerging</em> demands that viewers navigate between historical knowledge and present encounters, between the grammar of Buddhism and the psychological reality of loss. Taipei, where traditions have been repeatedly transplanted and rebuilt, is positioned to understand what Sherpa is doing.
              </p>
            </div>
          </section>

          {/* Icons in Transit */}
          <section>
            <h2 className="text-[1.6rem] leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>
              Icons in Transit
            </h2>
            <div className="space-y-[18px]">
              <p>
                The second work: a wrathful blue face, mouth open in fierce grimace, crowned with skulls and flames. Third eye. All the iconographic conventions of a Himalayan protector deity are present and correct. Except the deity is flashing a peace sign.
              </p>
              <p>
                Pre-iconographically (Panofsky, 2009, 220-235): blue face, raised hand, skulls, flames. Iconographically, the wrathful protector meant to frighten practitioners into awakening, skulls as victory over ego, flames as burning away ignorance, and the third eye as transcendent wisdom. But iconologically? The peace sign has no place in Panofsky's (2009) method. It borrows from Western counterculture, not Himalayan tradition. The "intrinsic meaning" Panofsky promises cannot be recovered, because Sherpa refuses to let meaning stabilize.
              </p>
              <p>
                The West projects "<A href="https://www.dictionary.com/browse/shangri-la">Shangri-La</A>" onto Himalayan cultures like Fanon's (2008) description of the colonial gaze projecting onto Black bodies: a fantasy that serves the colonizer's needs while denying the colonized their own subjectivity and contemporaneity. Sherpa knows this pressure. "In California, being Tibetan often means being depicted as a 'Shangri-la being,'" he explained in a <A href={AAA_LINK}>2011 interview with Asia Art Archive</A>. "People think we are all pristine and pure… That puts a lot of pressure on someone like me, because I feel that I am as ordinary as anybody else."
              </p>
              <p>
                The West does a painful yet effective job of denying Himalayan peoples their contemporaneity because the West dislikes the materialist culture it bred and craves spirituality it projects onto others. Sherpa describes the double bind: "Sometimes, if we do not function according to peoples' imaginations or expectations, then we are perceived to be corrupt in some way... There are times when, out of fear, my family, Tibetan friends, and I sometimes feel the need to maintain that perception. It's very sad, and it's not genuine. (<A href={AAA_LINK}>Asia Art Archive, 2011</A>)"
              </p>
              <p>
                Once we understand where Sherpa is coming from, the peace-sign protector makes perfect sense. The deity is emphatically contemporary. It wears its tradition visibly, but it also inhabits the present, borrowing gestures from global pop culture to assert its right to be hybrid. <em>I am not your spiritual refuge. I am as contemporary as you are.</em>
              </p>
              <p>
                A Sherpa exhibition in Taipei would place two postcolonial negotiations in dialogue: the Himalayan and the Taiwanese, both insisting on the right to inhabit tradition and modernity simultaneously, both refusing to be frozen in someone else's imagination.
              </p>
            </div>
          </section>

          {/* Performing the Sacred */}
          <section>
            <h2 className="text-[1.6rem] leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>
              Performing the Sacred
            </h2>
            <div className="space-y-[18px]">
              <p>
                According to Butler (2009), if gender is a "stylized repetition of acts", so is divinity. The mudra, the crown, and the proportions are the repeated acts through which divinity is constituted. A figure becomes a protector deity by being rendered according to the script, just as a person becomes gendered by performing according to cultural scripts.
              </p>
              <p>
                Sherpa really understands that script: an ornate crown, a serene face, but then he slips the deity into underwear instead of robes. Suddenly, we see the performance for what it is. Not parody. A revelation. The bubble gum does not mock the sacred; it exposes the mechanism by which sacredness is produced.
              </p>
              <p>
                Sherpa articulates this in Buddhist terms: "Sometimes we try to categorize the good and the bad, the holy and the unholy. But part of being a Buddhist practitioner is to go beyond stages of duality. (<A href={AAA_LINK}>Asia Art Archive, 2011</A>)" This sacred binary brings structure to the way we interpret things, but Sherpa deconstructs it. The deity in briefs does not become profane; the briefs do not become sacred. The opposition itself becomes visible as construction. Derrida (1987) argues that Western metaphysics relies on such binary oppositions, such as presence/absence, original/copy, and sacred/profane, where one term is privileged over the other. Deconstruction exposes how these hierarchies are unstable, how the subordinate term always haunts the privileged one. Sherpa performs this deconstruction visually. The binary collapses not into chaos, but into something more honest: the recognition that meaning is made, not found.
              </p>
              <p>
                The peace-sign protector does the same thing. All Buddhist elements performed correctly, but the peace sign, borrowed from a different cultural script, exposes the constructedness of both gestures. Neither a mudra nor a peace sign is more "authentic". Both are citations that reproduce meaning through recognition and repetition.
              </p>
              <p>
                Benedict Anderson's (2006) concept of "imagined communities" sheds light on what is at stake. Anderson argued that nations are imagined because members of even the smallest nation will never meet most of their fellow members; yet, in the minds of each, lives the image of their communion. The same logic applies to religious and cultural communities. The "Tibetan Buddhist community" is imagined through shared symbols, rituals, and iconographic conventions. The wrathful protector deity is one such symbol: it creates communion among practitioners who recognize it, who know how to read its mudras and attributes.
              </p>
              <p>
                However, what happens when that symbol migrates? When Sherpa paints it in California, exhibits it in Taiwan, and sells it to collectors in New York? The community that once imagined itself through this symbol becomes dispersed, hybridized, and layered. Sherpa's peace-sign protector is an acknowledgment that the community is now imagining itself differently, across borders, through borrowed gestures, in conversation with other cultural scripts. The peace sign does not destroy the protector deity. It reveals that the deity was always a site of communal imagination, and that imagination is not a static concept.
              </p>
              <p>
                Sherpa on his own identity: "I grew up in Nepal... When I went to India, I had to adapt to being like an Indian. And so in Taiwan, and also in America… I'm constantly transforming myself. (<A href={AAA_LINK}>Asia Art Archive, 2011</A>)" This is how identity works.
              </p>
              <p>
                Taiwan performs its identity through similar scripts: Japanese modernity, Chinese Nationalist nostalgia, indigenous recovery, and democratic reinvention. A Sherpa exhibition would not be an import. It would be a mirror.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-[1.6rem] leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Finally,</h2>
            <div className="space-y-[18px]">
              <p>
                Sherpa once said: "If I were to see the image of the Buddha of Compassion lying in the road, and right next to it is a homeless man, because of the conditioning I have had to the Buddha image, I would probably be inclined to pick up the image for my altar and may neglect the man sitting beside the image. (<A href={AAA_LINK}>Asia Art Archive, 2011</A>)" And this precisely summarizes the problem he is addressing.
              </p>
              <p>
                We revere the image so entirely that we forget what the image was for. The Buddha of Compassion was meant to evoke compassion in us, not to replace it. It is not about worshipping the hero; it is about becoming one.
              </p>
              <p>
                Deities in underwear and protectors with peace signs are not acts of destruction. They are acts of liberation. By estranging the sacred image, Sherpa returns us to the question the image is meant to ask: "What are you becoming?"
              </p>
              <p style={{ color: '#0c0c0c', fontWeight: 600 }}>
                Bring Tsherin Sherpa to Taipei.
              </p>
            </div>
          </section>

        </div>

        {/* References */}
        <div className="pt-12 border-t border-gray-200 mt-12">
          <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            References
          </p>
          <ul className="space-y-3 text-[12px] leading-[1.7]" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
            <li>Anderson, Benedict. 2006. <em>Imagined Communities: Reflections on the Origin and Spread of Nationalism</em>. Rev. ed. London: Verso.</li>
            <li><A href={AAA_LINK}>Asia Art Archive in America. 2011. "A Conversation with Tsherin Sherpa." February 22.</A></li>
            <li>Butler, Judith. 2009. "Performative Acts and Gender Constitution: An Essay in Phenomenology and Feminist Theory." In <em>The Art of Art History: A Critical Anthology</em>, 2nd ed., 356–366. Oxford: Oxford University Press.</li>
            <li>Derrida, Jacques. 1987. "Structure, Sign and Play in the Discourse of the Human Sciences." In <em>Twentieth Century Literary Theory: An Introductory Anthology</em>, edited by V. Lambropoulos and D. N. Miller, 35–58. Albany: State University of New York Press.</li>
            <li>Fanon, Frantz. 2008. <em>Black Skin, White Masks</em>. Pluto Press.</li>
            <li>Panofsky, Erwin. 2009. "Iconography and Iconology: An Introduction to the Study of Renaissance Art." In <em>The Art of Art History: A Critical Anthology</em>, 2nd ed., 220–235. Oxford: Oxford University Press.</li>
            <li>Schleiermacher, Friedrich. 1998. <em>Hermeneutics and Criticism: And Other Writings</em>. Cambridge: Cambridge University Press.</li>
            <li><A href={EXHIBITION_LINK}>Tainan Art Museum. 2025. "LABYRINTHUS UNIVERSI: Himalayan Contemporary Art." Exhibition text.</A></li>
          </ul>
        </div>
      </div>
    </div>
  );
}