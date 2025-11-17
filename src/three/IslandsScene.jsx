// src/three/IslandsScene.jsx
import IslandMeMesh from "./islands/IslandMeMesh.jsx";
import IslandWebMesh from "./islands/IslandWebMesh.jsx";
import IslandUxMesh from "./islands/IslandUxMesh.jsx";
import IslandXrMesh from "./islands/IslandXrMesh.jsx";
import IslandVideoMesh from "./islands/IslandVideoMesh.jsx";

const ISLANDS = [
  { id: "me", type: "me", label: "Île : Moi", position: [0, 0, 0], Component: IslandMeMesh },
  { id: "web", type: "web", label: "Île : Web interactif", position: [-18, 0, -6], Component: IslandWebMesh },
  { id: "ux", type: "ux", label: "Île : UX / UI", position: [16, 0, 8], Component: IslandUxMesh },
  { id: "xr", type: "xr", label: "Île : XR / VR", position: [-10, 0, 18], Component: IslandXrMesh },
  { id: "video", type: "video", label: "Île : Vidéo / arts numériques", position: [20, 0, -12], Component: IslandVideoMesh },
];

export default function IslandsScene({ onIslandClick }) {
  return (
    <>
      <fog attach="fog" args={["#020617", 22, 60]} />

      {ISLANDS.map(({ id, type, label, position, Component }) => (
        <group
          key={id}
          position={position}
          onClick={() => onIslandClick({ id, type, label })}
        >
          <Component />
        </group>
      ))}
    </>
  );
}
