// src/components/IslandNavigator.jsx
import clsx from "clsx";

export default function IslandNavigator({
  steps,
  activeId,
  onSelect,
  compact = false, // plus fin quand overlay ouvert
}) {
  const activeIndex = steps.findIndex((s) => s.id === activeId);
  const prevId = steps[(activeIndex - 1 + steps.length) % steps.length]?.id;
  const nextId = steps[(activeIndex + 1) % steps.length]?.id;

  const basePadding = compact ? "py-1.5" : "py-2.5";

  return (
    <div
      className={clsx(
        "fixed left-1/2 -translate-x-1/2 z-20",
        "flex flex-col items-center",
        "transition-all duration-300",
        compact ? "top-2 sm:top-3 scale-90 sm:scale-95" :
                  "top-4 sm:top-6 md:top-8 scale-100"
      )}
    >
      {/* BARRE DE NAVIGATION */}
      <nav
        className="
          flex items-center gap-2 sm:gap-3
          rounded-full bg-[rgba(15,23,42,0.9)]
          border border-sky-500/40
          backdrop-blur-xl
          shadow-[0_0_40px_-18px_rgba(56,189,248,0.8)]
          px-3 sm:px-5
        "
      >
        {/* flèche gauche – visible aussi sur mobile */}
        <button
          type="button"
          onClick={() => onSelect(prevId)}
          className="
            inline-flex items-center justify-center
            h-7 w-7 rounded-full
            border border-[rgba(148,163,184,0.6)]
            text-slate-200 text-xs
            hover:bg-[rgba(15,23,42,0.9)]
            transition-colors
          "
          aria-label="Île précédente"
        >
          ‹
        </button>

        {/* items */}
        {steps.map((step) => {
          const isActive = step.id === activeId;

          // Sur mobile : on cache les autres îles, on garde seulement l’active.
          const visibilityClass = isActive
            ? "inline-flex"
            : "hidden md:inline-flex";

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelect(step.id)}
              className={clsx(
                "relative px-4",
                basePadding,
                "text-[0.65rem] md:text-xs uppercase tracking-[0.22em]",
                "transition-all duration-200 whitespace-nowrap",
                visibilityClass,
                isActive ? "text-sky-100" : "text-slate-400/90"
              )}
            >
              <span className="relative z-10">
                {step.shortLabel}
              </span>

              {isActive && (
                <span
                  className="
                    absolute inset-0 rounded-full
                    bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_80%)]
                    opacity-90
                  "
                />
              )}
            </button>
          );
        })}

        {/* flèche droite – visible aussi sur mobile */}
        <button
          type="button"
          onClick={() => onSelect(nextId)}
          className="
            inline-flex items-center justify-center
            h-7 w-7 rounded-full
            border border-[rgba(148,163,184,0.6)]
            text-slate-200 text-xs
            hover:bg-[rgba(15,23,42,0.9)]
            transition-colors
          "
          aria-label="Île suivante"
        >
          ›
        </button>
      </nav>

      {/* petit texte explicatif sous la barre */}
      <p className="mt-1 text-[0.65rem] text-slate-400 text-center px-4">
        Sers-toi de la barre pour naviguer et clique sur une île pour explorer mes projets.
      </p>
    </div>
  );
}
