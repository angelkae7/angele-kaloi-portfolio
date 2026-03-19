// src/sound/SoundContext.jsx
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const ambianceRef = useRef(null);
  const clickRef = useRef(null);
  const navRef = useRef(null);

  const [ambianceOn, setAmbianceOn] = useState(false);

  useEffect(() => {
    const ambiance = new Audio("/sounds/nav.mp3");
    ambiance.loop = true;
    ambiance.volume = 0.35;
    ambianceRef.current = ambiance;

    const click = new Audio("/sounds/click.mp3");
    click.volume = 0.8;
    clickRef.current = click;

    const nav = new Audio("/sounds/hover.mp3");
    nav.volume = 0.7;
    navRef.current = nav;

    return () => {
      ambiance.pause();
    };
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
    if (ambianceOn) {
      a.pause();
      setAmbianceOn(false);
    } else {
      a.play().then(() => setAmbianceOn(true)).catch(() => {});
    }
  };

  const playFx = (type = "click") => {
    let audio;
    if (type === "nav") audio = navRef.current;
    else audio = clickRef.current;

    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return (
    <SoundContext.Provider
      value={{
        ambianceOn,
        startAmbiance,
        toggleAmbiance,
        playFx,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound doit être utilisé dans <SoundProvider>");
  }
  return ctx;
}
