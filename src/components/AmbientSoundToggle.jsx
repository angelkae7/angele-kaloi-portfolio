// src/components/AmbientSoundToggle.jsx
import { useState, useEffect } from "react";
import { useSound } from "../hooks/useSound";

// SVG icons — inline, no dependency
const IconSoundOn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 shrink-0">
    <polygon points="3 7.5 3 12.5 6 12.5 10 16 10 4 6 7.5" />
    <path d="M13 7a4 4 0 0 1 0 6" />
    <path d="M15.5 4.5a7 7 0 0 1 0 11" />
  </svg>
);

const IconSoundOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 shrink-0">
    <polygon points="3 7.5 3 12.5 6 12.5 10 16 10 4 6 7.5" />
    <line x1="14" y1="7" x2="18" y2="13" />
    <line x1="18" y1="7" x2="14" y2="13" />
  </svg>
);

export default function AmbientSoundToggle() {
  const [enabled, setEnabled] = useState(false);

  const { play, stop, audio } = useSound("/sounds/nav.mp3", {
    volume: 0.4,
    loop: true,
  });

  useEffect(() => {
    if (!audio) return;
    if (enabled) {
      play();
    } else {
      stop();
    }
  }, [enabled, audio, play, stop]);

  return (
    <button
      type="button"
      onClick={() => setEnabled((prev) => !prev)}
      className="
        fixed bottom-20 sm:bottom-4 left-6 md:left-6 z-20
        min-w-[2.5rem] h-10
        px-2.5
        rounded-full
        inline-flex items-center justify-center gap-1.5
        bg-[rgba(15,23,42,0.96)]
        border border-[rgba(148,163,184,0.85)]
        text-slate-300 text-xs font-medium
        shadow-[0_12px_30px_rgba(15,23,42,0.9)]
        hover:bg-[rgba(15,23,42,1)] hover:border-sky-500/50 hover:text-sky-200
        transition-all duration-200
      "
      aria-label={enabled ? "Couper la musique" : "Activer la musique"}
      aria-pressed={enabled}
    >
      {enabled ? <IconSoundOn /> : <IconSoundOff />}
      <span>Son</span>
    </button>
  );
}
