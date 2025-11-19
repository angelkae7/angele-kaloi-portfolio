// src/components/HelpChip.jsx
import { useState } from "react";

const HELP_TEXT =
  "Ce portfolio est développé avec React, Vite, Tailwind CSS et React Three Fiber (Three.js) pour donner vie à un univers 3D interactif et fluide.";

export default function HelpChip() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute bottom-4 right-4 md:right-6 md:bottom-6 z-20">
      <div className="pointer-events-auto flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="help-trigger px-2 sm:px-3"
          aria-label="À propos de cet univers"
        >
          {/* Icône seule en mobile, même style de pastille */}
          <span className="help-trigger-icon text-[0.8rem] font-semibold">
            i
          </span>

          {/* Label visible seulement à partir de sm */}
          <span className="help-trigger-label hidden sm:inline">
            À propos de cet univers
          </span>
        </button>

        {open && (
          <div className="help-panel">
            <p className="help-panel-text">{HELP_TEXT}</p>
          </div>
        )}
      </div>
    </div>
  );
}
