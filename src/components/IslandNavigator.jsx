// src/components/IslandNavigator.jsx
import clsx from "clsx";
import {useSound} from "../sound/SoundContext"; // 👈 TRÈS IMPORTANT : ce chemin-là

export default function IslandNavigator({
  steps,
  activeId,
  onSelect,
  compact = false, // plus fin quand overlay ouvert
}) {
  if (!steps || steps.length === 0) return null;

  const activeIndex = steps.findIndex((s) => s.id === activeId);
  const safeIndex = activeIndex === -1 ? 0 : activeIndex;

  const prevId = steps[(safeIndex - 1 + steps.length) % steps.length]?.id;
  const nextId = steps[(safeIndex + 1) % steps.length]?.id;
  const activeStep = steps[safeIndex];

  const {playFx} = useSound("nav"); // 👈 TRÈS IMPORTANT : ce chemin-là
  


  

  const basePadding = compact ? "py-1.5" : "py-2.5";

  const handlePrev = () => {
    prevId && onSelect(prevId);
    playFx("nav"); // 👈 joue le son de navigation
  };
  const handleNext = () => {
    nextId && onSelect(nextId);
    playFx("nav"); // 👈 joue le son de navigation
  };

  return (
    <div
      className={clsx(
        "fixed right-3 md:right-6 z-20",
        "flex flex-col items-end",
        "transition-all duration-300",
        compact ? "top-2 sm:top-3 scale-90 sm:scale-95" : "top-4 sm:top-4 md:top-4 scale-100"
      )}
    >
      {/* NAVIGATION */}
      <nav
        className="
          flex items-center
          rounded-xl bg-[rgba(15,23,42,0.9)]
          border border-sky-500/40
          backdrop-blur-xl
          shadow-[0_0_40px_-18px_rgba(56,189,248,0.8)]
          px-3 sm:px-4
        "
      >
        {/* --- Version mobile : flèche gauche + label actuel + flèche droite --- */}
        <div className="flex items-center gap-1 sm:gap-2 md:hidden">
          <button
            type="button"
            onClick={handlePrev}
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

          <div
            className={clsx(
              "relative px-4",
              basePadding,
              "text-[0.7rem] uppercase tracking-[0.22em] text-sky-100"
            )}
          >
            <span className="relative z-10 whitespace-nowrap">
              {activeStep?.shortLabel}
            </span>
            <span
              className="
                absolute inset-0 rounded-full
                bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_80%)]
                opacity-90
              "
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
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
        </div>

        {/* --- Version desktop : tous les onglets + flèches --- */}
        <div className="hidden md:flex items-center gap-1.5">
          {/* flèche gauche */}
          <button
            type="button"
            onClick={handlePrev}
            className="
              inline-flex items-center justify-center
              h-7 w-7 rounded-full
              border border-[rgba(148,163,184,0.6)]
              text-slate-100 text-xs
              hover:bg-[rgba(15,23,42,0.9)]
              transition-colors
            "
            aria-label="Île précédente"
          >
            ‹
          </button>

          {steps.map((step) => {
            const isActive = step.id === activeId;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onSelect(step.id)}
                className={clsx(
                  "relative px-4",
                  basePadding,
                  "text-[0.65rem] md:text-xs uppercase tracking-[0.22em]",
                  "transition-all duration-200",
                  isActive ? "text-sky-100" : "text-slate-400/90"
                )}
              >
                <span className="relative z-10 whitespace-nowrap">
                  {step.shortLabel}
                </span>

                {isActive && (
                  <span
                    className="
                      absolute inset-0 rounded-full
                      bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_60%)]
                      opacity-80
                    "
                  />
                )}
              </button>
            );
          })}

          {/* flèche droite */}
          <button
            type="button"
            onClick={handleNext}
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
        </div>
      </nav>

      {/* petit texte explicatif sous la barre */}
      <p className="mt-1 text-[0.65rem] text-slate-400 text-right max-w-[14rem] leading-snug">
        Sert-toi de la barre pour naviguer et clique sur une île pour explorer mes projets.
      </p>
    </div>
  );
}
