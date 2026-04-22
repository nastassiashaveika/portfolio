import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell, ReferenceLine } from 'recharts';

// Most frequent color terms for table
const colorTermsData = [
  { 
    term: 'Vibrant', 
    percentage: 23.1, 
    count: 1281
  },
  { 
    term: 'Colors', 
    percentage: 14.4, 
    count: 799
  },
  { 
    term: 'Muted', 
    percentage: 13.5, 
    count: 750
  }
];

// Top color-emotion associations after FDR correction
const topAssociations = [
  { color: 'Multicolor', emotion: 'Excited', cramersV: 0.252, adjustedP: '2.3×10⁻⁷⁶' },
  { color: 'Red', emotion: 'Excited', cramersV: 0.221, adjustedP: '1.2×10⁻⁵⁸' },
  { color: 'Yellow', emotion: 'Excited', cramersV: 0.196, adjustedP: '3.2×10⁻⁴⁶' },
  { color: 'Blue', emotion: 'Excited', cramersV: 0.160, adjustedP: '5.3×10⁻³¹' },
  { color: 'Red', emotion: 'Calm', cramersV: 0.154, adjustedP: '5.5×10⁻²⁹' },
  { color: 'Multicolor', emotion: 'Calm', cramersV: 0.138, adjustedP: '2.7×10⁻²³' }
];

// Color versatility data for scatter plot with proper positioning and colors
const colorVersatilityData = [
  { color: 'Multicolor', emotionsLinked: 6, avgV: 0.101, maxV: 0.252, emotions: 'Excited, Calm, Alarmed, Sad, Happy, Frustrated', fill: 'url(#multicolorGradient)', labelX: 6.1, labelY: 0.101 },
  { color: 'Black', emotionsLinked: 5, avgV: 0.082, maxV: 0.109, emotions: 'Excited, Frustrated, Calm, Contentment, Aroused', fill: '#2C3E50', labelX: 4.8, labelY: 0.082 },
  { color: 'Yellow', emotionsLinked: 5.1, avgV: 0.087, maxV: 0.196, emotions: 'Excited, Calm, Sad, Alarmed, Frustrated', fill: '#F1C40F', labelX: 5.1, labelY: 0.087 },
  { color: 'Blue', emotionsLinked: 4.9, avgV: 0.074, maxV: 0.160, emotions: 'Excited, Sad, Contentment, Alarmed, Frustrated', fill: '#3498DB', labelX: 4.9, labelY: 0.074 },
  { color: 'Red', emotionsLinked: 4, avgV: 0.117, maxV: 0.221, emotions: 'Excited, Calm, Sad, Contentment', fill: '#E74C3C', labelX: 4.1, labelY: 0.117 },
  { color: 'Brown', emotionsLinked: 3, avgV: 0.043, maxV: 0.057, emotions: 'Excited, Alarmed, Contentment', fill: '#8B4513', labelX: 3.1, labelY: 0.043 },
  { color: 'Green', emotionsLinked: 3.1, avgV: 0.057, maxV: 0.079, emotions: 'Excited, Sad, Alarmed', fill: '#27AE60', labelX: 3.1, labelY: 0.057 },
  { color: 'Orange', emotionsLinked: 2, avgV: 0.101, maxV: 0.124, emotions: 'Excited, Calm', fill: '#E67E22', labelX: 2.1, labelY: 0.101 },
  { color: 'Purple', emotionsLinked: 1, avgV: 0.071, maxV: 0.071, emotions: 'Excited', fill: '#9B59B6', labelX: 1.1, labelY: 0.071 },
  { color: 'White', emotionsLinked: 1.1, avgV: 0.057, maxV: 0.057, emotions: 'Contentment', fill: '#ECF0F1', labelX: 1.1, labelY: 0.057 }
];

// Custom tooltip for scatter plot
const ScatterTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const colorName = data.color;
    const colorStyle = colorName === 'Green' ? { color: '#27AE60' } : { color: '#222222' };
    
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border max-w-xs">
        <p className="mb-2" style={colorStyle}>
          <strong>Color: {colorName}</strong>
        </p>
        <p className="text-sm mb-1"><strong>Emotions linked:</strong> {Math.round(data.emotionsLinked)}</p>
        <p className="text-sm mb-1"><strong>Avg Cramér's V:</strong> {data.avgV.toFixed(3)}</p>
        <p className="text-sm mb-2"><strong>Max V:</strong> {data.maxV.toFixed(3)}</p>
        <p className="text-xs text-gray-600"><strong>Emotions:</strong> {data.emotions}</p>
      </div>
    );
  }
  return null;
};

