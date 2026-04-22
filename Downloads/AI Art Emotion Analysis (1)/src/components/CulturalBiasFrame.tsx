import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

export const CulturalBiasFrame: React.FC = () => {
  const easternStylesData = [
    { style: 'Chinese ink painting', Calm: 96, Contentment: 4, Excited: 0, Other: 0 },
    { style: 'Ukiyo-e', Calm: 70, Contentment: 18, Excited: 0, Other: 12 },
    { style: 'Ink and wash painting', Calm: 78, Contentment: 8, Excited: 8, Other: 6 }
  ];

  const datasetSplitData = [
    { name: 'Eastern Art', value: 832, percentage: 15, color: '#5D866C' },
    { name: 'Western Art', value: 4700, percentage: 85, color: '#C96E58' }
  ];

  const colorComparisonData = [
    { color: 'Red', Eastern: 1, Western: 4 },
    { color: 'Blue', Eastern: 0, Western: 5 },
    { color: 'Black', Eastern: 0, Western: 5 },
    { color: 'Multi', Eastern: 3, Western: 7 }
  ];

  const renderCustomLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    if (value === 0) return null;
    return (
      <text 
        x={x + width / 2} 
        y={y - 5} 
        fill="#222222" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fontSize="12"
      >
        {value}
      </text>
    );
  };

  return (
    <section 
      className="pudding-section"
      data-frame="3"
      style={{ 
        backgroundColor: '#F5F5F0',
        minHeight: '100vh',
        padding: '0'
      }}
    >
      <div className="pudding-container">
        {/* Cultural Bias Question */}
        <div className="pudding-section" style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#222222' }}>
                <strong>But what about different artistic traditions?</strong> A lot of the data has Western bias to it. Maybe color will mean drastically different things across the globe.
              </p>
          
              <p style={{ color: '#222222', marginTop: '1rem' }}>
                I categorized artworks as "Eastern" or "Western" based on their style labels. Styles originating from or primarily associated with East Asian traditions—Chinese ink painting, Ukiyo-e, Gongbi, Korean art, Shin-hanga, Sōsaku hanga, Indian art, Islamic art—were coded as Eastern. European and American movements—Impressionism, Cubism, Abstract Expressionism, Pop Art—were coded as Western.
              </p>
            </div>

            {/* Dataset Split - Pie Chart */}
            <div className="pudding-section" style={{ marginBottom: '1rem' }}>
              <div className="pudding-chart">
                <div style={{ height: '250px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={datasetSplitData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={(entry) => `${entry.name}: ${entry.percentage}%`}
                        isAnimationActive={false}
                      >
                        {datasetSplitData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number, name: string) => [`Total ${value.toLocaleString()} artworks`, name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <p style={{ color: '#222222' }}>
                  I ran the same color-emotion association tests on each group separately. The gap was immediate: Eastern art showed only <strong style={{ color: '#C96E58' }}>5</strong> significant associations compared to Western art's <strong style={{ color: '#C96E58' }}>51</strong>, meaning the model had learned 10 times more color-emotion patterns from Western traditions.
                </p>
                <p style={{ color: '#222222', marginTop: '1rem' }}>
                  This disparity extended across every metric—while Western art demonstrated associations across all 12 possible colors, Eastern art showed connections with only 3. The average associations per color told the same story: 1.7 for Eastern art versus 4.2 for Western.
                </p>
              </div>
            </div>

            {/* Grouped Bar Chart */}
            <div className="pudding-section">
              <div style={{ height: '350px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={colorComparisonData}
                    margin={{ top: 10, right: 16, left: 16, bottom: 16 }}
                    barGap={4}
                    barCategoryGap="15%"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="color" 
                      tick={{ fontSize: 13, fill: '#222222', fontWeight: 500 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: '#222222' }}
                      domain={[0, 8]}
                      ticks={[0, 2, 4, 6, 8]}
                      label={{ value: 'Number of Associations', angle: -90, position: 'insideLeft', style: { fill: '#222222', fontSize: 14 } }}
                    />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const emotionData: Record<string, { Eastern: string[]; Western: string[] }> = {
                            'Red': {
                              Eastern: ['Annoyed'],
                              Western: ['Excited', 'Calm', 'Sad', 'Contentment']
                            },
                            'Blue': {
                              Eastern: [],
                              Western: ['Excited', 'Sad', 'Contentment', 'Alarmed', 'Frustrated']
                            },
                            'Black': {
                              Eastern: [],
                              Western: ['Excited', 'Frustrated', 'Calm', 'Contentment', 'Aroused']
                            },
                            'Multi': {
                              Eastern: ['Excited', 'Calm', 'Contentment'],
                              Western: ['Excited', 'Calm', 'Alarmed', 'Sad', 'Happy', 'Contentment', 'Frustrated']
                            }
                          };
                          
                          const colorData = emotionData[label as string];
                          
                          return (
                            <div style={{
                              backgroundColor: '#ffffff',
                              border: '1px solid #D1D5DB',
                              borderRadius: '6px',
                              padding: '14px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                            }}>
                              <div style={{ color: '#222222', fontWeight: 'bold', marginBottom: '10px', fontSize: '1rem' }}>
                                {label} Colors
                              </div>
                              <div style={{ color: '#222222', fontSize: '0.875rem', marginBottom: '6px' }}>
                                Eastern associations: {colorData?.Eastern.length > 0 ? `[${colorData.Eastern.map(e => `'${e}'`).join(', ')}]` : '[]'}
                              </div>
                              <div style={{ color: '#222222', fontSize: '0.875rem' }}>
                                Western associations: {colorData?.Western.length > 0 ? `[${colorData.Western.map(e => `'${e}'`).join(', ')}]` : '[]'}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend 
                      verticalAlign="top" 
                      align="right"
                      wrapperStyle={{ paddingBottom: '10px' }}
                      iconType="square"
                    />
                    <Bar 
                      dataKey="Eastern" 
                      fill="#A0A0A0" 
                      label={renderCustomLabel}
                      radius={[4, 4, 0, 0]}
                      isAnimationActive={false}
                    />
                    <Bar 
                      dataKey="Western" 
                      fill="#222222" 
                      label={renderCustomLabel}
                      radius={[4, 4, 0, 0]}
                      isAnimationActive={false}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Analysis */}
            <div className="pudding-section" style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#222222' }}>
                For example, let's take color red. In Western art, red connected to four different emotions—the model understood contextual variation. In Eastern art, red linked to just one: Annoyed (V = 0.082), and weakly at that.
              </p>
            </div>

            {/* Western Bias Explanation */}
            <div className="pudding-section" style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#222222' }}>
                GPT-4o, like most large language models, was trained predominantly on Western text and cultural references. When it generates art descriptions and emotion labels, it applies Western color psychology by default. Red means passion or excitement (Western associations), not celebration or imperial power (Eastern meanings). Black suggests mourning or mystery (Western), not the strength and presence it carries in Japanese calligraphy.
              </p>
               
              <p style={{ color: '#222222', marginTop: '1rem', marginBottom: '1rem' }}>
                The dataset imbalance (85% Western) compounds this.
              </p>
               
              <p style={{ color: '#222222' }}>
                GPT-4o already interprets the world through Western frameworks. When it encounters the small subset of Eastern art, it doesn't have enough examples to override its base assumptions. The model essentially says: "I know how red works in the 4,700 Western pieces I've seen. These 832 Eastern pieces with red? Probably the same thing." This creates a feedback loop: Western Patterns ↔ Eastern Art.
              </p>
            </div>

            {/* Specific Eastern Examples */}
            <div className="pudding-section" style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#222222', marginBottom: '1rem' }}>
                To see this concretely, I examined specific Eastern styles:
              </p>
               
              {/* Stacked bar chart using divs */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem' }}>
                  {easternStylesData.map((item, index) => (
                    <div key={index}>
                      <div style={{ color: '#222222', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                        {item.style}
                      </div>
                      <div style={{ display: 'flex', height: '40px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                        {item.Calm > 0 && (
                          <div 
                            style={{ 
                              width: `${item.Calm}%`, 
                              backgroundColor: '#5D866C',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff',
                              fontSize: '0.875rem'
                            }}
                            title={`Calm: ${item.Calm}%`}
                          >
                            {item.Calm}%
                          </div>
                        )}
                        {item.Contentment > 0 && (
                          <div 
                            style={{ 
                              width: `${item.Contentment}%`, 
                              backgroundColor: '#8FA396',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff',
                              fontSize: '0.875rem'
                            }}
                            title={`Contentment: ${item.Contentment}%`}
                          >
                            {item.Contentment}%
                          </div>
                        )}
                        {item.Excited > 0 && (
                          <div 
                            style={{ 
                              width: `${item.Excited}%`, 
                              backgroundColor: '#C96E58',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff',
                              fontSize: '0.875rem'
                            }}
                            title={`Excited: ${item.Excited}%`}
                          >
                            {item.Excited}%
                          </div>
                        )}
                        {item.Other > 0 && (
                          <div 
                            style={{ 
                              width: `${item.Other}%`, 
                              backgroundColor: '#D88B7A',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff',
                              fontSize: '0.875rem'
                            }}
                            title={`Other: ${item.Other}%`}
                          >
                            {item.Other}%
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                 
                {/* Legend */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#5D866C', borderRadius: '4px' }}></div>
                    <span style={{ color: '#222222', fontSize: '0.875rem' }}>Calm</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#8FA396', borderRadius: '4px' }}></div>
                    <span style={{ color: '#222222', fontSize: '0.875rem' }}>Contentment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#C96E58', borderRadius: '4px' }}></div>
                    <span style={{ color: '#222222', fontSize: '0.875rem' }}>Excited</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#D88B7A', borderRadius: '4px' }}></div>
                    <span style={{ color: '#222222', fontSize: '0.875rem' }}>Other</span>
                  </div>
                </div>
              </div>
               
              <div style={{ fontSize: '0.875rem', color: '#666666', marginBottom: '1rem' }}>
                <p>Each style based on n=100 artworks. Bars show percentage of emotion labels.</p>
              </div>
               
              <p style={{ color: '#222222', marginBottom: '1rem' }}>
                Chinese ink paintings received "calm" labels 96% of the time. An entire tradition spanning dynasties and depicting everything from serene landscapes to dynamic battles—flattened into one emotion.
              </p>
               

               
              <p style={{ color: '#222222' }}>
                With limited Eastern examples in training, the model learned: "When you see this style, label it calm."
              </p>
            </div>
      </div>
    </section>
  );
};
