// src/components/IslandNavigator.jsx

export default function IslandNavigator({ steps, activeId, onSelect }) {
  return (
    <div className="pointer-events-none fixed bottom-4 inset-x-0 z-30 flex justify-center">
      <div className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[rgba(15,23,42,0.9)] border border-[rgba(148,163,184,0.7)] shadow-[0_18px_40px_rgba(15,23,42,0.95)] backdrop-blur-xl">
        {steps.map((step, index) => {
          const isActive = step.id === activeId;
          const isPast =
            !isActive &&
            steps.findIndex((s) => s.id === activeId) > index;

          return (
            <div key={step.id} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSelect(step.id)}
                className={`
                  flex flex-col items-center gap-1 px-1
                  ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}
                `}
              >
                <div
                  className={`
                    h-2.5 w-2.5 rounded-full 
                    ${isActive ? "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" 
                              : isPast ? "bg-emerald-400/70" 
                                       : "bg-slate-500"}
                  `}
                />
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-200 whitespace-nowrap">
                  {step.shortLabel}
                </span>
              </button>

              {index < steps.length - 1 && (
                <div className="h-px w-6 md:w-10 bg-gradient-to-r from-slate-500/60 via-slate-500/30 to-slate-500/0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
