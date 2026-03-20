// src/components/TutorialOverlay.jsx
import { useState, useEffect } from "react";

const SESSION_KEY = "portfolio_tutorial_seen";

export default function TutorialOverlay() {
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem(SESSION_KEY); }
    catch { return true; }
  });
  const [fading, setFading] = useState(false);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* noop */ }
    }, 400);
  };

  // Auto-dismiss après 6s
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(dismiss, 6000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-slate-950/60 backdrop-blur-sm
        transition-opacity duration-400
        ${fading ? "opacity-0" : "opacity-100"}
      `}
      onClick={dismiss}
    >
      <div
        className="
          mx-6 max-w-sm w-full
          bg-[rgba(15,23,42,0.95)] border border-slate-700/60
          rounded-2xl px-7 py-8
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          text-center
          flex flex-col items-center gap-5
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icône boussole / navigation */}
        <div className="text-3xl select-none">🗺️</div>

        <p className="text-slate-200 text-sm leading-relaxed">
          Navigue entre les îles via la barre en haut à droite ou les flèches.{" "}
          Clique sur un onglet — ou directement sur une île — pour explorer son contenu.
        </p>

        <button
          type="button"
          onClick={dismiss}
          className="
            mt-1 px-6 py-2 rounded-full text-sm font-medium
            bg-sky-600 hover:bg-sky-500
            text-white
            transition-colors duration-150
          "
        >
          Compris !
        </button>
      </div>
    </div>
  );
}
