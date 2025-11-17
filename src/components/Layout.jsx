// src/components/Layout.jsx
import { useEffect, useState } from "react";
import UniverseCanvas from "../three/UniverseCanvas.jsx";
import IslandMeOverlay from "./IslandMeOverlay.jsx";
import IslandMeBubble from "./IslandMeBubble.jsx";
import HelpChip from "./HelpChip.jsx";
import IslandNameBar from "./IslandNameBar.jsx";
import HudTopBar from "./HudTopBar.jsx";
import DomainOverlay from "./DomainOverlay.jsx";
import IslandNavigator from "./IslandNavigator.jsx";

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
  const hasOverlay = activeOverlay !== null;


  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 650);
    return () => clearTimeout(timer);
  }, []);

  const openOverlayForIsland = (island) => {
    setSelectedIsland(island);
    setShowBubble(false);

    const target = CAMERA_TARGETS[island.id] || CAMERA_TARGETS.me;
    setCameraTarget(target);

    setActiveOverlay(island.type); // "me", "web", "ux", "xr", "video"
  };

  const handleIslandClick = (island) => {
    openOverlayForIsland(island);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
    if (selectedIsland.id === "me") {
      setTimeout(() => setShowBubble(true), 250);
    }
  };

  // 👉 appelé par le menu de navigation
  const handleSelectIslandFromNav = (id) => {
    const island = ISLAND_STEPS.find((step) => step.id === id);
    if (!island) return;

    // Si on clique une première fois sur une île différente :
    // -> on déplace juste la caméra, sans overlay
    if (selectedIsland.id !== id) {
      setSelectedIsland(island);
      setActiveOverlay(null);

      const target = CAMERA_TARGETS[island.id] || CAMERA_TARGETS.me;
      setCameraTarget(target);

      // bulle seulement sur l'île Moi, si aucun overlay
      if (island.id === "me") {
        setShowBubble(true);
      } else {
        setShowBubble(false);
      }
      return;
    }

    // Si on reclique sur l'île déjà sélectionnée ET qu'il n'y a pas encore d'overlay :
    // -> cette fois on ouvre l'overlay
    if (!activeOverlay) {
      openOverlayForIsland(island);
      return;
    }

    // Si l'overlay est déjà ouvert et qu'on reclique sur la même île via le menu,
    // tu peux soit fermer, soit ne rien faire. Là on ne fait rien.
  };


  return (
    <div className="relative w-screen h-screen bg-slate-950 overflow-hidden">
      <UniverseCanvas
        onIslandClick={handleIslandClick}
        cameraTarget={cameraTarget}
        activeIslandId={selectedIsland.id}
        showLabels={!hasOverlay}
      />


      <HudTopBar />
      <HelpChip />

      {/* Nom de l'île active */}
      {/* Nom de l'île seulement quand aucun overlay n'est ouvert */}
      {!activeOverlay && (
        <IslandNameBar label={selectedIsland.label} />
      )}

      {/* Bulle de présentation uniquement sur l’île Moi quand aucun overlay n’est ouvert */}
      {showBubble && !activeOverlay && selectedIsland.id === "me" && (
        <IslandMeBubble
          onClick={() => openOverlayForIsland(ISLAND_STEPS[0])}
        />
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

      {/* 🚀 Navigation / progression entre les îles */}
      <IslandNavigator
        steps={ISLAND_STEPS}
        activeId={selectedIsland.id}
        onSelect={handleSelectIslandFromNav}
      />
    </div>
  );
}
