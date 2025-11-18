// src/components/IslandMeOverlay.jsx
import { useState, useRef, useEffect } from "react";

const TIMELINE = [
  {
    id: "alt-opt",
    years: "2025–2026",
    title: "Alternance — OPT-NC",
    role: "Dev web & UX · Refonte du site institutionnel.",
    details:
      "Nouvelle page d’accueil, intégration front (Drupal), accessibilité, performance & collaboration avec la DSI et la communication.",
    isCurrent: true, // 🔥 seul celui-ci sera vraiment allumé
  },
  {
    id: "stage-isea",
    years: "2024 · Stage (6 mois)",
    title: "ISEA",
    role: "Chargée de communication & création visuelle.",
    details:
      "Outils visuels pour un projet de recherche scientifique, identité visuelle & supports graphiques pour vulgariser les résultats.",
    isCurrent: false,
  },
  {
    id: "stage-canal",
    years: "2023 · Stage (3 mois)",
    title: "CANAL+ Calédonie",
    role: "Contenus graphiques & vidéo.",
    details:
      "Communication interne & externe, habillages d’émissions, visuels d’antenne et montages vidéo pour des formats TV.",
    isCurrent: false,
  },
  {
    id: "but-mmi",
    years: "2022–2025",
    title: "BUT MMI — Université de la Nouvelle-Calédonie",
    role: "Parcours Dév web & dispositifs interactifs.",
    details: "Focus front-end, UX/UI, 3D/XR et gestion de projet.",
    isCurrent: false,
  },
];

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
                2 minutes pour entendre ma voix, mon énergie et la façon dont je
                présente mon parcours.
              </p>
            </section>

            {/* --- PARCOURS --- */}
            <section className="mt-2 md:mt-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-100">
                Parcours
              </h3>

              <div className="parcours-scroll mt-4 space-y-5">
                {/* 1) Bandeau d’infos clés */}
                <div className="grid gap-3 md:gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-[rgba(148,163,184,0.5)] bg-[rgba(15,23,42,0.9)] px-3.5 py-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 mb-1">
                      Rôle actuel
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-sky-200">
                      Alternante dev web & UX — OPT-NC
                    </p>
                    <p className="mt-0.5 text-[0.7rem] md:text-xs text-slate-300/90">
                      Refonte du site institutionnel, page d’accueil, design
                      system & intégration front.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[rgba(148,163,184,0.4)] bg-[rgba(15,23,42,0.9)] px-3.5 py-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 mb-1">
                      Formation
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-sky-200">
                      2022–2025 · BUT MMI — UNC
                    </p>
                    <p className="mt-0.5 text-[0.7rem] md:text-xs text-slate-300/90">
                      Dév web & dispositifs interactifs : front-end, UX/UI,
                      3D/XR, audiovisuel & gestion de projet.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[rgba(148,163,184,0.4)] bg-[rgba(15,23,42,0.9)] px-3.5 py-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-slate-400 mb-1">
                      Territoire
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-sky-200">
                      Nouvelle-Calédonie
                    </p>
                    <p className="mt-0.5 text-[0.7rem] md:text-xs text-slate-300/90">
                      Projets orientés usages locaux & services publics.
                    </p>
                  </div>
                </div>

                {/* 2) Timeline rangée + un seul point allumé */}
                <div className="mt-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400 mb-3">
                    Chronologie
                  </p>

                  <div className="relative pl-5">
                    {/* ligne verticale */}
                    <div className="absolute left-[0.35rem] top-1 bottom-1 w-px bg-[rgba(148,163,184,0.35)]" />

                    {TIMELINE.map((item) => (
                      <div key={item.id} className="relative mb-4 last:mb-0">
                        {/* point sur la ligne */}
                        <span
                          className={
                            "absolute -left-[0.25rem] mt-1 h-2 w-2 rounded-full " +
                            (item.isCurrent
                              ? "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"
                              : "bg-slate-500/80")
                          }
                        />

                        <p className="text-[0.8rem] font-semibold text-slate-200">
                          {item.years} · {item.title}
                        </p>
                        <p className="text-[0.8rem] font-semibold text-slate-100">
                          {item.role}
                        </p>
                        <p className="mt-1 text-[0.78rem] text-slate-300 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
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
