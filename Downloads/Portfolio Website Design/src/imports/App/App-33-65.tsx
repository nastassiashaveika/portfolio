import imgImageNastassiaShaveika from "./94ffd309acaf67a73170c3d5ef4eaf514f21e245.png";

function Button() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[61.2px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-black top-[-0.2px] whitespace-nowrap">BIO</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[61.2px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#d1d5dc] text-[13px] top-[-0.2px] whitespace-nowrap">WORK</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[168.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#d1dbdc] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0">WE MIGHT HAVE</p>
        <p className="leading-[19.5px]">THIS IN COMMON</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col h-[682px] items-start left-0 pl-[24px] pr-[24.8px] pt-[80px] top-0 w-[183px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[109.2px] left-0 top-[-25px] w-[886px]" data-name="Heading 1">
      <p className="absolute font-['Crimson_Text:Bold',sans-serif] leading-[54.6px] left-0 not-italic text-[#0c0c0c] text-[52px] top-[-0.2px] tracking-[-1.3px] w-[852px]">{`I'm Nastassia, anxious about culture and AI, so trying to figure all this out.`}</p>
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[67px] left-0 top-[246px] w-[805px]" data-name="Paragraph" />;
}

function BioContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[886px]" data-name="BioContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#536372] text-[0px] top-[127px] w-[873px] whitespace-pre-wrap">
          <p className="mb-0 text-[20px]">
            <span className="leading-[33.6px]">{`I'm a senior at `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[33.6px] not-italic text-[#536372] underline">Minerva University</span>
            <span className="leading-[33.6px]">{`, studying Data Science and Statistics with an Economics minor. I've lived and studied in San Francisco, Seoul, Berlin, Taipei, DC, and London.`}</span>
          </p>
          <p className="leading-[33.6px] mb-0 text-[20px]">&nbsp;</p>
          <p className="leading-[33.6px] mb-0 text-[20px]">Currently, I work in people operations at Minerva — hosting events, A/B testing email campaigns, and talking to high schoolers all over the world.</p>
          <p className="leading-[33.6px] mb-0 text-[20px]">&nbsp;</p>
          <p className="mb-0 text-[20px]">
            <span className="leading-[33.6px]">{`My research on AI's orientalist bias in emotion recognition is a data journalism story, available `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[33.6px] not-italic text-[#536372] underline">here</span>
            <span className="leading-[33.6px]">. I also study socio-economic development and immigration, with a particular interest in Belarus and Eastern Europe.</span>
          </p>
          <p className="leading-[33.6px] mb-0 text-[20px]">&nbsp;</p>
          <p className="text-[20px]">
            <span className="leading-[33.6px]">{`Previously, I competed in the International Economics Olympiad twice, and interned at the Cato Institute. The best way to reach me is by email at `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[33.6px] not-italic text-[#536372] underline">nastassiashaveika@gmail.com</span>
            <span className="leading-[33.6px]">{` — or find me on `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[33.6px] not-italic text-[#536372] underline">LinkedIn</span>
            <span className="leading-[33.6px]">.</span>
          </p>
        </div>
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[681.6_0_0] min-h-px min-w-px relative w-[1046px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[80px] py-[80px] relative size-full">
          <BioContent />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[682px] items-start left-[173px] overflow-clip top-0 w-[983px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function ImageNastassiaShaveika() {
  return (
    <div className="h-[681.6px] relative shrink-0 w-full" data-name="Image (Nastassia Shaveika)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNastassiaShaveika} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[681.6px] items-start left-[1266px] overflow-clip top-0 w-[380px]" data-name="Container">
      <ImageNastassiaShaveika />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white relative size-full" data-name="App">
      <Navigation />
      <Container1 />
      <Container3 />
    </div>
  );
}