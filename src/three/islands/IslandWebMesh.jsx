// src/three/islands/IslandWebMesh.jsx
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { Float } from "@react-three/drei";

export default function IslandWebMesh() {
  const mat = useMemo(() => ({
    haloInner:   new MeshStandardMaterial({ color: "#0b5394", roughness: 0.9, metalness: 0.1 }),
    haloOuter:   new MeshStandardMaterial({ color: "#60a5fa", roughness: 0.35 }),
    rockDark:    new MeshStandardMaterial({ color: "#1e293b", flatShading: true }),
    rockMid:     new MeshStandardMaterial({ color: "#334155", flatShading: true }),
    screenFrame: new MeshStandardMaterial({ color: "#0f172a" }),
    screenInner: new MeshStandardMaterial({ color: "#eff6ff" }),
    accent:      new MeshStandardMaterial({ color: "#38bdf8" }),
  }), []);

  return (
    <group>

      {/* === HALO PART 1 (ombre) === */}
      <mesh position={[0, -1.1, 0]} material={mat.haloInner}>
        <cylinderGeometry args={[7, 7, 0.22, 32]} />
      </mesh>

      {/* === HALO PART 2 (glow) === */}
      <mesh position={[0, -1.1, 0]} material={mat.haloOuter}>
        <cylinderGeometry args={[7.4, 7.4, 0.15, 32]} />
      </mesh>

      {/* === BASE DE L'ÎLE === */}
      <mesh position={[0, -0.5, 0]} castShadow material={mat.rockDark}>
        <cylinderGeometry args={[5.5, 6.1, 1, 12]} />
      </mesh>

      {/* === NIVEAU 2 === */}
      <mesh position={[0, 0.1, 0]} rotation={[0, Math.PI / 10, 0]} castShadow material={mat.rockMid}>
        <cylinderGeometry args={[4.3, 4.8, 0.5, 10]} />
      </mesh>

      {/* === GRAND ÉCRAN === */}
      <mesh position={[0, 2, -1.3]} castShadow material={mat.screenFrame}>
        <boxGeometry args={[3.6, 2.3, 0.22]} />
      </mesh>

      <mesh position={[0, 2.05, -1.15]} castShadow material={mat.screenInner}>
        <boxGeometry args={[3.2, 1.9, 0.05]} />
      </mesh>

      {/* === LIGNES UI === */}
      <mesh position={[-0.8, 2.35, -1]} castShadow material={mat.accent}>
        <boxGeometry args={[1.3, 0.1, 0.03]} />
      </mesh>

      <mesh position={[0.6, 2.1, -1]} castShadow material={mat.accent}>
        <boxGeometry args={[0.9, 0.1, 0.03]} />
      </mesh>

      {/* === BLOC UI AU SOL (version panneau) === */}
      <mesh position={[-1.4, 0.9, 0.4]} rotation={[-0.15, 0.3, 0]} castShadow material={mat.rockDark}>
        <boxGeometry args={[2.3, 1.3, 0.12]} />
      </mesh>

      <mesh position={[-1.4, 1.1, 0.5]} castShadow material={mat.accent}>
        <boxGeometry args={[1.5, 0.08, 0.06]} />
      </mesh>

      {/* === NOTIFICATION FLOAT === */}
      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={1} position={[1, 2.6, 0.4]}>
        <mesh castShadow material={mat.accent}>
          <boxGeometry args={[1.4, 0.55, 0.15]} />
        </mesh>
      </Float>

    </group>
  );
}
