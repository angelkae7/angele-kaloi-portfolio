import { useEffect, useRef } from "react";
// src/components/LandingScreen.jsx
import { useSound } from "../sound/SoundContext"; // 👈 TRÈS IMPORTANT : ce chemin-là


export default function LandingScreen({ onEnter }) {
  const containerRef = useRef();
  const {startAmbiance} = useSound("/sounds/nav.mp3", { volume: 0.35, loop: true });
    const handleEnter = () => {
    startAmbiance();   // 👈 démarre la musique
    onEnter();         // 👈 passe à l’univers
  };

  useEffect(() => {
    const container = containerRef.current;

    const PARTICLE_COUNT = 70;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";

      // random props
      const x = Math.random() * 100;
      const scale = 0.5 + Math.random() * 1.2;
      const duration = 10 + Math.random() * 12;
      const delay = Math.random() * -duration;
      const opacity = 0.25 + Math.random() * 0.5;
      const drift = (Math.random() - 0.5) * 20;

      particle.style.setProperty("--x", x + "vw");
      particle.style.setProperty("--scale", scale);
      particle.style.setProperty("--duration", duration + "s");
      particle.style.setProperty("--delay", delay + "s");
      particle.style.setProperty("--opacity", opacity);
      particle.style.setProperty("--drift", drift + "vw");

      container.appendChild(particle);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen flex items-center justify-center text-slate-50 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #020618 0%, #5E62C4 45%, #d8f2ff 100%)",
      }}
    >
      {/* Contenu */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-relaxed drop-shadow">
          Bozu së <em>User</em>, je te présente mon île !
          <br />
          Comme celle d'où je viens, celle-ci n'existe pas seule.
        </h1>

        <p className="text-slate-100/70 max-w-md mx-auto mb-6">
          Clique pour entrer dans mon univers et découvrir mes îles.
        </p>

        <button
          onClick={handleEnter}
          className="mt-2 px-6 py-3 rounded-2xl bg-white/90 hover:bg-white text-sky-600 font-medium transition shadow-xl"
        >
          Entrer dans l’univers
        </button>
      </div>

      {/* Injection des particules */}
      <style>{`
        .particle {
          position: absolute;
          width: 8px;
          height: 14px;
          background: rgba(255,255,255,0.9);
          border-radius: 4px;
          opacity: 0;
          transform: translate3d(var(--x), 100vh, 0) scale(var(--scale));
          animation: floatUp var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translate3d(var(--x), 105vh, 0) scale(var(--scale));
          }
          10% {
            opacity: var(--opacity);
          }
          70% {
            opacity: var(--opacity);
          }
          100% {
            opacity: 0;
            transform: translate3d(
              calc(var(--x) + var(--drift)),
              -10vh,
              0
            ) scale(var(--scale));
          }
        }
      `}</style>
    </div>
  );
}
