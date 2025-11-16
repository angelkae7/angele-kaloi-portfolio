import { useState } from "react";

export default function IslandMeOverlay({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const cvVideoUrl = "https://www.youtube.com/embed/FV59sY5XE2E";

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 280); // doit matcher overlay-exit
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center px-4 pointer-events-none">
      {/* Backdrop cliquable */}
      <div
        className="absolute inset-0 bg-[rgba(2,6,23,0.7)] backdrop-blur-sm pointer-events-auto"
        onClick={handleClose}
      />

      {/* Carte centrale */}
      <div className="relative max-w-4xl w-full pointer-events-auto">
        <div
          className={
            "overlay-card p-6 md:p-8 flex flex-col md:flex-row gap-6 " +
            (isClosing ? "overlay-exit" : "overlay-enter")
          }
        >
          {/* Bouton fermer */}
          <button
            type="button"
            onClick={handleClose}
            className="overlay-close-icon-btn"
            aria-label="Fermer la présentation"
          >
            ✕
          </button>

          {/* Texte à gauche */}
          <div className="flex-1 space-y-4 pr-0 md:pr-4">
            <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] text-sky-200">
              Île centrale — À propos
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Je crée des expériences numériques qui se ressentent.
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Je suis <span className="font-medium">Angèle Kaloï</span>,
              développeuse web & créatrice d’expériences interactives. Entre
              interfaces, 3D, VR et design centré utilisateur, je cherche
              surtout la <span className="font-medium">bonne expérience</span> :
              celle qui guide, qui transmet, et qui reste cohérente, même quand
              la technologie devient complexe.
            </p>
            <p className="text-sm md:text-base text-slate-200/90 leading-relaxed overlay-chip">
              Ce portfolio est un univers en îles : chaque îlot révèle une
              facette de mon travail — web interactif, UX/UI, XR, vidéo, arts
              numériques — avec un point commun : l’attention portée à ce que
              vit l’utilisateur.
            </p>
          </div>

          {/* Vidéo à droite */}
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] text-sky-200">
              CV vidéo
            </p>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-[rgba(148,163,184,0.6)] bg-[rgba(15,23,42,0.85)]">
              <iframe
                className="w-full h-full"
                src={cvVideoUrl}
                title="CV vidéo d'Angèle Kaloï"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="text-xs md:text-sm text-slate-300/90">
              Une minute pour ressentir mon énergie, ma façon de communiquer et
              ma manière d’aborder les projets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
