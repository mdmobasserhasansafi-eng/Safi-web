import React, { useState } from 'react';
import { Cpu, Terminal, GitBranch, Shield, Activity, RefreshCw, CheckCircle, Database } from 'lucide-react';
import { STDRA_DATA } from '../../data/portfolioData';

export const StdraSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(0);

  return (
    <section id="stdra" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-electric/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Proprietary AI-System Blueprint</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          {STDRA_DATA.acronym} — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric to-violet-400">{STDRA_DATA.fullName}</span>
        </h2>
        <p className="mt-4 text-metallic-300 text-base sm:text-lg leading-relaxed">
          {STDRA_DATA.overview}
        </p>
      </div>

      {/* Three Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {STDRA_DATA.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/5 relative group"
          >
            <div className="w-10 h-10 rounded-xl bg-void-900 border border-cyan-electric/30 flex items-center justify-center text-cyan-electric mb-4 shadow-cyan-glow group-hover:scale-105 transition-transform">
              {idx === 0 ? <GitBranch className="w-5 h-5" /> : idx === 1 ? <RefreshCw className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
            </div>
            <div className="text-[11px] font-mono text-cyan-electric tracking-widest uppercase mb-1">
              {pillar.metric}
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">{pillar.title}</h3>
            <p className="text-xs sm:text-sm text-metallic-400 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive System Telemetry & Module Diagnostic Console */}
      <div className="rounded-2xl glass-panel border border-cyan-electric/25 p-6 sm:p-8 relative overflow-hidden shadow-glass-card">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-electric animate-ping" />
              <h3 className="font-mono text-sm tracking-wider uppercase text-cyan-electric font-bold">
                S.T.D.R.A. Execution Console & Subsystem Matrix
              </h3>
            </div>
            <p className="text-xs text-metallic-400 mt-1">
              Select an architecture module below to inspect its operational protocol and verification criteria.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/30">
              <Activity className="w-3.5 h-3.5" />
              STATUS: NOMINAL
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/30">
              <Database className="w-3.5 h-3.5" />
              PERSISTENCE: ATOMIC
            </span>
          </div>
        </div>

        {/* Module Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {STDRA_DATA.modules.map((mod, index) => {
            const isSelected = selectedModule === index;
            return (
              <button
                key={mod.code}
                onClick={() => setSelectedModule(index)}
                className={`p-3.5 rounded-xl text-left transition-all ${
                  isSelected
                    ? 'bg-cyan-electric/15 border-cyan-electric/60 border text-white shadow-cyan-glow'
                    : 'glass-panel border-white/5 hover:border-white/20 text-metallic-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-electric">{mod.code}</span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                    mod.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {mod.status}
                  </span>
                </div>
                <div className="text-xs font-medium text-metallic-200 truncate">{mod.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="p-5 rounded-xl bg-void-900/80 border border-white/10 font-mono text-xs text-metallic-300 space-y-3">
          <div className="flex items-center justify-between text-cyan-electric font-semibold border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>MODULE SPEC: {STDRA_DATA.modules[selectedModule].code} // {STDRA_DATA.modules[selectedModule].name}</span>
            </div>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              READY FOR INVOCATION
            </span>
          </div>

          <p className="text-metallic-300 text-sm leading-relaxed">
            {STDRA_DATA.modules[selectedModule].detail}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px] text-metallic-400">
            <div className="p-2.5 rounded bg-void-950 border border-white/5">
              <span className="text-metallic-500 block">EXECUTION MODE</span>
              <span className="text-white">Deterministic Task Graph</span>
            </div>
            <div className="p-2.5 rounded bg-void-950 border border-white/5">
              <span className="text-metallic-500 block">ERROR BUDGET</span>
              <span className="text-cyan-electric">Zero Tolerance / Fallback Active</span>
            </div>
            <div className="p-2.5 rounded bg-void-950 border border-white/5">
              <span className="text-metallic-500 block">DISPATCH TARGET</span>
              <span className="text-violet-300">Automated Runtime Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
