export const webProjects = [
  {
    id: "opt-map",
    title: "Carte interactive des agences OPT-NC",
    year: "2025",
    context: "Alternance OPT-NC",
    short: "Carte sécurisée basée sur l’API ArcGIS des agences.",
    details:
      "Développement d’une carte interactive avec recherche par nom, commune ou adresse, synchronisation carte + liste, affichage du statut d’ouverture et consommation de l’API Open Data ArcGIS.",
    tech: ["HTML", "CSS", "JavaScript", "ArcGIS", "UX carte"],
    link: "https://codepen.io/Ang-le-KALO-/full/VYwqXzV",

    // 👉 chemin vers une image dans /public
    thumb: "/projects/opt-map-thumb.png",

    
  },
  {
    id: "site-e-commerce-crystal-drop",
    title: "Site e-commerce Crystal Drop",
    year: "2024",
    context: "Projet personnel",
    short: "Boutique en ligne de flacons d'elixir de cosplay avec catalogue et panier.",
    details:
      "Développement d’un site e-commerce fictif avec catalogue de produits, filtres, gestion du panier et formulaire de commande.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WAMP Server", "UX e-commerce"],
    link: "",

    // 👉 chemin vers une image dans /public
    thumb: "/projects/site-e-commerce-crystal-drop-thumb.png",
        media: [
      {
        id: "screen1",
        type: "image",
        src: "/projects/site-e-commerce-crystal-drop-thumb.png",
        label: "Vue globale",
      },
      {
        id: "video1",
        type: "video",
        // soit un lien YouTube, soit un mp4
        href: "https://www.youtube.com/embed/dMxPLsXLlWw",
        thumbnail: "/projects/site-e-com-adm-thumb.png",
        label: "Interface Admin",
      },
      {
        id: "video2",
        type: "video",
        // soit un lien YouTube, soit un mp4
        href: "https://www.youtube.com/embed/qgxW9xdCOE0",
        thumbnail: "/projects/site-e-com-client-thumb.png",
        label: "Interface Client",
      },
    ],
    
  },

];

// 🟣 UX / UI
export const uxProjects = [
  {
    id: "opt-home-ux",
    title: "Refonte de la page d’accueil OPT-NC",
    year: "2025",
    context: "Stage OPT-NC · Projet de mémoire",
    short: "Conception d’une page d’accueil centrée sur l’orientation client OPT 2025.",
    details:
      "Analyse de l’existant, benchmark, ateliers avec les parties prenantes, rédaction du cahier des charges fonctionnel, zoning et wireframes Figma, priorisation des contenus et parcours utilisateurs vers les sites métiers.",
    tech: ["UX Research", "Ateliers", "Figma", "Accessibilité", "Design système"],
    thumb: "/projects/opt-home-ux-thumb.jpg",
  },
  // tu pourras ajouter d’autres projets UX ici
];

// 🌀 XR / VR
export const xrProjects = [
  {
    id: "paeco-xr",
    title: "Galerie VR pour la compagnie de théâtre PAECO",
    year: "2024",
    context: "Projet Unity XR",
    short: "Parcours immersif en VR avec hub central et 6 zones thématiques.",
    details:
      "Conception d’une expérience VR interactive : hub central, salles thématiques, objets Blender, vidéos intégrées, voix off, système de quiz, interactions avec les contrôleurs, adaptation pour WebGL et Meta Quest.",
    tech: ["Unity", "XR Interaction Toolkit", "Meta Quest", "Level design"],
    thumb: "/projects/paeco-xr-thumb.jpg",
  },
  {
    id: "xr-gallery-google",
    title: "Galerie 3D de résultats de recherche",
    year: "2024",
    context: "Prototype Unity XR",
    short: "Visualisation spatiale de résultats web dans une galerie 3D.",
    details:
      "Expérimentation autour d’une navigation spatiale de résultats Google : ingestion d’APIs, disposition des cartes dans l’espace, réflexion UX sur la lisibilité et l’orientation de l’utilisateur en environnement 3D.",
    tech: ["Unity", "C#", "API web", "UX 3D"],
    thumb: "/projects/xr-gallery-thumb.jpg",
  },
];

// 🎬 Vidéo / arts numériques
export const videoProjects = [
  {
    id: "cv-video",
    title: "CV vidéo — 1 minute",
    year: "2025",
    context: "Présentation personnelle",
    short: "Format court pour ressentir mon énergie et ma façon de communiquer.",
    details:
      "Écriture du script, tournage, montage et habillage graphique pour présenter mon parcours, mes valeurs et ma manière d’aborder les projets numériques, en cohérence avec l’univers de ce portfolio.",
    tech: ["Montage vidéo", "After Effects", "Direction artistique", "Storytelling"],
    link: "https://www.youtube.com/watch?v=FV59sY5XE2E",
    thumb: "/projects/cv-video-thumb.png",
  },
   {
    id: "making-of-clip-gea",
    title: "Making of clip GEA — 10 minutes",
    year: "2024",
    context: "Tournage et montage d'un clip musical",
    short: "Un making of immersif révèlant les coulisses du tournage du clip promotionnel du BUT GEA.",
    details:
      "J’ai assuré la captation des images, le montage et la création graphique pour valoriser le travail de l’équipe et les moments clés du tournage. L’objectif était d’offrir un regard authentique et dynamique sur la production du clip.",
    tech: ["Sony A7III", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "CapCut"],

    link: "https://youtu.be/BZscvfVuy0g",
    thumb: "/projects/making-of-clip-gea-thumb.png",
  },
  // tu peux rajouter du motion, des vidéos Paeco, etc.
];
