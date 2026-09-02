export type SunoLocale = "en" | "ja" | "es" | "pt" | "fr" | "de" | "it" | "ko" | "ru" | "zh-CN" | "zh-HK";

export type Feature = { title: string; note: string; emphasized: boolean };

export type SunoAlternativeCopy = {
  lang: SunoLocale;
  metadata: { title: string; description: string; keywords: string[] };
  hero: {
    line1: string;
    line2: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    microcopy: string;
    toast: string;
    videoLabel: string;
  };
  benefits: Array<[string, string, string]>;
  comparison: {
    eyebrow: string;
    title: string;
    intro: string;
    rule: string;
    tunee: string;
    suno: string;
    rows: Array<[string, string, string]>;
    exceptionLabel: string;
    exceptionBeforePolicy: string;
    policy: string;
    exceptionAfterPolicy: string;
  };
  plans: {
    eyebrow: string;
    titleLines: [string, string, string];
    intro: string;
    freeLabel: string;
    freeTitle: string;
    memberLabel: string;
    memberTitle: string;
    freeFeatures: Feature[];
    memberFeatures: Feature[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<[string, string]>;
    sourceBeforeLink: string;
    sourceLink: string;
    sourceAfterLink: string;
  };
  final: {
    eyebrow: string;
    title: string;
    intro: string;
    benefits: string[];
  };
  sourceReplacements: Record<string, string>;
};

const commonSourceKeys = {
  home: "Home",
  pricing: "Pricing",
  howTitle: "From Idea to Finished Track in 3 Steps",
  step1Title: "Chat &amp; Describe Naturally",
  step1Body:
    "No complex prompting required. Just talk to Tunee like a human producer. Describe the mood, instrumentation, or upload a reference video to capture the vibe.",
  step1Point1: "Natural language conversational interface",
  step1Point2: "Multi-modal input (Audio, Video, Images)",
  chatHint: "Start with a feeling, and I&#x27;ll handle the sound",
  startCooking: "Start Cooking",
  prompt1: "BGM for Survival Logs",
  prompt2: "Wedding Must-Have!",
  step2Title: "Explore Creative Directions",
  step2Body:
    "Tunee doesn&#x27;t just give you one option. It explores multiple paths, suggesting different genres, moods, and arrangements based on your initial idea.",
  step2Point1: "Multiple style variations",
  step2Point2: "Genre exploration",
  directions: "+ Choose your directions",
  create: "CREATE",
  step3Title: "Refine &amp; Deliver",
  step3Body:
    "The AI continues to learn from your feedback. Once you&#x27;re happy, generate a music video, separate stems for professional mastering, and download your final creation.",
  musicVideoGeneration: "Music Video generation",
  smartMastering: "Smart Mastering",
  stemSeparation: "Stem Separation",
  voiceClone: "Voice Clone",
  communityTitle: "Get Inspired<!-- --> <span class=\"bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent\">by the Community</span>",
  communityBody:
    "Discover tracks created by artists worldwide. Listen, play, and make your own next track.",
  footerTagline: "Get your music done, with doing nothing more",
  resource: "Resource",
  aboutUs: "About Us",
  customerStories: "Customer Stories",
  creatorProgram: "Creator Program",
  affiliateProgram: "Affiliate Program",
  events: "Events",
  features: "Features",
  aiMusicAgent: "AI Music Agent",
  musicGenerator: "Music Generator",
  aiCharacter: "AI Character",
  musicVideo: "Music Video",
  aiDancing: "AI Dancing",
  motionControl: "Motion Control",
  models: "Models",
  policy: "Policy",
  terms: "Terms of Use",
  privacy: "Privacy Policy",
  usage: "Content Usage Agreement",
  other: "Other",
  download: "Download",
  feedback: "Feedback",
  faq: "FAQ",
};

const en: SunoAlternativeCopy = {
  lang: "en",
  metadata: {
    title: "Suno Alternative: Unlimited AI Music Downloads | Tunee",
    description:
      "Try Tunee's free AI Music Agent. Create original songs through chat and download every version without monthly or lifetime download-count limits.",
    keywords: ["Suno alternative", "unlimited AI music downloads", "free AI music generator", "AI music agent"],
  },
  hero: {
    line1: "A Suno alternative.",
    line2: "Download without limits.",
    lead:
      "Create original songs through conversation with Tunee’s AI Music Agent—then download every version you make, whether you use a free or paid account.",
    primaryCta: "Try Tunee for free",
    secondaryCta: "Compare download access ↓",
    microcopy: "No credit card required · Generation uses credits",
    toast: "Chat to create your track!",
    videoLabel: "Tunee AI Music Agent product walkthrough",
  },
  benefits: [
    ["∞", "Unlimited downloads", "Free and paid users"],
    ["↓", "Download every version", "Review, compare, archive"],
    ["✓", "Commercial use", "Available on paid plans"],
    ["✦", "Advanced editing", "Available to members"],
  ],
  comparison: {
    eyebrow: "DOWNLOAD ACCESS, SIDE BY SIDE",
    title: "Tunee vs Suno",
    intro: "Compare what happens after you create—not only how many songs a plan lets you generate.",
    rule: "Download rule",
    tunee: "Tunee",
    suno: "Suno",
    rows: [
      ["Free downloads", "Unlimited", "Up to 7 lifetime trial downloads"],
      ["Paid downloads", "Unlimited", "Pro: 20/month · Premier: 60/month"],
      ["Songs created earlier", "Download without a count limit", "Limits apply to downloads after Sep 3"],
      ["Beyond the allowance", "No download pack needed", "Additional downloads available to purchase"],
    ],
    exceptionLabel: "Important exception:",
    exceptionBeforePolicy: "Suno Premier subscribers can download without limits when using Suno Studio. Suno facts reflect its",
    policy: "policy",
    exceptionAfterPolicy: "announced for September 3, 2026 and may change.",
  },
  plans: {
    eyebrow: "CLEAR PLAN BOUNDARIES",
    titleLines: ["Download freely.", "Upgrade for", "professional use."],
    intro:
      "Downloads stay unlimited on every plan. Start free with core creation and editing tools, then upgrade when you need professional production and publishing features.",
    freeLabel: "FREE",
    freeTitle: "For creating & exploring",
    memberLabel: "MEMBER",
    memberTitle: "For publishing & production",
    freeFeatures: [
      { title: "Unlimited track downloads", note: "", emphasized: true },
      { title: "Song generation", note: "Limited music models · Generation uses credits", emphasized: true },
      { title: "Edit lyrics, prompts & song details", note: "", emphasized: true },
      { title: "Mix & voice change", note: "", emphasized: false },
      { title: "2-source & 4-source stem separation", note: "", emphasized: false },
      { title: "1 trial each", note: "6-source stem separation and Audio-to-MIDI", emphasized: true },
    ],
    memberFeatures: [
      { title: "Everything in Free", note: "", emphasized: true },
      { title: "Unlock all music models", note: "", emphasized: true },
      { title: "Smart Mastering", note: "", emphasized: true },
      { title: "6-source stem separation", note: "", emphasized: false },
      { title: "Audio-to-MIDI conversion", note: "", emphasized: false },
      { title: "Full commercial rights", note: "Includes a copyright certificate", emphasized: true },
    ],
  },
  faq: {
    eyebrow: "QUESTIONS",
    title: "Good to know.",
    items: [
      ["Is Tunee a Suno alternative with unlimited downloads?", "Yes. Tunee combines conversational AI music creation with unlimited track downloads for free and paid users. Song generation uses credits and is separate from downloading."],
      ["Can free Tunee users download every generated track?", "Yes. Free users can download every version they create without a monthly or lifetime download-count limit. Free downloads are for personal use."],
      ["Do unlimited downloads mean unlimited free song generation?", "No. Downloads do not use a download allowance, but creating music uses credits. Free accounts have daily credits and access to a selected set of music models."],
      ["Can I use Tunee music commercially?", "Eligible paid plans include commercial use rights and a copyright certificate, subject to Tunee's current plan terms."],
      ["What do members unlock besides commercial rights?", "Members unlock all music models, Smart Mastering, 6-source stem separation, Audio-to-MIDI conversion, and the features included in Free."],
      ["Where do the Suno download numbers come from?", ""],
    ],
    sourceBeforeLink: "The comparison uses Suno's",
    sourceLink: "official August 10, 2026 announcement",
    sourceAfterLink: "describing download rules beginning September 3, 2026. Suno's terms may change, so check its official notice for the latest details.",
  },
  final: {
    eyebrow: "TRY TUNEE MUSIC AGENT",
    title: "Ready to create without worrying about download counts?",
    intro: "Start with free daily credits. Download every version you create.",
    benefits: ["Unlimited downloads", "Free daily credits", "Full commercial rights", "Advanced editing"],
  },
  sourceReplacements: {},
};

const ja: SunoAlternativeCopy = {
  lang: "ja",
  metadata: {
    title: "Suno代替｜AI音楽を生成・ダウンロード無制限｜Tunee",
    description: "Tuneeなら会話でAI音楽を作成し、無料・有料を問わずすべてのバージョンを回数制限なくダウンロード。Sunoの代替を探す方に。",
    keywords: ["Suno 代替", "AI音楽生成", "ダウンロード無制限", "AI作曲 無料", "AI 歌わせる 無料"],
  },
  hero: {
    line1: "Sunoに代わる選択肢。",
    line2: "ダウンロードは無制限。",
    lead: "TuneeのAI Music Agentと会話してオリジナル曲を作成。無料・有料アカウントを問わず、作ったすべてのバージョンを回数制限なくダウンロードできます。",
    primaryCta: "Tuneeを無料で試す",
    secondaryCta: "ダウンロード条件を比較 ↓",
    microcopy: "クレジットカード不要 · 音楽生成にはクレジットを使用",
    toast: "チャットで曲を作ろう！",
    videoLabel: "Tunee AI Music Agentの操作デモ",
  },
  benefits: [
    ["∞", "ダウンロード無制限", "無料・有料ユーザー対象"],
    ["↓", "全バージョンを保存", "試聴・比較・アーカイブ"],
    ["✓", "商用利用", "有料プランで利用可能"],
    ["✦", "高度な編集", "メンバー向け機能"],
  ],
  comparison: {
    eyebrow: "ダウンロード条件を比較",
    title: "Tunee vs Suno",
    intro: "生成できる曲数だけでなく、作成後にどこまでダウンロードできるかを比較します。",
    rule: "ダウンロード条件",
    tunee: "Tunee",
    suno: "Suno",
    rows: [
      ["無料ダウンロード", "無制限", "生涯で最大7回の試用ダウンロード"],
      ["有料ダウンロード", "無制限", "Pro：月20回 · Premier：月60回"],
      ["過去に作成した曲", "回数制限なくダウンロード", "9月3日以降のダウンロードに制限"],
      ["上限を超えた場合", "追加パック不要", "追加ダウンロードを購入可能"],
    ],
    exceptionLabel: "重要な例外：",
    exceptionBeforePolicy: "Suno Premier加入者はSuno Studio内では無制限にダウンロードできます。Sunoの情報は2026年9月3日から適用される",
    policy: "公式ポリシー",
    exceptionAfterPolicy: "に基づいており、今後変更される場合があります。",
  },
  plans: {
    eyebrow: "プランの違いを明確に",
    titleLines: ["ダウンロードは自由。", "プロ用途なら", "アップグレード。"],
    intro: "どのプランでもダウンロード回数は無制限です。無料で基本的な生成・編集機能を試し、制作や公開に必要な専門機能が必要になったらアップグレードできます。",
    freeLabel: "無料",
    freeTitle: "制作と試行向け",
    memberLabel: "メンバー",
    memberTitle: "公開と本格制作向け",
    freeFeatures: [
      { title: "楽曲ダウンロード無制限", note: "", emphasized: true },
      { title: "クレジットで楽曲を生成", note: "利用できる音楽モデルに制限あり · 生成にはクレジットを使用", emphasized: true },
      { title: "歌詞・プロンプト・曲情報を編集", note: "", emphasized: true },
      { title: "ミックス・ボイス変更", note: "", emphasized: false },
      { title: "2音源・4音源のステム分離", note: "", emphasized: false },
      { title: "各高度機能を1回試用", note: "6音源ステム分離・Audio-to-MIDI", emphasized: true },
    ],
    memberFeatures: [
      { title: "無料版の全機能", note: "", emphasized: true },
      { title: "すべての音楽モデルを利用", note: "", emphasized: true },
      { title: "スマートマスタリング", note: "", emphasized: true },
      { title: "6音源ステム分離", note: "", emphasized: false },
      { title: "Audio-to-MIDI変換", note: "", emphasized: false },
      { title: "商用利用権", note: "著作権証明書を含む", emphasized: true },
    ],
  },
  faq: {
    eyebrow: "よくある質問",
    title: "知っておきたいこと。",
    items: [
      ["Tuneeはダウンロード無制限のSuno代替サービスですか？", "はい。Tuneeは会話型AI音楽生成と、無料・有料ユーザー向けの楽曲ダウンロード無制限を提供します。音楽生成には別途クレジットを使用します。"],
      ["無料ユーザーも生成した曲をすべてダウンロードできますか？", "はい。無料ユーザーも、作成したすべてのバージョンを月間・生涯の回数制限なくダウンロードできます。無料版のダウンロードは個人利用向けです。"],
      ["ダウンロード無制限は、無料で楽曲を無制限に生成できるという意味ですか？", "いいえ。ダウンロード回数に上限はありませんが、音楽生成にはクレジットを使用します。無料アカウントには毎日のクレジットと一部の音楽モデルが提供されます。"],
      ["Tuneeの音楽を商用利用できますか？", "対象の有料プランには、Tuneeの最新プラン条件に基づく商用利用権と著作権証明書が含まれます。"],
      ["商用利用権以外にメンバーが使える機能は？", "すべての音楽モデル、スマートマスタリング、6音源ステム分離、Audio-to-MIDI変換、無料版の全機能を利用できます。"],
      ["Sunoのダウンロード回数はどこから引用していますか？", ""],
    ],
    sourceBeforeLink: "比較には、Sunoの",
    sourceLink: "2026年8月10日付の公式発表",
    sourceAfterLink: "に記載された2026年9月3日開始のダウンロード規則を使用しています。最新情報はSunoの公式案内をご確認ください。",
  },
  final: {
    eyebrow: "TUNEE MUSIC AGENTを試す",
    title: "ダウンロード回数を気にせず、曲を作りませんか？",
    intro: "毎日の無料クレジットから始めて、作ったすべてのバージョンをダウンロードできます。",
    benefits: ["ダウンロード無制限", "毎日の無料クレジット", "商用利用権", "高度な編集"],
  },
  sourceReplacements: {
    [commonSourceKeys.home]: "ホーム",
    [commonSourceKeys.pricing]: "料金プラン",
    [commonSourceKeys.howTitle]: "アイデアから完成曲まで、3ステップ",
    [commonSourceKeys.step1Title]: "自然な言葉でチャット",
    [commonSourceKeys.step1Body]: "複雑なプロンプトは不要です。人間のプロデューサーに話すように、ムードや楽器編成を伝えたり、参考動画をアップロードしたりできます。",
    [commonSourceKeys.step1Point1]: "自然言語の会話インターフェース",
    [commonSourceKeys.step1Point2]: "音声・動画・画像のマルチモーダル入力",
    [commonSourceKeys.chatHint]: "イメージを話すだけ。サウンドはTuneeにおまかせ",
    [commonSourceKeys.startCooking]: "制作を始める",
    [commonSourceKeys.prompt1]: "サバイバル記録用BGM",
    [commonSourceKeys.prompt2]: "結婚式にぴったり！",
    [commonSourceKeys.step2Title]: "クリエイティブな方向性を探索",
    [commonSourceKeys.step2Body]: "Tuneeは一つの案だけで終わりません。最初のアイデアをもとに、ジャンル、ムード、アレンジの異なる複数の方向性を提案します。",
    [commonSourceKeys.step2Point1]: "複数のスタイル案",
    [commonSourceKeys.step2Point2]: "ジャンル探索",
    [commonSourceKeys.directions]: "+ 方向性を選ぶ",
    [commonSourceKeys.create]: "作成",
    [commonSourceKeys.step3Title]: "磨き上げて完成",
    [commonSourceKeys.step3Body]: "フィードバックを重ねながら曲を調整。納得できたら、ミュージックビデオ作成、ステム分離、マスタリングを行い、完成版をダウンロードできます。",
    [commonSourceKeys.musicVideoGeneration]: "ミュージックビデオ生成",
    [commonSourceKeys.smartMastering]: "スマートマスタリング",
    [commonSourceKeys.stemSeparation]: "ステム分離",
    [commonSourceKeys.voiceClone]: "ボイスクローン",
    [commonSourceKeys.communityTitle]: "コミュニティの作品からひらめきを",
    [commonSourceKeys.communityBody]: "世界中のアーティストが作った楽曲を聴いて、次の一曲を作りましょう。",
    [commonSourceKeys.footerTagline]: "手間をかけずに、音楽を完成へ",
    [commonSourceKeys.resource]: "リソース",
    [commonSourceKeys.aboutUs]: "Tuneeについて",
    [commonSourceKeys.customerStories]: "ユーザー事例",
    [commonSourceKeys.creatorProgram]: "クリエイタープログラム",
    [commonSourceKeys.affiliateProgram]: "アフィリエイト",
    [commonSourceKeys.events]: "イベント",
    [commonSourceKeys.features]: "機能",
    [commonSourceKeys.aiMusicAgent]: "AI音楽エージェント",
    [commonSourceKeys.musicGenerator]: "AI音楽生成",
    [commonSourceKeys.aiCharacter]: "AIキャラクター",
    [commonSourceKeys.musicVideo]: "ミュージックビデオ",
    [commonSourceKeys.aiDancing]: "AIダンス",
    [commonSourceKeys.motionControl]: "モーションコントロール",
    [commonSourceKeys.models]: "モデル",
    [commonSourceKeys.policy]: "ポリシー",
    [commonSourceKeys.terms]: "利用規約",
    [commonSourceKeys.privacy]: "プライバシーポリシー",
    [commonSourceKeys.usage]: "コンテンツ利用規約",
    [commonSourceKeys.other]: "その他",
    [commonSourceKeys.download]: "ダウンロード",
    [commonSourceKeys.feedback]: "フィードバック",
    [commonSourceKeys.faq]: "よくある質問",
  },
};

const ko: SunoAlternativeCopy = {
  lang: "ko",
  metadata: {
    title: "Suno 대안｜AI 음악 생성과 무제한 다운로드｜Tunee",
    description: "Tunee AI Music Agent와 대화로 음악을 만들고 무료·유료 계정 모두 모든 버전을 횟수 제한 없이 다운로드하세요.",
    keywords: ["Suno 대안", "AI 음악 생성", "AI 음악 만들기", "무제한 다운로드", "무료 AI 음악"],
  },
  hero: {
    line1: "Suno의 새로운 대안.",
    line2: "다운로드는 무제한.",
    lead: "Tunee AI Music Agent와 대화하며 나만의 음악을 만들고, 무료·유료 계정 모두 생성한 모든 버전을 횟수 제한 없이 다운로드하세요.",
    primaryCta: "Tunee 무료로 체험하기",
    secondaryCta: "다운로드 조건 비교 ↓",
    microcopy: "신용카드 불필요 · 음악 생성에는 크레딧 사용",
    toast: "대화로 트랙을 만들어 보세요!",
    videoLabel: "Tunee AI Music Agent 사용 화면",
  },
  benefits: [
    ["∞", "무제한 다운로드", "무료·유료 사용자"],
    ["↓", "모든 버전 다운로드", "검토·비교·보관"],
    ["✓", "상업적 이용", "유료 플랜에서 제공"],
    ["✦", "고급 편집", "멤버 전용 기능"],
  ],
  comparison: {
    eyebrow: "다운로드 조건 한눈에 비교",
    title: "Tunee vs Suno",
    intro: "플랜에서 생성할 수 있는 곡 수뿐 아니라, 만든 뒤 얼마나 자유롭게 다운로드할 수 있는지 비교하세요.",
    rule: "다운로드 규정",
    tunee: "Tunee",
    suno: "Suno",
    rows: [
      ["무료 다운로드", "무제한", "평생 최대 7회 체험 다운로드"],
      ["유료 다운로드", "무제한", "Pro: 월 20회 · Premier: 월 60회"],
      ["이전에 만든 곡", "횟수 제한 없이 다운로드", "9월 3일 이후 다운로드에 제한 적용"],
      ["허용량 초과 시", "추가 다운로드 팩 불필요", "추가 다운로드 구매 가능"],
    ],
    exceptionLabel: "중요한 예외:",
    exceptionBeforePolicy: "Suno Premier 구독자는 Suno Studio에서 무제한으로 다운로드할 수 있습니다. Suno 정보는 2026년 9월 3일 적용 예정인",
    policy: "공식 정책",
    exceptionAfterPolicy: "을 기준으로 하며 변경될 수 있습니다.",
  },
  plans: {
    eyebrow: "명확한 플랜 구분",
    titleLines: ["다운로드는 자유롭게.", "전문 작업이 필요할 때", "업그레이드하세요."],
    intro: "모든 플랜에서 다운로드 횟수는 무제한입니다. 무료로 핵심 생성·편집 도구를 사용하고, 전문 제작과 공개 기능이 필요할 때 업그레이드하세요.",
    freeLabel: "무료",
    freeTitle: "제작과 탐색용",
    memberLabel: "멤버",
    memberTitle: "공개와 전문 제작용",
    freeFeatures: [
      { title: "트랙 무제한 다운로드", note: "", emphasized: true },
      { title: "크레딧으로 음악 생성", note: "일부 음악 모델 제공 · 생성 시 크레딧 사용", emphasized: true },
      { title: "가사·프롬프트·곡 정보 편집", note: "", emphasized: true },
      { title: "믹스·보이스 변경", note: "", emphasized: false },
      { title: "2소스·4소스 스템 분리", note: "", emphasized: false },
      { title: "고급 기능별 1회 체험", note: "6소스 스템 분리 및 Audio-to-MIDI", emphasized: true },
    ],
    memberFeatures: [
      { title: "무료 플랜의 모든 기능", note: "", emphasized: true },
      { title: "모든 음악 모델 잠금 해제", note: "", emphasized: true },
      { title: "스마트 마스터링", note: "", emphasized: true },
      { title: "6소스 스템 분리", note: "", emphasized: false },
      { title: "Audio-to-MIDI 변환", note: "", emphasized: false },
      { title: "전체 상업적 이용 권한", note: "저작권 인증서 포함", emphasized: true },
    ],
  },
  faq: {
    eyebrow: "자주 묻는 질문",
    title: "알아두면 좋은 점.",
    items: [
      ["Tunee는 다운로드가 무제한인 Suno 대안인가요?", "네. Tunee는 대화형 AI 음악 생성과 무료·유료 사용자 모두를 위한 무제한 트랙 다운로드를 제공합니다. 음악 생성은 다운로드와 별도로 크레딧을 사용합니다."],
      ["Tunee 무료 사용자도 생성한 모든 트랙을 다운로드할 수 있나요?", "네. 무료 사용자도 만든 모든 버전을 월간 또는 평생 다운로드 횟수 제한 없이 저장할 수 있습니다. 무료 다운로드는 개인 이용용입니다."],
      ["무제한 다운로드는 무료 음악 생성도 무제한이라는 뜻인가요?", "아닙니다. 다운로드 횟수 제한은 없지만 음악 생성에는 크레딧이 사용됩니다. 무료 계정에는 일일 크레딧과 일부 음악 모델이 제공됩니다."],
      ["Tunee 음악을 상업적으로 이용할 수 있나요?", "대상 유료 플랜에는 Tunee의 최신 플랜 조건에 따른 상업적 이용 권한과 저작권 인증서가 포함됩니다."],
      ["상업적 이용 권한 외에 멤버가 이용할 수 있는 기능은 무엇인가요?", "모든 음악 모델, 스마트 마스터링, 6소스 스템 분리, Audio-to-MIDI 변환과 무료 플랜의 모든 기능을 이용할 수 있습니다."],
      ["Suno 다운로드 횟수는 어디에서 확인했나요?", ""],
    ],
    sourceBeforeLink: "비교에는 Suno의",
    sourceLink: "2026년 8월 10일 공식 발표",
    sourceAfterLink: "에 명시된 2026년 9월 3일 시행 다운로드 규정을 사용했습니다. 최신 내용은 Suno 공식 안내를 확인하세요.",
  },
  final: {
    eyebrow: "TUNEE MUSIC AGENT 체험하기",
    title: "다운로드 횟수 걱정 없이 음악을 만들어 보세요.",
    intro: "매일 제공되는 무료 크레딧으로 시작하고, 만든 모든 버전을 다운로드하세요.",
    benefits: ["무제한 다운로드", "매일 무료 크레딧", "전체 상업적 이용 권한", "고급 편집"],
  },
  sourceReplacements: {
    [commonSourceKeys.home]: "홈",
    [commonSourceKeys.pricing]: "요금제",
    [commonSourceKeys.howTitle]: "아이디어에서 완성된 트랙까지, 3단계",
    [commonSourceKeys.step1Title]: "자연스럽게 대화하고 설명하기",
    [commonSourceKeys.step1Body]: "복잡한 프롬프트는 필요 없습니다. 사람 프로듀서와 이야기하듯 분위기와 악기를 설명하거나 참고 영상을 업로드하세요.",
    [commonSourceKeys.step1Point1]: "자연어 대화 인터페이스",
    [commonSourceKeys.step1Point2]: "오디오·비디오·이미지 멀티모달 입력",
    [commonSourceKeys.chatHint]: "느낌만 이야기하면 사운드는 Tunee가 완성합니다",
    [commonSourceKeys.startCooking]: "제작 시작",
    [commonSourceKeys.prompt1]: "생존 기록용 BGM",
    [commonSourceKeys.prompt2]: "결혼식 필수곡!",
    [commonSourceKeys.step2Title]: "창작 방향 탐색하기",
    [commonSourceKeys.step2Body]: "Tunee는 한 가지 결과만 제시하지 않습니다. 첫 아이디어를 바탕으로 장르, 분위기, 편곡이 다른 여러 방향을 제안합니다.",
    [commonSourceKeys.step2Point1]: "다양한 스타일 버전",
    [commonSourceKeys.step2Point2]: "장르 탐색",
    [commonSourceKeys.directions]: "+ 방향 선택",
    [commonSourceKeys.create]: "생성",
    [commonSourceKeys.step3Title]: "다듬고 완성하기",
    [commonSourceKeys.step3Body]: "피드백을 반영해 곡을 계속 다듬으세요. 만족스러우면 뮤직비디오 생성, 스템 분리, 전문 마스터링을 진행하고 완성본을 다운로드할 수 있습니다.",
    [commonSourceKeys.musicVideoGeneration]: "뮤직비디오 생성",
    [commonSourceKeys.smartMastering]: "스마트 마스터링",
    [commonSourceKeys.stemSeparation]: "스템 분리",
    [commonSourceKeys.voiceClone]: "보이스 클론",
    [commonSourceKeys.communityTitle]: "커뮤니티 작품에서 영감을 얻으세요",
    [commonSourceKeys.communityBody]: "전 세계 아티스트가 만든 트랙을 듣고 다음 곡을 만들어 보세요.",
    [commonSourceKeys.footerTagline]: "더 적은 수고로 음악을 완성하세요",
    [commonSourceKeys.resource]: "리소스",
    [commonSourceKeys.aboutUs]: "회사 소개",
    [commonSourceKeys.customerStories]: "고객 사례",
    [commonSourceKeys.creatorProgram]: "크리에이터 프로그램",
    [commonSourceKeys.affiliateProgram]: "제휴 프로그램",
    [commonSourceKeys.events]: "이벤트",
    [commonSourceKeys.features]: "기능",
    [commonSourceKeys.aiMusicAgent]: "AI 음악 에이전트",
    [commonSourceKeys.musicGenerator]: "AI 음악 생성기",
    [commonSourceKeys.aiCharacter]: "AI 캐릭터",
    [commonSourceKeys.musicVideo]: "뮤직비디오",
    [commonSourceKeys.aiDancing]: "AI 댄스",
    [commonSourceKeys.motionControl]: "모션 컨트롤",
    [commonSourceKeys.models]: "모델",
    [commonSourceKeys.policy]: "정책",
    [commonSourceKeys.terms]: "이용약관",
    [commonSourceKeys.privacy]: "개인정보 처리방침",
    [commonSourceKeys.usage]: "콘텐츠 이용 계약",
    [commonSourceKeys.other]: "기타",
    [commonSourceKeys.download]: "다운로드",
    [commonSourceKeys.feedback]: "피드백",
    [commonSourceKeys.faq]: "자주 묻는 질문",
  },
};

const de: SunoAlternativeCopy = {
  lang: "de",
  metadata: {
    title: "Suno-Alternative: KI-Musik ohne Download-Limit | Tunee",
    description: "Erstelle mit Tunees AI Music Agent eigene Songs und lade jede Version ohne Download-Limit herunter – mit Gratis- oder Bezahlkonto.",
    keywords: ["Suno Alternative", "KI Musik erstellen", "unbegrenzte Downloads", "KI Musik Generator", "Suno Download-Limit"],
  },
  hero: {
    line1: "Eine Alternative zu Suno.",
    line2: "Downloads ohne Limit.",
    lead: "Erstelle im Dialog mit Tunees AI Music Agent eigene Songs und lade jede Version herunter – unabhängig davon, ob du ein Gratis- oder Bezahlkonto nutzt.",
    primaryCta: "Tunee kostenlos testen",
    secondaryCta: "Download-Zugang vergleichen ↓",
    microcopy: "Keine Kreditkarte erforderlich · Erstellung verbraucht Credits",
    toast: "Erstelle deinen Track im Chat!",
    videoLabel: "Produktdemo des Tunee AI Music Agent",
  },
  benefits: [
    ["∞", "Unbegrenzte Downloads", "Für Gratis- und Bezahlkonten"],
    ["↓", "Jede Version herunterladen", "Prüfen, vergleichen, archivieren"],
    ["✓", "Kommerzielle Nutzung", "In Bezahlplänen verfügbar"],
    ["✦", "Erweiterte Bearbeitung", "Für Mitglieder verfügbar"],
  ],
  comparison: {
    eyebrow: "DOWNLOAD-ZUGANG IM VERGLEICH",
    title: "Tunee vs Suno",
    intro: "Vergleiche, was nach der Erstellung möglich ist – nicht nur, wie viele Songs ein Plan generieren lässt.",
    rule: "Download-Regel",
    tunee: "Tunee",
    suno: "Suno",
    rows: [
      ["Kostenlose Downloads", "Unbegrenzt", "Bis zu 7 Test-Downloads insgesamt"],
      ["Downloads im Bezahlplan", "Unbegrenzt", "Pro: 20/Monat · Premier: 60/Monat"],
      ["Früher erstellte Songs", "Ohne Anzahlbegrenzung herunterladen", "Limits gelten für Downloads ab 3. September"],
      ["Nach Ausschöpfen des Kontingents", "Kein Download-Paket nötig", "Zusätzliche Downloads können gekauft werden"],
    ],
    exceptionLabel: "Wichtige Ausnahme:",
    exceptionBeforePolicy: "Suno-Premier-Abonnenten können in Suno Studio unbegrenzt herunterladen. Die Angaben zu Suno basieren auf der zum 3. September 2026 angekündigten",
    policy: "offiziellen Regelung",
    exceptionAfterPolicy: "und können sich ändern.",
  },
  plans: {
    eyebrow: "KLARE PLAN-GRENZEN",
    titleLines: ["Frei herunterladen.", "Für professionelle Nutzung", "upgraden."],
    intro: "Downloads bleiben in jedem Plan unbegrenzt. Starte kostenlos mit den wichtigsten Erstellungs- und Bearbeitungswerkzeugen und upgrade für professionelle Produktion und Veröffentlichung.",
    freeLabel: "GRATIS",
    freeTitle: "Zum Erstellen und Ausprobieren",
    memberLabel: "MITGLIED",
    memberTitle: "Zum Veröffentlichen und Produzieren",
    freeFeatures: [
      { title: "Unbegrenzte Track-Downloads", note: "", emphasized: true },
      { title: "Songs mit Credits generieren", note: "Begrenzte Modellauswahl · Erstellung verbraucht Credits", emphasized: true },
      { title: "Songtexte, Prompts und Songdetails bearbeiten", note: "", emphasized: true },
      { title: "Mix und Stimme ändern", note: "", emphasized: false },
      { title: "Stem-Trennung in 2 oder 4 Spuren", note: "", emphasized: false },
      { title: "Je 1 Test", note: "6-Spur-Stem-Trennung und Audio-to-MIDI", emphasized: true },
    ],
    memberFeatures: [
      { title: "Alles aus dem Gratis-Plan", note: "", emphasized: true },
      { title: "Alle Musikmodelle freischalten", note: "", emphasized: true },
      { title: "Smart Mastering", note: "", emphasized: true },
      { title: "6-Spur-Stem-Trennung", note: "", emphasized: false },
      { title: "Audio-to-MIDI-Konvertierung", note: "", emphasized: false },
      { title: "Volle kommerzielle Nutzungsrechte", note: "Inklusive Copyright-Zertifikat", emphasized: true },
    ],
  },
  faq: {
    eyebrow: "FRAGEN",
    title: "Gut zu wissen.",
    items: [
      ["Ist Tunee eine Suno-Alternative mit unbegrenzten Downloads?", "Ja. Tunee verbindet dialogbasierte KI-Musikerstellung mit unbegrenzten Track-Downloads für Gratis- und Bezahlkonten. Die Songerstellung verbraucht Credits und ist vom Download getrennt."],
      ["Können Nutzer des Gratis-Plans jeden erstellten Track herunterladen?", "Ja. Im Gratis-Plan kannst du jede erstellte Version ohne monatliches oder lebenslanges Download-Limit speichern. Kostenlose Downloads sind für die persönliche Nutzung bestimmt."],
      ["Bedeuten unbegrenzte Downloads auch unbegrenzte kostenlose Songerstellung?", "Nein. Downloads verbrauchen kein Download-Kontingent, aber die Musikerstellung benötigt Credits. Gratis-Konten erhalten tägliche Credits und Zugriff auf eine ausgewählte Modellauswahl."],
      ["Darf ich Tunee-Musik kommerziell nutzen?", "Berechtigte Bezahlpläne enthalten kommerzielle Nutzungsrechte und ein Copyright-Zertifikat gemäß den aktuellen Tunee-Planbedingungen."],
      ["Was schalten Mitglieder zusätzlich zu kommerziellen Rechten frei?", "Mitglieder erhalten alle Musikmodelle, Smart Mastering, 6-Spur-Stem-Trennung, Audio-to-MIDI und alle Funktionen des Gratis-Plans."],
      ["Woher stammen die Download-Zahlen von Suno?", ""],
    ],
    sourceBeforeLink: "Der Vergleich verwendet Sunos",
    sourceLink: "offizielle Ankündigung vom 10. August 2026",
    sourceAfterLink: "zu den Download-Regeln ab 3. September 2026. Sunos Bedingungen können sich ändern; prüfe daher die aktuelle offizielle Mitteilung.",
  },
  final: {
    eyebrow: "TUNEE MUSIC AGENT TESTEN",
    title: "Bereit, ohne Sorge um Download-Limits Musik zu erstellen?",
    intro: "Starte mit täglichen Gratis-Credits und lade jede erstellte Version herunter.",
    benefits: ["Unbegrenzte Downloads", "Tägliche Gratis-Credits", "Volle kommerzielle Rechte", "Erweiterte Bearbeitung"],
  },
  sourceReplacements: {
    [commonSourceKeys.home]: "Startseite",
    [commonSourceKeys.pricing]: "Preise",
    [commonSourceKeys.howTitle]: "In 3 Schritten von der Idee zum fertigen Track",
    [commonSourceKeys.step1Title]: "Natürlich chatten und beschreiben",
    [commonSourceKeys.step1Body]: "Keine komplizierten Prompts nötig. Sprich mit Tunee wie mit einem Produzenten, beschreibe Stimmung und Instrumentierung oder lade ein Referenzvideo hoch.",
    [commonSourceKeys.step1Point1]: "Dialog in natürlicher Sprache",
    [commonSourceKeys.step1Point2]: "Multimodale Eingabe mit Audio, Video und Bildern",
    [commonSourceKeys.chatHint]: "Beschreibe ein Gefühl – Tunee kümmert sich um den Sound",
    [commonSourceKeys.startCooking]: "Erstellung starten",
    [commonSourceKeys.prompt1]: "BGM für Survival-Vlogs",
    [commonSourceKeys.prompt2]: "Perfekt für Hochzeiten!",
    [commonSourceKeys.step2Title]: "Kreative Richtungen erkunden",
    [commonSourceKeys.step2Body]: "Tunee liefert nicht nur eine Option. Aus deiner Idee entstehen mehrere Richtungen mit unterschiedlichen Genres, Stimmungen und Arrangements.",
    [commonSourceKeys.step2Point1]: "Mehrere Stilvarianten",
    [commonSourceKeys.step2Point2]: "Genres erkunden",
    [commonSourceKeys.directions]: "+ Richtung auswählen",
    [commonSourceKeys.create]: "ERSTELLEN",
    [commonSourceKeys.step3Title]: "Verfeinern und fertigstellen",
    [commonSourceKeys.step3Body]: "Verfeinere den Track mit deinem Feedback. Erstelle anschließend ein Musikvideo, trenne Stems für professionelles Mastering und lade das fertige Ergebnis herunter.",
    [commonSourceKeys.musicVideoGeneration]: "Musikvideo-Erstellung",
    [commonSourceKeys.smartMastering]: "Smart Mastering",
    [commonSourceKeys.stemSeparation]: "Stem-Trennung",
    [commonSourceKeys.voiceClone]: "Stimmenklon",
    [commonSourceKeys.communityTitle]: "Lass dich von der Community inspirieren",
    [commonSourceKeys.communityBody]: "Entdecke Tracks von Künstlern aus aller Welt, höre rein und erstelle deinen nächsten Song.",
    [commonSourceKeys.footerTagline]: "Musik fertigstellen – mit weniger Aufwand",
    [commonSourceKeys.resource]: "Ressourcen",
    [commonSourceKeys.aboutUs]: "Über uns",
    [commonSourceKeys.customerStories]: "Kundenberichte",
    [commonSourceKeys.creatorProgram]: "Creator-Programm",
    [commonSourceKeys.affiliateProgram]: "Partnerprogramm",
    [commonSourceKeys.events]: "Events",
    [commonSourceKeys.features]: "Funktionen",
    [commonSourceKeys.aiMusicAgent]: "KI-Musik-Agent",
    [commonSourceKeys.musicGenerator]: "KI-Musikgenerator",
    [commonSourceKeys.aiCharacter]: "KI-Charakter",
    [commonSourceKeys.musicVideo]: "Musikvideo",
    [commonSourceKeys.aiDancing]: "KI-Tanz",
    [commonSourceKeys.motionControl]: "Bewegungssteuerung",
    [commonSourceKeys.models]: "Modelle",
    [commonSourceKeys.policy]: "Rechtliches",
    [commonSourceKeys.terms]: "Nutzungsbedingungen",
    [commonSourceKeys.privacy]: "Datenschutz",
    [commonSourceKeys.usage]: "Vereinbarung zur Inhaltsnutzung",
    [commonSourceKeys.other]: "Weitere Links",
    [commonSourceKeys.download]: "Download",
    [commonSourceKeys.feedback]: "Feedback",
    [commonSourceKeys.faq]: "FAQ",
  },
};

const es: SunoAlternativeCopy = {
  lang: "es",
  metadata: {
    title: "Alternativa a Suno: música IA y descargas ilimitadas | Tunee",
    description: "Crea canciones con el agente musical de IA de Tunee y descarga cada versión sin límite, tanto con una cuenta gratis como de pago.",
    keywords: ["alternativa a Suno", "música IA", "crear música con IA", "descargas ilimitadas", "generador de música IA"],
  },
  hero: {
    line1: "Una alternativa a Suno.",
    line2: "Descarga sin límites.",
    lead: "Crea canciones originales conversando con el agente musical de IA de Tunee y descarga cada versión que hagas, tanto con una cuenta gratis como de pago.",
    primaryCta: "Prueba Tunee gratis",
    secondaryCta: "Comparar acceso a descargas ↓",
    microcopy: "No requiere tarjeta · La generación consume créditos",
    toast: "¡Crea tu canción por chat!",
    videoLabel: "Demostración del agente musical de IA de Tunee",
  },
  benefits: [
    ["∞", "Descargas ilimitadas", "Usuarios gratis y de pago"],
    ["↓", "Descarga cada versión", "Revisa, compara y archiva"],
    ["✓", "Uso comercial", "Disponible en planes de pago"],
    ["✦", "Edición avanzada", "Disponible para miembros"],
  ],
  comparison: {
    eyebrow: "ACCESO A DESCARGAS, CARA A CARA",
    title: "Tunee vs Suno",
    intro: "Compara lo que puedes hacer después de crear, no solo cuántas canciones permite generar cada plan.",
    rule: "Regla de descarga",
    tunee: "Tunee",
    suno: "Suno",
    rows: [
      ["Descargas gratuitas", "Ilimitadas", "Hasta 7 descargas de prueba de por vida"],
      ["Descargas de pago", "Ilimitadas", "Pro: 20/mes · Premier: 60/mes"],
      ["Canciones creadas antes", "Descarga sin límite de cantidad", "Los límites se aplican a descargas desde el 3 de septiembre"],
      ["Al superar el cupo", "No necesitas comprar paquetes", "Se pueden comprar descargas adicionales"],
    ],
    exceptionLabel: "Excepción importante:",
    exceptionBeforePolicy: "Los suscriptores de Suno Premier pueden descargar sin límites dentro de Suno Studio. Los datos de Suno reflejan la",
    policy: "política oficial",
    exceptionAfterPolicy: "anunciada para el 3 de septiembre de 2026 y pueden cambiar.",
  },
  plans: {
    eyebrow: "LÍMITES CLAROS ENTRE PLANES",
    titleLines: ["Descarga libremente.", "Mejora tu plan para", "uso profesional."],
    intro: "Las descargas siguen siendo ilimitadas en todos los planes. Empieza gratis con las herramientas esenciales y mejora tu plan cuando necesites producción y publicación profesional.",
    freeLabel: "GRATIS",
    freeTitle: "Para crear y explorar",
    memberLabel: "MIEMBRO",
    memberTitle: "Para publicar y producir",
    freeFeatures: [
      { title: "Descargas de pistas ilimitadas", note: "", emphasized: true },
      { title: "Generación de canciones con créditos", note: "Modelos limitados · La generación consume créditos", emphasized: true },
      { title: "Edita letras, prompts y datos de la canción", note: "", emphasized: true },
      { title: "Mezcla y cambia la voz", note: "", emphasized: false },
      { title: "Separación de stems en 2 o 4 fuentes", note: "", emphasized: false },
      { title: "1 prueba de cada función", note: "Separación en 6 fuentes y Audio-to-MIDI", emphasized: true },
    ],
    memberFeatures: [
      { title: "Todo lo incluido en Gratis", note: "", emphasized: true },
      { title: "Desbloquea todos los modelos musicales", note: "", emphasized: true },
      { title: "Masterización inteligente", note: "", emphasized: true },
      { title: "Separación de stems en 6 fuentes", note: "", emphasized: false },
      { title: "Conversión de audio a MIDI", note: "", emphasized: false },
      { title: "Derechos completos de uso comercial", note: "Incluye certificado de derechos", emphasized: true },
    ],
  },
  faq: {
    eyebrow: "PREGUNTAS",
    title: "Conviene saberlo.",
    items: [
      ["¿Tunee es una alternativa a Suno con descargas ilimitadas?", "Sí. Tunee combina la creación musical por conversación con descargas ilimitadas para usuarios gratis y de pago. La generación de canciones consume créditos y es independiente de las descargas."],
      ["¿Los usuarios gratis de Tunee pueden descargar todas las pistas generadas?", "Sí. Puedes descargar cada versión que crees sin límites mensuales ni de por vida. Las descargas del plan gratis son para uso personal."],
      ["¿Descargas ilimitadas significa generar música gratis sin límites?", "No. Las descargas no consumen un cupo, pero crear música utiliza créditos. Las cuentas gratis reciben créditos diarios y acceso a una selección de modelos musicales."],
      ["¿Puedo usar la música de Tunee con fines comerciales?", "Los planes de pago compatibles incluyen derechos de uso comercial y un certificado, sujetos a las condiciones vigentes de Tunee."],
      ["¿Qué desbloquean los miembros además de los derechos comerciales?", "Los miembros acceden a todos los modelos musicales, masterización inteligente, separación en 6 fuentes, Audio-to-MIDI y todas las funciones gratuitas."],
      ["¿De dónde proceden las cifras de descargas de Suno?", ""],
    ],
    sourceBeforeLink: "La comparación utiliza el",
    sourceLink: "anuncio oficial de Suno del 10 de agosto de 2026",
    sourceAfterLink: "sobre las reglas de descarga que comienzan el 3 de septiembre de 2026. Las condiciones pueden cambiar; consulta el aviso oficial más reciente.",
  },
  final: {
    eyebrow: "PRUEBA TUNEE MUSIC AGENT",
    title: "¿Listo para crear sin preocuparte por el número de descargas?",
    intro: "Empieza con créditos diarios gratis y descarga cada versión que crees.",
    benefits: ["Descargas ilimitadas", "Créditos diarios gratis", "Derechos comerciales completos", "Edición avanzada"],
  },
  sourceReplacements: {
    [commonSourceKeys.home]: "Inicio",
    [commonSourceKeys.pricing]: "Precios",
    [commonSourceKeys.howTitle]: "De la idea a la pista terminada en 3 pasos",
    [commonSourceKeys.step1Title]: "Habla y describe con naturalidad",
    [commonSourceKeys.step1Body]: "No necesitas prompts complejos. Habla con Tunee como con un productor: describe el ambiente y los instrumentos o sube un vídeo de referencia.",
    [commonSourceKeys.step1Point1]: "Interfaz de conversación natural",
    [commonSourceKeys.step1Point2]: "Entrada multimodal: audio, vídeo e imágenes",
    [commonSourceKeys.chatHint]: "Empieza con una sensación y Tunee se encarga del sonido",
    [commonSourceKeys.startCooking]: "Empezar a crear",
    [commonSourceKeys.prompt1]: "Música para diarios de supervivencia",
    [commonSourceKeys.prompt2]: "¡Ideal para bodas!",
    [commonSourceKeys.step2Title]: "Explora direcciones creativas",
    [commonSourceKeys.step2Body]: "Tunee no ofrece una sola opción. A partir de tu idea, propone distintas rutas con géneros, ambientes y arreglos diferentes.",
    [commonSourceKeys.step2Point1]: "Variaciones de estilo",
    [commonSourceKeys.step2Point2]: "Exploración de géneros",
    [commonSourceKeys.directions]: "+ Elige una dirección",
    [commonSourceKeys.create]: "CREAR",
    [commonSourceKeys.step3Title]: "Perfecciona y entrega",
    [commonSourceKeys.step3Body]: "Sigue refinando la canción con tus comentarios. Cuando esté lista, crea un vídeo musical, separa stems para la masterización y descarga el resultado final.",
    [commonSourceKeys.musicVideoGeneration]: "Creación de vídeos musicales",
    [commonSourceKeys.smartMastering]: "Masterización inteligente",
    [commonSourceKeys.stemSeparation]: "Separación de stems",
    [commonSourceKeys.voiceClone]: "Clonación de voz",
    [commonSourceKeys.communityTitle]: "Inspírate con la comunidad",
    [commonSourceKeys.communityBody]: "Descubre canciones de artistas de todo el mundo, escúchalas y crea tu próxima pista.",
    [commonSourceKeys.footerTagline]: "Termina tu música con menos esfuerzo",
    [commonSourceKeys.resource]: "Recursos",
    [commonSourceKeys.aboutUs]: "Sobre nosotros",
    [commonSourceKeys.customerStories]: "Historias de clientes",
    [commonSourceKeys.creatorProgram]: "Programa de creadores",
    [commonSourceKeys.affiliateProgram]: "Programa de afiliados",
    [commonSourceKeys.events]: "Eventos",
    [commonSourceKeys.features]: "Funciones",
    [commonSourceKeys.aiMusicAgent]: "Agente musical de IA",
    [commonSourceKeys.musicGenerator]: "Generador de música IA",
    [commonSourceKeys.aiCharacter]: "Personaje de IA",
    [commonSourceKeys.musicVideo]: "Vídeo musical",
    [commonSourceKeys.aiDancing]: "Baile con IA",
    [commonSourceKeys.motionControl]: "Control de movimiento",
    [commonSourceKeys.models]: "Modelos",
    [commonSourceKeys.policy]: "Políticas",
    [commonSourceKeys.terms]: "Términos de uso",
    [commonSourceKeys.privacy]: "Política de privacidad",
    [commonSourceKeys.usage]: "Acuerdo de uso de contenidos",
    [commonSourceKeys.other]: "Otros",
    [commonSourceKeys.download]: "Descargar",
    [commonSourceKeys.feedback]: "Comentarios",
    [commonSourceKeys.faq]: "Preguntas frecuentes",
  },
};

const pt: SunoAlternativeCopy = {
  lang: "pt",
  metadata: {
    title: "Alternativa ao Suno: música com IA e downloads ilimitados | Tunee",
    description: "Crie músicas com o agente musical de IA da Tunee e baixe todas as versões sem limite, tanto na conta gratuita quanto na paga.",
    keywords: ["alternativa ao Suno", "criar música com IA", "gerador de música IA", "downloads ilimitados", "música IA grátis"],
  },
  hero: {
    line1: "Uma alternativa ao Suno.",
    line2: "Downloads sem limite.",
    lead: "Crie músicas originais conversando com o agente musical de IA da Tunee e baixe todas as versões que fizer, seja com uma conta gratuita ou paga.",
    primaryCta: "Experimente a Tunee grátis",
    secondaryCta: "Comparar acesso a downloads ↓",
    microcopy: "Sem cartão de crédito · A geração consome créditos",
    toast: "Crie sua faixa pelo chat!",
    videoLabel: "Demonstração do agente musical de IA da Tunee",
  },
  benefits: [["∞", "Downloads ilimitados", "Usuários gratuitos e pagos"], ["↓", "Baixe todas as versões", "Revise, compare e arquive"], ["✓", "Uso comercial", "Disponível nos planos pagos"], ["✦", "Edição avançada", "Disponível para membros"]],
  comparison: {
    eyebrow: "ACESSO A DOWNLOADS, LADO A LADO", title: "Tunee vs Suno",
    intro: "Compare o que acontece depois de criar, não apenas quantas músicas cada plano permite gerar.",
    rule: "Regra de download", tunee: "Tunee", suno: "Suno",
    rows: [["Downloads gratuitos", "Ilimitados", "Até 7 downloads de teste no total"], ["Downloads em planos pagos", "Ilimitados", "Pro: 20/mês · Premier: 60/mês"], ["Músicas criadas anteriormente", "Download sem limite de quantidade", "Os limites valem para downloads após 3 de setembro"], ["Após atingir o limite", "Nenhum pacote extra necessário", "Downloads adicionais podem ser comprados"]],
    exceptionLabel: "Exceção importante:", exceptionBeforePolicy: "Assinantes Suno Premier podem baixar sem limites no Suno Studio. Os dados do Suno refletem a", policy: "política oficial", exceptionAfterPolicy: "anunciada para 3 de setembro de 2026 e podem mudar.",
  },
  plans: {
    eyebrow: "LIMITES CLAROS ENTRE PLANOS", titleLines: ["Baixe livremente.", "Faça upgrade para", "uso profissional."],
    intro: "Os downloads continuam ilimitados em todos os planos. Comece grátis com as ferramentas essenciais e faça upgrade quando precisar de produção e publicação profissional.",
    freeLabel: "GRÁTIS", freeTitle: "Para criar e explorar", memberLabel: "MEMBRO", memberTitle: "Para publicar e produzir",
    freeFeatures: [{ title: "Downloads de faixas ilimitados", note: "", emphasized: true }, { title: "Geração de músicas com créditos", note: "Modelos limitados · A geração consome créditos", emphasized: true }, { title: "Edite letras, prompts e detalhes", note: "", emphasized: true }, { title: "Mixagem e mudança de voz", note: "", emphasized: false }, { title: "Separação em 2 ou 4 fontes", note: "", emphasized: false }, { title: "1 teste de cada recurso", note: "Separação em 6 fontes e Áudio-para-MIDI", emphasized: true }],
    memberFeatures: [{ title: "Tudo do plano Grátis", note: "", emphasized: true }, { title: "Todos os modelos musicais", note: "", emphasized: true }, { title: "Masterização inteligente", note: "", emphasized: true }, { title: "Separação em 6 fontes", note: "", emphasized: false }, { title: "Conversão de áudio para MIDI", note: "", emphasized: false }, { title: "Direitos completos de uso comercial", note: "Inclui certificado de direitos autorais", emphasized: true }],
  },
  faq: {
    eyebrow: "PERGUNTAS", title: "Bom saber.",
    items: [["A Tunee é uma alternativa ao Suno com downloads ilimitados?", "Sim. A Tunee combina criação musical por conversa com downloads ilimitados para usuários gratuitos e pagos. A geração usa créditos e é separada dos downloads."], ["Usuários gratuitos podem baixar todas as faixas geradas?", "Sim. Você pode baixar todas as versões sem limite mensal ou vitalício. Os downloads do plano gratuito são para uso pessoal."], ["Downloads ilimitados significam geração gratuita ilimitada?", "Não. Os downloads não usam uma cota, mas criar música consome créditos. Contas gratuitas recebem créditos diários e acesso a alguns modelos."], ["Posso usar músicas da Tunee comercialmente?", "Planos pagos elegíveis incluem direitos de uso comercial e certificado, sujeitos aos termos atuais da Tunee."], ["O que os membros desbloqueiam além dos direitos comerciais?", "Todos os modelos, masterização inteligente, separação em 6 fontes, Áudio-para-MIDI e todos os recursos gratuitos."], ["De onde vêm os números de download do Suno?", ""]],
    sourceBeforeLink: "A comparação usa o", sourceLink: "anúncio oficial do Suno de 10 de agosto de 2026", sourceAfterLink: "sobre as regras de download a partir de 3 de setembro de 2026. Os termos podem mudar; consulte o aviso oficial mais recente.",
  },
  final: { eyebrow: "EXPERIMENTE O TUNEE MUSIC AGENT", title: "Pronto para criar sem se preocupar com limites de download?", intro: "Comece com créditos diários gratuitos e baixe todas as versões que criar.", benefits: ["Downloads ilimitados", "Créditos diários gratuitos", "Direitos comerciais em planos pagos", "Edição avançada para membros"] },
  sourceReplacements: {
    [commonSourceKeys.home]: "Início", [commonSourceKeys.pricing]: "Preços", [commonSourceKeys.howTitle]: "Da ideia à faixa pronta em 3 etapas", [commonSourceKeys.step1Title]: "Converse e descreva naturalmente", [commonSourceKeys.step1Body]: "Sem prompts complicados. Fale com a Tunee como com um produtor, descreva o clima e os instrumentos ou envie um vídeo de referência.", [commonSourceKeys.step1Point1]: "Interface de conversa em linguagem natural", [commonSourceKeys.step1Point2]: "Entrada multimodal: áudio, vídeo e imagens", [commonSourceKeys.chatHint]: "Comece com uma sensação e a Tunee cuida do som", [commonSourceKeys.startCooking]: "Começar a criar", [commonSourceKeys.step2Title]: "Explore direções criativas", [commonSourceKeys.step2Body]: "A Tunee não oferece apenas uma opção. A partir da sua ideia, sugere gêneros, climas e arranjos diferentes.", [commonSourceKeys.step2Point1]: "Variações de estilo", [commonSourceKeys.step2Point2]: "Exploração de gêneros", [commonSourceKeys.directions]: "+ Escolha uma direção", [commonSourceKeys.create]: "CRIAR", [commonSourceKeys.step3Title]: "Refine e finalize", [commonSourceKeys.step3Body]: "Aprimore a música com seu feedback. Depois, crie um videoclipe, separe stems para masterização e baixe o resultado final.", [commonSourceKeys.musicVideoGeneration]: "Geração de videoclipe", [commonSourceKeys.smartMastering]: "Masterização inteligente", [commonSourceKeys.stemSeparation]: "Separação de stems", [commonSourceKeys.voiceClone]: "Clonagem de voz", [commonSourceKeys.communityTitle]: "Inspire-se na comunidade", [commonSourceKeys.communityBody]: "Descubra faixas de artistas do mundo todo, ouça e crie sua próxima música.", [commonSourceKeys.footerTagline]: "Finalize sua música com menos esforço", [commonSourceKeys.resource]: "Recursos", [commonSourceKeys.aboutUs]: "Sobre nós", [commonSourceKeys.customerStories]: "Histórias de clientes", [commonSourceKeys.creatorProgram]: "Programa de criadores", [commonSourceKeys.affiliateProgram]: "Programa de afiliados", [commonSourceKeys.events]: "Eventos", [commonSourceKeys.features]: "Recursos", [commonSourceKeys.aiMusicAgent]: "Agente musical de IA", [commonSourceKeys.musicGenerator]: "Gerador de música IA", [commonSourceKeys.aiCharacter]: "Personagem de IA", [commonSourceKeys.musicVideo]: "Videoclipe", [commonSourceKeys.aiDancing]: "Dança com IA", [commonSourceKeys.motionControl]: "Controle de movimento", [commonSourceKeys.models]: "Modelos", [commonSourceKeys.policy]: "Políticas", [commonSourceKeys.terms]: "Termos de uso", [commonSourceKeys.privacy]: "Política de privacidade", [commonSourceKeys.usage]: "Acordo de uso de conteúdo", [commonSourceKeys.other]: "Outros", [commonSourceKeys.download]: "Baixar", [commonSourceKeys.feedback]: "Feedback", [commonSourceKeys.faq]: "Perguntas frequentes",
  },
};

const fr: SunoAlternativeCopy = {
  lang: "fr",
  metadata: { title: "Alternative à Suno : musique IA et téléchargements illimités | Tunee", description: "Créez des chansons avec l’agent musical IA de Tunee et téléchargez chaque version sans limite, avec un compte gratuit ou payant.", keywords: ["alternative à Suno", "générateur de musique IA", "créer musique IA", "téléchargements illimités", "musique IA gratuite"] },
  hero: { line1: "Une alternative à Suno.", line2: "Téléchargez sans limite.", lead: "Créez des chansons originales en discutant avec l’agent musical IA de Tunee, puis téléchargez chaque version créée, avec un compte gratuit ou payant.", primaryCta: "Essayer Tunee gratuitement", secondaryCta: "Comparer l’accès aux téléchargements ↓", microcopy: "Aucune carte bancaire requise · La génération utilise des crédits", toast: "Créez votre morceau par chat !", videoLabel: "Démonstration de l’agent musical IA de Tunee" },
  benefits: [["∞", "Téléchargements illimités", "Comptes gratuits et payants"], ["↓", "Téléchargez chaque version", "Écoutez, comparez, archivez"], ["✓", "Usage commercial", "Disponible avec les offres payantes"], ["✦", "Édition avancée", "Disponible pour les membres"]],
  comparison: { eyebrow: "ACCÈS AUX TÉLÉCHARGEMENTS, CÔTE À CÔTE", title: "Tunee vs Suno", intro: "Comparez ce qui se passe après la création, pas seulement le nombre de chansons que chaque offre permet de générer.", rule: "Règle de téléchargement", tunee: "Tunee", suno: "Suno", rows: [["Téléchargements gratuits", "Illimités", "Jusqu’à 7 téléchargements d’essai au total"], ["Téléchargements payants", "Illimités", "Pro : 20/mois · Premier : 60/mois"], ["Chansons créées auparavant", "Téléchargement sans limite de nombre", "Limites appliquées aux téléchargements après le 3 septembre"], ["Au-delà du quota", "Aucun pack nécessaire", "Téléchargements supplémentaires disponibles à l’achat"]], exceptionLabel: "Exception importante :", exceptionBeforePolicy: "Les abonnés Suno Premier peuvent télécharger sans limite dans Suno Studio. Les informations sur Suno reflètent la", policy: "politique officielle", exceptionAfterPolicy: "annoncée pour le 3 septembre 2026 et peuvent évoluer." },
  plans: { eyebrow: "DES LIMITES CLAIRES ENTRE LES OFFRES", titleLines: ["Téléchargez librement.", "Passez à l’offre supérieure pour", "un usage professionnel."], intro: "Les téléchargements restent illimités avec toutes les offres. Commencez gratuitement, puis passez à l’offre supérieure pour la production et la publication professionnelles.", freeLabel: "GRATUIT", freeTitle: "Pour créer et explorer", memberLabel: "MEMBRE", memberTitle: "Pour publier et produire", freeFeatures: [{ title: "Téléchargements de morceaux illimités", note: "", emphasized: true }, { title: "Génération musicale avec des crédits", note: "Modèles limités · La génération utilise des crédits", emphasized: true }, { title: "Modifiez paroles, prompts et détails", note: "", emphasized: true }, { title: "Mixage et changement de voix", note: "", emphasized: false }, { title: "Séparation en 2 ou 4 sources", note: "", emphasized: false }, { title: "1 essai de chaque fonction", note: "Séparation en 6 sources et Audio-vers-MIDI", emphasized: true }], memberFeatures: [{ title: "Tout le contenu de l’offre gratuite", note: "", emphasized: true }, { title: "Tous les modèles musicaux", note: "", emphasized: true }, { title: "Mastering intelligent", note: "", emphasized: true }, { title: "Séparation en 6 sources", note: "", emphasized: false }, { title: "Conversion audio vers MIDI", note: "", emphasized: false }, { title: "Droits complets d’usage commercial", note: "Certificat de droits inclus", emphasized: true }] },
  faq: { eyebrow: "QUESTIONS", title: "Bon à savoir.", items: [["Tunee est-il une alternative à Suno avec téléchargements illimités ?", "Oui. Tunee associe création musicale conversationnelle et téléchargements illimités pour les comptes gratuits et payants. La génération utilise des crédits."], ["Les utilisateurs gratuits peuvent-ils télécharger chaque morceau ?", "Oui. Téléchargez chaque version sans limite mensuelle ou à vie. Les téléchargements gratuits sont destinés à un usage personnel."], ["Téléchargements illimités signifie-t-il génération gratuite illimitée ?", "Non. Les téléchargements ne consomment aucun quota, mais la création utilise des crédits. Les comptes gratuits reçoivent des crédits quotidiens et certains modèles."], ["Puis-je utiliser la musique Tunee à des fins commerciales ?", "Les offres payantes éligibles incluent des droits d’usage commercial et un certificat, selon les conditions Tunee en vigueur."], ["Que débloquent les membres en plus des droits commerciaux ?", "Tous les modèles, le mastering intelligent, la séparation en 6 sources, l’Audio-vers-MIDI et toutes les fonctions gratuites."], ["D’où viennent les chiffres de téléchargement de Suno ?", ""]], sourceBeforeLink: "La comparaison utilise", sourceLink: "l’annonce officielle de Suno du 10 août 2026", sourceAfterLink: "sur les règles applicables à partir du 3 septembre 2026. Les conditions peuvent changer ; consultez l’avis officiel le plus récent." },
  final: { eyebrow: "ESSAYEZ TUNEE MUSIC AGENT", title: "Prêt à créer sans vous soucier du nombre de téléchargements ?", intro: "Commencez avec des crédits gratuits quotidiens et téléchargez chaque version créée.", benefits: ["Téléchargements illimités", "Crédits gratuits quotidiens", "Droits commerciaux avec les offres payantes", "Édition avancée pour les membres"] },
  sourceReplacements: { [commonSourceKeys.home]: "Accueil", [commonSourceKeys.pricing]: "Tarifs", [commonSourceKeys.howTitle]: "De l’idée au morceau final en 3 étapes", [commonSourceKeys.step1Title]: "Discutez et décrivez naturellement", [commonSourceKeys.step1Body]: "Aucun prompt complexe. Parlez à Tunee comme à un producteur, décrivez l’ambiance et les instruments ou importez une vidéo de référence.", [commonSourceKeys.step1Point1]: "Interface conversationnelle naturelle", [commonSourceKeys.step1Point2]: "Entrée multimodale : audio, vidéo et images", [commonSourceKeys.chatHint]: "Partez d’une émotion, Tunee s’occupe du son", [commonSourceKeys.startCooking]: "Commencer à créer", [commonSourceKeys.step2Title]: "Explorez des directions créatives", [commonSourceKeys.step2Body]: "Tunee ne propose pas une seule option. À partir de votre idée, il explore différents genres, ambiances et arrangements.", [commonSourceKeys.step2Point1]: "Variations de style", [commonSourceKeys.step2Point2]: "Exploration des genres", [commonSourceKeys.directions]: "+ Choisir une direction", [commonSourceKeys.create]: "CRÉER", [commonSourceKeys.step3Title]: "Affinez et finalisez", [commonSourceKeys.step3Body]: "Affinez le morceau grâce à vos retours, créez une vidéo, séparez les stems pour le mastering et téléchargez la version finale.", [commonSourceKeys.musicVideoGeneration]: "Création de clip musical", [commonSourceKeys.smartMastering]: "Mastering intelligent", [commonSourceKeys.stemSeparation]: "Séparation des stems", [commonSourceKeys.voiceClone]: "Clonage vocal", [commonSourceKeys.communityTitle]: "Inspirez-vous de la communauté", [commonSourceKeys.communityBody]: "Découvrez les morceaux d’artistes du monde entier, écoutez-les et créez votre prochaine piste.", [commonSourceKeys.footerTagline]: "Finalisez votre musique avec moins d’effort", [commonSourceKeys.resource]: "Ressources", [commonSourceKeys.aboutUs]: "À propos", [commonSourceKeys.customerStories]: "Témoignages clients", [commonSourceKeys.creatorProgram]: "Programme créateurs", [commonSourceKeys.affiliateProgram]: "Programme d’affiliation", [commonSourceKeys.events]: "Événements", [commonSourceKeys.features]: "Fonctionnalités", [commonSourceKeys.aiMusicAgent]: "Agent musical IA", [commonSourceKeys.musicGenerator]: "Générateur de musique IA", [commonSourceKeys.aiCharacter]: "Personnage IA", [commonSourceKeys.musicVideo]: "Clip musical", [commonSourceKeys.aiDancing]: "Danse IA", [commonSourceKeys.motionControl]: "Contrôle du mouvement", [commonSourceKeys.models]: "Modèles", [commonSourceKeys.policy]: "Mentions légales", [commonSourceKeys.terms]: "Conditions d’utilisation", [commonSourceKeys.privacy]: "Politique de confidentialité", [commonSourceKeys.usage]: "Accord d’utilisation des contenus", [commonSourceKeys.other]: "Autres", [commonSourceKeys.download]: "Télécharger", [commonSourceKeys.feedback]: "Avis", [commonSourceKeys.faq]: "FAQ" },
};

const it: SunoAlternativeCopy = {
  lang: "it",
  metadata: { title: "Alternativa a Suno: musica IA e download illimitati | Tunee", description: "Crea brani con l’agente musicale IA di Tunee e scarica ogni versione senza limiti, con un account gratuito o a pagamento.", keywords: ["alternativa a Suno", "generatore musica IA", "creare musica con IA", "download illimitati", "musica IA gratis"] },
  hero: { line1: "Un’alternativa a Suno.", line2: "Download senza limiti.", lead: "Crea brani originali conversando con l’agente musicale IA di Tunee e scarica ogni versione che realizzi, con un account gratuito o a pagamento.", primaryCta: "Prova Tunee gratis", secondaryCta: "Confronta l’accesso ai download ↓", microcopy: "Nessuna carta richiesta · La generazione usa crediti", toast: "Crea il tuo brano in chat!", videoLabel: "Demo dell’agente musicale IA di Tunee" },
  benefits: [["∞", "Download illimitati", "Utenti gratuiti e paganti"], ["↓", "Scarica ogni versione", "Ascolta, confronta, archivia"], ["✓", "Uso commerciale", "Disponibile nei piani a pagamento"], ["✦", "Editing avanzato", "Disponibile per i membri"]],
  comparison: { eyebrow: "ACCESSO AI DOWNLOAD A CONFRONTO", title: "Tunee vs Suno", intro: "Confronta cosa puoi fare dopo la creazione, non solo quanti brani consente di generare ogni piano.", rule: "Regola di download", tunee: "Tunee", suno: "Suno", rows: [["Download gratuiti", "Illimitati", "Fino a 7 download di prova totali"], ["Download a pagamento", "Illimitati", "Pro: 20/mese · Premier: 60/mese"], ["Brani creati in precedenza", "Download senza limite numerico", "Limiti applicati ai download dopo il 3 settembre"], ["Oltre la quota", "Nessun pacchetto necessario", "Download aggiuntivi acquistabili"]], exceptionLabel: "Eccezione importante:", exceptionBeforePolicy: "Gli abbonati Suno Premier possono scaricare senza limiti in Suno Studio. I dati su Suno riflettono la", policy: "politica ufficiale", exceptionAfterPolicy: "annunciata per il 3 settembre 2026 e possono cambiare." },
  plans: { eyebrow: "CONFINI CHIARI TRA I PIANI", titleLines: ["Scarica liberamente.", "Passa al piano superiore per", "l’uso professionale."], intro: "I download restano illimitati in ogni piano. Inizia gratis e passa al piano superiore quando ti servono strumenti professionali di produzione e pubblicazione.", freeLabel: "GRATIS", freeTitle: "Per creare ed esplorare", memberLabel: "MEMBRO", memberTitle: "Per pubblicare e produrre", freeFeatures: [{ title: "Download di tracce illimitati", note: "", emphasized: true }, { title: "Generazione musicale con crediti", note: "Modelli limitati · La generazione usa crediti", emphasized: true }, { title: "Modifica testi, prompt e dettagli", note: "", emphasized: true }, { title: "Mix e cambio voce", note: "", emphasized: false }, { title: "Separazione in 2 o 4 fonti", note: "", emphasized: false }, { title: "1 prova per funzione", note: "Separazione in 6 fonti e Audio-to-MIDI", emphasized: true }], memberFeatures: [{ title: "Tutto ciò che offre il piano Gratis", note: "", emphasized: true }, { title: "Tutti i modelli musicali", note: "", emphasized: true }, { title: "Mastering intelligente", note: "", emphasized: true }, { title: "Separazione in 6 fonti", note: "", emphasized: false }, { title: "Conversione audio-MIDI", note: "", emphasized: false }, { title: "Diritti completi per uso commerciale", note: "Certificato incluso", emphasized: true }] },
  faq: { eyebrow: "DOMANDE", title: "Informazioni utili.", items: [["Tunee è un’alternativa a Suno con download illimitati?", "Sì. Tunee unisce la creazione musicale conversazionale a download illimitati per utenti gratuiti e paganti. La generazione usa crediti."], ["Gli utenti gratuiti possono scaricare ogni traccia generata?", "Sì. Puoi scaricare ogni versione senza limiti mensili o complessivi. I download gratuiti sono destinati all’uso personale."], ["Download illimitati significa generazione gratuita illimitata?", "No. I download non consumano una quota, ma creare musica usa crediti. Gli account gratuiti ricevono crediti giornalieri e alcuni modelli."], ["Posso usare la musica Tunee a fini commerciali?", "I piani a pagamento idonei includono diritti d’uso commerciale e un certificato, secondo i termini Tunee vigenti."], ["Cosa sbloccano i membri oltre ai diritti commerciali?", "Tutti i modelli, mastering intelligente, separazione in 6 fonti, Audio-to-MIDI e tutte le funzioni gratuite."], ["Da dove provengono i numeri dei download di Suno?", ""]], sourceBeforeLink: "Il confronto usa", sourceLink: "l’annuncio ufficiale di Suno del 10 agosto 2026", sourceAfterLink: "sulle regole in vigore dal 3 settembre 2026. I termini possono cambiare; consulta l’avviso ufficiale più recente." },
  final: { eyebrow: "PROVA TUNEE MUSIC AGENT", title: "Pronto a creare senza preoccuparti del numero di download?", intro: "Inizia con crediti giornalieri gratuiti e scarica ogni versione che crei.", benefits: ["Download illimitati", "Crediti giornalieri gratuiti", "Diritti commerciali nei piani a pagamento", "Editing avanzato per i membri"] },
  sourceReplacements: { [commonSourceKeys.home]: "Home", [commonSourceKeys.pricing]: "Prezzi", [commonSourceKeys.howTitle]: "Dall’idea alla traccia finita in 3 passaggi", [commonSourceKeys.step1Title]: "Chatta e descrivi in modo naturale", [commonSourceKeys.step1Body]: "Niente prompt complessi. Parla con Tunee come con un produttore, descrivi atmosfera e strumenti oppure carica un video di riferimento.", [commonSourceKeys.step1Point1]: "Interfaccia conversazionale naturale", [commonSourceKeys.step1Point2]: "Input multimodale: audio, video e immagini", [commonSourceKeys.chatHint]: "Parti da un’emozione e Tunee pensa al suono", [commonSourceKeys.startCooking]: "Inizia a creare", [commonSourceKeys.step2Title]: "Esplora direzioni creative", [commonSourceKeys.step2Body]: "Tunee non propone una sola opzione. Dalla tua idea esplora generi, atmosfere e arrangiamenti diversi.", [commonSourceKeys.step2Point1]: "Varianti di stile", [commonSourceKeys.step2Point2]: "Esplorazione dei generi", [commonSourceKeys.directions]: "+ Scegli una direzione", [commonSourceKeys.create]: "CREA", [commonSourceKeys.step3Title]: "Perfeziona e completa", [commonSourceKeys.step3Body]: "Affina il brano con i tuoi feedback, crea un video musicale, separa gli stem per il mastering e scarica il risultato finale.", [commonSourceKeys.musicVideoGeneration]: "Creazione di video musicali", [commonSourceKeys.smartMastering]: "Mastering intelligente", [commonSourceKeys.stemSeparation]: "Separazione degli stem", [commonSourceKeys.voiceClone]: "Clonazione vocale", [commonSourceKeys.communityTitle]: "Lasciati ispirare dalla community", [commonSourceKeys.communityBody]: "Scopri le tracce di artisti di tutto il mondo, ascoltale e crea il tuo prossimo brano.", [commonSourceKeys.footerTagline]: "Completa la tua musica con meno sforzo", [commonSourceKeys.resource]: "Risorse", [commonSourceKeys.aboutUs]: "Chi siamo", [commonSourceKeys.customerStories]: "Storie dei clienti", [commonSourceKeys.creatorProgram]: "Programma creator", [commonSourceKeys.affiliateProgram]: "Programma di affiliazione", [commonSourceKeys.events]: "Eventi", [commonSourceKeys.features]: "Funzioni", [commonSourceKeys.aiMusicAgent]: "Agente musicale IA", [commonSourceKeys.musicGenerator]: "Generatore di musica IA", [commonSourceKeys.aiCharacter]: "Personaggio IA", [commonSourceKeys.musicVideo]: "Video musicale", [commonSourceKeys.aiDancing]: "Danza IA", [commonSourceKeys.motionControl]: "Controllo del movimento", [commonSourceKeys.models]: "Modelli", [commonSourceKeys.policy]: "Note legali", [commonSourceKeys.terms]: "Termini di utilizzo", [commonSourceKeys.privacy]: "Informativa sulla privacy", [commonSourceKeys.usage]: "Accordo sull’uso dei contenuti", [commonSourceKeys.other]: "Altro", [commonSourceKeys.download]: "Download", [commonSourceKeys.feedback]: "Feedback", [commonSourceKeys.faq]: "FAQ" },
};

const ru: SunoAlternativeCopy = {
  lang: "ru",
  metadata: { title: "Альтернатива Suno: музыка с ИИ без лимита скачиваний | Tunee", description: "Создавайте песни с Tunee Music Agent и скачивайте каждую версию без ограничений — с бесплатным или платным аккаунтом.", keywords: ["альтернатива Suno", "генератор музыки ИИ", "создать музыку ИИ", "скачивания без лимитов"] },
  hero: { line1: "Альтернатива Suno.", line2: "Скачивайте без ограничений.", lead: "Создавайте оригинальные песни в диалоге с Tunee Music Agent, а затем скачивайте каждую версию — как с бесплатным, так и с платным аккаунтом.", primaryCta: "Попробовать Tunee бесплатно", secondaryCta: "Сравнить условия скачивания ↓", microcopy: "Банковская карта не требуется · Генерация расходует кредиты", toast: "Создайте свой трек в чате!", videoLabel: "Демонстрация Tunee Music Agent" },
  benefits: [["∞", "Скачивания без ограничений", "Для бесплатных и платных аккаунтов"], ["↓", "Скачивайте каждую версию", "Слушайте, сравнивайте, сохраняйте"], ["✓", "Коммерческое использование", "Доступно в платных тарифах"], ["✦", "Расширенное редактирование", "Доступно подписчикам"]],
  comparison: { eyebrow: "СРАВНЕНИЕ УСЛОВИЙ СКАЧИВАНИЯ", title: "Tunee и Suno", intro: "Сравните возможности после создания музыки, а не только число песен, доступных для генерации.", rule: "Правило скачивания", tunee: "Tunee", suno: "Suno", rows: [["Бесплатный тариф", "Без ограничений", "До 7 пробных скачиваний за всё время"], ["Платные тарифы", "Без ограничений", "Pro: 20 в месяц · Premier: 60 в месяц"], ["Ранее созданные песни", "Без ограничения по количеству", "Ограничения действуют после 3 сентября"], ["После исчерпания лимита", "Дополнительный пакет не нужен", "Можно приобрести дополнительные скачивания"]], exceptionLabel: "Важное исключение:", exceptionBeforePolicy: "Подписчики Suno Premier могут скачивать без ограничений в Suno Studio. Данные о Suno основаны на", policy: "официальных правилах", exceptionAfterPolicy: "на 3 сентября 2026 года и могут измениться." },
  plans: { eyebrow: "ЧЁТКИЕ РАЗЛИЧИЯ МЕЖДУ ТАРИФАМИ", titleLines: ["Скачивайте без ограничений.", "Платный тариф — для", "профессиональной работы."], intro: "Количество скачиваний не ограничено ни в одном тарифе. Начните бесплатно, а профессиональные функции производства и публикации подключайте по мере необходимости.", freeLabel: "БЕСПЛАТНО", freeTitle: "Для творчества и экспериментов", memberLabel: "ПОДПИСКА", memberTitle: "Для публикации и продакшена", freeFeatures: [{ title: "Скачивания треков без ограничений", note: "", emphasized: true }, { title: "Создавайте песни за кредиты", note: "Ограниченный набор моделей · Генерация расходует кредиты", emphasized: true }, { title: "Редактируйте тексты, промпты и параметры", note: "", emphasized: true }, { title: "Микширование и изменение голоса", note: "", emphasized: false }, { title: "Разделение на 2 и 4 стема", note: "", emphasized: false }, { title: "По 1 пробному использованию", note: "6 стемов и преобразование аудио в MIDI", emphasized: true }], memberFeatures: [{ title: "Все возможности бесплатного тарифа", note: "", emphasized: true }, { title: "Все музыкальные модели", note: "", emphasized: true }, { title: "Умный мастеринг", note: "", emphasized: true }, { title: "Разделение на 6 стемов", note: "", emphasized: false }, { title: "Преобразование аудио в MIDI", note: "", emphasized: false }, { title: "Полные коммерческие права", note: "Сертификат авторских прав включён", emphasized: true }] },
  faq: { eyebrow: "ВОПРОСЫ", title: "Полезно знать.", items: [["Tunee — альтернатива Suno без лимита скачиваний?", "Да. Tunee сочетает создание музыки с ИИ в формате диалога и неограниченное число скачиваний для бесплатных и платных аккаунтов. Генерация расходует кредиты."], ["Можно ли бесплатно скачать все созданные треки?", "Да. Каждую версию можно скачать без месячного или общего лимита. Бесплатные скачивания предназначены для личного использования."], ["Скачивания без лимитов означают бесплатную генерацию без ограничений?", "Нет. На число скачиваний лимита нет, но создание музыки расходует кредиты. Бесплатные аккаунты получают ежедневные кредиты и доступ к части моделей."], ["Можно ли использовать музыку Tunee коммерчески?", "Подходящие платные тарифы включают коммерческие права и сертификат в соответствии с актуальными условиями Tunee."], ["Что получают подписчики помимо коммерческих прав?", "Все музыкальные модели, умный мастеринг, 6 стемов, преобразование аудио в MIDI и все бесплатные функции."], ["Откуда взяты данные о скачиваниях Suno?", ""]], sourceBeforeLink: "Сравнение основано на", sourceLink: "официальном объявлении Suno от 10 августа 2026 года", sourceAfterLink: "о правилах с 3 сентября 2026 года. Условия могут измениться; проверяйте актуальное официальное сообщение." },
  final: { eyebrow: "ПОПРОБУЙТЕ TUNEE MUSIC AGENT", title: "Готовы создавать музыку, не думая о лимите скачиваний?", intro: "Начните с бесплатных ежедневных кредитов и скачивайте каждую созданную версию.", benefits: ["Скачивания без ограничений", "Бесплатные ежедневные кредиты", "Коммерческие права в платных тарифах", "Редактирование для подписчиков"] },
  sourceReplacements: { [commonSourceKeys.home]: "Главная", [commonSourceKeys.pricing]: "Тарифы", [commonSourceKeys.howTitle]: "От идеи до готового трека за 3 шага", [commonSourceKeys.step1Title]: "Опишите идею своими словами", [commonSourceKeys.step1Body]: "Сложные промпты не нужны. Общайтесь с Tunee как с продюсером: опишите настроение и инструменты или загрузите референсное видео.", [commonSourceKeys.step1Point1]: "Диалог на естественном языке", [commonSourceKeys.step1Point2]: "Аудио, видео и изображения", [commonSourceKeys.chatHint]: "Опишите настроение — Tunee займётся звучанием", [commonSourceKeys.startCooking]: "Начать создавать", [commonSourceKeys.step2Title]: "Исследуйте творческие направления", [commonSourceKeys.step2Body]: "Tunee не ограничивается одним вариантом. На основе вашей идеи он предлагает разные жанры, настроения и аранжировки.", [commonSourceKeys.step2Point1]: "Несколько вариантов стиля", [commonSourceKeys.step2Point2]: "Разные жанры", [commonSourceKeys.directions]: "+ Выбрать направление", [commonSourceKeys.create]: "СОЗДАТЬ", [commonSourceKeys.step3Title]: "Доработайте и завершите", [commonSourceKeys.step3Body]: "Уточняйте результат с помощью обратной связи, создайте музыкальное видео, разделите стемы для мастеринга и скачайте финальную версию.", [commonSourceKeys.musicVideoGeneration]: "Создание музыкального видео", [commonSourceKeys.smartMastering]: "Умный мастеринг", [commonSourceKeys.stemSeparation]: "Разделение на стемы", [commonSourceKeys.voiceClone]: "Клонирование голоса", [commonSourceKeys.communityTitle]: "Вдохновляйтесь работами сообщества", [commonSourceKeys.communityBody]: "Слушайте треки авторов со всего мира и создавайте следующую композицию.", [commonSourceKeys.footerTagline]: "Создавайте готовую музыку без лишних усилий", [commonSourceKeys.resource]: "Ресурсы", [commonSourceKeys.aboutUs]: "О нас", [commonSourceKeys.customerStories]: "Истории клиентов", [commonSourceKeys.creatorProgram]: "Программа для авторов", [commonSourceKeys.affiliateProgram]: "Партнёрская программа", [commonSourceKeys.events]: "События", [commonSourceKeys.features]: "Возможности", [commonSourceKeys.aiMusicAgent]: "Музыкальный ИИ-агент", [commonSourceKeys.musicGenerator]: "ИИ-генератор музыки", [commonSourceKeys.aiCharacter]: "ИИ-персонаж", [commonSourceKeys.musicVideo]: "Музыкальное видео", [commonSourceKeys.aiDancing]: "ИИ-танцы", [commonSourceKeys.motionControl]: "Управление движением", [commonSourceKeys.models]: "Модели", [commonSourceKeys.policy]: "Документы", [commonSourceKeys.terms]: "Условия использования", [commonSourceKeys.privacy]: "Политика конфиденциальности", [commonSourceKeys.usage]: "Соглашение об использовании контента", [commonSourceKeys.other]: "Другое", [commonSourceKeys.download]: "Скачать", [commonSourceKeys.feedback]: "Обратная связь", [commonSourceKeys.faq]: "Частые вопросы" },
};

const zhCN: SunoAlternativeCopy = {
  lang: "zh-CN",
  metadata: { title: "Suno 替代方案：AI 音乐生成与无限次下载｜Tunee", description: "与 Tunee AI 音乐智能体对话创作原创歌曲，免费和付费用户均可不限次数下载自己生成的每个版本。", keywords: ["Suno 替代方案", "AI 音乐生成", "AI 音乐智能体", "无限次下载", "免费 AI 音乐"] },
  hero: { line1: "Suno 替代方案", line2: "下载不限次数", lead: "通过与 Tunee AI 音乐智能体对话创作原创歌曲，免费和付费用户均可不限次数下载自己生成的每个版本。", primaryCta: "免费试用 Tunee", secondaryCta: "对比下载权限 ↓", microcopy: "无需信用卡 · 生成歌曲会消耗积分", toast: "对话创作你的歌曲！", videoLabel: "Tunee AI 音乐智能体产品演示" },
  benefits: [["∞", "无限次下载", "免费和付费用户均可使用"], ["↓", "下载每个版本", "试听、对比和存档"], ["✓", "商业使用", "付费套餐提供"], ["✦", "高级编辑", "会员可用"]],
  comparison: { eyebrow: "下载权限对比", title: "Tunee vs Suno", intro: "不只比较套餐允许生成多少首歌曲，也要比较创作完成后的下载方式。", rule: "下载规则", tunee: "Tunee", suno: "Suno", rows: [["免费版下载", "不限次数", "终身共 7 次试用下载"], ["付费版下载", "不限次数", "Pro：每月 20 次 · Premier：每月 60 次"], ["之前生成的歌曲", "下载次数不设上限", "9 月 3 日后的下载适用限额"], ["超出限额后", "无需另购下载包", "可以购买额外下载次数"]], exceptionLabel: "重要例外：", exceptionBeforePolicy: "Suno Premier 订阅用户使用 Suno Studio 时可以不限次数下载。Suno 数据依据其针对 2026 年 9 月 3 日公布的", policy: "官方政策", exceptionAfterPolicy: "，后续可能发生变化。" },
  plans: { eyebrow: "套餐权益清晰透明", titleLines: ["下载不限次数，", "需要专业用途时", "再升级。"], intro: "所有套餐均可不限次数下载。免费开始使用核心创作和编辑工具；需要专业制作与发布功能时再升级。", freeLabel: "免费版", freeTitle: "适合创作与探索", memberLabel: "会员版", memberTitle: "适合发布与专业制作", freeFeatures: [{ title: "歌曲下载不限次数", note: "", emphasized: true }, { title: "使用积分生成歌曲", note: "可使用部分音乐模型 · 生成歌曲会消耗积分", emphasized: true }, { title: "编辑歌词、提示词和歌曲详情", note: "", emphasized: true }, { title: "混音与变声", note: "", emphasized: false }, { title: "2 源和 4 源音轨分离", note: "", emphasized: false }, { title: "高级功能各试用 1 次", note: "6 源音轨分离和音频转 MIDI", emphasized: true }], memberFeatures: [{ title: "包含免费版全部功能", note: "", emphasized: true }, { title: "解锁所有音乐模型", note: "", emphasized: true }, { title: "智能母带处理", note: "", emphasized: true }, { title: "6 源音轨分离", note: "", emphasized: false }, { title: "音频转 MIDI", note: "", emphasized: false }, { title: "完整商业使用权", note: "包含版权证书", emphasized: true }] },
  faq: { eyebrow: "常见问题", title: "你可能想知道。", items: [["Tunee 是支持无限次下载的 Suno 替代方案吗？", "是。Tunee 将对话式 AI 音乐创作与不限次数的歌曲下载结合在一起，免费和付费用户均可使用。生成歌曲会消耗积分。"], ["Tunee 免费用户可以下载所有已生成歌曲吗？", "可以。免费用户可以下载自己创作的每个版本，没有每月或终身下载次数限制。免费版下载内容仅供个人使用。"], ["无限次下载是否意味着可以无限免费生成歌曲？", "不是。下载不占用下载额度，但生成音乐会消耗积分。免费账户每天会获得积分，并可使用部分音乐模型。"], ["Tunee 生成的音乐可以商用吗？", "符合条件的付费套餐提供商业使用权和版权证书，具体以 Tunee 当前套餐条款为准。"], ["除商业使用权外，会员还能解锁哪些功能？", "会员可解锁全部音乐模型、智能母带处理、6 源音轨分离、音频转 MIDI，以及免费版全部功能。"], ["Suno 的下载次数数据来自哪里？", ""]], sourceBeforeLink: "对比数据来自", sourceLink: "Suno 于 2026 年 8 月 10 日发布的官方公告", sourceAfterLink: "，其中说明了自 2026 年 9 月 3 日起生效的下载规则。条款可能变化，请查看最新官方公告。" },
  final: { eyebrow: "试用 TUNEE MUSIC AGENT", title: "准备好创作音乐，不再担心下载次数了吗？", intro: "每天都有免费积分。自己生成的每个版本都能下载。", benefits: ["无限次下载", "每日免费积分", "付费套餐提供商业使用权", "会员可用高级编辑"] },
  sourceReplacements: { [commonSourceKeys.home]: "首页", [commonSourceKeys.pricing]: "定价", [commonSourceKeys.howTitle]: "从灵感到成品，3 步完成", [commonSourceKeys.step1Title]: "自然对话，描述你的想法", [commonSourceKeys.step1Body]: "无需编写复杂提示词。像与真人制作人沟通一样与 Tunee 对话：描述氛围与乐器，或上传参考视频。", [commonSourceKeys.step1Point1]: "自然语言对话", [commonSourceKeys.step1Point2]: "多模态输入：音频、视频和图片", [commonSourceKeys.chatHint]: "说出你的感觉，声音交给 Tunee", [commonSourceKeys.startCooking]: "开始创作", [commonSourceKeys.step2Title]: "探索不同创作方向", [commonSourceKeys.step2Body]: "Tunee 不只提供一个结果。它会根据最初的想法推荐多种曲风、氛围和编曲。", [commonSourceKeys.step2Point1]: "多个风格版本", [commonSourceKeys.step2Point2]: "探索不同音乐类型", [commonSourceKeys.directions]: "+ 选择创作方向", [commonSourceKeys.create]: "创作", [commonSourceKeys.step3Title]: "持续调整，完成作品", [commonSourceKeys.step3Body]: "AI 会根据反馈持续优化。满意后，你可以生成音乐视频、分离音轨进行母带处理，并下载最终版本。", [commonSourceKeys.musicVideoGeneration]: "生成音乐视频", [commonSourceKeys.smartMastering]: "智能母带处理", [commonSourceKeys.stemSeparation]: "音轨分离", [commonSourceKeys.voiceClone]: "声音克隆", [commonSourceKeys.communityTitle]: "从社区作品中获取灵感", [commonSourceKeys.communityBody]: "发现全球创作者的歌曲，试听作品并开始创作下一首歌。", [commonSourceKeys.footerTagline]: "轻松完成你的音乐作品", [commonSourceKeys.resource]: "资源", [commonSourceKeys.aboutUs]: "关于我们", [commonSourceKeys.customerStories]: "客户案例", [commonSourceKeys.creatorProgram]: "创作者计划", [commonSourceKeys.affiliateProgram]: "联盟计划", [commonSourceKeys.events]: "活动", [commonSourceKeys.features]: "功能", [commonSourceKeys.aiMusicAgent]: "AI 音乐智能体", [commonSourceKeys.musicGenerator]: "AI 音乐生成器", [commonSourceKeys.aiCharacter]: "AI 角色", [commonSourceKeys.musicVideo]: "音乐视频", [commonSourceKeys.aiDancing]: "AI 舞蹈", [commonSourceKeys.motionControl]: "动作控制", [commonSourceKeys.models]: "模型", [commonSourceKeys.policy]: "政策", [commonSourceKeys.terms]: "使用条款", [commonSourceKeys.privacy]: "隐私政策", [commonSourceKeys.usage]: "内容使用协议", [commonSourceKeys.other]: "其他", [commonSourceKeys.download]: "下载", [commonSourceKeys.feedback]: "意见反馈", [commonSourceKeys.faq]: "常见问题" },
};

const zhHK: SunoAlternativeCopy = {
  lang: "zh-HK",
  metadata: { title: "Suno 替代方案：AI 音樂生成與無限次下載｜Tunee", description: "透過 Tunee AI 音樂助理的對話功能創作歌曲，免費與付費用戶均可不限次數下載每個已生成版本。", keywords: ["Suno 替代方案", "AI 音樂生成", "AI 音樂助理", "無限次下載", "免費 AI 音樂"] },
  hero: { line1: "Suno 替代方案", line2: "下載不限次數", lead: "透過對話與 Tunee AI 音樂助理共同創作原創歌曲；無論使用免費或付費帳號，都能不限次數下載自己建立的每個版本。", primaryCta: "免費試用 Tunee", secondaryCta: "比較下載權限 ↓", microcopy: "不需信用卡 · 生成歌曲會使用點數", toast: "用對話創作你的歌曲！", videoLabel: "Tunee AI 音樂助理產品示範" },
  benefits: [["∞", "無限次下載", "免費與付費用戶皆可使用"], ["↓", "下載每個版本", "試聽、比較與封存"], ["✓", "商業使用", "付費方案提供"], ["✦", "進階編輯", "會員可用"]],
  comparison: { eyebrow: "下載權限比較", title: "Tunee vs Suno", intro: "不只比較方案可生成多少首歌曲，也要比較完成創作後的下載方式。", rule: "下載規則", tunee: "Tunee", suno: "Suno", rows: [["免費方案下載", "不限次數", "終身共 7 次試用下載"], ["付費方案下載", "不限次數", "Pro：每月 20 次 · Premier：每月 60 次"], ["先前建立的歌曲", "下載次數不設上限", "9 月 3 日後的下載適用限制"], ["超出額度後", "不需另購下載套件", "可加購下載次數"]], exceptionLabel: "重要例外：", exceptionBeforePolicy: "Suno Premier 訂閱用戶使用 Suno Studio 時可以不限次數下載。Suno 資料依據其針對 2026 年 9 月 3 日公布的", policy: "官方政策", exceptionAfterPolicy: "，後續可能有所變動。" },
  plans: { eyebrow: "方案權益界線清楚", titleLines: ["下載不限次數，", "需要專業用途時", "再升級。"], intro: "所有方案均可不限次數下載。免費開始使用核心創作與編輯工具；需要專業製作與發佈功能時再升級。", freeLabel: "免費方案", freeTitle: "適合創作與探索", memberLabel: "會員方案", memberTitle: "適合發佈與專業製作", freeFeatures: [{ title: "歌曲下載不限次數", note: "", emphasized: true }, { title: "使用點數生成歌曲", note: "可使用部分音樂模型 · 生成歌曲會使用點數", emphasized: true }, { title: "編輯歌詞、提示詞與歌曲詳細資料", note: "", emphasized: true }, { title: "混音與變聲", note: "", emphasized: false }, { title: "2 軌與 4 軌音源分離", note: "", emphasized: false }, { title: "進階功能各試用 1 次", note: "6 軌音源分離與音訊轉 MIDI", emphasized: true }], memberFeatures: [{ title: "包含免費方案全部功能", note: "", emphasized: true }, { title: "解鎖所有音樂模型", note: "", emphasized: true }, { title: "智慧母帶處理", note: "", emphasized: true }, { title: "6 軌音源分離", note: "", emphasized: false }, { title: "音訊轉 MIDI", note: "", emphasized: false }, { title: "完整商業使用權", note: "包含版權憑證", emphasized: true }] },
  faq: { eyebrow: "常見問題", title: "你可能想知道。", items: [["Tunee 是支援無限次下載的 Suno 替代方案嗎？", "是。Tunee 結合對話式 AI 音樂創作與不限次數的歌曲下載，免費與付費用戶皆可使用。生成歌曲會使用點數。"], ["Tunee 免費用戶可以下載所有已生成的歌曲嗎？", "可以。免費用戶可以下載自己建立的每個版本，沒有每月或終身下載次數限制。免費方案下載的內容僅供個人使用。"], ["無限次下載是否代表可以無限免費生成歌曲？", "不是。下載不占用下載額度，但生成音樂會使用點數。免費帳號每天會獲得點數，並可使用部分音樂模型。"], ["Tunee 生成的音樂可以商業使用嗎？", "符合資格的付費方案提供商業使用權與版權憑證，實際權益以 Tunee 目前的方案條款為準。"], ["除了商業使用權，會員還能解鎖哪些功能？", "會員可解鎖所有音樂模型、智慧母帶處理、6 軌音源分離、音訊轉 MIDI，以及免費方案全部功能。"], ["Suno 的下載次數資料來自哪裡？", ""]], sourceBeforeLink: "比較資料來自", sourceLink: "Suno 在 2026 年 8 月 10 日發佈的官方公告", sourceAfterLink: "，其中說明自 2026 年 9 月 3 日起生效的下載規則。條款可能變動，請查看最新官方公告。" },
  final: { eyebrow: "試用 TUNEE MUSIC AGENT", title: "準備好創作音樂，不再擔心下載次數了嗎？", intro: "每天都有免費點數。自己生成的每個版本都能下載。", benefits: ["無限次下載", "每日免費點數", "付費方案提供商業使用權", "會員可用進階編輯"] },
  sourceReplacements: { [commonSourceKeys.home]: "首頁", [commonSourceKeys.pricing]: "價格方案", [commonSourceKeys.howTitle]: "從靈感到成品，3 個步驟完成", [commonSourceKeys.step1Title]: "自然對話，描述你的想法", [commonSourceKeys.step1Body]: "不需撰寫複雜的提示詞。像與真人製作人溝通一樣和 Tunee 對話：描述氛圍與樂器，或上傳參考影片。", [commonSourceKeys.step1Point1]: "自然語言對話", [commonSourceKeys.step1Point2]: "多模態輸入：音訊、影片與圖片", [commonSourceKeys.chatHint]: "說出你的感覺，聲音交給 Tunee", [commonSourceKeys.startCooking]: "開始創作", [commonSourceKeys.step2Title]: "探索不同創作方向", [commonSourceKeys.step2Body]: "Tunee 不只提供單一結果。它會從最初的想法延伸不同方向，推薦多種曲風、氛圍與編曲。", [commonSourceKeys.step2Point1]: "多種風格版本", [commonSourceKeys.step2Point2]: "探索不同音樂類型", [commonSourceKeys.directions]: "+ 選擇創作方向", [commonSourceKeys.create]: "創作", [commonSourceKeys.step3Title]: "持續調整，完成作品", [commonSourceKeys.step3Body]: "AI 會依照你的回饋持續調整。滿意後，你可以生成音樂影片、分離音軌進行母帶處理，並下載最終版本。", [commonSourceKeys.musicVideoGeneration]: "生成音樂影片", [commonSourceKeys.smartMastering]: "智慧母帶處理", [commonSourceKeys.stemSeparation]: "音軌分離", [commonSourceKeys.voiceClone]: "聲音複製", [commonSourceKeys.communityTitle]: "從社群作品中獲得靈感", [commonSourceKeys.communityBody]: "探索全球創作者的歌曲，試聽作品並開始創作下一首歌。", [commonSourceKeys.footerTagline]: "輕鬆完成你的音樂作品", [commonSourceKeys.resource]: "資源", [commonSourceKeys.aboutUs]: "關於我們", [commonSourceKeys.customerStories]: "客戶案例", [commonSourceKeys.creatorProgram]: "創作者計畫", [commonSourceKeys.affiliateProgram]: "聯盟行銷計畫", [commonSourceKeys.events]: "活動", [commonSourceKeys.features]: "功能", [commonSourceKeys.aiMusicAgent]: "AI 音樂助理", [commonSourceKeys.musicGenerator]: "AI 音樂生成器", [commonSourceKeys.aiCharacter]: "AI 角色", [commonSourceKeys.musicVideo]: "音樂影片", [commonSourceKeys.aiDancing]: "AI 舞蹈", [commonSourceKeys.motionControl]: "動作控制", [commonSourceKeys.models]: "模型", [commonSourceKeys.policy]: "政策", [commonSourceKeys.terms]: "使用條款", [commonSourceKeys.privacy]: "隱私權政策", [commonSourceKeys.usage]: "內容使用協議", [commonSourceKeys.other]: "其他", [commonSourceKeys.download]: "下載", [commonSourceKeys.feedback]: "意見回饋", [commonSourceKeys.faq]: "常見問題" },
};

const planBoundaryCopy: Record<SunoLocale, {
  personalUse: string;
  eligiblePlan: string;
  commercialTitle: string;
  commercialNote: string;
  finalCommercial: string;
}> = {
  en: { personalUse: "Personal use only", eligiblePlan: "On eligible paid plans", commercialTitle: "Commercial use rights", commercialNote: "On eligible paid plans · Includes a copyright certificate", finalCommercial: "Commercial rights on eligible paid plans" },
  ja: { personalUse: "個人利用のみ", eligiblePlan: "対象の有料プランで利用可能", commercialTitle: "商用利用権", commercialNote: "対象の有料プランで提供 · 著作権証明書付き", finalCommercial: "対象の有料プランで商用利用権" },
  es: { personalUse: "Solo para uso personal", eligiblePlan: "En planes de pago elegibles", commercialTitle: "Derechos de uso comercial", commercialNote: "En planes de pago elegibles · Incluye un certificado de copyright", finalCommercial: "Derechos de uso comercial en planes de pago elegibles" },
  pt: { personalUse: "Somente para uso pessoal", eligiblePlan: "Em planos pagos elegíveis", commercialTitle: "Direitos de uso comercial", commercialNote: "Em planos pagos elegíveis · Inclui certificado", finalCommercial: "Direitos comerciais em planos pagos elegíveis" },
  fr: { personalUse: "Pour un usage personnel uniquement", eligiblePlan: "Avec les offres payantes éligibles", commercialTitle: "Droits d’usage commercial", commercialNote: "Avec les offres payantes éligibles · Certificat inclus", finalCommercial: "Droits commerciaux avec les offres payantes éligibles" },
  de: { personalUse: "Nur zur persönlichen Nutzung", eligiblePlan: "In berechtigten Bezahlplänen", commercialTitle: "Kommerzielle Nutzungsrechte", commercialNote: "In berechtigten Bezahlplänen · Mit Urheberrechtszertifikat", finalCommercial: "Kommerzielle Nutzungsrechte in berechtigten Bezahlplänen" },
  it: { personalUse: "Solo per uso personale", eligiblePlan: "Nei piani a pagamento idonei", commercialTitle: "Diritti d’uso commerciale", commercialNote: "Nei piani a pagamento idonei · Certificato incluso", finalCommercial: "Diritti commerciali nei piani a pagamento idonei" },
  ko: { personalUse: "개인 용도로만 사용", eligiblePlan: "대상 유료 플랜에서 제공", commercialTitle: "상업적 이용 권한", commercialNote: "대상 유료 플랜에서 제공 · 저작권 인증서 포함", finalCommercial: "대상 유료 플랜의 상업적 이용 권한" },
  ru: { personalUse: "Только для личного использования", eligiblePlan: "В подходящих платных тарифах", commercialTitle: "Права на коммерческое использование", commercialNote: "В подходящих платных тарифах · Сертификат включён", finalCommercial: "Права на коммерческое использование в подходящих платных тарифах" },
  "zh-CN": { personalUse: "仅供个人使用", eligiblePlan: "符合条件的付费套餐提供", commercialTitle: "商业使用权", commercialNote: "符合条件的付费套餐提供 · 包含版权证书", finalCommercial: "符合条件的付费套餐提供商业使用权" },
  "zh-HK": { personalUse: "只供個人使用", eligiblePlan: "符合資格的付費方案提供", commercialTitle: "商業使用權", commercialNote: "符合資格的付費方案提供 · 包含版權憑證", finalCommercial: "符合資格的付費方案提供商業使用權" },
};

const localeWordingFixes: Partial<Record<SunoLocale, Record<string, string>>> = {
  en: {
    "Free downloads": "Downloads on free plans",
    "Paid downloads": "Downloads on paid plans",
  },
  ja: {
    "クレジットで楽曲を生成": "楽曲生成",
    "制作や公開に必要な専門機能が必要になったら": "制作や公開向けの専門機能が必要になったら",
    "無料ダウンロード": "無料プランのダウンロード",
    "有料ダウンロード": "有料プランのダウンロード",
  },
  de: {
    "Songs mit Credits generieren": "Songs erstellen",
    "Frei herunterladen.": "Unbegrenzt herunterladen.",
    "KLARE PLAN-GRENZEN": "KLARE TARIFGRENZEN",
    "Stem-Trennung in 2 oder 4 Spuren": "2- und 4-Quellen-Stem-Trennung",
    "6-Spur-Stem-Trennung": "6-Quellen-Stem-Trennung",
    "Zugriff auf eine ausgewählte Modellauswahl": "Zugriff auf ausgewählte Musikmodelle",
    "Kostenlose Downloads": "Downloads im Gratis-Tarif",
    "Downloads im Bezahlplan": "Downloads in Bezahl-Tarifen",
  },
  es: {
    "Generación de canciones con créditos": "Generación de canciones",
    "Descarga libremente.": "Descarga sin límites.",
    "Los planes de pago compatibles": "Los planes de pago elegibles",
    "Incluye certificado de derechos": "Incluye un certificado de copyright",
    "Descargas gratuitas": "Descargas en el plan gratis",
    "Descargas de pago": "Descargas en planes de pago",
  },
  pt: {
    "Geração de músicas com créditos": "Geração de músicas",
    "Separação em 2 ou 4 fontes": "Separação em 2 ou 4 stems",
    "Separação em 6 fontes": "Separação em 6 stems",
    "Downloads gratuitos": "Downloads no plano gratuito",
  },
  fr: {
    "Génération musicale avec des crédits": "Génération musicale",
    "Séparation en 2 ou 4 sources": "Séparation en 2 ou 4 pistes",
    "Séparation en 6 sources": "Séparation en 6 pistes",
    "Téléchargements gratuits": "Offre gratuite",
    "Téléchargements payants": "Offres payantes",
    "Téléchargements illimités signifie-t-il génération gratuite illimitée ?": "Les téléchargements illimités signifient-ils que la génération est gratuite et illimitée ?",
  },
  it: {
    "Generazione musicale con crediti": "Generazione musicale",
    "Separazione in 2 o 4 fonti": "Separazione in 2 o 4 stem",
    "Separazione in 6 fonti": "Separazione in 6 stem",
    "Download gratuiti": "Piano gratuito",
    "Download a pagamento": "Piani a pagamento",
  },
  "zh-HK": {
    "使用點數生成歌曲": "生成歌曲",
    "點數": "積分",
    "試聽、比較與封存": "試聽、比較及存檔",
  },
  ko: {
    "크레딧으로 음악 생성": "음악 생성",
    "무료 다운로드": "무료 플랜 다운로드",
    "유료 다운로드": "유료 플랜 다운로드",
  },
  ru: {
    "Создавайте песни за кредиты": "Создание песен",
  },
  "zh-CN": {
    "使用积分生成歌曲": "生成歌曲",
  },
};

function applyLocaleWording(copy: SunoAlternativeCopy): SunoAlternativeCopy {
  const replacements = localeWordingFixes[copy.lang];
  if (!replacements) return copy;
  const serialized = Object.entries(replacements).reduce(
    (value, [source, target]) => value.split(source).join(target),
    JSON.stringify(copy),
  );
  return JSON.parse(serialized) as SunoAlternativeCopy;
}

function enforcePlanBoundaries(copy: SunoAlternativeCopy): SunoAlternativeCopy {
  copy = applyLocaleWording(copy);
  const boundary = planBoundaryCopy[copy.lang];
  const benefits = copy.benefits.map((benefit, index) =>
    index === 2 ? [benefit[0], benefit[1], boundary.eligiblePlan] as [string, string, string] : benefit,
  );
  const freeFeatures = copy.plans.freeFeatures.map((feature, index) =>
    index === 0 ? { ...feature, note: boundary.personalUse } : feature,
  );
  const memberFeatures = copy.plans.memberFeatures.map((feature, index, features) =>
    index === features.length - 1
      ? { ...feature, title: boundary.commercialTitle, note: boundary.commercialNote }
      : feature,
  );
  const finalBenefits = copy.final.benefits.map((benefit, index) =>
    index === 2 ? boundary.finalCommercial : benefit,
  );

  return {
    ...copy,
    benefits,
    plans: { ...copy.plans, freeFeatures, memberFeatures },
    final: { ...copy.final, benefits: finalBenefits },
  };
}

export const sunoAlternativeTranslations: Record<SunoLocale, SunoAlternativeCopy> = {
  en: enforcePlanBoundaries(en),
  ja: enforcePlanBoundaries(ja),
  es: enforcePlanBoundaries(es),
  pt: enforcePlanBoundaries(pt),
  fr: enforcePlanBoundaries(fr),
  de: enforcePlanBoundaries(de),
  it: enforcePlanBoundaries(it),
  ko: enforcePlanBoundaries(ko),
  ru: enforcePlanBoundaries(ru),
  "zh-CN": enforcePlanBoundaries(zhCN),
  "zh-HK": enforcePlanBoundaries(zhHK),
};

export function localizeSourceHtml(html: string, replacements: Record<string, string>) {
  return Object.entries(replacements).reduce(
    (localized, [source, target]) => localized.split(source).join(target),
    html,
  );
}
