// src/components/AmbientSoundToggle.jsx
import { useState, useEffect } from "react";
import { useSound } from "../hooks/useSound";

export default function AmbientSoundToggle() {
  const [enabled, setEnabled] = useState(false);

  // musique d’ambiance, volume plus bas, en boucle
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
        fixed bottom-4 left-6 md:left-6 z-20
        w-9 h-9 md:w-10 md:h-10
        rounded-full
        flex items-center justify-center
        bg-[rgba(15,23,42,0.96)]
        border border-[rgba(148,163,184,0.85)]
        text-[0.7rem] md:text-xs text-slate-100
        shadow-[0_12px_30px_rgba(15,23,42,0.9)]
        hover:bg-[rgba(15,23,42,1)]
        transition
      "
      aria-label={enabled ? "Couper la musique" : "Activer la musique"}
    >
      {enabled ? "🔊" : "🔈"}
    </button>
  );
}
