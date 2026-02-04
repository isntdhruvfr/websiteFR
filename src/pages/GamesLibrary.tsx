import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GameCard } from '@/components/GameCard';
import { games, getAllGenres, getAllPlatforms, searchGames } from '@/data/games';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

const GamesLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'year'>('rating');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const genres = getAllGenres();
  const platforms = getAllPlatforms();

  const filteredGames = useMemo(() => {
    let result = searchQuery ? searchGames(searchQuery) : [...games];

    if (selectedGenre) {
      result = result.filter((game) => game.genres.includes(selectedGenre));
    }

    if (selectedPlatform) {
      result = result.filter((game) => game.platforms.includes(selectedPlatform as any));
    }

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'year':
        result.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
    }

    return result;
  }, [searchQuery, selectedGenre, selectedPlatform, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGenre(null);
    setSelectedPlatform(null);
    setSortBy('rating');
  };

  const hasActiveFilters = searchQuery || selectedGenre || selectedPlatform;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Game <span className="gradient-text">Library</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover and explore our collection of {games.length}+ games
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search games by name, genre, or developer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-glass w-full pl-12 py-4"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden btn-ghost-neon flex items-center justify-center gap-2"
              >
                <Filter size={18} />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-primary rounded-full" />
                )}
              </button>
            </div>

            {/* Desktop Filters */}
            <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="glass-card p-4 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                  {/* Genre Filter */}
                  <div className="relative">
                    <label className="block text-sm text-muted-foreground mb-2 lg:hidden">Genre</label>
                    <select
                      value={selectedGenre || ''}
                      onChange={(e) => setSelectedGenre(e.target.value || null)}
                      className="input-glass pr-10 appearance-none cursor-pointer min-w-[160px]"
                    >
                      <option value="">All Genres</option>
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 lg:top-1/2 text-muted-foreground pointer-events-none" size={18} />
                  </div>

                  {/* Platform Filter */}
                  <div className="relative">
                    <label className="block text-sm text-muted-foreground mb-2 lg:hidden">Platform</label>
                    <select
                      value={selectedPlatform || ''}
                      onChange={(e) => setSelectedPlatform(e.target.value || null)}
                      className="input-glass pr-10 appearance-none cursor-pointer min-w-[160px]"
                    >
                      <option value="">All Platforms</option>
                      {platforms.map((platform) => (
                        <option key={platform} value={platform}>{platform}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 lg:top-1/2 text-muted-foreground pointer-events-none" size={18} />
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <label className="block text-sm text-muted-foreground mb-2 lg:hidden">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="input-glass pr-10 appearance-none cursor-pointer min-w-[160px]"
                    >
                      <option value="rating">Top Rated</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="year">Newest First</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 lg:top-1/2 text-muted-foreground pointer-events-none" size={18} />
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      <X size={16} />
                      Clear All
                    </button>
                  )}

                  <div className="ml-auto text-sm text-muted-foreground">
                    {filteredGames.length} games found
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Games Grid */}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">No Games Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <button onClick={clearFilters} className="btn-ghost-neon">
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GamesLibrary;
