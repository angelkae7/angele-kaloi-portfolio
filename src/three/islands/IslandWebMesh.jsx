// src/three/islands/IslandWebMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandWebMesh() {

  // Palette modernisée
  const haloInner = "#0b5394";     // bleu profond
  const haloOuter = "#60a5fa";     // bleu clair glow
  const rockDark = "#1e293b";      // base
  const rockMid = "#334155";       // milieu
  const screenFrame = "#0f172a";
  const screenInner = "#eff6ff";   // plus blanc = plus visible
  const accent = "#38bdf8";

  return (
    <group>

      {/* === LIGHTS === */}
      <directionalLight intensity={1.4} position={[5, 8, 5]} castShadow />
      <ambientLight intensity={0.45} />

      {/* === HALO PART 1 (ombre) === */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[7, 7, 0.22, 32]} />
        <meshStandardMaterial
          color={haloInner}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* === HALO PART 2 (glow) === */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[7.4, 7.4, 0.15, 32]} />
        <meshStandardMaterial
          color={haloOuter}
          roughness={0.35}
        />
      </mesh>

      {/* === BASE DE L’ÎLE === */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <cylinderGeometry args={[5.5, 6.1, 1, 12]} />
        <meshStandardMaterial color={rockDark} flatShading />
      </mesh>

      {/* === NIVEAU 2 === */}
      <mesh position={[0, 0.1, 0]} rotation={[0, Math.PI / 10, 0]} castShadow>
        <cylinderGeometry args={[4.3, 4.8, 0.5, 10]} />
        <meshStandardMaterial color={rockMid} flatShading />
      </mesh>

      {/* === GRAND ÉCRAN === */}
      <mesh position={[0, 2, -1.3]} castShadow>
        <boxGeometry args={[3.6, 2.3, 0.22]} />
        <meshStandardMaterial color={screenFrame} />
      </mesh>

      <mesh position={[0, 2.05, -1.15]} castShadow>
        <boxGeometry args={[3.2, 1.9, 0.05]} />
        <meshStandardMaterial color={screenInner} />
      </mesh>

      {/* === LIGNES UI === */}
      <mesh position={[-0.8, 2.35, -1]} castShadow>
        <boxGeometry args={[1.3, 0.1, 0.03]} />
        <meshStandardMaterial color={accent} />
      </mesh>

      <mesh position={[0.6, 2.1, -1]} castShadow>
        <boxGeometry args={[0.9, 0.1, 0.03]} />
        <meshStandardMaterial color={accent} />
      </mesh>

      {/* === BLOC UI AU SOL (version panneau) === */}
      <mesh
        position={[-1.4, 0.9, 0.4]}
        rotation={[-0.15, 0.3, 0]}
        castShadow
      >
        <boxGeometry args={[2.3, 1.3, 0.12]} />
        <meshStandardMaterial color={rockDark} flatShading />
      </mesh>

      <mesh position={[-1.4, 1.1, 0.5]} castShadow>
        <boxGeometry args={[1.5, 0.08, 0.06]} />
        <meshStandardMaterial color={accent} />
      </mesh>

      {/* === NOTIFICATION FLOAT === */}
      <Float
        speed={1.3}
        rotationIntensity={0.2}
        floatIntensity={1}
        position={[1, 2.6, 0.4]}
      >
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.55, 0.15]} />
          <meshStandardMaterial color={accent} />
        </mesh>
      </Float>

    </group>
  );
}
