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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight drop-shadow-lg">
          Bozu së <em>User</em>, je te présente mon île !
          <br />
          Comme celle d’où je viens, celle-ci n’existe pas seule.
        </h1>

        {/* Professional anchor — quiet, doesn’t compete with the poetic title */}
        <p className="text-slate-100/60 text-sm md:text-base font-normal tracking-wide mb-6">
          Angèle Kaloï · Développeuse web &amp; UX designer
        </p>

        <p className="text-slate-100/75 text-base md:text-lg max-w-md mx-auto mb-8">
          Clique pour entrer dans mon univers et découvrir mes îles.
        </p>

        <button
          onClick={handleEnter}
          className="mt-2 px-8 py-3.5 rounded-2xl bg-white/95 hover:bg-white text-sky-600 font-semibold text-base transition-all duration-200 shadow-xl hover:shadow-sky-500/25 hover:-translate-y-0.5 active:translate-y-0"
        >
          Entrer dans l’univers
        </button>

        {/* Expectation-setter for first-time visitors */}
        <p className="mt-3 text-slate-100/40 text-xs tracking-wide">
          5 îles · portfolio interactif 3D
        </p>
      </div>

      {/* Particles are styled via .particle + @keyframes floatUp in index.css */}
    </div>
  );
}
