export const webProjects = [
  {
    id: "opt-map",
    title: "Carte interactive des agences OPT-NC",
    year: "2025",
    context: "Alternance OPT-NC",
    short: "Carte sécurisée basée sur l'API ArcGIS des agences.",
    details:
      "Développement d'une carte interactive avec recherche par nom, commune ou adresse, synchronisation carte + liste, affichage du statut d'ouverture et consommation de l'API Open Data ArcGIS.",
    tech: ["HTML", "CSS", "JavaScript", "ArcGIS", "UX carte"],
    link: "https://codepen.io/Ang-le-KALO-/full/VYwqXzV",
    linkLabel: "Voir sur CodePen",
    thumb: "/projects/opt-map-thumb.png",
    github: "https://github.com/angelkae7/opt-agences",
  },
  {
    id: "site-bible-explorer",
    title: "Site Bible Explorer",
    year: "2025",
    context: "Projet universitaire",
    short: "Site de consultation et d'exploration de textes bibliques.",
    details:
      "Site utilisant une API de textes bibliques pour permettre la recherche, la lecture et l'exploration de livres, chapitres et versets.",
    // Fix 16: removed "React-Three-Fiber" (copy-paste error), added "API REST"
    tech: ["HTML", "CSS", "React", "Vite", "Netlify", "API REST", "UX lecture"],
    link: "https://angele-kaloi-bible-explorer.netlify.app/",
    linkLabel: "Voir le site",
    github: "https://github.com/angelkae7/bible-explorer",
    thumb: "/projects/site-bible-explorer-thumb.png",
  },
  {
    id: "site-lancee-de-des",
    title: "Site Lancé de dés",
    year: "2025",
    context: "Projet universitaire",
    short: "Site de lancement de dés en ligne.",
    details:
      "Site permettant aux utilisateurs de lancer un dé 3D virtuel, d'obtenir des résultats aléatoires et de visualiser les lancers précédents.",
    tech: ["HTML", "CSS", "React-Three-Fiber", "Vite", "Netlify"],
    link: "https://lanceurdes3d.netlify.app/",
    linkLabel: "Voir le site",
    thumb: "/projects/site-lancee-de-des-thumb.png",
  },
  {
    id: "site-dataviz",
    title: "Site DataViz",
    year: "2024",
    context: "Projet universitaire",
    short: "Site de visualisation de données interactives.",
    // Fix 16: corrected grammar "visait à participé" → "ayant participé"
    details:
      "Site ayant participé au concours Pacific Dataviz Challenge et utilisant une base de données de causes de décès en Nouvelle-Calédonie pour créer des visualisations interactives.",
    tech: ["HTML", "CSS", "JavaScript", "ApexCharts", "API sécurisée", "Netlify"],
    link: "",
    linkNote: "Projet local — démo non disponible en ligne",
    thumb: "/projects/SITE-DATAVIZ-THUMB.png",
    media: [
      {
        id: "screen1",
        type: "image",
        src: "/projects/SITE-DATAVIZ-THUMB.png",
        label: "Page d'accueil présentant les données",
      },
      {
        id: "screen2",
        type: "image",
        src: "/projects/datatviz_1.png",
        label: "Visualisation interactive des données (1)",
      },
      {
        id: "screen3",
        type: "image",
        src: "/projects/dataviz_2.png",
        label: "Visualisation interactive des données (2)",
      },
      {
        id: "screen4",
        type: "image",
        src: "/projects/dataviz_3.png",
        label: "Visualisation interactive des données (3)",
      },
    ],
  },
  {
    id: "site-e-commerce-crystal-drop",
    title: "Site e-commerce Crystal Drop",
    year: "2024",
    context: "Projet universitaire",
    short: "Boutique en ligne de flacons d'elixir de cosplay avec catalogue et panier.",
    details:
      "Développement d'un site e-commerce fictif avec catalogue de produits, filtres, gestion du panier et formulaire de commande.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WAMP Server", "UX e-commerce"],
    link: "",
    linkNote: "Projet local — démo non disponible en ligne",
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
        href: "https://www.youtube.com/embed/dMxPLsXLlWw",
        thumbnail: "/projects/site-e-com-adm-thumb.png",
        label: "Interface Admin",
      },
      {
        id: "video2",
        type: "video",
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
    id: "bible-explorer-ux",
    title: "Prototype Bible Explorer - Figma",
    year: "2025",
    context: "Projet universitaire",
    short: "Conception d'une page de lecture et d'exploration de textes bibliques.",
    details:
      "Recherche UX, wireframes, maquettes haute-fidélité et prototype interactif d'une interface de lecture et d'exploration de textes bibliques, avec fonctionnalités de recherche, navigation et personnalisation de l'affichage.",
    tech: ["UX Research", "Ateliers", "Figma", "Accessibilité", "Design système"],
    thumb: "/projects/bible-explorer-ux-thumb.png",
    link: "https://www.figma.com/proto/6ruEy6yuZKrwo6SGjhPKG3/Bible-Explorer?page-id=0%3A1&node-id=1-11&p=f&viewport=87%2C163%2C0.32&t=h8B7oZbl3ecixS1m-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A11",
    linkLabel: "Voir sur Figma",
    media: [
      {
        id: "figma",
        type: "figma",
        href: "https://embed.figma.com/proto/6ruEy6yuZKrwo6SGjhPKG3/Bible-Explorer?page-id=0%3A1&node-id=1-11&p=f&viewport=87%2C163%2C0.32&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A11&embed-host=share",
        thumbnail: "/projects/bible-explorer-ux-thumb.png",
        label: "Site Bible Explorer",
      },
    ],
  },
  {
    id: "anr-siti-ux",
    title: "Prototype ANR SITI - Figma",
    year: "2024",
    context: "Projet scientifique ANR SITI",
    short: "Conception d'un prototype Figma pour un site de communication scientifique.",
    details:
      "Prototype résultant d'une longue recherche et répondant aux besoins de communication scientifique pour un projet pluridisciplinaire SITI.",
    tech: ["UX Research", "Ateliers", "Figma", "Accessibilité", "Design système"],
    thumb: "/projects/anr-siti-ux-thumb.png",
    link: "https://www.figma.com/proto/jFnWIrILYKSO7BRZM51Bvd/SITI-Template?page-id=0%3A1&node-id=1-3&viewport=376%2C215%2C0.29&t=n5etyAbzlJZeDXat-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",
    linkLabel: "Voir sur Figma",
    media: [
      {
        id: "figma1",
        type: "figma",
        href: "https://embed.figma.com/proto/jFnWIrILYKSO7BRZM51Bvd/SITI-Template?page-id=0%3A1&node-id=1-3&viewport=376%2C215%2C0.29&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1&embed-host=share",
        thumbnail: "/projects/anr-siti-ux-thumb.png",
        label: "Site ANR SITI",
      },
    ],
  },
  {
    id: "Lwc-prototype-ux",
    title: "Prototype application mobile LWC - Figma",
    year: "2024",
    context: "Projet universitaire",
    short: "Conception d'un prototype Figma pour une application mobile de jeu de société Lexic War of Clan's.",
    details:
      "Prototype ayant amorcé le développement de l'application Lexic War of Clan's accompagnant un jeu de société sur les langues vernaculaires kanak.",
    tech: ["UX Research", "Ateliers", "Figma", "Accessibilité", "Design système"],
    thumb: "/projects/lwc-prototype-ux-thumb.png",
    link: "https://www.figma.com/proto/QtTgr6GnDKGLFf5xfozRQe/Appli-302?page-id=0%3A1&node-id=213-801&viewport=816%2C646%2C0.35&t=enUpsQftY5nPW3Cx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A801",
    linkLabel: "Voir sur Figma",
    media: [
      {
        id: "figma",
        type: "figma",
        href: "https://embed.figma.com/proto/QtTgr6GnDKGLFf5xfozRQe/Appli-302?page-id=0%3A1&node-id=213-801&viewport=816%2C646%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A801&embed-host=share",
        thumbnail: "/projects/lwc-prototype-ux-thumb.png",
        label: "Appli mobile LWC",
      },
    ],
  },
];

