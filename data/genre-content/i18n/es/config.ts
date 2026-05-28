import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  /* ── Display names (slug → Spanish) ── */
  names: {
    // Genres
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
    "classical": "Clásica",
    "cinematic": "Cinemática",
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
    "arabic": "Árabe",
    "hindustani": "Indostaní",
    "celtic": "Celta",
    "flamenco": "Flamenco",
    "vaporwave": "Vaporwave",
    "hyperpop": "Hyperpop",
    // Instruments
    "acoustic-guitar": "Guitarra Acústica",
    "bagpipes": "Gaita",
    "bass": "Bajo",
    "cello": "Violonchelo",
    "drums": "Batería",
    "electric-guitar": "Guitarra Eléctrica",
    "erhu": "Erhu",
    "flute": "Flauta",
    "guitar": "Guitarra",
    "harp": "Arpa",
    "instrumental": "Instrumental",
    "organ": "Órgano",
    "oud": "Oud",
    "pan-flute": "Flauta de Pan",
    "piano": "Piano",
    "saxophone": "Saxofón",
    "sitar": "Sitar",
    "synth": "Sintetizador",
    "trumpet": "Trompeta",
    "ukulele": "Ukulele",
    "violin": "Violín",
    // Moods
    "calm": "Tranquilo",
    "chillout": "Chillout",
    "dark": "Oscuro",
    "dramatic": "Dramático",
    "dreamy": "Soñador",
    "energetic": "Enérgico",
    "epic": "Épico",
    "majestic": "Majestuoso",
    "nostalgic": "Nostálgico",
    "romantic": "Romántico",
    "solemn": "Solemne",
    "triumphant": "Triunfante",
    // Eras
    "60s": "Los 60",
    "70s": "Los 70",
    "80s": "Los 80",
    "90s": "Los 90",
    "2000s": "Los 2000",
    "2010s": "Los 2010",
    // Use Cases
    "ads": "Anuncios",
    "background": "Fondo",
    "corporate": "Corporativa",
    "film": "Cine",
    "gaming": "Gaming",
    "meditation": "Meditación",
    "podcast": "Podcast",
    "sleep": "Para Dormir",
    "streaming": "Streaming",
    "study": "Estudio",
    "tiktok": "TikTok",
    "video": "Video",
    "wedding": "Bodas",
    "workout": "Ejercicio",
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

  /* ── SEO ── */
  seoTitle: (name) =>
    `Generador de Música ${name} con IA - Crea Pistas ${name} Gratis | Tunee`,
  seoDesc: (name) =>
    `Crea música ${name} original con el generador de IA de Tunee. Genera pistas ${name} de alta calidad en segundos, sin necesidad de experiencia musical.`,

  /* ── Hero ── */
  heroTitle: (name) => `Genera Música ${name} con IA`,
  heroSub: (name) =>
    `Crea pistas de ${name} únicas al instante. Solo describe lo que quieres y la IA de Tunee compone la música por ti.`,
  badges: ["Sin tarjeta de crédito", "Uso comercial OK", "Listo en segundos"],

  /* ── DNA section ── */
  dnaTitle: (name) => `El ADN de ${name}`,
  dnaSub: (name) =>
    `Los elementos clave que definen el sonido de ${name} y cómo nuestra IA los captura.`,
  dnaSectionTitles: ["Ritmo y Tempo", "Armonía y Melodía", "Instrumentación", "Producción"],

  /* ── Subgenres ── */
  subgenreTitle: (name) => `Subgéneros de ${name}`,
  subgenreSub: (name) =>
    `Explora variantes populares de ${name} que puedes generar con Tunee.`,

  /* ── Comparison ── */
  comparisonTitle: (name) => `Tunee vs Otros Generadores de ${name}`,
  comparisonSub: (name) =>
    `Descubre por qué Tunee es la mejor opción para crear música ${name} con IA.`,
  compFeatureLabel: "Característica",
  compRowLabels: ["Rango de BPM", "Instrumentos clave", "Estado de ánimo", "Duración", "Complejidad", "Artistas destacados"],

  /* ── Prompts ── */
  promptTitle: (name) => `Prompts Populares de ${name}`,
  promptSub: (name) =>
    `Prueba estos prompts para generar pistas de ${name} increíbles con Tunee.`,

  /* ── Use Cases ── */
  useCaseTitle: (name) => `Usos de la Música ${name}`,
  useCaseSub: (name) =>
    `Formas populares de usar música ${name} generada con IA en tus proyectos.`,
  useCases: [
    {
      title: "Redes Sociales",
      desc: (name) =>
        `Crea pistas de ${name} perfectas para TikTok, Reels e historias. Capta la atención de tu audiencia al instante.`,
    },
    {
      title: "Anuncios",
      desc: (name) =>
        `Genera música ${name} profesional para comerciales y campañas publicitarias sin preocuparte por licencias.`,
    },
    {
      title: "Cine y TV",
      desc: (name) =>
        `Produce bandas sonoras de ${name} para cortometrajes, documentales y series. Calidad cinematográfica en minutos.`,
    },
    {
      title: "Demos Vocales",
      desc: (name) =>
        `Genera pistas de acompañamiento de ${name} para tus demos. Ideal para cantantes y compositores.`,
    },
    {
      title: "Playlists",
      desc: (name) =>
        `Llena tus playlists con música ${name} original. Perfecto para creadores de contenido y curadores.`,
    },
    {
      title: "Juegos y Apps",
      desc: (name) =>
        `Añade música ${name} a tus videojuegos y aplicaciones. Crea la atmósfera perfecta para cada escena.`,
    },
  ],

  /* ── FAQs ── */
  faqs: [
    {
      q: (name) => `¿Qué es el generador de música ${name} con IA de Tunee?`,
      a: (name) =>
        `Es una herramienta impulsada por inteligencia artificial que te permite crear música ${name} original a partir de descripciones de texto. Solo escribe el estilo que quieres y Tunee genera la pista completa en segundos.`,
    },
    {
      q: (name) => `¿Cómo puedo crear música ${name} con Tunee?`,
      a: (name) =>
        `Es muy sencillo: escribe un prompt describiendo la música ${name} que quieres (por ejemplo, tempo, instrumentos, estado de ánimo), haz clic en generar y tu pista estará lista en segundos. Puedes ajustarla hasta que quede perfecta.`,
    },
    {
      q: (name) => `¿Puedo usar la música ${name} generada con fines comerciales?`,
      a: (name) =>
        `Sí. Las pistas de ${name} generadas en Tunee se pueden usar en proyectos comerciales, incluyendo videos de YouTube, podcasts, anuncios y más, dependiendo de tu plan.`,
    },
    {
      q: (name) => `¿Necesito habilidades musicales para crear música ${name}?`,
      a: (name) =>
        `Para nada. Tunee está diseñado para todos, desde principiantes hasta profesionales. No necesitas saber teoría musical ni tocar ningún instrumento. Solo describe lo que quieres y la IA se encarga del resto.`,
    },
    {
      q: (name) => `¿Es gratis generar música ${name} en Tunee?`,
      a: (name) =>
        `Tunee ofrece un plan gratuito para que pruebes el generador de ${name} sin compromiso. Para acceder a más funciones y descargas en alta calidad, puedes explorar nuestros planes de pago.`,
    },
  ],

  /* ── Chat demo ── */
  chatUser: (name) =>
    `Crea una pista de ${name} con vibras relajadas y buena energía`,
  chatAi: (name) =>
    `¡Listo! Aquí tienes tu pista de ${name}. La generé con un ritmo chill, melodías suaves y buena vibra. ¿Quieres ajustar algo?`,

  /* ── Final CTA ── */
  finalCtaTitle: (name) => `Empieza a Crear Música ${name} Ahora`,
  finalCtaSub: (name) =>
    `Únete a miles de creadores que ya usan Tunee para generar música ${name} con IA. Es gratis para empezar.`,
  finalCtaButton: "Crear Música Gratis",
  slugData,
};
