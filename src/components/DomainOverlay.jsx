// src/components/DomainOverlay.jsx
import { useState, useEffect, useRef } from "react";

export default function DomainOverlay({ title, tagline, projects, onClose }) {
  const [expandedId, setExpandedId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const [lightbox, setLightbox] = useState(null);
  const cardRef = useRef(null);

  // Au montage : remonter au haut de la carte
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
  }, []);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => onClose(), 260);
  };

  const toggleProject = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  // slider lightbox
  const showPrevMedia = () => {
    setLightbox((current) => {
      if (!current) return null;
      const total = current.items.length;
      const newIndex = (current.index - 1 + total) % total;
      return { ...current, index: newIndex };
    });
  };

  const showNextMedia = () => {
    setLightbox((current) => {
      if (!current) return null;
      const total = current.items.length;
      const newIndex = (current.index + 1) % total;
      return { ...current, index: newIndex };
    });
  };

  const closeLightbox = () => setLightbox(null);

  // Échap / flèches dans la lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevMedia();
      if (e.key === "ArrowRight") showNextMedia();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center px-4 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(2,6,23,0.7)] backdrop-blur-sm pointer-events-auto"
        onClick={handleClose}
      />

      {/* Carte centrale */}
      <div className="relative w-full max-w-5xl pointer-events-auto">
        <div
          ref={cardRef}
          className={
            "overlay-card relative mx-auto max-h-[82vh] flex flex-col p-6 md:p-8 " +
            (isClosing ? "overlay-exit" : "overlay-enter")
          }
        >
          {/* Bouton fermer */}
          <button
            type="button"
            onClick={handleClose}
            className="overlay-close-icon-btn"
            aria-label="Fermer la section"
          >
            ✕
          </button>

          {/* HEADER — bento 1 */}
          <header className="pb-3 md:pb-4 border-b border-[rgba(148,163,184,0.35)]">
            <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.22em] text-sky-200 mb-1">
              {title}
            </p>
            {tagline && (
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 max-w-3xl">
                {tagline}
              </h2>
            )}
            <p className="mt-2 text-xs md:text-sm text-slate-300/90 max-w-2xl">
              Sélection de projets. Clique sur un projet pour voir plus de
              détails.
            </p>
          </header>

          {/* CONTENU SCROLLABLE — bento 2 : la liste de projets */}
          <div className="mt-4 flex-1 overflow-y-auto pr-1 custom-scroll space-y-3 md:space-y-4">
            {projects.map((project) => {
              const isExpanded = expandedId === project.id;

              return (
                <article
                  key={project.id}
                  className={`
                    group 
                    relative 
                    w-full
                    overflow-hidden 
                    rounded-2xl
                    border border-[rgba(56,189,248,0.45)] 
                    bg-[rgba(15,23,42,0.78)]
                    backdrop-blur-xl 
                    px-5 py-4 md:px-7 md:py-5
                    transition-all duration-300
                    hover:border-[rgba(56,189,248,0.9)]
                    hover:bg-[rgba(15,23,42,0.9)]
                    shadow-[0_0_32px_-14px_rgba(56,189,248,0.45)]
                    cursor-pointer
                  `}
                  onClick={() => toggleProject(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleProject(project.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {/* halo */}
                  <div
                    className="
                      pointer-events-none absolute inset-0 
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_70%)]
                    "
                  />

                  <div className="relative flex gap-4 md:gap-5 items-stretch">
                    {/* Vignette */}
                    {project.thumb && (
                      <div
                        className={
                          "flex-shrink-0 overflow-hidden rounded-xl transition-all duration-300 " +
                          (isExpanded
                            ? "w-20 h-20 md:w-24 md:h-24 self-start"
                            : "w-14 h-14 md:w-16 md:h-16 self-center")
                        }
                      >
                        <img
                          src={project.thumb}
                          alt={project.title}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                      </div>
                    )}

                    {/* Colonne texte */}
                    <div className="flex-1 flex flex-col gap-3">
                      {/* Ligne titre + badge/date */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm md:text-base font-semibold text-slate-50 truncate">
                            {project.title}
                          </p>
                          <p className="mt-1 text-[0.8rem] text-slate-300/90 truncate">
                            {project.short}
                          </p>
                        </div>

                        {(project.year || project.context) && (
                          <span
                            className="
                              inline-flex items-center 
                              rounded-full 
                              border border-[rgba(148,163,184,0.6)] 
                              bg-[rgba(15,23,42,0.9)]
                              px-4 py-1.5 
                              text-[0.7rem] md:text-xs text-slate-100
                              whitespace-nowrap
                            "
                          >
                            {project.year && project.context
                              ? `${project.year} · ${project.context}`
                              : project.year || project.context}
                          </span>
                        )}
                      </div>

                      {/* ligne pointillée */}
                      <div className="mt-1 h-px w-full border-t border-dashed border-[rgba(148,163,184,0.4)]" />

                      {/* DÉTAILS ÉTENDUS */}
                      {isExpanded && (
                        <div className="mt-2 space-y-3">
                          {project.details && (
                            <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-3xl">
                              {project.details}
                            </p>
                          )}

                          {/* Tech / tags */}
                          {project.tech && project.tech.length > 0 && (
                            <p className="text-[0.75rem] text-slate-300">
                              <span className="font-semibold text-slate-200">
                                Tech / rôle :
                              </span>{" "}
                              {project.tech.join(" • ")}
                            </p>
                          )}

                          {/* Liens bento : site / GitHub / Figma */}
                          {(project.link ||
                            project.repo ||
                            project.figma) && (
                            <div className="flex flex-wrap gap-2 mt-1 text-[0.75rem]">
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-full border border-sky-400/60 px-3 py-1 text-sky-200 hover:bg-sky-500/10"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Voir le projet
                                </a>
                              )}
                              {project.repo && (
                                <a
                                  href={project.repo}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-full border border-slate-400/70 px-3 py-1 text-slate-200 hover:bg-slate-500/10"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Code source GitHub
                                </a>
                              )}
                              {project.figma && (
                                <a
                                  href={project.figma}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-full border border-purple-400/70 px-3 py-1 text-purple-100 hover:bg-purple-500/10"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Prototype Figma
                                </a>
                              )}
                            </div>
                          )}

                          {/* Galerie média */}
                          {project.media && project.media.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3 md:gap-4">
                              {project.media.map((item, index) => (
                                <div
                                  key={item.id || index}
                                  role="button"
                                  tabIndex={0}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLightbox({
                                      items: project.media,
                                      index,
                                    });
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setLightbox({
                                        items: project.media,
                                        index,
                                      });
                                    }
                                  }}
                                  className="group/media flex flex-col gap-1 w-24 md:w-32 text-left"
                                >
                                  <div
                                    className="
                                      relative 
                                      w-full 
                                      h-16 md:h-20 
                                      rounded-xl 
                                      overflow-hidden 
                                      bg-[rgba(15,23,42,0.9)] 
                                      border border-[rgba(148,163,184,0.6)]
                                      shadow-[0_0_20px_-8px_rgba(15,23,42,0.9)]
                                      transition-transform duration-200
                                      group-hover/media:-translate-y-0.5
                                      group-hover/media:shadow-[0_0_26px_-6px_rgba(56,189,248,0.6)]
                                    "
                                  >
                                    {item.type === "image" && (
                                      <img
                                        src={item.src}
                                        alt={item.label || project.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                      />
                                    )}

                                    {item.type === "video" && (
                                      <div className="w-full h-full relative">
                                        {item.thumbnail ? (
                                          <img
                                            src={item.thumbnail}
                                            alt={item.label || project.title}
                                            className="w-full h-full object-cover pointer-events-none"
                                          />
                                        ) : (
                                          <div className="w-full h-full bg-[rgba(15,23,42,0.9)]" />
                                        )}

                                        {/* icône play */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-8 h-8 rounded-full bg-[rgba(15,23,42,0.85)] border border-sky-400 flex items-center justify-center">
                                            <span className="ml-0.5 text-[0.75rem] text-sky-200">
                                              ▶
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  {item.label && (
                                    <span className="text-[0.7rem] md:text-xs text-slate-300 truncate">
                                      {item.label}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Voir plus / moins */}
                      <div className="mt-1.5 flex justify-end">
                        <span className="text-[0.75rem] text-sky-300/90">
                          {isExpanded ? "Voir moins ▲" : "Voir plus ▼"}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
  <div
    className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(15,23,42,0.9)] backdrop-blur-md"
    onClick={closeLightbox}
  >
    <div
      className="relative max-w-5xl w-full px-4"
      onClick={(e) => e.stopPropagation()} // ← empêche la fermeture quand on clique dans la carte
    >
      {/* bouton fermer */}
      <button
        type="button"
        onClick={closeLightbox}
        className="absolute right-4 top-4 z-20 h-9 w-9 rounded-full border border-[rgba(148,163,184,0.7)] bg-[rgba(15,23,42,0.95)] text-slate-100 flex items-center justify-center text-sm shadow-lg hover:bg-[rgba(15,23,42,1)]"
        aria-label="Fermer le média"
      >
        ✕
      </button>

      {(() => {
        const current = lightbox.items[lightbox.index];

        return (
          <div className="bg-[rgba(15,23,42,0.96)] border border-[rgba(148,163,184,0.7)] rounded-3xl shadow-2xl overflow-hidden">
            {/* ZONE MEDIA + FLÈCHES */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
  {/* flèche gauche */}
  {lightbox.items.length > 1 && (
    <button
      type="button"
      onClick={showPrevMedia}
      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 rounded-full bg-[rgba(15,23,42,0.75)] border border-[rgba(148,163,184,0.8)] text-slate-100 flex items-center justify-center text-lg shadow-lg hover:bg-[rgba(15,23,42,0.95)] z-10"
    >
      ‹
    </button>
  )}

  {/* contenu média : sans onClick sur le wrapper */}
  <div className="w-full h-full pointer-events-auto">
    {current.type === "image" && (
      <img
        src={current.src}
        alt={current.label || ""}
        className="w-full h-full object-contain"
      />
    )}

    {current.type === "video" && current.href && (
      <>
        {current.href.includes("youtube.com") ||
        current.href.includes("youtu.be") ? (
          <iframe
            className="w-full h-full"
            src={current.href}
            title={current.label || "Vidéo"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            className="w-full h-full"
            src={current.href}
            controls
          />
        )}
      </>
    )}
  </div>

  {/* flèche droite */}
  {lightbox.items.length > 1 && (
    <button
      type="button"
      onClick={showNextMedia}
      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 rounded-full bg-[rgba(15,23,42,0.75)] border border-[rgba(148,163,184,0.8)] text-slate-100 flex items-center justify-center text-lg shadow-lg hover:bg-[rgba(15,23,42,0.95)] z-10"
    >
      ›
    </button>
  )}
</div>


            {/* Légende + position */}
            <div className="px-4 py-3 md:px-5 md:py-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                {current.label && (
                  <p className="text-sm md:text-base text-slate-100 truncate">
                    {current.label}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[0.75rem] md:text-xs text-slate-400">
                  {lightbox.index + 1} / {lightbox.items.length}
                </span>
                {(current.href || current.src) && (
                  <a
                    href={current.href || current.src}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.8rem] md:text-xs text-sky-300 underline decoration-sky-400/70 hover:text-sky-200"
                  >
                    Ouvrir dans un nouvel onglet
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  </div>
)}

    </div>
  );
}
