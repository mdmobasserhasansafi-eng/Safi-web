import React from 'react';
import { Wrench, Code, Cpu, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-electric" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-300" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-electric" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Verified Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric to-violet-400">Capabilities</span>
        </h2>
        <p className="mt-4 text-metallic-300 text-base sm:text-lg leading-relaxed">
          A focused, verified matrix of tools and technologies I actively use to engineer digital products and automation engines.
        </p>
      </div>

      {/* Skills Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 space-y-6 hover:border-cyan-electric/30 transition-all"
          >
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-void-900 border border-white/10">
                {getIcon(category.iconName)}
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {category.title}
              </h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-void-900/60 border border-white/5 hover:border-cyan-electric/30 hover:bg-void-900 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric/70 group-hover:bg-cyan-electric group-hover:scale-125 transition-all" />
                    <span className="text-xs sm:text-sm font-medium text-metallic-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {skill.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-metallic-400">
                        {skill.tag}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-cyan-electric">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
