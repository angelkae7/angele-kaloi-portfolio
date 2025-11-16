// src/three/IslandMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandMesh({ position = [0, 0, 0], onClick }) {
  // Couleurs inspirées de ton image
  const sandColor = "#F2C66B";
  const waterColor = "#63C8D0";
  const hutBaseColor = "#8f7357";
  const hutRoofColor = "#69523c";
  const trunkColor = "#8B5A2B";
  const foliageColor = "#3FA34D";
  const rockColor = "#C9A66B";

  return (
    <group position={position} onClick={onClick}>
      {/* ===== EAU (anneau autour de l'île) ===== */}
      <mesh position={[0, -1.15, 0]} receiveShadow>
        {/* Rayon un peu plus grand que l'île, hauteur fine */}
        <cylinderGeometry args={[6.5, 6.5, 0.6, 24]} />
        <meshStandardMaterial
          color={waterColor}
          flatShading
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* ===== ÎLE ===== */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        {/* Disque épais lowpoly → facettes visibles */}
        <cylinderGeometry args={[5, 5.4, 2.2, 14, 1]} />
        <meshStandardMaterial color={sandColor} flatShading />
      </mesh>

            {/* ===== HUTTE (centre de l'île) ===== */}
      <group position={[0, 1.4, 0]}>
        {/* Base de la hutte – un peu plus basse */}
        <mesh castShadow>
          <cylinderGeometry args={[1.7, 2, 2, 10]} />
          <meshStandardMaterial color={hutBaseColor} flatShading />
        </mesh>

        {/* Porte */}
        <mesh
          castShadow
          position={[0, -0.05, 1.05]}
        >
          <boxGeometry args={[0.8, 1.25, 1.7]} />
          <meshStandardMaterial color={hutRoofColor} flatShading />
        </mesh>

        {/* Toit conique – plus haut et plus pointu */}
        <mesh castShadow position={[0, 3, 0]}>
          {/* radius légèrement plus petit, hauteur plus grande */}
          <coneGeometry args={[2.2, 3.4, 12]} />
          <meshStandardMaterial color={hutRoofColor} flatShading />
        </mesh>
      </group>


      {/* ===== ARBRE 1 ===== */}
      <group position={[-2.8, 1.4, -1.4]}>
        {/* tronc */}
        <mesh castShadow>
          <cylinderGeometry args={[0.22, 0.3, 1.0, 6]} />
          <meshStandardMaterial color={trunkColor} flatShading />
        </mesh>
        {/* feuillage */}
        <mesh castShadow position={[0, 0.95, 0]}>
          <coneGeometry args={[0.95, 1.7, 8]} />
          <meshStandardMaterial color={foliageColor} flatShading />
        </mesh>
      </group>

      {/* ===== ARBRE 2 ===== */}
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

      {/* ===== ROCHERS ===== */}
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

      {/* ===== PETITE ORBE FLOTTANTE (facultatif, “magie” de l'île) ===== */}
      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.6}
        position={[0, 4.3, 0]}
      >
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.3}
            roughness={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
}
