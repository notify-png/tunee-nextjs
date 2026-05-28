import type { GenreData } from "./types";

// ── Genre category (34) ──
import { data as synthwave } from "./synthwave";
import { data as jazz } from "./jazz";
import { data as rock } from "./rock";
import { data as edm } from "./edm";
import { data as hipHop } from "./hip-hop";
import { data as classical } from "./classical";
import { data as lofi } from "./lofi";
import { data as latin } from "./latin";
import { data as rnb } from "./rnb";
import { data as pop } from "./pop";
import { data as country } from "./country";
import { data as folk } from "./folk";
import { data as blues } from "./blues";
import { data as funk } from "./funk";
import { data as soul } from "./soul";
import { data as ambient } from "./ambient";
import { data as metal } from "./metal";
import { data as house } from "./house";
import { data as trance } from "./trance";
import { data as dubstep } from "./dubstep";
import { data as vaporwave } from "./vaporwave";
import { data as reggae } from "./reggae";
import { data as cinematic } from "./cinematic";
import { data as orchestral } from "./orchestral";
import { data as symphony } from "./symphony";
import { data as kPop } from "./k-pop";
import { data as jPop } from "./j-pop";
import { data as arabic } from "./arabic";
import { data as hindustani } from "./hindustani";
import { data as witchHouse } from "./witch-house";
import { data as celtic } from "./celtic";
import { data as flamenco } from "./flamenco";
import { data as african } from "./african";
import { data as worldMusic } from "./world-music";
import { data as kpop } from "./kpop";
import { data as jpop } from "./jpop";
import { data as drill } from "./drill";
import { data as amapiano } from "./amapiano";
import { data as indiePop } from "./indie-pop";
import { data as bollywood } from "./bollywood";
import { data as hyperpop } from "./hyperpop";
import { data as cyberpunk } from "./cyberpunk";
import { data as dandd } from "./dandd";
import { data as finalFantasy } from "./final-fantasy";
import { data as genshin } from "./genshin";
import { data as mario } from "./mario";
import { data as minecraft } from "./minecraft";
import { data as persona } from "./persona";
import { data as silentHill } from "./silent-hill";
import { data as studioGhibli } from "./studio-ghibli";
import { data as zelda } from "./zelda";

// ── Style category (44) ──
import { data as bebop } from "./bebop";
import { data as smoothJazz } from "./smooth-jazz";
import { data as jazzFunk } from "./jazz-funk";
import { data as futureBass } from "./future-bass";
import { data as metalcore } from "./metalcore";
import { data as phonk } from "./phonk";
import { data as chillwave } from "./chillwave";
import { data as futureFunk } from "./future-funk";
import { data as retrowave } from "./retrowave";
import { data as cityPop } from "./city-pop";
import { data as dreamPop } from "./dream-pop";
import { data as mallsoft } from "./mallsoft";
import { data as hypnagogicPop } from "./hypnagogic-pop";
import { data as slushwave } from "./slushwave";
import { data as eccojams } from "./eccojams";
import { data as dreampunk } from "./dreampunk";
import { data as gloFi } from "./glo-fi";
import { data as grunge } from "./grunge";
import { data as baroque } from "./baroque";
import { data as romantic } from "./romantic";
import { data as chamberMusic } from "./chamber-music";
import { data as opera } from "./opera";
import { data as contemporaryClassical } from "./contemporary-classical";
import { data as neoclassical } from "./neoclassical";
import { data as filmScore } from "./film-score";
import { data as gregorianChant } from "./gregorian-chant";
import { data as renaissance } from "./renaissance";
import { data as minimalistClassical } from "./minimalist-classical";
import { data as symphonicMetal } from "./symphonic-metal";
import { data as balkan } from "./balkan";
import { data as nordicFolk } from "./nordic-folk";
import { data as middleEastern } from "./middle-eastern";
import { data as andean } from "./andean";
import { data as gamelan } from "./gamelan";
import { data as bluegrass } from "./bluegrass";
import { data as chineseTraditional } from "./chinese-traditional";
import { data as japaneseTraditional } from "./japanese-traditional";
import { data as salsa } from "./salsa";
import { data as bossaNova } from "./bossa-nova";
import { data as cumbia } from "./cumbia";
import { data as mariachi } from "./mariachi";
import { data as polynesian } from "./polynesian";
import { data as tibetan } from "./tibetan";
import { data as gospel } from "./gospel";

