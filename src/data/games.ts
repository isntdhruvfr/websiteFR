export interface GamePrice {
  store: 'steam' | 'epic' | 'playstation' | 'xbox';
  storeName: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  url: string;
}

export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Character {
  name: string;
  role: string;
  description: string;
}

export interface Game {
  id: string;
  title: string;
  slug: string;
  developer: string;
  publisher: string;
  releaseYear: number;
  genres: string[];
  platforms: ('PC' | 'PS5' | 'PS4' | 'Xbox Series X' | 'Xbox One' | 'Switch')[];
  esrbRating: 'E' | 'E10+' | 'T' | 'M' | 'AO';
  rating: number;
  coverImage: string;
  bannerImage: string;
  screenshots: string[];
  trailerUrl: string;
  description: string;
  story: string;
  features: string[];
  characters: Character[];
  minimumRequirements: SystemRequirements;
  recommendedRequirements: SystemRequirements;
  prices: GamePrice[];
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Grand Theft Auto V',
    slug: 'gta-v',
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    releaseYear: 2013,
    genres: ['Action', 'Adventure', 'Open World'],
    platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X', 'Xbox One'],
    esrbRating: 'M',
    rating: 9.5,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    description: 'Grand Theft Auto V is an action-adventure game set in the sprawling city of Los Santos and its surrounding areas. Experience the interwoven stories of three distinct criminals as they commit daring heists.',
    story: 'When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive.',
    features: [
      'Massive open world to explore',
      'Three playable protagonists',
      'GTA Online multiplayer mode',
      'Extensive vehicle customization',
      'Dynamic weather and day/night cycle',
    ],
    characters: [
      { name: 'Michael De Santa', role: 'Protagonist', description: 'A retired bank robber living under witness protection.' },
      { name: 'Trevor Philips', role: 'Protagonist', description: 'A volatile career criminal and former military pilot.' },
      { name: 'Franklin Clinton', role: 'Protagonist', description: 'A young street hustler looking for real opportunities.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5 3470',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 660 2GB',
      storage: '72 GB available space',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7 4770',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GTX 1060 6GB',
      storage: '72 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 29.99, currentPrice: 14.99, discount: 50, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 29.99, currentPrice: 19.99, discount: 33, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 39.99, currentPrice: 19.99, discount: 50, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 39.99, currentPrice: 24.99, discount: 38, url: '#' },
    ],
  },
  {
    id: '2',
    title: 'God of War Ragnarök',
    slug: 'god-of-war-ragnarok',
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment',
    releaseYear: 2022,
    genres: ['Action', 'Adventure', 'RPG'],
    platforms: ['PC', 'PS5', 'PS4'],
    esrbRating: 'M',
    rating: 9.7,
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0e?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/EE-4GvjKcfs',
    description: 'Embark on an epic journey as Kratos and Atreus struggle with holding on and letting go. Witness their emotional journey unfold as they face the threat of Ragnarök.',
    story: 'Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    features: [
      'Explore all Nine Realms',
      'Epic boss battles',
      'Deep combat system with upgrades',
      'Companion-based gameplay with Atreus',
      'Rich Norse mythology storytelling',
    ],
    characters: [
      { name: 'Kratos', role: 'Protagonist', description: 'The Ghost of Sparta, now living in the realm of Norse gods.' },
      { name: 'Atreus', role: 'Protagonist', description: 'Son of Kratos, discovering his true identity as Loki.' },
      { name: 'Thor', role: 'Antagonist', description: 'The Norse God of Thunder, seeking vengeance.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-4670K',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 1060 6GB',
      storage: '90 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3060',
      storage: '90 GB NVMe SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 44.99, discount: 25, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 59.99, currentPrice: 47.99, discount: 20, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 69.99, currentPrice: 49.99, discount: 29, url: '#' },
    ],
  },
  {
    id: '3',
    title: 'Red Dead Redemption 2',
    slug: 'red-dead-redemption-2',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    releaseYear: 2018,
    genres: ['Action', 'Adventure', 'Western'],
    platforms: ['PC', 'PS4', 'Xbox One'],
    esrbRating: 'M',
    rating: 9.8,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1496850574977-a4607106a874?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
    description: 'America, 1899. The end of the Wild West era has begun. After a robbery goes wrong, Arthur Morgan and the Van der Linde gang are forced to flee.',
    story: 'With federal agents and bounty hunters massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America to survive.',
    features: [
      'Vast open world with incredible detail',
      'Deep honor system affecting gameplay',
      'Realistic hunting and fishing',
      'Red Dead Online multiplayer',
      'Cinematic storytelling',
    ],
    characters: [
      { name: 'Arthur Morgan', role: 'Protagonist', description: 'A senior member of the Van der Linde gang.' },
      { name: 'Dutch van der Linde', role: 'Gang Leader', description: 'Charismatic leader of the outlaw gang.' },
      { name: 'John Marston', role: 'Gang Member', description: 'A fellow outlaw and future protagonist.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-2500K',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 770 2GB',
      storage: '150 GB available space',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-4770K',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GTX 1060 6GB',
      storage: '150 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 23.99, discount: 60, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 59.99, currentPrice: 29.99, discount: 50, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 59.99, currentPrice: 29.99, discount: 50, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 59.99, currentPrice: 29.99, discount: 50, url: '#' },
    ],
  },
  {
    id: '4',
    title: 'Cyberpunk 2077',
    slug: 'cyberpunk-2077',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    releaseYear: 2020,
    genres: ['RPG', 'Action', 'Open World'],
    platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X', 'Xbox One'],
    esrbRating: 'M',
    rating: 8.5,
    coverImage: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.',
    story: 'Become V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. Customize your character, cyberware, skillset, and playstyle to take on the city.',
    features: [
      'Deep character customization',
      'Branching storylines',
      'Massive open world Night City',
      'Cyberware upgrades and abilities',
      'Vehicle combat and exploration',
    ],
    characters: [
      { name: 'V', role: 'Protagonist', description: 'A customizable mercenary seeking fame in Night City.' },
      { name: 'Johnny Silverhand', role: 'Digital Ghost', description: 'A legendary rockerboy living in V\'s mind.' },
      { name: 'Panam Palmer', role: 'Ally', description: 'A nomad and potential romance option.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-3570K',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '70 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-4790',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 2060',
      storage: '70 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 29.99, discount: 50, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 59.99, currentPrice: 29.99, discount: 50, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 59.99, currentPrice: 34.99, discount: 42, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 59.99, currentPrice: 34.99, discount: 42, url: '#' },
    ],
  },
  {
    id: '5',
    title: 'Elden Ring',
    slug: 'elden-ring',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    releaseYear: 2022,
    genres: ['Action', 'RPG', 'Souls-like'],
    platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X', 'Xbox One'],
    esrbRating: 'M',
    rating: 9.6,
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/E3Huy2cdih0',
    description: 'ELDEN RING, developed by FromSoftware and produced in collaboration with George R. R. Martin, is a fantasy action-RPG adventure set within a world created by the legendary authors.',
    story: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    features: [
      'Vast interconnected open world',
      'Deep character build variety',
      'Challenging boss encounters',
      'Cooperative and PvP multiplayer',
      'Story by George R. R. Martin',
    ],
    characters: [
      { name: 'Tarnished', role: 'Protagonist', description: 'A customizable warrior seeking the Elden Ring.' },
      { name: 'Melina', role: 'Guide', description: 'A mysterious maiden who offers guidance.' },
      { name: 'Ranni the Witch', role: 'NPC', description: 'A powerful empyrean with her own agenda.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GTX 1060 3GB',
      storage: '60 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-8700K',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3060 Ti',
      storage: '60 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 41.99, discount: 30, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 69.99, currentPrice: 48.99, discount: 30, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 59.99, currentPrice: 41.99, discount: 30, url: '#' },
    ],
  },
  {
    id: '6',
    title: 'The Witcher 3: Wild Hunt',
    slug: 'witcher-3-wild-hunt',
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    releaseYear: 2015,
    genres: ['RPG', 'Action', 'Open World'],
    platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X', 'Xbox One', 'Switch'],
    esrbRating: 'M',
    rating: 9.8,
    coverImage: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/c0i88t0Kacs',
    description: 'The Witcher 3: Wild Hunt is a story-driven, open world adventure set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.',
    story: 'As Geralt of Rivia, a professional monster hunter, embark on an epic journey to find your adopted daughter, Ciri, while the Wild Hunt closes in.',
    features: [
      'Massive open world with 100+ hours of content',
      'Deep branching storylines',
      'Tactical real-time combat',
      'Monster hunting contracts',
      'Gwent card game minigame',
    ],
    characters: [
      { name: 'Geralt of Rivia', role: 'Protagonist', description: 'A legendary witcher and monster hunter.' },
      { name: 'Ciri', role: 'Key Character', description: 'Geralt\'s adopted daughter with Elder Blood.' },
      { name: 'Yennefer', role: 'Sorceress', description: 'A powerful sorceress and Geralt\'s love interest.' },
    ],
    minimumRequirements: {
      os: 'Windows 7 64-bit',
      processor: 'Intel Core i5-2500K',
      memory: '6 GB RAM',
      graphics: 'NVIDIA GTX 660',
      storage: '50 GB available space',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7 3770',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 770',
      storage: '50 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 39.99, currentPrice: 7.99, discount: 80, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 39.99, currentPrice: 9.99, discount: 75, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 39.99, currentPrice: 9.99, discount: 75, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 39.99, currentPrice: 9.99, discount: 75, url: '#' },
    ],
  },
  {
    id: '7',
    title: 'Hogwarts Legacy',
    slug: 'hogwarts-legacy',
    developer: 'Avalanche Software',
    publisher: 'Warner Bros. Games',
    releaseYear: 2023,
    genres: ['Action', 'RPG', 'Adventure'],
    platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X', 'Xbox One', 'Switch'],
    esrbRating: 'T',
    rating: 8.8,
    coverImage: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1596466090785-56cdff9b41eb?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/1O6Qstncpnc',
    description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Experience Hogwarts in the 1800s.',
    story: 'Your character holds the key to an ancient secret that threatens to tear the wizarding world apart. Discover what lies behind the goblin rebellion and dark wizard alliance.',
    features: [
      'Explore Hogwarts and surrounding areas',
      'Learn and master magical spells',
      'Brew potions and grow magical plants',
      'Tame and ride magical beasts',
      'Choose your own path with moral choices',
    ],
    characters: [
      { name: 'Player Character', role: 'Protagonist', description: 'A late-admission student with a unique magical gift.' },
      { name: 'Professor Fig', role: 'Mentor', description: 'A professor who helps uncover the ancient mystery.' },
      { name: 'Sebastian Sallow', role: 'Companion', description: 'A Slytherin student with a troubled past.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GTX 960 4GB',
      storage: '85 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 2080',
      storage: '85 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 69.99, currentPrice: 41.99, discount: 40, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
    ],
  },
  {
    id: '8',
    title: 'Baldur\'s Gate 3',
    slug: 'baldurs-gate-3',
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    releaseYear: 2023,
    genres: ['RPG', 'Strategy', 'Turn-Based'],
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    esrbRating: 'M',
    rating: 9.9,
    coverImage: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/1T22wNvoNiU',
    description: 'Baldur\'s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons. Gather your party and return to the Forgotten Realms.',
    story: 'A parasite has been implanted in your brain, threatening to transform you into a mind flayer. Resist and turn it against those who have wronged you, or embrace corruption.',
    features: [
      'Full D&D 5th Edition ruleset',
      'Deep character creation',
      'Turn-based tactical combat',
      'Meaningful choices and consequences',
      'Co-op multiplayer for up to 4 players',
    ],
    characters: [
      { name: 'Custom Character', role: 'Protagonist', description: 'Your created hero infected with a mind flayer tadpole.' },
      { name: 'Shadowheart', role: 'Companion', description: 'A half-elf cleric of Shar with hidden secrets.' },
      { name: 'Astarion', role: 'Companion', description: 'A vampire spawn rogue seeking freedom.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-4690',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '150 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700K',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 2060 Super',
      storage: '150 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 59.99, discount: 0, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 69.99, currentPrice: 69.99, discount: 0, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 69.99, currentPrice: 69.99, discount: 0, url: '#' },
    ],
  },
  {
    id: '9',
    title: 'Spider-Man 2',
    slug: 'spider-man-2',
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    releaseYear: 2023,
    genres: ['Action', 'Adventure', 'Superhero'],
    platforms: ['PS5'],
    esrbRating: 'T',
    rating: 9.3,
    coverImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/nq1M_Wc4FIc',
    description: 'Spider-Man 2 features both Peter Parker and Miles Morales swinging through Marvel\'s New York, facing iconic villains like Venom and Kraven.',
    story: 'Peter Parker and Miles Morales must face new threats in an expanded Marvel\'s New York. The symbiote suit brings power and peril to Peter as Kraven hunts the city\'s super-powered.',
    features: [
      'Play as both Spider-Men',
      'Expanded New York map',
      'New web wings for gliding',
      'Symbiote suit abilities',
      'Seamless character switching',
    ],
    characters: [
      { name: 'Peter Parker', role: 'Protagonist', description: 'The experienced Spider-Man facing new challenges.' },
      { name: 'Miles Morales', role: 'Protagonist', description: 'The young Spider-Man coming into his own.' },
      { name: 'Venom', role: 'Antagonist', description: 'A deadly symbiote threat.' },
    ],
    minimumRequirements: {
      os: 'PS5 Console',
      processor: 'AMD Zen 2',
      memory: '16 GB Unified',
      graphics: 'AMD RDNA 2',
      storage: '98 GB SSD',
    },
    recommendedRequirements: {
      os: 'PS5 Console',
      processor: 'AMD Zen 2',
      memory: '16 GB Unified',
      graphics: 'AMD RDNA 2',
      storage: '98 GB SSD',
    },
    prices: [
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 69.99, currentPrice: 49.99, discount: 29, url: '#' },
    ],
  },
  {
    id: '10',
    title: 'Starfield',
    slug: 'starfield',
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
    releaseYear: 2023,
    genres: ['RPG', 'Sci-Fi', 'Open World'],
    platforms: ['PC', 'Xbox Series X'],
    esrbRating: 'M',
    rating: 8.3,
    coverImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/kfYEiTdsGCY',
    description: 'Starfield is the first new universe in 25 years from Bethesda Game Studios. In this next generation role-playing game, explore over 1000 planets.',
    story: 'Join Constellation, humanity\'s last group of space explorers, as you uncover the mysteries of the Settled Systems and the artifacts scattered across the galaxy.',
    features: [
      'Over 1000 explorable planets',
      'Deep ship customization',
      'Base building on any planet',
      'Faction-based storytelling',
      'Extensive modding support',
    ],
    characters: [
      { name: 'Custom Character', role: 'Protagonist', description: 'A new member of Constellation exploring the stars.' },
      { name: 'Sarah Morgan', role: 'Companion', description: 'Leader of Constellation and potential companion.' },
      { name: 'Sam Coe', role: 'Companion', description: 'A former Freestar Ranger and cowboy at heart.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'AMD Ryzen 5 2600X',
      memory: '16 GB RAM',
      graphics: 'AMD Radeon RX 5700',
      storage: '125 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'AMD Ryzen 5 3600X',
      memory: '16 GB RAM',
      graphics: 'AMD Radeon RX 6800 XT',
      storage: '125 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 69.99, currentPrice: 48.99, discount: 30, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 69.99, currentPrice: 48.99, discount: 30, url: '#' },
    ],
  },
  {
    id: '11',
    title: 'Horizon Forbidden West',
    slug: 'horizon-forbidden-west',
    developer: 'Guerrilla Games',
    publisher: 'Sony Interactive Entertainment',
    releaseYear: 2022,
    genres: ['Action', 'RPG', 'Open World'],
    platforms: ['PC', 'PS5', 'PS4'],
    esrbRating: 'T',
    rating: 9.1,
    coverImage: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1496850574977-a4607106a874?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/Lq594XmpPBg',
    description: 'Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats. Explore distant lands, fight bigger machines, and more.',
    story: 'The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity. Aloy must journey into the Forbidden West to find answers and save the world.',
    features: [
      'Stunning open world environments',
      'New machine types to battle',
      'Underwater exploration',
      'Enhanced combat and tools',
      'Deep story continuation',
    ],
    characters: [
      { name: 'Aloy', role: 'Protagonist', description: 'A skilled hunter seeking to save the world.' },
      { name: 'Sylens', role: 'Ally', description: 'A mysterious figure with his own agenda.' },
      { name: 'Varl', role: 'Companion', description: 'A loyal friend from the Nora tribe.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i3-8100',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GTX 1650 4GB',
      storage: '150 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-8600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3060',
      storage: '150 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
      { store: 'epic', storeName: 'Epic Games', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 69.99, currentPrice: 39.99, discount: 43, url: '#' },
    ],
  },
  {
    id: '12',
    title: 'Resident Evil 4 Remake',
    slug: 'resident-evil-4-remake',
    developer: 'Capcom',
    publisher: 'Capcom',
    releaseYear: 2023,
    genres: ['Horror', 'Action', 'Survival'],
    platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X'],
    esrbRating: 'M',
    rating: 9.4,
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0e?w=1920&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=450&fit=crop',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=450&fit=crop',
    ],
    trailerUrl: 'https://www.youtube.com/embed/Wt3PlW5mFq8',
    description: 'Survival horror redefined. Six years after the biological disaster in Raccoon City, Leon Kennedy is sent to rescue the U.S. President\'s kidnapped daughter.',
    story: 'Leon S. Kennedy, now a U.S. government agent, embarks on a mission to rescue Ashley Graham, the President\'s daughter, who has been kidnapped by a mysterious cult.',
    features: [
      'Modernized gameplay and visuals',
      'Expanded story content',
      'New stealth mechanics',
      'Enhanced enemy AI',
      'Classic RE4 gameplay reimagined',
    ],
    characters: [
      { name: 'Leon S. Kennedy', role: 'Protagonist', description: 'A government agent on a rescue mission.' },
      { name: 'Ashley Graham', role: 'Key Character', description: 'The President\'s kidnapped daughter.' },
      { name: 'Ada Wong', role: 'Ally', description: 'A mysterious spy with her own mission.' },
    ],
    minimumRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'AMD Ryzen 3 1200',
      memory: '8 GB RAM',
      graphics: 'AMD Radeon RX 560',
      storage: '60 GB SSD',
    },
    recommendedRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'AMD Radeon RX 5700',
      storage: '60 GB SSD',
    },
    prices: [
      { store: 'steam', storeName: 'Steam', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
      { store: 'playstation', storeName: 'PlayStation', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
      { store: 'xbox', storeName: 'Xbox', originalPrice: 59.99, currentPrice: 35.99, discount: 40, url: '#' },
    ],
  },
];

export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find((game) => game.slug === slug);
};

export const getGameById = (id: string): Game | undefined => {
  return games.find((game) => game.id === id);
};

export const getGamesByGenre = (genre: string): Game[] => {
  return games.filter((game) => game.genres.includes(genre));
};

export const getGamesByPlatform = (platform: string): Game[] => {
  return games.filter((game) => game.platforms.includes(platform as any));
};

export const getAllGenres = (): string[] => {
  const genres = new Set<string>();
  games.forEach((game) => game.genres.forEach((g) => genres.add(g)));
  return Array.from(genres).sort();
};

export const getAllPlatforms = (): string[] => {
  const platforms = new Set<string>();
  games.forEach((game) => game.platforms.forEach((p) => platforms.add(p)));
  return Array.from(platforms);
};

export const getFeaturedGames = (count: number = 6): Game[] => {
  return games.sort((a, b) => b.rating - a.rating).slice(0, count);
};

export const searchGames = (query: string): Game[] => {
  const lowerQuery = query.toLowerCase();
  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(lowerQuery) ||
      game.genres.some((g) => g.toLowerCase().includes(lowerQuery)) ||
      game.developer.toLowerCase().includes(lowerQuery)
  );
};
