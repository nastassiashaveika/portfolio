import { useState, useRef, useEffect, useCallback } from 'react';
import profileImage from 'figma:asset/882443218cfa17cbe8c305d11efe154ba053100d.png';
import paintingAI from 'figma:asset/f6028446a583e02aac0f628bfffd13f80d65c064.png';
import belarusChart from 'figma:asset/36842998a6211fe25ef3db6089d147619ce0923b.png';
import exportsBarChart from 'figma:asset/816c6cca7c7b17c921e1973115c6d4d64140917f.png';
import exportsTreemap from 'figma:asset/cd76856c3f6ca4cfc2583c05b554b6e3f4e75d31.png';
import ffTreeCoverage from 'figma:asset/128e12c1911b33e23a281c1589df054d296681cd.png';
import inceptionPreds from 'figma:asset/2ed590d90390162a0e398ca04499d0b5ca979288.png';
import ffFireState from 'figma:asset/4360bc1b0f4eaaedd3101e5de9efb15e7cd39b81.png';
import ffWindComparison from 'figma:asset/d519bbb75de662c591fd8f52e9888ab8c4750b41.png';
import ffFirebreak from 'figma:asset/67958bcda87359d0b8fbea08377836c09eccbb93.png';
import ffHistogram from 'figma:asset/f19bf56e9816d09062d86638fb8f7db8294d2af9.png';
import ffPercolation from 'figma:asset/a7f669d1cfe4086c3ee790f8d8b118a48ae014f3.png';
import { DogPaper } from './components/DogPaper';
import { CartoonPaper } from './components/CartoonPaper';
import { SherpaPaper } from './components/SherpaPaper';
import { KimKulimPaper } from './components/KimKulimPaper';
import cartoonStill from 'figma:asset/fe5489f601a8be7490c941d9dfc7aa086ff20329.png';
import sherpaExhibitionPoster from 'figma:asset/9bf8844248e68385eb7335b8464a8577bbd70db6.png';
import kulimCover from '../imports/image-1.png';

type Tab = 'bio' | 'work';
type WorkSubTab = 'research' | 'culture';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('bio');
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <div className="h-screen flex bg-white overflow-hidden">
      <nav className="w-[183px] border-r border-gray-200 pt-[80px] px-6 flex-shrink-0">
        <div className="flex flex-col gap-6">
          <button onClick={() => setActiveTab('bio')} style={{ fontFamily: 'var(--font-serif)' }} className={`text-[18px] text-left transition-colors ${activeTab === 'bio' && !notesOpen ? 'text-black' : 'text-[#d1d5dc] hover:text-gray-500'}`}>bio</button>
          <button onClick={() => setActiveTab('work')} style={{ fontFamily: 'var(--font-serif)' }} className={`text-[18px] text-left transition-colors ${activeTab === 'work' && !notesOpen ? 'text-black' : 'text-[#d1d5dc] hover:text-gray-500'}`}>work</button>
          <button onClick={() => setNotesOpen(true)} style={{ fontFamily: 'var(--font-serif)' }} className={`text-[18px] text-left leading-[1.3] transition-colors ${notesOpen ? 'text-black' : 'text-[#d1d5dc] hover:text-gray-500'}`}>we might have<br />this in common</button>
        </div>
      </nav>

      <div className="flex-1 relative overflow-hidden">
        <div
          className="h-full overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#d1d5dc_transparent] py-[80px] px-[80px]"
          style={{ paddingRight: activeTab === 'bio' ? '420px' : '80px' }}
        >
          {activeTab === 'bio' && <BioContent />}
          {activeTab === 'work' && <WorkContent />}
        </div>

        {activeTab === 'bio' && (
          <div className="absolute right-[-40px] top-0 w-[320px] pointer-events-none select-none">
            <img src={profileImage} alt="Nastassia Shaveika" className="w-full h-auto block" />
          </div>
        )}

        {notesOpen && <NotesWindow onClose={() => setNotesOpen(false)} />}
      </div>
    </div>
  );
}

function BioContent() {
  return (
    <div className="flex flex-col pb-[80px]">
      <h1 className="leading-[1.05] font-bold tracking-[-0.025em]" style={{ fontFamily: 'var(--font-serif)', fontSize: '52px', color: '#0c0c0c' }}>
        I'm Nastassia, making sense of culture and AI.
      </h1>
      <div className="flex flex-col pt-[60px] gap-[18px] text-[16px] leading-[1.8]" style={{ color: '#536372' }}>
        <p> I'm a senior at <a href="https://www.minerva.edu/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">Minerva University</a>, studying Data Science and Statistics with an Economics minor. Based in San Francisco now, I've lived in Seoul, Berlin, Taipei, and DC. </p>
        <p>Currently, I work in enrollment operations - hosting events, A/B testing email campaigns and talking to high schoolers from all over the world.</p>
        <p>Best way to reach me is by email at <a href="mailto:nastassiashaveika@gmail.com" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">nastassiashaveika@gmail.com</a>, or find me on <a href="https://www.linkedin.com/in/nastassia-shaveika/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">LinkedIn</a>. <a href="https://drive.google.com/file/d/1-w-nXPhVbafC6EU1gweZFK4cvorYWiVq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">Resume here.</a></p>
      </div>
    </div>
  );
}

