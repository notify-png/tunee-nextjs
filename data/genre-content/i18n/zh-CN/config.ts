import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  names: {
    // Genre
    "pop": "流行",
    "hip-hop": "嘻哈",
    "rock": "摇滚",
    "edm": "电子舞曲",
    "country": "乡村",
    "kpop": "K-Pop",
    "latin": "拉丁",
    "rnb": "R&B",
    "lofi": "Lo-Fi",
    "jazz": "爵士",
    "classical": "古典",
    "cinematic": "电影配乐",
    "phonk": "Phonk",
    "afrobeats": "非洲节拍",
    "amapiano": "Amapiano",
    "synthwave": "合成波",
    "indie-pop": "独立流行",
    "ambient": "氛围",
    "jpop": "J-Pop",
    "drill": "Drill",
    "house": "浩室",
    "metal": "金属",
    "blues": "蓝调",
    "reggae": "雷鬼",
    "folk": "民谣",
    "gospel": "福音",
    "bollywood": "宝莱坞",
    "dubstep": "回响贝斯",
    "trance": "迷幻",
    "funk": "放克",
    "arabic": "阿拉伯",
    "hindustani": "印度斯坦",
    "celtic": "凯尔特",
    "flamenco": "弗拉门戈",
    "vaporwave": "蒸汽波",
    "hyperpop": "超流行",
    // Instrument
    "acoustic-guitar": "木吉他",
    "bagpipes": "风笛",
    "bass": "贝斯",
    "cello": "大提琴",
    "drums": "鼓",
    "electric-guitar": "电吉他",
    "erhu": "二胡",
    "flute": "长笛",
    "guitar": "吉他",
    "harp": "竖琴",
    "instrumental": "纯音乐",
    "organ": "管风琴",
    "oud": "乌德琴",
    "pan-flute": "排箫",
    "piano": "钢琴",
    "saxophone": "萨克斯",
    "sitar": "西塔尔",
    "synth": "合成器",
    "trumpet": "小号",
    "ukulele": "尤克里里",
    "violin": "小提琴",
    // Mood
    "calm": "平静",
    "chillout": "放松",
    "dark": "暗黑",
    "dramatic": "戏剧性",
    "dreamy": "梦幻",
    "energetic": "活力",
    "epic": "史诗",
    "majestic": "庄严",
    "nostalgic": "怀旧",
    "romantic": "浪漫",
    "solemn": "庄重",
    "triumphant": "凯旋",
    // Era
    "60s": "60年代",
    "70s": "70年代",
    "80s": "80年代",
    "90s": "90年代",
    "2000s": "2000年代",
    "2010s": "2010年代",
    // Use Case
    "ads": "广告",
    "background": "背景音乐",
    "corporate": "企业",
    "film": "电影",
    "gaming": "游戏",
    "meditation": "冥想",
    "podcast": "播客",
    "sleep": "睡眠",
    "streaming": "直播",
    "study": "学习",
    "tiktok": "TikTok",
    "video": "视频",
    "wedding": "婚礼",
    "workout": "健身",
    "youtube": "YouTube",
    // Inspired By
    "cyberpunk": "赛博朋克",
    "dandd": "龙与地下城",
    "final-fantasy": "最终幻想",
    "genshin": "原神",
    "mario": "马里奥",
    "minecraft": "我的世界",
    "persona": "女神异闻录",
    "silent-hill": "寂静岭",
    "studio-ghibli": "吉卜力工作室",
    "zelda": "塞尔达",
  },

  seoTitle: (name) => `${name}风格AI音乐生成器 | Tunee`,
  seoDesc: (name) =>
    `用AI轻松生成${name}音乐，输入文字描述即可获得高品质${name}曲目。免费在线使用，无需任何音乐基础。`,

  heroTitle: (name) => `用AI生成${name}音乐`,
  heroSub: (name) =>
    `只需输入一段文字描述，几秒内就能生成专业级${name}曲目。不需要乐理知识，不需要乐器，开口就能做音乐。`,
  badges: ["高品质音频", "可商用", "免费开始"],

  dnaTitle: (name) => `拆解${name}的声音基因`,
  dnaSub: (name) =>
    `AI深度分析${name}的节奏、旋律和音色特征，把这些元素融入你的作品中。`,
  dnaSectionTitles: ["节奏 & 速度", "旋律 & 和声", "音色 & 质感", "制作技巧"],

  subgenreTitle: (name) => `探索${name}的子风格`,
  subgenreSub: (name) =>
    `${name}有很多不同的分支风格，选一个你喜欢的方向，让AI帮你生成对应的音乐。`,

  comparisonTitle: (name) => `${name}AI音乐工具对比`,
  comparisonSub: (name) =>
    `市面上的AI音乐生成器这么多，为什么做${name}要选Tunee？看完对比你就知道了。`,
  compFeatureLabel: "功能",
  compRowLabels: ["BPM范围", "主要乐器", "氛围", "歌曲时长", "复杂度", "代表艺术家"],

  promptTitle: (name) => `${name}提示词示例`,
  promptSub: (name) =>
    `复制下面的提示词，马上就能生成${name}音乐。你也可以根据自己的想法随意修改。`,

  useCaseTitle: (name) => `${name}音乐的使用场景`,
  useCaseSub: (name) =>
    `AI生成的${name}音乐用途超广，下面这些场景都能用得上。`,
  useCases: [
    {
      title: "社交媒体",
      desc: (name) =>
        `给抖音、小红书、Instagram短视频配上${name}风格的BGM，让你的内容更抓耳，轻松涨流量。`,
    },
    {
      title: "广告",
      desc: (name) =>
        `用AI快速生成可商用的${name}音乐，适合品牌广告、产品宣传片等各类商业场景。`,
    },
    {
      title: "影视",
      desc: (name) =>
        `为短片、纪录片或影视作品制作${name}风格的原创配乐，AI根据画面氛围精准匹配音乐情绪。`,
    },
    {
      title: "人声小样",
      desc: (name) =>
        `用AI生成${name}风格的伴奏，快速出demo、写歌词，大幅提升创作效率。`,
    },
    {
      title: "歌单",
      desc: (name) =>
        `批量生成${name}风格的原创曲目，轻松打造你自己的Spotify或Apple Music歌单。`,
    },
    {
      title: "游戏/应用",
      desc: (name) =>
        `为游戏和应用生成${name}风格的背景音乐，支持无缝循环播放，开发者必备。`,
    },
  ],

  faqs: [
    {
      q: (name) => `什么是${name}AI音乐生成器？`,
      a: (name) =>
        `${name}AI音乐生成器是一款通过文字描述自动创作${name}风格音乐的工具。AI已经学习了${name}的核心节奏、旋律和音色特征，任何人都能用它生成专业水准的音乐作品。`,
    },
    {
      q: (name) => `怎么用AI生成${name}音乐？`,
      a: (name) =>
        `超简单。在输入框里写上你想要的效果，比如"来一首${name}风格的曲子"，也可以参考页面上的提示词示例。几秒钟就能出结果，还能自定义速度、情绪、乐器等细节。`,
    },
    {
      q: (name) => `生成的${name}音乐可以商用吗？`,
      a: (name) =>
        `可以。用Tunee生成的${name}音乐支持商用，YouTube视频、播客、广告、社交媒体内容等场景都能放心使用。`,
    },
    {
      q: (name) => `不懂音乐也能做${name}曲子吗？`,
      a: (name) =>
        `完全没问题。不需要会乐器，也不需要懂乐理，AI会处理所有技术层面的事情。你只要用文字描述你想要的感觉，就能得到一首完整的${name}作品。`,
    },
    {
      q: (name) => `${name}AI音乐生成器是免费的吗？`,
      a: (name) =>
        `Tunee提供免费套餐，你可以直接体验${name}音乐生成功能。如果需要更多生成次数和高级功能，也有付费套餐可选。`,
    },
  ],

  chatUser: (name) => `帮我做一首${name}风格的曲子`,
  chatAi: (name) =>
    `你的${name}曲目已经生成好了！点击播放试听，喜欢的话可以直接下载。`,

  finalCtaTitle: (name) => `现在就开始创作${name}音乐`,
  finalCtaSub: (name) =>
    `用AI几秒生成你的专属${name}曲目，免费上手，马上试试。`,
  finalCtaButton: "免费开始创作",
  slugData,
};
