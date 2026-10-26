import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface StdraRobotProps {
  scrollProgress: number; // 0 to 1 across page
  sectionIndex: number;   // 0: hero, 1: about, 2: stdra, 3: exp, 4: projects, 5: contact
  mousePosition: { x: number; y: number };
}

export const StdraRobot: React.FC<StdraRobotProps> = ({
  scrollProgress,
  sectionIndex,
  mousePosition,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // High-performance procedural materials with metallic silver & dark titanium
  const materials = useMemo(() => {
    return {
      darkTitanium: new THREE.MeshStandardMaterial({
        color: '#111827',
        metalness: 0.9,
        roughness: 0.25,
      }),
      brushedSteel: new THREE.MeshStandardMaterial({
        color: '#94a3b8',
        metalness: 0.85,
        roughness: 0.2,
      }),
      silverPlating: new THREE.MeshStandardMaterial({
        color: '#e2e8f0',
        metalness: 0.95,
        roughness: 0.15,
      }),
      cyanEmissive: new THREE.MeshStandardMaterial({
        color: '#00f0ff',
        emissive: '#00f0ff',
        emissiveIntensity: 2.5,
        roughness: 0.1,
      }),
      violetEmissive: new THREE.MeshStandardMaterial({
        color: '#8b5cf6',
        emissive: '#8b5cf6',
        emissiveIntensity: 1.8,
        roughness: 0.2,
      }),
      glassVisor: new THREE.MeshPhysicalMaterial({
        color: '#00f0ff',
        emissive: '#003844',
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.85,
      }),
      jointRing: new THREE.MeshStandardMaterial({
        color: '#020617',
        metalness: 0.9,
        roughness: 0.4,
      }),
    };
  }, []);

  // Ambient cyber dust particles around the robot
  const particleCount = 75;
  const particleGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const particleMat = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#00f0ff',
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  // Section target transforms (cinematic choreography)
  // Section 0 (Hero): Centered, direct eye contact
  // Section 1 (About): Flank right, inspecting narrative
  // Section 2 (STDRA): Center-left, diagnostic scan pose, gyro rings active
  // Section 3 (Experience): Right side, overlooking timeline
  // Section 4 (Projects): Upper vantage, overlooking interactive cards
  // Section 5 (Skills / Achievements): Left flank, balanced
  // Section 6 (Contact): Centered, open welcoming stance
  const sectionTransforms = useMemo(() => [
    { pos: [0, -0.2, 0], rot: [0, 0, 0], scale: 1.05, ringScale: 1.0 },              // Hero
    { pos: [1.8, -0.1, -0.4], rot: [0.08, -0.55, 0], scale: 0.95, ringScale: 1.1 },   // About
    { pos: [-1.5, 0.0, 0.1], rot: [-0.05, 0.45, 0.02], scale: 1.15, ringScale: 1.5 }, // STDRA
    { pos: [1.6, -0.2, -0.5], rot: [0.1, -0.4, -0.05], scale: 0.9, ringScale: 1.2 },  // Exp
    { pos: [1.3, 0.35, -0.8], rot: [0.25, -0.3, 0], scale: 0.85, ringScale: 1.3 },    // Projects
    { pos: [-1.4, -0.15, -0.3], rot: [0.05, 0.35, 0], scale: 0.95, ringScale: 1.1 },  // Skills
    { pos: [0, -0.1, 0.1], rot: [0, 0, 0], scale: 1.0, ringScale: 1.2 },              // Contact
  ], []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Determine current interpolated target based on sectionIndex or scrollProgress
    const clampedIndex = Math.min(Math.max(sectionIndex, 0), sectionTransforms.length - 1);
    const target = sectionTransforms[clampedIndex];

    // Smooth lerp toward target pose
    const lerpSpeed = Math.min(delta * 4.5, 0.2);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, target.pos[0], lerpSpeed);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, target.pos[1] + Math.sin(time * 1.8) * 0.06, lerpSpeed);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, target.pos[2], lerpSpeed);

    // Body rotation with mouse parallax influence
    const targetRotY = target.rot[1] + mousePosition.x * 0.2;
    const targetRotX = target.rot[0] - mousePosition.y * 0.15;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, lerpSpeed);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, lerpSpeed);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, target.rot[2], lerpSpeed);

    // Scale lerp
    const curScale = groupRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(curScale, target.scale, lerpSpeed);
    groupRef.current.scale.set(nextScale, nextScale, nextScale);

    // Head subtle independent look-at
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mousePosition.x * 0.35,
        delta * 3
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mousePosition.y * 0.25,
        delta * 3
      );
    }

    // Core pulsing & gyro ring spins
    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 3.5) * 0.12;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.8;
      ring1Ref.current.rotation.y = time * 0.6;
      const targetRing = target.ringScale;
      ring1Ref.current.scale.set(targetRing, targetRing, targetRing);
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.6;
      ring2Ref.current.rotation.z = time * 0.9;
      const targetRing = target.ringScale * 1.15;
      ring2Ref.current.scale.set(targetRing, targetRing, targetRing);
    }

    // Floating idle breathing for arms
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = -0.15 + Math.sin(time * 1.5) * 0.03;
      leftArmRef.current.rotation.x = Math.cos(time * 1.5) * 0.03;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = 0.15 - Math.sin(time * 1.5) * 0.03;
      rightArmRef.current.rotation.x = Math.cos(time * 1.5) * 0.03;
    }

    // Particle swirl & scroll responsiveness
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05 + scrollProgress * Math.PI;
      particlesRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Dynamic localized core light */}
      <pointLight position={[0, 0.4, 0.4]} color="#00f0ff" intensity={4.5} distance={3.5} decay={2} />
      <pointLight position={[0, 1.2, 0.3]} color="#8b5cf6" intensity={2.0} distance={2.5} decay={2} />

      {/* Ambient Cyber Dust Particles */}
      <points ref={particlesRef} geometry={particleGeo} material={particleMat} />

      {/* ===================== HEAD ASSEMBLY ===================== */}
      <group ref={headRef} position={[0, 1.25, 0]}>
        {/* Cranial Helmet / Chassis */}
        <mesh position={[0, 0.12, 0]} material={materials.darkTitanium}>
          <boxGeometry args={[0.55, 0.45, 0.52]} />
        </mesh>

        {/* Crown Silver Armor Cap */}
        <mesh position={[0, 0.35, -0.02]} material={materials.silverPlating}>
          <boxGeometry args={[0.42, 0.1, 0.48]} />
        </mesh>

        {/* Angular Jaw / Chin Frame */}
        <mesh position={[0, -0.15, 0.05]} material={materials.brushedSteel}>
          <boxGeometry args={[0.36, 0.18, 0.42]} />
        </mesh>

        {/* High-Tech Panoramic Visor */}
        <mesh position={[0, 0.08, 0.24]} material={materials.glassVisor}>
          <boxGeometry args={[0.48, 0.18, 0.1]} />
        </mesh>

        {/* Expressive Glowing Visor Eyes (Cyan Dual Optic Beams) */}
        <mesh position={[-0.12, 0.08, 0.28]} material={materials.cyanEmissive}>
          <boxGeometry args={[0.14, 0.045, 0.04]} />
        </mesh>
        <mesh position={[0.12, 0.08, 0.28]} material={materials.cyanEmissive}>
          <boxGeometry args={[0.14, 0.045, 0.04]} />
        </mesh>

        {/* Violet Forehead Sensor Core */}
        <mesh position={[0, 0.25, 0.25]} material={materials.violetEmissive}>
          <boxGeometry args={[0.08, 0.04, 0.04]} />
        </mesh>

        {/* Side Communication Antennas */}
        <group position={[-0.32, 0.15, 0]}>
          <mesh material={materials.brushedSteel}>
            <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
          </mesh>
          <mesh position={[0, 0.18, 0]} material={materials.cyanEmissive}>
            <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          </mesh>
        </group>
        <group position={[0.32, 0.15, 0]}>
          <mesh material={materials.brushedSteel}>
            <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
          </mesh>
          <mesh position={[0, 0.18, 0]} material={materials.cyanEmissive}>
            <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
          </mesh>
        </group>

        {/* Ear Pivot Discs */}
        <mesh position={[-0.29, 0.05, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.silverPlating}>
          <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        </mesh>
        <mesh position={[0.29, 0.05, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.silverPlating}>
          <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        </mesh>
      </group>

      {/* ===================== ARTICULATED NECK ===================== */}
      <group position={[0, 0.95, 0]}>
        <mesh material={materials.jointRing}>
          <cylinderGeometry args={[0.14, 0.16, 0.22, 16]} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.brushedSteel}>
          <torusGeometry args={[0.17, 0.03, 8, 16]} />
        </mesh>
      </group>

      {/* ===================== TORSO & POWER CORE ===================== */}
      <group position={[0, 0.45, 0]}>
        {/* Main Chest Structure */}
        <mesh position={[0, 0.1, -0.05]} material={materials.darkTitanium}>
          <boxGeometry args={[0.82, 0.7, 0.48]} />
        </mesh>

        {/* Chest Metallic Facet Plates (Upper Left & Right) */}
        <mesh position={[-0.24, 0.28, 0.2]} rotation={[0.1, 0.1, -0.05]} material={materials.silverPlating}>
          <boxGeometry args={[0.28, 0.24, 0.06]} />
        </mesh>
        <mesh position={[0.24, 0.28, 0.2]} rotation={[0.1, -0.1, 0.05]} material={materials.silverPlating}>
          <boxGeometry args={[0.28, 0.24, 0.06]} />
        </mesh>

        {/* S.T.D.R.A. Central Power Reactor */}
        <group position={[0, 0.05, 0.22]}>
          {/* Reactor Housing Ring */}
          <mesh material={materials.silverPlating}>
            <torusGeometry args={[0.18, 0.04, 16, 32]} />
          </mesh>
          {/* Inner Glowing Plasma Core */}
          <mesh ref={coreRef} material={materials.cyanEmissive}>
            <sphereGeometry args={[0.12, 24, 24]} />
          </mesh>
          {/* Emissive Violet Accent Ring */}
          <mesh rotation={[0, 0, Math.PI / 4]} material={materials.violetEmissive}>
            <torusGeometry args={[0.13, 0.015, 8, 24]} />
          </mesh>
        </group>

        {/* Counter-Rotating Holographic Gyro Rings */}
        <mesh ref={ring1Ref} position={[0, 0.05, 0.2]} material={materials.cyanEmissive}>
          <torusGeometry args={[0.42, 0.012, 12, 48]} />
        </mesh>
        <mesh ref={ring2Ref} position={[0, 0.05, 0.2]} material={materials.violetEmissive}>
          <torusGeometry args={[0.5, 0.012, 12, 48]} />
        </mesh>

        {/* Rib / Abdominal Segment */}
        <group position={[0, -0.38, 0]}>
          <mesh material={materials.brushedSteel}>
            <cylinderGeometry args={[0.28, 0.24, 0.25, 12]} />
          </mesh>
          {/* Spine columns behind */}
          <mesh position={[0, 0, -0.18]} material={materials.jointRing}>
            <boxGeometry args={[0.16, 0.3, 0.1]} />
          </mesh>
          {/* Cyan spine conduits */}
          <mesh position={[-0.06, 0, -0.22]} material={materials.cyanEmissive}>
            <cylinderGeometry args={[0.015, 0.015, 0.26, 8]} />
          </mesh>
          <mesh position={[0.06, 0, -0.22]} material={materials.cyanEmissive}>
            <cylinderGeometry args={[0.015, 0.015, 0.26, 8]} />
          </mesh>
        </group>

        {/* Pelvic Hub Base */}
        <mesh position={[0, -0.6, 0]} material={materials.darkTitanium}>
          <boxGeometry args={[0.62, 0.22, 0.4]} />
        </mesh>
        <mesh position={[0, -0.6, 0.18]} material={materials.silverPlating}>
          <boxGeometry args={[0.3, 0.14, 0.08]} />
        </mesh>
      </group>

      {/* ===================== FLOATING PAULDRONS & ARMS ===================== */}
      {/* Left Arm Assembly */}
      <group ref={leftArmRef} position={[-0.56, 0.72, 0]}>
        {/* Floating Cyber Pauldron */}
        <mesh position={[-0.1, 0.08, 0]} rotation={[0, 0, 0.2]} material={materials.silverPlating}>
          <boxGeometry args={[0.32, 0.2, 0.38]} />
        </mesh>
        <mesh position={[-0.1, 0.16, 0]} rotation={[0, 0, 0.2]} material={materials.cyanEmissive}>
          <boxGeometry args={[0.28, 0.02, 0.34]} />
        </mesh>

        {/* Shoulder Joint Sphere */}
        <mesh material={materials.jointRing}>
          <sphereGeometry args={[0.13, 16, 16]} />
        </mesh>

        {/* Bicep Cylinder */}
        <mesh position={[-0.05, -0.28, 0]} material={materials.darkTitanium}>
          <cylinderGeometry args={[0.1, 0.09, 0.36, 12]} />
        </mesh>

        {/* Elbow Joint */}
        <mesh position={[-0.05, -0.52, 0]} material={materials.silverPlating}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>

        {/* Forearm Armor with Status Light */}
        <mesh position={[-0.05, -0.82, 0.05]} material={materials.brushedSteel}>
          <boxGeometry args={[0.16, 0.44, 0.2]} />
        </mesh>
        <mesh position={[-0.05, -0.82, 0.16]} material={materials.cyanEmissive}>
          <boxGeometry args={[0.04, 0.35, 0.02]} />
        </mesh>

        {/* Robotic Hand */}
        <mesh position={[-0.05, -1.1, 0.05]} material={materials.darkTitanium}>
          <boxGeometry args={[0.14, 0.12, 0.16]} />
        </mesh>
      </group>

      {/* Right Arm Assembly */}
      <group ref={rightArmRef} position={[0.56, 0.72, 0]}>
        {/* Floating Cyber Pauldron */}
        <mesh position={[0.1, 0.08, 0]} rotation={[0, 0, -0.2]} material={materials.silverPlating}>
          <boxGeometry args={[0.32, 0.2, 0.38]} />
        </mesh>
        <mesh position={[0.1, 0.16, 0]} rotation={[0, 0, -0.2]} material={materials.cyanEmissive}>
          <boxGeometry args={[0.28, 0.02, 0.34]} />
        </mesh>

        {/* Shoulder Joint Sphere */}
        <mesh material={materials.jointRing}>
          <sphereGeometry args={[0.13, 16, 16]} />
        </mesh>

        {/* Bicep Cylinder */}
        <mesh position={[0.05, -0.28, 0]} material={materials.darkTitanium}>
          <cylinderGeometry args={[0.1, 0.09, 0.36, 12]} />
        </mesh>

        {/* Elbow Joint */}
        <mesh position={[0.05, -0.52, 0]} material={materials.silverPlating}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>

        {/* Forearm Armor with Status Light */}
        <mesh position={[0.05, -0.82, 0.05]} material={materials.brushedSteel}>
          <boxGeometry args={[0.16, 0.44, 0.2]} />
        </mesh>
        <mesh position={[0.05, -0.82, 0.16]} material={materials.cyanEmissive}>
          <boxGeometry args={[0.04, 0.35, 0.02]} />
        </mesh>

        {/* Robotic Hand */}
        <mesh position={[0.05, -1.1, 0.05]} material={materials.darkTitanium}>
          <boxGeometry args={[0.14, 0.12, 0.16]} />
        </mesh>
      </group>
    </group>
  );
};