// ── Instrument category (21) ──
import { data as guitar } from "./guitar";
import { data as acousticGuitar } from "./acoustic-guitar";
import { data as electricGuitar } from "./electric-guitar";
import { data as piano } from "./piano";
import { data as bass } from "./bass";
import { data as drums } from "./drums";
import { data as synth } from "./synth";
import { data as saxophone } from "./saxophone";
import { data as violin } from "./violin";
import { data as cello } from "./cello";
import { data as ukulele } from "./ukulele";
import { data as organ } from "./organ";
import { data as flute } from "./flute";
import { data as trumpet } from "./trumpet";
import { data as harp } from "./harp";
import { data as bagpipes } from "./bagpipes";
import { data as sitar } from "./sitar";
import { data as erhu } from "./erhu";
import { data as panFlute } from "./pan-flute";
import { data as oud } from "./oud";
import { data as instrumental } from "./instrumental";

// ── Era category (6) ──
import { data as era60s } from "./60s";
import { data as era70s } from "./70s";
import { data as era80s } from "./80s";
import { data as era90s } from "./90s";
import { data as era2000s } from "./2000s";
import { data as era2010s } from "./2010s";

// ── Mood category (12) ──
import { data as chillout } from "./chillout";
import { data as energetic } from "./energetic";
import { data as calm } from "./calm";
import { data as epic } from "./epic";
import { data as dramatic } from "./dramatic";
import { data as romanticMood } from "./romantic-mood";
import { data as nostalgic } from "./nostalgic";
import { data as dark } from "./dark";
import { data as dreamy } from "./dreamy";
import { data as majestic } from "./majestic";
import { data as solemn } from "./solemn";
import { data as triumphant } from "./triumphant";

// ── Tempo category (7) ──
import { data as slow } from "./slow";
import { data as upbeat } from "./upbeat";
import { data as fast } from "./fast";
import { data as dance } from "./dance";
import { data as adagio } from "./adagio";
import { data as allegro } from "./allegro";
import { data as largo } from "./largo";

// ── Use Case category (15) ──
import { data as background } from "./background";
import { data as video } from "./video";
import { data as podcast } from "./podcast";
import { data as gaming } from "./gaming";
import { data as youtube } from "./youtube";
import { data as tiktok } from "./tiktok";
import { data as ads } from "./ads";
import { data as film } from "./film";
import { data as study } from "./study";
import { data as meditation } from "./meditation";
import { data as sleep } from "./sleep";
import { data as wedding } from "./wedding";
import { data as corporate } from "./corporate";
import { data as streaming } from "./streaming";
import { data as workout } from "./workout";

// ── Production category (9) ──
import { data as lofiProduction } from "./lo-fi-production";
import { data as vintageProduction } from "./vintage-production";
import { data as minimalProduction } from "./minimal-production";
import { data as atmosphericProduction } from "./atmospheric-production";
import { data as polishedProduction } from "./polished-production";
import { data as rawProduction } from "./raw-production";
import { data as acousticProduction } from "./acoustic-production";
import { data as arpeggioProduction } from "./arpeggio-production";
import { data as reverbProduction } from "./reverb-production";

// ── Context category (13) ──
import { data as bossBattleMusic } from "./boss-battle-music";
import { data as rpgMusic } from "./rpg-music";
import { data as jrpgMusic } from "./jrpg-music";
import { data as explorationMusic } from "./exploration-music";
import { data as sciFiHorrorMusic } from "./sci-fi-horror-music";
import { data as openWorldMusic } from "./open-world-music";
import { data as dungeonMusic } from "./dungeon-music";
import { data as menuMusic } from "./menu-music";
import { data as trailerMusic } from "./trailer-music";
import { data as documentaryMusic } from "./documentary-music";
import { data as commercialMusic } from "./commercial-music";
import { data as fantasyMusic } from "./fantasy-music";
import { data as epicOrchestralMusic } from "./epic-orchestral-music";

