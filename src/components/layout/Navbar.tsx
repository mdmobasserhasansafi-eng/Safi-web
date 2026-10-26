import React, { useState, useEffect } from 'react';
import { Menu, X, Eye, EyeOff } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isReducedMotion: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isReducedMotion,
  onToggleMotion,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'S.T.D.R.A.', href: '#stdra' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-void-950/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & S.T.D.R.A. Status Pill */}
          <a
            href="#"
            className="group flex items-center gap-3 text-inherit no-underline focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-electric/50 shadow-cyan-glow group-hover:border-cyan-electric transition-all">
              <img
                src="/safi-portrait.jpg"
                alt="MD Mobasser Hasan Safi"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-void-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-metallic-100 group-hover:text-cyan-electric transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-metallic-400 uppercase">
                S.T.D.R.A. ARCHITECTURE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass-panel border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-cyan-electric/15 text-cyan-electric border border-cyan-electric/30 shadow-cyan-glow'
                      : 'text-metallic-300 hover:text-metallic-100 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Utility Controls & CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Reduced Motion Toggle */}
            <button
              onClick={onToggleMotion}
              title={isReducedMotion ? 'Enable 3D Cinematic Motion' : 'Enable Reduced Motion'}
              className="p-2 rounded-lg glass-panel border border-white/10 text-metallic-300 hover:text-cyan-electric hover:border-cyan-electric/40 transition-colors"
              aria-label="Toggle motion preference"
            >
              {isReducedMotion ? (
                <EyeOff className="w-4 h-4 text-violet-400" />
              ) : (
                <Eye className="w-4 h-4 text-cyan-electric" />
              )}
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-void-950 bg-gradient-to-r from-cyan-electric to-cyan-400 hover:to-white transition-all shadow-cyan-glow hover:shadow-cyan-glow-lg"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleMotion}
              className="p-2 rounded-lg glass-panel border border-white/10 text-metallic-300"
              aria-label="Toggle motion"
            >
              {isReducedMotion ? (
                <EyeOff className="w-4 h-4 text-violet-400" />
              ) : (
                <Eye className="w-4 h-4 text-cyan-electric" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg glass-panel border border-white/10 text-metallic-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-cyan-electric/20 shadow-cyan-glow animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-metallic-200 hover:text-cyan-electric hover:bg-cyan-electric/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center block px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-void-950 bg-cyan-electric shadow-cyan-glow"
                >
                  Contact MD Mobasser Hasan Safi
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
