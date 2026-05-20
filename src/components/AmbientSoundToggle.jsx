// src/components/AmbientSoundToggle.jsx
import { useSound } from "../sound/useSound";

const IconSoundOn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 shrink-0" aria-hidden="true">
    <polygon points="3 7.5 3 12.5 6 12.5 10 16 10 4 6 7.5" />
    <path d="M13 7a4 4 0 0 1 0 6" />
    <path d="M15.5 4.5a7 7 0 0 1 0 11" />
  </svg>
);

const IconSoundOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 shrink-0" aria-hidden="true">
    <polygon points="3 7.5 3 12.5 6 12.5 10 16 10 4 6 7.5" />
    <line x1="14" y1="7" x2="18" y2="13" />
    <line x1="18" y1="7" x2="14" y2="13" />
  </svg>
);

export default function AmbientSoundToggle() {
  // Connecté au SoundContext — même source de vérité que LandingScreen
  const { ambianceOn, toggleAmbiance } = useSound();

  return (
    <button
      type="button"
      onClick={toggleAmbiance}
      className="
        fixed bottom-20 sm:bottom-4 left-6 md:left-6 z-20
        min-w-[2.5rem] h-10
        px-2.5
        rounded-full
        inline-flex items-center justify-center gap-1.5
        bg-[var(--s-high)]
        border border-[var(--b-muted)]
        text-slate-400 text-xs font-medium
        hover:border-[var(--b-accent-h)] hover:text-sky-300
        transition-all duration-200
      "
      aria-label={ambianceOn ? "Couper la musique" : "Activer la musique"}
      aria-pressed={ambianceOn}
    >
      {ambianceOn ? <IconSoundOn /> : <IconSoundOff />}
      <span>Son</span>
    </button>
  );
}
