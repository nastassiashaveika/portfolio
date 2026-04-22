import React from 'react';
import { ScrollProvider } from './components/ScrollProvider';
import { HeroFrame } from './components/HeroFrame';
import { DatasetFrame } from './components/DatasetFrame';
import { ColorEmotionFrame } from './components/ColorEmotionFrame';
import { CulturalBiasFrame } from './components/CulturalBiasFrame';
import { ConclusionFrame } from './components/ConclusionFrame';

export default function App() {
  return (
    <ScrollProvider>
      <div className="w-full">
        <HeroFrame />
        <DatasetFrame />
        <ColorEmotionFrame />
        <CulturalBiasFrame />
        <ConclusionFrame />
      </div>
    </ScrollProvider>
  );
}