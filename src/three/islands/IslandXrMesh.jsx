// src/three/islands/IslandXrMesh.jsx
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { Float } from "@react-three/drei";

export default function IslandXrMesh() {
  const mat = useMemo(() => ({
    rockDeep:   new MeshStandardMaterial({ color: "#140A02", flatShading: true }),
    rockMid:    new MeshStandardMaterial({ color: "#211408", flatShading: true }),
    rockTop:    new MeshStandardMaterial({ color: "#2A1A0A", flatShading: true }),
    body:       new MeshStandardMaterial({ color: "#0E0904" }),
    detail:     new MeshStandardMaterial({ color: "#1C0E04" }),
    accent:     new MeshStandardMaterial({ color: "#C8421A", emissive: "#C8421A", emissiveIntensity: 0.55 }),
    accentSoft: new MeshStandardMaterial({ color: "#E07040", emissive: "#E07040", emissiveIntensity: 0.65 }),
    accentRing: new MeshStandardMaterial({ color: "#C8421A" }),
  }), []);

  return (
    <group>
      {/* === PLATEAU XR / VR === */}
      <mesh position={[0, -0.7, 0]} castShadow receiveShadow material={mat.rockDeep}>
        <cylinderGeometry args={[5.2, 5.8, 1, 8]} />
      </mesh>

      <mesh position={[0, -0.1, 0]} castShadow receiveShadow material={mat.rockMid}>
        <cylinderGeometry args={[4.5, 5, 0.55, 8]} />
      </mesh>

      <mesh position={[0, 0.35, 0]} castShadow receiveShadow material={mat.rockTop}>
        <cylinderGeometry args={[3.6, 4, 0.35, 8]} />
      </mesh>

      {/* === CASQUE VR AU CENTRE === */}
      <group position={[0, 1.2, -0.5]}>
        <mesh castShadow material={mat.body}>
          <boxGeometry args={[2.6, 1.1, 1.4]} />
        </mesh>
        <mesh position={[0, 0, 0.65]} castShadow material={mat.detail}>
          <boxGeometry args={[2.4, 0.9, 0.3]} />
        </mesh>
        <mesh position={[-0.6, 0.1, 0.8]} castShadow material={mat.accent}>
          <cylinderGeometry args={[0.25, 0.25, 0.08, 16]} />
        </mesh>
        <mesh position={[0.6, 0.1, 0.8]} castShadow material={mat.accent}>
          <cylinderGeometry args={[0.25, 0.25, 0.08, 16]} />
        </mesh>
        <mesh position={[0, 0.7, 0]} castShadow material={mat.detail}>
          <boxGeometry args={[2.2, 0.25, 0.6]} />
        </mesh>
      </group>

      {/* === MANETTE DROITE === */}
      <group position={[1.9, 0.9, 0.4]} rotation={[-0.3, -0.4, 0.2]}>
        <mesh castShadow material={mat.body}>
          <boxGeometry args={[0.4, 1.1, 0.4]} />
        </mesh>
        <mesh position={[0, 0.6, 0]} castShadow material={mat.detail}>
          <torusGeometry args={[0.45, 0.08, 8, 18]} />
        </mesh>
        <mesh position={[0.1, 0.2, 0.2]} castShadow material={mat.accentRing}>
          <boxGeometry args={[0.18, 0.12, 0.06]} />
        </mesh>
      </group>

      {/* === MANETTE GAUCHE === */}
      <group position={[-1.9, 0.9, 0.4]} rotation={[-0.3, 0.4, -0.2]}>
        <mesh castShadow material={mat.body}>
          <boxGeometry args={[0.4, 1.1, 0.4]} />
        </mesh>
        <mesh position={[0, 0.6, 0]} castShadow material={mat.detail}>
          <torusGeometry args={[0.45, 0.08, 8, 18]} />
        </mesh>
        <mesh position={[-0.1, 0.2, 0.2]} castShadow material={mat.accentRing}>
          <boxGeometry args={[0.18, 0.12, 0.06]} />
        </mesh>
      </group>

      {/* === ORBE / HOLOGRAMME FLOTTANT XR === */}
      <Float speed={1.4} floatIntensity={0.9} rotationIntensity={0.4} position={[0.2, 2.6, 0.2]}>
        <group>
          <mesh castShadow material={mat.accentSoft}>
            <icosahedronGeometry args={[0.7, 0]} />
          </mesh>
          <mesh position={[0, -0.7, 0]} material={mat.accentRing}>
            <torusGeometry args={[0.6, 0.04, 8, 24]} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
