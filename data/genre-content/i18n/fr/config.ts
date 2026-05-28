import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  names: {
    // Genre
    "pop": "Pop",
    "hip-hop": "Hip-Hop",
    "rock": "Rock",
    "edm": "EDM",
    "country": "Country",
    "kpop": "K-Pop",
    "latin": "Latin",
    "rnb": "R&B",
    "lofi": "Lofi",
    "jazz": "Jazz",
    "classical": "Classique",
    "cinematic": "Cinématique",
    "phonk": "Phonk",
    "afrobeats": "Afrobeats",
    "amapiano": "Amapiano",
    "synthwave": "Synthwave",
    "indie-pop": "Indie Pop",
    "ambient": "Ambient",
    "jpop": "J-Pop",
    "drill": "Drill",
    "house": "House",
    "metal": "Metal",
    "blues": "Blues",
    "reggae": "Reggae",
    "folk": "Folk",
    "gospel": "Gospel",
    "bollywood": "Bollywood",
    "dubstep": "Dubstep",
    "trance": "Trance",
    "funk": "Funk",
    "arabic": "Arabe",
    "hindustani": "Hindoustani",
    "celtic": "Celtique",
    "flamenco": "Flamenco",
    "vaporwave": "Vaporwave",
    "hyperpop": "Hyperpop",
    // Instrument
    "acoustic-guitar": "Guitare Acoustique",
    "bagpipes": "Cornemuse",
    "bass": "Basse",
    "cello": "Violoncelle",
    "drums": "Batterie",
    "electric-guitar": "Guitare Électrique",
    "erhu": "Erhu",
    "flute": "Flûte",
    "guitar": "Guitare",
    "harp": "Harpe",
    "instrumental": "Instrumental",
    "organ": "Orgue",
    "oud": "Oud",
    "pan-flute": "Flûte de Pan",
    "piano": "Piano",
    "saxophone": "Saxophone",
    "sitar": "Sitar",
    "synth": "Synthé",
    "trumpet": "Trompette",
    "ukulele": "Ukulélé",
    "violin": "Violon",
    // Mood
    "calm": "Calme",
    "chillout": "Chillout",
    "dark": "Sombre",
    "dramatic": "Dramatique",
    "dreamy": "Onirique",
    "energetic": "Énergique",
    "epic": "Épique",
    "majestic": "Majestueux",
    "nostalgic": "Nostalgique",
    "romantic": "Romantique",
    "solemn": "Solennel",
    "triumphant": "Triomphant",
    // Era
    "60s": "Années 60",
    "70s": "Années 70",
    "80s": "Années 80",
    "90s": "Années 90",
    "2000s": "Années 2000",
    "2010s": "Années 2010",
    // Use Case
    "ads": "Publicités",
    "background": "Fond sonore",
    "corporate": "Corporate",
    "film": "Film",
    "gaming": "Gaming",
    "meditation": "Méditation",
    "podcast": "Podcast",
    "sleep": "Sommeil",
    "streaming": "Streaming",
    "study": "Étude",
    "tiktok": "TikTok",
    "video": "Vidéo",
    "wedding": "Mariage",
    "workout": "Entraînement",
    "youtube": "YouTube",
    // Inspired By
    "cyberpunk": "Cyberpunk",
    "dandd": "D&D",
    "final-fantasy": "Final Fantasy",
    "genshin": "Genshin",
    "mario": "Mario",
    "minecraft": "Minecraft",
    "persona": "Persona",
    "silent-hill": "Silent Hill",
    "studio-ghibli": "Studio Ghibli",
    "zelda": "Zelda",
  },

  seoTitle: (name) =>
    `Générateur de musique ${name} gratuit avec l'IA | Tunee`,
  seoDesc: (name) =>
    `Créez de la musique ${name} originale en quelques secondes grâce à l'IA de Tunee. Décrivez votre vision, affinez le résultat et exportez un morceau prêt à l'emploi.`,

  heroTitle: (name) =>
    `Créez de la musique ${name} avec l'IA`,
  heroSub: (name) =>
    `Décrivez votre idée, laissez Tunee composer un morceau ${name} unique pour vous. Aucune compétence musicale requise.`,
  badges: ["Propulsé par l'IA", "Libre de droits", "Qualité studio"],

  dnaTitle: (name) =>
    `L'ADN du son ${name}`,
  dnaSub: (name) =>
    `Découvrez les éléments qui définissent la musique ${name} et comment Tunee les reproduit fidèlement.`,
  dnaSectionTitles: ["Rythme & Tempo", "Harmonie & Tonalité", "Instruments clés", "Ambiance & Énergie"],

  subgenreTitle: (name) =>
    `Sous-genres ${name}`,
  subgenreSub: (name) =>
    `Explorez les variantes du ${name} et trouvez le style qui vous correspond.`,

  comparisonTitle: (name) =>
    `Tunee vs. autres outils ${name}`,
  comparisonSub: (name) =>
    `Pourquoi Tunee est le meilleur choix pour créer de la musique ${name} avec l'IA.`,
  compFeatureLabel: "Fonctionnalité",
  compRowLabels: ["Plage BPM", "Instruments clés", "Ambiance", "Durée", "Complexité", "Artistes notables"],

  promptTitle: (name) =>
    `Prompts ${name} pour démarrer`,
  promptSub: (name) =>
    `Essayez ces prompts pour générer instantanément de la musique ${name} avec Tunee.`,

  useCaseTitle: (name) =>
    `Utilisations de la musique ${name}`,
  useCaseSub: (name) =>
    `Découvrez comment la musique ${name} générée par Tunee s'intègre dans vos projets.`,
  useCases: [
    {
      title: "Réseaux sociaux",
      desc: (name) =>
        `Ajoutez une bande-son ${name} percutante à vos Reels, TikToks et stories pour capter l'attention de votre audience.`,
    },
    {
      title: "Publicités",
      desc: (name) =>
        `Donnez de l'impact à vos spots publicitaires avec une musique ${name} originale, libre de droits et prête à diffuser.`,
    },
    {
      title: "Cinéma/TV",
      desc: (name) =>
        `Habillage sonore ${name} sur mesure pour vos courts-métrages, documentaires et séries — sans licence à négocier.`,
    },
    {
      title: "Démos vocales",
      desc: (name) =>
        `Générez un instrumental ${name} professionnel comme base pour vos sessions d'écriture et vos maquettes vocales.`,
    },
    {
      title: "Playlists",
      desc: (name) =>
        `Créez du contenu ${name} original pour vos playlists de streaming et démarquez-vous des autres curateurs.`,
    },
    {
      title: "Jeux/Apps",
      desc: (name) =>
        `Intégrez une ambiance sonore ${name} immersive dans vos jeux vidéo, apps ou expériences interactives.`,
    },
  ],

  faqs: [
    {
      q: (name) => `Comment créer de la musique ${name} avec Tunee ?`,
      a: (name) =>
        `Décrivez simplement le morceau ${name} que vous avez en tête — ambiance, tempo, instruments — et Tunee génère une piste complète en quelques secondes. Vous pouvez ensuite affiner le résultat par chat jusqu'à obtenir exactement ce que vous voulez.`,
    },
    {
      q: (name) => `La musique ${name} générée par Tunee est-elle libre de droits ?`,
      a: (name) =>
        `Oui, tous les morceaux ${name} créés avec Tunee sont entièrement libres de droits. Vous pouvez les utiliser dans vos vidéos, publicités, podcasts, jeux ou tout autre projet commercial sans frais supplémentaires.`,
    },
    {
      q: (name) => `Quelle est la qualité audio de la musique ${name} ?`,
      a: (name) =>
        `Tunee produit des pistes ${name} en qualité studio, prêtes à être publiées ou intégrées directement dans vos projets professionnels. Le rendu audio est conçu pour rivaliser avec des productions humaines.`,
    },
    {
      q: (name) => `Puis-je personnaliser le style ${name} généré ?`,
      a: (name) =>
        `Absolument. Après la génération initiale, vous pouvez ajuster le BPM, la tonalité, les instruments, la structure et l'ambiance par simple conversation avec l'IA. Chaque itération vous rapproche du résultat idéal.`,
    },
    {
      q: (name) => `Faut-il des connaissances musicales pour utiliser le générateur ${name} ?`,
      a: (name) =>
        `Aucune. Tunee est conçu pour être accessible à tous. Décrivez votre idée en langage courant — par exemple « un morceau ${name} énergique avec de la guitare » — et l'IA s'occupe du reste.`,
    },
  ],

  chatUser: (name) =>
    `Crée-moi un morceau ${name} entraînant avec une mélodie accrocheuse.`,
  chatAi: (name) =>
    `Votre morceau ${name} est prêt ! J'ai composé un titre dynamique avec une mélodie mémorable. Vous pouvez ajuster le tempo, les instruments ou l'ambiance — dites-moi ce que vous souhaitez modifier.`,

  finalCtaTitle: (name) =>
    `Prêt à créer votre musique ${name} ?`,
  finalCtaSub: (name) =>
    `Rejoignez des milliers de créateurs qui utilisent Tunee pour produire de la musique ${name} originale en quelques secondes.`,
  finalCtaButton: "Commencer gratuitement",
  slugData,
};
