import { useState, useEffect, useCallback, useRef } from "react";

// Nouvelle clé — force l'affichage si l'ancienne session avait dismissé
const SESSION_KEY = "portfolio_tutorial_v2";
const APPEAR_DELAY_MS = 1200;
const DISMISS_MS = 11000;

export default function TutorialOverlay() {
  const [seen] = useState(() => {
    try { return !!sessionStorage.getItem(SESSION_KEY); }
    catch { return false; }
  });
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const [fading, setFading] = useState(false);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  // Apparaît après un délai (laisse la scène 3D se charger d'abord)
  useEffect(() => {
    if (seen) return;
    const t = setTimeout(() => setVisible(true), APPEAR_DELAY_MS);
    return () => clearTimeout(t);
  }, [seen]);

  const dismiss = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* noop */ }
    }, 320);
  }, []);

  // Progress bar animée via RAF
  useEffect(() => {
    if (!visible) return;
    startRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.max(0, 100 - (elapsed / DISMISS_MS) * 100);
      setProgress(pct);
      if (pct <= 0) {
        dismiss();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, dismiss]);

  if (seen || !visible) return null;

  return (
    <div
      className={[
        "fixed bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-40",
        "pointer-events-none px-4",
        "transition-all duration-300",
        fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-label="Conseil de navigation"
    >
      <div
        className="
          pointer-events-auto relative overflow-hidden
          bg-[rgba(15,23,42,0.95)] border border-sky-500/40
          rounded-2xl shadow-[0_8px_32px_rgba(56,189,248,0.15),0_20px_50px_rgba(0,0,0,0.6)]
          flex items-start gap-3 px-5 py-4
          max-w-xs w-full
        "
      >
        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-sky-400/60 rounded-full"
          style={{ width: `${progress}%`, transition: "none" }}
          aria-hidden="true"
        />

        <span className="text-xl shrink-0 select-none mt-0.5" aria-hidden="true">🗺️</span>

        <div className="flex-1 min-w-0">
          <p className="text-slate-100 text-sm font-medium leading-snug mb-1">
            Comment naviguer
          </p>
          <ul className="text-slate-400 text-[12px] leading-relaxed space-y-0.5">
            <li>→ Onglets ou flèches <span className="text-slate-300">en haut à droite</span></li>
            <li>→ Flèches <span className="text-slate-300">3D gauche / droite</span> dans la scène</li>
            <li>→ Clique sur une <span className="text-slate-300">île</span> pour l'explorer</li>
          </ul>
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="
            shrink-0 w-6 h-6 rounded-full mt-0.5
            flex items-center justify-center
            text-slate-500 hover:text-slate-100
            hover:bg-slate-700/70
            transition-colors text-[11px]
          "
          aria-label="Fermer le conseil"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
