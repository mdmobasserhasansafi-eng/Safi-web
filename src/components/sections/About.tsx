import React from 'react';
import { User, Code2, Cpu, CheckCircle2, MapPin, Terminal } from 'lucide-react';
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

        {/* Right Column: Portrait Showcase & Technical DNA */}
        <div className="lg:col-span-5 space-y-6">
          {/* Cybernetic Portrait Card */}
          <div className="relative rounded-2xl glass-panel border border-cyan-electric/30 p-3 sm:p-4 shadow-cyan-glow overflow-hidden group">
            {/* Holographic Corner Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-electric pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-electric pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-electric pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-electric pointer-events-none z-20" />

            {/* Photo Container */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-void-900 border border-white/10">
              <img
                src="/safi-portrait.jpg"
                alt="MD Mobasser Hasan Safi - Web Developer & Automation Creator"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-cyan-electric/5 mix-blend-color-dodge pointer-events-none" />

              {/* Bottom Metadata Pill on Image */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-void-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-display font-bold text-white tracking-wide">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-electric uppercase tracking-wider">
                    S.T.D.R.A. Architect & Creator
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Creator DNA Matrix */}
          <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group">
            <h3 className="text-xs font-mono tracking-widest text-metallic-400 uppercase mb-4 flex items-center justify-between">
              <span>Creator DNA Matrix</span>
              <Terminal className="w-3.5 h-3.5 text-cyan-electric" />
            </h3>

            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-metallic-200">Frontend Engineering (React / TS)</span>
                  <span className="text-cyan-electric">95%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-electric to-cyan-400 w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-metallic-200">Interactive 3D / WebGL (Three.js)</span>
                  <span className="text-cyan-electric">85%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-electric via-cyan-400 to-violet-400 w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-metallic-200">Automation Pipelines & Workflows</span>
                  <span className="text-violet-400">90%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 w-[90%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-metallic-200">System Architecture (S.T.D.R.A.)</span>
                  <span className="text-cyan-electric">92%</span>
                </div>
                <div className="h-1.5 rounded-full bg-void-900 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 w-[92%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
