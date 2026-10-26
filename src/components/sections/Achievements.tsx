import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Documented <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric to-violet-400">Accomplishments</span>
        </h2>
        <p className="mt-4 text-metallic-300 text-base sm:text-lg leading-relaxed">
          Tangible outcomes, architecture milestones, and production deployments delivered with measurable quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {ACHIEVEMENTS_DATA.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-white/5 space-y-4 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                {item.badge}
              </span>
              <span className="text-xs font-mono text-metallic-400">{item.year}</span>
            </div>

            <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-electric transition-colors">
              {item.title}
            </h3>

            <p className="text-sm text-metallic-300 leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-metallic-400">
              <span className="text-metallic-500">Domain:</span>
              <span className="text-metallic-300">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
