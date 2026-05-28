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
    "classical": "Classica",
    "cinematic": "Cinematica",
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
    "arabic": "Araba",
    "hindustani": "Hindustani",
    "celtic": "Celtica",
    "flamenco": "Flamenco",
    "vaporwave": "Vaporwave",
    "hyperpop": "Hyperpop",
    // Instrument
    "acoustic-guitar": "Chitarra Acustica",
    "bagpipes": "Cornamusa",
    "bass": "Basso",
    "cello": "Violoncello",
    "drums": "Batteria",
    "electric-guitar": "Chitarra Elettrica",
    "erhu": "Erhu",
    "flute": "Flauto",
    "guitar": "Chitarra",
    "harp": "Arpa",
    "instrumental": "Strumentale",
    "organ": "Organo",
    "oud": "Oud",
    "pan-flute": "Flauto di Pan",
    "piano": "Pianoforte",
    "saxophone": "Sassofono",
    "sitar": "Sitar",
    "synth": "Sintetizzatore",
    "trumpet": "Tromba",
    "ukulele": "Ukulele",
    "violin": "Violino",
    // Mood
    "calm": "Calmo",
    "chillout": "Chillout",
    "dark": "Oscuro",
    "dramatic": "Drammatico",
    "dreamy": "Onirico",
    "energetic": "Energetico",
    "epic": "Epico",
    "majestic": "Maestoso",
    "nostalgic": "Nostalgico",
    "romantic": "Romantico",
    "solemn": "Solenne",
    "triumphant": "Trionfante",
    // Era
    "60s": "Anni '60",
    "70s": "Anni '70",
    "80s": "Anni '80",
    "90s": "Anni '90",
    "2000s": "Anni 2000",
    "2010s": "Anni 2010",
    // Use Case
    "ads": "Pubblicità",
    "background": "Sottofondo",
    "corporate": "Aziendale",
    "film": "Film",
    "gaming": "Gaming",
    "meditation": "Meditazione",
    "podcast": "Podcast",
    "sleep": "Sonno",
    "streaming": "Streaming",
    "study": "Studio",
    "tiktok": "TikTok",
    "video": "Video",
    "wedding": "Matrimonio",
    "workout": "Allenamento",
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

  seoTitle: (name) => `Generatore di Musica ${name} con IA | Tunee`,
  seoDesc: (name) =>
    `Crea brani ${name} con l'intelligenza artificiale. Basta inserire un testo per ottenere tracce ${name} di alta qualità in pochi secondi. Provalo gratis.`,

  heroTitle: (name) => `Crea Musica ${name} con l'IA`,
  heroSub: (name) =>
    `Inserisci una descrizione e genera brani ${name} professionali in pochi secondi. Non servono strumenti né conoscenze musicali.`,
  badges: ["Alta Qualità", "Uso Commerciale", "Inizia Gratis"],

  dnaTitle: (name) => `L'Anatomia del Suono ${name}`,
  dnaSub: (name) =>
    `L'IA analizza ritmo, melodia e timbro tipici della musica ${name} per riprodurli fedelmente nei tuoi brani.`,
  dnaSectionTitles: ["Ritmo e Tempo", "Melodia e Armonia", "Suono e Timbro", "Tecniche di Produzione"],

  subgenreTitle: (name) => `Esplora i Sottogeneri ${name}`,
  subgenreSub: (name) =>
    `La musica ${name} comprende diversi stili. Scegli il sottogenere che preferisci e lascia che l'IA generi il brano perfetto.`,

  comparisonTitle: (name) => `Confronto tra Generatori IA di Musica ${name}`,
  comparisonSub: (name) =>
    `Confronta i principali strumenti IA per la creazione musicale e scopri perché Tunee è la scelta migliore per la musica ${name}.`,
  compFeatureLabel: "Funzionalità",
  compRowLabels: ["Intervallo BPM", "Strumenti chiave", "Atmosfera", "Durata", "Complessità", "Artisti di riferimento"],

  promptTitle: (name) => `Esempi di Prompt ${name}`,
  promptSub: (name) =>
    `Copia uno dei prompt qui sotto per generare subito un brano ${name}. Personalizzali come vuoi.`,

  useCaseTitle: (name) => `Come Usare la Musica ${name}`,
  useCaseSub: (name) =>
    `I brani ${name} generati dall'IA si adattano a tantissimi contesti. Ecco alcune idee.`,
  useCases: [
    {
      title: "Social Media",
      desc: (name) =>
        `Genera colonne sonore ${name} perfette per TikTok e Instagram Reels. Crea musica originale per i tuoi video con l'IA.`,
    },
    {
      title: "Pubblicità",
      desc: (name) =>
        `Produci brani ${name} con licenza commerciale per spot e video promozionali. Audio di qualità professionale, pronto all'uso.`,
    },
    {
      title: "Cinema e TV",
      desc: (name) =>
        `Crea colonne sonore ${name} per film e serie TV con l'IA. Genera musica su misura per ogni scena e atmosfera.`,
    },
    {
      title: "Demo Vocali",
      desc: (name) =>
        `Genera basi ${name} su cui cantare e sviluppare le tue canzoni. Ideale per demo e sessioni di songwriting.`,
    },
    {
      title: "Playlist",
      desc: (name) =>
        `Crea brani ${name} originali per le tue playlist su Spotify e Apple Music. L'IA genera infinite variazioni.`,
    },
    {
      title: "Giochi e App",
      desc: (name) =>
        `Genera musica ${name} per videogiochi e applicazioni. L'IA crea anche loop perfetti per ogni ambientazione.`,
    },
  ],

  faqs: [
    {
      q: (name) => `Cos'è un generatore di musica ${name} con IA?`,
      a: (name) =>
        `È uno strumento che crea brani in stile ${name} a partire da semplici descrizioni testuali. L'IA ha appreso i ritmi, le melodie e i timbri caratteristici della musica ${name}, permettendo a chiunque di produrre tracce di qualità professionale.`,
    },
    {
      q: (name) => `Come si crea un brano ${name} con l'IA?`,
      a: (name) =>
        `È semplicissimo: scrivi una descrizione come "crea un brano ${name}" nella casella di testo, oppure usa uno dei prompt di esempio. In pochi secondi il brano è pronto. Puoi anche specificare tempo, mood e strumenti.`,
    },
    {
      q: (name) => `Posso usare i brani ${name} generati per scopi commerciali?`,
      a: (name) =>
        `Sì, i brani ${name} creati con Tunee sono utilizzabili a fini commerciali. Puoi inserirli in video YouTube, podcast, pubblicità, contenuti social e qualsiasi altro progetto.`,
    },
    {
      q: (name) => `Serve esperienza musicale per creare brani ${name}?`,
      a: (name) =>
        `No, non è necessaria alcuna competenza musicale. L'IA si occupa di tutto: basta scrivere cosa desideri e otterrai un brano ${name} completo e professionale.`,
    },
    {
      q: (name) => `Il generatore di musica ${name} è gratuito?`,
      a: (name) =>
        `Sì, Tunee offre un piano gratuito per iniziare. Prova subito a generare brani ${name} senza spendere nulla. Per funzionalità avanzate e download illimitati sono disponibili piani a pagamento.`,
    },
  ],

  chatUser: (name) => `Crea un brano ${name}`,
  chatAi: (name) =>
    `Ecco il tuo brano ${name}! Premi play per ascoltarlo e scaricalo se ti piace.`,

  finalCtaTitle: (name) => `Crea il Tuo Brano ${name} Ora`,
  finalCtaSub: (name) =>
    `Genera la tua musica ${name} personalizzata in pochi secondi grazie all'IA. È gratis, provalo subito.`,
  finalCtaButton: "Inizia Gratis",
  slugData,
};
