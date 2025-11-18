// src/components/HelpChip.jsx
import { useState } from "react";

const HELP_TEXT =
  "Ce portfolio est développé avec React, Vite, Tailwind CSS et React Three Fiber (Three.js) pour donner vie à un univers 3D interactif et fluide.";

export default function HelpChip() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute  top-4 right-4 md:right-6 md:top-6 z-20">
      <div className="pointer-events-auto flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="help-trigger"
        >
          <span className="help-trigger-icon">?</span>
          <span className="help-trigger-label">À propos de cet univers</span>
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
