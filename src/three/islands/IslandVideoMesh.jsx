// src/three/islands/IslandVideoMesh.jsx
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { Float } from "@react-three/drei";

export default function IslandVideoMesh() {
  const mat = useMemo(() => ({
    rockDeep:    new MeshStandardMaterial({ color: "#180E04", flatShading: true }),
    rockMid:     new MeshStandardMaterial({ color: "#221508", flatShading: true }),
    rockTop:     new MeshStandardMaterial({ color: "#302010", flatShading: true }),
    screenFrame: new MeshStandardMaterial({ color: "#0E0904" }),
    screenInner: new MeshStandardMaterial({ color: "#fff7cc", emissive: "#fbbf24", emissiveIntensity: 0.085 }),
    accent:      new MeshStandardMaterial({ color: "#fbbf24" }),
    accentGlow:  new MeshStandardMaterial({ color: "#fbbf24", emissive: "#fbbf24", emissiveIntensity: 0.13, transparent: true, opacity: 0.55 }),
    accentGlow2: new MeshStandardMaterial({ color: "#fbbf24", emissive: "#fbbf24", emissiveIntensity: 0.3,  transparent: true, opacity: 0.55 }),
    metal:       new MeshStandardMaterial({ color: "#bfc7d5", metalness: 0.4, roughness: 0.3, flatShading: true }),
    metalDark:   new MeshStandardMaterial({ color: "#4a5562" }),
  }), []);

  return (
    <group>
      {/* === NIVEAU 1 === */}
      <mesh position={[0, -0.7, 0]} castShadow receiveShadow material={mat.rockDeep}>
        <cylinderGeometry args={[5.8, 6.3, 0.9, 8]} />
      </mesh>

      {/* === NIVEAU 2 === */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow material={mat.rockMid}>
        <cylinderGeometry args={[4.9, 5.2, 0.55, 8]} />
      </mesh>

      {/* === NIVEAU 3 === */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow material={mat.rockTop}>
        <cylinderGeometry args={[3.8, 4.1, 0.35, 8]} />
      </mesh>

      {/* === ÉCRAN === */}
      <group position={[0, 1.85, -1.25]} rotation={[-0.08, 0, 0]}>
        <mesh castShadow material={mat.screenFrame}>
          <boxGeometry args={[3.6, 2.1, 0.2]} />
        </mesh>
        <mesh position={[0, 0.05, 0.11]} castShadow material={mat.screenInner}>
          <boxGeometry args={[3.25, 1.75, 0.04]} />
        </mesh>
        <mesh position={[0, -0.9, 0.12]} castShadow material={mat.accent}>
          <boxGeometry args={[3.25, 0.22, 0.05]} />
        </mesh>
      </group>

      {/* === CLAP CINEMA === */}
      <group position={[-2, 0.95, 0.2]}>
        <mesh castShadow material={mat.screenFrame}>
          <boxGeometry args={[1.45, 0.9, 0.25]} />
        </mesh>
        <mesh rotation={[0, 0, -0.32]} position={[0.1, 0.8, 0]} material={mat.rockDeep}>
          <boxGeometry args={[1.45, 0.4, 0.22]} />
        </mesh>
      </group>

      {/* === BOBINE — VERSION MÉTALLIQUE PRO === */}
      <group position={[2, 1.02, 0.3]}>
        <mesh castShadow material={mat.metal}>
          <cylinderGeometry args={[1, 1, 0.4, 24]} />
        </mesh>
        <mesh castShadow material={mat.metalDark}>
          <cylinderGeometry args={[0.42, 0.42, 0.45, 16]} />
        </mesh>
      </group>

      {/* === PROJECTEURS FLOTTANTS === */}
      <Float speed={1.1} floatIntensity={0.55} rotationIntensity={0.25} position={[2, 3.1, -0.25]}>
        <mesh rotation={[-Math.PI / 3.3, 0, -1]} material={mat.accentGlow}>
          <coneGeometry args={[0.7, 1.5, 16]} />
        </mesh>
      </Float>

      <Float speed={1.1} floatIntensity={0.55} rotationIntensity={0.25} position={[-3, 3.1, -0.25]}>
        <mesh rotation={[-Math.PI / 1.3, 0, -1]} material={mat.accentGlow2}>
          <coneGeometry args={[0.7, -1.5, 16]} />
        </mesh>
      </Float>
    </group>
  );
}
