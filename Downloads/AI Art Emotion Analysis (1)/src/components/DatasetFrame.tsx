import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const valenceData = [
  { name: 'Positive', value: 86, color: '#5D866C' },
  { name: 'Negative', value: 14, color: '#C96E58' }
];

const arousalData = [
  { name: 'Low Arousal', value: 69.2, color: '#5D866C' },
  { name: 'High Arousal', value: 30.8, color: '#C96E58' }
];



export const DatasetFrame: React.FC = () => {
  return (
    <section 
      className="pudding-section"
      data-frame="1"
      style={{ backgroundColor: '#F5F5F0', paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <div className="pudding-container">
        {/* Side by side charts - inline without containers */}
            <div className="grid md:grid-cols-2 gap-8 pudding-chart">
              {/* Valence Distribution */}
              <div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={valenceData} 
                      margin={{ top: 10, right: 15, left: 15, bottom: 5 }}
                      isAnimationActive={false}
                    >
                      <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#222222' }} />
                      <YAxis tick={{ fontSize: 12, fill: '#222222' }} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                        {valenceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-2">
                  <p style={{ color: '#222222' }}>
                    <span style={{ color: '#C96E58', fontWeight: 700 }}>86% positive valence</span>
                  </p>
                  <p style={{ color: '#222222' }}>
                    For every single artwork tagged with a negative emotion, there were <span style={{ color: '#C96E58', fontWeight: 700 }}>7.5</span> tagged as positive.
                  </p>
                </div>
              </div>

              {/* Arousal Distribution */}
              <div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={arousalData} 
                      margin={{ top: 10, right: 15, left: 15, bottom: 5 }}
                      isAnimationActive={false}
                    >
                      <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#222222' }} />
                      <YAxis tick={{ fontSize: 12, fill: '#222222' }} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                        {arousalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-2">
                  <p style={{ color: '#222222' }}>
                    <span style={{ color: '#C96E58', fontWeight: 700 }}>69.2% low arousal</span>
                  </p>
                  <p style={{ color: '#222222' }}>
                    This explained the funeral. AI wasn't just seeing everything as positive—it was seeing a lot of things as calm.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistical Testing */}
            <div className="space-y-4">
              <p style={{ color: '#222222' }}>
                I needed to know if this could be random.
              </p>

              <p style={{ color: '#222222' }}>
                I ran a chi-square test—a statistical measure that determines if observed patterns differ significantly from what we'd expect by luck alone.
              </p>

              <div className="text-center py-4 border-l-4" style={{ borderColor: '#5D866C', paddingLeft: '1rem' }}>
                <div className="space-y-2">
                  <div style={{ color: '#C96E58', fontWeight: 700 }}>
                    χ² = 16,992.6
                  </div>
                  <div style={{ color: '#C96E58', fontWeight: 700 }}>
                    p &lt; 0.001
                  </div>
                  <p style={{ color: '#222222', fontWeight: 700 }}>
                    This pattern is statistically impossible to explain by chance.{' '}
                    <span style={{ color: '#C96E58' }}>Something systematic was happening.</span>
                  </p>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};