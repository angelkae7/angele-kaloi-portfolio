// src/components/IslandMeOverlay.jsx
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { useSound } from "../sound/useSound.js";

const VIDEO_URL = "https://www.youtube.com/embed/FV59sY5XE2E";

// Module-level constants — not recreated on every render
// Fix 11: reordered to À propos → Compétences → Parcours → Chronologie
const TABS_LIST = [
  { id: "intro",    label: "À propos" },
  { id: "skills",   label: "Compétences" },
  { id: "parcours", label: "Parcours" },
  { id: "chrono",   label: "Chronologie" },
];

const PARCOURS_CARDS = [
  {
    label: "Aujourd'hui",
    title: "En recherche — Master UX Design",
    body: "À la recherche d'une alternance en UX Design pour intégrer un Master CODUX / DEDI sur deux ans.",
  },
  {
    label: "Formation",
    title: "BUT MMI — UNC (diplômée 2025)",
    body: "Dév web, UX/UI, XR et audiovisuel. Socle complet du concept à la mise en production.",
  },
  {
    label: "Terrain de jeu",
    title: "Nouvelle-Calédonie",
    body: "Projets ancrés dans les usages locaux, le service public et l'expérience usager.",
  },
];

const EVOLUTION_STEPS = [
  { num: "1", title: "Communication & image",  body: "Graphisme, vidéo, habillage et narration visuelle.", active: false },
  { num: "2", title: "Développement & XR",     body: "Implémentation front, 3D, VR et déploiement en ligne.", active: false },
  { num: "3", title: "UX Design — Master",     body: "Recherche centrée sur l'usage, stratégie d'expérience et conception de services.", active: true },
];

const CHRONO_ENTRIES = [
  {
    active: true,
    badge: "Actuellement",
    meta: "2026 · En recherche d'alternance",
    title: "Alternance UX Design — Master CODUX / DEDI (2 ans)",
    body: "À la recherche d'une alternance de deux ans en UX Design pour intégrer un Master CODUX / DEDI. Disponible pour échanger avec des équipes qui placent l'expérience utilisateur au cœur de leur produit.",
  },
  {
    active: false,
    meta: "janv. 2025 – nov. 2025 · Alternance — OPT Nouvelle-Calédonie",
    title: "Développeuse web — Refonte du site institutionnel",
    body: "Nouvelle page d'accueil, intégration front (Drupal), optimisation accessibilité & performance, co-construction avec la DSI et la communication, mise en place d'un design system réutilisable.",
  },
  {
    active: false,
    meta: "sept. – nov. 2024 · Stage (3 mois) — Institut de sciences exactes et appliquées (ISEA)",
    title: "Chargée de communication & création visuelle",
    body: "Conception d'outils visuels pour un projet de recherche scientifique, identité visuelle & supports graphiques pour vulgariser les résultats.",
  },
  {
    active: false,
    meta: "nov. – déc. 2023 · Stage (2 mois) — CANAL+ Calédonie",
    title: "Créatrice de contenus graphiques & vidéo",
    body: "Communication interne & externe, habillages d'émissions, visuels d'antenne et montages vidéo pour des formats TV.",
  },
];