export const ColorEmotionFrame: React.FC = () => {
  return (
    <section 
      className="pudding-section"
      data-frame="2"
      style={{ backgroundColor: '#F5F5F0', paddingTop: '1rem' }}
    >
      <div className="pudding-container">
        {/* GPT-4o Pattern Matching Explanation */}
            <div className="space-y-4" style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#222222' }}>
                Critically, GPT-4o doesn't have a valence detector or arousal calculator. Instead, it learned emotions from text and visual matters. Which emotions appear near certain colors, text descriptions, and art styles.
              </p>
              
              <p style={{ color: '#222222' }}>
                When GPT-4o labels the funeral "calm," it's not measuring low arousal. It's pattern-matching: "This looks like images I've seen described with 'calm' before." The Core Affect dimensions emerge from these patterns, but they're not built into the architecture.
              </p>
              
              <p style={{ color: '#222222' }}>
                This distinction matters because it means the model's emotion assignments are fundamentally shaped by the data it was trained on.
              </p>
            </div>

            {/* Section Header */}
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#222222' }}>
                <strong>My first hypothesis: maybe AI just reacts to color.</strong>
              </p>
            </div>

            {/* Quick finding */}
            <div style={{ 
              backgroundColor: 'transparent', 
              padding: '1rem', 
              borderRadius: '8px',
              marginBottom: '1rem',
              borderLeft: '4px solid #C96E58'
            }}>
              <p style={{ color: '#222222' }}>
                I built a color lexicon covering 144 color terms and searched through all artwork descriptions. <strong>76.8% mentioned color</strong>—4,250 out of 5,532 artworks. The most common terms: "vibrant" (23%), "colors" (14%), and "muted" (14%).
              </p>
            </div>
            
            <div className="space-y-4" style={{ marginBottom: '1rem' }}>
              <div className="pudding-chart-header">
                <h4 style={{ color: '#5D866C', fontWeight: 700, marginBottom: '1rem' }}>
                  Most Frequent Color Terms
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#F5F5F0' }}>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: '#222222' }}>Term</th>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: '#222222' }}>% of Artworks Mentioning Color</th>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: '#222222' }}>Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {colorTermsData.map((row, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                          <td className="px-4 py-4" style={{ color: '#222222' }}>{row.term}</td>
                          <td className="px-4 py-4" style={{ color: '#222222' }}>{row.percentage}%</td>
                          <td className="px-4 py-4" style={{ color: '#222222' }}>{row.count.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p style={{ color: '#222222' }}>
                So color was definitely present in the descriptions. But did it actually predict emotions?
              </p>
              
              <p style={{ color: '#222222' }}>
                I tested all 144 color-emotion pairs for statistical associations. 51 showed significant relationships.
              </p>
            </div>

            {/* Statistical Methods Explanation */}
            <div className="space-y-4" style={{ marginBottom: '1rem' }}>
              <div className="border-l-4 pl-6" style={{ borderColor: '#5D866C' }}>
                <p style={{ color: '#222222', marginBottom: '1rem' }}>
                  Quick stats refresher: <em>Cramér's V measures association strength (0 = no relationship, 1 = perfect relationship), while the p-value tells you whether the pattern could occur by random chance (p &lt; 0.05 is the standard threshold for significance).</em>
                </p>
                
                <p style={{ color: '#222222' }}>
                  But here's the thing: when you run 144 tests, some will appear "significant" just by luck. With 51 significant findings at p &lt; 0.05, I'd expect about 7 false positives. To account for this, I applied FDR (False Discovery Rate) correction—a statistical method that adjusts p-values to control how many false discoveries you're likely to have in your results.
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4" style={{ marginBottom: '1rem' }}>
              <h3 style={{ color: '#222222', fontWeight: 700 }}>
                After FDR correction, 39 associations remained significant:
              </h3>

              {/* Top Associations Table */}
              <div className="pudding-chart overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F5F5F0' }}>
                      <th className="px-6 py-3 text-left font-bold" style={{ color: '#222222' }}>Color</th>
                      <th className="px-6 py-3 text-left font-bold" style={{ color: '#222222' }}>Emotion</th>
                      <th className="px-6 py-3 text-left font-bold" style={{ color: '#222222' }}>Cramér's V</th>
                      <th className="px-6 py-3 text-left font-bold" style={{ color: '#222222' }}>Adjusted p</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topAssociations.map((row, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8F8F8' : 'white' }}>
                        <td className="px-6 py-4" style={{ color: '#222222' }}>{row.color}</td>
                        <td className="px-6 py-4" style={{ color: '#222222' }}>{row.emotion}</td>
                        <td className="px-6 py-4 font-bold" style={{ color: '#C96E58' }}>{row.cramersV.toFixed(3)}</td>
                        <td className="px-6 py-4" style={{ color: '#222222' }}>{row.adjustedP}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analysis and Conclusions */}
            <div className="space-y-4">
              <p style={{ color: '#222222' }}>
                The associations were statistically significant but modest in strength. Multicolor (V = 0.252) and red (V = 0.221) showed the strongest effects, though these are still considered weak-to-moderate associations. Most other color-emotion pairs were weaker (V &lt; 0.20).
              </p>

              <p style={{ color: '#222222' }}>
                <strong>But I wanted to see the bigger picture.</strong> Rather than looking at individual pairs, I plotted each color's versatility—how many different emotions it connected to—against its average effect size.
              </p>

              {/* Color Versatility Scatter Plot */}
              <div className="pudding-chart text-center">
                <h3 style={{ color: '#5D866C', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Color Versatility: Emotions Linked vs. Average Effect Size
                </h3>
                <p style={{ color: '#666666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  Most colors show weak-to-moderate associations
                </p>
                
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 40, right: 100, bottom: 60, left: 80 }}>
                      <defs>
                        <linearGradient id="multicolorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#E74C3C" />
                          <stop offset="25%" stopColor="#F1C40F" />
                          <stop offset="50%" stopColor="#27AE60" />
                          <stop offset="75%" stopColor="#3498DB" />
                          <stop offset="100%" stopColor="#9B59B6" />
                        </linearGradient>
                      </defs>
                      
                      <XAxis 
                        dataKey="emotionsLinked" 
                        type="number" 
                        domain={[0, 6.5]}
                        tick={{ fontSize: 12, fill: '#222222' }}
                        label={{ value: 'Number of Emotions Linked', position: 'insideBottom', offset: -45, fill: '#222222' }}
                      />
                      <YAxis 
                        dataKey="avgV" 
                        type="number" 
                        domain={[0.03, 0.13]}
                        tick={{ fontSize: 12, fill: '#222222' }}
                        label={{ value: "Average Cramér's V", angle: -90, position: 'insideLeft', offset: -65, fill: '#222222' }}
                      />
                      
                      {/* Reference line for moderate threshold */}
                      <ReferenceLine y={0.1} stroke="#95A5A6" strokeDasharray="5 5" strokeWidth={2} />
                      
                      {/* Effect size zones */}
                      <ReferenceLine y={0.05} stroke="#BDC3C7" strokeDasharray="2 2" strokeWidth={1} />
                      <ReferenceLine y={0.08} stroke="#BDC3C7" strokeDasharray="2 2" strokeWidth={1} />
                      
                      <Tooltip content={<ScatterTooltip />} />
                      
                      <Scatter data={colorVersatilityData} isAnimationActive={false}>
                        {colorVersatilityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} stroke="#222222" strokeWidth={1} />
                        ))}
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-center" style={{ color: '#666666', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  <p>Legend: Dashed line means moderate V; Emotions listed in same font</p>
                </div>
              </div>

              <p style={{ color: '#222222', marginBottom: '1rem' }}>
                The scatter plot revealed two distinct patterns: some colors were emotional generalists, linking to many emotions with moderate strength, while others were specialists, connecting strongly to just one or two.
              </p>

              <div className="space-y-3" style={{ marginBottom: '1rem' }}>
                <div>
                  <p style={{ color: '#222222', marginBottom: '0.25rem' }}>
                    <strong>Generalists:</strong>
                  </p>
                  <p style={{ color: '#222222' }}>
                    <span style={{ background: 'linear-gradient(90deg, #E74C3C, #F1C40F, #27AE60, #3498DB, #9B59B6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>Multicolor</span> linked to 6 different emotions, while <span style={{ color: '#2C3E50', fontWeight: 'bold' }}>black</span>, <span style={{ color: '#F1C40F', fontWeight: 'bold' }}>yellow</span>, and <span style={{ color: '#3498DB', fontWeight: 'bold' }}>blue</span> each connected to 5.
                  </p>
                </div>

                <div>
                  <p style={{ color: '#222222', marginBottom: '0.25rem' }}>
                    <strong>Specialists:</strong>
                  </p>
                  <p style={{ color: '#222222' }}>
                    <span style={{ color: '#E74C3C', fontWeight: 'bold' }}>Red</span> had the highest average effect size (0.117) despite linking to just 4 emotions, making it both versatile and strong.
                  </p>
                </div>
              </div>

              <div className="border-l-4 pl-6" style={{ borderLeftColor: '#5D866C' }}>
                <p style={{ color: '#222222', marginBottom: '1rem' }}>
                  The data confirmed that color terms in descriptions were reliable but quite modest predictors of emotion labels. Color influenced AI's classifications, but it clearly wasn't the only factor at play.
                </p>
              </div>
            </div>
      </div>
    </section>
  );
};