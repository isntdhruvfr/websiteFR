import { motion } from 'framer-motion';
import { getFeaturedGames } from '@/data/games';
import { GameCard } from './GameCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedGames = () => {
  const featuredGames = getFeaturedGames(6);

  return (
    <section className="py-20 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="gradient-text">Games</span>
            </h2>
            <p className="text-muted-foreground">Top-rated games handpicked for you</p>
          </div>
          <Link
            to="/games"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View All
            <ChevronRight size={20} />
          </Link>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/games" className="btn-ghost-neon inline-flex items-center gap-2">
            View All Games
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
