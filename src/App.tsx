import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { StdraSection } from './components/sections/StdraSection';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { useScrollTimeline } from './hooks/useScrollTimeline';

// Lazy load the 3D canvas container for optimized bundle and initial render
const SceneContainer = lazy(() =>
  import('./components/3d/SceneContainer').then((mod) => ({
    default: mod.SceneContainer,
  }))
);

export const App: React.FC = () => {
  const { sectionIndex, activeSection, scrollProgress } = useScrollTimeline();

  // Detect user preference for reduced motion
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const toggleReducedMotion = () => {
    setIsReducedMotion((prev) => !prev);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-void-950 text-metallic-200 overflow-x-hidden selection:bg-cyan-electric/20 selection:text-cyan-electric">
      {/* Background Cybernetic Grid & Atmospheric Vignette */}
      <div className="fixed inset-0 cyber-grid-overlay pointer-events-none z-0 opacity-40" />
      <div className="fixed inset-0 radial-vignette pointer-events-none z-0" />

      {/* 3D Scene Layer (Fixed Background / Interactive Viewport) */}
      <Suspense
        fallback={
          <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-cyan-electric animate-ping" />
          </div>
        }
      >
        <SceneContainer
          scrollProgress={scrollProgress}
          sectionIndex={sectionIndex}
          isReducedMotion={isReducedMotion}
          onToggleMotion={toggleReducedMotion}
        />
      </Suspense>

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        isReducedMotion={isReducedMotion}
        onToggleMotion={toggleReducedMotion}
      />

      {/* Main Content Sections with Native Scrolling */}
      <main className="relative z-10">
        <Hero onExploreClick={scrollToProjects} />
        <About />
        <StdraSection />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
