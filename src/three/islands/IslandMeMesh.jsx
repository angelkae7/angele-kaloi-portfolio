// src/three/IslandMeMesh.jsx
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { Float } from "@react-three/drei";

export default function IslandMeMesh({
  position = [0, 0, 0],
  onClick,
  isActive = false,
  dimmed = false,
}) {
  const mat = useMemo(() => ({
    water:   new MeshStandardMaterial({ color: dimmed ? "#0f172a" : "#63C8D0", roughness: 0.6, metalness: 0.2, transparent: true, opacity: 0.95 }),
    sand:    new MeshStandardMaterial({ color: dimmed ? "#1f2933" : "#F2C66B", roughness: 0.3, metalness: 0.5 }),
    hutBase: new MeshStandardMaterial({ color: dimmed ? "#4b3b2a" : "#8f7357", roughness: 0.6, metalness: 0.2 }),
    hutRoof: new MeshStandardMaterial({ color: dimmed ? "#3b2b1b" : "#69523c", flatShading: true }),
    trunk:   new MeshStandardMaterial({ color: dimmed ? "#5b3a1c" : "#8B5A2B", flatShading: true }),
    foliage: new MeshStandardMaterial({ color: dimmed ? "#14532d" : "#3FA34D", flatShading: true }),
    rock:    new MeshStandardMaterial({ color: dimmed ? "#735943" : "#C9A66B", flatShading: true }),
    orb:     new MeshStandardMaterial({ color: dimmed ? "#9ca3af" : "#ffffff", metalness: 0.35, roughness: 0.3 }),
    halo:    new MeshStandardMaterial({ color: "#C8421A", transparent: true, opacity: 0.6 }),
  }), [dimmed]);

  return (
    <group position={position} onClick={onClick}>
      {/* HALO de l'île active */}
      {isActive && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]} material={mat.halo}>
          <ringGeometry args={[6.2, 7.2, 32]} />
        </mesh>
      )}

      {/* EAU */}
      <mesh position={[0, -1.15, 0]} receiveShadow material={mat.water}>
        <cylinderGeometry args={[6.5, 6.5, 0.6, 24]} />
      </mesh>

      {/* ÎLE */}
      <mesh castShadow receiveShadow position={[0, 0, 0]} material={mat.sand}>
        <cylinderGeometry args={[5, 5.4, 2.2, 14, 1]} />
      </mesh>

      {/* HUTTE */}
      <group position={[0, 1.4, 0]}>
        <mesh castShadow material={mat.hutBase}>
          <cylinderGeometry args={[1.7, 2, 2, 10]} />
        </mesh>
        <mesh castShadow position={[0, -0.05, 1.05]} material={mat.hutRoof}>
          <boxGeometry args={[0.8, 1.25, 1.7]} />
        </mesh>
        <mesh castShadow position={[0, 3, 0]} material={mat.hutRoof}>
          <coneGeometry args={[2.2, 3.4, 12]} />
        </mesh>
      </group>

      {/* ARBRES */}
      <group position={[-2.8, 1.4, -1.4]}>
        <mesh castShadow material={mat.trunk}>
          <cylinderGeometry args={[0.22, 0.3, 1.0, 6]} />
        </mesh>
        <mesh castShadow position={[0, 0.95, 0]} material={mat.foliage}>
          <coneGeometry args={[0.95, 1.7, 8]} />
        </mesh>
      </group>

      <group position={[3, 1.4, -0.8]}>
        <mesh castShadow material={mat.trunk}>
          <cylinderGeometry args={[0.22, 0.3, 1.0, 6]} />
        </mesh>
        <mesh castShadow position={[0, 0.95, 0]} material={mat.foliage}>
          <coneGeometry args={[0.95, 1.7, 8]} />
        </mesh>
      </group>

      {/* ROCHERS */}
      <mesh position={[-1.6, 1.3, 1.4]} castShadow material={mat.rock}>
        <dodecahedronGeometry args={[0.45, 0]} />
      </mesh>

      <mesh position={[1.4, 1.25, 1.9]} scale={0.9} castShadow material={mat.rock}>
        <dodecahedronGeometry args={[0.35, 0]} />
      </mesh>

      <mesh position={[0.2, 1.25, -1.9]} scale={0.7} castShadow material={mat.rock}>
        <dodecahedronGeometry args={[0.35, 0]} />
      </mesh>

      {/* ORBE FLOTTANTE */}
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6} position={[0, 4.3, 0]}>
        <mesh material={mat.orb}>
          <sphereGeometry args={[0.5, 16, 16]} />
        </mesh>
      </Float>
    </group>
  );
}