// ── Form category (9) ──
import { data as aCappella } from "./a-cappella";
import { data as waltz } from "./waltz";
import { data as nocturne } from "./nocturne";
import { data as concerto } from "./concerto";
import { data as overture } from "./overture";
import { data as prelude } from "./prelude";
import { data as sonata } from "./sonata";
import { data as duet } from "./duet";
import { data as quartet } from "./quartet";

// ── Inspired category (10) ──
import { data as zeldaStyle } from "./zelda-style";
import { data as marioStyle } from "./mario-style";
import { data as finalFantasyStyle } from "./final-fantasy-style";
import { data as genshinStyle } from "./genshin-style";
import { data as minecraftStyle } from "./minecraft-style";
import { data as personaStyle } from "./persona-style";
import { data as silentHillStyle } from "./silent-hill-style";
import { data as cyberpunkStyle } from "./cyberpunk-style";
import { data as studioGhibliStyle } from "./studio-ghibli-style";
import { data as dndStyle } from "./dnd-style";

// ── Creator Type category (26) ──
import { data as forContentCreators } from "./for-content-creators";
import { data as forVideoCreators } from "./for-video-creators";
import { data as forVideoEditors } from "./for-video-editors";
import { data as forYoutubers } from "./for-youtubers";
import { data as forTiktokCreators } from "./for-tiktok-creators";
import { data as forPodcasters } from "./for-podcasters";
import { data as forStreamers } from "./for-streamers";
import { data as forGameDevelopers } from "./for-game-developers";
import { data as forIndieGameDevelopers } from "./for-indie-game-developers";
import { data as forFilmmakers } from "./for-filmmakers";
import { data as forAdvertisers } from "./for-advertisers";
import { data as forMarketers } from "./for-marketers";
import { data as forSocialMediaManagers } from "./for-social-media-managers";
import { data as forSmallBusinesses } from "./for-small-businesses";
import { data as forStudents } from "./for-students";
import { data as forTeachers } from "./for-teachers";
import { data as forMusicians } from "./for-musicians";
import { data as forSingers } from "./for-singers";
import { data as forProducers } from "./for-producers";
import { data as forSongwriters } from "./for-songwriters";
import { data as forComposers } from "./for-composers";
import { data as forDjs } from "./for-djs";
import { data as forDancers } from "./for-dancers";
import { data as forMeditationCreators } from "./for-meditation-creators";
import { data as forWeddingCreators } from "./for-wedding-creators";
import { data as forAppDevelopers } from "./for-app-developers";

// ── External slugs (82) ──
import { data as eightBit } from "./8-bit";
import { data as acapella } from "./acapella";
import { data as afrobeats } from "./afrobeats";
import { data as aiMusicAgent } from "./ai-music-agent";
import { data as alternative } from "./alternative";
import { data as analog } from "./analog";
import { data as anime } from "./anime";
import { data as appalachian } from "./appalachian";
import { data as bach } from "./bach";
import { data as ballroom } from "./ballroom";
import { data as beat } from "./beat";
import { data as brass } from "./brass";
import { data as brazilian } from "./brazilian";
import { data as cPop } from "./c-pop";
import { data as chant } from "./chant";
import { data as chiptune } from "./chiptune";
import { data as choir } from "./choir";
import { data as cuban } from "./cuban";
import { data as disco } from "./disco";
import { data as easternEuropean } from "./eastern-european";
import { data as electro } from "./electro";
import { data as electronic } from "./electronic";
import { data as emotional } from "./emotional";
import { data as ethnic } from "./ethnic";
import { data as experimental } from "./experimental";
import { data as glitch } from "./glitch";
import { data as gothic } from "./gothic";
import { data as grime } from "./grime";
import { data as hardBop } from "./hard-bop";
import { data as hardcore } from "./hardcore";
import { data as hawaiian } from "./hawaiian";
import { data as highlife } from "./highlife";
import { data as horror } from "./horror";
import { data as indie } from "./indie";
import { data as indonesian } from "./indonesian";
import { data as industrial } from "./industrial";
import { data as intimate } from "./intimate";
import { data as irish } from "./irish";
import { data as kHipHop } from "./k-hip-hop";
import { data as kRnb } from "./k-rnb";
import { data as koto } from "./koto";
import { data as lute } from "./lute";
import { data as mandopop } from "./mandopop";
import { data as medieval } from "./medieval";
import { data as memphis } from "./memphis";
import { data as mexican } from "./mexican";
import { data as mix } from "./mix";
import { data as modern } from "./modern";
import { data as musicCreation } from "./music-creation";
import { data as nature } from "./nature";
import { data as percussion } from "./percussion";
import { data as professional } from "./professional";
import { data as psychedelic } from "./psychedelic";
import { data as psytrance } from "./psytrance";
import { data as punk } from "./punk";
import { data as rAndB } from "./r-and-b";
import { data as rap } from "./rap";
import { data as reggaeton } from "./reggaeton";
import { data as scottish } from "./scottish";
import { data as shoegaze } from "./shoegaze";
import { data as singerSongwriter } from "./singer-songwriter";
import { data as space } from "./space";
import { data as spiritual } from "./spiritual";
import { data as string_ } from "./string";
import { data as stringQuartet } from "./string-quartet";
import { data as swing } from "./swing";
import { data as techno } from "./techno";
import { data as trap } from "./trap";
import { data as tropical } from "./tropical";
import { data as uiSound } from "./ui-sound";
import { data as urban } from "./urban";
import { data as viral } from "./viral";
import { data as vlog } from "./vlog";
import { data as vocal } from "./vocal";
import { data as warm } from "./warm";
import { data as zen } from "./zen";
import { data as instrumentalLanguage } from "./instrumental-language";
import { data as english } from "./english";
import { data as japaneseL } from "./japanese";
import { data as spanish } from "./spanish";
import { data as korean } from "./korean";
import { data as chinese } from "./chinese";

