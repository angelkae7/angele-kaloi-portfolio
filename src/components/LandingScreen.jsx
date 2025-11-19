// src/components/LandingScreen.jsx
import { useMemo } from "react";

export default function LandingScreen({ onEnter }) {
  // On génère une fois un tableau de particules
  const particles = useMemo(
    () =>
      Array.from({ length: 70 }, () => {
        const x = Math.random() * 100;
        const scale = 0.6 + Math.random() * 1.3;
        const duration = 10 + Math.random() * 12;
        const delay = Math.random() * -duration;
        const opacity = 0.3 + Math.random() * 0.5;
        const drift = (Math.random() - 0.5) * 20;

        return {
          x,
          scale,
          duration,
          delay,
          opacity,
          drift,
        };
      }),
    []
  );

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-slate-950 text-slate-50 overflow-hidden">
      {/* Particules */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p, index) => (
          <span
            key={index}
            className="particle"
            style={{
              "--x": `${p.x}vw`,
              "--scale": p.scale,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--opacity": p.opacity,
              "--drift": `${p.drift}vw`,
            }}
          />
        ))}
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-relaxed">
          Bozu së <em>User</em> ! Je te présente mon île
          <br />
          Comme celle d&apos;où je viens, celle-ci n&apos;existe pas seule.
        </h1>
        <p className="text-slate-400 max-w-md mx-auto mb-6">
          Clique pour entrer dans mon univers et découvrir mes îles.
        </p>
        <button
          onClick={onEnter}
          className="mt-2 px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition shadow-lg"
        >
          Entrer dans l’univers
        </button>
      </div>
    </div>
  );
}
