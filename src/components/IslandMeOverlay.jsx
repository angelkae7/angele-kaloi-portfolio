// src/components/IslandMeOverlay.jsx
import { useState, useRef, useEffect } from "react";

export default function IslandMeOverlay({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const cvVideoUrl = "https://www.youtube.com/embed/FV59sY5XE2E";

  // Ref sur la carte pour contrôler le scroll interne
  const cardRef = useRef(null);

  // Quand l’overlay s’ouvre, on remonte tout en haut de la carte
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
  }, []);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 280); // doit matcher .overlay-exit
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
          ref={cardRef}
          className={
            "overlay-card relative max-h-[80vh] overflow-y-auto p-6 md:p-8 " +
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

          {/* CONTENU CLAMPÉ POUR LA LECTURE */}
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-7">
            {/* Header */}
            <header className="space-y-2">
              <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] text-sky-200">
                Île centrale — À propos
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
                Je crée des expériences numériques qui se ressentent.
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Je suis <span className="font-medium">Angèle Kaloï</span>,
                développeuse web & créatrice d’expériences interactives. Je
                navigue entre front, UX/UI, 3D et VR pour concevoir des
                expériences qui restent claires même quand la technologie
                devient complexe.
              </p>
            </header>

            {/* Chip univers en îles */}
            <p className="text-sm md:text-[0.95rem] text-slate-200/95 leading-relaxed overlay-chip">
              Ce portfolio est un univers en îles : chaque îlot présente une
              facette de mon travail — web interactif, UX/UI, XR, vidéo, arts
              numériques — avec toujours la même priorité : ce que vit
              l’utilisateur.
            </p>

            {/* Vidéo */}
            <section className="space-y-3">
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
                1 minute pour entendre ma voix, mon énergie et la façon dont je
                présente mon parcours.
              </p>
            </section>

            {/* Mini fiche identité */}
            <section className="grid gap-3 text-xs md:text-[0.8rem] text-slate-300 md:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-100">Rôle actuel</p>
                <p>Alternante dev web & UX — OPT-NC</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Formation</p>
                <p>BUT MMI — Dév web & dispositifs interactifs</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Territoire</p>
                <p>Nouvelle-Calédonie · projets orientés usages locaux</p>
              </div>
            </section>

            {/* Parcours compact + timeline */}
            <section className="pt-3 border-t border-[rgba(148,163,184,0.35)] space-y-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-100">
                Parcours
              </h3>

              <div className="grid gap-4 md:grid-cols-[1.05fr,1.4fr]">
                {/* Timeline verticale */}
                <div className="relative pl-5 text-xs md:text-[0.8rem] text-slate-300">
                  {/* ligne verticale */}
                  <div className="absolute left-1 top-1 bottom-1 w-px bg-[rgba(148,163,184,0.35)]" />

                  <div className="relative mb-3 pl-3">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-sky-400" />
                    <p className="font-semibold text-slate-100">
                      2023–2025 · Alternance
                    </p>
                    <p>OPT-NC — Dev web & UX</p>
                  </div>

                  <div className="relative mb-3 pl-3">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-sky-400/80" />
                    <p className="font-semibold text-slate-100">
                      2024 · Stage (3 mois)
                    </p>
                    <p>ISEA — Chargée de communication & création visuelle</p>
                  </div>

                  <div className="relative mb-3 pl-3">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-sky-400/70" />
                    <p className="font-semibold text-slate-100">
                      2023 · Stage (6 mois)
                    </p>
                    <p>CANAL+ Calédonie — Créatrice de contenus graphiques & vidéo</p>
                  </div>

                  <div className="relative mb-3 pl-3">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-sky-400/60" />
                    <p className="font-semibold text-slate-100">
                      2022–2025 · BUT MMI
                    </p>
                    <p>Université de la Nouvelle-Calédonie</p>
                  </div>

                  <div className="relative pl-3">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-sky-400/50" />
                    <p className="font-semibold text-slate-100">
                      2021 · Baccalauréat général
                    </p>
                    <p>
                      Spécialités HGGSP / AMC — Lycée Blaise Pascal, Nouméa.
                    </p>
                  </div>
                </div>

                {/* Détail compact des expériences clés */}
                <div className="space-y-3 text-xs md:text-sm text-slate-200">
                  {/* Alternance OPT-NC */}
                  <div className="rounded-xl border border-[rgba(148,163,184,0.55)] bg-[rgba(15,23,42,0.9)] px-3.5 py-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400 mb-1.5">
                      Expérience principale
                    </p>
                    <p className="text-xs font-semibold text-sky-200">
                      2023–2025 · Alternance — OPT-NC
                    </p>
                    <p className="mt-1 leading-snug">
                      Refonte du site institutionnel : nouvelle page d’accueil,
                      intégration front (Drupal), accessibilité, performance et
                      collaboration avec la DSI & la Communication.
                    </p>
                  </div>

                  {/* Stages */}
                  <div className="rounded-xl border border-[rgba(148,163,184,0.45)] bg-[rgba(15,23,42,0.9)] px-3.5 py-3 space-y-2">
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400 mb-1">
                      Stages & missions
                    </p>

                    <div>
                      <p className="text-xs font-semibold text-sky-200">
                        2024 · ISEA — Chargée de communication
                      </p>
                      <p className="text-[0.78rem] leading-snug">
                        Création d’outils visuels pour la recherche scientifique,
                        d'identité visuelle & supports graphiques pour un projet de recherche ANR.
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-sky-200">
                        2023 · CANAL+ Calédonie — Contenus graphiques & vidéo
                      </p>
                      <p className="text-[0.78rem] leading-snug">
                        Communication interne & externe, visuels d’émissions,
                        montages vidéo (Premiere Pro, After Effects), identité
                        graphique pour des formats TV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
