// src/components/HelpChip.jsx
import { useState } from "react";

const HELP_TEXT =
  "Ce portfolio est un univers en îles : chaque îlot révèle une facette de mon travail — web interactif, UX/UI, XR, vidéo, arts numériques — avec un point commun : l’attention portée à ce que vit l’utilisateur.";

export default function HelpChip() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute left-4 bottom-4 md:left-6 md:bottom-6 z-20">
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
