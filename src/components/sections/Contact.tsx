import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Instagram, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link so user's client is invoked directly with their exact message
    const subject = encodeURIComponent(`Project Inquiry from ${formName || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}\n\n--\nSent via MD Mobasser Hasan Safi Portfolio`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin className="w-5 h-5 text-cyan-electric" />;
      case 'Facebook':
        return <Facebook className="w-5 h-5 text-cyan-300" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-violet-400" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-cyan-electric" />;
      default:
        return <Mail className="w-5 h-5 text-cyan-electric" />;
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-electric/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Communications Terminal</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-cyan-300 to-violet-400">Collaboration</span>
        </h2>
        <p className="mt-4 text-metallic-300 text-base sm:text-lg leading-relaxed">
          Whether you want to build an interactive 3D web application, design an automation workflow, or discuss a digital product in Bangladesh or abroad, let's talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Social Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick-Copy Card */}
          <div className="p-6 rounded-2xl glass-panel border border-cyan-electric/30 shadow-cyan-glow relative overflow-hidden group">
            <div className="text-xs font-mono text-cyan-electric uppercase tracking-wider mb-2">
              Direct Primary Channel
            </div>
            <div className="text-lg font-mono font-semibold text-white break-all">
              {PERSONAL_INFO.email}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-void-950 bg-cyan-electric hover:bg-white transition-colors"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-metallic-200 glass-panel border border-white/10 hover:border-cyan-electric/40 transition-colors"
              >
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          {/* Verified Social Networks */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono text-metallic-400 uppercase tracking-widest px-1">
              Verified Social Channels
            </div>

            {SOCIAL_LINKS.filter((s) => s.platform !== 'Email').map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-between p-4 rounded-xl glass-panel glass-panel-hover border border-white/5 hover:border-cyan-electric/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-void-900 border border-white/10 group-hover:border-cyan-electric/40 transition-colors">
                    {getSocialIcon(social.icon)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-cyan-electric transition-colors">
                      {social.platform}
                    </div>
                    <div className="text-xs font-mono text-metallic-400">
                      {social.handle}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-mono text-metallic-500 group-hover:text-cyan-electric transition-colors">
                  Connect &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Dispatch Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 text-sm font-mono text-cyan-electric font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Transmit Inquiries</span>
              </div>
              <span className="text-[11px] font-mono text-metallic-400">
                Direct to {PERSONAL_INFO.shortName}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-metallic-400 uppercase tracking-wider mb-2">
                  Your Name / Entity
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Alex Rahman"
                  className="w-full px-4 py-3 rounded-xl bg-void-900/80 border border-white/10 text-white placeholder-metallic-500 text-sm focus:outline-none focus:border-cyan-electric/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-metallic-400 uppercase tracking-wider mb-2">
                  Your Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-void-900/80 border border-white/10 text-white placeholder-metallic-500 text-sm focus:outline-none focus:border-cyan-electric/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-metallic-400 uppercase tracking-wider mb-2">
                Project Scope or Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Describe your web application, 3D experience, or automation requirements..."
                className="w-full px-4 py-3 rounded-xl bg-void-900/80 border border-white/10 text-white placeholder-metallic-500 text-sm focus:outline-none focus:border-cyan-electric/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-void-950 bg-gradient-to-r from-cyan-electric via-cyan-300 to-cyan-400 hover:from-white hover:to-cyan-electric shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Dispatch Message to safiop.com@gmail.com</span>
            </button>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center">
                Message formatted! Your email client has been prepared with your message to MD Mobasser Hasan Safi.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
