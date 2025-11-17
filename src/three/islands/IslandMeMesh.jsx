// src/three/IslandMeMesh.jsx
import { Float } from "@react-three/drei";


export default function IslandMeMesh({
  position = [0, 0, 0],
  onClick,
  isActive = false,
  dimmed = false,
}) {
  // Couleurs : normales ou assombries si dimmed
  const sandColor = dimmed ? "#1f2933" : "#F2C66B";
  const waterColor = dimmed ? "#0f172a" : "#63C8D0";
  const hutBaseColor = dimmed ? "#4b3b2a" : "#8f7357";
  const hutRoofColor = dimmed ? "#3b2b1b" : "#69523c";
  const trunkColor = dimmed ? "#5b3a1c" : "#8B5A2B";
  const foliageColor = dimmed ? "#14532d" : "#3FA34D";
  const rockColor = dimmed ? "#735943" : "#C9A66B";

  return (
    <group position={position} onClick={onClick}>
      {/* HALO de l'île active */}
      {isActive && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
          <ringGeometry args={[6.2, 7.2, 32]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.7}
          />
        </mesh>
      )}

      {/* EAU */}
      <mesh position={[0, -1.15, 0]} receiveShadow>
        <cylinderGeometry args={[6.5, 6.5, 0.6, 24]} />
        <meshStandardMaterial
          color={waterColor}
          roughness={0.6}
          metalness={0.2}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* ÎLE */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[5, 5.4, 2.2, 14, 1]} />
        <meshStandardMaterial color={sandColor} roughness={.3} metalness={0.5} />
      </mesh>

      {/* HUTTE */}
      <group position={[0, 1.4, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[1.7, 2, 2, 10]} />
          <meshStandardMaterial color={hutBaseColor} roughness={0.6} metalness={0.2} />
        </mesh>

        {/* Porte */}
        <mesh castShadow position={[0, -0.05, 1.05]}>
          <boxGeometry args={[0.8, 1.25, 1.7]} />
          <meshStandardMaterial color={hutRoofColor} flatShading />
        </mesh>

        {/* Toit */}
        <mesh castShadow position={[0, 3, 0]}>
          <coneGeometry args={[2.2, 3.4, 12]} />
          <meshStandardMaterial color={hutRoofColor} flatShading />
        </mesh>
      </group>

      {/* ARBRES */}
      <group position={[-2.8, 1.4, -1.4]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.22, 0.3, 1.0, 6]} />
          <meshStandardMaterial color={trunkColor} flatShading />
        </mesh>
        <mesh castShadow position={[0, 0.95, 0]}>
          <coneGeometry args={[0.95, 1.7, 8]} />
          <meshStandardMaterial color={foliageColor} flatShading />
        </mesh>
      </group>

      <group position={[3, 1.4, -0.8]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.22, 0.3, 1.0, 6]} />
          <meshStandardMaterial color={trunkColor} flatShading />
        </mesh>
        <mesh castShadow position={[0, 0.95, 0]}>
          <coneGeometry args={[0.95, 1.7, 8]} />
          <meshStandardMaterial color={foliageColor} flatShading />
        </mesh>
      </group>

      {/* ROCHERS */}
      <mesh position={[-1.6, 1.3, 1.4]} castShadow>
        <dodecahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial color={rockColor} flatShading />
      </mesh>

      <mesh position={[1.4, 1.25, 1.9]} scale={0.9} castShadow>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color={rockColor} flatShading />
      </mesh>

      <mesh position={[0.2, 1.25, -1.9]} scale={0.7} castShadow>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color={rockColor} flatShading />
      </mesh>

      {/* ORBE FLOTTANTE */}
      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.6}
        position={[0, 4.3, 0]}
      >
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color={dimmed ? "#9ca3af" : "#ffffff"}
            metalness={0.35}
            roughness={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}
