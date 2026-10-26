import React from 'react';
import { User, Code2, Cpu, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Architectural Profile</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Engineering Tactile Web Realities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-cyan-300 to-violet-400">Deterministic Logic</span>
          </h2>

          <p className="text-metallic-300 text-base sm:text-lg leading-relaxed">
            I am <strong className="text-white">{PERSONAL_INFO.name}</strong>, a web developer and automation engineer from {PERSONAL_INFO.location}. My work bridges the visual fluidity of interactive web frontends with the disciplined, deterministic power of backend automation pipelines.
          </p>

          <p className="text-metallic-400 text-sm sm:text-base leading-relaxed">
            Rather than building passive, static web pages, I specialize in crafting engaging 3D digital products (utilizing Three.js, React Three Fiber, and hardware-accelerated shaders) and designing autonomous architectures like <strong className="text-cyan-electric">S.T.D.R.A.</strong>. From assisting local businesses in Bangladesh with automated operations to deploying global web apps, I prioritize precision, responsiveness, and zero-bloat codebases.
          </p>

          {/* Core Operating Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-electric text-sm font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Modern Web Stack</span>
              </div>
              <p className="text-xs text-metallic-400 leading-relaxed">
                Typesafe React & TypeScript architectures with high frame-rate Three.js WebGL scenes and responsive CSS tokens.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Deterministic Automation</span>
              </div>
              <p className="text-xs text-metallic-400 leading-relaxed">
                Robust workflow engines, webhook integrations, and structured task decomposition reducing manual overhead.
              </p>
            </div>
          </div>

          {/* Location & Status Tag */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-metallic-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-electric" />
              <span>Base: {PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics & Technical DNA */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-electric/5 rounded-full blur-2xl group-hover:bg-cyan-electric/15 transition-all" />

            <h3 className="text-xs font-mono tracking-widest text-metallic-400 uppercase mb-4">
              Creator DNA Matrix
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-metallic-200">Frontend Engineering (React / TS)</span>
                  <span className="text-cyan-electric">95%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-electric to-cyan-400 w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-metallic-200">Interactive 3D / WebGL (Three.js)</span>
                  <span className="text-cyan-electric">85%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-electric via-cyan-400 to-violet-400 w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-metallic-200">Automation Pipelines & Workflows</span>
                  <span className="text-violet-400">90%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 w-[90%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-metallic-200">System Architecture (S.T.D.R.A.)</span>
                  <span className="text-cyan-electric">92%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 w-[92%]" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-metallic-400">System Status</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Nominal & Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
