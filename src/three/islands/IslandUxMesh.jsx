// src/three/islands/IslandUxMesh.jsx
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { Float } from "@react-three/drei";

export default function IslandUxMesh() {
  const mat = useMemo(() => ({
    rockDeep:   new MeshStandardMaterial({ color: "#140A02", flatShading: true }),
    rockMid:    new MeshStandardMaterial({ color: "#211408", flatShading: true }),
    rockTop:    new MeshStandardMaterial({ color: "#2A1A0A", flatShading: true }),
    frame:      new MeshStandardMaterial({ color: "#0E0904" }),
    board:      new MeshStandardMaterial({ color: "#FAF6EF" }),
    line:       new MeshStandardMaterial({ color: "#E8D8B8" }),
    postit:     new MeshStandardMaterial({ color: "#C8421A" }),
    postitSoft: new MeshStandardMaterial({ color: "#E07040" }),
    cursor:     new MeshStandardMaterial({ color: "#D4812A", flatShading: true }),
  }), []);

  return (
    <group>
      {/* === 1. PLATEAU DE L'ÎLE === */}
      <mesh position={[0, -0.7, 0]} castShadow receiveShadow material={mat.rockDeep}>
        <cylinderGeometry args={[5.2, 5.8, 1, 8]} />
      </mesh>

      <mesh position={[0, -0.1, 0]} castShadow receiveShadow material={mat.rockMid}>
        <cylinderGeometry args={[4.5, 5, 0.55, 8]} />
      </mesh>

      <mesh position={[0, 0.35, 0]} castShadow receiveShadow material={mat.rockTop}>
        <cylinderGeometry args={[3.6, 4, 0.35, 8]} />
      </mesh>

      {/* === 2. GRAND ÉCRAN "DESKTOP" (MAQUETTE PRINCIPALE) === */}
      <group position={[0, 1.8, -1.2]} rotation={[-0.05, 0, 0]}>
        <mesh castShadow material={mat.frame}>
          <boxGeometry args={[3.8, 2.4, 0.18]} />
        </mesh>
        <mesh position={[0, 0.03, 0.09]} castShadow material={mat.board}>
          <boxGeometry args={[3.5, 2.1, 0.05]} />
        </mesh>
        <mesh position={[0, 0.1, 0.9]} castShadow material={mat.line}>
          <boxGeometry args={[3.1, 0.15, 0.05]} />
        </mesh>
        <mesh position={[-1, 0.05, 0.2]} castShadow material={mat.line}>
          <boxGeometry args={[0.8, 0.9, 0.04]} />
        </mesh>
        <mesh position={[0, 0.05, 0.2]} castShadow material={mat.line}>
          <boxGeometry args={[0.8, 0.9, 0.04]} />
        </mesh>
        <mesh position={[1, 0.05, 0.2]} castShadow material={mat.line}>
          <boxGeometry args={[0.8, 0.9, 0.04]} />
        </mesh>
      </group>

      {/* === 3. ÉCRAN MOBILE À CÔTÉ (RESPONSIVE DESIGN) === */}
      <group position={[1.8, 1.4, -0.3]} rotation={[-0.05, 0.2, 0]}>
        <mesh castShadow material={mat.frame}>
          <boxGeometry args={[0.9, 1.7, 0.16]} />
        </mesh>
        <mesh position={[0, 0.02, 0.08]} castShadow material={mat.board}>
          <boxGeometry args={[0.72, 1.45, 0.04]} />
        </mesh>
        <mesh position={[0, 0.05, 0.55]} castShadow material={mat.line}>
          <boxGeometry args={[0.6, 0.14, 0.04]} />
        </mesh>
        <mesh position={[0, 0.04, 0.1]} castShadow material={mat.line}>
          <boxGeometry args={[0.6, 0.3, 0.04]} />
        </mesh>
      </group>

      {/* === 4. CURSEUR / POINTER UX === */}
      <mesh position={[-0.9, 1.5, -0.6]} rotation={[0, 0.4, 0]} castShadow material={mat.cursor}>
        <coneGeometry args={[0.35, 0.7, 3]} />
      </mesh>

      {/* === 5. POST-IT FLOTTANT (IDÉES / TESTS) === */}
      <Float speed={1.2} floatIntensity={0.9} rotationIntensity={0.25} position={[-2.1, 2.4, -0.2]}>
        <mesh castShadow material={mat.postit}>
          <boxGeometry args={[1.1, 0.08, 1.1]} />
        </mesh>
      </Float>

      <mesh position={[2.3, 1.8, 0.2]} castShadow material={mat.postit}>
        <boxGeometry args={[0.8, 0.07, 0.5]} />
      </mesh>

      <mesh position={[2.1, 1.6, 0.7]} castShadow material={mat.postitSoft}>
        <boxGeometry args={[0.7, 0.07, 0.45]} />
      </mesh>
    </group>
  );
}
