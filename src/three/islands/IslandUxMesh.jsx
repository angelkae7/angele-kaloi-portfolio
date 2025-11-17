// src/three/islands/IslandUxMesh.jsx
import { Float } from "@react-three/drei";

export default function IslandUxMesh() {
  const base = "#f9fafb"; // très clair, “paper”
  const outline = "#0f172a";
  const accent = "#fb923c"; // orange “post-it”
  const secondary = "#e5e7eb";

  return (
    <group>
      {/* Socle eau pastel */}
      <mesh position={[0, -1.1, 0]} receiveShadow>
        <cylinderGeometry args={[6.5, 6.5, 0.45, 16]} />
        <meshStandardMaterial color="#e0f2fe" flatShading />
      </mesh>

      {/* Plateau “feuille / maquette” */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[7, 1.2, 5]} />
        <meshStandardMaterial color={base} flatShading />
      </mesh>

      {/* Cadre principal (grosse page wireframe) */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[5.2, 0.08, 3.6]} />
        <meshStandardMaterial color={secondary} flatShading />
      </mesh>

      {/* Bloc header */}
      <mesh position={[0, 1.3, 1.4]} castShadow>
        <boxGeometry args={[4.7, 0.05, 0.7]} />
        <meshStandardMaterial color={outline} flatShading />
      </mesh>

      {/* 3 colonnes content */}
      <mesh position={[-1.5, 1.27, 0.2]} castShadow>
        <boxGeometry args={[1.4, 0.05, 2.2]} />
        <meshStandardMaterial color={secondary} />
      </mesh>
      <mesh position={[0, 1.27, 0.2]} castShadow>
        <boxGeometry args={[1.4, 0.05, 2.2]} />
        <meshStandardMaterial color={secondary} />
      </mesh>
      <mesh position={[1.5, 1.27, 0.2]} castShadow>
        <boxGeometry args={[1.4, 0.05, 2.2]} />
        <meshStandardMaterial color={secondary} />
      </mesh>

      {/* Post-it flottant */}
      <Float
        speed={1.4}
        rotationIntensity={0.3}
        floatIntensity={0.8}
        position={[-2.2, 2.4, -0.3]}
      >
        <mesh>
          <boxGeometry args={[1.1, 0.08, 1.1]} />
          <meshStandardMaterial color={accent} flatShading />
        </mesh>
      </Float>

      {/* Petits blocs “commentaires” à côté */}
      <mesh position={[2.7, 1.8, -0.6]} castShadow>
        <boxGeometry args={[0.7, 0.05, 0.5]} />
        <meshStandardMaterial color={accent} flatShading />
      </mesh>
      <mesh position={[2.7, 1.6, 0.3]} castShadow>
        <boxGeometry args={[0.7, 0.05, 0.5]} />
        <meshStandardMaterial color="#fed7aa" flatShading />
      </mesh>
    </group>
  );
}
