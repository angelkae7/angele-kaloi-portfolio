// src/three/islands/IslandXrMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandXrMesh() {
  // même base que les autres îles
  const rockDeep = "#111827";
  const rockMid = "#1f2937";
  const rockTop = "#273549";

  const body = "#020617";       // plastique casque / manettes
  const detail = "#0b1120";
  const accent = "#38bdf8";     // reflets XR
  const accentSoft = "#a5f3fc"; // halo léger

  return (
    <group>
      {/* lumières douces */}
      <directionalLight position={[5, 7, 4]} intensity={1.1} castShadow />
      <ambientLight intensity={0.4} />

      {/* === PLATEAU XR / VR === */}
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

      {/* === CASQUE VR AU CENTRE === */}
      <group position={[0, 1.2, -0.5]} rotation={[0, 0, 0]}>
        {/* corps du casque */}
        <mesh castShadow>
          <boxGeometry args={[2.6, 1.1, 1.4]} />
          <meshStandardMaterial color={body} />
        </mesh>

        {/* face avant (lèger biseau) */}
        <mesh position={[0, 0, 0.65]} castShadow>
          <boxGeometry args={[2.4, 0.9, 0.3]} />
          <meshStandardMaterial color={detail} />
        </mesh>

        {/* deux “lentilles” bleues */}
        <mesh position={[-0.6, 0.1, 0.8]} castShadow>
          <cylinderGeometry args={[0.25, 0.25, 0.08, 16]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.18}
          />
        </mesh>
        <mesh position={[0.6, 0.1, 0.8]} castShadow>
          <cylinderGeometry args={[0.25, 0.25, 0.08, 16]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.18}
          />
        </mesh>

        {/* bandeau supérieur */}
        <mesh position={[0, 0.7, 0]} castShadow>
          <boxGeometry args={[2.2, 0.25, 0.6]} />
          <meshStandardMaterial color={detail} />
        </mesh>
      </group>

      {/* === MANETTE DROITE === */}
      <group position={[1.9, 0.9, 0.4]} rotation={[-0.3, -0.4, 0.2]}>
        {/* poignée */}
        <mesh castShadow>
          <boxGeometry args={[0.4, 1.1, 0.4]} />
          <meshStandardMaterial color={body} />
        </mesh>
        {/* anneau */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <torusGeometry args={[0.45, 0.08, 8, 18]} />
          <meshStandardMaterial color={detail} />
        </mesh>
        {/* petit bouton bleu */}
        <mesh position={[0.1, 0.2, 0.2]} castShadow>
          <boxGeometry args={[0.18, 0.12, 0.06]} />
          <meshStandardMaterial color={accent} />
        </mesh>
      </group>

      {/* === MANETTE GAUCHE === */}
      <group position={[-1.9, 0.9, 0.4]} rotation={[-0.3, 0.4, -0.2]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 1.1, 0.4]} />
          <meshStandardMaterial color={body} />
        </mesh>
        <mesh position={[0, 0.6, 0]} castShadow>
          <torusGeometry args={[0.45, 0.08, 8, 18]} />
          <meshStandardMaterial color={detail} />
        </mesh>
        <mesh position={[-0.1, 0.2, 0.2]} castShadow>
          <boxGeometry args={[0.18, 0.12, 0.06]} />
          <meshStandardMaterial color={accent} />
        </mesh>
      </group>

      {/* === ORBE / HOLOGRAMME FLOTTANT XR === */}
      <Float
        speed={1.4}
        floatIntensity={0.9}
        rotationIntensity={0.4}
        position={[0.2, 2.6, 0.2]}
      >
        <group>
          {/* sphère luminescente */}
          <mesh castShadow>
            <icosahedronGeometry args={[0.7, 0]} />
            <meshStandardMaterial
              color={accentSoft}
              emissive={accentSoft}
              emissiveIntensity={0.35}
            />
          </mesh>
          {/* petit anneau sous l’orbe */}
          <mesh position={[0, -0.7, 0]}>
            <torusGeometry args={[0.6, 0.04, 8, 24]} />
            <meshStandardMaterial color={accent} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
