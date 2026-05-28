import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  /* ── Display names (slug → German) ── */
  names: {
    // Genre
    pop: "Pop",
    "hip-hop": "Hip-Hop",
    rock: "Rock",
    edm: "EDM",
    country: "Country",
    kpop: "K-Pop",
    latin: "Latin",
    rnb: "R&B",
    lofi: "Lofi",
    jazz: "Jazz",
    classical: "Klassik",
    cinematic: "Filmmusik",
    phonk: "Phonk",
    afrobeats: "Afrobeats",
    amapiano: "Amapiano",
    synthwave: "Synthwave",
    "indie-pop": "Indie Pop",
    ambient: "Ambient",
    jpop: "J-Pop",
    drill: "Drill",
    house: "House",
    metal: "Metal",
    blues: "Blues",
    reggae: "Reggae",
    folk: "Folk",
    gospel: "Gospel",
    bollywood: "Bollywood",
    dubstep: "Dubstep",
    trance: "Trance",
    funk: "Funk",
    arabic: "Arabisch",
    hindustani: "Hindustani",
    celtic: "Keltisch",
    flamenco: "Flamenco",
    vaporwave: "Vaporwave",
    hyperpop: "Hyperpop",
    // Instrument
    "acoustic-guitar": "Akustikgitarre",
    bagpipes: "Dudelsack",
    bass: "Bass",
    cello: "Cello",
    drums: "Schlagzeug",
    "electric-guitar": "E-Gitarre",
    erhu: "Erhu",
    flute: "Flöte",
    guitar: "Gitarre",
    harp: "Harfe",
    instrumental: "Instrumental",
    organ: "Orgel",
    oud: "Oud",
    "pan-flute": "Panflöte",
    piano: "Klavier",
    saxophone: "Saxophon",
    sitar: "Sitar",
    synth: "Synthesizer",
    trumpet: "Trompete",
    ukulele: "Ukulele",
    violin: "Geige",
    // Mood
    calm: "Ruhig",
    chillout: "Chillout",
    dark: "Dunkel",
    dramatic: "Dramatisch",
    dreamy: "Verträumt",
    energetic: "Energetisch",
    epic: "Episch",
    majestic: "Majestätisch",
    nostalgic: "Nostalgisch",
    romantic: "Romantisch",
    solemn: "Feierlich",
    triumphant: "Triumphierend",
    // Era
    "60s": "60er",
    "70s": "70er",
    "80s": "80er",
    "90s": "90er",
    "2000s": "2000er",
    "2010s": "2010er",
    // Use Case
    ads: "Werbung",
    background: "Hintergrund",
    corporate: "Unternehmens",
    film: "Film",
    gaming: "Gaming",
    meditation: "Meditation",
    podcast: "Podcast",
    sleep: "Schlaf",
    streaming: "Streaming",
    study: "Lernen",
    tiktok: "TikTok",
    video: "Video",
    wedding: "Hochzeit",
    workout: "Training",
    youtube: "YouTube",
    // Inspired By
    cyberpunk: "Cyberpunk",
    dandd: "D&D",
    "final-fantasy": "Final Fantasy",
    genshin: "Genshin",
    mario: "Mario",
    minecraft: "Minecraft",
    persona: "Persona",
    "silent-hill": "Silent Hill",
    "studio-ghibli": "Studio Ghibli",
    zelda: "Zelda",
  },

  /* ── SEO ── */
  seoTitle: (n) => `${n}-Musikgenerator | Tunee AI`,
  seoDesc: (n) =>
    `Erstelle ${n}-Musik sofort mit Tunees KI-Musikgenerator. Komponiere per Chat einzigartige ${n}-Tracks — keine Vorkenntnisse nötig. Kostenlos starten.`,

  /* ── Hero ── */
  heroTitle: (n) => `${n}\nMusikgenerator`,
  heroSub: (n) =>
    `Beschreibe den Sound, den du dir vorstellst, und lass den Music Agent daraus einen professionellen ${n}-Track machen. Kein Fachwissen nötig — einfach loslegen.`,
  badges: ["300+ Prompts", "25.000+ erstellte Tracks", "Kommerziell nutzbar"],

  /* ── DNA section ── */
  dnaTitle: (n) => `${n}-DNA`,
  dnaSub: (n) =>
    `Die vier Bausteine, die den ${n}-Sound ausmachen — Ursprung, Struktur, Instrumente und Harmonik.`,
  dnaSectionTitles: [
    "Ursprung & Entwicklung",
    "Songstruktur",
    "Typische Instrumente",
    "Harmonik & Hooks",
  ],

  /* ── Subgenres ── */
  subgenreTitle: (n) => `${n}-Spektrum entdecken`,
  subgenreSub: (n) =>
    `Sechs eigenständige Subgenres innerhalb von ${n} — jedes mit eigenem Tempo, Klangbild und Charakter.`,

  /* ── Comparison ── */
  comparisonTitle: (n) => `${n} im Vergleich`,
  comparisonSub: (n) =>
    `So schneidet ${n} im Vergleich zu verwandten Genres bei den wichtigsten musikalischen Merkmalen ab.`,
  compFeatureLabel: "Merkmal",
  compRowLabels: [
    "BPM-Bereich",
    "Hauptinstrumente",
    "Stimmung",
    "Songlänge",
    "Komplexität",
    "Bekannte Künstler",
  ],

  /* ── Prompts ── */
  promptTitle: (n) => `Fertige ${n}-Prompts`,
  promptSub: (n) =>
    `Kuratierte Prompts für jede ${n}-Stimmung — kopieren und sofort loslegen.`,

  /* ── Use Cases ── */
  useCaseTitle: (n) => `${n} im Einsatz`,
  useCaseSub: (n) =>
    `Praxisszenarien, in denen ${n}-Musik glänzt — von Social Media bis zur großen Leinwand.`,
  useCases: [
    {
      title: "Soziale Medien",
      desc: (n) =>
        `Kurze, einprägsame ${n}-Tracks, perfekt für TikTok, Reels und Shorts — gemacht für maximale Reichweite und Engagement.`,
    },
    {
      title: "Werbung",
      desc: (n) =>
        `Professionelle ${n}-Musik setzt den Ton für Markenkampagnen — von Produktlaunches bis Lifestyle-Werbung.`,
    },
    {
      title: "Film & TV",
      desc: (n) =>
        `${n}-Tracks treiben Montagen, Titelsequenzen und stimmungsvolle Szenen in Filmen, Serien und Streaming-Formaten.`,
    },
    {
      title: "Gesangsdemos",
      desc: (n) =>
        `Erstelle instrumentale ${n}-Grundlagen, um Gesangsdemos, Topline-Melodien und Songwriter-Showcases aufzunehmen.`,
    },
    {
      title: "Playlists",
      desc: (n) =>
        `Fülle stimmungsbasierte Playlists — Workout, Chill, Fokus, Party — mit originalen ${n}-Tracks in Radioqualität.`,
    },
    {
      title: "Spiele & Apps",
      desc: (n) =>
        `${n}-Instrumentals liefern den perfekten Soundtrack für Mobile Games, Fitness-Apps und interaktive Erlebnisse.`,
    },
  ],

  /* ── FAQs ── */
  faqs: [
    {
      q: (n) => `Darf ich ${n}-Tracks kommerziell nutzen?`,
      a: (n) =>
        `Ja. Alle mit Tunee erstellten Tracks sind für die kommerzielle Nutzung freigegeben — YouTube, Werbung, Spiele, Podcasts und mehr. Keine Lizenzgebühren, kein Papierkram.`,
    },
    {
      q: (n) => `Welche ${n}-Subgenres kann die KI erzeugen?`,
      a: (n) =>
        `Alle gängigen Subgenres werden unterstützt. Du kannst auch Stile mischen, um einen einzigartigen Sound zu erzeugen. Beschreibe einfach, was du dir vorstellst.`,
    },
    {
      q: (n) => `Kann ich Arrangement und Klang steuern?`,
      a: (n) =>
        `Absolut. Gib Gesangsstil, Instrumente, Tempo und Songstruktur an. Von der reduzierten Akustikversion bis zum vollen Orchesterarrangement — du bestimmst die Richtung.`,
    },
    {
      q: (n) => `Brauche ich Musikproduktions-Erfahrung, um ${n}-Tracks zu erstellen?`,
      a: (n) =>
        `Überhaupt nicht. Beschreibe einfach in eigenen Worten, was du möchtest — zum Beispiel „energetischer Sommerhit" oder „düsterer Synthwave-Track". Die KI kümmert sich um BPM, Tonart, Arrangement und Mix.`,
    },
    {
      q: (n) => `Wie bekomme ich einen Sound ähnlich einem bestimmten Künstler oder einer Ära?`,
      a: (n) =>
        `Nenne den Künstler oder die Epoche in deinem Prompt. Zum Beispiel „80er Synthpop wie Depeche Mode" oder „moderner Pop wie Dua Lipa". Verfeinere das Ergebnis im Chat, bis es passt.`,
    },
  ],

  /* ── Chat demo ── */
  chatUser: (n) =>
    `Erstelle einen ${n}-Track, eingängig und energiegeladen, 120 BPM, C-Dur`,
  chatAi: (n) =>
    `Hier ist dein ${n}-Track — mit treibendem Beat, eingängigem Hook und einem Arrangement, das sofort ins Ohr geht.`,

  /* ── Final CTA ── */
  finalCtaTitle: (n) => `Bereit, deine eigene\n${n}-Musik zu erstellen?`,
  finalCtaSub: (n) =>
    `Von der ersten Idee zum fertigen Track — bringe deine ${n}-Vision in wenigen Minuten zum Leben.`,
  finalCtaButton: "Jetzt loslegen",
  slugData,
};
