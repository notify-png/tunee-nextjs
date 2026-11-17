import { type LangConfig } from "../helpers";
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
    "r-and-b": "R&B",
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

    // 2026-10 批次 1：补齐高流量未登记 slug
    "professional": "Profesional",
    "choir": "Coral",
    "duet": "Dúo",
    "chinese-traditional": "China Tradicional",
    "mexican": "Mexicana",
    "ai-music-agent": "Agente Musical IA",
    "acapella": "A cappella",
    "a-cappella": "A cappella",
    "chant": "Canto",
    "anime": "Anime",
    "boss-battle-music": "Batalla de Jefe",
    "african": "Africana",
    "mix": "Mix",
    "trailer-music": "Tráiler",
    "japanese": "Japonesa",
    "dance": "Dance",
    "vocal": "Vocal",
    "memphis": "Memphis",
    "slow": "Lenta",
    "8-bit": "8-Bit",
    // 2026-10 批次 2
    "gamelan": "Gamelán",
    "psytrance": "Psytrance",
    "hardcore": "Hardcore",
    "medieval": "Medieval",
    "spanish": "Española",
    "sonata": "Sonata",
    "trap": "Trap",
    "gregorian-chant": "Canto Gregoriano",
    "balkan": "Balcánica",
    "future-bass": "Future Bass",
    "for-meditation-creators": "Para Meditación",
    "brass": "Metales",
    "brazilian": "Brasileña",
    "indonesian": "Indonesia",
    "horror": "Terror",
    "symphony": "Sinfonía",
    "fantasy-music": "Fantasía",
    "witch-house": "Witch House",
    "tropical": "Tropical",
    "glitch": "Glitch",
    "opera": "Ópera",
    "overture": "Obertura",
    "salsa": "Salsa",
    "tibetan": "Tibetana",
    "shoegaze": "Shoegaze",
    "symphonic-metal": "Symphonic Metal",
    "middle-eastern": "Medio Oriente",
    "irish": "Irlandesa",
    "film-score": "Banda Sonora",
    "string": "Cuerdas",
    "techno": "Techno",
    "swing": "Swing",
    "gothic": "Gótica",
    "bossa-nova": "Bossa Nova",
    "cumbia": "Cumbia",
    "psychedelic": "Psicodélica",
    "epic-orchestral-music": "Épica Orquestal",
    "for-tiktok-creators": "Para TikTok",
    // 2026-10 批次 3
    "grime": "Grime",
    "menu-music": "Música de Menú",
    "bach": "Bach",
    "music-creation": "Creación Musical",
    "mariachi": "Mariachi",
    "city-pop": "City Pop",
    "string-quartet": "Cuarteto de Cuerdas",
    "reggaeton": "Reggaetón",
    "metalcore": "Metalcore",
    "nordic-folk": "Folk Nórdico",
    "bluegrass": "Bluegrass",
    "for-djs": "Para DJs",
    "retrowave": "Retrowave",
    "emotional": "Emocional",
    "allegro": "Allegro",
    "rpg-music": "Música RPG",
    "japanese-traditional": "Japonesa Tradicional",
    "for-teachers": "Para Profesores",
    "upbeat": "Animada",
    "percussion": "Percusión",
    "ballroom": "Salón de Baile",
    "for-small-businesses": "Para Pequeños Negocios",
    "industrial": "Industrial",
    "chillwave": "Chillwave",
    "bebop": "Bebop",
    "smooth-jazz": "Smooth Jazz",
    "chiptune": "Chiptune",
    "spiritual": "Espiritual",
    "vintage-production": "Producción Vintage",
    "future-funk": "Future Funk",
    "vlog": "Vlog",
    "indie": "Indie",
    "rap": "Rap",
    "baroque": "Barroca",
    "renaissance": "Renacimiento",
    "lute": "Laúd",
    "grunge": "Grunge",
    "jrpg-music": "Música JRPG",
    "analog": "Analógica",
    "disco": "Disco",
    "electro": "Electro",
    "waltz": "Vals",
    "hypnagogic-pop": "Hypnagogic Pop",
    "for-content-creators": "Para Creadores",
    "alternative": "Alternativa",
    "world-music": "Música del Mundo",
    "polynesian": "Polinesia",
    "minimalist-classical": "Clásica Minimalista",
    "korean": "Coreana",
    // 2026-10 批次 4
    "nature": "Naturaleza",
    "c-pop": "C-Pop",
    "for-dancers": "Para Bailarines",
    "quartet": "Cuarteto",
    "mallsoft": "Mallsoft",
    "prelude": "Preludio",
    "highlife": "Highlife",
    "for-songwriters": "Para Autores de Canciones",
    "commercial-music": "Música Comercial",
    "neoclassical": "Neoclásica",
    "adagio": "Adagio",
    "for-advertisers": "Para Anunciantes",
    "for-producers": "Para Productores",
    "zen": "Zen",
    "for-video-editors": "Para Editores de Vídeo",
    "slushwave": "Slushwave",
    "punk": "Punk",
    "experimental": "Experimental",
    "concerto": "Concierto",
    "scottish": "Escocesa",
    "nocturne": "Nocturno",
    "andean": "Andina",
    "space": "Espacial",
    "singer-songwriter": "Cantautor",
    "for-students": "Para Estudiantes",
    "dungeon-music": "Música de Mazmorra",
    "largo": "Largo",
    "eccojams": "Eccojams",
    "k-rnb": "K-R&B",
    "appalachian": "Apalache",
    "dreampunk": "Dreampunk",
    "contemporary-classical": "Clásica Contemporánea",
    "documentary-music": "Música Documental",
    "lo-fi-production": "Producción Lo-Fi",
    "arpeggio-production": "Producción Arpegio",
    "chamber-music": "Música de Cámara",
    "mandopop": "Mandopop",
    "hard-bop": "Hard Bop",
    "for-app-developers": "Para Desarrolladores de Apps",
    "for-singers": "Para Cantantes",
    "koto": "Koto",
    "for-wedding-creators": "Para Vídeos de Boda",
    // 2026-10 批次 5（末批）
    "warm": "Cálida",
    "hawaiian": "Hawaiana",
    "electronic": "Electrónica",
    "for-musicians": "Para Músicos",
    "romantic-mood": "Romance",
    "for-indie-game-developers": "Para Desarrolladores Indie",
    "dream-pop": "Dream Pop",
    "for-composers": "Para Compositores",
    "modern": "Moderna",
    "ui-sound": "Sonido UI",
    "fast": "Rápida",
    "jazz-funk": "Jazz Funk",
    "polished-production": "Producción Pulida",
    "atmospheric-production": "Producción Atmosférica",
    "ethnic": "Étnica",
    "intimate": "Íntima",
    "reverb-production": "Producción Reverb",
    "beat": "Beat",
    "viral": "Viral",
    "for-marketers": "Para Marketers",
    "open-world-music": "Música de Mundo Abierto",
    "sci-fi-horror-music": "Terror Sci-Fi",
    "acoustic-production": "Producción Acústica",
    "for-podcasters": "Para Podcasters",
    "urban": "Urbana",
    "cuban": "Cubana",
    "for-filmmakers": "Para Cineastas",
    "for-game-developers": "Para Desarrolladores de Juegos",
    "soul": "Soul",
    "minimal-production": "Producción Mínima",
    "for-social-media-managers": "Para Community Managers",
    "for-youtubers": "Para YouTubers",
    "raw-production": "Producción Cruda",
    "eastern-european": "Europa del Este",
    "exploration-music": "Música de Exploración",
    "for-video-creators": "Para Videocreadores",
    "glo-fi": "Glo-Fi",
    "for-streamers": "Para Streamers",
    "chinese": "China",
    "english": "Inglesa",
    "instrumental-language": "Instrumental",
    "k-hip-hop": "K-Hip-Hop",
    // 2026-10 批次 1 补遗
    "orchestral": "Orquestal",
  },

  /* ── SEO ── */
  seoTitle: (name) =>
    `Generador de Música ${name} con IA - Crea Pistas ${name} Gratis | Tunee`,
  /* 长度压在 150 以内：normalizeMetaDescription 上限 155，截断后还会补一个句号，
     看起来像写完了。这个模板要容纳最长 31 字符的译名，所以空载必须留足余量。
     改之前先跑一遍 291 个 slug 的代入长度，别只看模板本身。 */
  seoDesc: (name) =>
    `Crea música ${name} original con el generador de IA de Tunee. Pistas de alta calidad en segundos, sin experiencia musical.`,

  /* ── Hero ── */
  heroTitle: (name) => `Genera Música ${name} con IA`,
  heroSub: (name) =>
    `Crea pistas de ${name} únicas al instante. Solo describe lo que quieres y la IA de Tunee compone la música por ti.`,
  badges: ["Sin tarjeta de crédito", "Uso comercial OK", "Listo en segundos"],

  /* 人群页名称的句中形态。names 里是标题形态（Title Case），
     正文句子里要的是西语的常规写法：普通名词小写，品牌名保留大写。
     机械降首字母只能救「Para X」里的 P，救不了后面的实词
     （「para Autores de Canciones」），所以这 26 条逐个写出来。 */
  sentenceNames: {
    "for-advertisers": "para anunciantes",
    "for-app-developers": "para desarrolladores de apps",
    "for-composers": "para compositores",
    "for-content-creators": "para creadores",
    "for-dancers": "para bailarines",
    "for-djs": "para DJs",
    "for-filmmakers": "para cineastas",
    "for-game-developers": "para desarrolladores de juegos",
    "for-indie-game-developers": "para desarrolladores indie",
    "for-marketers": "para marketers",
    "for-meditation-creators": "para meditación",
    "for-musicians": "para músicos",
    "for-podcasters": "para podcasters",
    "for-producers": "para productores",
    "for-singers": "para cantantes",
    "for-small-businesses": "para pequeños negocios",
    "for-social-media-managers": "para community managers",
    "for-songwriters": "para autores de canciones",
    "for-streamers": "para streamers",
    "for-students": "para estudiantes",
    "for-teachers": "para profesores",
    "for-tiktok-creators": "para TikTok",
    "for-video-creators": "para videocreadores",
    "for-video-editors": "para editores de vídeo",
    "for-wedding-creators": "para vídeos de boda",
    "for-youtubers": "para YouTubers",
  },

  /* ── DNA section ── */
  /* ── 人群页（creator-type）专用句式 ──
     常规模板假设 name 是曲风名词，人群名填进去是病句（见 helpers.ts 的 audience 注释）。
     只覆盖 SERP 与首屏看到的四个字段。 */
  audience: {
    seoTitle: (name) => `Generador de Música con IA ${name} | Tunee`,
    seoDesc: (name) =>
      `Música ${name} con el generador de IA de Tunee. Pistas de alta calidad en segundos, sin experiencia musical.`,
    heroTitle: (name) => `Genera Música con IA ${name}`,
    heroSub: (name) =>
      `Crea pistas únicas ${name} al instante. Solo describe lo que quieres y la IA de Tunee compone la música por ti.`,
    /* 「El ADN de Para DJs」是 de + para 两个介词连用。补一个 la música
       当中心词，介词短语就有东西可修饰了。 */
    dnaTitle: (name) => `El ADN de la música ${name}`,
    subgenreTitle: (name) => `Subgéneros de música ${name}`,
    comparisonTitle: (name) => `Tunee vs Otros Generadores de Música ${name}`,
    promptTitle: (name) => `Prompts Populares ${name}`,
    useCaseTitle: (name) => `Usos de la Música ${name}`,
    finalCtaTitle: (name) => `Empieza a Crear Música ${name} Ahora`,

    /* 正文层。常规模板把 name 当曲风名词（「música Para DJs」「el sonido de
       Para DJs」），这里一律补中心词再接介词短语：「música para DJs」。
       原模板里「de ${name}」的位置最容易出事——「de para DJs」两个介词连用，
       所以凡是这种位置都改写成「de música para DJs」或直接去掉 de。 */
    dnaSub: (name) =>
      `Los elementos clave que definen el sonido de la música ${name} y cómo nuestra IA los captura.`,
    subgenreSub: (name) =>
      `Explora variantes populares de música ${name} que puedes generar con Tunee.`,
    comparisonSub: (name) =>
      `Descubre por qué Tunee es la mejor opción para crear música ${name} con IA.`,
    promptSub: (name) =>
      `Prueba estos prompts para generar pistas increíbles de música ${name} con Tunee.`,
    useCaseSub: (name) =>
      `Formas populares de usar música ${name} generada con IA en tus proyectos.`,
    finalCtaSub: (name) =>
      `Únete a miles de creadores que ya usan Tunee para generar música ${name} con IA. Es gratis para empezar.`,
    useCaseDescs: [
      (name) =>
        `Música ${name} lista para publicar: vídeos cortos, Reels e historias. Capta la atención de tu audiencia al instante.`,
      (name) =>
        `Genera música ${name} profesional para comerciales y campañas publicitarias sin preocuparte por licencias.`,
      (name) =>
        `Produce bandas sonoras ${name} en cortometrajes, documentales y series. Calidad cinematográfica en minutos.`,
      (name) =>
        `Genera pistas de acompañamiento ${name} y úsalas en tus demos. Ideal para cantantes y compositores.`,
      (name) =>
        `Llena tus playlists con música ${name} original. Perfecto para creadores de contenido y curadores.`,
      (name) =>
        `Añade música ${name} a tus videojuegos y aplicaciones. Crea la atmósfera perfecta para cada escena.`,
    ],
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
        q: (name) => `¿Puedo usar con fines comerciales la música ${name} que cree en Tunee?`,
        a: (name) =>
          `Sí. La música ${name} que generes en Tunee se puede usar en proyectos comerciales, incluyendo videos de YouTube, podcasts, anuncios y más, dependiendo de tu plan.`,
      },
      {
        q: (name) => `¿Necesito habilidades musicales para crear música ${name}?`,
        a: () =>
          `Para nada. Tunee está diseñado para todos, desde principiantes hasta profesionales. No necesitas saber teoría musical ni tocar ningún instrumento. Solo describe lo que quieres y la IA se encarga del resto.`,
      },
      {
        q: (name) => `¿Es gratis generar música ${name} en Tunee?`,
        a: (name) =>
          `Tunee ofrece un plan gratuito para que pruebes el generador de música ${name} sin compromiso. Para acceder a más funciones y descargas en alta calidad, puedes explorar nuestros planes de pago.`,
      },
    ],
    chatUser: (name) =>
      `Crea una pista ${name} con vibras relajadas y buena energía`,
    chatAi: (name) =>
      `¡Listo! Aquí tienes tu pista ${name}. La generé con un ritmo chill, melodías suaves y buena vibra. ¿Quieres ajustar algo?`,
  },

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
