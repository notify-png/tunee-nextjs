export interface Translation {
  // Hero
  heroOverline: string;
  heroLine1: string;
  heroLine2: string;
  heroSub: string;
  heroCta: string;

  // Categories section
  browseLabel: string;
  browseTitle: string;
  searchPlaceholder: string;
  allTab: string;
  categoryLabels: {
    genre: string;
    instrument: string;
    mood: string;
    era: string;
    usecase: string;
    inspired: string;
  };
  noResults: string;

  // Catalog section
  catalogOverline: string;
  catalogTitle: string;
  catalogDesc: string;
  catalogLink: string;

  // Royalty-free section
  royaltyOverline: string;
  royaltyTitle: string;
  royaltyDesc: string;
  royaltyLink: string;

  // FAQ
  faqOverline: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];

  // CTA cards
  ctaCards: { title: string; desc: string; link: string; href: string }[];

  // Footer
  footerTagline: string;
  footerCopyright: string;
}

export const translations: Record<string, Translation> = {
  en: {
    heroOverline: "",
    heroLine1: "Discover Tunee Music Generator",
    heroLine2: "Create Any Song by Chatting",
    heroSub: "Use our AI music generator to turn ideas into tracks.\nNo prompts. No skills required. Free to start.",
    heroCta: "Chat with Tunee",

    browseLabel: "",
    browseTitle: "Explore all styles",
    searchPlaceholder: "Search...",
    allTab: "All",
    categoryLabels: {
      genre: "Genre",
      instrument: "Instrument",
      mood: "Mood",
      era: "Era",
      usecase: "Use Case",
      inspired: "Inspired By",
    },
    noResults: 'No styles found for "{query}"',

    catalogOverline: "",
    catalogTitle: "Find any style you need.",
    catalogDesc:
      "Tunee combines 100+ AI music styles in one conversational interface. From orchestral soundtracks to lofi beats, EDM, jazz, and beyond — describe what you need and Tunee creates production-ready music instantly.\n\nMore than a catalog, Tunee is an AI Music Agent. Choose a style, refine the mood, and generate custom music for your video, game, podcast, or commercial project.",
    catalogLink: "Start Creating Free",

    royaltyOverline: "",
    royaltyTitle: "Use it anywhere.",
    royaltyDesc:
      "Tunee is the ultimate solution for content creators looking to add music to their projects. Our vast catalog of AI-generated music tracks can be used on all major platforms, including YouTube, TikTok, Instagram, podcasts, games, films, and more.\n\nWith the ability to use music on such a diverse range of platforms, you'll never have to worry about licensing or copyright issues again.",
    royaltyLink: "Start Creating Free",

    faqOverline: "",
    faqTitle: "Questions",
    faqs: [
      {
        q: "What is Tunee Music Generator?",
        a: "Tunee Music Generator is an AI-powered platform that creates original music from simple text descriptions. Whether you need a lo-fi beat, cinematic score, or pop track, just describe it in a chat and Tunee generates production-ready music instantly.",
      },
      {
        q: "How does Tunee Music Generator work?",
        a: "Simply type a description of the music you want — genre, mood, instruments, tempo, or even upload an image or video for inspiration. Tunee's multi-model AI engine analyzes your input and generates a full track, complete with melody, harmony, and production.",
      },
      {
        q: "Is Tunee Music Generator free?",
        a: "Yes! Tunee offers free credits when you sign up — no credit card required. Generate multiple tracks for free, and upgrade to a paid plan when you need more.",
      },
      {
        q: "What genres can Tunee create?",
        a: "Tunee supports pop, hip-hop, lo-fi, EDM, jazz, classical, cinematic, ambient, R&B, rock, country, and many more. You can also blend genres or create entirely new styles.",
      },
      {
        q: "Can I use the music commercially?",
        a: "Yes. Music you generate is yours for personal and commercial projects — YouTube, podcasts, ads, games, streaming, subject to our terms of service.",
      },
      {
        q: "What makes Tunee different?",
        a: "Tunee combines multiple top AI music models into one conversational interface. Chat naturally instead of tweaking parameters. Plus, features like virtual artists, stem separation, and music video generation make it a complete creative suite.",
      },
    ],

    ctaCards: [
      { title: "About Us", desc: "Learn who we are and why we built Tunee.", link: "Learn More", href: "https://www.tunee.ai/about-us" },
      { title: "Customer Stories", desc: "See how creators and businesses use Tunee.", link: "Read Stories", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Meet our AI music agent — your creative co-pilot.", link: "Try It Now", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "Get your music done, with doing nothing more.",
    footerCopyright: "All rights reserved.",
  },

  ja: {
    heroOverline: "",
    heroLine1: "Tunee AI音楽ジェネレーター",
    heroLine2: "チャットで曲を作ろう",
    heroSub: "AIミュージックジェネレーターでアイデアを曲に。\nプロンプト不要。スキル不要。無料で始められます。",
    heroCta: "無料で始める",

    browseLabel: "",
    browseTitle: "すべてのスタイルを探す",
    searchPlaceholder: "検索...",
    allTab: "すべて",
    categoryLabels: {
      genre: "ジャンル",
      instrument: "楽器",
      mood: "ムード",
      era: "年代",
      usecase: "用途",
      inspired: "インスパイア",
    },
    noResults: '「{query}」に一致するスタイルが見つかりません',

    catalogOverline: "",
    catalogTitle: "必要なスタイルが見つかります",
    catalogDesc:
      "Tuneeは100以上のAI音楽スタイルをひとつの対話型インターフェースに統合。壮大なオーケストラからチルなローファイ、EDM、ジャズまで — 説明するだけでプロ品質の音楽を即座に生成します。\n\nただのカタログではなく、TuneeはAIミュージックエージェント。スタイルを選び、ムードを調整し、動画・ゲーム・ポッドキャスト・商用プロジェクト向けの音楽をカスタム生成できます。",
    catalogLink: "無料で作曲を始める",

    royaltyOverline: "",
    royaltyTitle: "どこでも使える。",
    royaltyDesc:
      "Tuneeは、プロジェクトに音楽を追加したいコンテンツクリエイターにとって究極のソリューションです。AI生成の音楽トラックは、YouTube、TikTok、Instagram、ポッドキャスト、ゲーム、映画など、すべての主要プラットフォームで使用できます。\n\nこれほど多様なプラットフォームで音楽を使用できるため、ライセンスや著作権の問題を心配する必要はもうありません。",
    royaltyLink: "無料で作曲を始める",

    faqOverline: "",
    faqTitle: "よくある質問",
    faqs: [
      {
        q: "Tunee Music Generatorとは何ですか？",
        a: "Tunee Music Generatorは、テキストの説明からオリジナル音楽を生成するAIプラットフォームです。ローファイビート、映画音楽、ポップトラックなど、チャットで説明するだけでプロ品質の音楽を即座に生成します。",
      },
      {
        q: "Tunee Music Generatorはどのように動作しますか？",
        a: "欲しい音楽の説明を入力するだけ — ジャンル、ムード、楽器、テンポ、あるいは画像や動画をアップロードしてインスピレーションにすることもできます。Tuneeのマルチモデルエンジンが入力を分析し、メロディ、ハーモニー、プロダクションを備えた完全なトラックを生成します。",
      },
      {
        q: "Tunee Music Generatorは無料ですか？",
        a: "はい！登録時に無料クレジットがもらえます — クレジットカード不要。複数のトラックを無料で生成でき、もっと必要になったら有料プランにアップグレードできます。",
      },
      {
        q: "Tuneeはどんなジャンルを作れますか？",
        a: "ポップ、ヒップホップ、ローファイ、EDM、ジャズ、クラシック、シネマティック、アンビエント、R&B、ロック、カントリーなど多数。ジャンルをミックスしたり、まったく新しいスタイルを作ることもできます。",
      },
      {
        q: "生成した音楽を商用利用できますか？",
        a: "はい。生成した音楽は個人・商用プロジェクトに利用できます — YouTube、ポッドキャスト、広告、ゲーム、配信など。利用規約に準じます。",
      },
      {
        q: "Tuneeの特徴は何ですか？",
        a: "Tuneeは複数のトップAI音楽モデルをひとつの会話型インターフェースに統合。パラメータを調整する代わりに、自然にチャットできます。バーチャルアーティスト、ステム分離、ミュージックビデオ生成などの機能で、完全なクリエイティブスイートとなっています。",
      },
    ],

    ctaCards: [
      { title: "Tunee について", desc: "私たちが誰で、なぜ Tunee を作ったのかをご紹介。", link: "詳しく見る", href: "https://www.tunee.ai/about-us" },
      { title: "導入事例", desc: "クリエイターや企業が Tunee をどう活用しているかをご覧ください。", link: "事例を読む", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "AI ミュージックエージェント — あなたの創作パートナー。", link: "今すぐ試す", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "何もしなくていい。音楽はTuneeにおまかせ。",
    footerCopyright: "All rights reserved.",
  },

  es: {
    heroOverline: "",
    heroLine1: "Descubre el generador de música Tunee",
    heroLine2: "Crea canciones chateando",
    heroSub: "Usa nuestro generador de música AI para convertir ideas en canciones.\nSin prompts. Sin habilidades requeridas. Gratis para empezar.",
    heroCta: "Empieza gratis",

    browseLabel: "",
    browseTitle: "Explora todos los estilos",
    searchPlaceholder: "Buscar...",
    allTab: "Todos",
    categoryLabels: {
      genre: "Género",
      instrument: "Instrumento",
      mood: "Estado de ánimo",
      era: "Época",
      usecase: "Uso",
      inspired: "Inspirado en",
    },
    noResults: 'No se encontraron estilos para "{query}"',

    catalogOverline: "",
    catalogTitle: "Encuentra el estilo que necesitas",
    catalogDesc:
      "Tunee reúne más de 100 estilos de música AI en una interfaz conversacional. Desde soundtracks orquestales hasta beats lofi, EDM, jazz y más — describe lo que necesitas y Tunee crea música lista para producción al instante.\n\nMás que un catálogo, Tunee es un Agente de Música AI. Elige un estilo, refina el mood y genera música personalizada para tu video, juego, podcast o proyecto comercial.",
    catalogLink: "Empieza a crear gratis",

    royaltyOverline: "",
    royaltyTitle: "Úsala en cualquier lugar.",
    royaltyDesc:
      "Tunee es la solución definitiva para creadores de contenido que buscan agregar música a sus proyectos. Nuestro amplio catálogo de pistas musicales generadas por IA se puede usar en todas las plataformas principales, incluyendo YouTube, TikTok, Instagram, podcasts, juegos, películas y más.\n\nCon la posibilidad de usar música en una gama tan diversa de plataformas, nunca más tendrás que preocuparte por problemas de licencias o derechos de autor.",
    royaltyLink: "Empieza a crear gratis",

    faqOverline: "",
    faqTitle: "Preguntas",
    faqs: [
      {
        q: "¿Qué es Tunee Music Generator?",
        a: "Tunee Music Generator es una plataforma impulsada por IA que crea música original a partir de descripciones de texto simples. Ya sea que necesites un beat lo-fi, una banda sonora cinematográfica o un track pop, solo descríbelo en el chat y Tunee genera música lista para producción al instante.",
      },
      {
        q: "¿Cómo funciona Tunee Music Generator?",
        a: "Simplemente escribe una descripción de la música que quieres — género, estado de ánimo, instrumentos, tempo, o incluso sube una imagen o video como inspiración. El motor de IA multimodelo de Tunee analiza tu entrada y genera un track completo con melodía, armonía y producción.",
      },
      {
        q: "¿Es gratis Tunee Music Generator?",
        a: "¡Sí! Tunee ofrece créditos gratis al registrarte — sin tarjeta de crédito. Genera múltiples tracks gratis y pasa a un plan de pago cuando necesites más.",
      },
      {
        q: "¿Qué géneros puede crear Tunee?",
        a: "Tunee soporta pop, hip-hop, lo-fi, EDM, jazz, clásica, cinematográfica, ambient, R&B, rock, country y muchos más. También puedes mezclar géneros o crear estilos completamente nuevos.",
      },
      {
        q: "¿Puedo usar la música comercialmente?",
        a: "Sí. La música que generas es tuya para proyectos personales y comerciales — YouTube, podcasts, anuncios, juegos, streaming, sujeto a nuestros términos de servicio.",
      },
      {
        q: "¿Qué hace diferente a Tunee?",
        a: "Tunee combina múltiples modelos de IA de música de primera en una interfaz conversacional. Chatea naturalmente en vez de ajustar parámetros. Además, funciones como artistas virtuales, separación de stems y generación de videos musicales lo convierten en una suite creativa completa.",
      },
    ],

    ctaCards: [
      { title: "Sobre nosotros", desc: "Conoce quiénes somos y por qué creamos Tunee.", link: "Saber más", href: "https://www.tunee.ai/about-us" },
      { title: "Historias de clientes", desc: "Descubre cómo creadores y empresas usan Tunee.", link: "Leer historias", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Conoce nuestro agente de música AI — tu copiloto creativo.", link: "Pruébalo ahora", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "Haz tu música sin hacer nada más.",
    footerCopyright: "Todos los derechos reservados.",
  },

  pt: {
    heroOverline: "",
    heroLine1: "Descubra o gerador de música Tunee",
    heroLine2: "Crie músicas conversando",
    heroSub: "Use nosso gerador de música AI para transformar ideias em faixas.\nSem prompts. Sem habilidades necessárias. Grátis para começar.",
    heroCta: "Comece grátis",

    browseLabel: "",
    browseTitle: "Explore todos os estilos",
    searchPlaceholder: "Buscar...",
    allTab: "Todos",
    categoryLabels: {
      genre: "Gênero",
      instrument: "Instrumento",
      mood: "Humor",
      era: "Época",
      usecase: "Uso",
      inspired: "Inspirado em",
    },
    noResults: 'Nenhum estilo encontrado para "{query}"',

    catalogOverline: "",
    catalogTitle: "Encontre o estilo que você precisa",
    catalogDesc:
      "O Tunee reúne mais de 100 estilos de música AI em uma interface conversacional. De trilhas orquestrais a beats lofi, EDM, jazz e muito mais — descreva o que precisa e o Tunee cria música pronta para produção instantaneamente.\n\nMais do que um catálogo, o Tunee é um Agente de Música AI. Escolha um estilo, refine o mood e gere música personalizada para seu vídeo, jogo, podcast ou projeto comercial.",
    catalogLink: "Comece a criar grátis",

    royaltyOverline: "",
    royaltyTitle: "Use em qualquer lugar.",
    royaltyDesc:
      "O Tunee é a solução definitiva para criadores de conteúdo que desejam adicionar música aos seus projetos. Nosso vasto catálogo de faixas musicais geradas por IA pode ser usado em todas as principais plataformas, incluindo YouTube, TikTok, Instagram, podcasts, jogos, filmes e muito mais.\n\nCom a possibilidade de usar música em uma gama tão diversa de plataformas, você nunca mais precisará se preocupar com problemas de licenciamento ou direitos autorais.",
    royaltyLink: "Comece a criar grátis",

    faqOverline: "",
    faqTitle: "Perguntas",
    faqs: [
      {
        q: "O que é o Tunee Music Generator?",
        a: "O Tunee Music Generator é uma plataforma com IA que cria músicas originais a partir de descrições de texto simples. Seja um beat lo-fi, trilha cinematográfica ou faixa pop, basta descrever no chat e o Tunee gera música pronta para produção instantaneamente.",
      },
      {
        q: "Como funciona o Tunee Music Generator?",
        a: "Basta digitar uma descrição da música que você quer — gênero, humor, instrumentos, tempo, ou até enviar uma imagem ou vídeo como inspiração. O motor de IA multimodelo do Tunee analisa sua entrada e gera uma faixa completa com melodia, harmonia e produção.",
      },
      {
        q: "O Tunee Music Generator é grátis?",
        a: "Sim! O Tunee oferece créditos grátis ao se cadastrar — sem cartão de crédito. Gere múltiplas faixas de graça e faça upgrade para um plano pago quando precisar de mais.",
      },
      {
        q: "Quais gêneros o Tunee pode criar?",
        a: "O Tunee suporta pop, hip-hop, lo-fi, EDM, jazz, clássico, cinematográfico, ambient, R&B, rock, country e muitos outros. Você também pode misturar gêneros ou criar estilos totalmente novos.",
      },
      {
        q: "Posso usar a música comercialmente?",
        a: "Sim. A música que você gera é sua para projetos pessoais e comerciais — YouTube, podcasts, anúncios, jogos, streaming, sujeito aos nossos termos de serviço.",
      },
      {
        q: "O que torna o Tunee diferente?",
        a: "O Tunee combina múltiplos modelos de IA de música de ponta em uma interface conversacional. Converse naturalmente em vez de ajustar parâmetros. Além disso, recursos como artistas virtuais, separação de stems e geração de videoclipes fazem dele uma suíte criativa completa.",
      },
    ],

    ctaCards: [
      { title: "Sobre nós", desc: "Saiba quem somos e por que criamos o Tunee.", link: "Saiba mais", href: "https://www.tunee.ai/about-us" },
      { title: "Histórias de clientes", desc: "Veja como criadores e empresas usam o Tunee.", link: "Ler histórias", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Conheça nosso agente de música AI — seu copiloto criativo.", link: "Experimente agora", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "Sua música pronta, sem fazer mais nada.",
    footerCopyright: "Todos os direitos reservados.",
  },

  fr: {
    heroOverline: "",
    heroLine1: "Découvrez le générateur de musique Tunee",
    heroLine2: "Créez des chansons en chattant",
    heroSub: "Utilisez notre générateur de musique IA pour transformer vos idées en morceaux.\nSans prompts. Sans compétences requises. Gratuit pour commencer.",
    heroCta: "Commencez gratuitement",

    browseLabel: "",
    browseTitle: "Explorez tous les styles",
    searchPlaceholder: "Rechercher...",
    allTab: "Tous",
    categoryLabels: {
      genre: "Genre",
      instrument: "Instrument",
      mood: "Ambiance",
      era: "Époque",
      usecase: "Usage",
      inspired: "Inspiré de",
    },
    noResults: 'Aucun style trouvé pour "{query}"',

    catalogOverline: "",
    catalogTitle: "Trouvez le style qu'il vous faut",
    catalogDesc:
      "Tunee rassemble plus de 100 styles musicaux IA dans une interface conversationnelle. Des bandes-son orchestrales aux beats lofi, EDM, jazz et au-delà — décrivez ce dont vous avez besoin et Tunee crée de la musique prête à la production instantanément.\n\nPlus qu'un catalogue, Tunee est un Agent Musical IA. Choisissez un style, affinez l'ambiance et générez de la musique sur mesure pour votre vidéo, jeu, podcast ou projet commercial.",
    catalogLink: "Commencer à créer gratuitement",

    royaltyOverline: "",
    royaltyTitle: "Utilisez-la partout.",
    royaltyDesc:
      "Tunee est la solution ultime pour les créateurs de contenu qui souhaitent ajouter de la musique à leurs projets. Notre vaste catalogue de pistes musicales générées par IA peut être utilisé sur toutes les principales plateformes, notamment YouTube, TikTok, Instagram, les podcasts, les jeux, les films et plus encore.\n\nAvec la possibilité d'utiliser de la musique sur une gamme aussi diversifiée de plateformes, vous n'aurez plus jamais à vous soucier des problèmes de licences ou de droits d'auteur.",
    royaltyLink: "Commencer à créer gratuitement",

    faqOverline: "",
    faqTitle: "Questions",
    faqs: [
      {
        q: "Qu'est-ce que Tunee Music Generator ?",
        a: "Tunee Music Generator est une plateforme alimentée par l'IA qui crée de la musique originale à partir de simples descriptions textuelles. Que vous ayez besoin d'un beat lo-fi, d'une bande-son cinématographique ou d'un track pop, décrivez-le dans le chat et Tunee génère une musique prête à la production instantanément.",
      },
      {
        q: "Comment fonctionne Tunee Music Generator ?",
        a: "Tapez simplement une description de la musique souhaitée — genre, ambiance, instruments, tempo, ou même importez une image ou vidéo pour l'inspiration. Le moteur IA multi-modèle de Tunee analyse votre entrée et génère un morceau complet avec mélodie, harmonie et production.",
      },
      {
        q: "Tunee Music Generator est-il gratuit ?",
        a: "Oui ! Tunee offre des crédits gratuits à l'inscription — sans carte de crédit. Générez plusieurs morceaux gratuitement et passez à un plan payant quand vous en avez besoin.",
      },
      {
        q: "Quels genres Tunee peut-il créer ?",
        a: "Tunee prend en charge le pop, hip-hop, lo-fi, EDM, jazz, classique, cinématique, ambient, R&B, rock, country et bien d'autres. Vous pouvez aussi mélanger les genres ou créer des styles entièrement nouveaux.",
      },
      {
        q: "Puis-je utiliser la musique commercialement ?",
        a: "Oui. La musique que vous générez est à vous pour vos projets personnels et commerciaux — YouTube, podcasts, publicités, jeux, streaming, sous réserve de nos conditions d'utilisation.",
      },
      {
        q: "Qu'est-ce qui rend Tunee différent ?",
        a: "Tunee combine plusieurs modèles d'IA musicale de pointe en une interface conversationnelle. Discutez naturellement au lieu de régler des paramètres. De plus, des fonctionnalités comme les artistes virtuels, la séparation de stems et la génération de clips vidéo en font une suite créative complète.",
      },
    ],

    ctaCards: [
      { title: "À propos", desc: "Découvrez qui nous sommes et pourquoi nous avons créé Tunee.", link: "En savoir plus", href: "https://www.tunee.ai/about-us" },
      { title: "Témoignages clients", desc: "Découvrez comment créateurs et entreprises utilisent Tunee.", link: "Lire les témoignages", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Rencontrez notre agent musical AI — votre copilote créatif.", link: "Essayer maintenant", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "Votre musique, prête, sans rien faire de plus.",
    footerCopyright: "Tous droits réservés.",
  },

  de: {
    heroOverline: "",
    heroLine1: "Entdecke den Tunee Musikgenerator",
    heroLine2: "Erstelle Songs per Chat",
    heroSub: "Nutze unseren KI-Musikgenerator, um Ideen in Tracks zu verwandeln.\nKeine Prompts. Keine Vorkenntnisse nötig. Kostenlos starten.",
    heroCta: "Kostenlos starten",

    browseLabel: "",
    browseTitle: "Alle Stile entdecken",
    searchPlaceholder: "Suchen...",
    allTab: "Alle",
    categoryLabels: {
      genre: "Genre",
      instrument: "Instrument",
      mood: "Stimmung",
      era: "Epoche",
      usecase: "Anwendung",
      inspired: "Inspiriert von",
    },
    noResults: 'Keine Stile gefunden für "{query}"',

    catalogOverline: "",
    catalogTitle: "Finde jeden Stil, den du brauchst",
    catalogDesc:
      "Tunee vereint über 100 KI-Musikstile in einer Konversationsschnittstelle. Von orchestralen Soundtracks bis hin zu Lofi-Beats, EDM, Jazz und mehr — beschreiben Sie, was Sie brauchen, und Tunee erstellt sofort produktionsfertige Musik.\n\nMehr als ein Katalog: Tunee ist ein KI-Musikagent. Wählen Sie einen Stil, verfeinern Sie die Stimmung und generieren Sie maßgeschneiderte Musik für Ihr Video, Spiel, Podcast oder kommerzielles Projekt.",
    catalogLink: "Kostenlos loslegen",

    royaltyOverline: "",
    royaltyTitle: "Überall einsetzbar.",
    royaltyDesc:
      "Tunee ist die ultimative Lösung für Content-Ersteller, die ihren Projekten Musik hinzufügen möchten. Unser umfangreicher Katalog an KI-generierten Musiktracks kann auf allen großen Plattformen verwendet werden, einschließlich YouTube, TikTok, Instagram, Podcasts, Spielen, Filmen und mehr.\n\nMit der Möglichkeit, Musik auf einer so vielfältigen Palette von Plattformen zu nutzen, müssen Sie sich nie wieder um Lizenz- oder Urheberrechtsprobleme sorgen.",
    royaltyLink: "Kostenlos loslegen",

    faqOverline: "",
    faqTitle: "Fragen",
    faqs: [
      {
        q: "Was ist Tunee Music Generator?",
        a: "Tunee Music Generator ist eine KI-gestützte Plattform, die originelle Musik aus einfachen Textbeschreibungen erstellt. Ob Lo-Fi-Beat, Filmscore oder Pop-Track — beschreibe es einfach im Chat und Tunee generiert sofort produktionsfertige Musik.",
      },
      {
        q: "Wie funktioniert Tunee Music Generator?",
        a: "Gib einfach eine Beschreibung der gewünschten Musik ein — Genre, Stimmung, Instrumente, Tempo, oder lade ein Bild oder Video als Inspiration hoch. Tunees Multi-Modell-KI-Engine analysiert deine Eingabe und generiert einen vollständigen Track mit Melodie, Harmonie und Produktion.",
      },
      {
        q: "Ist Tunee Music Generator kostenlos?",
        a: "Ja! Tunee bietet kostenlose Credits bei der Anmeldung — keine Kreditkarte erforderlich. Generiere mehrere Tracks kostenlos und wechsle zu einem bezahlten Plan, wenn du mehr brauchst.",
      },
      {
        q: "Welche Genres kann Tunee erstellen?",
        a: "Tunee unterstützt Pop, Hip-Hop, Lo-Fi, EDM, Jazz, Klassik, Filmmusik, Ambient, R&B, Rock, Country und viele mehr. Du kannst auch Genres mischen oder völlig neue Stile kreieren.",
      },
      {
        q: "Kann ich die Musik kommerziell nutzen?",
        a: "Ja. Die Musik, die du generierst, gehört dir für persönliche und kommerzielle Projekte — YouTube, Podcasts, Werbung, Spiele, Streaming, vorbehaltlich unserer Nutzungsbedingungen.",
      },
      {
        q: "Was macht Tunee besonders?",
        a: "Tunee kombiniert mehrere führende KI-Musikmodelle in einer Konversationsschnittstelle. Chatte natürlich, statt Parameter anzupassen. Außerdem machen Funktionen wie virtuelle Künstler, Stem-Separation und Musikvideo-Generierung es zu einer kompletten kreativen Suite.",
      },
    ],

    ctaCards: [
      { title: "Über uns", desc: "Erfahren Sie, wer wir sind und warum wir Tunee entwickelt haben.", link: "Mehr erfahren", href: "https://www.tunee.ai/about-us" },
      { title: "Kundengeschichten", desc: "Sehen Sie, wie Kreative und Unternehmen Tunee nutzen.", link: "Geschichten lesen", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Lernen Sie unseren AI-Musikagenten kennen — Ihr kreativer Copilot.", link: "Jetzt ausprobieren", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "Deine Musik erledigt, ohne mehr zu tun.",
    footerCopyright: "Alle Rechte vorbehalten.",
  },

  it: {
    heroOverline: "",
    heroLine1: "Scopri il generatore musicale Tunee",
    heroLine2: "Crea brani chattando",
    heroSub: "Usa il nostro generatore musicale AI per trasformare idee in brani.\nNessun prompt. Nessuna competenza richiesta. Gratis per iniziare.",
    heroCta: "Inizia gratis",

    browseLabel: "",
    browseTitle: "Esplora tutti gli stili",
    searchPlaceholder: "Cerca...",
    allTab: "Tutti",
    categoryLabels: {
      genre: "Genere",
      instrument: "Strumento",
      mood: "Mood",
      era: "Epoca",
      usecase: "Utilizzo",
      inspired: "Ispirato da",
    },
    noResults: 'Nessuno stile trovato per "{query}"',

    catalogOverline: "",
    catalogTitle: "Trova lo stile che ti serve",
    catalogDesc:
      "Tunee riunisce oltre 100 stili musicali AI in un'interfaccia conversazionale. Da colonne sonore orchestrali a beat lofi, EDM, jazz e oltre — descrivi ciò che serve e Tunee crea musica pronta per la produzione all'istante.\n\nPiù di un catalogo, Tunee è un Agente Musicale AI. Scegli uno stile, regola il mood e genera musica su misura per il tuo video, gioco, podcast o progetto commerciale.",
    catalogLink: "Inizia a creare gratis",

    royaltyOverline: "",
    royaltyTitle: "Usala ovunque.",
    royaltyDesc:
      "Tunee è la soluzione definitiva per i creatori di contenuti che desiderano aggiungere musica ai propri progetti. Il nostro vasto catalogo di tracce musicali generate dall'IA può essere utilizzato su tutte le principali piattaforme, tra cui YouTube, TikTok, Instagram, podcast, giochi, film e altro ancora.\n\nCon la possibilità di utilizzare musica su una gamma così diversificata di piattaforme, non dovrai mai più preoccuparti di problemi di licenze o copyright.",
    royaltyLink: "Inizia a creare gratis",

    faqOverline: "",
    faqTitle: "Domande",
    faqs: [
      {
        q: "Cos'è Tunee Music Generator?",
        a: "Tunee Music Generator è una piattaforma basata sull'IA che crea musica originale da semplici descrizioni testuali. Che tu abbia bisogno di un beat lo-fi, una colonna sonora cinematografica o un brano pop, basta descriverlo in chat e Tunee genera musica pronta per la produzione all'istante.",
      },
      {
        q: "Come funziona Tunee Music Generator?",
        a: "Basta digitare una descrizione della musica che vuoi — genere, mood, strumenti, tempo, o persino caricare un'immagine o un video come ispirazione. Il motore IA multi-modello di Tunee analizza il tuo input e genera un brano completo con melodia, armonia e produzione.",
      },
      {
        q: "Tunee Music Generator è gratuito?",
        a: "Sì! Tunee offre crediti gratuiti alla registrazione — nessuna carta di credito richiesta. Genera più brani gratuitamente e passa a un piano a pagamento quando ne hai bisogno.",
      },
      {
        q: "Quali generi può creare Tunee?",
        a: "Tunee supporta pop, hip-hop, lo-fi, EDM, jazz, classica, cinematica, ambient, R&B, rock, country e molti altri. Puoi anche mescolare generi o creare stili completamente nuovi.",
      },
      {
        q: "Posso usare la musica a scopo commerciale?",
        a: "Sì. La musica che generi è tua per progetti personali e commerciali — YouTube, podcast, pubblicità, giochi, streaming, nel rispetto dei nostri termini di servizio.",
      },
      {
        q: "Cosa rende Tunee diverso?",
        a: "Tunee combina più modelli IA musicali di punta in un'interfaccia conversazionale. Chatta in modo naturale invece di regolare parametri. Inoltre, funzionalità come artisti virtuali, separazione degli stem e generazione di video musicali lo rendono una suite creativa completa.",
      },
    ],

    ctaCards: [
      { title: "Chi siamo", desc: "Scopri chi siamo e perché abbiamo creato Tunee.", link: "Scopri di più", href: "https://www.tunee.ai/about-us" },
      { title: "Storie dei clienti", desc: "Guarda come creatori e aziende usano Tunee.", link: "Leggi le storie", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Incontra il nostro agente musicale AI — il tuo copilota creativo.", link: "Provalo ora", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "La tua musica pronta, senza fare altro.",
    footerCopyright: "Tutti i diritti riservati.",
  },

  ko: {
    heroOverline: "",
    heroLine1: "Tunee 음악 생성기 발견하기",
    heroLine2: "채팅으로 노래 만들기",
    heroSub: "AI 음악 생성기로 아이디어를 트랙으로 바꾸세요.\n프롬프트 불필요. 스킬 불필요. 무료로 시작.",
    heroCta: "무료로 시작하기",

    browseLabel: "",
    browseTitle: "모든 스타일 탐색",
    searchPlaceholder: "검색...",
    allTab: "전체",
    categoryLabels: {
      genre: "장르",
      instrument: "악기",
      mood: "분위기",
      era: "시대",
      usecase: "용도",
      inspired: "영감",
    },
    noResults: '"{query}"에 대한 스타일을 찾을 수 없습니다',

    catalogOverline: "",
    catalogTitle: "원하는 스타일을 찾아보세요",
    catalogDesc:
      "Tunee는 100개 이상의 AI 음악 스타일을 하나의 대화형 인터페이스에 통합합니다. 오케스트라 사운드트랙부터 로파이 비트, EDM, 재즈까지 — 설명만 하면 Tunee가 즉시 프로덕션 레디 음악을 만들어 줍니다.\n\n단순한 카탈로그가 아닌, Tunee는 AI 뮤직 에이전트입니다. 스타일을 고르고, 분위기를 조정하고, 영상·게임·팟캐스트·상업 프로젝트에 맞는 맞춤 음악을 생성하세요.",
    catalogLink: "무료로 만들기 시작",

    royaltyOverline: "",
    royaltyTitle: "어디서든 사용하세요.",
    royaltyDesc:
      "Tunee는 프로젝트에 음악을 추가하려는 콘텐츠 크리에이터를 위한 최적의 솔루션입니다. AI로 생성된 방대한 음악 트랙 카탈로그는 YouTube, TikTok, Instagram, 팟캐스트, 게임, 영화 등 모든 주요 플랫폼에서 사용할 수 있습니다.\n\n이처럼 다양한 플랫폼에서 음악을 사용할 수 있으므로 라이선스나 저작권 문제에 대해 다시는 걱정할 필요가 없습니다.",
    royaltyLink: "무료로 만들기 시작",

    faqOverline: "",
    faqTitle: "자주 묻는 질문",
    faqs: [
      {
        q: "Tunee Music Generator란 무엇인가요?",
        a: "Tunee Music Generator는 간단한 텍스트 설명으로 오리지널 음악을 만드는 AI 플랫폼입니다. 로파이 비트, 영화 음악, 팝 트랙 등 채팅으로 설명하기만 하면 Tunee가 프로덕션 레디 음악을 즉시 생성합니다.",
      },
      {
        q: "Tunee Music Generator는 어떻게 작동하나요?",
        a: "원하는 음악을 설명하면 됩니다 — 장르, 분위기, 악기, 템포, 또는 이미지나 영상을 업로드하여 영감을 줄 수도 있습니다. Tunee의 멀티 모델 AI 엔진이 입력을 분석하고 멜로디, 하모니, 프로덕션이 포함된 완전한 트랙을 생성합니다.",
      },
      {
        q: "Tunee Music Generator는 무료인가요?",
        a: "네! 가입 시 무료 크레딧을 제공합니다 — 신용카드 필요 없음. 여러 트랙을 무료로 생성하고, 더 필요할 때 유료 플랜으로 업그레이드하세요.",
      },
      {
        q: "Tunee는 어떤 장르를 만들 수 있나요?",
        a: "팝, 힙합, 로파이, EDM, 재즈, 클래식, 시네마틱, 앰비언트, R&B, 록, 컨트리 등 다양한 장르를 지원합니다. 장르를 블렌드하거나 완전히 새로운 스타일을 만들 수도 있습니다.",
      },
      {
        q: "음악을 상업적으로 사용할 수 있나요?",
        a: "네. 생성한 음악은 개인 및 상업 프로젝트에 사용할 수 있습니다 — YouTube, 팟캐스트, 광고, 게임, 스트리밍 등. 이용약관에 따릅니다.",
      },
      {
        q: "Tunee의 차별점은 무엇인가요?",
        a: "Tunee는 여러 최고의 AI 음악 모델을 하나의 대화형 인터페이스에 통합합니다. 파라미터를 조정하는 대신 자연스럽게 채팅하세요. 버추얼 아티스트, 스템 분리, 뮤직비디오 생성 등의 기능으로 완벽한 크리에이티브 스위트를 제공합니다.",
      },
    ],

    ctaCards: [
      { title: "회사 소개", desc: "우리가 누구이고 왜 Tunee를 만들었는지 알아보세요.", link: "자세히 보기", href: "https://www.tunee.ai/about-us" },
      { title: "고객 사례", desc: "크리에이터와 기업이 Tunee를 어떻게 활용하는지 확인하세요.", link: "사례 읽기", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "AI 뮤직 에이전트를 만나보세요 — 당신의 크리에이티브 코파일럿.", link: "지금 체험하기", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "아무것도 더 하지 않아도 음악이 완성됩니다.",
    footerCopyright: "All rights reserved.",
  },

  ru: {
    heroOverline: "",
    heroLine1: "Откройте музыкальный генератор Tunee",
    heroLine2: "Создавайте песни в чате",
    heroSub: "Используйте наш ИИ-генератор музыки, чтобы превращать идеи в треки.\nБез промптов. Без навыков. Бесплатный старт.",
    heroCta: "Начать бесплатно",

    browseLabel: "",
    browseTitle: "Все стили",
    searchPlaceholder: "Поиск...",
    allTab: "Все",
    categoryLabels: {
      genre: "Жанр",
      instrument: "Инструмент",
      mood: "Настроение",
      era: "Эпоха",
      usecase: "Применение",
      inspired: "Вдохновлено",
    },
    noResults: 'Стили не найдены для "{query}"',

    catalogOverline: "",
    catalogTitle: "Найдите нужный вам стиль",
    catalogDesc:
      "Tunee объединяет более 100 стилей ИИ-музыки в одном разговорном интерфейсе. От оркестровых саундтреков до лоу-фай битов, EDM, джаза и многого другого — опишите, что вам нужно, и Tunee мгновенно создаст готовую к продакшену музыку.\n\nБольше, чем каталог — Tunee это ИИ-музыкальный агент. Выберите стиль, настройте настроение и создайте музыку для вашего видео, игры, подкаста или коммерческого проекта.",
    catalogLink: "Начать создавать бесплатно",

    royaltyOverline: "",
    royaltyTitle: "Используйте где угодно.",
    royaltyDesc:
      "Tunee — это идеальное решение для создателей контента, которые хотят добавить музыку в свои проекты. Наш обширный каталог музыкальных треков, сгенерированных ИИ, можно использовать на всех основных платформах, включая YouTube, TikTok, Instagram, подкасты, игры, фильмы и многое другое.\n\nС возможностью использования музыки на столь разнообразных платформах вам больше никогда не придётся беспокоиться о проблемах с лицензированием или авторскими правами.",
    royaltyLink: "Начать создавать бесплатно",

    faqOverline: "",
    faqTitle: "Вопросы",
    faqs: [
      {
        q: "Что такое Tunee Music Generator?",
        a: "Tunee Music Generator — это платформа на базе ИИ, которая создаёт оригинальную музыку по текстовым описаниям. Нужен lo-fi бит, кинематографическая музыка или поп-трек — просто опишите в чате, и Tunee мгновенно создаст готовую к продакшену музыку.",
      },
      {
        q: "Как работает Tunee Music Generator?",
        a: "Просто введите описание нужной музыки — жанр, настроение, инструменты, темп или загрузите изображение или видео для вдохновения. Мультимодельный ИИ-движок Tunee анализирует ваш запрос и генерирует полноценный трек с мелодией, гармонией и продакшеном.",
      },
      {
        q: "Tunee Music Generator бесплатный?",
        a: "Да! Tunee предоставляет бесплатные кредиты при регистрации — без кредитной карты. Генерируйте несколько треков бесплатно и переходите на платный план, когда нужно больше.",
      },
      {
        q: "Какие жанры может создавать Tunee?",
        a: "Tunee поддерживает поп, хип-хоп, lo-fi, EDM, джаз, классику, кинематографическую музыку, эмбиент, R&B, рок, кантри и многое другое. Вы также можете смешивать жанры или создавать совершенно новые стили.",
      },
      {
        q: "Можно ли использовать музыку в коммерческих целях?",
        a: "Да. Музыка, которую вы создаёте, принадлежит вам для личных и коммерческих проектов — YouTube, подкасты, реклама, игры, стриминг, в соответствии с нашими условиями использования.",
      },
      {
        q: "Чем Tunee отличается от других?",
        a: "Tunee объединяет несколько лучших ИИ-моделей музыки в одном разговорном интерфейсе. Общайтесь естественно вместо настройки параметров. А такие функции, как виртуальные артисты, разделение стемов и генерация музыкальных клипов, делают его полноценным креативным набором.",
      },
    ],

    ctaCards: [
      { title: "О нас", desc: "Узнайте, кто мы и почему создали Tunee.", link: "Узнать больше", href: "https://www.tunee.ai/about-us" },
      { title: "Истории клиентов", desc: "Посмотрите, как авторы и компании используют Tunee.", link: "Читать истории", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "Познакомьтесь с нашим AI-музыкальным агентом — вашим творческим помощником.", link: "Попробовать сейчас", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "Ваша музыка готова — без лишних усилий.",
    footerCopyright: "Все права защищены.",
  },

  "zh-CN": {
    heroOverline: "",
    heroLine1: "发现 Tunee 音乐生成器",
    heroLine2: "聊天即可创作歌曲",
    heroSub: "用 AI 音乐生成器将灵感变成曲目。\n无需提示词，无需技能，免费开始。",
    heroCta: "免费开始创作",

    browseLabel: "",
    browseTitle: "探索所有风格",
    searchPlaceholder: "搜索...",
    allTab: "全部",
    categoryLabels: {
      genre: "曲风",
      instrument: "乐器",
      mood: "氛围",
      era: "年代",
      usecase: "用途",
      inspired: "灵感来源",
    },
    noResults: '未找到与"{query}"相关的风格',

    catalogOverline: "",
    catalogTitle: "找到你需要的风格",
    catalogDesc:
      "Tunee 将 100+ 种 AI 音乐风格整合到一个对话式界面中。从管弦乐配乐到 Lofi 节拍、EDM、爵士等 — 描述你的需求，Tunee 即刻生成可直接使用的音乐。\n\n不只是曲库，Tunee 是你的 AI 音乐助手。选风格、调氛围，为视频、游戏、播客或商业项目生成定制音乐。",
    catalogLink: "免费开始创作",

    royaltyOverline: "",
    royaltyTitle: "随处可用。",
    royaltyDesc:
      "Tunee 是希望为项目添加音乐的内容创作者的终极解决方案。我们丰富的 AI 生成音乐库可在所有主流平台使用，包括 YouTube、TikTok、Instagram、播客、游戏、电影等。\n\n凭借在如此多样化的平台上使用音乐的能力，你再也不用担心版权或授权问题。",
    royaltyLink: "免费开始创作",

    faqOverline: "",
    faqTitle: "常见问题",
    faqs: [
      {
        q: "什么是 Tunee Music Generator？",
        a: "Tunee Music Generator 是一个 AI 驱动的平台，可以根据简单的文字描述创作原创音乐。无论你需要 Lo-Fi 节拍、电影配乐还是流行曲目，只需在聊天中描述，Tunee 就能即时生成可直接使用的音乐。",
      },
      {
        q: "Tunee Music Generator 是如何工作的？",
        a: "只需输入你想要的音乐描述 — 曲风、氛围、乐器、节奏，甚至可以上传图片或视频作为灵感来源。Tunee 的多模型 AI 引擎会分析你的输入，生成包含旋律、和声和制作的完整曲目。",
      },
      {
        q: "Tunee Music Generator 免费吗？",
        a: "是的！注册即可获得免费额度 — 无需信用卡。免费生成多首曲目，需要更多时再升级付费计划。",
      },
      {
        q: "Tunee 可以创作哪些曲风？",
        a: "Tunee 支持流行、嘻哈、Lo-Fi、EDM、爵士、古典、电影配乐、氛围音乐、R&B、摇滚、乡村等众多曲风。你还可以混搭曲风或创造全新的风格。",
      },
      {
        q: "生成的音乐可以商用吗？",
        a: "可以。你生成的音乐可用于个人和商业项目 — YouTube、播客、广告、游戏、流媒体等，须遵守我们的服务条款。",
      },
      {
        q: "Tunee 有什么不同？",
        a: "Tunee 将多个顶级 AI 音乐模型整合到一个对话式界面中。用自然聊天代替调参数。虚拟艺人、音轨分离、音乐视频生成等功能让它成为完整的创作套件。",
      },
    ],

    ctaCards: [
      { title: "关于我们", desc: "了解我们是谁，以及为什么创建了 Tunee。", link: "了解更多", href: "https://www.tunee.ai/about-us" },
      { title: "客户故事", desc: "看看创作者和企业如何使用 Tunee。", link: "阅读故事", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "认识我们的 AI 音乐助手 — 你的创作副驾驶。", link: "立即体验", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "什么都不用做，音乐就搞定了。",
    footerCopyright: "保留所有权利。",
  },

  "zh-HK": {
    heroOverline: "",
    heroLine1: "發現 Tunee 音樂生成器",
    heroLine2: "聊天即可創作歌曲",
    heroSub: "用 AI 音樂生成器將靈感變成曲目。\n無需提示詞，無需技能，免費開始。",
    heroCta: "免費開始創作",

    browseLabel: "",
    browseTitle: "探索所有風格",
    searchPlaceholder: "搜尋...",
    allTab: "全部",
    categoryLabels: {
      genre: "曲風",
      instrument: "樂器",
      mood: "氛圍",
      era: "年代",
      usecase: "用途",
      inspired: "靈感來源",
    },
    noResults: '找不到與「{query}」相關的風格',

    catalogOverline: "",
    catalogTitle: "找到你需要的風格",
    catalogDesc:
      "Tunee 將 100+ 種 AI 音樂風格整合到一個對話式介面中。從管弦樂配樂到 Lofi 節拍、EDM、爵士等 — 描述你的需求，Tunee 即刻生成可直接使用的音樂。\n\n不只是曲庫，Tunee 是你的 AI 音樂助手。選風格、調氛圍，為影片、遊戲、Podcast 或商業項目生成定制音樂。",
    catalogLink: "免費開始創作",

    royaltyOverline: "",
    royaltyTitle: "隨處可用。",
    royaltyDesc:
      "Tunee 是創作者、開發者和企業的終極解決方案，讓你輕鬆創建適合任何項目的自訂音訊。無論你是在製作 YouTube 影片、開發遊戲、製作 Podcast 還是構建需要動態音訊的應用程式，Tunee 都能提供你所需的靈活性和品質。\n\n所有生成的曲目均可免版稅用於商業用途 — 無需額外授權，不用擔心版權聲明。創作、下載，然後隨處使用。",
    royaltyLink: "免費開始創作",

    faqOverline: "",
    faqTitle: "常見問題",
    faqs: [
      {
        q: "什麼是 Tunee Music Generator？",
        a: "Tunee Music Generator 是一個 AI 驅動的平台，可以根據簡單的文字描述創作原創音樂。無論你需要 Lo-Fi 節拍、電影配樂還是流行曲目，只需在聊天中描述，Tunee 就能即時生成可直接使用的音樂。",
      },
      {
        q: "Tunee Music Generator 是如何運作的？",
        a: "只需輸入你想要的音樂描述 — 曲風、氛圍、樂器、節奏，甚至可以上傳圖片或影片作為靈感來源。Tunee 的多模型 AI 引擎會分析你的輸入，生成包含旋律、和聲和製作的完整曲目。",
      },
      {
        q: "Tunee Music Generator 免費嗎？",
        a: "係！註冊即可獲得免費額度 — 無需信用卡。免費生成多首曲目，需要更多時再升級付費計劃。",
      },
      {
        q: "Tunee 可以創作哪些曲風？",
        a: "Tunee 支援流行、嘻哈、Lo-Fi、EDM、爵士、古典、電影配樂、氛圍音樂、R&B、搖滾、鄉村等眾多曲風。你還可以混搭曲風或創造全新的風格。",
      },
      {
        q: "生成的音樂可以商用嗎？",
        a: "可以。你生成的音樂可用於個人和商業項目 — YouTube、Podcast、廣告、遊戲、串流等，須遵守我們的服務條款。",
      },
      {
        q: "Tunee 有什麼不同？",
        a: "Tunee 將多個頂級 AI 音樂模型整合到一個對話式介面中。用自然聊天代替調參數。虛擬藝人、音軌分離、音樂影片生成等功能讓它成為完整的創作套件。",
      },
    ],

    ctaCards: [
      { title: "關於我們", desc: "了解我們是誰，以及為什麼創建了 Tunee。", link: "了解更多", href: "https://www.tunee.ai/about-us" },
      { title: "客戶故事", desc: "看看創作者和企業如何使用 Tunee。", link: "閱讀故事", href: "https://www.tunee.ai/customer-stories" },
      { title: "Music Agent", desc: "認識我們的 AI 音樂助手 — 你的創作副駕駛。", link: "立即體驗", href: "https://www.tunee.ai/music-agent" },
    ],

    footerTagline: "什麼都不用做，音樂就搞定了。",
    footerCopyright: "保留所有權利。",
  },
};

export const SUPPORTED_LANGS = [
  "en",
  "ja",
  "es",
  "pt",
  "fr",
  "de",
  "it",
  "ko",
  "ru",
  "zh-CN",
  "zh-HK",
] as const;
