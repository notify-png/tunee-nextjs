#!/usr/bin/env node
/**
 * 校验：category 为 "creator-type" 的页都声明了 sentenceName。
 *
 * 为什么要这个：人群页的 displayName 是介词短语（"For DJs"），模板在句中位置
 * 要的是句中形态（"for DJs"）。没声明时会回落 displayName.toLowerCase()，
 * 拼出 "export your music for djs."、面包屑 "Music Generator for djs"——
 * tsc 不报、构建不拦、线上直接挂。2026-11-17 修这个病句时顺手堵上。
 *
 * 用法：node scripts/check-audience-names.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../data/genre-content");

const missing = [];
let checked = 0;
for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts") continue;
  const src = fs.readFileSync(path.join(DIR, file), "utf8");
  if (!/category:\s*"creator-type"/.test(src)) continue;
  checked++;
  const m = src.match(/\n  sentenceName:\s*"([^"]*)"/);
  if (!m || !m[1].trim()) missing.push(file);
}

console.log(`人群页 ${checked} 个，${checked - missing.length} 个声明了 sentenceName`);
if (!missing.length) {
  console.log("✓ 全部声明");
  process.exit(0);
}
console.error(`\n✗ ${missing.length} 个人群页缺 sentenceName：`);
for (const f of missing) console.error(`  ${f}`);
console.error(
  '\n在该文件的 displayName 下一行补上句中形态，例如 displayName: "For DJs" → sentenceName: "for DJs"。' +
    "\n普通名词小写，品牌与缩写保留大写（for TikTok creators、for YouTubers）。",
);
process.exit(1);
