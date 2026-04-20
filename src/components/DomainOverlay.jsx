// src/components/DomainOverlay.jsx
import { useState, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";

// Shared class for lightbox prev/next navigation buttons
const LIGHTBOX_NAV_BTN =
  "absolute top-1/2 -translate-y-1/2 h-9 w-9 md:h-10 md:w-10 rounded-full " +
  "bg-[rgba(15,23,42,0.8)] border border-[rgba(148,163,184,0.7)] " +
  "text-slate-100 flex items-center justify-center text-lg shadow-lg z-10 " +
  "hover:bg-[rgba(15,23,42,0.95)] hover:border-sky-400/60 hover:text-sky-200 transition-colors";

export default function DomainOverlay({ title, tagline, projects, onClose }) {
  const [open, setOpen] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [projects]);

  const toggleProject = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  // ---- LIGHTBOX ----
  const showPrevMedia = () =>
    setLightbox((cur) => cur && { ...cur, index: (cur.index - 1 + cur.items.length) % cur.items.length });

  const showNextMedia = () =>
    setLightbox((cur) => cur && { ...cur, index: (cur.index + 1) % cur.items.length });

  const closeLightbox = () => setLightbox(null);

  // Register once; functional setState in handlers avoids stale closure issues
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevMedia();
      if (e.key === "ArrowRight") showNextMedia();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []); 

  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && setOpen(false)}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="dialog-overlay fixed inset-0 z-30 bg-[rgba(2,6,23,0.72)] backdrop-blur-sm" />

        {/* Centering wrapper — pointer-events-none so clicking backdrop shows through */}
        <div className="fixed inset-0 z-30 flex items-center justify-center px-4 pointer-events-none">
          <Dialog.Content
            asChild
            onCloseAutoFocus={(e) => { e.preventDefault(); onClose(); }}
            aria-describedby={undefined}
          >
            <div className="dialog-card overlay-card pointer-events-auto w-full max-w-5xl flex flex-col p-5 sm:p-8 outline-none">
              <Dialog.Title className="sr-only">{title}</Dialog.Title>
              <Dialog.Description className="sr-only">
                Sélection de projets pour {title}.
              </Dialog.Description>

              <Dialog.Close asChild>
                <button
                  type="button"
                  className="overlay-close-icon-btn"
                  aria-label="Fermer la section"
                >
                  ✕
                </button>
              </Dialog.Close>

              {/* HEADER */}
              <header className="pb-4 border-b border-[rgba(148,163,184,0.25)]">
                <p className="text-xs uppercase tracking-[0.18em] text-sky-400 font-medium mb-2">
                  {title}
                </p>
                {tagline && (
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-50 max-w-3xl leading-snug">
                    {tagline}
                  </h2>
                )}
                <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                  Sélection de projets. Clique sur un projet pour voir plus de détails.
                </p>
              </header>

              {/* PROJECT LIST */}
              {hasProjects && (
                <div
                  ref={scrollRef}
                  className="mt-4 flex-1 min-h-0 overflow-y-auto overlay-scroll pr-1 space-y-3 md:space-y-4"
                >
                  {projects.map((project) => {
                    const isExpanded = expandedId === project.id;
                    const mediaCount = project.media?.length ?? 0;

                    return (
                      // div role="button" is correct here — article semantics conflict with button role
                      <div
                        key={project.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleProject(project.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleProject(project.id);
                          }
                        }}
                        className="
                          group relative w-full overflow-hidden rounded-2xl
                          border border-[rgba(56,189,248,0.35)]
                          bg-[rgba(15,23,42,0.75)] backdrop-blur-xl
                          px-4 py-4 md:px-6 md:py-5 text-left
                          transition-all duration-300
                          hover:border-[rgba(56,189,248,0.75)] hover:bg-[rgba(15,23,42,0.9)]
                          shadow-[0_0_28px_-16px_rgba(56,189,248,0.4)]
                          hover:shadow-[0_0_36px_-10px_rgba(56,189,248,0.4)]
                          cursor-pointer
                        "
                      >
                        {/* Hover halo */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_70%)]" />

                        <div className="project-row relative">
                          {/* Thumbnail */}
                          {project.thumb && (
                            <div
                              className={
                                "overflow-hidden rounded-xl transition-all duration-300 shrink-0 " +
                                (isExpanded
                                  ? "w-20 h-20 md:w-24 md:h-24 self-start"
                                  : "w-16 h-16 md:w-20 md:h-20 self-start md:self-center")
                              }
                            >
                              <img src={project.thumb} alt={project.title} className="w-full h-full object-cover pointer-events-none" />
                            </div>
                          )}

                          <div className="flex-1 flex flex-col gap-2 min-w-0">
                            {/* Title row */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1.5 md:gap-4">
                              <div className="w-full">
                                <p className="text-base md:text-lg font-semibold text-slate-50 leading-snug">
                                  {project.title}
                                </p>
                                <p className="mt-1 text-sm text-slate-400 leading-snug">{project.short}</p>
                              </div>
                              {(project.year || project.context) && (
                                <span className="text-xs text-slate-500 whitespace-nowrap self-start md:pt-1 shrink-0">
                                  {project.year && project.context
                                    ? `${project.year} · ${project.context}`
                                    : project.year || project.context}
                                </span>
                              )}
                            </div>

                            {/* Fix 12 — tech tags always visible in collapsed state */}
                            {project.tech?.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.68rem] font-medium bg-slate-800/70 border border-slate-600/50 text-slate-400"
                                  >
                                    {t}
                                  </span>
                                ))}

                                {/* Fix 13 — media count badge */}
                                {mediaCount > 0 && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.68rem] font-medium bg-sky-900/40 border border-sky-600/40 text-sky-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                                      <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm6 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4.5 12h7l-2.31-3.08a.5.5 0 0 0-.78-.04L6.5 11 5.31 9.5a.5.5 0 0 0-.78.03L3 12h1.5Z" />
                                    </svg>
                                    {mediaCount}
                                  </span>
                                )}
                              </div>
                            )}

                            <div className="h-px w-full border-t border-dashed border-[rgba(148,163,184,0.2)]" />

                            {/* Expanded details */}
                            {isExpanded && (
                              <div className="space-y-3">
                                {project.details && (
                                  <p className="text-sm text-slate-200 leading-relaxed">{project.details}</p>
                                )}

                                {/* Links — Fix 14: contextual labels via linkLabel field */}
                                {(project.link || project.github || project.figmaLink || project.linkNote) && (
                                  <div className="flex flex-wrap gap-2 mt-1 text-sm">
                                    {project.link && (
                                      <a href={project.link} target="_blank" rel="noreferrer"
                                        className="inline-flex items-center rounded-full border border-sky-400/60 px-3 py-1 text-sky-300 hover:bg-sky-500/15 hover:border-sky-400 transition-colors"
                                        onClick={(e) => e.stopPropagation()}>
                                        {project.linkLabel || "Voir le projet"}
                                      </a>
                                    )}
                                    {/* Fix 15 — missing link explanation */}
                                    {!project.link && project.linkNote && (
                                      <span className="text-xs text-slate-500 italic self-center">
                                        {project.linkNote}
                                      </span>
                                    )}
                                    {project.github && (
                                      <a href={project.github} target="_blank" rel="noreferrer"
                                        className="inline-flex items-center rounded-full border border-slate-500/60 px-3 py-1 text-slate-300 hover:bg-slate-500/15 hover:border-slate-400 transition-colors"
                                        onClick={(e) => e.stopPropagation()}>
                                        Code source GitHub
                                      </a>
                                    )}
                                    {project.figmaLink && (
                                      <a href={project.figmaLink} target="_blank" rel="noreferrer"
                                        className="inline-flex items-center rounded-full border border-purple-400/60 px-3 py-1 text-purple-200 hover:bg-purple-500/15 hover:border-purple-400 transition-colors"
                                        onClick={(e) => e.stopPropagation()}>
                                        Prototype Figma
                                      </a>
                                    )}
                                  </div>
                                )}

                                {/* Media gallery */}
                                {project.media?.length > 0 && (
                                  <div className="mt-3 flex flex-wrap gap-3 md:gap-4">
                                    {project.media.map((item, index) => (
                                      <div
                                        key={item.id || index}
                                        role="button"
                                        tabIndex={0}
                                        onClick={(e) => { e.stopPropagation(); setLightbox({ items: project.media, index }); }}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault(); e.stopPropagation();
                                            setLightbox({ items: project.media, index });
                                          }
                                        }}
                                        className="group/media flex flex-col gap-1.5 w-24 md:w-32 text-left"
                                      >
                                        <div className="relative w-full h-16 md:h-20 rounded-xl overflow-hidden bg-[rgba(15,23,42,0.9)] border border-[rgba(148,163,184,0.5)] transition-all duration-200 group-hover/media:-translate-y-0.5 group-hover/media:border-[rgba(56,189,248,0.6)] group-hover/media:shadow-[0_0_20px_-6px_rgba(56,189,248,0.5)]">
                                          {item.type === "image" && (
                                            <img src={item.src} alt={item.label || project.title} className="w-full h-full object-cover pointer-events-none" />
                                          )}
                                          {item.type === "video" && (
                                            <div className="w-full h-full relative">
                                              {item.thumbnail
                                                ? <img src={item.thumbnail} alt={item.label || project.title} className="w-full h-full object-cover pointer-events-none" />
                                                : <div className="w-full h-full bg-[rgba(15,23,42,0.9)]" />
                                              }
                                              <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-8 h-8 rounded-full bg-[rgba(15,23,42,0.85)] border border-sky-400/80 flex items-center justify-center">
                                                  <span className="ml-0.5 text-xs text-sky-200">▶</span>
                                                </div>
                                              </div>
                                            </div>
                                          )}
                                          {item.type === "figma" && (
                                            <div className="w-full h-full bg-[rgba(15,23,42,0.95)] flex items-center justify-center text-xs text-slate-300">
                                              Prototype Figma
                                            </div>
                                          )}
                                        </div>
                                        {item.label && (
                                          <span className="text-xs text-slate-400 truncate">{item.label}</span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Expand toggle */}
                            <div className="flex justify-end">
                              <span className="text-xs text-sky-400/70 group-hover:text-sky-300 transition-colors flex items-center gap-1">
                                {isExpanded
                                  ? <>Voir moins <span className="text-[10px]">▲</span></>
                                  : <>Voir plus <span className="text-[10px]">▼</span></>
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>

      {/* LIGHTBOX — rendered outside Dialog so it layers above */}
      {lightbox && (() => {
        const current = lightbox.items[lightbox.index];
        return (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(15,23,42,0.92)] backdrop-blur-md pointer-events-auto"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl w-full px-4" role="presentation" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-4 top-4 z-20 h-9 w-9 rounded-full border border-[rgba(148,163,184,0.6)] bg-[rgba(15,23,42,0.95)] text-slate-400 flex items-center justify-center text-sm shadow-lg hover:text-red-300 hover:bg-red-900/20 hover:border-red-500/40 transition-all duration-200"
                aria-label="Fermer le média"
              >
                ✕
              </button>

              <div className="bg-[rgba(15,23,42,0.97)] border border-[rgba(148,163,184,0.6)] rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  {lightbox.items.length > 1 && (
                    <button type="button" onClick={showPrevMedia}
                      className={`${LIGHTBOX_NAV_BTN} left-3 md:left-4`}
                      aria-label="Média précédent">‹</button>
                  )}

                  <div className="w-full h-full pointer-events-auto">
                    {current.type === "image" && (
                      <img src={current.src} alt={current.label || ""} className="w-full h-full object-contain" />
                    )}
                    {current.type === "video" && current.href && (
                      current.href.includes("youtube.com") || current.href.includes("youtu.be")
                        ? <iframe className="w-full h-full" src={current.href} title={current.label || "Vidéo"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                        : <video className="w-full h-full" src={current.href} controls><track kind="captions" /></video>
                    )}
                    {current.type === "figma" && current.href && (
                      <iframe className="w-full h-full" src={current.href} title={current.label || "Prototype Figma"} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
                    )}
                  </div>

                  {lightbox.items.length > 1 && (
                    <button type="button" onClick={showNextMedia}
                      className={`${LIGHTBOX_NAV_BTN} right-3 md:right-4`}
                      aria-label="Média suivant">›</button>
                  )}
                </div>

                <div className="px-4 py-3 md:px-5 md:py-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    {current.label && (
                      <p className="text-sm md:text-base text-slate-100 truncate">{current.label}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">{lightbox.index + 1} / {lightbox.items.length}</span>
                    {(current.href || current.src) && (
                      <a href={current.href || current.src} target="_blank" rel="noreferrer"
                        className="text-xs text-sky-400 underline decoration-sky-400/50 underline-offset-2 hover:text-sky-200 hover:decoration-sky-200">
                        Ouvrir dans un nouvel onglet
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </Dialog.Root>
  );
}
