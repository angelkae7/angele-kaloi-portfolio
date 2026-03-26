// src/hooks/useSound.js
import { useCallback, useEffect, useRef } from "react";

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

  const play = useCallback((resetTime = true) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (resetTime) audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  }, []);

  return { play, stop };
}
