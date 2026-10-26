/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#030508',
          900: '#070a12',
          850: '#0b101c',
          800: '#101626',
          700: '#1a2238',
        },
        metallic: {
          900: '#1e2433',
          800: '#334155',
          700: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        cyan: {
          electric: '#00f0ff',
          neon: '#06d6a0',
          glow: 'rgba(0, 240, 255, 0.4)',
        },
        violet: {
          glow: 'rgba(139, 92, 246, 0.4)',
          deep: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.45)',
        'cyan-glow-lg': '0 0 45px -8px rgba(0, 240, 255, 0.6)',
        'violet-glow': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
