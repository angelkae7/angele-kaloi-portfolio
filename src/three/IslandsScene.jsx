// src/three/IslandsScene.jsx
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import IslandMeMesh from "./islands/IslandMeMesh.jsx";
import IslandWebMesh from "./islands/IslandWebMesh.jsx";
import IslandUxMesh from "./islands/IslandUxMesh.jsx";
import IslandXrMesh from "./islands/IslandXrMesh.jsx";
import IslandVideoMesh from "./islands/IslandVideoMesh.jsx";
import IslandNavArrows from "./IslandNavArrows.jsx";

export const ISLANDS = [
  { id: "me",    type: "me",    label: "Moi",              position: [0,    0,   0]  , Component: IslandMeMesh    },
  { id: "web",   type: "web",   label: "Web interactif",   position: [-18,  0,  -6]  , Component: IslandWebMesh   },
  { id: "ux",    type: "ux",    label: "UX / UI",          position: [16,   0,   8]  , Component: IslandUxMesh    },
  { id: "xr",    type: "xr",    label: "XR / VR",          position: [-10, -2,  15]  , Component: IslandXrMesh    },
  { id: "video", type: "video", label: "Vidéo / Arts",     position: [20,   0, -12]  , Component: IslandVideoMesh },
];

export default function IslandsScene({
  onIslandClick,
  activeIslandId,
  steps,
  onNavArrow,
  overlayOpen,
}) {
  return (
    <>
      <fog attach="fog" args={["#020617", 15, 60]} />

      <ambientLight intensity={0.42} />
      <directionalLight intensity={1.2} position={[5, 8, 5]} castShadow />

      {ISLANDS.map(({ id, type, label, position, Component }) => {
        const isActive = !activeIslandId || activeIslandId === id;

        return (
          <group
            key={id}
            position={position}
            onClick={() => onIslandClick({ id, type, label })}
          >
            <Component />

            {/* Halo néon sous l'île active */}
            {isActive && (
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
                <ringGeometry args={[6.2, 7.2, 64]} />
                <meshStandardMaterial
                  color="#0069ff"
                  emissive="#0069ff"
                  emissiveIntensity={10}
                  transparent
                  opacity={0.4}
                  toneMapped={false}
                  roughness={0.9}
                  metalness={0.1}
                />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Flèches 3D de navigation — masquées quand un overlay est ouvert */}
      {!overlayOpen && (
        <IslandNavArrows
          islands={ISLANDS}
          steps={steps}
          activeId={activeIslandId}
          onNavigate={onNavArrow}
        />
      )}

      <EffectComposer>
        <Bloom
          intensity={1}
          mipmapBlur
          luminanceThreshold={0.6}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </>
  );
}
