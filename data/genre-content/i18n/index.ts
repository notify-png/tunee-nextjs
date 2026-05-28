/* Re-export core API from registry (no circular deps) */
export { registerLang, getI18nGenreData } from "./registry";
export { getSlugPageUI } from "./ui-strings";

/* ── Side-effect imports: populate langRegistries ── */
import "./ja";
import "./es";
import "./pt";
import "./fr";
import "./de";
import "./it";
import "./ko";
import "./ru";
import "./zh-CN";
import "./zh-HK";
