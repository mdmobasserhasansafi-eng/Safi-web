import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { StdraRobot } from './StdraRobot';
import { Cpu, Sparkles } from 'lucide-react';

interface SceneContainerProps {
  scrollProgress: number;
  sectionIndex: number;
  isReducedMotion: boolean;
  onToggleMotion?: () => void;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  scrollProgress,
  sectionIndex,
  isReducedMotion,
  onToggleMotion,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // Track mouse coordinates for subtle parallax
  useEffect(() => {
    if (isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isReducedMotion]);

  // Graceful 2D Holographic Fallback for Reduced Motion or Non-WebGL Environments
  if (isReducedMotion || !hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Subtle holographic cyber ring simulation */}
        <div className="absolute w-[340px] md:w-[480px] h-[340px] md:h-[480px] rounded-full border border-cyan-electric/20 animate-spin-slow opacity-60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-electric shadow-cyan-glow" />
        </div>
        <div className="absolute w-[240px] md:w-[360px] h-[240px] md:h-[360px] rounded-full border border-violet-500/25 animate-spin-slow [animation-direction:reverse] opacity-50" />

        {/* Central S.T.D.R.A. Core Emblem Card */}
        <div className="relative pointer-events-auto p-6 md:p-8 rounded-2xl glass-panel border border-cyan-electric/30 shadow-cyan-glow max-w-sm text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-void-900 border border-cyan-electric/50 flex items-center justify-center text-cyan-electric shadow-cyan-glow">
            <Cpu className="w-8 h-8 animate-pulse" />
          </div>
          <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-mono tracking-wider uppercase bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/30">
            S.T.D.R.A. Telemetry Core
          </div>
          <h4 className="text-lg font-display font-semibold text-metallic-100">
            {isReducedMotion ? 'Optimized Motion Active' : 'Static Diagnostic Mode'}
          </h4>
          <p className="text-xs text-metallic-400 mt-2 leading-relaxed">
            {isReducedMotion
              ? 'Real-time 3D animations paused to respect reduced-motion settings. All systems fully functional.'
              : 'WebGL hardware acceleration unavailable. Holographic diagnostics active.'}
          </p>

          {onToggleMotion && (
            <button
              onClick={onToggleMotion}
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-electric hover:bg-cyan-electric/15 border border-cyan-electric/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Toggle 3D Cinematic Mode
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric">
              <span className="w-2 h-2 rounded-full bg-cyan-electric animate-ping" />
              CALIBRATING S.T.D.R.A. 3D CORE...
            </div>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 1.5]}
        >
          {/* Studio Lighting Rig */}
          <ambientLight intensity={0.4} />
          
          {/* Key Light: Metallic Silver Neutral */}
          <directionalLight position={[4, 5, 4]} intensity={1.5} color="#ffffff" />
          
          {/* Rim Light 1: Electric Cyan Accent */}
          <directionalLight position={[-4, 2, -2]} intensity={2.8} color="#00f0ff" />
          
          {/* Rim Light 2: Soft Violet Fill */}
          <directionalLight position={[3, -3, -1]} intensity={1.8} color="#8b5cf6" />
          
          {/* Subtle Backlight for depth */}
          <pointLight position={[0, -2, -3]} intensity={1.2} color="#06b6d4" />

          {/* 3D Robot Centerpiece */}
          <StdraRobot
            scrollProgress={scrollProgress}
            sectionIndex={sectionIndex}
            mousePosition={mousePosition}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};