const registry: Record<string, GenreData> = {
  // Genre (34)
  synthwave, jazz, rock, edm, "hip-hop": hipHop, classical, lofi, latin, rnb,
  pop, country, folk, blues, funk, soul, ambient, metal,
  house, trance, dubstep, vaporwave, reggae, cinematic, orchestral, symphony,
  "k-pop": kPop, "j-pop": jPop, arabic, hindustani,
  "witch-house": witchHouse, celtic, flamenco, african, "world-music": worldMusic,
  kpop, jpop, drill, amapiano, "indie-pop": indiePop, bollywood, hyperpop,
  cyberpunk, dandd, "final-fantasy": finalFantasy, genshin, mario, minecraft,
  persona, "silent-hill": silentHill, "studio-ghibli": studioGhibli, zelda,
  // Style (44)
  bebop, "smooth-jazz": smoothJazz, "jazz-funk": jazzFunk, "future-bass": futureBass,
  metalcore, phonk, chillwave, "future-funk": futureFunk, retrowave,
  "city-pop": cityPop, "dream-pop": dreamPop, mallsoft,
  "hypnagogic-pop": hypnagogicPop, slushwave, eccojams, dreampunk,
  "glo-fi": gloFi, grunge, baroque, romantic, "chamber-music": chamberMusic,
  opera, "contemporary-classical": contemporaryClassical, neoclassical,
  "film-score": filmScore, "gregorian-chant": gregorianChant, renaissance,
  "minimalist-classical": minimalistClassical, "symphonic-metal": symphonicMetal,
  balkan, "nordic-folk": nordicFolk, "middle-eastern": middleEastern,
  andean, gamelan, bluegrass,
  "chinese-traditional": chineseTraditional, "japanese-traditional": japaneseTraditional,
  salsa, "bossa-nova": bossaNova, cumbia, mariachi, polynesian, tibetan, gospel,
  // Instrument (21)
  guitar, "acoustic-guitar": acousticGuitar, "electric-guitar": electricGuitar,
  piano, bass, drums, synth, saxophone, violin, cello, ukulele,
  organ, flute, trumpet, harp, bagpipes, sitar, erhu,
  "pan-flute": panFlute, oud, instrumental,
  // Era (6)
  "60s": era60s, "70s": era70s, "80s": era80s, "90s": era90s, "2000s": era2000s, "2010s": era2010s,
  // Mood (12)
  chillout, energetic, calm, epic, dramatic, "romantic-mood": romanticMood,
  nostalgic, dark, dreamy, majestic, solemn, triumphant,
  // Tempo (7)
  slow, upbeat, fast, dance, adagio, allegro, largo,
  // Use Case (15)
  background, video, podcast, gaming, youtube, tiktok, ads, film,
  study, meditation, sleep, wedding, corporate, streaming, workout,
  // Production (9)
  "lo-fi-production": lofiProduction, "vintage-production": vintageProduction,
  "minimal-production": minimalProduction, "atmospheric-production": atmosphericProduction,
  "polished-production": polishedProduction, "raw-production": rawProduction,
  "acoustic-production": acousticProduction, "arpeggio-production": arpeggioProduction,
  "reverb-production": reverbProduction,
  // Context (13)
  "boss-battle-music": bossBattleMusic, "rpg-music": rpgMusic, "jrpg-music": jrpgMusic,
  "exploration-music": explorationMusic, "sci-fi-horror-music": sciFiHorrorMusic,
  "open-world-music": openWorldMusic, "dungeon-music": dungeonMusic, "menu-music": menuMusic,
  "trailer-music": trailerMusic, "documentary-music": documentaryMusic,
  "commercial-music": commercialMusic, "fantasy-music": fantasyMusic,
  "epic-orchestral-music": epicOrchestralMusic,
  // Form (9)
  "a-cappella": aCappella, waltz, nocturne, concerto, overture, prelude, sonata, duet, quartet,
  // Inspired (10)
  "zelda-style": zeldaStyle, "mario-style": marioStyle, "final-fantasy-style": finalFantasyStyle,
  "genshin-style": genshinStyle, "minecraft-style": minecraftStyle, "persona-style": personaStyle,
  "silent-hill-style": silentHillStyle, "cyberpunk-style": cyberpunkStyle,
  "studio-ghibli-style": studioGhibliStyle, "dnd-style": dndStyle,
  // Creator Type (26)
  "for-content-creators": forContentCreators, "for-video-creators": forVideoCreators,
  "for-video-editors": forVideoEditors, "for-youtubers": forYoutubers,
  "for-tiktok-creators": forTiktokCreators, "for-podcasters": forPodcasters,
  "for-streamers": forStreamers, "for-game-developers": forGameDevelopers,
  "for-indie-game-developers": forIndieGameDevelopers, "for-filmmakers": forFilmmakers,
  "for-advertisers": forAdvertisers, "for-marketers": forMarketers,
  "for-social-media-managers": forSocialMediaManagers, "for-small-businesses": forSmallBusinesses,
  "for-students": forStudents, "for-teachers": forTeachers,
  "for-musicians": forMusicians, "for-singers": forSingers,
  "for-producers": forProducers, "for-songwriters": forSongwriters,
  "for-composers": forComposers, "for-djs": forDjs,
  "for-dancers": forDancers, "for-meditation-creators": forMeditationCreators,
  "for-wedding-creators": forWeddingCreators, "for-app-developers": forAppDevelopers,
  // External (82)
  "8-bit": eightBit, acapella, afrobeats, "ai-music-agent": aiMusicAgent,
  alternative, analog, anime, appalachian, bach, ballroom, beat, brass, brazilian,
  "c-pop": cPop, chant, chiptune, choir, cuban, disco,
  "eastern-european": easternEuropean, electro, electronic, emotional, ethnic,
  experimental, glitch, gothic, grime,
  "hard-bop": hardBop, hardcore, hawaiian, highlife, horror, indie, indonesian,
  industrial, intimate, irish,
  "k-hip-hop": kHipHop, "k-rnb": kRnb, koto, lute,
  mandopop, medieval, memphis, mexican, mix, modern,
  "music-creation": musicCreation, nature, percussion, professional,
  psychedelic, psytrance, punk, "r-and-b": rAndB,
  rap, reggaeton, scottish, shoegaze, "singer-songwriter": singerSongwriter,
  space, spiritual, string: string_, "string-quartet": stringQuartet,
  swing, techno, trap, tropical, "ui-sound": uiSound,
  urban, viral, vlog, vocal, warm, zen,
  "instrumental-language": instrumentalLanguage, english, japanese: japaneseL,
  spanish, korean, chinese,
};

export function getGenreData(slug: string): GenreData | null {
  return registry[slug] ?? null;
}

export function getAllSlugs(): string[] {
  return Object.keys(registry);
}

export function hasGenreData(slug: string): boolean {
  return slug in registry;
}
