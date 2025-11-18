// src/components/IslandMeOverlay.jsx
import { useState } from "react";

const VIDEO_URL = "https://www.youtube.com/embed/FV59sY5XE2E"; // 👈 remplace par ton embed

export default function IslandMeOverlay({ onClose }) {
  const [tab, setTab] = useState("intro"); // "intro" | "parcours" | "skills" | "chrono"

  const tabs = [
    { id: "intro", label: "À propos" },
    { id: "parcours", label: "Parcours" },
    { id: "skills", label: "Compétences" },
    { id: "chrono", label: "Chronologie" },
  ];

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/50 backdrop-blur-xl">
      <div className="relative max-w-5xl w-full mx-4 md:mx-8 max-h-[90vh] rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90 border border-slate-700/50 shadow-[0_40px_120px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Scroll interne */}
        <div className="overflow-y-auto max-h-[90vh] px-6 sm:px-10 py-8 sm:py-10">
          {/* Bouton fermer */}
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-slate-900/80 border border-slate-600/60 w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Étiquette */}
          <p className="text-[11px] tracking-[0.28em] uppercase text-sky-300 mb-4">
            Île centrale — À propos
          </p>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            Je crée des expériences numériques qui se ressentent.
          </h1>

          {/* Sous-titre d’intro */}
          <p className="text-slate-200 leading-relaxed text-base sm:text-lg max-w-3xl mb-8">
            Je suis <span className="font-semibold text-white">Angèle Kaloï</span>, développeuse web & créatrice
            d’expériences interactives. Je navigue entre front, UX/UI, 3D et VR
            pour concevoir des expériences qui restent claires même quand la
            technologie devient complexe.
          </p>

          {/* Onglets */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(({ id, label }) => {
              const isActive = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={[
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition",
                    isActive
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                      : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/80",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* 🔹 ONGLET 1 — À PROPOS */}
          {tab === "intro" && (
            <div className="space-y-10">
              {/* Capsule univers en îles */}
              <div className="max-w-2xl rounded-2xl bg-slate-800/40 border border-slate-600/40 px-5 py-4 text-slate-200 leading-relaxed">
                Ce portfolio est un univers en îles : chaque îlot présente une
                facette de mon travail — web interactif, UX/UI, XR, vidéo, arts
                numériques — avec toujours la même priorité&nbsp;: ce que vit
                l’utilisateur.
              </div>

              {/* Bloc CV vidéo */}
              <section>
                <h2 className="text-[11px] tracking-[0.28em] text-slate-300 uppercase mb-3">
                  CV vidéo
                </h2>

                <p className="text-sm text-slate-300 mb-4">
                  2 minutes pour entendre ma voix, mon énergie et la façon dont
                  je présente mon parcours.
                </p>

                <div className="rounded-2xl overflow-hidden border border-slate-700/70 shadow-xl shadow-black/50 mb-3">
                  <iframe
                    className="w-full h-[220px] sm:h-[280px] md:h-[320px]"
                    src={VIDEO_URL}
                    title="CV vidéo Angèle K."
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <p className="text-xs text-slate-400">
                  Si la vidéo ne s’affiche pas, vous pouvez la{" "}
                  <a
                    href={VIDEO_URL.replace("embed/", "watch?v=")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200 underline-offset-2 hover:underline"
                  >
                    regarder directement sur YouTube
                  </a>
                  .
                </p>
              </section>
            </div>
          )}

          {/* 🔹 ONGLET 2 — PARCOURS (plus léger & ludique) */}
          {tab === "parcours" && (
            <div className="space-y-10">
              <section>
                <h2 className="text-[11px] tracking-[0.28em] text-slate-300 uppercase mb-4">
                  Parcours en bref
                </h2>
                <p className="text-sm text-slate-300 mb-6 max-w-3xl">
                  Un fil rouge : passer de la communication visuelle à la
                  conception d’expériences interactives complètes, du prototype
                  à la mise en production.
                </p>

                {/* 3 cartes synthétiques */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4 flex flex-col gap-2">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400">
                      Aujourd’hui
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Dev web & UX — OPT-NC
                    </p>
                    <p className="text-xs text-slate-300">
                      Alternance sur la refonte du site institutionnel et sa
                      page d’accueil.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4 flex flex-col gap-2">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400">
                      Formation
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      BUT MMI — UNC
                    </p>
                    <p className="text-xs text-slate-300">
                      Dév web, UX/UI, XR et audiovisuel pour des dispositifs
                      interactifs complets.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4 flex flex-col gap-2">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400">
                      Terrain de jeu
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Nouvelle-Calédonie
                    </p>
                    <p className="text-xs text-slate-300">
                      Projets ancrés dans les usages locaux, le service public
                      et l’expérience usager.
                    </p>
                  </div>
                </div>
              </section>

              {/* petite frise en 3 étapes */}
              <section>
                <h3 className="text-[11px] tracking-[0.26em] text-slate-300 uppercase mb-4">
                  Évolution
                </h3>
                <div className="relative">
                  <div className="hidden md:block absolute left-0 right-0 top-4 h-px bg-slate-700/60" />
                  <div className="grid md:grid-cols-3 gap-6 md:gap-3">
                    <div className="flex md:flex-col gap-2 md:items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center text-xs text-slate-200 shadow-md">
                        1
                      </div>
                      <div className="md:text-center">
                        <p className="text-xs font-semibold text-slate-50">
                          Communication & image
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Graphisme, vidéo, habillage et narration visuelle.
                        </p>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center text-xs text-slate-200 shadow-md">
                        2
                      </div>
                      <div className="md:text-center">
                        <p className="text-xs font-semibold text-slate-50">
                          UX & interfaces
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Parcours, maquettes, prototypes centrés sur l’usage.
                        </p>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:items-center">
                      <div className="w-8 h-8 rounded-full bg-sky-500 border border-sky-200 flex items-center justify-center text-xs text-white shadow-md">
                        3
                      </div>
                      <div className="md:text-center">
                        <p className="text-xs font-semibold text-slate-50">
                          Développement & XR
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Implémentation front, 3D, VR et déploiement en ligne.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* 🔹 ONGLET 3 — COMPÉTENCES */}
          {tab === "skills" && (
            <div className="space-y-10">
              <section>
                <h2 className="text-[11px] tracking-[0.28em] text-slate-300 uppercase mb-4">
                  Compétences clés
                </h2>
                <p className="text-sm text-slate-300 mb-6 max-w-3xl">
                  Un profil hybride : développement front, UX/UI et création
                  visuelle, avec une attention particulière à ce que vit
                  l’utilisateur.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {/* Hard skills */}
                  <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400 mb-2">
                      Hard skills
                    </p>
                    <ul className="text-xs text-slate-200 space-y-1.5">
                      <li>• Dév front : JavaScript, React, Vite, Tailwind.</li>
                      <li>
                        • Intégration web & accessibilité : HTML/CSS, design
                        system, composants réutilisables.
                      </li>
                      <li>
                        • Drupal : intégration front, templates, mise en page de
                        contenus.
                      </li>
                      <li>
                        • Expériences 3D & XR : Unity, WebGL, React Three Fiber.
                      </li>
                      <li>
                        • Audiovisuel : tournage, montage, mise en scène vidéo.
                      </li>
                    </ul>
                  </div>

                  {/* Soft skills */}
                  <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-slate-400 mb-2">
                      Soft skills
                    </p>
                    <ul className="text-xs text-slate-200 space-y-1.5">
                      <li>
                        • Empathie utilisateur : écouter, reformuler et
                        transformer les besoins en interfaces.
                      </li>
                      <li>
                        • Gestion de projet : cadrage, priorisation, suivi des
                        étapes & livrables.
                      </li>
                      <li>
                        • Travail en équipe : collaboration avec développeurs,
                        designers, communication & DSI.
                      </li>
                      <li>
                        • Vulgarisation : rendre compréhensibles des sujets
                        techniques ou complexes.
                      </li>
                      <li>
                        • Autonomie & curiosité : veille, tests et prototypage
                        pour proposer des solutions.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* 🔹 ONGLET 4 — CHRONOLOGIE (nouvelle version sans bug d’alignement) */}
          {tab === "chrono" && (
            <div className="space-y-8">
              <section>
                <h2 className="text-[11px] tracking-[0.28em] text-slate-300 uppercase mb-6">
                  Chronologie
                </h2>

                <p className="text-sm text-slate-300 mb-6 max-w-3xl">
                  Un parcours qui relie communication, design et développement
                  pour aller progressivement vers des expériences interactives
                  complètes : du concept à la mise en ligne.
                </p>

                <div className="space-y-4">
                  {/* Carte actuelle */}
                  <div className="relative rounded-2xl bg-slate-900/80 border border-sky-500/60 px-5 py-4">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-sky-400 to-sky-500" />
                    <div className="pl-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-sky-300 mb-1">
                        Actuellement
                      </p>
                      <p className="text-xs text-slate-400 mb-1">
                        2025–2026 · Alternance — L'Office des postes et télécommunications de Nouvelle-Calédonie (OPT-NC)
                      </p>
                      <p className="text-sm font-semibold text-slate-50">
                        Dev web & UX — Refonte du site institutionnel
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                        Nouvelle page d’accueil, intégration front (Drupal),
                        optimisation accessibilité & performance, co-construction
                        avec la DSI et la communication, mise en place d’un
                        design system réutilisable.
                      </p>
                    </div>
                  </div>

                  {/* Carte ISEA */}
                  <div className="relative rounded-2xl bg-slate-900/70 border border-slate-700/70 px-5 py-4">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-slate-700/80" />
                    <div className="pl-4">
                      <p className="text-xs text-slate-400 mb-1">
                        2024 · Stage (6 mois) — Institut de sciences exactes et appliquées (ISEA)

                      </p>
                      <p className="text-sm font-semibold text-slate-50">
                        Chargée de communication & création visuelle
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                        Conception d’outils visuels pour un projet de recherche
                        scientifique, identité visuelle & supports graphiques
                        pour vulgariser les résultats.
                      </p>
                    </div>
                  </div>

                  {/* Carte CANAL+ */}
                  <div className="relative rounded-2xl bg-slate-900/70 border border-slate-700/70 px-5 py-4">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-slate-700/80" />
                    <div className="pl-4">
                      <p className="text-xs text-slate-400 mb-1">
                        2023 · Stage (3 mois) — CANAL+ Calédonie
                      </p>
                      <p className="text-sm font-semibold text-slate-50">
                        Contenus graphiques & vidéo
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                        Communication interne & externe, habillages d’émissions,
                        visuels d’antenne et montages vidéo pour des formats TV.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
