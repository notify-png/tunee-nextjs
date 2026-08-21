/** @type {import('next').NextConfig} */
const routeAliases = [
  ["acapella", "a-cappella"],
  ["cyberpunk", "cyberpunk-style"],
  ["dandd", "dnd-style"],
  ["final-fantasy", "final-fantasy-style"],
  ["genshin", "genshin-style"],
  ["jpop", "j-pop"],
  ["kpop", "k-pop"],
  ["mario", "mario-style"],
  ["minecraft", "minecraft-style"],
  ["persona", "persona-style"],
  ["r-and-b", "rnb"],
  ["silent-hill", "silent-hill-style"],
  ["studio-ghibli", "studio-ghibli-style"],
  ["zelda", "zelda-style"],
];

const nextConfig = {
  async redirects() {
    return routeAliases.flatMap(([source, destination]) => [
      {
        source: `/music-generator/${source}`,
        destination: `/music-generator/${destination}`,
        statusCode: 301,
      },
      {
        source: `/:lang/music-generator/${source}`,
        destination: `/:lang/music-generator/${destination}`,
        statusCode: 301,
      },
    ]);
  },
};

export default nextConfig;
