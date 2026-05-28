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
    "classical": "Clássica",
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
    "hindustani": "Hindustani",
    "celtic": "Celta",
    "flamenco": "Flamenco",
    "vaporwave": "Vaporwave",
    "hyperpop": "Hyperpop",
    // Instrument
    "acoustic-guitar": "Violão",
    "bagpipes": "Gaita de Foles",
    "bass": "Baixo",
    "cello": "Violoncelo",
    "drums": "Bateria",
    "electric-guitar": "Guitarra Elétrica",
    "erhu": "Erhu",
    "flute": "Flauta",
    "guitar": "Guitarra",
    "harp": "Harpa",
    "instrumental": "Instrumental",
    "organ": "Órgão",
    "oud": "Oud",
    "pan-flute": "Flauta de Pã",
    "piano": "Piano",
    "saxophone": "Saxofone",
    "sitar": "Sitar",
    "synth": "Sintetizador",
    "trumpet": "Trompete",
    "ukulele": "Ukulele",
    "violin": "Violino",
    // Mood
    "calm": "Calmo",
    "chillout": "Chillout",
    "dark": "Sombrio",
    "dramatic": "Dramático",
    "dreamy": "Sonhador",
    "energetic": "Energético",
    "epic": "Épico",
    "majestic": "Majestoso",
    "nostalgic": "Nostálgico",
    "romantic": "Romântico",
    "solemn": "Solene",
    "triumphant": "Triunfante",
    // Era
    "60s": "Anos 60",
    "70s": "Anos 70",
    "80s": "Anos 80",
    "90s": "Anos 90",
    "2000s": "Anos 2000",
    "2010s": "Anos 2010",
    // Use Case
    "ads": "Anúncios",
    "background": "Fundo",
    "corporate": "Corporativo",
    "film": "Cinema",
    "gaming": "Gaming",
    "meditation": "Meditação",
    "podcast": "Podcast",
    "sleep": "Sono",
    "streaming": "Streaming",
    "study": "Estudo",
    "tiktok": "TikTok",
    "video": "Vídeo",
    "wedding": "Casamento",
    "workout": "Treino",
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

  seoTitle: (name) => `Gerador de Música ${name} com IA | Tunee`,
  seoDesc: (name) =>
    `Crie músicas ${name} com inteligência artificial. Basta digitar o que você quer e o Tunee gera faixas ${name} de alta qualidade em segundos. Comece grátis.`,

  heroTitle: (name) => `Crie música ${name} com IA`,
  heroSub: (name) =>
    `Descreva o que você imagina e gere faixas ${name} profissionais em segundos. Nenhum conhecimento musical necessário.`,
  badges: ["Alta Qualidade", "Uso Comercial", "Comece Grátis"],

  dnaTitle: (name) => `O DNA do som ${name}`,
  dnaSub: (name) =>
    `Entenda os elementos que definem o ${name} — ritmo, melodia e timbre — e veja como a IA aplica isso nas suas faixas.`,
  dnaSectionTitles: ["Ritmo & Andamento", "Melodia & Harmonia", "Timbre & Sonoridade", "Técnicas de Produção"],

  subgenreTitle: (name) => `Explore subgêneros de ${name}`,
  subgenreSub: (name) =>
    `O ${name} tem diversos estilos. Escolha um subgênero e deixe a IA criar a faixa perfeita pra você.`,

  comparisonTitle: (name) => `Compare geradores de música ${name} com IA`,
  comparisonSub: (name) =>
    `Veja como os principais geradores de música com IA se comparam e por que o Tunee é a melhor escolha para ${name}.`,
  compFeatureLabel: "Recurso",
  compRowLabels: ["Faixa de BPM", "Instrumentos-chave", "Clima", "Duração", "Complexidade", "Artistas notáveis"],

  promptTitle: (name) => `Prompts prontos para ${name}`,
  promptSub: (name) =>
    `Copie um dos prompts abaixo e comece a gerar música ${name} agora mesmo. Personalize como quiser.`,

  useCaseTitle: (name) => `Onde usar música ${name}`,
  useCaseSub: (name) =>
    `Música ${name} gerada por IA se encaixa em diversos cenários. Veja as principais aplicações.`,
  useCases: [
    {
      title: "Redes Sociais",
      desc: (name) =>
        `Crie trilhas ${name} perfeitas para TikTok, Instagram Reels e Shorts. Destaque seus vídeos com música original feita por IA.`,
    },
    {
      title: "Anúncios",
      desc: (name) =>
        `Gere música ${name} pronta para uso comercial em campanhas publicitárias, spots e vídeos promocionais com qualidade profissional.`,
    },
    {
      title: "Cinema / TV",
      desc: (name) =>
        `Produza trilhas sonoras ${name} sob medida para filmes, séries e documentários. A IA adapta o som ao clima de cada cena.`,
    },
    {
      title: "Demos Vocais",
      desc: (name) =>
        `Crie bases ${name} para gravar demos vocais e acelerar seu processo de composição. Perfeito para cantores e letristas.`,
    },
    {
      title: "Playlists",
      desc: (name) =>
        `Gere faixas ${name} originais para playlists no Spotify, Apple Music e outras plataformas. IA cria variações infinitas.`,
    },
    {
      title: "Jogos / Apps",
      desc: (name) =>
        `Crie trilhas ${name} para jogos e aplicativos, incluindo loops e música ambiente. Tudo gerado por IA em poucos cliques.`,
    },
  ],

  faqs: [
    {
      q: (name) => `O que é um gerador de música ${name} com IA?`,
      a: (name) =>
        `É uma ferramenta que usa inteligência artificial para criar músicas no estilo ${name} a partir de instruções em texto. A IA aprendeu os padrões rítmicos, melódicos e de timbre do ${name}, permitindo que qualquer pessoa gere faixas profissionais sem conhecimento técnico.`,
    },
    {
      q: (name) => `Como criar música ${name} com IA?`,
      a: (name) =>
        `É muito simples. Digite algo como "crie uma música ${name}" na caixa de texto, ou use um dos prompts prontos como ponto de partida. Em segundos a IA gera a faixa. Você pode ajustar andamento, instrumentos, humor e estrutura até ficar do seu jeito.`,
    },
    {
      q: (name) => `Posso usar as músicas ${name} geradas para fins comerciais?`,
      a: (name) =>
        `Sim! Todas as faixas ${name} criadas no Tunee são liberadas para uso comercial. Você pode usar em vídeos do YouTube, podcasts, anúncios, redes sociais e qualquer outro projeto sem preocupação com direitos autorais.`,
    },
    {
      q: (name) => `Preciso saber música para usar o gerador de ${name}?`,
      a: (name) =>
        `Não, você não precisa de nenhum conhecimento musical. A IA cuida de toda a parte técnica — basta descrever em texto o que você quer e a faixa ${name} é gerada automaticamente com qualidade profissional.`,
    },
    {
      q: (name) => `O gerador de música ${name} com IA é gratuito?`,
      a: (name) =>
        `Sim, o Tunee oferece um plano gratuito para você começar a criar música ${name} agora mesmo. Se precisar de mais funcionalidades ou downloads, há planos pagos com recursos extras.`,
    },
  ],

  chatUser: (name) => `Crie uma música ${name} pra mim`,
  chatAi: (name) =>
    `Pronto! Sua faixa ${name} foi gerada. Aperte play para ouvir e, se curtir, faça o download.`,

  finalCtaTitle: (name) => `Crie sua música ${name} agora`,
  finalCtaSub: (name) =>
    `Use o poder da IA para gerar faixas ${name} únicas em segundos. Comece de graça.`,
  finalCtaButton: "Começar Grátis",
  slugData,
};
