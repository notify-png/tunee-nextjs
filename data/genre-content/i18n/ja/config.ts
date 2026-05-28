import type { LangConfig } from "../helpers";
import { slugData } from "./slug-data";

export const config: LangConfig = {
  names: {
    // Genre
    "pop": "ポップ",
    "hip-hop": "ヒップホップ",
    "rock": "ロック",
    "edm": "EDM",
    "country": "カントリー",
    "kpop": "K-Pop",
    "latin": "ラテン",
    "rnb": "R&B",
    "lofi": "Lo-Fi",
    "jazz": "ジャズ",
    "classical": "クラシック",
    "cinematic": "シネマティック",
    "phonk": "フォンク",
    "afrobeats": "アフロビーツ",
    "amapiano": "アマピアノ",
    "synthwave": "シンセウェイヴ",
    "indie-pop": "インディーポップ",
    "ambient": "アンビエント",
    "jpop": "J-Pop",
    "drill": "ドリル",
    "house": "ハウス",
    "metal": "メタル",
    "blues": "ブルース",
    "reggae": "レゲエ",
    "folk": "フォーク",
    "gospel": "ゴスペル",
    "bollywood": "ボリウッド",
    "dubstep": "ダブステップ",
    "trance": "トランス",
    "funk": "ファンク",
    "arabic": "アラビック",
    "hindustani": "ヒンドゥスターニー",
    "celtic": "ケルティック",
    "flamenco": "フラメンコ",
    "vaporwave": "ヴェイパーウェイヴ",
    "hyperpop": "ハイパーポップ",
    // Instrument
    "acoustic-guitar": "アコースティックギター",
    "bagpipes": "バグパイプ",
    "bass": "ベース",
    "cello": "チェロ",
    "drums": "ドラム",
    "electric-guitar": "エレキギター",
    "erhu": "二胡",
    "flute": "フルート",
    "guitar": "ギター",
    "harp": "ハープ",
    "instrumental": "インストゥルメンタル",
    "organ": "オルガン",
    "oud": "ウード",
    "pan-flute": "パンフルート",
    "piano": "ピアノ",
    "saxophone": "サクソフォン",
    "sitar": "シタール",
    "synth": "シンセ",
    "trumpet": "トランペット",
    "ukulele": "ウクレレ",
    "violin": "ヴァイオリン",
    // Mood
    "calm": "穏やか",
    "chillout": "チルアウト",
    "dark": "ダーク",
    "dramatic": "ドラマティック",
    "dreamy": "ドリーミー",
    "energetic": "エナジェティック",
    "epic": "エピック",
    "majestic": "マジェスティック",
    "nostalgic": "ノスタルジック",
    "romantic": "ロマンティック",
    "solemn": "ソレム",
    "triumphant": "トライアンファント",
    // Era
    "60s": "60年代",
    "70s": "70年代",
    "80s": "80年代",
    "90s": "90年代",
    "2000s": "2000年代",
    "2010s": "2010年代",
    // Use Case
    "ads": "広告",
    "background": "BGM",
    "corporate": "コーポレート",
    "film": "映画",
    "gaming": "ゲーム",
    "meditation": "瞑想",
    "podcast": "ポッドキャスト",
    "sleep": "睡眠",
    "streaming": "配信",
    "study": "勉強",
    "tiktok": "TikTok",
    "video": "動画",
    "wedding": "ウェディング",
    "workout": "ワークアウト",
    "youtube": "YouTube",
    // Inspired By
    "cyberpunk": "サイバーパンク",
    "dandd": "D&D",
    "final-fantasy": "Final Fantasy",
    "genshin": "原神",
    "mario": "Mario",
    "minecraft": "Minecraft",
    "persona": "Persona",
    "silent-hill": "Silent Hill",
    "studio-ghibli": "スタジオジブリ",
    "zelda": "Zelda",
  },

  seoTitle: (name) => `${name}系AIミュージックジェネレーター | Tunee`,
  seoDesc: (name) =>
    `${name}の楽曲をAIで簡単に作成。テキストを入力するだけで、高品質な${name}トラックが完成します。無料で今すぐお試しください。`,

  heroTitle: (name) => `${name}の楽曲をAIで作ろう`,
  heroSub: (name) =>
    `テキストを入力するだけで、プロ品質の${name}トラックを数秒で生成。楽器の知識や音楽理論は一切不要です。`,
  badges: ["高音質", "商用利用OK", "無料で開始"],

  dnaTitle: (name) => `${name}のサウンドを分析`,
  dnaSub: (name) =>
    `${name}を構成するリズム・メロディ・サウンドの特徴をAIが分析し、あなたの楽曲に反映します。`,
  dnaSectionTitles: ["リズム & テンポ", "メロディ & ハーモニー", "サウンド & 音色", "制作テクニック"],

  subgenreTitle: (name) => `${name}のサブジャンルを探る`,
  subgenreSub: (name) =>
    `${name}にはさまざまなスタイルが存在します。お好みのサブジャンルを選んで、AIで楽曲を生成しましょう。`,

  comparisonTitle: (name) => `${name}のAI音楽ツールを比較`,
  comparisonSub: (name) =>
    `主要なAI音楽ジェネレーターを比較。${name}の制作にはTuneeが最適な理由をご覧ください。`,
  compFeatureLabel: "機能",
  compRowLabels: ["BPM範囲", "主要楽器", "ムード", "曲の長さ", "複雑さ", "代表的アーティスト"],

  promptTitle: (name) => `${name}のプロンプト例`,
  promptSub: (name) =>
    `以下のプロンプトをコピーして、すぐに${name}の楽曲を生成できます。自由にカスタマイズしてください。`,

  useCaseTitle: (name) => `${name}の活用シーン`,
  useCaseSub: (name) =>
    `AIが生成する${name}の楽曲は、さまざまなシーンで活用できます。`,
  useCases: [
    {
      title: "SNS・ショート動画",
      desc: (name) =>
        `TikTokやInstagram Reelsに最適な${name}のBGMを生成。バズる動画の音楽をAIで手軽に作りましょう。`,
    },
    {
      title: "広告・コマーシャル",
      desc: (name) =>
        `商用利用可能な${name}の楽曲をAIで作成。広告やプロモーション動画に使えるプロ品質のサウンドです。`,
    },
    {
      title: "映画・テレビ",
      desc: (name) =>
        `映像作品にぴったりの${name}のサウンドトラックをAIで制作。シーンの雰囲気に合わせた楽曲を生成します。`,
    },
    {
      title: "ボーカルデモ",
      desc: (name) =>
        `歌詞を乗せるための${name}のトラックをAIで作成。デモ制作やソングライティングの効率が大幅にアップします。`,
    },
    {
      title: "プレイリスト",
      desc: (name) =>
        `SpotifyやApple Music向けに${name}のオリジナル楽曲を量産。AIが多彩なバリエーションを生成します。`,
    },
    {
      title: "ゲーム・アプリ",
      desc: (name) =>
        `ゲームやアプリのBGMに使える${name}の楽曲をAIで生成。ループ対応のサウンドも簡単に作れます。`,
    },
  ],

  faqs: [
    {
      q: (name) => `${name}のAIミュージックジェネレーターとは？`,
      a: (name) =>
        `${name}のAIミュージックジェネレーターは、テキストの指示だけで${name}スタイルの楽曲を自動生成するツールです。AIが${name}の特徴的なリズムやメロディ、音色を学習しており、誰でもプロ品質のトラックを作成できます。`,
    },
    {
      q: (name) => `${name}の楽曲をAIでどうやって作るの？`,
      a: (name) =>
        `簡単です。テキストボックスに「${name}っぽい曲を作って」と入力するか、プロンプト例を参考にして指示を書くだけ。数秒で楽曲が生成されます。テンポやムード、楽器構成などを細かく指定することも可能です。`,
    },
    {
      q: (name) => `生成した${name}の楽曲は商用利用できますか？`,
      a: (name) =>
        `はい、Tuneeで生成した${name}の楽曲は商用利用が可能です。YouTube動画、ポッドキャスト、広告、SNSコンテンツなど、あらゆる用途で自由にお使いいただけます。`,
    },
    {
      q: (name) => `音楽の知識がなくても${name}の曲を作れますか？`,
      a: (name) =>
        `はい、楽器の演奏経験や音楽理論の知識は一切不要です。AIがすべて処理するため、テキストで指示を書くだけで本格的な${name}の楽曲が完成します。`,
    },
    {
      q: (name) => `${name}のAI音楽生成は無料で使えますか？`,
      a: (name) =>
        `はい、Tuneeは無料プランをご用意しています。まずは無料で${name}の楽曲生成をお試しください。より多くの機能やダウンロード回数が必要な場合は、有料プランもございます。`,
    },
  ],

  chatUser: (name) => `${name}っぽい曲を作って`,
  chatAi: (name) =>
    `${name}のトラックを生成しました！ 再生ボタンを押して試聴し、気に入ったらダウンロードしてください。`,

  finalCtaTitle: (name) => `${name}の楽曲を今すぐ作ろう`,
  finalCtaSub: (name) =>
    `AIの力で、あなただけの${name}トラックを数秒で生成。無料で始められます。`,
  finalCtaButton: "無料で始める",
  slugData,
};
