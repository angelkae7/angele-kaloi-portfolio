// FINAL IslandVideoMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandVideoMesh() {
  const rockDeep = "#1b2636";
  const rockMid = "#2a3447";
  const rockTop = "#3c4a5f";

  const screenFrame = "#0f172a";
  const screenInner = "#fff7cc";
  const accent = "#fbbf24";

  // Métal froid (moins blanc)
  const metal = "#bfc7d5";
  const metalDark = "#4a5562";

  return (
    <group>
      {/* Lights */}
      <directionalLight position={[5, 7, 4]} intensity={1} castShadow />
      <ambientLight intensity={0.42} />

      {/* === NIVEAU 1 === */}
      <mesh position={[0, -0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[5.8, 6.3, 0.9, 8]} />
        <meshStandardMaterial color={rockDeep} flatShading />
      </mesh>

      {/* === NIVEAU 2 === */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[4.9, 5.2, 0.55, 8]} />
        <meshStandardMaterial color={rockMid} flatShading />
      </mesh>

      {/* === NIVEAU 3 === */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[3.8, 4.1, 0.35, 8]} />
        <meshStandardMaterial color={rockTop} flatShading />
      </mesh>

      {/* === ÉCRAN === */}
      <group position={[0, 1.85, -1.25]} rotation={[-0.08, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[3.6, 2.1, 0.2]} />
          <meshStandardMaterial color={screenFrame} />
        </mesh>

        <mesh position={[0, 0.05, 0.11]} castShadow>
          <boxGeometry args={[3.25, 1.75, 0.04]} />
          <meshStandardMaterial
            color={screenInner}
            emissive={accent}
            emissiveIntensity={0.085}  // ↓ réduit
          />
        </mesh>

        <mesh position={[0, -0.9, 0.12]} castShadow>
          <boxGeometry args={[3.25, 0.22, 0.05]} />
          <meshStandardMaterial color={accent} />
        </mesh>
      </group>

      {/* === CLAP CINEMA === */}
      <group position={[-2, 0.95, 0.2]}>
        <mesh castShadow>
          <boxGeometry args={[1.45, 0.9, 0.25]} />
          <meshStandardMaterial color={screenFrame} />
        </mesh>
        <mesh rotation={[0, 0, -0.32]} position={[0.1, 0.8, 0]}>
          <boxGeometry args={[1.45, 0.4, 0.22]} />
          <meshStandardMaterial color={rockDeep} />
        </mesh>
      </group>

      {/* === BOBINE — VERSION MÉTALLIQUE PRO === */}
      <group position={[2, 1.02, 0.3]}>
        <mesh castShadow>
          <cylinderGeometry args={[1, 1, 0.4, 24]} />
          <meshStandardMaterial
            color={metal}
            metalness={0.4}
            roughness={0.3}
            flatShading
          />
        </mesh>

        <mesh castShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.45, 16]} />
          <meshStandardMaterial color={metalDark} />
        </mesh>
      </group>

      {/* === PROJECTEUR FLOTTANT — Version douce === */}
      <Float
        speed={1.1}
        floatIntensity={0.55}
        rotationIntensity={0.25}
        position={[2, 3.1, -0.25]}
      >
        <mesh rotation={[-Math.PI / 3.3, 0, -1]}>
          <coneGeometry args={[0.7, 1.5, 16]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.13}  // ↓ drastiquement
            transparent
            opacity={0.55}
          />
        </mesh>
      </Float>
      {/* === PROJECTEUR FLOTTANT — Version douce === */}
      <Float
        speed={1.1}
        floatIntensity={0.55}
        rotationIntensity={0.25}
        position={[-3, 3.1, -0.25]}
      >
        <mesh rotation={[-Math.PI / 1.3, 0, -1]}>
          <coneGeometry args={[0.7, -1.5, 16]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.3}  // ↓ drastiquement
            transparent
            opacity={0.55}
          />
        </mesh>
      </Float>
    </group>
  );
}
