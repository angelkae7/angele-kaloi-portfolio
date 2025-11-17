// src/three/islands/IslandVideoMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandVideoMesh() {
  const base = "#111827";
  const screen = "#020617";
  const accent = "#fbbf24"; // doré / lumière
  const reelMetal = "#9ca3af";

  return (
    <group>
      {/* Socle eau sombre avec reflet doré */}
      <mesh position={[0, -1.1, 0]} receiveShadow>
        <cylinderGeometry args={[6.5, 6.5, 0.5, 12]} />
        <meshStandardMaterial color="#0b1120" flatShading />
      </mesh>

      {/* Plateau */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[5.2, 5.6, 1.8, 16]} />
        <meshStandardMaterial color={base} flatShading />
      </mesh>

      {/* Écran large */}
      <mesh position={[0, 2.4, -1.6]} castShadow>
        <boxGeometry args={[3.8, 2.2, 0.2]} />
        <meshStandardMaterial color={screen} />
      </mesh>
      {/* Bande lumineuse en bas */}
      <mesh position={[0, 1.6, -1.45]} castShadow>
        <boxGeometry args={[3.6, 0.25, 0.05]} />
        <meshStandardMaterial color={accent} />
      </mesh>

      {/* Clap cinéma */}
      <group position={[-2.4, 1.7, 0.6]}>
        {/* bas du clap */}
        <mesh castShadow>
          <boxGeometry args={[1.6, 1, 0.25]} />
          <meshStandardMaterial color="#020617" />
        </mesh>
        {/* haut du clap incliné */}
        <mesh rotation={[0, 0, -0.25]} position={[0.05, 0.9, 0]}>
          <boxGeometry args={[1.6, 0.4, 0.2]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      </group>

      {/* Bobine vidéo */}
      <mesh position={[2.4, 1.5, 0.4]} castShadow>
        <cylinderGeometry args={[0.9, 0.9, 0.4, 20]} />
        <meshStandardMaterial color={reelMetal} flatShading />
      </mesh>
      <mesh position={[2.4, 1.5, 0.4]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 16]} />
        <meshStandardMaterial color="#020617" />
      </mesh>

      {/* Lumière flottante type projecteur */}
      <Float
        speed={1.6}
        rotationIntensity={0.35}
        floatIntensity={0.8}
        position={[0.6, 3.6, 0.5]}
      >
        <mesh>
          <coneGeometry args={[0.7, 1.2, 12]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>
    </group>
  );
}
