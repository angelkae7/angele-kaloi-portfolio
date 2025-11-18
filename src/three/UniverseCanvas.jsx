// src/three/UniverseCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraRig from "./CameraRig.jsx";
import IslandsScene, { ISLANDS } from "./IslandsScene.jsx";

export default function UniverseCanvas({
  onIslandClick,
  cameraTarget,
  activeIslandId,
}) {
  // 🔁 calcul île actuelle / précédente / suivante
  const currentIndex = ISLANDS.findIndex(
    (island) => island.id === activeIslandId
  );
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  const prevIsland =
    ISLANDS[(safeIndex - 1 + ISLANDS.length) % ISLANDS.length];
  const nextIsland = ISLANDS[(safeIndex + 1) % ISLANDS.length];

  const handleGoToIsland = (island) => {
    if (!island) return;
    onIslandClick({
      id: island.id,
      type: island.type,
      label: island.label,
    });
  };

  return (
    <div className="relative w-full h-full">
      {/* 🎮 Scène 3D */}
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 15, 30], fov: 50 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} />

        <CameraRig target={cameraTarget} />

        <Suspense fallback={null}>
          <IslandsScene
            onIslandClick={onIslandClick}
            activeIslandId={activeIslandId}
          />
        </Suspense>
      </Canvas>

      {/* ⬅️ Flèche gauche : île précédente (bouton minimal) */}
      {prevIsland && (
        <button
          type="button"
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10
                     flex items-center justify-center
                     h-10 w-10 rounded-full bg-slate-900/80 text-slate-100
                     border border-slate-600/40 shadow-lg shadow-black/40
                     hover:bg-slate-800/90 transition"
          onClick={() => handleGoToIsland(prevIsland)}
        >
          ‹
        </button>
      )}

      {/* ➡️ Flèche droite : île suivante (bouton minimal) */}
      {nextIsland && (
        <button
          type="button"
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10
                     flex items-center justify-center
                     h-10 w-10 rounded-full bg-slate-900/80 text-slate-100
                     border border-slate-600/40 shadow-lg shadow-black/40
                     hover:bg-slate-800/90 transition"
          onClick={() => handleGoToIsland(nextIsland)}
        >
          ›
        </button>
      )}
    </div>
  );
}
