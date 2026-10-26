import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Operational Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Web Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric to-violet-400">System Deployments</span>
        </h2>
        <p className="mt-4 text-metallic-300 text-base sm:text-lg leading-relaxed">
          Focusing on published live platforms, local client ecosystems in Bangladesh, and end-to-end automation pipelines.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Glowing Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-void-950 border-2 border-cyan-electric flex items-center justify-center shadow-cyan-glow group-hover:scale-125 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-white/5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-electric transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-metallic-300">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-metallic-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-electric" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-metallic-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Highlights List */}
              <ul className="space-y-2 pt-2">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-metallic-400">
                    <ChevronRight className="w-4 h-4 text-cyan-electric shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Applied */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-void-900 border border-white/10 text-metallic-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
