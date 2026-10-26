import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollState {
  sectionIndex: number;
  activeSection: string;
  scrollProgress: number;
}

export const useScrollTimeline = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    sectionIndex: 0,
    activeSection: 'hero',
    scrollProgress: 0,
  });

  useEffect(() => {
    const sections = ['hero', 'about', 'stdra', 'experience', 'projects', 'skills', 'achievements', 'contact'];

    // Overall scroll progress trigger
    const overallTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setScrollState((prev) => ({
          ...prev,
          scrollProgress: self.progress,
        }));
      },
    });

    // Section triggers for robot pose transitions
    const sectionTriggers = sections.map((secId, idx) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setScrollState((prev) => ({
            ...prev,
            sectionIndex: idx,
            activeSection: secId,
          }));
        },
        onEnterBack: () => {
          setScrollState((prev) => ({
            ...prev,
            sectionIndex: idx,
            activeSection: secId,
          }));
        },
      });
    });

    return () => {
      overallTrigger.kill();
      sectionTriggers.forEach((t) => t?.kill());
    };
  }, []);

  return scrollState;
};
