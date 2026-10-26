import React, { useState } from 'react';
import { Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', '3D Web', 'Full Stack', 'Automation & AI', 'E-Commerce / Product'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-electric/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Selected Digital Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-cyan-300 to-violet-400">Architectures</span>
          </h2>
          <p className="mt-4 text-metallic-300 text-base sm:text-lg leading-relaxed">
            Live web platforms, spatial 3D implementations, and workflow automation frameworks engineered with precision.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === cat
                  ? 'bg-cyan-electric/20 text-cyan-electric border border-cyan-electric/50 shadow-cyan-glow'
                  : 'glass-panel border-white/5 text-metallic-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          const isInternalLink = project.url.startsWith('#');

          return (
            <div
              key={project.id}
              className="group relative rounded-2xl glass-panel glass-panel-hover border border-white/10 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-electric/5 rounded-full blur-2xl group-hover:bg-cyan-electric/20 transition-all pointer-events-none" />

              <div>
                {/* Category & Metric Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 text-metallic-300 border border-white/10">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[10px] font-mono text-cyan-electric font-semibold">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-electric transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-metallic-400 mb-4">
                  {project.tagline}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-metallic-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-void-950/90 text-metallic-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={project.url}
                    target={isInternalLink ? undefined : '_blank'}
                    rel={isInternalLink ? undefined : 'noopener noreferrer'}
                    aria-label={`Open ${project.title}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-electric hover:text-white transition-colors group-hover:translate-x-0.5"
                  >
                    <span>{isInternalLink ? 'Inspect Architecture' : 'Launch Platform'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.isExternalAuth && (
                    <span className="text-[10px] font-mono text-metallic-500">
                      Auth Portal
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bangladesh Local & Automation Showcase Area */}
      <div className="mt-12 p-8 rounded-2xl glass-panel border border-violet-500/20 bg-gradient-to-r from-void-900/60 to-violet-950/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Regional Automation & Custom Integrations</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Need Bespoke Automation or a Modern 3D Web Application?
          </h3>
          <p className="text-xs sm:text-sm text-metallic-300 leading-relaxed">
            I build custom workflow automation setups, CRM/Inventory synchronization bridges, and high-conversion web platforms for businesses in Bangladesh and worldwide.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-violet-glow transition-all whitespace-nowrap"
        >
          <span>Initiate Collaboration</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
