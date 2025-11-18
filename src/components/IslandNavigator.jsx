// src/components/IslandNavigator.jsx
export default function IslandNavigator({
  steps,
  activeId,
  onSelect,
  dense = false,
}) {
  return (
    <div
      className={
        "pointer-events-none absolute left-1/2 -translate-x-1/2 z-20 " +
        (dense ? "top-2" : "top-5 md:top-6")
      }
    >
      <nav
        className={
          "pointer-events-auto flex items-center justify-center gap-2 md:gap-3 " +
          "rounded-full bg-[rgba(15,23,42,0.96)] border border-[rgba(148,163,184,0.7)] " +
          (dense
            ? "px-3 py-1 shadow-[0_12px_30px_rgba(15,23,42,0.8)]"
            : "px-5 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.9)]")
        }
      >
        {steps.map((step) => {
          const isActive = step.id === activeId;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelect(step.id)}
              className={
                "relative flex items-center gap-1.5 md:gap-2 rounded-full " +
                (dense ? "px-2 py-0.5" : "px-3 md:px-4 py-1") +
                " text-[0.6rem] md:text-[0.7rem] font-medium tracking-[0.18em] uppercase transition " +
                (isActive
                  ? "bg-[rgba(15,23,42,0.98)] text-slate-50 shadow-[0_0_18px_rgba(56,189,248,0.7)] border border-[rgba(56,189,248,0.8)]"
                  : "text-slate-300/80 border border-transparent hover:border-[rgba(148,163,184,0.7)] hover:bg-[rgba(15,23,42,0.9)]")
              }
            >
              {/* petit point état */}
              <span
                className={
                  "inline-block rounded-full " +
                  (dense
                    ? "h-1.5 w-1.5 md:h-2 md:w-2"
                    : "h-2 w-2 md:h-2.5 md:w-2.5") +
                  " " +
                  (isActive
                    ? "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"
                    : "bg-slate-500/70")
                }
              />

              <span className="whitespace-nowrap">{step.shortLabel}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
