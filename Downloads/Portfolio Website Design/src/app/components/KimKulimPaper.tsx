import { useEffect } from 'react';
import kulimWoman from '../../imports/image.png';

export function KimKulimPaper({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

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
          Kim's Woman — 2023
        </span>
      </div>

      <div className="max-w-[680px] mx-auto py-[60px] px-[40px]">
        <h1 className="leading-[1.1] font-bold tracking-[-0.02em] mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#0c0c0c' }}>
          Kim's Woman, and Dynamic Identity
        </h1>
        <p className="text-[13px] tracking-[0.1em] text-gray-400 uppercase mb-10" style={{ fontFamily: 'var(--font-mono)' }}>
          Yin and Yang, November 2023
        </p>

        <div className="space-y-6 text-[16px] leading-[1.8]" style={{ color: '#536372' }}>

          <p>Upon arriving in Korea, I immediately noticed how individuals are constantly dynamic, whether hiking up Hallasan Mountain in Jeju with Korean grandmothers or clubbing with local college students in Itaewon. This ceaseless dynamism, so deeply in Korean society, goes beyond my personal experience and is evident in Korean local history, the Han River Economy Miracle, and rich artistic culture.</p>

          <p>Kulim Kim's works, specifically <em>Woman</em> (1989), extensively explore the concept of wavering existence, an understanding of the human being as a constantly changing creature without labeling one with a mask of "identity" or "persona." Delving into the works of Kulim Kim, particularly his masterpiece <em>Woman</em>, provides an intriguing glimpse into the exploration of East Asian identity and how it differs from its Western counterpart.</p>

          <p>Kulim Kim, born in 1936 in Sangju, stands as one of the pioneers of contemporary art in Korea. While initially trained in the academic tradition of French expression masters, Kim eventually broke away from the confines of art school, opting for an independent path that led him to join a vibrant creative community. At the young age of 22, he held his first solo exhibition in Daegu, marking the beginning of a journey filled with innovative artistic practices. The artist's evolution took him through the experimental art scene of Seoul during the 1960s and 1970s, a transformative stay in Japan during the mid-1970s, and eventually, several decades of artistic exploration in the United States from 1984 to 2000. <em>Woman</em> found a new home at the Korean MoMA after being acquired from a private collection in France.</p>

          <p>The painting <em>Woman</em>, created in 1989, stands as a testament to Kim's ability to navigate concrete and abstract themes. The female body emerges from the water in a fall-like season, which depicts another level of symbolism since fall means the transition from summer to winter; the woman is not Asian. Notably, the depiction of a non-Asian woman challenges preconceived notions of ethnicity, inviting Korean art enthusiasts and Western artists to question their perceptions. The play of colors within the painting further amplifies its complexity. From soft, non-saturated shades to vibrant blues and black hands, the artwork shows various textures and contrasts, paying tribute to the movement cherished within Asian cultural philosophy. It reminds me of classic European expressionists whom Kim was somewhat forced to be inspired by in his old school.</p>

          <p>Diverse patterns on the woman's body canvas and in the background symbolize constant transition, mirroring modern Korean history. Korea's tumultuous history, marked by foreign rulers and internal crises, spans from the Gojoseon period in the 7th century BCE to the Japanese occupation in the early 20th century, the division into North and South Korea after World War II, and the subsequent Korean War in the 1950s. Kulim Kim, inspired by the turbulence he witnessed during the Korean War in his early adolescence, sought to depict Korea's instability through intricate patterns, varied textures, and evolving plotlines in his works.</p>

          <figure>
            <img src={kulimWoman} alt="Woman by Kulim Kim, 1989" className="w-full" />
          </figure>

          <p>In contrast to Kim's approach, the works of Matisse, an individual from well-established France, are characterized by plenty of bright and saturated colors. Matisse, rooted in a secure cultural and social identity, used such vibrant shades on purpose, using movement as a means to emphasize constant progression. Matisse's <em>Dance</em> radiates the energy from the sharp shapes and colors. Kim, on the other hand, embraces a different artistic perspective, weaving progression into his compositions through detailed patterns, subtle shifts in light colors, and a delicate interplay of motifs. By painting a standing white woman, he challenges traditional conventions and represents the inherent wavering existence significantly dominant in Eastern philosophy.</p>

          <p>The principle of Yin and Yang finds eloquent expression in South Korean art. <em>Woman</em> profoundly mirrors the contrasting elements seen in not only the dynamics of the painting but also in the contrasting colors of blue and black. Typically, the combination of black and blue is an idiom for someone bruised from violence since the two colors combined form purple. It symbolizes the dualities inherent in Korean society, showing even more interconnectedness in the world of Kim's art with history and the Korean community. Since philosophy here is shaped by Confucian values that align with Yin and Yang principles (from Chinese philosophy), the emphasis on social harmony resonates strongly in artistic portrayals. The basics are about creating a dynamic equilibrium of complex issues. Yin means darkness and passivity, and Yang is linked to light, activity, and assertiveness. The "Woman" (Yang) emerging from the water symbolizes contrasting elements in the painting, asserted by a nuanced color and brush shape transition. Here, Kim navigates issues of tradition and modernity, globalization, and cultural identity. Against the backdrop of South Korea's complex political history, Yin and Yang symbolism in art serves as a poignant commentary on the division of the Korean peninsula. The contrasting forces of North and South Korea and the yearning for reunification find symbolic representation in artistic expressions influenced by Yin and Yang principles.</p>

          <p>Therefore, Kulim Kim's avant-garde painting <em>Woman</em> explores the dynamic being in East Asia through the principles of Yin and Yang. The artwork rejects the labels of "identity" and navigates contrasting elements of Korean history through outstanding usage of art mediums. This painting contributes to the evolving narrative of South Korean identity, shaped by historical complexities and cultural distinctiveness. The painting pursues a lot of levels in harmonious existence: individual (that comes from Eastern "wavering existence"), group (which defines South Koreans existing together as a nation) and country (which determines the relationship between North and South Koreans). Kulim Kim was ahead of his time with <em>Woman</em> still serving as the powerful interplay of tradition and modernity.</p>

          <div className="pt-10 border-t border-gray-200">
            <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>References</p>
            <ul className="space-y-2 text-[12px] leading-[1.7]" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
              <li>Anderson, B. R. O. G. (1991). <em>Imagined Communities: Reflections on the Origin and Spread of Nationalism</em>. Verso.</li>
              <li>Belcher, D. (2022, June 15). A founding father of Korean multimedia comes to Maastricht. <em>The New York Times</em>. <a href="https://www.nytimes.com/2022/06/15/arts/kim-kulim-tefaf-maastricht.html" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">nytimes.com</a></li>
              <li>Bourdieu, P. (1984). <em>Distinction: A Social Critique of the Judgment of Taste</em>. Harvard University Press.</li>
              <li>Hobsbawm, E. J. (1983). <em>The Invention of Tradition</em>. Cambridge University Press.</li>
              <li>Kim Kulim. Artnet. <a href="https://www.artnet.com/artists/kulim-kim/3" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">artnet.com</a></li>
              <li>Lim, H. et al. (2013). <em>Kim Ku-lim: Like You Know It All</em>. Seoul Museum of Art.</li>
              <li>Myers, T. R. (2010, July 6). Matisse on the move. <em>The Brooklyn Rail</em>. <a href="https://brooklynrail.org/2010/07/artseen/matisse-on-the-move" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">brooklynrail.org</a></li>
              <li>Yinyang (Yin-yang). <em>Internet Encyclopedia of Philosophy</em>. <a href="https://iep.utm.edu/yinyang/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">iep.utm.edu</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}