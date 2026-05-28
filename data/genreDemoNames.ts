/**
 * Generates 5 genre-appropriate demo track names for any landing page slug.
 * Uses keyword matching to cover all 198+ pages dynamically.
 */

// Keyword → themed track names (5 each)
const keywordBank: [string[], string[]][] = [
  // Genre
  [["rock"], ["Shattered Riffs", "Voltage Overdrive", "Rebel Highway", "Iron Thunder", "Gravel & Glory"]],
  [["jazz"], ["Blue Note Reverie", "Midnight Sax Session", "Café Swing", "Velvet Improv", "Smoky Ballad No.5"]],
  [["funk"], ["Slap Bass Fever", "Groove Machine", "Disco Strut", "Funky Downtown", "Pocket Rhythm"]],
  [["edm"], ["Neon Drop", "Laser Pulse", "Main Stage Rush", "Synth Overdrive", "Bass Reactor"]],
  [["hip-hop", "hip hop", "trap", "rap"], ["Trap Throne", "Concrete Bars", "808 Bounce", "Street Anthem", "Gold Chain Flow"]],
  [["lofi", "lo-fi"], ["Rainy Café Morning", "Sleepy Tape Loop", "Dusty Vinyl Sunset", "Warm Haze", "Midnight Study"]],
  [["house"], ["Deep Floor Bounce", "Sunrise Set", "Acid Groove", "Ibiza Nights", "Four on the Floor"]],
  [["trance"], ["Euphoria Rising", "Celestial Gate", "Astral Breakdown", "Dream Frequency", "Infinite Horizon"]],
  [["dubstep"], ["Bass Quake", "Wub Storm", "Filthy Drop", "Riddim Shake", "Neon Wobble"]],
  [["synthwave", "retrowave"], ["Neon Cruiser", "Retro Horizon", "Chrome Sunset", "Midnight Driver", "Cyberdream"]],
  [["cinematic", "film-score", "film", "trailer"], ["Dawn of Empires", "The Last Stand", "Echoes of War", "Emotional Overture", "Silent Horizon"]],
  [["ambient"], ["Floating Light", "Deep Stillness", "Cosmic Drift", "Misty Dawn", "Ethereal Hum"]],
  [["classical", "baroque", "romantic", "sonata", "concerto", "prelude", "overture", "nocturne"], ["Sonata in D Minor", "Adagio for Strings", "Waltz of Petals", "Concerto Fantasia", "Moonlit Prelude"]],
  [["orchestral", "orchestra", "symphony"], ["March of Titans", "Elegy for the Fallen", "Overture in G", "Celestial Strings", "Fanfare Royale"]],
  [["k-pop"], ["Neon Heart", "Dance Break", "Sugar Rush", "Idol Anthem", "Glow Up"]],
  [["j-pop", "city-pop"], ["Sakura Beat", "Tokyo Neon", "Summer Festival", "Starlight Idol", "City Pop Drive"]],
  [["folk", "bluegrass", "nordic-folk"], ["Willow Creek", "Mountain Trail", "Harvest Song", "Campfire Tales", "Old Oak Road"]],
  [["metal", "metalcore", "symphonic-metal"], ["Iron Inferno", "Blood & Thunder", "Doom Riff", "Shred Storm", "Hellfire March"]],
  [["blues"], ["Delta Slide", "Whiskey Morning", "Broken String Blues", "Muddy Road", "12-Bar Soul"]],
  [["pop"], ["Golden Hour", "Feel-Good Anthem", "Summer Dreaming", "Heartbeat", "Electric Smile"]],
  [["anime"], ["Hero's Journey", "Sakura Battlefield", "Opening Theme", "Moonlit Duel", "Final Arc"]],
  [["celtic", "bagpipes"], ["Highland Mist", "Emerald Jig", "Ancient Stones", "Loch Melody", "Faerie Reel"]],
  [["flamenco"], ["Sevilla Nights", "Passionate Rasgueado", "Gypsy Fire", "Andalusian Moon", "Tablao Dreams"]],
  [["african"], ["Savanna Groove", "Lagos Nights", "Drum Circle", "Highlife Bounce", "Golden Coast"]],
  [["arabic", "middle-eastern", "oud"], ["Desert Caravan", "Oud Reverie", "Bazaar Nights", "Sahara Wind", "Mystic Chant"]],
  [["reggae"], ["Island Vibes", "One Love Riddim", "Sunset Dub", "Roots & Culture", "Jah Bless"]],
  [["country"], ["Dusty Road", "Pickup Truck", "Honky Tonk Night", "Prairie Wind", "Southern Star"]],
  [["latin", "salsa", "cumbia", "mariachi", "bossa-nova"], ["Salsa Caliente", "Bossa Nova Breeze", "Cumbia Nights", "Reggaeton Fire", "Tropical Beat"]],
  [["vaporwave", "mallsoft", "eccojams", "slushwave", "dreampunk"], ["Mall After Hours", "Neon Plaza", "Digital Memory", "Faded Broadcast", "Sunset Terminal"]],
  [["phonk"], ["Dark Drift", "Cowbell Demon", "Memphis Shadow", "Phonk Phantom", "Night Cruise"]],
  [["chillwave", "glo-fi", "dream-pop"], ["Pastel Waves", "Endless Summer", "Hazy Bloom", "Cassette Dream", "Golden Daze"]],
  [["grunge"], ["Flannel Rage", "Dirty Amp", "Seattle Rain", "Broken Chorus", "Raw Nerve"]],
  [["future-bass", "future-funk"], ["Crystal Drop", "Neon Bounce", "Waveform", "Glitter Slam", "Super Sonic"]],
  [["bebop", "smooth-jazz", "jazz-funk"], ["Bop Session", "Late Night Smooth", "Funky Keys", "Swing Street", "Cool Cat Groove"]],
  [["hypnagogic"], ["Half Asleep", "Dreamscape Loop", "Memory Blur", "Phantom Radio", "Twilight Signal"]],
  [["opera", "gregorian", "renaissance"], ["Aria in Blue", "Sacred Chant", "Cathedral Echo", "Vesper Song", "Gloria"]],
  [["chamber-music", "quartet", "duet"], ["String Quartet No.7", "Evening Serenade", "Intimate Dialogue", "Parlor Suite", "Duo Fantasia"]],
  [["neoclassical", "minimalist-classical", "contemporary-classical"], ["Glass Patterns", "Slow Arc", "Quiet Pulse", "New Elegy", "White Keys"]],
  [["waltz"], ["Vienna Ballroom", "Spinning Petals", "Midnight Waltz", "Snow Dance", "Gilded Steps"]],
  [["a-cappella"], ["Voices Unbound", "Harmony Lane", "Pure Vocal", "Echo Choir", "Breath & Tone"]],
  [["balkan"], ["Balkan Brass Fire", "Gypsy Caravan", "Village Dance", "Mountain Echo", "Wild Hora"]],
  [["gamelan"], ["Temple Bells", "Bronze Cascade", "Island Ceremony", "Rain Dance", "Sacred Gong"]],
  [["chinese-traditional", "erhu"], ["Jade River", "Mountain Mist", "Silk Road", "Spring Blossom", "Moonlit Garden"]],
  [["japanese-traditional"], ["Zen Garden", "Cherry Wind", "Koto Twilight", "Bamboo Rain", "Temple Dawn"]],
  [["polynesian"], ["Ocean Calling", "Island Fire", "Tidal Chant", "Palm Dance", "Coral Sunrise"]],
  [["tibetan"], ["Mountain Mantra", "Singing Bowls", "Prayer Flags", "Himalayan Dawn", "Monastery Bells"]],
  [["sitar", "hindustani"], ["Raga Dawn", "Sitar Cascade", "Monsoon Melody", "Sacred Strings", "Delhi Nights"]],
  [["andean", "pan-flute"], ["Condor Flight", "Highland Wind", "Andean Sunset", "Mountain Spirit", "Valley Echo"]],
  [["gospel"], ["Glory Morning", "Soul Revival", "Praise & Worship", "Sunday Light", "Hallelujah Rise"]],
  [["jrpg"], ["Crystal Kingdom", "Hero's Awakening", "Forgotten Ruins", "Battle of Destiny", "Starlight Village"]],
  [["rpg"], ["Tavern Rest", "Dungeon Descent", "Quest Begin", "Ancient Scroll", "Victory Fanfare"]],
  [["boss-battle"], ["Final Showdown", "Titan Clash", "Dark Lord Rising", "Phase Two", "Wrath Unleashed"]],
  [["exploration"], ["Uncharted Path", "Meadow Breeze", "Distant Horizon", "Curious Footsteps", "Open Sky"]],
  [["sci-fi", "cyberpunk"], ["Neon Grid", "Cyber Chase", "Binary Stars", "Android Heart", "Circuit Pulse"]],
  [["open-world"], ["Vast Plains", "Sunrise Journey", "Wanderlust", "Free Roam", "Endless Road"]],
  [["dungeon"], ["Torch & Shadow", "Stone Corridor", "Hidden Trap", "Echoing Depths", "Crypt Whisper"]],
  [["menu"], ["Title Theme", "Select Screen", "Waiting Room", "Gentle Start", "Lobby Loop"]],
  [["documentary"], ["True Story", "Unfolding Truth", "Human Thread", "Witness", "Time Capsule"]],
  [["commercial", "ads", "corporate"], ["Brand Forward", "Fresh Start", "Bright Path", "Momentum", "Clean Slate"]],
  [["fantasy"], ["Enchanted Forest", "Dragon's Lair", "Elven Song", "Mystic Castle", "Fairy Spring"]],
  [["epic"], ["Rise of Legends", "Battlefield Dawn", "Thunder March", "Glorious Charge", "Eternal Flame"]],
  [["zelda"], ["Hyrule Fields", "Temple of Time", "Hero's Ocarina", "Fairy Fountain", "Lost Woods"]],
  [["mario"], ["Mushroom Kingdom", "Star Power", "Pipe Dream", "Coin Rush", "Rainbow Road"]],
  [["final-fantasy"], ["Crystal Prelude", "Chocobo Ride", "Limit Break", "Balamb Garden", "Victory Theme"]],
  [["genshin"], ["Mondstadt Breeze", "Liyue Harbor", "Inazuma Storm", "Wish Upon Stars", "Sumeru Garden"]],
  [["minecraft"], ["Cave Ambience", "Overworld Dawn", "Redstone Pulse", "Village Bell", "Enderman"]],
  [["persona"], ["Velvet Room", "Phantom Groove", "Last Surprise", "Tokyo Night", "Behind the Mask"]],
  [["silent-hill"], ["Fog Memory", "Rust & Static", "Promise Reprise", "Abandoned Ward", "Crimson Ceremony"]],
  [["studio-ghibli", "ghibli"], ["Spirited Journey", "Hilltop Breeze", "Laputa Sky", "Forest Spirit", "Porco's Flight"]],
  [["dnd", "d&d"], ["Tavern Ballad", "Dragon's Hoard", "Roll for Initiative", "Dungeon Master", "Enchanted Realm"]],
  // Instruments
  [["guitar", "acoustic-guitar", "electric-guitar"], ["String Theory", "Fretboard Stories", "Open Chord Sunset", "Riff & Strum", "Six String Journey"]],
  [["piano"], ["Ivory Lullaby", "Grand Nocturne", "Keys at Dusk", "Soft Pedal", "Recital"]],
  [["bass"], ["Low End Theory", "Groove Line", "Deep Rumble", "Sub Frequency", "Bottom End"]],
  [["drums"], ["Stick & Snare", "Rhythm Engine", "Beat Drop", "Percussive Storm", "Hi-Hat Shuffle"]],
  [["synth"], ["Waveform Dream", "Oscillator", "Patch #42", "Analog Pulse", "Modular Bliss"]],
  [["saxophone", "sax"], ["Alto Breeze", "Tenor Night", "Sax on Fifth", "Golden Reed", "Solo Session"]],
  [["violin"], ["First Chair", "Legato Heart", "Pizzicato Rain", "Bow & String", "Sonata Dusk"]],
  [["cello"], ["Deep Resonance", "Cello Suite No.1", "Warm Bow", "Low Strings", "Amber Tone"]],
  [["ukulele"], ["Island Strum", "Tiny Serenade", "Sunny Chord", "Beach Pluck", "Happy Uke"]],
  [["organ"], ["Cathedral Pipes", "Hammond Groove", "Fugue in G", "Sunday Organ", "Pedal Tone"]],
  [["flute"], ["Silver Wind", "Morning Flute", "Birdsong", "Reed & Air", "Forest Melody"]],
  [["trumpet"], ["Brass Herald", "Jazz Trumpet Call", "Horn of Dawn", "Miles Ahead", "Golden Bell"]],
  [["harp"], ["Angel Strings", "Celestial Pluck", "Glissando Dream", "Harp & Moonlight", "Gentle Cascade"]],
  [["instrumental"], ["No Words Needed", "Pure Melody", "Instrumental Journey", "Sound Canvas", "Untitled Track"]],
  // Mood
  [["chillout", "calm", "relaxing"], ["Calm Waters", "Sunday Drift", "Gentle Breeze", "Still Lake", "Easy Glow"]],
  [["energetic", "upbeat"], ["Full Throttle", "Adrenaline Rush", "Power Surge", "Let's Go", "Electric Energy"]],
  [["dramatic"], ["Plot Twist", "Tension Rising", "Dark Reveal", "Climax", "Before the Storm"]],
  [["romantic"], ["First Dance", "Love Letter", "Candlelight", "Two Hearts", "Eternal Kiss"]],
  [["nostalgic"], ["Faded Photograph", "Childhood Summer", "Old Cassette", "Memory Lane", "Yesterday's Glow"]],
  [["dark"], ["Shadow Crawl", "Midnight Abyss", "Cold Steel", "Black Mirror", "Void"]],
  [["dreamy"], ["Cloud Nine", "Lucid", "Pillow Talk", "Stargazer", "Half Awake"]],
  [["majestic"], ["Royal Procession", "Crown & Throne", "Golden Hall", "Kingdom's Pride", "Noble March"]],
  [["solemn"], ["Requiem", "Farewell", "Ashes & Dust", "Still Waters", "Memorial"]],
  [["triumphant"], ["Victory Lap", "Champion's Return", "Glory Road", "Rise Above", "Standing Tall"]],
  // Use case
  [["background"], ["Subtle Texture", "Room Tone", "Soft Underscore", "Ambient Bed", "Easy Listening"]],
  [["video"], ["Scene Setter", "Visual Flow", "Edit-Ready Beat", "Montage Theme", "Clip Companion"]],
  [["podcast"], ["Intro Vibes", "Talk Show Theme", "Outro Smooth", "Episode Drop", "Podcast Pulse"]],
  [["gaming"], ["Loading Screen", "Power Up", "Game Over", "Level Complete", "Boss Theme"]],
  [["youtube"], ["Vlog Vibes", "Channel Intro", "Subscribe Beat", "Outro Wave", "Trending Sound"]],
  [["tiktok"], ["Viral Hook", "15-Second Fire", "Scroll Stopper", "Trend Audio", "Catchy Loop"]],
  [["study"], ["Focus Zone", "Deep Reading", "Library Hours", "Quiet Mind", "Concentration"]],
  [["meditation"], ["Inner Peace", "Zen Flow", "Breathing Space", "Mindful Moment", "Lotus"]],
  [["sleep"], ["Lullaby Drift", "Moonlight Slumber", "Pillow Clouds", "Deep Sleep", "Night Whisper"]],
  [["wedding"], ["Here Comes Love", "First Dance", "Chapel Bells", "Forever Begins", "Bridal Waltz"]],
  [["workout"], ["Beast Mode", "Pump It Up", "Rep Counter", "Cardio Rush", "Iron Will"]],
  [["streaming"], ["Stream On", "Live Now", "Chat Vibes", "Waiting Screen", "Raid Alert"]],
  // Tempo
  [["slow", "adagio", "largo"], ["Slow Descent", "Gentle Pace", "Breath Between", "Still Motion", "Largo"]],
  [["fast", "allegro"], ["Quick Step", "Lightning Tempo", "Rapid Fire", "Speed Demon", "Allegro Vivace"]],
  [["dance"], ["Move Your Body", "Floor Filler", "Disco Ball", "Get Up", "Dance All Night"]],
  // Production
  [["vintage"], ["Vinyl Crackle", "Tape Hiss", "Analog Warmth", "Old School", "Retro Tone"]],
  [["minimal"], ["Less Is More", "Single Note", "White Space", "Bare Bones", "Clean Line"]],
  [["atmospheric"], ["Fog Layers", "Vast Space", "Echo Chamber", "Reverb Wash", "Horizon Glow"]],
  [["polished"], ["Studio Perfect", "Crystal Clear", "Radio Ready", "Pro Mix", "Hi-Fi"]],
  [["raw"], ["Unfiltered", "Garage Take", "First Pass", "Rough Cut", "Live Wire"]],
  [["acoustic"], ["Unplugged", "Wooden Tone", "Natural Room", "Bare Strings", "Fireside"]],
  [["arpeggio"], ["Rising Pattern", "Cascade Notes", "Arp Sequence", "Climbing Keys", "Loop Ascend"]],
  [["reverb"], ["Hall Echo", "Space Fill", "Wet Signal", "Room Sound", "Distant Tone"]],
  // Creator types
  [["content-creator", "video-creator", "video-editor"], ["Creator's Cut", "Edit Flow", "Content Drop", "Daily Upload", "Render Ready"]],
  [["youtuber"], ["Subscribe Groove", "Like & Share", "Channel Theme", "Outro Beat", "YouTube Ready"]],
  [["tiktok-creator"], ["Hook Line", "Duet Ready", "Sound On", "Viral Potential", "FYP Beat"]],
  [["podcaster"], ["Mic Check", "Episode Theme", "Talking Head", "Guest Intro", "Fade to Close"]],
  [["streamer"], ["Going Live", "Sub Alert", "Bit Sound", "Chill Stream", "Raid Theme"]],
  [["game-developer", "indie-game"], ["Pixel Quest", "Indie Dream", "Dev Build", "Alpha Theme", "Game Jam"]],
  [["filmmaker"], ["Opening Shot", "Scene Score", "Cinéma", "Director's Cut", "End Credits"]],
  [["advertiser", "marketer", "small-business"], ["Brand Anthem", "Campaign Beat", "Ad Spot", "Launch Day", "Bright Sell"]],
  [["social-media"], ["Trend Sound", "Reel Beat", "Story Time", "Swipe Right", "Post Drop"]],
  [["student", "teacher"], ["Study Hall", "Campus Walk", "Lesson Plan", "Lecture Intro", "Graduation"]],
  [["musician", "producer", "songwriter", "composer", "dj"], ["Studio Session", "Demo Reel", "Work in Progress", "Rough Mix", "Final Master"]],
  [["singer"], ["Vocal Warm-Up", "Solo Spotlight", "Voice & Soul", "Harmony Test", "Stage Ready"]],
  [["dancer"], ["Choreography Beat", "Stage Floor", "Move & Groove", "Body Rhythm", "Dance Rehearsal"]],
  [["meditation-creator"], ["Guided Calm", "Breathwork", "Sound Bath", "Inner Journey", "Stillness"]],
  [["wedding-creator"], ["Ceremony Music", "Reception Mix", "Aisle Walk", "Toast Song", "First Dance"]],
  [["app-developer"], ["Notification Tone", "UI Soundscape", "App Launch", "Loading Theme", "In-App Audio"]],
  // Language (catch-all for language pages)
  [["english", "spanish", "french", "german", "italian", "portuguese", "korean", "japanese", "chinese", "hindi", "turkish", "russian", "thai", "vietnamese", "indonesian", "malay", "swahili", "hebrew", "persian", "polish", "dutch", "swedish", "norwegian", "danish", "finnish"], ["Local Flavor", "Native Tongue", "World Voice", "Cultural Beat", "Language Flow"]],
  // Witch house
  [["witch-house"], ["Hex Ritual", "Dark Spell", "Occult Bass", "Coven Beat", "Shadow Glyph"]],
  // World music
  [["world-music"], ["Global Rhythms", "Earth Song", "Crossroads", "Continental", "World Fusion"]],
  // Epic orchestral
  [["epic-orchestral"], ["Titan Symphony", "Grand March", "Valor Rising", "Empire Theme", "Eternal Glory"]],
];

const fallback = ["Electric Storm Anthem", "Midnight Groove", "Neon Pulse", "Velvet Dawn", "Crystal Waves"];

export function getDemoNamesForSlug(slug: string): string[] {
  const normalized = slug.toLowerCase();
  
  // Try exact match first, then partial keyword match
  for (const [keywords, names] of keywordBank) {
    if (keywords.includes(normalized)) return names;
  }
  for (const [keywords, names] of keywordBank) {
    for (const kw of keywords) {
      if (normalized.includes(kw) || kw.includes(normalized)) return names;
    }
  }
  
  return fallback;
}