// 🌀 XR / VR
export const xrProjects = [
  {
    id: "paeco-xr",
    title: "Immersion VR pour la compagnie de théâtre PAECO",
    year: "2025",
    context: "Projet Unity XR",
    short: "Parcours immersif en VR avec hub central et 6 zones thématiques.",
    details:
      "Conception d'une expérience VR interactive : hub central, salles thématiques, objets Blender, vidéos intégrées, voix off, système de quiz, interactions avec les contrôleurs, usage Meta Quest.",
    tech: ["Unity", "XR Interaction Toolkit", "Meta Quest 3", "Level design"],
    thumb: "/projects/paeco-xr-thumb.jpg",
    github: "https://github.com/angelkae7/paecohub",
    media: [
      { id: "screen1", type: "image", src: "/projects/salle_accueil.png", label: "Salle d'accueil" },
      { id: "screen2", type: "image", src: "/projects/salle_ens-art.png", label: "Salle Enseignements artistiques" },
      { id: "screen3", type: "image", src: "/projects/salle_galerie.png", label: "Salle Galerie d'art" },
      { id: "screen4", type: "image", src: "/projects/salle_impro.png", label: "Salle d'Improvisation" },
      { id: "screen5", type: "image", src: "/projects/salle_theatre-entreprise.png", label: "Salle Théâtre d'entreprise" },
      { id: "screen6", type: "image", src: "/projects/salle_theatre-forum.png", label: "Salle Théâtre Forum" },
    ],
  },
  {
    // Fix 16: title renamed from "Projet API/Unity - Windows Plateform"
    id: "bible-search-3d",
    title: "Galerie 3D de résultats web — Unity / Windows",
    year: "2025",
    context: "Projet universitaire",
    short: "Visualisation spatiale de résultats web dans une galerie 3D.",
    details:
      "Expérimentation autour d'une navigation spatiale de résultats Google : ingestion d'APIs, disposition des cartes dans l'espace, réflexion UX sur la lisibilité et l'orientation de l'utilisateur en environnement 3D.",
    tech: ["Unity", "C#", "API web", "UX 3D"],
    thumb: "/projects/dispositif_vr-2.png",
    github: "https://github.com/angelkae7/bible-search-3D",
    media: [
      { id: "screen1", type: "image", src: "/projects/dispositif_vr-1.png", label: "Affichage des résultats de recherche" },
      { id: "screen2", type: "image", src: "/projects/dispositif_vr-2.png", label: "Styling des résultats de requête" },
      { id: "video1", type: "video", href: "https://www.youtube.com/embed/ZavQ3cfbS_E", label: "Démonstration vidéo", thumbnail: "/projects/dispositif_vr-2.png" },
    ],
  },
  {
    id: "projet-blender",
    title: "Modélisations 3D Blender",
    year: "2024-2025",
    context: "Projets personnels et universitaires",
    short: "Création de modèles 3D pour divers usages.",
    details:
      "Modélisation, texturing et rendu de divers objets 3D (personnages, environnements, objets) pour des projets personnels et universitaires.",
    tech: ["Blender", "Modélisation 3D", "Texturing", "Rendu"],
    thumb: "/projects/blender2.png",
    media: [
      { id: "video1", type: "video", href: "https://www.youtube.com/embed/9ip_9qEQ-M8", label: "Frigo 3D - Technique Gpencil (Blender)", thumbnail: "/projects/blender2.png" },
      { id: "video2", type: "video", href: "https://www.youtube.com/embed/LWq-AOYdCx4", label: "Chat pluie 3D - Gpencil (Blender)", thumbnail: "/projects/blender1.png" },
    ],
  },
];

