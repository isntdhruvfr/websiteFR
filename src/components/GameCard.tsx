import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
  index?: number;
}

export const GameCard = ({ game, index = 0 }: GameCardProps) => {
  const lowestPrice = game.prices.reduce((min, p) => 
    p.currentPrice < min.currentPrice ? p : min, game.prices[0]
  );
  const hasDiscount = lowestPrice.discount > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/games/${game.slug}`} className="block">
        <div className="game-card group">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={game.coverImage}
              alt={game.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
            
            {/* Rating Badge */}
            <div className="absolute top-3 right-3 glass-card-strong px-2 py-1 rounded-md">
              <span className="text-sm font-bold text-neon-cyan">{game.rating}</span>
            </div>
            
            {/* Discount Badge */}
            {hasDiscount && (
              <div className="absolute top-3 left-3 badge-discount">
                -{lowestPrice.discount}%
              </div>
            )}
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-display text-lg font-bold text-foreground mb-1 line-clamp-2">
                {game.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {game.genres.slice(0, 2).map((genre) => (
                  <span
                    key={genre}
                    className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{game.releaseYear}</span>
                <div className="flex items-center gap-2">
                  {hasDiscount && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${lowestPrice.originalPrice}
                    </span>
                  )}
                  <span className="font-bold text-neon-green">
                    ${lowestPrice.currentPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
