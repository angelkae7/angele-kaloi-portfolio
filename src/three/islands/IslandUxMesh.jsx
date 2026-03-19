// src/three/islands/IslandUxMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandUxMesh() {
  // Plateau sombre = cohérent avec les autres îles
  const rockDeep = "#111827";
  const rockMid = "#1f2937";
  const rockTop = "#273549";

  // UI
  const frame = "#020617";    // cadre écrans
  const board = "#e5e7eb";    // fond maquette (gris clair, pas blanc)
  const line = "#cbd5e1";     // éléments wireframe
  const postit = "#fb923c";   // post-it
  const postitSoft = "#fed7aa";
  const cursor = "#38bdf8";   // curseur / highlight

  return (
    <group>
      {/* LUMIÈRES DOUCES */}
      <directionalLight position={[4, 7, 3]} intensity={1.1} castShadow />
      <ambientLight intensity={0.4} />

      {/* === 1. PLATEAU DE L’ÎLE === */}
      <mesh position={[0, -0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[5.2, 5.8, 1, 8]} />
        <meshStandardMaterial color={rockDeep} flatShading />
      </mesh>

      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[4.5, 5, 0.55, 8]} />
        <meshStandardMaterial color={rockMid} flatShading />
      </mesh>

      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[3.6, 4, 0.35, 8]} />
        <meshStandardMaterial color={rockTop} flatShading />
      </mesh>

      {/* === 2. GRAND ÉCRAN “DESKTOP” (MAQUETTE PRINCIPALE) === */}
      <group position={[0, 1.8, -1.2]} rotation={[-0.05, 0, 0]}>
        {/* cadre */}
        <mesh castShadow>
          <boxGeometry args={[3.8, 2.4, 0.18]} />
          <meshStandardMaterial color={frame} />
        </mesh>
        {/* fond maquette */}
        <mesh position={[0, 0.03, 0.09]} castShadow>
          <boxGeometry args={[3.5, 2.1, 0.05]} />
          <meshStandardMaterial color={board} />
        </mesh>

        {/* header */}
        <mesh position={[0, 0.1, 0.9]} castShadow>
          <boxGeometry args={[3.1, 0.15, 0.05]} />
          <meshStandardMaterial color={line} />
        </mesh>

        {/* 3 “cartes” / colonnes */}
        <mesh position={[-1, 0.05, 0.2]} castShadow>
          <boxGeometry args={[0.8, 0.9, 0.04]} />
          <meshStandardMaterial color={line} />
        </mesh>
        <mesh position={[0, 0.05, 0.2]} castShadow>
          <boxGeometry args={[0.8, 0.9, 0.04]} />
          <meshStandardMaterial color={line} />
        </mesh>
        <mesh position={[1, 0.05, 0.2]} castShadow>
          <boxGeometry args={[0.8, 0.9, 0.04]} />
          <meshStandardMaterial color={line} />
        </mesh>
      </group>

      {/* === 3. ÉCRAN MOBILE À CÔTÉ (RESPONSIVE DESIGN) === */}
      <group position={[1.8, 1.4, -0.3]} rotation={[-0.05, 0.2, 0]}>
        {/* corps du téléphone */}
        <mesh castShadow>
          <boxGeometry args={[0.9, 1.7, 0.16]} />
          <meshStandardMaterial color={frame} />
        </mesh>
        {/* écran */}
        <mesh position={[0, 0.02, 0.08]} castShadow>
          <boxGeometry args={[0.72, 1.45, 0.04]} />
          <meshStandardMaterial color={board} />
        </mesh>
        {/* barre header mobile */}
        <mesh position={[0, 0.05, 0.55]} castShadow>
          <boxGeometry args={[0.6, 0.14, 0.04]} />
          <meshStandardMaterial color={line} />
        </mesh>
        {/* petit bloc de contenu */}
        <mesh position={[0, 0.04, 0.1]} castShadow>
          <boxGeometry args={[0.6, 0.3, 0.04]} />
          <meshStandardMaterial color={line} />
        </mesh>
      </group>

      {/* === 4. CURSEUR / POINTER UX === */}
      <mesh position={[-0.9, 1.5, -0.6]} rotation={[0, 0.4, 0]} castShadow>
        {/* triangle type curseur (pyramide plate) */}
        <coneGeometry args={[0.35, 0.7, 3]} />
        <meshStandardMaterial color={cursor} flatShading />
      </mesh>

      {/* === 5. POST-IT FLOTTANT (IDÉES / TESTS) === */}
      <Float
        speed={1.2}
        floatIntensity={0.9}
        rotationIntensity={0.25}
        position={[-2.1, 2.4, -0.2]}
      >
        <mesh castShadow>
          <boxGeometry args={[1.1, 0.08, 1.1]} />
          <meshStandardMaterial color={postit} />
        </mesh>
      </Float>

      {/* Petites notes collées sur le bord de la maquette */}
      <mesh position={[2.3, 1.8, 0.2]} castShadow>
        <boxGeometry args={[0.8, 0.07, 0.5]} />
        <meshStandardMaterial color={postit} />
      </mesh>

      <mesh position={[2.1, 1.6, 0.7]} castShadow>
        <boxGeometry args={[0.7, 0.07, 0.45]} />
        <meshStandardMaterial color={postitSoft} />
      </mesh>
    </group>
  );
}
