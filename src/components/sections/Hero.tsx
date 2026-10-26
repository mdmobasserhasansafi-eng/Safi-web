import React from 'react';
import { ArrowDown, Terminal, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 pointer-events-none"
    >
      {/* Background radial gradient glow for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-electric/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* S.T.D.R.A. Architecture Badge */}
        <div className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-electric/30 shadow-cyan-glow mb-6 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-cyan-electric shadow-cyan-glow" />
          <span className="text-xs font-mono font-medium tracking-widest text-cyan-electric uppercase">
            S.T.D.R.A. • Strategic Task & Dynamic Reasoning Architecture
          </span>
          <span className="hidden sm:inline text-xs text-metallic-400 font-mono">v1.0</span>
        </div>

        {/* Creator Name */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-metallic-100 to-metallic-400">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Professional Identity Subheadline */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium text-metallic-300 mb-6">
          <span className="text-cyan-electric font-semibold">Web Developer</span>
          <span className="text-metallic-600">•</span>
          <span className="text-metallic-100">Digital Product Builder</span>
          <span className="text-metallic-600">•</span>
          <span className="text-violet-400 font-semibold">Automation Creator</span>
        </div>

        {/* Concise Mission / Bio Preview */}
        <p className="max-w-2xl text-sm sm:text-base text-metallic-300 leading-relaxed font-sans mb-10 text-balance">
          {PERSONAL_INFO.bioHeadline}. Crafting tactile 3D spatial web experiences, responsive client applications, and deterministic agentic systems from Bangladesh to the global web.
        </p>

        {/* Primary CTAs */}
        <div className="pointer-events-auto flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm text-void-950 bg-gradient-to-r from-cyan-electric via-cyan-300 to-cyan-400 hover:from-white hover:to-cyan-electric transition-all duration-300 shadow-cyan-glow hover:shadow-cyan-glow-lg font-mono uppercase tracking-wider"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-void-950" />
          </button>

          <a
            href="#stdra"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm text-metallic-200 glass-panel border border-white/10 hover:border-cyan-electric/40 hover:text-white transition-all duration-300 font-mono"
          >
            <Terminal className="w-4 h-4 text-cyan-electric" />
            <span>Inspect S.T.D.R.A.</span>
          </a>
        </div>

        {/* Live System Telemetry Strip */}
        <div className="pointer-events-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
          <div className="p-3.5 rounded-xl glass-panel border border-white/5 text-left">
            <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider">Production Apps</div>
            <div className="text-base sm:text-lg font-display font-bold text-metallic-100 mt-0.5">3+ Deployed</div>
          </div>
          <div className="p-3.5 rounded-xl glass-panel border border-white/5 text-left">
            <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider">3D Graphics</div>
            <div className="text-base sm:text-lg font-display font-bold text-cyan-electric mt-0.5">WebGL / Three.js</div>
          </div>
          <div className="p-3.5 rounded-xl glass-panel border border-white/5 text-left">
            <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider">Task Engine</div>
            <div className="text-base sm:text-lg font-display font-bold text-violet-400 mt-0.5">S.T.D.R.A. Core</div>
          </div>
          <div className="p-3.5 rounded-xl glass-panel border border-white/5 text-left">
            <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider">Client Reach</div>
            <div className="text-base sm:text-lg font-display font-bold text-metallic-100 mt-0.5">Bangladesh & Global</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={onExploreClick}
        className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-metallic-400 hover:text-cyan-electric transition-colors focus:outline-none"
        aria-label="Scroll to portfolio sections"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-electric" />
      </button>
    </section>
  );
};
