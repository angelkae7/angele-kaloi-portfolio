// src/components/Layout.jsx
import { useEffect, useState } from "react";
import UniverseCanvas from "../three/UniverseCanvas.jsx";
import IslandMeOverlay from "./IslandMeOverlay.jsx";
import IslandMeBubble from "./IslandMeBubble.jsx";
import HelpChip from "./HelpChip.jsx";
import IslandNameBar from "./IslandNameBar.jsx";
import HudTopBar from "./HudTopBar.jsx";

export default function Layout() {
  const [showBubble, setShowBubble] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 650);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenOverlay = () => {
    setOverlayOpen(true);
    setShowBubble(false);
  };

  const handleCloseOverlay = () => {
    setOverlayOpen(false);
    setTimeout(() => setShowBubble(true), 250);
  };

  return (
    <div className="relative w-screen h-screen bg-slate-950 overflow-hidden">
      <UniverseCanvas onMeIslandClick={handleOpenOverlay} />

      <HudTopBar />

      {/* Bulle de message au-dessus de l'île */}
      {showBubble && !overlayOpen && (
        <IslandMeBubble onClick={handleOpenOverlay} />
      )}

      {/* Chip d'aide en bas-gauche */}
      <HelpChip />

      {/* Nom de l'île en bas-centre */}
      <IslandNameBar />

      {/* Overlay de présentation */}
      {overlayOpen && <IslandMeOverlay onClose={handleCloseOverlay} />}
    </div>
  );
}