export default function IslandMeOverlay({ onClose }) {
  const { playFx } = useSound();
  const [open, setOpen] = useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && setOpen(false)}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="dialog-overlay fixed inset-0 z-30 bg-slate-950/85" />

        {/* Centering wrapper */}
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <Dialog.Content
            asChild
            onCloseAutoFocus={(e) => { e.preventDefault(); onClose(); }}
            aria-describedby={undefined}
          >
            <div className="dialog-card overlay-card pointer-events-auto relative max-w-5xl w-full mx-4 md:mx-8 outline-none flex flex-col">
              <Dialog.Title className="sr-only">À propos — Angèle Kaloï</Dialog.Title>
              <Dialog.Description className="sr-only">
                Présentation d'Angèle Kaloï : parcours, compétences et chronologie.
              </Dialog.Description>

              {/* Close button outside scroll div so it stays fixed while content scrolls */}
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Fermer la section À propos"
                  className="overlay-close-icon-btn"
                  onPointerDown={() => playFx("click")}
                >
                  ✕
                </button>
              </Dialog.Close>

              <div className="overflow-y-auto overlay-scroll max-h-[90vh] px-5 sm:px-8 py-7 sm:py-9">

                <p className="text-xs tracking-[0.14em] uppercase text-sky-400 font-medium mb-3">
                  Île centrale — À propos
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 leading-tight mb-4">
                  Je crée des expériences numériques qui se ressentent.
                </h1>

                {/* Fix 3 — downloadable CV near the h1 */}
                <a
                  href="/cv-angele-kaloi.pdf"
                  download
                  className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-xl border border-sky-500/50 text-sky-300 text-sm font-medium hover:bg-sky-500/10 hover:border-sky-400 transition-colors duration-200"
                  onClick={() => playFx("click")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                    <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                  </svg>
                  Télécharger le CV (PDF)
                </a>

                <p className="text-slate-200 leading-relaxed text-base sm:text-lg max-w-3xl mb-7">
                  Je suis <span className="font-semibold text-slate-50">Angèle Kaloï</span>, développeuse web &
                  designer UX. Je navigue entre front-end, UX/UI, 3D et création audiovisuelle pour concevoir
                  des expériences qui restent humaines même quand la technologie devient complexe.
                </p>

                {/* Tabs */}
                <Tabs.Root defaultValue="intro">
                  <Tabs.List className="flex flex-wrap gap-2 mb-7" aria-label="Sections">
                    {TABS_LIST.map(({ id, label }) => (
                      <Tabs.Trigger
                        key={id}
                        value={id}
                        onClick={() => playFx("pop")}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-slate-800/60 text-slate-300 border border-slate-600/50 hover:border-sky-500/40 hover:text-slate-100 hover:bg-slate-700/60 data-[state=active]:bg-sky-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-sky-500/30 data-[state=active]:border-transparent"
                      >
                        {label}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>

                  {/* ── À PROPOS ── */}
                  {/* Fix 10: replaced meta-commentary about portfolio with availability statement */}
                  <Tabs.Content value="intro" className="space-y-8">
                    <div className="max-w-2xl rounded-2xl bg-sky-950/40 border border-sky-500/40 px-5 py-4 text-slate-200 text-sm leading-relaxed">
                      <p className="font-semibold text-sky-300 mb-1">En recherche d'alternance</p>
                      À la recherche d'une alternance en UX Design pour intégrer un <span className="font-medium text-slate-50">Master CODUX / DEDI</span> sur deux ans.
                      Disponible pour échanger dès maintenant.
                    </div>
                    <section>
                      <h2 className="text-xs font-semibold tracking-[0.12em] text-sky-400 uppercase mb-3">CV vidéo</h2>
                      <p className="text-sm text-slate-300 mb-4">
                        2 minutes pour entendre ma voix, mon énergie et la façon dont je présente mon parcours.
                      </p>
                      <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl shadow-black/50 mb-3">
                        <iframe
                          className="w-full h-[220px] sm:h-[280px] md:h-[320px]"
                          src={VIDEO_URL}
                          title="CV vidéo Angèle K."
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <p className="text-xs text-slate-400">
                        Si la vidéo ne s'affiche pas, vous pouvez la{" "}
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
                    <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                      Ce portfolio est un univers en îles : chaque îlot présente une facette de mon travail —
                      web interactif, UX/UI, XR, vidéo, arts numériques.
                    </p>
                  </Tabs.Content>

                  {/* ── COMPÉTENCES — now second tab (fix 11) ── */}
                  <Tabs.Content value="skills" className="space-y-8">
                    <section>
                      <h2 className="text-xs font-semibold tracking-[0.12em] text-sky-400 uppercase mb-3">Compétences clés</h2>
                      <p className="text-sm text-slate-300 mb-5 max-w-3xl">
                        Un profil hybride : développement front, UX/UI et création visuelle, avec une attention
                        particulière à ce que vit l'utilisateur.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4">
                          <p className="text-xs tracking-[0.18em] uppercase text-sky-400/80 font-medium mb-3">Hard skills</p>
                          <ul className="text-sm text-slate-300 space-y-2 leading-relaxed">
                            <li>• UX Design : recherche utilisateur, parcours, maquettes, tests.</li>
                            <li>• Dév front : JavaScript, React, Vite, Tailwind, HTML/CSS.</li>
                            <li>• Drupal : intégration front, templates, accessibilité, design system.</li>
                            <li>• Expériences 3D & XR : Unity, WebGL, React Three Fiber.</li>
                            <li>• Audiovisuel : tournage, montage Premiere Pro / After Effects.</li>
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4">
                          <p className="text-xs tracking-[0.18em] uppercase text-sky-400/80 font-medium mb-3">Soft skills</p>
                          <ul className="text-sm text-slate-300 space-y-2 leading-relaxed">
                            <li>• Empathie utilisateur : écouter, reformuler et transformer les besoins en interfaces.</li>
                            <li>• Gestion de projet : cadrage, priorisation, suivi des étapes & livrables.</li>
                            <li>• Travail en équipe : collaboration avec développeurs, designers, communication & DSI.</li>
                            <li>• Vulgarisation : rendre compréhensibles des sujets techniques ou complexes.</li>
                            <li>• Autonomie & curiosité : veille, tests et prototypage pour proposer des solutions.</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </Tabs.Content>

                  {/* ── PARCOURS — now third tab (fix 11) ── */}
                  <Tabs.Content value="parcours" className="space-y-8">
                    <section>
                      <h2 className="text-xs font-semibold tracking-[0.12em] text-sky-400 uppercase mb-3">Parcours en bref</h2>
                      <p className="text-sm text-slate-300 mb-5 max-w-3xl">
                        Un fil rouge : passer de la communication visuelle à la conception d'expériences
                        interactives complètes, du prototype à la mise en production.
                      </p>
                      <div className="grid gap-4 md:grid-cols-3">
                        {PARCOURS_CARDS.map(({ label, title, body }) => (
                          <div key={label} className="rounded-2xl bg-slate-900/70 border border-slate-700/60 px-5 py-4 flex flex-col gap-2">
                            <p className="text-xs tracking-[0.18em] uppercase text-sky-400/80 font-medium">{label}</p>
                            <p className="text-sm font-semibold text-slate-50">{title}</p>
                            <p className="text-xs text-slate-300 leading-relaxed">{body}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xs font-semibold tracking-[0.12em] text-sky-400 uppercase mb-4">Évolution</h3>
                      <div className="relative">
                        <div className="hidden md:block absolute left-0 right-0 top-4 h-px bg-slate-700/50" />
                        <div className="grid md:grid-cols-3 gap-6 md:gap-3">
                          {EVOLUTION_STEPS.map(({ num, title, body, active }) => (
                            <div key={num} className="flex md:flex-col gap-3 md:items-center">
                              <div className={[
                                "w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xs shadow-md",
                                active
                                  ? "bg-sky-500 border border-sky-300/60 text-white shadow-sky-500/30"
                                  : "bg-slate-900 border border-slate-600 text-slate-200",
                              ].join(" ")}>
                                {num}
                              </div>
                              <div className="md:text-center">
                                <p className="text-sm font-semibold text-slate-50">{title}</p>
                                <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </Tabs.Content>

                  {/* ── CHRONOLOGIE ── */}
                  <Tabs.Content value="chrono" className="space-y-8">
                    <section>
                      <h2 className="text-xs font-semibold tracking-[0.12em] text-sky-400 uppercase mb-3">Chronologie</h2>
                      <p className="text-sm text-slate-300 mb-5 max-w-3xl">
                        Un parcours qui relie communication, design et développement pour aller progressivement
                        vers des expériences interactives complètes : du concept à la mise en ligne.
                      </p>
                      <div className="space-y-3">
                        {CHRONO_ENTRIES.map(({ active, badge, meta, title, body }) => (
                          <div
                            key={title}
                            className={[
                              "relative rounded-2xl px-5 py-4",
                              active
                                ? "bg-slate-900/80 border border-sky-500/50"
                                : "bg-slate-900/70 border border-slate-700/60",
                            ].join(" ")}
                          >
                            <div className={[
                              "absolute left-0 top-4 bottom-4 w-1 rounded-full",
                              active ? "bg-gradient-to-b from-sky-400 to-sky-600" : "bg-slate-700/70",
                            ].join(" ")} />
                            <div className="pl-4">
                              {badge && (
                                <p className="text-xs uppercase tracking-[0.14em] text-sky-400 font-medium mb-1">{badge}</p>
                              )}
                              <p className="text-xs text-slate-400 mb-1.5">{meta}</p>
                              <p className="text-sm font-semibold text-slate-50">{title}</p>
                              <p className="text-sm text-slate-300 leading-relaxed mt-2">{body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </Tabs.Content>
                </Tabs.Root>

                {/* Fix 9 — contact strip at the bottom of the scroll area */}
                <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap gap-3">
                  <a
                    href="mailto:angelekaloi@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-500/50 text-emerald-300 text-sm font-medium hover:bg-emerald-500/10 hover:border-emerald-400 transition-colors duration-200"
                    onClick={() => playFx("click")}
                  >
                    M'écrire
                  </a>
                  <a
                    href="https://www.linkedin.com/in/angele-kaloi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-sky-500/50 text-sky-300 text-sm font-medium hover:bg-sky-500/10 hover:border-sky-400 transition-colors duration-200"
                    onClick={() => playFx("click")}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="/cv-angele-kaloi.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-500/50 text-slate-300 text-sm font-medium hover:bg-slate-500/10 hover:border-slate-400 transition-colors duration-200"
                  >
                    CV PDF
                  </a>
                </div>

              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
