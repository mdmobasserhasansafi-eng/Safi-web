# Project Specification: MD Mobasser Hasan Safi Portfolio & S.T.D.R.A. 3D Experience

## 1. Overview
A production-minded, high-performance personal portfolio website for MD Mobasser Hasan Safi — Web Developer, Digital Product Builder, and Automation Creator. The site features an interactive procedural 3D robot centerpiece representing **S.T.D.R.A. (Strategic Task & Dynamic Reasoning Architecture)** with scroll-driven cinematic choreography, metallic silver materials, cyan/violet illumination, and silky smooth transitions.

## 2. Technical Stack
- **Framework & Build**: React 18 / 19, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer, custom design tokens
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animation**: GSAP + ScrollTrigger for scroll-synchronized narrative; Framer Motion for UI micro-interactions
- **Icons**: Lucide React
- **Architecture**: Modular components, separated data files, lazy-loaded Canvas with fallbacks and reduced-motion modes

## 3. Visual & Aesthetic Identity
- **Color Palette**:
  - Near-black / void backdrop: `#030508`, `#080c14`, `#0e1422`
  - Metallic surfaces: Brushed aluminum `#e2e8f0`, dark chrome `#1e293b`, titanium `#334155`
  - Electric Cyan accents: `#00f0ff`, `#38bdf8`, `#06b6d4`
  - Soft Violet gradients: `#8b5cf6`, `#a855f7`, `#6366f1`
- **Typography & Surfaces**:
  - Clean futuristic typography (Inter / Space Grotesk / JetBrains Mono styling)
  - Controlled glassmorphism with subtle borders (`rgba(255,255,255,0.08)` and `backdrop-blur-md`)
  - Cinematic vignetting and glow effects without performance degradation

## 4. 3D Robot: S.T.D.R.A.
- **Silhouette & Composition**:
  - High-detail procedural 3D robotic figure constructed in Three.js / R3F (no external broken asset dependency)
  - Components: Head visor with cyan/violet optical core, articulated neck ring, multi-layered mechanical torso, glowing energy power core, floating cyber shoulder pauldrons, robotic arms/joints, floating holographic orbital rings, particle stars/dust
  - Dynamic materials: Metallic physical materials (`MeshStandardMaterial` / `MeshPhysicalMaterial`) with roughness, metalness, and emissive bloom
- **Scroll Choreography**:
  - Hero: Frontal showcase, gentle idle floating, responsive cursor parallax, glowing core breathing
  - About: Rotates 35° diagonally, zooms slightly to emphasize architecture and profile
  - S.T.D.R.A. Section: Central diagnostic scan mode, holographic rings expand, optical flares pulse
  - Experience: Shifts to right flank, framing left-side timeline
  - Projects: Angles downward overlooking project deck, energy pulse on interaction
  - Contact: Calibrated standing pose, inviting engagement
- **Performance & Fallbacks**:
  - Lazy loading with `React.lazy` and `Suspense`
  - WebGL capability detection
  - Mobile tier rendering (reduced polygon complexity, capped pixel ratio)
  - Full reduced-motion alternative with elegant stylized 2D/pseudo-3D holographic card fallback

## 5. Page Sections & Content
1. **Hero**: MD Mobasser Hasan Safi, Web Developer & Automation Creator, S.T.D.R.A. indicator, CTAs ("Explore My Work", "Initialize Contact"), live status badge.
2. **About**: Professional narrative, problem-solving mindset, bridge between web development and intelligent automation in Bangladesh and globally.
3. **S.T.D.R.A. System**: Clarified as creator's personal AI-system architecture project focusing on deterministic task decomposition, dynamic workflow routing, and automation pipelines.
4. **Experience & Track Record**: Bangladesh & global web apps, automation systems, digital product engineering.
5. **Projects**:
   - *Neuron Website* (`http://mdrakibhasanneuron.netlify.app/`)
   - *SWeb Weaver 3D Copy* (`https://sweb-weaver-3-d-copy-dc94af24.base44.app/login?from_url=https%3A%2F%2Fsweb-weaver-3-d-copy-dc94af24.base44.app%2F`)
   - *Sole Shift Style* (`https://sole-shift-style.base44.app/`)
   - *S.T.D.R.A. Engine Core* (Architecture Showcase)
   - *Local Automation & Client Solutions*
6. **Skills & Arsenal**: Confirmed categories (Frontend & 3D, Full-Stack & APIs, Automation & Systems, Engineering Tools).
7. **Verified Achievements**: Real milestones (Deployed Production Web Apps, 3D Interactive Web Experiences, Workflow Automations).
8. **Contact & Network**: `safiop.com@gmail.com`, LinkedIn, Facebook, Instagram, interactive copy-to-clipboard, quick response messaging form.
9. **Footer**: Navigation links, copyright, status indicator, back-to-top trigger.

## 6. Non-Functional Requirements
- Valid TypeScript, zero compilation errors (`tsc --noEmit`).
- Fast Vite production build (`vite build`).
- Fully accessible links (`rel="noopener noreferrer"`, aria labels, semantic HTML).
- Responsive across all viewports (360px mobile up to 4K ultrawide).
- SEO metadata, favicon, and OpenGraph social preview tags.
