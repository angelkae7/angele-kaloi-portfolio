// src/components/HudTopBar.jsx
export default function HudTopBar() {
  return (
    <div className="fixed top-3 left-3 z-20">
      <div
        className="
          glass-panel
          flex items-center
          gap-1.5
          px-3 py-1.5
          rounded-full
        "
      >
        <span className="text-xs sm:text-sm tracking-[0.12em] uppercase text-slate-100">
          {/* Version courte MOBILE */}
          <span className="inline sm:hidden">
            <span className="font-semibold">A.K</span>
          </span>

          {/* Version complète TABLETTE / DESKTOP */}
          <span className="hidden sm:inline">
            <span className="font-semibold">Angèle Kaloï</span>
            <span className="text-slate-400"> — Portfolio</span>
          </span>
        </span>
      </div>
    </div>
  );
}
