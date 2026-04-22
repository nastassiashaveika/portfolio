import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScrollContextType {
  activeFrame: number;
  isVisible: (frameIndex: number) => boolean;
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [visibleFrames, setVisibleFrames] = useState<Set<number>>(new Set());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const frameIndex = parseInt(entry.target.getAttribute('data-frame') || '0');
          
          if (entry.isIntersecting) {
            setVisibleFrames(prev => new Set(prev).add(frameIndex));
            if (entry.intersectionRatio > 0.5) {
              setActiveFrame(frameIndex);
            }
          } else {
            setVisibleFrames(prev => {
              const newSet = new Set(prev);
              newSet.delete(frameIndex);
              return newSet;
            });
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    window.addEventListener('scroll', handleScroll);
    const frames = document.querySelectorAll('[data-frame]');
    frames.forEach(frame => observer.observe(frame));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      frames.forEach(frame => observer.unobserve(frame));
    };
  }, []);

  const isVisible = (frameIndex: number) => visibleFrames.has(frameIndex);

  return (
    <ScrollContext.Provider value={{ activeFrame, isVisible, scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};