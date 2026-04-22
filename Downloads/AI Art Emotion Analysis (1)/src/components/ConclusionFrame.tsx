import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ConclusionFrame: React.FC = () => {
  return (
    <section 
      className="pudding-section"
      data-frame="4"
      style={{ 
        backgroundColor: '#F5F5F0'
      }}
    >
      <div className="pudding-container">
        <div className="space-y-4">

          <p style={{ color: '#222222', marginBottom: '1rem', fontWeight: 700 }}>
            AI is already curating culture.
          </p>

          <p style={{ color: '#222222', marginBottom: '1rem' }}>
            Museum recommendation systems use emotion labels to surface artworks.
            Digital archives rely on these classifications for search.
            The EmoArt paper proposes using this for art therapy.
          </p>

          <p style={{ color: '#222222', marginBottom: '1rem' }}>
            But when <span style={{ color: '#C96E58', fontWeight: 700 }}>96%</span> of Chinese ink painting gets labeled "calm"—
            regardless of whether it depicts serene landscapes or colonial conflict
            we're not seeing better cultural understanding.
          </p>

          <p style={{ color: '#222222', marginBottom: '1rem', fontWeight: 700 }}>
            We're seeing cultural flattening.
          </p>

          {/* Two images side by side */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '1rem',
            marginBottom: '1rem',
            marginTop: '1rem'
          }}>
            <div>
              <ImageWithFallback 
                src="https://image.digitalarchives.tw/ImageCache/00/0f/09/ac.jpg" 
                alt="A colonial missionary" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  border: '1px solid #222222'
                }}
              />
              <p style={{ 
                color: '#222222', 
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                A colonial missionary → "Calm"
              </p>
            </div>
            <div>
              <ImageWithFallback 
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAiwQZDOidGMNu5TAzCh0oZUWG45-nEkET723lHQRbnq5gK47o" 
                alt="An exhausted traveler" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  border: '1px solid #222222'
                }}
              />
              <p style={{ 
                color: '#222222', 
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                An exhausted traveler → "Calm"
              </p>
            </div>
          </div>

          <p style={{ color: '#222222', marginBottom: '1rem', marginTop: '1rem' }}>
            This isn't a model recognizing truth.
            It's a model defaulting to its safest prediction
            when encountering underrepresented traditions.
          </p>

          <p style={{ color: '#222222', marginBottom: '1rem' }}>
            Pattern-matching without cultural knowledge
            cannot capture human emotional experience.
          </p>

          <div className="text-center py-4 border-l-4" style={{ borderColor: '#5D866C', paddingLeft: '1rem' }}>
            <p style={{ color: '#222222', fontWeight: 700 }}>
              <span style={{ color: '#C96E58', fontWeight: 700 }}>132,664</span> labeled artworks.<br/>
              But what's missing is context—<br/>
              the understanding humans bring to art<br/>
              that can't be learned from text patterns alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
