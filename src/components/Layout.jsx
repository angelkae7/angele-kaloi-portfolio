// src/components/Layout.jsx
import { useEffect, useState, useCallback, useRef } from "react";
import { useSound } from "../sound/useSound.js";

const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.061ZM5.404 6.464a.75.75 0 0 0 1.06-1.06L5.404 4.343a.75.75 0 1 0-1.06 1.06l1.06 1.061Z" />
  </svg>
);
const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clipRule="evenodd" />
  </svg>
);
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

// Desktop — caméras optimisées (flèches 3D toujours dans le FOV)
const CAMERA_TARGETS = {
  me:    { position: [0,    8, 14], lookAt: [0,    1.5, 0]   },
  web:   { position: [-18,  7, 10], lookAt: [-18,  1.5, -6]  },
  ux:    { position: [16,   8, 20], lookAt: [16,   1.5, 8]   },
  xr:    { position: [-11,  6, 30], lookAt: [-10,  2,   18]  },
  video: { position: [20,   7,  0], lookAt: [20,   1.5, -12] },
};

// Mobile — plus loin et moins en plongée pour voir l'île en entier
const CAMERA_TARGETS_MOBILE = {
  me:    { position: [0,    5, 22], lookAt: [0,    0.5, 0]   },
  web:   { position: [-18,  5, 20], lookAt: [-18,  0.5, -6]  },
  ux:    { position: [16,   5, 30], lookAt: [16,   0.5, 8]   },
  xr:    { position: [-10,  5, 34], lookAt: [-10,  1.0, 18]  },
  video: { position: [20,   5, 10], lookAt: [20,   0.5, -12] },
};

const getTarget = (id) => {
  const mobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (mobile ? CAMERA_TARGETS_MOBILE : CAMERA_TARGETS)[id] ?? CAMERA_TARGETS.me;
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
  const { playFx } = useSound();
  const [isLight, setIsLight] = useState(() => localStorage.getItem("theme") === "light");

  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  const [showBubble, setShowBubble] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [selectedIsland, setSelectedIsland] = useState(ISLAND_STEPS[0]);
  const [cameraTarget, setCameraTarget] = useState(() => getTarget("me"));
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
    setCameraTarget(getTarget(island.id));
    setActiveOverlay(island.type);
  };

  const handleIslandClick = (island) => {
    playFx("open");
    openOverlayForIsland(island);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);

    if (selectedIsland.id === "me") {
      setTimeout(() => setShowBubble(true), 250);
    }
  };

  const handleSelectIslandFromNav = (id) => {
    const island = ISLAND_STEPS.find((step) => step.id === id);
    if (!island) return;
    playFx("woosh");
    openOverlayForIsland(island);
  };

  const handleArrowNavigate = (id) => {
    const island = ISLAND_STEPS.find((step) => step.id === id);
    if (!island) return;
    playFx("woosh");
    setSelectedIsland(island);
    setActiveOverlay(null);
    setCameraTarget(getTarget(island.id));
    setShowBubble(island.id === "me");
    setShowClickHint(true);
  };

  const dismissClickHint = useCallback(() => setShowClickHint(false), []);

  // Keyboard handler always current — updated every render, registered once
  const keyHandlerRef = useRef(null);
  keyHandlerRef.current = (e) => {
    if (activeOverlay) return;
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const idx = ISLAND_STEPS.findIndex((s) => s.id === selectedIsland.id);
      const delta = e.key === "ArrowLeft" ? -1 : 1;
      const next = ISLAND_STEPS[(idx + delta + ISLAND_STEPS.length) % ISLAND_STEPS.length];
      handleArrowNavigate(next.id);
    } else if (
      e.key === "Enter" &&
      (!document.activeElement || document.activeElement === document.body)
    ) {
      e.preventDefault();
      openOverlayForIsland(selectedIsland);
    }
  };

  useEffect(() => {
    const dispatch = (e) => keyHandlerRef.current?.(e);
    window.addEventListener("keydown", dispatch);
    return () => window.removeEventListener("keydown", dispatch);
  }, []);

  const showLabels = !activeOverlay;

  return (
    <div className="relative w-screen h-screen bg-slate-950 overflow-hidden">
      {/* Skip link — visible on Tab focus only */}
      <a href="#island-nav" className="skip-to-nav">
        Aller à la navigation
      </a>

      {/* Scène 3D */}
      <UniverseCanvas
        onIslandClick={handleIslandClick}
        cameraTarget={cameraTarget}
        activeIslandId={selectedIsland.id}
        steps={ISLAND_STEPS}
        onNavArrow={handleArrowNavigate}
        overlayOpen={!!activeOverlay}
        isLight={isLight}
      />

      {/* HUD fixe */}
      <HudTopBar />
      <TutorialOverlay />
      <AmbientSoundToggle />

      {/* Bouton thème clair/sombre */}
      <button
        type="button"
        onClick={() => { playFx("click"); setIsLight((v) => !v); }}
        className="
          fixed bottom-20 sm:bottom-4 left-[7rem] sm:left-[7rem] z-20
          h-10 w-10
          rounded-full
          inline-flex items-center justify-center
          bg-[var(--s-high)]
          border border-[var(--b-muted)]
          text-slate-400
          hover:border-[var(--b-accent-h)] hover:text-sky-300
          transition-all duration-200
        "
        aria-label={isLight ? "Passer en mode sombre" : "Passer en mode clair"}
        aria-pressed={isLight}
      >
        {isLight ? <IconMoon /> : <IconSun />}
      </button>

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
        id="island-nav"
        steps={ISLAND_STEPS}
        activeId={selectedIsland.id}
        onSelect={handleSelectIslandFromNav}
        onArrowClick={handleArrowNavigate}
        compact={!!activeOverlay}
      />
    </div>
  );
}
