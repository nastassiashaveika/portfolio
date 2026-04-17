import cartoonImage from 'figma:asset/fe5489f601a8be7490c941d9dfc7aa086ff20329.png';

export function CartoonPaper({ onClose }: { onClose: () => void }) {
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
          Watch This Cartoon During Lunch — 2025
        </span>
      </div>

      <div className="max-w-[680px] mx-auto py-[60px] px-[40px]">
        <h1
          className="leading-[1.1] font-bold tracking-[-0.02em] mb-2"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#0c0c0c' }}
        >
          Watch This Cartoon During Lunch
        </h1>
        <p className="text-[13px] tracking-[0.1em] text-gray-400 uppercase mb-10" style={{ fontFamily: 'var(--font-mono)' }}>
          On "The African Tale" (1963), Foe, and Fanon
        </p>

        {/* Abstract */}
        

        <div className="space-y-[18px] text-[16px] leading-[1.8]" style={{ color: '#536372' }}>

          <p>
            This week, I was telling my mom about <em>Foe</em>. She said it reminded her of an old Soviet cartoon from 1963 called <a href="https://www.youtube.com/watch?v=C9CKXz24pxw" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">"The African Tale."</a> I watched it that evening, and the animation is beautiful; the protagonist is portrayed as dignified. In the plot, he works his land and resists the animals (an elephant, a lion, and a fox — some commentators even suggest these are metaphors for Western countries) who try to steal it. Then I watched <a href="https://www.youtube.com/watch?v=E1DIanihAg4" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">a YouTube video about it</a>, which sent me back to rewatch the cartoon with new eyes (a perfect hermeneutic circle).
          </p>

          {/* Cartoon still */}
          <figure className="my-8">
            <img
              src={cartoonImage}
              alt="Still from 'The African Tale' (1963)"
              className="w-full rounded"
            />
            <figcaption
              className="text-[11px] mt-2 text-center leading-[1.5]"
              style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}
            >
              Still from "The African Tale" (Soyuzmultfilm, 1963).
            </figcaption>
          </figure>

          <p>
            The animation was created 15 years before <em>Foe</em>, but the contrast with Friday is stark. Coetzee's Friday embodies the "zone of nonbeing" (Fanon, p. 10), with him reduced to a mute body (epidermalization), existing under the colonizer's control — Cruso's discipline and Susan's attempts to "know" him, the whole Eurocentric psychoanalysis intention. Susan's relationship with Friday oscillates between desire and domination: she projects meaning onto his silence, tries to teach him to write, imagines sex with him, although Susan insists she wants to liberate Friday. In our class discussion, we noted how Susan describes Friday through negation — "no words," "no past," "no desires we can know." This is Fanon's colonial gaze in action; the colonized is defined only by what they lack in European terms, never as possessing their own subjectivity.
          </p>

          <p>
            The Soviet cartoon, based on Jomo Kenyatta's fable "The Gentlemen of the Jungle," seems to offer the opposite. The African man is the protagonist, hero, victor. He has a face, agency, expression, and resistance. But there is a paradox: Soviet animators adapted a text by an African politician for Cold War purposes. The man became a symbol of anti-Western struggle, but he's still <em>looked at</em>, still serving external political purposes. He has humanity, but on Soviet terms.
          </p>

          <p>
            Fanon explains why both approaches fail. Representation from a colonizer — although Susan is a woman and the USSR did not colonize any African countries — recirculates subjection.
          </p>

        </div>

        {/* References */}
        <div className="pt-12 border-t border-gray-200 mt-12">
          <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
            References
          </p>
          <ul className="space-y-3 text-[12px] leading-[1.7]" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
            <li>Coetzee, J.M. (1986). <em>Foe</em>. Secker &amp; Warburg.</li>
            <li>Fanon, F. (1952). <em>Black Skin, White Masks</em>. Éditions du Seuil.</li>
            <li>Kenyatta, J. (1938). "The Gentlemen of the Jungle." In <em>Facing Mount Kenya</em>. Secker &amp; Warburg.</li>
            <li>Atamanov, L. (Dir.). (1963). <em>Skazka Starogo Duba / The African Tale</em> [Film]. Soyuzmultfilm.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}