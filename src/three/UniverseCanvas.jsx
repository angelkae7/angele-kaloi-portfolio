// src/three/UniverseCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraRig from "./CameraRig.jsx";
import IslandsScene from "./IslandsScene.jsx";
import Fireflies from "./Fireflies.jsx"; // 👈 IMPORTANT

export default function UniverseCanvas({
  onIslandClick,
  cameraTarget,
  activeIslandId,
  showLabels,
}) {
  return (
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
          showLabels={showLabels}
        />
        <Fireflies /> {/* ✨ lucioles */}
      </Suspense>
    </Canvas>
  );
}
