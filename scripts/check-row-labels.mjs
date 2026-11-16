#!/usr/bin/env node
/**
 * 校验：每个页面用到的对比表行标签，都在 i18n/row-labels.ts 里配齐了 10 种语言。
 *
 * 为什么要这个：行标签是各页自己写的自由文本，没有固定的六行。漏配一个标签，
 * 那一行在对应语言的页面上就会露出英文；而这种回落不报错、不影响构建，
 * 只能靠人肉发现——2026-11 之前正是这样积下了 1,385 个错标签。
 *
 * 挂在 prebuild 上，所以漏配会在构建前失败，不会悄悄上线。
 *
 * 用法：node scripts/check-row-labels.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_DIR = path.join(ROOT, "data/genre-content");
const TABLE = path.join(CONTENT_DIR, "i18n/row-labels.ts");
/** 从 row-labels.ts 读语言清单，不在这里硬写第二份。 */
function readLangs(src) {
  const m = src.match(/ROW_LABEL_LANGS\s*=\s*\[([\s\S]*?)\]/);
  if (!m) throw new Error("row-labels.ts 里找不到 ROW_LABEL_LANGS");
  return [...m[1].matchAll(/"([\w-]+)"/g)].map((x) => x[1]);
}

/** 扫到的、用单引号写行标签的内容文件。 */
const singleQuoted = [];

/** 从内容文件里取出 comparison.rows 每一行的第一格（行标签）。 */
function labelsInUse() {
  const used = new Map(); // label -> [来源文件]
  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith(".ts") || file === "index.ts") continue;
    const src = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const block = src.match(/comparison:\s*\{[\s\S]*?rows:\s*\[([\s\S]*?)\n {2}\},/);
    if (!block) continue;
    // 单引号写的行标签这里认不出来，会被当作「没有这一行」静默放过——
    // 正是这个脚本要防的那种失败。所以先拦下来，而不是假装没看见。
    if (/\[\s*'/.test(block[1])) {
      singleQuoted.push(file);
    }
    for (const m of block[1].matchAll(/\[\s*"((?:[^"\\]|\\.)*)"/g)) {
      const label = m[1];
      if (!used.has(label)) used.set(label, []);
      used.get(label).push(file);
    }
  }
  return used;
}

/** 从 row-labels.ts 里取出每个标签配了哪些语言。不走 TS 运行时，直接读字面量。 */
function labelsTranslated(src) {
  const table = new Map();
  for (const m of src.matchAll(/\n {2}"((?:[^"\\]|\\.)*)":\s*\{([^}]*)\}/g)) {
    const langs = new Set();
    for (const c of m[2].matchAll(/(?:"([\w-]+)"|(\w+)):\s*"((?:[^"\\]|\\.)*)"/g)) {
      const lang = c[1] ?? c[2];
      if (c[3].trim()) langs.add(lang);
    }
    table.set(m[1], langs);
  }
  return table;
}

const tableSrc = fs.readFileSync(TABLE, "utf8");
const LANGS = readLangs(tableSrc);
const used = labelsInUse();
const table = labelsTranslated(tableSrc);

const missingLabel = [];
const missingLang = [];
for (const [label, files] of used) {
  const langs = table.get(label);
  if (!langs) {
    missingLabel.push([label, files]);
    continue;
  }
  const gaps = LANGS.filter((l) => !langs.has(l));
  if (gaps.length) missingLang.push([label, gaps]);
}

const unusedKeys = [...table.keys()].filter((k) => !used.has(k));

console.log(
  `内容里用到 ${used.size} 个行标签，译名表里有 ${table.size} 个`,
);
if (unusedKeys.length) {
  console.log(`译名表里有 ${unusedKeys.length} 个标签已经没有页面在用（不影响构建，可清理）`);
}

if (!missingLabel.length && !missingLang.length && !singleQuoted.length) {
  console.log(`✓ 全部配齐（${LANGS.length} 种语言）`);
  process.exit(0);
}

if (singleQuoted.length) {
  console.error(
    `\n✗ ${singleQuoted.length} 个内容文件用单引号写了对比表的行标签：`,
  );
  for (const f of singleQuoted) console.error(`  ${f}`);
  console.error(
    "  行标签请一律用双引号——单引号的这里扫不到，会被当成「没有这一行」放过去。",
  );
}

if (missingLabel.length) {
  console.error(`\n✗ ${missingLabel.length} 个标签在 row-labels.ts 里没有条目：`);
  for (const [label, files] of missingLabel) {
    console.error(`  ${JSON.stringify(label)}  ← ${files.slice(0, 3).join(", ")}`);
  }
}
if (missingLang.length) {
  console.error(`\n✗ ${missingLang.length} 个标签缺语言：`);
  for (const [label, gaps] of missingLang) {
    console.error(`  ${JSON.stringify(label)}  缺 ${gaps.join(" ")}`);
  }
}
if (missingLabel.length || missingLang.length) {
  console.error(
    "\n在 data/genre-content/i18n/row-labels.ts 里补齐后重试。" +
      "\n不要为了过校验去改内容文件里的英文行标签——英文是对的，缺的是译名。",
  );
}
process.exit(1);
