// src/three/IslandsScene.jsx
import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { useSound } from "../sound/useSound.js";
import { Html } from "@react-three/drei";
import { MathUtils } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import IslandMeMesh from "./islands/IslandMeMesh.jsx";
import IslandWebMesh from "./islands/IslandWebMesh.jsx";
import IslandUxMesh from "./islands/IslandUxMesh.jsx";
import IslandXrMesh from "./islands/IslandXrMesh.jsx";
import IslandVideoMesh from "./islands/IslandVideoMesh.jsx";
import IslandNavArrows from "./IslandNavArrows.jsx";

const ISLANDS = [
  { id: "me",    type: "me",    label: "Moi",            shortLabel: "À propos", position: [0,    0,   0],  Component: IslandMeMesh    },
  { id: "web",   type: "web",   label: "Web interactif", shortLabel: "Web",       position: [-18,  0,  -6],  Component: IslandWebMesh   },
  { id: "ux",    type: "ux",    label: "UX / UI",        shortLabel: "UX / UI",  position: [16,   0,   8],  Component: IslandUxMesh    },
  { id: "xr",    type: "xr",    label: "XR / VR",        shortLabel: "XR / VR", position: [-10, -2,  15],  Component: IslandXrMesh    },
  { id: "video", type: "video", label: "Vidéo / Arts",   shortLabel: "Vidéo",    position: [20,   0, -12],  Component: IslandVideoMesh },
];

// ─── Label HTML flottant — opacity pilotée par spanRef (pas de state React) ──
function HoverLabel({ label, spanRef }) {
  return (
    <span
      ref={spanRef}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        background: "rgba(14,9,4,0.90)",
        border: "1px solid rgba(200,66,26,0.55)",
        borderRadius: "999px",
        padding: "4px 14px",
        fontSize: "11px",
        fontFamily: "system-ui, sans-serif",
        fontWeight: 600,
        color: "#F5EDE0",
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        opacity: 0,
        transition: "opacity 0.18s ease",
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      <span style={{ fontSize: "8px", color: "#C8421A", lineHeight: 1 }}>●</span>
      {label}
    </span>
  );
}

// ─── Groupe île avec hover : scale + flottement + label ───────────────────────
function IslandGroup({ id, type, label, shortLabel, position, Component, isActive, overlayOpen, onIslandClick, onHoverSfx }) {
  const groupRef  = useRef();
  const labelRef  = useRef();
  const hovered   = useRef(false);
  const scale     = useRef(1);
  const yOffset   = useRef(0);
  const showLabel = id !== "me"; // la bulle de dialogue remplace le label sur l'île principale

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const interactive = !overlayOpen;
    const isHovered   = interactive && hovered.current;

    scale.current   = MathUtils.lerp(scale.current,   isHovered ? 1.055 : 1.0,  delta * 7);
    yOffset.current = MathUtils.lerp(yOffset.current, isHovered ? 0.30  : 0.0,  delta * 7);

    groupRef.current.scale.setScalar(scale.current);
    const [px, , pz] = position;
    groupRef.current.position.set(px, yOffset.current, pz);

    if (labelRef.current) {
      labelRef.current.style.opacity = isHovered ? "1" : "0";
    }
  });

  const onEnter = useCallback(() => {
    if (overlayOpen) return;
    if (!hovered.current) onHoverSfx?.(); // son une seule fois à l'entrée
    hovered.current = true;
    document.body.style.cursor = "pointer";
  }, [overlayOpen, onHoverSfx]);

  const onLeave = useCallback(() => {
    hovered.current = false;
    document.body.style.cursor = "default";
  }, []);

  const onClick = useCallback(() => {
    onIslandClick({ id, type, label });
  }, [id, type, label, onIslandClick]);

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={onClick}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      <Component />

      {/* Halo sous l'île active */}
      {isActive && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
          <ringGeometry args={[6.2, 7.2, 64]} />
          <meshStandardMaterial
            color="#C8421A"
            emissive="#C8421A"
            emissiveIntensity={12}
            transparent
            opacity={0.4}
            toneMapped={false}
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>
      )}

      {/* Label hover — absent sur l'île Moi (bulle de dialogue) et si overlay ouvert */}
      {showLabel && !overlayOpen && (
        <Html
          position={[0, 5.4, 0]}
          center
          distanceFactor={16}
          occlude={false}
          style={{ pointerEvents: "none" }}
        >
          <HoverLabel label={shortLabel} spanRef={labelRef} />
        </Html>
      )}
    </group>
  );
}

// ─── Scène principale ─────────────────────────────────────────────────────────
export default function IslandsScene({
  onIslandClick,
  activeIslandId,
  steps,
  onNavArrow,
  overlayOpen,
  isLight = false,
}) {
  const { playFx } = useSound();
  const playHover = useCallback(() => playFx("hover"), [playFx]);
  const fogColor = isLight ? "#EDE6D8" : "#0E0904";
  const fogNear  = isLight ? 20 : 15;
  const fogFar   = isLight ? 70 : 60;

  return (
    <>
      <fog attach="fog" args={[fogColor, fogNear, fogFar]} />

      {ISLANDS.map(({ id, type, label, shortLabel, position, Component }) => (
        <IslandGroup
          key={id}
          id={id}
          type={type}
          label={label}
          shortLabel={shortLabel}
          position={position}
          Component={Component}
          isActive={!activeIslandId || activeIslandId === id}
          overlayOpen={overlayOpen}
          onIslandClick={onIslandClick}
          onHoverSfx={playHover}
        />
      ))}

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
          intensity={isLight ? 0.4 : 1.2}
          mipmapBlur
          luminanceThreshold={isLight ? 0.85 : 0.55}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </>
  );
}
