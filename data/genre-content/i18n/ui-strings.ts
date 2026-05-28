/**
 * UI-level strings used in the sub-page template — section titles, CTA labels,
 * Steps descriptions, and other chrome that is the same across all slugs.
 */

export interface SlugPageUI {
  breadcrumbHome: string;
  breadcrumbGenerator: string;
  /** "{name} Music Generator" — {name} is replaced at render time */
  breadcrumbCurrent: string;
  /** "Create {name} Music" */
  btnCreate: string;
  btnBrowsePrompts: string;
  chatPlaceholder: string;
  stepsTitle: string;
  /** "From idea to finished track — describe, refine, and export your {name} music." */
  stepsSub: string;
  steps: { num: string; title: string; desc: string }[];
  stepsCta: string;
  relatedTitle: string;
  relatedSub: string;
  faqTitle: string;
  /** "Everything you need to know about creating {name} music with Tunee." */
  faqSub: string;
  footerTagline: string;
}

const ui: Record<string, SlugPageUI> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbGenerator: "Music Generator",
    breadcrumbCurrent: "{name} Music Generator",
    btnCreate: "Create {name} Music",
    btnBrowsePrompts: "Browse Prompts ↓",
    chatPlaceholder: "Chat with Tunee to create music...",
    stepsTitle: "Three Simple Steps",
    stepsSub: "From idea to finished track — describe, refine, and export your {name} music.",
    steps: [
      { num: "01", title: "Describe Your Vision", desc: "Tell Music Agent what kind of track you want — reference a mood, artist, or scene. No jargon needed." },
      { num: "02", title: "Refine Through Chat", desc: "Fine-tune BPM, key, instruments, and structure through natural conversation. Iterate until it's perfect." },
      { num: "03", title: "Export & Use", desc: "Download your track in high-quality audio. Fully cleared for commercial use — games, videos, ads, and more." },
    ],
    stepsCta: "Start Creating {name} Music",
    relatedTitle: "Explore More Genres",
    relatedSub: "Discover related genres and expand your sonic palette.",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Everything you need to know about creating {name} music with Tunee.",
    footerTagline: "Create music with AI — any genre, any style, any mood.",
  },
  jp: {
    breadcrumbHome: "ホーム",
    breadcrumbGenerator: "音楽ジェネレーター",
    breadcrumbCurrent: "{name} 音楽ジェネレーター",
    btnCreate: "{name} 音楽を作成",
    btnBrowsePrompts: "プロンプト一覧 ↓",
    chatPlaceholder: "Tuneeとチャットして音楽を作成...",
    stepsTitle: "3つの簡単なステップ",
    stepsSub: "アイデアから完成トラックまで — {name} 音楽を描写し、調整し、エクスポート。",
    steps: [
      { num: "01", title: "ビジョンを伝える", desc: "Music Agentに作りたいトラックを伝えましょう。ムード、アーティスト、シーンを参考に。専門用語は不要です。" },
      { num: "02", title: "チャットで調整", desc: "自然な会話でBPM、キー、楽器、構成を微調整。完璧になるまで繰り返し調整できます。" },
      { num: "03", title: "エクスポート＆使用", desc: "高音質でトラックをダウンロード。商用利用完全対応 — ゲーム、動画、広告などに。" },
    ],
    stepsCta: "{name} 音楽の作成を開始",
    relatedTitle: "他のジャンルを探す",
    relatedSub: "関連ジャンルを発見し、サウンドの幅を広げましょう。",
    faqTitle: "よくある質問",
    faqSub: "Tuneeで{name}音楽を作成するために知っておくべきすべてのこと。",
    footerTagline: "AIで音楽を作成 — あらゆるジャンル、スタイル、ムードに対応。",
  },
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbGenerator: "Generador de Música",
    breadcrumbCurrent: "Generador de Música {name}",
    btnCreate: "Crear Música {name}",
    btnBrowsePrompts: "Ver Prompts ↓",
    chatPlaceholder: "Chatea con Tunee para crear música...",
    stepsTitle: "Tres Pasos Simples",
    stepsSub: "De la idea a la pista terminada — describe, refina y exporta tu música {name}.",
    steps: [
      { num: "01", title: "Describe Tu Visión", desc: "Dile a Music Agent qué tipo de pista quieres — referencia un estado de ánimo, artista o escena. Sin jerga técnica." },
      { num: "02", title: "Refina por Chat", desc: "Ajusta BPM, tonalidad, instrumentos y estructura a través de conversación natural. Itera hasta que sea perfecto." },
      { num: "03", title: "Exporta y Usa", desc: "Descarga tu pista en audio de alta calidad. Totalmente libre de regalías — juegos, videos, anuncios y más." },
    ],
    stepsCta: "Comenzar a Crear Música {name}",
    relatedTitle: "Explora Más Géneros",
    relatedSub: "Descubre géneros relacionados y amplía tu paleta sonora.",
    faqTitle: "Preguntas Frecuentes",
    faqSub: "Todo lo que necesitas saber sobre crear música {name} con Tunee.",
    footerTagline: "Crea música con IA — cualquier género, estilo o estado de ánimo.",
  },
  pt: {
    breadcrumbHome: "Início",
    breadcrumbGenerator: "Gerador de Música",
    breadcrumbCurrent: "Gerador de Música {name}",
    btnCreate: "Criar Música {name}",
    btnBrowsePrompts: "Ver Prompts ↓",
    chatPlaceholder: "Converse com Tunee para criar música...",
    stepsTitle: "Três Passos Simples",
    stepsSub: "Da ideia à faixa finalizada — descreva, refine e exporte sua música {name}.",
    steps: [
      { num: "01", title: "Descreva Sua Visão", desc: "Diga ao Music Agent que tipo de faixa você quer — referencie um humor, artista ou cena. Sem jargão técnico." },
      { num: "02", title: "Refine por Chat", desc: "Ajuste BPM, tom, instrumentos e estrutura através de conversa natural. Itere até ficar perfeito." },
      { num: "03", title: "Exporte e Use", desc: "Baixe sua faixa em áudio de alta qualidade. Totalmente liberada para uso comercial — jogos, vídeos, anúncios e mais." },
    ],
    stepsCta: "Começar a Criar Música {name}",
    relatedTitle: "Explore Mais Gêneros",
    relatedSub: "Descubra gêneros relacionados e expanda sua paleta sonora.",
    faqTitle: "Perguntas Frequentes",
    faqSub: "Tudo que você precisa saber sobre criar música {name} com Tunee.",
    footerTagline: "Crie música com IA — qualquer gênero, estilo ou humor.",
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbGenerator: "Générateur de Musique",
    breadcrumbCurrent: "Générateur de Musique {name}",
    btnCreate: "Créer de la Musique {name}",
    btnBrowsePrompts: "Parcourir les Prompts ↓",
    chatPlaceholder: "Chattez avec Tunee pour créer de la musique...",
    stepsTitle: "Trois Étapes Simples",
    stepsSub: "De l'idée au morceau fini — décrivez, affinez et exportez votre musique {name}.",
    steps: [
      { num: "01", title: "Décrivez Votre Vision", desc: "Dites à Music Agent quel type de morceau vous voulez — référencez une ambiance, un artiste ou une scène. Pas de jargon technique." },
      { num: "02", title: "Affinez par Chat", desc: "Ajustez le BPM, la tonalité, les instruments et la structure par conversation naturelle. Itérez jusqu'à la perfection." },
      { num: "03", title: "Exportez et Utilisez", desc: "Téléchargez votre morceau en audio haute qualité. Entièrement libre de droits — jeux, vidéos, publicités et plus." },
    ],
    stepsCta: "Commencer à Créer de la Musique {name}",
    relatedTitle: "Explorez Plus de Genres",
    relatedSub: "Découvrez des genres connexes et élargissez votre palette sonore.",
    faqTitle: "Questions Fréquentes",
    faqSub: "Tout ce que vous devez savoir sur la création de musique {name} avec Tunee.",
    footerTagline: "Créez de la musique avec l'IA — tout genre, style ou ambiance.",
  },
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbGenerator: "Musikgenerator",
    breadcrumbCurrent: "{name}-Musikgenerator",
    btnCreate: "{name}-Musik erstellen",
    btnBrowsePrompts: "Prompts durchsuchen ↓",
    chatPlaceholder: "Chatte mit Tunee, um Musik zu erstellen...",
    stepsTitle: "Drei Einfache Schritte",
    stepsSub: "Von der Idee zum fertigen Track — beschreibe, verfeinere und exportiere deine {name}-Musik.",
    steps: [
      { num: "01", title: "Beschreibe Deine Vision", desc: "Sage Music Agent, welchen Track du möchtest — referenziere eine Stimmung, einen Künstler oder eine Szene. Kein Fachjargon nötig." },
      { num: "02", title: "Verfeinere per Chat", desc: "Passe BPM, Tonart, Instrumente und Struktur durch natürliche Konversation an. Iteriere bis zur Perfektion." },
      { num: "03", title: "Exportiere & Nutze", desc: "Lade deinen Track in hochwertiger Audioqualität herunter. Vollständig für kommerzielle Nutzung freigegeben — Spiele, Videos, Werbung und mehr." },
    ],
    stepsCta: "{name}-Musik erstellen starten",
    relatedTitle: "Weitere Genres Entdecken",
    relatedSub: "Entdecke verwandte Genres und erweitere deine klangliche Palette.",
    faqTitle: "Häufig Gestellte Fragen",
    faqSub: "Alles, was du über das Erstellen von {name}-Musik mit Tunee wissen musst.",
    footerTagline: "Erstelle Musik mit KI — jedes Genre, jeder Stil, jede Stimmung.",
  },
  it: {
    breadcrumbHome: "Home",
    breadcrumbGenerator: "Generatore di Musica",
    breadcrumbCurrent: "Generatore di Musica {name}",
    btnCreate: "Crea Musica {name}",
    btnBrowsePrompts: "Sfoglia i Prompt ↓",
    chatPlaceholder: "Chatta con Tunee per creare musica...",
    stepsTitle: "Tre Semplici Passi",
    stepsSub: "Dall'idea al brano finito — descrivi, perfeziona ed esporta la tua musica {name}.",
    steps: [
      { num: "01", title: "Descrivi la Tua Visione", desc: "Di a Music Agent che tipo di brano vuoi — fai riferimento a un mood, artista o scena. Nessun gergo tecnico necessario." },
      { num: "02", title: "Perfeziona via Chat", desc: "Regola BPM, tonalità, strumenti e struttura attraverso conversazione naturale. Itera fino alla perfezione." },
      { num: "03", title: "Esporta e Usa", desc: "Scarica il tuo brano in audio di alta qualità. Completamente libero da royalty — giochi, video, pubblicità e altro." },
    ],
    stepsCta: "Inizia a Creare Musica {name}",
    relatedTitle: "Esplora Altri Generi",
    relatedSub: "Scopri generi correlati e amplia la tua tavolozza sonora.",
    faqTitle: "Domande Frequenti",
    faqSub: "Tutto quello che devi sapere sulla creazione di musica {name} con Tunee.",
    footerTagline: "Crea musica con l'IA — qualsiasi genere, stile o mood.",
  },
  ko: {
    breadcrumbHome: "홈",
    breadcrumbGenerator: "음악 생성기",
    breadcrumbCurrent: "{name} 음악 생성기",
    btnCreate: "{name} 음악 만들기",
    btnBrowsePrompts: "프롬프트 보기 ↓",
    chatPlaceholder: "Tunee와 채팅하여 음악을 만드세요...",
    stepsTitle: "3가지 간단한 단계",
    stepsSub: "아이디어에서 완성 트랙까지 — {name} 음악을 설명하고, 다듬고, 내보내세요.",
    steps: [
      { num: "01", title: "비전 설명하기", desc: "Music Agent에게 원하는 트랙을 설명하세요 — 분위기, 아티스트 또는 장면을 참조하세요. 전문 용어는 필요 없습니다." },
      { num: "02", title: "채팅으로 다듬기", desc: "자연스러운 대화로 BPM, 키, 악기, 구조를 미세 조정하세요. 완벽해질 때까지 반복하세요." },
      { num: "03", title: "내보내기 및 사용", desc: "고품질 오디오로 트랙을 다운로드하세요. 상업적 사용 완전 허가 — 게임, 영상, 광고 등." },
    ],
    stepsCta: "{name} 음악 만들기 시작",
    relatedTitle: "더 많은 장르 탐색",
    relatedSub: "관련 장르를 발견하고 사운드 팔레트를 확장하세요.",
    faqTitle: "자주 묻는 질문",
    faqSub: "Tunee로 {name} 음악을 만드는 데 알아야 할 모든 것.",
    footerTagline: "AI로 음악 만들기 — 모든 장르, 스타일, 분위기.",
  },
  ru: {
    breadcrumbHome: "Главная",
    breadcrumbGenerator: "Генератор Музыки",
    breadcrumbCurrent: "Генератор Музыки {name}",
    btnCreate: "Создать Музыку {name}",
    btnBrowsePrompts: "Просмотреть Промпты ↓",
    chatPlaceholder: "Общайтесь с Tunee для создания музыки...",
    stepsTitle: "Три Простых Шага",
    stepsSub: "От идеи до готового трека — опишите, доработайте и экспортируйте вашу музыку {name}.",
    steps: [
      { num: "01", title: "Опишите Ваше Видение", desc: "Расскажите Music Agent, какой трек вы хотите — укажите настроение, артиста или сцену. Никакого жаргона." },
      { num: "02", title: "Доработайте в Чате", desc: "Настройте BPM, тональность, инструменты и структуру через естественную беседу. Повторяйте до совершенства." },
      { num: "03", title: "Экспортируйте и Используйте", desc: "Скачайте трек в высоком качестве. Полностью свободен от роялти — игры, видео, реклама и многое другое." },
    ],
    stepsCta: "Начать Создание Музыки {name}",
    relatedTitle: "Исследуйте Другие Жанры",
    relatedSub: "Откройте связанные жанры и расширьте свою звуковую палитру.",
    faqTitle: "Часто Задаваемые Вопросы",
    faqSub: "Всё, что нужно знать о создании музыки {name} с Tunee.",
    footerTagline: "Создавайте музыку с ИИ — любой жанр, стиль или настроение.",
  },
  "zh-CN": {
    breadcrumbHome: "首页",
    breadcrumbGenerator: "音乐生成器",
    breadcrumbCurrent: "{name}音乐生成器",
    btnCreate: "创作{name}音乐",
    btnBrowsePrompts: "浏览提示词 ↓",
    chatPlaceholder: "与 Tunee 聊天创作音乐...",
    stepsTitle: "三个简单步骤",
    stepsSub: "从创意到成品 — 描述、优化、导出你的{name}音乐。",
    steps: [
      { num: "01", title: "描述你的想法", desc: "告诉 Music Agent 你想要什么样的曲目 — 可以参考某种情绪、艺术家或场景，无需专业术语。" },
      { num: "02", title: "通过对话优化", desc: "通过自然对话微调 BPM、调性、乐器和曲式结构，反复调整直到满意为止。" },
      { num: "03", title: "导出并使用", desc: "下载高品质音频文件，完全支持商业用途 — 游戏、视频、广告等。" },
    ],
    stepsCta: "开始创作{name}音乐",
    relatedTitle: "探索更多风格",
    relatedSub: "发现相关风格，拓展你的音乐调色板。",
    faqTitle: "常见问题",
    faqSub: "关于使用 Tunee 创作{name}音乐，你需要知道的一切。",
    footerTagline: "用 AI 创作音乐 — 任何风格、任何类型、任何情绪。",
  },
  "zh-HK": {
    breadcrumbHome: "首頁",
    breadcrumbGenerator: "音樂生成器",
    breadcrumbCurrent: "{name}音樂生成器",
    btnCreate: "創作{name}音樂",
    btnBrowsePrompts: "瀏覽提示詞 ↓",
    chatPlaceholder: "與 Tunee 聊天創作音樂...",
    stepsTitle: "三個簡單步驟",
    stepsSub: "從創意到成品 — 描述、優化、匯出你的{name}音樂。",
    steps: [
      { num: "01", title: "描述你的想法", desc: "告訴 Music Agent 你想要什麼樣的曲目 — 可以參考某種情緒、藝術家或場景，無需專業術語。" },
      { num: "02", title: "透過對話優化", desc: "透過自然對話微調 BPM、調性、樂器和曲式結構，反覆調整直到滿意為止。" },
      { num: "03", title: "匯出並使用", desc: "下載高品質音訊檔案，完全支援商業用途 — 遊戲、影片、廣告等。" },
    ],
    stepsCta: "開始創作{name}音樂",
    relatedTitle: "探索更多風格",
    relatedSub: "發現相關風格，拓展你的音樂調色盤。",
    faqTitle: "常見問題",
    faqSub: "關於使用 Tunee 創作{name}音樂，你需要知道的一切。",
    footerTagline: "用 AI 創作音樂 — 任何風格、任何類型、任何情緒。",
  },
};

export function getSlugPageUI(lang: string): SlugPageUI {
  return ui[lang] ?? ui.en;
}