function WorkContent() {
  const [activeSubTab, setActiveSubTab] = useState<WorkSubTab>('research');
  const [openPaper, setOpenPaper] = useState<string | null>(null);

  const researchProjects = [
    {
      number: 5,
      title: "AI sees Calm in Chaos",
      date: "2026",
      description: "AI says the funeral painting above is calm, I researched why.",
      bg: "#f0f0ee",
      image: paintingAI,
      badge: "04/26",
      link: "https://nastassiashaveika.github.io/AI-in-Art-Emotion-v1/"
    },
    {
      number: 4,
      title: "Forest Fires in Belarus",
      date: "2025",
      description: "I modeled forest fire spread in Belarus using Monte Carlo percolation.",
      bg: "#eceef0",
      image: ffTreeCoverage,
      badge: "04/25",
      paperId: "forestfire"
    },
    {
      number: 3,
      title: "Ex-Grand Duchy Of Lithuania",
      date: "2025",
      description: "Economic analysis of Belarus's slow growth compared to Lithuania and Poland since 1991.",
      bg: "#f0eeec",
      image: belarusChart,
      badge: "03/25",
      paperId: "belarus"
    },
    {
      number: 6,
      title: "My Dog Turned Into Data",
      date: "2024",
      description: "I have a Westie, who does a lot of things during the day, and gets mistaken for a Maltese. Can LLMs tell the difference?",
      bg: "#ebebf0",
      image: inceptionPreds,
      badge: "12/24",
      paperId: "dog"
    },
  ];

  const cultureProjects = [
    { number: 5, title: "Sherpa Needs to Be in Taipei", date: "2025", description: "On Tsherin Sherpa's Buddhist pop art and why it belongs in a major Taiwanese institution.", bg: "#eceef0", image: sherpaExhibitionPoster, badge: "12/25", paperId: "sherpa" },
    { number: 4, title: "Kim's Woman, and Dynamic Identity", date: "2023", description: "On Kulim Kim's 1989 painting of a white woman emerging from water in Korea, and what it says about Eastern identity.", bg: "#f0f0ee", badge: "11/23", paperId: "kulim", image: kulimCover },
    { number: 1, title: "Watch This Cartoon During Lunch", date: "2025", description: "15 mins cartoon + 5 mins writing. We read Foe, and Fanon in class, and my mom told me about this cartoon.", bg: "#eceef0", image: cartoonStill, badge: "11/25", paperId: "cartoon" },
  ];

  const activeProjects = activeSubTab === 'research' ? researchProjects : cultureProjects;

  return (
    <>
      <div className="pb-[80px]">
        <nav className="flex gap-10 border-b border-gray-200 mb-12">
          {(['research', 'culture'] as WorkSubTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-4 text-[11px] uppercase tracking-[0.12em] transition-all relative ${activeSubTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {activeSubTab === tab && <span className="absolute -left-5 top-0 w-3 h-3 bg-blue-600" />}
              {tab === 'research' ? 'Research Projects' : 'Takes and Culture'}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-4 gap-x-6 gap-y-12">
          {activeProjects.map((project) => (
            <WorkCard
              key={project.number}
              {...project}
              onOpen={'paperId' in project && project.paperId ? () => setOpenPaper((project as any).paperId) : undefined}
            />
          ))}
        </div>
      </div>

      {openPaper === 'belarus' && <BelarusPaper onClose={() => setOpenPaper(null)} />}
      {openPaper === 'forestfire' && <ForestFirePaper onClose={() => setOpenPaper(null)} />}
      {openPaper === 'dog' && <DogPaper onClose={() => setOpenPaper(null)} />}
      {openPaper === 'cartoon' && <CartoonPaper onClose={() => setOpenPaper(null)} />}
      {openPaper === 'sherpa' && <SherpaPaper onClose={() => setOpenPaper(null)} />}
      {openPaper === 'kulim' && <KimKulimPaper onClose={() => setOpenPaper(null)} />}
    </>
  );
}

function WorkCard({ number, title, date, description, bg, image, link, onOpen, badge }: {
  number: number; title: string; date: string; description: string; bg: string;
  image?: string; link?: string; onOpen?: () => void; badge?: string;
}) {
  const inner = (
    <div className="flex flex-col cursor-pointer group" onClick={onOpen}>
      <div className="flex justify-end items-center mb-3">
        <span className="border border-black rounded-full px-2.5 py-0.5 text-[10px] leading-none" style={{ fontFamily: 'var(--font-mono)' }}>
          {badge ?? `#${String(number).padStart(3, '0')}`}
        </span>
      </div>
      <div className="w-full aspect-square mb-4 overflow-hidden transition-opacity group-hover:opacity-90" style={{ backgroundColor: bg }}>
        {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
      </div>
      <h3 className="text-[1.2rem] leading-[1.25] mb-2 group-hover:underline decoration-1 underline-offset-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>
        {title}
      </h3>
      <p className="text-[13px] leading-[1.65]" style={{ color: '#0c0c0c' }}>{description}</p>
    </div>
  );

  if (link) return <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">{inner}</a>;
  return inner;
}

function BelarusPaper({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#d1d5dc_transparent]">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-[80px] py-5 flex items-center gap-6 z-10">
        <button onClick={onClose} className="text-[10px] uppercase tracking-[0.14em] text-gray-400 hover:text-black transition-colors flex items-center gap-1.5" style={{ fontFamily: 'var(--font-mono)' }}>
          ← Go back
        </button>
        <span className="text-[10px] uppercase tracking-[0.14em] text-gray-300" style={{ fontFamily: 'var(--font-mono)' }}>
          Ex-Grand Duchy Of Lithuania — 2025
        </span>
      </div>

      <div className="max-w-[680px] mx-auto py-[60px] px-[40px]">
        <h1 className="leading-[1.1] font-bold tracking-[-0.02em] mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#0c0c0c' }}>
          Ex-Grand Duchy Of Lithuania
        </h1>
        <p className="text-[13px] tracking-[0.1em] text-gray-400 uppercase mb-10" style={{ fontFamily: 'var(--font-mono)' }}>
          A Comparative Study of Economic Development of Minsk, Vilnius and Warsaw
        </p>

        <div className="space-y-8 text-[16px] leading-[1.8]" style={{ color: '#536372' }}>

          <Section title="Introduction">
            <p>The final decade of the Soviet Union, culminating in the fall of the Berlin Wall in 1989 and the USSR's collapse in 1991, birthed countries wondering how to transition from centrally planned economies to capitalism. Among these, Belarus, Lithuania, and Poland stood out as similar with shared borders and overlapping histories, but now different economic and political outcomes.</p>
            <p>For instance, Poland's GDP per capita in 2023 exceeded $17,000, Lithuania's roughly $15,000, while Belarus lags below $6,500 (World Bank, 2024). According to the World Bank (2021), Poland's Gini coefficient is 28 (moderate inequality), Lithuania's around 37, and Belarus is near 24, reflecting state wage controls rather than robust wealth distribution.</p>
            <p>This paper explores why Poland and Lithuania have developed into market-oriented success stories—aided mainly by EU integration. Belarus, however, with Alexander Lukashenko's authoritarian rule, maintained a Soviet-style governance model and relied on Russian subsidies. I argue that institutional reforms and historical narratives both affect economic performance. Though economic metrics like investment rates, export orientation, and human capital partially answer the question, each government's use of medieval legacies (the Grand Duchy of Lithuania, the Polish-Lithuanian Commonwealth, or Soviet nostalgia) further illuminates policy choices and reform directions.</p>
          </Section>

          <Section title="Historical Backdrop and Diverging Transitions">
            <h4 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>Medieval Roots</h4>
            <p>Poland, Lithuania, and Belarus trace their national identities to the Grand Duchy of Lithuania (GDL) and, later, the Polish-Lithuanian Commonwealth, which once covered present-day Belarus, Lithuania, and Poland (as well as parts of Ukraine and beyond). While these shared medieval legacies could serve as a unifying historical narrative, each government has interpreted them differently to align with present-day policy objectives.</p>
            <p>Poland often references the democratic traditions of the Polish-Lithuanian Commonwealth—emphasizing centuries of "noble democracy" and parliamentary tradition—as a historical precedent for its post-1989 liberal reforms and subsequent EU integration.</p>
            <p>Lithuania, viewing itself as the direct successor to the GDL, highlights its distinct Baltic identity and "Western" orientation, fueling national pride in Grand Duke Vytautas and facilitating early pro-EU sentiment.</p>
            <p>Meanwhile, Belarus has used GDL symbols (like the "Pahonia" knight) in cultural events and the fight against the Lukashenko regime. Official Belarus leans on Soviet nostalgia and Russian ties under President Alexander Lukashenko.</p>

            <h4 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>Sovereignty in the 20–21 Centuries</h4>
            <p>While nominally sovereign post-1945, Poland remained within the Soviet-dominated Eastern Bloc until the 1980s. The Solidarity Movement challenged communist rule, culminating in partially free elections (1989) and launching Leszek Balcerowicz's "shock therapy" in 1990–1991. This rapid liberalization reduced state ownership from nearly 70% of the economy to around 30% by the mid-1990s (World Bank, 2000). GDP growth averaged 4–5% through the 1990s—a rate surpassing many post-Soviet peers—and set the stage for EU accession in 2004.</p>
            <p>Lithuania declared independence in March 1990, the first Soviet republic to do so. Although GDP fell by over 40% from 1990 to 1993 (IMF, 2020), Lithuania adopted wide-ranging privatizations, price liberalizations, and regulatory reforms. Joining NATO and the EU in 2004 served as a catalyst: EU structural funds boosted infrastructure, while export diversification reduced dependence on Russia.</p>
            <p>Belarus also proclaimed sovereignty in 1990, but with Alexander Lukashenko's rise in 1994, it pivoted to preserve Soviet-style governance. Substantial Russian oil and gas subsidies in the 2000s, estimated at 1520% of Belarusian GDP (IMF, 2018), propped up uncompetitive state enterprises. Although official gross capital formation remains high (above 30% of GDP), poor regulatory environments limit total factor productivity (TFP).</p>
          </Section>

          <Section title="Determinants of Growth: Institutions, Trade and Capital">
            <h4 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>Investment and Capital Stock</h4>
            <p>A conspicuous disparity among the three countries is how capital is channeled. Belarus dedicates 30–37% of its GDP to investment, surpassing Poland (20–25%) and Lithuania (20–22%). However, a large portion flows into state-owned enterprises operating under political mandates rather than profitability criteria — leading to extensive rather than intensive growth.</p>
            <p>By contrast, Poland and Lithuania emphasize private-sector development facilitated by EU structural funds. Figure 1 (World Bank, 2024) illustrates gross capital formation trends.</p>

            <figure className="my-6">
              <img src={belarusChart} alt="Gross Capital Formation — Belarus, Lithuania, Poland" className="w-full rounded" />
              <figcaption className="text-[12px] mt-3 text-center" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Figure 1. Gross Capital Formation in Belarus, Lithuania, and Poland. (World Bank, 2024)
              </figcaption>
            </figure>

            <h4 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>Trade Orientation and Openness</h4>
            <p>Polish exports are $339 billion (OEC, 2023), while Belarus and Lithuania reach $7.61 and $41 billion respectively.</p>

            <figure className="my-6">
              <img src={exportsBarChart} alt="Share of Exports by Regions" className="w-full rounded" />
              <figcaption className="text-[12px] mt-3 text-center" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Figure 2. Share of Exports by Regions
              </figcaption>
            </figure>

            <p>Belarus maintains a trade-to-GDP ratio close to 60–65%, comparable to its neighbors on paper. However, over 50% of this trade involves Russia and China. Protests in 2020 and sanctions have complicated Belarus's attempts to expand to European markets.</p>

            <figure className="my-6">
              <img src={exportsTreemap} alt="Export Breakdown by Countries in 2023" className="w-full rounded" />
              <figcaption className="text-[12px] mt-3 text-center" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Figure 3. Export Breakdown by Countries in 2023. Lithuania is in the top left corner, Belarus in the top right, and Poland in the bottom center.
              </figcaption>
            </figure>

            <h4 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>Education and Human Capital</h4>
            <p>Poland, Lithuania, and Belarus are known to have good STEM education. However, Poland and Lithuania chose to align their liberal arts curricula with EU standards. Belarus lacked academic freedoms and international collaborations, hindering advanced research and innovation.</p>

            <h4 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>Macroeconomic Policy</h4>
            <p>In retaining the złoty, Poland grants the National Bank of Poland independent monetary policy. Lithuania's full Eurozone membership since 2015 stabilized inflation and expanded investor confidence. In contrast, Belarus survived 2 currency devaluations (notably in 2011 and 2015), with inflation soaring above 20% in crisis periods.</p>
          </Section>

          <Section title="Conclusion: Accounting for the Growth Gap">
            <p>Belarus follows a capital accumulation model without the total factor productivity (TFP) boost. This aligns with the Solow model's warning that extensive capital investments alone cannot ensure long-term growth without productivity gains and supportive institutions.</p>
            <p>In contrast, Poland and Lithuania have achieved "intensive" growth through institutional reforms, governance transparency, and EU integration. Both nations have also leveraged their historical legacies—the Polish-Lithuanian Commonwealth and the GDL's Western orientation—to legitimize their integration into the EU and NATO.</p>
            <p>Poland is likely to sustain moderate growth (3–4%), though it faces challenges related to rule-of-law disputes with the EU. Lithuania will grow economically but must address demographic issues like emigration. Under sanctions and political turmoil, Belarus risks prolonged stagnation unless it undertakes structural reforms to enhance productivity.</p>
          </Section>

          <div className="pt-12 border-t border-gray-200">
            <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-4" style={{ fontFamily: 'var(--font-mono)' }}>References</p>
            <ul className="space-y-3 text-[12px] leading-[1.7]" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
              <li>Freedom House. (2022). <em>Freedom in the World 2022</em>. <a href="https://freedomhouse.org" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">freedomhouse.org</a></li>
              <li>Gylfason, T., &amp; Hochreiter, E. (2022). To grow or not to grow: Belarus and Lithuania. <em>Comparative Economic Studies</em>, 65(1), 137–167. <a href="https://doi.org/10.1057/s41294-022-00188-1" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">doi.org/10.1057/s41294-022-00188-1</a></li>
              <li>International Monetary Fund. (2018). <em>Republic of Belarus: Selected Issues</em>. <a href="https://www.imf.org" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">imf.org</a></li>
              <li>Observatory of Economic Complexity. (2023). <em>Country Profiles: Belarus, Lithuania, and Poland</em>. <a href="https://oec.world/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">oec.world</a></li>
              <li>World Bank. (2024). <em>World Development Indicators 2024</em>. <a href="https://data.worldbank.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">data.worldbank.org</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ForestFirePaper({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#d1d5dc_transparent]">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-[80px] py-5 flex items-center gap-6 z-10">
        <button onClick={onClose} className="text-[10px] uppercase tracking-[0.14em] text-gray-400 hover:text-black transition-colors flex items-center gap-1.5" style={{ fontFamily: 'var(--font-mono)' }}>
          ← Go back
        </button>
        <span className="text-[10px] uppercase tracking-[0.14em] text-gray-300" style={{ fontFamily: 'var(--font-mono)' }}>
          Forest Fires in Belarus — 2025
        </span>
      </div>

      <div className="max-w-[720px] mx-auto py-[60px] px-[40px]">
        <h1 className="leading-[1.1] font-bold tracking-[-0.02em] mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#0c0c0c' }}>
          Forest Fires in Belarus
        </h1>
        <p className="text-[13px] tracking-[0.1em] text-gray-400 uppercase mb-10" style={{ fontFamily: 'var(--font-mono)' }}>
          Monte Carlo Forest Fire Simulation — Eastern Europe
        </p>

        <div className="text-[16px] leading-[1.8]" style={{ color: '#536372' }}>

          <p className="mb-10 text-[13px] leading-[1.7] italic border-l-2 border-gray-200 pl-4" style={{ color: '#8a97a3' }}>
            The model incorporates real tree density data to determine per-cell fire spread probability, wind direction and strength to simulate directional spread, and stochastic ignition to reflect real-world uncertainty.
          </p>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Scenario and Objectives</h2>
            <p className="mb-4">Eastern Europe has a lot of forests — Belarus has forest cover of nearly 40% (<a href="https://unece.org/sites/default/files/2021-07/2106522E_WEB.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">FAO/UNECE, 2021</a>), and fires there are a real and recurring problem, particularly in the south of the country, where the Polesie wetland-forest zone is drying out and has seen repeated large-scale burns. This project models fire spread across a patch of Belarusian forest using satellite-derived vegetation data from the Hansen Global Forest Change dataset (2000 Tree Cover %), simulating burn dynamics across a 100×100 cell terrain patch where each cell represents approximately 30×30 meters (~3×3 km total), matching the Hansen dataset's native resolution.</p>

            <figure className="mb-6">
              <img src={ffTreeCoverage} alt="Tree Coverage in Eastern Europe" className="w-full" style={{ mixBlendMode: 'multiply' }} />
              <figcaption className="text-[11px] mt-1.5 text-center leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Fig. 1 — Tree Coverage (%) in Eastern Europe. Hansen Global Forest Change dataset, 2000.
              </figcaption>
            </figure>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Simulation Framework</h2>
            <p className="mb-4">Fires start at random locations with probability proportional to tree density — denser cells are more likely ignition points. Each burning cell attempts to spread to its eight immediate neighbors, with spread governed by:</p>
            <div className="my-4 px-5 py-4 bg-[#f7f7f5] rounded text-[13px] leading-[1.9]" style={{ fontFamily: 'var(--font-mono)', color: '#334' }}>
              <span style={{ color: '#888' }}>Spread Probability</span> = Tree Density × Wind Modifier × Randomness<br />
              <span style={{ color: '#888' }}>wind_effect</span> = exp(−angle_diff / (π × wind_strength))
            </div>
            <p className="mb-3">Wind boosts spread in aligned directions and suppresses it against the wind. Each cell follows: <span className="px-1.5 py-0.5 rounded text-[13px] bg-[#f7f7f5]" style={{ fontFamily: 'var(--font-mono)' }}>Unburned → Burning → Burned</span>. Firebreaks are modeled by zeroing out tree density in selected rows, and <span className="px-1.5 py-0.5 rounded text-[13px] bg-[#f7f7f5]" style={{ fontFamily: 'var(--font-mono)' }}>run_monte_carlo</span> repeats independent runs to produce a cell-level risk map.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Controlled Fire Ignition Test</h2>
            <p className="mb-4">To isolate fire behavior, I performed a controlled ignition with no wind — validating the base model before introducing wind parameters.</p>
            <figure className="mb-2">
              <img src={ffFireState} alt="Forest density, fire state, and affected areas" className="w-full" style={{ mixBlendMode: 'multiply' }} />
              <figcaption className="text-[11px] mt-2 leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Fig. 2 — Left: Forest Density. Center: Current Fire State (green = alive, black = burned, red = burning). Right: Affected areas heatmap.
              </figcaption>
            </figure>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Wind Scenario Comparison</h2>
            <p className="mb-4">I tested two wind configurations across 50 Monte Carlo simulations each: an East Wind (0°, strength 0.5) and a stronger North Wind (90°, strength 0.7).</p>

            <figure className="my-5">
              <img src={ffWindComparison} alt="Risk Map: East Wind vs North Wind" className="w-full" style={{ mixBlendMode: 'multiply' }} />
              <figcaption className="text-[11px] mt-2 leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Fig. 3 — Left: Risk Map with East Wind (0.5). Right: Risk Map with stronger North Wind (0.7). Darker red = higher probability of being affected.
              </figcaption>
            </figure>

            <p className="mb-4">The North Wind scenario produced more aggressive northward spread. Confidence intervals overlap, so the difference between wind scenarios is not statistically significant, though the spatial pattern of spread shifts noticeably.</p>

            <div className="grid grid-cols-3 gap-0 text-[12px] border border-gray-200 rounded overflow-hidden" style={{ fontFamily: 'var(--font-mono)' }}>
              <div className="px-4 py-2.5 bg-[#f7f7f5] uppercase tracking-[0.08em] text-gray-400 text-[10px]">Scenario</div>
              <div className="px-4 py-2.5 bg-[#f7f7f5] uppercase tracking-[0.08em] text-gray-400 text-[10px]">Avg. Risk</div>
              <div className="px-4 py-2.5 bg-[#f7f7f5] uppercase tracking-[0.08em] text-gray-400 text-[10px]">95% CI Width</div>
              <div className="px-4 py-2.5 border-t border-gray-100" style={{ color: '#536372' }}>East Wind (0.5)</div>
              <div className="px-4 py-2.5 border-t border-gray-100" style={{ color: '#536372' }}>0.6919</div>
              <div className="px-4 py-2.5 border-t border-gray-100" style={{ color: '#536372' }}>±0.0988</div>
              <div className="px-4 py-2.5 border-t border-gray-100" style={{ color: '#536372' }}>North Wind (0.7)</div>
              <div className="px-4 py-2.5 border-t border-gray-100" style={{ color: '#536372' }}>0.7615</div>
              <div className="px-4 py-2.5 border-t border-gray-100" style={{ color: '#536372' }}>±0.0943</div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Firebreak Effectiveness</h2>
            <figure className="mb-4">
              <img src={ffFirebreak} alt="Fire Risk Map with Fire Break" className="w-full" style={{ mixBlendMode: 'multiply' }} />
              <figcaption className="text-[11px] mt-1.5 leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Fig. 4 — Risk map after adding a firebreak at rows 50–55.
              </figcaption>
            </figure>
            <p className="mb-3">A horizontal firebreak was created by zeroing tree density in rows 50–55. Average risk before: 0.6919, after: 0.3868. Risk reduction: 44.09%.</p>
            <p>The firebreak compartmentalized spread and cut risk to the northern sector by nearly half.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Burn Extent Distribution</h2>
            <figure className="mb-4">
              <img src={ffHistogram} alt="Burned Cell Distribution by Wind and Scenario" className="w-full" style={{ mixBlendMode: 'multiply' }} />
              <figcaption className="text-[11px] mt-1.5 leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Fig. 5 — Frequency of burned cells across 50 runs per scenario.
              </figcaption>
            </figure>
            <p className="mb-3">East Wind (blue) showed a bimodal distribution: either contained early or fully uncontained. North Wind (orange) skewed right, with more runs resulting in large fires, consistent with the higher average risk. Firebreak (green) showed a tight, left-skewed distribution. The fire hits the barrier and stops.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Percolation Threshold Validation</h2>
            <p className="mb-4">Forest fire dynamics connect to percolation theory: in a 2D lattice, the theoretical critical density is <strong style={{ color: '#0c0c0c' }}>~0.5927</strong> (Stauffer & Aharony, 1994) — above this, fire can propagate across the entire grid.</p>

            <figure className="my-5">
              <img src={ffPercolation} alt="Percolation Test: Burned Area vs Tree Density" className="w-full" style={{ mixBlendMode: 'multiply' }} />
              <figcaption className="text-[11px] mt-2 leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Fig. 6 — Burned area as a function of uniform tree density. The red dashed line marks the theoretical percolation threshold (~0.59).
              </figcaption>
            </figure>

            <p className="mb-3">My empirical threshold was ~1.0 — higher than the theoretical 0.59, as expected: finite grid effects, no long-range spotting, and windless conditions all push it upward.</p>
            <p className="mb-3">These simulation results — directional wind effects, firebreak efficacy, and density-driven spread — map onto documented fire patterns in the region.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-[1.6rem] leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>Executive Summary</h2>
            <p className="mb-4">Belarus's southern Polesie region, a vast peat-forest zone bordering Ukraine, has historically been the country's most fire-prone area. Between 1988 and 1997, over 27,000 forest fires were recorded nationally (<a href="https://gfmc.online/iffn/country/by/by_2.html" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">GFMC, 2001</a>), with the highest concentration in the southern oblasts. In the Gomel region specifically, more than 2,480 forest and grassland fires occurred between 1996 and 2014 (<a href="https://www.radioprotection.org/articles/radiopro/full_html/2017/01/radiopro160006/radiopro160006.html" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">Arlashchuk et al., 2017</a>). Across the border, the <a href="https://en.wikipedia.org/wiki/2020_Chernobyl_Exclusion_Zone_wildfires" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">2020 Chernobyl Exclusion Zone wildfires</a> burned roughly 11,500 hectares, releasing radioactive fallout into the atmosphere (Evangeliou et al., 2020). Grass and forest fires have occurred inside the contaminated zone repeatedly, with major incidents in 1992, 2010, and 2020. The simulation findings map onto these real patterns well. Based on the model, I recommend:</p>
            <ul className="space-y-3 pl-4">
              <li><strong style={{ color: '#0c0c0c' }}>Prioritize the south</strong>: Brest and Gomel regions show higher fire frequency in satellite records.</li>
              <li><strong style={{ color: '#0c0c0c' }}>Construct firebreaks at natural chokepoints</strong>: a single horizontal break reduced risk by 44% in the simulation. Belarus's State Forestry Committee already uses this method; the model suggests scaling it.</li>
              <li><strong style={{ color: '#0c0c0c' }}>Adapt deployment to wind forecasts</strong>: northerly winds drive more aggressive spread; emergency resources should pre-position in southern zones when those are forecast.</li>
              <li><strong style={{ color: '#0c0c0c' }}>Watch the Ukraine border corridor</strong>: the Chernobyl Exclusion Zone straddles both countries and has burned repeatedly — the <a href="https://en.wikipedia.org/wiki/2020_Chernobyl_Exclusion_Zone_wildfires" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">2020 fires burned ~11,500 hectares</a> (Evangeliou et al., 2020); cross-border coordination remains thin.</li>
            </ul>
          </section>

          <div className="pt-10 border-t border-gray-200">
            <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>References</p>
            <ul className="space-y-3 text-[12px] leading-[1.7]" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
              <li>Hansen, M.C. et al. (2013). "High-Resolution Global Maps of 21st-Century Forest Cover Change." <em>Science</em>, 342(6160). <a href="https://doi.org/10.1126/science.1244693" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">doi.org/10.1126/science.1244693</a></li>
              <li>FAO & UNECE. (2021). <em>Forest Landscape Restoration in Eastern and South-East Europe</em>. <a href="https://unece.org/sites/default/files/2021-07/2106522E_WEB.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">unece.org</a></li>
              <li>GFMC. (2001). Forest fire situation in Belarus. <em>International Forest Fire News</em>. <a href="https://gfmc.online/iffn/country/by/by_2.html" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">gfmc.online</a></li>
              <li>Arlashchuk, N. et al. (2017). "Forest and grassland fires in the Gomel region." <em>Radioprotection</em>, 52(1). <a href="https://www.radioprotection.org/articles/radiopro/full_html/2017/01/radiopro160006/radiopro160006.html" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">radioprotection.org</a></li>
              <li>Evangeliou, N. et al. (2020). "Uncovering transport, deposition and impact of radionuclides released after the early spring 2020 wildfires in the Chernobyl Exclusion Zone." <em>Scientific Reports</em>.</li>
              <li>Stauffer, D. & Aharony, A. (1994). <em>Introduction to Percolation Theory</em>, 2nd ed. Taylor & Francis.</li>
            </ul>
            <p className="text-[12px] leading-[1.7] mt-4" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
              Simulation built in Python using NumPy, object-oriented design, and vectorized operations. Monte Carlo runs: 50 per scenario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[1.6rem] leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function NotesWindow({ onClose }: { onClose: () => void }) {
  const items = [
    '\"Earth without culture is just a rock\"',
    "Master and Margarita",
    "Anything that Bulgakov wrote",
    "Mark Rothko",
    "Marc Chagall",
    "My parents",
    "My dog Ronnie (westie)",
    "Scottish dogs",
    "Countries that turned political prisons into museums",
    "Taiwan or a mention of Taiwan",
    "Techno bits",
    "When my friends say they liked Berlioz",
    "An amazingly good deal in thrift stores",
    "Isabel Marant skirt that I got for 20 usd in Seoul",
    "Jeju Island",
    "Happy Hour",
    "Mention of Washington, DC or Baltimore",
    "My friend group of girls from high school",
    "Matcha Lattes",
    "Trader Joe's brownies",
    "Sunglasses and people wearing them",
    "Not ray-ban sunnies",
    "Hand holding",
    "Appiah on how borders are created",
    "When Svetlana Alexievich gives an interview",
    "People who read Isaac Asimov",
    "Yoga/pilates/mobility training",
    "Whole Foods Diet",
    "Bodies of Water",
    "When movie directors commit to the same actor",
    "Really long hikes when they are over",
    "A fun airplane neighbor",
    "Traveling to Warsaw",
    "Molchat Doma",
    "Photobooths",
    "Pompidou in Paris",
    "Fresh Haircuts",
    "People who never solve equations using Discriminant",
    "Collecting postcards (have 100+)",
    "Ballroom dancing",
    "Open house congress/city hall days",
    "Abstract expressionism",
    "Isabel Gardner",
    "People into postcrossing",
    "Any Bergman movie",
    "Belgian cinema",
    "Desperate Housewives the TV show",
    "Dark the TV show",
    "New AI benchmarking models",
    "Women who drive mini coopers",
    "Oddly specific lists",
  ];

  const [pos, setPos] = useState({ x: window.innerWidth / 2 - 260, y: window.innerHeight / 2 - 310 });
  const [size, setSize] = useState({ w: 520, h: 620 });
  const [folded, setFolded] = useState(false);
  const [showMeme, setShowMeme] = useState(false);

  const dragState = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const resizeState = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null);

  const onTitleMouseDown = useCallback((e: React.MouseEvent) => {
    // Don't start drag if clicking buttons
    if ((e.target as HTMLElement).closest('button')) return;
    e.preventDefault();
    dragState.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
  }, [pos]);

  const onResizeMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resizeState.current = { startX: e.clientX, startY: e.clientY, origW: size.w, origH: size.h };
  }, [size]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragState.current) {
        const dx = e.clientX - dragState.current.startX;
        const dy = e.clientY - dragState.current.startY;
        setPos({ x: dragState.current.origX + dx, y: dragState.current.origY + dy });
      }
      if (resizeState.current) {
        const dx = e.clientX - resizeState.current.startX;
        const dy = e.clientY - resizeState.current.startY;
        setSize({
          w: Math.max(320, resizeState.current.origW + dx),
          h: Math.max(200, resizeState.current.origH + dy),
        });
      }
    };
    const onMouseUp = () => {
      dragState.current = null;
      resizeState.current = null;
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const TITLE_BAR_H = 40;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        className="absolute pointer-events-auto flex flex-col rounded-xl overflow-hidden select-none"
        style={{
          left: pos.x,
          top: pos.y,
          width: size.w,
          height: folded ? TITLE_BAR_H : size.h,
          boxShadow: '0 24px 80px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)',
          backgroundColor: '#FFF9EC',
          transition: 'height 0.22s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Title bar — drag handle */}
        <div
          onMouseDown={onTitleMouseDown}
          className="flex-shrink-0 flex items-center px-4 relative"
          style={{
            height: TITLE_BAR_H,
            background: 'linear-gradient(180deg, #F5EDD6 0%, #EDE5CA 100%)',
            borderBottom: folded ? 'none' : '1px solid #D8CEB0',
            cursor: 'grab',
          }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-[7px] z-10">
            {/* Red — close */}
            <button
              onClick={onClose}
              className="w-[13px] h-[13px] rounded-full flex items-center justify-center group"
              style={{ backgroundColor: '#FF5F57', border: '0.5px solid rgba(0,0,0,0.15)', cursor: 'pointer' }}
              title="Close"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[#8b0000] leading-none" style={{ fontSize: '9px', marginTop: '-1px' }}>✕</span>
            </button>
            {/* Yellow — fold/unfold */}
            <button
              onClick={() => setFolded(f => !f)}
              className="w-[13px] h-[13px] rounded-full flex items-center justify-center group"
              style={{ backgroundColor: '#FFBD2E', border: '0.5px solid rgba(0,0,0,0.12)', cursor: 'pointer' }}
              title={folded ? 'Expand' : 'Fold'}
            >
              <span className="opacity-0 group-hover:opacity-100 text-[#7a5900] leading-none" style={{ fontSize: '9px', marginTop: '-1px' }}>{folded ? '+' : '−'}</span>
            </button>
            {/* Green — penguin meme */}
            <button
              onClick={() => setShowMeme(m => !m)}
              className="w-[13px] h-[13px] rounded-full flex items-center justify-center group"
              style={{ backgroundColor: '#28C840', border: '0.5px solid rgba(0,0,0,0.12)', cursor: 'pointer' }}
              title="🐧"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[#005a00] leading-none" style={{ fontSize: '9px', marginTop: '-1px' }}>⛶</span>
            </button>
          </div>
          {/* Centered title */}
          <span
            className="absolute left-0 right-0 text-center text-[12px] pointer-events-none"
            style={{ color: '#8a7a5a', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}
          >
            things that make me smile
          </span>
        </div>

        {/* Body — hidden when folded */}
        {!folded && (
          <div className="flex flex-col flex-1 overflow-hidden" style={{ backgroundColor: '#FFF9EC' }}>
            {/* Penguin meme video */}
            {showMeme && (
              <div className="px-7 pt-4 pb-3" style={{ borderBottom: '1px solid #EDE3CC' }}>
                <video
                  src="https://packaged-media.redd.it/45zl3x0sx2fg1/pb/m2-res_640p.mp4?m=DASHPlaylist.mpd&c=wh_ben_en&var=sgpssan&v=1&e=1776049200&s=24bccc85eb65c7d2385888493fb7f1279c7dedde"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg"
                  style={{ maxHeight: '180px', objectFit: 'cover' }}
                />
              </div>
            )}
            {/* Intro text */}
            <div className="px-7 pt-5 pb-4" style={{ borderBottom: '1px solid #EDE3CC' }}>
              <p className="text-[13px] leading-[1.65] italic" style={{ color: '#9a8a68', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>these are all things that made me smile, think, or want to post on close friends, i'm a firm believer anyone can connect, so starting points to connect with me:</p>
            </div>

            {/* Scrollable list */}
            <div
              className="flex-1 overflow-y-auto px-7 py-4"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#d8ceb0 transparent' }}
            >
              <div className="space-y-[7px]">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="text-[13.5px] leading-[1.7] pl-1"
                    style={{ color: '#3d3320', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
                  >
                    - {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Resize handle */}
            <div
              onMouseDown={onResizeMouseDown}
              className="absolute bottom-0 right-0 w-5 h-5 flex items-end justify-end pr-1 pb-1"
              style={{ cursor: 'nwse-resize' }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M9 1L1 9M9 5L5 9M9 9" stroke="#c4b898" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}