const MUSIC_SLUG_ALIASES: Record<string, string> = {
  acapella: "a-cappella",
  cyberpunk: "cyberpunk-style",
  dandd: "dnd-style",
  "final-fantasy": "final-fantasy-style",
  genshin: "genshin-style",
  jpop: "j-pop",
  kpop: "k-pop",
  mario: "mario-style",
  minecraft: "minecraft-style",
  persona: "persona-style",
  "r-and-b": "rnb",
  "silent-hill": "silent-hill-style",
  "studio-ghibli": "studio-ghibli-style",
  zelda: "zelda-style",
};

export function canonicalMusicSlug(slug: string): string {
  return MUSIC_SLUG_ALIASES[slug] ?? slug;
}
