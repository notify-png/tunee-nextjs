import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  names: {
    // Genre
    "pop": "팝",
    "hip-hop": "힙합",
    "rock": "록",
    "edm": "EDM",
    "country": "컨트리",
    "kpop": "K-Pop",
    "latin": "라틴",
    "rnb": "R&B",
    "lofi": "로파이",
    "jazz": "재즈",
    "classical": "클래식",
    "cinematic": "시네마틱",
    "phonk": "퐁크",
    "afrobeats": "아프로비츠",
    "amapiano": "아마피아노",
    "synthwave": "신스웨이브",
    "indie-pop": "인디 팝",
    "ambient": "앰비언트",
    "jpop": "J-Pop",
    "drill": "드릴",
    "house": "하우스",
    "metal": "메탈",
    "blues": "블루스",
    "reggae": "레게",
    "folk": "포크",
    "gospel": "가스펠",
    "bollywood": "볼리우드",
    "dubstep": "덥스텝",
    "trance": "트랜스",
    "funk": "펑크",
    "arabic": "아랍",
    "hindustani": "힌두스타니",
    "celtic": "켈틱",
    "flamenco": "플라멩코",
    "vaporwave": "베이퍼웨이브",
    "hyperpop": "하이퍼팝",
    // Instrument
    "acoustic-guitar": "어쿠스틱 기타",
    "bagpipes": "백파이프",
    "bass": "베이스",
    "cello": "첼로",
    "drums": "드럼",
    "electric-guitar": "일렉트릭 기타",
    "erhu": "얼후",
    "flute": "플루트",
    "guitar": "기타",
    "harp": "하프",
    "instrumental": "인스트루멘탈",
    "organ": "오르간",
    "oud": "우드",
    "pan-flute": "팬플루트",
    "piano": "피아노",
    "saxophone": "색소폰",
    "sitar": "시타르",
    "synth": "신스",
    "trumpet": "트럼펫",
    "ukulele": "우쿨렐레",
    "violin": "바이올린",
    // Mood
    "calm": "차분한",
    "chillout": "칠아웃",
    "dark": "다크",
    "dramatic": "드라마틱",
    "dreamy": "몽환적인",
    "energetic": "에너지틱",
    "epic": "에픽",
    "majestic": "장엄한",
    "nostalgic": "향수적인",
    "romantic": "로맨틱",
    "solemn": "엄숙한",
    "triumphant": "승리의",
    // Era
    "60s": "60년대",
    "70s": "70년대",
    "80s": "80년대",
    "90s": "90년대",
    "2000s": "2000년대",
    "2010s": "2010년대",
    // Use Case
    "ads": "광고",
    "background": "배경음악",
    "corporate": "기업",
    "film": "영화",
    "gaming": "게이밍",
    "meditation": "명상",
    "podcast": "팟캐스트",
    "sleep": "수면",
    "streaming": "스트리밍",
    "study": "공부",
    "tiktok": "TikTok",
    "video": "영상",
    "wedding": "웨딩",
    "workout": "운동",
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

  seoTitle: (name) => `${name} AI 음악 생성기 | Tunee`,
  seoDesc: (name) =>
    `${name} 음악을 AI로 간편하게 만들어 보세요. 텍스트만 입력하면 고품질 ${name} 트랙이 완성됩니다. 지금 무료로 시작하세요.`,

  heroTitle: (name) => `${name} 음악을 AI로 만들어 보세요`,
  heroSub: (name) =>
    `텍스트 한 줄이면 프로 수준의 ${name} 트랙을 몇 초 만에 생성할 수 있습니다. 악기 연주나 음악 이론 지식은 전혀 필요 없습니다.`,
  badges: ["고음질", "상업적 이용 가능", "무료 시작"],

  dnaTitle: (name) => `${name} 사운드 분석`,
  dnaSub: (name) =>
    `${name}을 구성하는 리듬, 멜로디, 사운드의 특징을 AI가 분석하여 여러분의 음악에 반영합니다.`,
  dnaSectionTitles: ["리듬 & 템포", "멜로디 & 하모니", "사운드 & 음색", "프로덕션 기법"],

  subgenreTitle: (name) => `${name}의 서브장르 탐색`,
  subgenreSub: (name) =>
    `${name}에는 다양한 스타일이 존재합니다. 원하는 서브장르를 선택하고 AI로 음악을 생성해 보세요.`,

  comparisonTitle: (name) => `${name} AI 음악 도구 비교`,
  comparisonSub: (name) =>
    `주요 AI 음악 생성기를 비교해 보세요. ${name} 제작에 Tunee가 최적인 이유를 확인하실 수 있습니다.`,
  compFeatureLabel: "기능",
  compRowLabels: ["BPM 범위", "주요 악기", "분위기", "곡 길이", "복잡도", "대표 아티스트"],

  promptTitle: (name) => `${name} 프롬프트 예시`,
  promptSub: (name) =>
    `아래 프롬프트를 복사해서 바로 ${name} 음악을 생성해 보세요. 자유롭게 수정하셔도 됩니다.`,

  useCaseTitle: (name) => `${name} 활용 사례`,
  useCaseSub: (name) =>
    `AI로 생성한 ${name} 음악은 다양한 상황에서 활용할 수 있습니다.`,
  useCases: [
    {
      title: "SNS & 숏폼 영상",
      desc: (name) =>
        `TikTok, Instagram Reels에 딱 맞는 ${name} BGM을 생성하세요. 바이럴 영상에 어울리는 음악을 AI로 손쉽게 만들 수 있습니다.`,
    },
    {
      title: "광고 & 프로모션",
      desc: (name) =>
        `상업적으로 사용 가능한 ${name} 음악을 AI로 제작하세요. 광고, 프로모션 영상에 바로 활용할 수 있는 프로 품질 사운드입니다.`,
    },
    {
      title: "영화 & 영상",
      desc: (name) =>
        `영상 작품에 어울리는 ${name} 사운드트랙을 AI로 제작하세요. 장면의 분위기에 맞는 음악을 생성합니다.`,
    },
    {
      title: "보컬 데모",
      desc: (name) =>
        `가사를 올릴 ${name} 트랙을 AI로 만들어 보세요. 데모 제작과 작곡 작업의 효율이 크게 향상됩니다.`,
    },
    {
      title: "플레이리스트",
      desc: (name) =>
        `Spotify, Apple Music용 ${name} 오리지널 음악을 대량으로 생성하세요. AI가 다채로운 변주를 만들어 드립니다.`,
    },
    {
      title: "게임 & 앱",
      desc: (name) =>
        `게임이나 앱 BGM으로 활용할 수 있는 ${name} 음악을 AI로 생성하세요. 루프 대응 사운드도 간편하게 제작 가능합니다.`,
    },
  ],

  faqs: [
    {
      q: (name) => `${name} AI 음악 생성기란 무엇인가요?`,
      a: (name) =>
        `${name} AI 음악 생성기는 텍스트 지시만으로 ${name} 스타일의 음악을 자동으로 만들어 주는 도구입니다. AI가 ${name} 특유의 리듬, 멜로디, 음색을 학습하고 있어 누구나 프로 수준의 트랙을 제작할 수 있습니다.`,
    },
    {
      q: (name) => `${name} 음악을 AI로 어떻게 만드나요?`,
      a: (name) =>
        `아주 간단합니다. 텍스트 입력란에 "${name} 스타일 음악 만들어 줘"라고 입력하거나, 프롬프트 예시를 참고해서 지시를 작성하세요. 몇 초 안에 음악이 생성됩니다. 템포, 분위기, 악기 구성 등을 세밀하게 지정하는 것도 가능합니다.`,
    },
    {
      q: (name) => `생성한 ${name} 음악을 상업적으로 사용할 수 있나요?`,
      a: (name) =>
        `네, Tunee에서 생성한 ${name} 음악은 상업적 이용이 가능합니다. YouTube 영상, 팟캐스트, 광고, SNS 콘텐츠 등 모든 용도에 자유롭게 사용하실 수 있습니다.`,
    },
    {
      q: (name) => `음악 지식이 없어도 ${name} 음악을 만들 수 있나요?`,
      a: (name) =>
        `네, 악기 연주 경험이나 음악 이론 지식은 전혀 필요 없습니다. AI가 모든 과정을 처리하므로 텍스트로 지시만 작성하면 본격적인 ${name} 음악이 완성됩니다.`,
    },
    {
      q: (name) => `${name} AI 음악 생성은 무료로 이용할 수 있나요?`,
      a: (name) =>
        `네, Tunee는 무료 플랜을 제공하고 있습니다. 먼저 무료로 ${name} 음악 생성을 체험해 보세요. 더 많은 기능이나 다운로드 횟수가 필요하시면 유료 플랜도 준비되어 있습니다.`,
    },
  ],

  chatUser: (name) => `${name} 스타일 음악 만들어 줘`,
  chatAi: (name) =>
    `${name} 트랙이 생성되었습니다! 재생 버튼을 눌러 들어보시고, 마음에 드시면 다운로드하세요.`,

  finalCtaTitle: (name) => `${name} 음악을 지금 바로 만들어 보세요`,
  finalCtaSub: (name) =>
    `AI의 힘으로 나만의 ${name} 트랙을 몇 초 만에 생성하세요. 무료로 시작할 수 있습니다.`,
  finalCtaButton: "무료로 시작하기",
  slugData,
};
