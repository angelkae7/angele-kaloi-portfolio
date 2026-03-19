// src/hooks/useSound.js
import { useEffect, useRef } from "react";

export function useSound(src, options = {}) {
  const { volume = 1, loop = false } = options;
  const audioRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = loop;

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, [src, volume, loop]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // remet au début pour les petits clics
    audio.currentTime = 0;
    audio.play().catch(() => {
      // si le navigateur bloque, on laisse juste tomber silencieusement
    });
  };

  const stop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  };

  return { play, stop, audio: audioRef.current };
}
