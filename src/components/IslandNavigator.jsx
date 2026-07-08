// src/components/IslandNavigator.jsx
import clsx from "clsx";
import { useSound } from "../sound/useSound";

// Shared class for every prev/next arrow button — used in both mobile and desktop layouts
const ARROW_BTN =
  "inline-flex items-center justify-center h-7 w-7 rounded-full " +
  "text-slate-500 text-sm " +
  "hover:text-sky-300 hover:shadow-[0_2px_10px_rgba(200,66,26,0.30)] transition-all duration-150";

export default function IslandNavigator({
  id,
  steps,
  activeId,
  onSelect,
  onArrowClick,
  compact = false,
}) {
  const { playFx } = useSound("nav");

  if (!steps || steps.length === 0) return null;

  const activeIndex = steps.findIndex((s) => s.id === activeId);
  const safeIndex = activeIndex === -1 ? 0 : activeIndex;

  const prevId = steps[(safeIndex - 1 + steps.length) % steps.length]?.id;
  const nextId = steps[(safeIndex + 1) % steps.length]?.id;
  const activeStep = steps[safeIndex];
  const basePadding = compact ? "py-1.5" : "py-2.5";

  const handlePrev = () => {
    if (prevId) onArrowClick(prevId);
    playFx("nav");
  };
  const handleNext = () => {
    if (nextId) onArrowClick(nextId);
    playFx("nav");
  };

  return (
    <div
      id={id}
      className={clsx(
        "fixed right-3 md:right-6 z-20",
        "flex flex-col items-end",
        "transition-all duration-300",
        compact ? "top-2 sm:top-3" : "top-4"
      )}
    >
      <nav
        aria-label="Navigation entre les îles"
        className="
          flex items-center
          rounded-2xl bg-[var(--s-high)]
          border border-[var(--b-muted)]
          px-2 sm:px-3
        "
      >
        {/* Mobile: ‹ active label › — label click opens overlay */}
        <div className="flex items-center gap-1 md:hidden">
          <button type="button" onClick={handlePrev} className={ARROW_BTN} aria-label="Île précédente" aria-keyshortcuts="ArrowLeft">‹</button>

          <button
            type="button"
            onClick={() => { onSelect(activeId); playFx("nav"); }}
            className={clsx("relative px-4", basePadding, "text-xs uppercase tracking-[0.18em] text-sky-100 font-medium")}
          >
            <span className="relative z-10 whitespace-nowrap">{activeStep?.shortLabel}</span>
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(200,66,26,0.15),transparent_80%)] shadow-[0_2px_10px_rgba(200,66,26,0.22)]" />
          </button>

          <button type="button" onClick={handleNext} className={ARROW_BTN} aria-label="Île suivante" aria-keyshortcuts="ArrowRight">›</button>
        </div>

        {/* Desktop: ‹ tab tab tab tab › — tab click opens overlay */}
        <div className="hidden md:flex items-center gap-0.5">
          <button type="button" onClick={handlePrev} className={ARROW_BTN} aria-label="Île précédente" aria-keyshortcuts="ArrowLeft">‹</button>

          {steps.map((step) => {
            const isActive = step.id === activeId;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => { onSelect(step.id); playFx("nav"); }}
                className={clsx(
                  "relative px-4", basePadding,
                  "text-xs uppercase tracking-[0.18em]",
                  "rounded-full transition-all duration-200",
                  isActive ? "text-sky-100 font-semibold" : "text-slate-400 hover:text-slate-100 font-medium"
                )}
              >
                <span className="relative z-10 whitespace-nowrap">{step.shortLabel}</span>
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_bottom,rgba(400,40,40,0.15),transparent_65%)] shadow-[0_1px_5px_rgba(200,66,26,0.28)]" />
                )}
              </button>
            );
          })}

          <button type="button" onClick={handleNext} className={ARROW_BTN} aria-label="Île suivante" aria-keyshortcuts="ArrowRight">›</button>
        </div>
      </nav>

      {/* Hint — visible on all breakpoints when not compact (fix 7: was md:block only) */}
      {!compact && (
        <p className="mt-1 text-xs text-slate-500 text-right max-w-[14rem] leading-snug">
          Navigue entre les îles et clique pour explorer.
        </p>
      )}
    </div>
  );
}