// 🎬 Vidéo / arts numériques
export const videoProjects = [
  {
    id: "cv-video",
    title: "CV vidéo — 2 minutes",
    year: "2025",
    context: "Présentation personnelle",
    short: "Format court pour ressentir mon énergie et ma façon de communiquer.",
    details:
      "Écriture du script, tournage, montage et habillage graphique pour présenter mon parcours, mes valeurs et ma manière d'aborder les projets numériques, en cohérence avec l'univers de ce portfolio.",
    tech: ["Montage vidéo", "After Effects", "Direction artistique", "Storytelling"],
    link: "https://www.youtube.com/watch?v=FV59sY5XE2E",
    linkLabel: "Voir sur YouTube",
    thumb: "/projects/cv-video-thumb.png",
  },
  {
    id: "making-of-clip-gea",
    title: "Making of clip GEA — 10 minutes",
    year: "2024",
    context: "Tournage et montage d'un clip musical",
    short: "Un making of immersif révélant les coulisses du tournage du clip promotionnel du BUT GEA.",
    details:
      "J'ai assuré la captation des images, le montage et la création graphique pour valoriser le travail de l'équipe et les moments clés du tournage. L'objectif était d'offrir un regard authentique et dynamique sur la production du clip.",
    tech: ["Sony A7III", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator", "CapCut"],
    link: "https://vimeo.com/1027974643",
    linkLabel: "Voir sur Vimeo",
    thumb: "/projects/making-of-clip-gea-thumb.png",
  },
  {
    id: "motion-design-ils-nous",
    title: "Motion design Ils Nous — 2 minutes",
    year: "2025",
    context: "Projet universitaire",
    short: "Vidéo de mise en valeur des archives historiques sur After Effects.",
    details:
      "Création d'une vidéo en motion design pour présenter et valoriser des archives historiques, en utilisant des techniques d'animation et de montage sur After Effects afin de captiver l'audience et de transmettre efficacement le contenu.",
    tech: ["Adobe After Effects", "Adobe Photoshop", "CapCut"],
    link: "https://youtu.be/19OkwEXUpfU",
    linkLabel: "Voir sur YouTube",
    thumb: "/projects/motion-design-ils-nous-thumb.png",
  },
];
