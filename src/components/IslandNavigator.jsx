// src/components/IslandNavigator.jsx
export default function IslandNavigator({
  steps,
  activeId,
  onSelect,
  compact = false, // 👈 plus fin quand overlay ouvert
}) {
  const activeIndex = steps.findIndex((s) => s.id === activeId);
  const prevId = steps[(activeIndex - 1 + steps.length) % steps.length]?.id;
  const nextId = steps[(activeIndex + 1) % steps.length]?.id;

  const basePadding = compact ? "py-1.5" : "py-2.5";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20">
      <nav
        className={`
          rounded-full border border-[rgba(148,163,184,0.55)]
          bg-[rgba(15,23,42,0.92)] backdrop-blur-xl
          px-3 md:px-4
          flex items-center gap-1.5 md:gap-3
          shadow-[0_16px_40px_rgba(15,23,42,0.85)]
          transition-all duration-200
          ${compact ? "scale-95" : "scale-100"}
        `}
      >
        {/* flèche gauche */}
        <button
          type="button"
          onClick={() => onSelect(prevId)}
          className={`
            hidden md:inline-flex items-center justify-center
            h-7 w-7 rounded-full
            border border-[rgba(148,163,184,0.6)]
            text-slate-200 text-xs
            hover:bg-[rgba(15,23,42,0.9)]
            transition-colors
          `}
          aria-label="Île précédente"
        >
          ‹
        </button>

        {/* items */}
        {steps.map((step) => {
          const isActive = step.id === activeId;
          return (
            <button
              key={step.id} // 👈 plus de warning
              type="button"
              onClick={() => onSelect(step.id)}
              className={`
                relative px-4 ${basePadding}
                text-[0.65rem] md:text-xs uppercase tracking-[0.22em]
                transition-all duration-200
                ${isActive ? "text-sky-100" : "text-slate-400/90"}
              `}
            >
              <span className="relative z-10 whitespace-nowrap">
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

        {/* flèche droite */}
        <button
          type="button"
          onClick={() => onSelect(nextId)}
          className={`
            hidden md:inline-flex items-center justify-center
            h-7 w-7 rounded-full
            border border-[rgba(148,163,184,0.6)]
            text-slate-200 text-xs
            hover:bg-[rgba(15,23,42,0.9)]
            transition-colors
          `}
          aria-label="Île suivante"
        >
          ›
        </button>
      </nav>

      {/* petit texte explicatif sous la barre */}
      <p className="mt-1 text-[0.65rem] text-slate-400 text-center">
        Sert toi de la barre pour naviguer et clique sur une île pour explorer mes projets.
      </p>
      
    </div>
  );
}
