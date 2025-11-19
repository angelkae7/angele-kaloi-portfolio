// src/components/HelpChip.jsx
import { useState } from "react";

const HELP_TEXT =
  "Ce portfolio est développé avec React, Vite, Tailwind CSS et React Three Fiber (Three.js) pour donner vie à un univers 3D interactif et fluide.";

export default function HelpChip() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);

  return (
    <div className="pointer-events-none fixed top-3 right-3 z-20">
      <div className="pointer-events-auto flex items-start gap-2">
        {/* bouton i */}
        <button
          type="button"
          onClick={toggle}
          aria-label="À propos de cet univers"
          aria-expanded={open}
          className="
            flex items-center justify-center
            h-9 w-9 rounded-full
            bg-[rgba(15,23,42,0.96)]
            border border-[rgba(148,163,184,0.8)]
            text-slate-100 text-sm
            shadow-[0_12px_30px_rgba(15,23,42,0.9)]
            backdrop-blur-lg
            transition-transform duration-150
            hover:-translate-y-[1px]
          "
        >
          i
        </button>

        {/* panneau info à droite du i */}
        {open && (
          <div className="help-panel max-w-xs sm:max-w-sm mt-1">
            <p className="help-panel-text">{HELP_TEXT}</p>
          </div>
        )}
      </div>
    </div>
  );
}
