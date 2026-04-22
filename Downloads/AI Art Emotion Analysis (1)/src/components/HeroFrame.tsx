import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const emotionDistributionData = [
  { emotion: 'Calm', percentage: 52, color: '#5D866C' },
  { emotion: 'Contentment', percentage: 16, color: '#8FA396' },
  { emotion: 'Happy', percentage: 8, color: '#C96E58' },
  { emotion: 'Excited', percentage: 7, color: '#D88B7A' },
  { emotion: 'Other', percentage: 17, color: '#CCCCCC' }
];

export const HeroFrame: React.FC = () => {
  return (
    <section 
      className="min-h-screen pt-16"
      data-frame="0"
      style={{ backgroundColor: '#F5F5F0' }}
    >
      <div className="pudding-container">
        {/* Main title */}
        <h1
          className="text-center mb-12"
          style={{ 
            color: '#222222',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            fontSize: '3.5rem'
          }}
        >
          AI Sees Calm in Chaos
        </h1>

        {/* Painting inline */}
        <div style={{ margin: '1rem 0' }}>
          <ImageWithFallback
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg/1200px-Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg?20110610032711"
            alt="Filippo Lippi - The Funeral of St. Stephen"
            className="w-full h-auto"
          />
        </div>

        {/* Description and investigation text */}
        <div className="space-y-4">
            <p style={{ color: '#222222' }}>
              This Filippo Lippi painting, "The Funeral of St. Stephen," was labeled <strong>Calm</strong> by GPT-4o—a label that was 85% human-verified in the{' '}
              <a 
                href="https://huggingface.co/datasets/printblue/EmoArt-130k" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#5D866C', textDecoration: 'underline' }}
              >
                EmoArt dataset
              </a>.
            </p>
            
            <p style={{ color: '#222222' }}>
              A funeral scene. Calm. Not sad. Not grieving.
            </p>
            
            <p style={{ color: '#222222' }}>
              GPT-4o analyzed 132,664 artworks to teach AI about emotion in art.
              The goal: train systems for museum recommendations, digital archives, 
              even art therapy.
            </p>
            
            <p style={{ color: '#222222' }}>
              But when I analyzed 5,000 of these labeled artworks, I found something strange. <strong>More than half of the art was labeled "calm."</strong>
            </p>
            
            {/* Emotion Distribution Chart */}
            <div style={{ height: '350px', marginBottom: '1rem' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={emotionDistributionData}
                  margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                >
                  <XAxis 
                    dataKey="emotion" 
                    tick={{ fontSize: 13, fill: '#222222', fontWeight: 500 }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fill: '#222222' }}
                    domain={[0, 60]}
                    ticks={[0, 10, 20, 30, 40, 50, 60]}
                    label={{ value: 'Percentage of Artworks', angle: -90, position: 'insideLeft', style: { fill: '#222222', fontSize: 14 } }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`${value}%`, 'Percentage']}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill="#5D866C"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={false}
                  >
                    {emotionDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p style={{ color: '#222222' }}>
              Before investigating AI's interpretations, I needed to understand how humans process emotion in art. Cognitive scientists distinguish between:
            </p>
            
            <p style={{ color: '#222222' }}>
              <strong>Core affect</strong> - the continuous feeling state defined by valence (positive/negative) and arousal (high/low energy). This is what we experience moment-to-moment.
            </p>
            
            <p style={{ color: '#222222' }}>
              <strong>Emotion words</strong> - discrete categories like "calm" or "sad" that humans use to communicate these feeling states. These words are cultural constructs; different languages carve up emotional space differently.
            </p>
            
            <p style={{ color: '#222222' }}>
              When humans label art with emotion words, we're doing something complex: translating a visual experience into a discrete category, filtered through cultural knowledge about what emotions "belong" in certain contexts (funerals = sad, not calm).
            </p>
            
            <p style={{ color: '#222222' }}>
              <strong>The question becomes: Can AI do this same translation? And if so, what cultural knowledge is it using?</strong>
            </p>
        </div>
      </div>
    </section>
  );
};