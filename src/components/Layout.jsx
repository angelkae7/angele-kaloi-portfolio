// src/components/Layout.jsx
import { useEffect, useState, useCallback } from "react";
import UniverseCanvas from "../three/UniverseCanvas.jsx";

import IslandMeOverlay from "./IslandMeOverlay.jsx";
import IslandMeBubble from "./IslandMeBubble.jsx";
import TutorialOverlay from "./TutorialOverlay.jsx";
import IslandNameBar from "./IslandNameBar.jsx";
import HudTopBar from "./HudTopBar.jsx";
import DomainOverlay from "./DomainOverlay.jsx";
import IslandNavigator from "./IslandNavigator.jsx";
import IslandClickHint from "./IslandClickHint.jsx";
import ContactDock from "./ContactDock.jsx";
import AmbientSoundToggle from "./AmbientSoundToggle.jsx";

import {
  webProjects,
  uxProjects,
  xrProjects,
  videoProjects,
} from "../data/projects.js";

const CAMERA_TARGETS = {
  me: { position: [0, 8, 14], lookAt: [0, 1.5, 0] },
  web: { position: [-18, 7, 10], lookAt: [-18, 1.8, -6] },
  ux: { position: [18, 7, 14], lookAt: [16, 1.8, 8] },
  xr: { position: [-10, 8, 22], lookAt: [-10, 2, 18] },
  video: { position: [22, 7, -2], lookAt: [20, 1.8, -12] },
};

const ISLAND_STEPS = [
  { id: "me", type: "me", label: "Île : Moi", shortLabel: "Moi" },
  { id: "web", type: "web", label: "Île : Web interactif", shortLabel: "Web" },
  { id: "ux", type: "ux", label: "Île : UX / UI", shortLabel: "UX/UI" },
  { id: "xr", type: "xr", label: "Île : XR / VR", shortLabel: "XR/VR" },
  {
    id: "video",
    type: "video",
    label: "Île : Vidéo & arts numériques",
    shortLabel: "Vidéo",
  },
];

export default function Layout() {
  const [showBubble, setShowBubble] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null); // "me" | "web" | "ux" | "xr" | "video" | null
  const [selectedIsland, setSelectedIsland] = useState(ISLAND_STEPS[0]);
  const [cameraTarget, setCameraTarget] = useState(CAMERA_TARGETS.me);
  const [showClickHint, setShowClickHint] = useState(false);

  // apparition de la bulle de présentation
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 650);
    return () => clearTimeout(timer);
  }, []);

  const openOverlayForIsland = (island) => {
    setSelectedIsland(island);
    setShowBubble(false);
    setShowClickHint(false);

    const target = CAMERA_TARGETS[island.id] || CAMERA_TARGETS.me;
    setCameraTarget(target);

    setActiveOverlay(island.type); // "me", "web", "ux", "xr", "video"
  };

  // clic sur l'île 3D → ouvre l'overlay
  const handleIslandClick = (island) => {
    openOverlayForIsland(island);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);

    if (selectedIsland.id === "me") {
      setTimeout(() => setShowBubble(true), 250);
    }
  };

  // Tab label click in navigator → opens overlay directly (fix 1)
  const handleSelectIslandFromNav = (id) => {
    const island = ISLAND_STEPS.find((step) => step.id === id);
    if (!island) return;
    openOverlayForIsland(island);
  };

  // Arrow click in navigator → moves camera only, shows floating hint (fix 2)
  const handleArrowNavigate = (id) => {
    const island = ISLAND_STEPS.find((step) => step.id === id);
    if (!island) return;

    setSelectedIsland(island);
    setActiveOverlay(null);

    const target = CAMERA_TARGETS[island.id] || CAMERA_TARGETS.me;
    setCameraTarget(target);

    setShowBubble(island.id === "me");
    setShowClickHint(true);
  };

  const dismissClickHint = useCallback(() => setShowClickHint(false), []);

  const showLabels = !activeOverlay;

  return (
    <div className="relative w-screen h-screen bg-slate-950 overflow-hidden">
      {/* Scène 3D */}
      <UniverseCanvas
        onIslandClick={handleIslandClick}
        cameraTarget={cameraTarget}
        activeIslandId={selectedIsland.id}
        showLabels={showLabels}
      />

      {/* HUD fixe */}
      <HudTopBar />
      <TutorialOverlay />
      <AmbientSoundToggle />
      <ContactDock />

      {/* Nom de l'île active (uniquement quand aucun overlay n'est ouvert) */}
      {!activeOverlay && <IslandNameBar label={selectedIsland.label} />}

      {/* Floating hint after arrow navigation — disappears after 3 s or on island click */}
      {showClickHint && !activeOverlay && (
        <IslandClickHint onDismiss={dismissClickHint} />
      )}

      {/* Bulle de présentation, seulement sur l'île Moi et sans overlay */}
      {showBubble && !activeOverlay && selectedIsland.id === "me" && (
        <IslandMeBubble onClick={() => openOverlayForIsland(ISLAND_STEPS[0])} />
      )}

      {/* Overlays */}
      {activeOverlay === "me" && (
        <IslandMeOverlay onClose={handleCloseOverlay} />
      )}

      {activeOverlay === "web" && (
        <DomainOverlay
          title="ÎLE : WEB INTERACTIF"
          tagline="Interfaces web vivantes, cartes interactives et expériences front."
          projects={webProjects}
          onClose={handleCloseOverlay}
        />
      )}

      {activeOverlay === "ux" && (
        <DomainOverlay
          title="ÎLE : UX / UI"
          tagline="Stratégie, parcours utilisateurs et interfaces centrées sur les besoins."
          projects={uxProjects}
          onClose={handleCloseOverlay}
        />
      )}

      {activeOverlay === "xr" && (
        <DomainOverlay
          title="ÎLE : XR / VR"
          tagline="Expériences immersives en 3D : narration, interactions et présence."
          projects={xrProjects}
          onClose={handleCloseOverlay}
        />
      )}

      {activeOverlay === "video" && (
        <DomainOverlay
          title="ÎLE : VIDÉO & ARTS NUMÉRIQUES"
          tagline="Images, rythme et narration pour donner une voix aux projets."
          projects={videoProjects}
          onClose={handleCloseOverlay}
        />
      )}

      {/* Navigation / progression entre les îles */}
      <IslandNavigator
        steps={ISLAND_STEPS}
        activeId={selectedIsland.id}
        onSelect={handleSelectIslandFromNav}
        onArrowClick={handleArrowNavigate}
        compact={!!activeOverlay}
      />
    </div>
  );
}
