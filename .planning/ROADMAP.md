# Project Roadmap: Safi Portfolio & S.T.D.R.A.

## Phases

- [ ] **Phase 1: Project Scaffolding & Design Foundation**
  - Initialize Vite + React + TypeScript app
  - Install dependencies (`three`, `@types/three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `framer-motion`, `lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`)
  - Configure Tailwind CSS, fonts, dark metallic color tokens, and global utilities
  - Set up clean project structure (`src/components`, `src/data`, `src/types`, `src/scenes`, `src/hooks`)

- [ ] **Phase 2: Content Architecture & Data Models**
  - Implement structured data in `src/data/portfolioData.ts` (Projects, Experience, Skills, Achievements, Socials, S.T.D.R.A. specs)
  - Ensure all specified URLs, email, and social links are verified and strict
  - Create typed interfaces in `src/types/index.ts`

- [ ] **Phase 3: Procedural 3D S.T.D.R.A. Robot Scene**
  - Build procedural high-fidelity 3D metallic robot with articulated joints, glowing eye visor, pulsing power core, orbital gyro rings, and sci-fi aesthetic
  - Set up studio cinematic lighting (key light, rim light in electric cyan, soft fill in violet, ambient illumination)
  - Implement idle floating, breathing core animation, and mouse/touch parallax tracking
  - Integrate Canvas with Suspense, error boundary, and responsive viewport sizing

- [ ] **Phase 4: GSAP Scroll Choreography & Camera Rig**
  - Implement GSAP ScrollTrigger timeline coordinating 3D robot transform (rotation, position, scale, lighting mood) across page sections
  - Maintain native smooth scrolling performance
  - Provide reduced-motion and mobile detection with graceful alternative presentation

- [ ] **Phase 5: Section UI Components & Framer Motion**
  - Navigation bar with blur backdrop, status pill, and smooth scroll anchors
  - Hero section with live status, S.T.D.R.A. badge, headline, and interactive CTA buttons
  - About section with creator narrative, architecture philosophy, and stats
  - S.T.D.R.A. dedicated architectural breakdown (Interactive telemetry, modules, execution loop)
  - Experience timeline (Bangladesh local projects, web development, automation workflows)
  - Projects grid with interactive cards, live links, tags, and detail modals
  - Skills matrix categorized by domain
  - Verified Achievements showcase
  - Contact section with copyable email, social cards, interactive message composer
  - Futuristic minimal footer with back-to-top and status indicators

- [ ] **Phase 6: Optimization, Polish, Accessibility, Build & Verification**
  - SEO tags, Favicon, Open Graph metadata in `index.html`
  - Performance audit: draw calls, render loops, lazy loading
  - Run `npm run build` and `tsc --noEmit` to ensure clean build
  - Write comprehensive README.md with setup, architecture, and deployment instructions
