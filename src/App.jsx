import { useState } from "react";
import LandingScreen from "./components/LandingScreen.jsx";
import Layout from "./components/Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { SoundProvider } from "./sound/SoundProvider.jsx";

// Durées de la transition (ms)
const T_FADE_IN  = 380;  // overlay → noir
const T_HOLD     = 550;  // Three.js initialise sous le voile
const T_FADE_OUT = 1100; // révélation cinématique des îles

export default function App() {
  const [entered, setEntered] = useState(false);
  // "idle" | "covering" | "revealing"
  const [overlayPhase, setOverlayPhase] = useState("idle");

  const handleEnterRequest = () => {
    // 1. Le voile recouvre la landing en se noircissant
    setOverlayPhase("covering");

    setTimeout(() => {
      // 2. Sous le voile, on monte le Layout + Three.js rend son 1er frame
      setEntered(true);

      setTimeout(() => {
        // 3. Le voile se lève : les îles apparaissent progressivement
        setOverlayPhase("revealing");

        setTimeout(() => setOverlayPhase("idle"), T_FADE_OUT);
      }, T_HOLD);
    }, T_FADE_IN);
  };

  return (
    <ErrorBoundary>
      <SoundProvider>
        {entered ? <Layout /> : <LandingScreen onEnter={handleEnterRequest} />}

        {/* Voile de transition — superposé au-dessus de tout */}
        {overlayPhase !== "idle" && (
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              background: "#0E0904",
              pointerEvents: "none",
              animation:
                overlayPhase === "covering"
                  ? `transitionCover  ${T_FADE_IN}ms ease forwards`
                  : `transitionReveal ${T_FADE_OUT}ms ease forwards`,
            }}
          />
        )}
      </SoundProvider>
    </ErrorBoundary>
  );
}
