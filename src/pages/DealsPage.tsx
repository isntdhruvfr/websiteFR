import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { games } from '@/data/games';
import { Link } from 'react-router-dom';
import { Flame, Percent, TrendingDown, ArrowRight } from 'lucide-react';

const DealsPage = () => {
  // Get games with discounts, sorted by discount percentage
  const dealsGames = games
    .map((game) => {
      const bestDeal = game.prices.reduce((best, price) => 
        price.discount > best.discount ? price : best, 
        { discount: 0, currentPrice: 0, originalPrice: 0, store: '', storeName: '', url: '' }
      );
      return { ...game, bestDeal };
    })
    .filter((game) => game.bestDeal.discount > 0)
    .sort((a, b) => b.bestDeal.discount - a.bestDeal.discount);

  const topDeals = dealsGames.slice(0, 3);
  const otherDeals = dealsGames.slice(3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-neon-pink" />
              </div>
              <span className="badge-discount">Hot Deals</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Best <span className="gradient-text">Deals</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              We compare prices across Steam, Epic Games, PlayStation, and Xbox to find you the best deals. 
              Save up to 80% on your favorite games.
            </p>
          </motion.div>

          {/* Top Deals - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingDown className="text-neon-green" />
              Top Discounts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topDeals.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link to={`/games/${game.slug}`} className="block">
                    <div className="glass-card-strong rounded-2xl overflow-hidden group hover:neon-border-cyan transition-all duration-300">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={game.bannerImage}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        
                        {/* Discount Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="badge-discount text-lg px-3 py-1">
                            -{game.bestDeal.discount}%
                          </div>
                        </div>

                        {/* Best Value Badge for #1 */}
                        {index === 0 && (
                          <div className="absolute top-4 left-4">
                            <div className="badge-best-value">🔥 Best Deal</div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {game.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-muted-foreground line-through text-sm">
                              ${game.bestDeal.originalPrice}
                            </span>
                            <span className="text-2xl font-bold text-neon-green">
                              ${game.bestDeal.currentPrice}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            on {game.bestDeal.storeName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Deals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <Percent className="text-primary" />
              More Deals
            </h2>

            <div className="space-y-4">
              {otherDeals.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <Link to={`/games/${game.slug}`}>
                    <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:neon-border-purple transition-all duration-300 group">
                      {/* Thumbnail */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={game.coverImage}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                          {game.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{game.genres[0]}</span>
                          <span>•</span>
                          <span>{game.releaseYear}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="badge-discount text-sm">-{game.bestDeal.discount}%</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground line-through">
                            ${game.bestDeal.originalPrice}
                          </span>
                          <span className="font-bold text-neon-green">
                            ${game.bestDeal.currentPrice}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {otherDeals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No additional deals available at the moment.</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DealsPage;
