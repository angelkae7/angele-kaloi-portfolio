// src/three/UniverseCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraRig from "./CameraRig.jsx";
import IslandsScene from "./IslandsScene.jsx";
import Fireflies from "./Fireflies.jsx";

export default function UniverseCanvas({
  onIslandClick,
  cameraTarget,
  activeIslandId,
  steps,
  onNavArrow,
  overlayOpen,
  isLight = false,
}) {
  const bg = isLight
    ? "linear-gradient(to bottom, #F5F0E8 0%, #EDE6D8 40%, #C8A87A 100%)"
    : "linear-gradient(to bottom, #0E0904 0%, #3D1F08 50%, #8B4A14 100%)";

  return (
    <Canvas
      className="w-full h-full"
      style={{ background: bg }}
      camera={{ position: [0, 15, 30], fov: 50 }}
    >
      {isLight ? (
        <>
          <ambientLight intensity={1.4} color="#FFF8F0" />
          <directionalLight position={[10, 20, 10]} intensity={1.8} color="#FFE8A0" />
          <directionalLight position={[-8, 12, -5]} intensity={0.6} color="#FFF0D0" />
          <pointLight position={[0, 8, 0]} intensity={1.2} color="#FFD080" distance={50} decay={2} />
        </>
      ) : (
        <>
          <ambientLight intensity={0.65} color="#FFD0A0" />
          <directionalLight position={[10, 20, 10]} intensity={1.3} color="#FFEEDD" />
          <pointLight position={[0, 6, 0]} intensity={0.9} color="#FFB060" distance={40} decay={2} />
        </>
      )}

      <CameraRig target={cameraTarget} />

      <Suspense fallback={null}>
        <IslandsScene
          onIslandClick={onIslandClick}
          activeIslandId={activeIslandId}
          steps={steps}
          onNavArrow={onNavArrow}
          overlayOpen={overlayOpen}
          isLight={isLight}
        />
        <Fireflies />
      </Suspense>
    </Canvas>
  );
}
