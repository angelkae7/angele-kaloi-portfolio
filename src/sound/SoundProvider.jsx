// src/sound/SoundProvider.jsx
import { useEffect, useRef, useState } from "react";
import { SoundContext } from "./SoundContext";

function makeAudio(src, volume) {
  const a = new Audio(src);
  a.volume = volume;
  return a;
}

export function SoundProvider({ children }) {
  const ambianceRef = useRef(null);
  const refs = useRef({});
  const [ambianceOn, setAmbianceOn] = useState(false);

  useEffect(() => {
    ambianceRef.current = makeAudio("/sounds/nav.mp3", 0.35);
    ambianceRef.current.loop = true;

    refs.current = {
      click:  makeAudio("/sounds/click.mp3",       0.75),
      drop:   makeAudio("/sounds/drop.mp3",        0.10),
      open:   makeAudio("/sounds/open.mp3",        0.10),
      welcome: makeAudio("/sounds/welcome.mp3",     0.10),
      pop:     makeAudio("/sounds/pop.mp3",         0.25),
      nav:    makeAudio("/sounds/hover.mp3",        0.60),
      woosh:  makeAudio("/sounds/switch.mp3",       0.35),
      arrow:  makeAudio("/sounds/prev-switch.mp3",  0.42),
      hover:  makeAudio("/sounds/hover.mp3",        0.18),
    };

    return () => ambianceRef.current?.pause();
  }, []);

  const startAmbiance = () => {
    const a = ambianceRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play().then(() => setAmbianceOn(true)).catch(() => {});
  };

  const toggleAmbiance = () => {
    const a = ambianceRef.current;
    if (!a) return;
    if (ambianceOn) { a.pause(); setAmbianceOn(false); }
    else { a.play().then(() => setAmbianceOn(true)).catch(() => {}); }
  };

  const playFx = (type = "click") => {
    const audio = refs.current[type] ?? refs.current.click;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return (
    <SoundContext.Provider value={{ ambianceOn, startAmbiance, toggleAmbiance, playFx }}>
      {children}
    </SoundContext.Provider>
  );
}
