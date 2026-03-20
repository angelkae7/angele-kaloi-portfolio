// src/components/HelpChip.jsx
import { useState, useEffect } from "react";

const SESSION_KEY = "portfolio_help_seen";

const HELP_TEXT =
  "Navigue entre les îles via la barre en haut à droite ou les flèches. " +
  "Clique sur un onglet — ou directement sur une île — pour explorer son contenu.";

export default function HelpChip() {
  // Auto-open on first visit (sessionStorage); subsequent visits start closed
  const [open, setOpen] = useState(() => {
    try { return !sessionStorage.getItem(SESSION_KEY); }
    catch { return true; }
  });

  // Auto-close after 4 s on first visit, then mark as seen
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      setOpen(false);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* noop */ }
    }, 4000);
    return () => clearTimeout(timer);
  }, [open]);

  const toggle = () => {
    setOpen((o) => {
      const next = !o;
      if (!next) {
        try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* noop */ }
      }
      return next;
    });
  };

  return (
    <div className="pointer-events-none fixed top-3 left-[31%] sm:left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
      {/* Onboarding hint panel */}
      {open && (
        <div className="pointer-events-auto help-panel max-w-xs sm:max-w-sm text-center">
          <p className="help-panel-text">{HELP_TEXT}</p>
        </div>
      )}

      {/* Small "i" button — always present for re-opening */}
      <button
        type="button"
        onClick={toggle}
        aria-label="Aide — navigation"
        aria-expanded={open}
        className="
          pointer-events-auto
          flex items-center justify-center
          h-7 w-7 rounded-full
          bg-[rgba(15,23,42,0.96)]
          border border-[rgba(148,163,184,0.5)]
          text-slate-400 text-xs
          shadow-[0_6px_20px_rgba(15,23,42,0.8)]
          backdrop-blur-lg
          transition-all duration-150
          hover:border-sky-500/50 hover:text-sky-300
        "
      >
        i
      </button>
    </div>
  );
}
