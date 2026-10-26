import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-void-950/80 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-void-900 border border-cyan-electric/40 flex items-center justify-center text-cyan-electric">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-display font-bold text-white">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] font-mono text-metallic-400">
              {PERSONAL_INFO.designation}
            </div>
          </div>
        </div>

        {/* Minimal Footer Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-metallic-400">
          <a href="#about" className="hover:text-cyan-electric transition-colors">About</a>
          <a href="#stdra" className="hover:text-cyan-electric transition-colors">S.T.D.R.A.</a>
          <a href="#experience" className="hover:text-cyan-electric transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-electric transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-electric transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-electric transition-colors">Contact</a>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-metallic-500">
            © {new Date().getFullYear()} MD Mobasser Hasan Safi
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel border border-white/10 text-metallic-300 hover:text-cyan-electric hover:border-cyan-electric/40 transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
