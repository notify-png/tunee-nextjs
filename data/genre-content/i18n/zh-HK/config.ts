import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  names: {
    // Genre
    "pop": "流行",
    "hip-hop": "嘻哈",
    "rock": "搖滾",
    "edm": "電子舞曲",
    "country": "鄉村",
    "kpop": "K-Pop",
    "latin": "拉丁",
    "rnb": "R&B",
    "lofi": "Lo-Fi",
    "jazz": "爵士",
    "classical": "古典",
    "cinematic": "電影配樂",
    "phonk": "Phonk",
    "afrobeats": "非洲節拍",
    "amapiano": "Amapiano",
    "synthwave": "合成波",
    "indie-pop": "獨立流行",
    "ambient": "氛圍",
    "jpop": "J-Pop",
    "drill": "Drill",
    "house": "浩室",
    "metal": "金屬",
    "blues": "藍調",
    "reggae": "雷鬼",
    "folk": "民謠",
    "gospel": "福音",
    "bollywood": "寶萊塢",
    "dubstep": "回響貝斯",
    "trance": "迷幻",
    "funk": "放克",
    "arabic": "阿拉伯",
    "hindustani": "印度斯坦",
    "celtic": "凱爾特",
    "flamenco": "佛蘭明哥",
    "vaporwave": "蒸汽波",
    "hyperpop": "超流行",
    // Instrument
    "acoustic-guitar": "木結他",
    "bagpipes": "風笛",
    "bass": "低音結他",
    "cello": "大提琴",
    "drums": "鼓",
    "electric-guitar": "電結他",
    "erhu": "二胡",
    "flute": "長笛",
    "guitar": "結他",
    "harp": "豎琴",
    "instrumental": "純音樂",
    "organ": "管風琴",
    "oud": "烏德琴",
    "pan-flute": "排簫",
    "piano": "鋼琴",
    "saxophone": "色士風",
    "sitar": "西塔爾",
    "synth": "合成器",
    "trumpet": "小號",
    "ukulele": "烏克麗麗",
    "violin": "小提琴",
    // Mood
    "calm": "平靜",
    "chillout": "放鬆",
    "dark": "暗黑",
    "dramatic": "戲劇性",
    "dreamy": "夢幻",
    "energetic": "活力",
    "epic": "史詩",
    "majestic": "莊嚴",
    "nostalgic": "懷舊",
    "romantic": "浪漫",
    "solemn": "莊重",
    "triumphant": "凱旋",
    // Era
    "60s": "60年代",
    "70s": "70年代",
    "80s": "80年代",
    "90s": "90年代",
    "2000s": "2000年代",
    "2010s": "2010年代",
    // Use Case
    "ads": "廣告",
    "background": "背景音樂",
    "corporate": "企業",
    "film": "電影",
    "gaming": "遊戲",
    "meditation": "冥想",
    "podcast": "Podcast",
    "sleep": "睡眠",
    "streaming": "串流",
    "study": "學習",
    "tiktok": "TikTok",
    "video": "影片",
    "wedding": "婚禮",
    "workout": "健身",
    "youtube": "YouTube",
    // Inspired By
    "cyberpunk": "賽博朋克",
    "dandd": "龍與地下城",
    "final-fantasy": "Final Fantasy",
    "genshin": "原神",
    "mario": "瑪利奧",
    "minecraft": "Minecraft",
    "persona": "女神異聞錄",
    "silent-hill": "寂靜嶺",
    "studio-ghibli": "吉卜力工作室",
    "zelda": "薩爾達",
  },

  seoTitle: (name) => `${name}風格 AI 音樂生成器 | Tunee`,
  seoDesc: (name) =>
    `用 AI 輕鬆創作${name}音樂。只需輸入文字描述，即可生成高質素${name}曲目。免費試用，即刻開始。`,

  heroTitle: (name) => `用 AI 創作${name}音樂`,
  heroSub: (name) =>
    `輸入文字描述，幾秒內即可生成專業級${name}曲目。唔需要任何樂器知識或樂理基礎。`,
  badges: ["高音質", "商用授權", "免費開始"],

  dnaTitle: (name) => `拆解${name}嘅音樂元素`,
  dnaSub: (name) =>
    `AI 分析${name}嘅節奏、旋律同音色特徵，幫你嘅作品準確還原風格。`,
  dnaSectionTitles: ["節奏 & 速度", "旋律 & 和聲", "音色 & 質感", "製作技巧"],

  subgenreTitle: (name) => `探索${name}嘅子風格`,
  subgenreSub: (name) =>
    `${name}之下有好多唔同嘅分支風格。揀啱你鍾意嘅子風格，用 AI 即刻生成。`,

  comparisonTitle: (name) => `${name} AI 音樂工具比較`,
  comparisonSub: (name) =>
    `比較主流 AI 音樂生成器，睇吓點解 Tunee 係創作${name}嘅最佳選擇。`,
  compFeatureLabel: "功能",
  compRowLabels: ["BPM範圍", "主要樂器", "氛圍", "歌曲時長", "複雜度", "代表藝術家"],

  promptTitle: (name) => `${name}提示詞範例`,
  promptSub: (name) =>
    `複製以下提示詞，即可生成${name}曲目。你亦可以自由修改，創作你想要嘅風格。`,

  useCaseTitle: (name) => `${name}音樂應用場景`,
  useCaseSub: (name) =>
    `AI 生成嘅${name}音樂可以用喺好多唔同場景，滿足你各種創作需要。`,
  useCases: [
    {
      title: "社交媒體",
      desc: (name) =>
        `為 TikTok、Instagram Reels 等短片生成${name}背景音樂。用 AI 輕鬆整出爆紅影片嘅配樂。`,
    },
    {
      title: "廣告",
      desc: (name) =>
        `用 AI 創作可商用嘅${name}音樂，適合廣告同宣傳片。專業級音質，即整即用。`,
    },
    {
      title: "影視",
      desc: (name) =>
        `為影視作品度身訂造${name}配樂。AI 根據場景氣氛生成最啱嘅音樂。`,
    },
    {
      title: "人聲Demo",
      desc: (name) =>
        `用 AI 生成${name}伴奏，方便填詞同錄製人聲 Demo。大幅提升歌曲創作效率。`,
    },
    {
      title: "歌單",
      desc: (name) =>
        `為 Spotify、Apple Music 等平台批量生成${name}原創曲目。AI 提供多元化風格變化。`,
    },
    {
      title: "遊戲/應用",
      desc: (name) =>
        `為遊戲同應用程式生成${name}背景音樂。支援循環播放，輕鬆整出遊戲 BGM。`,
    },
  ],

  faqs: [
    {
      q: (name) => `咩係${name} AI 音樂生成器？`,
      a: (name) =>
        `${name} AI 音樂生成器係一個用文字指令自動生成${name}風格音樂嘅工具。AI 已經學識${name}嘅節奏、旋律同音色特徵，任何人都可以輕鬆創作出專業級曲目。`,
    },
    {
      q: (name) => `點樣用 AI 創作${name}音樂？`,
      a: (name) =>
        `好簡單。喺文字框輸入「幫我整一首${name}風格嘅歌」，或者參考提示詞範例撰寫指令，幾秒就搞掂。你仲可以指定速度、情緒、樂器編排等細節。`,
    },
    {
      q: (name) => `AI 生成嘅${name}音樂可以商用嗎？`,
      a: (name) =>
        `可以。用 Tunee 生成嘅${name}音樂支援商業用途，包括 YouTube 影片、Podcast、廣告、社交媒體內容等，隨意使用冇限制。`,
    },
    {
      q: (name) => `冇音樂底子都可以整${name}音樂？`,
      a: (name) =>
        `完全冇問題。唔需要識彈樂器或者學過樂理，AI 幫你搞掂曬。你只需要用文字描述你想要嘅音樂，就可以生成出專業嘅${name}曲目。`,
    },
    {
      q: (name) => `${name} AI 音樂生成免費嗎？`,
      a: (name) =>
        `係，Tunee 提供免費計劃，你可以免費試用${name}音樂生成功能。如果需要更多功能同下載次數，亦有付費計劃可以選擇。`,
    },
  ],

  chatUser: (name) => `幫我整一首${name}風格嘅歌`,
  chatAi: (name) =>
    `你嘅${name}曲目已經生成！撳播放掣試聽，鍾意嘅話可以即刻下載。`,

  finalCtaTitle: (name) => `即刻開始創作${name}音樂`,
  finalCtaSub: (name) =>
    `用 AI 幾秒內生成你專屬嘅${name}曲目。免費開始，立即體驗。`,
  finalCtaButton: "免費開始",
  slugData,
};
