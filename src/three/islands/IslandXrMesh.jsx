// src/three/islands/IslandXrMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandXrMesh() {
  const rock = "#0f172a";
  const glow = "#22d3ee";
  const accent = "#818cf8";

  return (
    <group>
      {/* Socle sombre */}
      <mesh position={[0, -1.1, 0]} receiveShadow>
        <cylinderGeometry args={[7, 7, 0.6, 10]} />
        <meshStandardMaterial color="#020617" flatShading />
      </mesh>

      {/* Plateau rocheux */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <icosahedronGeometry args={[4.5, 0]} />
        <meshStandardMaterial color={rock} flatShading />
      </mesh>

      {/* Cristaux XR */}
      <mesh position={[1.6, 1.8, -1]} castShadow>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color={glow} flatShading />
      </mesh>
      <mesh position={[2.1, 2.4, -0.4]} scale={0.6} castShadow>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color={accent} flatShading />
      </mesh>

      {/* Arc / portail XR */}
      <mesh position={[-1.5, 2.1, 0]} castShadow>
        <torusGeometry args={[1.6, 0.15, 12, 40]} />
        <meshStandardMaterial color={accent} />
      </mesh>
      <mesh position={[-1.5, 2.1, 0]} castShadow>
        <torusGeometry args={[1.1, 0.05, 12, 40]} />
        <meshStandardMaterial color={glow} />
      </mesh>

      {/* “Casque” stylisé */}
      <mesh position={[0, 2.3, 1.8]} castShadow>
        <boxGeometry args={[1.9, 0.9, 0.8]} />
        <meshStandardMaterial color="#020617" />
      </mesh>
      <mesh position={[0, 2.35, 1.85]} castShadow>
        <boxGeometry args={[1.7, 0.6, 0.1]} />
        <meshStandardMaterial color={glow} />
      </mesh>

      {/* Orbe flottante au-dessus du portail */}
      <Float
        speed={1.8}
        rotationIntensity={0.5}
        floatIntensity={0.9}
        position={[-1.5, 3.6, 0]}
      >
        <mesh>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial
            color={glow}
            emissive={glow}
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
      </Float>
    </group>
  );
}
