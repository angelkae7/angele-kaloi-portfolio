// src/three/IslandNavArrows.jsx
// Flèches 3D gauche / droite positionnées à côté de l'île active
// pour naviguer vers l'île précédente ou suivante.
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

// ─────────────────────────────────────────────
// Composant Arrow : une flèche (cône + tige) pointant gauche ou droite
// direction : "left" | "right"
// ─────────────────────────────────────────────
function Arrow({ worldPos, direction, destLabel, onClick }) {
  const groupRef = useRef();
  const [bx, by, bz] = worldPos;
  // Phase décalée pour que les deux flèches ne bougent pas en sync
  const phase = direction === "left" ? 0 : Math.PI;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = by + Math.sin(clock.elapsedTime * 1.7 + phase) * 0.28;
  });

  // ConeGeometry pointe vers +Y par défaut.
  // rotZ π/2  → pointe vers -X (gauche)
  // rotZ -π/2 → pointe vers +X (droite)
  const rotZ = direction === "left" ? Math.PI / 2 : -Math.PI / 2;

  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  const setCursor = (cursor) => () => {
    document.body.style.cursor = cursor;
  };

  return (
    <group
      ref={groupRef}
      position={[bx, by, bz]}
      onClick={handleClick}
      onPointerEnter={setCursor("pointer")}
      onPointerLeave={setCursor("default")}
    >
      {/* Rotation appliquée aux meshes — le groupe gère uniquement la position */}
      <group rotation={[0, 0, rotZ]}>
        {/* Pointe de la flèche */}
        <mesh position={[0, 0.55, 0]}>
          <coneGeometry args={[0.52, 1.05, 6]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={6}
            transparent
            opacity={0.88}
            toneMapped={false}
          />
        </mesh>

        {/* Tige */}
        <mesh position={[0, -0.52, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1.04, 6]} />
          <meshStandardMaterial
            color="#7dd3fc"
            emissive="#0369a1"
            emissiveIntensity={4}
            transparent
            opacity={0.65}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Label flottant — nom de la destination */}
      <Html
        position={[0, -1.6, 0]}
        center
        distanceFactor={14}
        occlude={false}
        style={{ pointerEvents: "none" }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(15,23,42,0.88)",
            border: "1px solid rgba(56,189,248,0.45)",
            borderRadius: "999px",
            padding: "2px 10px",
            fontSize: "11px",
            fontFamily: "system-ui, sans-serif",
            color: "#bae6fd",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            backdropFilter: "blur(8px)",
          }}
        >
          {direction === "left" ? "‹ " : ""}{destLabel}{direction === "right" ? " ›" : ""}
        </span>
      </Html>
    </group>
  );
}

// ─────────────────────────────────────────────
// Export principal
// islands   : tableau {id, position} (ISLANDS de IslandsScene)
// steps     : ISLAND_STEPS depuis Layout
// activeId  : id de l'île actuellement active
// onNavigate: (id) => void — callback pour déplacer la caméra
// ─────────────────────────────────────────────
export default function IslandNavArrows({ islands, steps, activeId, onNavigate }) {
  // Cleanup cursor si le composant disparaît (overlay ouvert, etc.)
  useEffect(() => {
    return () => { document.body.style.cursor = "default"; };
  }, []);

  if (!activeId || !steps?.length) return null;

  const activeIdx = steps.findIndex((s) => s.id === activeId);
  if (activeIdx === -1) return null;

  const prevStep = steps[(activeIdx - 1 + steps.length) % steps.length];
  const nextStep = steps[(activeIdx + 1) % steps.length];

  const activeIsland = islands.find((i) => i.id === activeId);
  if (!activeIsland) return null;

  const [ix, iy, iz] = activeIsland.position;
  const arrowY = iy + 3.2;   // hauteur au-dessus du sol de l'île

  return (
    <>
      <Arrow
        worldPos={[ix - 7.5, arrowY, iz]}
        direction="left"
        destLabel={prevStep.shortLabel}
        onClick={() => onNavigate(prevStep.id)}
      />
      <Arrow
        worldPos={[ix + 7.5, arrowY, iz]}
        direction="right"
        destLabel={nextStep.shortLabel}
        onClick={() => onNavigate(nextStep.id)}
      />
    </>
  );
}
