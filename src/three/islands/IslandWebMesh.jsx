// src/three/islands/IslandWebMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandWebMesh() {
  const baseColor = "#0f172a"; // fond île
  const accent = "#38bdf8"; // bleu “lien / survol”
  const panel = "#1f2937"; // cartes

  return (
    <group>
      {/* Socle eau sombre / tech */}
      <mesh position={[0, -1.1, 0]} receiveShadow>
        <cylinderGeometry args={[7, 7, 0.5, 8]} />
        <meshStandardMaterial color="#020617" flatShading />
      </mesh>

      {/* Plateau polygonal */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <dodecahedronGeometry args={[4.8, 0]} />
        <meshStandardMaterial color={baseColor} flatShading />
      </mesh>

      {/* “Cards” web (type UI cards) */}
      <mesh position={[-1.6, 1.2, 0.6]} castShadow>
        <boxGeometry args={[2.4, 1.5, 0.2]} />
        <meshStandardMaterial color={panel} flatShading />
      </mesh>

      <mesh position={[1.4, 1.5, -0.4]} castShadow>
        <boxGeometry args={[1.8, 1.2, 0.2]} />
        <meshStandardMaterial color={panel} flatShading />
      </mesh>

      {/* Lignes “highlight” */}
      <mesh position={[-1.6, 1.85, 0.7]} castShadow>
        <boxGeometry args={[1.5, 0.06, 0.05]} />
        <meshStandardMaterial color={accent} />
      </mesh>

      {/* Écran vertical */}
      <mesh position={[0, 2.3, -1.8]} castShadow>
        <boxGeometry args={[2.4, 1.6, 0.18]} />
        <meshStandardMaterial color="#020617" />
      </mesh>
      <mesh position={[0, 2.32, -1.68]} castShadow>
        <boxGeometry args={[2.1, 1.3, 0.01]} />
        <meshStandardMaterial color={accent} />
      </mesh>

      {/* Notif / tooltip flottant */}
      <Float
        speed={1.6}
        rotationIntensity={0.3}
        floatIntensity={0.7}
        position={[0.8, 3.4, 0.2]}
      >
        <mesh>
          <boxGeometry args={[1.5, 0.55, 0.15]} />
          <meshStandardMaterial color={accent} />
        </mesh>
      </Float>
    </group>
  );
}
