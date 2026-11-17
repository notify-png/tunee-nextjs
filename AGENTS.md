# tunee-nextjs

`https://www.tunee.ai/music-generator/<slug>` 的 293 个 SEO 落地页，十一个语言版本。
纯内容站：没有后端、没有用户态，所有页在构建期静态生成（`npm run build` 出 3688 个页）。

选词与建页流程不在这个仓，在 `tunee-seo-pipeline/.claude/skills/`。
本文件只讲**在这个仓里改代码和内容时的硬约束**。

## 结构

```
app/(en)/music-generator/[slug]/    英文页（独立一套，不走 [lang]）
app/[lang]/music-generator/[slug]/  其余十个语言
data/genre-content/*.ts             英文内容，每个 slug 一个文件，是唯一内容源
data/genre-content/i18n/
  helpers.ts                        LangConfig 类型 + buildTranslations + LANDING_SLUGS
  row-labels.ts                     对比表行标签译名表 + ROW_LABEL_LANGS（语言清单的唯一事实来源）
  ui-strings.ts                     模板文案（面包屑、按钮、步骤/FAQ 导语）
  <lang>/config.ts                  该语言的译名表与句式模板
lib/                                路由归一化与 SEO 工具——见「不要碰」
scripts/check-row-labels.mjs        构建前校验，已串进 npm run build
```

**英文页和其他语言是两条独立路由。** 改了 `[lang]` 那条不等于英文页也改了，反之亦然。
十个语言的文案由 `buildTranslations(config, lang)` 用英文内容合成，不是逐页翻译。

## 语言码

```
ja es pt fr de it ko ru zh-CN zh-HK
```

**唯一事实来源是 `row-labels.ts` 的 `ROW_LABEL_LANGS`**，别在别处再硬写一份。

> 2026-11-17 修过一个这样的 bug：`ui-strings.ts` 里日语的键名写成了 `jp`，
> 而全站语言码是 `ja`，于是 `ui["ja"]` 取不到、**所有日文页的模板文案静默回落英文**，
> 348 个页维持了很久没人发现。加语言或加语言相关的表时，照着 `ROW_LABEL_LANGS` 写。

## 动手前必须知道的五个坑

每一条都是线上真实出过的，不是假想。

### 1. `config.names` 按 **slug** 索引，而 slug 不等于显示名

`subgenres[]` 和 `related[]` 里的 `{ name, slug }`，slug 是「点进去看哪个页」、name 是
「这张卡显示什么」，两者常常不是一回事（`alternative` 页有 `{ name: "Shoegaze", slug: "dream-pop" }`）。
直接用 `names[item.slug]` 会把卡片标题换成另一个流派的译名。

判据是**身份匹配**：只有「这个条目的 name 就是目标页的英文 displayName」时才用译名，
否则保留英文原名——英文名看得懂，错名看不出错。`helpers.ts` 里有现成实现，照抄。

### 2. 对比表的行标签是各页自由文本，不是固定几行

`comparison.rows[i][0]` 全站有 489 个不同的标签。译名查 `ROW_LABELS`，查不到就露英文。
**行标签一律用双引号**——`check-row-labels.mjs` 扫不到单引号的，会当成「没有这一行」放过去。

改内容文件新增行标签时，`row-labels.ts` 里要同步补齐十个语言，否则构建失败。
**不要为了过校验去改内容文件里的英文行标签**——英文是对的，缺的是译名。

### 3. 人群页（`category: "creator-type"`）的 name 是介词短语，不是曲风名词

26 个 `for-*` 页，译名形如 es「Para DJs」、de「Für DJs」、ru「Для диджеев」、ja「DJ向け」。
常规模板假设 name 是曲风名词，直接套出来是病句（「Для диджеев музыка」）。

- 标题与正文句式走 `LangConfig.audience`（可选，不填即回落常规模板）
- 句中形态走 `LangConfig.sentenceNames`，**由语言逐条声明，不要用规则去猜**

> 猜过一版：「前两个字符都是大写就当缩写」。驼峰品牌名第二位是小写，判据落空，
> 把 ja「TikTok向け」降成了「tikTok向け」。规则盖不住十个语言的全部译名。

注意 `audience.faqs` 是**整组替换**不是逐条回落，写几条 `FAQPage` 结构化数据就几条。

### 4. 新建页要注册，漏了会构建通过但线上 404

用 `tunee-seo-pipeline` 的 `node src/cli.mjs scaffold <slug>`，它会完成四处注册；
`node src/cli.mjs verify <slug>` 复核。手写内容文件必漏注册。

`LANDING_SLUGS`（`helpers.ts`）决定哪些 slug 进多语言流程，**不在表里的 slug 所有语言都回落英文页**，
在非英语 SERP 里几乎拿不到展示。

### 5. meta description 上限 155，超出会被 `normalizeMetaDescription` 截断并补句号

截断后看起来像完整句子，实际少半句。英文内容文件写 ≤150；各语言的 description 由
`<lang>/config.ts` 的 `seoDesc(name)` 现场拼，**模板空载长度 + 最长译名**要一起算。

## 不要碰

- **`lib/musicRoutes.aliases.mjs` 与 `next.config.mjs`。** slug 归一化分三层语义，
  曾在一次不相关的改动里被静默破坏。涉及重复 slug、301 的问题转开发，别自己改。
- **`hero.badges` 里的数字**（`"15K+ Tracks Created"` 等）全站都是编的，没有数据来源。
  别照抄到新页，也别自己造新的。这件事在等产品拍板。
- **不新增产品事实。** 分辨率、导出格式、生成时长、授权与价格只能从现有页原样搬——
  这些句子进结构化数据，写错就是对外承诺。

## 改完怎么验

`tsc` 通过**不算验证完成**。它只保证类型对，不保证渲染出来的字对。

```bash
npx tsc --noEmit
npm run build          # 串了 check:row-labels，行标签漏配会在构建前失败
```

然后读构建产物，不要读源码自己脑补：

```
.next/server/app/<lang>/music-generator/<slug>.html
.next/server/app/music-generator/<slug>.html     # 英文页在根上，没有 /en 前缀
```

**抽样核对不算核对。** 改动如果涉及一类页（十个语言 × 26 个人群页 = 260 个），
就把这一类的全集代进去跑一遍，而不是挑两三个看着对就收工。
用脚本遍历产物比人眼抽样可靠，也便宜。

对照组同样要看：改人群页就顺手核一个曲风页，确认它一个字没变。

## 开 PR 前

**批量改动（涉及多语言、多页面、或改了 `helpers.ts` / `ui-strings.ts` 这类共用层）
在开 PR 前先做一次独立复查**，复查时不要把自己的结论喂给复查方，只给事实和要查的维度。

> 2026-11-16/17 两次复查分别查出 7 条和 3 条真缺陷，其中一条是复查前
> 「已逐语言核过、一字未变」的改动自己引入的回归。自己核的永远是自己想得到的用例。

PR 描述里写清楚：改了什么、**没做什么**（留给后续的、存量未处理的）、怎么验的（命令与产物原文）。
