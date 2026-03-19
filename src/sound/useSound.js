// src/sound/useSound.js
import { useContext } from "react";
import { SoundContext } from "./SoundContext";

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound doit être utilisé dans <SoundProvider>");
  }
  return ctx;
}
