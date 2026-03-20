// src/components/LandingScreen.jsx
import { useEffect, useRef } from "react";
import { useSound } from "../sound/useSound";

export default function LandingScreen({ onEnter }) {
  const containerRef = useRef();
  const { startAmbiance } = useSound("/sounds/nav.mp3", { volume: 0.35, loop: true });

  const handleEnter = () => {
    startAmbiance();
    onEnter();
  };

  // Particules flottantes
  useEffect(() => {
    const container = containerRef.current;
    const PARTICLE_COUNT = 70;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const x        = Math.random() * 100;
      const scale    = 0.5 + Math.random() * 1.2;
      const duration = 10 + Math.random() * 12;
      const delay    = Math.random() * -duration;
      const opacity  = 0.25 + Math.random() * 0.5;
      const drift    = (Math.random() - 0.5) * 20;
      p.style.setProperty("--x",        x + "vw");
      p.style.setProperty("--scale",    scale);
      p.style.setProperty("--duration", duration + "s");
      p.style.setProperty("--delay",    delay + "s");
      p.style.setProperty("--opacity",  opacity);
      p.style.setProperty("--drift",    drift + "vw");
      container.appendChild(p);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen flex items-center justify-center text-slate-50 overflow-hidden"
      style={{ background: "linear-gradient(168deg, #080720 0%, #141080 38%, #3d3db8 68%, #a0aee8 88%, #d8e3f8 100%)" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Salutation */}
        <div className="landing-up mb-7" style={{ animationDelay: "0.1s" }}>
          <p className="font-extrabold text-white leading-none tracking-tight"
             style={{ fontSize: "clamp(2.8rem,7vw,4.2rem)", letterSpacing: "-1.5px" }}>
            Bozu së
          </p>
          <span className="flex items-center justify-center gap-3 mt-2.5 text-[13px] text-white/45 tracking-wide">
            <span className="block w-7 h-px bg-white/20" />
            bonjour en langue kanak
            <span className="block w-7 h-px bg-white/20" />
          </span>
        </div>

        {/* Carte SVG Nouvelle-Calédonie */}
        <div className="landing-fade flex flex-col items-center gap-2 mb-3"
             style={{ animationDelay: "0.75s" }}>
          <svg width="320" height="150" viewBox="0 0 420 195" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* Grande Terre — fill */}
            <path className="landing-fill-path" pathLength="1"
              style={{ fill: "rgba(255,255,255,0.1)", animationDuration: "1s", animationDelay: "3.0s", opacity: 0 }}
              d="M 18,52 C 30,42 55,30 88,22 C 118,15 152,14 183,22 C 210,29 232,42 252,58 C 268,71 280,88 290,108 C 297,124 302,142 302,158 C 290,162 278,158 264,148 C 246,135 228,116 208,98 C 185,78 160,62 130,50 C 102,40 72,38 48,44 Z"
            />
            {/* Grande Terre — tracé */}
            <path className="landing-draw-path"
              style={{ stroke: "rgba(255,255,255,0.9)", strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", animationDuration: "2.2s", animationDelay: "0.9s" }}
              pathLength="1"
              d="M 18,52 C 30,42 55,30 88,22 C 118,15 152,14 183,22 C 210,29 232,42 252,58 C 268,71 280,88 290,108 C 297,124 302,142 302,158 C 290,162 278,158 264,148 C 246,135 228,116 208,98 C 185,78 160,62 130,50 C 102,40 72,38 48,44 C 34,48 22,52 18,52 Z"
            />

            {/* Bélep — fill */}
            <path className="landing-fill-path" pathLength="1"
              style={{ fill: "rgba(255,255,255,0.1)", animationDuration: "0.5s", animationDelay: "2.0s", opacity: 0 }}
              d="M 5,34 C 8,28 16,26 19,30 C 17,36 9,37 5,34 Z"
            />
            {/* Bélep — tracé */}
            <path className="landing-draw-path"
              style={{ stroke: "rgba(255,255,255,0.6)", strokeWidth: 1.2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", animationDuration: "0.4s", animationDelay: "1.6s" }}
              pathLength="1"
              d="M 5,34 C 8,28 16,26 19,30 C 17,36 9,37 5,34 Z"
            />

            {/* Île des Pins — fill */}
            <path className="landing-fill-path" pathLength="1"
              style={{ fill: "rgba(255,255,255,0.1)", animationDuration: "0.5s", animationDelay: "3.6s", opacity: 0 }}
              d="M 308,170 C 315,163 326,163 330,170 C 328,180 316,182 308,178 Z"
            />
            {/* Île des Pins — tracé */}
            <path className="landing-draw-path"
              style={{ stroke: "rgba(255,255,255,0.6)", strokeWidth: 1.2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", animationDuration: "0.5s", animationDelay: "3.2s" }}
              pathLength="1"
              d="M 308,170 C 315,163 326,163 330,170 C 328,180 316,182 308,178 Z"
            />

            {/* Ouvéa — fill */}
            <path className="landing-fill-path" pathLength="1"
              style={{ fill: "rgba(255,255,255,0.1)", animationDuration: "0.5s", animationDelay: "3.2s", opacity: 0 }}
              d="M 340,18 C 344,12 354,12 358,18 C 360,28 356,42 350,50 C 344,44 338,32 340,18 Z"
            />
            {/* Ouvéa — tracé */}
            <path className="landing-draw-path"
              style={{ stroke: "rgba(255,255,255,0.55)", strokeWidth: 1.1, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", animationDuration: "0.7s", animationDelay: "2.6s" }}
              pathLength="1"
              d="M 340,18 C 344,12 354,12 358,18 C 360,28 356,42 350,50 C 344,44 338,32 340,18 Z"
            />

            {/* Lifou — fill */}
            <path className="landing-fill-path" pathLength="1"
              style={{ fill: "rgba(255,255,255,0.1)", animationDuration: "0.5s", animationDelay: "3.5s", opacity: 0 }}
              d="M 354,68 C 362,60 378,58 390,64 C 402,70 408,84 406,98 C 404,112 394,122 380,124 C 366,126 354,116 350,102 C 346,88 348,76 354,68 Z"
            />
            {/* Lifou — tracé */}
            <path className="landing-draw-path"
              style={{ stroke: "rgba(255,255,255,0.65)", strokeWidth: 1.3, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", animationDuration: "0.8s", animationDelay: "2.85s" }}
              pathLength="1"
              d="M 354,68 C 362,60 378,58 390,64 C 402,70 408,84 406,98 C 404,112 394,122 380,124 C 366,126 354,116 350,102 C 346,88 348,76 354,68 Z"
            />

            {/* Maré — fill */}
            <path className="landing-fill-path" pathLength="1"
              style={{ fill: "rgba(255,255,255,0.1)", animationDuration: "0.5s", animationDelay: "3.6s", opacity: 0 }}
              d="M 356,138 C 364,130 378,130 386,138 C 390,148 384,160 372,162 C 360,162 352,152 356,138 Z"
            />
            {/* Maré — tracé */}
            <path className="landing-draw-path"
              style={{ stroke: "rgba(255,255,255,0.55)", strokeWidth: 1.1, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", animationDuration: "0.6s", animationDelay: "3.05s" }}
              pathLength="1"
              d="M 356,138 C 364,130 378,130 386,138 C 390,148 384,160 372,162 C 360,162 352,152 356,138 Z"
            />
          </svg>

          <p className="landing-up text-[11px] tracking-[1.8px] uppercase text-white/30"
             style={{ animationDelay: "3.6s" }}>
            Nouvelle-Calédonie · Pacifique Sud
          </p>
        </div>

        {/* Accroche */}
        <h1 className="landing-up text-white font-semibold leading-snug max-w-md mb-2"
            style={{ fontSize: "clamp(1.1rem,2.8vw,1.45rem)", animationDelay: "3.8s" }}>
          <em className="not-italic opacity-75">User</em>, je te présente mon île.<br />
          Comme celle d'où je viens, celle-ci n'existe pas seule.
        </h1>

        <p className="landing-up text-white/35 text-xs tracking-wide mb-8"
           style={{ animationDelay: "4.0s" }}>
          Angèle Kaloï · Développeuse web &amp; UX designer
        </p>

        {/* CTA */}
        <div className="landing-up flex flex-col items-center gap-3"
             style={{ animationDelay: "4.2s" }}>
          <button
            onClick={handleEnter}
            className="px-9 py-3.5 rounded-full font-semibold text-sm transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "rgba(255,255,255,0.95)", color: "#0f0d50" }}
          >
            Entrer dans l'univers
          </button>
          <span className="text-[11px] text-white/20 tracking-wide">
            5 îles · portfolio interactif 3D
          </span>
        </div>

      </div>
    </div>
  );
}
